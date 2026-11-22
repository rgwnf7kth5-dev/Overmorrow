// Export named votes after psp.mjs refreshes the PSP archives.
// node scripts/refdata/psp-rollcalls.mjs 2026-11-13
import fs from 'node:fs';
import path from 'node:path';
import { CACHE, ROOT } from './lib.mjs';

const since = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(since ?? '')) throw Error('Supply the first voting date as YYYY-MM-DD (inclusive).');
const input = path.join(CACHE, 'psp', 'x');
const out = path.join(ROOT, 'data', 'psp', 'votes');
const decoder = new TextDecoder('windows-1250');
function* rows(file) {
  const contents = decoder.decode(fs.readFileSync(path.join(input, file)));
  for (const line of contents.split(/\r?\n/)) if (line) yield line.split('|');
}
const iso = d => d.split('.').reverse().join('-');
const byDay = new Map();
const byVote = new Map();
const voidIds = new Set(Array.from(rows('zmatecne.unl'), r => r[0]));
for (const r of rows('hl2025s.unl')) {
  const day = iso(r[5]);
  if (day < since || r[1] !== '174') continue;
  const vote = {
    id: Number(r[0]), meeting: Number(r[2]), number: Number(r[3]), agenda_item: Number(r[4]) || null,
    time_local: r[6], label: r[15] || r[16] || null, method_code: r[13], result_code: r[14],
    voided: voidIds.has(r[0]), source: 'https://www.psp.cz/sqw/hlasy.sqw?G=' + r[0],
    yes: +r[7], no: +r[8], abstain_button: +r[9], present_no_button: +r[10],
    present: +r[11], quorum: +r[12], roll_call: {}
  };
  if (!byDay.has(day)) byDay.set(day, {votes: [], roster: {}});
  byDay.get(day).votes.push(vote);
  byVote.set(r[0], {day, vote});
}
const persons = new Map(Array.from(rows('osoby.unl'), r => [r[0], r[3] + ' ' + r[2]]));
const names = new Map(Array.from(rows('poslanec.unl'), r => [r[0], persons.get(r[1])]));
const excuses = new Map();
for (const [organ, member, date, from, to] of rows('omluvy.unl')) {
  if (organ !== '174' || !byDay.has(iso(date))) continue;
  const key = date + '/' + member;
  if (!excuses.has(key)) excuses.set(key, []);
  excuses.get(key).push([from, to]);
}
const parts = fs.readdirSync(input).filter(f => /^hl2025h\d+\.unl$/.test(f));
if (!parts.length) throw Error('Missing roll-call files.');
for (const file of parts) {
  for (const [member, id, raw] of rows(file)) {
    const match = byVote.get(id);
    if (!match) continue;
    const { day, vote } = match;
    const key = day.split('-').reverse().join('.') + '/' + member;
    const excused = raw === '@' && excuses.get(key)?.some(([from,to]) =>
      (!from || from <= vote.time_local) && (!to || vote.time_local <= to));
    const code = excused ? 'M' : raw;
    if (!vote.roll_call[code]) vote.roll_call[code] = [];
    vote.roll_call[code].push(Number(member));
    if (!names.get(member)) throw Error('Missing name for PSP member ' + member);
    byDay.get(day).roster[member] = names.get(member);
  }
}
fs.mkdirSync(out, {recursive:true});
for (const [date, {roster, votes}] of byDay) {
  votes.sort((a,b) => a.time_local.localeCompare(b.time_local) || a.id - b.id);
  for (const vote of votes) {
    for (const ids of Object.values(vote.roll_call)) ids.sort((a,b) => a-b);
    const ids = Object.values(vote.roll_call).flat();
    if (new Set(ids).size !== ids.length) throw Error('Duplicate roll-call entry for ' + vote.id);
    vote.roll_call_count = ids.length;
    if (vote.method_code === 'N' && vote.present > 0 && !vote.voided &&
      ((vote.roll_call.A?.length ?? 0) !== vote.yes ||
       (vote.roll_call.B?.length ?? 0) + (vote.roll_call.N?.length ?? 0) !== vote.no)) {
      throw Error('Roll call and published totals disagree for ' + vote.id);
    }
  }
  const sheet = {date, timezone:'Europe/Prague', term:10, source:'https://www.psp.cz/sqw/hp.sqw?k=1302',
    roll_call_codes:{A:'yes',B:'no',N:'no',C:'abstain button',F:'present, no button',K:'abstained or did not vote', '@':'not registered',M:'excused',W:'before taking oath'},
    result_codes:{A:'adopted',R:'rejected',X:'unknown',Q:'secret, result unknown',K:'no quorum'},
    roster, votes};
  const target = path.join(out, date + '.json');
  fs.writeFileSync(target, JSON.stringify(sheet, null, 2) + '\n');
  console.log(date, votes.length, 'votes');
}
