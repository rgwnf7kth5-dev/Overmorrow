// Builds the static site into dist/: English at /, Czech at /cs/. Run: node scripts/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEditions, resultsFor, claimsOf, scoredClaims, summarise, brier } from './lib.mjs';

const DIST = path.join(ROOT, 'dist');
const REPO = 'https://github.com/rgwnf7kth5-dev/Overmorrow';
const LANGS = ['en', 'cs'];

// ---------- interface text ----------
const T = {
  en: {
    locale: 'en-GB', prefix: '',
    motto: 'Tomorrow happens. Overmorrow reports it. You read it today.',
    places: 'Prague · Brussels · World',
    nav: ['Today', 'Archive', 'Accuracy', 'Method'],
    other: 'Čeština', otherLang: 'cs',
    forecastEdition: (t) => `Forecast edition · written ${t}`,
    forecastPaper: 'Forecast newspaper',
    pilot: 'Pilot',
    reporting: (d) => `Reporting the events of ${d}`,
    writtenAhead: 'Forecasts written two days ahead',
    latest: 'Latest',
    notice: (d, resolved) => `<b>Every report in this edition is a forecast.</b> Each describes an event scheduled or expected for ${d} and states the outcome we consider most likely, with its probability. The basis line under each report names what it rests on${resolved ? '. Stamps show how each forecast turned out' : ''}.`,
    results: 'Results',
    wentOurWay: (h, n) => `${h} of ${n} scored calls went our way`,
    noScored: 'No scored claims yet',
    brierNote: (b) => `Brier score ${b} (lower is better; 0.250 = always guessing 50%)`,
    awaiting: (n, v) => `${n} awaiting result${v ? `, ${v} void` : ''}`,
    stamp: { yes: 'Came true', no: 'Did not happen', void: 'Void', pending: 'Awaiting result', corrected: 'corrected' },
    evidence: 'Evidence',
    howChecked: (many) => `How ${many ? 'these claims are' : 'this claim is'} checked`,
    deadline: 'Deadline',
    basis: 'Basis', sources: 'Sources',
    comingUp: 'Coming Up', comingDek: 'Fixed dates for the next fortnight',
    footer: [
      ['About The Overmorrow', 'A newspaper written two days ahead. Every report describes a scheduled or expected event and states the outcome we consider most likely, with a probability. Nothing is edited after publication.'],
      ['Reading the likelihood bars', 'The figure is our estimated probability that the claim in that line comes true. Over many reports, a 70% call should prove right about seven times in ten. The <a href="{p}/accuracy/">accuracy page</a> shows whether it does.'],
      ['Record', `Every edition, forecast and result is kept in a public repository, with the time each was written. <a href="${REPO}">View the source and history</a>.`],
    ],
    archive: { h: 'Archive', lede: 'Every edition as published, with the result of each forecast once it is known.', cols: ['Edition', 'No.', 'Lead story', 'Claims', 'Result'], awaiting: 'Awaiting results', partly: 'Partly resolved', pending: 'pending', pilot: 'pilot' },
    acc: {
      h: 'Accuracy', lede: 'How well our probabilities match what actually happened. Each claim is checked against the primary source named in advance, in the 06:00 run on the date the edition bears.',
      empty: (d) => `No forecasts have been resolved yet. The first results appear on the morning of ${d}, when the claims of edition No. 1 fall due.`,
      howH: 'How we score',
      how: 'Each claim gets a Brier score: the squared difference between our probability and the outcome (1 if it came true, 0 if not). Lower is better. A forecaster who always says 50% scores 0.250. We also keep a log score, which punishes confident misses more heavily, and a calibration chart, which compares our stated probabilities with how often those claims came true.',
      figs: ['claims resolved', 'Brier score (0.250 = coin toss)', 'calls that went our way', 'log score (0.69 = coin toss)'],
      calH: 'Calibration', cal: 'Each dot is a group of claims with similar probabilities. On the dashed line, our 70% calls come true 70% of the time. Dots below the line mean we were overconfident; above it, too cautious.',
      calCols: ['Forecast band', 'Claims', 'Average forecast', 'Came true'], axisX: 'Forecast probability', axisY: 'How often it came true',
      secH: 'By section', secCols: ['Section', 'Claims', 'Went our way', 'Brier'],
      missH: 'Largest misses', missCols: ['Edition', 'Claim', 'Forecast', 'Outcome'], front: 'Front page',
    },
    notFound: ['Page not found', 'Try <a href="{p}/">today’s edition</a> or the <a href="{p}/archive/">archive</a>.'],
  },
  cs: {
    locale: 'cs-CZ', prefix: '/cs',
    motto: 'Zítra se to stane. Pozítří se o tom píše. Vy to čtete dnes.',
    places: 'Praha · Brusel · Svět',
    nav: ['Dnes', 'Archiv', 'Přesnost', 'Metoda'],
    other: 'English', otherLang: 'en',
    forecastEdition: (t) => `Vydání predikcí · napsáno ${t}`,
    forecastPaper: 'Noviny z pozítří',
    pilot: 'Pilotní',
    reporting: (d) => `Zprávy o událostech: ${d}`,
    writtenAhead: 'Predikce psané dva dny dopředu',
    latest: 'Nejnovější',
    notice: (d, resolved) => `<b>Všechny zprávy v tomto vydání jsou predikce.</b> Každá popisuje událost naplánovanou nebo očekávanou na ${d} a uvádí výsledek, který považujeme za nejpravděpodobnější, s jeho pravděpodobností. Řádek „Podklad“ pod zprávou říká, z čeho vychází${resolved ? '. Razítka ukazují, jak predikce dopadly' : ''}.`,
    results: 'Výsledky',
    wentOurWay: (h, n) => `${h} z ${n} hodnocených tipů vyšlo`,
    noScored: 'Zatím žádné hodnocené predikce',
    brierNote: (b) => `Brierovo skóre ${b} (nižší je lepší; 0,250 = tip vždy 50 %)`,
    awaiting: (n, v) => `${n} čeká na výsledek${v ? `, ${v} neplatné` : ''}`,
    stamp: { yes: 'Vyšlo', no: 'Nevyšlo', void: 'Neplatné', pending: 'Čeká na výsledek', corrected: 'opraveno' },
    evidence: 'Doklad',
    howChecked: () => 'Jak se to ověří',
    deadline: 'Termín',
    basis: 'Podklad', sources: 'Zdroje',
    comingUp: 'Co nás čeká', comingDek: 'Pevné termíny na příští dva týdny',
    footer: [
      ['O novinách The Overmorrow', 'Noviny psané dva dny dopředu. Každá zpráva popisuje naplánovanou nebo očekávanou událost a uvádí výsledek, který považujeme za nejpravděpodobnější, s pravděpodobností. Po vydání se nic neupravuje.'],
      ['Jak číst proužky', 'Číslo je náš odhad pravděpodobnosti, že se tvrzení na daném řádku splní. Z mnoha tipů na 70 % by mělo vyjít zhruba sedm z deseti. Jestli to platí, ukazuje <a href="{p}/accuracy/">stránka přesnosti</a>.'],
      ['Záznam', `Každé vydání, predikce i výsledek jsou ve veřejném repozitáři i s časem, kdy vznikly. <a href="${REPO}">Zdroj a historie</a>.`],
    ],
    archive: { h: 'Archiv', lede: 'Všechna vydání tak, jak vyšla, a u každé predikce výsledek, jakmile je znám.', cols: ['Vydání', 'Č.', 'Hlavní zpráva', 'Tvrzení', 'Výsledek'], awaiting: 'Čeká na výsledky', partly: 'Částečně vyhodnoceno', pending: 'čeká', pilot: 'pilotní' },
    acc: {
      h: 'Přesnost', lede: 'Jak dobře naše pravděpodobnosti odpovídají tomu, co se skutečně stalo. Každé tvrzení se ověřuje podle předem určeného primárního zdroje, a to v šest ráno v den, kterým je vydání datováno.',
      empty: (d) => `Zatím nebyla vyhodnocena žádná predikce. První výsledky přibudou ráno ${d}, kdy vyprší termín tvrzení z vydání č. 1.`,
      howH: 'Jak hodnotíme',
      how: 'Každé tvrzení dostane Brierovo skóre: druhou mocninu rozdílu mezi naší pravděpodobností a výsledkem (1, když se splnilo, 0, když ne). Nižší je lepší. Kdo vždy tipuje 50 %, má 0,250. Sledujeme i logaritmické skóre, které víc trestá sebejisté omyly, a kalibrační graf, který porovnává uvedené pravděpodobnosti s tím, jak často se tvrzení splnila.',
      figs: ['vyhodnocených tvrzení', 'Brierovo skóre (0,250 = hod mincí)', 'tipů, které vyšly', 'log. skóre (0,69 = hod mincí)'],
      calH: 'Kalibrace', cal: 'Každý bod je skupina tvrzení s podobnou pravděpodobností. Na přerušované čáře se naše tipy na 70 % splní v 70 % případů. Body pod čarou znamenají přílišnou sebejistotu, nad ní přílišnou opatrnost.',
      calCols: ['Pásmo predikce', 'Tvrzení', 'Průměrná predikce', 'Splnilo se'], axisX: 'Predikovaná pravděpodobnost', axisY: 'Jak často se splnilo',
      secH: 'Podle rubrik', secCols: ['Rubrika', 'Tvrzení', 'Vyšlo', 'Brier'],
      missH: 'Největší omyly', missCols: ['Vydání', 'Tvrzení', 'Predikce', 'Výsledek'], front: 'Titulní strana',
    },
    notFound: ['Stránka nenalezena', 'Zkuste <a href="{p}/">dnešní vydání</a> nebo <a href="{p}/archive/">archiv</a>.'],
  },
};

