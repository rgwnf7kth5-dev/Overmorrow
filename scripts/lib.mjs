import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const EDITIONS_DIR = path.join(ROOT, 'data', 'editions');
export const RESOLUTIONS_DIR = path.join(ROOT, 'data', 'resolutions');
export const UPDATES_DIR = path.join(ROOT, 'data', 'updates');
export const CORRECTIONS_DIR = path.join(ROOT, 'data', 'corrections');
export const WATCHLIST_FILE = path.join(ROOT, 'data', 'watchlist.json');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

export function loadConfig() {
  return readJson(path.join(ROOT, 'pipeline', 'config.json'));
}

/** All editions, oldest first. With merged=true (default) the afternoon update, if any, is applied. */
export function loadEditions({ merged = true } = {}) {
  if (!fs.existsSync(EDITIONS_DIR)) return [];
  return fs.readdirSync(EDITIONS_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort()
    .map((f) => ({ file: f, ...readJson(path.join(EDITIONS_DIR, f)) }))
    .map((ed) => (merged ? mergeUpdate(ed) : ed));
}

/** Afternoon update file for an edition, or null. */
export function loadUpdate(id) {
  const file = path.join(UPDATES_DIR, `${id}.json`);
  return fs.existsSync(file) ? { file: `${id}.json`, ...readJson(file) } : null;
}

/**
 * Applies the afternoon update to a copy of the morning edition. The morning file is never changed:
 * every morning claim keeps its probability in `morning`; a revised claim gets `update` and its
 * `probability` becomes the afternoon figure; stories added in the afternoon go into their own
 * section and their claims have `morning: null`.
 */
export function mergeUpdate(base) {
  const ed = structuredClone(base);
  for (const s of ed.stories) for (const c of s.claims) c.morning = c.probability;
  const up = loadUpdate(ed.id);
  if (!up) return ed;
  ed.update = { frozen_at: up.frozen_at, summary: up.summary, summary_cs: up.summary_cs, revisions: (up.revisions || []).length, added: (up.added || []).length };
  const byClaim = new Map();
  for (const s of ed.stories) for (const c of s.claims) byClaim.set(c.id, c);
  for (const r of up.revisions || []) {
    const c = byClaim.get(r.claim);
    if (!c) continue;
    c.update = { probability: r.probability, reason: r.reason, reason_cs: r.reason_cs, sources: r.sources || [], frozen_at: up.frozen_at };
    c.probability = r.probability;
  }
  if ((up.added || []).length) {
    for (const st of up.added) {
      const story = { ...st, added: true, size: st.size || 'quarter' };
      story.claims = story.claims.map((c) => ({ ...c, morning: null, update: { probability: c.probability, frozen_at: up.frozen_at } }));
      ed.stories.push(story);
    }
    ed.sections = [{ name: 'Afternoon Update', dek: up.summary || '', stories: up.added.map((s) => s.id), update: true }, ...(ed.sections || [])];
    if (ed.cs) ed.cs.sections = [{ name: 'Odpolední aktualizace', dek: up.summary_cs || '' }, ...(ed.cs.sections || [])];
  }
  return ed;
}

/** Corrections to the text of a published edition (facts around the forecasts), or null. The edition file is never changed. */
export function loadCorrections(id) {
  const file = path.join(CORRECTIONS_DIR, `${id}.json`);
  return fs.existsSync(file) ? { file: `${id}.json`, ...readJson(file) } : null;
}

/** Map story id -> list of corrections in the given language. */
export function correctionsFor(id, lang = 'en') {
  const map = new Map();
  for (const c of loadCorrections(id)?.corrections || []) {
    const list = map.get(c.story) || [];
    list.push({ date: c.date, text: lang === 'cs' && c.text_cs ? c.text_cs : c.text, url: c.url });
    map.set(c.story, list);
  }
  return map;
}

/** Resolution file for an edition, or null. */
export function loadResolution(id) {
  const file = path.join(RESOLUTIONS_DIR, `${id}.json`);
  return fs.existsSync(file) ? { file: `${id}.json`, ...readJson(file) } : null;
}

/** Map claim id -> final result, with corrections applied. */
export function resultsFor(id) {
  const res = loadResolution(id);
  const map = new Map();
  if (!res) return map;
  for (const r of res.results || []) map.set(r.claim, { ...r });
  for (const c of res.corrections || []) {
    const prev = map.get(c.claim);
    map.set(c.claim, { ...prev, ...c, corrected: true, original: prev?.outcome });
  }
  return map;
}

/** Every claim in an edition, with its story and section. */
export function claimsOf(edition) {
  const sectionOf = new Map();
  for (const s of edition.sections || []) for (const id of s.stories) sectionOf.set(id, s.name);
  const out = [];
  for (const story of edition.stories) {
    const section = sectionOf.get(story.id) || 'Front page';
    for (const claim of story.claims || []) out.push({ ...claim, story, section, edition });
  }
  return out;
}

export const brier = (p, outcome) => (p - (outcome === 'yes' ? 1 : 0)) ** 2;
export const logLoss = (p, outcome) => -Math.log(outcome === 'yes' ? p : 1 - p);

/**
 * Scored records (yes/no only) across the given editions.
 * track 'latest': the last published probability (afternoon if revised or added, else morning);
 * track 'morning': morning probabilities only (afternoon-added claims are skipped).
 */
export function scoredClaims(editions, track = 'latest') {
  const rows = [];
  for (const ed of editions) {
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) {
      const r = results.get(c.id);
      if (!r || (r.outcome !== 'yes' && r.outcome !== 'no')) continue;
      const p = track === 'morning' ? c.morning : c.probability;
      if (p === null || p === undefined) continue;
      rows.push({ ...c, probability: p, outcome: r.outcome, result: r });
    }
  }
  return rows;
}

