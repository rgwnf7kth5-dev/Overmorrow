# us-jolts-below-1
- **Claim:** BLS's first estimate of US job openings for September 2026, published on 3 November, is below 7.079 million, August's first estimate. (Derived from us-jolts-sep, event < 7.079.)
- **Criterion:** YES if the seasonally adjusted total nonfarm job openings level for September 2026 in the BLS JOLTS news release of 3 Nov 2026 is below 7,079,000 (7,078 thousand or lower in Table 1). NO if it is 7,079 thousand or higher, or if the release is not issued on 3 Nov 2026 (Eastern Time) because of a postponement. A revision of the August figure in the same release does not change the threshold.
- **Event window:** 2026-11-03T00:00:00-05:00 to 2026-11-03T23:59:00-05:00 (America/New_York). Expected at 10:00 ET (15:00Z).
- **Written at:** 2026-11-01T18:22Z. Full fact base with excerpts: data/dossiers/2026-11-04/us-jolts-sep.md (same story). Read times 2026-11-01 18:05Z–18:14Z.

## Schedule
- BLS: September report "is scheduled to be published on Tuesday, November 3, 2026, at 10:00 a.m. (ET)" — https://www.bls.gov/news.release/archives/jolts_09292026.htm (published 2026-09-29, read 18:06Z). BLS November calendar lists JOLTS September 2026, 10:00 AM, on 3 Nov — https://www.bls.gov/schedule/2026/11_sched.htm (read 18:12Z).

## Facts
- August first estimate 7.079m, "lowest in five months"; July revised to 7.335m — https://tradingeconomics.com/united-states/job-offers (read 18:06Z). BLS: "little changed at 7.1 million and 4.3 percent" (release above).
- Consensus for September 7.10m (Trading Economics; its own forecast 7.06m). Threshold 7.079m is 0.02m below consensus, i.e. about 0.05 surprise scales.
- Last 10 first estimates vs consensus: +0.53, −0.46, −0.71, +0.19, −0.01, +0.01, +0.75, +0.31, −0.03, −0.15 (energyexch and Trading Economics, see us-jolts-sep.md).
- Month-on-month changes in first estimates have been large: e.g. 6.87m (5 May) to 7.62m (2 Jun); 7.67m (9 Dec 2025) to 7.15m (7 Jan 2026).

## Base rate
- No JOLTS class in pipeline/reference-data/. Loose class `stats-release-beats-threshold`: own record 10 YES / 6 NO, base_rate null (this claim is the "below" direction).

## Schedule slip
- `stats-release`: 0.004 [estimate], own 0/25 (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-01T18:05Z). No sign of a move.

## Consensus and usual surprise size
- Consensus 7.10m (Trading Economics). Surprise sd 0.43m, n = 10, computed by us (us-jolts-sep.md).
- The threshold sits essentially at consensus; this binary is derived from the interval claim (derived {from: us-jolts-sep, event: "<", x: 7.079}), not a stand-alone release claim.

## Risks
- YES path: continuation of the August decline; two consecutive below-consensus prints.
- NO path: upside first-estimate surprises of 0.3–0.75m have happened three times in ten releases.
- Rounding: BLS headline text rounds to 0.1m ("7.1 million"); the resolver must use the thousands figure in Table 1.

## Sources
- As listed in data/dossiers/2026-11-04/us-jolts-sep.md.
