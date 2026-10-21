// Generates the engraved-style logo of The Overmorrow.
// Output is committed as site/logo.svg and site/favicon.svg; rerun only to change the design.
// Needs: npm i world-atlas@2.0.2 topojson-client@3.1.0 d3-geo@3.1.1   (run from a folder that has them)
// Usage: node make-logo.mjs <output-dir>
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';
import { geoOrthographic, geoPath, geoGraticule } from 'd3-geo';
import opentype from 'opentype.js';
const require = createRequire(import.meta.url);
const fontFile = require.resolve('@fontsource/newsreader/files/newsreader-latin-600-normal.woff');
const FONT = opentype.parse(fs.readFileSync(fontFile).buffer.slice(0));

const land110 = require('world-atlas/land-110m.json');
const land50 = require('world-atlas/land-50m.json');
const out = process.argv[2] || '.';

const C = 200, R = 112;          // globe centre and radius in a 400×400 box
const f = (n) => Math.round(n * 100) / 100;
const pt = (r, deg) => { const a = (deg * Math.PI) / 180; return [f(C + r * Math.sin(a)), f(C - r * Math.cos(a))]; };

function globe({ land, detail }) {
  const proj = geoOrthographic().rotate([-16, -40, 0]).translate([C, C]).scale(R).precision(0.2);
  const p = geoPath(proj);
  const landD = p(feature(land, land.objects.land));
  const grat = p(geoGraticule().step([15, 15])());
  const s = [];
  s.push(`<clipPath id="om-globe"><circle cx="${C}" cy="${C}" r="${R}"/></clipPath>`);
  s.push(`<clipPath id="om-shade1"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H400V400H0Z M${C - 26 - (R + 8)} ${C - 30}a${R + 8} ${R + 8} 0 1 0 ${2 * (R + 8)} 0a${R + 8} ${R + 8} 0 1 0 ${-2 * (R + 8)} 0Z"/></clipPath>`);
  s.push(`<clipPath id="om-shade2"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H400V400H0Z M${C - 40 - (R + 16)} ${C - 46}a${R + 16} ${R + 16} 0 1 0 ${2 * (R + 16)} 0a${R + 16} ${R + 16} 0 1 0 ${-2 * (R + 16)} 0Z"/></clipPath>`);
  s.push(`<clipPath id="om-land">${`<path d="${landD}"/>`}</clipPath>`);

  // Ocean: horizontal engraving lines, thicker toward the shadowed lower edge.
  const ocean = [];
  for (let y = C - R; y <= C + R; y += detail ? 2.6 : 4) {
    const w = 0.55 + 0.75 * Math.max(0, (y - (C - R)) / (2 * R)) ** 1.6;
    ocean.push(`<line x1="${C - R}" y1="${f(y)}" x2="${C + R}" y2="${f(y)}" stroke-width="${f(w)}"/>`);
  }
  s.push(`<g clip-path="url(#om-globe)"><g stroke="currentColor">${ocean.join('')}</g>`);
  // Land: paper white with a fine stipple of short contour strokes, then a firm coastline.
  s.push(`<path d="${landD}" fill="var(--om-paper,#fbfaf8)"/>`);
  if (detail) {
    const dots = [];
    for (let y = C - R; y <= C + R; y += 5.2) for (let x = C - R + ((y / 5.2) % 2) * 2.6; x <= C + R; x += 5.2) dots.push(`M${f(x)} ${f(y)}h1.3`);
    s.push(`<path clip-path="url(#om-land)" d="${dots.join('')}" stroke="currentColor" stroke-width="0.7" stroke-linecap="round" opacity="0.55"/>`);
  }
  s.push(`<path d="${landD}" fill="none" stroke="currentColor" stroke-width="${detail ? 1.05 : 2.2}" stroke-linejoin="round"/>`);
  // Graticule.
  s.push(`<path d="${grat}" fill="none" stroke="currentColor" stroke-width="${detail ? 0.45 : 0.9}" opacity="0.9"/>`);
  // Shadow: diagonal hatching on the lower right, cross-hatched at the rim.
  if (detail) {
    const d1 = [], d2 = [];
    for (let k = -400; k <= 400; k += 3) d1.push(`M${C - R + k} ${C + R}L${C + R + k} ${C - R}`);
    for (let k = -400; k <= 400; k += 2.6) d2.push(`M${C - R + k} ${C - R}L${C + R + k} ${C + R}`);
    s.push(`<path clip-path="url(#om-shade1)" d="${d1.join('')}" stroke="currentColor" stroke-width="0.6"/>`);
    s.push(`<path clip-path="url(#om-shade2)" d="${d2.join('')}" stroke="currentColor" stroke-width="0.6"/>`);
  }
  s.push('</g>');
  s.push(`<circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="currentColor" stroke-width="${detail ? 2.4 : 4}"/>`);
  return s.join('\n');
}

