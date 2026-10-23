# cz-babis-algeria-arrival-noon

**Claim:** By 12:00 on 26 October 2026, PM Andrej Babiš has arrived in Algeria for his official visit, as reported by the Government Office or ČTK.
**Criterion:** YES if a Government Office or ČTK report time-stamped ≤12:00 CET 26 Oct says Babiš has landed / is in Algeria; a later report giving an arrival time before 12:00 also counts. Cancellation, postponement or arrival after 12:00 = NO.
**Deadline:** 2026-10-26T12:00+01:00
**Written at:** 2026-10-23T19:10:00+02:00

## Schedule
- Government statement (quoted by Neovlivní, 23 Oct): "Předseda vlády Andrej Babiš navštíví ve dnech 26. a 27. října 2026 Alžírsko"; "Premiéra doprovodí početná podnikatelská delegace." https://neovlivni.cz/premier-jede-do-alzirska-pro-plyn-potrebuje-ho-i-agrofert/
- ČTK via Respekt, 22 Oct 15:53: delegation departs Monday morning, so Babiš misses the regular Monday cabinet meeting; day 1 meetings with President Tebboune and PM Ghrieb, opening of Czech–Algerian business forum with Havlíček; day 2 visit to tram maker Setram. https://www.respekt.cz/informacni-servis/babis-s-havlickem-miri-na-sever-afriky-v-alzirsku-budou-dva-dny-2026-10-22-15-53
- No departure time published (neither source gives one).

## Facts
- Aktuálně (~20 Oct) earlier said the trip would start Sunday; later sources (22–23 Oct) say Monday (sweep cz.json). https://zpravy.aktualne.cz/domaci/mapa-pavla-cekaji-dve-posledni-cesty-a-babis-zamiri-do-exotiky-kterou-odkladal/r~aaa29a259f5a49ec8f229180d65d426a/
- Last Czech government visit to Algeria: 2022, minister Síkela, on gas (Respekt/ČTK).
- ČEZ already imports Algerian gas, ~2 % of Czech consumption (e15/Ekonomický deník search results). https://www.e15.cz/byznys/prumysl-a-energetika/z-alzirska-pritekl-do-ceska-prvni-plyn-pokryje-dve-procenta-spotreby-1419797
- Algeria and Czechia are on the same clock from 25 Oct (both UTC+1; Algeria has no DST).

## Base rate
- No reference class in pipeline files for "arrival before noon". null.

## Schedule slip
- summit-or-visit: 0.08 (estimate, `slip.mjs summit-or-visit`). Babiš cancelled a Saudi trip and moved Vietnam to 5–9 Dec (Aktuálně, sweep), showing his trips do move; this one is officially announced with dates.

## Markets
markets.mjs search "Czech", "Babis", "Prague", "Algeria gas", "Mayor of Prague" (read 2026-10-23T17:07:00Z): no matching market. Nearest: Polymarket 'Next Mayor of Prague' (https://polymarket.com/event/next-mayor-of-prague-2026): Hlaváček Yes 0.935, Portlík 0.026, Scheinherr 0.0255, Hušbauer 0.003, others 0.0005. Tipsport/Fortuna pages not checked (no web budget left); no Czech bookmaker market on this question found in searches.

## Risks
- Late-morning departure → landing after 12:00.
- No time-stamped report before noon even if he has landed (resolver needs timestamp evidence; Babiš usually posts on social media).
- Domestic event (budget, coalition row) delaying departure.

## Sources
- https://www.respekt.cz/informacni-servis/babis-s-havlickem-miri-na-sever-afriky-v-alzirsku-budou-dva-dny-2026-10-22-15-53
- https://neovlivni.cz/premier-jede-do-alzirska-pro-plyn-potrebuje-ho-i-agrofert/
- https://zpravy.aktualne.cz/domaci/mapa-pavla-cekaji-dve-posledni-cesty-a-babis-zamiri-do-exotiky-kterou-odkladal/r~aaa29a259f5a49ec8f229180d65d426a/ (via sweep)
- https://www.e15.cz/byznys/prumysl-a-energetika/z-alzirska-pritekl-do-ceska-prvni-plyn-pokryje-dve-procenta-spotreby-1419797 (search result)
