// The record of a running story (METHODOLOGY 20, from 24 November 2026): every earlier claim of the same case, with what
// we published and how it came out. Run by the dossier agent of the evening desk for every claim whose story continues a
// case, and pasted into the two files of the claim:
//   - the "Case record" block goes into the dossier (outcomes are facts);
//   - the "Our earlier figures" block goes into the signals file (they are probabilities, so the blind estimate stays blind).
//
//   node scripts/case-ledger.mjs <case_key> [--before YYYY-MM-DD] [--series <claim id>]
//   node scripts/case-ledger.mjs --planning <YYYY-MM-DD>      one record per story of data/planning/<date>.json
//   node scripts/case-ledger.mjs --list                       case keys with at least two earlier claims
//
// --before leaves out editions dated on or after that day (use the date of the edition being prepared).
// --series adds the earlier claims that ask the same thing day after day: the same id once the trailing day number is cut,
// where that number is the day of the edition or the same stem has run in three editions or more. They are looked for in every
// case, because case keys have been renamed. Check that they do ask the same thing before using the count.
// The script reads only this repository: nothing here is a search and nothing is invented.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEditions, claimsOf, resultsFor, caseKey, isInterval } from './lib.mjs';

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const before = opt('--before');
const pct = (p) => `${Math.round(p * 100)}%`;
const stem = (id) => String(id).replace(/-\d+$/, '');
const dayId = (id, edition) => { const m = /-(\d{1,2})$/.exec(String(id)); return !!m && Number(m[1]) === Number(String(edition).slice(8, 10)); };

/** Earlier resolved yes/no claims that repeat the question of `seriesId` (see --series above). */
export function seriesRows(editions, seriesId, beforeDate = null) {
  const rows = [];
  if (!seriesId || !/-\d{1,2}$/.test(seriesId)) return rows;
  // A stem counts as a daily series when its number is the edition's day, or when it has run in three editions or more.
  const eds = new Set();
  for (const ed of editions) for (const c of claimsOf(ed)) if (!isInterval(c) && /-\d{1,3}$/.test(c.id) && stem(c.id) === stem(seriesId)) eds.add(ed.id);
  const repeated = eds.size >= 3;
  for (const ed of editions) {
    if (beforeDate && ed.id >= beforeDate) continue;
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) {
      if (isInterval(c) || !/-\d{1,3}$/.test(c.id) || stem(c.id) !== stem(seriesId) || !(repeated || dayId(c.id, ed.id))) continue;
      const r = results.get(c.id);
      if (r && (r.outcome === 'yes' || r.outcome === 'no')) rows.push({ edition: ed.id, id: c.id, morning: c.morning ?? c.probability, outcome: r.outcome });
    }
  }
  return rows;
}

export function caseRows(editions, key, beforeDate = null) {
  const rows = [];
  for (const ed of editions) {
    if (beforeDate && ed.id >= beforeDate) continue;
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) {
      if (caseKey(c) !== key) continue;
      const r = results.get(c.id) || null;
      rows.push({ edition: ed.id, events: ed.events_date || null, id: c.id, label: c.label || c.text, interval: isInterval(c), morning: c.morning ?? c.probability ?? null,
        quantiles: c.morning_quantiles || c.quantiles || null, outcome: r ? r.outcome : 'pending', value: r?.value ?? null, held: r?.held, note: r?.note || '' });
    }
  }
  return rows.sort((a, b) => (a.edition < b.edition ? -1 : a.edition > b.edition ? 1 : a.id < b.id ? -1 : 1));
}

