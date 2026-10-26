# us-fed-hold-28 — signals

`node scripts/markets.mjs search "Fed decision October"`, read 2026-10-26T18:20Z:
- Polymarket "Will there be no change in Fed interest rates after the October 2026 meeting?" — Yes 0.9145 — volume $23.3m, liquidity $351k — closes 2026-10-29T03:59Z — https://polymarket.com/event/fed-decision-in-october-20260617190323537 — **match** (question = no change at the 28 Oct meeting; settlement on the FOMC statement; deadline compatible).
- Same event: +25 bp 0.085 (vol $16.6m); +50 bp or more 0.0035; −25 bp 0.0005; −50 bp 0.0005. Implied hold ≈ 0.91.
- Kalshi combo (KXFEDCOMBO, Oct 2026): "No change AND dissents >0" 0.85, "No change AND dissents 0" 0.13, "25bp hike AND dissents 0" 0.04, "25bp hike AND dissents >0" 0.02 — implied hold ≈ 0.98 by this (thin, ~$10k each) market; https://kalshi.com/markets/kxfedcombo — related (joint outcome).
- Forecast board: us-fed-hike-28-oct (inverse). This claim = NOT(hike) minus P(cut); cut priced 0.0005, so inverse watch is exact to within 0.1 point. Board history 23 Oct p=0.06 for a hike.
- Earlier reads in sweep: CME FedWatch ~90% hold / ~10% hike (financecalendar, via world.json); 16 Oct Polymarket 87% no change (KuCoin flash).
- No bookmaker line or published model found.

Full URL of a dossier source whose slug carries a banned word:
- https://www.kucoin.com/news/flash/prediction-markets-raise-odds-of-no-fed-rate-hike-in-october (2026-10-17; 87% no change on Polymarket as of 16 Oct; Warsh refused to preview)
