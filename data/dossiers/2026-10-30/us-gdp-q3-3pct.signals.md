# us-gdp-q3-3pct — signals

Read 2026-10-27T18:12:40Z via `node scripts/markets.mjs search` ("GDP Q3 2026", "US GDP growth").

- Kalshi KXGDP-26OCT30-T3.0 "Will real GDP increase by more than 3.0% in Q3 2026?": Yes 0.65 (bid 0.64 / ask 0.65), volume $35,602, closes 2026-10-30T12:29Z. NEAR-MATCH: same release, but strict "> 3.0%" — a print of exactly 3.0 is YES for our claim and NO on Kalshi. Kalshi > 2.5% at 0.81 brackets it.
- Polymarket "Will US GDP growth in Q3 2026 be greater than 3.0%?": Yes 0.635, volume $49,051, liquidity $5,130, closes 2026-10-30T03:59Z. NEAR-MATCH (same "greater than" boundary issue).
- Implied mass on exactly 3.0 from strike spacing is not observable; P(print ≥ 3.0) should sit a few points above the "> 3.0" prices.
- Models: GDPNow 3.4% (27 Oct, https://www.atlantafed.org/cqer/research/gdpnow); NY Fed Staff Nowcast 2.67% (16 Oct, via fattail.ai).
