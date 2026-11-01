# au-rba-1 — signals

Read 2026-11-01T18:10–18:12Z with `node scripts/markets.mjs search`, queries "RBA", "Reserve Bank of Australia", "Australia rate November".

## Matching markets
- **Polymarket "Reserve Bank of Australia Decision in November"** (https://polymarket.com/event/reserve-bank-of-australia-decision-in-november, closes 2026-11-04T04:59Z, read 2026-11-01T18:10Z):
  - +25 bp: Yes 0.936 (vol $101,938, liq $3,909)
  - +50 bp or more: Yes 0.002 (vol $33,181)
  - no change: Yes 0.0635 (vol $97,760, liq $5,718)
  - −25 bp: 0.0005; −50 bp+: 0.0005
  Our claim (any increase) = +25 bp + 50+ bp ≈ 0.938. Question and deadline match (November meeting); settlement on the RBA statement. Liquid.
- **Kalshi KXCBDECISIONAUSTRALIA** (https://kalshi.com/markets/kxcbdecisionaustralia, closes 2026-11-03T03:29Z, read 2026-11-01T18:10Z): hike 1–25 bp 0.92 (vol 39,084); hike >25 bp 0.02 (vol 4,922); hold 0.08 (vol 28,582); cut 1–25 bp 0.01; cut >25 bp 0.01. Any increase ≈ 0.94 (prices sum to 1.04; normalised ≈ 0.90). Matches the claim.

## Other signals
- Australian rate-futures pricing quoted in news: about 60% the day before the CPI, about 90% on CPI day (Savings.com.au, 28 Oct); about 90% (CommBank, 28 Oct); 79% (Newsquawk, 30 Oct, per agenda.json).
- December meeting (Polymarket): no change 0.735, +25 bp 0.195.
