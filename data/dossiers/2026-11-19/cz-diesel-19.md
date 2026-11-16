# cz-diesel-19
- **Claim:** The maximum price of diesel that the Czech Finance Ministry publishes on Wednesday 18 November 2026, valid from Thursday 19 November, is … CZK per litre.
- **Criterion:** The diesel ("b) nafty") figure in the Finance Ministry's Cenový věstník issued on 18 Nov 2026 (the cap valid from 19 Nov, whatever end date it gives), in CZK per litre including VAT (mf.gov.cz, or as reported by ČTK). Void if no věstník with fuel caps is issued on 18 Nov 2026.
- **Event window:** 2026-11-18T00:00+01:00 to 2026-11-18T23:59+01:00 (Europe/Prague)
- **Evidence expected:** věstník PDF in the early afternoon (recent ones 14:04–14:33 CET); ČTK report minutes later. evidence_at 2026-11-18T15:00+01:00
- **Deadline (resolves by):** 2026-11-20T05:00+01:00
- **Written at:** 2026-11-16T18:00Z

## Schedule
- Mechanism: government regulation NV 203/2026 Sb. (caps 1–30 Nov 2026), § 2(4); the MF announces the maximum daily price in its Cenový věstník — věstník 125 "Na základě § 2 odst. 4 nařízení vlády č. 203/2026 Sb. ... pro období od 1. listopadu 2026 až 30. listopadu 2026" — https://mf.gov.cz/assets/attachments/2026-11-16_Cenovy-vestnik-125-2026.pdf (PDF last-modified 2026-11-16 13:33:31 GMT, read 2026-11-16T17:53Z).
- Věstník 125 (Mon 16 Nov) covers "období 17. listopadu 2026 až 18. listopadu 2026" (17 Nov is a public holiday; no věstník that day). The next věstník is therefore due Wed 18 Nov, for 19 Nov onward — same document, quoted above.
- Validity of the 18 Nov věstník: on ordinary weekdays (Tue–Thu) the věstník covers the next day only (e.g. věstník 123 of Thu 12 Nov for 13 Nov); Friday ones cover the weekend; pre-holiday ones cover two days (věstník 112 of Tue 27 Oct for 28–29 Oct; věstník 125). 19 and 20 Nov are working days, so the 18 Nov věstník most likely covers 19 Nov only (Thursday's věstník then sets 20 Nov). Own reading of the pattern; not an MF statement. The criterion takes the cap valid from 19 Nov whatever end date it gives.
- Publication times: věstník 123 14:04 CET, 124 14:05 CET (PDF last-modified, from data/dossiers/2026-11-17/cz-fuel-diesel-17.md); věstník 125 ČTK report at 14:08 CET (below).

## Facts
- Cap valid 17–18 Nov: diesel 45.73 CZK/l, petrol 40.50 — věstník 125 (above) "45,73 Kč s DPH / litr". ČTK: "Nejvyšší přípustná cena nafty se oproti dnešku zvýší o 35 haléřů na 45,73 koruny za litr ... Jde o ceny pro nadcházející dva dny" — https://www.ceskenoviny.cz/zpravy/listopadovy-pokles-maximalnich-cen-paliv-skoncil-nafta-v-utery-zdrazi/2902681 (published 2026-11-16 14:08, read 2026-11-16T17:52Z).
- Diesel index table, věstník 125 (3-day moving averages, CZK/l): ČEPRO 35.29, MOLIN 35.15, UIC 35.14633 (35146.33 per 1000 l), Platts + costs 35.60, mean 35.29 — věstník 125 (above). Formula check: (35.2966 + 2.50) × 1.21 = 45.734 → 45.73 (rounded down to the haléř).
- Change against věstník 124 (13 Nov: 35.19 / 34.87 / 34.875 / 35.11 / 35.01): ČEPRO +0.10, MOLIN +0.28, UIC +0.27, Platts +0.49, mean +0.28 — věstník 124 values from data/dossiers/2026-11-17/cz-fuel-diesel-17.md (https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf).
- Formula: cap = (mean of the four indices + regulated margin 2.50) × 1.21 VAT. Each 0.10 move of the mean moves the cap by about 0.12. The diesel excise rate (8.011 CZK/l) is included in the indices and is unchanged within November — ČTK 16 Nov above "snížilo spotřební daň na naftu na 8,011 Kč za litr".
- Published diesel caps since the autumn regime began (valid date: cap; MF věstníky 91–125): 1 Oct 48.72; 2 Oct 48.58; 3–5 Oct 48.54; 6 Oct 48.38; 7 Oct 47.97; 8 Oct 47.23; 9 Oct 47.29; 10–12 Oct 47.67; 13 Oct 48.36; 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17–19 Oct 48.89; 20 Oct 48.67; 21 Oct 48.61; 22 Oct 48.60; 23 Oct 48.70; 24–26 Oct 48.69; 27 Oct 48.96; 28–29 Oct 49.46; 30 Oct 49.69; 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40; 12 Nov 45.87; 13 Nov 45.49; 14–16 Nov 45.38; 17–18 Nov 45.73 (to 16 Nov from data/dossiers/2026-11-14/cz-diesel-max-14.md and data/dossiers/2026-11-17/cz-fuel-diesel-17.md; 17–18 Nov from věstník 125). The spring regime (mid-April to mid-July) is not included.
- 17–18 Nov cap is the first rise after eleven falls; it ends "více než dva týdny trvající pokles" — ČTK 16 Nov above.
- Exchange quotes (Yahoo chart API daily closes, read 2026-11-16T17:52Z): NY Harbor ULSD futures (USD/gal) 11 Nov 4.2113, 12 Nov 4.2865, 13 Nov 4.2585, 16 Nov 4.0442 (intraday, 17:42 UTC, −5.0% on 13 Nov); Brent 13 Nov 95.84, 16 Nov 93.28 (17:42 UTC, −2.7%); USD/CZK 13 Nov 22.04, 16 Nov 22.18 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (also BZ%3DF, CZK%3DX). ULSD in CZK per gallon: 11 Nov 91.8, 12 Nov 94.1, 13 Nov 93.9, 16 Nov 89.7 (own arithmetic); the 16 Nov level is about 1.1 CZK/l below 13 Nov.
- Own reading of the index lag (not an MF statement): the Platts index in věstníky 122–125 tracks the 3-day average of ULSD × USD/CZK ending the day before publication (věstník 125: Platts +0.49 v proxy +0.38 for 11–13 Nov). On that reading the 18 Nov věstník uses quotes for 13, 16 and 17 Nov: with 17 Nov flat on 16 Nov the proxy falls about 0.57 CZK/l; if the window is 12, 13, 16 Nov it falls about 0.18. The three wholesale indices (ČEPRO, MOLIN, UIC) lagged the exchange in the October–November run and only partly follow. US ULSD is a proxy for the NWE Platts quote; 16 Nov close not final at read time; 17 Nov unknown.
- Pump prices are below caps: CCS average diesel 45.53 CZK/l on 12 Nov (ČTK 13 Nov, via cz-fuel-diesel-17).

## Board question cz-fuel-cap-december (facts only)
- Regulation and the diesel excise cut both expire 30 Nov — ČTK 16 Nov above ("Koncem října ale vláda rozhodla o jejím prodloužení do konce listopadu").
- Schillerová, 13 Nov in the Chamber: the government "bude muset během týdne, možná deseti dnů rozhodnout" whether the measures continue in December — ČTK 16 Nov above.
- Precedent: the November extension was approved by the cabinet on Mon 26 Oct, five days before expiry — Seznam Zprávy https://www.seznamzpravy.cz/clanek/ekonomika-finance-stropy-na-ceny-paliv-budou-platit-i-v-listopadu-318807 (published 2026-10-26 11:20Z, read 2026-11-16T17:55Z) "v pondělí toto opatření prodloužila až do konce listopadu". The spring regime (April–July) was ended by not extending it (search result: echo24 "Vláda neprodloužila regulaci cen pohonných hmot, bude platit už jen do neděle", https://echo24.cz/a/H7brY/zpravy-ekonomika-vlada-neprodlouzila-regulaci-cen-pohonnych-hmot-ta-bude-platit-do-nedele, not read).
- Next cabinet: Thu 19 Nov (desk sweep, agenda not seen). PM Babiš is in Israel until 18 Nov. No cabinet session on 18 Nov found.
- The Constitutional Court case Pl. ÚS 23/26 on the fuel-price law is pending, not scheduled this week (desk sweep $S/cand_cz.md).
- Caps have fallen from 49.69 (30 Oct) to 45.38–45.73, below the 1 Oct start (48.72): the "mimořádná situace" argument used to end the spring regime may be raised again; no statement found since 13 Nov.

## Consensus and surprise size
- Consensus: no analyst forecast of daily caps exists. Persistence = 45.73 (věstník 125). Documented signal: the 5% fall of diesel futures and 2.7% fall of Brent on 16 Nov (partly offset by a weaker crown) enters the 3-day averages; on the proxy above the Platts index falls 0.2–0.6 and the wholesale indices partly follow, so the mean falls roughly 0.1–0.3 and the cap 0.1–0.35. Centre used: 45.50 (persistence minus 0.23, own arithmetic from the proxy; not a published forecast).
- Scale, basis "published": sd of the 32 changes between consecutive published diesel caps 1 Oct–17 Nov (MF věstníky 91–125) 0.361 CZK (rms 0.367, mean −0.093); last 15 changes sd 0.395; mean absolute change 0.29 (own arithmetic). Scale used 0.37 (one step; the cap for 17–18 Nov is known). The Wed věstník follows a holiday, so its 3-day window may move by two quote days, like Monday věstníky.
- series.mjs: keys cz-diesel-max-10…14, cz-diesel-max-28 → n=0, "Fewer than 4 recorded surprises"; mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2 → 0.7234 (n=4, partly two-step surprises; not used).
- Model: `node scripts/refdata/models.mjs quantiles 45.50 0.37 1.6` → q10 44.74, q50 45.50, q90 46.26 (width 1.52 = 4.1 × 0.37).
- Largest single steps since 1 Oct: −0.88 (6 Nov), −0.74 (8 Oct), +0.69 (13 Oct), +0.50 (28 Oct).

## Base rate
- No class for interval claims. Of 32 steps since 1 Oct, 13 up and 19 down; 18 of 32 steps were within ±0.30 (own count from the list above).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-16T17:53Z) → prior 0.07, own 7/88, rate 0.079 [estimate]. Věstníky have appeared on every working day since 1 Oct (91–125), including the day before holidays (27 Oct, 16 Nov). 18 Nov is a working day. No sign of slippage.

