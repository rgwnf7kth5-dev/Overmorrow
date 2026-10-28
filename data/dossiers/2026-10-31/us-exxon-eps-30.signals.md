# us-exxon-eps-30 — signals

- `node scripts/markets.mjs search "XOM quarterly earnings"` / `"ExxonMobil beat"` / `"Exxon earnings"` / `"Exxon"` (read 2026-10-28T18:12:10Z–18:12:41Z):
  - Polymarket "Will ExxonMobil (XOM) beat quarterly earnings?" threshold $4.12 (created 2026-10-24; rules: "Street consensus estimate … non-GAAP EPS … $4.12 as of market creation"; resolves on non-GAAP EPS in company documents, > $4.12) — https://polymarket.com/event/xom-quarterly-earnings-nongaap-eps-10-30-2026-4pt12 — Yes 0.70–0.705, volume ~$4.0k, liquidity ~$274. Match: partial (same metric and date, threshold $4.12 vs our $4.03; thin).
  - Same, threshold $4.11 (created 2026-10-21) — https://polymarket.com/event/xom-quarterly-earnings-nongaap-eps-10-30-2026-4pt11 — Yes 0.755, volume ~$4.0k, liquidity ~$305. Match: partial (threshold $4.11).
  - Same, threshold $3.87 (older listing dated 10-23) — https://polymarket.com/event/xom-quarterly-earnings-nongaap-eps-10-23-2026-3pt87 — Yes 0.915, volume ~$826, liquidity ~$380. Match: partial (threshold $3.87).
  - Implication: markets price beats of $4.11–4.12 at 0.70–0.76, so a $4.03 threshold would imply a higher figure (rough interpolation 0.80–0.85). The "Street consensus" in these rules ($4.11–4.12, Seeking Alpha basis) is higher than Yahoo's $4.03.
  - Polymarket "XOM Q3 production above 4.5M koebd": Yes 0.475, volume ~$571, liquidity ~$20. Match: none.
  - Kalshi "ExxonMobil Credit Card Spend in October" — unrelated.
- Chevron for context: Polymarket "Will Chevron (CVX) beat quarterly earnings?" threshold $4.88 — Yes 0.755, volume ~$3.0k, liquidity ~$373 (read 2026-10-28T18:12:20Z) — https://polymarket.com/event/cvx-quarterly-earnings-nongaap-eps-10-30-2026-4pt88. Match: none.
- Bookmakers/other models: none found.
