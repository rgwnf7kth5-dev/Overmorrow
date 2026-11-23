# cz-senate-26
- **Claim:** On Wednesday 25 November 2026 the Senate lets the bill raising state payments into public health insurance for state-insured persons (+CZK 13bn for 2027) pass unchanged.
- **Criterion:** YES if, between 00:00 and 23:59 on Wed 25 Nov 2026 (Europe/Prague), the Senate adopts a resolution approving (schvaluje) the Chamber-passed bill raising the state's payments into public health insurance for state-insured persons, in the wording passed by the Chamber on 4 Nov 2026, or a resolution not to deal with it (nezabývat se), as shown by senat.cz or reported by ČTK, ČT24 or another major Czech outlet. NO if on 25 Nov the Senate returns the bill to the Chamber with amendments or rejects it, or if it takes no decision on the bill that day (not on the agenda, not reached, adjourned). A report published after midnight about a decision taken on 25 Nov counts.
- **Event window:** 2026-11-25T00:00+01:00 – 2026-11-25T23:59+01:00 (Europe/Prague); 2nd session of the Senate's 16th term, reportedly from 10:00.
- **Evidence expected:** ČTK/ČT24 the same day; senat.cz voting record. evidence_at 2026-11-25T20:00+01:00.
- **Resolves by:** 2026-11-27T05:00:00+01:00
- **Written at:** 2026-11-23T18:00Z

## Schedule
- **AGENDA NOT CONFIRMED.** senat.cz refuses every request ("Request Rejected", e.g. https://www.senat.cz/zpravodajstvi/zprava.php?id=4137, read 2026-11-23T17:52Z).
- The 2nd session on 25 Nov is in the desk agenda as official: "senat.cz lists the 1st session on 19 Nov and the 2nd on 25 Nov; its agenda is not yet published" (data/planning/agenda.json, added 2026-11-11). Time 10:00 and agenda items (consumer-protection and e-evidence bills, fiscal-structural plan 2027–2030, Czech Radio annual report) come only from vendor leads citing senat.cz pages we could not read (scout note cz.json).
- Three WebSearch queries for the 25 Nov agenda returned no 2026 report naming items for the session.
- Why this bill is the likeliest candidate: it was passed by the Chamber on 4 Nov; the Senate has 30 days from delivery (Constitution Art. 46), so its deadline falls in early-to-mid December; the minister needs it in force on 1 Jan 2027. Its presence on the 25 Nov agenda is an inference, not a fact.

## Facts
- Chamber, 4 Nov 2026: "Poslanci ve středu odpoledne schválili zvýšení státních plateb do zdravotnictví za důchodce, děti, studenty či nezaměstnané o 13 miliard korun v příštím roce."; "i když vláda původně navrhovala 21 miliard. Dolní komora částku koaličním pozměňovacím návrhem snížila."; "Pro novelu hlasovala vedle koaličních zákonodárců i část poslanců opozičních ze STAN a KDU-ČSL." — https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-maji-schvalovat-zvyseni-plateb-do-zdravotnictvi-za-statni-pojistence-379262 (published 2026-11-04T09:37+01:00, modified 19:44; read 2026-11-23T17:52Z).
- Opposition criticism (same article): Válek (TOP 09) fears a repeat next year; Němečková Crkvenjaš (ODS) calls it pouring money into a system that "spolkne" it; Pláteník (KDU-ČSL): "Přelévat peníze do děravé misky nemá cenu."
- Minister Vojtěch (ANO): "Pevně věřím, že schválí ten návrh tak, jak odejde ze sněmovny, a nebude ho vracet zpět… potřebujeme, aby byl zákon účinný od 1. ledna příštího roku" (same article). Systém revenue 2027 +50.2bn to 605bn; deficit this year expected 15bn (same).
- Senate composition: ODS and TOP 09 the largest club; ANO club 14 members, third largest — ČT24 19 Nov https://ct24.ceskatelevize.cz/clanek/domaci/senatori-na-ustavujici-schuzi-zvoli-nove-vedeni-horni-komory-379749 (published 2026-11-19T10:00, read 2026-11-23T17:52Z); "Nejpočetnější zastoupení má dál ODS s TOP 09" — ČT24 20 Oct https://ct24.ceskatelevize.cz/clanek/domaci/senat-cekaji-personalni-sachy-a-uvahy-o-novem-vyboru-378831 (topic-page summary, read 2026-11-23T17:52Z). SEN 21 + independents club: 5 members (ČT24 21 Oct, topic-page summary). Vystrčil (ODS) re-elected Speaker 69/77 on 19 Nov.
- Recent Senate treatment of coalition bills: 21 Oct — vignette-price bill neither approved nor rejected (passes by lapse), aliens act approved — https://ct24.ceskatelevize.cz/clanek/domaci/senat-se-bude-zabyvat-cenami-dalnicnich-znamek-378852 (published 2026-10-21, read 2026-11-23T17:52Z); June 2026 — Senate amended the budget-rules bill and the Chamber overrode it on 7–8 Jul — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/snemovna-pokracuje-v-jednani-o-navratu-eet-375311 (topic-page summary, read 2026-11-23T17:51Z). Search snippet (not read): "Senát asi zamítne stavební novelu i změny v zaměstnávání úředníků státu" — advokatnidenik.cz 18 Aug 2026.
- Not found: the Senate print number, committee (health / budget) recommendation, and whether the bill is on the 25 Nov agenda.

## Base rate
- No computed Czech Senate outcome rate in pipeline/reference-data. Own record: none for this class. Senate session date slip class `cz-senate-item`.
- Qualitative: a minority-held bill that STAN and KDU-ČSL MPs partly backed in the Chamber, with a 1 Jan deadline; the Senate returning it would require another Chamber vote before year-end.

## Schedule slip
- `node scripts/refdata/slip.mjs cz-senate-item` (run 2026-11-23T17:52Z): prior 0.06, own 0/3, rate 0.040 [estimate]. This covers the session date; the agenda risk (the bill not being on the 25 Nov programme at all) is separate and unquantified.

## Risks
- Bill not on the 25 Nov agenda (unconfirmed) → NO.
- Senate amends the sum (e.g. back towards the government's 21bn or adds systemic conditions) → returned to Chamber → NO.
- Session runs long; bill reached the next day if the session continues on 26 Nov.

## Sources
- https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-maji-schvalovat-zvyseni-plateb-do-zdravotnictvi-za-statni-pojistence-379262
- https://ct24.ceskatelevize.cz/clanek/domaci/senatori-na-ustavujici-schuzi-zvoli-nove-vedeni-horni-komory-379749
- https://ct24.ceskatelevize.cz/tema/senat-431
- https://ct24.ceskatelevize.cz/clanek/domaci/senat-se-bude-zabyvat-cenami-dalnicnich-znamek-378852
- https://ct24.ceskatelevize.cz/tema/verejne-finance-459
- data/planning/agenda.json (Senate 2nd session entry)
- WebSearch: "Senát schůze 25. listopadu 2026 senátoři projednají zákon"; "Senát středa platby za státní pojištěnce digitální ekonomika senátní výbor doporučil listopad 2026"; "senátoři 25. listopadu schůze Senátu program pojištěnci 13 miliard ochrana spotřebitele elektronické důkazy".

## Unreachable
- senat.cz (Request Rejected); english.radio.cz (403, per scout).
