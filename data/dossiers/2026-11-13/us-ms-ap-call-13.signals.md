# Signals: us-ms-ap-call-13

- `node scripts/markets.mjs search Mississippi Senate` (read 2026-11-10T17:56:33Z): Kalshi "Will Republicans win the Senate race in Mississippi?" (Cindy Hyde-Smith) Yes 0.011 (bid 0.011 / ask 0.012), volume ~24.26M, closes 2027-11-03 — https://kalshi.com/markets/senatems . A Democratic (Colom) leg SENATEMS-26-D was listed; its price was cut from the output. Question is the eventual winner, not an AP call by 12 Nov: does NOT match the claim (deadline and criterion differ), but implies the market sees Colom's win as near-settled.
- `node scripts/markets.mjs search Hyde-Smith` (read 2026-11-10T17:56:40Z): Kalshi "Will Cindy Hyde-Smith receive at least 50% of the popular vote in the 2026 Mississippi Senate election?" Yes 0.02 (bid 0 / ask 0.02) — https://kalshi.com/markets/kxvotegeneral . Does not match.
- `node scripts/markets.mjs search Colom` (~2026-11-10T17:56Z) and `node scripts/markets.mjs search Colom AP call` (2026-11-10T17:59:13Z): process killed (exit 137) with no output; repeated `search Mississippi Senate` re-runs also killed. No result recorded.
- No market found on the timing of an AP call. No bookmaker odds or published models found.
