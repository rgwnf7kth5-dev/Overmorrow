# us-ppi-oct-14 (interval)
- **Claim:** US producer prices for final demand changed by … % in October 2026 from September (seasonally adjusted), according to the BLS release of 13 November 2026.
- **Criterion:** The headline month-on-month percent change in the Producer Price Index for final demand, seasonally adjusted, for October 2026, as first published in the BLS "Producer Price Index News Release" of 13 Nov 2026 (one decimal); later revisions do not count. Void if the release is not published on 13 Nov 2026 (US Eastern time).
- **Event window:** 2026-11-13T08:30-05:00 to 2026-11-13T23:59-05:00 (America/New_York)
- **Written at:** 2026-11-11T18:05Z

## Schedule
- BLS September PPI release: "The Producer Price Index news release for October 2026 is scheduled to be published on Friday, November 13, 2026, at 8:30 a.m. (ET)." — https://www.bls.gov/news.release/ppi.nr0.htm (published 2026-10-15 08:30 ET, read 2026-11-11T17:55:01Z)
- BLS "Schedule of Selected Releases for November 2026" lists "Producer Price Index October 2026 08:30 AM" (the reader strips the day column) — https://www.bls.gov/schedule/2026/11_sched.htm (read 2026-11-11T17:54:37Z)
- 08:30 ET = 14:30 CET on Fri 13 Nov.

## Facts
- September 2026 (first print, now the latest): final demand +1.3% m/m SA; August +0.5%, July +0.2% (revised) — https://www.bls.gov/news.release/ppi.nr0.htm (published 2026-10-15 08:30 ET, read 2026-11-11T17:54:56Z) "The Producer Price Index for final demand increased 1.3 percent in September, seasonally adjusted ... Final demand prices moved up 0.5 percent in August and 0.2 percent in July."
- September was the largest rise since March 2022; 12-month +6.3% unadjusted — same release "The September increase is the largest advance since rising 1.7 percent in March 2022."
- September drivers: final demand goods +2.6%, energy +10.8%, gasoline +20.3%; services +0.8%, trade margins +1.4% — same release "Over 80 percent of the broad-based rise in September is attributable to the index for final demand energy, which jumped 10.8 percent."
- Final demand less foods, energy and trade services +0.5% in September after +0.3% in August — same release.
- October CPI (released 10 Nov): all items +0.4% m/m SA after +0.6%; energy +0.7% after +5.2%; core +0.3% — https://www.bls.gov/news.release/cpi.nr0.htm (published 2026-11-10 08:30 ET, read 2026-11-11T17:56:04Z) "The index for energy increased 0.7 percent over the month following a 5.2-percent increase in September."
- BLS cannot publish 12-month changes for many October 2026 CPI series because October 2025 data were not collected (shutdown) — same CPI release "BLS did not collect survey data for October 2025 because of a lapse in appropriations." (Relevant to y/y, not to the m/m figure in this claim.)
- Consensus (Bloomberg via TD Economics, table dated 6 Nov, i.e. before the October CPI): "Nov 13 8:30 PPI Final Demand Oct M/M % Chg. 0.4 1.3"; "PPI Ex Food and Energy Oct M/M % Chg. 0.3 0.7" — https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-06/upcoming.htm (published 2026-11-06, read 2026-11-11T17:55:07Z)
- Same consensus 0.4% vs 1.3% in investingLive's week-ahead (per the desk's agenda note, not re-opened tonight) — https://investinglive.com/forex/market-outlook-for-the-week-of-9th-13th-november/

## Consensus and surprise size
- Consensus: +0.4% m/m (Bloomberg median via TD, 6 Nov). No updated survey found after the October CPI.
- Recent consensus vs first print (TD "upcoming" tables for consensus; TD "recent" tables for the first published figure; all read 2026-11-11 ~17:55–17:58Z):
  - Apr 2026 (released 13 May): consensus 0.5, first print 1.4 → +0.9 — .../tables/2026-05-08/upcoming.htm, .../tables/2026-05-15/recent.htm
  - May (11 Jun): 0.7 vs 1.1 → +0.4 — .../2026-06-05/upcoming.htm, .../2026-06-12/recent.htm
  - Jun (15 Jul): −0.1 vs −0.3 → −0.2 — .../2026-07-10/upcoming.htm, .../2026-07-17/recent.htm
  - Jul (13 Aug): 0.2 vs 0.0 → −0.2 — .../2026-08-07/upcoming.htm, .../2026-08-14/recent.htm
  - Aug (10 Sep): 0.4 vs 0.4 → 0.0 — .../2026-09-04/upcoming.htm, .../2026-09-11/recent.htm
  - Sep (15 Oct): 0.5 vs 1.3 → +0.8 — .../2026-10-09/upcoming.htm, .../2026-10-16/recent.htm
  (base URL https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/; earlier 2026 tables did not show the PPI line to the reader.)
- RMS surprise of these six = 0.53 pp (mean +0.28, sd 0.49; own arithmetic). Scale used 0.53, basis "published" (sourced consensus and first prints). Months with energy shocks dominate (April, September).
- `node scripts/refdata/series.mjs` has no PPI series; nearest key us-cpi-u-core-all-items-less-food-and-energy-seasonally-adju (n=1, rms 0.1) × pooled factor 1.284 = 0.13 would understate PPI surprises badly, so not used.
- `node scripts/refdata/models.mjs quantiles 0.4 0.53 1.6` (run 2026-11-11T18:01Z) → q10 −0.69, q50 0.40, q90 1.49.

## Base rate
- No class. In the six months above, the first print was above consensus in 3, below in 2, equal in 1.

## Schedule slip
- `node scripts/refdata/slip.mjs stats-release` (run 2026-11-11T18:00Z) → prior 0.01, own 0/52, rate 0.003 [estimate]. Release date stated in the previous BLS release and in the BLS November schedule. No sign of a federal funding lapse in the sources read.

## Risks
- Consensus dates from 6 Nov, before October CPI (energy +0.7% after +5.2%); a move in the survey median by Friday is possible.
- Trade-services margins swing the headline by several tenths in either direction (September +1.4%).
- Energy: the September PPI energy jump (+10.8%) may partly reverse or extend; the CPI energy index still rose in October.
- The claim is the first print; BLS revises prior months at the same time (do not confuse revised September with October).

## Sources
- https://www.bls.gov/news.release/ppi.nr0.htm
- https://www.bls.gov/schedule/2026/11_sched.htm
- https://www.bls.gov/schedule/news_release/ppi.htm (table not readable to the reader)
- https://www.bls.gov/news.release/cpi.nr0.htm
- https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-06/upcoming.htm
- TD tables 2026-05-08, 05-15, 06-05, 06-12, 07-10, 07-17, 08-07, 08-14, 09-04, 09-11, 10-09, 10-16 (upcoming.htm / recent.htm) under the base URL above
- https://investinglive.com/forex/market-outlook-for-the-week-of-9th-13th-november/ (not re-opened)
