// Checks every edition and resolution file against the rules in METHODOLOGY.md.
// Exits with code 1 on any error. Run: node scripts/validate.mjs
import { loadEditions, loadResolution, loadCorrections, loadConfig, claimsOf, loadUpdate, mergeUpdate } from './lib.mjs';

const cfg = loadConfig();
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
const isStamp = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)$/.test(s) && !isNaN(Date.parse(s));
const addDays = (d, n) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;

// Quality rules added on 23 October 2026 after an audit of edition No. 3; they apply from edition No. 4.
const QUALITY_FROM = 4;
const WEAK_DOMAINS = ['archyde.com', 'bloomingbit.io', 'cryptobriefing.com', 'octagonai.co', 'newsquawk.com'];
const domainOf = (u) => { try { return new URL(u).hostname.replace(/^(www|m|en|cs|amp)\./, ''); } catch { return ''; } };
const words = (xs) => xs.join(' ').split(/\s+/).filter(Boolean).length;

function checkQuality(s, sw) {
  const urls = (s.sources || []).map((x) => x.url).filter((u) => /^https?:\/\//.test(u || ''));
  const weak = urls.filter((u) => WEAK_DOMAINS.some((d) => domainOf(u).endsWith(d)));
  if (weak.length) err(sw, `aggregator or content-farm source not allowed: ${weak.join(', ')}`);
  const solid = new Set(urls.filter((u) => !domainOf(u).endsWith('wikipedia.org') && !weak.includes(u)).map(domainOf));
  if (solid.size < 2) err(sw, 'needs sources from at least two different sites (Wikipedia and aggregators do not count)');
  const w = words(s.body || []);
  if (s.size === 'lead' && (w < 380 || (s.body || []).length < 5)) err(sw, `lead must have at least 5 paragraphs and 380 words (has ${(s.body || []).length} and ${w})`);
  if (s.size !== 'lead' && w < 90) err(sw, `story body too thin (${w} words; at least 90)`);
}

function checkStory(s, sw, ed) {
  if (!ed.pilot && ed.number >= QUALITY_FROM) checkQuality(s, sw);
  for (const f of ["kicker", "headline", "basis"]) if (!nonEmpty(s[f])) err(sw, `missing ${f}`);
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
  // House rule: foreign surnames from the English text must not be feminised in Czech (Metsola, not Metsolaová).
  if (cs) {
    const en = JSON.stringify([s.kicker, s.headline, s.standfirst, s.body, s.basis, s.claims, s.table]);
    const czText = JSON.stringify(cs);
    const names = new Set((en.match(/\b[A-Z][a-z]{2,}\b/g) || []).filter((n) => !/(ová|ova)$/.test(n)));
    for (const n of names) {
      const stems = [n, n.replace(/[aeiouy]$/, '')];
      const fem = new RegExp(`(?:^|[^\\p{L}])(${stems.join('|')})(ová|ové|ovou|ovy|ových|ovým|ovými)(?![\\p{L}])`, 'u');
      const m = czText.match(fem);
      if (m) err(sw, `feminised foreign surname in Czech text: "${m[1]}${m[2]}" (write "${n}")`);
    }
  }
  for (const t of s.body || []) if (/“[^”]{20,}”/.test(t) && !ed.pilot) warn(sw, 'body contains a long quotation; check it is sourced, not invented');
}

function checkClaim(c, cw, frozen) {
    for (const f of ['label', 'text', 'criterion', 'resolution_source']) if (!nonEmpty(c[f])) err(cw, `missing ${f}`);
  if (typeof c.probability !== 'number' || c.probability < cfg.probability_min || c.probability > cfg.probability_max)
    err(cw, `probability must be a number between ${cfg.probability_min} and ${cfg.probability_max}`);
  if (!isStamp(c.resolves_by)) err(cw, 'resolves_by must be an ISO timestamp with offset');
  else if (isStamp(frozen) && Date.parse(c.resolves_by) <= Date.parse(frozen)) err(cw, 'resolves_by must be after frozen_at');
  if (!['official', 'reported', 'speculative'].includes(c.schedule)) err(cw, 'schedule must be official, reported or speculative');
  if (c.schedule === 'speculative' && c.story.size === 'lead') err(cw, 'speculative events cannot lead the paper');
}

const editions = loadEditions({ merged: false });
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
    checkStory(s, sw, ed);
  }

  const claimIds = new Set();
  const sets = new Map();
  for (const c of claimsOf(ed)) {
    const cw = `${w} claim ${c.id}`;
    if (!nonEmpty(c.id) || claimIds.has(c.id)) err(cw, 'missing or duplicate id');
    claimIds.add(c.id);
    checkClaim(c, cw, ed.frozen_at);
    if (c.exclusive_set) sets.set(c.exclusive_set, (sets.get(c.exclusive_set) || 0) + c.probability);
  }
  for (const [set, sum] of sets) if (Math.abs(sum - 1) > 0.011) err(`${w} set ${set}`, `exclusive set sums to ${sum.toFixed(2)}, must be 1.00`);

  if (ed.number >= QUALITY_FROM) {
    const railWords = (ed.front?.rail || []).map((id) => words((ed.stories || []).find((x) => x.id === id)?.body || []));
    const leadWords = words((ed.stories || []).find((x) => x.id === ed.front?.lead)?.body || []);
    if (railWords.some((n) => n > leadWords)) err(w, 'a rail story is longer than the lead');
    for (const row of ed.weather?.rows || []) if (!nonEmpty(row[1]) || /^[-—–\s]*$/.test(row[1])) err(w, `weather row "${row[0]}" is empty; use a fallback forecast source`);
  }
  const fix = loadCorrections(ed.id);
  if (fix) {
    const fw = `corrections/${fix.file}`;
    if (fix.edition !== ed.id) err(fw, 'edition must equal the file name');
    for (const c of fix.corrections || []) {
      if (!ids.has(c.story)) err(fw, `unknown story ${c.story}`);
      if (!isDate(c.date)) err(fw, `story ${c.story}: date must be YYYY-MM-DD`);
      if (!nonEmpty(c.text) || !nonEmpty(c.text_cs)) err(fw, `story ${c.story}: text and text_cs required`);
      if (c.url && !/^https?:\/\//.test(c.url)) err(fw, `story ${c.story}: url must be http(s)`);
    }
  }

  if (!ed.cs) err(w, 'edition-level Czech text (cs) missing');
  else if ((ed.cs.sections || []).length !== (ed.sections || []).length) err(w, 'cs.sections must match sections');

  const referenced = [ed.front?.lead, ...(ed.front?.rail || []), ...(ed.sections || []).flatMap((s) => s.stories)];
  for (const id of referenced) if (!ids.has(id)) err(w, `layout refers to unknown story ${id}`);
  for (const id of ids) if (!referenced.includes(id)) err(w, `story ${id} is not placed in front or sections`);
  if (!ed.pilot) {
    const n = ids.size;
    if (n < cfg.stories_min || n > cfg.stories_max) warn(w, `${n} stories; target is ${cfg.stories_min}-${cfg.stories_max}`);
  }

  // Afternoon update: revisions of morning claims and stories added after the morning freeze.
  const up = loadUpdate(ed.id);
  if (up) {
    const uw = `updates/${up.file}`;
    if (up.edition !== ed.id) err(uw, 'edition must equal the file name');
    if (!isStamp(up.frozen_at)) err(uw, 'frozen_at must be an ISO timestamp with offset');
    else {
      if (isStamp(ed.frozen_at) && Date.parse(up.frozen_at) <= Date.parse(ed.frozen_at)) err(uw, 'frozen_at must be after the morning freeze');
      const offset = up.frozen_at.match(/([+-]\d{2}:\d{2}|Z)$/)[1];
      if (Date.parse(up.frozen_at) >= Date.parse(`${ed.events_date}T00:00:00${offset}`)) err(uw, 'frozen_at must be before the events day begins');
    }
    if ((up.added || []).length && (!nonEmpty(up.summary) || !nonEmpty(up.summary_cs))) err(uw, 'summary and summary_cs required when stories are added');
    for (const r of up.revisions || []) {
      const rw = `${uw} revision ${r.claim}`;
      if (!claimIds.has(r.claim)) err(rw, 'unknown claim');
      if (typeof r.probability !== 'number' || r.probability < cfg.probability_min || r.probability > cfg.probability_max) err(rw, 'probability out of range');
      if (!nonEmpty(r.reason) || !nonEmpty(r.reason_cs)) err(rw, 'reason and reason_cs required: name the new fact');
      if (!Array.isArray(r.sources) || !r.sources.some((x) => /^https?:\/\//.test(x.url || ''))) err(rw, 'at least one source with a URL for the new fact');
    }
    for (const st of up.added || []) {
      const sw = `${uw} story ${st.id}`;
      if (ids.has(st.id)) err(sw, 'duplicate story id');
      ids.add(st.id);
      checkStory({ size: 'quarter', ...st }, sw, ed);
      for (const c of st.claims || []) {
        if (claimIds.has(c.id)) err(`${sw} claim ${c.id}`, 'duplicate claim id');
        claimIds.add(c.id);
        checkClaim({ ...c, story: st }, `${sw} claim ${c.id}`, up.frozen_at);
      }
    }
    const merged = mergeUpdate(ed);
    const setsAfter = new Map();
    for (const c of claimsOf(merged)) if (c.exclusive_set) setsAfter.set(c.exclusive_set, (setsAfter.get(c.exclusive_set) || 0) + c.probability);
    for (const [set, sum] of setsAfter) if (Math.abs(sum - 1) > 0.011) err(`${uw} set ${set}`, `after revision the exclusive set sums to ${sum.toFixed(2)}, must be 1.00`);
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
      const claim = claimsOf(mergeUpdate(ed)).find((c) => c.id === r.claim);
      if (claim && isStamp(r.resolved_at) && Date.parse(r.resolved_at) < Date.parse(claim.resolves_by)) err(rw, `claim ${r.claim}: resolved before its deadline`);
    }
  }
}

for (const x of warnings) console.warn(`warning  ${x}`);
for (const x of errors) console.error(`error    ${x}`);
console.log(`${editions.length} edition(s) checked: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
