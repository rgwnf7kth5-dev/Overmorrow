# bg-turnout-1 — signals

Read 2026-10-30T18:13Z with `node scripts/markets.mjs search "Bulgaria turnout"` (repeated at 18:14Z, same prices).

Polymarket event "Bulgaria Presidential Election Second Round: Turnout" — https://polymarket.com/event/bulgaria-presidential-election-second-round-turnout-20261026154956939 (closes 2026-11-02T04:59Z)

| Bucket | Yes price | Volume | Liquidity |
|---|---|---|---|
| less than 18% | 0.01 | $1.4k | $4.3k |
| 18–20% | 0.0175 | $1.4k | $14.7k |
| 20–22% | 0.038 | $1.6k | $17.0k |
| 22–24% | 0.155 | $3.4k | $19.5k |
| 24% or more | 0.805 | $35.3k | $26.0k |

- The buckets sum to 1.026.
- **Match:** the market is on second-round turnout, the same quantity as the claim. The settlement source and the treatment of abroad votes were not checked, and the bucket boundaries are coarse (2 pp).
- **For bg-turnout-above-r1-1 (threshold 22.93%):** the market has no bucket edge at 22.93/22.98. The "24% or more" bucket is a lower bound for P(above 22.93%).
- No other platform question or published turnout forecast was found.
