# cz-fuel-diesel-17
- **Claim:** The maximum price of diesel that the Czech Ministry of Finance publishes on Monday 16 November 2026, valid from Tuesday 17 November, is CZK 45.75 per litre or higher (at least 37 haléř above the CZK 45.38 cap valid 14–16 Nov).
- **Criterion:** YES if the diesel ("b) nafty") maximum price in the Finance Ministry's Cenový věstník issued on 16 Nov 2026 (the cap valid from 17 Nov, whatever end date it gives), in CZK per litre incl. VAT, is 45.75 or more (mf.gov.cz, or as reported by ČTK). NO if it is 45.74 or less, or if no věstník with fuel caps is issued on 16 Nov 2026.
- **Event window:** 2026-11-16T00:00+01:00 to 2026-11-16T23:59+01:00 (Europe/Prague)
- **Evidence expected:** věstník PDF around 14:00–14:20 CET (Friday ones up to ~17:53); ČTK report minutes later. evidence_at 2026-11-16T15:00+01:00
- **Deadline (resolves by):** 2026-11-18T05:00+01:00
- **Written at:** 2026-11-14T18:05Z

## Schedule
- Mechanism: government regulation NV 203/2026 Sb. (caps 1–30 Nov 2026), § 2(4): the MF announces the maximum daily price in its Cenový věstník; cited in věstník 124 "Na základě § 2 odst. 4 nařízení vlády č. 203/2026 Sb. ... pro období od 1. listopadu 2026 až 30. listopadu 2026" — https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf (PDF last-modified 2026-11-13 13:05:42 GMT = 14:05 CET, read 2026-11-14T17:55Z).
- Věstník 124 (Fri 13 Nov) covers "období 14. listopadu 2026 až 16. listopadu 2026", so the next věstník is due Mon 16 Nov.
- Holiday precedent: věstník 112 of Tue 27 Oct set caps "na období 28. října 2026 až 29. října 2026" (28 Oct a public holiday; diesel 49.46) — https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf (read 2026-11-14T17:58Z). Tue 17 Nov is a public holiday, so the Mon 16 Nov věstník is expected to cover 17–18 Nov.
- Publication times: věstník 123 (Thu 12 Nov) 14:04 CET, věstník 124 (Fri 13 Nov) 14:05 CET (PDF last-modified headers); ČTK reported věstník 124 at 14:06 CET.

## Facts
- Cap valid 14–16 Nov: diesel 45.38, petrol 40.50 CZK/l incl. VAT — věstník 124 (above) "45,38 Kč s DPH / litr". ČTK: "U nafty se cenový strop oproti dnešku sníží o 11 haléřů na 45,38 koruny za litr" — https://www.ceskenoviny.cz/zpravy/maximalni-ceny-paliv-o-vikendu-opet-klesnou-benzin-bude-nejvyse-za-4050-kcl-/2899499 (published 2026-11-13 14:06, read 2026-11-14T17:54Z).
- Cap valid 13 Nov: diesel 45.49, petrol 40.65 — https://mf.gov.cz/assets/attachments/2026-11-12_Cenovy-vestnik-123-2026.pdf (PDF last-modified 2026-11-12 13:04:40 GMT, read 2026-11-14T17:55Z).
- Diesel index tables (3-day moving averages, CZK/l; ČEPRO / MOLIN / UIC per litre / Platts+costs / mean): věstník 121 (10 Nov) 36.05 / 35.86 / 35.85 / 35.63 / 35.85; věstník 122 (11 Nov) 35.76 / 35.34 / 35.34 / 35.21 / 35.41; věstník 123 (12 Nov) 35.40 / 34.97 / 34.97 / 35.05 / 35.10; věstník 124 (13 Nov) 35.19 / 34.87 / 34.875 / 35.11 / 35.01 (121–122 from data/dossiers/2026-11-14/cz-diesel-max-14.md; 123–124 from the PDFs above). In věstník 124 the Platts average rose for the first time in this run (+0.06) while the three wholesale indices still fell (−0.10 to −0.21).
- Formula (stated in each věstník and by ČTK): cap = (mean of the four indices + regulated margin 2.50) × 1.21 VAT, rounded down to the haléř. Check: (35.01 + 2.50) × 1.21 = 45.387 → 45.38. A cap of 45.75 or more needs the mean to rise to at least 35.31, i.e. +0.30 on věstník 124.
- Published diesel caps (valid date: cap): 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40; 12 Nov 45.87; 13 Nov 45.49; 14–16 Nov 45.38 — eleven falls in a row, lowest since caps began on 1 Oct (1 Oct 48.72). Earlier caps from data/dossiers/2026-11-14/cz-diesel-max-14.md.
- Diesel and oil backdrop (Yahoo chart API, daily closes, read 2026-11-14T17:56Z): NY Harbor ULSD futures (USD/gal) 6 Nov 4.3317, 9 Nov 4.2148, 10 Nov 4.1309, 11 Nov 4.2113, 12 Nov 4.2865, 13 Nov 4.2585; Brent 9 Nov 92.57, 10 Nov 91.49, 11 Nov 92.76, 12 Nov 95.82, 13 Nov 95.84 USD/bbl; USD/CZK 10 Nov 21.68, 11 Nov 21.79, 12 Nov 21.95, 13 Nov 22.04 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (also BZ%3DF, CZK%3DX). ULSD in CZK (per gallon) 10 Nov 89.6, 11 Nov 91.8, 12 Nov 94.1, 13 Nov 93.9 (own arithmetic).
- Own reading of the index lag (not an MF statement): day-to-day changes of the Platts index in věstníky 122 and 123 (−0.42, −0.16 CZK/l) match the 3-day average of ULSD×USD/CZK ending the day before publication (−0.39, −0.18 CZK/l when converted per litre); for věstník 124 the fit is weaker (Platts +0.06 v proxy +0.19). On that reading the Monday věstník uses quotes for 11–13 Nov, whose 3-day average is about 0.38 CZK/l above the 10–12 Nov one. US ULSD is only a proxy for the NWE Platts quote; the three wholesale indices (ČEPRO, MOLIN, UIC) have lagged the exchange quotes in this run.
- Excise: diesel excise cut to CZK 8.011/l (from 9.95) for the duration of the regulation; unchanged within November — ČTK 13 Nov above.
- Extension: regulation and diesel excise cut expire 30 Nov. Schillerová in the Chamber on 13 Nov: the government "bude muset během týdne, možná deseti dnů rozhodnout" whether the measures continue in December — ČTK 13 Nov above. Cabinet next expected Thu 19 Nov (agenda not seen; per desk sweep). No decision is expected on Mon 16 Nov.
- Pump prices (CCS, Thursday data): diesel average 45.53 CZK/l, Natural 95 39.70 — ČTK 13 Nov above.

