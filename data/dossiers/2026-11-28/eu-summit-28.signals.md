# eu-summit-28 — signals
Read 2026-11-25T17:47–17:49Z.

## Markets
- `node scripts/markets.mjs search "EU Ukraine loan"` (read 2026-11-25T17:48:24Z): no match. Top results unrelated: Polymarket "Russia military action against an EU country by December 31, 2026?" 0.1195; "NATO/EU troops fighting in Ukraine by December 31, 2026?" 0.0405; "Next Russia-Ukraine-EU Trilateral Diplomatic Meeting by December 31, 2026?" 0.26.
- `node scripts/markets.mjs search "European Council Ukraine"` (17:48:32Z): no match (Swiss Federal Council by-election markets; Manifold "Ukraine joins EU before 2029?" 0.09).
- `node scripts/markets.mjs search "EU budget MFF"` (17:48:39Z): no match (Von der Leyen out in 2026 0.0295; ECB/eurozone inflation markets).
- `node scripts/markets.mjs search "Ukraine 45 billion"` (17:48:47Z): no match (ceasefire/peace-deal markets).
- No question, deadline or settlement matches the claim. market_search: ["EU Ukraine loan", "European Council Ukraine", "EU budget MFF", "Ukraine 45 billion"]. Same result as the 24 Nov searches for eu-ukr-27.

## Bookmakers / published models
- None found. No news report quoting prices.

## Board question (our own figures)
- eu-mff-deal-2026 (political agreement on the 2028–2034 MFF by 31 Dec 2026): last entry 2026-11-13 p = 0.11 (combined 0.107) in data/watchlist.json; the eu-ukr-27 dossier cites a 20 Nov entry of 0.07. Different question (MFF, not the Ukraine loan), linked through Merz's condition.

## Our earlier figures in this case: ecb-presidency-succession
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-01 ecb-candidate-31: 10% — did not happen (right side)
- 2026-11-07 ecb-nom-1: 81% — happened (right side)
- 2026-11-07 ecb-nom-2: 29% — did not happen (right side)
- 2026-11-08 ecb-list-1: 61% — happened (right side)
- 2026-11-08 ecb-list-2: 25% — did not happen (right side)
- 2026-11-27 eu-summit-27: 50% — pending (pending)
- 2026-11-27 eu-ukr-27: 10% — pending (pending)
Resolved yes/no claims: 5. We stated 76% on average for the side we favoured and were right 5 of 5 times (Brier 0.069; a coin scores 0.250).
On average the outcome was neither above nor below our figures.

Note: the directly comparable earlier figure is eu-ukr-27 (same agreement, by 23:59 Thursday only): 10%, pending.