export function summarise(rows) {
  if (!rows.length) return null;
  const n = rows.length;
  const b = rows.reduce((s, r) => s + brier(r.probability, r.outcome), 0) / n;
  const l = rows.reduce((s, r) => s + logLoss(r.probability, r.outcome), 0) / n;
  const hits = rows.filter((r) => (r.probability > 0.5) === (r.outcome === 'yes')).length;
  return { n, brier: b, log: l, hits };
}

/** Geometric mean of odds, the ensemble combination rule (METHODOLOGY 4.4). */
export function geoMeanOdds(ps) {
  const lo = ps.reduce((a, p) => a + Math.log(p / (1 - p)), 0) / ps.length;
  return 1 / (1 + Math.exp(-lo));
}

/** The forecast board: standing questions with longer horizons, re-forecast as evidence changes. */
export function loadWatchlist() {
  return fs.existsSync(WATCHLIST_FILE) ? readJson(WATCHLIST_FILE) : { questions: [] };
}

/** Probability in force for a watch question at a given time (the last history entry at or before it). */
export function watchProbAt(q, t) {
  let p = null;
  for (const h of q.history || []) if (Date.parse(h.at) <= t) p = h.p;
  return p;
}

/**
 * Time-averaged Brier score of a resolved watch question: the mean, over every hour from the first forecast to the
 * resolution, of the Brier score of the probability then in force. Rewards being right early, as Metaculus does.
 */
export function watchScore(q) {
  if (!q.result || !['yes', 'no'].includes(q.result.outcome) || !(q.history || []).length) return null;
  const start = Date.parse(q.history[0].at);
  const end = Math.min(Date.parse(q.result.resolved_at || q.resolves_by), Date.parse(q.resolves_by));
  if (!(end > start)) return { brier: brier(q.history[0].p, q.result.outcome), final: q.history[q.history.length - 1].p };
  let sum = 0, n = 0;
  for (let t = start; t <= end; t += 3600e3) { sum += brier(watchProbAt(q, t), q.result.outcome); n++; }
  return { brier: sum / n, final: watchProbAt(q, end) };
}

// ---------- added 23 Oct 2026: skill, calibration, intervals, schedule slips, publisher track ----------

export const PUBLISHER_DIR = path.join(ROOT, 'data', 'publisher');
export const CALIBRATION_FILE = path.join(ROOT, 'pipeline', 'calibration.json');
export const SLIP_FILE = path.join(ROOT, 'pipeline', 'reference-data', 'schedule-slip.json');

const logit = (p) => Math.log(p / (1 - p));
const sigmoid = (x) => 1 / (1 + Math.exp(-x));
export { logit, sigmoid };

/** True for a numeric-range claim (kind "interval"); every other claim is binary. */
export const isInterval = (c) => c?.kind === 'interval';

/**
 * Combination rule with fitted parameters (METHODOLOGY 4.6). Without parameters it is the plain geometric
 * mean of odds. With them: weighted mean of log-odds (weights by role, default 1), then the Platt map
 * logit(p) = a + b·x fitted on our own record (b > 1 extremizes, a corrects a lean towards yes or no).
 */
export function combine(agents, params) {
  if (!params || params.method === 'geo-odds') return geoMeanOdds(agents.map((a) => a.p));
  const w = params.weights || {};
  let sw = 0, sx = 0;
  for (const a of agents) { const wi = w[a.role] ?? 1; sw += wi; sx += wi * logit(a.p); }
  const x = sx / sw;
  const pl = params.platt || { a: 0, b: 1 };
  return sigmoid(pl.a + pl.b * x);
}

/** Brier skill score against a reference: 1 = perfect, 0 = no better than the reference, below 0 = worse. */
export const skill = (ours, ref) => (ref > 0 ? 1 - ours / ref : null);

/**
 * Murphy decomposition of the Brier score over ten probability bands:
 * Brier ≈ reliability − resolution + uncertainty. Low reliability = well calibrated; high resolution = the
 * forecasts separate what happens from what does not (the part a coin toss or a base rate cannot do).
 */
