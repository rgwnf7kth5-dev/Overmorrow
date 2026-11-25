// Storage for readers' questions on the site (Netlify Blobs). Three kinds of key in the store "requests":
//   q/<id>          one queued topic: { id, topic, key, lang, asked_at, state, mode, record?, error? }
//   k/<topic key>   { id, at }: the same topic asked again within two days gets the first answer
//   d/<date>        { count, quick }: how many topics were accepted that day (Europe/Paris)
// state: queued (waits for the readers' desk) | working (the quick forecast runs) | done (record holds the answer)
//        | failed (the quick forecast failed; the readers' desk takes it).
import { getStore } from '@netlify/blobs';
import { REQ, dateIn } from '../../scripts/requests-core.mjs';

export const store = () => getStore({ name: 'requests', consistency: 'strong' });
export const json = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex', ...headers } });
export const env = (k) => (globalThis.Netlify?.env?.get?.(k) ?? process.env[k] ?? '');
// The quick forecast costs money on every question, so it runs only when the publisher has switched it on
// (ASK_QUICK=on in the site's environment). Netlify's AI Gateway puts ANTHROPIC_API_KEY and ANTHROPIC_BASE_URL
// into every function by itself; their presence alone must never start paid model calls.
export const quickOn = () => env('ASK_QUICK') === 'on' && Boolean(env('ANTHROPIC_API_KEY'));
/** Where the model calls go: an explicit ANTHROPIC_API_URL, else the base URL the environment gives (the AI Gateway, or the publisher's own), else Anthropic's API. */
export const modelApi = () => env('ANTHROPIC_API_URL') || (env('ANTHROPIC_BASE_URL') ? `${env('ANTHROPIC_BASE_URL').replace(/\/+$/, '')}/v1/messages` : undefined);

export async function dayCount(s, now = Date.now()) {
  return (await s.get(`d/${dateIn(REQ.tz, now)}`, { type: 'json' })) || { count: 0, quick: 0 };
}
export async function bumpDay(s, quick, now = Date.now()) {
  const d = await dayCount(s, now);
  d.count += 1;
  if (quick) d.quick += 1;
  await s.setJSON(`d/${dateIn(REQ.tz, now)}`, d);
  return d;
}
/** What a reader (or the readers' desk) may see of a queued topic. The reader's own words are not returned to the public. */
export function publicView(item, now = Date.now()) {
  const stale = item.state === 'working' && now - Date.parse(item.started_at || item.asked_at) > REQ.stale_minutes * 60000;
  const state = item.state === 'done' ? item.record.status : stale || item.state === 'failed' ? 'queued' : item.state;
  return { id: item.id, state, mode: item.state === 'done' ? item.record.mode : state === 'working' ? 'quick' : 'desk', asked_at: item.asked_at, ...(item.state === 'done' ? { record: item.record } : {}) };
}
