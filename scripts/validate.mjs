// Checks every edition and resolution file against the rules in METHODOLOGY.md.
// Exits with code 1 on any error. Run: node scripts/validate.mjs
import { loadEditions, loadResolution, loadCorrections, loadConfig, claimsOf, loadUpdate, mergeUpdate, loadWatchlist, geoMeanOdds, combine, isInterval, loadSlip, loadCalibration, loadPublisher, oddsToProbs } from './lib.mjs';

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
// Rules added in the afternoon of 23 October 2026 (schedule-slip classes, publication check, contested claims,
// intervals, calibrated combination); they apply from config.new_rules_from.
const NEW_FROM = cfg.new_rules_from ?? 4;
const SLIP_IDS = new Set((loadSlip().classes || []).map((k) => k.id));
const CAL = loadCalibration();
const MARKET_KINDS = ['exchange', 'bookmaker', 'platform'];
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

// Structured ensemble record (edition No. 4 on): five independent forecasters, combined by the geometric mean of odds.
function checkForecast(c, cw) {
  const f = c.forecast;
  if (!f || !Array.isArray(f.agents)) return err(cw, 'forecast.agents missing: record every forecaster (role, model, p)');
  const roles = new Set(f.agents.map((a) => a.role));
  for (const r of cfg.ensemble_roles) if (!roles.has(r)) err(cw, `forecast.agents lacks the ${r} forecaster`);
  for (const a of f.agents) if (typeof a.p !== 'number' || a.p <= 0 || a.p >= 1 || !nonEmpty(a.model)) err(cw, `forecast agent ${a.role}: needs model and 0 < p < 1`);
  if (f.agents.length && f.agents.every((a) => typeof a.p === 'number' && a.p > 0 && a.p < 1)) {
    const g = geoMeanOdds(f.agents.map((a) => a.p));
    if (Math.abs((f.combined ?? -1) - g) > 0.006) err(cw, `forecast.combined must be the geometric mean of odds (${g.toFixed(3)})`);
    const comb = f.combination;
    if (comb && !['geo-odds', 'calibrated'].includes(comb.method)) err(cw, 'forecast.combination.method must be geo-odds or calibrated');
    const calOn = CAL && CAL.params?.method === 'calibrated' && c.edition && isStamp(c.edition.frozen_at) && Date.parse(c.edition.frozen_at) > Date.parse(CAL.fitted_at);
    if (calOn && comb?.method !== 'calibrated') err(cw, `calibration ${CAL.version} is active: copy pipeline/calibration.json params into forecast.combination`);
    const final = comb?.method === 'calibrated' ? combine(f.agents, comb) : g;
    if (comb?.method === 'calibrated' && typeof f.calibrated === 'number' && Math.abs(f.calibrated - final) > 0.006) err(cw, `forecast.calibrated must be ${final.toFixed(3)} (combination applied to the agents)`);
    const expect = Math.round(Math.min(cfg.probability_max, Math.max(cfg.probability_min, final)) * 100) / 100;
    if (Math.abs(c.probability - expect) > 0.005 && !nonEmpty(f.adjustment)) err(cw, `probability ${c.probability} differs from the ensemble (${expect}); explain in forecast.adjustment`);
  }
  if (f.market) {
    if (typeof f.market.p !== 'number' || !/^https?:\/\//.test(f.market.url || '') || !isStamp(f.market.read_at)) err(cw, 'forecast.market needs p, url and read_at');
    if (f.market.kind !== undefined && !MARKET_KINDS.includes(f.market.kind)) err(cw, `forecast.market.kind must be one of ${MARKET_KINDS.join(', ')}`);
    if (f.market.kind === 'bookmaker') {
      const o = f.market.odds;
      if (!Array.isArray(o) || o.length < 2 || o.some((x) => !(x > 1)) || !Number.isInteger(f.market.outcome) || !(f.market.outcome >= 0 && f.market.outcome < o.length)) err(cw, 'bookmaker market needs odds (decimal odds of every outcome) and outcome (index of the outcome the claim is about)');
      else { const q = oddsToProbs(o).probs[f.market.outcome]; if (Math.abs(q - f.market.p) > 0.011) err(cw, `bookmaker p must be the margin-free probability ${q.toFixed(3)} (node scripts/refdata/models.mjs odds …)`); }
    }
    else if (Math.abs(c.probability - f.market.p) > cfg.market_departure_flag && !nonEmpty(f.market_note)) err(cw, `departs from the market (${f.market.p}) by more than ${cfg.market_departure_flag}; explain in forecast.market_note`);
  }
  if (f.base_rate && (typeof f.base_rate.rate !== 'number' || !nonEmpty(f.base_rate.class))) err(cw, 'forecast.base_rate needs class and rate');
  if (!nonEmpty(f.dossier)) err(cw, 'forecast.dossier: path of the research dossier (data/dossiers/...)');
  if (c.edition && c.edition.number >= NEW_FROM && new Set((f.agents || []).map((a) => a.model)).size < 2) warn(cw, 'all forecasters ran on the same model; use config.ensemble_models');
}

// Interval claims (kind "interval"): quantiles of a published number; forecasters give quantiles, combined by averaging.
function checkInterval(c, cw) {
  for (const f of ['label', 'text', 'criterion', 'resolution_source', 'quantity']) if (!nonEmpty(c[f])) err(cw, `missing ${f}`);
  if (typeof c.unit !== 'string') err(cw, 'unit must be a string (may be empty)');
  if (c.probability !== undefined) err(cw, 'an interval claim has quantiles, not a probability');
  const q = c.quantiles;
  if (!q || ![q.q10, q.q50, q.q90].every((x) => typeof x === 'number') || !(q.q10 < q.q50 && q.q50 < q.q90)) err(cw, 'quantiles must have numbers q10 < q50 < q90');
  if (!(c.scale > 0)) err(cw, 'scale must be the usual surprise size for this indicator (> 0), with its source in forecast.scale_source');
  if (c.exclusive_set) err(cw, 'interval claims cannot be in an exclusive set');
  const f = c.forecast;
  if (!f || !Array.isArray(f.agents) || f.agents.length < 3) return err(cw, 'forecast.agents: at least three forecasters with q10, q50, q90');
  for (const a of f.agents) if (![a.q10, a.q50, a.q90].every((x) => typeof x === 'number') || !(a.q10 < a.q50 && a.q50 < a.q90) || !nonEmpty(a.model)) err(cw, `forecast agent ${a.role}: needs model and q10 < q50 < q90`);
  if (q && f.agents.every((a) => typeof a.q50 === 'number')) for (const k of ['q10', 'q50', 'q90']) {
    const m = f.agents.reduce((s, a) => s + a[k], 0) / f.agents.length;
    if (Math.abs(m - q[k]) > Math.max(1e-6, (c.scale || 1) * 0.05) && !nonEmpty(f.adjustment)) err(cw, `quantiles.${k} should be the forecasters' mean ${m.toFixed(3)}; explain in forecast.adjustment`);
  }
  if (f.consensus && (typeof f.consensus.value !== 'number' || !nonEmpty(f.consensus.source))) err(cw, 'forecast.consensus needs value and source');
  if (!nonEmpty(f.scale_source)) err(cw, 'forecast.scale_source: where the surprise size comes from');
  if (!nonEmpty(f.dossier)) err(cw, 'forecast.dossier: path of the research dossier (data/dossiers/...)');
}

function checkClaim(c, cw, frozen) {
  const ed = c.edition;
  if (ed && ed.number >= NEW_FROM) {
    if (!nonEmpty(c.slip_class) || (c.slip_class !== 'none' && !SLIP_IDS.has(c.slip_class))) err(cw, `slip_class must be a class from pipeline/reference-data/schedule-slip.json or "none"`);
    if (!nonEmpty(c.publishes)) err(cw, 'publishes: when and where the resolution source will publish the result (resolvability check)');
  }
  if (isInterval(c)) {
    if (!isStamp(c.resolves_by)) err(cw, 'resolves_by must be an ISO timestamp with offset');
    else if (isStamp(frozen) && Date.parse(c.resolves_by) <= Date.parse(frozen)) err(cw, 'resolves_by must be after frozen_at');
    if (!['official', 'reported', 'speculative'].includes(c.schedule)) err(cw, 'schedule must be official, reported or speculative');
    if (ed && !ed.pilot && ed.number >= QUALITY_FROM && !c.added) checkInterval(c, cw);
    return;
  }
    for (const f of ['label', 'text', 'criterion', 'resolution_source']) if (!nonEmpty(c[f])) err(cw, `missing ${f}`);
  if (typeof c.probability !== 'number' || c.probability < cfg.probability_min || c.probability > cfg.probability_max)
    err(cw, `probability must be a number between ${cfg.probability_min} and ${cfg.probability_max}`);
  if (!isStamp(c.resolves_by)) err(cw, 'resolves_by must be an ISO timestamp with offset');
  else if (isStamp(frozen) && Date.parse(c.resolves_by) <= Date.parse(frozen)) err(cw, 'resolves_by must be after frozen_at');
  if (!['official', 'reported', 'speculative'].includes(c.schedule)) err(cw, 'schedule must be official, reported or speculative');
  if (c.schedule === 'speculative' && c.story.size === 'lead') err(cw, 'speculative events cannot lead the paper');
  if (c.edition && !c.edition.pilot && c.edition.number >= QUALITY_FROM && !c.added) checkForecast(c, cw);
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
    if (c.exclusive_set && !isInterval(c)) sets.set(c.exclusive_set, (sets.get(c.exclusive_set) || 0) + c.probability);
  }
  for (const [set, sum] of sets) if (Math.abs(sum - 1) > 0.011) err(`${w} set ${set}`, `exclusive set sums to ${sum.toFixed(2)}, must be 1.00`);

  if (ed.number >= QUALITY_FROM) {
    const all = claimsOf(ed).filter((c) => !isInterval(c));
    const extreme = all.filter((c) => c.probability < cfg.extreme_below || c.probability > cfg.extreme_above).length;
    if (all.length && extreme / all.length > cfg.extreme_share_max) err(w, `${extreme} of ${all.length} claims are below ${cfg.extreme_below} or above ${cfg.extreme_above}; at most ${Math.round(cfg.extreme_share_max * 100)}% may be: target the uncertain part`);
    if (ed.number >= NEW_FROM) {
      const [lo, hi] = cfg.contested_band;
      const contested = all.filter((c) => c.probability >= lo && c.probability <= hi).length;
      if (contested < cfg.contested_min) err(w, `${contested} contested claims (${Math.round(lo * 100)}–${Math.round(hi * 100)}%); each edition needs at least ${cfg.contested_min}: genuinely open questions are where skill shows`);
      const iv = claimsOf(ed).filter(isInterval).length;
      if (iv > cfg.interval_claims_max) err(w, `${iv} interval claims; at most ${cfg.interval_claims_max}`);
    }
    for (const st of ed.stories || []) if (!['cz', 'europe', 'world'].includes(st.scope)) err(`${w} story ${st.id}`, 'scope must be cz, europe or world');
    const cz = (ed.stories || []).filter((st) => st.scope === 'cz');
    if (cz.length < cfg.cz_stories_min) err(w, `${cz.length} Czech stories; the Czech edition needs at least ${cfg.cz_stories_min}`);
    if (!(ed.meta?.candidates >= cfg.candidate_pool_min)) err(w, `meta.candidates must record a pool of at least ${cfg.candidate_pool_min}`);
    const lay = ed.cs?.layout;
    if (!lay) err(w, 'cs.layout missing: the Czech edition has its own front page and sections (Domov first)');
    else {
      const placed = [lay.front?.lead, ...(lay.front?.rail || []), ...(lay.sections || []).flatMap((x) => x.stories || [])];
      for (const id of ids) if (placed.filter((x) => x === id).length !== 1) err(w, `cs.layout must place story ${id} exactly once`);
      for (const id of placed) if (!ids.has(id)) err(w, `cs.layout refers to unknown story ${id}`);
      for (const id of lay.front?.rail || []) if ((ed.stories || []).find((x) => x.id === id)?.scope !== 'cz') err(w, `cs.layout rail story ${id} must be Czech (scope cz)`);
      const first = (lay.sections || [])[0];
      if (!first || !(first.stories || []).every((id) => (ed.stories || []).find((x) => x.id === id)?.scope === 'cz')) err(w, 'the first Czech section must be Domov, with Czech stories only');
    }
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
  if (!ed.pilot && ed.number >= QUALITY_FROM) {
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
      if (claimsOf(ed).some((c) => c.id === r.claim && isInterval(c))) err(rw, 'interval claims are not revised in the afternoon');
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
      const claim = claimsOf(mergeUpdate(ed)).find((c) => c.id === r.claim);
      const iv = isInterval(claim);
      if (!(iv ? ['measured', 'void'] : ['yes', 'no', 'void']).includes(r.outcome)) err(rw, `claim ${r.claim}: outcome must be ${iv ? 'measured or void' : 'yes, no or void'}`);
      if (r.outcome === 'measured' && typeof r.value !== 'number') err(rw, `claim ${r.claim}: value (number) required for a measured outcome`);
      if (!nonEmpty(r.note)) err(rw, `claim ${r.claim}: note required`);
      if (r.outcome !== 'void' && !/^https?:\/\//.test(r.evidence || '')) err(rw, `claim ${r.claim}: evidence URL required`);
      if (!isStamp(r.resolved_at)) err(rw, `claim ${r.claim}: resolved_at must be an ISO timestamp`);
      if (r.held !== undefined && typeof r.held !== 'boolean') err(rw, `claim ${r.claim}: held must be true or false`);
      if (r.ambiguous !== undefined && typeof r.ambiguous !== 'boolean') err(rw, `claim ${r.claim}: ambiguous must be true or false`);
      if (!isCorr && claim && ed.number >= NEW_FROM && claim.slip_class && claim.slip_class !== 'none' && r.outcome !== 'void' && typeof r.held !== 'boolean') err(rw, `claim ${r.claim}: held (did the scheduled event take place that day?) required for slip_class ${claim.slip_class}`);
      if (claim && isStamp(r.resolved_at) && Date.parse(r.resolved_at) < Date.parse(claim.resolves_by)) err(rw, `claim ${r.claim}: resolved before its deadline`);
    }
  }
}

// Planning files (evening desk)
{
  const fsx = await import('node:fs');
  const pathx = await import('node:path');
  const dir = pathx.join(process.cwd(), 'data', 'planning');
  if (fsx.existsSync(dir)) for (const f of fsx.readdirSync(dir).filter((x) => x.endsWith('.json'))) {
    let d; try { d = JSON.parse(fsx.readFileSync(pathx.join(dir, f), 'utf8')); } catch (e) { err(`planning/${f}`, `invalid JSON: ${e.message}`); continue; }
    if (f === 'agenda.json') { for (const it of d.items || []) if (!isDate(it.date) || !nonEmpty(it.title) || !/^https?:\/\//.test(it.source || '') || !['cz', 'europe', 'world'].includes(it.scope)) err(`planning/${f}`, `agenda item needs date, title, scope and source URL: ${it.title || '?'}`); continue; }
    if (d.edition !== f.replace('.json', '')) err(`planning/${f}`, 'edition must equal the file name');
  }
}

// Publisher's own forecasts (separate track)
{
  const byId = new Map(editions.map((e) => [e.id, mergeUpdate(e)]));
  for (const pf of loadPublisher()) {
    const pw = `publisher/${pf.file}`;
    const ed = byId.get(pf.file.replace('.json', ''));
    if (!ed) { err(pw, 'no edition with this date'); continue; }
    const offset = (ed.frozen_at || '+00:00').match(/([+-]\d{2}:\d{2}|Z)$/)?.[1] || 'Z';
    const start = Date.parse(`${ed.events_date}T00:00:00${offset}`);
    const seenP = new Set();
    for (const e of pf.entries || []) {
      const c = claimsOf(ed).find((x) => x.id === e.claim);
      if (!c) { err(pw, `unknown claim ${e.claim}`); continue; }
      if (isInterval(c)) err(pw, `claim ${e.claim}: the publisher track covers binary claims only`);
      if (seenP.has(e.claim)) err(pw, `claim ${e.claim} entered twice`);
      seenP.add(e.claim);
      if (typeof e.p !== 'number' || e.p < 0.01 || e.p > 0.99) err(pw, `claim ${e.claim}: p between 0.01 and 0.99`);
      if (!isStamp(e.at) || Date.parse(e.at) >= start) err(pw, `claim ${e.claim}: at must be an ISO time before the events day begins`);
      if (typeof e.saw_paper !== 'boolean') err(pw, `claim ${e.claim}: saw_paper (true/false) required`);
    }
  }
}

// Forecast board
{
  const wl = loadWatchlist();
  const seen = new Set();
  for (const q of wl.questions || []) {
    const qw = `watchlist ${q.id}`;
    if (!nonEmpty(q.id) || seen.has(q.id)) err(qw, 'missing or duplicate id');
    seen.add(q.id);
    if (!['cz', 'europe', 'world'].includes(q.scope)) err(qw, 'scope must be cz, europe or world');
    for (const f of ['question', 'question_cs', 'criterion', 'criterion_cs', 'resolution_source']) if (!nonEmpty(q[f])) err(qw, `missing ${f}`);
    if (!isStamp(q.resolves_by)) err(qw, 'resolves_by must be an ISO timestamp with offset');
    if (!Array.isArray(q.sources) || new Set(q.sources.map((x) => { try { return new URL(x.url).hostname; } catch { return ''; } }).filter(Boolean)).size < 2) err(qw, 'needs sources from at least two different sites');
    let prev = 0;
    for (const h of q.history || []) {
      if (!isStamp(h.at) || Date.parse(h.at) < prev) err(qw, 'history entries need ISO times in order');
      prev = Date.parse(h.at);
      if (typeof h.p !== 'number' || h.p < cfg.probability_min || h.p > cfg.probability_max) err(qw, `history p at ${h.at} out of range`);
      if (!Array.isArray(h.agents) || h.agents.length < 3) err(qw, `history entry ${h.at}: record the forecasters (at least 3; 5 for a full re-forecast)`);
      if (!nonEmpty(h.note) || !nonEmpty(h.note_cs)) err(qw, `history entry ${h.at}: note and note_cs required (what changed)`);
      if (q.resolves_by && Date.parse(h.at) > Date.parse(q.resolves_by)) err(qw, 'history entry after the deadline');
      if (h.market && typeof h.market.p === 'number' && Math.abs(h.market.p - h.p) > cfg.market_departure_flag && !nonEmpty(h.market_note)) err(qw, `history entry ${h.at}: departs from the market by more than ${cfg.market_departure_flag}; explain in market_note`);
      if (Array.isArray(h.agents) && h.agents.length && typeof h.combined === 'number') { const g = geoMeanOdds(h.agents.map((a) => a.p)); if (Math.abs(g - h.combined) > 0.006) err(qw, `history entry ${h.at}: combined must be the geometric mean of odds (${g.toFixed(3)})`); }
    }
    if (!(q.history || []).length) err(qw, 'needs at least one forecast in history');
    if (q.result) {
      if (!['yes', 'no', 'void'].includes(q.result.outcome)) err(qw, 'result.outcome must be yes, no or void');
      if (!nonEmpty(q.result.note) || (q.result.outcome !== 'void' && !/^https?:\/\//.test(q.result.evidence || ''))) err(qw, 'result needs note and evidence URL');
      if (!isStamp(q.result.resolved_at)) err(qw, 'result.resolved_at must be an ISO timestamp');
    }
  }
}

for (const x of warnings) console.warn(`warning  ${x}`);
for (const x of errors) console.error(`error    ${x}`);
console.log(`${editions.length} edition(s) checked: ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
