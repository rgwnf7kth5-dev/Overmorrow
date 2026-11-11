# cz-ods-changes-14
- **Claim:** By 23:59 on Friday 13 November 2026, after its presidium meeting, ODS announces a personnel change in its shadow government or leadership team, naming the person concerned.
- **Criterion:** YES if between 00:00 and 23:59 Prague time on 13 Nov 2026 Martin Kupka, another member of the ODS presidium, the ODS spokesperson or ods.cz announces, as decided or agreed (not merely proposed for later), that a named person joins, leaves or changes post in the ODS shadow government, or that a named member of the ODS presidium resigns or takes on a new leadership role (e.g. a newly created post), as reported by ČTK, ČT24 or ods.cz. NO if only general changes, plans or future steps without a named person are announced, or nothing is announced, or the meeting does not take place.
- **Event window:** 2026-11-13T00:00+01:00 to 2026-11-13T23:59+01:00 (Europe/Prague)
- **Deadline (resolves by):** 2026-11-14T08:00+01:00
- **Written at:** 2026-11-11T18:10Z

## Schedule
- ČTK, 10 Nov: the ODS presidium meets on Friday 13 Nov to discuss the party's situation; it is the closed away-day originally planned for 23 Oct (cancelled because of the Chamber vote on public-media fees); time and place not given — https://www.ceskenoviny.cz/zpravy/v-ods-roste-nespokojenost-kvuli-preferencim-v-patek-se-sejde-predsednictvo/2899978 (published 2026-11-10 12:24, updated 22:30, read 2026-11-11T17:55Z) "Předsednictvo se v pátek sejde na jednání, které bylo původně naplánované jako výjezdní a uzavřené na pátek 23. října."
- Same report on Deník (ČTK) — https://www.denik.cz/cesko/v-ods-panuje-nervozita-klesajici-preference-bude-resit-predsednictvo/ (updated 2026-11-10 14:16, read 2026-11-11T17:56Z).
- First vice-chair Portlík to Echo24: "Tento týden se mimo jiné i nad tímto máme sejít" — https://m.echo24.cz/a/Hh9Cw/zpravy-domov-ods-portlik-kupka-cervicek-fiala-preference-kongres-opozice-vedeni-stan (published 2026-11-10 13:19, read 2026-11-11T17:56Z).

## Facts
- Kupka: "Aktuální preference se nelíbí nikomu a nejvíc se nelíbí mně"; he cites the budget, education reform, tax and health reform work; confirms the presidium will discuss Děčín's call on Friday — ČTK 10 Nov (above).
- Spokeswoman Wernerová: the Friday meeting was planned in October and "není odezvou na děčínskou výzvu" — ČTK 10 Nov (above).
- Vice-chair and senator Martin Červíček: the leadership must evaluate this year's elections and "přijmout potřebné změny. A nějaké změny nepochybně přijít musí" — Echo24 10 Nov (above).
- Portlík defends Kupka: "Ta zodpovědnost je na celém vedení, nejenom na předsedovi" — Echo24 10 Nov (above).
- Skopeček (Central Bohemia leader, Chamber vice-speaker): leadership has a mandate from January and deserves time, but some in the leadership, the shadow government, MPs and senators "by měli přidat, být víc viditelní" — ČTK 10 Nov (above).
- Josef Pátek (Čelákovice mayor, regional councillor): "Místopředsedové nejsou vidět, stínoví ministři už vůbec." — ČTK 10 Nov (above).
- Radim Ivan (shadow minister for regional development): "tímto způsobem nemůžeme dál pokračovat", problems are the "zkostnatělá a široká struktura" — ČTK 10 Nov (above).
- Current leadership: chair Kupka (elected at the 17 Jan 2026 congress), first vice-chair Tomáš Portlík, vice-chairs Karel Haas, Pavel Drobil, Martin Červíček, Alexandr Vondra — ČTK 10 Nov (above); Echo24 gives the congress date as 17 Jan 2026.
- Polls: Median 10.5%, Kantar 12.5%; STAN near 20% — Echo24 10 Nov (above); agencies put ODS at about 10–12% — ČTK 10 Nov.
- Ex-PM Fiala calls for a broader coalition and rules out returning to lead the party — Echo24 headline, 11 Nov 07:59 (listed on the Echo24 page above; article not opened).
- No source opened tonight reports a planned reshuffle of the shadow government or names anyone to be replaced.

## Base rate
- No reference class in pipeline/reference-data/ or pipeline/reference-classes.json fits a party leadership meeting announcing named personnel changes. Nearest: unscheduled-announcement-within-one-day, own record 7 yes / 58 no (weak fit: here the meeting is scheduled and changes are openly demanded).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (2026-11-11T17:53Z) → 0.072 (prior 0.07, own 5/69). The meeting was cancelled once before (23 Oct) for an unexpected Chamber vote; on 13 Nov the Chamber sits on the refinery tax from 09:00 (psp.cz open data), which presidium members who are deputies may need to attend (Haas is a deputy per ČTK 10 Nov; others not checked).

## Risks
- The meeting is closed; the party may communicate only general conclusions ("plán obratu", programme priorities) and leave personnel decisions to the executive council or a later date.
- Shadow-government changes may be announced days later, or after consultation with regions.
- A resignation by a presidium member under pressure would count; it could come without any presidium decision.

## Sources
- https://www.ceskenoviny.cz/zpravy/v-ods-roste-nespokojenost-kvuli-preferencim-v-patek-se-sejde-predsednictvo/2899978
- https://www.denik.cz/cesko/v-ods-panuje-nervozita-klesajici-preference-bude-resit-predsednictvo/
- https://m.echo24.cz/a/Hh9Cw/zpravy-domov-ods-portlik-kupka-cervicek-fiala-preference-kongres-opozice-vedeni-stan
- https://www.ods.cz/o-nas/stanovy
- https://www.psp.cz/eknih/cdrom/opendata/ (schuze.zip; 36th sitting 13 Nov 09:00)
- WebSearch (11 Nov ~17:55Z): "ODS předsednictvo pátek mimořádný kongres Kupka Děčín"; "Kupka předsednictvo ODS výjezdní zasedání změny stínová vláda listopad 2026"; "stanovy ODS mimořádný kongres svolá výkonná rada požádá oblastních sdružení".

## Research step (11 Nov 2026 evening)
- No report found (as of 2026-11-11T18:16Z) that the 13 Nov presidium will announce named personnel changes (shadow government, spokespeople, campaign team). ods.cz front page shows no relevant item (https://www.ods.cz/, read 2026-11-11T18:15Z); ČTK news list shows only the Median poll (ODS 10.5%) — https://www.ceskenoviny.cz/zpravy/median-ano-si-polepsilo-na-32-stan-ma-185-a-ods-105-/2899833 (title only, read 2026-11-11T18:15Z).
- Commentary only: Echo24 podcast "Starostové nad hrobem ODS" (11 Nov 16:00) discusses ODS decline, no personnel news — https://www.echo24.cz/a/HdKJq/podcast-echoporada-starostove-nad-hrobem-ods-v-cem-petr-pavel-rozumi-putinovi (published 2026-11-11T16:00+01:00, read 2026-11-11T18:15Z) "Výrazně posiluje STAN a ODS se dostává nad propast."
- Search (2026-11-11 ~18:14Z): "ODS předsednictvo pátek Kupka změny stínová vláda personální" — returned only older items (Jan 2026 congress, shadow-government formation).
