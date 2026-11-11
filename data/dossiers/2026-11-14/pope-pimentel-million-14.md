# pope-pimentel-million-14
- **Claim:** The attendance announced for Pope Leo XIV's Mass at the Pampas de Pimentel near Chiclayo, Peru, on Friday 13 November 2026 is at least 1 million people.
- **Criterion:** YES if, by 23:59 Lima time (UTC-5) on 13 Nov 2026, the Holy See (Press Office, Vatican News) or, if the Holy See gives no figure, a Peruvian authority (Lambayeque regional government, Peruvian government, National Police, Indeci or the organising Diocese of Chiclayo) as reported by Vatican News, Andina or El Peruano, puts attendance at the Pimentel Mass at 1,000,000 or more. If the Holy See gives a figure, that figure decides. NO if the deciding figure is below 1,000,000 or if the Mass does not take place on 13 Nov.
- **Event window:** 2026-11-13T10:30-05:00 to 2026-11-13T23:59-05:00 (America/Lima)
- **Written at:** 2026-11-11T18:15Z

## Schedule
- El Peruano (official agenda): "El viernes 13 de noviembre, el Santo Padre viajará a Chiclayo, donde celebrará una misa en la explanada de las Pampas de Pimentel" — https://elperuano.pe/noticia/305157-papa-leon-xiv-en-peru-revisa-aqui-la-agenda-oficial-de-su-visita-del-11-al-16-de-noviembre (read 2026-11-11T17:56Z).
- Time 10:30 local; entry to the site opens 20:00 on Thu 12 Nov — https://canaln.pe/actualidad/chiclayo-pampas-pimentel-registra-75-avance-misa-papa-leon-xiv-n496132 (published 2026-11-07T17:23Z, read 2026-11-11T17:56Z) "celebrará una misa multitudinaria el viernes 13 de noviembre a las 10:30 a. m. ... El ingreso al recinto comenzará a las 8:00 p. m. del jueves 12 de noviembre."
- Vatican programme page (cited in data/planning/agenda.json): https://www.vatican.va/content/leo-xiv/en/travels/2026/documents/uruguay-argentina-peru-6-17novembre2026.html (not re-read tonight); agenda note says the Vatican page lists 12 Nov for Lima–Chiclayo–Pimentel while El Peruano has 13 Nov; the 13 Nov date is in El Peruano, Canal N and Andina.

