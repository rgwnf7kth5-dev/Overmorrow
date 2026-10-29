# cn-pmi-50
- **Claim:** China's official NBS manufacturing PMI for October 2026, released on Saturday 31 October 2026, is 50.0 or higher.
- **Criterion:** YES if the headline manufacturing PMI for October 2026, as printed to one decimal in the NBS/CFLP press release published on 31 Oct 2026 (Asia/Shanghai), is 50.0% or higher. NO if it is 49.9% or lower, or if the release does not take place on 31 Oct 2026 (Beijing time). Later revisions do not decide. Pending if published but not yet readable.
- **Event window:** 2026-10-31T00:00:00+08:00 to 2026-10-31T23:59:59+08:00 (Asia/Shanghai; release 09:30 CST = 02:30 CET)
- **Written at:** 2026-10-29T18:25:00Z

Derived from the interval claim `cn-pmi-oct` (value > 49.95). The full facts, consensus and surprise table are in data/dossiers/2026-11-01/cn-pmi-oct.md.

## Schedule
- NBS calendar: Sat 31 Oct 2026 at 09:30 Beijing (see cn-pmi-oct.md).

## Facts
- Threshold: 50.0 is the expansion/contraction line. An exact 50.0 counts YES; NBS printed exactly 50.0 in May 2026 — https://tradingeconomics.com/china/business-confidence/news/555075 (published 2026-05-31 01:40, read 2026-10-29T18:05Z) "edged down to 50.0 in May 2026 … matching market expectations".
- September 2026 was 50.1, the first reading above 50 since June — NBS https://www.stats.gov.cn/english/PressRelease/202610/t20261008_1965466.html (read 2026-10-29T17:59Z).
- Last 12 readings (Oct 2025–Sep 2026): 49.0, 49.2, 50.1, 49.3, 49.0, 50.4, 50.3, 50.0, 50.3, 49.2, 49.8, 50.1. At or above 50.0 in 6 of 12 (NBS Table 1, same release; own count).
- Consensus 50.1 (TE consensus; TE model 50.3) — https://tradingeconomics.com/china/business-confidence (read 2026-10-29T18:00Z). That is 0.15 above the threshold midpoint 49.95.
- Surprise sd (actual − consensus) is 0.41 over the last 10 releases with a known consensus. That is computed in cn-pmi-oct.md, and the mean miss was −0.14. On 3 of those 10 the print fell 0.6–0.8 below consensus.
- October fell against September in 4 of the last 5 years (2025 49.8→49.0 verified; 2021 49.6→49.2 headline; 2022–2024 from memory, see cn-pmi-oct.md).

## Base rate
- Class `stats-release-beats-threshold` (pipeline/reference-classes.json): own record 4 yes / 3 no, n = 7. Loose fit: the threshold here sits just below consensus.
- Series base rate: 6 of 12 recent months were at or above 50.0.

## Schedule slip
- `stats-release`: 0.007 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-29T18:15Z). Non-release resolves NO by the criterion; the risk is negligible.

## Risks
- Consensus is only 0.15 above the line. Ordinary noise (sd 0.41) decides it, and so does the October seasonal dip (Golden Week).
- Input-cost pressure (raw-material price index 60.8 in September) weighs on margins.
- Upside: new orders 50.5 in September and a TE model of 50.3.

## Sources
- See cn-pmi-oct.md (all pages listed there).
- https://www.stats.gov.cn/english/PressRelease/202610/t20261008_1965466.html
- https://tradingeconomics.com/china/business-confidence
- https://tradingeconomics.com/china/business-confidence/news/555075
