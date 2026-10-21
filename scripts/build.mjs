// Builds the static site into dist/. Run: node scripts/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEditions, resultsFor, claimsOf, scoredClaims, summarise, brier } from './lib.mjs';

const DIST = path.join(ROOT, 'dist');
const REPO = 'https://github.com/rgwnf7kth5-dev/Overmorrow';
const MOTTO = 'Tomorrow happens. Overmorrow reports it. You read it today.';

// ---------- helpers ----------
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pct = (p) => `${Math.round(p * 100)}%`;
const fmtDate = (d, opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) =>
  new Intl.DateTimeFormat('en-GB', { ...opts, timeZone: 'UTC' }).format(new Date(`${d}T12:00:00Z`));
const fmtStamp = (s) => {
  const m = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}).*([+-]\d{2}:\d{2}|Z)$/);
  if (!m) return s;
  const zone = { '+01:00': 'CET', '+02:00': 'CEST', Z: 'UTC' }[m[3]] || m[3];
  return `${fmtDate(m[1], { weekday: 'long', day: 'numeric', month: 'long' })}, ${m[2]} ${zone}`;
};
const write = (rel, html) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const fmt3 = (x) => x.toFixed(3);
let latestDate = '';

function layout({ title, nav, body, description }) {
  const links = [['/', 'Today', 'today'], ['/archive/', 'Archive', 'archive'], ['/accuracy/', 'Accuracy', 'accuracy'], ['/method/', 'Method', 'method']];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || MOTTO)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<div class="page">
