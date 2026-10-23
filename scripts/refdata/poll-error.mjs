#!/usr/bin/env node
// Final polls vs official results.
//
//   node scripts/refdata/poll-error.mjs [--refresh]
//
// Poll figures are transcribed below from the cited pages (Wikipedia poll tables, which link the
// pollsters' releases, or the press reports of the final poll). Czech results are downloaded
// from the Czech Statistical Office's official XML (volby.cz) and parsed; Brazilian results are
// transcribed from the cited official/parliamentary sources. Nothing is estimated: an election
// or party for which a number could not be verified is left out.
// Output: pipeline/reference-data/poll-error.json
import fs from 'node:fs';
import path from 'node:path';
import { CACHE, OUT, download, mean, sd, round } from './lib.mjs';

const refresh = process.argv.includes('--refresh');
const DIR = path.join(CACHE, 'elections');

// ------------------------------------------------------------------ poll inputs
// CZ rule: the last poll by each pollster whose fieldwork ended within 14 days before the first
// polling day (Czech law bans publishing polls in the last 3 days, so the last fieldwork ends
// about a week out). Polls without a fieldwork date are excluded. 2017: the final published
// poll average of kdovyhrajevolby.cz (16 Oct 2017) is used as listed on Wikipedia.
const CZ = [
  {
    id: 'cz-2017',
    election: 'Czech Chamber of Deputies 2017',
    date: '2017-10-20',
    resultsUrl: 'https://www.volby.cz/pls/ps2017nss/vysledky',
    pollSource: 'https://en.wikipedia.org/wiki/Opinion_polling_for_the_2017_Czech_parliamentary_election (Aggregate polls table)',
    pollBasis: 'Poll average published by kdovyhrajevolby.cz on 16 Oct 2017',
    parties: {
      ANO: 'ANO 2011',
      ODS: 'Občanská demokratická strana',
      Piráti: 'Česká pirátská strana',
      SPD: 'Svob.a př.dem.-T.Okamura (SPD)',
      KSČM: 'Komunistická str.Čech a Moravy',
      ČSSD: 'Česká str.sociálně demokrat.',
      'KDU-ČSL': 'Křesť.demokr.unie-Čs.str.lid.',
      'TOP 09': 'TOP 09',
      STAN: 'STAROSTOVÉ A NEZÁVISLÍ',
    },
    polls: [
      { pollster: 'kdovyhrajevolby.cz average', fieldwork_end: '2017-10-16', values: { ČSSD: 12.34, ANO: 25.32, KSČM: 11.41, 'TOP 09': 6.18, ODS: 9.2, 'KDU-ČSL': 5.75, STAN: 3.96, Piráti: 7.64, SPD: 9.02 } },
    ],
  },
  {
    id: 'cz-2021',
    election: 'Czech Chamber of Deputies 2021',
    date: '2021-10-08',
    resultsUrl: 'https://www.volby.cz/pls/ps2021/vysledky',
    pollSource: 'https://en.wikipedia.org/wiki/Opinion_polling_for_the_2021_Czech_parliamentary_election',
    pollBasis: 'Mean of each pollster’s last poll with fieldwork ending 24 Sep 2021 or later (STEM, Sanep, Median; Kantar 13–22 Sep and an undated Phoenix poll excluded by the rule)',
    parties: {
      ANO: 'ANO 2011',
      SPOLU: 'SPOLU – ODS, KDU-ČSL, TOP 09',
      'Piráti+STAN': 'PIRÁTI a STAROSTOVÉ',
      SPD: 'Svoboda a přímá demokracie (SPD)',
      Přísaha: 'PŘÍSAHA - občanské hnutí Roberta Šlachty',
      ČSSD: 'Česká strana sociálně demokratická',
      KSČM: 'Komunistická strana Čech a Moravy',
    },
    polls: [
      { pollster: 'STEM', fieldwork: '24–30 Sep 2021', fieldwork_end: '2021-09-30', values: { ANO: 27.3, SPOLU: 21.4, 'Piráti+STAN': 17.4, SPD: 12.3, KSČM: 6.5, ČSSD: 4.4, Přísaha: 5.7 } },
      { pollster: 'Sanep', fieldwork: '23–30 Sep 2021', fieldwork_end: '2021-09-30', values: { ANO: 26.1, SPOLU: 20.7, 'Piráti+STAN': 18.3, SPD: 10.2, KSČM: 5.0, ČSSD: 6.1, Přísaha: 4.0 } },
      { pollster: 'Median', fieldwork: '23–29 Sep 2021', fieldwork_end: '2021-09-29', values: { ANO: 25.2, SPOLU: 20.9, 'Piráti+STAN': 19.4, SPD: 10.1, KSČM: 4.4, ČSSD: 5.6, Přísaha: 3.9 } },
    ],
  },
  {
    id: 'cz-2025',
    election: 'Czech Chamber of Deputies 2025',
    date: '2025-10-03',
    resultsUrl: 'https://www.volby.cz/appdata/ps2025/odata/vysledky.xml',
    pollSource: 'https://en.wikipedia.org/wiki/Opinion_polling_for_the_2025_Czech_parliamentary_election',
    pollBasis: 'Mean of each pollster’s last poll with fieldwork ending 19 Sep 2025 or later (NMS, Ipsos, STEM, Median, STEM/MARK, Lord Ashcroft, Kantar CZ)',
    parties: {
      ANO: 'ANO 2011',
      SPOLU: 'SPOLU (ODS, KDU-ČSL, TOP 09)',
      STAN: 'STAROSTOVÉ A NEZÁVISLÍ',
      Piráti: 'Česká pirátská strana',
      SPD: 'Svoboda a přímá demokracie (SPD)',
      Motoristé: 'Motoristé sobě',
      'Stačilo!': 'Stačilo!',
    },
    polls: [
      { pollster: 'NMS', fieldwork: '24–28 Sep 2025', fieldwork_end: '2025-09-28', values: { SPOLU: 17.8, ANO: 29.5, STAN: 11.8, Piráti: 9.6, SPD: 13.1, Motoristé: 7.7, 'Stačilo!': 7.3 } },
      { pollster: 'Ipsos', fieldwork: '22–28 Sep 2025', fieldwork_end: '2025-09-28', values: { SPOLU: 21.1, ANO: 32.6, STAN: 11.2, Piráti: 8.7, SPD: 10.1, Motoristé: 5.4, 'Stačilo!': 7.7 } },
      { pollster: 'STEM', fieldwork: '20–26 Sep 2025', fieldwork_end: '2025-09-26', values: { SPOLU: 20.5, ANO: 29.3, STAN: 11.7, Piráti: 10.1, SPD: 13.4, Motoristé: 5.9, 'Stačilo!': 5.5 } },
      { pollster: 'Median', fieldwork: '1–25 Sep 2025', fieldwork_end: '2025-09-25', values: { SPOLU: 21.0, ANO: 30.5, STAN: 10.0, Piráti: 10.0, SPD: 13.0, Motoristé: 4.5, 'Stačilo!': 7.0 } },
      { pollster: 'STEM/MARK', fieldwork: '16–22 Sep 2025', fieldwork_end: '2025-09-22', values: { SPOLU: 18.0, ANO: 27.5, STAN: 11.6, Piráti: 11.7, SPD: 12.3, Motoristé: 7.6, 'Stačilo!': 7.9 } },
      { pollster: 'Lord Ashcroft Polls', fieldwork: '8–22 Sep 2025', fieldwork_end: '2025-09-22', values: { SPOLU: 18.5, ANO: 34.6, STAN: 8.6, Piráti: 9.9, SPD: 11.1, Motoristé: 3.7, 'Stačilo!': 7.4 } },
      { pollster: 'Kantar CZ', fieldwork: '1–19 Sep 2025', fieldwork_end: '2025-09-19', values: { SPOLU: 19.5, ANO: 33.0, STAN: 13.0, Piráti: 9.5, SPD: 9.5, Motoristé: 6.0, 'Stačilo!': 6.0 } },
    ],
  },
];

