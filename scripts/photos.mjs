// Illustrative photographs from Wikimedia Commons for an edition (METHODOLOGY 5, EDITOR step 6d).
//
//   node scripts/photos.mjs search "<query>"                 list freely licensed candidates
//   node scripts/photos.mjs add <edition> <story-id> "File:Name.jpg" \
//        --alt "…" --alt-cs "…" --caption "…" --caption-cs "…"
//
// `add` reads the file's author and licence from Commons, downloads a 960 px wide copy to
// site/photos/<edition>/<story-id>.jpg and writes the entry into data/images/<edition>.json.
// Only public-domain, CC0, CC BY and CC BY-SA files are accepted. Commons rate-limits shared
// addresses; the script waits and retries on HTTP 429.
//
// Both commands show the year the picture was taken. `add` refuses a file whose title, description
// or Commons categories say the subject is under construction, demolished, damaged or otherwise not
// in its present state (pass --allow-state only when that state is the subject of the story).
// The editor must open the downloaded copy and look at it before writing alt and caption.
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const UA = 'OvermorrowNews/1.0 (https://overmorrownews.com; photo credits)';
const API = 'https://commons.wikimedia.org/w/api.php';
const OK_LICENCE = /^(public domain|pd\b|cc0|cc by(-sa)? \d)/i;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, binary = false) {
  for (let i = 0; i < 12; i++) {
    const res = await fetch(url, { headers: { 'user-agent': UA } });
    if (res.status === 429 || res.status >= 500) { await sleep(10000 + i * 5000); continue; }
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return binary ? Buffer.from(await res.arrayBuffer()) : res.json();
  }
  throw new Error(`gave up after repeated rate limiting: ${url}`);
}
const STALE = /under construction|in construction|construction (site|of)|building construction|chantier|baustelle|im bau|demolition|demolished|ruins of|destroyed|damaged|fire (at|in|of)|renovation of|former /i;
const strip = (s = '') => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
function info(page) {
  const ii = page.imageinfo?.[0];
  if (!ii) return null;
  const m = ii.extmetadata || {};
  const v = (k) => strip(m[k]?.value);
  const cats = (page.categories || []).map((c) => c.title.replace('Category:', ''));
  const year = (v('DateTimeOriginal').match(/(1[89]|20)\d\d/) || [])[0] || '';
  const stale = [page.title, v('ImageDescription'), ...cats].filter((t) => STALE.test(t)).map((t) => t.slice(0, 80));
  return { year, cats, stale, title: page.title, width: ii.thumbwidth, height: ii.thumbheight, thumb: ii.thumburl, page: ii.descriptionurl, credit: v('Artist') || v('Credit') || 'Unknown author', license: v('LicenseShortName'), license_url: v('LicenseUrl') || undefined, orig: `${ii.width}×${ii.height}` };
}
const q = (params) => `${API}?${new URLSearchParams({ format: 'json', prop: 'imageinfo|categories', cllimit: '500', clshow: '!hidden', iiprop: 'url|extmetadata|size', iiurlwidth: '960', ...params })}`;

const [cmd, ...args] = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };

if (cmd === 'search' && args[0]) {
  const d = await get(q({ action: 'query', generator: 'search', gsrnamespace: '6', gsrlimit: '12', gsrsearch: `${args[0]} filetype:bitmap` }));
  for (const p of Object.values(d.query?.pages || {})) {
    const x = info(p);
    if (!x) continue;
    const ok = OK_LICENCE.test(x.license) && !x.stale.length;
    console.log(`${ok ? 'ok ' : 'NO '} ${x.title} | taken ${x.year || '?'} | ${x.orig} | ${x.credit.slice(0, 40)} | ${x.license}${x.stale.length ? ` | NOT PRESENT STATE: ${x.stale[0]}` : ''}`);
  }
} else if (cmd === 'add' && args.length >= 3) {
  const [edition, story, file] = args;
  const need = ['alt', 'alt-cs', 'caption', 'caption-cs'];
  for (const n of need) if (!flag(n)) { console.error(`--${n} is required`); process.exit(1); }
  const d = await get(q({ action: 'query', titles: file.startsWith('File:') ? file : `File:${file}` }));
  const x = info(Object.values(d.query?.pages || {})[0] || {});
  if (!x) { console.error(`not found on Commons: ${file}`); process.exit(1); }
  if (!OK_LICENCE.test(x.license)) { console.error(`licence not allowed: ${x.license}`); process.exit(1); }
  if (x.stale.length && !args.includes('--allow-state')) { console.error(`refused: the subject is not shown in its present state (${x.stale.join('; ')}). Choose another file.`); process.exit(1); }
  const dir = path.join(ROOT, 'site', 'photos', edition);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${story}.jpg`), await get(x.thumb, true));
  const jf = path.join(ROOT, 'data', 'images', `${edition}.json`);
  const data = fs.existsSync(jf) ? JSON.parse(fs.readFileSync(jf, 'utf8')) : { _note: 'Illustrative photographs (places and objects, never people at events that have not happened yet), freely licensed, from Wikimedia Commons, credited. Kept apart from the frozen edition.', photos: {} };
  data.photos[story] = { file: `${story}.jpg`, width: x.width, height: x.height, alt: flag('alt'), alt_cs: flag('alt-cs'), caption: flag('caption'), caption_cs: flag('caption-cs'), credit: x.credit, ...(x.year ? { taken: x.year } : {}), license: x.license, ...(x.license_url ? { license_url: x.license_url } : {}), source_url: x.page };
  fs.mkdirSync(path.dirname(jf), { recursive: true });
  fs.writeFileSync(jf, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`added ${story}: ${x.title} (taken ${x.year || 'unknown year'}, ${x.license}, ${x.credit}), ${x.width}×${x.height}`);
  console.log(`now open site/photos/${edition}/${story}.jpg and check that alt and caption describe what is in the picture`);
} else {
  console.error('usage: photos.mjs search "<query>" | add <edition> <story-id> "File:…" --alt … --alt-cs … --caption … --caption-cs …');
  process.exit(1);
}
