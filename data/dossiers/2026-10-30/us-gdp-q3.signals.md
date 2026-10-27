# us-gdp-q3 — signals

Markets read via `node scripts/markets.mjs search` at 2026-10-27T18:12:40Z (queries "GDP Q3 2026", "US GDP growth", "real GDP increase Q3").

## Exchange markets (question: BEA Q3 2026 real GDP growth; MATCH on quantity — check deadline/threshold notes)
Kalshi event "US real GDP growth in Q3 2026?" (ticker dated 26OCT30, closes 2026-10-30T12:29Z, i.e. after the 29 Oct release; thresholds are strict "more than X%"):
| Threshold | Yes price | Bid/Ask | Volume ($) |
|---|---|---|---|
| > 0.0% | 0.99 | 0.98/1.00 | 6,779 |
| > 1.0% | 0.99 | 0.98/0.99 | 10,373 |
| > 1.5% | 0.97 | 0.96/0.98 | 15,233 |
| > 2.0% | 0.92 | 0.90/0.92 | 82,739 |
| > 2.5% | 0.81 | 0.80/0.81 | 36,573 |
| > 3.0% | 0.65 | 0.64/0.65 | 35,602 |
| > 3.5% | 0.29 | 0.28/0.29 | 24,516 |
| > 4.0% | 0.08 | 0.06/0.09 | 94,544 |
Implied median roughly 3.2–3.3%; implied 10–90% band roughly 2.0–3.9%.

Polymarket (closes 2026-10-30T03:59Z): "US GDP growth in Q3 2026 greater than 3.0%?" Yes 0.635 (vol $49,051, liquidity $5,130); "between 2.5% and 3.0%" 0.195 (vol $5,418); "between 2.0% and 2.5%" 0.085 (vol $4,020). Boundary handling of exactly 3.0 per Polymarket rules not checked.

Metaculus: only long-range GDP questions (no match).

## Published models / nowcasts (models, not facts)
- Atlanta Fed GDPNow: 3.4% on 27 Oct 2026 (next update 28 Oct) — https://www.atlantafed.org/cqer/research/gdpnow (read 2026-10-27T18:07Z). Path: 3.7 (6 Oct), 3.6 (8 Oct), 3.6 (15 Oct), 3.5 (20 Oct) — https://www.atlantafed.org/research-and-data/data/gdpnow/current-and-past-gdpnow-commentaries (read 2026-10-27T17:57Z). Earlier: 4.31 (14 Aug) → 4.03 (18 Aug) per investinglive.com.
- NY Fed Staff Nowcast: 2.67% (16 Oct), per https://fattail.ai/q3-gdp-2026-preview/ (not read at source).
- Fattail.ai (22 Oct) also cites Kalshi > 3.0% at 61–64c then; now 65c.
