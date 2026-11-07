# py-ueno-debtors-10
Claim: By 23:59 Asunción time on 9 November 2026, Paraguay's central bank (BCP) starts paying deposit-guarantee money to ueno bank depositors who owe the bank, after deducting their overdue debts.
Criterion: YES if, between 06:00 Asunción time on 8 Nov 2026 and 23:59 Asunción time on 9 Nov 2026, the Banco Central del Paraguay (or its ueno intervention team) credits, or orders the crediting of, Deposit Guarantee Fund (FGD) payments to ueno bank depositors who have debts with ueno (loans, overdrafts or credit cards), with overdue amounts netted off, as stated by the BCP in a communiqué, press conference or its official channels, or reported as having started by ABC Color, Última Hora, La Nación (Paraguay), Hoy or EFE. Announcements of a future start date, the preparation of lists, or payments only to depositors without debts (including previously blocked accounts) do not count. NO if such payments have not started by 23:59 on 9 Nov 2026.
Deadline: 2026-11-09 23:59 America/Asuncion (UTC-3)
Event window: 2026-11-08T06:00-03:00 to 2026-11-09T23:59-03:00
Written at (UTC): 2026-11-07T18:03:00Z
Premise update vs. py-ueno-3 (claim for 8 Nov): the BCP's second group (deposits above G. 10 million up to 40 minimum wages, no debts) was already paid on Friday 6 Nov, before that claim's window. The next announced step is the debtor group "desde el lunes".

## Schedule
- BCP (interim president Pedro de Jesús Acosta), press conference Sat 7 Nov: "desde el lunes comenzará una nueva etapa de devolución de depósitos para los ahorristas de ueno bank que mantienen deudas con la entidad intervenida"; "durante este sábado se trabajará en la preparación de los nuevos listados" — https://www.lanacion.com.py/negocios/2026/11/07/ueno-bank-desde-el-lunes-pagaran-a-ahorristas-con-deudas-y-cuentas-bloqueadas-anuncio-el-bcp/ (published 2026-11-07T14:44Z, read 2026-11-07T17:54Z)
- Blocked accounts without debts: "la previsión de concretar los pagos entre el lunes y, a más tardar, el martes" — same La Nación article. (These do not count for the claim.)
- BCP's Julio Cristaldo: payments "continuarán hasta el miércoles, en cumplimiento de la normativa"; unblocked balances enter "el lote de pagos fijados para la semana que viene, entre el lunes y miércoles" — https://www.ultimahora.com/bcp-responde-a-dudas-sobre-pagos-por-caso-ueno-que-pasa-si-no-recibiste-tu-dinero (published 2026-11-07T16:13 local tag, read 2026-11-07T17:54Z)
- Legal window: five working days from the start on 5 Nov (to about Wed 11 Nov) — py-ueno-3.md, La Nación 6 Nov.

