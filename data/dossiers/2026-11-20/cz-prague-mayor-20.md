# cz-prague-mayor-20
- **Claim:** On Thursday 19 November 2026 the Prague City Assembly elects Petr Hlaváček (STAN) mayor with at least 50 of the 65 votes, i.e. with votes from beyond the 47-seat STAN–Spolu–Praha sobě coalition.
- **Criterion:** YES if, between 00:00 and 23:59 Prague time on 19 Nov 2026, the Prague City Assembly (Zastupitelstvo hl. m. Prahy) elects Petr Hlaváček mayor (primátor) and the announced result (assembly voting record, ČTK, ČT24 or another national outlet) shows 50 or more votes in favour. NO if he receives 49 or fewer votes, is not elected, or the election does not take place on 19 Nov (postponement = NO).
- **Event window:** 2026-11-19T00:00+01:00 – 2026-11-19T23:59+01:00 (Europe/Prague)
- **Evidence expected:** ČTK/ČT24 reports on 19 Nov; in 2023 the mayor vote came in the morning of the session day; evidence_at 2026-11-19T15:00+01:00
- **Deadline (resolves by):** 2026-11-21T05:00+01:00
- **Written at:** 2026-11-17T18:10Z

## Schedule
- The constituent session started (early Nov) and was adjourned to 19 Nov: "zastupitelé zasedání přerušili do 19. listopadu" — https://www.seznamzpravy.cz/clanek/domaci-politika-pirati-nebo-praha-sobe-hlavacek-vaha-zakulisi-odhaluje-kdo-ma-navrch-319878 (published 2026-11-06T11:56Z, read 2026-11-17T17:54:16Z); Hlaváček: "Je dohoda, že přerušíme zastupitelstvo do 19. listopadu." — https://www.blesk.cz/clanek/851918 (published 2026-11-03T15:55, read 2026-11-17T17:54:14Z)
- Council names to be announced on 18 Nov, "den před jednáním zastupitelstva, na kterém se bude volit vedení města" — https://www.ceskenoviny.cz/zpravy/hlavacek-primatorem-koalice-stan-spolu-a-prahy-sobe-/2895938 (published 2026-11-11T10:48, read 2026-11-17T17:44:15Z, desk sweep); expats.cz: "Hlaváček’s election and the appointment of the new leadership are expected on Nov. 19"; coalition agreement to be signed before the meeting — https://www.expats.cz/czech-news/article/petr-hlavacek-to-become-prague-mayor-as-pirate-less-coalition-agreed (published 2026-11-12T08:22+01:00, read 2026-11-17T17:54:31Z)
- Start time not confirmed: praha.eu unreachable (TLS error); the assembly materials portal zastupitelstvo.praha.eu returned empty lists to the reader.

## Facts
- Seats (65): STAN 17, Spolu (ODS, TOP 09) 17, Praha sobě 13, ANO 11, Pirates 7; SPD and Motoristé failed to enter — https://www.ceskenoviny.cz/zpravy/2893369 (published 2026-10-26T15:55+02:00, read 2026-11-17T17:54:11Z). No SPD members sit in the assembly.
- Coalition STAN–Spolu–Praha sobě: 47 of 65; council of 11: STAN 5 incl. the mayor, Spolu 4, Praha sobě 2 — https://www.newstream.cz/politika/praha-je-rozdana-hlavacek-bude-primatorem-ano-zustava-mimo-hru (published 2026-11-11T11:53, read 2026-11-17T17:52:37Z)
- STAN club voted for the coalition on 10 Nov; Pirates' club "rozhodnutí Starostů jako celek respektuje … Piráti jsou připraveni ‚být konstruktivní opozicí‘." — https://www.seznamzpravy.cz/clanek/domaci-politika-praha-ma-zrejme-koalici-vitezne-hnuti-stan-ji-chce-sestavit-se-spolu-a-prahou-sobe-320223 (published 2026-11-10T17:00Z, read 2026-11-17T17:54:29Z)
- Pirates "pledged constructive scrutiny" and will not claim the oversight committee chair (convention: largest opposition group) — expats.cz (above).
- ANO: all parties ruled out cooperation with ANO ("Spolupráci s hnutím ANO všechny subjekty vyloučily") — seznamzpravy 320223; ANO club chair Hušbauer criticised the six-party coalition as "nesourodá" — newstream (above). No statement found on how ANO or the Pirates will vote on the mayor (searches to 2026-11-17T17:56Z).
- Earlier the STAN club was split between the Pirates and Praha sobě options ("Je to nejednotné") — seznamzpravy 319878 (above). No report of coalition rebels found.
- Precedent 2023: Svoboda (ODS) elected with 50 of 65; coalition had 36; "Podpořil jej kromě koaličních stran i celý zastupitelský klub ANO"; Praha sobě and SPD did not; one member (Kordová Marvanová) present but not voting — https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/svoboda-se-stal-prazskym-primatorem-zastupitele-zvolili-i-namestky-a-radni-10684 (published 2023-02-16T10:42+01:00, read 2026-11-17T17:52:45Z). Individual votes were reported, so the vote was public (veřejné hlasování) — inferred from that report; the 2026 voting method was not confirmed.
- Hlaváček was deputy mayor for 8 years in councils with the Pirates (2018–2026) — https://www.seznamzpravy.cz/clanek/domaci-politika-primator-svoboda-je-pro-me-vzorem-svym-klidem-rika-jeho-nastupce-hlavacek-320419 (published 2026-11-15T11:05Z, read 2026-11-17T17:52:35Z)

