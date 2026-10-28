# eu-gdp-q3-02
- **Claim:** Eurostat's preliminary flash estimate (30 Oct 2026) puts euro-area GDP growth in the third quarter of 2026 at 0.2% on the previous quarter or higher, i.e. at least the analysts' consensus.
- **Criterion:** YES if the euro-area GDP change, seasonally and calendar adjusted, Q3 2026 vs Q2 2026, as printed to one decimal in Eurostat's preliminary flash estimate released on 30 Oct 2026, is 0.2% or higher. NO if it is 0.1% or lower, or if the release does not take place on 30 Oct 2026 (Luxembourg time). The EU aggregate, the y/y rate and later estimates do not decide. Pending if published but not yet readable.
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-30T23:59:59+01:00 (Europe/Luxembourg; release expected 11:00 CET)
- **Written at:** 2026-10-28T18:25:00Z

## Schedule
- Eurostat news release of 30 Jul 2026 (Q2 preliminary flash) shows in its header "Next release: 30 October 2026" for euro indicators (not tied to GDP explicitly) — https://ec.europa.eu/eurostat/product?code=2-30072026-ap (published 2026-07-30, read 2026-10-28T18:02Z) "Next release: 30 October 2026". Eurostat publishes the quarterly preliminary flash about 30 days after the quarter at 11:00 CET (standard practice). The euro-indicators calendar page (https://ec.europa.eu/eurostat/web/euro-indicators) and the release calendar were blocked tonight (permission timeout), so the 30 Oct 11:00 slot is confirmed only via the Q2 release header and third-party calendars (financecalendar.com, CoinDesk week ahead, per the desk sweep).
## Facts
- Q2 2026 preliminary flash (30 Jul 2026): euro area GDP +0.4% q/q, +1.0% y/y; EU +0.5% q/q, +1.2% y/y; Germany +0.2, France +0.2, Italy +0.2, Spain +0.7 q/q — https://ec.europa.eu/eurostat/product?code=2-30072026-ap (published 2026-07-30 11:00, read 2026-10-28T18:02Z) "GDP up by 0.4% in the euro area and by 0.5% in the EU". First release.
- Q2 2026 revised in the third estimate (7 Sep 2026) to +0.6% q/q, +1.2% y/y; 14 Aug estimate had kept 0.4%. Contributions: net trade +0.9 pp (exports +3.4%), household consumption +0.2 pp, inventories −0.5 pp; Ireland +10.2% q/q after −7.8% in Q1; Germany revised to 0.3%, France to 0.0% — https://tradingeconomics.com/euro-area/gdp-growth/news/581633 (published 2026-09-07, read 2026-10-28T18:05Z) "The Eurozone economy expanded 0.6% in Q2 2026 ... revised up from initial estimates of 0.4%". Revision (third estimate), relayed by Trading Economics.
- Ireland: CSO preliminary GDP page lists Q2 2026 (published 2026-07-29) as latest; Q3 2026 preliminary not yet published when read — https://www.cso.ie/en/statistics/nationalaccounts/preliminarygdpestimate/ (read 2026-10-28T18:13Z). Irish GDP is volatile (multinational sector) and after Q2's large rise a payback in Q3 is possible; the Irish figure feeds into the euro-area flash.
- Germany: Bundesbank October monthly report says real GDP "dürfte ... im dritten Quartal 2026 stagniert haben" (Rhine low water, car-plant shutdowns for EV conversion, energy prices weighing on consumption); Q1 +0.4%, Q2 +0.3% — https://trading-treff.de/wirtschaft/bundesbank-rechnet-nach-stagnation-mit-jahresendspurt (published 2026-10-21 12:27 CEST, read 2026-10-28T18:09Z) "dürfte ... stagniert haben".
- France: Q2 2026 detailed estimate 0.0% q/q after −0.2% in Q1; household purchasing power fell sharply; Q3 first estimate due 30 Oct 07:30 — https://www.insee.fr/en/statistiques/9040046 (published 2026-08-28, read 2026-10-28T18:14Z) "GDP remained stable (+0.0% after -0.2%)".
- Italy Q2 +0.2% q/q confirmed; Confcommercio estimate for Q3 +0.1% q/q (desk sweep, https://www.borsaitaliana.it/borsa/notizie/teleborsa/economia/confcommercio-a-ottobre-inflazione-stimata-al-47-pil-1-su-base-annua-65_2026-10-16_TLB.html, not re-read). Spain Q2 +0.7% q/q.
- National Q3 flashes on the same morning before Eurostat: France 07:30 (INSEE), Germany 10:00 (Destatis); Italy and Spain expected but not confirmed tonight.
- Flash euro-area composite PMI October 51.9 (Sept 53.1); context only, Q4 — https://www.fxstreet.com/news/eurozone-hcob-composite-pmi-declines-to-519-in-october-vs-527-expected-202610230806 (published 2026-10-23 08:06 GMT; from previous edition's dossier, not re-read tonight).
## Base rate
- stats-release-beats-threshold (scheduled release above a threshold near consensus): own record 2 yes / 3 no (pipeline/reference-classes.json). Euro-area flash vs consensus Q1 2023–Q4 2025: flash at or above consensus in 9 of 12 quarters (see below; from memory, not re-verified).
- Derived from the interval claim eu-gdp-q3 (P(value > 0.15)).
## Schedule slip
- stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`, 0/6 own). No sign of a move; Eurostat calendar itself not readable tonight.
## For a number forecast
- Consensus Q3 2026 euro area: +0.2% q/q, +1.1% y/y (previous given as 0.6% q/q, 1.2% y/y) — currencyhedger.com week ahead, https://currencyhedger.com/week-ahead-october-26-30-2026-fed-and-ecb-rate-decisions-us-gdp-and-inflation-big-tech-earnings-and-global-elections/ (published 2026-10-24, read 2026-10-28T18:03Z) "Euro area GDP is forecast to grow 1.1% year-on-year in the third quarter". No range of forecasts found.
- Usual surprise: flash minus consensus for euro-area q/q, Q1 2023–Q4 2025 (12 quarters, compiled from memory of the published flashes and pre-release polls, not re-verified tonight): misses of −0.1, +0.1, −0.1, +0.1, +0.2, +0.1, +0.2, −0.1, +0.2, +0.1, +0.1, +0.1 pp; root-mean-square ≈ 0.13 pp, mean ≈ +0.08 pp (flash more often above consensus, often Ireland). Proposed scale 0.15 pp (rounded up for the Irish risk after Q2's +10%).
- Published to one decimal; the third estimate later often differs by 0.1–0.2 pp (Q2 2026: 0.4 → 0.6), which does not matter here.
## Risks
- Ireland: a large Q3 payback after +10.2% in Q2 could subtract 0.2–0.4 pp from the euro-area figure; equally, Irish surprises pushed past flashes above consensus.
- Germany: stagnation or a small contraction (Bundesbank) vs consensus +0.1.
- France: Q2 already revised to 0.0%; budget turmoil and protests.
- Revision of Q2 levels in the flash changes the q/q base.
- Euro area composition: since Jan 2026 the euro area includes Bulgaria (21 members); the headline euro-area aggregate as printed decides.
- Threshold sits exactly at consensus: a 0.1 print (one tick below) resolves NO.
## Sources
- https://ec.europa.eu/eurostat/product?code=2-30072026-ap
- https://ec.europa.eu/eurostat/web/euro-indicators (blocked, permission timeout)
- https://tradingeconomics.com/euro-area/gdp-growth/news/581633
- https://currencyhedger.com/week-ahead-october-26-30-2026-fed-and-ecb-rate-decisions-us-gdp-and-inflation-big-tech-earnings-and-global-elections/
- https://www.cso.ie/en/statistics/nationalaccounts/preliminarygdpestimate/
- https://trading-treff.de/wirtschaft/bundesbank-rechnet-nach-stagnation-mit-jahresendspurt
- https://www.insee.fr/en/statistiques/9040046
- search results only (not opened): ground.news, hellenicshippingnews, eunews.it on the 7 Sep revision
