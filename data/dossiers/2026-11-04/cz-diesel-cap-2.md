# cz-diesel-cap-2
- **Claim:** The maximum price of diesel set by the Czech Finance Ministry for Wednesday 4 November 2026 is lower than the maximum price it set for Tuesday 3 November 2026.
- **Criterion:** YES if the maximum retail price of diesel valid on 4 Nov 2026, published by the Ministry of Finance on 3 Nov 2026 (Cenový věstník / announcement on mf.gov.cz), is lower than the maximum retail price of diesel valid on 3 Nov 2026 that the ministry published on 2 Nov 2026. NO if it is equal or higher, or if the ministry publishes no new cap for 4 Nov on 3 Nov.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-03T23:59:00+01:00 (Europe/Prague). Cap fixed at 14:00 on 3 Nov; Cenový věstník issue and ČTK report shortly after. The comparison figure (cap for 3 Nov) is published on 2 Nov at about 14:00 and is not known at writing.
- **Written at:** 2026-11-01T18:20Z. Read times are 2026-11-01 between 17:55Z and 18:15Z unless stated; facts marked "read 2026-10-31" come from the 3 Nov edition dossier data/dossiers/2026-11-03/cz-diesel-cap-2.md and were not re-opened.

## Schedule
- Legal basis for November: government decree No. 203/2026 Sb. (regulation 1–30 Nov 2026). § 2(4): "Ministerstvo financí každý pracovní den zveřejní maximální cenu benzinu na litr, maximální cenu nafty na litr a aritmetické průměry IØPHM v Cenovém věstníku pro následující den." — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203 (read 2026-10-31T18:02Z). Tue 3 Nov is a working day, so a cap for Wed 4 Nov is due on 3 Nov.
- Current cap re-checked: MF page https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (read 2026-11-01T17:58Z) "Maximální přípustná cena nafty: 49,45 Kč s DPH / litr"; "Účinnost: 31. října 2026 od 00:00 – 2. listopadu do 24:00"; "Termín stanovení: 30. října 2026 ve 14:00 formou sdělení Ministerstva financí".
- Cabinet extension to 30 Nov — MF press release https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 2026-10-31T18:02Z) "Ministerstvo financí bude každý pracovní den vyhlašovat maximální ceny benzinu a nafty pro následující den … Toto opatření potrvá až do 30. listopadu 2026".
- Publication record: MF published a cap every working day in October (21 věstník issues found, read 2026-10-31).

## How the cap is set (formula and lag)
- CPHM = (IØPHM + RMPHM) × 1.21; RMPHM = margin CZK 2.50/l. IØPHM = mean of four 3-day moving averages: wholesale offer prices (incl. excise, excl. VAT) of ČEPRO, MOLIN and ORLEN Unipetrol (UIC) "pro aktuální a 2 předcházející pracovní dny", and "Platts Barges CIF NWE High za předcházející 3 pracovní dny navýšený o přirážku 90 USD/t pro naftu", at the ČNB rate and 845 kg/m³; rounded down to whole haléře — decree 172/2026 § 2 https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172 (read 2026-10-31T18:01Z); same structure in 203/2026.
- Lag (own reading of § 2(2)): three of the four inputs are wholesale offers that include the day of calculation; the fourth is a Platts quote that lags by one working day. Each input is a 3-day average, so one day's wholesale move enters the cap at 1/3 × 1/4 = 1/12 weight per day and stays for three working days.
- **Days entering the two caps compared (own reading):**
  - Cap for 3 Nov (set Mon 2 Nov): wholesale offers 29 Oct, 30 Oct, 2 Nov; Platts 27, 29, 30 Oct (28 Oct was a public holiday).
  - Cap for 4 Nov (set Tue 3 Nov): wholesale offers 30 Oct, 2 Nov, 3 Nov; Platts 29, 30 Oct, 2 Nov.
  - So each wholesale column changes by (3 Nov offer − 29 Oct offer)/3 and the Platts column by (2 Nov Platts − 27 Oct Platts)/3. The 4 Nov cap is lower whenever the mean of those four changes is negative enough to move the rounded-down result by at least one haléř.
- Excise for diesel 8.011 CZK/l throughout November (MF 26 Oct, above). No excise change between 3 and 4 Nov.

