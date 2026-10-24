# br-to-vicentinho-4 — Vicentinho Júnior wins Tocantins by at least 4 points

- **Claim:** Vicentinho Júnior (PSDB) wins the Tocantins governor runoff on 25 Oct 2026 by at least 4.0 percentage points of valid votes over Professora Dorinha (União Brasil).
- **Criterion:** YES if the TSE results (resultados.tse.jus.br) for the Tocantins governor second round, as published by 26 Oct 2026 12:00 CET, show Vicentinho Júnior's share of valid votes minus Professora Dorinha's share at 4.0 percentage points or more (shares as published by TSE, two decimals). NO if the margin is below 4.0, Dorinha wins, the runoff is postponed, or TSE has not published a result by that time.
- **Deadline:** 2026-10-26T12:00+01:00
- **Written at:** 2026-10-23T19:05+02:00

## Schedule
- Tocantins is one of five states plus the Federal District holding governor runoffs on Sunday 25 Oct 2026 with the presidential runoff (official). https://www.correio24horas.com.br/eleicoes/segundo-turno-para-governador-sera-realizado-em-cinco-estados-e-no-df-neste-domingo-1026 ; https://www.congressoemfoco.com.br/noticia/122616/dorinha-e-vicentinho-vao-ao-2-turno-pelo-governo-do-tocantins
- Tocantins uses Brasília time: voting 08:00–17:00 BRT (12:00–21:00 CET); TSE results from 21:00 CET.

## Facts
- **First round, 4 Oct 2026:** Dorinha 45.52% of valid votes (386,260), Vicentinho 43.94% (372,848) — Dorinha led by 1.58 pp. https://sbtnews.sbt.com.br/noticia/politica/real-time-to-vicentinho-tem-com-52-contra-48-de-dorinha
- **Runoff polls after the first round:**
  | Pollster | Fieldwork | n | MoE | Vicentinho | Dorinha | Other | Valid-vote lead (V − D) | Source |
  |---|---|---|---|---|---|---|---|---|
  | Directa Pesquisas, TO-03128/2026 | 6–9 Oct | 1,200 (in person, 34 municipalities) | ±2.83 | 40.1 | 44.8 | – | −5.6 (47.2–52.8 published) | https://static.poder360.com.br/uploads/2026/10/governador-TO-outubro-pesquisa-instituto-directa-pesquisas.pdf |
  | Quaest, TO-03829/2026 (released 14 Oct) | 10–13 Oct | 1,098 | ±3 | 49 | 42 | undecided 5, blank/null 4 | +7.7 (≈53.8–46.2, computed) | https://www.dgabc.com.br/Noticia/4352782/quaest-to-no-2-turno-vicentinho-junior-tem-49-e-professora-dorinha-42- |
  | Real Time Big Data, TO-09320/2026 (released 20 Oct) | 15–19 Oct | 1,600 | ±2 | – | – | – | +4 (52–48 published) | https://sbtnews.sbt.com.br/noticia/politica/real-time-to-vicentinho-tem-com-52-contra-48-de-dorinha |
