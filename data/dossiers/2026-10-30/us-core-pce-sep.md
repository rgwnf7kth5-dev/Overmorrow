# us-core-pce-sep
- **Claim:** BEA's Personal Income and Outlays release for September 2026 (29 Oct 2026, 08:30 EDT) puts the core PCE price index (excluding food and energy) at … per cent above its level a year earlier.
- **Criterion:** Value = the 12-month percent change in the PCE price index excluding food and energy for September 2026, as printed (one decimal) in the BEA news release "Personal Income and Outlays, September 2026" published on 29 Oct 2026 ("Excluding food and energy, the PCE price index increased X percent from one year ago"). The monthly change, headline PCE and later revisions do not decide. Void if the release does not take place on 29 Oct 2026 (New York time); pending if published but not yet readable.
- **Event window:** 2026-10-29T00:00:00-04:00 to 2026-10-29T23:59:59-04:00 (release 08:30 EDT = 13:30 CET)
- **Written at:** 2026-10-27T18:25:00Z

## Schedule
- BEA release schedule: "October 29, 2026 (8:30 AM)": advance Q3 GDP and "September 2026 personal income and outlays" — confirmed released together, same slot — https://www.bea.gov/news/schedule (read 2026-10-27T17:55Z).
- BEA core PCE page: next release October 29, 2026 — https://www.bea.gov/data/personal-consumption-expenditures-price-index-excluding-food-and-energy (read 2026-10-27T18:12Z).

## Facts
- August 2026 (first release, published 30 Sep 2026 with the annual update): core PCE +0.2% m/m and +3.0% y/y — BEA https://www.bea.gov/news/2026/personal-income-and-outlays-august-2026 (published 2026-09-30 08:30 EDT, read 2026-10-27T18:13Z) "Excluding food and energy, the PCE price index increased 3.0 percent from one year ago." The release "presents monthly results from the annual update of the National Economic Accounts", revisions from January 2021; its table lists July core PCE at +0.1% m/m.
- Core PCE y/y as first published: Dec-25 3.0, Jan-26 3.1, Feb 3.0, Mar 3.2, Apr 3.3, May 3.4, Jun 3.3, Jul 3.3, Aug 3.0 — https://www.investing.com/economic-calendar/core-pce-price-index-905 (read 2026-10-27T18:11Z). The fall from 3.3 to 3.0 in August came with the annual update (the August row lists "previous" 3.0, i.e. July revised from 3.3 to 3.0).
- Consensus September core PCE y/y: 3.1% — Investing.com (same page, forecast 3.1%, previous 3.0%); LBBW calendar cons 3.1% (sweep agenda, not re-read). No m/m consensus from a named poll found.
- Wells Fargo forecast: core +0.4% m/m, 3.1% y/y; headline +0.5% m/m, 3.7% y/y — https://www.fxstreet.com/analysis/economics-week-ahead-202610252214 (published 2026-10-25 22:14 GMT, read 2026-10-27T18:08Z) "We forecast the headline PCE deflator increased 0.5% in September, with the core measure up 0.4%." Continuum Economics assumes core +0.3% m/m (via https://fattail.ai/q3-gdp-2026-preview/, read 2026-10-27T18:09Z).
- September CPI (BLS, published 14 Oct 2026): all items +0.6% m/m, +3.7% y/y; core (less food and energy) +0.3% m/m, +2.6% y/y — https://www.bls.gov/news.release/cpi.nr0.htm (read 2026-10-27T18:11Z) "The all items less food and energy index rose 2.6 percent over the year." CPI and PPI components feeding the PCE deflator for September are therefore already known, which keeps PCE surprises small. Note core PCE (3.0% in Aug) currently runs above core CPI y/y.
- SPF (14 Aug) median core PCE inflation for Q3 2026: 2.7% annualized — https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/spf-q3-2026 (read 2026-10-27T18:10Z).

## Usual surprise size (first-print y/y minus consensus, Investing.com rows)
| Ref. month | Actual | Consensus | Miss |
|---|---|---|---|
| Dec 2025 | 3.0 | 2.9 | +0.1 |
| Jan 2026 | 3.1 | 3.1 | 0.0 |
| Feb 2026 | 3.0 | 3.0 | 0.0 |
| Mar 2026 | 3.2 | 3.2 | 0.0 |
| Apr 2026 | 3.3 | 3.3 | 0.0 |
| May 2026 | 3.4 | 3.4 | 0.0 |
| Jun 2026 | 3.3 | 3.3 | 0.0 |
| Jul 2026 | 3.3 | 3.3 | 0.0 |
| Aug 2026 | 3.0 | 3.3 | −0.3 (annual-update month) |
- n = 9; RMS 0.105 pp, sd 0.109 (own calculation). Excluding the annual-update month: 1 miss of 0.1 in 8. Scale used: 0.1 pp.

## Base rate
- First-print y/y equalled consensus in 7 of 9 months; 1 above, 1 below. No reference class in pipeline/reference-data.

## Schedule slip
- stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`). No delay notice.

## Risks
- Rounding: 3.05 vs 3.15 boundaries; the y/y figure depends on the revised September 2025 base after the annual update.
- Non-CPI components (portfolio management fees tied to equity prices, healthcare, airfares from PPI) can move core PCE away from what CPI implies.
- Media may lead with m/m or headline PCE; criterion is core y/y only.

## Sources
- https://www.bea.gov/news/schedule
- https://www.bea.gov/data/personal-consumption-expenditures-price-index-excluding-food-and-energy
- https://www.bea.gov/news/2026/personal-income-and-outlays-august-2026
- https://www.investing.com/economic-calendar/core-pce-price-index-905
- https://www.bls.gov/news.release/cpi.nr0.htm
- https://www.fxstreet.com/analysis/economics-week-ahead-202610252214
- https://fattail.ai/q3-gdp-2026-preview/
- https://www.philadelphiafed.org/surveys-and-data/real-time-data-research/spf-q3-2026