export function murphy(rows) {
  if (!rows.length) return null;
  const N = rows.length;
  const obar = rows.filter((r) => r.outcome === 'yes').length / N;
  const bins = new Map();
  for (const r of rows) { const k = Math.min(9, Math.floor(r.probability * 10)); if (!bins.has(k)) bins.set(k, []); bins.get(k).push(r); }
  let rel = 0, res = 0;
  for (const list of bins.values()) {
    const n = list.length;
    const pk = list.reduce((s, r) => s + r.probability, 0) / n;
    const ok = list.filter((r) => r.outcome === 'yes').length / n;
    rel += n * (pk - ok) ** 2; res += n * (ok - obar) ** 2;
  }
  return { reliability: rel / N, resolution: res / N, uncertainty: obar * (1 - obar), base: obar };
}

/**
 * Interval claims: quantiles q10, q50, q90 of a number published by a named source. Scored by the interval
 * score of the 80% range (width plus 10× the distance by which the value fell outside), divided by the claim's
 * `scale` (the usual size of a surprise for that indicator) so that different units can be averaged.
 */
export function intervalScore(c, y) {
  const { q10: l, q90: u } = c.quantiles;
  const a = 0.2;
  const is = (u - l) + (2 / a) * Math.max(0, l - y) + (2 / a) * Math.max(0, y - u);
  return is / (c.scale || 1);
}
export const intervalHit = (c, y) => y >= c.quantiles.q10 && y <= c.quantiles.q90;
/** Absolute error of the median in scale units; also used for the consensus benchmark. */
export const scaledError = (c, y, centre = c.quantiles.q50) => Math.abs(y - centre) / (c.scale || 1);
/** 0..1 closeness for colouring: 1 at the median, 0.5 at the edge of the 80% range, falling to 0 a range-width outside. */
export function intervalCloseness(c, y) {
  const { q10: l, q50: m, q90: u } = c.quantiles;
  if (y >= l && y <= u) { const half = y >= m ? u - m : m - l; return half > 0 ? 0.5 + 0.5 * (1 - Math.abs(y - m) / half) : 1; }
  const width = Math.max(u - l, 1e-9);
  const out = y < l ? l - y : y - u;
  return Math.max(0, 0.5 - 0.5 * (out / width));
}

/** Resolved interval claims across editions: rows with value. */
export function measuredClaims(editions) {
  const rows = [];
  for (const ed of editions) {
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) {
      if (!isInterval(c)) continue;
      const r = results.get(c.id);
      if (!r || r.outcome !== 'measured' || typeof r.value !== 'number') continue;
      rows.push({ ...c, value: r.value, result: r });
    }
  }
  return rows;
}

/** Every result, binary or measured, with its claim (for quality metrics: void, ambiguous, late, held). */
export function allResults(editions) {
  const rows = [];
  for (const ed of editions) {
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) { const r = results.get(c.id); if (r) rows.push({ claim: c, result: r }); }
  }
  return rows;
}

/** Schedule-slip classes: prior from reference data, updated with our own record (results with `held`). */
export function loadSlip() {
  return fs.existsSync(SLIP_FILE) ? readJson(SLIP_FILE) : { classes: [] };
}
export function slipTable(editions) {
  const ref = loadSlip();
  const own = new Map();
  for (const { claim, result } of allResults(editions)) {
    if (typeof result.held !== 'boolean' || !claim.slip_class || claim.slip_class === 'none') continue;
    const o = own.get(claim.slip_class) || { held: 0, slipped: 0 };
    result.held ? o.held++ : o.slipped++;
    own.set(claim.slip_class, o);
  }
  return (ref.classes || []).map((k) => {
    const o = own.get(k.id) || { held: 0, slipped: 0 };
    const n = o.held + o.slipped;
    const post = (k.prior_rate * k.prior_n + o.slipped) / (k.prior_n + n);
    return { ...k, own: o, own_n: n, rate: post };
  });
}

/** Fitted calibration parameters (scripts/calibrate.mjs), or null. */
export function loadCalibration() {
  return fs.existsSync(CALIBRATION_FILE) ? readJson(CALIBRATION_FILE) : null;
}

/** The publisher's own forecasts on the paper's claims (a separate, separately scored track). */
export function loadPublisher() {
  if (!fs.existsSync(PUBLISHER_DIR)) return [];
  return fs.readdirSync(PUBLISHER_DIR).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort()
    .map((f) => ({ file: f, ...readJson(path.join(PUBLISHER_DIR, f)) }));
}

/** Decimal bookmaker odds → probabilities with the margin (overround) removed proportionally. */
export function oddsToProbs(odds) {
  const inv = odds.map((o) => 1 / o);
  const s = inv.reduce((a, b) => a + b, 0);
  return { probs: inv.map((x) => x / s), overround: s - 1 };
}
