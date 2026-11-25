# fr-sp-28 — signals
Read 2026-11-25T17:50Z.

## Markets
- `node scripts/markets.mjs search "S&P France"` (read 2026-11-25T17:50:34Z):
  - Polymarket "Moody's or S&P downgrades France by November 30, 2026?" — Yes 0.07 / No 0.93; volume $9,104, liquidity $938; closes 2026-12-01T04:59Z. https://polymarket.com/event/moodys-or-sp-downgrades-france-byptptpt. **Partial match only**: downgrade only (an outlook change does not count), includes Moody's, deadline 30 Nov. Comparable to the narrower alternative wording (S&P downgrade on 27 Nov); thin.
- `node scripts/markets.mjs search "France downgrade"` (17:50:38Z): same Polymarket market; Kalshi "Will a Moody's, S&P, or Fitch downgrade of France's credit rating be confirmed before 2027?" — Yes 0.20, volume 3,244; closes 2027-01-01T04:59Z; https://kalshi.com/markets/kxfrancedowngrade. Does not match (any of three agencies, to year-end, downgrade only).
- `node scripts/markets.mjs search "France credit rating"` (17:50:29Z): only French presidential election markets. No match.

## Published models / bookmakers
- None found.

## Our earlier figures in this case
## Our earlier figures in this case: fr-sovereign-rating
No earlier claim of this case in our editions (`node scripts/case-ledger.mjs fr-sovereign-rating --before 2026-11-28 --series fr-sp-28`).
(Related running story fr-budget-2027: 2026-11-19 fr-plfss-19 74% — happened; 2026-11-25 eu-dbp-25 76% — pending; 2026-11-27 fr-plfss-27 85% — pending.)

market_search: "S&P France", "France downgrade", "France credit rating" — partial match only (Polymarket downgrade-by-30-Nov, 0.07).
