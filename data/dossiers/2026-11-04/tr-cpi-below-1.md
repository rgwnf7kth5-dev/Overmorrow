# tr-cpi-below-1
- **Claim:** TurkStat's annual consumer price inflation for October 2026, published on 3 November, is below September's 29.73%. (Derived from tr-cpi-oct, event < 29.73.)
- **Criterion:** YES if the annual CPI inflation rate for October 2026 in the TÜİK bulletin of 3 Nov 2026 is below 29.73% (29.72% or lower at TÜİK's two decimals). NO if it is 29.73% or higher, or if the bulletin is not issued on 3 Nov 2026 (Istanbul time) because of a postponement.
- **Event window:** 2026-11-03T00:00:00+03:00 to 2026-11-03T23:59:00+03:00 (Europe/Istanbul). Expected at 10:00 TRT (07:00Z).
- **Written at:** 2026-11-01T18:26Z. Full fact base with excerpts: data/dossiers/2026-11-04/tr-cpi-oct.md (same story). Read times 2026-11-01 18:06Z–18:16Z.

## Schedule
- "TÜİK, Ekim 2026 dönemine ilişkin Tüketici Fiyat Endeksi verilerini 3 Kasım 2026 Salı günü saat 10.00'da açıklayacak." — https://www.hisse.net/haber/ekonomistlerin-enflasyon-tahmini-netlesti-gozler-3-kasim-da-104170 (published 2026-10-27, read 18:10Z); same date in CNBC-e and Trading Economics (see tr-cpi-oct.md).

## Facts
- September 2026 annual CPI 29.73% (from 31.51%), monthly 1.84% — https://tradingeconomics.com/turkey/inflation-cpi (read 18:06Z).
- Base month October 2025: monthly 2.55% — https://www.dailysabah.com/business/economy/turkish-annual-inflation-eases-to-lowest-level-since-2021 (published 2025-11-03, read 18:08Z) "The monthly rate was 2.55%, TurkStat said."
- Arithmetic (own): the annual rate falls below 29.73% exactly when the October 2026 monthly rate is below about 2.55%.
- Surveys for October 2026: ForInvest (17) median 2.4% m/m, 29.5% y/y, annual range 28.07–30.0%; CNBC-e (20) annual median 29.5%, range 28.65–29.9%, monthly median 2.3%, range 1.7–2.7%; Matriks (21 forecasts) monthly median 2.40%, annual mean 29.44%, range 28.89–29.90% (URLs in tr-cpi-oct.md). The top of the CNBC-e and Matriks annual ranges (29.9%) is above the threshold; ForInvest's top is 30.0%.
- Threshold 29.73% is 0.23 pp above the 29.5% consensus, about 0.4 surprise scales.

## Base rate
- No Turkish CPI class in pipeline/reference-data/. Loose class `stats-release-beats-threshold`: own record 10 YES / 6 NO, base_rate null. Own count: annual CPI fell month on month in August and September 2026 (31.75 → 31.51 → 29.73).

## Schedule slip
- `stats-release`: 0.004 [estimate], own 0/25 (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-01T18:05Z). No sign of a move.

## Consensus and usual surprise size
- Consensus 29.5% (ForInvest and CNBC-e medians). Surprise sd 0.61 pp, n = 12, computed by us (tr-cpi-oct.md). Derived from the interval claim: derived {from: tr-cpi-oct, event: "<", x: 29.73}.

## Risks
- YES path: nine of the last twelve comparable releases were below consensus; all surveys' medians are below 29.73%.
- NO path: monthly October inflation of 2.55% or more (seasonal clothing and education effects; TE's own forecast of 30.0% implies about 2.8% m/m).
- Exact tie at 29.73% resolves NO.

## Sources
- As listed in data/dossiers/2026-11-04/tr-cpi-oct.md.
