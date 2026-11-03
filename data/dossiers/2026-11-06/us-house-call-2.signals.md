# us-house-call-2 — signals

Read 2026-11-03T18:03Z with `node scripts/markets.mjs search`, queries "AP call House", "Will AP call US House control", "When will AP call House".

## Markets
- **Polymarket "Will AP call US House control by November 5, 11:59 PM?"** (https://polymarket.com/event/ap-calls-the-house-byptptpt), read 18:03:16Z: Yes 0.872, volume $11,046, liquidity $11,740; closes 2026-11-06T04:59Z. **Match:** same deadline, but it also pays on a call before our window opens at 00:00 ET on 4 Nov; a match once the morning rewrite handles that case. Settlement rules not read.
- **Kalshi "before 12AM ET on Nov 6"** (https://kalshi.com/markets/kxapcallhouse), read 18:03:16Z: 0.85, bid 0.85, ask 0.90, volume 5,843. Same deadline and same caveat. Cached snapshot.
- Rungs before the window, which give the share that falls outside it: Kalshi before 11PM 3 Nov 0.02; before 12AM 4 Nov 0.44 (bid 0.32, ask 0.39, last stale); before 1AM 0.55; before 4AM 0.74. Polymarket by 3 Nov 10:59 PM 0.045 (liq $10,300); by 3 Nov 11:59 PM 0.605 (liq $119, thin); by 4 Nov 12:59 AM 0.59; 3:59 AM 0.545 (both thin, ladder incoherent); by 4 Nov 11:59 PM 0.83 (liq $911).
- Later: Polymarket by 6 Nov 0.867; by 10 Nov 0.915; by 13 Nov 0.913; by 30 Nov 0.978.
- Related: Polymarket Democrats control the House 0.945, volume $26.1m, liquidity $6.35m, read 18:02Z.

## Published models
- None on the timing of the call.
