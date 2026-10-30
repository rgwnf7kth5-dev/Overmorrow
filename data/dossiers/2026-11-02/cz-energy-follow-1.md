# cz-energy-follow-1
- **Claim:** By 23:59 on Sunday 1 November 2026, E.ON, innogy or PRE announces higher 2027 prices of electricity or gas for households on open-ended tariffs, following ČEZ.
- **Criterion:** YES if between 00:00 on 31 Oct and 23:59 CET on 1 Nov 2026 E.ON Energie, innogy Energie or Pražská energetika publicly announces (press release, statement to media, or notice to customers reported by a major Czech outlet) a price increase from 2027 for household electricity or gas on open-ended (non-fixed) products. NO otherwise.
- **Event window:** 2026-10-31T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-30T18:30:00Z

## Schedule
- Nothing is scheduled. The window is a weekend (Sat 31 Oct, Sun 1 Nov).
- The trigger, ČEZ, announced on Fri 30 Oct, released by ČTK at 16:02. From January it raises prices for about 1.6m customers on open-ended contracts: electricity +3.5% (about CZK 330/MWh incl. VAT; D02d to CZK 4,190/MWh) and gas +6.5% (about CZK 180/MWh; to CZK 1,740/MWh). The rise applies to existing and new customers without a commitment — ČTK https://www.ceskenoviny.cz/zpravy/cez-pristi-rok-zdrazi-16-milionu-klientu-o-jednotky-procent-elektrinu-a-plyn/2895116 (published 2026-10-30 16:02, updated 16:06, read 2026-10-30T18:05Z) "Nové ceny začnou platit od začátku příštího roku." ČT24 https://ct24.ceskatelevize.cz/clanek/ekonomika/cez-zdrazi-od-noveho-roku-elektrinu-i-plyn-379154 (RSS 2026-10-30 15:28, read 2026-10-30T18:05Z) "Zdražení se bude týkat stávajících i nových zákazníků bez závazku."
- Legal deadline: a supplier must notify each customer individually and provably at least 30 days before a price change takes effect, and must tell them of their right to withdraw without penalty. Withdrawal must be sent at least 10 days before the change. Publishing on the website is not enough. Improper notice makes the change invalid — tzb-info, summarising ERÚ https://www.tzb-info.cz/ceny-paliv-a-energii/23540-zdrazeni-energii-musi-dodavatel-po-radne-oznamit-zprava-na-webovych-strankach-nestaci (published 2022-03-09, read 2026-10-30T18:07Z) "Jestliže dodavatel nesplní svou zákonnou povinnost ohledně řádného oznámení změn, změny jsou považovány za neplatné." The statute (energetický zákon §11a) was not read directly. For a 1 Jan 2027 change, notices must go out by about 1 Dec 2026, so no supplier is forced to announce this weekend.