## Facts
- Paid so far: first tranche G. 994,601 million (about USD 168 million) — https://www.ultimahora.com/bcp-ya-devolvio-casi-g-1-billon-y-responde-a-reclamos-de-depositantes (published 2026-11-07T17:01 local tag, read 2026-11-07T17:54Z) "a partir de ahora el proceso avanza hacia las cuentas de personas que tienen depósitos y, al mismo tiempo, deudas con la entidad. En esos casos, antes de acreditar el saldo, primero se descuenta lo que esté vencido."
- Why debtors are slower: "cada caso exige cruzar dos bases de datos, la de depósitos y la de créditos" — same ÚH article.
- Economy Minister Óscar Lovera: "ya hemos alcanzado un total de 1.196.000 personas"; second tranche covered over G. 10 million up to G. 121,760,000, no debts, account at another institution; "los listados más complejos y los calendarios para los grupos restantes ... serán anunciados a través de los canales oficiales" — https://www.ultimahora.com/mas-de-un-millon-de-ahorristas-de-ueno-ya-recibieron-su-dinero-y-monto-totaliza-usd-160-millones (published 2026-11-07T11:56 local tag, read 2026-11-07T17:54Z)
- Cristaldo: Thursday 722,000 depositors, Friday another 480,000 — ÚH 16:13 article above.
- President Pedro Alliana (sworn in 6 Nov after Peña's removal, term to Aug 2028): "Nuestra prioridad es que los ahorristas recuperen su dinero ... Los trabajos continuarán durante todo el fin de semana"; his first meetings Saturday were with Economy Minister Lovera, IPS head Derlis León and Health Minister Fretes — https://www.ultimahora.com/pedro-alliana-nuestra-prioridad-es-que-los-ahorristas-recuperen-su-dinero (published 2026-11-07T11:33 local tag, read 2026-11-07T17:54Z)
- Data-quality problem: 22 of 121 legislators shown as paid; BCP: "No hacemos distinciones de personas" — ÚH 17:01 article above. BCP to strengthen security of the FGD lookup platform — https://www.lanacion.com.py/negocios/2026/11/07/bcp-reforzara-la-seguridad-de-la-plataforma-de-consulta-del-fgd/ (published 2026-11-07T16:55Z, read 2026-11-07T17:54Z)
- Cabinet: Alliana's first decree named Ariel Martínez (Interior minister under Cartes) and moved Juan Carlos Baruja to Public Works, dismissing Claudia Centurión — https://www.abc.com.py/politica/2026/11/07/alliana-nombra-a-exministro-de-cartes-en-interior-y-muda-a-baruja-al-mopc/ (published 2026-11-07T13:06-03:00, read 2026-11-07T17:54Z). Lovera remains at Economy as of 7 Nov (ÚH above).
- Peña: charged ("imputado") on 7 Nov with "lesión de confianza, tráfico de influencias, presunto enriquecimiento ilícito"; prosecutors asked for house arrest with an electronic tag for Peña and pre-trial detention for ex-BCP head Carlos Carvallo — https://www.abc.com.py/politica/2026/11/07/caso-ueno-fiscalia-imputa-y-pide-prision-preventiva-para-santiago-pena-y-del-extitular-del-bcp/ (published 2026-11-07T17:49-03:00, read 2026-11-07T17:54Z). Judge's ruling date not found.
- IPS guarantees pension and aguinaldo payments for pensioners paid via ueno "en 10 días" — ÚH front page headline (read 2026-11-07T17:53Z).
- bcp.gov.py refused the reader in the previous run (HTTP 403); BCP channels not read directly.

## Base rate
None.

## Schedule slip
slip_class other-scheduled: `node scripts/refdata/slip.mjs` prints other-scheduled prior 0.07, own 4/35, rate 0.108 [estimate]. The start date "desde el lunes" is the BCP's own statement at a press conference (schedule: reported). Signs of movement: lists still being prepared on Saturday; debtor netting needs matching of two databases; the BCP has had data errors (legislators, mistaken credits) and has an interim president. Status quo: yes (YES is what happens if the BCP keeps to its stated plan).

## Risks
- The debtor stage starts Tuesday or Wednesday (still within the legal window) instead of Monday.
- The BCP may "start" Monday with announcements or list publication only, and credits follow Tuesday; the criterion needs payments credited or ordered in the window, so wording in reports matters ("comenzó el pago" vs "se publicará el listado").
- Reports may not distinguish debtor payments from the blocked-account batch (which does not count); the resolver needs a report that names depositors with debts.
- A change at the BCP's top (Alliana naming a new BCP president) could pause decisions.

## Sources
- https://www.lanacion.com.py/negocios/2026/11/07/ueno-bank-desde-el-lunes-pagaran-a-ahorristas-con-deudas-y-cuentas-bloqueadas-anuncio-el-bcp/
- https://www.lanacion.com.py/negocios/2026/11/07/bcp-reforzara-la-seguridad-de-la-plataforma-de-consulta-del-fgd/
- https://www.lanacion.com.py (front-page links)
- https://www.ultimahora.com (front-page links)
- https://www.ultimahora.com/bcp-ya-devolvio-casi-g-1-billon-y-responde-a-reclamos-de-depositantes
- https://www.ultimahora.com/mas-de-un-millon-de-ahorristas-de-ueno-ya-recibieron-su-dinero-y-monto-totaliza-usd-160-millones
- https://www.ultimahora.com/bcp-responde-a-dudas-sobre-pagos-por-caso-ueno-que-pasa-si-no-recibiste-tu-dinero
- https://www.ultimahora.com/pedro-alliana-nuestra-prioridad-es-que-los-ahorristas-recuperen-su-dinero
- https://www.ultimahora.com/santiago-pena-fue-trasladado-al-regimiento-escolta-presidencial-por-motivos-de-seguridad
- https://www.abc.com.py (front-page links)
- https://www.abc.com.py/politica/2026/11/07/alliana-nombra-a-exministro-de-cartes-en-interior-y-muda-a-baruja-al-mopc/
- https://www.abc.com.py/politica/2026/11/07/caso-ueno-fiscalia-imputa-y-pide-prision-preventiva-para-santiago-pena-y-del-extitular-del-bcp/
- data/dossiers/2026-11-09/py-ueno-3.md, py-cabinet-1.md, py-economy-2.md