// ---------- helpers ----------
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pctNum = (p, L) => (L.locale === 'cs-CZ' ? `${Math.round(p * 100)} %` : `${Math.round(p * 100)}%`);
const num3 = (x, L) => (L.locale === 'cs-CZ' ? x.toFixed(3).replace('.', ',') : x.toFixed(3));
const LONG = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const DAY = { weekday: 'long', day: 'numeric', month: 'long' };
const fmtDate = (d, L, opts = LONG) => new Intl.DateTimeFormat(L.locale, { ...opts, timeZone: 'UTC' }).format(new Date(`${d}T12:00:00Z`));
const fmtStamp = (s, L) => {
  const m = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}).*([+-]\d{2}:\d{2}|Z)$/);
  if (!m) return s;
  const zone = { '+01:00': 'CET', '+02:00': 'CEST', Z: 'UTC' }[m[3]] || m[3];
  return `${fmtDate(m[1], L, DAY)}, ${m[2]} ${zone}`;
};
const write = (rel, html) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const link = (L, p) => `${L.prefix}${p}`;
const fill = (s, L) => s.replaceAll('{p}', L.prefix);

/** Overlay an edition's Czech text (fields under "cs") onto a copy of it. Falls back to English. */
function localise(ed, lang) {
  if (lang === 'en') return ed;
  const c = structuredClone(ed);
  const top = ed.cs || {};
  if (top.weather && c.weather) Object.assign(c.weather, top.weather);
  if (top.sections) c.sections = c.sections.map((s, i) => ({ ...s, ...(top.sections[i] || {}) }));
  if (top.diary) c.diary = top.diary;
  c.stories = c.stories.map((s) => {
    const x = s.cs || {};
    const out = { ...s };
    for (const k of ['kicker', 'headline', 'standfirst', 'body', 'basis']) if (x[k]) out[k] = x[k];
    if (x.table && s.table) out.table = { caption: x.table.caption || s.table.caption, rows: s.table.rows.map((r, i) => ({ ...r, ...(x.table.rows?.[i] || {}) })) };
    out.claims = s.claims.map((cl) => ({ ...cl, ...(x.claims?.[cl.id] || {}) }));
    return out;
  });
  return c;
}

