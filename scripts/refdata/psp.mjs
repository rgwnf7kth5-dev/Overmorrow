#!/usr/bin/env node
// Czech Chamber of Deputies reference data from the psp.cz open data.
//
//   node scripts/refdata/psp.mjs            # download (if not cached), parse, write JSON
//   node scripts/refdata/psp.mjs --refresh  # force a fresh download
//
// Format description: https://www.psp.cz/sqw/hp.sqw?k=1300 (and k=1301, 1302, 1303, 1308).
// UNL files are pipe-separated, Windows-1250 encoded, one record per line.
// Output: pipeline/reference-data/cz-chamber.json
import fs from 'node:fs';
import path from 'node:path';
import { CACHE, OUT, download, unzip, mean, sd, quantile, round } from './lib.mjs';

const BASE = 'https://www.psp.cz/eknih/cdrom/opendata/';
const ZIPS = ['poslanci.zip', 'hl-2021ps.zip', 'hl-2025ps.zip', 'tisky.zip', 'schuze.zip'];
const DIR = path.join(CACHE, 'psp');
const refresh = process.argv.includes('--refresh');

// ---------------------------------------------------------------- terms and coalitions
// Clubs are psp.cz organ ids (organy.unl, id_typ_organu = 1 "Klub").
// Government periods: start = appointment of the government (organy.unl organ of type 5),
// end of the Pirates' participation = end of Ivan Bartoš's ministerial functions in
// zarazeni.unl (2024-09-30 20:00); both read from the same open data.
const TERMS = [
  {
    id: '2021-2025',
    label: '9th term (PSP9, 2021-2025)',
    organ: '173',
    from: '2021-10-09',
    to: '2025-10-08',
    hlZip: 'hl-2021ps.zip',
    hlFiles: ['hl2021s.unl'],
    hlPoslanec: ['hl2021h1.unl', 'hl2021h2.unl'],
    coalitions: [
      {
        id: 'fiala-5',
        label: 'Fiala government, five clubs (ODS, STAN, KDU-ČSL, TOP 09, Piráti)',
        from: '2021-12-17 11:00',
        to: '2024-09-30 20:00',
        clubs: { '1538': 'ODS', '1536': 'STAN', '1539': 'KDU-ČSL', '1541': 'TOP 09', '1535': 'Piráti' },
      },
      {
        id: 'fiala-4',
        label: 'Fiala government after the Pirates left (ODS, STAN, KDU-ČSL, TOP 09)',
        from: '2024-10-01 00:00',
        to: '2025-10-08 23:59',
        clubs: { '1538': 'ODS', '1536': 'STAN', '1539': 'KDU-ČSL', '1541': 'TOP 09' },
      },
    ],
  },
  {
    id: '2025-',
    label: '10th term (PSP10, 2025-)',
    organ: '174',
    from: '2025-10-04',
    to: '2099-12-31',
    hlZip: 'hl-2025ps.zip',
    hlFiles: ['hl2025s.unl'],
    hlPoslanec: ['hl2025h1.unl', 'hl2025h2.unl'],
    coalitions: [
      {
        id: 'babis-3',
        label: 'Babiš government (ANO, SPD, Motoristé sobě)',
        from: '2025-12-15 00:00',
        to: '2099-12-31 23:59',
        clubs: { '1750': 'ANO', '1746': 'SPD', '1749': 'Motoristé' },
      },
    ],
  },
];

// ---------------------------------------------------------------- download + parse
const dec = new TextDecoder('windows-1250');
const read = (f) => {
  const p = path.join(DIR, 'x', f);
  if (!fs.existsSync(p)) return [];
  return dec.decode(fs.readFileSync(p)).split('\n').filter((l) => l.length).map((l) => l.split('|'));
};
const czDate = (d) => `${d.slice(6, 10)}-${d.slice(3, 5)}-${d.slice(0, 2)}`; // dd.mm.yyyy -> ISO

async function fetchAll() {
  for (const z of ZIPS) {
    const r = await download(BASE + z, path.join(DIR, z), { force: refresh });
    console.error(`${z}: ${r.cached ? 'cached' : 'downloaded'}`);
  }
  // hl-2021ps and hl-2025ps both contain omluvy.unl / zmatecne.unl (identical); later wins.
  for (const z of ZIPS) unzip(path.join(DIR, z), path.join(DIR, 'x'));
}

