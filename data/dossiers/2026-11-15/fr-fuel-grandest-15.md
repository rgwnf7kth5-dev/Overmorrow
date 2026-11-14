# fr-fuel-grandest-15
- **Claim:** The official share of service stations in the Grand Est region short of at least one fuel (diesel and/or all petrol grades) on Saturday 14 November 2026 is 23% or more.
- **Criterion:** YES if the regional table "Stations en difficulté (ruptures d'au moins un produit gazole et/ou essence) par région" on https://www.prix-carburants.gouv.fr/disponibilites-carburants shows a Grand Est value dated 14 Nov 2026 of 23% or more. If the table shows more than one 14 Nov value (e.g. 9h and 17h), the latest-timed one counts. If the table carries no 14 Nov column, a Grand Est figure for 14 Nov attributed to the government/ministry (the same indicator) and reported by AFP, Le Monde, franceinfo, BFMTV or France 3 Grand Est counts. NO if that 14 Nov figure is below 23%. Void if no official Grand Est figure for 14 Nov appears by the resolves_by time.
- **Event window:** 2026-11-14T00:00+01:00 to 2026-11-14T23:59+01:00 (Europe/Paris)
- **Evidence expected:** table updates seen at 9h and 17h; Saturday 17h value expected about 2026-11-14T17:00–18:00+01:00 (evidence_at 2026-11-14T18:00+01:00)
- **Deadline (resolves by):** 2026-11-15T12:00+01:00
- **Written at:** 2026-11-12T18:05Z

