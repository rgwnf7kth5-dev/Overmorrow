# cz-coalition-mp-leaves-1
- **Claim:** By 23:59 on Sunday 1 November 2026, another coalition MP (ANO, SPD or Motoristé) announces that they are leaving their party or parliamentary club.
- **Criterion:** YES if between 00:00 on 31 Oct and 23:59 CET on 1 Nov 2026 a member of the Chamber of Deputies elected for ANO, SPD or Motoristé (or on their lists) publicly announces leaving their party or their parliamentary club, other than David Pražák. NO otherwise.
- **Event window:** 2026-10-31T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-30T18:35:00Z

## Schedule
- Nothing is scheduled in the window. The coalition council meets on Mon 2 Nov — ČTK https://www.ceskenoviny.cz/zpravy/spd-trva-na-zruseni-poplatku-odmita-financovani-formou-dane/2895042 (published 2026-10-30 13:26, read 2026-10-30T18:06Z) "pondělní radě". ANO's announced post-election purges in regional organisations have no published date — CNN Prima/ČTK (below).

## Facts
- David Pražák (ANO, Liberec region, from Semily) ended his ANO membership on Tue 27 Oct and sits as an unaffiliated MP. He is the first MP of this term to leave the party that elected him. He gave personal reasons and national politics intruding into Semily local affairs. The handling of the public-media fee bill's first reading was a partial, not decisive, factor. Other Semily councillors left with him — ČTK https://www.ceskenoviny.cz/zpravy/2893947 (published 2026-10-27 20:30, read 2026-10-30T18:05Z) "Částečný, forma projednávání, ale ne zásadní"; "Neodcházím s potřebou hnutí ANO kritizovat".
- Seat count: ČTK and Seznam Zprávy say the coalition "has 108 of 200 seats" and keeps its majority. Neither states the post-exit figure explicitly — Seznam Zprávy/ČTK https://www.seznamzpravy.cz/clanek/318960 (published 2026-10-27 20:39, updated 23:11, read 2026-10-30T18:08Z). Arithmetic: 108 coalition seats at the start of the term minus Pražák leaves 107 MPs in the coalition clubs, if he no longer counts as a coalition MP. A majority needs 101.
- Local defections this week: three ANO councillors in Česká Lípa and the ANO councillors in Semily left (Seznam 318960). Turnov councillors also left — ČTK headline https://www.ceskenoviny.cz/zpravy/ano-ztratilo-sve-zastupitele-i-v-turnove-podle-havlicka-clenu-vyrazneji-neubyva-/2894639 "ANO ztratilo své zastupitele i v Turnově, podle Havlíčka členů výrazněji neubývá" (published by 29 Oct; page fetch was blocked this session; title via the 2026-11-01 dossier cz-strike-joins-31 sources).
- Analysts, 30 Oct: Malý calls the Liberec-region departures a "red light". He expects the purges to be milder because Babiš cannot afford more MPs leaving. Michal: "nikdo nevystoupil s jasnou kritikou, která by dominanci Babiše v hnutí ANO měla nějak omezovat" — ČTK/CNN Prima https://cnn.iprima.cz/u-ano-zablikala-cervena-kontrolka-rika-expert-budou-babisovy-cistky-kvuli-odchodum-mirnejsi-525711 (published 2026-10-30 13:57, read 2026-10-30T18:06Z) "Čistky v regionálních organizacích ohlášené po volbách budou pravděpodobně jemnější". **No other coalition MP is named as wavering** in this article or in the other sources read.
- A CNN Prima piece, "Vaňková: Pátek byl pro Pražáka poslední kapkou. Je to lež, má velké srdce, tvrdí Murová" (https://cnn.iprima.cz/vankova-patek-byl-pro-prazaka-posledni-kapkou-je-to-lez-ma-velke-srdce-tvrdi-murova-525626), shows intra-ANO dispute over Pražák's motives. It was read as a search-result title only.
- No coalition MP departure other than Pražák appeared in the ČTK, iROZHLAS, Novinky or ČT24 RSS feeds read at 2026-10-30T18:03Z.
- Precedent: Pražák is the only departure in about 12 months of the term (since the Oct 2025 election), per ČTK 2893947 ("první poslanec").

## Base rate
- No class fits. Loose class: `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json), own record 1 YES / 18 NO. Term record: 1 departure among 108 coalition MPs in about 12 months, which is roughly 1 in 180 two-day windows. Clustering after a shock (a municipal defeat, the fee vote, announced purges) raises the short-term hazard above that.

## Schedule slip
- Slip class: none (skipped).

## Risks
- YES paths:
  - A second Liberec-region ANO MP, or an MP hit by the regional purges, quits over the weekend.
  - An SPD-list MP from a partner party (Trikolora, PRO, Svobodní elected on SPD lists) leaves the SPD club over the fee bill or another dispute. This counts under "or on their lists".
  - A Motoristé MP breaks over the Rusové na MS dispute between Šťastný and Okamura (iROZHLAS RSS 30 Oct 17:33), which is unlikely to cause a departure.
- NO paths: no named dissenters. The purges are being softened. A weekend timing is unusual for an MP exit; Pražák announced on a Tuesday evening.
- Resolution traps: an MP leaving a **local** party branch or regional post does not count. An expulsion is not an announcement "that they are leaving". Councillors who are not MPs do not count.

## Sources
- https://www.ceskenoviny.cz/zpravy/2893947
- https://www.seznamzpravy.cz/clanek/318960
- https://cnn.iprima.cz/u-ano-zablikala-cervena-kontrolka-rika-expert-budou-babisovy-cistky-kvuli-odchodum-mirnejsi-525711
- https://www.ceskenoviny.cz/zpravy/spd-trva-na-zruseni-poplatku-odmita-financovani-formou-dane/2895042
- https://www.ceskenoviny.cz/zpravy/ano-ztratilo-sve-zastupitele-i-v-turnove-podle-havlicka-clenu-vyrazneji-neubyva-/2894639 (fetch blocked; title only)
- RSS: ceskenoviny.cz, irozhlas.cz, novinky.cz, ct24.ceskatelevize.cz (read 2026-10-30T18:03Z)
- Search result lists only: "Pražák odchod z ANO poslanec důvod"; "koalice 107 poslanců po odchodu Pražáka nezařazený"
