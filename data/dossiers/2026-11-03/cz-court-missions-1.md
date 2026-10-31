# cz-court-missions-1
- **Claim:** By 23:59 Prague time on 2 November 2026, the Constitutional Court publishes a decision on the request to suspend the law that moves powers over heads of permanent missions from the President to the Foreign Minister.
- **Criterion:** YES if between 00:00 on 1 Nov and 23:59 Prague time on 2 Nov 2026 the Czech Constitutional Court publishes (on usoud.cz or via its spokesperson) a decision on the request for an interim measure or suspension concerning the law transferring powers over heads of permanent missions from the President to the Foreign Minister, whichever way it decides. NO otherwise.
- **Event window:** 2026-11-01T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-10-31T18:25:00Z. Read times below are approximate, all between 17:40Z and 18:05Z on 31 Oct.

## Schedule
- There is no scheduled date. The Court's week-45 schedule (2–6 Nov), published 29 Oct, lists only one item: public announcement of a judgment in II. ÚS 2784/26 (right to judicial protection) on 3 Nov 10:30; no plenary (Pl. ÚS) item and nothing on the foreign-service law — https://www.usoud.cz/aktualne/prehled-jednani-ustavniho-soudu-pro-45-kalendarni-tyden-roku-2026 (published 2026-10-29, read 2026-10-31T18:00Z). Decisions on interim measures are not normally announced in advance (the June 2026 interim measure in Pl. ÚS 16/26 was published as a decision PDF; see below).

## Facts
- **Filing:** a group of opposition MPs (more than 50) and 38 senators filed a petition with the Constitutional Court on Friday (23 Oct by date arithmetic from the 26 Oct report) against the amendment removing the President's power to appoint and recall heads of permanent missions to international organisations and giving it to the Foreign Minister; the petition is registered. Speakers: Karel Dvořák (STAN), Ondřej Lochman (STAN), Kateřina Stojanová (Pirates) — ČTK via Seznam Zprávy https://www.seznamzpravy.cz/clanek/318853 (published 2026-10-26 17:08, read 2026-10-31T17:42Z); ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024 (published 2026-10-26, read 2026-10-31T17:58Z) "Soud žádají také o předběžné opatření."
- **Interim-measure request exists:** the petitioners asked for an interim measure (předběžné opatření) because of the risk of delay; the changes "could apply from 1 November 2026" — Seznam Zprávy/ČTK and ČT24 (above); Právní prostor/ČTK https://www.pravniprostor.cz/aktuality/poslanci-opozice-a-senatori-napadli-u-us-zmenu-pravomoci-k-vedoucim-stalych-misi (published 2026-10-27 10:10, read 2026-10-31T17:50Z). No case number (sp. zn.) or judge rapporteur was reported.
- **No decision found as of 31 Oct:** usoud.cz "Aktuálně" lists nine items dated 20–29 Oct, none on this case — https://www.usoud.cz/aktualne (read 2026-10-31T17:45Z). ČT24's Constitutional Court topic page has no later item after 26 Oct on this case — https://ct24.ceskatelevize.cz/tema/ustavni-soud-558 (read 2026-10-31T17:58Z). Two web searches (31 Oct) found no report of a ruling.
- **Legislative history:** the Senate rejected the amendment and the Chamber passed it again — Právní prostor headlines https://pravniprostor.cz/aktuality/zruseni-pravomoci-prezidenta-urcovat-vedouci-diplomatickych-misi-senat-odmitl and https://pravniprostor.cz/aktuality/snemovna-opet-schvalila-omezeni-pravomoci-prezidenta-k-vedoucim-stalych-misi (search results, not opened). The President's side calls the change "zjevně protiústavní" — Seznam Zprávy (above).
- **Related precedent:** on 24 Jun 2026, in a separate competence dispute brought by the President (Pl. ÚS 16/26, NATO summit participation), the plenary granted an interim measure (judges Wintr and Řepková dissenting) — https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf (dated 2026-06-24, read 2026-10-31T17:55Z). That was a competence dispute, not abstract review of a statute.
- **Legal uncertainty (not verified tonight):** whether the Constitutional Court Act allows suspending a statute by interim measure in abstract review proceedings is unclear; the Court could also dismiss the request in its final decision or not rule on it separately at all. No source was found on this point.
- **Timing window:** 1 Nov is a Sunday; the claim window effectively contains one working day (Mon 2 Nov). The request has been pending since 23 Oct (about 6 working days to 30 Oct) without a published decision, although the law's applicability date (1 Nov) has now passed.

## Base rate
- No close class. Loose: `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json), base_rate null, own record only. Own loose count: none available for Czech Constitutional Court interim-measure decision timing.

## Schedule slip
- Claim slip_class: `none` (`node scripts/refdata/slip.mjs none` → "unknown class none", run 2026-10-31T18:06Z). For reference, `cz-court-ruling` (ruling announced for a given day): 0.200 [estimate], prior 0.20, own 0/0 — not applicable, since no date was announced.

## Risks
- If the Court decided on 30–31 Oct and publishes before 1 Nov 00:00, the claim resolves NO (decision outside window); no such publication seen up to 31 Oct ~18:00Z.
- The Court may decide on the request without publishing it on usoud.cz (only notifying parties), or petitioners/media may report it first; the criterion requires the Court or its spokesperson.
- The Court may treat the request together with the merits, months later.

## Sources
- https://www.usoud.cz/aktualne/prehled-jednani-ustavniho-soudu-pro-45-kalendarni-tyden-roku-2026
- https://www.usoud.cz/aktualne
- https://www.seznamzpravy.cz/clanek/318853
- https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024 (via topic page)
- https://ct24.ceskatelevize.cz/tema/ustavni-soud-558
- https://www.pravniprostor.cz/aktuality/poslanci-opozice-a-senatori-napadli-u-us-zmenu-pravomoci-k-vedoucim-stalych-misi
- https://www.blesk.cz/clanek/851319
- https://www.usoud.cz/fileadmin/user_upload/Tiskova_mluvci/Publikovane_nalezy/2026/PL-16-26-p%C5%99edb%C4%9B%C5%BEn%C3%A9_opat%C5%99en%C3%AD.pdf
- Search results only: pravniprostor.cz (Senate rejection; Chamber re-approval), eurozpravy.cz, ceskenoviny.cz/2863165