${body.header || ''}
<nav class="nav" aria-label="Sections">${links.map(([href, label, key]) => `<a href="${href}"${key === nav ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
${body.main}
<footer>
  <div><h4>About The Overmorrow</h4><p>A newspaper written two days ahead. Every report describes a scheduled or expected event and states the outcome we consider most likely, with a probability. Nothing is edited after publication.</p></div>
  <div><h4>Reading the likelihood bars</h4><p>The figure is our estimated probability that the claim in that line comes true. Over many reports, a 70% call should prove right about seven times in ten. The <a href="/accuracy/">accuracy page</a> shows whether it does.</p></div>
  <div><h4>Record</h4><p>Every edition, forecast and result is kept in a public repository, with the time each was written. <a href="${REPO}">View the source and history</a>.</p></div>
</footer>
</div>
</body>
</html>
`;
}

function masthead(ed, { topline } = {}) {
  return `<header>
  <div class="topline"><span>${esc(topline || `Forecast edition · written ${fmtStamp(ed.frozen_at)}`)}</span><span>Prague · Brussels · Strasbourg</span></div>
  <p class="mast"><a href="/">The Overmorrow</a></p>
  <p class="motto">${esc(MOTTO)}</p>
  ${ed ? `<div class="dateline"><span>${fmtDate(ed.edition_date)}</span><span>No. ${ed.number}${ed.pilot ? ' · Pilot' : ''}</span><span>Reporting the events of ${fmtDate(ed.events_date, { weekday: 'long', day: 'numeric', month: 'long' })}</span></div>` : `<div class="dateline"><span>Forecasts written two days ahead</span><span>Latest: <a href="/">${fmtDate(latestDate, { weekday: 'long', day: 'numeric', month: 'long' })}</a></span></div>`}
</header>`;
}

// ---------- edition rendering ----------
function stampFor(result) {
  if (!result) return '<span class="stamp pending">Awaiting result</span>';
  const label = { yes: 'Came true', no: 'Did not happen', void: 'Void' }[result.outcome];
  return `<span class="stamp ${result.outcome}">${label}${result.corrected ? ' (corrected)' : ''}</span>`;
}

function likelihood(claim, results, showStamp) {
  const r = results.get(claim.id);
  return `<div class="lk"><span class="bar" aria-hidden="true"><i style="width:${Math.round(claim.probability * 100)}%"></i></span><span>${esc(claim.label)}: <b>${pct(claim.probability)}</b></span>${showStamp ? stampFor(r) : ''}</div>${
    r && r.note ? `<p class="resnote">${esc(r.note)}${r.evidence ? ` <a href="${esc(r.evidence)}">Evidence</a>` : ''}</p>` : ''}`;
}

function checks(story) {
  return `<details class="check"><summary>How ${story.claims.length > 1 ? 'these claims are' : 'this claim is'} checked</summary>${story.claims
    .map((c) => `<p><b>${esc(c.text)}</b> ${esc(c.criterion)} Deadline: ${esc(fmtStamp(c.resolves_by))}.</p>`).join('')}</details>`;
}

function storyHtml(story, results, showStamp) {
  const isLead = story.size === 'lead';
  const H = isLead || story.size === 'half' ? 'h3' : 'h4';
  const tableClaims = new Set((story.table?.rows || []).map((r) => r.claim));
  const lines = story.claims.filter((c, i) => i === 0 || !tableClaims.has(c.id)).map((c) => likelihood(c, results, showStamp)).join('');
  const table = story.table ? `<figure class="alt"><table><caption>${esc(story.table.caption)}</caption>${story.table.rows.map((row) => {
    const c = story.claims.find((x) => x.id === row.claim);
    const r = results.get(row.claim);
    return `<tr><td>${esc(row.label)}${row.note ? ` <small>· ${esc(row.note)}</small>` : ''}</td><td class="n">${c ? pct(c.probability) : ''}${showStamp && r ? ` ${stampFor(r)}` : ''}</td></tr>`;
  }).join('')}</table></figure>` : '';
  const paras = story.body.map((p) => `<p>${esc(p)}</p>`);
  if (table) paras.splice(Math.min(2, paras.length), 0, table);
  const sources = (story.sources || []).filter((s) => s.url).map((s) => `<a href="${esc(s.url)}">${esc(s.title)}</a>`).join('; ');
  const basis = `<p class="basis">Basis: ${esc(story.basis.replace(/^Basis:\s*/i, ''))}${sources ? ` Sources: ${sources}.` : ''}</p>${checks(story)}`;
  const content = isLead ? `<div class="cols">${paras.join('')}${basis}</div>` : `${paras.join('')}${basis}`;
  return `<div class="kicker">${esc(story.kicker)}</div><${H}>${esc(story.headline)}</${H}>${story.standfirst ? `<p class="standfirst">${esc(story.standfirst)}</p>` : ''}${lines}${content}`;
}

const spanClass = { half: 's6', third: 's4', quarter: 's3' };

function editionMain(ed) {
  const results = resultsFor(ed.id);
  const byId = new Map(ed.stories.map((s) => [s.id, s]));
  const anyResolved = results.size > 0;
  const rows = scoredClaims([ed]);
  const sum = summarise(rows);
  const total = claimsOf(ed).length;
  const voids = [...results.values()].filter((r) => r.outcome === 'void').length;

  const scorebar = anyResolved ? `<div class="scorebar"><b>Results</b><span>${sum ? `${sum.hits} of ${sum.n} scored calls went our way` : 'No scored claims yet'}</span>${sum ? `<span>Brier score ${fmt3(sum.brier)} (lower is better; 0.250 = always guessing 50%)</span>` : ''}<span>${total - results.size} awaiting result${voids ? `, ${voids} void` : ''}</span></div>` : '';

  const lead = byId.get(ed.front.lead);
  const rail = ed.front.rail.map((id) => `<article class="story">${storyHtml(byId.get(id), results, anyResolved)}</article>`).join('');
  const weather = ed.weather ? `<div class="box"><h4>${esc(ed.weather.title)}</h4><div class="wx">${ed.weather.rows.map(([a, b]) => `<span>${esc(a)}</span><span>${esc(b)}</span>`).join('')}</div>${ed.weather.note ? `<p class="note">${esc(ed.weather.note)}</p>` : ''}</div>` : '';

  let sections = '';
  for (const sec of ed.sections || []) {
    sections += `<div class="section"><h2>${esc(sec.name)}</h2>${sec.dek ? `<span>${esc(sec.dek)}</span>` : ''}</div>`;
    let used = 0;
    for (const id of sec.stories) {
      const s = byId.get(id);
      const cls = spanClass[s.size] || 's6';
      const width = { s6: 6, s4: 4, s3: 3 }[cls];
      const vr = used % 12 !== 0 ? ' vr' : '';
      sections += `<article class="story ${cls}${vr}">${storyHtml(s, results, anyResolved)}</article>`;
      used += width;
    }
  }

  const diary = ed.diary?.length ? `<div class="section"><h2>Coming Up</h2><span>Fixed dates for the next fortnight</span></div><div class="s12"><ul class="diary">${ed.diary.map((d) => `<li><time>${esc(d.date)}</time>${esc(d.text)}</li>`).join('')}</ul></div>` : '';

  return `<p class="method"><b>Every report in this edition is a forecast.</b> Each describes an event scheduled or expected for ${fmtDate(ed.events_date, { weekday: 'long', day: 'numeric', month: 'long' })} and states the outcome we consider most likely, with its probability. The basis line under each report names what it rests on${anyResolved ? '. Stamps show how each forecast turned out' : ''}.</p>
${scorebar}
<main class="grid">
  <article class="story lead s8">${storyHtml(lead, results, anyResolved)}</article>
  <aside class="rail s4 vr">${rail}${weather}</aside>
  ${sections}
  ${diary}
</main>`;
}

// ---------- pages ----------
function archivePage(editions) {
  const rows = [...editions].reverse().map((ed) => {
    const sum = summarise(scoredClaims([ed]));
    const total = claimsOf(ed).length;
    const res = resultsFor(ed.id);
    const status = !res.size ? 'Awaiting results' : sum ? `${sum.hits} of ${sum.n} went our way · Brier ${fmt3(sum.brier)}${res.size < total ? ` · ${total - res.size} pending` : ''}` : 'Partly resolved';
    return `<tr><td><a href="/edition/${ed.id}/">${fmtDate(ed.edition_date, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</a></td><td class="n">${ed.number}${ed.pilot ? ' (pilot)' : ''}</td><td>${esc(ed.stories.find((s) => s.id === ed.front.lead).headline)}</td><td class="n">${total}</td><td>${status}</td></tr>`;
  }).join('');
  return `<div class="prose" style="max-width:1000px"><h1>Archive</h1><p class="lede">Every edition as published, with the result of each forecast once it is known.</p>
<div class="tbl"><table><thead><tr><th>Edition</th><th class="n">No.</th><th>Lead story</th><th class="n">Claims</th><th>Result</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

function calibrationSvg(bins) {
  const W = 360, H = 300, L = 44, B = 36, T = 12, R = 12;
  const x = (p) => L + p * (W - L - R), y = (p) => H - B - p * (H - B - T);
  const ticks = [0, 0.25, 0.5, 0.75, 1];
  let g = ticks.map((t) => `<line x1="${x(0)}" y1="${y(t)}" x2="${x(1)}" y2="${y(t)}" stroke="#d6d3cd"/><text x="${L - 6}" y="${y(t) + 4}" text-anchor="end" font-size="11" fill="#4b4b4b">${t * 100}%</text><text x="${x(t)}" y="${H - B + 16}" text-anchor="middle" font-size="11" fill="#4b4b4b">${t * 100}%</text>`).join('');
  g += `<line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(1)}" stroke="#6f6f6f" stroke-dasharray="4 3"/>`;
  g += bins.filter((b) => b.n).map((b) => `<circle cx="${x(b.meanP)}" cy="${y(b.freq)}" r="${Math.min(4 + Math.sqrt(b.n) * 2, 12)}" fill="#1f3a5f" fill-opacity="0.85"><title>${b.label}: forecast ${pct(b.meanP)}, came true ${pct(b.freq)} (${b.n} claims)</title></circle>`).join('');
  g += `<text x="${(x(0) + x(1)) / 2}" y="${H - 4}" text-anchor="middle" font-size="11.5" fill="#161616">Forecast probability</text>`;
  g += `<text transform="translate(12 ${(y(0) + y(1)) / 2}) rotate(-90)" text-anchor="middle" font-size="11.5" fill="#161616">How often it came true</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Calibration chart" font-family="IBM Plex Sans Condensed, Arial, sans-serif">${g}</svg>`;
}