## Facts
- No statement from E.ON, innogy or PRE on 2027 open-ended prices appears in any ČEZ report read (ČTK 2895116, ČT24 379154, Newstream/ČTK 16:25). All three say only that "Energie postupně zdražují i další dodavatelé", and that innogy, E.ON, PRE, MND, Pražská plynárenská and Centropol raised **fixed-product** prices this year, some more than once — Newstream/ČTK https://www.newstream.cz/zpravy-z-firem/cez-zdrazi-energie-1-6-milionu-klientu-plyn-podrazi-vyrazneji-nez-elektrina (published 2026-10-30 16:25, read 2026-10-30T18:07Z) "Situace na trzích se bohužel neuklidňuje a nevypadá, že by se měla uklidnit ani v dohledné době." (ČEZ spokesman Ondřej Svoboda).
- ČEZ cites wholesale electricity up about 75% and gas up about 140% since the start of 2026 (Middle East war) — ČT24 379154.
- The ČT24 E.ON topic page (https://ct24.ceskatelevize.cz/tema/e-on-1548, read 2026-10-30T18:07Z) shows no E.ON 2027 item. Recent items:
  - 23 Sep 2026 "E.ON a Pražská plynárenská zdražily fixace energií pro nové zákazníky"
  - 4 May 2026 "PRE od května zdražila fixované ceníky energií"
  - 30 Mar 2026 "Část dodavatelů zdražuje fixované ceníky plynu i elektřiny"
- No E.ON, innogy or PRE item appeared in the ČTK, iROZHLAS, Novinky or ČT24 RSS feeds read at 2026-10-30T18:03Z.
- **Past timing relative to ČEZ:**
  - (a) 2021: ČEZ announced its rise on Wed 3 Nov 2021. On the same day E.ON said high exchange prices would feed into its price lists only partly and only next year. innogy had already announced a gas rise from 20 Nov. PRE said it would not raise prices from 1 Jan 2022 — Novinky https://www.novinky.cz/clanek/ekonomika-krome-cez-zdrazi-v-pristim-roce-i-e-on-40376880 (published 2021-11-03 17:06, read 2026-10-30T18:06Z) "se do jejich ceníků promítnou jen částečně a až v příštím roce"; PRE: "Ani od 1. ledna 2022 je měnit nebudeme."
  - (b) 2025: the ČEZ cut for 1.6m customers was reported Sun 9 Nov 2025, after a ČT24 item "Dodavatelé zlevňují ceny energií" on 13 Oct 2025 (ČT24 E.ON topic page, above). PRE had announced in September a cut effective 1 Nov 2025 for non-fixed customers, and E.ON was keeping a 10% discount for open-ended customers "zatím do konce roku" — Seznam Zprávy https://www.seznamzpravy.cz/clanek/ekonomika-finance-elektrina-plyn-cena-podzim-2025-285594 (published 2025-09-12 07:00, updated 2025-09-18, read 2026-10-30T18:07Z).
  - In short, the big three do not move in lockstep with ČEZ. Some move earlier or later by weeks, and in 2021 PRE explicitly held.
- No 2022–2024 timing data were read.

## Base rate
- No class fits. Loose class: `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json), own record 1 YES / 18 NO. This is a two-day weekend window with three possible actors. Corporate price releases on a Saturday or Sunday are uncommon, and none of the precedents read was a weekend announcement by E.ON, innogy or PRE.

## Schedule slip
- Slip class: none (skipped).

## Risks
- YES paths:
  - A rival spokesperson, asked by ČTK or E15 over the weekend, confirms that open-ended prices will rise from January. A statement to media counts, but it must be a stated increase, not "we are watching the market".
  - A weekend explainer by Seznam Zprávy, iDNES or E15 that quotes a supplier's confirmed 2027 increase.
  - Customer notices, which go out by post or e-mail and could be reported.
- NO paths (the default):
  - The 30-day notice rule gives suppliers until about 1 Dec.
  - Suppliers answering "zatím neplánujeme" or "sledujeme vývoj".
  - Announcements falling on Mon 2 Nov or later.
- Resolution traps: changes to **fixed** products do not count. Increases already in force in 2026 do not count. A rise from a date other than 2027 needs care: from 1 Dec 2026 is not "from 2027".

## Sources
- https://www.ceskenoviny.cz/zpravy/cez-pristi-rok-zdrazi-16-milionu-klientu-o-jednotky-procent-elektrinu-a-plyn/2895116
- https://ct24.ceskatelevize.cz/clanek/ekonomika/cez-zdrazi-od-noveho-roku-elektrinu-i-plyn-379154
- https://www.newstream.cz/zpravy-z-firem/cez-zdrazi-energie-1-6-milionu-klientu-plyn-podrazi-vyrazneji-nez-elektrina
- https://ct24.ceskatelevize.cz/tema/e-on-1548
- https://www.novinky.cz/clanek/ekonomika-krome-cez-zdrazi-v-pristim-roce-i-e-on-40376880
- https://www.seznamzpravy.cz/clanek/ekonomika-finance-elektrina-plyn-cena-podzim-2025-285594
- https://www.tzb-info.cz/ceny-paliv-a-energii/23540-zdrazeni-energii-musi-dodavatel-po-radne-oznamit-zprava-na-webovych-strankach-nestaci
- RSS: ceskenoviny.cz, irozhlas.cz, novinky.cz, ct24.ceskatelevize.cz (read 2026-10-30T18:03Z)
- Search result lists only: "ČEZ zdražení 2027 E.ON innogy PRE ceny"; "E.ON innogy PRE reagují na zdražení ČEZ ceny od ledna 2027"; "dodavatel energie zvýšení ceny oznámit nejpozději 30 dní předem energetický zákon odstoupení"
