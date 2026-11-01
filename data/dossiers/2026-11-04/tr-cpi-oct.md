# tr-cpi-oct
- **Claim:** TurkStat's annual consumer price inflation for October 2026, published on 3 November, comes in at … % (interval claim)
- **Criterion:** The annual (year-on-year) change in the consumer price index (CPI, 2025=100 or current base) for October 2026 in the Turkish Statistical Institute (TÜİK/TurkStat) bulletin of 3 Nov 2026, in percent.
- **Event window:** 2026-11-03T00:00:00+03:00 to 2026-11-03T23:59:00+03:00 (Europe/Istanbul). Expected at 10:00 TRT (07:00Z, 08:00 CET).
- **Written at:** 2026-11-01T18:24Z. All read times below are 2026-11-01, between 18:06Z and 18:16Z unless stated otherwise.

## Schedule
- CNBC-e: "Türkiye İstatistik Kurumu (TÜİK), Ekim ayı enflasyon verilerini 3 Kasım Salı günü saat 10.00'da açıklayacak." — https://www.cnbce.com/haberler/gozler-ekim-enflasyonunda-cnbc-e-anketinde-ekonomistlerin-beklentisi-belli-oldu-h40422 (published 2026-10-27 13:46 TRT, read 18:10Z).
- Hisse.net (Matriks survey): "TÜİK, Ekim 2026 dönemine ilişkin Tüketici Fiyat Endeksi verilerini 3 Kasım 2026 Salı günü saat 10.00'da açıklayacak." — https://www.hisse.net/haber/ekonomistlerin-enflasyon-tahmini-netlesti-gozler-3-kasim-da-104170 (published 2026-10-27 12:59, read 18:10Z).
- Trading Economics: October figure scheduled for "November 3, 2026, at 07:00 AM GMT" — https://tradingeconomics.com/turkey/inflation-cpi (read 18:06Z).
- TÜİK publishes CPI on the 3rd of the month, or the next working day if the 3rd is a weekend (September data came on Mon 5 Oct because 3 Oct was a Saturday; sweep note, Admiral Markets). 3 Nov 2026 is a Tuesday and not a Turkish public holiday. TÜİK's own calendar page was not read (no direct primary-source confirmation; three independent secondary sources agree).

## Facts
- September 2026: "Turkey's annual inflation rate slowed to 29.73% in September 2026 from 31.51% in the previous month", "below market expectations of 30.3%"; monthly "stable at 1.84% in September, below market expectations of 2.3%" — https://tradingeconomics.com/turkey/inflation-cpi (read 18:06Z). Lowest since November 2021 (sweep).
- August 2026: 31.51% vs 31.62% consensus (Trading Economics calendar, same URL). An Anadolu Agency poll of 20 economists had expected 31.52% annual, 1.86% monthly (range 1.25–2.10%) — https://en.yenisafak.com/economy/turkiye-inflation-seen-easing-to-3152-in-august-3722600 (published 2026-08-31 15:30, read 18:11Z).
- Base month, October 2025: annual 32.87%, monthly 2.55% (down from 3.23% in September 2025) — Hürriyet Daily News https://www.hurriyetdailynews.com/turkiyes-annual-inflation-eases-to-32-87-pct-in-october-215317 (published 2025-11-03, read 18:09Z); Daily Sabah: "The monthly rate was 2.55%, TurkStat said." — https://www.dailysabah.com/business/economy/turkish-annual-inflation-eases-to-lowest-level-since-2021 (published 2025-11-03 10:28 TRT, read 18:08Z). October 2025 came in below analysts' forecasts (above 33% expected).
- Base-effect arithmetic (own): annual Oct 2026 ≈ 1.2973 × (1 + m) / 1.0255 − 1. A monthly rate of 2.55% leaves the annual rate at 29.73%; 2.4% m/m gives 29.54%; 2.3% gives 29.4%; 2.8% gives 30.0%.
- İTO Istanbul retail prices, September 2026: +2.11% m/m, 33.55% y/y — https://www.foreks.com/haber/detay/6abe228024008d7d4373a3db/PICNEWS/tr/istanbul-un-eylul-enflasyonu-aciklandi-01-10-26/ (published 2026-10-01 12:06, read 18:15Z). The İTO October figure was not found (1 Nov 2026 is a Sunday).
- CBRT Survey of Market Participants, October 2026: end-2026 CPI expectation 29.63% (from 29.61%); 12-month-ahead 23.89% — https://www.hurriyetdailynews.com/turkiyes-year-end-inflation-expectations-hold-steady-at-29-6-percent-survey-228201 (published 2026-10-16, read 18:09Z). The October monthly expectation from this survey was not stated.

