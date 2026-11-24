# kr-bok-27 — signals
Read 2026-11-24T17:58–17:59Z.

## Markets
- `node scripts/markets.mjs search "Bank of Korea"` (read 2026-11-24T17:59:42Z):
  - Polymarket "Will the Bank of Korea hike by 25 bps at the November 2026 meeting?" — Yes 0.9925; volume $22,876, liquidity $11,358; closes 2026-11-26T00:00Z. **Matches** the claim (25bp hike at the 26 Nov meeting). Settlement on the BoK announcement; same question.
  - Polymarket "…hold at the November 2026 meeting?" — Yes 0.0095 (vol $28,453, liq $12,826). "…hike by 50 bps or more" 0.0005; "…cut by 25 bps" 0.0005.
  - Kalshi KXCBDECISIONKOREA-26NOV25-H25 "Hike 1-25bps" — 0.99 (bid 0.99 / ask 1.00), volume 3,824; HOLD 0.01 (bid 0.01/ask 0.02); "Hike more than 25bps" 0.02 (bid 0 / ask 0.01). Matches.
  - Later meetings (Polymarket): January 2027 +25bp 0.22, no change 0.75; February 2027 +25bp 0.645.
- `node scripts/markets.mjs search "Korea interest rate"` (17:58:48Z): first results unrelated (North Korea); BoK markets as above.
- `node scripts/markets.mjs search "BOK rate hike"` (17:58:55Z): same BoK November markets.
- No Metaculus error reported.

## Published models / surveys with probabilities
- KOFIA survey (24 Nov): 54% of 100 bond managers expect a hike, 46% a hold (in the dossier; a share of respondents, not a probability).
- No bookmaker prices found.

## Our earlier figures in this case
No earlier claim of this case in our editions (`node scripts/case-ledger.mjs kr-bok-rates --before 2026-11-27 --series kr-bok-27`).

Note: the market (≈99%) is far more confident than the KOFIA survey split (54/46); the analysts' calendar consensus and named banks (ING, Citi, Bloomberg Economics, Morgan Stanley) all say +25bp.
