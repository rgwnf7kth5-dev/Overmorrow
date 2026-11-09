# es-strike-power-12
- **Claim:** On the day of the housing general strike, Wednesday 11 November 2026, peninsular Spain's electricity demand as reported by Red Eléctrica is at least 3 percent lower than on Wednesday 4 November.
- **Criterion:** YES if the general strike takes place on 11 Nov 2026 and Red Eléctrica's REData daily "Demanda" for the peninsular system (apidatos.ree.es, `demanda/evolucion`, `geo_limit=peninsular`, `geo_ids=8741`, `time_trunc=day`; same series as ree.es/es/datos/demanda) for 11 Nov 2026 is at least 3.0% below the value for 4 Nov 2026, i.e. D(11 Nov) / D(4 Nov) − 1 ≤ −0.030, with both values taken from the same reading, the first made on or after 12 Nov 2026 06:00 CET. NO if the ratio is above −0.030, or if the strike is called off or postponed. If REData has not yet published the 11 Nov value, the claim stays pending. For reference, D(4 Nov) read on 9 Nov = 675,411.9 MWh (−3% ≈ 655,150 MWh).
- **Deadline:** strike day 2026-11-11 (00:00–24:00 CET); window 2026-11-10 06:00 to 2026-11-11 23:59 CET; evidence from 12 Nov morning
- **Written at (UTC):** 2026-11-09T18:20Z

## Schedule
- El País (9 Nov): "El 11 de noviembre, este miércoles, tiene lugar la primera huelga general apoyada por CC OO y UGT en 14 años"; minimum services set: Renfe Cercanías 75% at peak and 50% otherwise, medium distance 65%, high-speed/long distance 73%, freight 26%; domestic flights under 5 h 18–37% — https://elpais.com/economia/2026-11-09/estos-son-los-servicios-minimos-de-transporte-y-otras-areas-para-la-huelga-general-del-11-de-noviembre.html (published 2026-11-09T12:27+01:00, read 2026-11-09T17:56:01Z)
- eldiario.es front page (read 2026-11-09T17:56Z): "El Gobierno decreta servicios mínimos de entre el 18% y el 85% para los vuelos durante la huelga general" — https://www.eldiario.es/economia/gobierno-decreta-servicios-minimos-18-85-vuelos-durante-huelga-general_1_13650496.html (headline only)
- RTVE (9 Nov) topic page and "Póker de huelgas: el 11N, también paran los maquinistas, Adif y la industria cárnica" — https://www.rtve.es/noticias/20261109/poker-huelgas-11n-maquinistas-personal-de-adif-industria-carnica/17306281.shtml (headline read 2026-11-09T17:56Z)

