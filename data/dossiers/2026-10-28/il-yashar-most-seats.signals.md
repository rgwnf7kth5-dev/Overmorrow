# il-yashar-most-seats: signals

Read with `node scripts/markets.mjs search` (queries: "Israel election", "Knesset", "Netanyahu", "Eisenkot", "Israeli legislative election") at 2026-10-25T17:59–18:01Z.

## Polymarket: "Israeli Legislative Election Winner"
- URL: https://polymarket.com/event/israeli-legislative-election-winner
- Market closes 2026-10-28T03:59Z.

| Outcome | Price (YES) | Volume | Liquidity |
|---|---|---|---|
| Yashar | 0.705 | $855k | $320k |
| Likud | 0.295 | $1.10M | $293k |
| Together | 0.0045 | $660k | |
| Otzma, Democrats, Shas | 0.0005 each | | |

- **Match:** close. Both ask which list wins the most seats. I did not see Polymarket's tie rule or its resolution source; it may settle on early or near-final counts. Our claim gives NO on a tie.

## Kalshi: KXISRAELKNESSET, "Israeli legislative election winner?"
- URL: https://kalshi.com/markets/kxisraelknesset
- Closes 2027-10-27T14:00Z, so this is "next election" wording.

| Outcome | Last | Bid / ask | Volume |
|---|---|---|---|
| Yashar | 0.72 | 0.71/0.72 | ~18.5k |
| Likud | 0.36 | 0.29/0.30 | ~39k |
| Together | 0.01 | | |
| Bennett 2026 | 0.001 | | |

- **Match:** close. "Win" is likely most seats; the rules were not read.

## Related markets (not matching)
- **Polymarket 2nd place:** Likud 0.64, Yashar 0.295 (https://polymarket.com/event/israeli-legislative-election-2nd-place).
- **Polymarket "Likud # of seats":**
  - <20: 0.2425
  - 20–24: 0.45
  - 25–29: 0.225
  - 30–34: 0.065
  - 35+: 0.002
  - https://polymarket.com/event/israel-election-likud-of-seats
- **Kalshi Likud above 26:** 0.14 (bid 0.14 / ask 0.18); above 29: 0.07 (https://kalshi.com/markets/kxlikudcount).
- **Polymarket "will Likud lose seats?":** 0.9185 (vol $32k).
- **Polymarket next PM:**
  - Eisenkot 0.53
  - Netanyahu 0.275
  - Bennett 0.145
  - Lieberman 0.02
  - Volume $11.2M on Netanyahu
  - https://polymarket.com/event/who-will-be-the-next-prime-minister-of-israel-after-the-next-election
- **Manifold "Will Netanyahu win the next elections in Israel?":** 0.268.

## Models
- No published seat model or win-probability model was found within the search budget.

## Bookmakers
- Tipsport and Fortuna were not checked: their pages are JS-only and the search budget was spent.
