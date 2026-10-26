# cz-prague-three-party-28 — signals

- `node scripts/markets.mjs search "Mayor of Prague"` (read 2026-10-26T18:25:25Z): Polymarket "Next Mayor of Prague" https://polymarket.com/event/next-mayor-of-prague-2026 — Hlaváček Yes 0.955 (volume ~14.6k USD, liquidity ~14.4k), Portlík 0.03 (vol ~19.9k), Scheinherr 0.021 (vol ~6.5k), others ≤0.0015. Does NOT match: question is who becomes mayor (no date, no coalition composition); it only shows a STAN-led council is expected either with or without Praha sobě.
- `node scripts/markets.mjs search "Prague"` (read 2026-10-26T18:25:04Z): no other relevant market (football results).
- `node scripts/markets.mjs search "Czech"` (read 2026-10-26T18:24:52Z): only the mayor markets above.
- Bookmakers (Tipsport, Fortuna): not read (JS-only); municipal coalition timing is not normally listed.
- Published models: none.
- Result: no market matching the question, deadline or settlement.
