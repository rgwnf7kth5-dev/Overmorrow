# cn-pmi-oct
- **Claim:** The official manufacturing PMI of the National Bureau of Statistics of China (NBS) for October 2026, released on Saturday 31 October 2026 at 09:30 Beijing time, is … per cent.
- **Criterion:** Value = the headline manufacturing purchasing managers' index (PMI) of China for October 2026, in per cent to one decimal, as printed in the NBS/CFLP press release "Purchasing Managers' Index for October 2026" published on 31 October 2026 (Asia/Shanghai). Sub-indices, the non-manufacturing and composite indices, the private (S&P Global/RatingDog) PMI and later revisions do not decide. Void if the release does not take place on 31 Oct 2026 (Beijing time); pending if published but not yet readable.
- **Event window:** 2026-10-31T00:00:00+08:00 to 2026-10-31T23:59:59+08:00 (Asia/Shanghai; release 09:30 CST = 02:30 CET = 01:30 GMT)
- **Written at:** 2026-10-29T18:25:00Z

## Schedule
- NBS 2026 release calendar (read by the desk on 29 Oct): October PMI "Saturday, October 31, 2026, at 9:30" — https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html (carried over from the desk sweep in scratchpad w/economy.json, read 2026-10-29).
- Trading Economics calendar: "2026-10-31 01:30 AM NBS Manufacturing PMI Oct", consensus 50.1, TE forecast 50.3 — https://tradingeconomics.com/china/business-confidence (read 2026-10-29T18:00Z).
- Saturday releases are normal for this series: the August PMI came out on 31 Aug and the September PMI on 30 Sep, both at 09:30 Beijing — same TE calendar table. The February 2026 PMI was published on 4 Mar (TE news item dated 2026-03-04 01:53, below), after the Spring Festival. The calendar date is the only schedule question.

## Facts
- September 2026: manufacturing PMI 50.1%, "an increase of 0.3 percentage points from the previous month to the expansionary range"; large firms 50.6, medium 49.7, small 48.9; production 51.7, new orders 50.5, employment 48.4; new export orders 50.0; main raw-material purchase price 60.8; output prices 54.0; non-manufacturing 50.2 — NBS https://www.stats.gov.cn/english/PressRelease/202610/t20261008_1965466.html (page dated 2026-10-01 09:30; the Chinese release was out 30 Sep 09:30 CST; read 2026-10-29T17:59Z) "the purchasing managers' index (PMI) of China's manufacturing industry was 50.1%".
- The last 13 readings, from NBS Table 1 in the same release (first releases; NBS does not normally revise the headline):
  Sep 2025 49.8; Oct 2025 49.0; Nov 2025 49.2; Dec 2025 50.1; Jan 2026 49.3; Feb 49.0; Mar 50.4; Apr 50.3; May 50.0; Jun 50.3; Jul 49.2; Aug 49.8; Sep 50.1.
