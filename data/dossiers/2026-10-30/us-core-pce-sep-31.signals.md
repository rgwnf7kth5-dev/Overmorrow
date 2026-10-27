# us-core-pce-sep-31 — signals

Read 2026-10-27T18:12:56Z via `node scripts/markets.mjs search` ("PCE September", "core PCE").

- Polymarket "Core PCE YoY - September 2026" buckets (closes 2026-10-29T13:30Z): 3.1% 0.475, 3.2% 0.221, ≥3.3% 0.053 → sum for ≥ 3.1% ≈ 0.75 (3.0% bucket 0.21; ≤2.9% ≈ 0.005). Bucket sum over all outcomes ≈ 0.96, so normalised ≈ 0.78. MATCH on quantity and threshold (one-decimal printed value); liquidity thin ($412–$521 per bucket).
- Related m/m markets: Kalshi core m/m > 0.2% at 0.86, > 0.3% at 0.19; Polymarket m/m = 0.3% at 0.595.
- Model: Cleveland Fed nowcast 3.05% y/y (via fattail.ai, ~22 Oct) — exactly on the rounding boundary.
