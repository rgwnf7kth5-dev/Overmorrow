// Fits the combination parameters of METHODOLOGY 4.6 on our own resolved record and writes pipeline/calibration.json.
// Run by the resolver after scoring (and whenever needed): node scripts/calibrate.mjs [--dry]
//
// Two stages, each switched on only when enough claims are resolved (pipeline/config.json) and it wins the
// chronological test (method version 6):
//   1. Forecaster weights (weighting_min_resolved): each role's weight is its inverse Brier score relative to the
//      others, shrunk towards equal weights by n / (n + weighting_shrink).
//   2. Platt calibration (calibration_min_resolved): logit(p) = a + b·x, where x is the (weighted) mean log-odds of
//      the forecasters. b > 1 extremizes (the five forecasters share information, so their average is too timid);
//      a corrects a lean towards yes or no. Fitted by penalised maximum likelihood with a pull towards a = 0, b = 1,
//      so small samples change little.
// The editor copies the active parameters into each claim's forecast.combination; the validator recomputes them.
import fs from 'node:fs';
import { loadEditions, loadConfig, scoredClaims, brier, logLoss, logit, sigmoid, combine, prequential, CALIBRATION_FILE } from './lib.mjs';

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
// Weights fitted on any set of rows, so the chronological test below can refit them for each edition.
function fitWeights(list) {
  const sc = roles.map((role) => { const xs = list.flatMap((r) => r.forecast.agents.filter((a) => a.role === role).map((a) => brier(a.p, r.outcome))); return xs.length ? xs.reduce((s, v) => s + v, 0) / xs.length : null; });
  if (sc.some((x) => x === null)) return Object.fromEntries(roles.map((r) => [r, 1]));
  const inv = sc.map((b) => 1 / Math.max(b, 0.01));
  const meanInv = inv.reduce((s, v) => s + v, 0) / inv.length;
  const lam = list.length / (list.length + cfg.weighting_shrink);
  return Object.fromEntries(roles.map((r, i) => [r, +(1 - lam + lam * inv[i] / meanInv).toFixed(3)]));
}
const xWith = (r, w) => { let sw = 0, sx = 0; for (const a of r.forecast.agents) { const wi = w[a.role] ?? 1; sw += wi; sx += wi * logit(a.p); } return sx / sw; };
const plainP = (r) => combine(r.forecast.agents);
// Version 6: a stage goes live only if it beats the plain ensemble chronologically, with every parameter of every
// stage refitted on results known before each edition's freeze.
const minTrain = cfg.v6?.backtest_min_train ?? 50;
const weightsTest = prequential(rows, (train) => { const w = fitWeights(train); return (r) => sigmoid(xWith(r, w)); }, plainP, minTrain);
const fullTest = prequential(rows, (train) => { const w = fitWeights(train); const pl = fitPlatt(train.map((r) => ({ x: xWith(r, w), y: y(r) })), cfg.calibration_prior_strength); const b = Math.min(cfg.extremize_max, Math.max(1 / cfg.extremize_max, pl.b)); return (r) => sigmoid(pl.a + b * xWith(r, w)); }, plainP, minTrain);
const passes = (t) => !!t && t.n >= (cfg.v6?.backtest_min_test ?? 100) && t.reference - t.brier >= (cfg.v6?.backtest_min_gain ?? 0.002);
const weightsOn = n >= cfg.weighting_min_resolved && roles.every((r) => roleBrier[r].n >= cfg.weighting_min_resolved / 2) && passes(weightsTest);
const weights = weightsOn ? fitWeights(rows) : Object.fromEntries(roles.map((r) => [r, 1]));

// Stage 2: Platt map on x = weighted mean log-odds
const xOf = (r) => xWith(r, weights);
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
// Diagnostics. A stage is switched on only when it has enough claims AND improves the score on later editions.
const score = (f) => { if (!n) return null; let b = 0, l = 0; rows.forEach((r, i) => { const p = Math.min(0.99, Math.max(0.01, f(r, i))); b += brier(p, r.outcome); l += logLoss(p, r.outcome); }); return { brier: +(b / n).toFixed(4), log: +(l / n).toFixed(4) }; };
const clamp = (b) => Math.min(cfg.extremize_max, Math.max(1 / cfg.extremize_max, b));
const raw = score((r) => combine(r.forecast.agents));
const published = score((r) => r.probability);
const plattEligible = n >= cfg.calibration_min_resolved;
const loo = plattEligible ? score((r, i) => { const pl = fitPlatt(data.filter((_, j) => j !== i), cfg.calibration_prior_strength); return sigmoid(pl.a + clamp(pl.b) * data[i].x); }) : null;
const plattOn = plattEligible && passes(fullTest);
const platt = plattOn ? fitPlatt(data, cfg.calibration_prior_strength) : { a: 0, b: 1 };
const clampB = clamp(platt.b);
const params = { method: weightsOn || plattOn ? 'calibrated' : 'geo-odds', weights, platt: { a: +platt.a.toFixed(4), b: +clampB.toFixed(4) } };
const fmt = (t) => (t ? `${t.brier.toFixed(4)} against ${t.reference.toFixed(4)} on ${t.n} later claims` : 'not enough history yet');
const gate = { weights: `${weightsOn ? 'on' : 'off'}: chronological test ${fmt(weightsTest)}`, platt: !plattEligible ? `needs ${cfg.calibration_min_resolved} resolved claims` : `${plattOn ? 'on' : 'off'}: chronological test ${fmt(fullTest)}` };

const out = {
  _about: 'Fitted by scripts/calibrate.mjs on resolved morning claims with five-forecaster records. Copy `params` into forecast.combination of every new claim while method is "calibrated"; the validator recomputes the probability from it. Do not edit by hand.',
  fitted_at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
  version: new Date().toISOString().slice(0, 10),
  resolved: n,
  thresholds: { weighting: cfg.weighting_min_resolved, calibration: cfg.calibration_min_resolved },
  active: { weights: weightsOn, platt: plattOn },
  gate,
  params,
  forecasters: roleBrier,
  diagnostics: { raw_ensemble: raw, published, platt_leave_one_out: loo, chronological: { weights: weightsTest, weights_and_platt: fullTest } },
};
if (dry) console.log(JSON.stringify(out, null, 2));
else { fs.writeFileSync(CALIBRATION_FILE, JSON.stringify(out, null, 2) + '\n'); console.log(`calibration: ${n} resolved claims; weights ${gate.weights}; Platt ${plattOn ? `on (a=${params.platt.a}, b=${params.platt.b})` : gate.platt}.`); }
