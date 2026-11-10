# cz-babis-dublin-13
- **Claim:** Czech Prime Minister Andrej Babiš takes part in person in the European Political Community (EPC) summit in Dublin on Thursday 12 November 2026.
- **Criterion:** YES if ČTK (ceskenoviny.cz), ČT24, vlada.gov.cz or the official EPC/Irish presidency media material report or show Babiš physically present at the EPC meeting at the Convention Centre Dublin on 12 Nov 2026 (arrival/doorstep, plenary, roundtable, family photo or bilateral on the EPC sidelines), between 00:00 and 23:59 Dublin time. NO if Czechia is represented at the EPC by someone else (e.g. President Pavel or a minister), if Babiš arrives in Dublin only after the EPC programme ends or only for the 13 Nov informal EU meeting, or if he does not travel.
- **Event window:** 2026-11-12T00:00+00:00 to 2026-11-12T23:59+00:00 (Europe/Dublin)
- **Written at:** 2026-11-10T18:05Z

## Schedule
- Irish presidency: "The ninth meeting of the European Political Community (EPC) will take place in Dublin on 12 November 2026"; the informal meeting of EU heads of state or government follows on 13 Nov in Dublin — https://irish-presidency.consilium.europa.eu/en/events/meeting-of-the-european-political-community-epc/ (read 2026-11-10T17:56Z).
- Programme on 12 Nov (Convention Centre Dublin): arrivals 10:00, opening plenary 11:30, roundtables 13:00, closing plenary 17:15, press conference 17:45, dinner 18:30 — Wikipedia citing the official media guide, as cited in work/sweep/running.json; not re-read tonight. Dublin is on GMT (UTC+0), one hour behind Prague.

## Facts
- Czech representation at the Dublin EPC is not announced in any source opened tonight — work/sweep/cz.json (10 Nov) "No source confirms who attends the EPC"; searches tonight (see Sources) found nothing newer.
- Cabinet approved Babiš's mandate for the 13 Nov informal EU meeting only — Kurzy.cz summary of 9 Nov cabinet results, as cited in work/sweep/cz.json; URL not recorded; not re-read tonight.
- President Pavel meets Babiš on Wed 11 Nov at 08:00 at Prague Castle about, among other things, "nadcházejících zahraničních návštěvách a cestách" — ČTK https://www.ceskenoviny.cz/zpravy/pavel-bude-jednat-s-babisem-mimo-jine-o-jmenovani-predsedy-uohs/2900135 (published 2026-11-10 15:44, read 2026-11-10T17:55Z) "Podle Hradu je středeční setkání obou politiků pravidelné a plánované."
- Seznam Zprávy: Babiš's letter to Costa "bude i tématem neformálního setkání evropských lídrů v Dublinu, které se bude konat ve čtvrtek a v pátek tento týden" — https://www.seznamzpravy.cz/clanek/zahranicni-stredni-evropa-nenechame-se-vydirat-merzem-prohlasili-babis-s-ficem-320172 (published 2026-11-10T12:02Z, read 2026-11-10T17:56Z).
- On 10 Nov in Bratislava, Babiš and Fico rejected Merz's call for all EU states to commit to covering Ukraine's 2027 budget gap; Babiš sent Costa a letter "před neformálním summitem EU v Dublinu" — ČTK https://www.ceskenoviny.cz/zpravy/babis-a-fico-se-ohradili-vuci-vyzve-merze-k-financni-podpore-ukrajiny/2899954 (published 2026-11-10 11:42, read 2026-11-10T17:55Z).
- Merz attends the EPC on Thursday, then the informal European Council on Friday — Bundesregierung termin-2459930, as cited in work/sweep/europe.json; not re-read tonight.
- About 50 leaders expected; Belgium's De Wever skips both Dublin meetings — RTÉ 10 Nov / running.json, as cited in work/sweep/europe.json and work/sweep/running.json; not re-read tonight.
- Precedent: Babiš represented Czechia in person at the 8th EPC in Yerevan (4 May 2026) — ČT24 https://ct24.ceskatelevize.cz/clanek/svet/babis-pred-summitem-v-jerevanu-jednal-s-ruttem-o-navysovani-vydaju-v-nato-373067 (published 2026-05-04 08:40, read 2026-11-10T17:56Z) "Česko v Jerevanu zastupoval premiér Andrej Babiš (ANO)."; before it he announced bilaterals there (Starmer, Zelensky) — EuroZprávy https://eurozpravy.cz/domaci/babis-bude-v-armenii-jednat-se-zelenskym-ci-starmerem.av7xbtcr (published 2026-05-02 12:19, read 2026-11-10T17:56Z).
- Babiš is due in Israel 16–18 Nov — ČTK https://www.ceskenoviny.cz/zpravy/babis-misto-oslav-17-listopadu-navstivi-izrael-podle-opozice-je-zbabelec/2899872, as cited in work/sweep/cz.json; not re-read tonight. No conflict with 12 Nov found.
- No Czech domestic event requiring Babiš on 12 Nov found in the sweep (work/sweep/cz.json: no Chamber step on the media bill on 12 Nov).

