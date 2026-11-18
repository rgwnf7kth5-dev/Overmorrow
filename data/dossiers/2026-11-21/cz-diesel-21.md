# cz-diesel-21
- **Claim:** The maximum price of diesel that the Czech Finance Ministry publishes on Friday 20 November 2026, valid from Saturday 21 November, is … CZK per litre.
- **Criterion:** The diesel ("b) nafty") figure in the Finance Ministry's Cenový věstník issued on 20 Nov 2026 (the cap valid from 21 Nov, whatever end date it gives — on Fridays the věstník normally covers Saturday to Monday), in CZK per litre including VAT (mf.gov.cz, or as reported by ČTK). Void if no věstník with fuel caps is issued on 20 Nov 2026.
- **Event window:** 2026-11-20T00:00+01:00 to 2026-11-20T23:59+01:00 (Europe/Prague)
- **Evidence expected:** věstník PDF early afternoon (věstník 124 of Fri 13 Nov: PDF last-modified 13:05 GMT = 14:05 CET; věstník 126 of 18 Nov: 13:04 GMT = 14:04 CET); ČTK report minutes later. evidence_at 2026-11-20T15:00+01:00
- **Deadline (resolves by):** 2026-11-22T05:00+01:00
- **Written at:** 2026-11-18T18:05Z

## Schedule
- Mechanism (MF, 26 Oct): "Ministerstvo financí bude každý pracovní den vyhlašovat maximální ceny benzinu a nafty pro následující den, přičemž v nepracovní dny se uplatní cena naposledy vyhlášená. Toto opatření potrvá až do 30. listopadu 2026 ... Maximální cena se vypočte jako součet průměrné velkoobchodní ceny z třídenního klouzavého průměru čtyř referenčních zdrojů (indexy PKN ORLEN/Unipetrol, MOL/MOLIN, ČEPRO a kalkulované ceny na základě kotací Platts) a regulované marže ve výši 2,50 Kč za litr. Výsledná cena zahrnuje DPH a zaokrouhluje se na celé haléře dolů." — https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 2026-11-17T17:52Z via cz-diesel-20 dossier). Legal basis NV 203/2026 Sb. § 2(4), period 1–30 Nov.
- Weekend handling (primary source): the Friday věstník sets one cap for Saturday to Monday. Věstník 124 of Fri 13 Nov: "Sdělení Ministerstva financí o vyhlášení maximálních cen pohonných hmot na období 14. listopadu 2026 až 16. listopadu 2026" — https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf (PDF last-modified Fri 13 Nov 2026 13:05:42 GMT, read 2026-11-18T17:56Z). Same pattern 7–9 Nov (věstník 119 of Fri 6 Nov, cap 47.28, cz-diesel-20 dossier). So the 20 Nov věstník (expected No. 128) should cover 21–23 Nov; the cap valid on Mon 23 Nov is also this figure.
- Sequence: věstník 126 (Wed 18 Nov) → cap for Thu 19 Nov; věstník 127 (Thu 19 Nov, ~14:00) → cap for Fri 20 Nov; věstník 128 (Fri 20 Nov) → cap from Sat 21 Nov. This is a two-step forecast from the newest published cap. Forecasters running after ~14:10 CET on 19 Nov should re-anchor on věstník 127.
- 20 Nov is an ordinary working day (17 Nov holiday is past). The regulation runs to 30 Nov, so 20 Nov is inside it whatever the cabinet decides about December.

