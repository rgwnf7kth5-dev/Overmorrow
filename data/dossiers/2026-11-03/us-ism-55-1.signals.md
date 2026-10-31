# us-ism-55-1 — signals

Polymarket "ISM Manufacturing PMI - October 2026" (https://polymarket.com/event/ism-manufacturing-pmi-october-2026). First seen via `node scripts/markets.mjs search ISM manufacturing` (read 2026-10-31T18:07:09Z: 56.0–56.9 bucket Yes 0.1045, volume $13,472, liquidity $633). Later script reruns were killed (host out of memory); the bucket list was read from the event page at about 2026-10-31T18:09Z.

Buckets at or above 55.0 (page's implied %, mid): 55.0–55.9 18%, 56.0–56.9 11% (chart header 10.8%), 57.0–57.9 <1%, 58.0–58.9 1%, 59.0+ 2% → sum about 0.32–0.33. Using last-trade prices instead (0.20 + 0.112 + 0.004 + 0.009 + 0.03) gives 0.355, but last prices across all buckets sum to 1.14, so the mid-based 0.32–0.33 is the better read.

Total event volume $37,493; liquidity thin (hundreds of dollars per bucket).

**Match:** good — the sum of buckets ≥ 55.0 is exactly the claim's YES set. The rules text did not render; whether a delayed release resolves differently from our criterion (NO on postponement) is unknown. Postponement risk is negligible anyway.

Kalshi, Manifold, Metaculus: no ISM October market found.

## Other signals
- Consensus 54.7; Trading Economics forecast 54.7.
