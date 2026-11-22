#!/usr/bin/env node
// Three more jobs for other vendors' models (METHODOLOGY 16; config.shadow.external.agenda / resolve / factcheck).
// Like scripts/external-run.mjs, this runs only in the cloud environment that holds the vendors' keys, in scheduled
// tasks of its own, and writes files that our own runs read later. Nothing here changes an edition, a forecast or a result.
//
//   node scripts/external-desk.mjs agenda [YYYY-MM-DD]     before the evening desk: what is scheduled for the day the
//                                                          next edition is about (default: the day after tomorrow,
//                                                          Europe/Paris) -> data/external/agenda/<events date>.json
//   node scripts/external-desk.mjs resolve                 before the morning run: an independent outcome for every
//                                                          claim falling due -> data/external/resolve/<today>.json
//   node scripts/external-desk.mjs factcheck [edition]     after publication: background facts of the stories of the
//                                                          newest edition -> data/external/factcheck/<edition>.json
// Each can be run again: what is recorded is skipped. Exit codes: 0 done (failures are listed in the file and the
// output); 2 bad arguments; 4 switched off in config.

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { ROOT, loadConfig, loadEditions, claimsOf, pendingClaims } from './lib.mjs';

const [cmd, arg] = process.argv.slice(2);
const cfg = loadConfig();
const ext = cfg.shadow?.external || {};
const paris = (d = new Date()) => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(d);
const addDays = (d, n) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
const stamp = () => new Date().toISOString().replace(/\.\d+Z$/, 'Z');
const work = fs.mkdtempSync(path.join(os.tmpdir(), 'overmorrow-desk-'));
const readJson = (f, fallback) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : fallback);
const writeJson = (f, d) => { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, `${JSON.stringify(d, null, 1)}\n`); };
/** The JSON value in a model's answer: the outermost array or object, whichever comes first. */
function parse(text) {
  const t = String(text || ''), a = t.indexOf('['), o = t.indexOf('{');
  const tryCut = (open, close) => { const i = t.indexOf(open), j = t.lastIndexOf(close); if (i < 0 || j <= i) return null; try { return JSON.parse(t.slice(i, j + 1)); } catch { return null; } };
  return a >= 0 && (o < 0 || a < o) ? tryCut('[', ']') ?? tryCut('{', '}') : tryCut('{', '}') ?? tryCut('[', ']');
}
/** One question to one provider through scripts/external.mjs ask; retried once. Resolves to its output or {error}. */
function ask(provider, instruction, input, { search = true, cap = 6, timeout = 660000 } = {}, attempt = 1) {
  const file = path.join(work, `${provider}-${Math.random().toString(36).slice(2)}.json`);
  fs.writeFileSync(file, JSON.stringify({ instruction, input, search, cap }));
  return new Promise((resolve) => {
    execFile('node', [path.join(ROOT, 'scripts/external.mjs'), 'ask', provider, file], { timeout, maxBuffer: 64e6 }, (err, stdout, stderr) => {
      fs.rmSync(file, { force: true });
      if (!err) { try { return resolve(JSON.parse(stdout)); } catch { /* falls through */ } }
      const why = String(stderr || err?.message || 'no output').replace(/\s+/g, ' ').slice(0, 240);
      if (attempt < 2 && err?.code !== 4 && err?.code !== 2) return setTimeout(() => ask(provider, instruction, input, { search, cap, timeout }, 2).then(resolve), 4000);
      resolve({ error: why });
    });
  });
}
async function pool(jobs, n) { let i = 0; await Promise.all(Array.from({ length: Math.min(n, jobs.length) }, async () => { while (i < jobs.length) await jobs[i++](); })); }
const off = (key) => { if (!ext.enabled || !ext[key]?.enabled) { console.error(`config.shadow.external.${key} is off`); process.exit(4); } return ext[key].providers || []; };
const done = (out) => { fs.rmSync(work, { recursive: true, force: true }); console.log(JSON.stringify(out, null, 1)); process.exit(0); };

