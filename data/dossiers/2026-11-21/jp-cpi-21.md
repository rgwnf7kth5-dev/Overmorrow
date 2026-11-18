# jp-cpi-21
- **Claim (interval):** Japan's national consumer price index for October 2026, published by the Statistics Bureau on 20 Nov 2026, shows headline (all items) inflation of … % year on year.
- **Criterion:** Value = year-on-year % change of the all-items national CPI for October 2026, as first published by the Statistics Bureau of Japan (Ministry of Internal Affairs and Communications) on 20 Nov 2026 (scheduled 08:30 JST), to one decimal place as published. The ex-fresh-food ("core") and ex-fresh-food-and-energy measures do not count. Void if the release does not take place on 20 Nov 2026 (Asia/Tokyo); pending if published but not yet readable.
- **Event window:** 2026-11-20T00:00+09:00 – 2026-11-20T23:59+09:00 (Asia/Tokyo)
- **Evidence expected:** Statistics Bureau release 08:30 JST (00:30 CET on 20 Nov, 23:30 GMT on 19 Nov); evidence_at 2026-11-20T00:35+01:00
- **Deadline (resolves by):** 2026-11-22T05:00+01:00
- **Written at:** 2026-11-18T18:10Z

## Schedule
- financecalendar: "Japan CPI — 2026-10: Friday, 20 November 2026, 08:30 JST · Asia/Tokyo (19 Nov 23:30 London). Confirmed ... Schedule source checked 18 Nov 2026 11:39 UTC" — https://www.financecalendar.com/event/japan-cpi-november-2026/ (modified 2026-11-18T12:19Z, read 2026-11-18T17:53Z).
- ADMISI week ahead lists Japan's national CPI on Friday — https://www.admisi.com/macroeconomics-the-week-ahead-16-20-november-2026/ (published 2026-11-16T10:48Z, read 2026-11-18T17:53Z) "Friday's CPI is expected to echo Tokyo CPI".
- TD Economics calendar: "Nov 19 18:30 [ET] JN National Consumer Price Index Oct" (= 08:30 JST 20 Nov) — https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-13/upcoming.htm (read 2026-11-18T17:53Z).
- The Statistics Bureau's own schedule page (https://www.stat.go.jp/english/data/cpi/1581-z.html, read 2026-11-18T17:55Z) only points to a "Schedule of Release" that was not reachable by the reader; date not confirmed at the primary source.

## Facts
- September 2026 headline CPI 2.1% y/y, in line with 2.1% consensus (August 1.9%) — https://www.newsquawk.com/headlines/japanese-cpi-sep-yy-21-vs-exp-21-prev-19 (published 2026-10-22T23:50Z, read 2026-11-18T17:56Z) "Japanese CPI (Sep YY) 2.1% vs. Exp. 2.1% (Prev. 1.9%)"; also https://investinglive.com/news/japan-september-2026-headline-cpi-2-1-y-y-expected-2-1/ (published 2026-10-22T23:30Z, read 2026-11-18T17:56Z). First release; no revision of September found.
- September core (ex fresh food) 2.1% y/y, in line, first time above 2% since December — https://www.financecalendar.com/event/japan-cpi-october-2026/ (read 2026-11-18T17:54Z) "Japan's core CPI rose 2.1% year-on-year in September 2026, matching the consensus forecast".
- September ex fresh food and energy 2.4% y/y vs 2.3% expected — https://www.newsquawk.com/headlines/japanese-cpi-ex-food-and-energy-sep-yy-24-vs-exp-23-prev-19 (published 2026-10-22T23:50Z, read 2026-11-18T17:56Z).
- Tokyo October core CPI 2.6% y/y, in line, from 2.7% — https://www.newsquawk.com/headlines/japanese-tokyo-core-cpi-oct-yy-26-vs-exp-26-prev-27 (published 2026-10-29T23:50Z, read 2026-11-18T17:56Z) "Japanese Tokyo Core CPI (Oct YY) 2.6% vs. Exp. 2.6% (Prev. 2.7%)".
- Drivers named for October: higher energy prices and a weak yen; ADMISI says the release keeps the BoJ "on track for a December rate hike" — ADMISI (above) "with higher energy prices and a weak JPY pushing headline up to 2.6% ... from 2.1%, though the core ex-food & energy measure is seen unchanged at 2.4%, and per se keeping the BoJ on track for a December rate hike."

