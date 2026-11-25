// POST /api/ask  { topic, lang }  →  { ok, id, state, mode }
// Takes a reader's topic for a forecast on demand (METHODOLOGY 21). The topic is kept short and plain, queued for
// the readers' desk, and, where the quick forecast is switched on, handed to it at once.
import { REQ, sanitizeTopic, topicKey, newId, stampIn } from '../../scripts/requests-core.mjs';
import { store, json, quickOn, dayCount, bumpDay, publicView } from '../lib/store.mjs';

export default async (req) => {
  let body;
  try { const raw = await req.text(); if (raw.length > 2000) return json({ ok: false, error: 'long' }, 400); body = JSON.parse(raw); } catch { return json({ ok: false, error: 'invalid' }, 400); }
  // A field no person sees or fills in. A filled one is a robot: answer as if all went well and keep nothing.
  if (body && body.website) return json({ ok: true, id: newId(), state: 'queued', mode: 'desk' });
  const clean = sanitizeTopic(body?.topic);
  if (!clean.ok) return json({ ok: false, error: clean.why }, 400);
  const lang = body.lang === 'cs' ? 'cs' : 'en';
  const now = Date.now();
  const s = store();
  const key = topicKey(clean.topic);

  const same = await s.get(`k/${key}`, { type: 'json' });
  if (same && now - Date.parse(same.at) < 2 * 864e5) {
    const item = await s.get(`q/${same.id}`, { type: 'json' });
    if (item) return json({ ok: true, same: true, ...publicView(item, now) });
  }
  const day = await dayCount(s, now);
  if (day.count >= REQ.per_day_max) return json({ ok: false, error: 'full' }, 429);

  const quick = quickOn() && day.quick < REQ.quick_per_day_max;
  const id = newId(now);
  const item = { id, topic: clean.topic, key, lang, asked_at: stampIn(REQ.tz, now), state: quick ? 'working' : 'queued', mode: quick ? 'quick' : 'desk', ...(quick ? { started_at: stampIn(REQ.tz, now) } : {}) };
  await s.setJSON(`q/${id}`, item);
  await s.setJSON(`k/${key}`, { id, at: item.asked_at });
  await bumpDay(s, quick, now);

  if (quick) {
    // The background function answers 202 at once and goes on working for up to 15 minutes.
    try { await fetch(new URL('/api/ask/quick', req.url), { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id }) }); }
    catch { item.state = 'queued'; item.mode = 'desk'; await s.setJSON(`q/${id}`, item); }
  }
  return json({ ok: true, ...publicView(item, now) });
};

export const config = { path: '/api/ask', method: 'POST', rateLimit: { windowLimit: 4, windowSize: 60, aggregateBy: ['ip', 'domain'] } };
