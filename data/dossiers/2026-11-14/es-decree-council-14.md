# es-decree-council-14
- **Claim:** At its extraordinary meeting on Friday 13 November 2026, the first day of the election campaign, Spain's Council of Ministers approves at least one royal decree-law.
- **Criterion:** YES if the official "Referencia del Consejo de Ministros" for a meeting held on 13 Nov 2026 (lamoncloa.gob.es) or the BOE lists at least one Real Decreto-ley approved at that meeting, between 00:00 and 23:59 Madrid time on 13 Nov 2026. NO if the meeting approves no royal decree-law, or if no Council of Ministers meeting is held on 13 Nov.
- **Event window:** 2026-11-13T00:00+01:00 to 2026-11-13T23:59+01:00 (Europe/Madrid)
- **Written at:** 2026-11-11T18:20Z

## Schedule
- Demócrata (11 Nov): Minister of the Presidency Félix Bolaños announced four cabinet meetings during the campaign, including two extraordinary Friday meetings on 13 and 20 Nov, plus ordinary ones on 17 and 24 Nov — https://www.democrata.es/elecciones-generales-espana/consejos-ministros-campana-electoral-29n-comparativa/ (published 2026-11-11T08:42+01:00, read 2026-11-11T17:55Z) "El calendario anunciado por el ministro de la Presidencia, Félix Bolaños, incorpora dos reuniones extraordinarias en viernes, los días 13 y 20".
- Campaign opens 00:00 Fri 13 Nov, lasts 15 days, ends midnight 27 Nov; 28 Nov reflection day — https://www.democrata.es/en/general-elections-spain/general-elections-calendar-2026-all-the-key-dates-of-29-n/ (published 2026-10-05, read 2026-11-11T17:55Z) "The electoral campaign will start on Friday, November 13 and will last for 15 days."
- The agenda of the 13 Nov meeting is not published (no source found tonight).

## Facts
- In the five previous general-election campaigns there were 12 cabinet meetings and only one royal decree-law was approved (RDL 15/2019 on COP25, 8 Nov 2019) — Demócrata (above) "En las cinco últimas campañas generales se celebraron doce reuniones del Ejecutivo y solo se aprobó un real decreto-ley, en noviembre de 2019".
- The government may approve decree-laws with the Cortes dissolved (art. 86 requires "extraordinaria y urgente necesidad"; validation by the Permanent Deputation); it is not yet a caretaker government — Demócrata (above) "El Gobierno puede aprobar un real decreto-ley durante el periodo electoral, también con las Cortes disueltas."
- Background: Sánchez called the election on 5 Oct after Congress rejected two housing decrees on 2 Oct; the government had planned new housing decrees (headlines: Diario de León 5 Oct "Gobierno prevé aprobar nuevo decretos vivienda Consejo de Ministros martes", search result only, not opened: https://www.diariodeleon.es/castilla-y-leon/261005/2099334/elecciones-generales-2026-gobierno-preve-aprobar-nuevo-decretos-vivienda-consejo-ministros-martes.html).
- 11 Nov: first general strike in 14 years, over housing, backed by CCOO, UGT and others; Sánchez backed the strike — https://www.bbc.com/news/articles/cwvg25nypmrvo (as summarised in work/running.json; not re-read tonight).
- Poll average (Demócrata, 15 pollsters, 10 Nov): PP 31.5%, PSOE 26.8%, Vox 19.1%, Frente Amplio 6.2%, ERC 2.5% — https://www.democrata.es/elecciones-generales-espana/calendario-debates-electorales-29n-fechas-candidatos-horarios-donde-verlos/ (published 2026-11-10T20:13+01:00, read 2026-11-11T17:55Z) "Media a 10 de noviembre de 2026 · 15 institutos PP 31,5 % PSOE 26,8 % Vox 19,1 %".
- Debates: PSOE and PP agreed on 9 Nov that the Television Academy organise a Sánchez–Feijóo head-to-head and a multi-candidate debate, dates not set; Atresmedia keeps a four-way debate on 23 Nov without Sánchez's confirmation — same Demócrata debate page "Los dos encuentros encargados a la Academia de Televisión siguen sin fecha definitiva."
- CIS pre-election survey no. 3584, ~45,000 interviews, fieldwork 7 Oct–7 Nov; publication date not found — https://www.esdiario.com/nacional/261014/200199/tezanos-prepara-cis-xxl-29n-45-000-entrevistas-puertas-urnas.html (published 2026-10-14T06:01Z, read 2026-11-11T17:54Z) "el estudio preelectoral número 3584 tendrá un trabajo de campo comprendido entre el 7 de octubre y el 7 de noviembre".
- CIS October barometer: 17.3% undecided — https://www.democrata.es/en/general-elections-spain/the-undecided-of-29n-the-cis-reveals-where-they-are/ (published 2026-10-14, read 2026-11-11T17:55Z).

## Base rate
- Royal decree-laws approved at campaign cabinet meetings: 1 of 12 meetings in five campaigns (Demócrata count, above). Rate ≈ 0.08, n = 12. Caveat: the 13 Nov meeting is an extraordinary one called specifically, which differs from ordinary campaign meetings.

## Schedule slip
- Slip class: other-scheduled (Spanish cabinet meeting; no Spain-specific class). `node scripts/refdata/slip.mjs other-scheduled`: "other-scheduled 0.07 5/69 0.072 [estimate]". Single-source report of the meeting date (Demócrata); not confirmed on lamoncloa.gob.es tonight.

## Risks
- The meeting may approve only royal decrees, agreements or appointments, not a decree-law.
- Electoral Board (JEC) criticism of campaign use of institutions could deter a high-profile decree.
- Meeting could be moved or cancelled (single source).

## Sources
- https://www.democrata.es/elecciones-generales-espana/consejos-ministros-campana-electoral-29n-comparativa/
- https://www.democrata.es/en/general-elections-spain/general-elections-calendar-2026-all-the-key-dates-of-29-n/
- https://www.democrata.es/elecciones-generales-espana/calendario-debates-electorales-29n-fechas-candidatos-horarios-donde-verlos/
- https://www.democrata.es/en/general-elections-spain/the-undecided-of-29n-the-cis-reveals-where-they-are/
- https://www.esdiario.com/nacional/261014/200199/tezanos-prepara-cis-xxl-29n-45-000-entrevistas-puertas-urnas.html
- Unreachable: https://www.cis.es/ (connection reset, exit 3); https://www.articulo14.es/... (HTTP 403).
