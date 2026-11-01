# us-jolts-sep — signals

Queries run with `node scripts/markets.mjs search`: "JOLTS" (read 2026-11-01T18:13:09Z, rerun 18:13:59Z), "job openings September" (18:13:17Z).

## Polymarket — "JOLTS Job Openings: September 2026"
https://polymarket.com/event/jolts-job-openings-september-2026 — closes 2026-11-03T15:00Z. Yes prices (last trade) read 18:13:59Z:

| Bucket | Yes price | Volume | Liquidity |
|---|---|---|---|
| < 6.8M | 0.125 | $4,632 | $388 |
| 6.8–6.9M | 0.0385 | $487 | $117 |
| 6.9–7.0M | 0.018 | $298 | $119 |
| 7.0–7.1M | 0.125 | $3,393 | $216 |
| 7.1–7.2M | 0.181 | $523 | $86 |
| 7.2–7.3M | 0.145 | $6,285 | $169 |
| 7.3–7.4M | 0.225 | $707 | $146 |
| ≥ 7.4M | 0.28 | $6,917 | $220 |

Total volume about $23k; prices sum to about 1.14 (last trades, not mids), so normalise before use. Very thin (liquidity $86–388 per bucket). Taken at face value the distribution leans above the 7.10m consensus: (0.145 + 0.225 + 0.28) / 1.1375 ≈ 0.57 of normalised mass at ≥ 7.2M. The 6.8–7.0 buckets look stale (very low prices next to a 0.125 tail bucket).

**Match:** question matches (September 2026 total job openings). Settlement presumably on the BLS first release; rules text not read. Buckets do not align with an interval quantile directly but are usable.

## Kalshi — KXJOLTSOPEN (September 2026, "above X")
https://kalshi.com/markets/kxjoltsopen — closes 2026-11-03T14:59Z. Yes prices read 18:13:59Z: above 7.10M 0.54 (vol 741); above 7.15M 0 (vol 0, no trades); above 7.20M 0.43 (vol 412); above 7.25M 0.43 (vol 210); above 7.30M 0.37 (vol 706); above 7.35M 0.30 (vol 568); above 7.40M 0.15 (vol 455); above 7.45M 0.13 (vol 40). Liquidity reported 0 (order book not returned). Small volumes; last prices partly inconsistent (7.20 = 7.25).

**Match:** question wording matches exactly ("seasonally adjusted number of total nonfarm job openings in the United States for September 2026").

## Other
- Manifold/Metaculus: only unrelated labour-market questions (US unemployment rate Nov/Dec 2026, payrolls); no JOLTS question.
- Trading Economics model forecast 7.06m (consensus 7.10m).
