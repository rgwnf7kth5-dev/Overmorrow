# ua-drones-29 — signals
Read at 2026-11-26T17:56Z.

## Markets
- `node scripts/markets.mjs search "russia drones ukraine"` (read 2026-11-26T17:56:26Z): no market on nightly drone counts. Closest, none matching quantity, deadline or settlement:
  - Manifold "Russia x Ukraine ceasefire in 2026?" 0.044 (vol ~16.9k, liquidity 1000) — https://manifold.markets/HillaryClinton/russia-x-ukraine-ceasefire-in-2026 — does not match.
  - Polymarket "NATO downs another Russian drone by November 30?" 0.225 (vol ~3.0k) — https://polymarket.com/event/nato-downs-another-russian-drone-byptptpt-20261022 — does not match.
- `node scripts/markets.mjs search "shahed drones night"` (read 2026-11-26T17:56:31Z): nothing relevant (top hit an Israeli election market).
- `node scripts/markets.mjs search "russia massive strike ukraine november"` (read 2026-11-26T17:56:35Z): only ceasefire/NATO-clash markets, e.g. Polymarket "Russia x Ukraine ceasefire agreement by November 30, 2026?" 0.0075 (vol ~435k) — https://polymarket.com/event/russia-x-ukraine-ceasefire-agreement-by — does not match (a ceasefire by 28 Nov would only matter as a tail risk for the count).
- No bookmaker odds, published models or analysts' forecasts of nightly counts found. Level statements only (facts, in the dossier): Ihnat "up to 200 drones every night" (21 Nov); Zelensky "completing preparations for a new massive strike" (26 Nov).

Conclusion: nothing matches.

## Our earlier figures in this case: ua-nightly-drones
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-25 ua-drones-25: 63% — did not happen (wrong side)
- 2026-11-26 ua-drones-26: 52% — pending (pending)
- 2026-11-27 ua-drones-27: range 96.8–310, centre 147.8 — pending (pending)
Resolved yes/no claims: 1. We stated 63% on average for the side we favoured and were right 0 of 1 times (Brier 0.397; a coin scores 0.250).
The same question (ua-drones): we stated 54% on average for yes; it happened 4 of 13 times.

- Note: ua-drones-26 (≥150) should resolve NO on 112; ua-drones-27 should resolve at 113, inside its range 96.8–310 but below its centre 147.8. ua-drones-28 (centre 140.2, range 86.8–324) is not yet in the ledger.
