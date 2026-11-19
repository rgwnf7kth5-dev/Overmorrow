# ua-drones-22 — signals
- `node scripts/markets.mjs search "russia drones ukraine"` (read 2026-11-19T17:52:39Z): no market on nightly drone counts. Matches were Manifold "Russia x Ukraine ceasefire in 2026?" (0.044, volume ~16.9k, closes 2026-12-31) and Polymarket "NATO downs another Russian drone by November 30?" (0.58, volume ~1.7k) — neither question nor settlement matches the claim.
- `node scripts/markets.mjs search "russia massive strike ukraine november"` (read 2026-11-19T17:52:44Z): only Polymarket ceasefire/NATO-clash/Lyman markets (e.g. "Russia x Ukraine ceasefire agreement by December 31, 2026?" 0.095, volume ~3.6m) — not matching.
- `node scripts/markets.mjs search "crimean bridge retaliation"` (read 2026-11-19T17:52:48Z): only "Will Ukraine recapture Crimean territory by December 31, 2026?" (0.017) — not matching.
- No bookmaker odds or published models of nightly attack sizes found.
