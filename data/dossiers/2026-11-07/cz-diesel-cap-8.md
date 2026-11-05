# cz-diesel-cap-8
- **Claim:** The maximum price of diesel set by the Czech Finance Ministry on Friday 6 November 2026, valid from Saturday 7 November, is lower than CZK 48.50 per litre.
- **Criterion:** YES if the maximum retail price of diesel valid on 7 Nov 2026, set by the Ministry of Finance on 6 Nov 2026 (Cenový věstník / announcement on mf.gov.cz), is lower than CZK 48.50 per litre. NO if it is CZK 48.50 or higher, or if the ministry sets no new cap on 6 Nov.
- **Deadline:** 2026-11-06T23:59:00+01:00. Cap fixed about 14:00 on 6 Nov.
- **Threshold:** CZK 48.50, chosen as a round figure below the latest cap. The cap for 6 Nov comes about 14:00 on 5 Nov.
- **Written at:** 2026-11-04T17:58:00Z

## Schedule
- Friday publication: decree 203/2026 requires publication every working day; Fri 6 Nov is one. The Friday cap applies on Saturday and § 2(5) carries it over non-working days to the next working day — data/dossiers/2026-11-03/cz-diesel-cap-1.md and 2026-11-06/cz-diesel-cap-5.md (per dossier). Precedent: 31 Oct–2 Nov 49.45, set on Fri 30 Oct.
- Latest notice — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (updated 4.11.2026 14:00, read 2026-11-04T17:51Z) "Termín stanovení: 4. listopadu 2026 ve 14:00"; regulation runs 1–30 Nov.

## Facts
- Cap for Thu 5 Nov: diesel 48.79, down 21 haléřů; petrol 42.64, down 40 — https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-ve-ctvrtek-klesne-pod-49-kcl-benzin-pod-43-kcl-/2893299 (published 2026-11-04 14:15, read 2026-11-04T17:49Z) "o 21 haléřů na 48,79 korun za litr".
- Recent caps: 30 Oct 49.69; 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79 — data/dossiers/2026-11-06/cz-diesel-cap-5.md (per dossier) and https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-ve-ctvrtek-klesne-pod-49-kcl-benzin-pod-43-kcl-/2893299. Regime low 47.23 on 8 Oct.
- Formula: (mean of four 3-day averages + 2.50) × 1.21: ČEPRO, MOLIN and UIC wholesale offers including the calculation day, and Platts Barges CIF NWE High for the previous 3 working days plus USD 90/t; rounded down — per dossier cz-diesel-cap-5, decree 172/2026 § 2.
- **Days compared (own reading):** cap for 5 Nov uses wholesale 2, 3, 4 Nov and Platts 30 Oct, 2, 3 Nov. Cap for 7 Nov uses wholesale 4, 5, 6 Nov and Platts 3, 4, 5 Nov. All of 2 Nov and the dear 30 Oct leave; 4 Nov enters both.
- NY Harbor ULSD closes, USD/gal, US proxy: 29 Oct 4.736; 30 Oct 4.7905; 2 Nov 4.4215; 3 Nov 4.5306; 4 Nov 4.2010 (latest print, not confirmed settlement) — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d (read 2026-11-04T17:51Z).
- Brent, USD: 30 Oct 117.63; 2 Nov 104.76; 3 Nov 103.59; 4 Nov 94.27 (latest print) — https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=10d&interval=1d (read 2026-11-04T17:51Z).
- Reason — https://www.ceskenoviny.cz/zpravy/ropa-prudce-zlevnuje-brent-klesl-pod-100-dolaru-za-barel/2897451 (published 2026-11-04 18:19, read 2026-11-04T17:54Z) "poprvé za čtyři týdny sestoupila pod psychologicky důležitou hranici 100 dolarů"; investors weigh the Democrats' election win and Trump's statement that the US does not plan to attack Iran soon.
- Rough estimate, own arithmetic: if ULSD held 4.20 on 5–6 Nov, the proxy average falls about USD 0.27/gal between the two caps, about CZK 1.8/l with VAT at USD/CZK near 21 (rate assumed from EUR/CZK about 24.3, not read). The last step passed through about 45% of the proxy move (-0.21 against about -0.46). At that rate the cap lands near 47.9–48.0. Very approximate.
- October daily changes: sd 0.31, mean absolute 0.23 (per dossier cz-diesel-cap-5).
- Excise on diesel 8.011 CZK/l through November — https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-ve-ctvrtek-klesne-pod-49-kcl-benzin-pod-43-kcl-/2893299.
- Unknown at writing: Czech wholesale offers, gasoil cracks, Platts values, and all inputs for 5–6 Nov. No European gasoil figure was readable.
- Retail diesel averaged CZK 48.21 in the week to about 3 Nov — a fuel-price commentary (link in the signals file) (read 2026-11-04T17:55Z), below the cap.

