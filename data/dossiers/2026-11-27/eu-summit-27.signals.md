# eu-summit-27 — signals
Read at 2026-11-24T17:57–17:59Z.

## Markets
- `node scripts/markets.mjs search "ECB president"` (read 2026-11-24T17:58:58Z):
  - Polymarket "Will Pablo Hernández de Cos be the next President of the European Central Bank?" Yes 0.96 (vol ~8.2k, liquidity ~1.3k, closes 2027-02-08) — https://polymarket.com/event/next-ecb-president . Question match: NO — it is about who eventually becomes president, not about leaders' endorsement on 26 Nov. Useful only as a ceiling: the market sees de Cos as near-certain eventually.
  - Polymarket "Will Klaas Knot be the next President…?" Yes 0.034 (vol ~5.5k).
  - Kalshi "Will Pablo Hernández de Cos be the next President of the ECB before Jan 1, 2028?" Yes 0.98 (vol ~5.0k). Same mismatch.
- `node scripts/markets.mjs search "Hernandez de Cos"` (17:58:16Z) and `"Knot ECB"` (17:59:18Z): same markets. `"Lagarde successor"` (17:58:09Z): no relevant market.
- Metaculus: queried through markets.mjs (no errors returned); no matching question.
- No market on the timing of the political endorsement (26 Nov vs later). No bookmaker odds or published models found.

## Board question (our own figures)
- eu-ecb-president-nominated-2026 (formal Council recommendation or appointment by 31 Dec 2026): last entry 2026-11-20 p = 0.83 (data/watchlist.json). Different question (formal step by year-end).

## Our earlier figures in this case: ecb-presidency-succession
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-01 ecb-candidate-31: 10% — did not happen (right side)
- 2026-11-07 ecb-nom-1: 81% — happened (right side)
- 2026-11-07 ecb-nom-2: 29% — did not happen (right side)
- 2026-11-08 ecb-list-1: 61% — happened (right side)
- 2026-11-08 ecb-list-2: 25% — did not happen (right side)
Resolved yes/no claims: 5. We stated 76% on average for the side we favoured and were right 5 of 5 times (Brier 0.069; a coin scores 0.250).
On average the outcome was neither above nor below our figures.
