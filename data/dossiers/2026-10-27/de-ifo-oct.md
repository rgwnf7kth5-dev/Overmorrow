# de-ifo-oct (with derived de-ifo-oct-rises)

- **Claim (interval):** The ifo Business Climate Index for Germany for October 2026 stands at …
- **Claim (derived binary, de-ifo-oct-rises):** The ifo Business Climate Index for October 2026 is above the September 2026 value as shown in the October release.
- **Criterion (interval):** The headline ifo Geschäftsklimaindex (business climate, all sectors, 2015=100, seasonally adjusted) for October 2026 in the ifo Institute's release of 26 Oct 2026.
- **Criterion (binary):** YES if the October 2026 headline value in the 26 Oct ifo release is strictly greater than the September 2026 value printed in the same release (one decimal; a tie is NO). NO if equal or lower, or if ifo does not release the October results on 26 Oct.
- **Deadline:** event window 2026-10-26T00:00 to 23:59 Europe/Berlin; evidence 10:30 CET 26 Oct; resolves by 2026-10-27T05:00:00+01:00.
- **Written at:** 2026-10-24T19:10:00+02:00

## Schedule
- ifo's own page: next release "Monday, 26 October 2026, at 10:30" (CET after the 25 Oct clock change); later dates 24 Nov, 17 Dec 2026 — https://www.ifo.de/umfrage/ifo-geschaeftsklima-deutschland (read 2026-10-24T17:04Z).
- Note: a data-calendar page lists 09:00 GMT (= 10:00 CET) — https://tradingeconomics.com/germany/business-confidence (read 2026-10-24T17:05Z); another calendar lists 26 Oct 10:30 CET "Confirmed" — https://www.financecalendar.com/?p=2377 (read 2026-10-24T17:04Z). The primary source (ifo.de) says 10:30. The September release was carried by dpa-AFX at 10:37 CEST on 24 Sep — https://www.fundresearch.de/nachrichten/ifo/2026/09/ifo-geschaeftsklima-auf-hoechstem-stand-seit-ueber-drei-jahren-546655.php — consistent with 10:30.
- Survey of about 9,000 firms; series seasonally adjusted with X-13ARIMA-SEATS (ifo.de page).

## Facts
- September 2026 (first release): business climate 89.9 (from 88.8), current situation 89.5 (from 88.5), expectations 90.4 (from 89.0, August expectations revised from 89.1). Highest since May 2023; fifth rise in a row. Consensus was 89.0 — https://tradingeconomics.com/germany/business-confidence/news/586452 (published 2026-09-24, read 2026-10-24T16:56Z); dpa-AFX: "Analysten hatten im Schnitt mit einem Anstieg auf 89,0 Punkte gerechnet" (fundresearch.de, published 2026-09-24 10:37). Fuest: "Die deutsche Wirtschaft setzt ihren Erholungskurs fort."
- Sectors September: manufacturing −2.8 (from −4.2), services +0.7 (from −2.1), trade −17.2 (from −20.5), construction broadly unchanged (tradingeconomics news 586452).
- 2026 headline (current vintage where known): Jan 87.6; Feb 88.4 (first 88.6); Mar 86.4; Apr 84.4 (lowest since May 2020, after the Iran war began); May 85.0; Jun 85.7 (first 85.6); Jul 86.7 (first 86.6); Aug 88.8; Sep 89.9 — https://admiralmarkets.com/analytics/traders-blog/ifo-business-climate-september-2026 (read 2026-10-24T17:02Z) and ifo.de.
- 2025: Sep 87.7, Oct 88.4 (consensus 88.0; current 85.3, expectations 91.6) — https://investinglive.com/news/germany-october-ifo-business-climate-index-884-vs-880-expected-20251027/ (published 2025-10-27, read 2026-10-24T17:05Z). Other months Oct 2024–Dec 2025 from desk background knowledge, not re-verified this session: 2024 Oct 86.5, Nov 85.6, Dec 84.7; 2025 Jan 85.2, Feb 85.3, Mar 86.7, Apr 86.9, May 87.5, Jun 88.4, Jul 88.6, Aug 89.0, Nov 88.1, Dec 87.6.
- Revisions: the previous month is often revised by 0.1–0.2 (Feb 2026 88.6→88.4, Jun 85.6→85.7, Jul 86.6→86.7; August unrevised at 88.8 in September). The September 89.9 may therefore appear as 89.8–90.1 in the October release; the derived claim uses the value printed there.

