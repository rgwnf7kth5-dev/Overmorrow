#!/usr/bin/env node
// Policy-rate changes of ČNB, ECB and Fed from the banks' own published tables.
//
//   node scripts/refdata/central-banks.mjs [--refresh]
//
// Output: pipeline/reference-data/central-banks.json
// Only rate CHANGES are listed: the three official tables record the date from which a new
// rate applies, not meetings at which rates were held. Consensus matching (Reuters polls) is
// only filled in where it has been verified; see `consensus_verified` below.
import fs from 'node:fs';
import path from 'node:path';
import { CACHE, OUT, download, round } from './lib.mjs';

const DIR = path.join(CACHE, 'central-banks');
const SINCE = '2022-01-01';
const refresh = process.argv.includes('--refresh');
const SRC = {
  cnb: 'https://www.cnb.cz/cs/casto-kladene-dotazy/.galleries/vyvoj_repo_historie.txt',
  ecb: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html',
  fed: 'https://www.federalreserve.gov/monetarypolicy/openmarket.htm',
};
const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12, January: 1, February: 2, March: 3, April: 4, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12 };
const iso = (y, m, d) => `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
const strip = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&minus;|−/g, '-').replace(/\s+/g, ' ');

function cnb(text) {
  // PLATNA_OD|CNB_REPO_SAZBA_V_%  e.g. 20231222|6,75
  const rows = text.replace(/^﻿/, '').trim().split(/\r?\n/).slice(1).map((l) => l.split('|'));
  const all = rows.map(([d, r]) => ({ effective: iso(d.slice(0, 4), d.slice(4, 6), d.slice(6, 8)), rate: Number(r.replace(',', '.')) }));
  return all
    .map((r, i) => ({ ...r, change_bp: i ? Math.round((r.rate - all[i - 1].rate) * 100) : null }))
    .filter((r) => r.effective >= SINCE)
    .map((r) => ({ effective: r.effective, rate: '2W repo ' + r.rate.toFixed(2), change_bp: r.change_bp }));
}

function ecb(html) {
  // "Date (with effect from) Deposit facility ..." then rows "2026 16 Sep. 2.50 2.65 - 2.90" (year only on first row of a year)
  const t = strip(html);
  const body = t.slice(t.indexOf('Date (with effect from)'));
  const re = /(?:(\d{4}) )?(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\.? (?:\d )?(-?\d+\.\d\d) /g;
  let m, year, out = [];
  while ((m = re.exec(body))) {
    if (m[1]) year = m[1];
    out.push({ effective: iso(year, MONTHS[m[3]], m[2]), dfr: Number(m[4]) });
    if (Number(year) < 2019) break;
  }
  out.sort((a, b) => a.effective.localeCompare(b.effective));
  return out
    .map((r, i) => ({ effective: r.effective, rate: 'deposit facility ' + r.dfr.toFixed(2), change_bp: i ? Math.round((r.dfr - out[i - 1].dfr) * 100) : null }))
    .filter((r) => r.effective >= SINCE);
}

function fed(html) {
  const t = strip(html);
  const out = [];
  const yearRe = /(20\d\d) Date Increase Decrease Level \(%\) (.*?) Back to year navigation/g;
  let ym;
  while ((ym = yearRe.exec(t))) {
    const y = ym[1];
    const rowRe = /(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2})\s?\*? (\d+|\.\.\.) (\d+|\.\.\.) ([\d.]+-[\d.]+|[\d.]+)/g;
    let r;
    while ((r = rowRe.exec(ym[2]))) {
      const inc = r[3] === '...' ? 0 : Number(r[3]);
      const dec = r[4] === '...' ? 0 : Number(r[4]);
      out.push({ effective: iso(y, MONTHS[r[1]], r[2]), rate: 'fed funds target ' + r[5], change_bp: inc - dec });
    }
  }
  return out.filter((r) => r.effective >= SINCE).sort((a, b) => a.effective.localeCompare(b.effective));
}

// Consensus checks verified against named reporting. Key: bank|effective date.
// Left empty on purpose until each row is checked against a Reuters poll or equivalent;
// never fill from memory.
const CONSENSUS = {};

async function main() {
  const files = {};
  for (const [k, url] of Object.entries(SRC)) {
    const dest = path.join(DIR, `${k}${k === 'cnb' ? '.txt' : '.html'}`);
    await download(url, dest, { force: refresh });
    files[k] = fs.readFileSync(dest, 'utf8');
  }
  const banks = {
    cnb: { name: 'Česká národní banka', source: SRC.cnb, changes: cnb(files.cnb) },
    ecb: { name: 'European Central Bank', source: SRC.ecb, changes: ecb(files.ecb) },
    fed: { name: 'Federal Reserve (FOMC)', source: SRC.fed, changes: fed(files.fed) },
  };
  for (const [k, b] of Object.entries(banks)) {
    for (const c of b.changes) {
      const v = CONSENSUS[`${k}|${c.effective}`];
      if (v) Object.assign(c, v);
    }
    const checked = b.changes.filter((c) => typeof c.matched_consensus === 'boolean');
    b.n_changes = b.changes.length;
    b.consensus_summary = checked.length
      ? { n_verified: checked.length, share_matching: round(checked.filter((c) => c.matched_consensus).length / checked.length, 3) }
      : { n_verified: 0, share_matching: null, note: 'No consensus comparison verified yet; see README.' };
  }
  const out = {
    _about: 'Policy-rate changes since ' + SINCE + ' from the official tables of each central bank, built by scripts/refdata/central-banks.mjs. Dates are the dates from which the new rate applies (ČNB: day after the board meeting; ECB: “with effect from”, usually the Wednesday after the meeting; Fed: the table date, the day after the FOMC statement). Holds are not in these tables and are therefore not listed.',
    definitions: {
      change_bp: 'New rate minus previous rate in basis points (ČNB 2-week repo rate; ECB deposit facility rate; Fed: upper and lower bound move together).',
      matched_consensus: 'true if the decision equalled the median expectation of the Reuters poll of economists published before the meeting (field consensus_source cites it). Only set where verified.',
    },
    retrieved: new Date().toISOString().slice(0, 10),
    since: SINCE,
    banks,
  };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'central-banks.json'), JSON.stringify(out, null, 2) + '\n');
  console.error('wrote pipeline/reference-data/central-banks.json');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
