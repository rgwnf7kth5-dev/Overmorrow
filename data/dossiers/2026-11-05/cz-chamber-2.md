# cz-chamber-2
- **Claim:** By 23:59 Prague time on 4 November 2026, the Chamber of Deputies votes on a proposal to add the removal of Speaker Tomio Okamura to its agenda.
- **Criterion:** YES if between 00:00 on 3 Nov and 23:59 Prague time on 4 Nov 2026 the Chamber of Deputies holds a vote (an electronic vote recorded on psp.cz, or reported by ČTK) on a proposal to add to its agenda an item on removing Tomio Okamura as Speaker (odvolání předsedy Poslanecké sněmovny), or on the removal itself. The outcome does not matter. NO otherwise, including if the Chamber does not sit on 4 Nov and no vote took place on 3 Nov, or if the motion is not tabled.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-02T18:30Z. Read times between 18:15Z and 18:30Z on 2 Nov.
- Pages were read through a summarising fetch tool: excerpts in quotation marks are the Czech wording it returned; where only its paraphrase exists this is marked (paraphrase). Facts marked 'via' are reused from an earlier dossier and were not re-opened.
- **Overlap:** the same event for 3 Nov alone is cz-okamura-1 (edition 2026-11-04). A vote on 3 Nov resolves both YES.

