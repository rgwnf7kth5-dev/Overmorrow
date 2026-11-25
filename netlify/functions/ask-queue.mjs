// GET /api/ask/queue  →  { ok, items: [{ id, topic, lang, asked_at, state, record? }] }
// Read by the readers' desk (scripts/requests.mjs pull): topics that still wait, and quick answers to be archived
// in the repository. Topics older than REQ.queue_days are dropped here. If the site's environment sets
// ASK_QUEUE_TOKEN, the caller must send it in the header x-ask-token.
import { REQ } from '../../scripts/requests-core.mjs';
import { store, json, env, publicView } from '../lib/store.mjs';

export default async (req) => {
  const token = env('ASK_QUEUE_TOKEN');
  if (token && req.headers.get('x-ask-token') !== token) return json({ ok: false, error: 'forbidden' }, 403);
  const s = store();
  const now = Date.now();
  const { blobs } = await s.list({ prefix: 'q/' });
  const items = [];
  for (const b of blobs.slice(0, 400)) {
    const item = await s.get(b.key, { type: 'json' });
    if (!item) continue;
    if (now - Date.parse(item.asked_at) > REQ.queue_days * 864e5) { await s.delete(b.key); await s.delete(`k/${item.key}`); continue; }
    const v = publicView(item, now);
    items.push({ id: item.id, topic: item.topic, lang: item.lang, asked_at: item.asked_at, state: v.state, ...(v.record ? { record: v.record } : {}) });
  }
  items.sort((a, b) => a.asked_at.localeCompare(b.asked_at));
  return json({ ok: true, at: new Date(now).toISOString(), items });
};

export const config = { path: '/api/ask/queue', method: 'GET', rateLimit: { windowLimit: 20, windowSize: 60, aggregateBy: ['ip', 'domain'] } };
