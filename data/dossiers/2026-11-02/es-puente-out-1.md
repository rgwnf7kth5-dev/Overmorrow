# es-puente-out-1

- **Claim:** By 23:59 Madrid time on Sunday 1 November 2026, Óscar Puente resigns as Spain's transport minister or is dismissed.
- **Criterion:** YES if, between 00:00 on 31 Oct and 23:59 CET on 1 Nov 2026, Puente announces his resignation, or the prime minister announces his dismissal or replacement (by statement, or by a royal decree in the BOE). These do not count: calls for resignation, a censure request, or a resignation offered but rejected. NO otherwise.
- **Event window:** 2026-10-31T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Madrid)
- **Written at:** 2026-10-30T18:30Z

## Schedule
- **Unscheduled decision.**
- **Diputación Permanente.** Puente's appearance before the Diputación Permanente is set for Tue 3 Nov at 17:00, at his own request. This is outside the window. Source: dossier es-puente-out-31, citing Libertad Digital 29 Oct live blog and andaluciainformacion.
- **Mourning.** Official mourning ends at 24:00 on Sat 31 Oct (es-puente-out-31).
- **General election.** The general election is on 29 Nov ("29N"). Source: El Demócrata https://www.democrata.es/politica/todos-contra-puente-como-izquierda-derecha-coinciden-en-exigir-dimision-ministro-transportes/ (published 2026-10-30 18:34 CET, read ~2026-10-30T18:05Z) "Las elecciones generales se celebran el 29 de noviembre". It was called by Sánchez on 5 Oct (world.json, riotimesonline).

## Facts
- **The crash.** On Wed 28 Oct, shortly after 09:00, a Renfe AVE and an Iryo train collided near Urda (Toledo) on the Madrid–Sevilla high-speed line.
  - Confirmed toll at least 69. Castilla-La Mancha president García-Page on 30 Oct: the toll remains 69, with 70 missing-person reports and 30 bags of partial remains.
  - Source: Libertad Digital live — https://www.libertaddigital.com/espana/politica/2026-10-30/oscar-puente-en-directo-accidente-tren-urda-renfe-iryo-7484469/ (published 2026-10-30 10:30 CET, last mod. 13:54, read ~2026-10-30T18:03Z), entry 10:36.
- **Puente's 30 Oct press conference** (11:59–13:54), Libertad Digital live (above):
  - 12:53: "La decisión que he tomado es seguir adelante".
  - 13:24: he will not resign "menos porque lo pida la oposición".
  - 12:43: he would go only "si yo creyera que mi permanencia en el cargo perjudica a este proyecto político".
- **Also from the press conference** — Público https://www.publico.es/politica/gobierno/oscar-puente-descarta-dimision-e-insiste-fallo-centro-control-desencadeno-accidente.html (published 2026-10-30 12:38, upd. 13:42, read ~18:04Z):
  - "Mi forma de asumir responsabilidades es dar la cara, no me voy a esconder."
  - He insists a control-centre "fallo" caused the crash.
- **Offer already made and rejected.** Puente put his post at Sánchez's disposal; Sánchez asked him to stay. This was disclosed on 30 Oct, so the offer predates the window and does not count under the criterion.
  - eldiario.es https://www.eldiario.es/politica/puente-puso-cargo-disposicion-presidente-accidente-urda-sanchez-le-pidio-no-dimitiera_1_13627494.html (published 2026-10-30 14:33 CET, upd. 15:50, read ~18:04Z): Puente "le planteó abiertamente al presidente del Gobierno la posibilidad de dimitir"; Sánchez "le pidió personalmente que no dimitiera y siguiera al frente de la gestión".
  - Sevilla Actualidad https://www.sevillaactualidad.com/espana/600404-oscar-puente-puso-su-cargo-a-disposicion-de-sanchez-tras-el-accidente-de-urda/ (published 2026-10-30 16:55Z, read ~18:03Z): Sánchez considered his leaving "injusto".
  - okdiario reports the same (headline "Puente puso su cargo a disposición de Sánchez, que rechazó su dimisión al considerarla 'injusta'", search title).
- **Sánchez backs Puente** — Libertad Digital live (above):
  - 09:39 headline: Sánchez backs Puente and denies that Urda calls his management into question.
  - 10:46: "no es asumible dos accidentes de estas características".
