# nz-results-28 — signals
Read 2026-11-25T17:46Z.

## Markets
- `node scripts/markets.mjs search "New Zealand election"` (read 2026-11-25T17:46:02Z):
  - Kalshi KXNEWZEALANDPARLI "Will National win the next New Zealand general election?" Yes 0.39 (bid 0.38/ask 0.40), volume 1,356,685; Labour 0.61 (vol 997,981); closes 2027-12-31. Does NOT match (refers to the next election, apparently 2029).
  - Polymarket "National win the most seats" 0.9945 (vol $799,839) and "National 40-44 seats" 0.991 (vol $22,701, liq $5,530) — closes 2026-11-08T04:59Z (settled on preliminary result); not the bloc question. Labour 35-39 seats 0.9815; Opportunity 7-9 seats 0.9695.
- `node scripts/markets.mjs search "New Zealand prime minister"` (17:46:10Z) / `"Luxon"` (17:46:19Z):
  - Polymarket "Will Christopher Luxon be the next Prime Minister of New Zealand after the 2026 elections?" Yes 0.805 (vol $142,587, liq $16,411); Hipkins 0.205. Related (who governs), not the seat-majority question.
  - Manifold "Chris Luxon NZ Prime Minister on 1 Feb 2027?" 0.734 (vol 6,654). Related only.
- `node scripts/markets.mjs search "New Zealand coalition government"` (17:46:27Z):
  - Polymarket "next governing coalition include National + ACT + NZF?" Yes 0.79 (vol $45,294, liq $6,350; close date shown 2026-11-08 but still listed active). Related (government formation), not seat majority.
  - Manifold "Labour forms a government in 2026 without requiring support from Te Pāti Māori" 0.027.
- `node scripts/markets.mjs search "New Zealand seats"` (17:46Z): same Polymarket seat-band markets as above (preliminary, closed 8 Nov).
- No market on whether the right bloc keeps a seat majority in the official count. market_search: "New Zealand election", "New Zealand prime minister", "Luxon", "New Zealand coalition government", "New Zealand seats".

## Published models / probabilities
- None found. 1News and interest.co.nz give scenarios only, no probabilities. No bookmaker prices quoted in news read.

## Our earlier figures in this case
## Our earlier figures in this case: nz-general-election-2026
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-08 nz-election-coalition-majority-2: 61% — happened (right side)
- 2026-11-08 nz-election-national-share-3: range 22.52–33.3, centre 27.88 — measured 29.21 (inside)
- 2026-11-08 nz-election-opportunity-5pct-4: 73% — happened (right side)
- 2026-11-08 nz-election-party-vote-1: 62% — happened (right side)
Resolved yes/no claims: 3. We stated 65% on average for the side we favoured and were right 3 of 3 times (Brier 0.123; a coin scores 0.250).
On average the outcome was 35 points more often yes than our figures.
