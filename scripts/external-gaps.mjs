#!/usr/bin/env node
// Where other vendors' models, after their own search, land far from our figure (METHODOLOGY 16; EDITOR step 4d).
//
//   node scripts/external-gaps.mjs <edition date YYYY-MM-DD | latest>
//
// Reads data/planning/<date>.json and lists the claims to check in the morning: binary claims on which at least one
// model's own-search figure (forecast.shadow.research) is config.shadow.external.check.gap or more from our figure
// (calibrated, else combined), largest gap first, at most check.claims_max. For each it names the trace file that holds
// the models' reasoning and sources. It prints no vendor probability: the morning run works from their facts, not their
// numbers. Output: {edition, gap, claims: [{claim, story, dossier, trace, providers: [...]}]}; an empty list is normal.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'pipeline/config.json'), 'utf8'));
const check = cfg.shadow?.external?.check || {};
const arg = process.argv[2];
const planned = fs.readdirSync(path.join(ROOT, 'data/planning')).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
const date = arg === 'latest' ? (planned.pop() || '').slice(0, 10) : /^\d{4}-\d{2}-\d{2}$/.test(arg || '') ? arg : null;
if (!date || !fs.existsSync(path.join(ROOT, 'data/planning', `${date}.json`))) { console.error('usage: node scripts/external-gaps.mjs <edition date YYYY-MM-DD | latest>'); process.exit(2); }
if (!check.enabled) { console.log(JSON.stringify({ edition: date, off: true, claims: [] })); process.exit(0); }

const plan = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/planning', `${date}.json`), 'utf8'));
const ok = (p) => typeof p === 'number' && p > 0 && p < 1;
const gap = check.gap ?? 0.15;
const found = [];
for (const s of plan.stories || []) for (const c of s.claims || []) {
  const ours = [c.forecast?.calibrated, c.forecast?.combined, c.probability].find(ok);
  const far = (c.forecast?.shadow?.research || []).filter((e) => ok(e.p) && ok(ours) && Math.abs(e.p - ours) >= gap - 1e-9);
  if (!far.length) continue;
  const trace = far.map((e) => e.trace).find((t) => t && fs.existsSync(path.join(ROOT, t)));
  if (!trace) continue;
  found.push({ claim: c.id, story: s.id, dossier: c.dossier || c.forecast?.dossier || null, trace, providers: far.map((e) => e.provider), size: Math.max(...far.map((e) => Math.abs(e.p - ours))) });
}
found.sort((a, b) => b.size - a.size || a.claim.localeCompare(b.claim));
console.log(JSON.stringify({ edition: date, gap, claims: found.slice(0, check.claims_max ?? 3).map(({ size, ...x }) => x) }, null, 1));
