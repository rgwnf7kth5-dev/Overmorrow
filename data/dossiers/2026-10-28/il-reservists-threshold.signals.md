# il-reservists-threshold: signals

These were read with `node scripts/markets.mjs search` (queries "Reservists", "Hendel", "Knesset seat", "Israel threshold") at 2026-10-25T18:08Z.

## Kalshi KXISRAELANYSEAT, "Which lists will win a Knesset seat?"
- URL: https://kalshi.com/markets/kxisraelanyseat (closes 2027-10-27)

| Outcome | Last price | Bid / ask | Volume |
|---|---|---|---|
| Reservists–Economic Party, at least 1 seat | 0.38 | 0.37 / 0.47 | ~3.2k |
| New Economic Party (separate strike, probably stale) | 0.14 | 0 / 0.05 | |
| Zionist Home–The Reservists (earlier alliance, probably stale) | 0.03 | 0 / 0.04 | |
| People of Israel | 0.30 | 0.28 / 0.35 | |

- **Match:** yes for the "Reservists–Economic Party" strike.

## Polymarket "Which parties will win a seat in the 2026 Knesset elections?"
- URL: https://polymarket.com/event/which-parties-will-win-a-seat-in-the-2026-knesset-elections (closes 2026-11-30)

| Outcome | Price | Volume | Liquidity |
|---|---|---|---|
| Reservists and New Economic Party | 0.365 | $8.7k | $2.8k |
| Amcha Yisrael | 0.31 | | |
| RZP–Zehut | 0.915 | | |

- **Match:** yes. The settlement source was not read.

## Polymarket "Israel Election: Reservists–New Economic Party vote share?"
- URL: https://polymarket.com/event/israel-election-reservistsnew-economic-party-vote-share

| Bucket | Price |
|---|---|
| <2.75% | 0.305 |
| 2.75–3.25% | 0.245 |
| 3.25–3.75% | 0.3625 |
| ≥4.25% | 0.09 |

- The 3.75–4.25% bucket did not appear in the search output.
- **Implied P(≥3.25%):** about 0.45. That is 1 − 0.55, before adding the missing bucket and normalising. Volume is small, about $2–7k per bucket.

## Related
- **Polymarket "below threshold total":** 4–6% priced at 0.33; 6–8% at 0.295.
- **Polymarket "Reservists in next government":** 0.46.

## Models and bookmakers
- No models found. Bookmakers not checked.
