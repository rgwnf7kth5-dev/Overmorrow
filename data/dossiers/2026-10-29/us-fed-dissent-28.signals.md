# us-fed-dissent-28 — signals

`node scripts/markets.mjs search "dissent October Fed"`, read 2026-10-26T18:20Z:
- Polymarket "Will no one dissent the October Fed decision?" — Yes 0.23 / No 0.77 — volume $19.8k, liquidity $7.1k — closes 2026-10-28T15:59Z — https://polymarket.com/event/how-many-dissent-at-the-october-fed-meeting — **match (inverse)**: No = at least one dissent; settles on the FOMC statement. Count buckets: one 0.15, two 0.305, three 0.22, four+ 0.037.
- Kalshi KXFOMCDISSENTCOUNT-26OCT: 0 dissents 0.20 (vol $11.8k); 1: 0.14; 2: 0.30; 3: 0.23; 4: 0.03; 5: 0.03 — https://kalshi.com/markets/kxfomcdissentcount — match (1 − P(0) ≈ 0.80).
- Kalshi KXFEDDISSENT (who dissents): Hammack 0.64 ($10.6k), Logan 0.60, Kashkari 0.36, Bowman 0.06, Williams 0.04, Waller 0.04, Cook 0.02, Jefferson/Barr/Powell/Warsh 0.01 — https://kalshi.com/markets/kxfeddissent — related.
- Kalshi KXFEDCOMBO: "No change AND dissents >0" 0.85; "No change AND dissents 0" 0.13; "Hike AND dissents 0" 0.04; "Hike AND dissents >0" 0.02 — https://kalshi.com/markets/kxfedcombo — implied P(dissent) ≈ 0.87 (thin).
- All markets are thin (≤ $20k). Spread of implied P(at least one dissent): 0.77–0.87.
- No forecast-board question on dissents; no bookmaker line or published model found.