export function ledgerText(key, rows, seriesId = null, series = []) {
  if (!rows.length && !series.length) return `## Case record: ${key}\nNo earlier claim of this case in our editions.\n`;
  const bin = rows.filter((r) => !r.interval), done = bin.filter((r) => r.outcome === 'yes' || r.outcome === 'no');
  const outcomeOf = (r) => (r.interval ? (r.outcome === 'measured' ? `measured ${r.value}` : r.outcome) : r.outcome === 'yes' ? 'happened' : r.outcome === 'no' ? (r.held === false ? 'did not happen (the event did not take place in the window)' : 'did not happen') : r.outcome);
  let facts = `## Case record: ${key}\nEarlier claims of this running story in our editions, oldest first (${rows.length}; ${rows.filter((r) => r.outcome === 'pending').length} still pending). Outcomes are from data/resolutions.\n`;
  for (const r of rows) facts += `- edition ${r.edition}${r.events ? ` (events of ${r.events})` : ''}, ${r.id}: ${r.label} — ${outcomeOf(r)}\n`;
  if (seriesId) {
    const s = series;
    if (s.length) facts += `Same question asked before (${stem(seriesId)}, matched by claim id: check that the earlier claims ask the same thing, thresholds included): happened ${s.filter((r) => r.outcome === 'yes').length} of ${s.length} times${s.length < 10 ? ' (fewer than ten cases: a hint, not a rate)' : ''}.\n`;
  }
  let sig = `## Our earlier figures in this case: ${key}\nOur own published morning figures; probabilities, so they belong in the signals file.\n`;
  for (const r of rows) {
    const fig = r.interval ? (r.quantiles ? `range ${r.quantiles.q10}–${r.quantiles.q90}, centre ${r.quantiles.q50}` : 'range') : r.morning === null ? 'no figure' : pct(r.morning);
    const mark = r.interval ? (r.outcome === 'measured' && r.quantiles ? (r.value >= r.quantiles.q10 && r.value <= r.quantiles.q90 ? 'inside' : 'outside') : r.outcome) : r.outcome === 'yes' || r.outcome === 'no' ? ((r.morning > 0.5) === (r.outcome === 'yes') ? 'right side' : 'wrong side') : r.outcome;
    sig += `- ${r.edition} ${r.id}: ${fig} — ${outcomeOf(r)} (${mark})\n`;
  }
  if (done.length) {
    const conf = done.map((r) => Math.max(r.morning, 1 - r.morning)), right = done.filter((r) => (r.morning > 0.5) === (r.outcome === 'yes')).length;
    const brier = done.reduce((s, r) => s + (r.morning - (r.outcome === 'yes' ? 1 : 0)) ** 2, 0) / done.length;
    const lean = done.reduce((s, r) => s + ((r.outcome === 'yes' ? 1 : 0) - r.morning), 0) / done.length;
    sig += `Resolved yes/no claims: ${done.length}. We stated ${pct(conf.reduce((a, b) => a + b, 0) / conf.length)} on average for the side we favoured and were right ${right} of ${done.length} times (Brier ${brier.toFixed(3)}; a coin scores 0.250).\n`;
    if (done.length >= 2) sig += `On average the outcome was ${Math.abs(lean) < 0.03 ? 'neither above nor below' : lean > 0 ? `${Math.round(lean * 100)} points more often yes than` : `${Math.round(-lean * 100)} points more often no than`} our figures.\n`;
  }
  if (seriesId && series.length >= 2) sig += `The same question (${stem(seriesId)}): we stated ${pct(series.reduce((a, r) => a + r.morning, 0) / series.length)} on average for yes; it happened ${series.filter((r) => r.outcome === 'yes').length} of ${series.length} times.\n`;
  return `${facts}\n${sig}`;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) {
  const editions = loadEditions();
  if (args.includes('--list')) {
    const n = new Map();
    for (const ed of editions) for (const c of claimsOf(ed)) n.set(caseKey(c), (n.get(caseKey(c)) || 0) + 1);
    for (const [k, v] of [...n].filter(([, v]) => v >= 2).sort((a, b) => b[1] - a[1])) console.log(`${String(v).padStart(3)}  ${k}`);
  } else if (opt('--planning')) {
    const date = opt('--planning'), file = path.join(ROOT, 'data', 'planning', `${date}.json`);
    if (!fs.existsSync(file)) { console.error(`no planning file ${file}`); process.exit(2); }
    const plan = JSON.parse(fs.readFileSync(file, 'utf8'));
    for (const st of plan.stories || []) {
      if (!st.case_key) { console.log(`## Story ${st.id}: no case_key yet\n`); continue; }
      const rows = caseRows(editions, st.case_key, before || date);
      console.log(`# Story ${st.id}`);
      for (const c of st.claims || [{ id: null }]) { console.log(`### for claim ${c.id}`); console.log(ledgerText(st.case_key, rows, c.id, seriesRows(editions, c.id, before || date))); }
    }
  } else if (args[0] && !args[0].startsWith('--')) {
    console.log(ledgerText(args[0], caseRows(editions, args[0], before), opt('--series'), seriesRows(editions, opt('--series'), before)));
  } else {
    console.error('usage: node scripts/case-ledger.mjs <case_key> [--before YYYY-MM-DD] [--series <claim id>] | --planning <YYYY-MM-DD> | --list');
    process.exit(2);
  }
}
