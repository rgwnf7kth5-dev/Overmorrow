// Prediction-market lookup for forecasters: Polymarket, Kalshi and Manifold (public, no key), and Metaculus when
// METACULUS_TOKEN is set (community forecasts; the API may withhold the community figure on some questions).
// Usage:
//   node scripts/markets.mjs search "brazil election"      list matching markets with prices, volume and liquidity
//   node scripts/markets.mjs price polymarket:<market-slug> current price of one market
//   node scripts/markets.mjs price kalshi:<market-ticker>
// Output is JSON. Record the price you rely on in the claim's forecast.market with the time you read it.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const CACHE = path.join(ROOT, 'work', 'markets-cache');
const PM = 'https://gamma-api.polymarket.com';
const KS = 'https://api.elections.kalshi.com/trade-api/v2';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(url, { headers: { accept: 'application/json', 'user-agent': 'overmorrow-forecasts/1.0' } });
    if (res.status === 429) { await sleep(1500 * (i + 1)); continue; }
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.json();
  }
  throw new Error(`rate limited: ${url}`);
}

const num = (x) => (x === undefined || x === null || x === '' ? null : Number(x));
const parse = (s) => { try { return typeof s === 'string' ? JSON.parse(s) : s || []; } catch { return []; } };

function pmMarket(m, ev) {
  const outcomes = parse(m.outcomes), prices = parse(m.outcomePrices).map(Number);
  return {
    source: 'polymarket', kind: 'exchange', id: `polymarket:${m.slug}`, event: ev?.title, question: m.question,
    url: `https://polymarket.com/event/${ev?.slug || m.slug}`,
    outcomes: outcomes.map((o, i) => ({ outcome: o, price: prices[i] ?? null })),
    volume: num(m.volume), liquidity: num(m.liquidity), closes: m.endDate, active: m.active && !m.closed,
  };
}

async function polymarketSearch(q) {
  const data = await getJson(`${PM}/public-search?q=${encodeURIComponent(q)}&limit_per_type=10&events_status=active`);
  const out = [];
  for (const ev of data.events || []) for (const m of ev.markets || []) if (!m.closed) out.push(pmMarket(m, ev));
  return out;
}

async function kalshiEvents() {
  fs.mkdirSync(CACHE, { recursive: true });
  const file = path.join(CACHE, 'kalshi-events.json');
  if (fs.existsSync(file) && Date.now() - fs.statSync(file).mtimeMs < 6 * 3600e3) return JSON.parse(fs.readFileSync(file, 'utf8'));
  const all = [];
  let cursor = '';
  for (let page = 0; page < 120; page++) {
    const d = await getJson(`${KS}/events?status=open&limit=200&with_nested_markets=true${cursor ? `&cursor=${cursor}` : ''}`);
    all.push(...(d.events || []));
    if (!d.cursor) break;
    cursor = d.cursor;
    await sleep(300);
  }
  fs.writeFileSync(file, JSON.stringify(all));
  return all;
}

function ksMarket(m, ev) {
  // Kalshi's API moved from integer cents (last_price, yes_bid…) to dollar strings (last_price_dollars, yes_bid_dollars…); read either.
  const px = (k) => { const d = num(m[`${k}_dollars`]); if (d !== null && d !== undefined && !Number.isNaN(d)) return d; const c = num(m[k]); return c === null || c === undefined || Number.isNaN(c) ? null : c / 100; };
  const yes = px('last_price') ?? px('yes_bid');
  return {
    source: 'kalshi', kind: 'exchange', id: `kalshi:${m.ticker}`, event: ev?.title, question: m.title || ev?.title, subtitle: m.yes_sub_title || m.subtitle,
    url: `https://kalshi.com/markets/${(ev?.series_ticker || m.event_ticker || '').toLowerCase()}`,
    outcomes: [{ outcome: 'Yes', price: yes }],
    bid: px('yes_bid'), ask: px('yes_ask'), volume: num(m.volume_fp) ?? num(m.volume), liquidity: num(m.liquidity_dollars) ?? num(m.liquidity), closes: m.close_time, active: m.status === 'active',
  };
}

async function kalshiSearch(q) {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  const evs = await kalshiEvents();
  const out = [];
  for (const ev of evs) {
    const text = `${ev.title} ${ev.sub_title || ''} ${ev.series_ticker || ''}`.toLowerCase();
    if (!words.every((w) => text.includes(w))) continue;
    for (const m of ev.markets || []) out.push(ksMarket(m, ev));
  }
  return out;
}

