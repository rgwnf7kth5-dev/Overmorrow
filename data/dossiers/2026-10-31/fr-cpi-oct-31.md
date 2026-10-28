# fr-cpi-oct-31
- **Claim:** INSEE's provisional estimate for October 2026 (30 Oct, 08:45 CET) puts French consumer price inflation (CPI, year on year) at 3.1% or higher, i.e. not below September's final rate.
- **Criterion:** YES if the year-on-year change of the consumer price index (CPI/IPC, all households, France) for October 2026, as printed to one decimal in INSEE's Informations rapides on provisional October 2026 consumer prices published on 30 Oct 2026, is 3.1% or higher. NO if it is 3.0% or lower, or if the release does not take place on 30 Oct 2026 (Paris time). The HICP, the monthly change and the final results of 13 Nov do not decide. Pending if published but not yet readable.
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-30T23:59:59+01:00 (Europe/Paris; release expected 08:45 CET)
- **Written at:** 2026-10-28T18:25:00Z

## Schedule
- INSEE final September release: "The October 2026 provisional results are due on 30 October 2026 at 8:45 am" — https://www.insee.fr/fr/statistiques/9080209 (published 2026-10-15, read 2026-10-28T18:05Z). Also stated in the provisional September release https://www.insee.fr/en/statistiques/9056972 (published 2026-09-30, read 2026-10-28T18:03Z).

## Facts
- September 2026 provisional (30 Sep): CPI +3.0% y/y, −0.3% m/m; HICP +3.4% y/y; energy +21.2% y/y; services +2.2%; food +1.5%; manufactured −0.3% — https://www.insee.fr/en/statistiques/9056972 (published 2026-09-30 08:45, read 2026-10-28T18:03Z) "consumer prices should increase by 3.0% year on year". First release.
- September 2026 final (15 Oct): CPI revised up to **+3.1% y/y** (m/m −0.3% confirmed); HICP +3.4% y/y; energy +21.3% y/y, petroleum products +36.2% y/y, energy +3.9% m/m; services +2.4% y/y (−1.4% m/m); food +1.4% — https://www.insee.fr/fr/statistiques/9080209 (published 2026-10-15 08:45, read 2026-10-28T18:05Z) "les prix à la consommation augmentent de 3,1 % sur un an"; "l'évolution annuelle de l'IPC est révisée à la hausse de 0,1 point". Revision.
- August 2026: CPI +2.4% y/y, +0.7% m/m (same releases).
- Base month: October 2025 CPI +0.1% m/m, +0.9% y/y (final); energy −0.4% m/m — https://www.insee.fr/fr/statistiques/8667361 (published 2025-11-14, read 2026-10-28T18:15Z) "augmentent de 0,1 % sur un mois et de 0,9 % sur un an". (Provisional Oct 2025 had been +1.0% y/y, +0.1% m/m — https://www.insee.fr/fr/statistiques/8662068 , published 2025-10-31.) So the October 2026 annual rate stays at about 3.1% if October 2026 prices rise about 0.1% m/m, rises with a larger monthly increase and falls with a smaller one (rounding can move this by a tenth).
- Fuel prices in October: weekly French diesel average 2.245 €/l (week of 31 Aug), 2.370 (14 Sep), 2.337 (12 Oct); 2.346 on 19 Oct and 2.358 on 22 Oct; European averages fell ~10 c/l from 28 Sep to 19 Oct — https://prix-carburant.eu/article/prix-carburants-europe-19-octobre-2026 (published 2026-10-22, read 2026-10-28T18:10Z). French pump prices in October therefore roughly level with late September, while October 2025 energy fell 0.4% m/m.
- Government release of 10 million barrels of diesel from strategic stocks (announced 7 Oct, G7 deal 2 Oct), expected to cut diesel by 12–18 c/l for three months; press reports put the start around 1 Nov, i.e. after the October price collection — https://www.kelwatt.fr/actu/10-millions-barils-diesel-baisse-prix-gazole-octobre-2026 (published 2026-10-08, read 2026-10-28T18:10Z) "baisse de 12 à 18 centimes par litre".
- Consensus: +0.2% m/m for October (currencyhedger week ahead, published 2026-10-24, read 2026-10-28T18:03Z) "Prices are projected to rise 0.2%, which could push France's annual inflation rate higher". No annual consensus given.
- Spain/Germany October flashes (29–30 Oct) not yet out at writing.

## Base rate
- stats-release-beats-threshold (own record 2 yes / 3 no; pipeline/reference-classes.json) — weak fit. Mechanically, October m/m changes in recent years were small (Oct 2025 +0.1%), so the annual rate in October usually moves by 0–0.2 pp from September.

## Schedule slip
- stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`). Date and time confirmed by INSEE.

## For a number forecast
- Consensus +0.2% m/m (currencyhedger), implying CPI y/y around 3.2%. Usual surprise for French provisional CPI y/y vs consensus: typically ±0.1–0.2 pp (stated estimate, not computed tonight).

## Risks
- Services fell 1.4% m/m in September (seasonal end of summer); further seasonal declines in transport/accommodation in October could offset energy.
- Rounding: September final was 3.1 after a 3.0 provisional; a near-3.05 underlying rate can print 3.0 (NO).
- Regulated energy tariffs or fiscal measures effective in October (none found tonight).
- Wording: threshold is September's final 3.1, not the provisional 3.0 proposed by the desk.

## Sources
- https://www.insee.fr/en/statistiques/9056972
- https://www.insee.fr/fr/statistiques/9080209
- https://www.insee.fr/fr/statistiques/8667361
- https://www.insee.fr/fr/statistiques/8662068
- https://prix-carburant.eu/article/prix-carburants-europe-19-octobre-2026
- https://www.kelwatt.fr/actu/10-millions-barils-diesel-baisse-prix-gazole-octobre-2026
- https://currencyhedger.com/week-ahead-october-26-30-2026-fed-and-ecb-rate-decisions-us-gdp-and-inflation-big-tech-earnings-and-global-elections/
