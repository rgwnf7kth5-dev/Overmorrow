#!/usr/bin/env node
// The run of other vendors' models for one planned edition (METHODOLOGY 16; config.shadow.external).
//
// It runs in a cloud environment whose proxy holds the vendors' keys as network secrets (claude.ai/code, environment
// Default). The evening desk and the morning run start elsewhere and cannot reach the vendors, so they never call them:
// this script does all of it, after the evening desk has pushed the planning file.
//
// Usage:  node scripts/external-run.mjs <edition date YYYY-MM-DD | latest> [--need-today] [--force] [--no-research]
//
// For every binary claim of data/planning/<date>.json and every provider that is ready:
//   forecast  the claim, criterion and window with the full dossier  -> p_blind; the same with the signals file -> p
//             recorded in forecast.shadow.external [{provider, model, at, p_blind, p, inputs}]
// For at most research.claims_max contested claims (the ones the sequential researcher took; otherwise binary claims with
// the combined figure inside research.band, widest spread first):
//   research  only the date, the claim, the criterion and the window; the model searches for itself
//             recorded in forecast.shadow.research [{provider, model, at, p, searches, sources, trace}]
//             and the full answers in data/dossiers/<date>/<claim>.research.json
// A provider already recorded on a claim is skipped (so the script can be run again after a failure); --force redoes all.
// Nothing here reads or changes forecast.agents, combined, calibrated or any published figure.
// Exit codes: 0 done (failures, if any, are listed in the planning file's external_run and in the output);
//             2 bad arguments or no planning file; 4 the trial is switched off;
//             5 with --need-today: the newest planning file is not today's (the evening desk has not pushed yet).

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const force = args.includes('--force'), noResearch = args.includes('--no-research');
// "latest" is the newest planning file; with --need-today it must have been prepared today (Europe/Paris), else exit 5.
const planned = fs.readdirSync(path.join(ROOT, 'data/planning')).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort();
const date = args.includes('latest') ? (planned.pop() || '').slice(0, 10) : args.find((a) => /^\d{4}-\d{2}-\d{2}$/.test(a));
if (!date) { console.error('usage: node scripts/external-run.mjs <edition date YYYY-MM-DD | latest> [--need-today] [--force] [--no-research]'); process.exit(2); }

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'pipeline/config.json'), 'utf8'));
const ext = cfg.shadow?.external || {}, RES = ext.research || {};
if (!ext.enabled) { console.error('config.shadow.external.enabled is off'); process.exit(4); }
const planPath = path.join(ROOT, 'data/planning', `${date}.json`);
if (!fs.existsSync(planPath)) { console.error(`no planning file data/planning/${date}.json`); process.exit(2); }
const raw = fs.readFileSync(planPath, 'utf8');
const plan = JSON.parse(raw);
const indent = (raw.match(/^\{\n( +)"/) || [, '  '])[1].length;
if (args.includes('--need-today')) {
  const paris = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date());
  if (String(plan.prepared_at || '').slice(0, 10) !== paris) { console.error(`data/planning/${date}.json was prepared at ${plan.prepared_at || '?'}, not today (${paris}): the evening desk has not pushed yet`); process.exit(5); }
}

const providers = (ext.providers || []).filter((p) => p.model);
const researchers = noResearch || !RES.enabled ? [] : providers.filter((p) => p.research?.api);
const claims = (plan.stories || []).flatMap((s) => s.claims || []).filter((c) => c.kind !== 'interval' && c.text && c.criterion);
const ok = (p) => typeof p === 'number' && p > 0 && p < 1;

// The contested claims: the sequential researcher's, or chosen by the same rule.
const inBand = (c) => { const [lo, hi] = RES.band || [0.2, 0.8], p = c.forecast?.combined; return typeof p === 'number' && p >= lo && p <= hi; };
const spread = (c) => { const ps = (c.forecast?.agents || []).map((a) => a.p).filter(ok); return ps.length ? Math.max(...ps) - Math.min(...ps) : 0; };
// From 22 November 2026 the models search for up to claims_max claims (6), not only the three most contested: first the
// sequential researcher's, then the others in the band by spread, then the rest, the ones nearest to 50% first.
const ours = (c) => [c.forecast?.calibrated, c.forecast?.combined, c.probability].find(ok) ?? 0.5;
const rank = (c) => (c.forecast?.shadow?.sequential ? 0 : inBand(c) ? 1 : 2);
const contested = [...claims].sort((a, b) => rank(a) - rank(b) || (rank(a) === 1 ? spread(b) - spread(a) : Math.abs(ours(a) - 0.5) - Math.abs(ours(b) - 0.5)) || a.id.localeCompare(b.id)).slice(0, RES.claims_max || 3);

const today = new Date().toISOString().slice(0, 10);
const text = (rel) => (rel && fs.existsSync(path.join(ROOT, rel)) ? fs.readFileSync(path.join(ROOT, rel), 'utf8').trim() : '');
const head = (c) => `Today's date: ${today}.\nClaim: ${c.text}\nCriterion: ${c.criterion}\nEvent window: ${c.event_window?.start || '?'} to ${c.event_window?.end || '?'} (${c.tz || 'local time'}). The claim is NO if the event does not happen in this window.\n`;

const work = fs.mkdtempSync(path.join(os.tmpdir(), 'overmorrow-external-'));
const stamp = () => new Date().toISOString().replace(/\.\d+Z$/, 'Z');
/** One call of scripts/external.mjs; retried once after a failure. Resolves to its JSON output or {error}. */
function call(cmd, provider, body, timeoutMs, attempt = 1) {
  const file = path.join(work, `${cmd}-${provider}-${Math.random().toString(36).slice(2)}.txt`);
  fs.writeFileSync(file, body);
  return new Promise((resolve) => {
    execFile('node', [path.join(ROOT, 'scripts/external.mjs'), cmd, provider, file], { timeout: timeoutMs, maxBuffer: 64e6, env: { ...process.env, EXTERNAL_TRANSPORT: 'curl' } }, (err, stdout, stderr) => {
      fs.rmSync(file, { force: true });
      if (!err) { try { return resolve(JSON.parse(stdout)); } catch { /* falls through */ } }
      const why = String(stderr || err?.message || 'no output').replace(/\s+/g, ' ').slice(0, 240);
      if (attempt < 2 && err?.code !== 4 && err?.code !== 2) return setTimeout(() => call(cmd, provider, body, timeoutMs, 2).then(resolve), 4000);
      resolve({ error: err?.code === 4 ? `not configured: ${why}` : why });
    });
  });
}
/** Runs the jobs with at most n at a time. */
async function pool(jobs, n) {
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, jobs.length) }, async () => { while (i < jobs.length) await jobs[i++](); }));
}

