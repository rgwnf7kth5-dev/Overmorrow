#!/usr/bin/env node
// Small probability models for forecasters (ES module + CLI, no dependencies).
//
//   import { pLeadAbove, pWinFromPolls, pAtLeastK, pReleaseAbove } from './scripts/refdata/models.mjs';
//
//   node scripts/refdata/models.mjs lead 2.0 3.5          # P(actual lead > 0) given poll lead 2.0, sd 3.5
//   node scripts/refdata/models.mjs leadabove 2.0 3.5 1   # P(actual lead > 1)
//   node scripts/refdata/models.mjs atleast 108 0.98 105  # P(at least 105 of 108 say yes), each with p = 0.98
//   node scripts/refdata/models.mjs release 2.4 2.5 0.15  # P(released figure > 2.5) given consensus 2.4, surprise sd 0.15
//
// See pipeline/reference-data/README.md for which sd to use.

/** Standard normal CDF (Abramowitz–Stegun 7.1.26 via erf; |error| < 1.5e-7). */
export function normCdf(z) {
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-(z * z) / 2);
  return z >= 0 ? 0.5 * (1 + y) : 0.5 * (1 - y);
}

/**
 * Probability that the true lead exceeds `threshold`, when the final poll lead is `leadMean`
 * and the error of the lead is normal with sd `leadSd` (percentage points).
 * Lead error sd from poll-error.json: pooled.all.rms_lead_error, or the country row.
 */
export function pLeadAbove(leadMean, leadSd, threshold = 0) {
  if (!(leadSd > 0)) throw new Error('leadSd must be > 0');
  return 1 - normCdf((threshold - leadMean) / leadSd);
}

/** Probability that the poll leader actually wins (lead > 0). Same normal model. */
export function pWinFromPolls(leadMean, errorSd) {
  return pLeadAbove(leadMean, errorSd, 0);
}

/**
 * Binomial: P(X >= k) where X ~ Binomial(n, pEach). Assumes independent deputies/voters, which
 * understates the risk of correlated absences (illness waves, travel, a rebel faction). For
 * coalition-vote questions prefer the empirical p_yes_at_least_S_minus_k in cz-chamber.json
 * and use this only as a cross-check.
 */
export function pAtLeastK(n, pEach, k) {
  if (k <= 0) return 1;
  if (k > n) return 0;
  let logC = 0; // log C(n, i), built incrementally
  let total = 0;
  for (let i = 0; i <= n; i++) {
    if (i > 0) logC += Math.log(n - i + 1) - Math.log(i);
    if (i < k) continue;
    const lp = logC + (i ? i * Math.log(pEach) : 0) + (n - i ? (n - i) * Math.log(1 - pEach) : 0);
    total += Math.exp(lp);
  }
  return Math.min(1, total);
}

/**
 * Data release: P(released value > threshold) when the release = consensus + surprise,
 * surprise ~ Normal(0, surpriseSd). Use a strict `>`; for `>=` with a rounded release, shift the
 * threshold down by half the rounding unit (e.g. 2.5 -> 2.45 for one decimal).
 */
export function pReleaseAbove(consensus, threshold, surpriseSd) {
  if (!(surpriseSd > 0)) throw new Error('surpriseSd must be > 0');
  return 1 - normCdf((threshold - consensus) / surpriseSd);
}

/**
 * Bookmaker decimal odds for all outcomes of one market → probabilities with the margin removed
 * (proportional method). Returns { probs, overround }. Use only complete markets (every outcome listed).
 */
export function fromOdds(odds) {
  if (odds.length < 2 || odds.some((o) => !(o > 1))) throw new Error('give decimal odds > 1 for every outcome');
  const inv = odds.map((o) => 1 / o);
  const s = inv.reduce((x, y) => x + y, 0);
  return { probs: inv.map((x) => x / s), overround: s - 1 };
}

/**
 * Quantiles of a data release from consensus and the usual surprise size (Normal): q10, q50, q90.
 * For interval claims (kind "interval"); widen when the consensus range is wide or the source is noisy.
 */
export function releaseQuantiles(consensus, surpriseSd) {
  const z = 1.2815515655446004;
  return { q10: consensus - z * surpriseSd, q50: consensus, q90: consensus + z * surpriseSd };
}

// ------------------------------------------------------------------ CLI
const isMain = import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('models.mjs');
if (isMain) {
  const [cmd, ...a] = process.argv.slice(2);
  const n = a.map(Number);
  const fmt = (p) => `${(p * 100).toFixed(1)}%`;
  const usage = 'usage: models.mjs lead <leadMean> <sd> | leadabove <leadMean> <sd> <threshold> | atleast <n> <pEach> <k> | release <consensus> <threshold> <surpriseSd> | odds <o1> <o2> [...] | quantiles <consensus> <surpriseSd>';
  if (cmd === 'odds' && a.length >= 2) { const r = fromOdds(n); console.log(JSON.stringify({ probs: r.probs.map((x) => +x.toFixed(4)), overround: +r.overround.toFixed(4) })); process.exit(0); }
  if (cmd === 'quantiles' && a.length === 2) { const q = releaseQuantiles(n[0], n[1]); console.log(JSON.stringify(Object.fromEntries(Object.entries(q).map(([k, v]) => [k, +v.toFixed(4)])))); process.exit(0); }
  let p;
  if (cmd === 'lead' && a.length === 2) p = pWinFromPolls(n[0], n[1]);
  else if (cmd === 'leadabove' && a.length === 3) p = pLeadAbove(n[0], n[1], n[2]);
  else if (cmd === 'atleast' && a.length === 3) p = pAtLeastK(n[0], n[1], n[2]);
  else if (cmd === 'release' && a.length === 3) p = pReleaseAbove(n[0], n[1], n[2]);
  else {
    console.error(usage);
    process.exit(cmd ? 1 : 0);
  }
  console.log(`${p.toFixed(4)} (${fmt(p)})`);
}
