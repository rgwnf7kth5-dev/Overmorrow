# fr-cpi-28 — signals
Read 2026-11-25T17:47–17:49Z.

## Markets
- `node scripts/markets.mjs search "France inflation"` (read 2026-11-25T17:48:02Z): only 2027 French presidential election markets. No match.
- `node scripts/markets.mjs search "French CPI"` (read 2026-11-25T17:48:10Z): same presidential markets. No match.
- `node scripts/markets.mjs search "eurozone inflation November"` (read 2026-11-25T17:48:33Z): Polymarket "Eurozone Annual Inflation 2026" brackets (annual average 2026) — different question, deadline and settlement. No match.
- market_search: ["France inflation", "French CPI", "eurozone inflation November"] — nothing matches the claim.

## Model output
- `node scripts/refdata/models.mjs quantiles 3.5 0.19 1.6` → {"q10":3.1104,"q50":3.5,"q90":3.8896}
  (centre = Econoday consensus 3.5; sd 0.19 = RMS of 9 Nasdaq-calendar surprises; factor 1.6.)

## Published models / bookmaker prices
- None found.

## Our earlier figures in this case
## Our earlier figures in this case: fr-cpi
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-10-31 fr-cpi-oct-31: 74% — happened (right side)
Resolved yes/no claims: 1. We stated 74% on average for the side we favoured and were right 1 of 1 times (Brier 0.068; a coin scores 0.250).
