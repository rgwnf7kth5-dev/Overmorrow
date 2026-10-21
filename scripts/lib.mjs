import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const EDITIONS_DIR = path.join(ROOT, 'data', 'editions');
export const RESOLUTIONS_DIR = path.join(ROOT, 'data', 'resolutions');
export const UPDATES_DIR = path.join(ROOT, 'data', 'updates');

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
