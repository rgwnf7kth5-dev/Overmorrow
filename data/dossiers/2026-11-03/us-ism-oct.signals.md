# us-ism-oct — signals

`node scripts/markets.mjs search ISM manufacturing` (read 2026-10-31T18:07:09Z) returned the Polymarket event "ISM Manufacturing PMI - October 2026" (https://polymarket.com/event/ism-manufacturing-pmi-october-2026), e.g. the 56.0–56.9 bucket Yes 0.1045, volume $13,472, liquidity $633, closes 2026-11-02T06:00Z. Two later reruns of the script were killed (out of memory on the host), so the full bucket list was read from the event page via WebFetch at about 2026-10-31T18:09Z:

| Bucket | Yes price | Page's implied % | Volume |
|---|---|---|---|
| <51.0 | 0.009 | 1% | $737 |
| 51.0–51.9 | 0.045 | 3% | $1,317 |
| 52.0–52.9 | 0.148 | 8% | $3,249 |
| 53.0–53.9 | 0.22 | 21% | $6,366 |
| 54.0–54.9 | 0.36 | 35% | $4,757 |
| 55.0–55.9 | 0.20 | 18% | $4,816 |
| 56.0–56.9 | 0.112 | 11% | $13,444 |
| 57.0–57.9 | 0.004 | <1% | $1,168 |
| 58.0–58.9 | 0.009 | 1% | $820 |
| 59.0+ | 0.03 | 2% | $819 |

Total volume $37,493. Thin: per-bucket liquidity is in the hundreds of dollars. Prices (last trade) sum to about 1.14; the page's implied % (mid) sum to about 1.00 — use the implied column. The 52.0–52.9 bucket shows a large gap between last price and mid.

**Match:** question and buckets match the claim (October 2026 headline, one-decimal buckets aligned on whole numbers). The rules text did not render, so the handling of a delayed release is unknown; the page's end date is 2 Nov 2026.

Kalshi: no ISM market came up in the search (the "ISM" query returned unrelated Heisman markets). Manifold/Metaculus: nothing found.

## Other signals
- Consensus 54.7 (Newsquawk, investingLive, Trading Economics); Trading Economics model forecast 54.7.
