# cz-cnb-vote-1
- **Claim:** All members of the ČNB Bank Board who vote on 5 November 2026 vote for the interest-rate decision that is adopted.
- **Criterion:** YES if the ČNB's statement on the 5 Nov 2026 decision, or the voting table on cnb.cz, shows every voting member in favour of the adopted two-week repo rate decision. NO if at least one member votes for a different rate, or if the board takes no rate decision on 5 Nov 2026.
- **Deadline:** 2026-11-05T23:59:00+01:00.
- **Written at:** 2026-11-03T18:15Z

## Schedule
- ČNB meeting calendar lists 5 November among 2026 monetary-policy meetings — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z) "6 August 2026 ... 17 September, 5 November, and 17 December" (as summarised by the fetcher; ČNB's own page was itself stale at the June entry).
- The ČNB's votes spreadsheet has a column for 5.11. and one for 17.12. 2026, both still empty — https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx (read 2026-11-03T18:07Z).
- Calendar shows CNB Interest Rate Decision on Thu 5 Nov at 13:30 UTC, i.e. 14:30 Prague — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z).
- Press-statement rule: the ČNB page says the statement published after each meeting includes the voting ratio — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z).
- Wording used for a unanimous vote, February 2026 — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/Rozhodnuti-bankovni-rady-CNB-1770278400000/?tab=record (read 2026-11-03T18:07Z) "Pro toto rozhodnutí hlasovalo všech sedm členů bankovní rady".

## Facts
- Voting table 2026 — https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx (read 2026-11-03T18:07Z): 5 Feb, 19 Mar, 7 May holds 7–0; **18 Jun +25 bp, 6–1 (Karina Kubelková for no change; Michl, Frait, Zamrazilová, Kubíček, Procházka, Seidler for +25)**; 6 Aug and 17 Sep holds 7–0.
- Voting table 2025 — same file: 6 Feb −25 bp 7–0; 26 Mar hold 7–0; 7 May −25 bp 6–1 (Jan Kubíček for no change); 25 Jun, 7 Aug, 24 Sep, 6 Nov holds 7–0; 18 Dec hold 6–0 (Zamrazilová absent).
- Seven members: Michl, Zamrazilová, Frait, Kubelková, Kubíček, Procházka, Seidler — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/Rozhodnuti-bankovni-rady-CNB-1770278400000/?tab=record. The 2026 voting table shows the same seven.
- ING: Frait is occasionally an outlier; Seidler has consistently voted with the board consensus — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon (published 2026-10-28, read 2026-11-03T18:01Z).
- Frait said hike arguments make sense but no decision was made; Seidler leaned to a hike — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon.
- FinGo's Vaisová describes a preventive adjustment, not the start of a sustained cycle — https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday (published 2026-11-02 07:11, read 2026-11-03T18:01Z).
- Not found: any statement by Kubelková, Kubíček, Procházka, Zamrazilová or Michl on the November meeting. No analyst's vote-split forecast found.

## Base rate
- Own count from the ČNB voting table, 2023 to 17 Sep 2026: decisions changing the rate, unanimous 4 of 11 (21 Dec 2023, 2 May 2024, 1 Aug 2024, 6 Feb 2025). All decisions, unanimous 17 of 30. Holds, unanimous 13 of 19.
- Only rate rise of the 2023–26 sample: 18 Jun 2026, 6–1. (2022 hikes also split, e.g. 3 Feb 2022 5–2, 5 May 2022 5–2.)
- Class `central-bank-unanimity-stated`: own record 1/0, hold context, not comparable.

## Schedule slip
- `central-bank-decision`: prior 0.01, own 0/6, rate 0.008 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`, run 2026-11-03). No sign of a change of date found.

## Risks
- The flash CPI of 4 Nov could move a member either way; the size question (+25 against +50) could split from the other side, though no source suggests +50.
- A member's absence does not count against unanimity under this criterion.

## Sources
- https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx
- https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/Rozhodnuti-bankovni-rady-CNB-1770278400000/?tab=record
- https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/
- https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon
- https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday
- https://tradingeconomics.com/czech-republic/calendar