const failed = [];
const shadowOf = (c) => { c.forecast.shadow = c.forecast.shadow && typeof c.forecast.shadow === 'object' ? c.forecast.shadow : {}; return c.forecast.shadow; };
const has = (list, id) => !force && (list || []).some((e) => e.provider === id && ok(e.p));
const put = (list, e) => [...(list || []).filter((x) => x.provider !== e.provider), e].sort((a, b) => providers.findIndex((p) => p.id === a.provider) - providers.findIndex((p) => p.id === b.provider));

// 1. Forecasts from the dossier: blind, then with the signals.
let nForecast = 0;
const forecastJobs = [];
// The dossier trial ended for providers marked dossier: false (backtest of 22 November 2026: no gain from them).
for (const c of claims) for (const p of providers.filter((x) => x.dossier !== false)) {
  if (has(c.forecast?.shadow?.external, p.id)) continue;
  forecastJobs.push(async () => {
    const dossier = text(c.dossier || c.forecast?.dossier), signals = text(c.signals || c.forecast?.signals);
    if (!dossier) { failed.push({ claim: c.id, provider: p.id, step: 'forecast', error: 'no dossier file' }); return; }
    const blindBody = `${head(c)}\nDOSSIER (facts only)\n${dossier}\n`;
    const blind = await call('forecast', p.id, blindBody, 330000);
    if (blind.error) { failed.push({ claim: c.id, provider: p.id, step: 'forecast', error: blind.error }); return; }
    let fin = blind;
    if (signals) {
      fin = await call('forecast', p.id, `${blindBody}\nSIGNALS (markets, odds, other people's models; read after your own estimate)\n${signals}\n`, 330000);
      if (fin.error) { failed.push({ claim: c.id, provider: p.id, step: 'forecast with signals', error: fin.error }); return; }
    }
    const s = shadowOf(c);
    s.external = put(s.external, { provider: p.id, model: fin.model, at: fin.at || stamp(), p_blind: blind.p, p: fin.p, inputs: signals ? ['dossier', 'signals'] : ['dossier'] });
    nForecast++;
  });
}
await pool(forecastJobs, 6);

