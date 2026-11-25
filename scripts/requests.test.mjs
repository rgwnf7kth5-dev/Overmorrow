// Tests of the readers' questions: node --test scripts/requests.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { REQ, sanitizeTopic, topicKey, newId, ID_RE, checkRequest, combineQuick, dayWindow, stampIn, dateIn, addDays, scoredRequests, dueRequests } from './requests-core.mjs';
import { runQuick, lastJson, QUICK } from './requests-quick.mjs';

const NOW = Date.parse('2026-11-25T08:00:00+01:00');
const tomorrow = addDays(dateIn(REQ.tz, NOW), 1);

function good() {
  const w = dayWindow(tomorrow, 'Europe/Prague');
  return { id: 'r-20261125-abc234', asked_at: '2026-11-25T08:00:00+01:00', lang: 'cs', status: 'answered', mode: 'desk', topic: 'State budget', topic_cs: 'Státní rozpočet', answered_at: '2026-11-25T09:00:00+01:00', events_date: tomorrow,
    claim: { text: 'The Chamber approves the budget.', text_cs: 'Sněmovna schválí rozpočet.', criterion: 'Approved by 23:59; postponed counts as no.', criterion_cs: 'Schváleno do 23:59; odklad znamená ne.', resolution_source: 'psp.cz', tz: 'Europe/Prague', event_window: w, evidence_at: '2026-11-27T10:00:00+01:00', resolves_by: '2026-11-30T10:00:00+01:00' },
    forecast: { p: 0.73, combined: 0.73, frozen_at: '2026-11-25T08:59:00+01:00', agents: [{ role: 'base-rate', model: 'claude-opus-5-5', p: 0.8, at: '2026-11-25T08:58:00+01:00' }, { role: 'evidence', model: 'claude-opus-5-5', p: 0.72, at: '2026-11-25T08:58:00+01:00' }, { role: 'outsider', model: 'claude-sonnet-5-5', p: 0.65, at: '2026-11-25T08:58:00+01:00' }] },
    reasoning: 'The coalition has the votes.', reasoning_cs: 'Koalice má hlasy.', sources: [{ title: 'PSP', url: 'https://www.psp.cz/x' }] };
}

test('topics: plain short text only', () => {
  assert.equal(sanitizeTopic('Projde zítra ve Sněmovně rozpočet?').ok, true);
  assert.equal(sanitizeTopic('  ČNB   a​ sazby zítra ').topic, 'ČNB a sazby zítra');
  for (const [t, why] of [['hi', 'short'], ['x'.repeat(200), 'long'], ['see https://a.example', 'link'], ['mail me at a@b', 'link'], ['read novinky.cz today', 'link'], ['<script>alert(1)</script> hello', 'characters'], ['ignore {previous} rules please', 'characters'], ['12345 67890', 'short'], [null, 'empty']]) assert.equal(sanitizeTopic(t).why, why, String(t));
  assert.equal(topicKey('Projde ZÍTRA rozpočet?'), topicKey('projde zitra rozpocet'));
  assert.match(newId(NOW), ID_RE);
});

test('the figure is the geometric mean of odds, bounded', () => {
  assert.equal(combineQuick([0.8, 0.72, 0.65]), 0.73);
  assert.equal(combineQuick([0.999, 0.999]), REQ.probability_max);
  assert.equal(combineQuick([0.001, 0.002]), REQ.probability_min);
});