## Facts
- Newest cap (valid Thu 19 Nov): diesel 45.68 CZK/l, petrol 40.22 — MF věstník 126 https://mf.gov.cz/assets/attachments/2026-11-18_Cenovy-vestnik-126-2026.pdf (PDF last-modified 2026-11-18 13:04:36 GMT, read 2026-11-18T17:55Z) "se na den 19. listopadu 2026 vyhlašuje maximální denní cena ... b) nafty ... 45,68 Kč s DPH / litr"; ČTK https://www.ceskenoviny.cz/zpravy/maximalni-ceny-paliv-ve-ctvrtek-mirne-klesnou-benzin-bude-za-4022-kcl/2902681 (published 2026-11-18 14:11 CET, read 2026-11-18T17:53Z) "Nejvyšší přípustná cena nafty se oproti dnešku sníží o pět haléřů na 45,68 koruny za litr." (The 45.68 for Thursday is verified.)
- Věstník 126 diesel indices (3-day averages, CZK/l): ČEPRO 35.32, MOLIN 35.19, UIC 35.18933 (35 189.33 per 1000 l), Platts + costs 35.32, mean 35.25 — same PDF. Check: (35.2548 + 2.50) × 1.21 = 45.681 → 45.68 (rounded down). Each 0.10 change of the mean moves the cap ≈ 0.12.
- Index moves (CZK/l): věstník 124 (13 Nov) 35.19 / 34.87 / 34.875 / 35.11; věstník 125 (16 Nov) 35.29 / 35.15 / 35.146 / 35.60; věstník 126 (18 Nov) 35.32 / 35.19 / 35.189 / 35.32. So 125→126: ČEPRO +0.03, MOLIN +0.04, UIC +0.04, Platts −0.28 — the three wholesale indices have not yet followed the fall in exchange quotes since 13 Nov (věstník 124/125 values via cz-diesel-19/20 dossiers; 126 from the PDF above).
- Recent caps (valid date: cap): 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40; 12 Nov 45.87; 13 Nov 45.49; 14–16 Nov 45.38; 17–18 Nov 45.73; 19 Nov 45.68 (MF věstníky; list in cz-diesel-19/20 dossiers).
- Exchange quotes, Yahoo chart API daily closes (read 2026-11-18T17:56Z; 18 Nov is intraday at 17:43 UTC): NY Harbor ULSD (USD/gal) 10 Nov 4.1309, 11 Nov 4.2113, 12 Nov 4.2865, 13 Nov 4.2585, 16 Nov 4.0818, 17 Nov 4.0475 (revised from 3.98 intraday seen yesterday), 18 Nov 3.8716; Brent 13 Nov 95.84, 16 Nov 92.44, 17 Nov 93.14, 18 Nov 88.33; USD/CZK 13 Nov 22.04, 16 Nov 22.13, 17 Nov 22.19, 18 Nov 22.23 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (also BZ%3DF, CZK%3DX).
- ULSD converted to CZK/l (own arithmetic, USD/gal × USD/CZK ÷ 3.7854): 10 Nov 23.66, 11 Nov 24.24, 12 Nov 24.85, 13 Nov 24.79, 16 Nov 23.86, 17 Nov 23.72, 18 Nov 22.74. 3-day proxy windows (ending the day before publication, own lag reading from cz-diesel-19): věstník 124 24.25; 125 24.63 (Platts +0.49 vs proxy +0.38); 126 window 13/16/17 Nov 24.12 (Platts −0.28 vs proxy −0.51; window 12/13/16 would give 24.50, −0.13). Věstník 127 window 16/17/18 Nov: 23.44 (−0.68); věstník 128 window 17/18/19 Nov with 19 Nov flat at 18 Nov level: 23.07 (a further −0.37). Two-step proxy move ≈ −1.05 CZK/l.
- Pump prices are below the caps: CCS average diesel 45.53 CZK/l on 12 Nov (ČTK 13 Nov, via cz-diesel-17/20 dossiers).
- Diesel excise 8.011 CZK/l unchanged through 30 Nov (ČTK 18 Nov, above: "ministerstvo financí na dobu trvání regulace snížilo spotřební daň na naftu na 8,011 Kč za litr").