## Consensus and surprise size
- Consensus (persistence): 45.38, the last published cap (věstník 124). No analyst forecast of daily caps exists.
- Scale: `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` → 0.7234 (basis series, n=4; those records were partly two-step surprises against a stale cap). One-step sd of consecutive daily cap changes since 1 Oct: 0.357 (31 changes to 14 Nov, own arithmetic from the věstníky). Monday's cap is one step from a known cap.
- Threshold 45.75 is 0.37 above consensus: 0.51 × the series scale and 1.04 × the one-step sd.
- Size of recent steps: 13 Nov −0.38, 14 Nov −0.11; largest single rises since 1 Oct +0.69 (13 Oct) and +0.50 (28 Oct).

## Base rate
- Class: day-to-day rise of the daily diesel cap of 0.37 CZK or more. Own count from the 32 published caps 1 Oct–14 Nov (MF věstníky 91–124): 3 of 31 changes (+0.38 for 10 Oct, +0.69 for 13 Oct, +0.50 for 28 Oct); rises of any size 11 of 31. sd of the 31 changes 0.357 (own arithmetic).
- The only earlier run of falls (1–8 Oct, five) was followed by rises of +0.06, +0.38, +0.69.

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-14T17:54Z) → prior 0.07, own 7/84, rate 0.082 [estimate]. Věstníky have appeared on every working day since 1 Oct (91–124). 16 Nov is a working day; the 27 Oct precedent shows a pre-holiday věstník is issued as normal.

## Risks
- The three wholesale indices are still falling and may not turn up yet; the Platts proxy (US ULSD) may differ from NWE diesel.
- The MF could, in principle, publish a cap for 17 Nov only and another on 18 Nov; the criterion takes the 16 Nov věstník either way.
- A government decision on extension or a change in excise would not affect caps within November.
- Rounding down to the haléř: a mean of 35.30 gives 45.73 (NO).

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-11-12_Cenovy-vestnik-123-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-26_Cenovy-vestnik-110-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026 (list page; links not rendered)
- https://www.ceskenoviny.cz/zpravy/maximalni-ceny-paliv-o-vikendu-opet-klesnou-benzin-bude-nejvyse-za-4050-kcl-/2899499
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d ; .../BZ%3DF... ; .../CZK%3DX...
- data/dossiers/2026-11-14/cz-diesel-max-14.md ; data/watchlist.json (cz-fuel-cap-december)
- WebSearch: none used for this story.

## Unreachable
- none (the MF list page renders without links; PDFs were read directly)

## Research step (14 Nov, after round one)
- Method note in věstník 124 (footnotes to the index table, "třídenní klouzavé aritmetické průměry"): indices include the excise rate valid for the day the cap applies to; the regulated margin applies to that day; Platts is converted at ČNB USD and EUR rates valid on the quote day, or the previous working day's rate when ČNB publishes none for that day; full algorithm in NV 203/2026 Sb. — https://mf.gov.cz/assets/attachments/2026-11-13_Cenovy-vestnik-124-2026.pdf (read 2026-11-14T18:14Z) "Při přepočtu Indexu Platts byly použity devizové kursy ČNB pro USD a EUR účinné ke dni kotace, pokud ČNB pro daný den [exchange rate] nevyhlašuje, uplatní se [rate] předcházejícího pracovního dne." Which three days feed the Monday average is not stated in the věstník; the regulation text could not be read (zakonyprolidi.cz renders only a cookie page).
