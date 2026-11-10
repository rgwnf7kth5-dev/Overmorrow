// Shadow forecasters on models of other vendors (METHODOLOGY 16, config.shadow.external). Off by default.
// Forecasters built on one family of models make the same mistakes; a model from another vendor is the cheapest
// source of a view that is not a copy. These figures are recorded in forecast.shadow.external and scored beside the
// published figure. They never enter it until they pass the test in config.v6 (backtest_min_gain, backtest_min_test).
//
// Usage:
//   node scripts/external.mjs check                       which providers are ready (key, model, enabled)
//   node scripts/external.mjs forecast <provider> <file>  one forecast; <file> holds the claim, criterion, deadline
//                                                          and the facts the forecaster may use (plain text)
// Output of `forecast` is one JSON object: {provider, model, at, p, reason}.
// EXTERNAL_TRANSPORT=curl skips Node's fetch and goes straight to curl (which honours HTTPS_PROXY).
// Exit codes: 0 ok; 2 bad arguments; 3 network or provider error; 4 not configured (no key, no model or disabled).
//
// The provider is called through its OpenAI-compatible chat endpoint (<base_url>/chat/completions). The key is read
// from the environment variable named in config (key_env) and is never written anywhere. Only the text of <file> and
// the instruction below are sent: no personal data, no repository contents beyond that file.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { loadConfig } from './lib.mjs';

const INSTRUCTION = `You are a careful forecaster. Below is a yes/no claim about a near-future event, the exact criterion by which it will be judged, its deadline, and dated facts. Today's date is given in the text; do not assume knowledge of anything after it.
Work in this order: (1) the base rate for comparable cases; (2) the specific facts that move this case away from it, each with its direction; (3) the strongest reason the obvious outcome might fail, including the chance that the event does not take place in its window.
Then give your probability that the claim resolves YES under the criterion as written.
End with exactly one line of the form:
PROBABILITY: 0.NN`;

const ext = loadConfig().shadow?.external || {};
const providers = ext.providers || [];
const state = (p) => (!ext.enabled ? 'disabled in config.shadow.external.enabled' : !p.model ? 'no model name in config' : !process.env[p.key_env] ? `no key in ${p.key_env}` : 'ready');

async function post(url, key, body) {
  const payload = JSON.stringify(body);
  try {
    if (process.env.EXTERNAL_TRANSPORT === 'curl') throw new Error('curl requested');
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` }, body: payload });
    const text = await res.text();
    if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`), { http: true });
    return JSON.parse(text);
  } catch (e) {
    if (e.http) throw e;
    // Node's fetch ignores HTTPS_PROXY; curl honours it. The key goes in through a config on stdin, not the command line.
    const cfg = `url = "${url}"\nheader = "content-type: application/json"\nheader = "authorization: Bearer ${key}"\ndata-binary = "@-"\n`;
    const tmp = `${process.env.TMPDIR || '/tmp'}/overmorrow-external-${process.pid}.cfg`;
    fs.writeFileSync(tmp, cfg, { mode: 0o600 });
    try { return JSON.parse(execFileSync('curl', ['-sS', '--fail-with-body', '--max-time', '300', '-K', tmp], { input: payload, encoding: 'utf8', maxBuffer: 16e6 })); }
    finally { fs.rmSync(tmp, { force: true }); }
  }
}

export function parseProbability(text) {
  const m = [...String(text).matchAll(/PROBABILITY:\s*(\d*\.?\d+\s*%?)/gi)].pop();
  if (!m) return null;
  const raw = m[1].trim();
  const p = raw.endsWith('%') ? parseFloat(raw) / 100 : parseFloat(raw);
  return p >= 0 && p <= 1 ? p : null;
}

const [cmd, id, file] = process.argv.slice(2);
if (cmd === 'check') {
  console.log(JSON.stringify(providers.map((p) => ({ provider: p.id, model: p.model, state: state(p) })), null, 1));
} else if (cmd === 'forecast') {
  const p = providers.find((x) => x.id === id);
  if (!p || !file || !fs.existsSync(file)) { console.error('usage: node scripts/external.mjs forecast <provider> <file>'); process.exit(2); }
  if (state(p) !== 'ready') { console.error(`${p.id}: ${state(p)}`); process.exit(4); }
  try {
    const out = await post(`${p.base_url.replace(/\/$/, '')}/chat/completions`, process.env[p.key_env], { model: p.model, messages: [{ role: 'system', content: INSTRUCTION }, { role: 'user', content: fs.readFileSync(file, 'utf8') }] });
    const text = out.choices?.[0]?.message?.content || '';
    const prob = parseProbability(text);
    if (prob === null) { console.error(`${p.id}: no PROBABILITY line in the answer`); process.exit(3); }
    console.log(JSON.stringify({ provider: p.id, model: out.model || p.model, at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'), p: Math.min(0.99, Math.max(0.01, prob)), reason: text.replace(/PROBABILITY:.*$/im, '').trim().slice(-1200) }));
  } catch (e) { console.error(`${p.id}: ${String(e.message || e).slice(0, 400)}`); process.exit(3); }
} else if (cmd) { console.error('usage: node scripts/external.mjs check | forecast <provider> <file>'); process.exit(2); }
