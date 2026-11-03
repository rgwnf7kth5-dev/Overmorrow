# cz-cnb-hike-1
- **Claim:** The Czech National Bank's Bank Board raises its two-week repo rate above 3.75% at its meeting on 5 November 2026.
- **Criterion:** YES if the Bank Board decision of 5 Nov 2026, published on cnb.cz, sets the two-week repo rate above 3.75%. NO if the rate is held or cut, or if the board takes no rate decision on 5 Nov 2026.
- **Deadline:** 2026-11-05T23:59:00+01:00. Decision about 14:30 Prague.
- **Written at:** 2026-11-03T18:15Z

## Schedule
- ČNB meeting calendar lists 5 November among 2026 monetary-policy meetings — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z) "6 August 2026 ... 17 September, 5 November, and 17 December" (as summarised by the fetcher; ČNB's own page was itself stale at the June entry).
- The ČNB's votes spreadsheet has a column for 5.11. and one for 17.12. 2026, both still empty — https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx (read 2026-11-03T18:07Z).
- Calendar shows CNB Interest Rate Decision on Thu 5 Nov at 13:30 UTC, i.e. 14:30 Prague — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z).
- Press-statement rule: the ČNB page says the statement published after each meeting includes the voting ratio — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z).

## Facts
- Repo rate is 3.75% since 19 June 2026; the June step was +25 bp — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/Rozhodnuti-bankovni-rady-CNB-1781766000000/ (published 2026-06-18, read 2026-11-03T18:07Z) "raised the two-week repo rate by 0.25 percentage points to 3.75%" (fetcher's English rendering).
- Rate held in August and September, 7–0 each time — https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx (read 2026-11-03T18:07Z); August also https://www.blesk.cz/clanek/845559 (published 2026-08-06, read 2026-11-03T18:06Z).
- ČTK's economists unanimously forecast 3.75% to 4.00%; Jan Berka (Portu), Martin Komrska (UniCredit), Jaromír Šindel (Czech Banking Association), Jana Vaisová (FinGo) quoted — https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday (published 2026-11-02 07:11, read 2026-11-03T18:01Z) "Domestic inflationary tendencies were already elevated independently of developments in the Strait of Hormuz".
- ING expects +25 bp to 4.00%, says a November hike is almost fully priced; Frait called hike arguments sensible with no decision made; Seidler leaned to a hike — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon (published 2026-10-28, read 2026-11-03T18:01Z) "the second such move since the onset of the US-Iran conflict".
- Board member Seidler leaned towards an increase in a Reuters interview, relayed by ČTK — https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday. Reuters itself not opened (blocked).
- Calendar consensus 4.0% (previous 3.75%) — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z).
- September inflation 2.5%; core above 3%, services over 4% (Berka) — https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday.
- **Input still to come:** ČSÚ flash CPI for October, due Wed 4 Nov, before the morning freeze. Its date rests on in-house notes and bank week-ahead notes; see data/dossiers/2026-11-05/cz-cpi-oct.md.

## Base rate
- Class `central-bank-moves-as-priced`: own record 1 yes, 0 no; no published rate (pipeline/reference-classes.json). `central-banks.json` holds 15 ČNB rate changes since 2022 but no verified consensus match on any.

## Schedule slip
- `central-bank-decision`: prior 0.01, own 0/6, rate 0.008 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`, run 2026-11-03). No sign of a change of date found.
- Decision that is not taken on 5 Nov would resolve NO.

## Risks
- A low flash CPI on 4 Nov. The GDP undershoot (Q2 0.4 pp below ČNB's expectation, ING) is the only dovish element ING names.
- Fall in energy prices: Brent fell on 2 and 3 Nov on US–Iran talks (https://tradingeconomics.com/commodity/brent-crude-oil, read 2026-11-03T18:07Z). The Hormuz-related energy arguments could be reassessed before Thursday.
- Forecast cut-off of the new outlook predates that oil fall (unconfirmed: cut-off date of the autumn forecast not found).

## Sources
- https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/
- https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/Rozhodnuti-bankovni-rady-CNB-1781766000000/
- https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx
- https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday
- https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon
- https://tradingeconomics.com/czech-republic/calendar
- https://www.blesk.cz/clanek/845559
- https://tradingeconomics.com/commodity/brent-crude-oil
- https://www.businessinfo.cz/clanky/cnb-sazby-v-srpnu-nezvysila-inflace-mirne-narostla-ale-zustava-pod-2-procenty/ (failed to open)
