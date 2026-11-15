# eu-forecast-18
- **Claim:** The European Commission's Autumn 2026 Economic Forecast, published on Tue 17 Nov 2026, puts euro-area real GDP growth for 2026 at 1.1% or higher (Spring 2026 forecast: 0.9%).
- **Criterion:** YES if the Autumn 2026 Economic Forecast published by the European Commission on 17 Nov 2026 (press release or forecast document on economy-finance.ec.europa.eu / ec.europa.eu/commission/presscorner) states euro-area real GDP growth for 2026 of 1.1% or higher (as printed, one decimal). NO if it states 1.0% or lower, or if the forecast is not published on 17 Nov 2026 (Brussels time).
- **Event window:** 2026-11-17T00:00+01:00 – 2026-11-17T23:59+01:00 (Europe/Brussels; publication expected late morning, around 11:00 CET by the 2025 precedent)
- **Evidence expected:** 2026-11-17T11:00+01:00
- **Deadline (resolves by):** 2026-11-19T05:00+01:00
- **Written at:** 2026-11-15T17:58Z

## Schedule
- Commission DG ECFIN economic forecasts page: "Next autumn forecast on 17th November 2026" — https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/economic-forecasts_en (modified 2026-11-06, read 2026-11-15T17:47Z). Time not stated.
- Precedent: Autumn 2025 forecast came out 17 Nov 2025; Eunews story published 11:05 CET — https://www.eunews.it/en/2025/11/17/eurozone-posts-higher-than-expected-growth-in-2025-1-3-percent-vs-0-9-percent-forecast/ (published 2025-11-17T11:05+01:00, read 2026-11-15T17:48Z).

## Facts
- Spring 2026 forecast: euro area GDP 0.9% in 2026 and 1.2% in 2027 (down from 1.2% and 1.4% in Autumn 2025); EU 1.1% and 1.4%; euro-area inflation 3.0% (2026) and 2.3% (2027) — https://europedirect.ionio.gr/en/news/34765/ (Europe Direct centre relaying the Commission release; read 2026-11-15T17:47Z) "Growth projections for the euro area are similarly revised down, to 0.9% in 2026 and 1.2% in 2027".
- Eurostat GDP and employment flash, Q3 2026 (13 Nov 2026): euro area +0.4% q/q, +1.3% y/y; Q2 +0.6% q/q (+1.2% y/y); Q1 0.0% q/q (+0.6% y/y); Q4 2025 +0.2% q/q (+1.1% y/y). Germany Q3 +0.2, France −0.1, Italy 0.0, Spain +0.6, Ireland +5.5 (Q2 +10.2, Q1 −7.8). Euro-area employment flat in Q3 — https://ec.europa.eu/eurostat/product?code=2-13112026-ap (published 2026-11-13 11:00 CET, read 2026-11-15T17:47Z) "seasonally adjusted GDP increased by 0.4% in the euro area". Second estimate (Q3 preliminary flash of 30 Oct also 0.4%: https://ec.europa.eu/eurostat/product?code=2-30102026-ap, read 17:47Z).
- Q3 flash consensus was 0.2% q/q (desk record, pipeline/reference-data/series.json key euro-area-gdp-q3-2026-change-on-previous-quarter-seasonally-, source currencyhedger.com) — upside surprise of 0.2 pp.
- Arithmetic (desk calculation from the Eurostat y/y figures): average of 2026 Q1–Q3 y/y rates = 1.03%; with Q4 at +0.2% q/q, Q4 y/y ≈ 1.2% and the annual average ≈ 1.1%; with Q4 at 0.0%, ≈ 1.0%. Approximation only (annual figure uses unadjusted/calendar-adjusted data).
- ECB staff projections, September 2026: euro-area real GDP 0.9% in 2026, 1.4% in 2027, 1.5% in 2028; 1.2% in 2026 adjusting for Irish volatility; 2026 revised up 0.1 pp from June; inflation peak 3.6% in Q4 2026 — https://www.ecb.europa.eu/press/projections/html/ecb.projections202609_ecbstaff~8e340fc69d.en.html (published 2026-09-10, read 2026-11-15T17:48Z) "annual real GDP growth of 0.9% in 2026, 1.4% in 2027". Made before the Q3 flash. Next ECB projections 17 Dec.
- IMF World Economic Outlook, October 2026: euro area 1.1% in 2026, 1.2% in 2027; inflation 3.1% (2026), 2.8% (2027); Germany 1.3%, Spain 2.5% — https://www.euronews.com/2026/10/13/imf-forecasts-31-global-growth-in-2026-with-eurozone-at-11 (published 2026-10-13 04:49 CEST, read 2026-11-15T17:48Z) "economic growth in the eurozone will slow to 1.1% this year". IMF's April 2026 figure was 0.9% (headline of WAM story, https://www.wam.ae/en/article/c1913fl-euro-areas-growth-projected-09-202612-2027-imf, page did not render; search result only).
- Euro-area HICP October 2026 flash 4.0% (consensus 3.9%) — desk record, series key euro-area-hicp-annual-change-october-2026-flash-estimate-eur (edition 2026-11-05). Relevant to the inflation figure (Spring: 3.0% for 2026).
- Precedent: Autumn 2025 raised 2025 euro-area growth to 1.3% from 0.9% in spring — Eunews URL above "+1.3 percent vs 0.9 percent forecast".

