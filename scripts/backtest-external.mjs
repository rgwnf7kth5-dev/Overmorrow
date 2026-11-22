#!/usr/bin/env node
// Backtest of other vendors' models on claims that have already resolved (22 November 2026).
//
// Question: had the three models been among the forecasters from the start, would the published figure have been better?
// Each model reads what our forecasters read at the time (the claim, the criterion, the window, the dossier and the
// signals file, with the date of the edition's freeze as "today") and gives one probability. It has no search tool, so
// it knows nothing later than its training data; a control set without any dossier measures what it knows by itself.
// Nothing here touches an edition: the answers go to data/backtest/external.json.
//
//   node scripts/backtest-external.mjs run [--minutes N]   call the providers for what is not recorded yet (needs the
//                                                          environment that holds the keys); stops starting new calls
//                                                          after N minutes (default 24) so it can be run again
//   node scripts/backtest-external.mjs report              the comparison, from the recorded answers only
//
// Exit codes of `run`: 0 everything recorded; 6 more remains (run again); 3 a provider keeps failing (see output).

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadEditions, scoredClaims, withVoices, brier, loadConfig } from './lib.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'data/backtest/external.json');
const [cmd, ...rest] = process.argv.slice(2);
const cfg = loadConfig();
const providers = (cfg.shadow?.external?.providers || []).filter((p) => p.model);
const ok = (p) => typeof p === 'number' && p > 0 && p < 1;
const odds = (p) => p / (1 - p);
const geo = (ps) => { const m = Math.exp(ps.reduce((s, p) => s + Math.log(odds(p)), 0) / ps.length); return m / (1 + m); };
const addDays = (d, n) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };

// The resolved yes/no claims with a dossier and a full record of the five forecasters; the published figure is the morning one.
const rows = scoredClaims(loadEditions(), 'morning').filter((r) => r.kind !== 'interval').map((r) => {
  const dossier = r.dossier || r.forecast?.dossier, signals = r.signals || r.forecast?.signals;
  return { ...r, key: `${r.edition.id}:${r.id}`, dossierFile: dossier && fs.existsSync(path.join(ROOT, dossier)) ? dossier : null, signalsFile: signals && fs.existsSync(path.join(ROOT, signals)) ? signals : null };
}).filter((r) => r.dossierFile && (r.forecast?.agents || []).filter((a) => ok(a.p)).length >= 5);
// The control set: every 12th claim in a fixed order, asked without the dossier.
const control = new Set([...rows].sort((a, b) => a.key.localeCompare(b.key)).filter((_, i) => i % 12 === 5).map((r) => r.key));

const load = () => (fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { note: 'Backtest of other vendors\' models on resolved claims; see scripts/backtest-external.mjs.', providers: providers.map((p) => `${p.id} ${p.model}`), answers: {}, control: {} });
const save = (d) => { fs.mkdirSync(path.dirname(OUT), { recursive: true }); fs.writeFileSync(OUT, `${JSON.stringify(d, null, 1)}\n`); };
const head = (r) => { const ed = r.edition, today = String(ed.frozen_at || addDays(ed.id, -2)).slice(0, 10), day = ed.events_date || addDays(ed.id, -1); return `Today's date: ${today}.\nClaim: ${r.text}\nCriterion: ${r.criterion}\nEvent window: ${r.event_window?.start || day} to ${r.event_window?.end || day} (${r.tz || 'local time'}). The claim is NO if the event does not happen in this window.\n`; };
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8').trim();