## Facts
- Expected attendance "cerca de un millón" — Lambayeque regional governor Jorge Pérez, Canal N (above) "se espera la asistencia de cerca de un millón de fieles."
- About 150,000 people registered for tickets in the first hours of the portal — same Canal N "alrededor de 150 mil personas ya habían realizado el trámite para obtener sus entradas durante las primeras horas".
- Site: first phase levelling 60 m × 800 m; four macro-lots of about 10,000 people per group; 300 ha adjacent evacuation zone; "Un millón de personas no pueden ingresar de golpe" (Pérez Flores) — https://elperuano.pe/noticia/305930-cancilleria-inspecciona-pampas-de-pimentel-escenario-de-la-misa-que-ofrecera-el-papa-leon-xiv (published 2026-10-01, read 2026-11-11T17:56Z).
- Earlier plan for Reque site spoke of 2 million faithful (Andina headline, search result only, not opened): https://andina.pe/agencia/noticia-papa-leon-xiv-reque-se-alista-para-misa-multitudinaria-y-recibiria-a-2-millones-fieles-1082890.aspx
- Buenos Aires Mass 9 Nov: Vatican estimated more than 2.5 million, the largest gathering of his pontificate — https://www.batimes.com.ar/news/argentina/pope-leo-celebrates-mass-before-estimated-25-million-people-in-buenos-aires.phtml (published 2026-11-09 19:07, read 2026-11-11T17:55Z) "The Vatican estimated that more than 2.5 million people had attended the Mass."
- Leo XIV (Robert Prevost) was bishop of Chiclayo 2015–2023 (agenda note, data/planning/agenda.json, citing Andina; the Pimentel Mass is his first Mass in Peru on this trip, with Lima's Mass on 16 Nov at Base Aérea Las Palmas — El Peruano agenda above).
- No crowd figure for the Peru leg yet (arrival in Lima 11 Nov 17:30; youth vigil Estadio Monumental 12 Nov) — El Peruano agenda.

## Base rate
- None in pipeline/reference-data/. Comparable: Vatican figure for Buenos Aires (2.5 million, a metro of ~15 million). Chiclayo-Lambayeque is far smaller (population not sourced tonight).

## Schedule slip
- Slip class: summit-or-visit. `node scripts/refdata/slip.mjs summit-or-visit`: "summit-or-visit 0.04 0/14 0.015 [estimate]". The schedule conflict noted (Vatican 12 Nov vs El Peruano 13 Nov) should be checked at the freeze.

## Risks
- Authorities sometimes round up to the expected figure; the Vatican sometimes relays local authorities' numbers; two different figures may be given (criterion: Holy See first).
- Wind/heat or access limits (3 access routes, 17 gates) could depress turnout; ticket registration of 150,000 in the first hours suggests demand but tickets are not attendance.
- No figure published on the day (claim then pending, not NO).

## Sources
- https://elperuano.pe/noticia/305157-papa-leon-xiv-en-peru-revisa-aqui-la-agenda-oficial-de-su-visita-del-11-al-16-de-noviembre
- https://canaln.pe/actualidad/chiclayo-pampas-pimentel-registra-75-avance-misa-papa-leon-xiv-n496132
- https://elperuano.pe/noticia/305930-cancilleria-inspecciona-pampas-de-pimentel-escenario-de-la-misa-que-ofrecera-el-papa-leon-xiv
- https://www.batimes.com.ar/news/argentina/pope-leo-celebrates-mass-before-estimated-25-million-people-in-buenos-aires.phtml
- https://andina.pe/ingles/noticia-pope-leo-xiv-in-peru-when-will-he-visit-chiclayo-cusco-and-pucallpa-1092627.aspx (headline page only, no figures)
- Unreachable: https://www.latribuna.hn/2026/11/03/una-inmensa-extension-entre-el-desierto-y-el-mar-en-peru-se-prepara-para-recibir-a-su-papa/ (HTTP 403).

## Research step (11 Nov 2026 evening)
- Date conflict resolved: the Vatican programme (raw HTML) lists "Friday 13 November 2026 — LIMA - CHICLAYO - PIMENTEL - CHICLAYO", 07:40 flight from Callao, 09:10 arrival Chiclayo, "10:30 HOLY MASS at the open space near the 'Pampas de Pimentel'"; Thursday 12 Nov is Lima only (bishops, cathedral, 18:00 youth vigil at the National Stadium) — https://www.vatican.va/content/leo-xiv/en/travels/2026/documents/uruguay-argentina-peru-6-17novembre2026.html (fetched 2026-11-11T18:14Z) "10:30 HOLY MASS at the open space near the “Pampas de Pimentel”". (The scripted reader drops the table cells, which explains the earlier 12 Nov reading.)
- Site size and planning figure: 50 ha of flat ground, sectors of 10,000–15,000 people each; authorities and the Vatican team plan for "entre un millón y un millón medio" — América TV https://www.americatv.com.pe/noticias/actualidad/chiclayo-alista-preparativos-papa-leon-xiv-noviembre-n523025 (published 2026-09-27T20:15-05:00, read 2026-11-11T18:14Z) "una concurrencia estimada entre un millón y un millón medio de feligreses"; regional hotel capacity 60,000 beds, free "campamentos de fe" on beaches (same source).
- Logistics: 1,500 toilets (similar to Las Palmas 2018) and three million water bottles planned; works 80% complete; Mass "viernes 13 de noviembre" — Panamericana https://panamericana.pe/buenosdiasperu/nacionales/477149-obras-pampas-pimentel-registran-80-avance-misa-papa-leon-xiv (date not shown by page, read 2026-11-11T18:14Z) "se ha programado la distribución de tres millones de botellas de agua".
- Lima youth vigil venue (12 Nov) capacity: 42,000 in stands and 10,000 on the field per the IPD president — same Panamericana page "han previsto 42 mil personas en tribuna y 10 mil en campo". No crowd figure yet for any Peru event (Peru leg began 11 Nov evening).
- Buenos Aires figure attribution: most outlets give "more than two million"/"2.5 million" (Teleamazonas 9 Nov, citing "unos dos millones y medio") — https://www.teleamazonas.com/actualidad/noticias/internacional/dos-millones-personas-misa-papa-leon-xiv-buenos-aires-132521/ (published 2026-11-09T13:28-05:00, read 2026-11-11T18:14Z) "Más de dos millones de personas asistieron". The Vatican's 2.5 million figure (BA Times, above) shows the Holy See does publish crowd estimates on this trip.
- No registration total newer than the ~150,000 first-hours figure (Canal N, above) was found (search 2026-11-11 ~18:14Z).