// Brazil: Datafolha's final runoff poll, valid votes (votos válidos), vs TSE result (valid votes).
const BR = [
  {
    id: 'br-2014-runoff',
    election: 'Brazil presidential runoff 2014',
    date: '2014-10-26',
    pollBasis: 'Datafolha final poll, 24–25 Oct 2014, n=19,318, valid votes',
    pollSource: 'https://www.jb.com.br/eleicoes-2014/noticias/2014/10/25/amp/dilma-na-frente-de-aecio-aponta-ultimas-pesquisas-do-ibope-e-datafolha.html',
    resultSource: 'https://www12.senado.leg.br/radio/1/noticia/2014/10/27/presidente-dilma-rousseff-e-reeleita-com-51-64-dos-votos (Dilma 51.64% of valid votes; Aécio = 100 − 51.64)',
    // Datafolha publishes valid-vote shares as whole numbers, so ±0.5 of each error is rounding.
    poll: { Dilma: 52, Aécio: 48 },
    result: { Dilma: 51.64, Aécio: 48.36 },
  },
  {
    id: 'br-2018-runoff',
    election: 'Brazil presidential runoff 2018',
    date: '2018-10-28',
    pollBasis: 'Datafolha final poll, 26–27 Oct 2018, n=18,731, valid votes',
    pollSource: 'https://g1.globo.com/politica/eleicoes/2018/noticia/2018/10/27/datafolha-para-presidente-votos-validos-bolsonaro-55-haddad-45.ghtml (as cited in https://en.wikipedia.org/wiki/Opinion_polling_for_the_2018_Brazilian_presidential_election)',
    resultSource: 'TSE result as listed in the same Wikipedia table (Bolsonaro 55.13%, Haddad 44.87% of valid votes)',
    poll: { Bolsonaro: 55, Haddad: 45 },
    result: { Bolsonaro: 55.13, Haddad: 44.87 },
  },
  {
    id: 'br-2022-runoff',
    election: 'Brazil presidential runoff 2022',
    date: '2022-10-30',
    pollBasis: 'Datafolha final poll, 28–29 Oct 2022, n=8,308, valid votes',
    pollSource: 'https://g1.globo.com/politica/eleicoes/2022/pesquisa-eleitoral/noticia/2022/10/29/datafolha-lula-tem-52percent-dos-votos-validos-no-2o-turno-e-bolsonaro-48percent.ghtml (as cited in https://en.wikipedia.org/wiki/Opinion_polling_for_the_2022_Brazilian_presidential_election)',
    resultSource: 'TSE result as listed in the same Wikipedia table (Lula 50.9%, Bolsonaro 49.1% of valid votes)',
    poll: { Lula: 52, Bolsonaro: 48 },
    result: { Lula: 50.9, Bolsonaro: 49.1 },
  },
];