// ---------- page frame ----------
function layout(L, { title, nav, header, main, description, path: pagePath }) {
  const keys = ['today', 'archive', 'accuracy', 'method'];
  const hrefs = ['/', '/archive/', '/accuracy/', '/method/'];
  const other = T[L.otherLang];
  return `<!doctype html>
<html lang="${L === T.cs ? 'cs' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || L.motto)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate" hreflang="en" href="${pagePath}">
<link rel="alternate" hreflang="cs" href="/cs${pagePath}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<div class="page">
${header}
<nav class="nav" aria-label="Sections">${keys.map((k, i) => `<a href="${link(L, hrefs[i])}"${k === nav ? ' aria-current="page"' : ''}>${L.nav[i]}</a>`).join('')}<a class="lang" href="${link(other, pagePath)}" hreflang="${L.otherLang}">${L.other}</a></nav>
${main}
<footer>${L.footer.map(([h, p]) => `<div><h4>${h}</h4><p>${fill(p, L)}</p></div>`).join('')}</footer>
</div>
</body>
</html>
`;
}

function masthead(L, ed, latestDate) {
  const top = ed ? L.forecastEdition(fmtStamp(ed.frozen_at, L)) : L.forecastPaper;
  const line = ed
    ? `<span>${fmtDate(ed.edition_date, L)}</span><span>No. ${ed.number}${ed.pilot ? ` · ${L.pilot}` : ''}</span><span>${L.reporting(fmtDate(ed.events_date, L, DAY))}</span>`
    : `<span>${L.writtenAhead}</span><span>${L.latest}: <a href="${link(L, '/')}">${fmtDate(latestDate, L, DAY)}</a></span>`;
  return `<header>
  <div class="topline"><span>${esc(top)}</span><span>${L.places}</span></div>
  <div class="mast"><a href="${link(L, '/')}"><img class="logo" src="/logo.svg" width="400" height="400" alt=""><span>The Overmorrow</span></a></div>
  <p class="motto">${esc(L.motto)}</p>
  <div class="dateline">${line}</div>
</header>`;
}