// Three chasing arrows on a ring around the globe.
function arrows({ detail }) {
  const r1 = 124, r2 = 135, rm = (r1 + r2) / 2, head = 9;
  const out = [];
  for (const c of [0, 120, 240]) {
    const a0 = c - 49, a1 = c + 49, ah = a1 - head;
    const [ox0, oy0] = pt(r2, a0), [oxh, oyh] = pt(r2, ah), [hx1, hy1] = pt(r2 + 6, ah), [tx, ty] = pt(rm, a1);
    const [hx2, hy2] = pt(r1 - 6, ah), [ixh, iyh] = pt(r1, ah), [ix0, iy0] = pt(r1, a0), [nx, ny] = pt(rm, a0 + 5);
    const d = `M${ox0} ${oy0}A${r2} ${r2} 0 0 1 ${oxh} ${oyh}L${hx1} ${hy1}L${tx} ${ty}L${hx2} ${hy2}L${ixh} ${iyh}A${r1} ${r1} 0 0 0 ${ix0} ${iy0}L${nx} ${ny}Z`;
    out.push(`<path d="${d}" fill="${detail ? "var(--om-paper,#fbfaf8)" : "currentColor"}" stroke="currentColor" stroke-width="${detail ? 1.5 : 3}" stroke-linejoin="round"/>`);
    if (detail) {
      // Engraved shading: radial strokes across the shaft, denser toward the head.
      const t = [];
      for (let a = a0 + 6; a < ah - 0.5; a += 1.7 - 0.9 * ((a - a0) / (ah - a0))) {
        const [x1, y1] = pt(r1 + 1.6, a), [x2, y2] = pt(r2 - 1.6, a);
        t.push(`M${x1} ${y1}L${x2} ${y2}`);
      }
      out.push(`<path d="${t.join('')}" stroke="currentColor" stroke-width="0.55"/>`);
      const [cx1, cy1] = pt(rm, a0 + 3);
      const [cx2, cy2] = pt(rm, ah + 3);
      out.push(`<path d="M${cx1} ${cy1}A${rm} ${rm} 0 0 1 ${cx2} ${cy2}" fill="none" stroke="currentColor" stroke-width="0.5"/>`);
    }
  }
  return out.join('\n');
}

// The seal band: double rules, a beaded inner rule, three phrases and three stars.
function band() {
  const s = [];
  const rIn = 146, rOut = 192;
  s.push(`<circle cx="${C}" cy="${C}" r="${rOut + 4}" fill="none" stroke="currentColor" stroke-width="0.9"/>`);
  s.push(`<circle cx="${C}" cy="${C}" r="${rOut}" fill="none" stroke="currentColor" stroke-width="2.6"/>`);
  s.push(`<circle cx="${C}" cy="${C}" r="${rIn}" fill="none" stroke="currentColor" stroke-width="1.4"/>`);
  const beads = [];
  for (let a = 0; a < 360; a += 3) { const [x, y] = pt(rIn + 4, a); beads.push(`<circle cx="${x}" cy="${y}" r="0.9"/>`); }
  s.push(`<g fill="currentColor">${beads.join('')}</g>`);
  // Lettering converted to outlines, set along the circle (top phrase clockwise, lower phrases upright).
  const size = 17, track = 2.4, scale = size / FONT.unitsPerEm;
  const ring = (text, centre, r, upright) => {
    const glyphs = FONT.stringToGlyphs(text);
    const widths = glyphs.map((g) => g.advanceWidth * scale + track);
    const total = widths.reduce((a, b) => a + b, 0) - track;
    const toDeg = (len) => (len / r) * (180 / Math.PI);
    let acc = 0; const parts = [];
    glyphs.forEach((g, i) => {
      const mid = acc + (widths[i] - track) / 2;
      const off = toDeg(mid - total / 2);
      const theta = upright ? centre - off : centre + off;
      const [x, y] = pt(r, theta);
      const d = g.getPath(-(g.advanceWidth * scale) / 2, 0, size).toPathData(2);
      if (d) parts.push(`<path transform="translate(${x} ${y}) rotate(${f(upright ? theta + 180 : theta)})" d="${d}"/>`);
      acc += widths[i];
    });
    return parts.join('');
  };
  s.push(`<g fill="currentColor">${ring('HAPPENS TOMORROW', 0, 163, false)}${ring('WRITTEN OVERMORROW', 120, 175, true)}${ring('READ TODAY', 240, 175, true)}</g>`);
  for (const a of [60, 180, 300]) {
    const [x, y] = pt(169, a);
    const star = [];
    for (let i = 0; i < 10; i++) { const r = i % 2 ? 2.4 : 6.2; const t = (i * 36 * Math.PI) / 180; star.push(`${f(x + r * Math.sin(t))},${f(y - r * Math.cos(t))}`); }
    s.push(`<polygon points="${star.join(' ')}" fill="currentColor"/>`);
  }
  return s.join('\n');
}

const full = `<svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 400 400" role="img" aria-label="The Overmorrow: happens tomorrow, written overmorrow, read today"><title>The Overmorrow</title>
<defs>${''}</defs>
${band()}
${arrows({ detail: true })}
${globe({ land: land110, detail: true })}
</svg>
`;

const small = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="52 52 296 296"><rect x="52" y="52" width="296" height="296" fill="#fbfaf8"/><g color="#161616" style="--om-paper:#fbfaf8">
${arrows({ detail: false })}
<circle cx="200" cy="200" r="112" fill="#fbfaf8" stroke="#161616" stroke-width="9"/><path d="${geoPath(geoOrthographic().rotate([-16,-40,0]).translate([C,C]).scale(R))(feature(land110, land110.objects.land))}" fill="#161616"/>
</g></svg>
`;

const r1 = (t) => t.replace(/(\d+\.\d)\d+/g, '$1');
fs.writeFileSync(path.join(out, 'logo.svg'), r1(full));
fs.writeFileSync(path.join(out, 'favicon.svg'), r1(small).replace(/(\d+)\.\d/g, '$1'));
console.log('logo', r1(full).length, 'favicon', r1(small).length);
