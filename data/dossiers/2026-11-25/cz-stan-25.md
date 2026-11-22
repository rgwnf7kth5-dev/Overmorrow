# cz-stan-25
- **Claim:** On Tuesday 24 November 2026 the Chamber of Deputies votes down STAN's proposal to add to the sitting's agenda its draft resolution calling the missiles and drone that fell in Poland a Russian provocation.
- **Criterion:** YES if, between 00:00 and 23:59 on Tue 24 Nov 2026 (Europe/Prague), the Chamber holds a vote on a STAN proposal to add (or to put first) a point on the missiles/drone that fell in Poland and the proposal is not adopted, as shown by the psp.cz vote record or reported by ČTK, ČT24 or another major Czech outlet. NO if the proposal is adopted, or if no such vote is held on 24 Nov (STAN does not table it, the sitting does not open, the vote is put off). A coalition-sponsored point on the same incident does not change the outcome: only the vote on STAN's proposal counts; if several such STAN proposals are voted, YES if any of them is rejected and none adopted.
- **Event window:** 2026-11-24T00:00+01:00 – 2026-11-24T23:59+01:00 (Europe/Prague); opening of the regular sitting (agenda approval).
- **Evidence expected:** ČTK/ČT24 live coverage of the opening; psp.cz vote record. evidence_at 2026-11-24T16:00+01:00.
- **Resolves by:** 2026-11-26T05:00:00+01:00
- **Written at:** 2026-11-22T18:10Z

## Schedule
- The regular sitting opens Tue 24 Nov — ČTK 13 Nov ("nejbližší řádné schůzi, která začne v úterý 24. listopadu") https://www.ceskenoviny.cz/zpravy/dan-pro-rafinerie-miri-ke-schvalovani-podle-orlenu-ohrozi-investice/2901415 (read 2026-11-22T17:54Z). Opening hour not confirmed (psp.cz unreachable).
- STAN: "Svůj návrh usnesení k pátečnímu incidentu chce STAN v úterý 24. listopadu zařadit jako první bod schůze Sněmovny." — ČTK https://www.ceskenoviny.cz/zpravy/stan-chce-ve-snemovne-strely-v-polsku-oznacit-za-provokaci-ze-strany-ruska/2904762 (published 2026-11-21T11:50, updated 14:05; read 2026-11-22T17:54Z).

