# es-puente-out-2
- **Claim:** By 23:59 Madrid time on 2 November 2026, Óscar Puente resigns as Spain's transport minister or is dismissed.
- **Criterion:** YES if between 00:00 on 1 Nov and 23:59 Madrid time on 2 Nov 2026 Puente publicly announces his resignation as Minister of Transport and Sustainable Mobility, or the Prime Minister announces his dismissal, or a royal decree ending his appointment is published, as reported by La Moncloa, the BOE, EFE or a major Spanish outlet. NO otherwise.
- **Event window:** 2026-11-01T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Madrid)
- **Written at:** 2026-10-31T18:25:00Z. Read times below are approximate, all between 17:50Z and 18:05Z on 31 Oct.

## Schedule
- No resignation or dismissal is scheduled. The next fixed point is Puente's appearance before the Congress's Diputación Permanente on **Tue 3 Nov at 17:00**, after the window closes. He requested it himself, and Frente Amplio, ERC and Podemos also asked for it — elDiario.es https://www.eldiario.es/politica/oscar-puente-pedira-comparecer-peticion-propia-diputacion-permanente-congreso-explicar-accidente-urda_1_13625198.html (published 2026-10-29 16:33, upd. 17:58, read 2026-10-31T17:52Z). The Objective says it will be the only agenda item; its body text misdates the session to "3 de diciembre", while its headline says 3 Nov — https://theobjective.com/espana/politica/2026-10-29/puente-comparecer-diputacion-permanente-congreso/ (published 2026-10-29 16:54, read 2026-10-31T18:00Z).
- The Cortes are dissolved, and the general election is on 29 Nov 2026 (world_agenda / eldiario summary). The government is not caretaker until after the election, so a dismissal by royal decree remains possible.

## Facts
- **Crash:** Wed 28 Oct, about 08:30, near Urda (Toledo). A Renfe train travelling at more than 120 mph rear-ended a stalled Iryo train. The death toll was revised from 74 down to "at least 69", 52 bodies were still being identified, and 15 people were critical. The preliminary probe points to an "inexplicable" central-command decision to let trains proceed — ABC News https://abcnews.com/International/death-toll-climbs-74-spanish-officials-probe-high/story?id=137671994 (published 2026-10-29 16:22, read 2026-10-31T18:03Z).
- **Sánchez (29 Oct):** he declared three days of mourning, said the government works so "this never happens again" and is "fully committed" to establishing causes and compensation — ABC News (above). He "evita pronunciarse sobre su continuidad" (on Puente) but calls two fatal crashes in nine months "algo inasumible" — The Objective (above).
- **PSOE:** "Dirigentes del PSOE han reclamado a Pedro Sánchez que le cese". The leaders are unnamed — The Objective (above).
- **Puente, 30 Oct press conference:** he refuses to resign: "Mi forma de asumir responsabilidades … es dar la cara" and "nada que esconder". The evidence points to a failure at Adif's central control command — Andalucía Información https://www.andaluciainformacion.es/articulo/espana/puente-rechaza-dimitir-forma-asumir-responsabilidades-es-dar-cara/202610301316313522573.html (published 2026-10-30 13:16, read 2026-10-31T17:58Z).
- **Puente on Sánchez:** "Lo fácil para mí es salir, pero no va con mi carácter ni es lo que me ha pedido el presidente". This is a linked headline on elDiario.es, 30 Oct (below).
- **PP:** Feijóo demands resignation: "Si no dimiten ellos les dimitiremos en las urnas". Spokesperson Ester Muñoz: "No debería llegar al martes". The PP also registered a request for Sánchez to appear before the Diputación Permanente. The government has blamed Atocha control-centre technicians, which Feijóo calls a "cortafuegos". Toll 69 — elDiario.es https://www.eldiario.es/politica/pp-pide-dimision-oscar-puente-primera-vez-accidente-urda_1_13626233.html (published 2026-10-30 09:27, upd. 22:00, read 2026-10-31T17:55Z).
- **Precedent, same minister (Adamuz, 18 Jan 2026, 45 dead):** Puente did not resign. Sánchez backed him publicly ("Está gestionando y dando la cara desde el primer momento de esta tragedia"). Ayuso and ERC's Junqueras demanded his exit — Vozpópuli https://www.vozpopuli.com/espana/politica/el-desastre-ferroviario-lastra-la-opcion-sucesoria-de-puente-en-el-psoe-le-han-dejado-solo.html (published 2026-01-31, read 2026-10-31T18:05Z); El Observador https://www.elobservador.com.uy/espana/actualidad/ofensiva-total-contra-oscar-puente-diaz-ayuso-pide-su-renuncia-y-se-suman-los-catalanes-erc-n6032250 (published 2026-01-26, read 2026-10-31T18:04Z).
- **Difference from January:** this time no on-record Sánchez endorsement of Puente was found after Urda. Sánchez avoids the question, and unnamed PSOE leaders reportedly want him dismissed (The Objective, above).

