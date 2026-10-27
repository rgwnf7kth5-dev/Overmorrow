# us-gdp-q3-3pct
- **Claim:** The BEA advance estimate of US real GDP growth for Q3 2026 (29 Oct 2026, 08:30 EDT) is 3.0% or higher at a seasonally adjusted annual rate (Q2: 2.2%).
- **Criterion:** YES if the headline real GDP percent change (Q3 2026, saar) in BEA's "Gross Domestic Product, 3rd Quarter 2026 (Advance Estimate)" published on 29 Oct 2026 is 3.0 or higher as printed to one decimal. NO if it is 2.9 or lower, or if the release does not take place on 29 Oct 2026 (New York time). Later revisions do not decide. Pending if published but not yet readable.
- **Derived from:** us-gdp-q3, event "> 2.95" (one-decimal rounding: printed 3.0 ⇔ unrounded ≥ 2.95).
- **Event window:** 2026-10-29T00:00:00-04:00 to 2026-10-29T23:59:59-04:00 (release 08:30 EDT = 13:30 CET)
- **Written at:** 2026-10-27T18:20:00Z

## Schedule
- BEA schedule: "October 29, 2026 (8:30 AM): Advance estimate of third-quarter 2026 GDP" — https://www.bea.gov/news/schedule (read 2026-10-27T17:55Z). Full detail in data/dossiers/2026-10-30/us-gdp-q3.md.

## Facts
- Q2 2026 third estimate (after annual update) 2.2% saar; Q2 advance had been 1.5% — https://www.bea.gov/data/gdp/gross-domestic-product (published 2026-09-30, read 2026-10-27T18:00Z); https://www.investing.com/economic-calendar/gdp-375 (read 2026-10-27T18:02Z).
- Consensus 3.2% (Investing.com; Trading Economics "Consensus 3.2%", https://tradingeconomics.com/united-states/gdp-growth, read 2026-10-27T18:03Z); LBBW calendar consensus 3.0% (sweep, unverified tonight).
- Named forecasts: Wells Fargo 3.2% (https://www.fxstreet.com/analysis/economics-week-ahead-202610252214, published 2026-10-25); Continuum 2.8% (via https://fattail.ai/q3-gdp-2026-preview/); SPF median 2.5% (14 Aug, https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/spf-q3-2026); LBBW 2.5% (sweep).
- Reuters via KSL (27 Oct): "economists forecast the economy grew at more than a 3.0% rate in the third quarter" — https://www.ksl.com/article/51641542/ai-investment-boom-drives-core-capital-goods-orders-shipments-higher-in-september (read 2026-10-27T18:10Z).
- Usual miss of advance estimate vs consensus: sd 0.81 pp, n = 17 (Q2 2022–Q2 2026; table in us-gdp-q3.md). The 3.0 threshold sits 0.2–0.25 pp below the 3.2 consensus, i.e. well inside one usual miss.

## Base rate
- Advance above consensus 8 of 17, below 9 of 17 (same table). Of those 17 misses, 7 were larger than 0.25 pp to the downside (−1.3, −0.9, −0.9, −0.4, −0.5, −1.4, −0.6).

## Schedule slip
- stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`); no delay notice.

## Risks
- Net exports/inventories volatility; post-annual-update seasonal factors; a print of exactly 2.9 vs 3.0 is decided by rounding.
- Consensus spread (3.0 vs 3.2 depending on calendar) sits right on the threshold.

## Sources
- https://www.bea.gov/news/schedule
- https://www.bea.gov/data/gdp/gross-domestic-product
- https://www.investing.com/economic-calendar/gdp-375
- https://tradingeconomics.com/united-states/gdp-growth
- https://www.fxstreet.com/analysis/economics-week-ahead-202610252214
- https://fattail.ai/q3-gdp-2026-preview/
- https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/spf-q3-2026
- https://www.ksl.com/article/51641542/ai-investment-boom-drives-core-capital-goods-orders-shipments-higher-in-september
- https://www.metalsmine.com/calendar/2-us-advance-gdp-qq ; https://energyexch.com/calendar/2-us-advance-gdp-qq