// ---------- edition ----------
function stampFor(result, L) {
  if (!result) return `<span class="stamp pending">${L.stamp.pending}</span>`;
  return `<span class="stamp ${result.outcome}">${L.stamp[result.outcome]}${result.corrected ? ` (${L.stamp.corrected})` : ''}</span>`;
}

function likelihood(claim, results, show, L) {
  const r = results.get(claim.id);
  return `<div class="lk"><span class="bar" aria-hidden="true"><i style="width:${Math.round(claim.probability * 100)}%"></i></span><span>${esc(claim.label)}: <b>${pctNum(claim.probability, L)}</b></span>${show ? stampFor(r, L) : ''}</div>${
    r && r.note ? `<p class="resnote">${esc(r.note)}${r.evidence ? ` <a href="${esc(r.evidence)}">${L.evidence}</a>` : ''}</p>` : ''}`;
}

function storyHtml(story, results, show, L) {
  const isLead = story.size === 'lead';
  const H = isLead || story.size === 'half' ? 'h3' : 'h4';
  const tableClaims = new Set((story.table?.rows || []).map((r) => r.claim));
  const lines = story.claims.filter((c, i) => i === 0 || !tableClaims.has(c.id)).map((c) => likelihood(c, results, show, L)).join('');
  const table = story.table ? `<figure class="alt"><table><caption>${esc(story.table.caption)}</caption>${story.table.rows.map((row) => {
    const c = story.claims.find((x) => x.id === row.claim);
    const r = results.get(row.claim);
    return `<tr><td>${esc(row.label)}${row.note ? ` <small>· ${esc(row.note)}</small>` : ''}</td><td class="n">${c ? pctNum(c.probability, L) : ''}${show && r ? ` ${stampFor(r, L)}` : ''}</td></tr>`;
  }).join('')}</table></figure>` : '';
  const paras = story.body.map((p) => `<p>${esc(p)}</p>`);
  if (table) paras.splice(Math.min(2, paras.length), 0, table);
  const sources = (story.sources || []).filter((s) => s.url).map((s) => `<a href="${esc(s.url)}">${esc(s.title)}</a>`).join('; ');
  const checks = `<details class="check"><summary>${L.howChecked(story.claims.length > 1)}</summary>${story.claims
    .map((c) => `<p><b>${esc(c.text)}</b> ${esc(c.criterion)} ${L.deadline}: ${esc(fmtStamp(c.resolves_by, L))}.</p>`).join('')}</details>`;
  const basis = `<p class="basis">${L.basis}: ${esc(story.basis.replace(/^(Basis|Podklad):\s*/i, ''))}${sources ? ` ${L.sources}: ${sources}.` : ''}</p>${checks}`;
  const content = isLead ? `<div class="cols">${paras.join('')}${basis}</div>` : `${paras.join('')}${basis}`;
  return `<div class="kicker">${esc(story.kicker)}</div><${H}>${esc(story.headline)}</${H}>${story.standfirst ? `<p class="standfirst">${esc(story.standfirst)}</p>` : ''}${lines}${content}`;
}

