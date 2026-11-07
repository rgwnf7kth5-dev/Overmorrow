# cn-ppi-oct-10
- **Claim:** China's National Bureau of Statistics puts producer (factory-gate) prices in October 2026 at … % year on year. (Interval claim.)
- **Criterion:** The year-on-year change in the producer price index for industrial products (PPI) for October 2026, in percent, as first published by the National Bureau of Statistics of China between 00:00 and 23:59 Beijing time on 9 November 2026. Later revisions do not count. Void if NBS does not publish the October PPI in that window.
- **Event window:** 2026-11-09T00:00:00+08:00 to 2026-11-09T23:59:00+08:00 (Asia/Shanghai). Release expected 09:30 Beijing = 02:30 CET, together with CPI.
- **Written at:** 2026-11-07T18:00Z. All read times 2026-11-07 between 17:52Z and 17:59Z.

## Schedule
- dpa-AFX week preview — https://live.deutsche-boerse.com/nachrichten/WOCHENVORSCHAU-Termine-bis-13-November-2026-8f37e740-d665-411b-b47a-bfdf89be2552 (published 2026-10-30 17:41 CET, read 17:59Z) "02:30 CHN: Erzeugerpreise 10/26".
- Lundgreen's — https://www.lundgreensinvestorinsights.com/next-week-in-china-9-13-november-2026/ (published 2026-11-06T04:04Z, read 17:52Z) "9 November: China to report October producer price index (PPI)".
- NBS calendar not read (stats.gov.cn connection reset).

## Facts
- September 2026: PPI +5.0% y/y (August 3.8%), +1.2% m/m — CGTN https://news.cgtn.com/news/2026-10-14/China-s-CPI-and-PPI-rise-faster-in-September-1RejVMpQwo0/p.html (published 2026-10-14T14:18+08:00, read 17:53Z) "the producer price index (PPI) increased 5%, accelerating from 3.8%"; "Month on month ... the PPI increased 1.2%".
- September beat expectations by 0.5 point — investingLive https://investinglive.com/news/china-september-cpi-0-9-y-y-expected-1-prior-0-8/ (published 2026-10-14T01:30Z, read 17:53Z) "Producer Price Index (YoY) 5% expected 4.5%, prior 3.8%".
- Headline (Google News RSS, read 17:53Z): "China's producer prices rise at fastest pace since June 2022, beating expectations | CNBC" (13 Oct 2026 item date).
- Forecast for October (Lundgreen's/Yiyi Capital, own forecast, NOT a poll): PPI 5.2% y/y, +0.4% m/m — Lundgreen's (above) "PPI inflation is expected to rise to 5.2 per cent from 5 per cent, although monthly price growth is likely to moderate to 0.4 per cent from 1.2 per cent."
- Drivers named there: "Industrial prices found support in elevated crude oil prices amid recurring geopolitical disruptions in the Middle East. Seasonal restocking during the September-October construction peak also contributed".
- Brent fell about 15% in the week to 7 Nov (world_monday.md) — that is November, outside the October index.
- Poll consensus: NOT FOUND (same access failures as cn-cpi-oct-10).

## Base rate
- No class.

## Schedule slip
- `stats-release`: prior 0.01, own 0/48, rate 0.003 [estimate] (`node scripts/refdata/slip.mjs`, run 2026-11-07T17:50Z).

## Number forecast
- **Consensus:** 5.2% y/y — single named forecast (Lundgreen's, 6 Nov), not a poll.
- **Series:** `node scripts/refdata/series.mjs scale china-ppi` → n=0, "published or pooled", pooled factor 1.291 (run 17:57Z).
- **Scale (recommended): 0.80, scale_basis `published`** — RMS of (actual − expected) over three 2026 releases as published by investingLive (n=3, below the series minimum of 4; flag):
  - April 2026: 2.8 vs 1.5 → +1.3 — https://investinglive.com/centralbank/china-april-cpi-12-yy-expected-08-prior-05-20260511/ (published 2026-05-11T01:30Z, read 17:54Z) "PPI 2.8% y/y (45 month high) expected 1.5%, prior 0.5%"
  - June 2026: 4.1 vs 4.1 → 0.0 — https://investinglive.com/news/china-june-2026-cpi-1-y-y-expected-1-2-prior-1-2/ (published 2026-07-09T01:48Z, read 17:54Z) "PPI 4.1% y/y, a 4-year high expected 4.1%, prior 3.9%"
  - September 2026: 5.0 vs 4.5 → +0.5 — investingLive (above)
  - RMS = sqrt((1.69+0+0.25)/3) = 0.804. Without April (the oil-shock month): 0.35. The April miss dominates; the editor may prefer a smaller figure only with a sourced reason.
- **No pooled alternative is clean:** series.json holds no producer-price series.
- **Suggested quantiles:** `node scripts/refdata/models.mjs quantiles 5.2 0.8 1.6` → q10 3.56, q50 5.20, q90 6.84. (For reference with 0.46 = ex-April 0.354 × 1.291: q10 4.26, q50 5.20, q90 6.14.)
- **Reason to depart from consensus:** none documented. Both 2026 misses with a sign were upside (April +1.3, September +0.5), but two points are not a documented reason.

## Risks
- One-forecaster consensus; very volatile indicator in an oil shock (m/m +1.2% in September, +1.7% in April per investingLive April article "PPI +1.7% m/m").
- Base effect: October 2025 PPI was −2.1% y/y (investingLive 2025 headline seen in search results "China October inflation data: CPI 0.2% y/y (expected 0%), PPI -2.1% y/y (expected -2.2%)", not opened).

## Sources
- https://www.lundgreensinvestorinsights.com/next-week-in-china-9-13-november-2026/
- https://live.deutsche-boerse.com/nachrichten/WOCHENVORSCHAU-Termine-bis-13-November-2026-8f37e740-d665-411b-b47a-bfdf89be2552
- https://news.cgtn.com/news/2026-10-14/China-s-CPI-and-PPI-rise-faster-in-September-1RejVMpQwo0/p.html
- https://investinglive.com/news/china-september-cpi-0-9-y-y-expected-1-prior-0-8/
- https://investinglive.com/news/china-june-2026-cpi-1-y-y-expected-1-2-prior-1-2/
- https://investinglive.com/centralbank/china-april-cpi-12-yy-expected-08-prior-05-20260511/
- Unreachable: stats.gov.cn (connection reset); Investing.com, FXStreet (403); Trading Economics (empty).