## Consensus for October 2026
- ForInvest Haber survey, 17 economists/institutions: median 2.4% m/m and 29.5% y/y; monthly range 1.25–2.5%, annual range 28.07–30.0% — "ekonomistlerin Ekim ayına ilişkin medyan TÜFE beklentisi aylık %2,4, yıllık %29,5 oldu." — https://www.foreks.com/haber/detay/6ae071f7b16ee1777f55fa64/FRKS/tr/yenileme-forinvest-haber-anketi-ekim-ayi-medyan-tufe-beklentisi-aylik-2-4-oldu-27-10-26/ (published 2026-10-27 12:42 TRT, read 18:10Z).
- CNBC-e survey, 20 economists: annual median 29.5%, mean 29.45%, range 28.65–29.9%; monthly median 2.3%, mean 2.26%, range 1.7–2.7% — "Yıllık enflasyon beklentisi medyanda yüzde 29,5, ortalamada yüzde 29,45 olarak şekillendi." (CNBC-e URL above).
- Matriks Haber survey, 29 banks/brokers (21 gave October CPI): monthly median 2.40%, mean 2.33%, range 1.90–2.70%; annual mean 29.44%, range 28.89–29.90% (Hisse.net URL above).
- Trading Economics own forecast 30.0% (no consensus listed).
- No AA Finans or Reuters poll found yet; these usually appear about two days before the release.
- Working consensus: **29.5%** annual (median of two surveys; Matriks mean 29.44%).

## Base rate
- No Turkish CPI class in pipeline/reference-data/. Loose class `stats-release-beats-threshold` (pipeline/reference-classes.json): own record 10 YES / 6 NO, base_rate null.

## Schedule slip
- `stats-release`: prior 0.01, own 0/25, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-01T18:05Z). Release date confirmed by three secondary sources; no sign of a move.

## Consensus and usual surprise size
- Surprise (actual − consensus, annual, pp), computed by us from 12 releases with both values: Jan–Oct 2025 releases from TipRanks https://www.tipranks.com/calendars/economic/inflation-rate-yoy-5249 (read 18:09Z; cross-checked against fxblue https://publisher2.fxblue.com/calendar/item/Consumer_Price_Index_YoY_TR, read 18:09Z): −0.82, +0.87, −0.85, −0.80, −0.14, −0.69, −0.15, −0.53, +0.35, +0.79; plus Aug 2026 −0.11 and Sep 2026 −0.57 (Trading Economics). n = 12: mean −0.22, sd 0.61, RMS 0.62, mean absolute 0.56. (Python statistics.stdev, 2026-11-01T18:16Z.) Nov 2025–Jul 2026 consensus values were not found.
- Note: most of the sample is from 2025, when annual inflation was 33–44%; nine of twelve surprises were below consensus.
- Working scale: 0.6 pp.
- Suggested quantiles (method v5): `node scripts/refdata/models.mjs quantiles 29.5 0.6 1.6` → q10 28.27, q50 29.5, q90 30.73 (width 2.46 = 4.1 scales).

## Risks
- Downside: TurkStat has come in below consensus in nine of the last twelve comparable releases, including the last two (−0.11, −0.57).
- Upside: October has seasonal pressures (clothing; education); the base month (2.55%) is lower than September's base (3.23%), so the base effect is less favourable than in September; a monthly print above 2.55% raises the annual rate.
- Survey dispersion: annual forecasts range 28.07–30.0%.
- Publication timing: no known risk.

## Sources
- https://tradingeconomics.com/turkey/inflation-cpi
- https://www.cnbce.com/haberler/gozler-ekim-enflasyonunda-cnbc-e-anketinde-ekonomistlerin-beklentisi-belli-oldu-h40422
- https://www.foreks.com/haber/detay/6ae071f7b16ee1777f55fa64/FRKS/tr/yenileme-forinvest-haber-anketi-ekim-ayi-medyan-tufe-beklentisi-aylik-2-4-oldu-27-10-26/
- https://www.hisse.net/haber/ekonomistlerin-enflasyon-tahmini-netlesti-gozler-3-kasim-da-104170
- https://www.hurriyetdailynews.com/turkiyes-annual-inflation-eases-to-32-87-pct-in-october-215317
- https://www.dailysabah.com/business/economy/turkish-annual-inflation-eases-to-lowest-level-since-2021
- https://www.hurriyetdailynews.com/turkiyes-year-end-inflation-expectations-hold-steady-at-29-6-percent-survey-228201
- https://www.dailysabah.com/business/economy/turkiyes-end-2026-inflation-forecasts-tick-higher-12-month-view-improves (August survey; end-2026 29.43%)
- https://en.yenisafak.com/economy/turkiye-inflation-seen-easing-to-3152-in-august-3722600
- https://www.tipranks.com/calendars/economic/inflation-rate-yoy-5249
- https://publisher2.fxblue.com/calendar/item/Consumer_Price_Index_YoY_TR
- https://www.foreks.com/haber/detay/6abe228024008d7d4373a3db/PICNEWS/tr/istanbul-un-eylul-enflasyonu-aciklandi-01-10-26/
- Sweep notes: scratchpad/sweep/economy.md section 4 (Admiral Markets on TÜİK's publication rule)
