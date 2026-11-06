# cz-prague-partner-9
- **Claim:** By 23:59 on 8 November 2026, STAN and Spolu publicly announce whether the Pirates or Praha sobě will be the third partner in the Prague city coalition.
- **Criterion:** YES if between 05:30 on 7 Nov and 23:59 Prague time on 8 Nov 2026 STAN and Spolu, or their Prague leaders Petr Hlaváček and Tomáš Portlík, publicly name the Pirates or Praha sobě as the chosen third partner (or say they will govern without one), as reported by ČTK, ČT24, Seznam Zprávy, Novinky, Aktuálně.cz or iROZHLAS. Reports citing unnamed sources do not count. NO otherwise.
- **Event window:** 2026-11-07T05:30:00+01:00 to 2026-11-08T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-06T18:06:00Z

## Schedule
- Announcement planned for Tue 10 or Wed 11 Nov, after the STAN club (Mon 9 Nov) and Spolu club (Mon or Tue) — ČTK https://www.ceskenoviny.cz/zpravy/2895938 (published 2026-11-03 15:49, read 2026-11-06T18:01Z) "V úterý, nebo ve středu všechny obeznámíme s výsledkem".
- Restated on 6 Nov: STAN's club to take a view early next week; Hlaváček promises a result next week — Seznam Zprávy https://www.seznamzpravy.cz/clanek/domaci-politika-pirati-nebo-praha-sobe-hlavacek-vaha-zakulisi-odhaluje-kdo-ma-navrch-319878 (published 2026-11-06 12:56 CET, read 2026-11-06T17:59Z) "Slibuje výsledek příští týden."

## Facts
- Pirate negotiator Zábranský denied iDNES's report that STAN, Spolu and the Pirates had agreed — Seznam Zprávy 319878 "popřel informace serveru iDNES.cz".
- STAN's club is split; Spolu leaves the choice to STAN — Seznam Zprávy 319878; ČTK 2895938 (Portlík: "respektujeme to, co bude chtít STAN").
- Assembly adjourned to 19 Nov — Seznam Zprávy 319878.

## Base rate
- `coalition-deal-announced-short-window`: base 0.30, own record 1 of 8 (pipeline/reference-classes.json). Here the window ends before the announced decision date, so a YES needs the timetable to move forward.

## Schedule slip
- `negotiation-round`: prior 0.15, own 0/7, rate 0.069 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`, run 2026-11-06T18:02Z). The scheduled step lies after the window.

## Risks
- Early YES path: one candidate withdraws, or the clubs meet early and the leaders announce at once.
- A leak of the choice is not an announcement.

## Sources
- https://www.ceskenoviny.cz/zpravy/2895938
- https://www.seznamzpravy.cz/clanek/domaci-politika-pirati-nebo-praha-sobe-hlavacek-vaha-zakulisi-odhaluje-kdo-ma-navrch-319878