## Risks
- Wholesale indices (ČEPRO, MOLIN, UIC) may keep rising for a day on their lag after the 11–13 Nov rally, offsetting the Platts drop.
- Window uncertainty: which three quote days enter after the holiday is not stated in the věstník; the algorithm is in NV 203/2026 Sb. (text not read).
- 17 Nov market moves (Ukraine peace headlines, Hormuz) are unknown and can move the Platts quote by ±3%.
- The MF could issue a věstník covering 19–20 Nov; the criterion takes the cap valid from 19 Nov either way.
- A cabinet decision on December does not change November caps.

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-16_Cenovy-vestnik-125-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://www.ceskenoviny.cz/zpravy/listopadovy-pokles-maximalnich-cen-paliv-skoncil-nafta-v-utery-zdrazi/2902681
- https://www.seznamzpravy.cz/clanek/ekonomika-finance-stropy-na-ceny-paliv-budou-platit-i-v-listopadu-318807
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d ; .../BZ%3DF... ; .../CZK%3DX...
- data/dossiers/2026-11-17/cz-fuel-diesel-17.md ; data/dossiers/2026-11-14/cz-diesel-max-14.md ; data/watchlist.json (cz-fuel-cap-december)
- WebSearch used for this story: 2 (oil 16 Nov, nothing usable; December extension).

## Unreachable
- none