function parseCzXml(xml) {
  const cr = xml.slice(xml.indexOf('<CR>'));
  const re = /<STRANA KSTRANA="\d+" NAZ_STR="([^"]+)"[^>]*>\s*<HODNOTY_STRANA HLASY="\d+" PROC_HLASU="([\d.]+)"/g;
  const out = {};
  let m;
  while ((m = re.exec(cr))) out[m[1]] = Number(m[2]);
  return out;
}

function errorsFor(id, election, date, poll, result, extra) {
  const parties = Object.keys(result);
  const err = Object.fromEntries(parties.map((p) => [p, round(poll[p] - result[p], 2)]));
  const ranked = [...parties].sort((a, b) => result[b] - result[a]);
  const [a, b] = ranked;
  const leadPoll = poll[a] - poll[b];
  const leadResult = result[a] - result[b];
  return {
    id,
    election,
    date,
    ...extra,
    poll_average: Object.fromEntries(parties.map((p) => [p, round(poll[p], 2)])),
    result: Object.fromEntries(parties.map((p) => [p, result[p]])),
    error_poll_minus_result: err,
    mean_absolute_error: round(mean(Object.values(err).map(Math.abs)), 3),
    lead: { between: `${a} − ${b}`, poll: round(leadPoll, 2), result: round(leadResult, 2), error: round(leadPoll - leadResult, 2) },
    winner_called_correctly: leadPoll > 0,
  };
}