- **Demands for resignation**, El Demócrata (above, 18:34 CET):
  - PP spokesperson Ester Muñoz: "Puente no debería llegar al martes". Feijóo also demands Sánchez's resignation.
  - Vox: Abascal demands Puente's and Sánchez's exit. Vox has filed a querella against Puente at the Supreme Court.
  - Frente Amplio (Ada Colau): "lo antes posible". IU (Maíllo) backs that demand.
  - Junts (Nogueras): his exit is "inaplazable".
  - Adelante Andalucía: "Óscar Puente debe dimitir hoy".
  - PNV (Vaquero): conditional, "Si es inasumible, tendrá que tomar medidas".
  - Podemos, ERC and EH Bildu did not explicitly demand his resignation.
  - Libertad Digital 09:38 entry: PSOE voices have called for his resignation.
- **Puente's response to the calls** — El Demócrata (above): "Respeto las peticiones de dimisión pero mi misión es aclarar qué pasó".
- **Campaign role.** Elconstitucional headline: Puente "duda sobre su participación en la campaña electoral del 29N" — https://www.elconstitucional.es/es/nacional/oscar-puente-pone-su-cargo-disposicion-pedro-sanchez-accidente-tren-en-toledo-duda-sobre-su-participacion-en-campana-electoral-29n_9636_102.html (search title only).
- **Adif.** Adif president Luis Pedro Marco spoke at 13:41 on the LZB system's commissioning delays. No dismissals were announced at Adif — Libertad Digital live (above).
- **Adamuz precedent.** After the Jan 2026 Adamuz crash (46 dead), Puente did not resign despite calls and a Senate reprobation (dossiers es-puente-out-30/-31).

## Base rate
- **Spanish ministers facing resignation calls after a deadly transport accident who resigned within days** (Yak-42 2003, Spanair 2008, Alvia 2013, Adamuz 2026): 0 of 4. Source: news record, carried over from es-puente-out-30/-31, not re-verified. Not in reference-classes.json.
- **Pipeline loose class `unscheduled-announcement-within-one-day`:** own record 1 yes / 18 no. Here the window is two days.

## Schedule slip
- Slip class `none`: `node scripts/refdata/slip.mjs none` returns "unknown class none". No scheduled event.
- **Signs he stays at least to 3 Nov:**
  - He requested the 3 Nov appearance himself.
  - He said on 30 Oct "La decisión que he tomado es seguir adelante".
  - Sánchez rejected his offer.

## Risks
- **Toward YES:**
  - Puente has already floated resigning once. His own stated condition (if his staying "perjudica a este proyecto político") could be triggered by campaign polling or partner pressure before 29N.
  - Partners and allies (Junts, Frente Amplio/IU, some PSOE voices) are now among those demanding his exit.
  - New findings from the CIAF, the court investigation or the leaked Adif recordings could shift blame to the ministry.
  - The end of mourning on 31 Oct removes a reason to wait.
  - The PP says he "no debería llegar al martes".
- **Toward NO:**
  - Sánchez explicitly refused the resignation and called it "injusto".
  - With a caretaker period and the election a month away, Moncloa may prefer him to absorb blame through 3 Nov.
  - The window covers a weekend and a holiday (1 Nov, Todos los Santos).
- **Ambiguity:** an announcement that he will not campaign, or will step back after 29N, does not count. A second offer rejected again does not count.

## Sources
- https://www.libertaddigital.com/espana/politica/2026-10-30/oscar-puente-en-directo-accidente-tren-urda-renfe-iryo-7484469/
- https://www.publico.es/politica/gobierno/oscar-puente-descarta-dimision-e-insiste-fallo-centro-control-desencadeno-accidente.html
- https://www.eldiario.es/politica/puente-puso-cargo-disposicion-presidente-accidente-urda-sanchez-le-pidio-no-dimitiera_1_13627494.html
- https://www.sevillaactualidad.com/espana/600404-oscar-puente-puso-su-cargo-a-disposicion-de-sanchez-tras-el-accidente-de-urda/
- https://www.democrata.es/politica/todos-contra-puente-como-izquierda-derecha-coinciden-en-exigir-dimision-ministro-transportes/
- Search titles only: huelvahoy (Puente rechaza dimitir, 30 Oct), elnacional.cat, okdiario 20670990, democrata (Feijóo/29N; precedents Marlaska, Ábalos, González Laya), elconstitucional
- Carried over: data/dossiers/2026-11-01/es-puente-out-31.md and data/dossiers/2026-10-31/es-puente-out-30.md; scratchpad running.json, world.json
