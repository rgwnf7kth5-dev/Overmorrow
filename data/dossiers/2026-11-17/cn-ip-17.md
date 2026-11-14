# cn-ip-17
- **Claim (yes/no):** China's National Bureau of Statistics reports that industrial output (value added of industrial enterprises above designated size) grew by at least 6.0% year on year in October 2026.
- **Criterion:** YES if the year-on-year real growth of value added of industrial enterprises above designated size for the single month of October 2026, as first published by the National Bureau of Statistics on 16 Nov 2026 (one decimal; NBS release on stats.gov.cn, or as reported the same day by Xinhua, Reuters or investingLive), is 6.0% or higher. NO if it is 5.9% or lower, or if the NBS does not publish the October figure by 23:59 Beijing time on 16 Nov 2026.
- **Event window:** 2026-11-16T10:00+08:00 to 2026-11-16T23:59+08:00 (Asia/Shanghai); release 10:00 Beijing = 03:00 CET
- **Deadline (resolves by):** 2026-11-18T05:00+01:00
- **Written at:** 2026-11-14T18:15Z

## Schedule
- NBS Regular Press Release Calendar 2026, row 7 "Monthly Report on Industrial Production Operation Above the Designated Size": November "16/Mon", "10:00" — https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html (published 2025-12-26 13:58, read 2026-11-14T17:55Z).
- dpa-AFX: "03:00 CHN: Industrieproduktion 10/26" on Monday 16 Nov — https://www.onvista.de/news/2026/11-12-wochenvorschau-termine-bis-26-november-2026-0-10-26575839 (published 2026-11-12 16:35Z, read 2026-11-14T17:54Z).

## Facts
- Consensus for October: "October Industrial Production is expected to rise 5.3% Y/Y (prev. 5.5%)"; official PMIs slipped back into contraction in October; exports +35.2% y/y in October on AI-related products — Newsquawk https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs (published 2026-11-13 21:50Z, read 2026-11-14T17:55Z).
- ING (13 Nov): "Industrial production is expected to remain the outperformer, and we think growth will remain unchanged at 5.5% YoY" — https://think.ing.com/articles/asia-week-ahead-131126/ (published 2026-11-13, read 2026-11-14T17:56Z).
- Recent first releases vs consensus (single-month y/y, %), all from investingLive:
  - Jan–Feb 2026: 6.3 vs 5.0 — https://investinglive.com/news/china-industrial-output-beats-forecasts-as-property-slump-deepens-20260316 (published 2026-03-16 02:06Z) "China's industrial output rose 6.3% y/y, beating forecasts of 5.0%"
  - Apr 2026: 4.1 vs 5.9 — https://investinglive.com/news/china-april-retail-sales-02-yy-exp-2-industrial-prduction-41-yy-exp-59-20260518/ (published 2026-05-18 02:00Z) "Industrial Production 4.1% y/y expected 5.9"
  - Jun 2026: 5.3 vs 4.6 — https://investinglive.com/news/china-june-retail-sales-y-y-expected-0-1-and-industrial-output-y-y-expected-4-6/ (published 2026-07-15 02:09Z)
  - Jul 2026: 4.5 vs 4.8 — https://investinglive.com/news/china-retail-sales-disappoint-in-july-industrial-output-slows-while-new-home-prices-extend-declines/ (published 2026-08-17 07:00Z)
  - Aug 2026: 5.2 vs 4.8 — https://investinglive.com/news/china-s-factories-outperform-as-consumption-and-investment-lag-behind/ (published 2026-09-15 02:54Z) "rose 5.2% year on year in August ... beating a forecast 4.8% rise"
  - Sep 2026: 5.5 vs 5.4 — https://investinglive.com/news/china-q3-gdp-beats-estimates-as-does-september-retail-sales/ (published 2026-10-19 02:01Z) "Industrial Production (YoY) 5.5% expected 5.4%"
  - (all read 2026-11-14T17:55Z; March and May 2026 not found)

## Consensus, threshold and surprise size
- Consensus 5.3% (Newsquawk, 13 Nov); ING 5.5%.
- Threshold: 6.0% as published to one decimal, i.e. 5.95 on a continuous scale; 0.65 pt above consensus.
- Surprise scale 0.97 pt: own computation from the six releases above (actual − consensus): +1.3, −1.8, +0.7, −0.3, +0.4, +0.1; RMS 0.97, mean +0.07, n=6. |threshold − consensus| = 0.65 = 0.67 scales (≥ 0.5 required). Against ING's 5.5 the gap is 0.45 pt.

## Base rate
- Own count, 2026 single-month releases found: industrial output at or above 6.0% in 1 of 6 (Jan–Feb 6.3%; Apr 4.1, Jun 5.3, Jul 4.5, Aug 5.2, Sep 5.5). Sources: investingLive pages above.

## Schedule slip
- Class `stats-release`: `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/55, rate 0.003.
- Signs it may move: none.

## Risks
- Strong AI-related export demand (exports +35.2% y/y) versus contracting manufacturing PMI pull in opposite directions.
- Working-day/holiday effects (Golden Week) can swing the October figure.
- Rounding at the 6.0 threshold.

## Sources
- https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html
- https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs
- https://think.ing.com/articles/asia-week-ahead-131126/
- https://www.onvista.de/news/2026/11-12-wochenvorschau-termine-bis-26-november-2026-0-10-26575839
- https://www.lundgreensinvestorinsights.com/next-week-in-china-16-20-november-2026/
- the six investingLive pages listed under Facts

## Unreachable
- none

## Research step (14 Nov, after round one)
- Yicai chief-economist survey: mean forecast for October industrial value added 5.3% y/y; Shenwan Hongyuan (Zhao Wei) 5.2% (high oil prices, end of pre-holiday front-loading, petrochemical operating rates −6.3% y/y, PTA −9.4%); Peking University National Economic Research Center 5.6% (low base, new industries, exports; despite falling car output and higher power base); CAAM: October vehicle production 3.063m, −8.8% y/y; NBS PMI production index 49.8, −1.9 pts, 1.7 pts below its five-year October average — https://www.yicai.com/news/103436941.html (published 2026-11-11 20:44 Beijing, read 2026-11-14T18:16Z) "参与第一财经首席调研的经济学家对10月工业增加值同比增速预测均值为5.3%".
- Caixin manufacturing PMI October 52.0 (Sep 52.1, consensus 51.6); output index fastest in nearly half a year — https://datatrack.trendforce.com/blog/content/66109/chinas-october-caixin-manufacturing-pmi-beats-expectations-at-520-output-momentum-strong-but-optimism-slips (published 2026-11-02, read 2026-11-14T18:15Z). Official manufacturing PMI 49.3, production 49.8 — https://www.stats.gov.cn/english/PressRelease/202611/t20261103_1965735.html (published 2026-11-01 09:30, read 2026-11-14T18:16Z).
