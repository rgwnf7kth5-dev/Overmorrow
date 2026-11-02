# cz-army-1
- **Claim:** By 23:59 Prague time on 4 November 2026, the Chamber of Deputies votes on a proposal to put the Army Concept to 2040 on its agenda.
- **Criterion:** YES if between 00:00 on 3 Nov and 23:59 Prague time on 4 Nov 2026 the Chamber of Deputies holds a vote (an electronic vote recorded on psp.cz, or reported by ČTK) on a proposal to add to the agenda of a sitting an item on the Army Concept to 2040 (Koncepce výstavby Armády ČR, KVAČR) or the defence outlook to 2045, or on a resolution on either. The proposer may be any deputy; the outcome does not matter. NO otherwise, including if the Chamber does not sit on those days or the issue is raised only in speeches or interpellations.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-02T18:30Z. Read times between 18:15Z and 18:30Z on 2 Nov.
- Pages were read through a summarising fetch tool: excerpts in quotation marks are the Czech wording it returned; where only its paraphrase exists this is marked (paraphrase). Facts marked 'via' are reused from an earlier dossier and were not re-opened.
- **Choice of step:** the ODS proposal is the only announced step. No Security Council or Pavel–Babiš meeting was found for 3–4 Nov.

## Schedule
- **Sitting on 4 Nov: listed, not confirmed live.** The approved agenda of the 34th sitting (https://public.psp.cz/schuze/10/34, read 2026-11-02T18:25Z) lists "St 4. 11. 2026: případně body z bloku 3. čtení body dle schváleného pořadu schůze", but the copy read says "Aktuální stav k 16. 10. 2026, 14:10". So it is a schedule 17 days old, and the claim's premise of a floor sitting on 4 Nov is UNCONFIRMED.
- Same copy: "Út 3. 11. 2026: body dle schváleného pořadu schůze"; "Čt 5. 11. 2026: v 11.00 hodin: body dle schváleného pořadu schůze", "ve 14.30 hodin: 203"; "Pá 6. 11. 2026: případně body z bloku 3. čtení".
- https://public.psp.cz/sqw/hp.sqw?k=1005 (read 2026-11-02T18:24Z): 34th sitting interrupted, oral interpellations interrupted until 3 Nov 2026 14:00. No agenda for the days given there.
- The weekly programme (public.psp.cz/sqw/hp.sqw?k=203) returned a stale copy for 21–27 Sep; the plan of events (k=200), k=172, and the sitting votes page (hl.sqw?o=10&s=34, robots_disallowed) could not be read. The www.psp.cz home page was also robots_disallowed. Items 191 and later of the agenda were cut off.
- ČT24 topic page https://ct24.ceskatelevize.cz/tema/poslanecka-snemovna-218 (item of 2026-10-31, read 18:25Z): the Chamber "míří k další důležité schůzi"; the club chairs' council that plans it meets on a Tuesday (taken to be 3 Nov, not stated). Benda (ODS) may skip it (paraphrase).
- The agenda copy read has no item containing "Armád". ODS gave no date or form for its proposal.

## Facts
- Cabinet approved the concept and the defence outlook to 2045 on 2 Nov; 2% of GDP to 2030 allows only limited development of selected capabilities (paraphrase) — ČTK https://www.ceskenoviny.cz/zpravy/2895044 (published 2026-11-02 11:18, updated 17:13, read 2026-11-02T18:17Z).
- ODS: chair Martin Kupka said ODS wants the concept discussed at the coming Chamber sitting (paraphrase); Černochová: "Většina opatření je rozpočtově nekrytá." — ČTK 2895044.
- Pavel: the concept "nezajistí plnění spojeneckých závazků ani připravenost na konflikt vyšší intenzity."; "Je to vláda, kdo zodpovídá za bezpečnost země." — ČTK 2895044.
- Zůna: not a "závod o procentech". Babiš names air and anti-drone defence as top priorities — ČTK 2895044.
- Other opposition: Řehka (STAN) "Nejnebezpečnější je podle mě představa, že máme ještě dost času."; Flek (STAN, defence committee chair) and Bartoš (Pirates) ask how it is funded (paraphrase) — ČTK 2895044.
- Czechia misses 70% of capability targets; 32,000 professional soldiers by 2030 — ČTK 2895044.
- Arithmetic: the coalition holds 108 seats, the opposition 92 (pipeline/reference-data/cz-chamber.json via cz-okamura-1). A proposal can be voted down; the claim needs only the vote.
- Precedent for form: proposals to add a point were voted on a Tuesday and again a Friday in January, "neprosadila doplnění programu nynější sněmovní schůze" — Echo24 https://www.echo24.cz/a/HkX7e/zpravy-domov-opozice-opet-neprosadila-navrh-aby-snemovna-jednala-o-okamurove-odvolani (published 2026-01-16 10:39, via cz-okamura-1).
- Competing opposition business this week: Okamura motion, strike-day media issue (work/agenda-cz.json).

## Base rate
- No class for an opposition proposal to amend the agenda within two sitting days. `cz-chamber-government-bill-progress` does not fit.

## Schedule slip
- `cz-chamber-other-item`: 0.750 [data] (`node scripts/refdata/slip.mjs cz-chamber-other-item`, run 2026-11-02T18:24Z); a loose fit for a proposed addition.
- Signs it may move: "coming sitting" could mean any day up to 6 Nov or a later sitting; the document may be classified in part or wait for committee (defence committee not checked); an extraordinary sitting would need separate steps; ODS could use another form (debate in committee, interpellation).
- Signs it may hold: announced on 2 Nov, one day before the sitting resumes; agenda proposals are normally made at the opening of a sitting day.

## Risks
- Chamber does not reach the opening proposals on 3 or 4 Nov, or the 4 Nov sitting is dropped.
- Proposal bundled with another item (e.g. defence budget): counts only if the item names the concept or outlook; check the wording in the stenographic record.
- Proposal withdrawn after agreement in the club chairs' council: no vote → NO.
- Vote on 5 Nov → NO.

## Sources
- https://www.ceskenoviny.cz/zpravy/2895044
- https://public.psp.cz/schuze/10/34
- https://public.psp.cz/sqw/hp.sqw?k=1005
- https://ct24.ceskatelevize.cz/tema/poslanecka-snemovna-218
- https://www.echo24.cz/a/HkX7e/zpravy-domov-opozice-opet-neprosadila-navrh-aby-snemovna-jednala-o-okamurove-odvolani (via earlier dossier)
- Failed or stale: https://www.psp.cz/sqw/hp.sqw?akk=4 ; https://public.psp.cz/sqw/hl.sqw?o=10&s=34 (robots_disallowed); https://public.psp.cz/sqw/hp.sqw?k=172 ; https://public.psp.cz/sqw/hp.sqw?k=200 (server error); https://public.psp.cz/sqw/hp.sqw?k=203 (September copy)
