# cz-media-model-1
- **Claim:** By 23:59 Prague time on 3 November 2026, the Czech government, the Finance Ministry, the Culture Ministry or the coalition parties publish a written proposal of the new model of funding ČT and ČRo.
- **Criterion:** YES if between 06:00 on 2 Nov and 23:59 Prague time on 3 Nov 2026 the government, the Finance Ministry, the Culture Ministry, or ANO, SPD or Motoristé sobě (as parties or deputies' clubs) publish a written document setting out the new funding model for ČT and ČRo (an outline, paragraph text or a filed amendment to the fee bill), on vlada.gov.cz, mf.gov.cz, mk.gov.cz, a party website, psp.cz, or as a document released to the press and described as such by ČTK, ČT24 or iROZHLAS. Oral statements, interviews or press-conference remarks without a released written document do not count. NO otherwise, including if the release is postponed.
- **Event window:** 2026-11-02T06:00:00+01:00 to 2026-11-03T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-01T18:20Z. Read times between 17:45Z and 18:10Z on 1 Nov.

## Schedule
- No release date exists. Babiš: the Finance Ministry is preparing the proposal and the coalition council should discuss it on Monday (2 Nov) — e15/ČTK https://www.e15.cz/domaci/obrat-ve-financovani-ct-a-rozhlasu-poplatky-maji-byt-dobrovolne-a-penize-mimo-rozpocet-tvrdi-babis-1436983 (published 2026-10-31 13:01, read 2026-11-01T18:00Z) "Budeme navrhovat dobrovolnost poplatků, kdo chce, ať platí, kdo nechce, nebude platit." The article gives no date for publishing the proposal.
- **The outcome of the 2 Nov coalition council is not known at the time of writing.** No time of day or press conference for it was found.

## Facts
- **Model so far (oral):** voluntary fees, a state-guaranteed amount, money "nejsou přímo z rozpočtu" — e15/ČTK (above). Firms would stop paying (sweep notes; Mediář 31 Oct).
- **Timetable of the bill:** second reading in January because of the 60-day committee period; no effect from January 2027 — e15/ČTK (above). The Chamber media committee adjourned its debate to 10 Dec (data/planning/agenda.json, ČT24 30 Oct headline). The natural vehicle for a written model is a second-reading amendment, which can be filed in the psp.cz system at any time before second reading.
- **Schillerová:** the concrete form of financing will be dealt with in second and third reading; internal coalition-council debates are not disclosed — Blesk https://www.blesk.cz/clanek/851254 (published 2026-10-26 06:41, read 2026-11-01T18:02Z).
- **Turek (Motoristé):** the debate is currently non-public; a public hearing in the Chamber is expected early next year — ČTK https://www.ceskenoviny.cz/zpravy/nacher-chce-debatu-o-definici-verejne-sluzby-opozice-resi-podle-grolicha-postup/2895722 (published 2026-11-01 13:47, read 2026-11-01T18:03Z).
- **Nacher (ANO):** does not know exactly which changes are discussed and refers questions to Babiš — ČTK 1 Nov (above).
- **SPD:** fees will be abolished; problem with any tax rise; Okamura expects the financing form to be agreed in the first half of 2027 — ČTK https://www.ceskenoviny.cz/zpravy/spd-trva-na-zruseni-poplatku-odmita-financovani-formou-dane/2895042 (published 2026-10-30 13:26; via dossier cz-coalition-media-1, read 2026-10-31T17:46Z).
- **Macinka:** "Na tisíc procent prostě rozhlasové a televizní poplatky skončí." — Blesk (above).
- **Pressure point:** the strike and rallies fall on 3 Nov; the government could answer with a document or avoid looking as if it bowed to the strike.
- **Past pattern:** April 2026 Babiš–Chudárek talks ended with a working group, not a text; the voluntary-fee idea was floated in April too — dossier cz-coalition-media-1 (Lupa.cz, ČTK 22 Apr).

## Base rate
- No class for "government publishes a written policy outline in a two-day window". Nearest: `coalition-deal-announced-short-window` (pipeline/reference-classes.json, base_rate 0.3, own 1 YES / 6 NO) — a loose fit.

## Schedule slip
- `cz-government-item`: 0.103 [estimate], prior 0.12, own 0/1 (`node scripts/refdata/slip.mjs cz-government-item`, run 2026-11-01T18:09Z). There is no announced release, so slip applies loosely.
- Signs it will not come by 3 Nov: drafting still at the Finance Ministry; SPD and Motoristé wording conflicts with "voluntary fees"; ministers say the form comes in second reading (January); internal debates not disclosed.

## Risks
- **For YES:** the coalition council agrees and the Finance Ministry releases a short written summary or a press release with the main parameters. A government press release with the model's parameters would count as a written document if it sets out the model; a release saying only that talks continue would not.
- **For NO:** only oral statements by Babiš (TV, social media); council postponed or split.
- **Ambiguity:** a press release listing a few principles. Resolve YES only if it describes how ČT and ČRo would be funded (source of money and the fee's status).

## Sources
- https://www.e15.cz/domaci/obrat-ve-financovani-ct-a-rozhlasu-poplatky-maji-byt-dobrovolne-a-penize-mimo-rozpocet-tvrdi-babis-1436983
- https://www.blesk.cz/clanek/851254
- https://www.ceskenoviny.cz/zpravy/nacher-chce-debatu-o-definici-verejne-sluzby-opozice-resi-podle-grolicha-postup/2895722
- https://www.ceskenoviny.cz/zpravy/spd-trva-na-zruseni-poplatku-odmita-financovani-formou-dane/2895042 (via earlier dossier)
- data/dossiers/2026-11-03/cz-coalition-media-1.md