## Schedule
- **Sitting on 4 Nov: listed, not confirmed live.** The approved agenda of the 34th sitting (https://public.psp.cz/schuze/10/34, read 2026-11-02T18:25Z) lists "St 4. 11. 2026: případně body z bloku 3. čtení body dle schváleného pořadu schůze", but the copy read says "Aktuální stav k 16. 10. 2026, 14:10". So it is a schedule 17 days old, and the claim's premise of a floor sitting on 4 Nov is UNCONFIRMED.
- Same copy: "Út 3. 11. 2026: body dle schváleného pořadu schůze"; "Čt 5. 11. 2026: v 11.00 hodin: body dle schváleného pořadu schůze", "ve 14.30 hodin: 203"; "Pá 6. 11. 2026: případně body z bloku 3. čtení".
- https://public.psp.cz/sqw/hp.sqw?k=1005 (read 2026-11-02T18:24Z): 34th sitting interrupted, oral interpellations interrupted until 3 Nov 2026 14:00. No agenda for the days given there.
- The weekly programme (public.psp.cz/sqw/hp.sqw?k=203) returned a stale copy for 21–27 Sep; the plan of events (k=200), k=172, and the sitting votes page (hl.sqw?o=10&s=34, robots_disallowed) could not be read. The www.psp.cz home page was also robots_disallowed. Items 191 and later of the agenda were cut off.
- ČT24 topic page https://ct24.ceskatelevize.cz/tema/poslanecka-snemovna-218 (item of 2026-10-31, read 18:25Z): the Chamber "míří k další důležité schůzi"; the club chairs' council that plans it meets on a Tuesday (taken to be 3 Nov, not stated). Benda (ODS) may skip it (paraphrase).
- **Agenda read: yes, partly, and an old copy.** Items 1–190 were read at https://public.psp.cz/schuze/10/34. No item on removing the Speaker appears; the only "předsed" items are 168 and 169 (commission chairs). Items 191 and later, including 202, were not visible. The item would be added by a floor vote, so its absence is expected.

## Facts
- Hřib (Pirates), 24 Oct: the motion comes at the next Chamber sitting; reasons include the restricted public access to the fee debate; "Tato arogance moci je nepřípustná." — ČTK https://www.ceskenoviny.cz/zpravy/pirati-navrhnou-odvolani-okamury-z-cela-snemovny-podpori-je-dalsi-strany/2892523 (published 2026-10-24 15:02, updated 19:17, read 2026-11-02T18:24Z).
- Needs a written motion by 80 of 200 deputies; the opposition has 92 — ČTK 2892523. TOP 09 and KDU-ČSL support, KDU saying it will mainly be a political gesture (paraphrase); STAN undecided, to discuss in its club, Rakušan did not rule it out (paraphrase) — ČTK 2892523.
- ČT24: the Pirates started a "petici za odvolání Tomia Okamury (SPD) z funkce předsedy sněmovny", backed by KDU-ČSL and TOP 09 — https://ct24.ceskatelevize.cz/clanek/domaci/zasah-proti-demonstrantum-ve-snemovne-byl-podle-policie-primereny-pokleknuti-uz-ne-379221 (relative time only, about 2 Nov, read 2026-11-02T18:26Z).
- No report of 80 signatures collected or handed in was found in searches on 1 and 2 Nov (absence; the two news searches on 2 Nov returned nothing newer than 24–26 Oct on this). ODS and STAN positions in November were not found.
- January sequence: signatures began on 5 Jan, 92 handed over on 13 Jan, proposals to add the item failed on Tue 13 and Fri 16 Jan — via cz-okamura-1 (Echo24, pirati.cz). "O zařazení bodu se budou opakovaně snažit v dalších dnech schůze" — https://www.pirati.cz/jak-pirati-pracuji/pirati-pokracuji-ve-snaze-odvolat-tomia-okamuru-z-cela-snemovny-opozicni-strany-predaly-sesbirane-podpisy-predsedovi-dolni-komory/ (published 2026-01-13 13:02, via cz-okamura-1).
- Coalition 108 seats, opposition 92 (pipeline/reference-data/cz-chamber.json via cz-okamura-1). In January: 90 for, against all 108 coalition votes (Deník, via cz-okamura-1, not opened).
- Koruna bill (tisk 320), for context: not found in the agenda copy read (no "koruna"); needs 120 votes; cabinet backed it on 26 Oct (data/planning/agenda.json; ČT24 topic page). The ČTK page on it was blocked. No date found.

## Base rate
- No class for an opposition procedural motion voted in a window. `cz-chamber-government-bill-progress` does not fit. Precedent: January, the vote came on the first sitting day after the signatures were handed in (1 of 1).

## Schedule slip
- `cz-chamber-other-item`: 0.750 [data] (`node scripts/refdata/slip.mjs cz-chamber-other-item`, run 2026-11-02T18:24Z); share of non-fixed items not dealt with at their sitting, a loose fit for a proposed addition.
- Signs it may move: no signatures reported nine days after the announcement; STAN undecided; 4 Nov unconfirmed; opposition may spread the attempt to 5–6 Nov, or wait for an extra sitting.
- Signs it may hold: "next sitting" named; first floor day since the announcement is 3 Nov; January shows repeated attempts on several days of a sitting.

## Risks
- No sitting on 4 Nov and nothing on 3 Nov → NO.
- Motion tabled and put to a vote on 5–6 Nov → NO.
- An agenda vote on another subject misread as this one; the criterion requires an item on Okamura's removal.

## Sources
- https://www.ceskenoviny.cz/zpravy/pirati-navrhnou-odvolani-okamury-z-cela-snemovny-podpori-je-dalsi-strany/2892523
- https://ct24.ceskatelevize.cz/clanek/domaci/zasah-proti-demonstrantum-ve-snemovne-byl-podle-policie-primereny-pokleknuti-uz-ne-379221
- https://zpravy.aktualne.cz/domaci/arogance-moci-pirati-vytahli-proti-okamurovi-chteji-ho-zbavit-funkce/r~aaa29a0c2055e7157b68e051fde1b1da/
- https://ct24.ceskatelevize.cz/tema/poslanecka-snemovna-218
- https://public.psp.cz/schuze/10/34
- https://public.psp.cz/sqw/hp.sqw?k=1005
- Earlier dossier: data/dossiers/2026-11-04/cz-okamura-1.md
- Failed or stale: https://www.psp.cz/sqw/hp.sqw?akk=4 ; https://public.psp.cz/sqw/hl.sqw?o=10&s=34 (robots_disallowed); https://public.psp.cz/sqw/hp.sqw?k=172 ; https://public.psp.cz/sqw/hp.sqw?k=200 ; https://public.psp.cz/sqw/historie.sqw?o=10&t=320 (server error); https://public.psp.cz/sqw/hp.sqw?k=203 (September copy); https://www.ceskenoviny.cz/zpravy/vlada-podporila-navrh-na-ustavni-zakotveni-koruny/2892762 (permission not answered)
