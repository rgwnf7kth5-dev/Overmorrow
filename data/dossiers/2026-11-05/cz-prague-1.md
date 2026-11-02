# cz-prague-1
- **Claim:** Between 3 November and 23:59 on 4 November 2026, it is officially announced who will be the third partner of STAN and Spolu in the Prague coalition, or Praha sobě or the Pirates officially leave the running.
- **Criterion:** YES if between 00:00 on 3 Nov and 23:59 Prague time on 4 Nov 2026 any of these happens, as reported by ČTK or another major Czech outlet: (a) STAN and Spolu, or their leaders, announce which party they have chosen as third coalition partner, or that the coalition will have no third partner; (b) Praha sobě or the Pirates, through their leader, club or an official statement, announce that they have decided to join the coalition with STAN and Spolu, or that they are ending talks about it or have rejected it; (c) a coalition agreement naming the partners is announced or signed. Statements that talks continue, that a deal is near or that a portfolio offer is accepted do not count. NO otherwise.
- **Rewrite:** the suggested claim was a coalition agreement by 4 Nov. Hlaváček said on 2 Nov that the agreement will not be ready by Thu 5 Nov, so that claim is close to certain NO. The claim now aims at the next open step, the choice of partner. A signed agreement still counts through (c).
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-02T18:30Z. Read times are 2026-11-02 between 18:17Z and 18:27Z unless stated.

## Schedule
- Tue 3 Nov: STAN and Spolu meet the Pirates' team. Mon 2 Nov: they met Praha sobě, mainly on transport.
- Thu 5 Nov (outside the window): constituent session of the assembly, called by outgoing mayor Svoboda to meet the statutory deadline. Members take their oaths, then the session is adjourned for one or two weeks until the agreement is finished; the coalition teams regroup the same day — ČTK https://www.ceskenoviny.cz/zpravy/hlavacek-ustavujici-zastupitelstvo-prahy-prerusime-do-dojednani-koalice/2895938 (published 2026-11-02 14:19) "Zastupitelstvo posuneme o týden nebo o 14 dnů, podle toho, jak půjdou ta jednání".
- **Correction to the agenda:** data/planning/agenda.json has the constituent session "likely 19 Nov" (ČTK 26 Oct). It is now 5 Nov, with the resumed session a week or two later. The 19 Nov date may survive as the resumed session; no source says so.
- The earlier target: end the round on Fri 6 Nov and announce early in the week of 9 Nov — Seznam Zprávy https://www.seznamzpravy.cz/clanek/318900 (published 2026-10-27 13:04, updated 16:28) "S tím, že toto třetí kolečko chceme ukončit příští pátek 6. listopadu". The 2 Nov reports do not repeat that date.

