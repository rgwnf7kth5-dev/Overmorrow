# ua-pow-23 — signals
Read at 2026-11-20T18:11–18:13Z.

## Markets
- `node scripts/markets.mjs search "russia ukraine prisoner exchange"` (read 2026-11-20T18:11:42Z) and `node scripts/markets.mjs search "prisoner exchange november 30"` (read ~18:12:40Z):
  - Polymarket "Russia x Ukraine prisoner exchange by November 30, 2026?" — Yes 0.55 (0.565 in the second read), volume ~3.8k, liquidity ~1.2k, closes 2026-12-01T04:59Z. https://polymarket.com/event/russia-x-ukraine-prisoner-exchange-byptptpt — **Does not match:** its deadline is 30 Nov, not 22 Nov. Its settlement rules (any exchange) are close to ours. It bounds the claim from above: our window is a subset of its window.
  - Polymarket "Russia x Ukraine major prisoner exchange by November 30, 2026?" — Yes 0.425, volume ~2.9k, liquidity ~11.8k. Requires a "major" exchange and has a later deadline. Does not match.
  - Polymarket "… prisoner exchange by December 31, 2026?" 0.94 (volume ~7.4k); "… major … by December 31" 0.892 (volume ~5.3k). Later deadlines; do not match.
  - Manifold "Will Ukraine get back at least 1,000 prisoners from Russia in exchanges by November 30, 2026?" 0.497 (volume 32, liquidity 100). Different threshold and deadline; does not match.
- `node scripts/markets.mjs search "prisoner swap november"` (read 18:11:47Z): the same Polymarket markets.
- No bookmaker odds found. No published models or forecasts found.

Conclusion: no market matches the 21–22 Nov window. The 30 Nov exchange market (0.55–0.565) is an upper bound on our window.
