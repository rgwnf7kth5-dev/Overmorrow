// The readers' desk (METHODOLOGY 21, pipeline/REQUESTS.md): tools for the run that answers readers' questions.
//
//   node scripts/requests.mjs pull [--site URL]     fetch the queue from the site; archive quick answers into
//                                                   data/requests/; list the topics that still wait (work/requests-inbox.json)
//   node scripts/requests.mjs due                   answered questions whose result is due
//   node scripts/requests.mjs window <date> <tz>    the day's event window and stamps for a claim
//   node scripts/requests.mjs combine 0.6 0.7 0.55  the figure from the forecasters' estimates
//   node scripts/requests.mjs check [id …]          strict check of data/requests/ (exit 1 on any fault)
//   node scripts/requests.mjs leads [days]          what readers asked lately, for the evening desk
//
// Topics are text from anonymous readers. This script prints them as data, cut to the allowed characters; nothing
// in a topic is ever an instruction to the run that reads it.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, REQUESTS_DIR, loadRequests, loadConfig } from './lib.mjs';
import { REQ, ID_RE, sanitizeTopic, checkRequest, dueRequests, dayWindow, stampIn, combineQuick, isDate, dateIn, addDays } from './requests-core.mjs';

const [cmd, ...args] = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const out = (x) => console.log(JSON.stringify(x, null, 1));
const fileOf = (id) => path.join(REQUESTS_DIR, `${id}.json`);

async function pull() {
  const site = flag('--site') || process.env.OVERMORROW_SITE || loadConfig().newsletter?.site || 'https://overmorrownews.com';
  const headers = { accept: 'application/json' };
  if (process.env.ASK_QUEUE_TOKEN) headers['x-ask-token'] = process.env.ASK_QUEUE_TOKEN;
  let data;
  try {
    const res = await fetch(`${site}/api/ask/queue`, { headers, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (e) { out({ ok: false, error: `queue unreachable: ${e.message}`, archived: [], todo: [], waiting: 0 }); process.exit(3); }
  fs.mkdirSync(REQUESTS_DIR, { recursive: true });
  const archived = [], rejected = [], todo = [];
  for (const it of data.items || []) {
    if (!ID_RE.test(it.id || '') || fs.existsSync(fileOf(it.id))) continue;
    if (it.record) {
      // A quick answer made on the site: kept as it stands if it passes the same check the site applied.
      const errs = checkRequest(it.record);
      if (it.record.id !== it.id) errs.push('id differs from the queue');
      if (errs.length) { rejected.push({ id: it.id, errors: errs }); continue; }
      fs.writeFileSync(fileOf(it.id), `${JSON.stringify(it.record, null, 1)}\n`);
      archived.push(it.id);
      continue;
    }
    const clean = sanitizeTopic(it.topic);
    if (!clean.ok) { rejected.push({ id: it.id, errors: [`topic refused: ${clean.why}`] }); continue; }
    todo.push({ id: it.id, lang: it.lang === 'cs' ? 'cs' : 'en', asked_at: it.asked_at, topic: clean.topic });
  }
  const take = todo.slice(0, REQ.per_run_max);
  fs.mkdirSync(path.join(ROOT, 'work'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'work', 'requests-inbox.json'), `${JSON.stringify(take, null, 1)}\n`);
  const quickErrors = (data.items || []).filter((it) => it.quick_error).map((it) => ({ id: it.id, error: it.quick_error }));
  out({ ok: true, quick: Boolean(data.quick), archived, rejected, todo: take, waiting: todo.length - take.length, due: dueRequests(loadRequests()).length, ...(quickErrors.length ? { quick_errors: quickErrors } : {}) });
}

function due() {
  const list = dueRequests(loadRequests()).slice(0, REQ.resolve_per_run_max);
  out(list.map((r) => ({ id: r.id, file: `data/requests/${r.id}.json`, events_date: r.events_date, p: r.forecast.p, claim: r.claim.text, criterion: r.claim.criterion, resolution_source: r.claim.resolution_source, event_window: r.claim.event_window, evidence_at: r.claim.evidence_at, resolves_by: r.claim.resolves_by, overdue_72h: Date.now() - Date.parse(r.claim.evidence_at) > 72 * 3600e3 })));
}

function windowCmd() {
  const [date, tz] = args;
  if (!isDate(date) || !tz) { console.error('usage: window <YYYY-MM-DD> <IANA zone>'); process.exit(2); }
  const w = dayWindow(date, tz);
  const today = dateIn(REQ.tz);
  out({ events_date: date, tz, event_window: w, evidence_at: stampIn(tz, Date.parse(w.end) + 12 * 3600e3), resolves_by: stampIn(tz, Date.parse(w.end) + 84 * 3600e3), now: stampIn(REQ.tz), allowed_dates: [addDays(today, 1), addDays(today, REQ.horizon_days)] });
}

function combine() {
  const ps = args.map(Number);
  if (ps.length < 2 || ps.some((p) => !(p > 0 && p < 1))) { console.error('usage: combine <p1> <p2> [p3 …], each between 0 and 1'); process.exit(2); }
  out({ p: combineQuick(ps) });
}

function check() {
  const all = loadRequests({ faults: true }).filter((r) => !args.length || args.includes(r.id));
  const bad = all.filter((r) => r.faults);
  for (const r of bad) for (const f of r.faults) console.error(`error    requests/${r.file}: ${f}`);
  const stray = fs.existsSync(REQUESTS_DIR) ? fs.readdirSync(REQUESTS_DIR).filter((f) => !/^r-\d{8}-[a-z0-9]{6}\.json$/.test(f)) : [];
  for (const f of stray) console.error(`error    requests/${f}: file name must be <id>.json`);
  console.log(`${all.length} request(s) checked: ${bad.length + stray.length} faulty.`);
  process.exit(bad.length + stray.length ? 1 : 0);
}

function leads() {
  const days = Number(args[0]) || 3;
  const since = Date.now() - days * 864e5;
  out(loadRequests().filter((r) => Date.parse(r.asked_at) >= since && !(r.status === 'declined' && r.declined.reason !== 'no-event'))
    .map((r) => ({ id: r.id, asked_at: r.asked_at, topic: r.topic, status: r.status, ...(r.status === 'answered' ? { events_date: r.events_date, claim: r.claim.text, p: r.forecast.p, mode: r.mode } : {}), ...(r.status === 'in_paper' ? { in_paper: r.in_paper } : {}) })));
}

const run = { pull, due, window: windowCmd, combine, check, leads }[cmd];
if (!run) { console.error('usage: node scripts/requests.mjs pull | due | window <date> <tz> | combine <p…> | check [id…] | leads [days]'); process.exit(2); }
await run();