## Cabinet decision on December (fact only, for board question cz-fuel-cap-december)
- Thu 19 Nov cabinet (07:30): the Government Office notice names as programme items regulations on compensation for loss of earnings/service income and the National Antibiotic Programme 2026–2032; no fuel item is named — [Government Office notice of 13 Nov as republished by a Czech financial news portal; its URL is in the cz-diesel story sources in data/planning/2026-11-20.json, because the portal's domain name trips the dossier word filter] (read 2026-11-18T17:54Z) "Vláda má na programu například návrhy nařízení o úpravě náhrady za ztrátu výdělku ... strategii Národního antibiotického programu". The full programme at odok.gov.cz returns "Požadavek byl zablokován" (read 2026-11-18T17:54Z), so whether a fuel item is listed is not known.
- No report of a fuel item on the 19 Nov programme and no new statement after Schillerová's 13 Nov "během týdne, možná deseti dnů" was found (ČTK economy section scan 2026-11-18T17:57Z: newest fuel item is the 18 Nov cap report; one web search, no new reporting). https://www.ceskenoviny.cz/zpravy/schillerova-vlada-musi-brzy-rozhodnout-zda-prodlouzi-opatreni-u-paliv/2901670
- Pattern: the 2026 extension decisions (18 May, 29 Jun, 26 Oct) were all taken at the last Monday meeting before expiry (cz-fuelcap-ext-20 dossier); the analogous meeting now is Mon 23 Nov. Not confirmed by any primary source. Either way the cap valid 21–23 Nov falls under NV 203/2026 and is unaffected.

## Consensus and surprise size
- Consensus: no analyst forecasts daily caps. Persistence would be 45.68. Formula-based extrapolation (own arithmetic, not a published forecast): Platts index tracks the proxy with a ratio of roughly 0.5–1.3 (last two steps); taking ≈0.9 of the −1.05 proxy move gives Platts ≈ −0.95 over two steps. The three wholesale indices (ČEPRO, MOLIN, UIC) moved only +0.03/+0.04 in the last step despite the falling market; assuming they start to fall ≈0.25 each per step (−0.5 over two steps, similar to the 10–13 Nov falling run when caps fell 0.11–0.53 per step), the mean falls ≈0.61 and the cap ≈0.74 → **44.94; centre used 44.95**. Scenarios: wholesale indices fall only 0.2 in total → ≈45.2; fall 0.9 → ≈44.6; a rebound on 19 Nov (+3% ULSD) adds ≈+0.1 to +0.2 via Platts.
- Scale, basis "series": `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` (run 2026-11-18T17:55Z) → scale 0.7234, n=4 (recorded surprises of earlier diesel-cap claims, several two steps ahead like this one). `series.mjs scale maximum-retail-price-of-diesel-b7-valid-on-11-nov-2026-set-i` → n=1, rms 0.88, "Fewer than 4 recorded surprises" — not used. Other series keys cz-diesel-max-10…14, -28 are claim ids inside these two series. Cross-check: sd of one-day cap changes 1 Oct–17 Nov 0.361 (cz-diesel-19) × √2 ≈ 0.51 for two steps.
- Model: `node scripts/refdata/models.mjs quantiles 44.95 0.72 1.6` → q10 43.47, q50 44.95, q90 46.43.
- Track record (series.json): forecasts for 10, 11, 12 Nov (centres 47.01, 47.14, 46.12) all came out above the actual caps (46.70, 46.40, 45.87) in a falling run — the lagging indices fell faster than assumed then. In the last step (věstník 126) they did not fall at all.

## Base rate
- No class for interval claims. Of 33 one-day steps since 1 Oct, 13 up and 20 down; largest single steps −0.88 (6 Nov), −0.74 (8 Oct), +0.69 (13 Oct) (cz-diesel-19, plus 19 Nov −0.05).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-18T17:55Z) → prior 0.07, own 7/93, rate 0.075 [estimate]. Věstníky have appeared every working day since 1 Oct (91–126). No sign of slippage.

## Risks
- 19 and 20 Nov oil moves unknown (Brent fell ~5% on 18 Nov intraday; Ukraine/Crimean bridge, Middle East news); ±3% on ULSD moves the Platts index ≈±0.7 on the day and the cap ≈±0.2 via the 3-day average.
- Which quote days enter each window is not stated by MF (own lag reading); the Platts index fell less than the proxy last step.
- Wholesale indices may lag more (cap ≈45.2) or catch up fast (cap ≈44.6 or lower).
- Věstník 127 (19 Nov ~14:00 CET) will halve the horizon; re-anchor on it.

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-18_Cenovy-vestnik-126-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559
- https://www.ceskenoviny.cz/zpravy/maximalni-ceny-paliv-ve-ctvrtek-mirne-klesnou-benzin-bude-za-4022-kcl/2902681
- https://www.ceskenoviny.cz/zpravy/schillerova-vlada-musi-brzy-rozhodnout-zda-prodlouzi-opatreni-u-paliv/2901670
- https://www.ceskenoviny.cz/ekonomika/
- https://www.odok.gov.cz/portal/zvlady/jednani-detail/2026-11-19/ (blocked)
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d ; BZ%3DF ; CZK%3DX
- data/dossiers/2026-11-20/cz-diesel-20.md ; data/dossiers/2026-11-19/cz-diesel-19.md ; data/dossiers/2026-11-20/cz-fuelcap-ext-20.md ; pipeline/reference-data/series.json
- WebSearch: "vláda regulace cen pohonných hmot prosinec rozhodne Schillerová listopad 2026" (no new reporting)

## Unreachable
- odok.gov.cz (blocked); vlada.gov.cz guessed programme page 404.
