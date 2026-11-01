# us-senate-dem-1 — signals

Read 2026-11-01T18:09–18:12Z with `node scripts/markets.mjs search`, queries "Senate control 2026", "Senate 2026 Democrats", "Which party will win the Senate", "Texas Senate Election Winner".

## Markets
- **Kalshi "Who will control the Senate?"** (https://kalshi.com/markets/controls), read 2026-11-01T18:09:52Z: Democrats Yes 0.71 (bid 0.71 / ask 0.72), volume about $10.2m; Republicans Yes 0.30 (volume $15.2m). Closes 2027-02-01. **Match:** question is party control of the Senate (Kalshi counts the VP tiebreak, so 50 D would be R control); deadline later than ours. Differences from our claim: our criterion counts a Georgia runoff as not Democratic and ignores post-election party switches; Kalshi would wait for the runoff. Close match otherwise.
- **Polymarket "Which party will win the Senate in 2026?"** (https://polymarket.com/event/which-party-will-win-the-senate-in-2026), read 2026-11-01T18:11:42Z: Democratic Party Yes 0.715, volume $7.4m, liquidity $3.26m; Republican Party Yes 0.285 (volume $6.5m). **Match:** same caveats as Kalshi.
- Related: Manifold "Democrats win Alaska, Maine, Ohio and North Carolina for US Senate?" 0.50 (volume M13.9k, liquidity 1,048), read 18:10:02Z — https://manifold.markets/Jack1/democrats-win-alaska-maine-ohio-and. Not the claim.
- Earlier board readings (data/watchlist.json): Polymarket Senate D 0.685 (23 Oct); Kalshi 63% (30 Sep).

## Published models
- Silver Bulletin, Newsweek 19 Oct (modified 20 Oct): Democrats "75 percent probability of victory" in the Senate, "Likely D" — https://newsweek.com/nate-silver-revises-democrats-chances-winning-senate-12586949 (read 2026-11-01T18:14Z).
- Silver Bulletin model page "Updated October 31, 2026": Democrats "are also clearly favored in the Senate" (no percentage visible to the fetch) — https://www.natesilver.net/p/nate-silver-2026-midterm-election-polls-model (read 18:13Z).