if (cmd === 'agenda') {
  // What a serious daily would report on the day: each model searches by itself. Our evening desk compares the lists
  // with its own shortlist (PLANNER step 3); a model's entry is a lead to check, never a fact.
  const providers = off('agenda');
  const day = /^\d{4}-\d{2}-\d{2}$/.test(arg || '') ? arg : addDays(paris(), 2);
  const file = path.join(ROOT, 'data/external/agenda', `${day}.json`);
  const data = readJson(file, { events_date: day, lists: [], failed: [] });
  const instruction = `You help a newspaper's planning desk. Search the web for what is scheduled or firmly expected to happen on ${day} (local time of the place) that a serious daily would report the next morning. Today is ${paris()}.
Cover the Czech Republic (aim for 8 or more: government and parliament agenda, courts, the central bank, statistics releases, strikes, company decisions, regional matters of national weight) and Europe and the world (aim for 12 or more: votes, summits, court rulings, central bank decisions, official data releases, elections, deadlines, company results, strikes, launches).
Leave out sport, anniversaries, and stock, currency or commodity prices. Include an item only if a page you read gives that date; prefer the organiser's or institution's own page.
Reply with one JSON array and nothing else, the most important first:
[{"title": "what happens, in one line", "scope": "cz" or "europe" or "world", "when": "local time if known, else empty", "source": "URL of the page that gives the date"}]`;
  await pool(providers.filter((p) => !data.lists.some((l) => l.provider === p)).map((p) => async () => {
    const r = await ask(p, instruction, `Events date: ${day}.`, { cap: 10 });
    const events = r.error ? null : parse(r.text);
    if (!Array.isArray(events)) { data.failed.push({ provider: p, error: r.error || 'answer is not the JSON array asked for' }); return; }
    data.lists.push({ provider: p, model: r.model, at: r.at, searches: r.searches, events: events.filter((e) => e && typeof e.title === 'string').slice(0, 40).map((e) => ({ title: e.title.slice(0, 240), scope: ['cz', 'europe', 'world'].includes(e.scope) ? e.scope : 'world', when: String(e.when || '').slice(0, 60), source: /^https?:\/\//.test(e.source || '') ? e.source : null })) });
  }), 3);
  data.failed = data.failed.filter((f) => !data.lists.some((l) => l.provider === f.provider));
  data.at = stamp();
  writeJson(file, data);
  done({ events_date: day, lists: data.lists.map((l) => `${l.provider}: ${l.events.length} events`), failed: data.failed });
} else if (cmd === 'resolve') {
  // An independent outcome for each claim due by an hour from now. The morning resolver decides by itself first and
  // then compares (RESOLVER step 2); a disagreement sends it back to the evidence, it never decides the result.
  const providers = off('resolve');
  const editions = loadEditions();
  const due = pendingClaims(editions, Date.now() + 3600e3);
  const file = path.join(ROOT, 'data/external/resolve', `${paris()}.json`);
  const data = readJson(file, { date: paris(), opinions: [], failed: [] });
  const instruction = `You check whether a forecasting claim has resolved. You are given the claim, the exact criterion, the event window and the source named for the resolution. Search the web, open that source first, and apply the criterion literally, as written. Today is ${paris()}.
Answer "yes" or "no" only if a page you read settles it; "no" also when the event did not take place in its window. Answer "not_yet" if the source has not published what the criterion needs, and "unclear" if the pages you read disagree or the criterion can be read two ways.
Reply with one JSON object and nothing else:
{"outcome": "yes" or "no" or "not_yet" or "unclear", "evidence": "URL of the page that settles it, or empty", "published": "when that page was published, if it says", "note": "one sentence on what the page shows"}`;
  const jobs = [];
  for (const d of due) {
    const ed = editions.find((e) => e.id === d.edition), c = ed && claimsOf(ed).find((x) => x.id === d.claim);
    if (!c) continue;
    const input = `Claim: ${c.text}\nCriterion: ${c.criterion}\nEvent window: ${c.event_window?.start || ed.events_date || '?'} to ${c.event_window?.end || ed.events_date || '?'} (${c.tz || 'local time'}).\nSource named for the resolution: ${c.resolution_source || 'none named'}\n${c.kind === 'interval' ? 'This claim is about a number: give the published value in the note and answer "yes" if it has been published, "not_yet" otherwise.\n' : ''}`;
    for (const p of providers) {
      if (data.opinions.some((o) => o.edition === d.edition && o.claim === d.claim && o.provider === p)) continue;
      jobs.push(async () => {
        const r = await ask(p, instruction, input, { cap: 5, timeout: 420000 });
        const j = r.error ? null : parse(r.text);
        if (!j || !['yes', 'no', 'not_yet', 'unclear'].includes(j.outcome)) { data.failed.push({ edition: d.edition, claim: d.claim, provider: p, error: r.error || 'answer is not the JSON asked for' }); return; }
        data.opinions.push({ edition: d.edition, claim: d.claim, provider: p, model: r.model, at: r.at, outcome: j.outcome, evidence: /^https?:\/\//.test(j.evidence || '') ? j.evidence : null, published: String(j.published || '').slice(0, 60), note: String(j.note || '').slice(0, 400) });
      });
    }
  }
  await pool(jobs, 6);
  data.failed = data.failed.filter((f) => !data.opinions.some((o) => o.edition === f.edition && o.claim === f.claim && o.provider === f.provider));
  data.at = stamp();
  if (due.length || fs.existsSync(file)) writeJson(file, data);
  done({ due: due.length, opinions: data.opinions.length, failed: data.failed });
} else if (cmd === 'factcheck') {
  // The stories are written as the news of a day that has not happened yet, so only the background is checked: what the
  // report states as already true. A flag is a lead for the afternoon update, which confirms it on the source itself.
  const providers = off('factcheck');
  const editions = loadEditions();
  const ed = /^\d{4}-\d{2}-\d{2}$/.test(arg || '') ? editions.find((e) => e.id === arg) : editions[editions.length - 1];
  if (!ed) { console.error('no such edition'); process.exit(2); }
  const frozen = String(ed.frozen_at || '').slice(0, 10) || addDays(ed.id, -2), day = ed.events_date || addDays(ed.id, -1);
  const file = path.join(ROOT, 'data/external/factcheck', `${ed.id}.json`);
  const data = readJson(file, { edition: ed.id, stories: [], failed: [] });
  const instruction = `You fact-check one report from a forecast newspaper. The paper is dated ${ed.id} and was written on ${frozen}: it describes the expected events of ${day} as if they had already happened. That is its method, so do NOT flag anything the report says happened on ${day} or later, and do not judge its forecasts.
Check only the background: what the report states as already true on ${frozen} or before (earlier dates, figures, names, offices and titles, who decided or said what, past votes and rulings, how an institution or a procedure works). Search the web and open the report's own sources first.
Flag a statement only if a page you read shows it is wrong; a statement you merely could not confirm is not a flag. Quote the statement exactly as it stands in the report.
Reply with one JSON array and nothing else (an empty array if you found nothing wrong):
[{"statement": "the exact words from the report", "problem": "what is wrong and what the page says instead", "source": "URL of the page"}]`;
  const stories = (ed.stories || []).filter((s) => s.body || s.standfirst);
  await pool(stories.filter((s) => !data.stories.some((x) => x.story === s.id)).map((s, i) => async () => {
    const p = providers[i % providers.length];
    const body = Array.isArray(s.body) ? s.body.join('\n\n') : String(s.body || '');
    const srcs = (s.sources || []).map((x) => (typeof x === 'string' ? x : x.url)).filter(Boolean).join('\n');
    const r = await ask(p, instruction, `Headline: ${s.headline || s.title || s.id}\n${s.standfirst ? `Standfirst: ${s.standfirst}\n` : ''}\nReport:\n${body}\n\nThe report's sources:\n${srcs || 'none listed'}\n`, { cap: 8 });
    const flags = r.error ? null : parse(r.text);
    if (!Array.isArray(flags)) { data.failed.push({ story: s.id, provider: p, error: r.error || 'answer is not the JSON array asked for' }); return; }
    data.stories.push({ story: s.id, provider: p, model: r.model, at: r.at, searches: r.searches, flags: flags.filter((f) => f && typeof f.statement === 'string' && typeof f.problem === 'string').slice(0, 8).map((f) => ({ statement: f.statement.slice(0, 500), in_report: body.includes(f.statement.trim()) || String(s.standfirst || '').includes(f.statement.trim()), problem: f.problem.slice(0, 600), source: /^https?:\/\//.test(f.source || '') ? f.source : null })) });
  }), 4);
  data.failed = data.failed.filter((f) => !data.stories.some((x) => x.story === f.story));
  data.at = stamp();
  writeJson(file, data);
  done({ edition: ed.id, stories_checked: data.stories.length, of: stories.length, flags: data.stories.reduce((n, s) => n + s.flags.length, 0), failed: data.failed });
} else { console.error('usage: node scripts/external-desk.mjs agenda [YYYY-MM-DD] | resolve | factcheck [edition]'); process.exit(2); }
