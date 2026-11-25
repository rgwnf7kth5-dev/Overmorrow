# es-cpi-28 — signals
Read 2026-11-25T17:48Z.

## Markets
- `node scripts/markets.mjs search "Spain inflation"` (read 2026-11-25T17:48:16Z): only Spanish PM / election markets. No match.
- `node scripts/markets.mjs search "Spanish CPI"` (read 2026-11-25T17:48:25Z): Spanish election seat/turnout markets. No match.
- `node scripts/markets.mjs search "eurozone inflation November"` (read 2026-11-25T17:48:33Z): Polymarket Eurozone 2026 annual-average brackets — different question. No match.
- market_search: ["Spain inflation", "Spanish CPI", "eurozone inflation November"] — nothing matches the claim.

## Model output
- `node scripts/refdata/models.mjs quantiles 4.9 0.19 1.6` → {"q10":4.5104,"q50":4.9,"q90":5.2896}
  (centre = Nasdaq calendar consensus 4.9; sd 0.19 = RMS of 14 Nasdaq-calendar surprises; factor 1.6.)

## Published models / bookmaker prices
- None found.

## Our earlier figures in this case
## Our earlier figures in this case: es-cpi
No earlier claim of this case in our editions.
