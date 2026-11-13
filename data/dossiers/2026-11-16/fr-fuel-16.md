# fr-fuel-16
- **Claim:** The official share of French service stations short of at least one fuel (diesel and/or all petrol grades) on Sunday 15 November 2026 is 9% or more nationally.
- **Criterion:** YES if the "France - TOTAL" row of the table "Stations en difficulté (ruptures d'au moins un produit gazole et/ou essence) par région" on https://www.prix-carburants.gouv.fr/disponibilites-carburants shows a value dated 15 Nov 2026 of 9% or more (if more than one 15 Nov value is shown, the latest-timed one counts). If the table carries no 15 Nov column, a national figure for 15 Nov of the same indicator attributed to the government or the economy ministry and reported by AFP, Le Monde, franceinfo or BFMTV counts. NO if that 15 Nov figure is below 9%. Void if no official national figure for 15 Nov appears by the resolves_by time.
- **Event window:** 2026-11-15T00:00+01:00 to 2026-11-15T23:59+01:00 (Europe/Paris)
- **Evidence expected:** Sunday 17h column (if the table is refreshed at the weekend), about 2026-11-15T17:00–18:00+01:00; it then stays in the table's rolling three columns until about Tuesday 17 Nov 17:00. Resolver must save a copy of the page when reading it.
- **Deadline (resolves by):** 2026-11-17T05:00+01:00
- **Written at:** 2026-11-13T18:20Z