## Facts
- STAN's text would condemn the violation of Polish airspace "jako nepřijatelnou provokaci a pojmenovali Rusko jako jejího původce", express solidarity with Poland and confirm allied commitments — ČTK 21 Nov (above).
- Coalition responses, 21 Nov: Foreign Minister Macinka (Motoristé) and foreign committee chair Vondráček (ANO) said PM Babiš had already condemned the incident; Vondráček: "U STAN mám… podezření, že na tak vážném tématu chystá jen další politickou exhibici… Nevěřím STAN čistý úmysl." — ČTK 21 Nov.
- Speaker Okamura (SPD), CNN Prima News "Partie", 22 Nov: "Návrh usnesení mafiánského STANu určitě nebudeme podporovat nikdy, a to i na jiné záležitosti"; he wants to wait for the investigation. Filip Turek (Motoristé honorary president): "Nic takového tam probíhat nebude." — Ekonomický deník https://ekonomickydenik.cz/ruske-strely-polsko-okamura-turek/ (published 2026-11-22T13:47Z, read 2026-11-22T17:54Z).
- Babiš (20 Nov, on X): violation of Polish airspace "nepřijatelné"; Czechia stands by Poland — ČTK 21 Nov.
- ČTK 22 Nov: "Všechny tři objekty, které vletěly do polského prostoru, byly ruské střely" (headline in the related list on https://www.ceskenoviny.cz/zpravy/poslanci-se-budou-zabyvat-rozpoctem-a-schvalovat-dan-na-rafinerie/2904989, read 2026-11-22T17:54Z).
- Coalition holds 108 of 200 seats; in contested votes since Dec 2025 (coalition majority yes, most of the opposition not) the coalition side prevailed in 0.98 of 397 votes — pipeline/reference-data/cz-chamber.json `coalition_discipline.babis-3.contested_votes.share_adopted` (the mirror case, an opposition proposal the coalition opposes, is not tabulated there).
- Precedent: the opposition failed four times in a row at the previous sitting to add Okamura's recall to the agenda — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-by-meli-schvalovat-zprisneni-podminek-docasne-ochrany-ukrajincu-379335 (published 2026-11-06, read 2026-11-22T17:54Z): "Opozice neprosadila počtvrté v řadě doplnění programu nynější schůze o návrh na odvolání předsedy SPD Tomia Okamury"; the opposition "tento týden neúspěšně každý den navrhovala hlasování o jeho sesazení". ČTK 4 Nov headline "Opozice znovu neprosadila jednání o Okamurově odvolání z čela Sněmovny" (https://www.ceskenoviny.cz/zpravy/opozice-znovu-neprosadila-jednani-o-okamurove-odvolani-z-cela-snemovny/2897027).
- Okamura recall on 24 Nov: no report found that the opposition will propose it again at this sitting (note only).

## Base rate
- Own record, class `cz-chamber-agenda-vote-on-opposition-proposal` (pipeline/reference-classes.json): 2 yes / 1 no (the opposition forcing a vote).
- Opposition agenda-change proposals opposed by the coalition this term: no tabulation in pipeline/reference-data/cz-chamber.json; psp.cz open data unreachable, so no count could be made. Reported cases (Okamura recall, at least four attempts in Oct–Nov) all failed.

## Schedule slip
- slip_class `cz-chamber-other-item`: `node scripts/refdata/slip.mjs` (run 2026-11-22T17:52Z) → prior 0.75, own 0/3, rate 0.682 [data]. That class covers ordinary agenda items; a proposal to amend the agenda at the opening is voted on the opening day as a matter of procedure, so the relevant risk is that STAN does not table it or the vote is not held on Tuesday.

## Risks
- STAN withdraws or does not table the proposal (e.g. if the coalition offers its own text, or a joint text emerges) → NO.
- The coalition adopts it (or a modified version) to defuse the issue: contradicted by Okamura's and Turek's statements → NO.
- The sitting opens later than Tuesday or agenda votes are postponed → NO.
- A procedural device (e.g. Speaker treating it as a proposal for a later day, or a vote on a "draft resolution" outside the agenda) may make reporting ambiguous; criterion counts a vote on STAN's proposal to add/put first the point.

## Sources
- https://www.ceskenoviny.cz/zpravy/stan-chce-ve-snemovne-strely-v-polsku-oznacit-za-provokaci-ze-strany-ruska/2904762
- https://ekonomickydenik.cz/ruske-strely-polsko-okamura-turek/
- https://www.ceskenoviny.cz/zpravy/dan-pro-rafinerie-miri-ke-schvalovani-podle-orlenu-ohrozi-investice/2901415
- https://www.ceskenoviny.cz/zpravy/poslanci-se-budou-zabyvat-rozpoctem-a-schvalovat-dan-na-rafinerie/2904989
- https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-by-meli-schvalovat-zprisneni-podminek-docasne-ochrany-ukrajincu-379335
- https://www.ceskenoviny.cz/zpravy/opozice-znovu-neprosadila-jednani-o-okamurove-odvolani-z-cela-snemovny/2897027 (URL now redirects to a different ČTK story; headline from search results)
- pipeline/reference-data/cz-chamber.json; pipeline/reference-classes.json

## Unreachable
- psp.cz, public.psp.cz (curl 35, connection reset).

## Added by the disagreement research (22 Nov evening)
- **Rule text (§ 54 of zákon 90/1995 Sb.) not obtained verbatim:** zakonyprolidi.cz serves only a cookie wall to scripted reading; psp.cz unreachable (connection reset); a third mirror returned a wrong page (read 2026-11-22T18:13Z). The veto mechanism itself is confirmed by reporting (below).
- **The rules were amended in 2026 (zákon č. 157/2026 Sb., in force 15 Sep 2026); the reported changes concern speaking time, not the veto.** ČTK — https://www.ceskenoviny.cz/zpravy/senat-umoznil-prijeti-upravy-snemovnich-pravidel-k-omezeni-moznych-obstrukci/2863750 (published 2026-08-19T18:15+02:00, read 2026-11-22T18:13Z) "Na začátku řádných sněmovních schůzí nyní mohou poslanci přednášet návrhy změn programu bez omezení. Nově bude mít každý poslanec právo na jedno až pětiminutové vystoupení a řečník s přednostním právem na nejvýše půlhodinové. V dalších dnech budou muset poslanci stačit k představení navrhované změny programu dvě minuty". Law listing — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/157?zalozka=text (read 18:13Z) "Zákon č. 157/2026 Sb. … Vyhlášeno 31. 8. 2026, datum účinnosti 15. 9. 2026". Blesk 3 Jul (https://www.blesk.cz/clanek/zpravy-politika/843088/konec-obstrukci-ve-snemovne-dolni-komora-schvalila-upravu-pravidel.html, read 18:14Z): STAN's proposal that clubs may add an urgent matter ("naléhavou záležitost") was rejected.
- **Practice — the coalition used the clubs' veto against an opposition agenda addition this term, but only on a later day of a running sitting; on Tuesday and Wednesday of the same week it voted the proposals down.** Blesk — https://www.blesk.cz/clanek/zpravy-politika/852072/ostry-spor-o-fungovani-snemovny-je-to-smutny-pohled-hrimal-tejc.html (published 2026-11-05T11:08+01:00, read 2026-11-22T18:14Z) "O zařazení návrhu, který tentokrát přednesl předseda klubu TOP 09 Jan Jakob, poslanci nehlasovali. Koaliční frakce ANO, SPD a Motoristů možné doplnění programu vetovaly. V úterý a ve středu poslanci doplnění programu zamítli hlasováním." That sitting had begun in mid-October (ČT24 6 Nov, above: "Sněmovna ukončila tři týdny trvající schůzi, která začala v půli října"), so 3–5 Nov were not opening days.
- **Earlier the coalition let the vote happen:** ČTK — https://www.ceskenoviny.cz/zpravy/2771433 (published 2026-02-13T13:03+02:00, read 18:14Z) "Opozice ani na sedmý pokus neprosadila projednání návrhu … Pro projednání návrhu bylo aktuálně 57 opozičních z celkového počtu 139 hlasujících poslanců. Koalice také odmítla další opoziční návrhy na úpravy programu."
- **Opening-day agenda approval: opposition proposals are put to the vote and rejected.** ČTK — https://www.ceskenoviny.cz/zpravy/2841419 (published 2026-06-23T14:53+02:00, read 18:14Z) "Sestavování programu schůze Sněmovny dnes vyplnilo asi 8,5 hodiny. Poslanecké jednání blokovala navrhováním změn programu opozice, byť nakonec žádný ze čtyř desítek požadavků neprosadila." Earlier term example: ČTK 27 Feb 2024 (https://www.ceskenoviny.cz/zpravy/2484280, read 18:15Z) "Jednání o podobě programu … zabralo … i s hlasováním skoro tři hodiny. Opoziční zástupci navrhli celkem 25 úprav … žádnou z nich neprosadili." No report found of a veto used at the opening agenda approval of a regular sitting this term.
- **24 Nov sitting preview:** ČTK 22 Nov (https://www.ceskenoviny.cz/zpravy/poslanci-se-budou-zabyvat-rozpoctem-a-schvalovat-dan-na-rafinerie/2904989, read 18:14Z) — body not readable by script (headline and tags only); no change to STAN's announced plan found.
- WebSearch used for this claim: 5 (§ 54 text; 2026 amendment; "vetovala" practice; "nejméně dva poslanecké kluby nebo 20 poslanců"; "nehlasovali" at agenda approval).
