# nz-results-28 — signals
Read 2026-11-25T17:46Z.

## Markets
- `node scripts/markets.mjs search "New Zealand election"` (read 2026-11-25T17:46:02Z):
  - Kalshi KXNEWZEALANDPARLI "Will National win the next New Zealand general election?" Yes 0.39 (bid 0.38/ask 0.40), volume 1,356,685; Labour 0.61 (vol 997,981); closes 2027-12-31. Does NOT match (refers to the next election, apparently 2029).
  - Polymarket "National win the most seats" 0.9945 (vol $799,839) and "National 40-44 seats" 0.991 (vol $22,701, liq $5,530) — closes 2026-11-08T04:59Z (settled on preliminary result); not the bloc question. Labour 35-39 seats 0.9815; Opportunity 7-9 seats 0.9695.
- `node scripts/markets.mjs search "New Zealand prime minister"` (17:46:10Z) / `"Luxon"` (17:46:19Z):
  - Polymarket "Will Christopher Luxon be the next Prime Minister of New Zealand after the 2026 elections?" Yes 0.805 (vol $142,587, liq $16,411); Hipkins 0.205. Related (who governs), not the seat-majority question.
  - Manifold "Chris Luxon NZ Prime Minister on 1 Feb 2027?" 0.734 (vol 6,654). Related only.
- `node scripts/markets.mjs search "New Zealand coalition government"` (17:46:27Z):
  - Polymarket "next governing coalition include National + ACT + NZF?" Yes 0.79 (vol $45,294, liq $6,350; close date shown 2026-11-08 but still listed active). Related (government formation), not seat majority.
  - Manifold "Labour forms a government in 2026 without requiring support from Te Pāti Māori" 0.027.
- `node scripts/markets.mjs search "New Zealand seats"` (17:46Z): same Polymarket seat-band markets as above (preliminary, closed 8 Nov).
- No market on whether the right bloc keeps a seat majority in the official count. market_search: "New Zealand election", "New Zealand prime minister", "Luxon", "New Zealand coalition government", "New Zealand seats".

## Published models / probabilities
- None found. 1News and interest.co.nz give scenarios only, no probabilities. No bookmaker prices quoted in news read.

## Our earlier figures in this case
## Our earlier figures in this case: nz-general-election-2026
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-08 nz-election-coalition-majority-2: 61% — happened (right side)
- 2026-11-08 nz-election-national-share-3: range 22.52–33.3, centre 27.88 — measured 29.21 (inside)
- 2026-11-08 nz-election-opportunity-5pct-4: 73% — happened (right side)
- 2026-11-08 nz-election-party-vote-1: 62% — happened (right side)
Resolved yes/no claims: 3. We stated 65% on average for the side we favoured and were right 3 of 3 times (Brier 0.123; a coin scores 0.250).
On average the outcome was 35 points more often yes than our figures.

## Published projections found by the disagreement research (evening of 2026-11-25)
Dated analyses by named authors, not results; read 2026-11-25T21:24:59+01:00.
- Lee, 8 Nov: a projection applying the 2023 special-vote multipliers gives Labour and NZ First each losing a seat to the Greens and Opportunity, with the bloc on 66/131. He also says Labour holds the 120th seat and National is next in line. — https://czlee.substack.com/p/special-votes-projection-2026-party (published 2026-11-08T03:57:34Z (updated 2026-11-10), read 2026-11-25T20:23:51.990Z): "On this projection, Labour and NZ First would each lose one seat to the Greens and Opportunity. National, ACT and NZ First would have 66 seats between them"
- Lee, 16 Nov: replaying the 2017, 2020 and 2023 special-vote patterns, all three projections have NZ First −1. Under the 2023 pattern the bloc holds 66/131. Under the 2020 pattern National also loses a party-vote seat, giving right-or-hung. Under the 2017 pattern National also loses Wairarapa and Hamilton East, making Opportunity kingmaker. — https://czlee.substack.com/p/special-votes-projection-2026-final (published 2026-11-16T22:47:31Z, read 2026-11-25T20:23:52.356Z): "They all have in common Green +1 , Opportunity +1 , NZ First −1."
- The Overhang (substack, 17 Nov): by its estimate NZ First is 'highly likely (97%)' to lose an entitlement, National 'likely (66%)' to lose one, and ACT 'only 4%' likely to lose a seat. On its numbers NZ First needs about −2.0pp on specials to lose a seat. It says the last three allocated places belong to Labour, National and NZ First. Its median outcome is that Opportunity is needed to govern. — https://theoverhangaonz.substack.com/p/the-overhang-217-specials-edition (published 2026-11-17T17:03:45Z, read 2026-11-25T20:23:28.202Z): "National are likely (66%) lose an entitlement (but not a list seat given they have none). NZ First are highly likely (97%) lose one."
- David Farrar (Kiwiblog, 26 Nov 07:00 NZDT) calls an NZ First list-seat loss (net −2 to the 3-seat majority) 'likely', a National list-entitlement loss (net −1) 'possible' and a Wairarapa flip (−1) 'likely'. — https://www.kiwiblog.co.nz/2026/11/how_things_may_change_with_specials.html (published 2026-11-25T18:00:00Z, read 2026-11-25T20:23:23.721Z): "NZ First loses a list seat to Greens/Opportunity/Labour. Net impact: -2 to majority. I regard this as likely."
- Westpac (9 Nov) says specials tend to cut the centre-right share by 1.6–1.7 points and expects the centre-right's 10-seat lead to shrink by 1–4 seats, likely needing Opportunity's support. — https://www.westpaciq.com.au/economics/2026/11/new-zealand-2026-general-election-preliminary-results-and-next-/ (published 2026-11-09T08:48:35+11:00, read 2026-11-25T20:24:51.735Z): "these tend to reduce the share of the centre-right bloc by 1.6-1.7ppts. Hence, when all is said and done, the centre-right's 10 seat advantage on election night could reduce by 1-4 seats."
