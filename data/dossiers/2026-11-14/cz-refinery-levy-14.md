# cz-refinery-levy-14
- **Claim:** During the second reading of the refinery-tax bill on 13 November 2026, a government member or an ANO, SPD or Motoristé deputy tables an amendment extending the extraordinary tax, or adding a levy, to banks or another sector besides refining.
- **Criterion:** YES if, on 13 Nov 2026 between 00:00 and 23:59 Prague time, a cabinet member or a deputy of the ANO, SPD or Motoristé clubs tables (refers to in the detailed debate, or files as a sněmovní dokument for the second reading) an amendment to sněmovní tisk 311 that extends the extraordinary tax or adds a new tax or levy to banks or to any sector other than refining (e.g. energy producers, retail chains), as shown on psp.cz or reported by ČTK or ČT24. Amendments by opposition deputies (e.g. the Pirates' coal-power extension, STAN's importer proposal) do not count. NO otherwise, including when the sitting is not held.
- **Event window:** 2026-11-13T00:00+01:00 to 2026-11-13T23:59+01:00 (Europe/Prague)
- **Deadline (resolves by):** 2026-11-14T08:00+01:00
- **Written at:** 2026-11-11T18:05Z

## Schedule
- 36th sitting starts 13 Nov 2026 09:00 with tisk 311 (second reading) as its only item — psp.cz open data schuze.unl/bod_schuze.unl (see cz-refinery-second-14.md); ČTK 5 and 11 Nov via oEnergetice (links below).

## Facts
- Budget committee, 11 Nov: opposition asked whether the coalition plans further sector taxes through amendments; "Jasná odpověď nezazněla"; STAN's resolution asking the government not to do it via amendments failed; Havlíček: the government is not considering sector taxes now — https://oenergetice.cz/energetika-v-cr/stat-chce-zdanit-rafinerie-vybor-dal-vladnimu-navrhu-zelenou (published 2026-11-11 10:55, read 2026-11-11T17:55Z) "Ministr průmyslu a obchodu Karel Havlíček (ANO) dnes řekl novinářům, že vláda nyní o zavedení sektorových daní neuvažuje."
- Babiš, 11 Nov: working on possible sector taxes with Schillerová; the government has not discussed them; "Neočekávám ani, že by to proběhlo ve Sněmovně tento týden" — ČTK https://www.ceskenoviny.cz/zpravy/babis-na-moznych-sektorovych-danich-pracuje-se-schillerovou/2900336, as cited in work/agenda_cz.json; not re-read tonight.
- Okamura (SPD), 5 Nov: SPD is part of the debate on extending the tax; "Diskuse probíhá, uvidíme, s čím přijdou koaliční partneři"; SPD will not support any further taxation of citizens — https://oenergetice.cz/energetika-v-cr/vlada-chce-zdanit-rafinerie-kvuli-vyssim-marzim-poslanci-chystaji-upravy (published 2026-11-05 16:11, read 2026-11-11T17:55Z).
- Opposition amendments already announced: Pirates want 25% and extension to coal power producers; TOP 09 wants 39.5% — oEnergetice 11 Nov (above). These do not count for this claim.
- Previous editions' claims on a coalition sector-levy deal (9 Nov coalition council; 11–12 Nov) record that no deal had been reached (data/planning/2026-11-12.json, 2026-11-13.json, case cz-bank-levy).

## Base rate
- Reference class unscheduled-announcement-within-one-day (pipeline/reference-classes.json): own record 7 yes, 58 no (0.108); weak fit.
- No reference data on floor amendments by coalition deputies to their own government's bills.

## Schedule slip
- `node scripts/refdata/slip.mjs cz-chamber-gov-bill-reading` (2026-11-11T17:53Z) → 0.649 (prior 0.60, own 6/7). The detailed debate, where amendments are tabled, follows the general debate; if the second reading is not reached, the window may close without a detailed debate.

## Risks
- Babiš's statement is about "this week" but is hedged ("neočekávám"); an ANO deputy could table a levy amendment as a bargaining chip without coalition agreement.
- Ambiguity: an amendment changing the refinery tax base so that it covers fuel importers or traders (STAN-style) would be borderline; the criterion counts only another sector than refining, and fuel importers of refinery output are treated as refining (does not count).

## Sources
- https://oenergetice.cz/energetika-v-cr/stat-chce-zdanit-rafinerie-vybor-dal-vladnimu-navrhu-zelenou
- https://oenergetice.cz/energetika-v-cr/vlada-chce-zdanit-rafinerie-kvuli-vyssim-marzim-poslanci-chystaji-upravy
- https://www.ceskenoviny.cz/zpravy/babis-na-moznych-sektorovych-danich-pracuje-se-schillerovou/2900336 (via work/agenda_cz.json)
- https://www.psp.cz/eknih/cdrom/opendata/ (schuze.zip)
- WebSearch (11 Nov ~17:55Z): see cz-refinery-second-14.md.
