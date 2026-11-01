# cz-okamura-1
- **Claim:** By 23:59 Prague time on 3 November 2026, the Chamber of Deputies votes on a proposal to add the removal of Speaker Tomio Okamura to its agenda.
- **Criterion:** YES if between 00:00 and 23:59 Prague time on 3 Nov 2026 the Chamber of Deputies holds a vote (electronic vote recorded on psp.cz, or reported by ČTK) on a proposal to add to its agenda an item on removing Tomio Okamura as Speaker (odvolání předsedy Poslanecké sněmovny), or on the removal itself. The outcome of the vote does not matter. A void vote that is repeated the same day counts once. NO if no such vote takes place on 3 Nov, including if the Chamber does not sit or the motion is not tabled.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-03T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-01T18:20Z. Read times between 17:45Z and 18:10Z on 1 Nov.

## Schedule
- **Chamber sitting on 3 Nov: NOT verified at the primary source tonight.** psp.cz (hp.sqw?k=1005) returned robots_disallowed at 2026-11-01T18:04Z. Our agenda entry (data/planning/agenda.json, added 25 Oct) records "Sitting resumes 3 Nov 14:00 (psp.cz)" for the 34th sitting, with fixed items on 5 Nov at 11:00 and 14:30; this was read from psp.cz earlier but could not be re-checked.
- **Motion:** Hřib (Pirates) announced on 24 Oct that the Pirates will propose Okamura's removal "na nejbližším jednání Sněmovny" — Newstream https://www.newstream.cz/newsbox/zprava-45934 (published 2026-10-24 15:11, from sweep notes, not re-opened). No date for tabling was given.

## Facts
- **Signatures needed:** 80 deputies (two-fifths) to put the removal on the agenda; KDU-ČSL and TOP 09 expected to support; STAN had not decided — Seznam Zprávy https://www.seznamzpravy.cz/clanek/318754 (published 2026-10-26 10:41, read 2026-11-01T18:05Z) "STAN zatím nezaujal stanovisko". Okamura called the accusations "neustálé lži, útoky, výkřiky a nesmysly".
- **Arithmetic:** coalition clubs ANO, SPD, Motoristé hold 108 seats (pipeline/reference-data/cz-chamber.json, coalition_seats_S 108 in 391 of 397 contested votes); the opposition has 92. Without STAN the Pirates, KDU-ČSL, TOP 09 and ODS would need to reach 80 (club sizes not checked tonight).
- **January precedent:** opposition began collecting signatures on Mon 5 Jan 2026 — Echo24 https://www.echo24.cz/a/HtGc2/zpravy-domaci-odvolani-okamury-spd-poslanci-ano-opozice-alternativa-babis-vlada (published 2026-01-06 00:03, read 2026-11-01T18:01Z). All 92 opposition deputies (ODS, STAN, Pirates, KDU-ČSL, TOP 09) signed; the motion was submitted on Tuesday (13 Jan) and the proposals to add it to the agenda failed on Tuesday and again on Friday 16 Jan — Echo24 https://www.echo24.cz/a/HkX7e/zpravy-domov-opozice-opet-neprosadila-navrh-aby-snemovna-jednala-o-okamurove-odvolani (published 2026-01-16 10:39, read 2026-11-01T18:07Z) "neprosadila doplnění programu nynější sněmovní schůze". Deník: the attempt got 90 votes against all 108 coalition votes — https://www.denik.cz/z_domova/tomio-okamura-odvolani-snemovna.html (from sweep notes, not re-opened).
- **This time:** nine days after the announcement no report of signatures being collected or submitted was found (searches 1 Nov). Aktuálně: a new motion would probably not succeed given the government majority — https://zpravy.aktualne.cz/domaci/arogance-moci-pirati-vytahli-proti-okamurovi-chteji-ho-zbavit-funkce/r~aaa29a0c2055e7157b68e051fde1b1da/ (from sweep notes).
- **Other business on 3 Nov:** the ČT/ČRo strike and rallies; the Chamber security committee was due to look at the gallery incident (agenda, unverified).

## Base rate
- `cz-chamber-government-bill-progress` does not fit. No class for "opposition procedural motion voted on a given day". Precedent: in January 2026 the vote came eight days after signature collection began, on the first sitting day after submission (1 of 1).

## Schedule slip
- `cz-chamber-other-item`: 0.750 [data] (`node scripts/refdata/slip.mjs cz-chamber-other-item`, run 2026-11-01T18:09Z) — share of non-fixed agenda items not dealt with at their sitting; a loose fit for a proposed agenda addition.
- Signs it may move: no submitted signatures reported; STAN undecided; the opposition may prefer the strike day for the media issue; sitting date unverified; the proposal could be made on another day of the sitting (4–6 Nov).
- Signs it may happen: Hřib named "the next sitting"; the resumed sitting at 14:00 on 3 Nov is the first floor day since the announcement; agenda changes are normally proposed at the start of a sitting day.