const spanClass = { half: 's6', third: 's4', quarter: 's3' };

function editionMain(original, L) {
  const ed = localise(original, L === T.cs ? 'cs' : 'en');
  const results = resultsFor(ed.id);
  const byId = new Map(ed.stories.map((s) => [s.id, s]));
  const show = results.size > 0;
  const sum = summarise(scoredClaims([original]));
  const total = claimsOf(original).length;
  const voids = [...results.values()].filter((r) => r.outcome === 'void').length;

  const scorebar = show ? `<div class="scorebar"><b>${L.results}</b><span>${sum ? L.wentOurWay(sum.hits, sum.n) : L.noScored}</span>${sum ? `<span>${L.brierNote(num3(sum.brier, L))}</span>` : ''}<span>${L.awaiting(total - results.size, voids)}</span></div>` : '';
  const rail = ed.front.rail.map((id) => `<article class="story">${storyHtml(byId.get(id), results, show, L)}</article>`).join('');
  const w = ed.weather;
  const weather = w ? `<div class="box"><h4>${esc(w.title)}</h4><div class="wx">${w.rows.map(([a, b]) => `<span>${esc(a)}</span><span>${esc(b)}</span>`).join('')}</div>${w.note ? `<p class="note">${esc(w.note)}</p>` : ''}</div>` : '';

  let sections = '';
  for (const sec of ed.sections || []) {
    sections += `<div class="section"><h2>${esc(sec.name)}</h2>${sec.dek ? `<span>${esc(sec.dek)}</span>` : ''}</div>`;
    let used = 0;
    for (const id of sec.stories) {
      const s = byId.get(id);
      const cls = spanClass[s.size] || 's6';
      sections += `<article class="story ${cls}${used % 12 ? ' vr' : ''}">${storyHtml(s, results, show, L)}</article>`;
      used += { s6: 6, s4: 4, s3: 3 }[cls];
    }
  }
  const diary = ed.diary?.length ? `<div class="section"><h2>${L.comingUp}</h2><span>${L.comingDek}</span></div><div class="s12"><ul class="diary">${ed.diary.map((d) => `<li><time>${esc(d.date)}</time>${esc(d.text)}</li>`).join('')}</ul></div>` : '';

  return `<p class="method">${L.notice(fmtDate(ed.events_date, L, DAY), show)}</p>
${scorebar}
<main class="grid">
  <article class="story lead s8">${storyHtml(byId.get(ed.front.lead), results, show, L)}</article>
  <aside class="rail s4 vr">${rail}${weather}</aside>
  ${sections}
  ${diary}
</main>`;
}

