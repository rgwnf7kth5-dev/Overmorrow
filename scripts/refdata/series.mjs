#!/usr/bin/env node
// History of number forecasts by series: consensus at the time, first published figure, surprise.
//   node scripts/refdata/series.mjs                 rebuilds pipeline/reference-data/series.json from the record
//   node scripts/refdata/series.mjs scale <key>     prints the surprise scale to use, and how it was obtained
// `records` come from resolved interval claims and from `extra` (figures entered by hand with a source). A surprise
// is measured on the first published figure, never on later revisions.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEditions, measuredClaims } from '../lib.mjs';

const FILE = path.join(ROOT, 'pipeline', 'reference-data', 'series.json');
const old = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : {};
const extra = old.extra || {};
const slug = (s) => String(s).toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const keyOf = (r) => r.forecast?.series || r.series || slug(r.quantity || r.label);
const rms = (xs) => Math.sqrt(xs.reduce((s, x) => s + x * x, 0) / xs.length);

const series = {};
const add = (k, unit, rec) => { (series[k] ??= { unit, records: [] }).records.push(rec); };
for (const r of measuredClaims(loadEditions())) {
  const cons = r.forecast?.consensus?.value;
  add(keyOf(r), r.unit, { edition: r.edition.id, claim: r.id, consensus: typeof cons === 'number' ? cons : null, first: r.value, centre: r.quantiles.q50, scale_used: r.scale, source: r.forecast?.consensus?.source || null });
}
for (const [k, list] of Object.entries(extra)) for (const x of list.records || []) add(k, list.unit, x);
const ratios = [];
for (const s of Object.values(series)) {
  const su = s.records.filter((x) => typeof x.consensus === 'number').map((x) => x.first - x.consensus);
  s.n = su.length;
  s.rms_surprise = su.length ? +rms(su).toFixed(4) : null;
  for (const x of s.records) if (typeof x.consensus === 'number' && x.scale_used > 0) ratios.push((x.first - x.consensus) / x.scale_used);
}
const pooled = { n: ratios.length, rms_in_scales: ratios.length ? +rms(ratios).toFixed(3) : null, note: 'Size of actual surprises in units of the scale we assumed. Above 1 means our scales were too small.' };
if (process.argv[2] === 'scale') {
  const s = series[process.argv[3]];
  const min = 4;
  if (s?.n >= min) console.log(JSON.stringify({ basis: 'series', scale: s.rms_surprise, n: s.n }));
  else console.log(JSON.stringify({ basis: 'published or pooled', n: s?.n ?? 0, pooled_factor: pooled.rms_in_scales, note: `Fewer than ${min} recorded surprises: take a sourced published figure ("published"), or a similar indicator's scale times the pooled factor ("pooled"), and say so in scale_source.` }));
} else {
  fs.writeFileSync(FILE, `${JSON.stringify({ _about: 'Built by scripts/refdata/series.mjs. Put hand-entered history under extra.<key>.records, each with its source.', updated: new Date().toISOString().slice(0, 10), pooled, series, extra }, null, 1)}\n`);
  console.log(`series: ${Object.keys(series).length} series, ${ratios.length} surprises with a consensus; pooled size ${pooled.rms_in_scales} scales.`);
}