## Risks
- Chamber does not sit on 3 Nov, or sits only briefly → NO.
- Motion tabled but put to a vote on 4–6 Nov → NO.
- A vote on a different agenda change (e.g. on the media bill) wrongly read as this one; the criterion requires an item on Okamura's removal.

## Sources
- https://www.seznamzpravy.cz/clanek/318754
- https://www.echo24.cz/a/HtGc2/zpravy-domaci-odvolani-okamury-spd-poslanci-ano-opozice-alternativa-babis-vlada
- https://www.echo24.cz/a/HkX7e/zpravy-domov-opozice-opet-neprosadila-navrh-aby-snemovna-jednala-o-okamurove-odvolani
- https://www.psp.cz/sqw/hp.sqw?k=1005 (blocked)
- From sweep notes, not re-opened: https://www.newstream.cz/newsbox/zprava-45934 ; https://www.denik.cz/z_domova/tomio-okamura-odvolani-snemovna.html ; https://zpravy.aktualne.cz/domaci/arogance-moci-pirati-vytahli-proti-okamurovi-chteji-ho-zbavit-funkce/r~aaa29a0c2055e7157b68e051fde1b1da/
- Failed: https://www.irozhlas.cz/zpravy-domov/tomio-okamura-odvolani-z-cela-snemovny-pirati-hrib_2610241534_tec (client error); https://tn.nova.cz/zpravodajstvi/clanek/637545-opozice-zacne-sbirat-podpisy-okamura-musi-v-cele-snemovny-skoncit (client error)

## Research step (1 Nov evening)
Read between 18:25Z and 18:47Z on 1 Nov. No fact found that settles the claim.
- **Sitting on 3 Nov:** psp.cz hp.sqw?k=1005 and ischuze.sqw?o=10 again returned robots_disallowed (about 18:26Z). No news report found tonight confirms or denies that the sitting resumes on 3 Nov. ČT24 says the fee bill's second reading falls in January: "Druhé čtení podle něj s ohledem na lhůtu 60 dnů vychází na Vánoce, takže přijde na řadu až v lednu" — https://ct24.ceskatelevize.cz/clanek/domaci/babis-vlada-chysta-navrh-podle-nehoz-by-ct-a-cro-nefinancoval-primo-statni-rozpocet-379172 (published "včera v 12:40", i.e. 31 Oct, read 18:39Z).
- **Motion, latest reports:** ČTK https://www.ceskenoviny.cz/zpravy/pirati-budou-navrhovat-odvolani-okamury-z-cela-snemovny/2892523 (published 2026-10-24 15:02, updated 19:17, read 18:33Z): proposal at "nejbližším jednání Sněmovny", no date; "Opozice by tak potřebovala předložit podpisy alespoň 80 ze svých 92 poslanců"; KDU-ČSL "Jeho odvolání proto podpoříme"; STAN to discuss it in its club. Seznam Zprávy https://www.seznamzpravy.cz/clanek/318754 (published 2026-10-26 10:41, re-read 18:27Z): "Starostové se o návrhu ještě poradí"; no submission date. A search on 1 Nov found no report of signatures being collected or handed over after 26 Oct.
- **January sequence (for timing):** "Zajistili jsme všech 18 podpisů pirátského klubu" — Forum24 https://www.forum24.cz/sber-podpisu-pokracuje-opozice-chce-okamuru-sesadit-z-cela-snemovny-ve-hre-je-mimoradna-schuze (published 2026-01-08, read 18:30Z). 92 signatures were handed to the Speaker on 13 Jan; "O zařazení bodu se budou opakovaně snažit v dalších dnech schůze" — pirati.cz https://www.pirati.cz/jak-pirati-pracuji/pirati-pokracuji-ve-snaze-odvolat-tomia-okamuru-z-cela-snemovny-opozicni-strany-predaly-sesbirane-podpisy-predsedovi-dolni-komory/ (published 2026-01-13 13:02, read 18:31Z).
- **Autumn precedent:** the opposition handed over all 92 signatures for a no-confidence motion "v pátek před 09:30", and Okamura called a sitting for "úterý ve 14:00" — Aktuálně https://zpravy.aktualne.cz/domaci/opozice-odevzdala-navrh-na-vysloveni-neduvery-vlade-okamura-musi-svolat-schuzi/r~aaa29a8c515609a66ca02e845a953a3e/ (no date shown; image paths suggest about 25 Sep 2026; read 18:35Z).
