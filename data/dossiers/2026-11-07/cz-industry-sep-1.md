# cz-industry-sep-1
- **Claim:** ČSÚ's first figure puts the working-day-adjusted year-on-year change in Czech industrial production for September 2026 at … %. (Interval claim.)
- **Criterion:** The year-on-year change in percent, real and adjusted for working days, of industrial production for September 2026, as stated in the headline of ČSÚ's release "Průmysl – září 2026" published on 6 Nov 2026. The unadjusted figure and later revisions do not count. Void if not published by 23:59 Prague time on 6 Nov 2026.
- **Deadline:** 2026-11-06T23:59:00+01:00. Release 09:00 Prague.
- **Written at:** 2026-11-04T17:58:00Z

## Schedule
- ČSÚ iCal lists Průmysl, Stavebnictví and Zahraniční obchod se zbožím for September on 6 Nov 09:00 — data/planning/agenda.json, item citing https://csu.gov.cz/kalendar-vsech-produktu-csu-v-ical (not re-opened).
- Next release 6 Nov 2026 — https://sigmanomics.com/cz/industrial-production-yoy (read 2026-11-04T17:50Z) "The next release is scheduled for November 6, 2026."

## Which figure
- ČSÚ's headline is working-day adjusted — https://csu.gov.cz/rychle-informace/prumysl-srpen-2026 (read 2026-11-04T17:49Z) "Meziroční vývoj všech ukazatelů je publikován po očištění o vliv počtu pracovních dnů."
- Press and calendars quote the adjusted figure: https://www.finanzen.at/nachrichten/zinsen/czech-industrial-output-rebounds-trade-surplus-grows-1035504655 (published 2025-11-06, read 2026-11-04T17:53Z) "advanced a working-day-adjusted 0.4 percent".
- KB quotes the UNADJUSTED figure, so its -0.5 is NOT comparable with the claim. The earlier agenda line "-0.5% y/y" hides this.

## Consensus
- No poll on the adjusted basis was readable. Trading Economics calendar pages returned no text on 4 Nov; two Czech calendar URLs returned 404; investing.com refused.
- KB, weekly report — KB weekly report (link in the signals file) (read 2026-11-04T17:49Z; text carried with encoding damage, here restored) "průmyslová výroba zřejmě meziměsíčně klesla o 0,4 %, což by znamenalo pokles za celé třetí čtvrtletí rovněž o 0,4 %"; "V neočištěném meziročním vyjádření očekáváme pokles výroby o 0,5 %, mimo jiné kvůli nižšímu počtu pracovních dnů."
- Implied adjusted figure about 1.1, own arithmetic: August 2.6 + KB m/m -0.4 - September 2025 m/m +1.1 (https://www.finanzen.at/nachrichten/zinsen/czech-industrial-output-rebounds-trade-surplus-grows-1035504655, first figure). Ignores revisions, and m/m is seasonally adjusted while y/y is not. Single bank.

## Facts
- August 2026: +2.6% y/y, +0.3% m/m; new orders +5.9% y/y, -6.8% m/m, foreign +9.3%, domestic -0.5% — https://csu.gov.cz/rychle-informace/prumysl-srpen-2026.
- Path of first or reported figures: June 4.0 — https://www.fxstreet.cz/zpravodajstvi-205500.html (published 2026-08-06). July 3.1 or 3.8 by source; August 2.6 — https://sigmanomics.com/cz/industrial-production-yoy gives both 3.1 and 3.8 for July, so July is unsettled. ČSÚ text quotes Eurostat's 3.1 for July.
- August's growth leaned on completed long-term rolling-stock orders; ČSÚ: "došlo k dokončení dlouhodobých zakázek na výrobu kolejových vozidel" — https://csu.gov.cz/rychle-informace/prumysl-srpen-2026.
- Base: September 2025 +0.4% y/y, +1.1% m/m, first figures — https://www.finanzen.at/nachrichten/zinsen/czech-industrial-output-rebounds-trade-surplus-grows-1035504655.
- Working days: September 2026 21 v September 2025 22, own count (28 Sep a Monday in 2026, a Sunday in 2025; same count as in dossier cz-retail-sep-1).
- KB on drivers: car output recovered after summer shutdowns; supply-chain problems, dearer energy and tighter financing weigh — KB weekly report (link in the signals file).
- October confidence: industry fell 5.6 points to 90.5, lowest since April 2025 — KB weekly report (link in the signals file).
- Q3 flash GDP +0.5% q/q; KB notes a fall in manufacturing gross value added — KB weekly report (link in the signals file).
- Germany: Société Générale expects industrial output -0.2% m/m in September — KB weekly report (link in the signals file).
- First release; ČSÚ revises in later months.

## Usual surprise
- **Scale 1.82 pp, basis published.** Sourced surprises, actual minus consensus: Sep 2025 +0.6 (0.4 v -0.2) — https://www.finanzen.at/nachrichten/zinsen/czech-industrial-output-rebounds-trade-surplus-grows-1035504655; Nov 2025 +3.5 (5.7 v 2.2) — https://www.newsquawk.com/headlines/czech-industrial-production-yoy-nov-yy-57-vs-exp-22-prev-11; Dec 2025 +0.6 (3.8 v 3.2) — https://www.newsquawk.com/headlines/czech-industrial-production-yoy-dec-yy-38-vs-exp-32-prev-57; Aug 2026 -0.5 (2.6 v 3.1) — https://sigmanomics.com/cz/industrial-production-yoy. RMS 1.82, own arithmetic; 0.55 without November. n=4. `series.mjs` has no Czech industry series.

## Base rate
none

## Schedule slip
- `stats-release`: prior 0.01, own 0/36, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-04). Slip voids the claim.

## Risks
- The biggest trap: unadjusted v adjusted differ by about 1.6 pp on KB's numbers. Only the adjusted headline counts.
- The centre rests on one bank and a mixed-basis calculation. Check on 5 Nov for a poll.
- Lumpy transport-equipment deliveries moved August; their absence is a downside.
- Revisions to August change the arithmetic.

## Sources
- https://csu.gov.cz/rychle-informace/prumysl-srpen-2026
- KB weekly report (link in the signals file)
- https://www.finanzen.at/nachrichten/zinsen/czech-industrial-output-rebounds-trade-surplus-grows-1035504655
- https://sigmanomics.com/cz/industrial-production-yoy
- https://www.newsquawk.com/headlines/czech-industrial-production-yoy-dec-yy-38-vs-exp-32-prev-57
- https://www.newsquawk.com/headlines/czech-industrial-production-yoy-nov-yy-57-vs-exp-22-prev-11
- https://www.fxstreet.cz/zpravodajstvi-205500.html
