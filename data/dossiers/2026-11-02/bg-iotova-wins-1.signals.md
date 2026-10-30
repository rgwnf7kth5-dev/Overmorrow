# bg-iotova-wins-1 — signals

Read 2026-10-30T18:13–18:14Z with `node scripts/markets.mjs search` (queries "Bulgaria presidential", "Iotova", "Bulgaria turnout").

| Market | Price | Volume / liquidity | Close | Match to claim |
|---|---|---|---|---|
| Polymarket "Will Iliana Iotova win the next Bulgarian presidential election?" https://polymarket.com/event/bulgaria-presidential-election | Yes 0.715 / No 0.285 | vol $1.20M, liq $205k | 2026-11-02T04:59Z | **Matches** in substance (winner of this election = runoff winner). Settles on the eventual winner, not on the "held on 1 Nov" condition; a postponement would differ. |
| Polymarket "Will Аndrey Gyurov win …" (same event) | Yes 0.285 | vol $989k, liq $189k | same | Complement of the above. |
| Kalshi "Will Iliana Yotova win the 2026 Bulgarian presidential election?" https://kalshi.com/markets/kxbulgariapres | Yes 0.73 (Gyurov 0.27) | vol $34k (Yotova), liq not reported | 2027-11-15 | Matches in substance; the long close date is a settlement backstop. |
| Polymarket "Gyurov / Iotova most votes abroad, second round" | Gyurov 0.9705; Iotova 0.008 | vol ~$17k / ~$16k | 2026-11-02 | Does not match (abroad only); context. |
| Polymarket margin buckets, second round | Iotova by <4: 0.165; 4–8: 0.21; 8–12: 0.165; ≥12: 0.30. Gyurov by <4: 0.195; 4–8: 0.1505; 8–12: 0.064; ≥12: 0.0435 | vol $0.7k–2.5k each, thin | 2026-11-02 | Does not match directly. Thin and internally inconsistent: the buckets sum to about 1.29. |

Earlier read (world.json, 27 Oct): Polymarket Iotova 69.5%.

No bookmaker lines were checked (not Czech politics). No published models were found. Pollster parallel counts and round-1 exit polls are in the dossier; no runoff poll after round 1 was found.