function accuracyPage(editions) {
  const rows = scoredClaims(editions);
  const sum = summarise(rows);
  const head = `<div class="prose"><h1>Accuracy</h1><p class="lede">How well our probabilities match what actually happened. Each claim is checked against the primary source named in advance, in the 06:00 run on the date the edition bears.</p>`;
  if (!sum) return `${head}<div class="empty">No forecasts have been resolved yet. The first results appear on the morning of ${fmtDate(editions[0].edition_date, { weekday: 'long', day: 'numeric', month: 'long' })}, when the claims of edition No. 1 fall due.</div><h2>How we score</h2><p>Each claim gets a Brier score: the squared difference between our probability and the outcome (1 if it came true, 0 if not). Lower is better. A forecaster who always says 50% scores 0.250. We also keep a log score, which punishes confident misses more heavily, and a calibration chart, which compares our stated probabilities with how often those claims came true.</p></div>`;

  const bins = Array.from({ length: 10 }, (_, i) => ({ lo: i / 10, hi: (i + 1) / 10, label: `${i * 10}–${(i + 1) * 10}%`, items: [] }));
  for (const r of rows) bins[Math.min(9, Math.floor(r.probability * 10))].items.push(r);
  for (const b of bins) { b.n = b.items.length; b.meanP = b.n ? b.items.reduce((s, r) => s + r.probability, 0) / b.n : 0; b.freq = b.n ? b.items.filter((r) => r.outcome === 'yes').length / b.n : 0; }

  const bySection = new Map();
  for (const r of rows) { if (!bySection.has(r.section)) bySection.set(r.section, []); bySection.get(r.section).push(r); }
  const secRows = [...bySection].map(([name, list]) => { const s = summarise(list); return `<tr><td>${esc(name)}</td><td class="n">${s.n}</td><td class="n">${s.hits}</td><td class="n">${fmt3(s.brier)}</td></tr>`; }).join('');

  const worst = [...rows].sort((a, b) => brier(b.probability, b.outcome) - brier(a.probability, a.outcome)).slice(0, 5)
    .map((r) => `<tr><td><a href="/edition/${r.edition.id}/">${fmtDate(r.edition.edition_date, { day: 'numeric', month: 'short' })}</a></td><td>${esc(r.text)}</td><td class="n">${pct(r.probability)}</td><td>${r.outcome === 'yes' ? 'Came true' : 'Did not happen'}</td></tr>`).join('');

  return `${head}
<div class="figures">
  <div><b>${sum.n}</b><span>claims resolved</span></div>
  <div><b>${fmt3(sum.brier)}</b><span>Brier score (0.250 = coin toss)</span></div>
  <div><b>${pct(sum.hits / sum.n)}</b><span>calls that went our way</span></div>
  <div><b>${sum.log.toFixed(2)}</b><span>log score (0.69 = coin toss)</span></div>
</div>
<h2>Calibration</h2>
<p>Each dot is a group of claims with similar probabilities. On the dashed line, our 70% calls come true 70% of the time. Dots below the line mean we were overconfident; above it, too cautious.</p>
<div class="chart">${calibrationSvg(bins)}</div>
<div class="tbl"><table><thead><tr><th>Forecast band</th><th class="n">Claims</th><th class="n">Average forecast</th><th class="n">Came true</th></tr></thead><tbody>${bins.filter((b) => b.n).map((b) => `<tr><td>${b.label}</td><td class="n">${b.n}</td><td class="n">${pct(b.meanP)}</td><td class="n">${pct(b.freq)}</td></tr>`).join('')}</tbody></table></div>
<h2>By section</h2>
<div class="tbl"><table><thead><tr><th>Section</th><th class="n">Claims</th><th class="n">Went our way</th><th class="n">Brier</th></tr></thead><tbody>${secRows}</tbody></table></div>
<h2>Largest misses</h2>
<div class="tbl"><table><thead><tr><th>Edition</th><th>Claim</th><th class="n">Forecast</th><th>Outcome</th></tr></thead><tbody>${worst}</tbody></table></div>
</div>`;
}

