# us-house-dem-1 — signals

Read 2026-11-01T18:08–18:12Z with `node scripts/markets.mjs search`, queries "House 2026", "Senate control 2026" (returned the House event too), "Senate 2026 Democrats".

## Markets
- **Kalshi "Who will control the House?"** (https://kalshi.com/markets/controlh), read 2026-11-01T18:09:45Z: Democrats Yes 0.936 (bid 0.934 / ask 0.936), volume about $25.9m; Republicans Yes 0.065 (volume about $65.4m). Closes 2027-02-01. **Match:** question matches (party control of the House after the 2026 election); deadline later than ours; settlement on control, which could differ from "Democrats win ≥218 seats" only if a party switch or vacancy changes control after election day. Good anchor.
- **Polymarket "Which party will win the House in 2026?"** (https://polymarket.com/event/which-party-will-win-the-house-in-2026), read 2026-11-01T18:09:45Z: Democratic Party Yes 0.945, volume $19.9m, liquidity $7.8m; Republican Party Yes 0.055 (volume $15.9m). Market end date 2026-11-04T04:59Z, but resolution waits for the result. **Match:** good (control after the midterms).
- Kalshi "House popular vote margin (generic ballot)": Republicans win the national House popular vote Yes 0.047 (volume $1.48m), read 18:09:45Z — https://kalshi.com/markets/kxhousepopvotemargin. Not the claim (popular vote, not seats), useful as a check on the generic-ballot lead.
- Earlier board readings (data/watchlist.json): Polymarket House D 0.925 (23 Oct); Kalshi about 90% (end of September).

## Published models
- Silver Bulletin midterm model, "Updated October 31, 2026": "Democrats remain overwhelming favorites to retake the House" (no percentage visible to the fetch) — https://www.natesilver.net/p/nate-silver-2026-midterm-election-polls-model (read 2026-11-01T18:13Z).
- Other models seen in search results only (not opened): FiftyPlusOne/G. Elliott Morris "Democrats strongly favored to take the House" (https://www.gelliottmorris.com/p/democrats-strongly-favored-to-take), DDHQ 2026 congressional model (https://ddhq.io/press/decision-desk-hq-releases-2026-congressional-forecast-model), The Economist model.
