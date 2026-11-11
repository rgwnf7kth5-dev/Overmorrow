# Signals: us-ppi-oct-14

## Markets
Search: `node scripts/markets.mjs search PPI October` (read 2026-11-11T17:59:51Z). Matching exchange ladders exist on the exact quantity (Kalshi "PPI MoM in October", event KXUSPPI-26NOV13, closes 2026-11-13T13:29Z; settles on the BLS final-demand m/m figure, which matches the claim). Last price (bid/ask, volume in USD):

| Above | Last | Bid/Ask | Volume |
|---|---|---|---|
| 0.2% | 0.91 | 0.88/0.90 | 1,780 |
| 0.3% | 0.83 | 0.74/0.82 | 627 |
| 0.4% | 0.69 | 0.62/0.69 | 2,596 |
| 0.5% | 0.52 | 0.51/0.61 | 1,663 |
| 0.6% | 0.40 | 0.41/0.43 | 430 |
| 0.7% | 0.37 | 0.30/0.39 | 247 |
| 0.8% | 0.28 | 0.20/0.29 | 374 |
| 0.9% | 0.14 | 0.12/0.22 | 485 |
| 1.0% | 0.05 | 0.10/0.16 | 529 |
| 1.1% | 0.05 | 0.05/0.09 | 712 |
| 1.2% | 0.03 | 0.00/0.10 | 93,958 |

URL: https://kalshi.com/markets/kxusppi. Thin books except the 1.2% strike. Read roughly: median around 0.5–0.6% (above the 0.4% consensus), P(>0.4) about 0.65, P(>0.9) about 0.15. "Above x" settlement detail (strictly above, one decimal) should be checked against the claim's bands.

Also found (not this quantity): Kalshi KXUSPPIYOY ladder and Polymarket "PPI YoY - October 2026" (https://polymarket.com/event/ppi-yoy-october-2026) on the 12-month change, e.g. Kalshi "above 6.6%" 0.50, "above 6.3%" 0.75; Polymarket buckets 6.6% 0.24, ≥6.8% 0.31 (liquidity ~USD 0.5–2.3k per bucket). Manifold "Will October 2026 U.S. PPI final demand rise at least 0.3% m/m?" 0.54 (volume M42, negligible).

## Other forecasts
- Bloomberg consensus 0.4% (in the dossier). No bank model found.
