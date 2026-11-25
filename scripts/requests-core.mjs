// Readers' questions (METHODOLOGY 21): rules shared by the site's functions (netlify/functions), the
// readers' desk script (scripts/requests.mjs), the validator and the build. Pure code: no files, no network.

/** Settings. The site's functions cannot read pipeline/config.json at run time, so the figures live here;
 *  config.requests points to this file. Change them here only. */
export const REQ = {
  adopted: '2026-11-25',
  topic_min_chars: 8,
  topic_max_chars: 160,
  queue_days: 3,          // an unanswered topic waits this long, then is dropped
  per_day_max: 40,        // topics accepted a day (Europe/Paris)
  quick_per_day_max: 25,  // of which answered at once by the quick forecast (costs API money)
  per_run_max: 6,         // topics one run of the readers' desk takes
  resolve_per_run_max: 10,
  horizon_days: 7,        // the event asked about must fall between tomorrow and this many days ahead
  probability_min: 0.03,
  probability_max: 0.97,
  stale_minutes: 12,      // a quick forecast still "working" after this long goes to the readers' desk
  tz: 'Europe/Paris',
  declined: ['sport', 'market-prices', 'private-person', 'health-of-a-person', 'nightly-attacks', 'no-event', 'unclear', 'harmful', 'not-a-topic'],
};