## Base rate
- No class fits. Previous-edition form: cz-diesel-cap-5 (threshold 49.00 for 6 Nov), unresolved at writing. The 5 Nov cap of 48.79 is already below that level.

## Schedule slip
- `other-scheduled`: prior 0.07, own 3/18, rate 0.142 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-04). The decree obliges working-day publication, 21 of 21 in October and no sign of change. A missing cap resolves NO.

## Risks
- Exactly 48.50 resolves NO; rounding is down.
- The estimate rests on a US proxy and on one day's fall that could reverse on Iran news on 5–6 Nov.
- Diesel cracks rose as crude fell last week; winter demand supports diesel — a fuel-price commentary (link in the signals file).
- The 14:00 cap on 5 Nov will move this a lot; re-check the threshold then.

## Sources
- https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-ve-ctvrtek-klesne-pod-49-kcl-benzin-pod-43-kcl-/2893299
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
- https://www.ceskenoviny.cz/zpravy/ropa-prudce-zlevnuje-brent-klesl-pod-100-dolaru-za-barel/2897451
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=10d&interval=1d
- a fuel-price commentary (link in the signals file)
- data/dossiers/2026-11-06/cz-diesel-cap-5.md
- data/dossiers/2026-11-03/cz-diesel-cap-1.md

## Research on the disputed fact (2026-11-04T18:50Z)
Cap for 5 Nov 48.79 confirmed by ČTK, set 4 Nov 14:00, valid 5 Nov 00:00-24:00. Formula per MF page: average of wholesale daily indices of ČEPRO, ORLEN and MOL and the Platts daily quotation, including excise, plus 2.50 margin, plus VAT; ČTK says a rolling three-day average. Note the dossier names MOLIN and UIC, the MF page names ORLEN and MOL; the November cenový výměr itself could not be opened. Size of the fall: no Czech wholesale or European gasoil figure readable. Proxy only: NY ULSD 4.5306 on 3 Nov to 4.2261 at latest print on 4 Nov, down 6.7%, revised from the dossier's 4.2010; Brent more than 8% down near 18:00 CET per ČTK.
Sources: https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-ve-ctvrtek-klesne-pod-49-kcl-benzin-pod-43-kcl-/2893299 https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty https://www.ceskenoviny.cz/zpravy/ropa-prudce-zlevnuje-brent-klesl-pod-100-dolaru-za-barel/2897451 https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=7d&interval=1d

## Overnight facts (morning run, read 5 Nov 2026 05:00-05:10 CET)
Threshold changed from CZK 48.00 to 48.50 in the morning: 48.00 needed a pass-through well above the recent record.
Caps: valid 4 Nov 49.00, valid 5 Nov 48.79. The cap valid on 6 Nov is set at 14:00 on 5 Nov (after this freeze). — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
Brent settled 94.62 on 4 Nov, then 93.65 in Asia on 5 Nov. US ULSD 4.2055, then 4.15. USD/CZK 21.55-21.71 (not the 21 the evening dossier assumed).
Rough US-proxy arithmetic with ULSD flat at 4.15: a cap below 48.00 needs about 49% pass-through of the fall; the last two cap steps together show about 33% (60% and 19% singly); the evening dossier's one-step rate was 45%. Main risk: Iran headlines reversing the fall. European gasoil and Czech wholesale data were not readable.