## Consensus
- Headline 2.6% y/y (Econoday): financecalendar "The consensus from a poll summarised by Econoday sees Japan's headline consumer price index (CPI) rising to 2.6 % year‑on‑year in October, with core CPI excluding fresh food at 2.4 %" (above); ADMISI 2.6% (above).
- Headline 2.5% y/y (Bloomberg via TD Economics): "JN National Consumer Price Index Oct Y/Y % Chg. 2.5 2.1" (above).
- Used: 2.55% = midpoint of the two published figures (range 2.5–2.6).
- Core ex fresh food: 2.4% (Econoday via financecalendar). Ex fresh food and energy: 2.4%, unchanged (ADMISI). Note: the financecalendar page also says elsewhere that no major-poll consensus was published "at the time of writing" (an older paragraph of the same page).

## Surprise scale
- `node scripts/refdata/series.mjs scale` → no Japan CPI series (n = 0); basis "published or pooled", pooled factor 1.403.
- First-print headline y/y surprises (actual − consensus):
  - Dec 2025: 2.1 vs 2.2 → −0.1 — https://www.newsquawk.com/headlines/japanese-inflation-rate-yoy-dec-yy-21-exp-22-prev-29 (published 2026-01-22T23:50Z, read 2026-11-18T17:56Z)
  - Jan 2026: 1.5 vs 1.6 → −0.1 — https://www.newsquawk.com/headlines/japanese-national-cpi-yy-jan-15-vs-exp-16-prev-21 (published 2026-02-19T23:50Z, read 2026-11-18T17:56Z)
  - Apr 2026: 1.4 vs 1.8 → −0.4 — https://www.newsquawk.com/headlines/japanese-inflation-rate-yoy-apr-yy-14-vs-exp-18-prev-15 (published 2026-05-21T23:50Z, read 2026-11-18T17:56Z)
  - Jun 2026: 1.7 vs 1.7 → 0.0 — https://www.newsquawk.com/headlines/japanese-inflation-rate-yoy-jun-yy-17-vs-exp-17-prev-15 (published 2026-07-23T23:50Z, read 2026-11-18T17:56Z)
  - Aug 2026: 1.9 vs 2.0 → −0.1 — https://investinglive.com/news/japan-august-inflation-headline-cpi-y-y-expected-2/ (published 2026-09-17T23:30Z, read 2026-11-18T17:56Z)
  - Sep 2026: 2.1 vs 2.1 → 0.0 — Newsquawk and investingLive (above)
  - (Feb, Mar, May, Jul 2026: headline consensus not found; July's investingLive headline is ambiguous between headline and core; not used.)
- RMS of the six surprises = 0.18 pp (mean −0.12, mean absolute 0.12). Pooled basis: scale = 1.403 × 0.18 = 0.25 pp. scale_basis: pooled. All six surprises were at or below consensus. The figure is published to one decimal, so the outcome moves in 0.1 steps.

## Base rate
- None in pipeline/reference-data applies.

## Schedule slip
- slip_class: stats-release. `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/61, rate 0.002 [estimate]. No sign of a move.

## Risks
- Energy: the size of the energy pass-through (and any government energy subsidies switching on or off) drives the headline more than core-core.
- Fresh food prices are volatile and in the headline but not core.
- The two consensus figures differ (2.5 vs 2.6); recent first prints have come in at or below consensus.

## Sources
- https://www.financecalendar.com/event/japan-cpi-november-2026/
- https://www.financecalendar.com/event/japan-cpi-october-2026/
- https://www.financecalendar.com/event/japan-cpi-september-2026/
- https://www.admisi.com/macroeconomics-the-week-ahead-16-20-november-2026/
- https://economics.td.com/domains/economics.td.com/documents/reports/bottom-line/tables/2026-11-13/upcoming.htm
- https://www.stat.go.jp/english/data/cpi/1581-z.html
- https://investinglive.com/news/japan-september-2026-headline-cpi-2-1-y-y-expected-2-1/
- https://investinglive.com/news/japan-august-inflation-headline-cpi-y-y-expected-2/
- https://investinglive.com/news/japan-july-headline-cpi-1-8-y-y-expected-1-8/
- Newsquawk headlines listed above (seven pages)