## Facts — October daily diesel caps (Cenový věstník, MF; with VAT, CZK/l; IØPHM in brackets)
Source: Cenový věstník PDFs listed at https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik, e.g. https://mf.gov.cz/assets/attachments/2026-10-30_Cenovy-vestnik-114-2026.pdf (read 2026-10-31T18:04–18:06Z).
- 1 Oct 48.72 (ČTK; not checked in the věstník) · 2 Oct 48.58 (37.65) · 3–5 Oct 48.54 (37.62) · 6 Oct 48.38 (37.49) · 7 Oct 47.97 (37.15) · 8 Oct 47.23 (36.54) · 9 Oct 47.29 (36.59) · 10–12 Oct 47.67 (36.90) · 13 Oct 48.36 (37.47) · 14 Oct 48.61 (37.68) · 15 Oct 48.63 (37.69) · 16 Oct 48.77 (37.81) · 17–19 Oct 48.89 (37.91) · 20 Oct 48.67 (37.72) · 21 Oct 48.61 (37.68) · 22 Oct 48.60 (37.67) · 23 Oct 48.70 (37.75) · 24–26 Oct 48.69 (37.74) · 27 Oct 48.96 (37.97) · 28–29 Oct 49.46 (38.38) · 30 Oct 49.69 (38.57) · 31 Oct–2 Nov 49.45 (38.37; ČEPRO 38.49 / MOLIN 38.36 / UIC 38.36 / Platts 38.28) — věstník 114/2026 "Sdělení Ministerstva financí o vyhlášení maximálních cen pohonných hmot na období 31. října 2026 až 2. listopadu 2026 … nafty … 49,45 Kč s DPH / litr."
- **Day-to-day change distribution (own arithmetic, 21 changes from 1 Oct to 31 Oct):** down 10 (48%), unchanged 0 (0%), up 11 (52%). sd of changes 0.31 CZK/l; mean absolute change 0.23; smallest moves −0.01 (twice) and +0.02. No cap was unchanged from the previous one in October, although ties are possible because of rounding down.
- **Runs:** falls 2–8 Oct (5 in a row), rises 9–17 Oct, mixed 20–24 Oct, rises 27–30 Oct, fall on 31 Oct (−0.24). Of the 9 falls with a known preceding change, 6 followed a fall the day before (own count from the series above).
- ČTK on the 30 Oct caps: diesel 49.45 (−0.24), Natural 95 43.87 (−0.39) — https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-o-vikendu-a-v-pondeli-klesnou/2893299 (published 2026-10-30 14:11, read 2026-10-31T17:59Z) "Cenové stropy na pohonné hmoty o víkendu a v pondělí klesnou".

## Facts — wholesale inputs (proxies)
- Implied input moves already in the published columns (own arithmetic, ×3 rule): Platts Thu 29 Oct minus Fri 23 Oct = −1.41 CZK/l; Tue 27 Oct minus Thu 22 Oct = +0.36. Wholesale offers Fri 30 Oct minus Mon 26 Oct: ČEPRO −0.12, MOLIN −0.42, UIC −0.42 (from věstník 113 and 114).
- NY Harbor ULSD futures (HO=F, USD/gal, daily settlement) — Yahoo Finance https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (read 2026-11-01T18:12Z): 23 Oct 4.9842; 26 Oct 4.9120; 27 Oct 4.7752; 28 Oct 4.8152; 29 Oct 4.7360; 30 Oct 4.6761. Note: the 3 Nov edition dossier recorded 30 Oct as 4.7905, an intraday value read before settlement; the final is 4.6761. 30 Oct vs 27 Oct −2.1%; 30 Oct vs 26 Oct −4.8% (own arithmetic). US contract, a proxy only for the NWE barge quote in the formula.
- Brent (BZ=F, USD/bbl, settlement) — https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d (read 2026-11-01T18:12Z): 26 Oct 115.81; 27 Oct 113.88; 29 Oct 114.88; 30 Oct 113.43.
- ČNB USD/CZK fixing: 27 Oct 21.834; 29 Oct 21.862; 30 Oct 21.814 (cnb.cz text export, read 2026-10-31T18:05Z).
- Unknowns at writing: Platts for Mon 2 Nov; wholesale offers for Mon 2 Nov and Tue 3 Nov; the cap for 3 Nov itself (published 2 Nov 14:00). The cap for 3 Nov will already reflect the drop of the 26 Oct Platts day (HO proxy 30 Oct vs 26 Oct −4.8%).
- Rough sizing (own arithmetic): if Platts on 2 Nov stayed at the 30 Oct level, the Platts column change for the 4 Nov cap would be about −2.1% of a pre-excise price near 30 CZK/l ≈ −0.6 CZK/l, /3 ≈ −0.21 on that column, /4 ≈ −0.05 on IØPHM, ≈ −0.06 on the cap. The wholesale columns' change depends on 3 Nov offers vs 29 Oct offers, neither known.
- Background: Middle East war since late February with the Strait of Hormuz blocked (ČTK 30 Oct, above); Russian diesel export ban extended to end-January and Ukrainian drone strike on the Ufa refinery 30–31 Oct (desk running notes, not verified here).

## Base rate
- No class in pipeline/reference-classes.json fits a daily regulated-price direction. Loose own count from the series above: 10 of 21 October day-to-day changes were falls, 11 rises, 0 unchanged.

## Schedule slip
- `other-scheduled`: 0.07 prior, own 1/11, rate 0.084 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-01T18:10Z). The decree obliges publication every working day and MF published on every October working day. A missing 3 Nov publication resolves NO.

## Risks
- Rounding down to whole haléře: an unchanged rounded cap resolves NO.
- Monday and Tuesday news (Middle East, Russian refineries, export bans) feeds directly into the 3 Nov wholesale offers, which carry 3/12 of the weight of the day's change.
- The comparison base (3 Nov cap) is unknown; a large fall on 2 Nov does not by itself imply another fall on 3 Nov, since a different pair of days drops out.
- Formula change: none announced for November.

## Sources
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik and issues 91–114/2026
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559
- https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-o-vikendu-a-v-pondeli-klesnou/2893299
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d
- data/dossiers/2026-11-03/cz-diesel-cap-2.md (October series, formula)
