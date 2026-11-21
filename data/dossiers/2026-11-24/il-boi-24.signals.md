# il-boi-24 — signals
Read 2026-11-21T18:01–18:02Z.

## Markets
Searches: `node scripts/markets.mjs search "Bank of Israel"` (read 2026-11-21T18:01:51Z and 18:02:18Z), `… "Israel interest rate"` (18:01:54Z), `… "Israel rate cut"` (18:01:59Z). All three return the same Bank of Israel set:

| Source | Question | Price | Volume | Closes | Matches the claim? |
|---|---|---|---|---|---|
| Polymarket (exchange), https://polymarket.com/event/bank-of-israel-decision-in-november-2026 | "Will the Bank of Israel make no change to the Bank of Israel Interest Rate at the November meeting?" | Yes 0.8435 | ≈ $21.8k, liquidity ≈ $2.0k | 2026-11-23T23:59Z | **Yes**: same question (no change at the 23 Nov meeting), deadline 23 Nov, settles on the BoI decision |
| Polymarket, same event | "… decrease … by 25 bps at the November meeting?" | Yes 0.128 | ≈ $11.6k, liq ≈ $2.1k | 2026-11-23T23:59Z | complement (cut) |
| Polymarket, same event | "… increase … by 25 bps at the November meeting?" | Yes 0.0025 | ≈ $4.3k | same | complement (hike) |
| Polymarket, same event | "… decrease … by 50+ bps …" / "increase … by 50+ bps …" | 0.0085 / 0.0015 | ≈ $3.0k / $3.6k | same | complements |
| Kalshi (exchange), https://kalshi.com/markets/kxcbdisrael | "Will the Bank of Israel maintain the current rate at the November Monetary Committee meeting?" | Yes 0.85 | ≈ $3.2k | 2026-11-23T14:59Z | Yes (question matches; closes one minute before the 16:00 IST announcement) |
| Kalshi, same | "… cut 1-25bps at the November …" | Yes 0.11 | ≈ $21.2k | 2026-11-23T14:59Z | complement |
| Kalshi, same | "… cut more than 25bps" / "hike 1-25bps" / "hike more than 25bps" | 0.01 each | $3.7k / $2.8k / $8.3k | same | complements |
| Polymarket | January 2027 meeting: no change 0.67, cut 25 bp 0.19; February 2027: no change 0.72, cut 25 bp 0.17 | | ≈ $8.5k / $15.7k | 2027-01-04 / 2027-02-22 | No (later meetings) |

Sum check for November on Polymarket: no change 0.8435 + cut 25 0.128 + cut 50+ 0.0085 + hike 25 0.0025 + hike 50+ 0.0015 = 0.984. The two exchanges agree within 0.01 on a hold (0.84 vs 0.85) and on a 25 bp cut (0.128 vs 0.11).

Unrelated Israel results (Manifold West Bank annexation and similar) omitted as not matching.

## Published models and analysts
- Trading Economics calendar: consensus 3.25%, TE forecast 3.25% for 23 Nov (https://tradingeconomics.com/israel/interest-rate, read 2026-11-21T18:00Z).
- Calcalist/CTech (16 Nov) argues a 25 bp cut "is now a more compelling possibility"; London fund managers met by Bank Hapoalim (Globes, 15 Nov) expect no cut "in the near term". No Reuters or Bloomberg poll found yet.

Market for the claim record: Polymarket "no change at the November meeting", p = 0.8435, read 2026-11-21T18:02:18Z.
