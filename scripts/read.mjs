// Read a web page as plain text from the shell, instead of the WebFetch tool. The publisher decided on
// 3 November 2026 that runs must not stop for per-site approvals, which WebFetch asks for and which expire.
// Use it only to read news and official sources for facts; never submit forms or send data.
//
//   node scripts/read.mjs <url> [--max 12000] [--grep "word|other"] [--links]
//
// Prints the title, the publication time when the page states one, and the readable text (paragraphs and
// headings). --grep keeps only paragraphs matching the pattern (with the title kept). --links lists the
// article links of a front page instead of its text. Exit code 2 when the site refuses (401/403/429): then
// use WebSearch results or another outlet for the same fact.
const args = process.argv.slice(2);
const url = args.find((a) => /^https?:\/\//.test(a));
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
if (!url) { console.error('usage: node scripts/read.mjs <url> [--max 12000] [--grep "a|b"] [--links]'); process.exit(1); }
const max = Number(opt('max', 12000));

// curl rather than Node's fetch: several news sites refuse Node's TLS fingerprint but serve curl.
import { spawnSync } from 'node:child_process';
function get(agent) {
  const r = spawnSync('curl', ['-sSL', '--compressed', '-m', '25', '-A', agent, '-H', 'Accept-Language: en,cs;q=0.8', '-w', '\n@@%{http_code}|%{content_type}|%{url_effective}', url], { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 });
  if (r.status !== 0 && !(r.stdout || '').includes('\n@@')) return { status: 0, error: (r.stderr || r.error?.message || `curl exit ${r.status}`).trim() };
  const i = r.stdout.lastIndexOf('\n@@');
  const [code, type, eff] = r.stdout.slice(i + 3).split('|');
  return { status: +code, type: type || '', url: eff || url, body: r.stdout.slice(0, i), error: (r.stderr || '').trim() };
}
let res = get('Mozilla/5.0');
if ([401, 403].includes(res.status)) res = get('Mozilla/5.0 (Macintosh; Intel Mac OS X 14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15');
if (!res.status) { console.error(`FAILED ${url}: ${res.error || 'no response'} (not reachable from this environment: use WebSearch or another outlet)`); process.exit(3); }
if (res.status >= 400) { console.error(`HTTP ${res.status} ${url}${[401, 403, 429].includes(res.status) ? ' (the site refuses scripted reading: use WebSearch or another outlet)' : ''}`); process.exit(res.status === 404 ? 4 : 2); }
const type = res.type;
const raw = res.body;
if (/json/.test(type)) { console.log(raw.slice(0, max)); process.exit(0); }
if (type && !/html|xml/.test(type)) { console.log(`[${type}] ${raw.length} bytes; not a web page`); process.exit(0); }

const ent = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', hellip: '…', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“' };
const decode = (s) => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&([a-z]+);/gi, (m, n) => ent[n.toLowerCase()] ?? m);
const text = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const meta = (re) => { const m = raw.match(re); return m ? decode(m[1]).trim() : ''; };

const title = meta(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)/i) || text((raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '');
const published = meta(/<meta[^>]+(?:property|name)=["'](?:article:published_time|og:published_time|date|pubdate|DC\.date\.issued)["'][^>]+content=["']([^"']+)/i)
  || meta(/"datePublished"\s*:\s*"([^"]+)"/) || meta(/<time[^>]+datetime=["']([^"']+)/i);
const modified = meta(/<meta[^>]+property=["']article:modified_time["'][^>]+content=["']([^"']+)/i) || meta(/"dateModified"\s*:\s*"([^"]+)"/);

const body = raw.replace(/<(script|style|noscript|svg|nav|footer|aside|form|iframe)[\s\S]*?<\/\1>/gi, ' ');
console.log(`TITLE: ${title}`);
console.log(`URL: ${res.url}`);
if (published) console.log(`PUBLISHED: ${published}`);
if (modified) console.log(`MODIFIED: ${modified}`);
console.log(`READ: ${new Date().toISOString()}`);
console.log('');

if (args.includes('--links')) {
  const seen = new Set();
  const base = new URL(res.url);
  for (const m of body.matchAll(/<a[^>]+href=["']([^"'#]+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const t = text(m[2]);
    if (t.length < 25) continue;
    let href; try { href = new URL(m[1], base).href; } catch { continue; }
    if (seen.has(href)) continue;
    seen.add(href);
    console.log(`- ${t} | ${href}`);
    if (seen.size >= 60) break;
  }
  process.exit(0);
}

const blocks = [];
for (const m of body.matchAll(/<(h1|h2|h3|p|li|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi)) {
  const t = text(m[2]);
  if (t.length < (m[1].toLowerCase() === 'p' ? 25 : 8)) continue;
  blocks.push(m[1].toLowerCase().startsWith('h') ? `## ${t}` : t);
}
let out = blocks;
const g = opt('grep');
if (g) { const re = new RegExp(g, 'i'); out = blocks.filter((b) => re.test(b)); }
let s = out.join('\n\n');
if (!s) s = text(body).slice(0, max);
console.log(s.length > max ? `${s.slice(0, max)}\n[… cut at ${max} characters; use --grep or --max]` : s);