## Base rate
- No class in pipeline/reference-data/ or reference-classes.json fits a ministerial resignation under pressure.
- Loose own count: Spanish transport ministers after Spain's deadly rail crashes with Puente in office. Adamuz (Jan 2026) gave 0 resignations out of 1 (sourced above). Earlier cases were not verified tonight.
- Nearest structural class: `unscheduled-announcement-within-one-day` (own record 1 YES / 18 NO, base_rate null).

## Schedule slip
- slip_class `none`: `node scripts/refdata/slip.mjs none` gives "unknown class none" (run 2026-10-31T18:07Z). No slip class applies.
- The 3 Nov appearance is the natural focal point. The PP's "no debería llegar al martes" sets 2 Nov as its informal deadline. A resignation, if it came, could fall just before the appearance (in window) or after it (outside). The window is Sunday and Monday (1 Nov is All Saints, a public holiday in Spain).

## Risks
- **Toward YES:** a rising death toll or a damaging finding before Tuesday (the CIAF, a court, Adif internal reports). An explicit request from Sánchez. Pre-election damage control 4 weeks before 29 Nov.
- **Toward NO:** Puente's explicit refusal, his self-requested appearance on 3 Nov, and the January precedent of Sánchez backing him. Replacing a minister four weeks before an election in a dissolved legislature is unusual.
- **Resolution:** a resignation announced on 3 Nov during or after the appearance falls outside the window. A minister "putting his post at the disposal" of the PM is not an announced resignation.

## Sources
- https://www.eldiario.es/politica/pp-pide-dimision-oscar-puente-primera-vez-accidente-urda_1_13626233.html
- https://www.eldiario.es/politica/oscar-puente-pedira-comparecer-peticion-propia-diputacion-permanente-congreso-explicar-accidente-urda_1_13625198.html
- https://theobjective.com/espana/politica/2026-10-29/puente-comparecer-diputacion-permanente-congreso/
- https://www.andaluciainformacion.es/articulo/espana/puente-rechaza-dimitir-forma-asumir-responsabilidades-es-dar-cara/202610301316313522573.html
- https://abcnews.com/International/death-toll-climbs-74-spanish-officials-probe-high/story?id=137671994
- https://www.vozpopuli.com/espana/politica/el-desastre-ferroviario-lastra-la-opcion-sucesoria-de-puente-en-el-psoe-le-han-dejado-solo.html
- https://www.elobservador.com.uy/espana/actualidad/ofensiva-total-contra-oscar-puente-diaz-ayuso-pide-su-renuncia-y-se-suman-los-catalanes-erc-n6032250
- https://ct24.ceskatelevize.cz/clanek/media/souhrn-zasadni-udalosti-soboty-31-rijna-379180 (no Spain item)
- Search results only: articulo14.es (28 Oct), elindependiente.com, eldebate.com (Jan 2026)
