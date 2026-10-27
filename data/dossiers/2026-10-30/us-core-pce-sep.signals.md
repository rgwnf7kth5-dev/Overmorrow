# us-core-pce-sep — signals

Read 2026-10-27T18:12:56Z–18:13:01Z via `node scripts/markets.mjs search` ("PCE September", "core PCE", "PCE inflation September 2026").

## Exchange markets — MATCH (Polymarket "Core PCE YoY - September 2026", closes 2026-10-29T13:30Z)
| Bucket | Yes | Volume ($) | Liquidity ($) |
|---|---|---|---|
| ≤ 2.7% | 0.002 | 2,662 | 1,053 |
| 2.8% | 0.0005 | 547 | 1,037 |
| 2.9% | 0.002 | 2,726 | 999 |
| 3.0% | 0.21 | 14,185 | 412 |
| 3.1% | 0.475 | 8,070 | 446 |
| 3.2% | 0.221 | 2,280 | 521 |
| ≥ 3.3% | 0.053 | 1,378 | 497 |
Sum ≈ 0.96 (unnormalised). Implied mode 3.1, mean ≈ 3.11. Thin liquidity.

## Related (monthly change, not the claim's quantity)
- Polymarket core PCE m/m September: 0.3% 0.595 (vol $16,768); 0.4% 0.225; 0.2% 0.0995; 0.1% 0.0155; ≥0.5% 0.009.
- Kalshi KXPCECORE-26SEP: > 0.2% 0.86 (bid 0.76/ask 0.92, vol $6,214); > 0.3% 0.19 (0.13/0.19, vol $6,349); > 0.4% 0.04.
- Manifold: core PCE m/m ≥ 0.3% 0.71 (vol 407, play money).
- Kalshi headline PCE m/m: > 0.4% 0.81; > 0.5% 0.17.

## Models
- Cleveland Fed inflation nowcast: core PCE September 3.05% y/y, +0.28% m/m (as cited by https://fattail.ai/q3-gdp-2026-preview/, ~22 Oct; not read at source).