## Consensus and usual surprise size
- Consensus for October 2026: 89.8 (calendar consensus on https://tradingeconomics.com/germany/business-confidence, read 2026-10-24T17:05Z; the provider's own forecast 89.5). No Reuters/Bloomberg poll figure found in news copy within budget; a calendar page said on 2 Sep that no consensus had yet been published.
- Recent surprises (actual − consensus): Oct 2025 +0.4; Aug 2026 +1.6 (88.8 vs 87.2); Sep 2026 +0.9 (89.9 vs 89.0). Positive surprises in five-month rise.
- Size of month-on-month changes, 23 changes Nov 2024–Sep 2026 (series above, partly unverified): sd 1.03, mean absolute 0.83; last 12 changes sd 1.23 (includes −2.0, −2.0 in Mar/Apr 2026 and +2.1 in Aug 2026).
- Scale proposed: 1.0 index point (sd of actual − consensus for the ifo headline is typically about 1 point; the three cited surprises have rms 1.1; m/m sd 1.0–1.2). `node scripts/refdata/models.mjs quantiles 89.8 1.0` → q10 88.5, q50 89.8, q90 91.1.

## October news bearing on the survey
- ZEW, 20 Oct: German expectations fell 6.6 points to 28.1 (consensus ~30), first fall in five months; current situation up 11.2 to −35.9; ZEW president Wambach blames high energy prices; European gas price at a new high, Brent above $100 in September — https://www.kettner-edelmetalle.de/news/zew-dampfer-finanzprofis-zweifeln-am-deutschen-aufschwung-20-10-2026 (published 2026-10-20 10:10, read 2026-10-24T17:03Z) (secondary write-up of the ZEW release).
- HCOB/S&P Global flash PMI, 23 Oct: composite 52.8 (Sep 53.8; forecast 53.3), services 51.7 (52.9), manufacturing output 55.1 (56.0); new business weakest in three months; manufacturing input-cost inflation highest since May — https://tradingeconomics.com/germany/composite-pmi (read 2026-10-24T17:05Z). Still expansion.
- ECB hiked 25 bp to 2.5% on 10 Sep 2026 (admiralmarkets page above).
- sentix October: not checked.
- Reading: survey signals for October are softer than September (ZEW expectations down, PMI down but >50), after an ifo level at a three-year high.

## Base rate
- No reference class in pipeline/reference-data/. Empirical: the index rose in each of the last five months; in the 23-change sample, 14 rises, 8 falls, 1 unchanged.

## Schedule slip
- Class stats-release: rate 0.010 [estimate] (`node scripts/refdata/slip.mjs stats-release`, read 2026-10-24). Date confirmed on ifo.de; no sign of change.

## Risks
- Release-hour discrepancy (10:30 per ifo.de vs 10:00 on one calendar) does not affect the day.
- September revision ±0.1–0.2 can decide the binary claim if October is close to 89.9; tie at one decimal is NO.
- Energy price shock and the softer ZEW/PMI could pull expectations down; the consensus near 89.8 implies roughly flat.
- Part of the 2024–2025 history is unverified background; the scale rests mainly on 2026 values and three verified surprises.

## Sources
- https://www.ifo.de/umfrage/ifo-geschaeftsklima-deutschland
- https://tradingeconomics.com/germany/business-confidence
- https://tradingeconomics.com/germany/business-confidence/news/586452
- https://tradingeconomics.com/germany/ifo-expectations
- https://tradingeconomics.com/germany/composite-pmi
- https://it.tradingeconomics.com/germany/composite-pmi
- https://www.fundresearch.de/nachrichten/ifo/2026/09/ifo-geschaeftsklima-auf-hoechstem-stand-seit-ueber-drei-jahren-546655.php
- https://admiralmarkets.com/analytics/traders-blog/ifo-business-climate-september-2026
- https://www.financecalendar.com/?p=2377
- https://investinglive.com/news/germany-october-ifo-business-climate-index-884-vs-880-expected-20251027/
- https://www.kettner-edelmetalle.de/news/zew-dampfer-finanzprofis-zweifeln-am-deutschen-aufschwung-20-10-2026
- https://www.boersen-zeitung.de/kapitalmaerkte/ifo-geschaftsklima-ruckt-in-den-fokus (2019 preview, not relevant)
- https://ms-aktuell.de/?p=170306 (fetch failed)