// Minimal Markdown for METHODOLOGY.md: headings, paragraphs, lists, tables, code, bold, inline code, links.
function md(src) {
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${/^https?:/.test(u) ? u : `${REPO}/blob/main/${u.replace(/^(\.\.\/)+/, '')}`}">${t}</a>`);
  const lines = src.split('\n');
  let out = '', i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(esc(lines[i++])); i++; out += `<pre><code>${buf.join('\n')}</code></pre>`; continue; }
    const h = l.match(/^(#{1,3})\s+(.*)/);
    if (h) { out += `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`; i++; continue; }
    if (/^\|/.test(l)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      out += `<div class="tbl"><table><thead><tr>${cells(rows[0]).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(2).map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      continue;
    }
    if (/^\s*(- |\d+\. )/.test(l)) {
      const ordered = /^\s*\d+\. /.test(l); const items = [];
      while (i < lines.length && /^\s*(- |\d+\. )/.test(lines[i])) { let t = lines[i++].replace(/^\s*(- |\d+\. )/, ''); while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*(- |\d+\. )/.test(lines[i])) t += ' ' + lines[i++].trim(); items.push(t); }
      out += `<${ordered ? 'ol' : 'ul'}>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
      continue;
    }
    if (!l.trim()) { i++; continue; }
    const buf = []; while (i < lines.length && lines[i].trim() && !/^(#|\||```|\s*(- |\d+\. ))/.test(lines[i])) buf.push(lines[i++]);
    out += `<p>${inline(buf.join(' '))}</p>`;
  }
  return out;
}

// ---------- build ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.copyFileSync(path.join(ROOT, 'site', 'style.css'), path.join(DIST, 'style.css'));

const editions = loadEditions();
const latest = editions[editions.length - 1];
latestDate = latest.edition_date;

for (const ed of editions) {
  const page = layout({
    title: `The Overmorrow — ${fmtDate(ed.edition_date, { day: 'numeric', month: 'long', year: 'numeric' })}`,
    nav: ed === latest ? 'today' : 'archive',
    description: `Forecast edition No. ${ed.number}, reporting the expected events of ${fmtDate(ed.events_date)}.`,
    body: { header: masthead(ed), main: editionMain(ed) },
  });
  write(`edition/${ed.id}/index.html`, page);
  if (ed === latest) write('index.html', layout({ title: 'The Overmorrow', nav: 'today', body: { header: masthead(ed), main: editionMain(ed) } }));
}

const plainHeader = masthead(null, { topline: 'Forecast newspaper' });
write('archive/index.html', layout({ title: 'Archive — The Overmorrow', nav: 'archive', body: { header: plainHeader, main: archivePage(editions) } }));
write('accuracy/index.html', layout({ title: 'Accuracy — The Overmorrow', nav: 'accuracy', body: { header: plainHeader, main: accuracyPage(editions) } }));
const method = fs.readFileSync(path.join(ROOT, 'METHODOLOGY.md'), 'utf8');
write('method/index.html', layout({ title: 'Method — The Overmorrow', nav: 'method', body: { header: plainHeader, main: `<div class="prose">${md(method)}</div>` } }));
write('404.html', layout({ title: 'Not found — The Overmorrow', nav: '', body: { header: plainHeader, main: '<div class="prose"><h1>Page not found</h1><p>Try <a href="/">today’s edition</a> or the <a href="/archive/">archive</a>.</p></div>' } }));

console.log(`Built ${editions.length} edition(s) into dist/. Latest: ${latest.id}.`);