// ---------- archive ----------
function archivePage(editions, L) {
  const A = L.archive;
  const rows = [...editions].reverse().map((orig) => {
    const ed = localise(orig, L === T.cs ? 'cs' : 'en');
    const sum = summarise(scoredClaims([orig]));
    const total = claimsOf(orig).length;
    const res = resultsFor(orig.id);
    const status = !res.size ? A.awaiting : sum ? `${L.wentOurWay(sum.hits, sum.n)} · Brier ${num3(sum.brier, L)}${res.size < total ? ` · ${total - res.size} ${A.pending}` : ''}` : A.partly;
    return `<tr><td><a href="${link(L, `/edition/${ed.id}/`)}">${fmtDate(ed.edition_date, L, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</a></td><td class="n">${ed.number}${ed.pilot ? ` (${A.pilot})` : ''}</td><td>${esc(ed.stories.find((s) => s.id === ed.front.lead).headline)}</td><td class="n">${total}</td><td>${status}</td></tr>`;
  }).join('');
  return `<div class="prose" style="max-width:1000px"><h1>${A.h}</h1><p class="lede">${A.lede}</p>
<div class="tbl"><table><thead><tr><th>${A.cols[0]}</th><th class="n">${A.cols[1]}</th><th>${A.cols[2]}</th><th class="n">${A.cols[3]}</th><th>${A.cols[4]}</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

// ---------- accuracy ----------
function calibrationSvg(bins, L) {
  const W = 360, H = 300, Lm = 44, B = 36, Tm = 12, R = 12;
  const x = (p) => Lm + p * (W - Lm - R), y = (p) => H - B - p * (H - B - Tm);
  let g = [0, 0.25, 0.5, 0.75, 1].map((t) => `<line x1="${x(0)}" y1="${y(t)}" x2="${x(1)}" y2="${y(t)}" stroke="#d6d3cd"/><text x="${Lm - 6}" y="${y(t) + 4}" text-anchor="end" font-size="11" fill="#4b4b4b">${pctNum(t, L)}</text><text x="${x(t)}" y="${H - B + 16}" text-anchor="middle" font-size="11" fill="#4b4b4b">${pctNum(t, L)}</text>`).join('');
  g += `<line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(1)}" stroke="#6f6f6f" stroke-dasharray="4 3"/>`;
  g += bins.filter((b) => b.n).map((b) => `<circle cx="${x(b.meanP)}" cy="${y(b.freq)}" r="${Math.min(4 + Math.sqrt(b.n) * 2, 12)}" fill="#1f3a5f" fill-opacity="0.85"><title>${b.label}: ${pctNum(b.meanP, L)} → ${pctNum(b.freq, L)} (${b.n})</title></circle>`).join('');
  g += `<text x="${(x(0) + x(1)) / 2}" y="${H - 4}" text-anchor="middle" font-size="11.5" fill="#161616">${L.acc.axisX}</text>`;
  g += `<text transform="translate(12 ${(y(0) + y(1)) / 2}) rotate(-90)" text-anchor="middle" font-size="11.5" fill="#161616">${L.acc.axisY}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${L.acc.calH}" font-family="IBM Plex Sans Condensed, Arial, sans-serif">${g}</svg>`;
}

function accuracyPage(editions, L) {
  const A = L.acc;
  const rows = scoredClaims(editions);
  const sum = summarise(rows);
  const head = `<div class="prose"><h1>${A.h}</h1><p class="lede">${A.lede}</p>`;
  if (!sum) return `${head}<div class="empty">${A.empty(fmtDate(editions[0].edition_date, L, DAY))}</div><h2>${A.howH}</h2><p>${A.how}</p></div>`;

  const bins = Array.from({ length: 10 }, (_, i) => ({ label: `${i * 10}–${(i + 1) * 10} %`, items: [] }));
  for (const r of rows) bins[Math.min(9, Math.floor(r.probability * 10))].items.push(r);
  for (const b of bins) { b.n = b.items.length; b.meanP = b.n ? b.items.reduce((s, r) => s + r.probability, 0) / b.n : 0; b.freq = b.n ? b.items.filter((r) => r.outcome === 'yes').length / b.n : 0; }

  const lang = L === T.cs ? 'cs' : 'en';
  const bySection = new Map();
  for (const r of rows) {
    const secIdx = (r.edition.sections || []).findIndex((s) => s.name === r.section);
    const name = secIdx < 0 ? A.front : (lang === 'cs' && r.edition.cs?.sections?.[secIdx]?.name) || r.section;
    if (!bySection.has(name)) bySection.set(name, []);
    bySection.get(name).push(r);
  }
  const secRows = [...bySection].map(([name, list]) => { const s = summarise(list); return `<tr><td>${esc(name)}</td><td class="n">${s.n}</td><td class="n">${s.hits}</td><td class="n">${num3(s.brier, L)}</td></tr>`; }).join('');
  const claimText = (r) => (lang === 'cs' && r.story.cs?.claims?.[r.id]?.text) || r.text;
  const worst = [...rows].sort((a, b) => brier(b.probability, b.outcome) - brier(a.probability, a.outcome)).slice(0, 5)
    .map((r) => `<tr><td><a href="${link(L, `/edition/${r.edition.id}/`)}">${fmtDate(r.edition.edition_date, L, { day: 'numeric', month: 'short' })}</a></td><td>${esc(claimText(r))}</td><td class="n">${pctNum(r.probability, L)}</td><td>${L.stamp[r.outcome]}</td></tr>`).join('');

  return `${head}
<div class="figures">
  <div><b>${sum.n}</b><span>${A.figs[0]}</span></div>
  <div><b>${num3(sum.brier, L)}</b><span>${A.figs[1]}</span></div>
  <div><b>${pctNum(sum.hits / sum.n, L)}</b><span>${A.figs[2]}</span></div>
  <div><b>${num3(sum.log, L).slice(0, -1)}</b><span>${A.figs[3]}</span></div>
</div>
<h2>${A.calH}</h2><p>${A.cal}</p>
<div class="chart">${calibrationSvg(bins, L)}</div>
<div class="tbl"><table><thead><tr><th>${A.calCols[0]}</th><th class="n">${A.calCols[1]}</th><th class="n">${A.calCols[2]}</th><th class="n">${A.calCols[3]}</th></tr></thead><tbody>${bins.filter((b) => b.n).map((b) => `<tr><td>${b.label}</td><td class="n">${b.n}</td><td class="n">${pctNum(b.meanP, L)}</td><td class="n">${pctNum(b.freq, L)}</td></tr>`).join('')}</tbody></table></div>
<h2>${A.secH}</h2>
<div class="tbl"><table><thead><tr><th>${A.secCols[0]}</th><th class="n">${A.secCols[1]}</th><th class="n">${A.secCols[2]}</th><th class="n">${A.secCols[3]}</th></tr></thead><tbody>${secRows}</tbody></table></div>
<h2>${A.missH}</h2>
<div class="tbl"><table><thead><tr><th>${A.missCols[0]}</th><th>${A.missCols[1]}</th><th class="n">${A.missCols[2]}</th><th>${A.missCols[3]}</th></tr></thead><tbody>${worst}</tbody></table></div>
</div>`;
}