async function main() {
  const rows = [];
  for (const e of CZ) {
    const dest = path.join(DIR, `${e.id}.xml`);
    await download(e.resultsUrl, dest, { force: refresh });
    const all = parseCzXml(fs.readFileSync(dest, 'utf8'));
    const result = {};
    for (const [short, official] of Object.entries(e.parties)) {
      if (all[official] == null) throw new Error(`${e.id}: party not found in results: ${official}`);
      result[short] = all[official];
    }
    const poll = {};
    for (const p of Object.keys(e.parties)) {
      const vals = e.polls.map((x) => x.values[p]).filter((v) => v != null);
      poll[p] = mean(vals);
    }
    rows.push(errorsFor(e.id, e.election, e.date, poll, result, { poll_basis: e.pollBasis, poll_source: e.pollSource, result_source: e.resultsUrl + ' (Czech Statistical Office, official XML)', polls: e.polls }));
  }
  for (const e of BR) {
    rows.push(errorsFor(e.id, e.election, e.date, e.poll, e.result, { poll_basis: e.pollBasis, poll_source: e.pollSource, result_source: e.resultSource }));
  }

  const leadErr = rows.map((r) => r.lead.error);
  const allPartyErr = rows.flatMap((r) => Object.values(r.error_poll_minus_result));
  const cz = rows.filter((r) => r.id.startsWith('cz'));
  const czParty = cz.flatMap((r) => Object.values(r.error_poll_minus_result));
  const br = rows.filter((r) => r.id.startsWith('br'));
  const out = {
    _about: 'Final-poll error vs official result, built by scripts/refdata/poll-error.mjs. Errors are poll minus result in percentage points. Lead = share of the actual winner minus share of the actual runner-up.',
    definitions: {
      mean_absolute_error: 'Mean over the listed parties/candidates of |poll − result|.',
      lead_error: 'Poll lead minus actual lead for the top two finishers. Positive = polls overstated the winner’s margin.',
      sd_lead_error: 'Sample standard deviation (n − 1) of lead errors across elections; rms_lead_error = sqrt(mean of squared lead errors), which also counts systematic bias. Use rms as errorSd in models.mjs.',
    },
    generated: new Date().toISOString().slice(0, 10),
    elections: rows,
    pooled: {
      all: {
        n_elections: rows.length,
        mean_of_mae: round(mean(rows.map((r) => r.mean_absolute_error)), 3),
        mean_lead_error: round(mean(leadErr), 3),
        sd_lead_error: round(sd(leadErr), 3),
        rms_lead_error: round(Math.sqrt(mean(leadErr.map((x) => x * x))), 3),
        mean_abs_lead_error: round(mean(leadErr.map(Math.abs)), 3),
        sd_party_error: round(sd(allPartyErr), 3),
        n_party_errors: allPartyErr.length,
      },
      czech_parliamentary: {
        n_elections: cz.length,
        mean_of_mae: round(mean(cz.map((r) => r.mean_absolute_error)), 3),
        lead_errors: cz.map((r) => r.lead.error),
        rms_lead_error: round(Math.sqrt(mean(cz.map((r) => r.lead.error ** 2))), 3),
        sd_party_error: round(sd(czParty), 3),
        rms_party_error: round(Math.sqrt(mean(czParty.map((x) => x * x))), 3),
        n_party_errors: czParty.length,
        note: 'Small-party errors are large relative to their size (2017 ČSSD +5.1, KSČM +3.7; 2025 SPD +4.0). In 2021 the final polls had ANO 5.2 points ahead and SPOLU won by 0.7 (wrong winner). Czech polls end about a week before the vote because of the 3-day publication ban, which inflates the error relative to final-week polls elsewhere.',
      },
      brazil_datafolha_runoffs: {
        n_elections: br.length,
        lead_errors: br.map((r) => r.lead.error),
        rms_lead_error: round(Math.sqrt(mean(br.map((r) => r.lead.error ** 2))), 3),
        mean_abs_candidate_error: round(mean(br.map((r) => r.mean_absolute_error)), 3),
      },
    },
    not_included: [
      'Serbia 2020/2022/2023, Bulgaria presidential 2016/2021, Israel 2019–2022 (seats by bloc) and US House generic ballot 2018/2022/2024: not compiled in this pass (time limit); no numbers were entered rather than unverified ones.',
    ],
  };
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, 'poll-error.json'), JSON.stringify(out, null, 2) + '\n');
  console.error('wrote pipeline/reference-data/poll-error.json');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