## Schedule
- The figure is a standing official indicator, not an event: the government fuel-price site (economy ministry, open data from station operators' own declarations) publishes a regional table of the share of stations in difficulty, with the last three readings — https://www.prix-carburants.gouv.fr/disponibilites-carburants (read 2026-11-12T17:54Z) "Ce tableau fournit pour chaque région les valeurs en pourcentage des stations en difficutlés ... le taux pour les 3 jours précédents".
- Column headers read on 12 Nov: "10 nov. à 17h | 11 nov. à 17h | 12 nov. à 9h00". 11 Nov is a public holiday (Armistice) and has a 17h value, so the table was updated on a non-working day. A Saturday update is NOT confirmed by any source read (Wayback Machine blocked from this environment).
- The underlying station-level CSV is live (download https://www.prix-carburants.gouv.fr/disponibilites-carburants/telecharger, served 2026-11-12T17:54Z, 9,829 stations); station declarations are made on weekends too: Selectra counted 102 diesel shortages declared on Sat 31 Oct and 110 on Sun 1 Nov — https://selectra.info/energie/actualites/marche/gazole-rupture-stations-2-25-apres-baisse (published 2026-11-04T08:40+01:00, read 2026-11-12T17:55Z) "526 ont déclaré leur rupture depuis samedi 31 octobre : 102 ce jour-là, 110 dimanche et 314 lundi".

## Facts
- Official regional table, Grand Est: 20% (10 Nov 17h), 21% (11 Nov 17h), 22% (12 Nov 9h); France total 10%, 12%, 12%; Ile-de-France 15%, 17%, 19%; Centre-Val de Loire 13%, 14%, 14% — https://www.prix-carburants.gouv.fr/disponibilites-carburants (read 2026-11-12T17:54Z) "Grand Est | 20 % | 21 % | 22 %".
- Own recomputation from the official CSV at 2026-11-12T17:54Z with the published method: Grand Est 193 of 863 stations = 22.4%; France 11.6% (script on the downloaded file; matches the table's 22%).
- Method: a station is "in difficulty" if diesel is out, or all petrol grades it sells (SP95-E10, SP95, SP98) are out; E85 and LPG ignored; closed stations excluded; about 9,900 stations — https://www.prix-carburants.gouv.fr/disponibilites-carburants "Une station est dite en rupture lorsqu’au moins un type de carburant (essence ou gazole) est manquant."
- 11 Nov 9h: 19% of Grand Est stations short of at least one fuel, 10% nationally, "selon les données officielles"; Coopérative U CEO Dominique Schelcher said several north-east depots were out — https://www.economiematin.fr/carburants-paradoxe-stocks-strategiques-rhin (published 2026-11-12T10:30+01:00, read 2026-11-12T17:53Z) "À 9 heures, selon les données officielles, 19% des stations du Grand Est subissent au moins une rupture".
- Cause cited: release of 10 million barrels of diesel from strategic stocks from 2 Nov (G7 decision) cut the average diesel price to €2.20 on 9 Nov (record €2.41 on 20 Sep) and accelerated sales; the low Rhine blocks barge resupply of north-east depots — same source "Le niveau bas du Rhin ne permet pas le réapprovisionnement habituel alors que les ventes ont accéléré depuis le 2 novembre".
- Government: minister Serge Papin said on 10 Nov (RMC) further stock releases "s'il le faut"; on 11 Nov his office said a new release "n'est pas à l'ordre du jour" — same source.
- Rhine at Kaub (German federal waterways gauge): about 9–22 cm at 19:00 each day 5–11 Nov; 48 cm at 2026-11-12T18:45+01:00 (state "low"); official forecast 63 cm on 13 Nov 07:00, 78 cm on 14 Nov 07:00, about 80 cm thereafter — https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/W/currentmeasurement.json and .../KAUB/WV/measurements.json (read 2026-11-12T17:56Z). Whether and how fast barges reach Grand Est depots once the level rises is not established by any source read.
- Earlier episode: 15 Sep 2026, 9h, 14% of Grand Est stations in difficulty, France 10% — https://bourseinside.fr/economie/carburant-pourquoi-1-station-sur-10-est-en-rupture-et-comment-ce-chiffre-cache-une-realite-bien-pire-dans-votre-region/ (published 2026-09-16T10:35Z, read 2026-11-12T17:54Z) "14 % dans le Grand Est".
- Weekly pattern: on Sunday 25 Oct evening 17.1% of active stations nationally lacked diesel or E10, the highest since 22 Sep (Selectra measurement, not the official table) — https://selectra.info/energie/actualites/marche/station-sans-gazole-dimanche-soir-1er-novembre (published 2026-10-30T06:35+01:00, read 2026-11-12T17:55Z).

## Trend
- Grand Est official readings: 20 (10 Nov 17h) → 19 (11 Nov 9h) → 21 (11 Nov 17h) → 22 (12 Nov 9h). 17h-to-17h +1 point per day; 9h-to-9h +3 points (11→12 Nov); 9h readings ran below the previous and same day's 17h on 11 Nov but not on 12 Nov.
- Straight continuation would give about 24–26% on Saturday 17h; the forecast Rhine rise (about 15 cm → about 78 cm by Saturday morning) pulls the other way. Threshold 23% sits between "flat at today's level" (22) and the straight trend.

## Base rate
- No reference class in pipeline/reference-data applies. Own count from this series: 2 of 3 changes between the four readings 10–12 Nov were rises (n=3). Too short for a rate.

## Schedule slip
- Class `none` (standing indicator, no scheduled event). Risk is publication, not slippage: the table may not be refreshed on Saturday (unconfirmed); then the claim is void unless a government Saturday figure is reported.

## Risks
- Saturday publication of the table not confirmed (strongest risk: void).
- Rhine recovery and truck/rail supply could reverse the trend quickly; the government could release more stock or ration.
- Station self-declarations may lag reality; weekend demand may raise shortages.
- Integer rounding: the table shows whole percentages (12 Nov 9h: own recomputation 22.4%, shown 22%); whether it rounds or truncates is unknown.

## Sources
- https://www.economiematin.fr/carburants-paradoxe-stocks-strategiques-rhin
- https://www.prix-carburants.gouv.fr/
- https://www.prix-carburants.gouv.fr/disponibilites-carburants
- https://www.prix-carburants.gouv.fr/disponibilites-carburants/telecharger
- https://bourseinside.fr/economie/carburant-pourquoi-1-station-sur-10-est-en-rupture-et-comment-ce-chiffre-cache-une-realite-bien-pire-dans-votre-region/
- https://selectra.info/energie/actualites/marche/gazole-rupture-stations-2-25-apres-baisse
- https://selectra.info/energie/actualites/marche/station-sans-gazole-dimanche-soir-1er-novembre
- https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/W/currentmeasurement.json
- https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/WV/measurements.json?start=P1D
- https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/KAUB/W/measurements.json?start=P7D

## Unreachable
- https://media.roole.fr/quotidien/au-volant/penuries-de-carburant-pourquoi-le-taux-de-rupture-a-grimpe-ces-derniers-jours (HTTP 429, refused)
- https://www.economie.gouv.fr/actualites/carte-des-stations-de-carburant-connaissant-des-difficultes-dapprovisionnement-sur-au-moins-un-produit-essence-ou-gazole (HTTP 403, refused)
- web.archive.org snapshots of the table (blocked by egress policy)
