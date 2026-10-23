// Fits the combination parameters of METHODOLOGY 4.6 on our own resolved record and writes pipeline/calibration.json.
// Run by the resolver after scoring (and whenever needed): node scripts/calibrate.mjs [--dry]
//
// Two stages, each switched on only when enough claims are resolved (pipeline/config.json):
//   1. Forecaster weights (weighting_min_resolved): each role's weight is its inverse Brier score relative to the
//      others, shrunk towards equal weights by n / (n + weighting_shrink).
//   2. Platt calibration (calibration_min_resolved): logit(p) = a + b·x, where x is the (weighted) mean log-odds of
//      the forecasters. b > 1 extremizes (the five forecasters share information, so their average is too timid);
//      a corrects a lean towards yes or no. Fitted by penalised maximum likelihood with a pull towards a = 0, b = 1,
//      so small samples change little.
// The editor copies the active parameters into each claim's forecast.combination; the validator recomputes them.
import fs from 'node:fs';
import { loadEditions, loadConfig, scoredClaims, brier, logLoss, logit, sigmoid, combine, CALIBRATION_FILE } from './lib.mjs';

const cfg = loadConfig();
const dry = process.argv.includes('--dry');
const rows = scoredClaims(loadEditions(), 'morning').filter((r) => Array.isArray(r.forecast?.agents) && r.forecast.agents.length >= 3);
const n = rows.length;
const roles = cfg.ensemble_roles;
const y = (r) => (r.outcome === 'yes' ? 1 : 0);

// Stage 1: weights
const roleBrier = {};
for (const role of roles) {
  const xs = rows.flatMap((r) => r.forecast.agents.filter((a) => a.role === role).map((a) => brier(a.p, r.outcome)));
  roleBrier[role] = xs.length ? { n: xs.length, brier: xs.reduce((s, v) => s + v, 0) / xs.length } : { n: 0, brier: null };
}
const weightsOn = n >= cfg.weighting_min_resolved && roles.every((r) => roleBrier[r].n >= cfg.weighting_min_resolved / 2);
let weights = Object.fromEntries(roles.map((r) => [r, 1]));
if (weightsOn) {
  const inv = roles.map((r) => 1 / Math.max(roleBrier[r].brier, 0.01));
  const meanInv = inv.reduce((s, v) => s + v, 0) / inv.length;
  const lam = n / (n + cfg.weighting_shrink);
  weights = Object.fromEntries(roles.map((r, i) => [r, +(1 - lam + lam * inv[i] / meanInv).toFixed(3)]));
}

// Stage 2: Platt map on x = weighted mean log-odds
const xOf = (r) => { let sw = 0, sx = 0; for (const a of r.forecast.agents) { const w = weights[a.role] ?? 1; sw += w; sx += w * logit(a.p); } return sx / sw; };
const data = rows.map((r) => ({ x: xOf(r), y: y(r) }));
function fitPlatt(pts, tau) {
  // Newton–Raphson on the log-likelihood with a Gaussian prior a ~ N(0, 1/tau), b ~ N(1, 1/tau).
  let a = 0, b = 1;
  for (let it = 0; it < 50; it++) {
    let ga = -tau * a, gb = -tau * (b - 1), haa = -tau, hab = 0, hbb = -tau;
    for (const { x, y: t } of pts) { const p = sigmoid(a + b * x); const w = p * (1 - p); ga += t - p; gb += (t - p) * x; haa -= w; hab -= w * x; hbb -= w * x * x; }
    const det = haa * hbb - hab * hab;
    const da = (hbb * ga - hab * gb) / det, db = (haa * gb - hab * ga) / det;
    a -= da; b -= db;
    if (Math.abs(da) + Math.abs(db) < 1e-9) break;
  }
  return { a, b };
}
const plattOn = n >= cfg.calibration_min_resolved;
const platt = plattOn ? fitPlatt(data, cfg.calibration_prior_strength) : { a: 0, b: 1 };
const clampB = Math.min(cfg.extremize_max, Math.max(1 / cfg.extremize_max, platt.b));
const params = { method: weightsOn || plattOn ? 'calibrated' : 'geo-odds', weights, platt: { a: +platt.a.toFixed(4), b: +clampB.toFixed(4) } };

// In-sample diagnostics (for the accuracy page and the report). Out-of-sample: leave-one-out for Platt.
const score = (f) => { if (!n) return null; let b = 0, l = 0; rows.forEach((r, i) => { const p = Math.min(0.99, Math.max(0.01, f(r, i))); b += brier(p, r.outcome); l += logLoss(p, r.outcome); }); return { brier: +(b / n).toFixed(4), log: +(l / n).toFixed(4) }; };
const raw = score((r) => combine(r.forecast.agents));
const published = score((r) => r.probability);
const loo = plattOn ? score((r, i) => { const pl = fitPlatt(data.filter((_, j) => j !== i), cfg.calibration_prior_strength); return sigmoid(pl.a + Math.min(cfg.extremize_max, Math.max(1 / cfg.extremize_max, pl.b)) * data[i].x); }) : null;

const out = {
  _about: 'Fitted by scripts/calibrate.mjs on resolved morning claims with five-forecaster records. Copy `params` into forecast.combination of every new claim while method is "calibrated"; the validator recomputes the probability from it. Do not edit by hand.',
  fitted_at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
  version: new Date().toISOString().slice(0, 10),
  resolved: n,
  thresholds: { weighting: cfg.weighting_min_resolved, calibration: cfg.calibration_min_resolved },
  active: { weights: weightsOn, platt: plattOn },
  params,
  forecasters: roleBrier,
  diagnostics: { raw_ensemble: raw, published, platt_leave_one_out: loo },
};
if (dry) console.log(JSON.stringify(out, null, 2));
else { fs.writeFileSync(CALIBRATION_FILE, JSON.stringify(out, null, 2) + '\n'); console.log(`calibration: ${n} resolved claims; weights ${weightsOn ? 'on' : `off (need ${cfg.weighting_min_resolved})`}, Platt ${plattOn ? `on (a=${params.platt.a}, b=${params.platt.b})` : `off (need ${cfg.calibration_min_resolved})`}.`); }