## Base rate
- Own count, Commission current-year euro-area GDP, Spring → Autumn forecast (2017–2025, excl. 2020): up 2017 (1.7→2.2), 2021 (4.3→5.0), 2022 (2.7→3.2), 2025 (0.9→1.3); down 2018 (2.3→2.1), 2019 (1.2→1.1), 2023 (1.1→0.6); unchanged 2024 (0.8→0.8). Up by ≥0.2 pp: 4 of 8. Only 2025 verified tonight (Eunews); the others are from desk memory, unverified.

## Schedule slip
- Class eu-commission-adoption: 0.072 [estimate] (`node scripts/refdata/slip.mjs eu-commission-adoption`, own 0/4). Arguably closer to stats-release (0.003): the date is fixed on the DG ECFIN page and the forecast has never moved in recent years. No sign of a delay.

## Number forecast
- Not an interval claim. Anchors: ECB Sept 0.9% (1.2% ex-Irish volatility), IMF Oct 1.1%, desk carry-over arithmetic about 1.0–1.1%. Threshold 1.1% sits at the IMF figure and at the top of the carry-over range. The Commission rounds to one decimal; its cut-off date (usually late October) is not stated, so it may or may not include the 30 Oct Q3 flash.

## Baseline
status_quo: unclear — publication on schedule is near certain, but whether the figure is 1.1+ or 1.0 depends on the Commission's Q4 assumption and treatment of Irish data; data since spring (Q2 0.6, Q3 0.4) point upward.

## Risks
- Irish GDP swings (Q1 −7.8%, Q2 +10.2%, Q3 +5.5%) dominate the annual figure; the Commission might use different Irish numbers.
- Energy shock/high inflation (HICP 4.0% in October) may lead to a weak Q4 assumption (0.0–0.1%), giving 1.0%.
- France (−0.1% Q3) and Italy (0.0%) weak.
- Publication time not stated; leaks to media on 16 Nov possible but only the publication decides.

## Sources
- https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/economic-forecasts_en
- https://europedirect.ionio.gr/en/news/34765/
- https://ec.europa.eu/eurostat/product?code=2-13112026-ap
- https://ec.europa.eu/eurostat/product?code=2-30102026-ap
- https://www.ecb.europa.eu/press/projections/html/ecb.projections202609_ecbstaff~8e340fc69d.en.html
- https://www.euronews.com/2026/10/13/imf-forecasts-31-global-growth-in-2026-with-eurozone-at-11
- https://www.eunews.it/en/2025/11/17/eurozone-posts-higher-than-expected-growth-in-2025-1-3-percent-vs-0-9-percent-forecast/
- https://www.wam.ae/en/article/c1913fl-euro-areas-growth-projected-09-202612-2027-imf (did not render)
- https://tradingeconomics.com/world/full-year-gdp-growth/news/591413 (no text)
- https://www.borsaitaliana.it/borsa/notizie/radiocor/economy/dettaglio/eurozone-real-gdp-seen-up-13-in-2025-12-in-2026-14-in-2027-eu-commission-nRC_17112025_1138_249571946.html (redirected to archive)
- https://www.imf.org/-/media/files/publications/weo/2026/october/english/ch1.pdf (refused, 403); https://guardian.ng/... (403); https://www.roic.ai/... (403)
- data/dossiers/2026-10-31/eu-gdp-q3.md; pipeline/reference-data/series.json (desk records)
