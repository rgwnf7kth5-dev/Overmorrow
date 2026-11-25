// POST /api/ask/quick  { id }  — background function (up to 15 minutes), started by /api/ask.
// Runs the quick forecast (scripts/requests-quick.mjs) for one topic and stores the answer beside it.
// Works only on a topic that /api/ask has just marked "working", once; anything else is ignored.
import { ID_RE, REQ, stampIn } from '../../scripts/requests-core.mjs';
import { runQuick, QUICK } from '../../scripts/requests-quick.mjs';
import { store, env, quickOn } from '../lib/store.mjs';

export default async (req) => {
  let id = '';
  try { id = (await req.json()).id || ''; } catch { return; }
  if (!ID_RE.test(id) || !quickOn()) return;
  const s = store();
  const item = await s.get(`q/${id}`, { type: 'json' });
  if (!item || item.state !== 'working' || item.picked_at) return;
  item.picked_at = stampIn(REQ.tz);
  await s.setJSON(`q/${id}`, item);
  try {
    const models = { ...QUICK.models };
    for (const k of Object.keys(models)) { const v = env(`ASK_MODEL_${k.toUpperCase().replace('-', '_')}`); if (v) models[k] = v; }
    const record = await runQuick({ id, topic: item.topic, lang: item.lang, asked_at: item.asked_at, fetch, apiKey: env('ANTHROPIC_API_KEY'), models, api: env('ANTHROPIC_API_URL') || undefined, version: env('ANTHROPIC_VERSION') || undefined });
    await s.setJSON(`q/${id}`, { ...item, state: 'done', record });
  } catch (err) {
    console.error(`quick forecast ${id} failed: ${err?.message || err}`);
    await s.setJSON(`q/${id}`, { ...item, state: 'failed', error: String(err?.message || err).slice(0, 300) });
  }
};

export const config = { path: '/api/ask/quick', method: 'POST', background: true };
