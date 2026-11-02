// The Spider: the paper's search, carried over from How ANO Vote and redrawn in ink for The Overmorrow.
// Type "spider" anywhere on the page, or use the small spider in the navigation. An engraved spider crawls over a page
// set from real headlines, picks out what matches, pins it down and hands it over as a clipping: stories, forecasts and
// their results, and the forecast board. Esc or a click skips the walk; with reduced motion the result comes at once.
// The search index (search.json, built by scripts/build.mjs) is fetched only when the spider is opened.
(function () {
  'use strict';
  var CS = document.documentElement.lang === 'cs';
  var PRE = CS ? '/cs' : '';
  var T = CS ? {
    name: 'Pavouk', q: function (s) { return '„' + s + '“'; }, aria: 'Pavouk: hledání v novinách', ask: 'Co má pavouk najít?', ph: 'např. Írán', go: 'Vypustit', close: 'Zavřít',
    skip: 'Esc nebo klik přeskočí', sound: ['Zvuk: zapnutý', 'Zvuk: vypnutý'], idle: 'čeká na zadání', flee: 'kurzor v dosahu, utíká',
    loading: 'načítá archiv', failed: 'Archiv se nepodařilo načíst. Zkuste to prosím znovu.',
    scope: function (e, s) { return e + ' vydání · ' + s + ' článků'; }, crawl: 'hledá', caught: 'chyceno',
    catchH: function (q) { return 'Úlovek: „' + q + '“'; }, none: 'Nic jsem nechytil.',
    noneSub: function (q) { return 'Na „' + q + '“ v novinách nic není. Hledá se od začátku slov, zkuste kratší tvar nebo jiné slovo.'; },
    stories: 'Články', inTitle: function (n) { return 'přímo v titulku ' + n + ', ostatní v textu'; }, more: function (n) { return 'a dalších ' + n + '.'; },
    forecasts: 'Tvrzení', board: 'Tabule předpovědí', noStories: 'Žádný článek.', again: 'Hledat znovu',
    went: function (h, n) { return h + ' z ' + n + ' hodnocených tipů vyšlo.'; }, note: 'Z vydání novin a tabule předpovědí. Hledá se od začátku slov.',
    num: function (n) { return String(n).replace('.', ','); }, pct: function (p) { return Math.round(p * 100) + ' %'; }, date: 'cs-CZ'
  } : {
    name: 'The Spider', q: function (s) { return '“' + s + '”'; }, aria: 'The Spider: search the paper', ask: 'What should the spider find?', ph: 'e.g. Iran', go: 'Release', close: 'Close',
    skip: 'Esc or click to skip', sound: ['Sound: on', 'Sound: off'], idle: 'awaiting instructions', flee: 'cursor in range, retreating',
    loading: 'loading the archive', failed: 'The archive could not be loaded. Please try again.',
    scope: function (e, s) { return e + ' editions · ' + s + ' stories'; }, crawl: 'searching', caught: 'caught',
    catchH: function (q) { return 'The catch: “' + q + '”'; }, none: 'Nothing caught.',
    noneSub: function (q) { return 'Nothing in the paper on “' + q + '”. The search reads from the start of each word; try a shorter form or another word.'; },
    stories: 'Stories', inTitle: function (n) { return n + ' in the headline, the rest in the text'; }, more: function (n) { return 'and ' + n + ' more.'; },
    forecasts: 'Claims', board: 'Forecast board', noStories: 'No story.', again: 'Search again',
    went: function (h, n) { return h + ' of ' + n + ' scored calls went our way.'; }, note: 'From the editions of the paper and the forecast board. The search reads from the start of each word.',
    num: function (n) { return String(n); }, pct: function (p) { return Math.round(p * 100) + '%'; }, date: 'en-GB'
  };

  var INK = '#161616', ACCENT = '#1f3a5f', NO = '#9b2b1f', YES = '#1e6b3a', PAPER = '#fbfaf8';
  var TONES = [ACCENT, NO, YES, INK];
  var SERIF = '"Newsreader",Georgia,"Times New Roman",serif';
  var HOLD = 0.55;
  var S = null, INDEX = null, AU = null;
  var rad = function (d) { return d * Math.PI / 180; };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  function stored(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }
  var soundOn = stored('om-spider-sound') !== 'off';
  var fmtDate = function (d) { return new Intl.DateTimeFormat(T.date, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z')); };

  // ---- search: no diacritics, from the start of a word, longer words by stem (Czech declines; English pluralises) ----
  function fold(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function stem(w) { return w.length >= 6 ? w.slice(0, -2) : w.length === 5 ? w.slice(0, -1) : w; }
  function words(q) { return fold(q).split(/[^a-z0-9]+/).filter(Boolean); }
  function atStart(hay, frag) {
    var i = hay.indexOf(frag);
    while (i >= 0) { if (i === 0 || !/[a-z0-9]/.test(hay[i - 1])) return true; i = hay.indexOf(frag, i + 1); }
    return false;
  }
  function hit(hay, w) { if (atStart(hay, w)) return true; var st = stem(w); return st !== w && atStart(hay, st); }
  var all = function (hay, ws) { return ws.every(function (w) { return hit(hay, w); }); };

  function search(term) {
    var ws = words(term), R = { term: term, stories: [], claims: [], watch: [], inTitle: 0, hits: 0, scored: 0 };
    if (!ws.length || !INDEX) return R;
    INDEX.stories.forEach(function (s) {
      var title = all(s.ft, ws), inClaim = s.c.filter(function (c) { return all(c.f, ws); });
      if (!title && !all(s.fx, ws) && !inClaim.length) return;
      R.stories.push({ s: s, title: title });
      (title ? s.c : inClaim).forEach(function (c) { R.claims.push({ c: c, s: s }); });
    });
    R.stories.sort(function (a, b) { return (b.title - a.title) || b.s.d.localeCompare(a.s.d); });
    R.inTitle = R.stories.filter(function (x) { return x.title; }).length;
    R.stories = R.stories.map(function (x) { return x.s; });
    R.claims.sort(function (a, b) { return b.s.d.localeCompare(a.s.d); });
    R.claims.forEach(function (x) { if (x.c.y !== undefined) { R.scored++; R.hits += x.c.y; } });
    R.watch = INDEX.watch.filter(function (q) { return all(q.f, ws); });
    return R;
  }
  function loadIndex() {
    if (INDEX) return Promise.resolve(INDEX);
    return fetch(PRE + '/search.json').then(function (r) { if (!r.ok) throw new Error('index'); return r.json(); }).then(function (j) {
      j.stories.forEach(function (s) {
        s.ft = fold([s.k, s.h].join(' ')); s.fx = fold([s.k, s.h, s.s, s.t].join(' '));
        s.c.forEach(function (c) { c.f = fold([c.l, c.x].join(' ')); });
      });
      j.watch.forEach(function (q) { q.f = fold([q.topic, q.q].join(' ')); });
      INDEX = j;
      return j;
    });
  }

  // ---- sound: a pen nib tapping on paper, synthesised, nothing to download ----
  function audio() {
    if (!soundOn) return null;
    try {
      if (!AU) {
        var AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
        var c = new AC(), buf = function (ms, ex) {
          var n = Math.round(c.sampleRate * ms / 1000), b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
          for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, ex);
          return b;
        };
        AU = { ctx: c, tap: buf(9, 4), scratch: buf(32, 2), last: 0 };
      }
      if (AU.ctx.state === 'suspended') AU.ctx.resume();
      return AU;
    } catch (e) { return null; }
  }
  function tap(x, power) {
    if (!AU || !soundOn || AU.ctx.state !== 'running') return;
    var c = AU.ctx, t = c.currentTime; if (t - AU.last < 0.016) return; AU.last = t;
    var out = c.destination;
    if (c.createStereoPanner && S) { var p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, x / S.W * 2 - 1)) * 0.6; p.connect(out); out = p; }
    var play = function (b, type, f, q, gain, rate, at) {
      var s = c.createBufferSource(); s.buffer = b; s.playbackRate.value = rate;
      var fi = c.createBiquadFilter(); fi.type = type; fi.frequency.value = f; fi.Q.value = q;
      var g = c.createGain(); g.gain.value = gain; s.connect(fi); fi.connect(g); g.connect(out); s.start(t + at);
    };
    play(AU.tap, 'bandpass', 2000 + Math.random() * 1800, 4, 0.07 * power, 0.85 + Math.random() * 0.4, 0);
    play(AU.scratch, 'highpass', 5200 + Math.random() * 2500, 0.8, 0.02 * power, 0.9 + Math.random() * 0.3, 0.005);
  }

  // ---- the page the spider walks on: real headlines set in columns, targets scattered among them ----
  function buildPage(R, W, H) {
    var c = S.c, fs = W < 600 ? 12 : 14, lh = fs + 11, cols = W > 1100 ? 3 : W > 700 ? 2 : 1, gut = W < 600 ? 16 : 40, colGap = 32;
    var colW = (W - 2 * gut - (cols - 1) * colGap) / cols, top = W < 600 ? 100 : 92, rows = Math.max(4, Math.floor((H - top - 44) / lh));
    c.font = '400 ' + fs + 'px ' + SERIF;
    var trim = function (t) {
      if (c.measureText(t).width <= colW) return t;
      while (t.length > 4 && c.measureText(t + '…').width > colW) t = t.slice(0, -1);
      return t + '…';
    };
    var St = (INDEX && INDEX.stories) || [], Wa = (INDEX && INDEX.watch) || [];
    var filler = function () {
      var r = Math.random();
      if (St.length && r < 0.8) {
        var s = St[Math.floor(Math.random() * St.length)];
        return r < 0.55 ? s.h : r < 0.68 && s.c[0] ? s.c[0].l + (s.c[0].p == null ? '' : ' · ' + T.pct(s.c[0].p)) : s.k + ' · ' + fmtDate(s.d);
      }
      if (Wa.length) return Wa[Math.floor(Math.random() * Wa.length)].q;
      return 'The Overmorrow';
    };
    var lines = [];
    for (var col = 0; col < cols; col++) for (var r = 0; r < rows; r++) lines.push({ x: gut + col * (colW + colGap), y: top + r * lh, text: trim(filler()), fs: fs, tgt: null });
    var targets = R.stories.slice(0, 8).map(function (s) { return s.h; })
      .concat(R.claims.slice(0, 2).map(function (x) { return x.c.x || x.c.l; }), R.watch.slice(0, 2).map(function (q) { return q.q; })).slice(0, 12);
    var free = lines.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
    targets.forEach(function (t, i) { if (i >= lines.length) return; var l = lines[free[i]]; l.text = trim(t); l.tgt = { tone: TONES[i % TONES.length], got: 0 }; });
    lines.forEach(function (l) { l.w = c.measureText(l.text).width; });
    return { lines: lines, fs: fs, lh: lh, cols: cols, colW: colW, colGap: colGap, gut: gut, top: top };
  }

  // ---- spider: eight legs, two-joint inverse kinematics, alternating gait ----
  function newSpider(x, y) {
    var legs = [];
    [35, 70, 110, 145].forEach(function (a, i) {
      [1, -1].forEach(function (s) {
        legs.push({ a: rad(a) * s, s: s, grp: (i + (s > 0 ? 0 : 1)) % 2, f: { x: x + Math.cos(rad(a) * s) * 80, y: y + Math.sin(rad(a) * s) * 80 }, step: null, grip: null });
      });
    });
    return { x: x, y: y, dir: 0, v: { x: 0, y: 0 }, legs: legs, jerk: 0, k: 1 };
  }
  function hip(sp) { return { x: sp.x + Math.cos(sp.dir) * 6, y: sp.y + Math.sin(sp.dir) * 6 }; }
  function rest(sp, n) { var k = hip(sp), u = sp.dir + n.a, r = 84 * sp.k; return { x: k.x + Math.cos(u) * r + sp.v.x * 0.12, y: k.y + Math.sin(u) * r + sp.v.y * 0.12 }; }
  function gait(sp, dt) {
    sp.legs.forEach(function (n) {
      if (n.grip) { n.f.x += (n.grip.x - n.f.x) * Math.min(1, dt * 14); n.f.y += (n.grip.y - n.f.y) * Math.min(1, dt * 14); return; }
      if (n.step) {
        n.step.t += dt / 0.13;
        var t = Math.min(1, n.step.t), e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        n.f.x = n.step.from.x + (n.step.to.x - n.step.from.x) * e; n.f.y = n.step.from.y + (n.step.to.y - n.step.from.y) * e;
        if (t >= 1) { n.step = null; tap(n.f.x, 0.7 + Math.random() * 0.5); }
        return;
      }
      var goal = rest(sp, n), d = Math.hypot(goal.x - n.f.x, goal.y - n.f.y);
      var mates = sp.legs.some(function (m) { return m !== n && m.step && m.grp === n.grp; });
      var others = sp.legs.some(function (m) { return m.step && m.grp !== n.grp; });
      if ((d > ((sp.v.x || sp.v.y) ? 44 : 16) * sp.k && !others) || (d > 110 * sp.k && !mates)) n.step = { from: { x: n.f.x, y: n.f.y }, to: goal, t: 0 };
    });
  }
  // One leg, drawn as a tapering pen stroke with bristles on the lower segment, the way an engraver would cut it.
  function legPaths(c, sp, offset) {
    var k = hip(sp), ca = Math.cos(sp.dir), sa = Math.sin(sp.dir), m = sp.k;
    sp.legs.forEach(function (n) {
      var kx = k.x + (Math.cos(n.a) * 13 * ca - Math.sin(n.a) * 13 * sa) * m + offset, ky = k.y + (Math.cos(n.a) * 13 * sa + Math.sin(n.a) * 13 * ca) * m + offset * 1.4;
      var fx = n.f.x + offset, fy = n.f.y + offset * 1.4, L1 = 56 * m, L2 = 62 * m;
      var dx = fx - kx, dy = fy - ky, d = Math.hypot(dx, dy) || 1, dm = Math.min(d, L1 + L2 - 2);
      var base = Math.atan2(dy, dx), cosk = (L1 * L1 + dm * dm - L2 * L2) / (2 * L1 * dm), bend = Math.acos(Math.max(-1, Math.min(1, cosk)));
      var jx = kx + Math.cos(base + bend * n.s) * L1, jy = ky + Math.sin(base + bend * n.s) * L1;
      c.lineCap = 'round'; c.lineWidth = (n.grip ? 3.4 : 2.8) * Math.max(0.8, m * 0.85); c.beginPath(); c.moveTo(kx, ky); c.lineTo(jx, jy); c.stroke();
      c.lineWidth = (n.grip ? 2 : 1.5) * Math.max(0.8, m * 0.85); c.beginPath(); c.moveTo(jx, jy); c.lineTo(fx, fy); c.stroke();
      if (offset) return;
      c.lineWidth = 0.7; c.beginPath();
      var ex = fx - jx, ey = fy - jy, len = Math.hypot(ex, ey) || 1, px = -ey / len, py = ex / len;
      for (var i = 1; i < 6; i++) { var q = i / 6, bx = jx + ex * q, by = jy + ey * q, s = i % 2 ? 1 : -1; c.moveTo(bx, by); c.lineTo(bx + px * 4 * s * m + ex / len * 3, by + py * 4 * s * m + ey / len * 3); }
      c.stroke();
      c.fillStyle = INK; c.beginPath(); c.arc(jx, jy, 2.1 * m, 0, 7); c.fill();
    });
  }
  // The abdomen is the paper's engraved globe, turning slowly; head and thorax are hatched.
  function drawSpider(c, sp, t) {
    var k = hip(sp), m = sp.k, breathe = 1 + Math.sin(t * 3) * 0.025;
    c.save();
    c.strokeStyle = 'rgba(22,22,22,.13)'; legPaths(c, sp, 7);
    c.save(); c.translate(k.x + 7, k.y + 10); c.rotate(sp.dir); c.scale(m, m); c.fillStyle = 'rgba(22,22,22,.13)';
    c.beginPath(); c.ellipse(-30, 0, 25, 21, 0, 0, 7); c.ellipse(5, 0, 15, 12, 0, 0, 7); c.fill(); c.restore();
    c.strokeStyle = INK; legPaths(c, sp, 0);
    c.save(); c.translate(k.x, k.y); c.rotate(sp.dir); c.scale(m, m);
    // abdomen: globe
    var rx = 25 * breathe, ry = 21 * breathe;
    c.fillStyle = PAPER; c.strokeStyle = INK; c.lineWidth = 1.6;
    c.beginPath(); c.ellipse(-30, 0, rx, ry, 0, 0, 7); c.fill(); c.stroke();
    c.save(); c.beginPath(); c.ellipse(-30, 0, rx, ry, 0, 0, 7); c.clip();
    c.lineWidth = 0.7; c.beginPath();
    for (var i = 0; i < 6; i++) { // meridians run across the long axis and drift, so the globe turns
      var w = Math.cos((i / 6 + t * 0.05) * Math.PI) * rx;
      c.moveTo(-30 + Math.abs(w), -ry); c.ellipse(-30, 0, Math.abs(w) + 0.01, ry, 0, -Math.PI / 2, Math.PI * 1.5);
    }
    [-0.62, -0.32, 0, 0.32, 0.62].forEach(function (f) { var y = f * ry, h = rx * Math.sqrt(1 - f * f); c.moveTo(-30 - h, y); c.quadraticCurveTo(-30, y + f * 5, -30 + h, y); });
    c.stroke();
    c.lineWidth = 0.9; c.beginPath(); // shaded side, cut in parallel lines
    for (var h = -56; h < 0; h += 2.6) { c.moveTo(h, 22); c.lineTo(h + 16, 5); }
    c.stroke(); c.restore();
    // thorax and head, cross-hatched
    c.fillStyle = PAPER; c.lineWidth = 1.5; c.beginPath(); c.ellipse(3, 0, 14, 12, 0, 0, 7); c.fill(); c.stroke();
    c.save(); c.beginPath(); c.ellipse(3, 0, 14, 12, 0, 0, 7); c.clip(); c.lineWidth = 0.8; c.beginPath();
    for (var a = -14; a < 24; a += 2.4) { c.moveTo(a - 12, 13); c.lineTo(a + 8, -13); c.moveTo(a - 12, -13); c.lineTo(a + 8, 13); }
    c.stroke(); c.restore();
    c.fillStyle = INK; c.beginPath(); c.ellipse(21, 0, 7.5, 6.5, 0, 0, 7); c.fill();
    c.fillStyle = PAPER; [[25, -2.6], [25, 2.6], [22.5, -3.8], [22.5, 3.8]].forEach(function (e) { c.beginPath(); c.arc(e[0], e[1], 1.05, 0, 7); c.fill(); });
    c.restore(); c.restore();
  }

  // ---- movement ----
  function walk(sp, goal, dt, speed) {
    var dx = goal.x - sp.x, dy = goal.y - sp.y, d = Math.hypot(dx, dy);
    if (d < 6) { sp.v.x *= 0.8; sp.v.y *= 0.8; return true; }
    var s = Math.min(speed, d * 4), vx = dx / d * s, vy = dy / d * s;
    sp.v.x += (vx - sp.v.x) * Math.min(1, dt * 6); sp.v.y += (vy - sp.v.y) * Math.min(1, dt * 6);
    sp.x += sp.v.x * dt; sp.y += sp.v.y * dt;
    var want = Math.atan2(sp.v.y, sp.v.x), ds = want - sp.dir;
    while (ds > Math.PI) ds -= 2 * Math.PI; while (ds < -Math.PI) ds += 2 * Math.PI;
    sp.dir += ds * Math.min(1, dt * 7);
    return false;
  }
  function bounds(P) { var o = 60 * P.sp.k, top = 104; return function (x, y) { return { x: Math.max(o, Math.min(P.W - o, x)), y: Math.max(top, Math.min(P.H - o, y)) }; }; }
  function wander(P) {
    var cl = bounds(P), m = P.mouse, list = [];
    for (var i = 0; i < (m ? 5 : 1); i++) list.push(cl(P.W * (0.1 + Math.random() * 0.8), P.H * (0.3 + Math.random() * 0.6)));
    return m ? list.sort(function (a, b) { return Math.hypot(b.x - m.x, b.y - m.y) - Math.hypot(a.x - m.x, a.y - m.y); })[0] : list[0];
  }
  function flee(P, dt) {
    var sp = P.sp, m = P.mouse; if (!m) return 0;
    var dx = sp.x - m.x, dy = sp.y - m.y, d = Math.hypot(dx, dy) || 1, R = 240 * sp.k;
    if (d >= R) return 0;
    var u = 1 - d / R, cl = bounds(P), ux = dx / d, uy = dy / d, goal = cl(sp.x + ux * 260, sp.y + uy * 260);
    if (P.dodge && P.dodge.t > 0) { P.dodge.t -= dt; goal = P.dodge.c; }
    else if (Math.hypot(goal.x - sp.x, goal.y - sp.y) < 90) {
      var a = cl(sp.x - uy * 320, sp.y + ux * 320), b = cl(sp.x + uy * 320, sp.y - ux * 320);
      P.dodge = { c: Math.hypot(a.x - m.x, a.y - m.y) >= Math.hypot(b.x - m.x, b.y - m.y) ? a : b, t: 0.7 }; goal = P.dodge.c;
    }
    walk(sp, goal, dt, 260 + u * 340);
    return u;
  }

  // ---- a caught line: lifted, turned, dropped and pinned back slightly askew, like a clipping ----
  function lift(P, r, leg, pt) {
    var c = P.c, fs = r.fs * 1.25; c.font = '500 ' + fs + 'px ' + SERIF;
    var w = Math.min(c.measureText(r.text).width, P.W - 28), cy = r.y + r.fs / 2;
    var home = { cx: Math.max(14 + w / 2, Math.min(P.W - 14 - w / 2, r.x + w / 2)), cy: cy, rot: (Math.random() - 0.5) * 0.11 };
    var cx = r.x + r.w / 2;
    r.o = { cx: cx, cy: cy, rot: 0, vx: 0, vy: 0, vr: 0, t: 0, w: w, fs: fs, home: home, held: leg || null,
      grab: pt ? { x: pt.x - cx, y: pt.y - cy } : { x: 0, y: 0 }, from: pt ? { x: pt.x, y: pt.y } : null,
      rotTo: (Math.random() < 0.5 ? -1 : 1) * rad(12 + Math.random() * 18) };
    if (!leg) { r.o.cx = home.cx; r.o.rot = home.rot; r.o.t = 9; }
  }
  function carry(P, r, k, t) {
    var o = r.o; if (!o || !o.held || !o.from) return;
    var h = hip(P.sp), z = Math.sin(Math.min(1, k * 1.6) * Math.PI / 2);
    var pt = { x: o.from.x + (h.x - o.from.x) * 0.28 * z, y: o.from.y + (h.y - o.from.y) * 0.28 * z - 16 * z };
    o.held.grip = pt;
    o.rot = o.rotTo * z + Math.sin(t * 22) * 0.04 * z;
    var cs = Math.cos(o.rot), sn = Math.sin(o.rot);
    o.cx = pt.x - (o.grab.x * cs - o.grab.y * sn); o.cy = pt.y - (o.grab.x * sn + o.grab.y * cs);
    var pw = (o.w * Math.abs(cs) + o.fs * Math.abs(sn)) / 2 + 6, ph = (o.w * Math.abs(sn) + o.fs * Math.abs(cs)) / 2 + 6;
    o.cx = Math.max(pw, Math.min(P.W - pw, o.cx)); o.cy = Math.max(ph, Math.min(P.H - ph, o.cy));
  }
  function drop(r) { var o = r.o; if (!o || !o.held) return; o.held = null; o.vx = (Math.random() - 0.5) * 240; o.vy = -60 - Math.random() * 80; o.vr = (Math.random() - 0.5) * 7; }
  function spring(o, dt) {
    var d = o.home;
    o.vx += (70 * (d.cx - o.cx) - 8.5 * o.vx) * dt; o.vy += (70 * (d.cy - o.cy) - 8.5 * o.vy) * dt; o.vr += (60 * (d.rot - o.rot) - 7 * o.vr) * dt;
    o.cx += o.vx * dt; o.cy += o.vy * dt; o.rot += o.vr * dt;
  }

  // ---- frame ----
  function tick(dt, t) {
    var P = S; if (!P) return; var sp = P.sp;
    if (P.phase === 'idle' || P.phase === 'wait') {
      if (!P.still) {
        var u = flee(P, dt);
        if (!u) { if (P.fleeing) { P.roam = wander(P); P.dodge = null; } if (walk(sp, P.roam, dt, 120)) P.roam = wander(P); }
        P.fleeing = u > 0;
      }
    } else if (P.phase === 'hunt') {
      P.tHunt += dt;
      var r = P.route[P.i];
      if (r) {
        var goal = { x: r.x + Math.min(r.w, 260) * 0.5, y: r.y + 44 * sp.k };
        if (P.pause > 0) {
          P.pause -= dt; sp.v.x *= 0.85; sp.v.y *= 0.85;
          carry(P, r, 1 - Math.max(0, P.pause) / P.hold, t);
          if (P.pause <= 0) { drop(r); sp.legs.forEach(function (n) { n.grip = null; }); P.i++; }
        } else if (walk(sp, goal, dt, P.speed)) {
          var pt = { x: r.x + Math.min(r.w, 260) * 0.5, y: r.y + r.fs * 0.6 };
          var n = [sp.legs[0], sp.legs[1]].sort(function (a, b) { return Math.hypot(a.f.x - pt.x, a.f.y - pt.y) - Math.hypot(b.f.x - pt.x, b.f.y - pt.y); })[0];
          n.grip = pt; n.step = null; setTimeout(function () { tap(pt.x, 1.7); }, 70);
          r.tgt.got = 0.001; P.pause = P.hold; lift(P, r, n, pt);
        }
      } else if (!P.done) P.done = t;
      if ((P.done && t - P.done > 0.5) || P.tHunt > 13) finish();
    } else if (P.phase === 'empty') {
      P.tHunt += dt;
      if (P.spots.length) { if (walk(sp, P.spots[0], dt, 420)) P.spots.shift(); }
      else { sp.v.x *= 0.8; sp.v.y *= 0.8; sp.jerk += dt; sp.dir += Math.sin(sp.jerk * 18) * 0.05; if (sp.jerk > 1.3) finish(); }
    } else if (P.phase === 'gather') {
      P.tGather += dt; if (P.tGather > 0.75 && !P.carded) card();
    }
    gait(sp, dt);
    P.targets.forEach(function (l) {
      if (l.tgt.got > 0 && l.tgt.got < 1) l.tgt.got = Math.min(1, l.tgt.got + dt / 0.4);
      if (l.o) { l.o.t += dt; if (!l.o.held) spring(l.o, dt); }
    });
    paint(t);
  }
  function finish() {
    var P = S; if (!P || P.phase === 'gather' || P.phase === 'done') return;
    P.targets.forEach(function (r) { if (!r.tgt.got) r.tgt.got = 1; if (!r.o) lift(P, r, null, null); drop(r); });
    P.sp.legs.forEach(function (n) { n.grip = null; });
    P.phase = 'gather'; P.tGather = P.still ? 1 : 0; P.carded = false;
    if (P.still) card();
  }
  function paint(t) {
    var P = S, c = P.c, W = P.W, H = P.H, gather = P.phase === 'gather' || P.phase === 'done';
    var ks = gather ? Math.min(1, (P.tGather || 0) / 0.75) : 0;
    c.fillStyle = PAPER; c.fillRect(0, 0, W, H);
    var Pg = P.page; if (!Pg) return;
    c.strokeStyle = 'rgba(22,22,22,.14)'; c.lineWidth = 1; c.beginPath();
    for (var i = 1; i < Pg.cols; i++) { var x = Pg.gut + i * (Pg.colW + Pg.colGap) - Pg.colGap / 2; c.moveTo(x, Pg.top - 6); c.lineTo(x, H - 36); }
    c.stroke();
    c.textBaseline = 'top';
    var hunting = P.phase !== 'idle' && P.phase !== 'wait';
    Pg.lines.forEach(function (r) {
      if (r.tgt && r.tgt.got) return;
      c.font = '400 ' + r.fs + 'px ' + SERIF; c.fillStyle = 'rgba(75,75,75,' + (hunting ? 0.5 * (1 - ks) : 0.5) + ')';
      c.fillText(r.text, r.x, r.y);
    });
    var caught = P.targets.filter(function (r) { return r.tgt.got && r.o; });
    if (caught.length > 1 && !gather) { // silk between the clippings
      c.strokeStyle = 'rgba(22,22,22,.32)'; c.lineWidth = 0.8; c.beginPath();
      caught.forEach(function (r, i) { if (i) c.lineTo(r.o.cx, r.o.cy); else c.moveTo(r.o.cx, r.o.cy); }); c.stroke();
    }
    caught.forEach(function (r, i) {
      var o = r.o, cx = o.cx, cy = o.cy, rot = o.rot, sc = 1 + 0.25 * Math.min(1, r.tgt.got * 2), fs = r.fs * sc;
      if (gather) { var e = ks * ks; cx += (W / 2 - cx) * e; cy += (H / 2 - cy) * e; rot *= 1 - e; }
      c.font = '500 ' + fs + 'px ' + SERIF;
      var w = Math.min(c.measureText(r.text).width, W - 28), x = -w / 2, y = -fs / 2;
      var fresh = !gather && o.t < HOLD + 0.5, tone = fresh ? TONES[(Math.floor(o.t * 9) + i) % TONES.length] : r.tgt.tone;
      c.save(); c.translate(cx, cy); c.rotate(rot); c.globalAlpha = gather ? 1 - ks : 1;
      c.shadowColor = 'rgba(22,22,22,.28)'; c.shadowBlur = o.held ? 14 : 5; c.shadowOffsetY = o.held ? 6 : 2;
      c.fillStyle = o.held ? tone : '#ffffff'; c.fillRect(x - 8, y - 4, w + 14, fs + 9);
      c.shadowColor = 'transparent';
      if (!o.held) { c.fillStyle = tone; c.fillRect(x - 8, y - 4, 3.5, fs + 9); c.strokeStyle = 'rgba(22,22,22,.28)'; c.lineWidth = 0.7; c.strokeRect(x - 8, y - 4, w + 14, fs + 9); }
      c.beginPath(); c.rect(x - 8, y - 4, w + 14, fs + 9); c.clip();
      c.fillStyle = o.held ? PAPER : INK; c.fillText(r.text, x, y);
      c.restore();
    });
    if (P.phase !== 'done') drawSpider(c, P.sp, t);
    var hud = P.hud, e = INDEX ? T.scope(INDEX.editions, INDEX.stories.length) : T.loading;
    var line = P.phase === 'idle' ? (P.fleeing ? T.flee : T.idle) : P.phase === 'wait' ? T.loading : P.term ? T.crawl + ' ' + T.q(P.term) + ' · ' + T.caught + ' ' + P.targets.filter(function (r) { return r.tgt.got; }).length + ' / ' + P.targets.length : '';
    var text = e + ' · ' + line;
    if (hud.textContent !== text) hud.textContent = text;
  }

  // ---- overlay ----
  function resetPage() { var P = S; P.page = buildPage({ stories: [], claims: [], watch: [] }, P.W, P.H); }
  function open() {
    if (S) return;
    audio();
    var el = document.createElement('div');
    el.className = 'sp'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-modal', 'true'); el.setAttribute('aria-label', T.aria);
    el.innerHTML = '<canvas class="sp-cv" aria-hidden="true"></canvas>'
      + '<div class="sp-top"><p class="sp-name">' + esc(T.name) + '</p><p class="sp-hud" aria-hidden="true"></p>'
      + '<button class="sp-snd" type="button"></button><button class="sp-x" type="button" aria-label="' + esc(T.close) + '">×</button></div>'
      + '<div class="sp-credit">Credit spider: <a href="https://x.com/rybinfx" target="_blank" rel="noopener">@rybinfx</a></div>'
      + '<form class="sp-form"><label for="sp-q">' + esc(T.ask) + '</label><div class="sp-row"><input id="sp-q" type="search" autocomplete="off" enterkeyhint="search" placeholder="' + esc(T.ph) + '">'
      + '<button class="sp-go" type="submit">' + esc(T.go) + '</button></div><div class="sp-tips"></div></form>'
      + '<div class="sp-card" tabindex="-1" hidden></div><div class="sp-skip" aria-hidden="true">' + esc(T.skip) + '</div>';
    document.body.appendChild(el);
    var cv = el.querySelector('.sp-cv'), c = cv.getContext('2d'), page = document.querySelector('.page');
    S = { el: el, cv: cv, c: c, W: 0, H: 0, phase: 'idle', sp: null, page: null, targets: [], raf: 0, before: document.activeElement, hud: el.querySelector('.sp-hud'),
      still: !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) };
    document.documentElement.classList.add('sp-open');
    if (page) page.inert = true;
    var size = function () {
      var d = window.devicePixelRatio || 1; S.W = window.innerWidth; S.H = window.innerHeight;
      cv.width = S.W * d; cv.height = S.H * d; cv.style.width = S.W + 'px'; cv.style.height = S.H + 'px'; c.setTransform(d, 0, 0, d, 0, 0);
    };
    size();
    S.onresize = function () { size(); if (S.phase === 'idle') resetPage(); };
    window.addEventListener('resize', S.onresize);
    resetPage();
    S.sp = newSpider(S.W * 0.5, S.H * 0.68); S.sp.k = S.W > 900 ? 1.25 : S.W > 600 ? 1.05 : 0.75; S.roam = { x: S.W * 0.5, y: S.H * 0.68 };
    var form = el.querySelector('.sp-form'), inp = el.querySelector('#sp-q'), snd = el.querySelector('.sp-snd');
    var sndLabel = function () { snd.textContent = T.sound[soundOn ? 0 : 1]; };
    sndLabel();
    snd.onclick = function () { soundOn = !soundOn; stored('om-spider-sound', soundOn ? 'on' : 'off'); if (soundOn) audio(); sndLabel(); };
    form.onsubmit = function (e) { e.preventDefault(); var v = inp.value.trim(); if (v) start(v); };
    el.querySelector('.sp-x').onclick = close;
    var track = function (e) { if (S) S.mouse = { x: e.clientX, y: e.clientY }; };
    el.addEventListener('pointermove', track); el.addEventListener('pointerdown', track);
    el.addEventListener('pointerleave', function () { if (S) S.mouse = null; });
    el.addEventListener('pointerup', function (e) { if (S && e.pointerType !== 'mouse') S.mouse = null; });
    cv.addEventListener('click', function () { if (S && (S.phase === 'hunt' || S.phase === 'empty')) finish(); });
    S.onkey = function (e) { if (S && e.key === 'Escape') { e.preventDefault(); if (S.phase === 'hunt' || S.phase === 'empty') finish(); else close(); } };
    document.addEventListener('keydown', S.onkey, true);
    var prev = performance.now();
    var loop = function (now) { if (!S) return; var dt = Math.min(0.05, (now - prev) / 1000); prev = now; tick(dt, now / 1000); S.raf = requestAnimationFrame(loop); };
    S.raf = requestAnimationFrame(loop);
    setTimeout(function () { inp.focus(); }, 30);
    loadIndex().then(function (j) {
      if (!S) return;
      var box = el.querySelector('.sp-tips');
      box.innerHTML = (j.tips || []).map(function (t) { return '<button type="button" data-t="' + esc(t) + '">' + esc(t) + '</button>'; }).join('');
      box.querySelectorAll('button').forEach(function (b) { b.onclick = function () { inp.value = b.dataset.t; start(b.dataset.t); }; });
      if (S.phase === 'idle') resetPage();
    }).catch(function () {});
  }
  function close() {
    if (!S) return;
    cancelAnimationFrame(S.raf); window.removeEventListener('resize', S.onresize); document.removeEventListener('keydown', S.onkey, true);
    var back = S.before, page = document.querySelector('.page');
    S.el.remove(); S = null;
    document.documentElement.classList.remove('sp-open');
    if (page) page.inert = false;
    if (AU) try { AU.ctx.suspend(); } catch (e) {}
    try { if (back && back.focus) back.focus(); } catch (e) {}
  }
  function start(term) {
    audio();
    var P = S; P.term = term; P.phase = 'wait';
    P.el.querySelector('.sp-form').hidden = true; P.el.querySelector('.sp-card').hidden = true;
    loadIndex().then(function () { if (S === P) hunt(term); }).catch(function () {
      if (S !== P) return;
      P.phase = 'done'; P.R = null; P.carded = true;
      var box = P.el.querySelector('.sp-card'); box.innerHTML = '<div class="sp-h">' + esc(T.failed) + '</div>' + actions(); box.hidden = false; wireActions(box);
    });
  }
  function hunt(term) {
    var P = S; P.R = search(term);
    P.page = buildPage(P.R, P.W, P.H);
    P.targets = P.page.lines.filter(function (r) { return r.tgt; });
    var left = P.targets.slice(), route = [], px = P.sp.x, py = P.sp.y;
    var near = function (a, b) { return Math.hypot(a.x + 40 - px, a.y - py) - Math.hypot(b.x + 40 - px, b.y - py); };
    while (left.length) { left.sort(near); var r = left.shift(); route.push(r); px = r.x + Math.min(r.w, 240) * 0.5; py = r.y; }
    var len = route.reduce(function (s, r, i) { var p = i ? route[i - 1] : P.sp; return s + Math.hypot(r.x - p.x, r.y - p.y); }, 0);
    P.hold = P.targets.length > 6 ? 0.4 : HOLD;
    P.speed = Math.max(380, len / Math.max(3, 7 - P.targets.length * P.hold)); P.route = route; P.i = 0; P.pause = 0; P.tHunt = 0; P.done = 0; P.sp.jerk = 0;
    if (P.still) { P.targets.forEach(function (l) { l.tgt.got = 1; }); finish(); return; }
    P.phase = P.targets.length ? 'hunt' : 'empty';
    if (P.phase === 'empty') P.spots = [0, 1, 2].map(function () { return { x: P.W * (0.2 + Math.random() * 0.6), y: P.H * (0.3 + Math.random() * 0.5) }; });
  }
  var actions = function () { return '<div class="sp-acts"><button type="button" class="sp-again">' + esc(T.again) + '</button><button type="button" class="sp-close">' + esc(T.close) + '</button></div>'; };
  function wireActions(box) {
    box.querySelectorAll('.sp-close').forEach(function (b) { b.onclick = close; });
    box.querySelectorAll('.sp-again').forEach(function (b) {
      b.onclick = function () {
        var P = S; box.hidden = true; P.phase = 'idle'; P.targets = []; P.term = ''; resetPage(); P.el.querySelector('.sp-skip').hidden = false;
        var f = P.el.querySelector('.sp-form'); f.hidden = false; var i = f.querySelector('input'); i.select(); i.focus();
      };
    });
  }
  var stampHtml = function (x) { return x.st ? '<span class="stamp ' + esc(x.o || 'pending') + (x.hue == null ? '' : ' scored') + '"' + (x.hue == null ? '' : ' style="--h:' + x.hue + '"') + '>' + esc(x.st) + '</span>' : ''; };
  var figure = function (c) { return c.v ? c.v : c.p == null ? '' : T.pct(c.p); };
  function card() {
    var P = S; P.carded = true; P.phase = 'done';
    var R = P.R, box = P.el.querySelector('.sp-card');
    P.el.querySelector('.sp-skip').hidden = true;
    if (!R.stories.length && !R.claims.length && !R.watch.length) {
      box.innerHTML = '<div class="sp-h">' + esc(T.none) + '</div><p class="sp-sub">' + esc(T.noneSub(R.term)) + '</p>' + actions();
    } else {
      var rows = R.stories.slice(0, 5).map(function (s) {
        return '<a class="sp-item" href="' + PRE + '/edition/' + esc(s.e) + '/#s-' + esc(s.id) + '"><span class="sp-date">' + esc(fmtDate(s.d)) + '</span><span class="sp-tit">' + esc(s.h) + '</span><span class="sp-meta">' + esc(s.k) + '</span></a>';
      }).join('');
      var claims = R.claims.slice(0, 5).map(function (x) {
        var c = x.c;
        return '<a class="sp-item" href="' + PRE + '/edition/' + esc(x.s.e) + '/#s-' + esc(x.s.id) + '"><span class="sp-date">' + esc(fmtDate(x.s.d)) + '</span><span class="sp-tit">' + esc(c.x || c.l) + '</span><span class="sp-meta"><b>' + esc(figure(c)) + '</b> ' + stampHtml(c) + '</span></a>';
      }).join('');
      var watch = R.watch.slice(0, 4).map(function (q) {
        return '<a class="sp-item" href="' + PRE + '/watch/"><span class="sp-date">' + esc(T.pct(q.p)) + '</span><span class="sp-tit">' + esc(q.q) + '</span><span class="sp-meta">' + esc(q.topic) + '</span></a>';
      }).join('');
      box.innerHTML = '<div class="sp-h">' + esc(T.catchH(R.term)) + '</div>'
        + '<section><div class="sp-s">' + esc(T.stories) + ' <b>' + R.stories.length + '</b>' + (R.inTitle && R.inTitle < R.stories.length ? '<span>' + esc(T.inTitle(R.inTitle)) + '</span>' : '') + '</div>'
        + (rows || '<p class="sp-sub">' + esc(T.noStories) + '</p>') + (R.stories.length > 5 ? '<p class="sp-sub">' + esc(T.more(R.stories.length - 5)) + '</p>' : '') + '</section>'
        + (R.claims.length ? '<section><div class="sp-s">' + esc(T.forecasts) + ' <b>' + R.claims.length + '</b></div>' + (R.scored ? '<p class="sp-sub">' + esc(T.went(R.hits, R.scored)) + '</p>' : '') + claims + (R.claims.length > 5 ? '<p class="sp-sub">' + esc(T.more(R.claims.length - 5)) + '</p>' : '') + '</section>' : '')
        + (R.watch.length ? '<section><div class="sp-s">' + esc(T.board) + ' <b>' + R.watch.length + '</b></div>' + watch + '</section>' : '')
        + actions() + '<p class="sp-src">' + esc(T.note) + '</p>';
    }
    box.hidden = false;
    wireActions(box);
    box.focus({ preventScroll: true });
    box.scrollTop = 0;
  }

  // ---- how it is called: the word typed anywhere, or the small spider in the navigation ----
  var buf = '';
  document.addEventListener('keydown', function (e) {
    var t = e.target;
    if (S || (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable))) return;
    if (e.metaKey || e.ctrlKey || e.altKey || !/^[a-z]$/i.test(e.key)) return;
    buf = (buf + e.key.toLowerCase()).slice(-6);
    if (buf === 'spider') { buf = ''; e.preventDefault(); open(); }
  });
  document.querySelectorAll('[data-spider]').forEach(function (b) { b.addEventListener('click', open); });

  // A story on the Czech phone layout may sit on the other desk's tab: open that tab before going to the story.
  function reveal() {
    var m = location.hash.match(/^#s-/); if (!m) return;
    var el = document.getElementById(location.hash.slice(1)); if (!el || el.offsetParent) return;
    var desk = el.closest('.desk'), tab = desk && document.getElementById(desk.classList.contains('home') ? 'tab-home' : 'tab-foreign');
    if (tab) { tab.checked = true; el.scrollIntoView(); }
  }
  window.addEventListener('load', reveal);
})();
