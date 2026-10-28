# cz-us-interim-30
- **Claim:** By 23:59 Prague time on Friday 30 October 2026, the Czech Constitutional Court makes public a decision on the opposition's request for an interim measure against the law removing the president's power over heads of permanent missions (granting, rejecting or dismissing it).
- **Criterion:** YES if, between 00:00 CET on 29 Oct 2026 and 23:59:59 CET on 30 Oct 2026, the Constitutional Court decides the request for an interim measure (předběžné opatření) in the proceedings brought on 23 Oct 2026 by opposition senators and deputies against the removal of the president's power to appoint and recall heads of permanent missions to international organisations, and that decision is made public in the window. Public means a decision or press release on usoud.cz, a statement by the Court's spokesperson, or a report by ČTK, ČT24 or another major Czech outlet citing the Court. Granting the request, rejecting it, dismissing it as inadmissible, and a decision on the petition as a whole that disposes of the request all count. These do not count: assignment of a judge-rapporteur, a statement that the Court is dealing with the request or will decide later, or a statement that it will not decide the request separately. NO if no decision is made public in the window.
- **Event window:** 2026-10-29T00:00:00+01:00 to 2026-10-30T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-28T18:30:00Z

## Schedule
- No date is announced. The Court's news page lists nothing on the petition up to its latest item (27 Oct, a copyright ruling). The week-44 hearings overview (published 23 Oct) is the latest schedule — https://www.usoud.cz/aktualne (read 2026-10-28T18:08Z) "23. října 2026 Přehled jednání Ústavního soudu pro 44. kalendářní týden roku 2026". Per the sweep (agenda_cz), week 44 has no plenary item and nothing on 29–30 Oct.
- The petition is not yet on the Court's list of pending plenary cases. The latest entry is Pl. ÚS 17/26, filed 23 Jul 2026 — https://www.usoud.cz/projednavane-plenarni-veci (read 2026-10-28T18:08Z). Case number and rapporteur are therefore unknown.
- The contested provision is due to apply from 1 Nov (Sunday), according to the petitioners. 30 Oct is the last working day before then.

## Facts
- Filing: on Fri 23 Oct, 38 senators and more than 50 deputies petitioned the Court to annul the removal of the president's power to appoint and recall heads of permanent missions to international organisations. They also asked for an interim measure because the change takes effect in November. The petition is registered — ČT24 topic page https://ct24.ceskatelevize.cz/tema/ustavni-soud-558 (read 2026-10-28T18:06Z), summarising ČT24 379024 of 26 Oct "Opozice se kvůli omezení pravomoci prezidenta obrací na Ústavní soud". The article itself could not be re-read today (fetch not approved). The earlier dossier read it on 2026-10-26: the petitioners cite "nebezpečí z prodlení" (Karel Dvořák, STAN), and the Court gave no timing statement.
- Legislative history: the change is part of the accompanying package to the civil-servants law. The Chamber overrode the Senate's rejection on 8 Sep (104 of 173) — Právní prostor https://pravniprostor.cz/aktuality/snemovna-opet-schvalila-omezeni-pravomoci-prezidenta-k-vedoucim-stalych-misi (published 2026-09-09, read 2026-10-26 by the earlier dossier, carried over). It also overrode the president's veto in October — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/senatori-pripravi-stiznost-na-sluzebni-zakon-k-ustavnimu-soudu-rekl-vystrcil-378754 (18 Oct; via ČT24 topic page summary).
- Court practice, competence dispute: on 24 Jun 2026 the plenary granted an interim measure in Pl. ÚS 16/26, two days after President Pavel filed (22 Jun) a competence dispute under Art. 87(1)(k) of the Constitution over the NATO summit delegation. Its legal basis was § 63 of the Constitutional Court Act with the Civil Procedure Code applied by analogy (§ 102, § 76(1)(e); § 75c(1) by analogy). Rapporteur Šámal; judges Wintr and Řepková dissented. The dissent notes the Act expressly provides such measures only in other proceeding types (§ 80, § 114), but accepts that analogy is "not excluded" — https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf (decided 2026-06-24, read 2026-10-28T18:04Z) "nepředjímá konečné rozhodnutí ve věci"
- The dissenters in that case (Wintr, Řepková) argued the Court should show restraint because the order intervened in ongoing political affairs. Chief Justice Baxa said the measure did not prejudge the final ruling — CNN Prima News https://cnn.iprima.cz/zasah-do-politiky-nesouhlasili-s-kolegy-dva-ustavni-soudci-co-jim-vadi-na-narizeni-vlade-515604 (published 2026-06-25 14:01, read 2026-10-28T18:04Z)
- Abstract review: the current case is a petition to annul a statute (§ 64 of the Constitutional Court Act), not a competence dispute. No source read today or on 26 Oct shows the Court ever granting, or formally deciding, an interim measure that suspends a statute in abstract review. The Act contains no express provision for it (see the Pl. ÚS 16/26 dissent on § 80 and § 114). One targeted search on 28 Oct for such practice found nothing relevant. Gap: no statement by the Court's spokesperson on this request was found.
- President Pavel calls the change plainly unconstitutional (sweep agenda_cz; not re-read).

## Base rate
- `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null, own record 1 YES / 11 NO. The window here is two working days.
- Related own claim: cz-us-interim-28 (window 27–28 Oct, same question). As of 2026-10-28T18:08Z, usoud.cz shows no decision, so that claim is heading to NO.
- High-profile plenary interim-measure requests found: n=1 (Pl. ÚS 16/26, a competence dispute, decided in 2 days). No abstract-review cases found. Too small for a rate.

## Schedule slip
- Slip class: none, because no decision is scheduled. For reference, `cz-court-ruling` is 0.200 [estimate] (`node scripts/refdata/slip.mjs cz-court-ruling`, run 2026-10-28T18:13Z).

## Risks
- YES paths: the plenary meets (plenary sessions are not always pre-announced) and decides before the 1 Nov effective date, either granting by analogy as in Pl. ÚS 16/26 or expressly rejecting the request as unavailable or unfounded. A short usnesení published on 30 Oct is plausible if the Court wants to clear the question before 1 Nov.
- NO paths: the Court treats an interim measure in abstract review as unavailable and simply proceeds without a separate decision. It waits for statements from the Chamber, Senate and government. Or the case number and rapporteur are only now being assigned.
- Resolution: a decision may be dated in the window but published after it; only publication in the window counts. A press report of "rejection" must be read carefully: a rejected interim request counts, and so does a rejection of the petition as a whole.

## Sources
- https://www.usoud.cz/aktualne (via curl)
- https://www.usoud.cz/projednavane-plenarni-veci (via curl)
- https://ct24.ceskatelevize.cz/tema/ustavni-soud-558
- https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024 (fetch not approved today; read 2026-10-26 by data/dossiers/2026-10-29/cz-us-interim-28.md)
- https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf
- https://cnn.iprima.cz/zasah-do-politiky-nesouhlasili-s-kolegy-dva-ustavni-soudci-co-jim-vadi-na-narizeni-vlade-515604
- https://www.epravo.cz/top/soudni-rozhodnuti/predbezne-opatreni-121574.html (opened; III. ÚS 738/26, civil interim measure, not relevant)
- https://pravniprostor.cz/aktuality/snemovna-opet-schvalila-omezeni-pravomoci-prezidenta-k-vedoucim-stalych-misi (carried over)
- data/dossiers/2026-10-29/cz-us-interim-28.md
