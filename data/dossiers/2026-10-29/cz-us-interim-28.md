# cz-us-interim-28
- **Claim:** By 23:59 Prague time on 28 October 2026, the Czech Constitutional Court publicly announces its decision on the opposition's request for an interim measure (předběžné opatření) against the law removing the president's power to appoint and recall heads of permanent missions.
- **Criterion:** YES if, between 06:00 CET on 27 Oct 2026 and 23:59:59 CET on 28 Oct 2026, the Constitutional Court decides the request for an interim measure in the proceedings brought by opposition senators and MPs on 23 Oct against the removal of the president's power over heads of permanent missions to international organisations, and the decision is made public in the window. Public means a press release or a decision posted on usoud.cz, a statement by the Court's spokesperson, or a report by ČTK, ČT24 or another major Czech outlet citing the Court. Granting the request, rejecting it, declaring it inadmissible, and a decision on the petition as a whole that disposes of the request all count. A decision taken in the window but first made public after 23:59 on 28 Oct does not count. These do not count: news that a judge-rapporteur has been assigned, that the Court is dealing with the request, or that it will decide later. NO if no decision is made public in the window, including if the Court does not decide the request separately before 1 Nov.
- **Deadline (event window end):** 2026-10-28T23:59:59+01:00
- **Written at:** 2026-10-26T19:30:00+01:00

## Schedule
- No date for a decision has been announced. ČT24 (26 Oct) reports no statement from the Court on timing and does not name a judge-rapporteur — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024 (published 2026-10-26, updated 16:16; read 2026-10-26T18:12Z)
- The petitioners argue "nebezpečí z prodlení" because the change could apply from 1 November (Karel Dvořák, STAN) — same source. 28 Oct is a state holiday. 1 Nov is a Sunday.

## Facts
- Filing: a group of opposition deputies and senators (38 senators and more than 50 MPs) filed on Fri 23 Oct to annul the repeal of the president's power to appoint and recall heads of permanent missions to international organisations. The petition is registered and asks the Court to consider an interim measure — ČT24 379024 (above) "nebezpečí z prodlení"
- Legislative history: the change is part of the package attached to the civil service law (zákon o státních úřednících). On 8 Sep 2026 the Chamber overrode the Senate's rejection (104 of 173), and the bill went to the president — Právní prostor https://pravniprostor.cz/aktuality/snemovna-opet-schvalila-omezeni-pravomoci-prezidenta-k-vedoucim-stalych-misi (published 2026-09-09 10:32, read 2026-10-26T18:19Z). Per the sweep, the coalition later also overrode the president's veto in October (czech.json; not independently re-read). The same article ties 1 November to another provision of the package (municipal officials). For the missions provision, only the petitioners' claim (ČT24) supports 1 Nov.
- Court practice: on 24 Jun 2026 the plenary granted an interim measure two days after filing in Pl. ÚS 16/26, a competence dispute brought by the president over NATO summit participation. Its legal basis was § 63 of the Constitutional Court Act with § 102, § 75c(1) and § 76(1)(e) of the Civil Procedure Code applied by analogy. Rapporteur Šámal; judges Wintr and Řepková dissented — usoud.cz https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf (read 2026-10-26T18:13Z) "Tímto rozhodnutím Ústavní soud nepředjímá konečné rozhodnutí ve věci."
- Abstract review (řízení o zrušení zákona) differs from that case. I found no source tonight showing the Court has granted or formally decided an interim measure in abstract review of a statute. Whether the Act allows one there, through § 63 and the Civil Procedure Code by analogy, was not verified in a primary source. One search for such precedent returned nothing relevant. Gap.
- President Pavel calls the change plainly unconstitutional (sweep czech.json, no URL re-read).

## Base rate
- `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null, own record 1/10.
- Own count of Constitutional Court interim-measure requests in high-profile plenary cases found tonight: n=1 (Pl. ÚS 16/26, decided within 2 days, a competence dispute). There is no count for abstract review. Too small for a rate.

## Schedule slip
- Slip class: none, because there is no scheduled decision. For reference, `cz-court-ruling` is 0.200 [estimate] (slip.mjs, run 2026-10-26).
- Timing signs: the stated urgency (1 Nov) argues for a decision before then. The window covers only Tue 27 Oct as a working day; 28 Oct is a holiday. The Court could also decide on Thu 29 or Fri 30 Oct, outside the window, or decide nothing separately.

## Risks
- YES path: the plenary or rapporteur acts quickly, as in Pl. ÚS 16/26, and publishes on 27 Oct.
- NO path: the decision comes on 29–30 Oct. Or the Court treats an interim measure in abstract review as unavailable and simply does not decide it separately. Or it waits for the parties' statements (Chamber, Senate, government).
- Resolution risk: the Court may decide in the window but publish later. Under the criterion only public announcement in the window counts. A press report may also be ambiguous about a "rejection" (of the request or of the petition); both count if the interim request is disposed of.

## Sources
- https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024
- https://ct24.ceskatelevize.cz/tema/ustavni-soud-558
- https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf
- https://pravniprostor.cz/aktuality/snemovna-opet-schvalila-omezeni-pravomoci-prezidenta-k-vedoucim-stalych-misi
- https://pravniprostor.cz/aktuality/senatori-pripravi-stiznost-k-ustavnimu-soudu-na-sluzebni-zakon (search result only)
- https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2019/Pl._US_10_19_usneseni.pdf (opened; not relevant: lis pendens rejection, no interim measure)
- https://www.ilaw.cas.cz/upload/web/files/pravnik/issues/2023/2/1_Eberhard_89-102_2_2023.pdf (opened; about the Austrian court, not relevant)