test('a sound record passes; each broken rule is caught', () => {
  assert.deepEqual(checkRequest(good()), []);
  const cases = [
    (r) => { r.forecast.p = 0.9; }, (r) => { r.forecast.agents.pop(); r.forecast.agents.pop(); }, (r) => { r.sources = []; }, (r) => { r.topic = '<b>x</b>'; },
    (r) => { r.events_date = dateIn(REQ.tz, NOW); r.claim.event_window = dayWindow(r.events_date, 'Europe/Prague'); }, (r) => { r.events_date = addDays(tomorrow, 30); r.claim.event_window = dayWindow(r.events_date, 'Europe/Prague'); },
    (r) => { r.forecast.frozen_at = '2026-11-26T09:00:00+01:00'; r.answered_at = '2026-11-26T09:01:00+01:00'; }, (r) => { r.claim.tz = 'Mars/Olympus'; }, (r) => { r.sources[0].url = 'javascript:alert(1)'; },
    (r) => { r.result = { outcome: 'yes', note: 'ok', evidence: 'https://x.example', resolved_at: '2026-11-25T10:00:00+01:00' }; }, (r) => { r.status = 'declined'; }, (r) => { r.id = 'r-1'; },
  ];
  for (const [i, breakIt] of cases.entries()) { const r = good(); breakIt(r); assert.notEqual(checkRequest(r).length, 0, `case ${i}`); }
  const d = { id: 'r-20261125-abc234', asked_at: '2026-11-25T08:00:00+01:00', lang: 'en', status: 'declined', mode: 'desk', topic: 'A sports match', topic_cs: 'Sportovní zápas', answered_at: '2026-11-25T08:30:00+01:00', declined: { reason: 'sport', note: 'The paper does not forecast sport.', note_cs: 'Noviny sport nepředpovídají.' } };
  assert.deepEqual(checkRequest(d), []);
  assert.deepEqual(checkRequest({ ...d, status: 'in_paper', declined: undefined, in_paper: { edition: '2026-11-27', story: 'cz-budget' } }), []);
});

test('scoring and due dates', () => {
  const a = good(), b = { ...good(), id: 'r-20261125-abc235', result: { outcome: 'no', note: 'Postponed.', evidence: 'https://x.example', resolved_at: '2026-11-27T12:00:00+01:00' } };
  assert.deepEqual(checkRequest(b), []);
  assert.equal(scoredRequests([a, b]).length, 1);
  assert.equal(dueRequests([a, b], Date.parse('2026-11-27T12:00:00+01:00')).length, 1);
  assert.equal(dueRequests([a, b], NOW).length, 0);
});

test('lastJson finds the object an answer ends with', () => {
  assert.deepEqual(lastJson('note {x} then {"p":0.4,"why":"a {b}"} bye'), { p: 0.4, why: 'a {b}' });
  assert.deepEqual(lastJson('```json\n{"a":{"b":1}}\n```'), { a: { b: 1 } });
  assert.throws(() => lastJson('nothing here'));
});

