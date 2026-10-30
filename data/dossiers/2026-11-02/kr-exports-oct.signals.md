# kr-exports-oct — signals

Read 2026-10-30T18:02–18:04Z with `node scripts/markets.mjs search`, using the queries "South Korea exports", "Korea exports" and "South Korea exports YoY October 2026".

## Kalshi ladder KXSKEXPYOY-26NOV01: "Will South Korea exports YoY for October 2026 be above X%?"
The ladder closes 2026-10-31T23:59Z, before the 1 Nov 09:00 KST release, and settles on y/y growth. Dollar equivalents use the Oct 2025 base of $59.57bn (own arithmetic).

| Strike | ≈ $bn | Last | Bid / Ask | Volume ($) |
|---|---|---|---|---|
| >65% | 98.3 | 0.94 | 0.94 / 1.00 | 12 |
| >70% | 101.3 | 0.99 | 0.96 / 0.99 | 425 |
| >75% | 104.2 | 0.86 | 0.85 / 0.95 | 202 |
| >80% | 107.2 | 0.74 | 0.65 / 0.93 | 1,273 |
| >85% | 110.2 | 0.68 | 0.51 / 0.81 | 581 |
| >90% | 113.2 | 0.41 | 0.52 / 0.66 | 466 |
| >95% | 116.2 | 0.10 | 0.07 / 0.41 | 769 |
| >100% | 119.1 | 0 (no trades) | 0.01 / 0.95 | 0 |
| >105% | 122.1 | 0 (no trades) | 0.01 / 0.92 | 0 |

- **Match:** same quantity, expressed as y/y growth instead of dollars. It is the same release, but the market settles on the y/y percentage as published. That percentage can differ slightly from (level / 59.57 − 1) if the ministry has revised the Oct 2025 base.
- **Liquidity:** very thin, with total volume across the ladder of about $3.7k and wide spreads. The 90% strike's last trade (0.41) sits below its bid (0.52), so the midpoints are more informative.
- **Implied median from the midpoints:** about +90–92%, i.e. about $113–114bn. The implied chance of exceeding about $116bn (+95%) is small (bid 0.07, ask 0.41).

## Other signals
- No poll and no analyst forecast for October 2026 was found.
