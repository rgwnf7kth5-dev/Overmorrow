# ca-toronto-chow-reelected — signals

Read 2026-10-24T16:59Z with `node scripts/markets.mjs search "Toronto mayor"`.

| Source | Kind | Question | Price | Volume / liquidity | Match |
|---|---|---|---|---|---|
| Polymarket https://polymarket.com/event/toronto-mayoral-election-winner-545 | exchange | Will Olivia Chow win the 2026 Toronto mayoral election? | Yes 0.655 / No 0.345 | vol ~$330.5k, liq ~$97.7k | Same outcome (winner); settles on the election result, closes 2026-10-27T03:59Z. Good match. |
| same event | exchange | Will Brad Bradford win? | Yes 0.34 | vol ~$255k, liq ~$150k | Complement |
| Kalshi https://kalshi.com/markets/kxtorontomayor | exchange | Will Olivia Chow win? | Yes 0.67 (Bradford 0.34) | vol ~$44.7k | Same outcome; close date listed 2027-10-26 (settlement likely on certified result) |
| Manifold https://manifold.markets/cash/will-olivia-chow-be-reelected-mayor | platform | Will Olivia Chow be re-elected? | 0.66 | vol ~2.7k mana, liq 230 | Same outcome, thin |
| Polymarket margin https://polymarket.com/event/toronto-mayoral-election-margin-of-victory-20261016143050914 | exchange | Chow 0–4% 0.365, 4–8% 0.24, 8–12% 0.15, ≥12% 0.14; Bradford 0–4% 0.175, 4–8% 0.125, ≥8% 0.0245 | — | very thin (vol <$600 each) | Not reliable |

- blogTO (posted ~21 Oct) quoted Polymarket at Chow 65 / Bradford 37.
- No published forecast model found.