## Schedule
- Standing official indicator, not a scheduled event: the government fuel-price site (economy ministry; open data from station operators' own declarations) publishes a regional table with the last three readings — https://www.prix-carburants.gouv.fr/disponibilites-carburants (read 2026-11-13T17:54Z) "Pour chaque région, le tableau fournit : le taux pour les 3 jours précédents dans chaque colonne."
- Column headers read on 13 Nov at 18:54 and 19:02 Paris time: "11 nov. à 17h | 12 nov. à 17h | 13 nov. à 9h00" (no 13 Nov 17h column yet at 19:02). Pattern: the 17h value of each of the two previous days plus the latest reading of the current day. A 15 Nov 17h value, if published, would remain visible on Monday 16 and Tuesday 17 Nov until the Tuesday 17h refresh.
- Weekend readings have existed: AFP on 15 Sep reported the site's figure for Saturday 12 Sep — https://www.connaissancedesenergies.org/afp/prix-eleves-des-carburants-aucun-risque-de-penurie-selon-bregeon-260915 (published 2026-09-15 09:05, read 2026-11-13T17:55Z) "Le site gouvernemental de suivi des disponibilités recensait lundi 14 septembre 13 % de stations-service avec des indisponibilités, contre 8 % le 12 septembre." The 11 Nov public holiday also had a 17h value. A Sunday reading is NOT directly confirmed by any source read (Wayback Machine blocked here).
- The station-level file behind the table is live (https://www.prix-carburants.gouv.fr/disponibilites-carburants/telecharger, served 2026-11-13T17:53Z, 9,835 rows) but holds only the current state, no history; it cannot be used after the fact.

## Facts
- Official table, national total: 12% (11 Nov 17h), 9% (12 Nov 17h), 8% (13 Nov 9h) — https://www.prix-carburants.gouv.fr/disponibilites-carburants (read 2026-11-13T17:54Z) "France - TOTAL | 12 % | 9 % | 8 %".
- Earlier official national readings: 10% (10 Nov 17h), 10% (11 Nov 9h), 12% (12 Nov 9h) — table read 2026-11-12T17:54Z, recorded in data/dossiers/2026-11-15/fr-fuel-grandest-15.md; Economie Matin for 11 Nov 9h — https://www.economiematin.fr/carburants-paradoxe-stocks-strategiques-rhin (published 2026-11-12 10:30, read 2026-11-12T17:53Z).
- Same table, regions 11 Nov 17h / 12 Nov 17h / 13 Nov 9h: Grand Est 21/19/18; Ile-de-France 17/15/11; Centre-Val de Loire 14/12/12; Hauts-de-France 13/8/8; Occitanie 13/11/9; Bourgogne-Franche-Comté 11/9/8; others 0–11 — same URL, read 2026-11-13T17:54Z.
- Own recomputation from the official station file at 2026-11-13T17:54Z with the published method: 797 of 9,789 stations = 8.1% nationally (diesel out at 4.5% of stations; the rest petrol-only); Grand Est 155/863 = 18.0%; Ile-de-France 11.2% — matches the 13 Nov 9h column, so the file served at 18:54 still reflected the 9h state.
- Method: a station is in difficulty if diesel is out, or all petrol grades it sells (SP95-E10, SP95, SP98) are out; E85 and LPG ignored; temporarily closed stations excluded; about 9,900 stations; data are operators' own declarations — same URL "Les données sont issues des déclarations effectuées par les exploitants de stations-service eux-mêmes."
- Earlier episode, official national figure: 13% on Mon 14 Sep, 8% on Sat 12 Sep; minister Maud Bregeon on 15 Sep: 10% of stations missing at least one fuel; TotalEnergies stations (price cap €1.99 petrol / €2.25 diesel since 22 Jul 2026) most affected — connaissancedesenergies.org AFP item above "86 % des stations concernées étaient en rupture d'au moins un carburant" (refers to TotalEnergies' share of stations in difficulty).
- Causes (no strike or blockade is cited by any source read): 10 million barrels of diesel released from strategic stocks from 2 Nov, released gradually until January 2027, suppliers must pass on discounts until 31 Mar 2027; rush to the pumps; in the east, depots supplied across/along the Rhine, whose low water limits barge loads — https://www.connexionfrance.com/driving/fuel-shortages-paris-and-eastern-france-worst-hit/828006 (published 2026-11-13 12:09, modified 15:26, read 2026-11-13T17:54Z) "As of 10:00 this morning, 8% of fuel stations across France were out of at least one type of fuel, according to the official government tracker." / "The 10 million barrels are being released gradually until January 2027."
- Departments: Bas-Rhin, Haut-Rhin, Territoire de Belfort and Paris each at least 25% on 13 Nov morning — same Connexion article "all seeing at least 25% of stations facing shortgages."
- Government: no further stock release planned; trade minister Serge Papin's office said a new release was "not on the agenda" — same Connexion article "Currently, there are no plans for additional reserves to be released".
- Rhine at Kaub (German federal waterways gauge): 68 cm at 2026-11-13T18:45+01:00 (state "normal"), up from 48 cm on 12 Nov evening and about 9–22 cm on 5–11 Nov; official forecast 73 cm on 14 Nov 07:00, 71 cm on 15 Nov 07:00, 72 cm on 16 Nov — https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/W/currentmeasurement.json and .../KAUB/WV/measurements.json (read 2026-11-13T17:55Z) "\"value\": 68.0, \"stateMnwMhw\": \"normal\"". Connexion: "The return of rain to the area next week should allow for normal freight to resume".
- Weekly pattern (third-party series, diesel only, not the official indicator): Pleinvoyant's daily 18:00 share of stations out of diesel, computed from the same ministry feed, peaked on Sunday in each of the last nine weeks: Sun 20 Sep 11.29% (Fri 18 Sep 6.77), 27 Sep 9.34 (8.89), 4 Oct 7.57 (4.39), 11 Oct 5.75 (4.02), 18 Oct 7.29 (3.73), 25 Oct 8.95 (4.97), 1 Nov 9.98 (5.83), 8 Nov 6.54 (Fri 6 Nov 4.44); latest Thu 12 Nov 4.04, Fri 13 Nov 2.62 — https://pleinvoyant.fr/ruptures/indice.csv?carburant=gazole (dataset https://www.data.gouv.fr/datasets/indice-quotidien-des-ruptures-de-carburant-stations-a-sec-en-france-et-par-departement, updated 2026-11-13, read 2026-11-13T17:56Z) "la valeur de chaque jour est celle de 18 h ; une fois figée (en général vers 18 h 15), elle ne change plus". Sunday/Friday ratio in those weeks: 1.05–1.95, median about 1.7. Its definitions differ (per fuel; a rupture open more than 30 days is dropped), so levels are not comparable with the official table; on the three days where both exist (10, 11, 12 Nov) the official national 17h figure was 2.2–2.3 times Pleinvoyant's diesel share.
- Inter-union general strike called for Tue 17 Nov (after the window) — https://www.connexionfrance.com/news/strikes-and-protests-in-france-in-november-2026/827359 (published 2026-11-10, via sweep; not reopened).

## Trend
- Official national: 10 (10 Nov 17h) → 10 (11 Nov 9h) → 12 (11 Nov 17h, holiday) → 12 (12 Nov 9h) → 9 (12 Nov 17h) → 8 (13 Nov 9h). Falling since the holiday peak; Grand Est and Ile-de-France both easing; Rhine recovering.
- Against that, every Sunday in the third-party diesel series is higher than the Friday before (median ratio about 1.7). Friday 13 Nov at 8% (9h) times a weekend rise lands around 8–10%; continued easing lands around 6–8%. Threshold 9% = the 12 Nov 17h level: YES means Sunday shortages are back at least to Thursday evening's level.

## Base rate
- No reference class in pipeline/reference-data applies. Own count, third-party diesel series: Sunday above the preceding Friday in 9 of 9 weeks (20 Sep–8 Nov; Pleinvoyant CSV above). Official-indicator Sundays: none on record.

## Schedule slip
- Class `none` (standing indicator, no scheduled event). Risk is publication: the table may not show a Sunday column (weekend updates seen for Sat 12 Sep and the 11 Nov holiday, Sunday never confirmed) — then void unless the ministry gives a Sunday figure.

## Risks
- No 15 Nov column (void risk), or the resolver reads too late (after Tue 17 Nov 17:00 the column rolls off); resolver must archive the page.
- Rhine back above 70 cm and the stock release flowing could push the national share down to 5–7% by Sunday regardless of the weekend effect.
- Station self-declarations lag; Sunday declarations may be fewer (stations update less), which could bias Sunday readings either way.
- Integer display: the table shows whole percentages (13 Nov 9h: 8.1% shown 8%); rounding vs truncation unknown — a true 8.6% might show 8% or 9%.
- Storm Charles (south-east France, up to 150 mm rain, per Connexion headline list) could disrupt deliveries locally.

## Sources
- https://www.prix-carburants.gouv.fr/disponibilites-carburants
- https://www.prix-carburants.gouv.fr/disponibilites-carburants/telecharger
- https://www.connexionfrance.com/driving/fuel-shortages-paris-and-eastern-france-worst-hit/828006
- https://www.connaissancedesenergies.org/afp/prix-eleves-des-carburants-aucun-risque-de-penurie-selon-bregeon-260915
- https://www.data.gouv.fr/api/1/datasets/?q=rupture+carburant&page_size=5
- https://pleinvoyant.fr/ruptures/indice.csv?carburant=gazole
- https://pleinvoyant.fr/ruptures/indice.csv?carburant=e10
- https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/W/currentmeasurement.json
- https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/WV/measurements.json
- data/dossiers/2026-11-15/fr-fuel-grandest-15.md (earlier readings)
- WebSearch: "stations en difficulté carburant dimanche 8 novembre 2026 pourcentage prix-carburants" (results only; no Sunday official figure found)

## Unreachable
- https://www.info.gouv.fr/index.php/actualite/prix-des-carburants-500-controles-dans-les-stations-service (HTTP 403)
- web.archive.org (blocked by egress policy, per previous dossier)