## Facts
- The strike was launched by the Sindicato de Inquilinas and backed by CCOO and UGT plus CGT, LAB, CIG and others; "la primera gran huelga general en 14 años"; it is a 24-hour stoppage, unions aim for a "relevant" stoppage and mass afternoon marches — https://www.eldiario.es/economia/organiza-huelga-11n-desahucio-maricarmen-parar-pais-vivienda_1_13639701.html (published 2026-11-06T22:22+01:00, read 2026-11-09T17:55:47Z)
- Union officials expect uneven following: "la huelga general del 11 de noviembre no parece en disposición de parar España, no como lo consiguieron los grandes paros del pasado"; stronger in Madrid, Barcelona, Valencia, Málaga and in unionised sectors; about 3,600 works councils have joined (incl. Mercadona, El Corte Inglés, Iberdrola, Santander, Telefónica, Ford, Seat); the Urda rail accident "ha cambiado el ánimo del país" (Unai Sordo) — https://elpais.com/economia/2026-11-09/los-sindicatos-preven-un-seguimiento-desigual-por-territorios-sectores-y-edades-en-la-huelga-general.html (published 2026-11-09T05:45+01:00, read 2026-11-09T17:56:00Z)
- Semaf train drivers also strike on 10 and 12 Nov after the Urda accident — El País services article above.
- Political context: Sánchez encourages the strike, PP expects "un auténtico fracaso" (20minutos headline, read 2026-11-09T17:56Z: https://www.20minutos.es/nacional/sanchez-alienta-huela-general-porque-los-derechos-se-pueden-perder-un-instante-pp-preve-que-sera-un-autentico-fracaso_7058866_0.html); Feijóo calls it "un disparate" (eldiario.es headline: https://www.eldiario.es/politica/feijoo-afirma-huelga-general-disparate-no-existe-paises-union-europea_1_13649826.html). General election 29 Nov.
- REData peninsular daily demand, recent days (read 2026-11-09T17:5xZ): Wed 28 Oct 639,578 MWh; Mon 2 Nov 569,318; Tue 3 Nov 635,173; **Wed 4 Nov 675,412**; Thu 5 Nov 684,752; Fri 6 Nov 678,762 — https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2026-10-26T00:00&end_date=2026-11-08T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741 . The 4 Nov value is 5.6% above the previous Wednesday (cooler week, own reading).

## Base rate (past general strikes, REData, own arithmetic)
- 14 Nov 2012 (CCOO/UGT general strike): Wed 14 Nov 636,822 MWh vs Wed 7 Nov 726,124 = **−12.3%** (vs Wed 21 Nov 713,578: −10.8%) — https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2012-10-31T00:00&end_date=2012-11-21T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741 (read 2026-11-09T17:5xZ)
- 29 Mar 2012: Thu 29 Mar 592,199 vs Thu 22 Mar 748,131 = **−20.8%**, but a cold front had raised the previous week's demand; vs Wed 28 Mar 688,543 = −14.0% — REData query 2012-03-20..04-04 (read 2026-11-09T17:5xZ). Libertad Digital (29 Mar 2012): at 13:00 demand "un 19,8% menos que el jueves de la semana pasada (y un 15,5% menos de lo previsto por Red Eléctrica)", and the comparison is inflated by the cold week; 29 Sep 2010 peak hourly drop 19.3%; 20 Jun 2002 27.8% — https://www.libertaddigital.com/libremercado/2012-03-29/fracaso-sindical-1276454387/ (read 2026-11-09T17:58:47Z)
- 29 Sep 2010 daily data could not be read (REData returned 403 for 2010).
- Noise without a strike: Wednesday-to-Wednesday changes in Sep–Nov 2025 and Sep–Nov 2026 (n=21): mean +0.1%, sd 4.3%; 4 of 21 at −3% or lower, 2 of 21 at −5% or lower; Oct–Nov only (n=14): 1 of 14 at −3% or lower (7 Oct 2026, −6.5%) — own computation from REData monthly queries (read 2026-11-09T18:0xZ). Demand usually rises into late November as temperatures fall (2025: +4.3% and +5.8% on 19 and 26 Nov).

## Schedule slip
- slip.mjs strike-or-protest: prior 0.15, own 0/8, current rate 0.064. Strike legally called, minimum services decreed; PP linked the strike to the Urda accident victims but no move to call it off was found.

## Risks
- Weather dominates the week-to-week change: a cold spell on 11 Nov would hide a strike effect; a mild day adds to it. The 4 Nov base was relatively high.
- Unions themselves expect a weaker stoppage than 2012; telework and services share are larger now; heavy industry (electricity-intensive) follows strikes more than services.
- REData values for recent days are provisional and may be revised; the criterion uses one same-time reading of both days. The API refused some queries with HTTP 403 (long date ranges / rate limit); short ranges worked repeatedly. Fallback: the same series on ree.es/es/datos/demanda.
- REE may itself publish a strike-day comparison (it did in 2012); such a press figure does not decide this claim.

## Sources
- https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2026-10-26T00:00&end_date=2026-11-08T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741
- https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2012-10-31T00:00&end_date=2012-11-21T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741
- https://elpais.com/economia/2026-11-09/estos-son-los-servicios-minimos-de-transporte-y-otras-areas-para-la-huelga-general-del-11-de-noviembre.html
- https://elpais.com/economia/2026-11-09/los-sindicatos-preven-un-seguimiento-desigual-por-territorios-sectores-y-edades-en-la-huelga-general.html
- https://www.eldiario.es/economia/organiza-huelga-11n-desahucio-maricarmen-parar-pais-vivienda_1_13639701.html
- https://www.libertaddigital.com/libremercado/2012-03-29/fracaso-sindical-1276454387/
- https://www.rtve.es/noticias/20261109/poker-huelgas-11n-maquinistas-personal-de-adif-industria-carnica/17306281.shtml