// ---------- minimal Markdown (headings, paragraphs, lists, tables, code, bold, inline code, links) ----------
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
for (const f of ['logo.svg', 'favicon.svg']) fs.copyFileSync(path.join(ROOT, 'site', f), path.join(DIST, f));

const editions = loadEditions();
const latest = editions[editions.length - 1];

for (const lang of LANGS) {
  const L = T[lang];
  const pre = lang === 'en' ? '' : 'cs/';
  for (const ed of editions) {
    const header = masthead(L, ed);
    const main = editionMain(ed, L);
    const p = `/edition/${ed.id}/`;
    write(`${pre}edition/${ed.id}/index.html`, layout(L, { title: `The Overmorrow — ${fmtDate(ed.edition_date, L, { day: 'numeric', month: 'long', year: 'numeric' })}`, nav: ed === latest ? 'today' : 'archive', header, main, path: p }));
    if (ed === latest) write(`${pre}index.html`, layout(L, { title: 'The Overmorrow', nav: 'today', header, main, path: '/' }));
  }
  const plain = masthead(L, null, latest.edition_date);
  write(`${pre}archive/index.html`, layout(L, { title: `${L.archive.h} — The Overmorrow`, nav: 'archive', header: plain, main: archivePage(editions, L), path: '/archive/' }));
  write(`${pre}accuracy/index.html`, layout(L, { title: `${L.acc.h} — The Overmorrow`, nav: 'accuracy', header: plain, main: accuracyPage(editions, L), path: '/accuracy/' }));
  const mdFile = path.join(ROOT, lang === 'en' ? 'METHODOLOGY.md' : 'METHODOLOGY.cs.md');
  const method = fs.readFileSync(fs.existsSync(mdFile) ? mdFile : path.join(ROOT, 'METHODOLOGY.md'), 'utf8');
  write(`${pre}method/index.html`, layout(L, { title: `${L.nav[3]} — The Overmorrow`, nav: 'method', header: plain, main: `<div class="prose">${md(method)}</div>`, path: '/method/' }));
  write(`${pre}404.html`, layout(L, { title: `${L.notFound[0]} — The Overmorrow`, nav: '', header: plain, main: `<div class="prose"><h1>${L.notFound[0]}</h1><p>${fill(L.notFound[1], L)}</p></div>`, path: '/' }));
}

console.log(`Built ${editions.length} edition(s) in ${LANGS.join(' and ')} into dist/. Latest: ${latest.id}.`);
