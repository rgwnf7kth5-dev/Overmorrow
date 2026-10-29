# cz-us-missions-31
- **Claim:** By 23:59 Prague time on Saturday 31 October 2026, the Czech Constitutional Court makes public a decision on the opposition's request for an interim measure against the amendment that moves the power to appoint and recall heads of permanent missions from the President to the foreign minister.
- **Criterion:** YES if, between 00:00 on 30 Oct 2026 and 23:59:59 CET on 31 Oct 2026, the Constitutional Court (Ústavní soud) makes public a decision on the request for an interim measure (předběžné opatření), or for suspending or not applying the contested provisions, in the proceedings started on Fri 23 Oct 2026 by a group of opposition deputies and senators against the amendment that ends the President's power to appoint and recall heads of permanent missions to international organisations. The decision may grant or reject the request. It may also be a merits ruling on the petition. Evidence is a decision or press release on usoud.cz, a statement by the Court or its spokesperson saying that the Court has decided on the request, or a report by ČTK, ČT24, iROZHLAS, Seznam Zprávy, Novinky, Aktuálně.cz or Deník N. A statement that the Court will decide later, that the petition is still being assessed, or that the request will not be dealt with separately does not count. NO if no such decision is made public in the window.
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-31T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-29T18:30:00Z

## Schedule
- Nothing is scheduled. The trigger is the date the change takes effect. Petitioners and press say the change can apply "od 1. listopadu tohoto roku". Seznam Zprávy/ČTK https://www.seznamzpravy.cz/clanek/318853 (published 2026-10-26 17:08, read 2026-10-29T18:08Z): "Opozice napadla u Ústavního soudu změnu pravomocí k vedoucím stálých misí". The petition was filed on Friday (23 Oct) and is already registered. Petitioners asked for a předběžné opatření because "je zde nebezpečí z prodlení" (Karel Dvořák, STAN).
- The ÚS news page (https://www.usoud.cz/aktualne, read 2026-10-29T18:04Z) has no item on the petition. The latest items are dated 27 Oct (an unrelated ruling) and 23 Oct (the week-44 hearing list). The week-44 hearing list (https://www.usoud.cz/aktualne/prehled-jednani-ustavniho-soudu-pro-44-kalendarni-tyden-roku-2026, read 2026-10-29T18:09Z) shows only a III. senát ruling on 26 Oct, so no public plenary session on this case. The file number and the judge-rapporteur were not found.
- 30 Oct is a Friday and 31 Oct a Saturday. Court decisions are normally issued and published on working days, so Saturday is unlikely.

## Facts
- The petition is backed by 38 senators and more than 50 deputies; speakers Karel Dvořák (STAN) and Kateřina Stojanová (Pirates). The petitioners asked the Court "zvážit, zda není na místě předběžné opatření". The change is part of "osmi desítek novel souvisejících se zákonem o státních zaměstnancích" — Právní prostor/ČTK https://www.pravniprostor.cz/aktuality/poslanci-opozice-a-senatori-napadli-u-us-zmenu-pravomoci-k-vedoucim-stalych-misi (published 2026-10-27 10:10, ČTK of 26 Oct; read 2026-10-29T18:08Z).
- Route of the bill: the coalition (ANO, SPD, Motoristé) passed the restriction over a Senate veto and over President Pavel's veto. Pavel calls it "zjevně protiústavní". Critics call it "koaliční pomstu Pavlovi" — Seznam Zprávy 318853 (above).
- Senate, 19 Aug 2026: the related law was rejected by 54 of 70 senators present. Vystrčil: "Ten zákon obsahuje vadu, která je protiústavní". Senators led by Canov announced a ÚS petition. Their argument: the Constitution cannot be changed by an ordinary law — ČTK https://www.ceskenoviny.cz/zpravy/2863165 (published 2026-08-19 17:45, read 2026-10-29T18:08Z).
- Precedent for speed: in the President's competence dispute over the NATO summit (Pl. ÚS 16/26), the President filed on 22 Jun 2026. The plenum granted an interim measure on 24 Jun 2026, two days later, with judges Wintr and Řepková dissenting. Their dissent: the conditions for an interim measure were not met, and the Court should be restrained in a competence dispute — https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf (dated 2026-06-24, read 2026-10-29T18:08Z). That was a competence dispute (čl. 87(1)(k) Ústavy), not abstract review of a statute (čl. 87(1)(a)). It does not show that the Court will issue a measure against a statute.
- Inference, not verified in a source read tonight: the Constitutional Court Act does not expressly provide for suspending a statute in abstract review. The Court may therefore handle the request inside the merits proceedings, or reject it as inadmissible. Either outcome counts if it is decided and made public in the window. Silence does not count.
- Six days (23 Oct → 29 Oct) have passed without a published decision. If the Court meant to act before 1 Nov, the last working day is Fri 30 Oct.

## Base rate
- `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null, own record 1 YES / 17 NO. This is a loose fit. The window is two days, of which one is a working day, and a hard deadline (1 Nov effect) pushes towards action.

## Schedule slip
- Slip class: `none`. No decision is announced. The nearest class, `cz-court-ruling`, is at 0.200 [estimate] (`node scripts/refdata/slip.mjs cz-court-ruling`, run 2026-10-29T18:05Z). It applies to an announced ruling, so it does not fit here.

## Risks
- The Court decides on 29 Oct (tonight) or publishes on 29 Oct: the event falls before the window. The desk should check usoud.cz and ČTK in the morning.
- The Court decides on 30 Oct but publishes on usoud.cz only on Mon 2 Nov, with no press report or spokesperson statement in the window. Then the criterion gives NO, because "made public" is required. The petitioners (STAN/Pirates) would be expected to publicise any rejection quickly.
- The Court treats the request as part of the merits and says nothing. Then NO.
- Wording: "the Court will not issue an interim measure" from the spokesperson may be ambiguous between a decision and a non-decision. The criterion needs a statement that the Court has decided (granted or rejected).

## Sources
- https://www.seznamzpravy.cz/clanek/318853
- https://www.pravniprostor.cz/aktuality/poslanci-opozice-a-senatori-napadli-u-us-zmenu-pravomoci-k-vedoucim-stalych-misi
- https://www.ceskenoviny.cz/zpravy/2863165
- https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf
- https://www.usoud.cz/aktualne
- https://www.usoud.cz/aktualne/prehled-jednani-ustavniho-soudu-pro-44-kalendarni-tyden-roku-2026
- https://www.ceskenoviny.cz/sluzby/rss/zpravy.php (RSS, read 2026-10-29T17:58Z and 18:08Z; no item on the petition)
