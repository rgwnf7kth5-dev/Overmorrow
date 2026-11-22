#!/usr/bin/env node
// What our own runs take from other vendors' models (METHODOLOGY 16; PLANNER step 12; EDITOR steps 4d and 5).
//
//   node scripts/external-gaps.mjs <edition date | latest>            the morning's list: claims not yet checked on which
//                                                                     a model's own-search figure is check.gap or more
//                                                                     from ours, largest gap first, at most check.claims_max
//   node scripts/external-gaps.mjs <edition date | latest> --all      the evening check's list: every claim not yet checked
//                                                                     for which a model named dated facts, largest gap
//                                                                     first, at most check.claims_max_evening; and the
//                                                                     claims whose wording the models flagged
//   node scripts/external-gaps.mjs <edition date | latest> counters   the models' counter-arguments, for the red team
//
// It reads data/planning/<date>.json and the trace files next to the dossiers. It prints the models' facts, sources and
// arguments, never their probabilities: our runs work from what can be checked on a page, not from another model's number.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'pipeline/config.json'), 'utf8'));
const check = cfg.shadow?.external?.check || {};
const args = process.argv.slice(2), arg = args[0], all = args.includes('--all'), counters = args.includes('counters');
const planned = fs.readdirSync(path.join(ROOT, 'data/planning')).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
const date = arg === 'latest' ? (planned.pop() || '').slice(0, 10) : /^\d{4}-\d{2}-\d{2}$/.test(arg || '') ? arg : null;
if (!date || !fs.existsSync(path.join(ROOT, 'data/planning', `${date}.json`))) { console.error('usage: node scripts/external-gaps.mjs <edition date YYYY-MM-DD | latest> [--all | counters]'); process.exit(2); }

const plan = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/planning', `${date}.json`), 'utf8'));
const ok = (p) => typeof p === 'number' && p > 0 && p < 1;
const gap = check.gap ?? 0.15;
const readTrace = (t) => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, t), 'utf8')).runs || []; } catch { return []; } };
const rows = [];
for (const s of plan.stories || []) for (const c of s.claims || []) {
  const ours = [c.forecast?.calibrated, c.forecast?.combined, c.probability].find(ok);
  const entries = (c.forecast?.shadow?.research || []).filter((e) => ok(e.p));
  const trace = entries.map((e) => e.trace).find((t) => t && fs.existsSync(path.join(ROOT, t)));
  if (!trace) continue;
  const runs = readTrace(trace);
  const size = ok(ours) && entries.length ? Math.max(...entries.map((e) => Math.abs(e.p - ours))) : 0;
  const far = entries.filter((e) => ok(ours) && Math.abs(e.p - ours) >= gap - 1e-9).map((e) => e.provider);
  rows.push({ c, s, trace, runs, size, far });
}
rows.sort((a, b) => b.size - a.size || a.c.id.localeCompare(b.c.id));

if (counters) {
  console.log(JSON.stringify({ edition: date, note: 'Arguments of other vendors\' models, not facts: leads for the red team to check on the sources.', claims: rows.map((r) => ({ claim: r.c.id, counters: r.runs.filter((x) => x.counter).map((x) => ({ provider: x.provider, counter: x.counter })) })).filter((r) => r.counters.length) }, null, 1));
  process.exit(0);
}
if (!check.enabled) { console.log(JSON.stringify({ edition: date, off: true, claims: [], wording: [] })); process.exit(0); }
const open = rows.filter((r) => !r.c.forecast?.external_check);
const pick = all
  ? open.filter((r) => r.runs.some((x) => (x.facts || []).length || x.reason)).slice(0, check.claims_max_evening ?? 6)
  : open.filter((r) => r.far.length).slice(0, check.claims_max ?? 3);
const out = {
  edition: date, gap,
  claims: pick.map((r) => ({
    claim: r.c.id, story: r.s.id, dossier: r.c.dossier || r.c.forecast?.dossier || null, trace: r.trace,
    far_from_ours: r.far.length > 0,
    providers: (all ? r.runs.map((x) => x.provider) : r.far),
    facts: r.runs.filter((x) => all || r.far.includes(x.provider)).flatMap((x) => (x.facts || []).map((f) => ({ provider: x.provider, ...f }))),
  })),
};
if (all) out.wording = (plan.external_run?.wording_flags || []).filter((w) => !(plan.stories || []).flatMap((s) => s.claims || []).find((c) => c.id === w.claim)?.wording_check);
console.log(JSON.stringify(out, null, 1));
