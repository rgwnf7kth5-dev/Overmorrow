# dell-25 — signals
Read 2026-11-22T17:59Z.

## Markets
- `node scripts/markets.mjs search "Dell earnings"` (read 2026-11-22T17:59:34Z):
  - Polymarket "Will Dell (DELL) beat quarterly earnings?" — https://polymarket.com/event/dell-quarterly-earnings-nongaap-eps-11-24-2026-6pt71 — Yes 0.875 / No 0.125, volume ≈ $1,961, liquidity ≈ $904. The slug implies a non-GAAP EPS threshold of $6.71 for the 24 Nov report. **Does not match**: it is about Q3 EPS, not full-year revenue guidance. Related evidence (a beat in the quarter makes a raise more likely).
  - Kalshi "What will Dell Technologies Inc. say during their next earnings call?" (kxearningsmentiondell, several word strikes, Yes 0.06–0.95, volumes $400–1,200) and Polymarket "Will Dell say "Vera Rubin" during earnings call?" (Yes 0.775). Do not match.
- `node scripts/markets.mjs search "Dell revenue guidance"` (17:59:37Z): Polymarket "Will Dell Q3 Infrastructure Solutions Group revenue be above __?" — https://polymarket.com/event/will-dell-q3-infrastructure-solutions-group-revenue-be-above — $33.5B Yes 0.9405; $35.0B Yes 0.84; $36.5B Yes 0.52; $38.0B Yes 0.51 (volumes $410–875, thin liquidity $100–330). **Does not match** (Q3 segment revenue, not FY guidance). Note the non-monotone 36.5/38.0 prices — thin book.
- `node scripts/markets.mjs search "Dell"` (17:59:40Z): unrelated (richest person, UFC). No match.

## Published models and analysts
- Earnings Whispers whisper number $7.25 vs consensus $6.77 (non-GAAP); preview: "investors have grown accustomed to raises, and holding the outlook steady may not be enough" (see dossier). No probability for a guidance raise found.

No market matches the claim's question (full-year revenue guidance midpoint above $192.0bn), deadline and settlement.