if (cmd === 'run') {
  const minutes = Number((rest.find((a) => /^\d+$/.test(a)) ?? (rest.includes('--minutes') ? rest[rest.indexOf('--minutes') + 1] : 24))) || 24;
  const deadline = Date.now() + minutes * 60000;
  const data = load();
  const work = fs.mkdtempSync(path.join(os.tmpdir(), 'overmorrow-backtest-'));
  const fails = Object.fromEntries(providers.map((p) => [p.id, 0])), lastError = {};
  const call = (provider, body) => new Promise((resolve) => {
    const file = path.join(work, `${provider}-${Math.random().toString(36).slice(2)}.txt`);
    fs.writeFileSync(file, body);
    execFile('node', [path.join(ROOT, 'scripts/external.mjs'), 'forecast', provider, file], { timeout: 330000, maxBuffer: 64e6 }, (err, stdout, stderr) => {
      fs.rmSync(file, { force: true });
      if (!err) { try { return resolve(JSON.parse(stdout)); } catch { /* falls through */ } }
      resolve({ error: String(stderr || err?.message || 'no output').replace(/\s+/g, ' ').slice(0, 200) });
    });
  });
  // One queue per provider, so a slow or failing provider does not hold the others; a provider stops after 8 failures in a row.
  let saved = Date.now();
  await Promise.all(providers.map(async (p) => {
    const jobs = [];
    for (const r of rows) {
      if (!ok(data.answers[r.key]?.[p.id])) jobs.push({ r, kind: 'answers' });
      if (control.has(r.key) && !ok(data.control[r.key]?.[p.id])) jobs.push({ r, kind: 'control' });
    }
    let i = 0;
    await Promise.all(Array.from({ length: 5 }, async () => {
      while (i < jobs.length && Date.now() < deadline && fails[p.id] < 8) {
        const { r, kind } = jobs[i++];
        const body = kind === 'control' ? head(r) : `${head(r)}\nDOSSIER (facts only)\n${read(r.dossierFile)}\n${r.signalsFile ? `\nSIGNALS (markets, odds, other people's models)\n${read(r.signalsFile)}\n` : ''}`;
        const out = await call(p.id, body);
        if (out.error) { fails[p.id]++; lastError[p.id] = out.error; continue; }
        fails[p.id] = 0;
        (data[kind][r.key] ||= {})[p.id] = out.p;
        if (Date.now() - saved > 20000) { save(data); saved = Date.now(); }
      }
    }));
  }));
  save(data);
  fs.rmSync(work, { recursive: true, force: true });
  const left = Object.fromEntries(providers.map((p) => [p.id, rows.filter((r) => !ok(data.answers[r.key]?.[p.id])).length + [...control].filter((k) => !ok(data.control[k]?.[p.id])).length]));
  const stuck = providers.filter((p) => fails[p.id] >= 8).map((p) => `${p.id}: ${lastError[p.id]}`);
  console.log(JSON.stringify({ claims: rows.length, control: control.size, left, stuck }, null, 1));
  process.exit(stuck.length ? 3 : Object.values(left).some((n) => n) ? 6 : 0);
} else if (cmd === 'report') {
  const data = load();
  const full = rows.filter((r) => providers.every((p) => ok(data.answers[r.key]?.[p.id])));
  const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
  const score = (set, f) => mean(set.map((r) => brier(f(r), r.outcome)));
  const five = (r) => geo(r.forecast.agents.map((a) => a.p).filter(ok));
  const ext = (r) => providers.map((p) => data.answers[r.key][p.id]);
  // Paired bootstrap of the difference in Brier score (method minus published), 4000 resamples, fixed seed.
  let seed = 20261122; const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
  const interval = (set, f) => {
    const d = set.map((r) => brier(f(r), r.outcome) - brier(r.probability, r.outcome));
    const sims = Array.from({ length: 4000 }, () => { let s = 0; for (let i = 0; i < d.length; i++) s += d[(rnd() * d.length) | 0]; return s / d.length; }).sort((a, b) => a - b);
    return { diff: mean(d), lo: sims[100], hi: sims[3899], better: sims.filter((x) => x < 0).length / 4000 };
  };
  const lines = (set) => ({
    claims: set.length,
    published: score(set, (r) => r.probability),
    five_plain_mean: score(set, five),
    ...Object.fromEntries(providers.map((p) => [`${p.id}_alone`, score(set, (r) => data.answers[r.key][p.id])])),
    three_external_alone: score(set, (r) => geo(ext(r))),
    five_plus_three: score(set, (r) => withVoices(r, ext(r))),
    five_plus_three_vs_published: interval(set, (r) => withVoices(r, ext(r))),
    five_plus_three_vs_five_plain: (() => { const d = set.map((r) => brier(withVoices(r, ext(r)), r.outcome) - brier(five(r), r.outcome)); return mean(d); })(),
    ...Object.fromEntries(providers.map((p) => [`five_plus_${p.id}`, score(set, (r) => withVoices(r, [data.answers[r.key][p.id]]))])),
  });
  const open = full.filter((r) => r.probability >= 0.2 && r.probability <= 0.8);
  const ctl = [...control].map((k) => rows.find((r) => r.key === k)).filter((r) => r && providers.every((p) => ok(data.control[r.key]?.[p.id])));
  const corr = (a, b) => { const ma = mean(a), mb = mean(b); const c = a.reduce((s, x, i) => s + (x - ma) * (b[i] - mb), 0); return c / Math.sqrt(a.reduce((s, x) => s + (x - ma) ** 2, 0) * b.reduce((s, x) => s + (x - mb) ** 2, 0)); };
  const lo = (p) => Math.log(odds(p));
  console.log(JSON.stringify({
    recorded: { of: rows.length, complete: full.length },
    all: lines(full), open_20_80: lines(open),
    control_without_dossier: { claims: ctl.length, ...Object.fromEntries(providers.map((p) => [p.id, score(ctl, (r) => data.control[r.key][p.id])])), same_claims_with_dossier: Object.fromEntries(providers.map((p) => [p.id, score(ctl.filter((r) => full.includes(r)), (r) => data.answers[r.key][p.id])])), always_half: 0.25, yes_share: mean(ctl.map((r) => (r.outcome === 'yes' ? 1 : 0))) },
    correlation_of_log_odds_with_our_five: Object.fromEntries(providers.map((p) => [p.id, corr(full.map((r) => lo(data.answers[r.key][p.id])), full.map((r) => lo(five(r))))])),
    correlation_between_providers: Object.fromEntries(providers.flatMap((a, i) => providers.slice(i + 1).map((b) => [`${a.id}-${b.id}`, corr(full.map((r) => lo(data.answers[r.key][a.id])), full.map((r) => lo(data.answers[r.key][b.id])))]))),
  }, null, 1));
} else { console.error('usage: node scripts/backtest-external.mjs run [--minutes N] | report'); process.exit(2); }