async function metaculusSearch(q) {
  const token = process.env.METACULUS_TOKEN;
  if (!token) return [];
  const res = await fetch(`https://www.metaculus.com/api/posts/?search=${encodeURIComponent(q)}&statuses=open&limit=10&with_cp=true`, { headers: { Authorization: `Token ${token}`, accept: 'application/json' } });
  if (!res.ok) throw new Error(`metaculus ${res.status}`);
  const d = await res.json();
  return (d.results || []).filter((p) => p.question).map((p) => {
    const latest = p.question.aggregations?.recency_weighted?.latest;
    const cp = latest?.centers?.[0] ?? latest?.means?.[0] ?? null;
    return { source: 'metaculus', kind: 'platform', id: `metaculus:${p.id}`, question: p.title, url: `https://www.metaculus.com/questions/${p.id}/`, type: p.question.type, outcomes: p.question.type === 'binary' ? [{ outcome: 'Yes', price: cp }] : [], forecasters: p.nr_forecasters ?? null, closes: p.question.scheduled_close_time, note: cp === null ? 'community forecast not available through the API' : undefined };
  });
}

// Manifold: play-money but often the only market on Czech and European questions; kind "platform", weight it low.
async function manifoldSearch(q) {
  const d = await getJson(`https://api.manifold.markets/v0/search-markets?term=${encodeURIComponent(q)}&filter=open&limit=10`);
  return (d || []).filter((m) => m.outcomeType === 'BINARY').map((m) => ({
    source: 'manifold', kind: 'platform', id: `manifold:${m.id}`, question: m.question, url: m.url,
    outcomes: [{ outcome: 'Yes', price: num(m.probability) }], volume: num(m.volume), liquidity: num(m.totalLiquidity), traders: m.uniqueBettorCount ?? null, closes: m.closeTime ? new Date(m.closeTime).toISOString() : null, active: !m.isResolved,
  }));
}

async function price(id) {
  const [src, key] = [id.slice(0, id.indexOf(':')), id.slice(id.indexOf(':') + 1)];
  if (src === 'polymarket') {
    const [m] = await getJson(`${PM}/markets?slug=${encodeURIComponent(key)}`);
    if (!m) throw new Error(`no market ${key}`);
    return { ...pmMarket(m, (m.events || [])[0]), read_at: new Date().toISOString() };
  }
  if (src === 'manifold') {
    const m = await getJson(`https://api.manifold.markets/v0/market/${encodeURIComponent(key)}`);
    return { source: 'manifold', kind: 'platform', id, question: m.question, url: m.url, outcomes: [{ outcome: 'Yes', price: num(m.probability) }], volume: num(m.volume), traders: m.uniqueBettorCount ?? null, read_at: new Date().toISOString() };
  }
  if (src === 'kalshi') {
    const { market } = await getJson(`${KS}/markets/${encodeURIComponent(key)}`);
    return { ...ksMarket(market), read_at: new Date().toISOString() };
  }
  throw new Error('id must start with polymarket:, kalshi: or manifold:');
}

const [cmd, ...rest] = process.argv.slice(2);
try {
  if (cmd === 'search') {
    const q = rest.join(' ');
    const settled = await Promise.allSettled([polymarketSearch(q), kalshiSearch(q), metaculusSearch(q), manifoldSearch(q)]);
    const markets = settled.flatMap((s) => (s.status === 'fulfilled' ? s.value : []));
    const errors = settled.filter((s) => s.status === 'rejected').map((s) => String(s.reason.message || s.reason));
    markets.sort((a, b) => (b.volume || 0) - (a.volume || 0));
    markets.splice(40);
    console.log(JSON.stringify({ query: q, read_at: new Date().toISOString(), markets, errors }, null, 1));
  } else if (cmd === 'price') {
    console.log(JSON.stringify(await price(rest[0]), null, 1));
  } else {
    console.error('usage: node scripts/markets.mjs search <words> | price <polymarket:slug|kalshi:ticker|manifold:id>\nBookmaker odds (Tipsport, Fortuna, Betfair): read the page with WebFetch, then node scripts/refdata/models.mjs odds <o1> <o2> …');
    process.exit(2);
  }
} catch (e) {
  console.error(String(e.message || e));
  process.exit(1);
}
