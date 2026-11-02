// Independent audit of resolved claims (METHODOLOGY 6, RESOLVER step 3c).
//   node scripts/audit.mjs sample            lists the claims due for audit, without their recorded outcome
//   node scripts/audit.mjs report            compares the audit files with the recorded results
// The sample is fixed by a hash of edition and claim id, so nobody chooses which results get checked.
import { loadEditions, loadConfig, auditSample, auditRows, claimsOf, loadAudits, isInterval } from './lib.mjs';

const cfg = loadConfig();
const cmd = process.argv[2] || 'sample';
const eds = loadEditions();
if (cmd === 'sample') {
  const done = new Set(loadAudits().flatMap((a) => (a.entries || []).map((e) => `${a.edition}:${e.claim}`)));
  const byId = new Map(eds.map((e) => [e.id, e]));
  const out = auditSample(eds, cfg).filter((s) => !done.has(`${s.edition}:${s.claim}`)).map((s) => {
    const c = claimsOf(byId.get(s.edition)).find((x) => x.id === s.claim);
    return { edition: s.edition, claim: c.id, kind: isInterval(c) ? 'interval' : 'binary', text: c.text, criterion: c.criterion, resolution_source: c.resolution_source, event_window: c.event_window, resolves_by: c.resolves_by, tz: c.tz };
  });
  console.log(JSON.stringify(out, null, 1));
} else {
  const rows = auditRows(eds);
  const bad = rows.filter((r) => !r.agrees);
  console.log(`${rows.length} audited, ${rows.length - bad.length} agree, ${bad.length} differ.`);
  for (const r of bad) console.log(`  ${r.edition} ${r.claim}: recorded ${r.recorded}, audit ${r.audit}${r.note ? ` (${r.note})` : ''}`);
}
