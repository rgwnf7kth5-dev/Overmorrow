# cz-gdp-q3-04
- **Claim:** The Czech Statistical Office's preliminary estimate (30 Oct 2026) puts Czech GDP growth in the third quarter of 2026 at 0.4% on the previous quarter or higher (seasonally adjusted).
- **Criterion:** YES if the quarter-on-quarter change in GDP, Q3 2026 vs Q2 2026, adjusted for price, seasonal and calendar effects, as printed to one decimal in ČSÚ's "Předběžný odhad HDP - 3. čtvrtletí 2026" published on 30 Oct 2026, is 0.4 or higher. NO if it is 0.3 or lower, or if the release does not take place on 30 Oct 2026 (Prague time). The y/y rate and later estimates do not decide. Pending if published but not yet readable.
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-30T23:59:59+01:00 (Europe/Prague; release 09:00 CET)
- **Written at:** 2026-10-28T18:27:00Z

Derived from the interval claim cz-gdp-q3; full evidence in data/dossiers/2026-10-31/cz-gdp-q3.md.

## Schedule
- ČSÚ iCal release calendar: "20261030T090000 … Předběžný odhad HDP - 3. čtvrtletí 2026" (Europe/Prague) — https://csu.gov.cz/pdi-ws/external/ics/ri?rocnik=2026 (read 2026-10-28T18:01Z).

## Facts
- Threshold 0.4 = Raiffeisenbank's forecast and the Q2 first estimate. Q2 2026: preliminary +0.4% q/q (30 Jul), +0.4% (28 Aug), revised to +0.3% (30 Sep) — https://csu.gov.cz/rychle-informace/predbezny-odhad-hdp-2-ctvrtleti-2026; https://csu.gov.cz/rychle-informace/tvorba-a-uziti-hdp-2-ctvrtleti-2026; https://uk.investing.com/economic-calendar/gdp-456 (all read 2026-10-28).
- Forecasts: Raiffeisenbank +0.4% q/q, +1.6% y/y, expecting a stock drawdown to weigh — https://www.fxstreet.cz/zpravodajstvi-209602.html (published 2026-10-27 20:20, read 2026-10-28T17:57Z). Trading Economics consensus +0.6%, TE model +0.3% (sweep, not re-read).
- Indicators: August industry +2.6% y/y; retail ex autos +4.3% y/y; October confidence 97.9 (−1.6) — ČSÚ releases listed in the main dossier.

## Base rate
- ČSÚ preliminary q/q at 0.4 or higher in 4 of 8 recent quarters with a verified first print (Q1 2024–Q2 2026, see main dossier).
- In the 4 quarters with a documented pre-release expectation, the preliminary print was below it each time (misses −0.25, −0.1, −0.3, −0.1).

## Schedule slip
- `stats-release`: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`). No sign of a move.

## For a number forecast
- Consensus 0.4 (RB) to 0.6 (TE); usual surprise RMS 0.21 pp on n = 4; scale used 0.3 pp (main dossier).

## Risks
- An exact 0.4 print resolves YES; 0.3 resolves NO — the threshold sits at the central expectation, so rounding decides many outcomes.
- Inventory drawdown, Q2 revision, energy-price shock (main dossier).

## Sources
- https://csu.gov.cz/pdi-ws/external/ics/ri?rocnik=2026
- https://csu.gov.cz/rychle-informace/predbezny-odhad-hdp-2-ctvrtleti-2026
- https://csu.gov.cz/rychle-informace/tvorba-a-uziti-hdp-2-ctvrtleti-2026
- https://uk.investing.com/economic-calendar/gdp-456
- https://www.fxstreet.cz/zpravodajstvi-209602.html
- data/dossiers/2026-10-31/cz-gdp-q3.md
