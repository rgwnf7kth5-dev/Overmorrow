// Readers' questions (METHODOLOGY 21): the form on /ask/. Sends the topic to /api/ask, shows what the paper
// already has on it (from search.json, the Spider's index), and follows the reader's own questions until they
// are answered. The reader's words stay in this browser (localStorage) and in the queue; they are not published.
(function () {
  'use strict';
  var root = document.querySelector('[data-ask]');
  if (!root) return;
  var CS = document.documentElement.lang === 'cs';
  var PRE = CS ? '/cs' : '';
  var MAX = +root.getAttribute('data-max') || 160, MIN = +root.getAttribute('data-min') || 8;
  var T = CS ? {
    sending: 'Odesílám…', sent: 'Přijato.', same: 'Na totéž se už někdo ptal, tady je odpověď.',
    err: { short: 'Napište prosím téma aspoň několika slovy.', long: 'Téma je příliš dlouhé.', link: 'Téma prosím bez odkazů a adres.', characters: 'Téma prosím jen slovy, bez zvláštních znaků.', full: 'Dnes už je dotazů příliš mnoho. Zkuste to prosím zítra.', rate: 'Příliš mnoho dotazů najednou. Zkuste to za minutu.', down: 'Dotaz se nepodařilo odeslat. Zkuste to prosím později.' },
    st: { queued: 'Ve frontě. Redakce na přání odpovídá přes den zhruba do hodiny.', working: 'Rychlý odhad se počítá, obvykle minutu až tři.', gone: 'Dotaz už ve frontě není.' },
    yes: 'Spíše ano', no: 'Spíše ne', even: 'Vyrovnané šance', day: 'Událost', declined: 'Na tohle noviny neodpovídají', inPaper: 'Tohle už noviny mají', read: 'Přečíst', how: 'Jak se to ověří', quick: 'Rychlý odhad', desk: 'Redakce na přání',
    forget: 'Skrýt', pct: function (p) { return Math.round(p * 100) + ' %'; }, loc: 'cs-CZ'
  } : {
    sending: 'Sending…', sent: 'Received.', same: 'Someone has asked the same; here is the answer.',
    err: { short: 'Please name the subject in a few words.', long: 'The subject is too long.', link: 'Please name the subject without links or addresses.', characters: 'Please use words only, without special characters.', full: 'Too many questions today. Please try again tomorrow.', rate: 'Too many questions at once. Please try again in a minute.', down: 'The question could not be sent. Please try again later.' },
    st: { queued: 'In the queue. The readers’ desk answers within about an hour during the day.', working: 'The quick estimate is being worked out, usually one to three minutes.', gone: 'The question is no longer in the queue.' },
    yes: 'Probably yes', no: 'Probably not', even: 'Even chances', day: 'Event of', declined: 'The paper does not answer this', inPaper: 'The paper already has this', read: 'Read it', how: 'How it is checked', quick: 'Quick estimate', desk: 'Readers’ desk',
    forget: 'Hide', pct: function (p) { return Math.round(p * 100) + '%'; }, loc: 'en-GB'
  };
  var esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  var form = root.querySelector('.ask-form'), input = form.querySelector('#ask-topic'), msg = form.querySelector('.ask-msg'), btn = form.querySelector('button');
  var foundBox = root.querySelector('.ask-found'), mineBox = root.querySelector('.ask-mine');
  var KEY = 'om-asked';

  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; } catch (e) { return []; } }
  function save(list) { try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 20))); } catch (e) {} }
  var mine = load();
  var day = function (d) { return new Intl.DateTimeFormat(T.loc, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(d + 'T12:00:00Z')); };

  // ---- what the paper already has: the same word matching as the Spider ----
  var INDEX = null, indexWait = null;
  function fold(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
  function stem(w) { return w.length >= 6 ? w.slice(0, -2) : w.length === 5 ? w.slice(0, -1) : w; }
  function atStart(hay, frag) { var i = hay.indexOf(frag); while (i >= 0) { if (i === 0 || !/[a-z0-9]/.test(hay[i - 1])) return true; i = hay.indexOf(frag, i + 1); } return false; }
  var STOP = { the: 1, and: 1, for: 1, will: 1, with: 1, what: 1, tomorrow: 1, zitra: 1, jak: 1, bude: 1, nebo: 1, pro: 1, kdo: 1, about: 1 };
  function words(q) { return fold(q).split(/[^a-z0-9]+/).filter(function (w) { return w.length >= 3 && !STOP[w]; }); }
  function getIndex() {
    if (INDEX) return Promise.resolve(INDEX);
    if (!indexWait) indexWait = fetch(PRE + '/search.json').then(function (r) { if (!r.ok) throw new Error('index'); return r.json(); }).then(function (j) { INDEX = j; return j; }).catch(function () { indexWait = null; return null; });
    return indexWait;
  }
  function showFound(q) {
    var ws = words(q);
    if (!ws.length) { foundBox.hidden = true; return; }
    getIndex().then(function (ix) {
      if (!ix || input.value !== q) return;
      var newest = ix.stories.map(function (s) { return s.e; }).sort().slice(-1)[0] || '';
      var latest = ix.stories.filter(function (s) { return s.e >= newest; });
      var prev = ix.stories.map(function (s) { return s.e; }).filter(function (e) { return e < newest; }).sort().slice(-1)[0];
      if (prev) latest = latest.concat(ix.stories.filter(function (s) { return s.e === prev; }));
      var hits = [];
      latest.forEach(function (s) {
        var head = fold(s.k + ' ' + s.h + ' ' + s.s), body = fold(s.t + ' ' + s.c.map(function (c) { return c.l + ' ' + c.x; }).join(' '));
        var n = 0, inHead = 0;
        ws.forEach(function (w) { var st = stem(w); if (atStart(head, w) || atStart(head, st)) { n += 1; inHead += 1; } else if (atStart(body, w) || atStart(body, st)) n += 1; });
        if (n === ws.length && inHead) hits.push({ s: s, score: inHead * 10 + (s.e === newest ? 1 : 0) });
      });
      var board = (ix.watch || []).filter(function (w) { var h = fold(w.topic + ' ' + w.q); return ws.every(function (x) { return atStart(h, x) || atStart(h, stem(x)); }); }).slice(0, 2);
      hits.sort(function (a, b) { return b.score - a.score; });
      var html = hits.slice(0, 3).map(function (h) {
        var s = h.s, c = s.c.filter(function (x) { return typeof x.p === 'number'; })[0];
        return '<p class="ask-hit"><a href="' + PRE + '/edition/' + s.e + '/#s-' + esc(s.id) + '">' + esc(s.h) + '</a>' + (c ? ' <span>' + esc(c.l) + ': <b>' + T.pct(c.p) + '</b></span>' : '') + '</p>';
      }).join('') + board.map(function (w) { return '<p class="ask-hit"><a href="' + PRE + '/watch/">' + esc(w.q) + '</a> <span><b>' + T.pct(w.p) + '</b></span></p>'; }).join('');
      foundBox.hidden = !html;
      foundBox.querySelector('div').innerHTML = html;
    });
  }
  var typing;
  input.addEventListener('input', function () { clearTimeout(typing); var q = input.value; typing = setTimeout(function () { showFound(q); }, 350); });

  // ---- the reader's own questions ----
  function card(rec) {
    if (rec.status === 'declined') return '<p class="ask-state"><b>' + T.declined + '.</b> ' + esc(CS ? rec.declined.note_cs : rec.declined.note) + '</p>';
    if (rec.status === 'in_paper') return '<p class="ask-state"><b>' + T.inPaper + '.</b> <a href="' + PRE + '/edition/' + esc(rec.in_paper.edition) + '/#s-' + esc(rec.in_paper.story) + '">' + T.read + '</a></p>';
    var p = rec.forecast.p, c = rec.claim, fav = p > 0.5 ? T.yes : p < 0.5 ? T.no : T.even;
    return '<p class="ask-meta">' + (rec.mode === 'quick' ? T.quick : T.desk) + ' · ' + T.day + ' ' + esc(day(rec.events_date)) + '</p>'
      + '<p class="ask-claim">' + esc(CS ? c.text_cs : c.text) + '</p>'
      + '<div class="lk"><span class="bar" aria-hidden="true"><i style="width:' + Math.round(p * 100) + '%"></i></span><span>' + fav + ': <b>' + T.pct(Math.max(p, 1 - p)) + '</b></span></div>'
      + '<p>' + esc(CS ? rec.reasoning_cs : rec.reasoning) + '</p>'
      + '<details class="check"><summary>' + T.how + '</summary><p>' + esc(CS ? c.criterion_cs : c.criterion) + '</p></details>';
  }
  function draw() {
    mineBox.hidden = !mine.length;
    mineBox.querySelector('div').innerHTML = mine.map(function (m) {
      var body = m.record ? card(m.record) : '<p class="ask-state">' + (T.st[m.state] || T.st.queued) + '</p>';
      return '<article class="ask-card mine' + (m.record ? '' : ' waiting') + '"><h3>' + esc(m.topic) + '</h3>' + body + '<p class="ask-forget"><button type="button" data-forget="' + esc(m.id) + '">' + T.forget + '</button></p></article>';
    }).join('');
  }
  mineBox.addEventListener('click', function (e) {
    var id = e.target && e.target.getAttribute && e.target.getAttribute('data-forget');
    if (!id) return;
    mine = mine.filter(function (m) { return m.id !== id; }); save(mine); draw();
  });
  function getJson(url) { return fetch(url, { headers: { accept: 'application/json' } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }
  function check(m) {
    // The archived answer first (a static file), then the queue.
    return getJson('/requests/' + m.id + '.json').then(function (rec) {
      if (rec && rec.id === m.id) { m.record = rec; m.state = rec.status; return; }
      return getJson('/api/ask/status?id=' + encodeURIComponent(m.id)).then(function (j) {
        if (!j) { if (Date.now() - m.at > 4 * 864e5) m.state = 'gone'; return; }
        m.state = j.state; if (j.record) m.record = j.record;
      });
    });
  }
  var timer;
  function poll() {
    clearTimeout(timer);
    var open = mine.filter(function (m) { return !m.record && m.state !== 'gone'; });
    if (!open.length) { draw(); return; }
    Promise.all(open.map(check)).then(function () {
      save(mine); draw();
      var still = mine.filter(function (m) { return !m.record && m.state !== 'gone'; });
      if (still.length) timer = setTimeout(poll, still.some(function (m) { return m.state === 'working'; }) ? 8000 : 60000);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var topic = input.value.replace(/\s+/g, ' ').trim();
    if (topic.length < MIN) { msg.textContent = T.err.short; return; }
    if (topic.length > MAX) { msg.textContent = T.err.long; return; }
    btn.disabled = true; msg.textContent = T.sending;
    fetch('/api/ask', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ topic: topic, lang: CS ? 'cs' : 'en', website: form.querySelector('.ask-hp').value }) })
      .then(function (r) { return r.json().catch(function () { return null; }).then(function (j) { return { status: r.status, j: j }; }); })
      .then(function (x) {
        btn.disabled = false;
        if (!x.j || !x.j.ok) { msg.textContent = x.status === 429 ? (x.j && x.j.error === 'full' ? T.err.full : T.err.rate) : (x.j && T.err[x.j.error]) || T.err.down; return; }
        msg.textContent = x.j.same ? T.same : T.sent;
        mine = mine.filter(function (m) { return m.id !== x.j.id; });
        mine.unshift({ id: x.j.id, topic: topic, at: Date.now(), state: x.j.state, record: x.j.record || null });
        save(mine); input.value = ''; foundBox.hidden = true; draw(); poll();
      })
      .catch(function () { btn.disabled = false; msg.textContent = T.err.down; });
  });

  draw(); poll();
})();
