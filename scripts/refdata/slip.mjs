// Schedule-slip rates: prior from pipeline/reference-data/schedule-slip.json updated with our own record
// (results that carry `held`). Usage: node scripts/refdata/slip.mjs [class-id]
import { loadEditions, slipTable } from '../lib.mjs';

const want = process.argv[2];
const rows = slipTable(loadEditions()).filter((r) => !want || r.id === want);
if (want && !rows.length) { console.error(`unknown class ${want}`); process.exit(1); }
const pad = (s, n) => String(s).padEnd(n);
console.log(`${pad('class', 30)}${pad('prior', 8)}${pad('own', 12)}rate (P that the event slips)`);
for (const r of rows) console.log(`${pad(r.id, 30)}${pad(r.prior_rate.toFixed(2), 8)}${pad(`${r.own.slipped}/${r.own_n}`, 12)}${r.rate.toFixed(3)}  [${r.basis}]`);
