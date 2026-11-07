# cn-cpi-oct-10
- **Claim:** China's National Bureau of Statistics puts consumer prices in October 2026 at … % year on year. (Interval claim.)
- **Criterion:** The year-on-year change in the national consumer price index (CPI) for October 2026, in percent, as first published by the National Bureau of Statistics of China (stats.gov.cn, English or Chinese release) between 00:00 and 23:59 Beijing time on 9 November 2026. Later revisions do not count. Void if NBS does not publish the October CPI in that window.
- **Event window:** 2026-11-09T00:00:00+08:00 to 2026-11-09T23:59:00+08:00 (Asia/Shanghai). Release expected 09:30 Beijing = 02:30 CET.
- **Written at:** 2026-11-07T18:00Z. All read times 2026-11-07 between 17:52Z and 17:59Z unless stated.

## Schedule
- dpa-AFX week preview lists "02:30 CHN: Verbraucherpreise 10/26" on Monday 9 Nov — https://live.deutsche-boerse.com/nachrichten/WOCHENVORSCHAU-Termine-bis-13-November-2026-8f37e740-d665-411b-b47a-bfdf89be2552 (published 2026-10-30 17:41 CET, read 17:59Z) "MONTAG, DEN 9. NOVEMBER ... 02:30 CHN: Erzeugerpreise 10/26 02:30 CHN: Verbraucherpreise 10/26".
- Lundgreen's "Next Week in China" — https://www.lundgreensinvestorinsights.com/next-week-in-china-9-13-november-2026/ (published 2026-11-06T04:04Z, read 17:52Z) "9 November: China to report October consumer price index (CPI)".
- Note: the September figures came on Wed 14 Oct, not on the 9th–10th of the month (investingLive, below, published 2026-10-14 01:30 GMT). NBS calendar itself not read (stats.gov.cn unreachable, connection reset). Two independent previews agree on 9 Nov.

## Facts
- September 2026: CPI +0.9% y/y (August 0.8%), +0.2% m/m; core CPI +1.0% y/y; food −1.7% y/y — CGTN https://news.cgtn.com/news/2026-10-14/China-s-CPI-and-PPI-rise-faster-in-September-1RejVMpQwo0/p.html (published 2026-10-14T14:18+08:00, read 17:53Z) "The consumer price index (CPI) rose 0.9% year on year, up from 0.8% in August".
- September came in below expectations: investingLive https://investinglive.com/news/china-september-cpi-0-9-y-y-expected-1-prior-0-8/ (published 2026-10-14T01:30Z, read 17:53Z) "Consumer Price Index (YoY) 0.9% expected 1.0%, prior 0.8%"; "Consumer Price Index (MoM) 0.2% expected 0.3%".
- Forecast for October (Lundgreen's/Yiyi Capital, own forecast, NOT a poll): CPI 0.8% y/y, 0.0% m/m — Lundgreen's (above) "We expect CPI inflation to ease to 0.8 per cent year-on-year from 0.9 per cent in September, with prices unchanged month-on-month."
- Drivers named there: "Continued declines in pork prices weighed down food prices while higher fuel prices constrained spending on travel and discretionary goods"; Golden Week (1–7 Oct) spending front-loaded.
- Background: oil shock from the Iran war; Brent fell about 15% in the week to 7 Nov (world_monday.md, Al Jazeera/Benson Kong sources) — mostly after October, so little effect on the October CPI.
- Reuters/Bloomberg poll consensus: NOT FOUND. Reuters refuses scripted reading; Trading Economics page content hidden (empty body, read 17:53Z); Investing.com and FXStreet calendars HTTP 403.

## Base rate
- No class.

## Schedule slip
- `stats-release`: prior 0.01, own 0/48, rate 0.003 [estimate] (`node scripts/refdata/slip.mjs`, run 2026-11-07T17:50Z).

## Number forecast
- **Consensus:** 0.8% y/y — single named forecast (Lundgreen's Investor Insights with Yiyi Capital, 6 Nov), not a poll. No other published October forecast found within the search budget.
- **Series:** `node scripts/refdata/series.mjs scale china-cpi` → n=0, "published or pooled", pooled factor 1.291 (run 17:57Z). No China CPI series on record.
- **Scale (recommended): 0.23, scale_basis `published`** — RMS of (actual − expected) over four 2026 releases, each pair as published by investingLive:
  - April 2026: 1.2 vs 0.8 → +0.4 — https://investinglive.com/centralbank/china-april-cpi-12-yy-expected-08-prior-05-20260511/ (published 2026-05-11T01:30Z, read 17:54Z) "China April CPI 1.2% y/y (expected 0.8%, prior 0.1%)"
  - June 2026: 1.0 vs 1.2 → −0.2 — https://investinglive.com/news/china-june-2026-cpi-1-y-y-expected-1-2-prior-1-2/ (published 2026-07-09T01:48Z, read 17:54Z) "China June 2026 CPI +1% y/y (expected 1.2%, prior 1.2%)"
  - August 2026: 0.8 vs 0.8 → 0.0 — headline only, Google News RSS (read 17:54Z) "China August CPI 0.8% y/y (expected 0.8%, prior 0.5%) | investingLive" (article not opened)
  - September 2026: 0.9 vs 1.0 → −0.1 — investingLive (above)
  - RMS = sqrt((0.16+0.04+0+0.01)/4) = 0.229. Months not collected: Jan–Mar, May, July (budget).
- **Alternative (pooled):** euro-area HICP flash scale 0.11 (series euro-area-hicp-annual-change-october-2026-flash-estimate-eur, scale used) × 1.291 = 0.14. Narrower than the four sourced China surprises, so not recommended.
- **Suggested quantiles:** `node scripts/refdata/models.mjs quantiles 0.8 0.23 1.6` → q10 0.33, q50 0.80, q90 1.27. (With the pooled 0.14: q10 0.51, q50 0.80, q90 1.09.)
- **Reason to depart from consensus:** none documented. The consensus is one forecaster; September's 0.2% m/m was below expectations, and Lundgreen's sees 0.0% m/m.

## Risks
- Thin consensus (one forecaster, not a poll). A Reuters poll may appear over the weekend; the morning desk should check investingLive's Sunday/Monday preview.
- NBS prints to one decimal.
- Release date taken from two previews, not from the NBS calendar.

## Sources
- https://www.lundgreensinvestorinsights.com/next-week-in-china-9-13-november-2026/
- https://live.deutsche-boerse.com/nachrichten/WOCHENVORSCHAU-Termine-bis-13-November-2026-8f37e740-d665-411b-b47a-bfdf89be2552
- https://news.cgtn.com/news/2026-10-14/China-s-CPI-and-PPI-rise-faster-in-September-1RejVMpQwo0/p.html
- https://investinglive.com/news/china-september-cpi-0-9-y-y-expected-1-prior-0-8/
- https://investinglive.com/news/china-june-2026-cpi-1-y-y-expected-1-2-prior-1-2/
- https://investinglive.com/centralbank/china-april-cpi-12-yy-expected-08-prior-05-20260511/
- https://news.google.com/rss/search?q=China+September+CPI+PPI+2026&hl=en and other Google News RSS queries (headlines)
- Unreachable: stats.gov.cn (connection reset, exit 3); Investing.com, FXStreet calendar (HTTP 403); Trading Economics (empty content); Reuters (not tried, refuses); MarketScreener (login wall).
