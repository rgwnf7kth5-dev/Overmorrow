# il-turnout: signals

Read with `node scripts/markets.mjs search "Israel turnout"` at 2026-10-25T18:00:52Z.

## Polymarket: "Israeli Legislative Election: Turnout"
- URL: https://polymarket.com/event/israeli-legislative-election-turnout
- Market closes 2026-10-28T03:59Z.

| Bucket | Price | Volume | Liquidity |
|---|---|---|---|
| <66% | 0.0065 | $1.8k | |
| 66–68% | 0.005 | $1.2k | |
| 68–70% | 0.10 | $2.5k | $15k |
| 70–72% | 0.235 | $3.2k | $15k |
| 72–74% | 0.245 | $3.4k | $14k |
| ≥74% | 0.385 | $7.1k | $23k |

- **Implied numbers (normalised; the buckets sum to 0.977):**
  - Median about 73%.
  - P(>70.63) about 0.81, interpolating within the 70–72 bucket.
- **Match:** partial. The market closes 28 Oct, so it likely settles on the election-night CEC figure rather than the official results. In 2022 the election-night figure was about 0.7 pp higher than the official one (71.3 vs 70.63). The rules were not read.

## Kalshi: KXISRAELTURNOUT, ballots cast
- URL: https://kalshi.com/markets/kxisraelturnout
- Closes 2026-10-27T03:59Z, before the vote.

| Ballots cast | Last | Bid / ask |
|---|---|---|
| ≥4.8M | 0.99 | |
| ≥4.9M | 0.99 | |
| ≥5.0M | | 0.92 / 0.99 |
| ≥5.1M | 0.85 | 0.84 / 0.93 |
| ≥5.2M | 0.79 | 0.78 / 0.87 |
| ≥5.25M | 0.68 | |
| ≥5.3M | 0.59 | 0.51 / 0.59 |
| ≥5.4M | 0.30 | 0.29 / 0.36 |
| ≥5.5M | 0.07 | 0.10 / 0.17 |
| ≥5.6M | | 0.02 / 0.10 |

- **Volume:** tiny, under 5k per strike.
- **Converting to turnout:** at about 7.3M eligible, 5.16M = 70.63% and 5.3M ≈ 72.6%. The precise 2026 electorate was not found.
- **Match:** no. The unit is ballots, not percent, but it can be converted.

## Models and bookmakers
- No turnout model was found.
- Bookmakers were not checked.
