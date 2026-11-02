# es-aid-1
- **Claim:** By 23:59 Madrid time on 4 November 2026, Spain's Council of Ministers approves an aid package for the victims of the Urda (Toledo) train crash.
- **Criterion:** YES if between 00:00 Madrid time on 3 Nov and 23:59 Madrid time on 4 Nov 2026 the Council of Ministers approves a royal decree-law, royal decree or agreement that sets aid or compensation for the victims of the train crash of 28 October 2026 at Urda (Toledo), as shown by the La Moncloa cabinet references, the Official State Gazette (BOE) or a report by EFE, El País or a wire agency. An announcement or a preliminary report without approval does not count. NO if no such approval is given in that window.
- **Deadline:** 23:59 Madrid time on 4 Nov 2026.
- **Written at:** 2026-11-02T18:30Z. Read times 18:20–18:25Z on 2 Nov.
- **Not rewritten:** the cabinet date could not be confirmed, so the date is the open part. If the desk confirms a meeting on Tue 3 Nov with this item on it, the claim is close to settled and should move to the amount, e.g. whether the per-death total exceeds the €216,000 of the Adamuz decree.

## Schedule
- No primary source for the date was read. work/running.json (from ČT24 https://ct24.ceskatelevize.cz/clanek/svet/sanchez-slibil-obnovit-duveru-ve-vysokorychlostni-zeleznici-379238 and https://ct24.ceskatelevize.cz/textovy-prenos/prave-se-deje-380, not re-read): "The Spanish cabinet is to present a victims' package at its next meeting, date not given; a usual Tuesday sitting would mean 3 Nov."
- Two Spanish searches found no report naming the date. work/agenda-europe.json has no such item.

## Facts
- Crash and toll: 28 Oct near Urda, 69 dead, 34 in hospital on 2 Nov, 66 identified (work/running.json).
- Plan: it "would double compensation from mandatory passenger insurance, with advance payments" (work/running.json, from ČT24). Not checked against a Spanish source.
- Sánchez, 29 Oct: bodies, causes, then compensating the families — Diari de Tarragona https://www.diaridetarragona.com/espana/274334/sanchez-toledo-dia-noche-esclarecer-causas-reforzar-seguridad_amp.html (published 2026-10-29 12:08, read 2026-11-02T18:20Z) "aunque sea desde un punto de vista material"
- Precedent: Adamuz crash 18 Jan 2026 (45 dead at that date) and Gelida. On Tuesday 27 Jan, nine days later, the cabinet approved a decree-law with €20m: €216,000 per death (€72,000 direct aid, €72,000 advance on insurance, €72,000 mandatory insurance), and €7,200–252,000 for the injured — El Debate https://www.eldebate.com/economia/20260127/gobierno-aprueba20-millones-euros-ayudas-victimas-adamuz-gelida_378700.html (published 2026-01-27 13:08, read 2026-11-02T18:21Z) "no vamos a consentir que haya víctima que estén 10 años esperando a recibir una indemnización"
- Congress approved that decree-law on 26 Feb — Vivir Ediciones (EFE) https://vivirediciones.es/vivir-ultima-hora/el-congreso-aprueba-el-decreto-de-ayudas-a-las-victimas-de-adamuz-y-gelida/ (published 2026-02-26 16:58, read 2026-11-02T18:24Z) "otorgar rápidamente las ayudas". It covers those two accidents; whether it reaches future ones was not established.
- Urda to Tue 3 Nov is six days, against nine for Adamuz (our count).
- Political context: pressure on Transport Minister Puente, a Vox complaint in the Supreme Court (Vozpópuli, search result only; data/dossiers/2026-11-03/es-puente-out-2.md).

## Base rate
- No class. One precedent (Adamuz: first or second Tuesday after the crash, nine days).

## Schedule slip
- `other-scheduled`: rate 0.127 [estimate], prior 0.07, own 2/13 (`node scripts/refdata/slip.mjs other-scheduled`, 2026-11-02T18:14Z).
- Signs: date unconfirmed; "present" may mean a report, with approval later; identification not complete; the cause not established. In the Adamuz case six-day turnaround was not tested.

## Risks
- The cabinet may take a first reading, an announcement or an agreement of a general kind. Only an approval setting aid for these victims counts.
- A package that extends the Adamuz regime by general rule still counts if it names or clearly covers Urda.
- The cabinet may meet on another day or in a shortened form because of the holiday weekend. An extraordinary meeting on 4 Nov would count.
- A BOE publication after 4 Nov does not matter; the approval date does.

## Sources
- https://www.diaridetarragona.com/espana/274334/sanchez-toledo-dia-noche-esclarecer-causas-reforzar-seguridad_amp.html
- https://www.eldebate.com/economia/20260127/gobierno-aprueba20-millones-euros-ayudas-victimas-adamuz-gelida_378700.html
- https://vivirediciones.es/vivir-ultima-hora/el-congreso-aprueba-el-decreto-de-ayudas-a-las-victimas-de-adamuz-y-gelida/
- https://www.vozpopuli.com/espana/accidente-de-tren-en-toledo-en-directo-ultima-hora-del-numero-de-fallecidos-heridos-y-avance-de-la-investigacion.html (nothing on aid)
- https://ct24.ceskatelevize.cz/clanek/svet/sanchez-slibil-obnovit-duveru-ve-vysokorychlostni-zeleznici-379238 (via work/running.json)
- work/running.json
- Not readable: https://laadministracionaldia.inap.es/noticia.asp?id=1129922 (robots)

## Research step
- Question: does the Council of Ministers meet on Tue 3 Nov with the Urda aid on its agenda? Not found. Two Spanish searches (run 2026-11-02T18:50:42Z or shortly before) returned no cabinet agenda, no report naming the date and no report of a decree for Urda; the hits on a decree are Adamuz pages from January.
- Tue 3 Nov is confirmed for another item only: Puente in the Diputación Permanente at 17:00. It says nothing about the cabinet — Vozpópuli https://www.vozpopuli.com/espana/caos-en-transportes-primero-asegura-que-hay-74-muertos-y-minutos-despues-lo-rebaja-a-69.html (published 2026-10-29 18:46 CET, read 2026-11-02T18:50:42Z) "comparecerá el próximo martes 3 de noviembre a las 17:00 horas en la Diputación Permanente del Congreso"
- Existing cover without any new decree: mandatory passenger insurance of €72,121.46 per death, and an operator advance of at least €21,000 under Regulation 2021/782, within 15 days of identifying the beneficiary. The article names no decree for this crash and no cabinet meeting — Diari de Tarragona https://www.diaridetarragona.com/espana/274338/accidente-tren-toledo-indemnizaciones-cobrar-familias-victimas_amp.html (published 2026-10-30 05:00, read 2026-11-02T18:50:42Z) "72.121,46 euros por cada pasajero fallecido"
- The ČT24 report of a package at the next meeting remains uncorroborated in Spanish sources read.