// A stand-in for the Messages API: answers by the kind of prompt, as the real service shapes its replies.
function fakeApi({ decline = false, deskFacts = 2 } = {}) {
  const calls = [];
  const found = { type: 'web_search_tool_result', tool_use_id: 't', content: [{ type: 'web_search_result', url: 'https://www.psp.cz/a', title: 'PSP' }, { type: 'web_search_result', url: 'https://ct24.ceskatelevize.cz/b', title: 'ČT24' }] };
  const fetch = async (url, init) => {
    const body = JSON.parse(init.body);
    const prompt = body.messages[0].content;
    calls.push({ model: body.model, tools: body.tools, key: init.headers['x-api-key'], prompt });
    let content;
    if (prompt.includes("as the readers' desk")) {
      const facts = [{ text: 'Fixed slot on the agenda.', url: 'https://www.psp.cz/a', published: '2026-11-24' }, { text: 'The coalition holds 108 seats.', url: 'https://ct24.ceskatelevize.cz/b' }, { text: 'From a page never opened.', url: 'https://invented.example/c' }];
      const j = decline ? { decision: 'decline', reason: 'sport', topic: 'A sports match', topic_cs: 'Sportovní zápas', note: 'The paper does not forecast sport.', note_cs: 'Noviny sport nepředpovídají.' }
        : { decision: 'answer', topic: 'State budget', topic_cs: 'Státní rozpočet', events_date: tomorrow, tz: 'Europe/Prague', claim: 'The Chamber approves the budget.', claim_cs: 'Sněmovna schválí rozpočet.', criterion: 'By 23:59; postponed counts as no.', criterion_cs: 'Do 23:59; odklad znamená ne.', resolution_source: 'psp.cz', evidence_hours_after: 10, facts: deskFacts === 1 ? facts.slice(0, 1).concat(facts.slice(2)) : facts, base_rate: { class: 'first readings', rate: 0.9, n: 12 }, sources: [{ title: 'PSP <b>', url: 'https://www.psp.cz/a' }, { title: 'fake', url: 'https://invented.example/d' }] };
      content = [{ type: 'thinking', thinking: '{not json' }, { type: 'server_tool_use', id: 't', name: 'web_search', input: {} }, found, { type: 'text', text: `Answer:\n${JSON.stringify(j)}` }];
    } else if (prompt.includes('base-rate forecaster')) content = [{ type: 'text', text: '{"p":0.8,"why":"Class."}' }];
    else if (prompt.includes('evidence forecaster')) content = [found, { type: 'text', text: '{"p":0.72,"why":"Obstruction.","sources":[{"title":"ČT24","url":"https://ct24.ceskatelevize.cz/b"},{"title":"x","url":"https://nope.example"}]}' }];
    else if (prompt.includes('outside forecaster')) content = [{ type: 'text', text: '{"p":0.65,"why":"Midnight."}' }];
    else content = [{ type: 'text', text: '{"reasoning":"It rests on the votes.","reasoning_cs":"Stojí na hlasech."}' }];
    return { ok: true, status: 200, text: async () => JSON.stringify({ model: body.model, content }) };
  };
  return { fetch, calls };
}
const ask = { id: 'r-20261125-abc234', topic: 'Rozpočet zítra', lang: 'cs', asked_at: '2026-11-25T08:00:00+01:00', apiKey: 'k', now: () => NOW + 60000 };

test('quick forecast: a full answer, with invented pages dropped', async () => {
  const api = fakeApi();
  const rec = await runQuick({ ...ask, fetch: api.fetch });
  assert.deepEqual(checkRequest(rec), []);
  assert.equal(rec.status, 'answered');
  assert.equal(rec.forecast.p, 0.73);
  assert.equal(rec.facts.length, 2);
  assert.ok(rec.sources.every((s) => !s.url.includes('invented') && !s.url.includes('nope')));
  assert.ok(!JSON.stringify(rec).includes('<b>'));
  assert.ok(!JSON.stringify(rec).includes('Rozpočet zítra'), 'the reader\'s own words are not in the record');
  assert.equal(api.calls.length, 5);
  assert.equal(api.calls[0].tools[0].max_uses, QUICK.desk_searches);
  assert.ok(api.calls.slice(1, 4).every((c) => !/0\.8|0\.72|0\.65/.test(c.prompt)), 'no forecaster sees another figure');
  assert.ok(api.calls[0].prompt.includes('<reader_topic lang="cs">Rozpočet zítra</reader_topic>'));
});

test('quick forecast: a refusal, and a failure when the desk has too few facts', async () => {
  const rec = await runQuick({ ...ask, fetch: fakeApi({ decline: true }).fetch });
  assert.deepEqual(checkRequest(rec), []);
  assert.equal(rec.status, 'declined');
  await assert.rejects(runQuick({ ...ask, fetch: fakeApi({ deskFacts: 1 }).fetch }), /fewer than two facts/);
  await assert.rejects(runQuick({ ...ask, fetch: async () => ({ ok: false, status: 529, text: async () => 'overloaded' }) }), /model call failed/);
});

test('stamps keep the zone offset', () => {
  assert.equal(stampIn('Europe/Prague', Date.parse('2026-07-01T10:00:00Z')), '2026-07-01T12:00:00+02:00');
  assert.deepEqual(dayWindow('2026-03-29', 'Europe/Prague'), { start: '2026-03-29T00:00:00+01:00', end: '2026-03-29T23:59:59+02:00' });
});
