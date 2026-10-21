// Checks every edition and resolution file against the rules in METHODOLOGY.md.
// Exits with code 1 on any error. Run: node scripts/validate.mjs
import { loadEditions, loadResolution, loadConfig, claimsOf } from './lib.mjs';

const cfg = loadConfig();
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
const isStamp = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)$/.test(s) && !isNaN(Date.parse(s));
const addDays = (d, n) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;

const editions = loadEditions();
if (!editions.length) err('data/editions', 'no editions found');

let prevNumber = 0;
for (const ed of editions) {
  const w = `editions/${ed.file}`;
  if (ed.id !== ed.file.replace('.json', '')) err(w, 'id must match file name');
  if (ed.edition_date !== ed.id) err(w, 'edition_date must equal id');
  if (!isDate(ed.events_date) || addDays(ed.events_date, 1) !== ed.edition_date) err(w, 'events_date must be the day before edition_date');
  if (!isStamp(ed.frozen_at)) err(w, 'frozen_at must be an ISO timestamp with offset');
  else {
    const offset = ed.frozen_at.match(/([+-]\d{2}:\d{2}|Z)$/)[1];
    if (Date.parse(ed.frozen_at) >= Date.parse(`${ed.events_date}T00:00:00${offset}`)) err(w, 'frozen_at must be before the events day begins');
  }
  if (ed.number !== prevNumber + 1) err(w, `number should be ${prevNumber + 1}`);
  prevNumber = ed.number;

  const ids = new Set();
  for (const s of ed.stories || []) {
    const sw = `${w} story ${s.id}`;
    if (!nonEmpty(s.id) || ids.has(s.id)) err(sw, 'missing or duplicate id');
    ids.add(s.id);
    for (const f of ['kicker', 'headline', 'basis']) if (!nonEmpty(s[f])) err(sw, `missing ${f}`);
    if (!['lead', 'rail', 'half', 'third', 'quarter'].includes(s.size)) err(sw, 'size must be lead, rail, half, third or quarter');
    if (!Array.isArray(s.body) || !s.body.length) err(sw, 'body must be a non-empty list of paragraphs');
    if (!Array.isArray(s.claims) || !s.claims.length) err(sw, 'at least one claim required');
    if (!Array.isArray(s.sources) || !s.sources.some((x) => /^https?:\/\//.test(x.url || ''))) err(sw, 'at least one source with a URL required');
    const cs = s.cs;
    if (!cs) err(sw, 'Czech text (cs) missing');
    else {
      for (const f of ['kicker', 'headline', 'basis']) if (!nonEmpty(cs[f])) err(sw, `cs.${f} missing`);
      if (!Array.isArray(cs.body) || !cs.body.length) err(sw, 'cs.body missing');
      if (s.standfirst && !nonEmpty(cs.standfirst)) err(sw, 'cs.standfirst missing');
      if (s.table && (!cs.table || (cs.table.rows || []).length !== s.table.rows.length)) err(sw, 'cs.table must have the same rows');
      for (const c of s.claims || []) {
        const t = cs.claims?.[c.id];
        if (!t || !nonEmpty(t.label) || !nonEmpty(t.text) || !nonEmpty(t.criterion)) err(sw, `cs.claims.${c.id} needs label, text and criterion`);
      }
    }
    for (const t of s.body || []) if (/“[^”]{20,}”/.test(t) && !ed.pilot) warn(sw, 'body contains a long quotation; check it is sourced, not invented');
  }

  const claimIds = new Set();
  const sets = new Map();
  for (const c of claimsOf(ed)) {
    const cw = `${w} claim ${c.id}`;
    if (!nonEmpty(c.id) || claimIds.has(c.id)) err(cw, 'missing or duplicate id');
    claimIds.add(c.id);
    for (const f of ['label', 'text', 'criterion', 'resolution_source']) if (!nonEmpty(c[f])) err(cw, `missing ${f}`);
    if (typeof c.probability !== 'number' || c.probability < cfg.probability_min || c.probability > cfg.probability_max)
      err(cw, `probability must be a number between ${cfg.probability_min} and ${cfg.probability_max}`);
    if (!isStamp(c.resolves_by)) err(cw, 'resolves_by must be an ISO timestamp with offset');
    else if (isStamp(ed.frozen_at) && Date.parse(c.resolves_by) <= Date.parse(ed.frozen_at)) err(cw, 'resolves_by must be after frozen_at');
    if (!['official', 'reported', 'speculative'].includes(c.schedule)) err(cw, 'schedule must be official, reported or speculative');
    if (c.schedule === 'speculative' && c.story.size === 'lead') err(cw, 'speculative events cannot lead the paper');
    if (c.exclusive_set) sets.set(c.exclusive_set, (sets.get(c.exclusive_set) || 0) + c.probability);
  }
  for (const [set, sum] of sets) if (Math.abs(sum - 1) > 0.011) err(`${w} set ${set}`, `exclusive set sums to ${sum.toFixed(2)}, must be 1.00`);

  if (!ed.cs) err(w, 'edition-level Czech text (cs) missing');
  else if ((ed.cs.sections || []).length !== (ed.sections || []).length) err(w, 'cs.sections must match sections');

  const referenced = [ed.front?.lead, ...(ed.front?.rail || []), ...(ed.sections || []).flatMap((s) => s.stories)];
  for (const id of referenced) if (!ids.has(id)) err(w, `layout refers to unknown story ${id}`);
  for (const id of ids) if (!referenced.includes(id)) err(w, `story ${id} is not placed in front or sections`);
  if (!ed.pilot) {
    const n = ids.size;
    if (n < cfg.stories_min || n > cfg.stories_max) warn(w, `${n} stories; target is ${cfg.stories_min}-${cfg.stories_max}`);
  }

  const res = loadResolution(ed.id);
  if (res) {
    const rw = `resolutions/${res.file}`;
    const seen = new Set();
    for (const r of [...(res.results || []), ...(res.corrections || [])]) {
      const isCorr = (res.corrections || []).includes(r);
      if (!claimIds.has(r.claim)) err(rw, `unknown claim ${r.claim}`);
      if (!isCorr) { if (seen.has(r.claim)) err(rw, `claim ${r.claim} resolved twice; use corrections`); seen.add(r.claim); }
      if (!['yes', 'no', 'void'].includes(r.outcome)) err(rw, `claim ${r.claim}: outcome must be yes, no or void`);
      if (!nonEmpty(r.note)) err(rw, `claim ${r.claim}: note required`);
      if (r.outcome !== 'void' && !/^https?:\/\//.test(r.evidence || '')) err(rw, `claim ${r.claim}: evidence URL required`);
      if (!isStamp(r.resolved_at)) err(rw, `claim ${r.claim}: resolved_at must be an ISO timestamp`);
      const claim = claimsOf(ed).find((c) => c.id === r.claim);
      if (claim && isStamp(r.resolved_at) && Date.parse(r.resolved_at) < Date.parse(claim.resolves_by)) err(rw, `claim ${r.claim}: resolved before its deadline`);
    }
  }
}

for (const x of warnings) console.warn(`warning  ${x}`);
for (const x of errors) console.error(`error    ${x}`);
console.log(`${editions.length} edition(s) checked: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
