// Shadow forecasters on models of other vendors (METHODOLOGY 16, config.shadow.external). Off by default.
// Forecasters built on one family of models make the same mistakes; a model from another vendor is the cheapest
// source of a view that is not a copy. These figures are recorded in forecast.shadow.external and scored beside the
// published figure. They never enter it until they pass the test in config.v6 (backtest_min_gain, backtest_min_test).
//
// Usage:
//   node scripts/external.mjs check                       which providers are ready (key, model, enabled)
//   node scripts/external.mjs forecast <provider> <file>  one forecast; <file> holds the claim, criterion, deadline
//                                                          and the facts the forecaster may use (plain text)
//   node scripts/external.mjs research <provider> <file>  one forecast from the model's own search (from 21 Nov 2026,
//                                                          config.shadow.external.research); <file> holds only today's
//                                                          date, the claim, the criterion and the deadline
// Output of `forecast` is one JSON object: {provider, model, at, p, reason}.
// Output of `research` is one JSON object: {provider, model, at, p, searches, sources, reason}.
// EXTERNAL_TRANSPORT=curl skips Node's fetch and goes straight to curl (which honours HTTPS_PROXY).
// Exit codes: 0 ok; 2 bad arguments; 3 network or provider error; 4 not configured (no key, no model or disabled).
//
// The provider is called through its OpenAI-compatible chat endpoint (<base_url>/chat/completions). With auth "proxy"
// (the default set-up) the key is a network secret of the runs' environment and never reaches this machine; otherwise it
// is read from the environment variable named in config (key_env). It is never written anywhere. Only the text of <file> and
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
// auth "proxy": the key is a network secret of the runs' cloud environment. The environment's proxy adds it to requests
// for the provider's host after they leave the machine, so no key exists here and none is sent by this script.
const viaProxy = (p) => p.auth === 'proxy';
const state = (p) => (!ext.enabled ? 'disabled in config.shadow.external.enabled' : !p.model ? 'no model name in config' : viaProxy(p) ? 'ready' : !process.env[p.key_env] ? `no key in ${p.key_env}` : 'ready');

