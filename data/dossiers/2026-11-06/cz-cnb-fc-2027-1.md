# cz-cnb-fc-2027-1
- **Claim:** The ČNB's new macroeconomic forecast, published on 5 November 2026, puts average CPI inflation in 2027 above 2.5%.
- **Criterion:** YES if the ČNB's autumn 2026 forecast published on cnb.cz on 5 Nov 2026 with the board's decision shows inflation for the year 2027 above 2.5% (the "Inflace (%)" annual row of the forecast table, or the same figure in the ČNB's statement or presentation that day). NO if it shows 2.5% or lower, or if the Bank Board adopts no new forecast on 5 Nov 2026.
- **Deadline:** 2026-11-05T23:59:00+01:00. Watch question cz-cnb-forecast-2027-inflation allows until 12 Nov; the forecast has come out the same day as the decision, so the outcome should be the same.
- **Written at:** 2026-11-03T18:15Z

## Schedule
- ČNB meeting calendar lists 5 November among 2026 monetary-policy meetings — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z) "6 August 2026 ... 17 September, 5 November, and 17 December" (as summarised by the fetcher; ČNB's own page was itself stale at the June entry).
- The ČNB's votes spreadsheet has a column for 5.11. and one for 17.12. 2026, both still empty — https://www.cnb.cz/export/sites/cnb/cs/menova-politika/.galleries/br_zapisy_z_jednani/hlasovani_bankovni_rady.xlsx (read 2026-11-03T18:07Z).
- Calendar shows CNB Interest Rate Decision on Thu 5 Nov at 13:30 UTC, i.e. 14:30 Prague — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z).
- Press-statement rule: the ČNB page says the statement published after each meeting includes the voting ratio — https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/ (read 2026-11-03T18:02Z).
- Same-day publication: the summer forecast is marked published 6 Aug 2026, the day of the August meeting — https://www.cnb.cz/cs/menova-politika/prognoza/index.html (read 2026-11-03T18:13Z) "byla zveřejněna 6. 8. 2026". Autumn forecast's own date not stated on the page.

## Facts
- Summer forecast (published 2026-08-06, data to 24 Jul): inflation 2.0% in 2026, 2.5% in 2027, 2.4% in 2028; GDP 2.2 / 2.7 / 2.5; 3M PRIBOR 3.7 / 3.9 / 3.7; CZK/EUR 24.3 / 24.4 / 24.3 — https://www.cnb.cz/cs/menova-politika/prognoza/prognoza-cnb-archiv/Prognoza-CNB-leto-2026-00001 (read 2026-11-03T18:06Z).
- Table row is labelled "Inflace (%)" with no word on averages — https://www.cnb.cz/cs/menova-politika/prognoza/index.html. Blesk's report of the same forecast calls these average inflation — https://www.blesk.cz/clanek/845559 (published 2026-08-06, read 2026-11-03T18:06Z).
- Inflation outturn beat the forecast: August forecast had September at 2.2%; actual September 2.5% (board note; https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday).
- August forecast had 2.8% for Q1 2027 — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon (published 2026-10-28, read 2026-11-03T18:01Z).
- ING's own figures: 3.9% Q1 2027, 3.4% for the year 2027, "well above" ČNB and market estimates; expected revisions include EURIBOR about 80 bp higher, oil +21% for 2027, gas +80% for 2027, draft budget with 6.8% public wage growth and 11.2% minimum wage rise — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon.
- ING's only dovish item: Q2 GDP 0.4 pp below the ČNB's expectation — https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon.
- Not found: any other published estimate of what the ČNB's new 2027 figure will be.

## Base rate
- No class. The threshold equals the August figure; a rise of 0.1 pp in the published row is enough for YES.

## Schedule slip
- `central-bank-decision`: prior 0.01, own 0/6, rate 0.008 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`, run 2026-11-03). No sign of a change of date found.

## Risks
- Rounding: 2.5% resolves NO.
- A higher assumed policy rate in the forecast pulls 2027 inflation down in the ČNB's model; the extent is unknown.
- Fuel-price caps and the excise cut end on 30 Nov unless extended; energy-price assumptions in the forecast are unknown.
- Brent fell about 9–12% from 30 Oct to 3 Nov (range reflects the contract roll); the forecast's data cut-off probably predates it (not confirmed).

## Sources
- https://www.cnb.cz/cs/menova-politika/prognoza/prognoza-cnb-archiv/Prognoza-CNB-leto-2026-00001
- https://www.cnb.cz/cs/menova-politika/prognoza/index.html
- https://www.blesk.cz/clanek/845559
- https://think.ing.com/articles/czech-national-bank-preview-another-hike-more-on-the-horizon
- https://www.expats.cz/czech-news/article/czech-central-bank-expected-to-raise-interest-rate-to-4-percent-thursday
- https://www.cnb.cz/cs/menova-politika/br-zapisy-z-jednani/
- https://tradingeconomics.com/czech-republic/calendar
- data/watchlist.json (cz-cnb-forecast-2027-inflation)