export const ID_RE = /^r-\d{8}-[a-z0-9]{6}$/;
const STAMP_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?([+-]\d{2}:\d{2}|Z)$/;
export const isStamp = (s) => typeof s === 'string' && STAMP_RE.test(s) && !Number.isNaN(Date.parse(s));
export const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;
const isUrl = (u) => typeof u === 'string' && /^https?:\/\/[^\s<>"']+$/.test(u);

/** Offset in ms of an IANA zone at instant t (wall time − UTC). */
function tzOffset(tz, t) {
  const f = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const p = Object.fromEntries(f.formatToParts(new Date(t)).map((x) => [x.type, x.value]));
  return Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second) - Math.floor(t / 1000) * 1000;
}
const pad = (n) => String(n).padStart(2, '0');
/** ISO stamp with the zone's own offset, to the second: 2026-11-25T08:14:00+01:00. */
export function stampIn(tz, t = Date.now()) {
  const off = tzOffset(tz, t);
  const d = new Date(Math.floor(t / 1000) * 1000 + off);
  const a = Math.abs(off) / 60000;
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}${off < 0 ? '-' : '+'}${pad(Math.floor(a / 60))}:${pad(a % 60)}`;
}
export const dateIn = (tz, t = Date.now()) => stampIn(tz, t).slice(0, 10);
export const addDays = (d, n) => { const t = new Date(`${d}T12:00:00Z`); t.setUTCDate(t.getUTCDate() + n); return t.toISOString().slice(0, 10); };
/** Stamp of a wall-clock time on a date in a zone. */
export function zonedStamp(date, tz, h = 0, m = 0, s = 0) {
  const [y, mo, d] = date.split('-').map(Number);
  const guess = Date.UTC(y, mo - 1, d, h, m, s);
  let t = guess - tzOffset(tz, guess);
  t = guess - tzOffset(tz, t);
  return stampIn(tz, t);
}
/** The whole local day of an event: 00:00:00 to 23:59:59 in the claim's zone. */
export const dayWindow = (date, tz) => ({ start: zonedStamp(date, tz, 0, 0, 0), end: zonedStamp(date, tz, 23, 59, 59) });

/** A new request id: r-YYYYMMDD-xxxxxx (date in Europe/Paris, six random characters). */
export function newId(t = Date.now(), rnd = Math.random) {
  const abc = 'abcdefghijkmnpqrstuvwxyz23456789';
  let s = '';
  for (let i = 0; i < 6; i += 1) s += abc[Math.floor(rnd() * abc.length)];
  return `r-${dateIn(REQ.tz, t).replaceAll('-', '')}-${s}`;
}

/**
 * A reader's topic is text from an anonymous member of the public. It is kept short and plain so that it can
 * neither carry a page, a link or an address, nor a long instruction to the model that reads it.
 * Returns { ok, topic } or { ok: false, why }.
 */
export function sanitizeTopic(raw) {
  if (typeof raw !== 'string') return { ok: false, why: 'empty' };
  let t = raw.normalize('NFC').replace(/[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u2028-\u202f\u2060-\u206f\ufeff]/g, ' ');
  t = t.replace(/[\u201c\u201d\u201e\u201f]/g, '"').replace(/[\u2018\u2019\u201a\u201b]/g, "'").replace(/[\u2010-\u2015]/g, '-').replace(/\u2026/g, '...');
  t = t.replace(/\s+/g, ' ').trim();
  if (t.length < REQ.topic_min_chars) return { ok: false, why: 'short' };
  if (t.length > REQ.topic_max_chars) return { ok: false, why: 'long' };
  if (/https?:|www\.|:\/\/|@|\.(com|cz|org|net|io|ru|eu)\b/i.test(t)) return { ok: false, why: 'link' };
  if (/[^\p{L}\p{N} .,?!:;'"()\/%&+-]/u.test(t)) return { ok: false, why: 'characters' };
  if (!/\p{L}{3}/u.test(t)) return { ok: false, why: 'short' };
  return { ok: true, topic: t };
}
/** Key for spotting the same topic asked twice: lower case, no accents, words in order. */
export const topicKey = (topic) => topic.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim().replace(/ /g, '-').slice(0, 120);

const clamp = (p) => Math.min(REQ.probability_max, Math.max(REQ.probability_min, p));
/** Geometric mean of odds (the paper's combination rule), clamped and rounded to the whole percent. */
export function combineQuick(ps) {
  const xs = ps.map((p) => Math.min(0.995, Math.max(0.005, p)));
  const lo = xs.reduce((a, p) => a + Math.log(p / (1 - p)), 0) / xs.length;
  return Math.round(clamp(1 / (1 + Math.exp(-lo))) * 100) / 100;
}

const TEXT_MAX = { topic: 200, text: 300, criterion: 700, resolution_source: 300, reasoning: 900, note: 500, fact: 400 };
const plain = (s, max) => nonEmpty(s) && s.length <= max && !/[<>]/.test(s);

/**
 * Checks one record of data/requests/. Returns a list of error strings (empty when it is sound).
 * The same check runs in the function before a quick answer is stored, in the readers' desk before it commits,
 * and in the validator (where a faulty record is a warning and the build leaves the record out).
 */
export function checkRequest(r) {
  const e = [];
  if (!r || typeof r !== 'object') return ['not an object'];
  if (!ID_RE.test(r.id || '')) e.push('id must look like r-YYYYMMDD-xxxxxx');
  if (!isStamp(r.asked_at)) e.push('asked_at must be an ISO timestamp with offset');
  if (!['en', 'cs'].includes(r.lang)) e.push('lang must be en or cs');
  if (!['answered', 'declined', 'in_paper'].includes(r.status)) e.push('status must be answered, declined or in_paper');
  if (!['quick', 'desk'].includes(r.mode)) e.push('mode must be quick or desk');
  if (!plain(r.topic, TEXT_MAX.topic) || !plain(r.topic_cs, TEXT_MAX.topic)) e.push('topic and topic_cs required (the desk\'s own neutral wording, plain text)');
  if (!isStamp(r.answered_at) || (isStamp(r.asked_at) && Date.parse(r.answered_at) < Date.parse(r.asked_at))) e.push('answered_at must be a timestamp not before asked_at');
  if (r.status === 'declined') {
    const d = r.declined || {};
    if (!REQ.declined.includes(d.reason)) e.push(`declined.reason must be one of ${REQ.declined.join(', ')}`);
    if (!plain(d.note, TEXT_MAX.note) || !plain(d.note_cs, TEXT_MAX.note)) e.push('declined.note and note_cs required');
    if (r.claim || r.forecast || r.result) e.push('a declined request carries no claim, forecast or result');
  }
  if (r.status === 'in_paper') {
    const p = r.in_paper || {};
    if (!isDate(p.edition) || !nonEmpty(p.story)) e.push('in_paper needs edition (date) and story (id)');
    if (r.claim || r.forecast || r.result) e.push('a request answered by the paper carries no claim, forecast or result of its own');
  }
  if (r.status === 'answered') {
    const c = r.claim || {}, f = r.forecast || {};
    for (const k of ['text', 'text_cs']) if (!plain(c[k], TEXT_MAX.text)) e.push(`claim.${k} required (plain text, at most ${TEXT_MAX.text} characters)`);
    for (const k of ['criterion', 'criterion_cs']) if (!plain(c[k], TEXT_MAX.criterion)) e.push(`claim.${k} required`);
    if (!plain(c.resolution_source, TEXT_MAX.resolution_source)) e.push('claim.resolution_source required');
    let zoneOk = true;
    try { new Intl.DateTimeFormat('en-US', { timeZone: c.tz }); if (!String(c.tz).includes('/')) zoneOk = false; } catch { zoneOk = false; }
    if (!zoneOk) e.push('claim.tz must be an IANA time zone');
    if (!isDate(r.events_date)) e.push('events_date must be a date');
    const w = c.event_window || {};
    if (!isStamp(w.start) || !isStamp(w.end) || Date.parse(w.end) <= Date.parse(w.start)) e.push('claim.event_window needs start and end timestamps');
    else if (zoneOk && isDate(r.events_date)) {
      const day = dayWindow(r.events_date, c.tz);
      if (Date.parse(w.start) < Date.parse(day.start) || Date.parse(w.end) > Date.parse(day.end)) e.push('claim.event_window must lie within events_date in the claim\'s time zone');
    }
    if (!isStamp(c.evidence_at) || !isStamp(c.resolves_by) || Date.parse(c.resolves_by) < Date.parse(c.evidence_at) || (isStamp(w.start) && Date.parse(c.evidence_at) < Date.parse(w.start))) e.push('claim.evidence_at and resolves_by required (window start ≤ evidence_at ≤ resolves_by)');
    if (isDate(r.events_date) && isStamp(r.asked_at)) {
      const asked = dateIn(REQ.tz, Date.parse(r.asked_at));
      if (r.events_date < addDays(asked, 1) || r.events_date > addDays(asked, REQ.horizon_days)) e.push(`events_date must be from tomorrow to ${REQ.horizon_days} days after the day of asking (${asked})`);
    }
    if (!isStamp(f.frozen_at)) e.push('forecast.frozen_at required');
    else {
      if (isStamp(w.start) && Date.parse(f.frozen_at) >= Date.parse(w.start)) e.push('the forecast must be frozen before the event window opens');
      if (isStamp(r.answered_at) && Date.parse(f.frozen_at) > Date.parse(r.answered_at)) e.push('forecast.frozen_at cannot be later than answered_at');
    }
    const agents = Array.isArray(f.agents) ? f.agents : [];
    if (agents.length < 2) e.push('forecast.agents: at least two forecasters');
    for (const a of agents) if (!nonEmpty(a.role) || !nonEmpty(a.model) || typeof a.p !== 'number' || !(a.p > 0 && a.p < 1) || !isStamp(a.at)) e.push(`forecast.agents: ${a.role || '?'} needs role, model, p (0–1) and at`);
    if (typeof f.p !== 'number' || f.p < REQ.probability_min || f.p > REQ.probability_max) e.push(`forecast.p must lie between ${REQ.probability_min} and ${REQ.probability_max}`);
    else if (agents.length >= 2 && agents.every((a) => typeof a.p === 'number' && a.p > 0 && a.p < 1) && Math.abs(combineQuick(agents.map((a) => a.p)) - f.p) > 0.011) e.push(`forecast.p must be the geometric mean of the forecasters' odds (${combineQuick(agents.map((a) => a.p))})`);
    if (!plain(r.reasoning, TEXT_MAX.reasoning) || !plain(r.reasoning_cs, TEXT_MAX.reasoning)) e.push('reasoning and reasoning_cs required');
    const src = Array.isArray(r.sources) ? r.sources : [];
    if (!src.length) e.push('sources: at least one page actually read');
    for (const s of src) if (!isUrl(s.url) || !plain(s.title, 200)) e.push(`sources: title and http(s) url required (${s.url || '?'})`);
    for (const x of r.facts || []) if (!plain(x.text, TEXT_MAX.fact) || !isUrl(x.url)) e.push('facts: each needs text and url');
    if (r.result) {
      const x = r.result;
      if (!['yes', 'no', 'void'].includes(x.outcome)) e.push('result.outcome must be yes, no or void');
      if (!plain(x.note, TEXT_MAX.note)) e.push('result.note required');
      if (x.outcome !== 'void' && !isUrl(x.evidence)) e.push('result.evidence must be a URL');
      if (!isStamp(x.resolved_at) || (isStamp(w.start) && Date.parse(x.resolved_at) < Date.parse(w.start))) e.push('result.resolved_at must be a timestamp after the event window opens');
    }
  }
  return e;
}

/** Scored rows of readers' questions: answered, with a yes/no result. */
export const scoredRequests = (list) => list.filter((r) => r.status === 'answered' && ['yes', 'no'].includes(r.result?.outcome)).map((r) => ({ id: r.id, probability: r.forecast.p, outcome: r.result.outcome, mode: r.mode, request: r }));
/** Answered requests whose evidence is due and that have no result yet. */
export const dueRequests = (list, now = Date.now()) => list.filter((r) => r.status === 'answered' && !r.result && Date.parse(r.claim.evidence_at) <= now);
