# cz-diesel-max-14 (interval)
- **Claim:** The maximum retail price of diesel (B7) that the Czech Ministry of Finance publishes in the Cenový věstník issued on Friday 13 November 2026 (valid from Saturday 14 November), in CZK per litre including VAT.
- **Criterion:** The "b) nafty" figure in the Cenový věstník issued on 13 Nov 2026 (the cap valid from 14 Nov, whatever end date the věstník gives), in CZK per litre incl. VAT, from mf.gov.cz or as reported by ČTK. Void if no věstník with fuel caps is issued on 13 Nov 2026.
- **Event window:** 2026-11-13T00:00+01:00 to 2026-11-13T23:59+01:00 (Europe/Prague)
- **Written at:** 2026-11-11T18:15Z
- **Date note:** the edition dated 14 Nov covers the věstník published on Fri 13 Nov. At writing, the cap for 12 Nov (věstník 122 of 11 Nov) is known; the cap for 13 Nov (věstník of 12 Nov) is not yet, so this claim is two steps beyond the last known cap tonight and one step beyond it at a 13 Nov morning freeze.

## Schedule
- Mechanism: government regulation NV 203/2026 Sb. (price ceiling for 1–30 Nov 2026), § 2(4): the Finance Ministry announces the maximum daily price each working day in its Cenový věstník for the following day; a cap for a non-working day carries over (§ 2(5)) — cited in věstník 122 ("Na základě § 2 odst. 4 nařízení vlády č. 203/2026 Sb. ... pro období od 1. listopadu 2026 až 30. listopadu 2026") https://mf.gov.cz/assets/attachments/2026-11-11_Cenovy-vestnik-122-2026.pdf (PDF last-modified 2026-11-11 13:17:55 GMT = 14:17 CET, read 2026-11-11T17:53Z). The regulation text (https://www.zakonyprolidi.cz/cs/2026-203) was behind a cookie wall for the reader tonight; § 2(5) is as cited in data/dossiers/2026-11-13/cz-diesel-max-13.md.
- Friday pattern: věstník 119 of Fri 6 Nov set the cap "na období 7. listopadu 2026 až 9. listopadu 2026" (diesel 47.28) — https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf (PDF last-modified 2026-11-06 16:53:57 GMT = 17:53 CET, read 2026-11-11T17:54Z). So the Friday 13 Nov věstník should cover Sat 14 – Mon 16 Nov. (Tue 17 Nov is a Czech public holiday; that affects Monday's věstník, not this one.)
- Who sets it: the Ministry of Finance, odbor 26 – Sektorové politiky (signature on věstník 122). Formula published in each věstník: cap = (arithmetic mean of four 3-day moving-average indices: ČEPRO base price, MOLIN, UIC, Platts + costs) + regulated margin 2.50, × 1.21 VAT; caps are rounded down to the haléř (petrol and diesel checks below).
- Publication times: věstník 121 ~14:08 CET (10 Nov), věstník 122 ~14:17 CET (11 Nov), Friday věstník 119 ~17:53 CET (6 Nov). MF list page https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026 (read 2026-11-11T17:53:50Z) renders only month headers to the reader.

## Facts
- Cap for Thu 12 Nov (věstník 122, 11 Nov): diesel 45.87, petrol 40.78 CZK/l incl. VAT — věstník 122 (above) "45,87 Kč s DPH / litr" — down 0.53 from 46.40 (11 Nov), the ninth fall in a row and the lowest since caps began on 1 Oct.
- Věstník 122 diesel index table (3-day moving averages): ČEPRO 35.76; MOLIN 35.34; UIC 35,336.67 per 1000 l; Platts + costs 35.21; mean 35.41 → (35.41 + 2.50) × 1.21 = 45.871 → published 45.87 (own check). Petrol: mean 31.21 → (31.21 + 2.50) × 1.21 = 40.789 → published 40.78 (rounded down).
- Previous diesel table (věstník 121, 10 Nov): ČEPRO 36.05, MOLIN 35.86, UIC 35.85, Platts 35.63, mean 35.85 (from cz-diesel-max-13.md). Day on day all four fell 0.29–0.52.
- Footnote in věstník 122: indices include the excise duty valid for the day the cap applies; Platts converted at ČNB USD and EUR rates for the quote day.
- Published diesel caps (valid date: cap): 1 Oct 48.72; 2 Oct 48.58; 3–5 Oct 48.54; 6 Oct 48.38; 7 Oct 47.97; 8 Oct 47.23; 9 Oct 47.29; 10–12 Oct 47.67; 13 Oct 48.36; 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17–19 Oct 48.89; 20 Oct 48.67; 21 Oct 48.61; 22 Oct 48.60; 23 Oct 48.70; 24–26 Oct 48.69; 27 Oct 48.96; 28–29 Oct 49.46; 30 Oct 49.69; 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40; 12 Nov 45.87 (to 11 Nov as listed in data/dossiers/2026-11-13/cz-diesel-max-13.md from MF věstníky; 12 Nov from věstník 122).
- Nine consecutive falls (caps valid 31 Oct–12 Nov): −0.24, −0.10, −0.35, −0.21, −0.88, −0.63, −0.58, −0.30, −0.53.
- Oil backdrop (Yahoo chart API, read 2026-11-11T18:00Z; 11 Nov bar intraday): Brent front month 2 Nov 104.77, 4 Nov 94.62, 6 Nov 98.32, 9 Nov 92.57, 10 Nov 91.49, 11 Nov 92.69 USD/bbl; NY Harbor ULSD 6 Nov 4.3317, 9 Nov 4.2148, 10 Nov 4.1309, 11 Nov 4.2235 USD/gal; USD/CZK 9 Nov 21.81, 10 Nov 21.68, 11 Nov 21.98 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d (also BZ%3DF, CZK%3DX). A US proxy for the Platts NWE quote; 11 Nov shows a rebound of about 2% in diesel futures and a weaker crown.
- Regulation ends 30 Nov; no extension decision found tonight (none reported in cz-diesel-max-13.md either; not re-searched).

## Consensus and surprise size
- Consensus: 45.87, the last published cap (persistence; věstník 122 for 12 Nov). No analyst forecast of daily caps exists.
- `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` → n=1; pooled factor 1.284; no usable series scale.
- Scale, basis "published": sd of changes between consecutive published caps (MF věstníky), 29 changes since 1 Oct: all sd 0.366 (rms 0.373, mean −0.098); last 15 sd 0.378 (rms 0.408); last 10 sd 0.312 (rms 0.465, mean −0.359) (own arithmetic). Scale used 0.37 (one step).
- Two unknown steps tonight: if independent, sd ≈ 0.37 × √2 ≈ 0.52. One step at a 13 Nov morning freeze.
- `node scripts/refdata/models.mjs quantiles 45.87 0.37 1.6` (run 2026-11-11T18:01Z) → q10 45.11, q50 45.87, q90 46.63.

## Base rate
- No class. Of 29 steps since 1 Oct, 18 down and 11 up. The run of nine falls is the longest since 1 Oct; the only earlier run of five falls (1–8 Oct) was followed by rises (+0.06, +0.38, +0.69).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-11T18:00Z) → prior 0.07, own 5/69, rate 0.072 [estimate]. Věstníky have appeared on every working day since 1 Oct (91–122); 13 Nov is a working day.

## Risks
- Oil rebound: diesel futures +2% and a weaker crown on 11 Nov feed the 3-day averages used for the 13 Nov and 14–16 Nov caps.
- Two unknown steps tonight.
- Late Friday publication (6 Nov at ~17:53 CET) — still inside the window.
- Alignment of index days with the cap date is the dossier writers' reading of the regulation.

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-11_Cenovy-vestnik-122-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://www.zakonyprolidi.cz/cs/2026-203 (cookie wall, not read)
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d ; .../BZ%3DF... ; .../CZK%3DX...
- data/dossiers/2026-11-13/cz-diesel-max-13.md
