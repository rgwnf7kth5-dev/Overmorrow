# cz-diesel-max-12 (interval)
- **Claim:** The maximum retail price of diesel (B7) that the Czech Ministry of Finance sets in the Cenový věstník published on Wednesday 11 November 2026 as valid for Thursday 12 November 2026, in CZK per litre including VAT.
- **Criterion:** The "b) nafty" figure in the Cenový věstník issued on 11 Nov 2026 for 12 Nov (mf.gov.cz, or as reported by ČTK). Void if no cap for 12 Nov is published on 11 Nov.
- **Event window:** 2026-11-11T00:00+01:00 to 2026-11-11T23:59+01:00 (Europe/Prague)
- **Written at:** 2026-11-09T18:15Z
- **Note on the date:** the cap valid on Wed 11 Nov is published on Tue 10 Nov and is already claim cz-diesel-max-11 (edition 2026-11-11, data/dossiers/2026-11-11/cz-diesel-max-11.md). Following the series pattern (edition D claims the věstník published on D−1), this claim covers the věstník published on Wed 11 Nov for Thu 12 Nov.

## Schedule
- NV 203/2026 Sb. § 2(4): MF publishes the maximum price "každý pracovní den ... v Cenovém věstníku pro následující den"; regulation in force 1–30 Nov — https://www.zakonyprolidi.cz/cs/2026-203 (as cited in data/dossiers/2026-11-11/cz-diesel-max-11.md; not re-read tonight).
- 11 Nov is a Wednesday, a working day; 12 Nov a Thursday.
- Every working day since 1 Oct has had a věstník; latest: Cenový věstník 120/2026 of Mon 9 Nov — https://mf.gov.cz/assets/attachments/2026-11-09_Cenovy-vestnik-120-2026.pdf (downloaded 2026-11-09T17:58Z). ČTK reported it at 14:07 on 9 Nov.

## Facts
- Cap for Tue 10 Nov: diesel 46.70, petrol 41.04 CZK/l; previous cap (7–9 Nov) 47.28/41.42 — ČTK https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-v-utery-klesnou-nafta-bude-pod-47-kc-za-litr/2899499 (published 2026-11-09 14:07, read 2026-11-09T17:53Z) "proti dnešku se sníží o 58 haléřů na 46,70 koruny za litr"; Novinky https://www.novinky.cz/clanek/ekonomika-cenove-stropy-na-benzin-a-naftu-klesnou-i-v-utery-40607610 (13:25Z).
- Věstník 120 diesel index table (3-day moving averages, CZK/l): ČEPRO 36.34; MOLIN 36.08; UIC 36,075.67 per 1000 l; Platts + costs 35.91; mean 36.10 → (36.10 + 2.50) × 1.21 = 46.706, published 46.70 (own check) — věstník 120 PDF.
- Věstník 119 (7–9 Nov) columns for comparison: ČEPRO 36.89, MOLIN 36.52, UIC 36.52, Platts 36.39, mean 36.58 — data/dossiers/2026-11-11/cz-diesel-max-11.md.
- Published diesel caps (valid date: cap): 1 Oct 48.72 … 30 Oct 49.69; 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70 (full list in data/dossiers/2026-11-11/cz-diesel-max-11.md plus ČTK 9 Nov). Seven consecutive falls.
- Formula: cap = (mean of four 3-day averaged price indices + 2.50) × 1.21; wholesale offers over the current and two preceding working days, Platts over the three preceding working days — NV 203/2026 as summarised in cz-diesel-max-11.md; ČTK 9 Nov "na základě klouzavého třídenního průměru velkoobchodních cen".
- Oil backdrop (Yahoo chart API, read 2026-11-09T17:53Z, Monday values intraday at 17:43Z): Brent front month 6 Nov 98.32 → 9 Nov 93.52 USD/bbl; NY Harbor ULSD 4 Nov 4.2055, 5 Nov 4.3519, 6 Nov 4.3317, 9 Nov 4.2743 USD/gal; USD/CZK 9 Nov 21.72 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d (and BZ%3DF, CZK%3DX). A US proxy, not Platts NWE.
- The 12 Nov cap is two steps beyond the last cap known at the freeze (46.70 for 10 Nov): the 11 Nov cap (published 10 Nov afternoon) is unknown at the freeze.
- Novinky 9 Nov links the falls to US–Iran talks: "Tento vývoj podporuje mimo jiné probíhající jednání mezi Spojenými státy a Íránem".

## Consensus and surprise size
- Consensus: 46.70, the last cap published before the freeze (persistence; no analyst forecast of daily caps exists). The editor should re-anchor to the 11 Nov cap if it is published before forecasting closes (it will not be at 05:40 on 10 Nov).
- `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` (run 2026-11-09T17:53Z) → n=0, pooled_factor 1.235; no usable series scale.
- Scale, basis "published": sd of changes between consecutive published caps (MF věstníky), last 15 changes incl. −0.58 on 10 Nov: 0.365 CZK (rms 0.381); all 27 changes since 1 Oct: sd 0.368; last 10: 0.437 (own arithmetic). Scale used 0.36.
- `node scripts/refdata/models.mjs quantiles 46.70 0.36 1.6` → q10 45.962, q50 46.70, q90 47.438 (width 1.476 = 4.1 scales). Two steps ahead: if steps were independent, sd ≈ 0.36 × √2 ≈ 0.51; recent steps run in one direction (seven falls in a row).

## Base rate
- No class. Own count: of 27 steps since 1 Oct, 15 down, 12 up. The last seven steps were all falls (caps valid 31 Oct–10 Nov: −0.24, −0.10, −0.35, −0.21, −0.88, −0.63, −0.58). The only earlier run of five or more falls (1–8 Oct: −0.14, −0.04, −0.16, −0.41, −0.74) was followed by +0.06 (n=1, no inference).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` → 0.067 (own 4/60). Publication on every working day since 1 Oct; § 2(7) uses the last value if an input is missing.

## Board
- cz-fuel-cap-december (extension beyond 30 Nov): no government decision expected on 11 Nov; in October the regulation was extended on 26 Oct, about five days before expiry (edition 2026-10-29 text: "Vláda v pondělí prodloužila regulaci ... do 30. listopadu").

## Risks
- Oil reversal (US–Iran talks failing, Hormuz) on Tue–Wed; offers react within a day.
- Exactly how each column's days roll is the dossier writer's reading of the regulation.
- Two unknown steps at the freeze.

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-09_Cenovy-vestnik-120-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-v-utery-klesnou-nafta-bude-pod-47-kc-za-litr/2899499
- https://www.novinky.cz/clanek/ekonomika-cenove-stropy-na-benzin-a-naftu-klesnou-i-v-utery-40607610
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d
- data/dossiers/2026-11-11/cz-diesel-max-11.md
