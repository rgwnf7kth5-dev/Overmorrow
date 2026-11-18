# uk-retail-21
- **Claim (interval):** The ONS first estimate puts Great Britain's retail sales volumes in October 2026 at … % month on month (seasonally adjusted, total including automotive fuel).
- **Criterion:** Value = month-on-month % change in seasonally adjusted retail sales volumes, all retailing including automotive fuel, Great Britain, October 2026, as first published by the Office for National Statistics in "Retail sales, Great Britain: October 2026" on 20 Nov 2026 (scheduled 07:00 GMT). Later revisions (e.g. in the November release on 18 Dec) do not count. Void if the release does not take place on 20 Nov 2026 (Europe/London); pending if published but not yet readable.
- **Event window:** 2026-11-20T00:00+00:00 – 2026-11-20T23:59+00:00 (Europe/London)
- **Evidence expected:** ONS bulletin 07:00 GMT (08:00 CET); evidence_at 2026-11-20T08:05+01:00
- **Deadline (resolves by):** 2026-11-22T05:00+01:00
- **Written at:** 2026-11-18T18:05Z

## Schedule
- gov.uk release announcement: "Retail sales, Great Britain: October 2026 time series ... Release date: 20 November 2026 7:00am (confirmed)" — https://www.gov.uk/government/statistics/announcements/retail-sales-great-britain-october-2026-time-series (last updated 2026-04-24, read 2026-11-18T17:55Z).
- ONS release page: "Retail sales, Great Britain: October 2026 — This release is not yet published. A first estimate of retail sales in volume and value terms, seasonally and non-seasonally adjusted." — https://www.ons.gov.uk/releases/retailsalesgreatbritainoctober2026 (read 2026-11-18T17:55Z).
- financecalendar: "Friday, 20 November 2026, 07:00 GMT ... Confirmed ... Schedule source checked 18 Nov 2026 11:39 UTC" — https://www.financecalendar.com/event/uk-retail-sales-november-2026/ (modified 2026-11-18T12:19Z, read 2026-11-18T17:53Z).

## Facts
- September 2026 first estimate −0.4% m/m against a −0.1% consensus; August revised up from +0.5% to +0.7% — https://investinglive.com/news/uk-retail-sales-fall-more-than-expected-in-september-complicating-boe-rate-hike-outlook/ (published 2026-10-23T06:23Z, read 2026-11-18T17:55Z) "UK September retail sales -0.4% vs -0.1% m/m expected ... Prior +0.5; revised to +0.7%".
- September y/y +0.8% (vs +1.0% expected); ex auto fuel −0.7% m/m (vs −0.1%), +0.8% y/y — same investingLive page "UK September retail sales (ex autos, fuel) -0.7% vs -0.1% m/m expected".
- Q3 volumes +0.7% q/q; ONS put September weakness down to warm weather delaying winter clothing demand, plus weaker food-store sales; fuel volumes +2.2% m/m — https://www.financecalendar.com/event/uk-retail-sales-october-2026/ (read 2026-11-18T17:53Z) "total sales volumes over the three months to September were still up 0.7% on the previous quarter"; "Fuel sales volumes actually rose 2.2% over the month."
- September's −0.4% is the figure the ONS may revise in the 20 Nov release; the claim counts only October's first estimate.
- Context: ADMISI expects petrol prices and pre-Budget anxiety to restrain spending — https://www.admisi.com/macroeconomics-the-week-ahead-16-20-november-2026/ (published 2026-11-16T10:48Z, read 2026-11-18T17:53Z) "with the jump in petrol prices and perhaps some pre-Budget-related anxiety restraining spending."
- CBI Distributive Trades, October 2026: retail sales balance improved from −55% in September to −10% in October; sales relative to seasonal norms −3% (from −40%) — https://www.cmegroup.com/education/events/econoday/708269 (Econoday, published 2026-10-26, read 2026-11-18T17:55Z) "The retail sales balance improved significantly from minus 55 percent in September to minus 10 percent in October".
- Bank Rate raised to 4.00% on 5 Nov (sweep background) — https://analysisofficial.substack.com/p/global-macro-week-ahead-nov-1620 (via sweep-econ.json, not reopened).

## Consensus
- Total m/m 0.0%: financecalendar (citing Forex Fundamentals and the Forex Factory calendar) "the consensus forecast is a 0.0 % month‑on‑month reading" (above); Forex Fundamentals "the October 2026 figure is due at 07:00 UTC, with a forecast of 0%" — https://forexfundamentals.com/economic-calendar/uk-retail-sales/2026-11-20 (modified 2026-11-18T01:00Z, read 2026-11-18T17:55Z).
- Ex auto fuel m/m +0.1% (ADMISI, above); ex auto fuel y/y +1.8% after 0.8% (Bloomberg via TD Economics) — https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-13/upcoming.htm (read 2026-11-18T17:53Z) "UK Retail Sales Ex Auto Fuel Oct Y/Y % Chg. 1.8 0.8".
- Used: 0.0% (the two total m/m sources are not fully independent: financecalendar cites Forex Fundamentals). No Reuters or Bloomberg total m/m median was readable.
- Forex Fundamentals: "Of the last 12 releases, 8 came in above the forecast and 3 below it."