function stats(xs) {
  if (!xs.length) return null;
  return {
    n: xs.length,
    mean: round(mean(xs), 3),
    sd: round(sd(xs), 3),
    min: Math.min(...xs),
    q05: round(quantile(xs, 0.05), 3),
    q10: round(quantile(xs, 0.1), 3),
    q25: round(quantile(xs, 0.25), 3),
    median: round(quantile(xs, 0.5), 3),
    q75: round(quantile(xs, 0.75), 3),
    q90: round(quantile(xs, 0.9), 3),
    max: Math.max(...xs),
  };
}

async function main() {
  await fetchAll();
  const downloaded = new Date(fs.statSync(path.join(DIR, 'hl-2025ps.zip')).mtime).toISOString().slice(0, 10);

  // lookups
  const poslanecOsoba = new Map(read('poslanec.unl').map((r) => [r[0], r[1]]));
  const zarazeni = read('zarazeni.unl').filter((r) => r[2] === '0');
  const zmatecne = new Set(read('zmatecne.unl').map((r) => r[0]));
  const tisky = new Map(read('tisky.unl').map((r) => [r[0], r]));
  const stavy = new Map(read('stavy.unl').map((r) => [r[0], r]));
  const prechody = new Map(read('prechody.unl').map((r) => [r[0], r]));
  const hist = read('hist.unl');
  const schuzeAll = read('schuze.unl').filter((r) => r[6] === ''); // approved agendas only
  const bodAll = read('bod_schuze.unl').filter((r) => r[9] === '');

  const STATE_TYPE = (idStav) => stavy.get(idStav)?.[1];
  const FIRST_READING_TYPES = new Set(['1', '17', '18', '40', '41', '44', '67', '71']);
  const THIRD_READING_TYPES = new Set(['5', '73']);
  const BILL_KINDS = new Set(['1', '2', '3']); // 1 government bill, 2 other bill, 3 state budget

  const out = {
    _about:
      'Czech Chamber of Deputies base rates computed from psp.cz open data by scripts/refdata/psp.mjs. Re-run the script to refresh. All counts are reproducible from the cached UNL files.',
    source: {
      description_url: 'https://www.psp.cz/sqw/hp.sqw?k=1300',
      files: ZIPS.map((z) => BASE + z),
      downloaded,
      generated: new Date().toISOString(),
    },
    coalition_definitions:
      'Coalition membership is club membership (zarazeni.unl, cl_funkce = 0) in the listed clubs at the time of each vote. Periods start at the appointment of the government; the Pirates’ exit is dated by the end of Ivan Bartoš’s ministerial functions in zarazeni.unl (2024-09-30 20:00).',
    terms: [],
  };

  for (const term of TERMS) {
    const inTerm = (d) => d >= term.from && d <= term.to;
    const votes = term.hlFiles.flatMap(read).filter((v) => v[1] === term.organ);
    const voteById = new Map(votes.map((v) => [v[0], v]));

    // ------------------------------------------------ (a) bills and final votes
    const schuze = schuzeAll.filter((r) => r[1] === term.organ);
    const schuzeById = new Map(schuze.map((r) => [r[0], r]));
    const bods = bodAll.filter((b) => schuzeById.has(b[1]));
    const bodByKey = new Map();
    for (const b of bods) bodByKey.set(`${schuzeById.get(b[1])[2]}|${b[4]}`, b);

    // third-reading vote segments per bill
    const thirdReadingVotes = new Map(); // id_tisk -> [vote rows]
    for (const v of votes) {
      if (zmatecne.has(v[0]) || v[13] === 'R') continue;
      const b = bodByKey.get(`${v[2]}|${v[4]}`);
      if (!b || b[3] !== '5') continue;
      const t = tisky.get(b[2]);
      if (!t || !BILL_KINDS.has(t[1])) continue;
      if (!thirdReadingVotes.has(b[2])) thirdReadingVotes.set(b[2], []);
      thirdReadingVotes.get(b[2]).push(v);
    }
    // passage according to the bill history (hist.unl): transition out of a third-reading
    // state with action 22 "souhlas"; the linked vote (hist.id_hlas) is the passage vote.
    const passed = new Map(); // id_tisk -> id_hlas | ''
    const firstReading = new Map(); // id_tisk -> last decisive action
    const passedFirst90 = new Set();
    for (const h of hist) {
      const d = h[2].slice(0, 10);
      if (!inTerm(d)) continue;
      const p = prechody.get(h[4]);
      if (!p) continue;
      const t = tisky.get(h[1]);
      if (!t || !BILL_KINDS.has(t[1])) continue;
      const fromType = STATE_TYPE(p[1]);
      const akce = p[3];
      if (THIRD_READING_TYPES.has(fromType) && akce === '22') passed.set(h[1], h[3]);
      if (FIRST_READING_TYPES.has(fromType)) {
        const map = { '18': 'referred_to_committee', '22': 'approved_in_first_reading_s90', '27': 'rejected', '24': 'returned_to_sponsor', '26': 'withdrawn', '50': 'withdrawn' };
        if (map[akce]) firstReading.set(h[1], { outcome: map[akce], date: d, kind: t[1] });
        if (akce === '22' && fromType === '18') passedFirst90.add(h[1]);
      }
    }
    const billRows = [];
    for (const [idTisk, vs] of thirdReadingVotes) {
      const t = tisky.get(idTisk);
      const ok = passed.has(idTisk);
      billRows.push({ id_tisk: idTisk, kind: t[1], print: t[3], title: t[10], passed: ok, votes_in_third_reading: vs.length, last_vote: vs[vs.length - 1] });
    }
    // bills that passed per hist but whose third-reading votes could not be located (should be rare)
    const notPassed = billRows.filter((b) => !b.passed);
    const share = (rows) => (rows.length ? round(rows.filter((r) => r.passed).length / rows.length, 4) : null);
    const passVotes = [...passed.values()].filter((id) => voteById.has(id)).map((id) => voteById.get(id));
    const marginStats = stats(passVotes.map((v) => Number(v[7]) - Number(v[12])));

    const fr = [...firstReading.values()];
    const frSummary = (kind) => {
      const rows = fr.filter((r) => r.kind === kind);
      const c = {};
      for (const r of rows) c[r.outcome] = (c[r.outcome] || 0) + 1;
      const decisive = rows.filter((r) => r.outcome !== 'withdrawn');
      const approved = decisive.filter((r) => r.outcome === 'referred_to_committee' || r.outcome === 'approved_in_first_reading_s90');
      return { counts: c, decisive: decisive.length, approved: approved.length, share_approved: decisive.length ? round(approved.length / decisive.length, 4) : null };
    };

    const finalVotes = {
      definition:
        'Unit = a bill (sněmovní tisk of kind 1 government bill, 2 other bill, 3 state budget) on which at least one valid vote (not declared void in zmatecne.unl, not a manual R vote) was held under an agenda item of type 5 (third reading) during the term. "Passed" = the bill history (hist.unl) records a transition out of a third-reading state with action 22 "souhlas" (approved) dated within the term. Bills with third-reading votes but no such transition either failed the final vote or had their third reading interrupted and not completed; they are listed in not_passed_examples so each can be checked. Bills approved already in first reading under §90(2) are counted separately (approved_in_first_reading_s90) because failures of such votes are not recorded in hist.unl.',
      bills_with_third_reading_votes: billRows.length,
      passed: billRows.filter((b) => b.passed).length,
      share_passed: share(billRows),
      by_kind: {
        government_bills: { n: billRows.filter((b) => b.kind === '1').length, share_passed: share(billRows.filter((b) => b.kind === '1')) },
        other_bills: { n: billRows.filter((b) => b.kind === '2').length, share_passed: share(billRows.filter((b) => b.kind === '2')) },
        state_budget: { n: billRows.filter((b) => b.kind === '3').length, share_passed: share(billRows.filter((b) => b.kind === '3')) },
      },
      approved_in_first_reading_s90: passedFirst90.size,
      passage_vote_margin_over_quorum: {
        definition: 'For passage votes linked in hist.unl: votes in favour minus the quorum (kvorum = votes needed). Conditional on passing.',
        ...marginStats,
      },
      not_passed_examples: notPassed.slice(0, 40).map((b) => ({
        print: Number(b.print),
        kind: b.kind === '1' ? 'government bill' : b.kind === '2' ? 'other bill' : 'state budget',
        title: b.title,
        last_third_reading_vote: { date: czDate(b.last_vote[5]), result: b.last_vote[14] === 'A' ? 'adopted' : 'rejected', yes: Number(b.last_vote[7]), no: Number(b.last_vote[8]), present: Number(b.last_vote[11]), label: b.last_vote[15] || null },
      })),
    };

    const firstReadingOut = {
      definition:
        'Unit = a bill whose first reading reached a decisive outcome within the term (last such transition in hist.unl from a first-reading state). In the Czech first reading there is no vote to "approve": the bill is referred to committee unless a motion to reject (zamítnout) or return (vrátit) is carried, or, under §90(2), approved outright. share_approved = (referred_to_committee + approved_in_first_reading_s90) / all decisive outcomes excluding withdrawals.',
      government_bills: frSummary('1'),
      other_bills: frSummary('2'),
      state_budget: frSummary('3'),
    };

    // ------------------------------------------------ (c) agenda items postponed
    const ended = (s) => s[4] && s[4] < new Date().toISOString().slice(0, 13);
    const POSTPONED = new Set(['1', '2', '5', '7']);
    const DONE = new Set(['0']);
    const groups = {};
    const add = (g, b) => {
      groups[g] ??= { scheduled: 0, dealt_with: 0, not_dealt_with: 0 };
      if (DONE.has(b[8])) { groups[g].scheduled++; groups[g].dealt_with++; }
      else if (POSTPONED.has(b[8])) { groups[g].scheduled++; groups[g].not_dealt_with++; }
    };
    for (const b of bods) {
      const s = schuzeById.get(b[1]);
      if (!ended(s)) continue;
      const t = tisky.get(b[2]);
      const fixed = Boolean((b[7] || '').trim() || (b[11] || '').trim());
      let g = 'other_items';
      if (t && BILL_KINDS.has(t[1])) {
        const stage = ['1', '7', '15', '17', '18', '40', '41'].includes(b[3]) ? 'first_reading' : ['2', '3', '4'].includes(b[3]) ? 'second_reading' : b[3] === '5' ? 'third_reading' : 'other_stage';
        g = `${t[1] === '1' ? 'government_bills' : t[1] === '2' ? 'other_bills' : 'state_budget'}_${stage}`;
        add('all_bill_items', b);
        if (fixed) add('bill_items_with_fixed_slot', b);
      }
      add(g, b);
      add('all_items', b);
      if (fixed) add('all_items_with_fixed_slot', b);
    }
    for (const g of Object.values(groups)) g.share_dealt_with = g.scheduled ? round(g.dealt_with / g.scheduled, 4) : null;

    const agenda = {
      definition:
        'Unit = an item on the approved agenda (bod_schuze.unl, pozvanka null) of a meeting (schůze) that has ended. Status from bod_schuze.id_bod_stav: dealt_with = 0 "projednán"; not_dealt_with = 1 "neprojednán", 2 "přerušen" (interrupted), 5 "odročen" (postponed), 7 "vyřazen" (dropped, typically carried to a later meeting). Excluded: 3 "neprojednatelný" (moot because of the legislative process), 6 "již projednán", 4 in progress. A "fixed slot" item has a note fixing its date/order (poznamka or pozn2 non-empty). Items are counted per meeting, so a bill carried over several meetings counts once per meeting; the Chamber runs several meetings in parallel and long agendas are rarely completed, so share_dealt_with is the probability that an item listed on a meeting’s agenda is completed at that meeting, not the probability that a vote announced for a given day happens that day.',
      ...groups,
    };

    // ------------------------------------------------ (b) coalition discipline
    const voteRows = new Map(); // id_hlasovani -> [[id_osoba, code]]
    for (const f of term.hlPoslanec) {
      for (const r of read(f)) {
        if (!voteById.has(r[1])) continue;
        let arr = voteRows.get(r[1]);
        if (!arr) voteRows.set(r[1], (arr = []));
        arr.push([poslanecOsoba.get(r[0]), r[2]]);
      }
    }
    const coalitionsOut = [];
    for (const coal of term.coalitions) {
      const mem = zarazeni.filter((z) => coal.clubs[z[1]]);
      const isMember = (osoba, ts) => mem.some((z) => z[0] === osoba && z[3] <= ts && (!z[4] || z[4] > ts));
      const memCache = new Map();
      const rows = [];
      for (const v of votes) {
        if (zmatecne.has(v[0]) || v[13] !== 'N') continue;
        const ts = `${czDate(v[5])} ${v[6]}`;
        if (ts < coal.from || ts > coal.to) continue;
        const rs = voteRows.get(v[0]);
        if (!rs) continue;
        let S = 0, Y = 0, logged = 0, oppN = 0, oppLogged = 0, oppYes = 0;
        for (const [osoba, code] of rs) {
          if (code === 'W') continue;
          const key = osoba + ts.slice(0, 10);
          let m = memCache.get(key);
          if (m === undefined) memCache.set(key, (m = isMember(osoba, ts)));
          const isLogged = !['@', 'M'].includes(code);
          if (m) { S++; if (code === 'A') Y++; if (isLogged) logged++; }
          else { oppN++; if (isLogged) oppLogged++; if (code === 'A') oppYes++; }
        }
        rows.push({ id: v[0], S, Y, logged, oppN, oppLogged, oppYes, kvorum: Number(v[12]), result: v[14] });
      }
      const coalitionYes = rows.filter((r) => r.Y > r.S / 2);
      const contested = coalitionYes.filter((r) => r.oppYes < r.oppLogged / 2);
      const absMaj = contested.filter((r) => r.kvorum === 101);
      const passIds = new Set([...passed.values()]);
      const contestedPassage = contested.filter((r) => passIds.has(r.id));
      const summarise = (rs, definition) => {
        if (!rs.length) return { definition, n: 0 };
        const seatCounts = {};
        for (const r of rs) seatCounts[r.S] = (seatCounts[r.S] || 0) + 1;
        const pAtLeast = {};
        for (let k = 0; k <= 5; k++) pAtLeast[`S-${k}`] = round(rs.filter((r) => r.Y >= r.S - k).length / rs.length, 4);
        return {
          definition,
          n: rs.length,
          coalition_seats_S: Object.fromEntries(Object.entries(seatCounts).sort((a, b) => b[1] - a[1])),
          yes_votes: stats(rs.map((r) => r.Y)),
          shortfall_S_minus_yes: stats(rs.map((r) => r.S - r.Y)),
          attendance_share_logged_in: stats(rs.map((r) => round(r.logged / r.S, 4))),
          yes_share: stats(rs.map((r) => round(r.Y / r.S, 4))),
          p_yes_at_least_S_minus_k: pAtLeast,
          share_adopted: round(rs.filter((r) => r.result === 'A').length / rs.length, 4),
        };
      };
      coalitionsOut.push({
        id: coal.id,
        label: coal.label,
        from: coal.from,
        to: coal.to < '2099' ? coal.to : null,
        clubs: Object.values(coal.clubs),
        votes_considered: rows.length,
        contested_votes: summarise(
          contested,
          'Electronic votes (druh_hlasovani N, not void) in the period in which a majority of the coalition clubs’ members voted ano (A) and fewer than half of the logged-in non-coalition deputies voted ano. S = coalition club members holding a mandate at the time of the vote; yes = coalition members voting A. Absent (@), excused (M), logged-in-but-not-voting (F), no (B/N) and abstain (C) all count as not yes.'
        ),
        contested_absolute_majority_votes: summarise(absMaj, 'Contested votes (as above) with a quorum (kvorum) of 101, i.e. votes needing an absolute majority of all deputies (e.g. overriding a Senate or presidential veto, confidence).'),
        contested_full_house_votes: summarise(
          contested.filter((r) => r.logged + r.oppLogged >= 180),
          'Contested votes (as above) with at least 180 of 200 deputies logged in: a proxy for high-salience votes for which both sides mobilise (budget, confidence, flagship bills). Use this class for questions like "at least 105 of 108 coalition deputies vote yes" on a flagship vote.'
        ),
        contested_final_passage_votes: summarise(contestedPassage, 'Contested votes (as above) that are the third-reading passage vote of a bill according to hist.unl. Conditional on passage, so slightly optimistic about coalition turnout.'),
      });
    }

    out.terms.push({
      id: term.id,
      label: term.label,
      chamber_organ_id: Number(term.organ),
      votes_in_file: votes.length,
      final_votes_on_bills: finalVotes,
      first_reading: firstReadingOut,
      coalition_discipline: coalitionsOut,
      agenda_items: agenda,
    });
  }

  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'cz-chamber.json'), JSON.stringify(out, null, 2) + '\n');
  console.error('wrote pipeline/reference-data/cz-chamber.json');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
