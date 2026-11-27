# ua-drones-30 — signals
Read at 2026-11-27T17:58Z.

## Markets
- `node scripts/markets.mjs search "russia drones ukraine"` (read 2026-11-27T17:58:41Z): no market on nightly drone counts. Closest, none matching quantity, deadline or settlement:
  - Manifold "Russia x Ukraine ceasefire in 2026?" 0.044 (vol ~16.9k, liquidity 1000) — https://manifold.markets/HillaryClinton/russia-x-ukraine-ceasefire-in-2026 — does not match.
  - Polymarket "NATO downs another Russian drone by November 30?" 0.185 (vol ~3.0k, liquidity ~151) — https://polymarket.com/event/nato-downs-another-russian-drone-byptptpt-20261022 — does not match.
- `node scripts/markets.mjs search "russia massive strike ukraine"` (read 2026-11-27T17:58:46Z): only ceasefire markets, e.g. Polymarket "Russia x Ukraine ceasefire agreement by November 30, 2026?" 0.0065 (vol ~458k, liquidity ~56k) — https://polymarket.com/event/russia-x-ukraine-ceasefire-agreement-by — does not match (a ceasefire by 28 Nov would only matter as a tail risk for the count); "… by December 31, 2026?" 0.075 (vol ~3.69M).
- No bookmaker odds, published models or analysts' forecasts of nightly counts found. Level statements only (facts, in the dossier): Ihnat "up to 200 drones every night" (21 Nov); Zelensky "new large-scale attack … over the coming days" (26 Nov evening).

Conclusion: nothing matches.

## Our earlier figures in this case: ua-nightly-drones
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-25 ua-drones-25: 63% — did not happen (wrong side)
- 2026-11-26 ua-drones-26: 52% — did not happen (wrong side)
- 2026-11-27 ua-drones-27: range 96.8–310, centre 147.8 — pending (pending)
Resolved yes/no claims: 2. We stated 57% on average for the side we favoured and were right 0 of 2 times (Brier 0.334; a coin scores 0.250).
On average the outcome was 57 points more often no than our figures.
The same question (ua-drones): we stated 54% on average for yes; it happened 4 of 14 times.

- Note: ua-drones-27 should resolve at 113, inside its range but below its centre 147.8. ua-drones-28 (night to 27 Nov; centre 140.2, range 86.8–324 per ua-drones-29 signals) should resolve at 155. ua-drones-29 (agents' mean q10 88.2 / q50 135.4 / q90 291, data/planning/2026-11-29.json) is pending.