## Surprise scale
- `node scripts/refdata/series.mjs scale` → no UK retail sales series (n = 0); basis "published or pooled", pooled factor 1.403.
- First-print surprises (actual − consensus, total m/m), Newsquawk headlines:
  - Dec 2025: 0.4 vs −0.1 → +0.5 — https://www.newsquawk.com/headlines/uk-retail-sales-mom-dec-mm-04-vs-exp--01-prev--01-low--07-high-05 (published 2026-01-23T07:20Z, read 2026-11-18T17:54Z)
  - Jan 2026: 1.8 vs 0.2 → +1.6 — https://www.newsquawk.com/headlines/uk-retail-sales-mom-jan-mm-18-vs-exp-02-prev-04-low--06-high-10 (published 2026-02-20T07:20Z, read 2026-11-18T17:54Z)
  - Apr 2026: −1.3 vs −0.6 → −0.7 — https://www.newsquawk.com/headlines/uk-retail-sales-mom-apr-mm--13-vs-exp--06-prev-07-low--14-high-05 (published 2026-05-22T06:20Z, read 2026-11-18T17:54Z)
  - May 2026: 1.2 vs 0.5 → +0.7 — https://www.newsquawk.com/headlines/uk-retail-sales-mom-may-mm-12-vs-exp-05-prev--13-low--05-high-19 (published 2026-06-19T06:20Z, read 2026-11-18T17:54Z)
  - Jun 2026: 1.0 vs 0.2 → +0.8 — https://www.newsquawk.com/headlines/uk-retail-sales-mom-jun-mm-10-vs-exp-02-prev-12 (published 2026-07-24T06:20Z, read 2026-11-18T17:54Z)
  - Jul 2026: −0.5 vs −0.5 → 0.0 — https://www.newsquawk.com/headlines/uk-retail-sales-jul-mm--05-vs-exp--05-prev-07 (published 2026-08-21T06:20Z, read 2026-11-18T17:54Z)
  - Aug 2026: 0.5 vs −0.2 → +0.7 — https://www.newsquawk.com/headlines/uk-retail-sales-aug-mm-05-vs-exp--02-prev--05 (published 2026-09-18T06:20Z, read 2026-11-18T17:54Z)
  - Sep 2026: −0.4 vs −0.1 → −0.3 — https://www.newsquawk.com/headlines/uk-retail-sales-sep-mm--04-vs-exp--01-prev-07 (published 2026-10-23T06:20Z, read 2026-11-18T17:54Z)
  - (Feb and Mar 2026 not found; not used.)
- RMS of the eight surprises = 0.79 pp (mean +0.41, mean absolute 0.66). Pooled basis: scale = 1.403 × 0.79 = 1.11 pp. scale_basis: pooled. The surprises lean positive (5 above, 1 zero, 2 below; mean +0.41), consistent with Forex Fundamentals' count above.

## Base rate
- None in pipeline/reference-data applies.

## Schedule slip
- slip_class: stats-release. `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/61, rate 0.002 [estimate]. Release marked "confirmed" on gov.uk; no sign of a move.

## Risks
- Weather and timing of seasonal events (Halloween, early Black Friday promotions) move the monthly figure; September's miss was attributed to warm weather, so a weather-driven rebound in clothing is possible.
- Fuel volumes: sharply higher petrol prices could cut fuel volumes, which are in the total but not the ex-fuel figure.
- Seasonal adjustment and the sample of about 5,000 businesses make this one of the noisier UK series; the consensus is thinly sourced.
- Revisions to September do not affect the claim but will shape the headline coverage.

## Sources
- https://www.gov.uk/government/statistics/announcements/retail-sales-great-britain-october-2026-time-series
- https://www.ons.gov.uk/releases/retailsalesgreatbritainoctober2026
- https://www.financecalendar.com/event/uk-retail-sales-november-2026/
- https://www.financecalendar.com/event/uk-retail-sales-october-2026/
- https://www.financecalendar.com/event/uk-retail-sales-september-2026/
- https://forexfundamentals.com/economic-calendar/uk-retail-sales/2026-11-20
- https://www.admisi.com/macroeconomics-the-week-ahead-16-20-november-2026/
- https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-13/upcoming.htm
- https://investinglive.com/news/uk-retail-sales-fall-more-than-expected-in-september-complicating-boe-rate-hike-outlook/
- https://www.cmegroup.com/education/events/econoday/708269
- Newsquawk headlines listed above (eight pages)