## Base rate
- Class: Czech head of government at EPC meetings. Own count from sources opened tonight: Yerevan (May 2026) — Babiš in person (n=1 confirmed tonight). Earlier EPC meetings (Prague 2022 to Copenhagen 2025) were attended by PM Fiala per the writer's background knowledge, not re-verified tonight; treat as unverified.
- Structural: the EPC meeting is held in the same city the day before an EU-27 meeting for which the cabinet gave Babiš a mandate, so attending requires only an earlier departure.

## Schedule slip
- `node scripts/refdata/slip.mjs summit-or-visit` (2026-11-10T17:57Z) → 0.015 (own 0/13). Irish police rate the threat "substantial"; fuel-protest blockades and bomb hoaxes under investigation (RTÉ/UNN as cited in work/sweep/europe.json) — no sign the meeting moves.

## Risks
- Czech EPC representation could go to President Pavel (11 Nov meeting covers foreign trips) or Babiš could fly only on Thursday evening for Friday's EU-27 meeting; the cabinet mandate mentions only 13 Nov.
- A Babiš arrival late on 12 Nov (for the dinner only) is an edge case: the dinner at 18:30 is part of the EPC programme, so presence at it counts as YES if reported.
- Thin Czech pre-coverage: confirmation may come only on the morning of 12 Nov (ČTK doorstep, vlada.gov.cz).

## Sources
- https://irish-presidency.consilium.europa.eu/en/events/meeting-of-the-european-political-community-epc/
- https://www.ceskenoviny.cz/zpravy/pavel-bude-jednat-s-babisem-mimo-jine-o-jmenovani-predsedy-uohs/2900135
- https://www.ceskenoviny.cz/zpravy/babis-a-fico-se-ohradili-vuci-vyzve-merze-k-financni-podpore-ukrajiny/2899954
- https://www.seznamzpravy.cz/clanek/zahranicni-stredni-evropa-nenechame-se-vydirat-merzem-prohlasili-babis-s-ficem-320172
- https://ct24.ceskatelevize.cz/clanek/svet/babis-pred-summitem-v-jerevanu-jednal-s-ruttem-o-navysovani-vydaju-v-nato-373067
- https://eurozpravy.cz/domaci/babis-bude-v-armenii-jednat-se-zelenskym-ci-starmerem.av7xbtcr
- work/sweep/cz.json, work/sweep/europe.json, work/sweep/running.json
- WebSearch (10 Nov, ~17:56Z): "Babiš Dublin summit Evropského politického společenství"; "Babiš Dublin čtvrtek odletí summit listopad 2026"; "vláda mandát neformální setkání hlav států Dublin 13. listopadu Babiš"; "Babiš Merz schůzka Dublin Ukrajina půjčka" — no report on Czech EPC representation.
