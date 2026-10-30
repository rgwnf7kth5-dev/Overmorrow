# kr-exports-record-1
- **Claim:** South Korea's October 2026 exports, in the ministry's preliminary release of 1 November, exceed September's record of 120.9 billion dollars.
- **Criterion:** YES if the October 2026 export total in the trade ministry's preliminary release of 1 Nov 2026 is above $120.9bn. NO if it is $120.9bn or lower, or if the release is not published on 1 Nov 2026 (Korean time).
- **Event window:** 2026-11-01T00:00:00+09:00 to 2026-11-01T23:59:59+09:00 (Asia/Seoul). The release is at 09:00 KST.
- **Written at:** 2026-10-30T18:20:00Z

This claim is derived from kr-exports-oct (event: value > 120.9). All facts, the working-day counts and the sources are in data/dossiers/2026-11-02/kr-exports-oct.md. The decisive points are summarised here.

## Schedule
- The ministry publishes on the 1st at 09:00 KST, weekends included. Sunday releases took place on 1 Feb 2026 and 1 Mar 2026 (see the parent dossier).

## Facts
- Sep 2026: $120.9bn, a record, +83.5% y/y — Korea Times/Yonhap https://www.koreatimes.co.kr/economy/20261001/koreas-sept-exports-hit-record-1209-bil-on-robust-chip-sales (published 2026-10-01 09:25 KST, read 2026-10-30T17:23Z) "a record".
- 1–20 Oct 2026: $61.6bn over 13 working days, $4.74bn per day, +105.4% y/y — MoneyToday https://www.mt.co.kr/index.php/en/economy/2026/10/21/2026102108331616913 (published 2026-10-21 09:00 KST, read 2026-10-30T17:23Z) "export value during this period reached $61.6 billion, up 105.4%".
- To exceed $120.9bn, the last 9 working days of October (21–31 Oct, own count) need more than $59.3bn, or $6.59bn a day. That is 1.39 times the first-20-day daily rate (own arithmetic).
- That ratio in recent months (own arithmetic, parent dossier): Jun ≈1.30, Jul ≈1.22, Aug ≈1.37, Sep ≈1.79 (Chuseok-distorted). The non-holiday months all fall just below 1.39; only September exceeded it.
- $120.9bn is +103.0% y/y on the Oct 2025 base of $59.57bn (own arithmetic).
- Consensus: none found.

## Base rate
- No class fits. Loose: `stats-release-beats-threshold`, own record 6 YES / 3 NO, base_rate null. In 2026 a new monthly record was set in June ($102.2bn) and September ($120.9bn), but not in July or August (parent dossier).

## Schedule slip
- `stats-release`: 0.006 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-30T18:01Z). A release not published on 1 Nov counts as NO.

## Risks
- The threshold sits just above the k = 1.37 (August-pattern) estimate of $120.0bn. A one-day error in my working-day count moves the estimate by about $5–6bn.
- Upside: chip shipments bunched at month-end (September pattern). The record October daily rate ($4.74bn) is already above September's first-20-day rate (about $4.61bn).
- Downside: July–June patterns (k = 1.22–1.30) give $113.6–117.1bn.

## Sources
- See data/dossiers/2026-11-02/kr-exports-oct.md (Sources section).
