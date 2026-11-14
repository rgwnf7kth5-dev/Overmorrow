# de-gas-16
- **Claim (interval):** AGSI+ puts Germany's gas storage fill level at the end of gas day 14 November 2026 (06:00 on Sunday 15 Nov) at … % (80% range q10–q90).
- **Criterion:** The "Full (%)" value for Germany (country aggregate) for gas day 14 Nov 2026 published on GIE's AGSI+ platform (agsi.gie.eu), to two decimals, as first read by the resolver from AGSI+ or from a page that reproduces the AGSI+ value with its gas day (gasspeicherkarte.de, Bundesnetzagentur gas dashboard) between 2026-11-15T17:00+01:00 and the resolves_by time. AGSI+ revisions made after that reading do not count. If no value for gas day 14 Nov has been published by 23:59 on 15 Nov 2026 (Berlin time) the claim is scored as not held (expected publication about 18:00 CET on 15 Nov).
- **Event window:** gas day 2026-11-14T06:00+01:00 to 2026-11-15T06:00+01:00; publication on 15 Nov (Europe/Berlin)
- **Deadline (resolves by):** 2026-11-17T05:00+01:00
- **Written at:** 2026-11-13T18:30Z

## Design note: why gas day 14, not 15
- A gas day runs 06:00–06:00. Gas day 15 Nov ends at 06:00 on 16 Nov and is published on the evening of 16 Nov, outside the Sunday window (event must close by 23:59 on 15 Nov). Gas day 14 Nov ends at 06:00 on Sunday 15 Nov and AGSI+ publishes it on Sunday evening, so the Sunday event is the publication of that figure — gasspeicherkarte.de methodology (https://gasspeicherkarte.de/methodik, read 2026-11-13T18:00Z) "Der Gastag läuft von 6 Uhr morgens bis 6 Uhr am Folgetag." / "AGSI+ veröffentlicht den neuen Gastag im Laufe des Nachmittags, und die Betreiber dürfen Werte rückwirkend korrigieren."

## Schedule
- AGSI+ publishes each gas day's country aggregate on the following afternoon/evening; data are operators' own REMIT reports — gasspeicherkarte.de methodology (above) "Die Speicherbetreiber melden ihre Tageswerte dort selbst; dieselbe Meldung erfüllt zugleich die Transparenzpflichten nach der REMIT-Verordnung."
- AGSI+ API needs a registered key: https://agsi.gie.eu/api?country=de&size=60 (read 2026-11-13T17:58Z) "Invalid or missing API key". The public mirror gasspeicherkarte.de re-reads a rolling seven-day window from AGSI+ twice daily and labels each day confirmed ("C"), estimated/provisional ("E") — its JSON series https://gasspeicherkarte.de/api/reihe?typ=country&code=DE (read 2026-11-13T18:00Z), the series used below. Latest day available at writing: gas day 11 Nov (gas day 12 Nov not yet mirrored at 19:00 CET on 13 Nov).
- Bundesnetzagentur's daily dashboard charts AGSI+ storage levels ("Quelle: AGSI+, Bundesnetzagentur Letzte Aktualisierung 13.11.2026, 08:56") — https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html (read 2026-11-13T17:58Z; later attempts returned HTTP 404).

## Facts
- Gas day 11 Nov: 57.68% full (142.67 TWh of 247.4 TWh working gas), withdrawal 976 GWh, −0.37 pt on the day, status confirmed; five-year average for the date 88.4% — https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland and https://gasspeicherkarte.de/ (read 2026-11-13T17:59–18:00Z) "57,7 % 142,7 von 247,4 TWh Arbeitsgasvolumen · Ausspeicherung (−0,37 Prozentpunkte)"; "Das ist weniger als das Mittel von 88,4 % an diesem Kalendertag in den fünf Jahren davor." Lowest for the date since records began in 2011 (position 1 of 16) — https://gasspeicherkarte.de/historie.
- Bundesnetzagentur situation report of 13 Nov: storage at 57.7% (142.7 TWh), "clearly lower" than in previous years; withdrawals within market and weather expectations, not a sign of shortage; a comparatively low level at the end of winter is likely; early-warning stage in force since 1 Jul 2025 — https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html (read 2026-11-13T17:58Z) "Die Füllstände der Speicher in Deutschland liegen derzeit bei 57,7 % (142,7 TWh)." Pipeline imports 17.5 TWh and LNG 1.4 TWh over 5–11 Nov (LNG terminals 35.5% utilised).
- Daily fill (%, AGSI+ via gasspeicherkarte, status C unless noted) and change: 14 Oct 60.49; 15 Oct 60.62; 16 Oct 60.72; 17 Oct 61.01; 18 Oct 61.15; 19 Oct 61.19; 20 Oct 61.07 (−0.12); 21 Oct 61.09; 22 Oct 61.15 (E); 23 Oct 61.30; 24 Oct 61.48 (E); 25 Oct 61.65; 26 Oct 61.65 (E); 27 Oct 61.73 (E, peak); 28 Oct 61.61 (−0.12); 29 Oct 61.33 (−0.28); 30 Oct 61.15 (−0.18); 31 Oct 61.00 (−0.15); 1 Nov 61.02 (+0.02); 2 Nov 60.81 (−0.21); 3 Nov 60.56 (−0.25); 4 Nov 60.25 (−0.31); 5 Nov 59.97 (−0.28); 6 Nov 59.54 (−0.43); 7 Nov 59.21 (−0.33); 8 Nov 58.95 (E, −0.26); 9 Nov 58.50 (−0.45); 10 Nov 58.05 (−0.45); 11 Nov 57.68 (−0.37) — https://gasspeicherkarte.de/api/reihe?typ=country&code=DE (read 2026-11-13T18:00Z). These are current (possibly revised) values, not first prints.
- Mean daily change over the last five gas days (7–11 Nov): −0.372 pt; last seven: −0.36 pt.
- Same dates last year: 74.67% (11 Nov 2025), 74.68% (14 Nov 2025), 74.66% (15 Nov 2025) — same series.
- INES (storage operators' association) update of 10 Nov: 61% on 1 Nov, missing the 70% target; normal and mild winters covered, an extreme 2010-type winter would leave gaps of up to 6.6 TWh a month in Jan–Mar 2027 — https://wirtschaftsjournal.com/bei-58-5-prozent-fuellstand-sieht-die-netzagentur-die/ (published 2026-11-10 22:43Z, read 2026-11-13T18:01Z) "Die Unterdeckung erreicht im Modell bis zu 6,6 TWh innerhalb eines Monats". (INES's own site unreachable.)
- Government: draft law to keep coal and oil grid-reserve plants (>8 GW) on standby, usable only if the gas "alarm" or "emergency" stage is declared — Brussels Signal https://brusselssignal.eu/2026/11/germany-readies-coal-and-oil-plants-as-backup-for-gas-emergency/ (published 2026-11-13 16:38Z, read 2026-11-13T18:01Z; detail from the sweep, article body paywalled).
- Weather: mean of daily mean temperatures in Berlin, Frankfurt, Munich, Hamburg, Düsseldorf: 5.4–6.7 °C on 9–12 Nov; forecast 5.0 °C on 13 Nov, 4.4 °C on Sat 14 Nov, 4.9 °C on Sun 15 Nov, 7.8 °C on 16 Nov — Open-Meteo https://api.open-meteo.com/v1/forecast?latitude=52.52,50.11,48.14,53.55,51.23&longitude=13.40,8.68,11.58,9.99,6.78&daily=temperature_2m_mean,... (read 2026-11-13T18:01Z). Slightly colder than the last four days (more heating demand), but 14 Nov is a Saturday (lower industrial demand).

## Central value (trend extrapolation) and surprise size
- No analysts' consensus exists. Consensus-like value by rule: last published gas day + h × mean daily change of the last five gas days. From gas day 11 (57.68) to gas day 14 (h = 3): 57.68 − 3 × 0.372 = 56.56%.
- Scale: sd of the 2-day-ahead error of that rule over the same season last winter (target days 15 Oct–31 Dec 2025, n=77): 0.41 pt (3-day ahead: 0.61; whole withdrawal season Nov 2025–Mar 2026, 2-day: 0.45, n=151; 25 Oct–11 Nov 2026, 2-day: sd 0.23, mean error −0.18, i.e. withdrawals have been accelerating). Own computation from https://gasspeicherkarte.de/api/reihe?typ=country&code=DE (AGSI+ data). The morning freeze should have gas day 12 (published ~18:00 CET 13 Nov) so the horizon is 2 days; if gas day 12 is missing at the freeze, use the 3-day figure 0.61.
- Series are current values, which may include small operator revisions; first-print noise is not included in the scale.

## Base rate
- None applicable (no reference class in pipeline/reference-data). Own count: 14 of the last 15 gas days (28 Oct–11 Nov) were net withdrawals.

## Schedule slip
- Slip class `none` (daily data publication, not a scheduled event). AGSI+ has published every gas day since 2011; delay of a day's aggregate past midnight is possible when operators report late (status "E" days), not quantified.

## Risks
- Colder-than-forecast weekend or an outage of Norwegian supply raises withdrawals; a mild spell or high LNG send-out lowers them.
- Weekend effect: lower industrial demand on Saturday 14 Nov.
- Provisional ("E") values may be published first and corrected later; the criterion uses the first value read.
- Resolver must read on 15–16 Nov: AGSI+ needs a key for the API; gasspeicherkarte.de overwrites its seven-day window when operators revise.

## Sources
- https://agsi.gie.eu/api?country=de&size=60
- https://agsi.gie.eu/
- https://gasspeicherkarte.de/
- https://gasspeicherkarte.de/gasspeicher-fuellstand-deutschland
- https://gasspeicherkarte.de/historie
- https://gasspeicherkarte.de/methodik
- https://gasspeicherkarte.de/api/reihe?typ=country&code=DE
- https://www.bundesnetzagentur.de/DE/Gasversorgung/aktuelle_gasversorgung/start.html
- https://wirtschaftsjournal.com/bei-58-5-prozent-fuellstand-sieht-die-netzagentur-die/
- https://brusselssignal.eu/2026/11/germany-readies-coal-and-oil-plants-as-backup-for-gas-emergency/
- https://api.open-meteo.com/v1/forecast (five German cities, past 10 days and 5-day forecast)
- WebSearch: "Gasspeicher Füllstand Deutschland November 2026 Prozent täglich Ausspeicherung"

## Unreachable
- AGSI+ API (key required; not used)
- https://energie.ines-speicher.eu/ (CONNECT 502)
- https://www.gasinfo.de/ (domain for sale)
- Bundesnetzagentur page returned HTTP 404 on re-reads after the first successful read
