# cz-confidence-oct (with derived cz-confidence-oct-rises)

- **Claim (interval):** ČSÚ's composite confidence indicator (souhrnný indikátor důvěry, seasonally adjusted base index) for October 2026 stands at …
- **Claim (derived binary, cz-confidence-oct-rises):** The October 2026 composite confidence indicator is above the September 2026 value as shown in the same October release.
- **Criterion (interval):** The October 2026 value of the seasonally adjusted composite confidence indicator (souhrnný indikátor důvěry, base index) in ČSÚ's "Konjunkturální průzkumy – říjen 2026" release, published on 26 Oct 2026.
- **Criterion (binary):** YES if the October 2026 composite value in that release is strictly greater than the September 2026 value as printed in the same release (Graf 1 / Tab. 1, one decimal; a tie is NO). Equivalently, ČSÚ's stated month-on-month change is positive. NO if the October value is equal or lower, or if ČSÚ does not publish the October survey on 26 Oct. If the release is published but cannot be read, the claim stays pending.
- **Deadline:** event window 2026-10-26T00:00 to 23:59 Europe/Prague; evidence ~09:00 CET 26 Oct; resolves by 2026-10-27T05:00:00+01:00.
- **Written at:** 2026-10-24T19:05:00+02:00

## Schedule
- ČSÚ September release states the next release date: "26. 10. 2026" — https://csu.gov.cz/rychle-informace/konjunkturalni-pruzkumy-zari-2026 (published 2026-09-24, read 2026-10-24T16:55Z).
- Release hour: not stated on the release page or on the time-series product page (https://csu.gov.cz/produkty/kpr_cr, read 2026-10-24T17:00Z). Precedent: ČTK story on the December 2023 survey timestamped "Vydáno: 27.12.2023, 09:30", saying ČSÚ published "dnes na webu" — https://www.ceskenoviny.cz/zpravy/2458523 (read 2026-10-24T17:00Z). ČSÚ press releases normally appear at 09:00 CET; treat 09:00 as expected, 10:00 as possible.
- Fieldwork for September: businesses 1–17 Sep, consumers 1–15 Sep 2026 (same release). October fieldwork will be roughly 1–17 Oct.

## Definition
- Indicators are "bazické indexy" (base indices) of confidence balances. In Tab. 1 (kpr092426.xlsx) the column "Průměr / Average" for 01/2003–12/2025 equals 100 for every indicator, i.e. base = long-term average 2003–2025 = 100 (not 2005=100). Composite record low 77.6 (05/2020), high 113.8 (02/2007).
- Headline series in Graf 1 ("Sezónně očištěné indikátory důvěry, bazické indexy") are seasonally adjusted — https://csu.gov.cz/docs/107532/6645986f-3a41-af75-92ba-1f9a56fcd582/gkpr092426_1.xlsx?version=1.0 (read 2026-10-24T16:57Z).
- Composite = weighted combination of business (industry, construction, trade, selected services) and consumer indicators.

## Facts
- September 2026 (first release): composite 99.5 (−1.0 m/m), business 98.4 (−1.8), consumer 105.1 (+2.8) — https://csu.gov.cz/rychle-informace/konjunkturalni-pruzkumy-zari-2026 (published 2026-09-24, read 2026-10-24T16:55Z). Business fell in services (−2.3), industry (−2.0), construction (−0.6); rose in trade (+1.7). ČSÚ: decline mainly from "a sharp drop in demand in industry" and worse sentiment in services; consumers less worried about the economy, fewer planning major purchases.
- August 2026 (first release): composite 100.5 (−0.6), business 100.2 (0.0), consumer 102.3 (−3.3) — https://csu.gov.cz/rychle-informace/konjunkturalni-pruzkumy-srpen-2026 (published 2026-08-24, read 2026-10-24T17:00Z). Same values in the September vintage of Graf 1, so no revision to August in September.
- Composite, seasonally adjusted, Graf 1 September vintage (one decimal): 2024-09 97.2; 10 97.0; 11 98.2; 12 97.7; 2025-01 97.4; 02 97.8; 03 99.5; 04 96.7; 05 101.0; 06 100.1; 07 99.7; 08 101.1; 09 101.9; 10 104.0; 11 101.9; 12 100.2; 2026-01 100.2; 02 101.1; 03 102.1; 04 101.3; 05 99.7; 06 101.0; 07 101.1; 08 100.5; 09 99.5.
- Last 24 m/m changes (Oct 2024–Sep 2026): −0.2, +1.2, −0.5, −0.3, +0.4, +1.7, −2.8, +4.3, −0.9, −0.4, +1.4, +0.8, +2.1, −2.1, −1.7, 0.0, +0.9, +1.0, −0.8, −1.6, +1.3, +0.1, −0.6, −1.0. sd 1.54 (sample), mean absolute change 1.17; 11 rises, 12 falls, 1 unchanged.
- Longer history: sd of m/m change 2.07 over the last 60 months, 2.20 over all 284 months since 2003 (includes 2008–09 and 2020).
- October m/m changes 2003–2025 (Sep→Oct, current vintage): +1.9, +0.4, +1.3, +0.8, −0.1, −2.9, −0.6, −0.1, +3.0, −0.3, +1.7, −0.1, −0.6, −0.1, +0.6, −0.1, −1.3, −4.0, −0.7, −0.3, +3.5, −0.2, +2.1 — 9 rises, 14 falls, no clear seasonal pattern left after adjustment.
- Revisions: seasonal re-estimation moves earlier months slightly; e.g. October 2024 was first published at 96.8 and stands at 97.0 in the current vintage (+0.2). The last two months (July 101.1, August 100.5) were unchanged between the August and September releases. So the September 99.5 may be revised by about ±0.1–0.2 in the October release; the derived claim compares with the September value as printed in the October release.
- Consumer indicator was 102.3 in August after 106.5 (Jun) and 105.6 (Jul); 105.1 in September. Business indicator 98.4 is the lowest since mid-2025 (98.0 Dec 2025).

## Consensus and usual surprise size
- Analysts' consensus: none found. Czech banks do not routinely publish forecasts of the ČSÚ confidence indicators; no poll located. Naive anchor: last value 99.5.
- Usual size of move: sd of month-on-month change of the composite over the last 24 months = 1.5 index points (computed from ČSÚ Graf 1, September 2026 vintage). With no consensus, this m/m sd is the scale. `node scripts/refdata/models.mjs quantiles 99.5 1.5` → q10 97.6, q50 99.5, q90 101.4 (Normal starting point centred on the last value).

## Context for October sentiment
- Energy shock continuing: European gas price at a new high and Brent above $100 in September after a renewed Gulf escalation; ZEW president cites high energy prices hurting real incomes and consumption (ZEW German expectations fell 6.6 pts to 28.1 in October, published 20 Oct) — https://www.kettner-edelmetalle.de/news/zew-dampfer-finanzprofis-zweifeln-am-deutschen-aufschwung-20-10-2026 (published 2026-10-20 10:10, read 2026-10-24T17:03Z) "fiel um 6,6 Punkte auf 28,1".
- German flash composite PMI for October 52.8 (from 53.8), services 51.7 (from 52.9), new business weakest in three months — https://tradingeconomics.com/germany/composite-pmi (published 2026-10-23, read 2026-10-24T17:05Z). Germany is the main export destination for Czech industry, which reported a sharp drop in demand in September.
- ECB raised its key rate by 25 bp to 2.5% on 10 Sep 2026 (https://admiralmarkets.com/analytics/traders-blog/ifo-business-climate-september-2026, read 2026-10-24T17:02Z).
- Czech-specific October news (inflation, fuel prices, the 2027 budget debate) not checked in this session for lack of search budget.

## Base rate
- No reference class in pipeline/reference-data/. Empirical: of the last 24 monthly changes, 11 were rises (46%); of the 23 October changes since 2004, 9 were rises.

## Schedule slip
- Class stats-release: rate 0.010 [estimate] (`node scripts/refdata/slip.mjs stats-release`, read 2026-10-24). Date stated by ČSÚ in the September release; no sign of change.

## Risks
- Release hour not confirmed (09:00 assumed).
- The September value may be revised by ~0.1–0.2 in the October release; the binary claim is judged against the revised September figure in the October release.
- Ties at one decimal (unchanged) resolve NO for the derived claim.
- Business and consumer parts often move in opposite directions (as in September), so the composite change is often small; the 2025 sample includes a +4.3 outlier (May 2025).

## Sources
- https://csu.gov.cz/rychle-informace/konjunkturalni-pruzkumy-zari-2026
- https://csu.gov.cz/docs/107532/6645986f-3a41-af75-92ba-1f9a56fcd582/gkpr092426_1.xlsx?version=1.0
- https://csu.gov.cz/docs/107532/b336ce9d-2600-f453-6fb5-f7d83ba6f340/kpr092426.xlsx?version=1.0
- https://csu.gov.cz/rychle-informace/konjunkturalni-pruzkumy-srpen-2026
- https://csu.gov.cz/produkty/kpr_cr
- https://www.ceskenoviny.cz/zpravy/2458523
- https://www.kettner-edelmetalle.de/news/zew-dampfer-finanzprofis-zweifeln-am-deutschen-aufschwung-20-10-2026
- https://tradingeconomics.com/germany/composite-pmi
- https://admiralmarkets.com/analytics/traders-blog/ifo-business-climate-september-2026
- A financial news portal's page on the confidence indicator (series text, used only as a cross-check of first-release values such as October 2024 at 96.8).
