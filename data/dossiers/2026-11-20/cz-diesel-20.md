# cz-diesel-20
- **Claim:** The maximum price of diesel that the Czech Finance Ministry publishes on Thursday 19 November 2026, valid on Friday 20 November, is … CZK per litre.
- **Criterion:** The diesel ("b) nafty") figure in the Finance Ministry's Cenový věstník issued on 19 Nov 2026 (the cap valid from 20 Nov, whatever end date it gives), in CZK per litre including VAT (mf.gov.cz, or as reported by ČTK). Void if no věstník with fuel caps is issued on 19 Nov 2026.
- **Event window:** 2026-11-19T00:00+01:00 to 2026-11-19T23:59+01:00 (Europe/Prague)
- **Evidence expected:** věstník PDF early afternoon (recent ones 14:04–14:33 CET); ČTK report minutes later. evidence_at 2026-11-19T15:00+01:00
- **Deadline (resolves by):** 2026-11-21T05:00+01:00
- **Written at:** 2026-11-17T18:00Z

## Schedule
- Mechanism: MF 26 Oct: "Ministerstvo financí bude každý pracovní den vyhlašovat maximální ceny benzinu a nafty pro následující den, přičemž v nepracovní dny se uplatní cena naposledy vyhlášená. Toto opatření potrvá až do 30. listopadu 2026. Maximální cena se vypočte jako součet průměrné velkoobchodní ceny z třídenního klouzavého průměru čtyř referenčních zdrojů (indexy PKN ORLEN/Unipetrol, MOL/MOLIN, ČEPRO a kalkulované ceny na základě kotací Platts) a regulované marže ve výši 2,50 Kč za litr. Výsledná cena zahrnuje DPH a zaokrouhluje se na celé haléře dolů." — https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 2026-11-17T17:52:31Z). Legal basis NV 203/2026 Sb. (§ 2(4)), period 1–30 Nov — https://esipa.cz/sbirka/sbsrv.dll/sb?CP=2026s203&DR=SB (read 2026-11-17T17:52:45Z).
- Thu 19 Nov is a working day; its věstník sets the cap for Fri 20 Nov (Friday's věstník will cover the weekend). The 18 Nov věstník (cap for 19 Nov) is not yet published at writing time, so this is a two-step forecast from the last known cap.
- Publication times: věstníky 123 and 124 14:04–14:05 CET (PDF last-modified), věstník 125 ČTK report 14:08 CET — data/dossiers/2026-11-19/cz-diesel-19.md.

## Facts
- Last known cap (valid 17–18 Nov): diesel 45.73 CZK/l, petrol 40.50 — MF věstník 125 https://mf.gov.cz/assets/attachments/2026-11-16_Cenovy-vestnik-125-2026.pdf (via cz-diesel-19 dossier, read 2026-11-16T17:53Z); ČTK https://www.ceskenoviny.cz/zpravy/listopadovy-pokles-maximalnich-cen-paliv-skoncil-nafta-v-utery-zdrazi/2902681 (published 2026-11-16 14:08, read 2026-11-17T17:42Z) "Nejvyšší přípustná cena nafty se oproti dnešku zvýší o 35 haléřů na 45,73 koruny za litr."
- Věstník 125 diesel indices (3-day averages, CZK/l): ČEPRO 35.29, MOLIN 35.15, UIC 35.146, Platts + costs 35.60, mean 35.29; check (35.2966 + 2.50) × 1.21 = 45.73 — cz-diesel-19 dossier. Each 0.10 change of the mean moves the cap ≈ 0.12.
- Exchange quotes, Yahoo chart API daily closes (read 2026-11-17T17:53Z; 17 Nov intraday at 17:43 UTC): NY Harbor ULSD (USD/gal) 11 Nov 4.2113, 12 Nov 4.2865, 13 Nov 4.2585, 16 Nov 4.0818, 17 Nov 3.9816; Brent 11 Nov 92.76, 12 Nov 95.82, 13 Nov 95.84, 16 Nov 92.44, 17 Nov 93.33; USD/CZK 11 Nov 21.79, 12 Nov 21.95, 13 Nov 22.04, 16 Nov 22.13, 17 Nov 22.09 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (also BZ%3DF, CZK%3DX).
- ULSD converted to CZK/l (own arithmetic): 11 Nov 24.24, 12 Nov 24.85, 13 Nov 24.79, 16 Nov 23.86, 17 Nov 23.24. 3-day averages: 11–13 Nov 24.63 (window of věstník 125 on the lag reading in cz-diesel-19); 13/16/17 Nov 23.96 (−0.67); 16/17/18 Nov with 18 Nov flat at 23.24: 23.45 (−1.18 against věstník 125).
- Own reading of index lag (not an MF statement, from cz-diesel-19): the Platts index tracks the 3-day average of ULSD × USD/CZK ending the day before publication; in věstník 124→125 it moved +0.49 against a proxy move of +0.38, while ČEPRO/MOLIN/UIC moved only +0.10/+0.28/+0.27 (lagging).
- Recent caps (valid date: cap): 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40; 12 Nov 45.87; 13 Nov 45.49; 14–16 Nov 45.38; 17–18 Nov 45.73 (MF věstníky, list in cz-diesel-19).
- Pump prices below caps: CCS average diesel 45.53 CZK/l on 12 Nov (ČTK 13 Nov via cz-fuel-diesel-17 dossier).
- Diesel excise 8.011 CZK/l is unchanged through 30 Nov (ČTK 13 Nov https://www.ceskenoviny.cz/zpravy/schillerova-vlada-musi-brzy-rozhodnout-zda-prodlouzi-opatreni-u-paliv/2901670, read 2026-11-17T17:52:22Z); a cabinet decision on December (19 or 23 Nov) does not change the 20 Nov cap.

## Consensus and surprise size
- Consensus: no analyst forecasts daily caps. Persistence 45.73. Documented signal: ULSD in CZK fell ~6% from the 11–13 Nov window to 16–17 Nov. If the 19 Nov věstník uses 16/17/18 Nov quotes, the Platts proxy falls ≈1.2 CZK/l; assuming the three lagging wholesale indices fall ≈0.5 each over two steps, the mean falls ≈0.65 and the cap ≈0.79. Centre used 44.95 (own arithmetic; not a published forecast). If wholesale indices follow fully the cap would be ≈44.3; if they keep rising on lag and Platts falls less (window 13/16/17), ≈45.4.
- Scale, basis "series": `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` → scale 0.7234, n=4 (recorded surprises of earlier diesel-cap claims, several of them two steps ahead like this one). `series.mjs scale maximum-retail-price-of-diesel-b7-valid-on-11-nov-2026-set-i` → n=1, "Fewer than 4 recorded surprises" (rms 0.88), not used. Cross-check: sd of one-day cap changes 1 Oct–17 Nov 0.361 (cz-diesel-19) × √2 ≈ 0.51 for two steps, plus 18 Nov market unknown.
- Model: `node scripts/refdata/models.mjs quantiles 44.95 0.72 1.6` → q10 43.47, q50 44.95, q90 46.43.
- Earlier record (series.json): forecasts for 10, 11, 12 Nov (centres 47.01, 47.14, 46.12) all over-predicted the actual caps (46.70, 46.40, 45.87) during a falling run — the lagging indices fell faster than assumed.

## Base rate
- No class for interval claims. Of 32 one-day steps since 1 Oct, 13 up and 19 down; largest single steps −0.88 (6 Nov), −0.74 (8 Oct), +0.69 (13 Oct) (cz-diesel-19).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-17T17:54Z) → prior 0.07, own 7/88, rate 0.079 [estimate]. Věstníky have appeared every working day since 1 Oct (91–125). No sign of slippage.

## Risks
- 18 Nov oil/diesel moves unknown (Ukraine talks, Middle East); ±3% on ULSD moves the Platts index ≈±0.7 and the cap ≈±0.2–0.3 via the 3-day average.
- Which quote days enter the post-holiday windows is not stated by MF (own lag reading).
- Wholesale indices (ČEPRO, MOLIN, UIC) may lag more or less than assumed.
- The 18 Nov věstník (known on 18 Nov afternoon) will narrow this a lot; forecasters running later should re-anchor on it.

## Sources
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559
- https://mf.gov.cz/assets/attachments/2026-11-16_Cenovy-vestnik-125-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://www.ceskenoviny.cz/zpravy/listopadovy-pokles-maximalnich-cen-paliv-skoncil-nafta-v-utery-zdrazi/2902681
- https://esipa.cz/sbirka/sbsrv.dll/sb?CP=2026s203&DR=SB
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d ; BZ%3DF ; CZK%3DX
- data/dossiers/2026-11-19/cz-diesel-19.md ; pipeline/reference-data/series.json

## Unreachable
- none for this claim