## Base rate
- Class: Prague mayor elections with a majority coalition. 2023: 50 votes vs coalition 36 (+14, ANO joined). Other years (2018 Hřib, 2014 Krnáčová) were not checked for counts. n = 1 checked; no pipeline/reference-data class applies.
- 50 votes require the full coalition (47) plus at least 3 opposition votes, or fewer coalition absences offset by more opposition votes.

## Schedule slip
- slip_class: other-scheduled. `node scripts/refdata/slip.mjs other-scheduled`: prior 0.07, own 7/88, rate 0.079 [estimate].
- Signs of slip: none. The adjournment date was set by the assembly; the coalition deal was announced on 11 Nov; council names due 18 Nov. Prague's 2022 talks did stretch over months (precedent of re-adjournment), but this time a signed majority exists.

## Risks
- Opposition behaviour is the open part: the Pirates (7) call themselves "constructive opposition" and are former partners; ANO (11) backed the ODS mayor in 2023 but is now excluded and critical. YES needs at least 3 opposition votes with full coalition attendance; if both opposition clubs vote against or abstain, the count cannot exceed 47.
- Absences within the coalition reduce the base below 47.
- If the vote were secret (method not confirmed), the count is less predictable.

## Sources
- https://www.seznamzpravy.cz/clanek/domaci-politika-praha-ma-zrejme-koalici-vitezne-hnuti-stan-ji-chce-sestavit-se-spolu-a-prahou-sobe-320223 ; https://www.seznamzpravy.cz/clanek/domaci-politika-pirati-nebo-praha-sobe-hlavacek-vaha-zakulisi-odhaluje-kdo-ma-navrch-319878 ; https://www.seznamzpravy.cz/clanek/domaci-politika-primator-svoboda-je-pro-me-vzorem-svym-klidem-rika-jeho-nastupce-hlavacek-320419 ; https://www.seznamzpravy.cz/clanek/domaci-politika-dohoda-v-praze-je-hotova-povladne-koalice-stan-spolu-a-prahy-sobe-320265
- https://www.ceskenoviny.cz/zpravy/hlavacek-primatorem-koalice-stan-spolu-a-prahy-sobe-/2895938 ; https://www.ceskenoviny.cz/zpravy/2893369 ; https://www.blesk.cz/clanek/851918 ; https://www.newstream.cz/politika/praha-je-rozdana-hlavacek-bude-primatorem-ano-zustava-mimo-hru ; https://eurozpravy.cz/domaci/pirati-v-praze-miri-do-opozice-primatorem-bude-petr-hlavacek.n4m9a2sq ; https://www.expats.cz/czech-news/article/petr-hlavacek-to-become-prague-mayor-as-pirate-less-coalition-agreed
- Precedent: https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/svoboda-se-stal-prazskym-primatorem-zastupitele-zvolili-i-namestky-a-radni-10684
- Failed: https://www.praha.eu (TLS certificate error, exit 3); zastupitelstvo.praha.eu lists empty.
