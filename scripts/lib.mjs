import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const EDITIONS_DIR = path.join(ROOT, 'data', 'editions');
export const RESOLUTIONS_DIR = path.join(ROOT, 'data', 'resolutions');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

export function loadConfig() {
  return readJson(path.join(ROOT, 'pipeline', 'config.json'));
}

/** All editions, oldest first. */
export function loadEditions() {
  if (!fs.existsSync(EDITIONS_DIR)) return [];
  return fs.readdirSync(EDITIONS_DIR)
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort()
    .map((f) => ({ file: f, ...readJson(path.join(EDITIONS_DIR, f)) }));
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

/** Scored records (yes/no only) across the given editions. */
export function scoredClaims(editions) {
  const rows = [];
  for (const ed of editions) {
    const results = resultsFor(ed.id);
    for (const c of claimsOf(ed)) {
      const r = results.get(c.id);
      if (!r || (r.outcome !== 'yes' && r.outcome !== 'no')) continue;
      rows.push({ ...c, outcome: r.outcome, result: r });
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
