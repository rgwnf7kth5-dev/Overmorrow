# cz-praha-sobe-1
- **Claim:** By 23:59 on Sunday 1 November 2026, Praha sobě formally announces that it will join a coalition with STAN and SPOLU at Prague City Hall.
- **Criterion:** YES if between 00:00 on 31 Oct and 23:59 CET on 1 Nov 2026 Praha sobě (its leader, club or members' meeting, through an official statement) announces that it has decided to join a governing coalition with STAN and SPOLU in Prague, or the three parties announce a coalition agreement or agreement to form a coalition. Statements that talks continue or that a deal is likely do not count. NO otherwise.
- **Event window:** 2026-10-31T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-30T18:25:00Z

## Schedule
- Nothing is scheduled in the window. The announced timetable puts every decision point after it:
  - Top-level talks resume with Praha sobě on Mon 2 Nov, mainly on transport, and with the Piráti on Tue 3 Nov.
  - Three-member working groups on portfolios run until the end of next week.
  - Hlaváček (STAN) will announce the outcome at the start of the following week (about 9 Nov).
  - Source: ČTK https://www.ceskenoviny.cz/zpravy/2893550 (published 2026-10-27 13:21, read 2026-10-30T18:06Z) "Jak s Prahou sobě, tak s Piráty půjdeme do pracovních skupin, které jsou vždycky tříčlenné a probírají jednotlivé gesce".
- Seznam Zprávy confirms this: Hlaváček wants to close the three-way round on Fri 6 Nov and announce the deal early the following week. Scheinherr says another meeting is agreed for Monday, with transport as the main topic — https://www.seznamzpravy.cz/clanek/318900 (published 2026-10-27 13:04, updated 16:28, read 2026-10-30T18:06Z) "Ještě jsme nedořešili některé oblasti, takže zhodnocení provedeme, až budeme finálně vědět od Starostů konkrétní podmínky."
- The constituent council session is in November (date not found). If no three-party deal is ready by then, Hlaváček would start with STAN+SPOLU alone and keep a council seat open — ČT24 https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/v-hlavnim-meste-asi-vznikne-koalice-stan-spolu-a-prahy-sobe-naznacil-hlavacek-378900 (published 2026-10-22, read 2026-10-30T18:08Z) "Vycházíme z toho, že je potřeba udělat v listopadu zastupitelstvo. Praha musí dál fungovat."

## Facts
- 2026 Prague council results (65 seats): STAN 17, SPOLU 17, Praha sobě 13, ANO 11, Piráti 7. SPD and Motoristé won no seats. STAN+SPOLU have 34 (a narrow majority). With Praha sobě they would have 47, and with the Piráti instead 41. Every party has ruled out ANO — ČTK 2893550 (above); Seznam Zprávy 318900 (above).
- Praha sobě's position (27 Oct): it accepted two council seats instead of three, with transport and property, but still has to consult its club and negotiating team. It has not definitively confirmed — ČTK 2893550. Scheinherr: the coalition is not formally agreed, and the talks are serious and constructive. He wants guarantees, including for the transport portfolio, which he would take himself — Seznam Zprávy 318900.
- Piráti: they first declined (about 21–22 Oct) and then received an improved offer (one council seat with property and housing, plus one more committee chair). Nislerová: "Jsou tam nějaké pojistky a mechanismy, které by mohly zlepšit naše postavení v budoucí koalici" — ČTK 2893550. Seznam: "Vylepšená nabídka vrátila do hry Piráty" (headline of 318900).
- Hlaváček leans to Praha sobě for the larger majority, per sources cited by Seznam Zprávy 318900. ČT24 headline of 22 Oct: "V hlavním městě asi vznikne koalice STAN, Spolu a Prahy sobě, naznačil Hlaváček" (378900). Planned council split in a three-party coalition: STAN 5, SPOLU 4, Praha sobě 2 — ČT24 378900.
- How Praha sobě decides: no source read mentions a members' vote or a date for its decision. Scheinherr speaks of consulting the "zastupitelský klub" and the negotiating team — ČTK 2893550; Seznam 318900.
- No new statement from Praha sobě, STAN or SPOLU dated 28–30 Oct was found. The ČTK, iROZHLAS, Novinky and ČT24 RSS feeds read at 2026-10-30T18:03Z contained no Prague coalition item. One web search for 29–30 Oct items returned only older articles.

## Base rate
- `coalition-deal-announced-short-window` (pipeline/reference-classes.json): 0.3, own record 1 YES / 6 NO (since 27 Oct 2026). That class assumes partners are near a deal. Here the next negotiating round is set for after the window, so it fits only loosely.
- Loose fallback: `unscheduled-announcement-within-one-day`, own record 1 YES / 18 NO.

## Schedule slip
- Slip class: none (skipped).

## Risks
- YES paths: Praha sobě's club meets over the weekend and states publicly that it "goes into the coalition" before the Monday meeting. A joint statement after an unannounced weekend meeting. A Sunday TV or radio interview in which Scheinherr says "we are joining", which would need to read as a decision, not a likelihood.
- NO paths (the default): the parties' own timetable puts the transport talks on Mon 2 Nov and the end of the round on 6 Nov. Praha sobě has said it will assess the deal only after STAN's concrete conditions. The Piráti were put back in play on 27 Oct, which gives STAN leverage and less reason to close early.
- Resolution trap: statements such as "jsme blízko dohody" or "koalice se rýsuje" do not count. A STAN+SPOLU deal without Praha sobě does not count.

## Sources
- https://www.ceskenoviny.cz/zpravy/2893550
- https://www.seznamzpravy.cz/clanek/318900
- https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/v-hlavnim-meste-asi-vznikne-koalice-stan-spolu-a-prahy-sobe-naznacil-hlavacek-378900
- RSS: ceskenoviny.cz/sluzby/rss/zpravy.php, irozhlas.cz/rss/irozhlas, novinky.cz/rss, ct24.ceskatelevize.cz/rss (read 2026-10-30T18:03Z)
- Search result lists only: "Praha sobě koalice STAN SPOLU Hlaváček jednání"; "Praha sobě rozhodne o vstupu do koalice členové hlasování Scheinherr"; "pražská koalice Praha sobě STAN Spolu 29. října 30. října Scheinherr doprava"
