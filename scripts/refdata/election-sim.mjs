#!/usr/bin/env node
// Joint simulation of linked races: node scripts/refdata/election-sim.mjs input.json
// One shared polling error moves every race together; each race then adds its own error. From the same draws come
// the win chance per race, the number of seats, control of the chamber and the chance of the exact story the paper tells.
//
// Input: { "national_sd": 2.5, "df": 5, "draws": 50000, "seed": 1,
//          "needed": 51, "safe": 42,                 seats the party holds for certain (not in `races`)
//          "races": [ { "id": "tx", "lead": 2.8, "sd": 3.5 } ],   lead of the party counted, in points; sd = local error only
//          "scenario": { "tx": true, "me": false } } optional: the combination told in the report
// Polling averages from several aggregators mostly share the same polls: give the average once, not one row each.
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const rng = (seed) => { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; };
const normal = (u) => Math.sqrt(-2 * Math.log(1 - u())) * Math.cos(2 * Math.PI * u());
/** Student t with df degrees of freedom, scaled to variance 1: big shared misses are more likely than a normal allows. */
function studentT(u, df) { let chi = 0; for (let i = 0; i < df; i++) chi += normal(u) ** 2; return (normal(u) / Math.sqrt(chi / df)) * Math.sqrt((df - 2) / df); }

export function simulate(cfg) {
  const { races, national_sd: nat, df = 5, draws = 50000, seed = 1, needed = null, safe = 0, scenario = null } = cfg;
  if (!races?.length || !(nat >= 0) || races.some((r) => !(r.sd > 0) || typeof r.lead !== 'number')) throw new Error('needs races with lead and sd, and national_sd');
  const u = rng(seed);
  const wins = Object.fromEntries(races.map((r) => [r.id, 0]));
  const seatCount = new Map();
  let chamber = 0, story = 0;
  for (let i = 0; i < draws; i++) {
    const shared = nat * studentT(u, df);
    let seats = safe, match = true;
    for (const r of races) {
      const win = r.lead + shared + r.sd * normal(u) > 0;
      if (win) { wins[r.id]++; seats++; }
      if (scenario && r.id in scenario && scenario[r.id] !== win) match = false;
    }
    seatCount.set(seats, (seatCount.get(seats) || 0) + 1);
    if (needed !== null && seats >= needed) chamber++;
    if (match) story++;
  }
  return {
    draws,
    races: Object.fromEntries(Object.entries(wins).map(([k, v]) => [k, +(v / draws).toFixed(4)])),
    seats: Object.fromEntries([...seatCount].sort((a, b) => a[0] - b[0]).map(([k, v]) => [k, +(v / draws).toFixed(4)])),
    chamber: needed === null ? null : +(chamber / draws).toFixed(4),
    scenario: scenario ? +(story / draws).toFixed(4) : null,
  };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) console.log(JSON.stringify(simulate(JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))), null, 1));