## Facts
- Seats, 65 total: STAN 17, Spolu 17, Praha sobě 13, ANO 11, Pirates 7. All parties rule out ANO. STAN+Spolu 34; with Praha sobě 47; with the Pirates 41 — ČTK https://www.ceskenoviny.cz/zpravy/2893550 (published 2026-10-27 13:21) "Jak s Prahou sobě, tak s Piráty půjdeme do pracovních skupin"; Seznam Zprávy 318900.
- 2 Nov: the final format is undecided. The third partner depends on the talks — ČTK 2895938 (above) "každá ta verze má nějaké výhody i nevýhody" (Hlaváček).
- Praha sobě: its club accepts the transport and property portfolios, two of eleven council seats — ČTK 2895938 "Tuto gesci jsme přijali, s tím počítáme a v tom nemáme další požadavky" (Scheinherr). On 27 Oct it had not confirmed joining, and wanted guarantees — Seznam Zprávy 318900 "jsme ochotni klesnout i na dvě za cenu podmínek a záruk".
- Pirates: one council seat with housing — ČTK 2895938. On 27 Oct they got an improved offer with one more committee chair and had not answered — Echo24/ČTK https://www.echo24.cz/a/HJEme/zpravy-domov-prazska-kolaice-stale-bez-dohody (published 2026-10-27 19:34); ČTK 2893550 "Teď je to skutečně o tom programu a jestli nalezneme programovou shodu" (Nislerová).
- Hlaváček called the parallel talks "košer"; working groups run until Thursday, when the parties plan to name what is left — Pražský deník/ČTK https://prazsky.denik.cz/komunalni-volby/prazska-koalice-se-rysuje-ustavujici-zastupitelstvo-se-prerusi-na-dva-tydny/ (updated 2026-11-02 14:14). ČTK 2895938 "Ve čtvrtek bychom si měli říct, kde ty neshody a bariéry máme a jak je odstranit" (Portlík).
- Leaning: sources cited by Seznam Zprávy said Hlaváček leans to Praha sobě for the larger majority, while Portlík has little appetite for the Pirates; a source put the chances of the two "padesát na padesát" — Seznam Zprávy 318900.
- Fallback: STAN+Spolu alone with seats held open for a third partner — ČTK https://www.ceskenoviny.cz/zpravy/2893369 (published 2026-10-26 15:55, updated 17:38) "Věřím, že se buď dohodneme, nebo budeme muset hledat nějakou další cestu".
- The parties set a similar decision evening on 21 Oct and missed it: Pirates and Praha sobě were to answer STAN by Wednesday evening, and instead both proposed a coalition without Spolu — Echo24 https://www.echo24.cz/a/HTspS/praha-magistrat-koalice-vyjednavani-stan-ods-spolu-pirati-hlavacek-portlik-scheinherr-nislerova-radni-zastupitelstvo-primator (published 2026-10-22 00:04).
- In 2022 the talks took about five months — Echo24 (above).
- This case so far: earlier claims of the prague-coalition case (data/claim-labels.json, cz-praha-sobe-1 and others) had a deal or a confirmation in a short window; the six resolved so far (data/resolutions, 26–30 Oct) all ended NO.

## Base rate
- `coalition-deal-announced-short-window` (pipeline/reference-classes.json): 0.3, own record 1 YES / 6 NO. The class assumes partners close to a deal; here a choice of partner or a withdrawal, not a deal, also counts.

## Schedule slip
- Slip class: none. The event is unscheduled. The fixed points in the window are the Pirates' meeting on 3 Nov and any statement after it; the next three-way meeting is on 5 Nov, outside the window.

## Risks
- YES paths: the Pirates reject the offer or declare a lack of programme agreement after Tuesday; STAN and Spolu say on 3–4 Nov that they go with Praha sobě before Thursday's session; the Pirates' forum or Praha sobě's club takes a formal vote.
- NO paths (the default): the parties keep both tracks open as leverage until Thursday or later; Hlaváček has called parallel talks fair; adjourning the session removes time pressure.
- Moot risk: a decision on the evening of 2 Nov would not have reached this dossier. The morning should recheck.
- Resolution traps: "Praha sobě accepts the portfolios" (already said, does not count); leaks citing unnamed sources do not count; a mere statement that the Pirates are less likely does not count.

## Sources
- https://www.ceskenoviny.cz/zpravy/hlavacek-ustavujici-zastupitelstvo-prahy-prerusime-do-dojednani-koalice/2895938
- https://prazsky.denik.cz/komunalni-volby/prazska-koalice-se-rysuje-ustavujici-zastupitelstvo-se-prerusi-na-dva-tydny/
- https://www.ceskenoviny.cz/zpravy/2893550
- https://www.ceskenoviny.cz/zpravy/2893369
- https://www.seznamzpravy.cz/clanek/318900
- https://www.echo24.cz/a/HJEme/zpravy-domov-prazska-kolaice-stale-bez-dohody
- https://www.echo24.cz/a/HTspS/praha-magistrat-koalice-vyjednavani-stan-ods-spolu-pirati-hlavacek-portlik-scheinherr-nislerova-radni-zastupitelstvo-primator
- data/dossiers/2026-11-02/cz-praha-sobe-1.md
- data/planning/agenda.json
