# au-cpi-sep-4
- **Claim:** The ABS's September 2026 CPI release (28 Oct 2026, 11:30 AEDT) puts headline annual inflation for the 12 months to September 2026 at 4.0% or higher (August: 4.0%).
- **Criterion:** YES if the headline annual CPI change (All groups CPI, 12 months to September 2026, original, %) in the ABS release "Consumer Price Index, Australia, September 2026" published on 28 Oct 2026 is 4.0% or higher as printed to one decimal (i.e. above 3.95). NO if it is 3.9% or lower. The September-quarter figure, the trimmed mean and later revisions do not decide. NO if the release does not take place on 28 Oct 2026 (Sydney time); pending if published but not yet readable. Derived from au-cpi-sep (event ">" x = 3.95).
- **Deadline (event window end):** 2026-10-28T23:59:59+11:00 (release slot 2026-10-28T11:30:00+11:00 = 01:30 CET)
- **Written at:** 2026-10-26T19:27:00+01:00

## Schedule
- ABS August 2026 release page names the next release: "Consumer Price Index, Australia, September 2026" on 28 October 2026; quarterly data are added to tables 17 and 18 with the March, June, September and December monthly releases — https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/aug-2026 (published 2026-09-30 11:30 AEST, read 2026-10-26T18:15Z).
- financecalendar.com: Australia CPI (September 2026 reference period) Wednesday 28 Oct 2026 11:30 AEDT, status "Confirmed"; consensus "not yet published" — https://www.financecalendar.com/?p=2195 (read 2026-10-26T18:13Z).
- Headline measure: since Nov 2025 the complete Monthly CPI is the ABS's primary headline CPI measure (ABS media statements, e.g. https://www.abs.gov.au/media-centre/media-statements/abs-announces-monthly-cpi-start-november-2025 — title from search, not re-read tonight). The ABS release schedule page lists dates only to April 2026 — https://www.abs.gov.au/about/key-priorities/big-data-timely-insights-phase-2/complete-monthly-measure-cpi/release-schedule (read 2026-10-26T18:06Z).

## Facts
- August 2026: CPI +4.0% in the 12 months to August (July 3.5%); monthly +0.4% original, +0.7% seasonally adjusted; trimmed mean 3.6% annual, unchanged — ABS https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/aug-2026 (published 2026-09-30, read 2026-10-26T18:15Z) "CPI rose 4.0% in the year to August 2026" (media release title https://www.abs.gov.au/media-centre/media-releases/cpi-rose-40-year-august-2026).
- Annual CPI, ABS table on the same page: Sep-25 3.6, Oct-25 3.8, Nov-25 3.4, Dec-25 3.8, Jan-26 3.8, Feb-26 3.7, Mar-26 4.6, Apr-26 4.2, May-26 4.0, Jun-26 3.8, Jul-26 3.5, Aug-26 4.0 — same URL, read 2026-10-26T18:15Z.
- Base effect: CPI rose 0.5% (monthly, original) in September 2025 — same ABS page. So the annual rate holds near 4.0% only if September 2026 rises by about as much (roughly +0.5% m/m); a smaller rise lowers it (arithmetic from ABS figures).
- Consensus history: August — Reuters poll 4.1%, actual 4.0% (Integrated Finance Group, citing ABC's Michael Janda) https://integratedfinancegroup.com.au/blog/cpi-august-2026-inflation-rba-november/ (published 2026-09-30, read 2026-10-26T18:13Z) "A Reuters poll expected 4.1%"; Trading Economics: "slightly below the market expectation of 4.1%" https://tradingeconomics.com/australia/inflation-cpi/news/587904 (published 2026-09-30, read 2026-10-26T18:16Z). July — "the four major banks had forecast headline CPI of 3.2-3.3%", actual 3.5% — https://blog.orbitremit.com/australia-cpi-july-2026/ (published 2026-08-27, read 2026-10-26T18:13Z).
- Consensus for September 2026: none found from a named poll (financecalendar: "not yet published"). Sweep notes a Trading Economics forecast of 4.1% (via agenda.json, unverified tonight).
- RBA: cash rate 4.60% after September hike, next decision 3 Nov (BabyPips, sweep) https://www.babypips.com/news/headline-australian-cpi-hits-4-0-but-aud-falls-as-rate-hike-pressure-eases-2026-09-30 (not re-read tonight).
- Inconsistency to watch: financecalendar cites an ABS statement giving 3.8% for 12 months to May 2026, while the ABS table shows May 4.0 / June 3.8 — likely a mislabel on the third-party page; the ABS table decides.

## Usual surprise size
- Actual − consensus: Aug 2026 −0.1 (4.0 vs 4.1); Jul 2026 about +0.2 to +0.3 (3.5 vs 3.2–3.3). n = 2, root-mean-square 0.19.
- Month-to-month change in the annual rate, Sep-25 to Aug-26 (ABS table above): changes +0.2, −0.4, +0.4, 0.0, −0.1, +0.9, −0.4, −0.2, −0.2, −0.3, +0.5; sd 0.42 (n = 11; own calculation).
- Scale used: 0.3 percentage points — between the thin consensus-miss record (0.19, n=2) and the sd of monthly changes (0.42, n=11); own derivation, stated in the story JSON.

## Base rate
- Own count from the ABS table: of 11 month-to-month moves, the annual rate fell in 6, rose in 4, unchanged in 1. Annual rate ≥ 4.0 in 4 of the 12 months Sep-25 to Aug-26. No reference class in pipeline/reference-data for this series.

## Schedule slip
- stats-release: 0.010 [estimate] (`node scripts/refdata/slip.mjs stats-release`). ABS release confirmed on its own August release page; no sign of change.

## Risks
- Headline confusion: quarterly CPI (tables 17–18, September quarter vs September quarter 2025) and trimmed mean will be reported alongside; criterion uses the monthly 12-month headline only.
- Media may lead with the quarterly figure or trimmed mean; read the ABS key statistics.
- Revision of August does not affect the September value.

## Sources
- https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/aug-2026
- https://www.abs.gov.au/media-centre/media-releases/cpi-rose-40-year-august-2026 (title only)
- https://www.abs.gov.au/about/key-priorities/big-data-timely-insights-phase-2/complete-monthly-measure-cpi/release-schedule
- https://www.financecalendar.com/?p=2195
- https://integratedfinancegroup.com.au/blog/cpi-august-2026-inflation-rba-november/
- https://blog.orbitremit.com/australia-cpi-july-2026/
- https://tradingeconomics.com/australia/inflation-cpi/news/587904
- Blocked tonight (permission timeout): https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release