// 2. Forecasts from the models' own search, for the contested claims.
let nResearch = 0;
const runs = new Map();
const researchJobs = [];
for (const c of contested) for (const p of researchers) {
  if (has(c.forecast?.shadow?.research, p.id)) continue;
  researchJobs.push(async () => {
    const r = await call('research', p.id, head(c), 660000);
    if (r.error) { failed.push({ claim: c.id, provider: p.id, step: 'research', error: r.error }); return; }
    const trace = `data/dossiers/${date}/${c.id}.research.json`;
    const tail = String(r.reason || '');
    const fi = tail.lastIndexOf('NEW FACTS'), ci = tail.lastIndexOf('COUNTER');
    r.facts = fi < 0 ? [] : tail.slice(fi + 9, ci > fi ? ci : undefined).split('\n').map((l) => l.replace(/^[\s\-*•]+/, '').trim()).filter((l) => /^\d{4}-\d{2}-\d{2}\s*\|/.test(l)).map((l) => { const [d, ...rest] = l.split('|').map((x) => x.trim()); const url = (rest[rest.length - 1] || '').match(/https?:\/\/[^\s)\]]+/)?.[0] || null; return { date: d, fact: rest.slice(0, url ? -1 : undefined).join(' | '), url }; }).slice(0, 8);
    r.counter = ci < 0 ? '' : tail.slice(ci + 7).replace(/^[\s:*]+/, '').trim().slice(0, 900);
    runs.set(c.id, [...(runs.get(c.id) || []), r]);
    const s = shadowOf(c);
    s.research = put(s.research, { provider: p.id, model: r.model, at: r.at || stamp(), p: r.p, searches: r.searches, sources: (r.sources || []).length, trace });
    nResearch++;
  });
}
await pool(researchJobs, 3);
for (const [id, list] of runs) {
  const file = path.join(ROOT, 'data/dossiers', date, `${id}.research.json`);
  const old = !force && fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')).runs || [] : [];
  const c = claims.find((x) => x.id === id);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify({ claim: c.text, runs: [...old.filter((o) => !list.some((n) => n.provider === o.provider)), ...list] }, null, 1)}\n`);
}

// 2b. Wording: each model says, without search, what the criterion requires and where two careful readers would differ.
const wordingInstruction = `You check the wording of a forecasting claim before it is published. You are given the claim, the exact criterion by which it will be judged, and its event window. Do not forecast and do not search.
Say what must happen for YES, who or what decides it, and whether there is a realistic situation in which two careful readers, both looking at the same facts afterwards, would resolve the claim differently (an unclear threshold, date, time zone, source, a partial or postponed event, a term with two meanings). Do not call a claim ambiguous merely because its outcome is uncertain.
Reply with one JSON object and nothing else:
{"yes_requires": "...", "decided_by": "...", "ambiguous": true or false, "scenario": "the situation in which readers would differ, or an empty string"}`;
const wording = new Map();
const wordingJobs = [];
if (ext.wording?.enabled) for (const c of claims) {
  const file = path.join(ROOT, 'data/dossiers', date, `${c.id}.wording.json`);
  const old = !force && fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')).runs || [] : [];
  wording.set(c.id, old);
  for (const p of providers.filter((x) => x.research?.api)) {
    if (old.some((o) => o.provider === p.id)) continue;
    wordingJobs.push(async () => {
      const r = await call('ask', p.id, JSON.stringify({ instruction: wordingInstruction, input: head(c), search: false }), 240000);
      if (r.error) { failed.push({ claim: c.id, provider: p.id, step: 'wording', error: r.error }); return; }
      let j = null; try { j = JSON.parse(String(r.text).slice(String(r.text).indexOf('{'), String(r.text).lastIndexOf('}') + 1)); } catch { /* not JSON */ }
      if (!j || typeof j.ambiguous !== 'boolean') { failed.push({ claim: c.id, provider: p.id, step: 'wording', error: 'answer is not the JSON asked for' }); return; }
      wording.get(c.id).push({ provider: p.id, model: r.model, at: r.at, ambiguous: j.ambiguous, scenario: String(j.scenario || '').slice(0, 600), yes_requires: String(j.yes_requires || '').slice(0, 400), decided_by: String(j.decided_by || '').slice(0, 200) });
    });
  }
}
await pool(wordingJobs, 6);
const wordingFlags = [];
for (const [id, list] of wording) {
  if (!list.length) continue;
  fs.mkdirSync(path.join(ROOT, 'data/dossiers', date), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'data/dossiers', date, `${id}.wording.json`), `${JSON.stringify({ claim: claims.find((x) => x.id === id).text, runs: list }, null, 1)}\n`);
  const by = list.filter((o) => o.ambiguous).map((o) => o.provider);
  if (by.length >= (ext.wording?.flag_at || 2)) wordingFlags.push({ claim: id, flagged_by: by, file: `data/dossiers/${date}/${id}.wording.json` });
}

// 3. Tidy the record: notes of an earlier failed attempt go once figures are there; empty lists are not kept.
for (const c of claims) {
  const s = c.forecast?.shadow;
  if (!s) continue;
  if ((s.external || []).length) delete s.external_note;
  for (const k of ['external', 'research']) if (Array.isArray(s[k]) && !s[k].length) delete s[k];
  if (!Object.keys(s).length) delete c.forecast.shadow;
}
if (Array.isArray(plan.unreachable) && !failed.length) plan.unreachable = plan.unreachable.filter((u) => !/^external providers? /i.test(String(u)));
plan.external_run = { at: stamp(), providers: providers.map((p) => `${p.id} ${p.model}`), binary_claims: claims.length, forecasts: nForecast, contested: contested.map((c) => c.id), research: nResearch, wording_flags: wordingFlags, failed };
fs.writeFileSync(planPath, `${JSON.stringify(plan, null, indent)}\n`);
fs.rmSync(work, { recursive: true, force: true });

const expectF = claims.length * providers.filter((x) => x.dossier !== false).length, expectR = contested.length * researchers.length;
const doneF = claims.reduce((n, c) => n + (c.forecast?.shadow?.external || []).length, 0), doneR = contested.reduce((n, c) => n + (c.forecast?.shadow?.research || []).length, 0);
console.log(JSON.stringify({ edition: date, forecasts: `${doneF} of ${expectF}`, research: `${doneR} of ${expectR}`, new_forecasts: nForecast, new_research: nResearch, wording_checked: [...wording.values()].filter((l) => l.length).length, wording_flags: wordingFlags.map((w) => w.claim), failed }, null, 1));
