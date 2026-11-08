# us-core-cpi-03-11
- **Claim:** The US Bureau of Labor Statistics reports that core consumer prices (all items less food and energy, seasonally adjusted) rose by 0.3% or more in October 2026 from September.
- **Criterion:** YES if the seasonally adjusted one-month change of the CPI-U "all items less food and energy" index for October 2026, as first published by the BLS on 10 Nov 2026 (bls.gov/news.release/cpi.nr0.htm) and stated to one decimal, is 0.3% or higher. NO if it is 0.2% or lower, or if the BLS does not publish the October CPI on 10 Nov 2026. Later revisions do not count.
- **Deadline:** release 2026-11-10T08:30-05:00 (14:30 CET); window 2026-11-10 00:00 to 23:59 US Eastern
- **Written at (UTC):** 2026-11-08T18:00Z. Read times as stated.
- Derived from interval claim us-core-cpi-oct-11 ({event ">", x 0.25}: a published 0.3 corresponds to an unrounded change of 0.25 or more). Facts, consensus, surprise size, schedule and risks are the same as in data/dossiers/2026-11-11/us-core-cpi-oct-11.md; the key ones are repeated here.

## Schedule
- BLS release calendar lists "Consumer Price Index October 2026 08:30 AM" for November 2026 — https://www.bls.gov/schedule/news_release/ (read 2026-11-08T17:56Z). Tuesday 10 Nov, 8:30 a.m. ET, per https://www.stocktitan.net/articles/october-2026-cpi-preview-no-yearly-rate (published 2026-11-06T15:47Z, read 2026-11-08T17:52Z) and https://mlq.ai/news/coreweave-cisco-and-a-cpi-report-with-no-annual-rate-what-to-watch-in-the-week-of-nov-9/ (published 2026-11-08T14:32-05:00, read 2026-11-08T17:52Z).

## Facts
- September core: +0.3% as published, unrounded +0.33% (August +0.318%), vs +0.2% expected — https://investinglive.com/news/us-september-cpi-vs-3-6-expected-0/ (published 2026-10-14T12:41Z, read 2026-11-08T17:52Z) "Core m/m +0.33% vs +0.2 expected"; BLS: "The index for all items less food and energy rose 0.3 percent in September, as it did in August" — https://www.bls.gov/news.release/cpi.nr0.htm (read 2026-11-08T17:51Z)
- Consensus for October core m/m: 0.2% (Bloomberg survey) — https://mlq.ai/news/coreweave-cisco-and-a-cpi-report-with-no-annual-rate-what-to-watch-in-the-week-of-nov-9/ (read 2026-11-08T17:52Z) "core prices to rise 0.2%"; also https://www.fxempire.com/forecasts/article/the-week-ahead-cpi-and-tech-earnings-test-a-fragile-stock-market-1643118 "Core CPI m/m, forecast 0.2% (prior 0.3%)" (published 2026-11-08T13:58Z, read 2026-11-08T17:52Z).
- RBC Economics (5 Nov) expects core +0.3%: "we expect to see both headline and core inflation rose +0.3% m/m in October" — quoted in https://www.stocktitan.net/articles/october-2026-cpi-preview-no-yearly-rate (read 2026-11-08T17:52Z).
- Cleveland Fed nowcast (a model, not a consensus): core 0.21%, headline 0.24% (6 Nov update) — same Stocktitan page.
- Surprise size (actual minus consensus, core m/m, 2026): Jun -0.22, Jul +0.02, Aug +0.12, Sep +0.13; RMS 0.14 (four investinglive reports, URLs in us-core-cpi-oct-11.md).
- Interval model used for this claim: consensus 0.2, sd 0.14, widened 1.6 → quantiles -0.087 / 0.200 / 0.487 (models.mjs quantiles 0.2 0.14 1.6); derive for ">" 0.25 gives 0.412.

## Base rate
- Own count, 2026 core m/m first prints Jun-Sep: 0.0, 0.2, 0.3, 0.3; 2 of 4 at 0.3 or higher (n=4); last two both 0.3 or more.

## Schedule slip
- slip.mjs class stats-release: current rate 0.003 (own 0/48). No sign of delay. A missed release on 10 Nov would resolve NO under this claim; the interval claim would be void.

## Risks
- Threshold sits just above the Bloomberg consensus (0.2) and below RBC (0.3); consensus unrounded value is probably 0.2-0.25; last two actuals were above the 0.2 consensus.
- Rounding at 0.25 (BLS rounds the published change from index levels, so unrounded 0.25 or more shows as 0.3).
- The missing October 2025 index may add noise to seasonal adjustment.

## Sources
- https://www.bls.gov/news.release/cpi.nr0.htm
- https://www.bls.gov/schedule/news_release/
- https://www.stocktitan.net/articles/october-2026-cpi-preview-no-yearly-rate
- https://mlq.ai/news/coreweave-cisco-and-a-cpi-report-with-no-annual-rate-what-to-watch-in-the-week-of-nov-9/
- https://www.fxempire.com/forecasts/article/the-week-ahead-cpi-and-tech-earnings-test-a-fragile-stock-market-1643118
- https://investinglive.com/news/us-september-cpi-vs-3-6-expected-0/
