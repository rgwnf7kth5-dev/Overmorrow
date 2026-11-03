# cz-diesel-cap-3
- **Claim:** The maximum price of diesel set by the Czech Finance Ministry for Thursday 5 November 2026 is higher than CZK 49.35 per litre.
- **Criterion:** YES if the maximum retail price of diesel valid on 5 Nov 2026, set by the Ministry of Finance on 4 Nov 2026 (Cenový věstník / announcement on mf.gov.cz), is higher than CZK 49.35 per litre. NO if it is CZK 49.35 or lower, or if the ministry sets no new cap for 5 Nov on 4 Nov.
- **Event window:** 2026-11-04T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague). Cap fixed at about 14:00 on 4 Nov; the Cenový věstník issue stays readable in the ministry's archive.
- **Threshold:** CZK 49.35 is the latest published cap at writing (the cap valid on 3 Nov). The cap for 4 Nov is published about 14:00 on 3 Nov and is not known at writing.
- **Written at:** 2026-11-02T18:30Z. Facts marked "per dossier" come from data/dossiers/2026-11-04/cz-diesel-cap-2.md and were not re-opened today.

## Schedule
- Decree 203/2026 Sb. § 2(4): the ministry publishes the caps every working day for the following day — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203 (read 2026-10-31T18:02Z, per dossier) "Ministerstvo financí každý pracovní den zveřejní maximální cenu benzinu na litr, maximální cenu nafty na litr". Wed 4 Nov is a working day.
- Regulation runs to 30 Nov — MF press release https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 2026-10-31T18:02Z, per dossier) "Toto opatření potrvá až do 30. listopadu 2026".
- Publication record: a cap every working day in October, 21 věstník issues (per dossier); the 2 Nov cap also appeared on time (below).

## Facts
- Cap for Tue 3 Nov: diesel 49.35, down CZK 0.10; petrol 43.65 — ČTK https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299 (published 2026-11-02 14:13, read 2026-11-02T18:18Z) "o deset haléřů na 49,35 koruny za litr". ČTK only: the ministry's page could not be opened today.
- Previous caps (Cenový věstník, per dossier): 27 Oct 48.96; 28–29 Oct 49.46; 30 Oct 49.69; 31 Oct–2 Nov 49.45; October range 47.23 to 49.69 — věstník 114/2026 https://mf.gov.cz/assets/attachments/2026-10-30_Cenovy-vestnik-114-2026.pdf (read 2026-10-31T18:05Z).
- October day-to-day changes (own arithmetic, per dossier): 10 falls, 11 rises, 0 unchanged; sd 0.31 CZK/l, mean absolute change 0.23.
- Formula, decree 172/2026 § 2, same structure in 203/2026: CPHM = (IØPHM + 2.50) × 1.21, where IØPHM is the mean of four 3-day averages, the ČEPRO, MOLIN and UIC wholesale offers including the calculation day and Platts Barges CIF NWE High for the previous 3 working days plus USD 90/t, rounded down to haléře — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172 (read 2026-10-31T18:01Z, per dossier) "pro aktuální a 2 předcházející pracovní dny".
- **Days compared (own reading; 28 Oct was a holiday):**
  - Cap for 3 Nov: wholesale offers 29 Oct, 30 Oct, 2 Nov; Platts 27, 29, 30 Oct.
  - Cap for 5 Nov: wholesale offers 2, 3, 4 Nov; Platts 30 Oct, 2, 3 Nov.
  - So each wholesale column changes by (3 Nov + 4 Nov − 29 Oct − 30 Oct)/3 and the Platts column by (2 Nov + 3 Nov − 27 Oct − 29 Oct)/3.
  - YES needs the mean of those four changes to be positive enough to add at least one haléř after rounding down. A uniform move of d CZK/l on the two new days against the two dropped days moves the cap by about 0.81 × d (own arithmetic: 2/3 × 1.21).
- Brent settlements (per dossier; Yahoo Finance BZ=F, read 2026-11-01T18:12Z): 27 Oct 113.88; 29 Oct 114.88; 30 Oct 113.43.
- Brent on Mon 2 Nov: about USD 108.40 at 09:58 GMT on hopes of US–Iran negotiations — Flux https://www.flux.live/reports/brent-falls-to-108-on-renewed-us-iran-negotiation-hopes/ (2026-11-02, as recorded in data/updates/2026-11-04.json; not re-opened).
- NY Harbor ULSD settlements, USD/gal (per dossier; a US proxy only): 27 Oct 4.7752; 29 Oct 4.7360; 30 Oct 4.6761.
- ČNB USD/CZK: 27 Oct 21.834; 29 Oct 21.862; 30 Oct 21.814 (per dossier).
- Excise on diesel 8.011 CZK/l through November (per dossier). No change between 3 and 5 Nov.
- Unknowns at writing: every 2–4 Nov input. The desk's 2 Nov research found no gasoil, ULSD or USD/CZK figure for 2 Nov (data/updates/2026-11-04.json), and none was sought today.
- Note: the 3 Nov cap fell only CZK 0.10 although the ULSD proxy fell 4.8% from 26 to 30 Oct, so Czech wholesale offers on 2 Nov may not have followed crude down. The offers themselves were not read.

## Base rate
- No class fits. Loose own count: October daily changes above. No count of two-working-day changes was made.

## Schedule slip
- `other-scheduled`: prior 0.07, own 2/13, rate 0.127 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-02T18:13Z). The decree obliges working-day publication and no sign of a change was found. A missing cap resolves NO.

## Risks
- Rounding down: a cap of exactly 49.35 resolves NO.
- US–Iran headlines, Russian refinery strikes or export limits can reverse the Monday fall on 3–4 Nov, and wholesale offers on 4 Nov enter on the same day.
- The result for 4 Nov, known about 14:00 on 3 Nov, says much about this claim; the morning should compare it with the threshold.
- Formula change: none announced for November (per dossier).

## Sources
- https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (could not be opened on 2 Nov: permission request timed out)
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203
- https://mf.gov.cz/assets/attachments/2026-10-30_Cenovy-vestnik-114-2026.pdf
- https://www.flux.live/reports/brent-falls-to-108-on-renewed-us-iran-negotiation-hopes/
- data/dossiers/2026-11-04/cz-diesel-cap-2.md
- data/updates/2026-11-04.json

## Red-team update (3 Nov ~05:25 CET)
Brent settled at $104.77 on 2 Nov (Seoul Economic Daily; percentage disputed) against the 108.40 intraday figure used by the evening; early 3 Nov about 105.25 (The National). Gasoil unread. Cap for 3 Nov confirmed 49.35 (ČTK). The days dropping from the averaging window are the dear 27 and 29 Oct.