- Count over the last 12 readings (Oct 2025–Sep 2026): at or above 50.0 in 6 of 12 (Dec, Mar, Apr, May, Jun, Sep). The mean is 49.74, the range 49.0–50.4. Own arithmetic from the table.
- Price stress since March: the main raw-material purchase price index was 63.9 in Mar, 63.7 Apr, 60.5 May, 54.2 Jun, 53.2 Jul, 56.6 Aug, 60.8 Sep (NBS Table 2, same release). Investinglive/Reuters (29 Apr) put this down to "Iran war-driven energy costs".
- Consensus for October: 50.1 (Trading Economics consensus column; TE's own model 50.3) — https://tradingeconomics.com/china/business-confidence (read 2026-10-29T18:00Z). No Reuters or Bloomberg poll for October was found tonight; Reuters is usually published the day before. NB: the TE row for October shows "Previous 50", although NBS printed 50.1 for September. This is a TE display quirk, not a revision (the NBS table says 50.1).
- TE on September: "rose to 50.1 in September 2026 from 49.8 in August, in line with market expectations. It was the first expansion in factory activity since June … business sentiment remained at a five-month low (53.8)" — same page.
- October vs September in past years. 2025: 49.8 → 49.0 (NBS table above). 2021: 49.6 → 49.2 (investinglive headline 2021-10-31, "China October PMIs: Manufacturing 49.2 (prior 49.6)", https://investinglive.com/news/!/china-october-pmis-manufacturing-492-prior-496-services-524-prior-532-20211031/amp, search result only). From memory, not re-verified tonight: 2022 50.1 → 49.2; 2023 50.2 → 49.5; 2024 49.8 → 50.1. That makes October lower than September in 4 of the last 5 years; the Golden Week holiday (1–8 Oct) falls in the month.
- Industrial production in September was +5.5% y/y (TE related table, same page). Q3 GDP preliminary results were published 21 Oct (NBS list, https://www.stats.gov.cn/english/PressRelease/, read 2026-10-29T17:59Z); the figure was not read tonight.

## Base rate
- Not a yes/no event; see the surprise size below. Derived binary: `cn-pmi-50`.
- Related class `stats-release-beats-threshold` (pipeline/reference-classes.json): own record 4 yes / 3 no. Loose fit.

## Schedule slip
- `stats-release`: 0.007 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-29T18:15Z). The date is on the official NBS calendar, and Saturday releases at month-end are routine. No sign of a move.

## For a number forecast
- Consensus: 50.1 (TE consensus, above). TE model: 50.3.
- Surprise size, computed from sources found tonight: actual minus consensus for 10 releases.

  | Release | Actual | Consensus | Surprise | Source |
  |---|---|---|---|---|
  | Oct 2025 | 49.0 | 49.6 | −0.6 | investinglive headline 2025-10-31: "China official manufacturing PMI (October) 49.0 (expectd 49.6)", https://investinglive.com/news/china-official-manufacturing-pmi-october-490-expectd-496-services-501-expected-50-20251031/amp |
  | Jan 2026 | 49.3 | 50.0 | −0.7 | TE 2026-01-31 01:51: "missing market estimates of 50", https://tradingeconomics.com/china/business-confidence/news/521821 |
  | Feb | 49.0 | 49.1 | −0.1 | TE 2026-03-04 01:53: "slightly below market forecasts of 49.1", https://tradingeconomics.com/china/business-confidence/news/530347 |
  | Mar | 50.4 | 50.1 | +0.3 | TE 2026-03-31 01:41: "exceeded expectations of 50.1", https://tradingeconomics.com/china/business-confidence/news/537606 |
  | Apr | 50.3 | 50.1 | +0.2 | Reuters poll of 27 economists via investinglive 2026-04-29 21:19 GMT: "forecast at 50.1 for April", https://investinglive.com/news/china-manufacturing-pmi-forecast-to-slip-to-501-in-april-mid-east-war-lifts-input-costs-20260429/ (actual from the NBS table) |
  | May | 50.0 | 50.0 | 0.0 | TE 2026-05-31 01:40: "matching market expectations", https://tradingeconomics.com/china/business-confidence/news/555075 |
  | Jun | 50.3 | 50.1 | +0.2 | investinglive 2026-06-30 01:34 GMT: "Manufacturing PMI 50.3 expected 50.1, prior 50.0", https://investinglive.com/news/china-june-manufacturing-pmi-503-expected-501-services-502-499-20260630/ |
  | Jul | 49.2 | 50.0 | −0.8 | TE 2026-07-31: "below market expectations of 50.0" (news stream on the TE 521821 page) |
  | Aug | 49.8 | 49.7 | +0.1 | TE 2026-08-31: "beating market expectations of 49.7" (same stream) |
  | Sep | 50.1 | 50.1 | 0.0 | TE 2026-09-30: "in line with market expectations" (same stream) |

  Nov and Dec 2025 consensus were not found. Over n = 10: mean −0.14; sd 0.41; RMS 0.41; mean absolute 0.30. Misses of 0.6 or more came in 3 of 10, all to the downside. The surprise is computed, not cited. Consensus sources are mixed (TE consensus and the Reuters poll), and they usually agree to ±0.1.
- Proposed scale: 0.41.
- Printed to one decimal; values of exactly 50.0 are common (May 2026).

## Risks
- Golden Week, with October lower than September in 4 of 5 recent years, and the fading of September's production bounce (51.7) point down.
- Input-price stress is high: the raw-material price index was at 60.8 in September and rising.
- Upside: TE's model is at 50.3, and new orders stayed above 50 for two months (50.6, 50.5).
- Big downside misses (−0.6 to −0.8) have happened three times in the last 10 releases.
- The data are released on a Saturday; no slip is expected.

## Sources
- https://www.stats.gov.cn/english/PressRelease/ (via curl)
- https://www.stats.gov.cn/english/PressRelease/202610/t20261008_1965466.html (via curl)
- https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html (desk sweep, not reopened)
- https://tradingeconomics.com/china/business-confidence (via curl)
- https://tradingeconomics.com/china/business-confidence/news (JS-loaded, empty)
- https://tradingeconomics.com/china/business-confidence/news/521821
- https://tradingeconomics.com/china/business-confidence/news/530347
- https://tradingeconomics.com/china/business-confidence/news/537606
- https://tradingeconomics.com/china/business-confidence/news/555075
- https://investinglive.com/news/china-manufacturing-pmi-forecast-to-slip-to-501-in-april-mid-east-war-lifts-input-costs-20260429/
- https://investinglive.com/news/china-june-manufacturing-pmi-503-expected-501-services-502-499-20260630/
- https://investinglive.com/news/china-official-manufacturing-pmi-october-490-expectd-496-services-501-expected-50-20251031/amp (the page body did not parse; the headline is from the search result)
- https://investinglive.com/news/china-january-pmi-slips-into-contraction-as-weak-demand-clouds-early-2026-growth-outlook-20260201/amp (the body did not parse)
- https://investinglive.com/news/china-factory-activity-hits-1-year-high-as-pmis-return-to-expansion-20260331/amp (the body did not parse)
- https://www.focus-economics.com/countries/china/news/pmi/china-pmi-30-03-2026-manufacturing-and-non-manufacturing-pmis-increase-in-march/ (blocked)
- https://www.financecalendar.com/?p=2391 (empty)
- https://api.tradingeconomics.com/ (the guest API has been discontinued)
