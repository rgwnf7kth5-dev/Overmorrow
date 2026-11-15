# us-retail-18
- **Claim (interval):** The US Census Bureau's advance estimate puts the month-on-month change in October 2026 retail and food services sales at … %.
- **Criterion:** The seasonally adjusted percent change from September to October 2026 in total retail and food services sales (headline, one decimal), as first published in the Census Bureau's Advance Monthly Sales for Retail and Food Services release (census.gov/retail, marts_current.pdf) on 17 Nov 2026, or as reported that day by AP, Reuters, CNBC or investingLive. Later revisions do not count. If the October advance report is not published by 23:59 ET on 17 Nov 2026, the claim is scored as not held.
- **Event window:** 2026-11-17T08:30-05:00 to 2026-11-17T23:59-05:00 (America/New_York); 08:30 ET = 14:30 CET
- **Evidence expected:** 2026-11-17T14:35+01:00
- **Deadline (resolves by):** 2026-11-19T05:00+01:00
- **Written at:** 2026-11-15T17:57Z

## Schedule
- Census September advance release (CB26-165): "Next release: November 17, 2026"; "The October 2026 Advance Monthly Retail report is scheduled for release on November 17, 2026 at 8:30 a.m. EST." — https://www.census.gov/retail/marts/www/marts_current.pdf (published 2026-10-15 08:30 ET, read 2026-11-15T17:48Z).
- Newsquawk week ahead lists "US Retail Sales (Oct)" on Tuesday — https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs (published 2026-11-13T21:50Z, read 2026-11-15T17:47Z); Forex Fundamentals: "next released on Tue 17 Nov 2026 at 13:30 UTC" — https://forexfundamentals.com/economic-calendar/us-retail-sales (read 2026-11-15T17:49Z).

## Facts
- September 2026 (advance): $745.0bn, +0.8% (±0.4%) m/m, +6.3% y/y; August revised from +1.1% to +1.3% — Census PDF above "up 0.8 percent (±0.4 percent) from the previous month".
- September vs consensus: +0.8% vs +0.3% expected; ex-autos +0.9% vs +0.5%; control group +0.1% vs +0.3%; ex-autos & gasoline +0.2% (gasoline-driven) — investingLive https://investinglive.com/news/us-retails-sales-for-september-0-8-mom-vs-1-1-last-month-0/ (published 2026-10-15T12:31Z, read 2026-11-15T17:49Z).
- Consensus October: Newsquawk "The consensus expects October retail sales to rise +0.2% M/M (prev. 0.8%), with the control group seen rising by +0.4% M/M (prev. 0.1%)"; CNBC/NRF Retail Monitor: total retail spending +0.2% m/m in October, "the slowest pace since November 2025", core +0.3%; BofA card spending per household +5.8% y/y in October (6.2% in September) — Newsquawk URL above.
- Forex Fundamentals shows a forecast of 0% for October — https://forexfundamentals.com/economic-calendar/us-retail-sales (read 2026-11-15T17:49Z) "The market expects 0% for Oct."
- Recent first releases vs forecast (Forex Fundamentals pages, read 2026-11-15T17:50Z): Apr 0.5 vs 0.5 (https://forexfundamentals.com/economic-calendar/us-retail-sales/2026-05-14); May 0.9 vs 0.5 (/2026-06-17); Jun 0.2 vs 0.2 (/2026-07-16); Jul −0.6 vs 0.1 (/2026-08-14); Aug 1.2 vs 0.8 (/2026-09-16); Sep 0.8 vs 0.3 (/2026-10-15).
- Same day: industrial production (Fed) and import/export prices — Newsquawk.

## Base rate
- Own count, 6 releases Apr–Sep 2026: 3 above forecast, 1 below, 2 in line.

## Schedule slip
- Class `stats-release`: `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/55, rate 0.003. Census and calendars agree; no sign of a move.

## Number forecast
- Consensus: +0.2% m/m (Newsquawk, 13 Nov); Forex Fundamentals shows 0.0%.
- Surprise scale 0.42 pt: series.mjs has no US retail key. Own computation from 6 releases above (actual−forecast): 0.0, +0.4, 0.0, −0.7, +0.4, +0.5; RMS 0.42, mean +0.10. Basis "published".
- `node scripts/refdata/models.mjs quantiles 0.2 0.42 1.6` → q10 −0.66, q50 0.20, q90 1.06.

## Baseline
status_quo: unclear — interval claim; release is scheduled and confirmed by Census.

## Risks
- Gasoline prices drove much of September's gain; any October gasoline move swings the headline.
- Auto sales volatility; early holiday promotions (NRF) shifting spending between October and November.
- Consensus sources differ (0.0% vs 0.2%).

## Sources
- https://www.census.gov/retail/marts/www/marts_current.pdf
- https://www.census.gov/retail/release_schedule.html (schedule in Excel files, not read)
- https://www.census.gov/retail/sales.html
- https://www.census.gov/economic-indicators/
- https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs
- https://investinglive.com/news/us-retails-sales-for-september-0-8-mom-vs-1-1-last-month-0/
- https://tradingeconomics.com/united-states/retail-sales/news/592364 (no text)
- https://forexfundamentals.com/economic-calendar/us-retail-sales and dated pages /2026-05-14, /2026-06-17, /2026-07-16, /2026-08-14, /2026-09-16, /2026-10-15
