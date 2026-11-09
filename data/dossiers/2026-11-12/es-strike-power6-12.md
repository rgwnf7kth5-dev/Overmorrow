# es-strike-power6-12
- **Claim:** On the day of the housing general strike, Wednesday 11 November 2026, peninsular Spain's electricity demand as reported by Red Eléctrica is at least 6 percent lower than on Wednesday 4 November.
- **Criterion:** As es-strike-power-12, with the threshold −0.060: YES if the general strike takes place on 11 Nov 2026 and REData daily peninsular "Demanda" (apidatos.ree.es `demanda/evolucion`, geo_ids=8741, time_trunc=day) gives D(11 Nov) / D(4 Nov) − 1 ≤ −0.060, both values from the same first reading on or after 12 Nov 2026 06:00 CET. NO otherwise, or if the strike is called off or postponed. Pending while REData lacks the 11 Nov value. Reference: D(4 Nov) = 675,411.9 MWh (read 9 Nov); −6% ≈ 634,890 MWh.
- **Deadline:** strike day 2026-11-11; window 2026-11-10 06:00 to 2026-11-11 23:59 CET
- **Written at (UTC):** 2026-11-09T18:20Z

## Schedule
- See es-strike-power-12.md: strike on Wed 11 Nov confirmed by El País (9 Nov) with minimum services decreed — https://elpais.com/economia/2026-11-09/estos-son-los-servicios-minimos-de-transporte-y-otras-areas-para-la-huelga-general-del-11-de-noviembre.html (read 2026-11-09T17:56:01Z)

## Facts
- All facts as in es-strike-power-12.md. Key ones: unions expect the strike "no parece en disposición de parar España, no como lo consiguieron los grandes paros del pasado" — https://elpais.com/economia/2026-11-09/los-sindicatos-preven-un-seguimiento-desigual-por-territorios-sectores-y-edades-en-la-huelga-general.html (read 2026-11-09T17:56:00Z); 4 Nov demand 675,411.9 MWh, 5.6% above 28 Oct — REData (read 2026-11-09T17:5xZ).

## Base rate
- Past CCOO/UGT general strikes (REData, own arithmetic): 14 Nov 2012 −12.3% vs previous Wednesday; 29 Mar 2012 −20.8% vs previous Thursday (cold-week base) or −14.0% vs the day before. Both were above 6%, in a stronger mobilisation (labour reform, recession).
- No-strike noise: Wednesday-to-Wednesday changes Sep–Nov 2025/2026, n=21, sd 4.3%; 2 of 21 at −5% or lower, 1 of 21 at −6% or lower (7 Oct 2026 −6.5%; 24 Sep 2025 −11.9%).

## Schedule slip
- slip.mjs strike-or-protest: current rate 0.064 (prior 0.15, own 0/8).

## Risks
- As es-strike-power-12: weather, telework, provisional REData values, API 403 on long ranges.

## Sources
- https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2026-10-26T00:00&end_date=2026-11-08T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741
- https://apidatos.ree.es/es/datos/demanda/evolucion?start_date=2012-10-31T00:00&end_date=2012-11-21T23:59&time_trunc=day&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741
- https://elpais.com/economia/2026-11-09/los-sindicatos-preven-un-seguimiento-desigual-por-territorios-sectores-y-edades-en-la-huelga-general.html
- https://elpais.com/economia/2026-11-09/estos-son-los-servicios-minimos-de-transporte-y-otras-areas-para-la-huelga-general-del-11-de-noviembre.html