- Mean valid-vote lead: two latest polls (Quaest, RTBD) +5.9; all three +2.0. The polls disagree on the winner (Directa has Dorinha ahead).
- Quaest spontaneous question: Vicentinho 42, Dorinha 33, undecided 22; 82% say their choice is final.
- Pre-first-round Quaest (2–3 Oct, n=1,800): runoff scenario 44–44; first round valid Dorinha 46, Vicentinho 41 (result 45.52 / 43.94) → Quaest overstated Dorinha's lead by 3.4 pp. https://static.poder360.com.br/uploads/2026/10/quaest-to-3-out-2026.pdf . Earlier Quaest (19–22 Sept, n=804): Dorinha 42, Vicentinho 29 (total) — Vicentinho closed a large gap late. https://www.oliberal.com/politica/quaest-to-dorinha-sobe-de-37-para-42-e-vicentinho-jr-oscila-de-28-para-29-em-1-turno-1.1172480
- Both candidates back Flávio Bolsonaro for president (O Povo 16 Oct, via sweep: https://mais.opovo.com.br/jornal/politica/2026/10/16/12-governadores-eleitos-e-4-que-lideram-2-turno-apoiam-flavio.html), so presidential coattails do not separate them.

## Base rate
- Class: poll-lead model for a two-candidate state runoff, applied to the margin above the 4.0 threshold. Centre: +5.9 pp (mean of the two latest polls) → excess over threshold +1.9; error sd 6 pp on the lead.
- sd 6 rationale: national Brazilian runoff polls rms lead error 1.345 (Datafolha, n=3) and pooled rms 2.734 (n=6) in pipeline/reference-data/poll-error.json; state polls in this cycle missed the top-two lead by +3.4 (Quaest TO) and +4.2 (Quaest RN) in the first round.
- `node scripts/refdata/models.mjs lead 1.9 6` → 0.6243. Including the Directa poll (centre +2.0, excess −2.0) the same model gives the complement side (about 0.37); the dossier records both inputs.
- Quantiles of the margin, centre 5.9 sd 6: q10 −1.8, q50 5.9, q90 13.6.

## Schedule slip
- Class `election-held`, rate 0.010. No sign of postponement.

## Markets
- Polymarket "Tocantins governor second round margin of victory" (https://polymarket.com/event/tocantins-governor-election-second-round-margin-of-victory), read 2026-10-23T17:02Z: Vicentinho ≥4% Yes 0.595 (vol ~$1.8k); Vicentinho <4% 0.25; Dorinha <4% 0.06; Dorinha 4–7% 0.0065; Dorinha ≥7% 0.054. Thin market.
- Polymarket "Tocantins Governor Election Winner" (https://polymarket.com/event/tocantins-governor-election-winner): Vicentinho 0.865, Dorinha 0.13 (vol ~$22k).
- No bookmaker odds found.

## For number claims
- Poll average of valid-vote lead: +5.9 (Quaest, RTBD) / +2.0 (with Directa). Usual error on the lead in state polls: 3–4 pp observed this cycle (Quaest first-round misses above); national runoff rms 1.3–2.7 (poll-error.json).

## Risks
- Threshold sits inside the poll range: RTBD's +4 is exactly at the line; a 2-point drift either way decides it.
- Directa's poll has Dorinha ahead by 5.6; Dorinha won the first round.
- The final week may bring new polls (none found for 20–23 Oct beyond RTBD).
- Rounding: TSE publishes shares to two decimals; a margin of e.g. 3.99 is NO.
- TSE not publishing by 12:00 CET Monday resolves NO (count usually complete Sunday night).

## Sources
- https://www.correio24horas.com.br/eleicoes/segundo-turno-para-governador-sera-realizado-em-cinco-estados-e-no-df-neste-domingo-1026 (via sweep)
- https://www.congressoemfoco.com.br/noticia/122616/dorinha-e-vicentinho-vao-ao-2-turno-pelo-governo-do-tocantins (search result)
- https://sbtnews.sbt.com.br/noticia/politica/real-time-to-vicentinho-tem-com-52-contra-48-de-dorinha
- https://www.dgabc.com.br/Noticia/4352782/quaest-to-no-2-turno-vicentinho-junior-tem-49-e-professora-dorinha-42-
- https://static.poder360.com.br/uploads/2026/10/governador-TO-outubro-pesquisa-instituto-directa-pesquisas.pdf
- https://static.poder360.com.br/uploads/2026/10/quaest-to-3-out-2026.pdf
- https://www.oliberal.com/politica/quaest-to-dorinha-sobe-de-37-para-42-e-vicentinho-jr-oscila-de-28-para-29-em-1-turno-1.1172480
- https://mais.opovo.com.br/jornal/politica/2026/10/16/12-governadores-eleitos-e-4-que-lideram-2-turno-apoiam-flavio.html (via sweep)
- https://polymarket.com/event/tocantins-governor-election-second-round-margin-of-victory ; https://polymarket.com/event/tocantins-governor-election-winner (via markets.mjs)
- pipeline/reference-data/poll-error.json

## Morning update (24 Oct, 05:10 CEST, overnight check) — poll missed by the evening dossier
- Paraná Pesquisas, fieldwork 14–17 Oct, published 19 Oct (TO-09349/2026): Vicentinho 56.5, Dorinha 43.5 valid votes (+13.0). https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/parana-pesquisas-governador-tocantins-outubro-2026-segundo-turno/
- With it, mean of latest polls ≈ +8.3 (≈ +4.8 including Directa).
- Markets read 2026-10-24T03:01Z: Polymarket Vicentinho wins by ≥4 pts 0.595 (unchanged); Vicentinho to win 0.885; Kalshi Vicentinho 0.87.
