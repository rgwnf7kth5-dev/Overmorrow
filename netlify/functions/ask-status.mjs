// GET /api/ask/status?id=r-…  →  { ok, id, state, mode, record? }
// state: queued | working | answered | declined | in_paper. Once the readers' desk has archived the answer in the
// repository, the same record is served as a static file at /requests/<id>.json.
import { ID_RE } from '../../scripts/requests-core.mjs';
import { store, json, publicView } from '../lib/store.mjs';

export default async (req) => {
  const id = new URL(req.url).searchParams.get('id') || '';
  if (!ID_RE.test(id)) return json({ ok: false, error: 'invalid' }, 400);
  const item = await store().get(`q/${id}`, { type: 'json' });
  if (!item) return json({ ok: false, error: 'unknown' }, 404);
  return json({ ok: true, ...publicView(item) });
};

export const config = { path: '/api/ask/status', method: 'GET' };