async function post(url, key, body, maxTime = 300) {
  const payload = JSON.stringify(body);
  try {
    // Without a key the request must pass through the environment's proxy, which only curl uses.
    if (process.env.EXTERNAL_TRANSPORT === 'curl' || !key) throw new Error('curl requested');
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` }, body: payload });
    const text = await res.text();
    if (!res.ok) throw Object.assign(new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`), { http: true });
    return JSON.parse(text);
  } catch (e) {
    if (e.http) throw e;
    // Node's fetch ignores HTTPS_PROXY; curl honours it. The key goes in through a config on stdin, not the command line.
    const cfg = `url = "${url}"\nheader = "content-type: application/json"\n${key ? `header = "authorization: Bearer ${key}"\n` : ''}data-binary = "@-"\n`;
    const tmp = `${process.env.TMPDIR || '/tmp'}/overmorrow-external-${process.pid}.cfg`;
    fs.writeFileSync(tmp, cfg, { mode: 0o600 });
    try { return JSON.parse(execFileSync('curl', ['-sS', '--fail-with-body', '--max-time', String(maxTime), '-K', tmp], { input: payload, encoding: 'utf8', maxBuffer: 64e6, stdio: ['pipe', 'pipe', 'pipe'] })); }
    catch (e2) { throw new Error(String(e2.stdout || e2.stderr || e2.message).slice(0, 300)); }
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

// ---------- own search (config.shadow.external.research) ----------
const RES = ext.research || {};
const researchInstruction = (n) => `You are a careful forecaster with a web search tool. Below is a yes/no claim about a near-future event, the exact criterion by which it will be judged, and its deadline. Today's date is given in the text.
Do your own research: at most ${n} searches. Look first for the primary source (the body that decides, publishes or hosts the event), then for the most recent dated reporting. Note the publication date of what you use and prefer the newest; discard anything undated. Do not look for other forecasts of this claim.
Then work in this order: (1) the base rate for comparable cases; (2) the dated facts you found that move this case away from it, each with its direction; (3) the strongest reason the obvious outcome might fail, including the chance that the event does not take place in its window.
Give your probability that the claim resolves YES under the criterion as written.
End with exactly one line of the form:
PROBABILITY: 0.NN`;
const researchState = (p) => (state(p) !== 'ready' ? state(p) : !RES.enabled ? 'disabled in config.shadow.external.research.enabled' : !p.research?.api ? 'no research settings for this provider' : 'ready');
const uniq = (xs) => [...new Set(xs.filter((x) => typeof x === 'string' && /^https?:\/\//.test(x)).map((x) => x.replace(/[?&]utm_source=[^&]*$/, '')))];

/** The text blocks of an Interactions API answer, and their text. */
const interactionBlocks = (d) => (d.steps || d.outputs || d.output || []).flatMap((i) => (i.type === 'model_output' ? i.content || [] : i.type === 'text' ? [i] : []));
const interactionText = (d) => interactionBlocks(d).map((c) => c.text || '').join('\n') || d.output_text || '';

/** One request in the provider's own format; returns {text, searches, sources, model}. */
async function research(p, text) {
  const cap = RES.searches_max || 6, base = p.base_url.replace(/\/$/, ''), key = viaProxy(p) ? null : process.env[p.key_env];
  if (p.research.api === 'responses') {
    // OpenAI and xAI: the Responses API with the vendor's search tools, capped by max_tool_calls.
    const d = await post(`${base}/responses`, key, { model: p.model, instructions: researchInstruction(cap), input: text, tools: p.research.tools, max_tool_calls: cap, ...(p.research.extra || {}) }, 600);
    if (d.error) throw new Error(JSON.stringify(d.error).slice(0, 300));
    const items = d.output || [];
    const parts = items.filter((i) => i.type === 'message').flatMap((i) => i.content || []);
    const calls = items.filter((i) => /_search_call$/.test(i.type || ''));
    return { text: parts.map((c) => c.text || '').join('\n'), searches: calls.length, model: d.model,
      sources: uniq([...parts.flatMap((c) => (c.annotations || []).map((a) => a.url)), ...calls.flatMap((c) => (c.action?.sources || []).map((x) => x.url))]) };
  }
  if (p.research.api === 'interactions') {
    // Google: the Interactions API with Google Search. It has no cap on searches, so the instruction carries it.
    const d = await post(p.research.url || p.interactions_url, key, { model: p.model, input: `${researchInstruction(cap)}\n\n${text}`, tools: p.research.tools }, 600);
    const e = Array.isArray(d) ? d[0]?.error : d.error;
    if (e) throw new Error(JSON.stringify(e).slice(0, 300));
    const items = d.steps || d.outputs || d.output || [];
    const blocks = interactionBlocks(d);
    const queries = items.filter((i) => i.type === 'google_search_call').flatMap((i) => i.arguments?.queries || i.queries || [null]);
    return { text: blocks.map((c) => c.text || '').join('\n') || d.output_text || '', searches: queries.length, model: d.model,
      sources: uniq(blocks.flatMap((c) => (c.annotations || []).map((a) => a.url))) };
  }
  throw new Error(`unknown research api "${p.research.api}"`);
}

const [cmd, id, file] = process.argv.slice(2);
if (cmd === 'check') {
  console.log(JSON.stringify(providers.map((p) => ({ provider: p.id, model: p.model, auth: viaProxy(p) ? 'proxy' : 'key', state: state(p), research: researchState(p) })), null, 1));
} else if (cmd === 'forecast') {
  const p = providers.find((x) => x.id === id);
  if (!p || !file || !fs.existsSync(file)) { console.error('usage: node scripts/external.mjs forecast <provider> <file>'); process.exit(2); }
  if (state(p) !== 'ready') { console.error(`${p.id}: ${state(p)}`); process.exit(4); }
  try {
    const key = viaProxy(p) ? null : process.env[p.key_env], body = fs.readFileSync(file, 'utf8');
    let out, text;
    if (p.api === 'interactions') {
      // Google's own interface (no tools here): its OpenAI-compatible endpoint takes the key only as a Bearer token,
      // the stored secret carries it as x-goog-api-key, which this interface and its search both accept.
      out = await post(p.interactions_url, key, { model: p.model, input: `${INSTRUCTION}\n\n${body}` });
      const e = Array.isArray(out) ? out[0]?.error : out.error;
      if (e) throw new Error(JSON.stringify(e).slice(0, 300));
      text = interactionText(out);
    } else {
      out = await post(`${p.base_url.replace(/\/$/, '')}/chat/completions`, key, { model: p.model, messages: [{ role: 'system', content: INSTRUCTION }, { role: 'user', content: body }] });
      text = out.choices?.[0]?.message?.content || '';
    }
    const prob = parseProbability(text);
    if (prob === null) { console.error(`${p.id}: no PROBABILITY line in the answer`); process.exit(3); }
    console.log(JSON.stringify({ provider: p.id, model: out.model || p.model, at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'), p: Math.min(0.99, Math.max(0.01, prob)), reason: text.replace(/PROBABILITY:.*$/im, '').trim().slice(-1200) }));
  } catch (e) { console.error(`${p.id}: ${String(e.message || e).slice(0, 400)}`); process.exit(3); }
} else if (cmd === 'research') {
  const p = providers.find((x) => x.id === id);
  if (!p || !file || !fs.existsSync(file)) { console.error('usage: node scripts/external.mjs research <provider> <file>'); process.exit(2); }
  if (researchState(p) !== 'ready') { console.error(`${p.id}: ${researchState(p)}`); process.exit(4); }
  try {
    const r = await research(p, fs.readFileSync(file, 'utf8'));
    const prob = parseProbability(r.text);
    if (prob === null) { console.error(`${p.id}: no PROBABILITY line in the answer (${r.searches} searches)`); process.exit(3); }
    console.log(JSON.stringify({ provider: p.id, model: r.model || p.model, at: new Date().toISOString().replace(/\.\d+Z$/, 'Z'), p: Math.min(0.99, Math.max(0.01, prob)), searches: r.searches, sources: r.sources.slice(0, 25), reason: r.text.replace(/PROBABILITY:.*$/im, '').trim().slice(-2000) }));
  } catch (e) { console.error(`${p.id}: ${String(e.message || e).slice(0, 400)}`); process.exit(3); }
} else if (cmd) { console.error('usage: node scripts/external.mjs check | forecast <provider> <file> | research <provider> <file>'); process.exit(2); }
