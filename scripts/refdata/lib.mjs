// Shared helpers for the reference-data scripts (Node 20, no npm dependencies).
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
export const CACHE = path.join(ROOT, 'work', 'refdata-cache');
export const OUT = path.join(ROOT, 'pipeline', 'reference-data');

/**
 * Download url to dest unless it is already cached (or force is set).
 * Uses the global fetch; if that fails (e.g. Node's fetch ignores HTTPS_PROXY),
 * falls back to the curl CLI, which honours proxy settings.
 */
export async function download(url, dest, { force = false } = {}) {
  if (!force && fs.existsSync(dest) && fs.statSync(dest).size > 0) return { cached: true };
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  } catch (err) {
    execFileSync('curl', ['-sSfL', '-o', dest, url], { stdio: 'inherit' });
  }
  return { cached: false };
}

/** Unzip an archive into dir using the `unzip` CLI. */
export function unzip(zip, dir) {
  fs.mkdirSync(dir, { recursive: true });
  execFileSync('unzip', ['-o', '-q', zip, '-d', dir]);
}

/** Descriptive statistics helpers. */
export const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
export function sd(xs) {
  if (xs.length < 2) return null;
  const m = mean(xs);
  return Math.sqrt(xs.reduce((a, b) => a + (b - m) ** 2, 0) / (xs.length - 1));
}
/** Quantile with linear interpolation (type 7, as R/numpy default). */
export function quantile(xs, q) {
  const s = [...xs].sort((a, b) => a - b);
  const h = (s.length - 1) * q;
  const lo = Math.floor(h);
  return s[lo] + (h - lo) * ((s[lo + 1] ?? s[lo]) - s[lo]);
}
export const round = (x, d = 4) => (x == null || Number.isNaN(x) ? null : Math.round(x * 10 ** d) / 10 ** d);
