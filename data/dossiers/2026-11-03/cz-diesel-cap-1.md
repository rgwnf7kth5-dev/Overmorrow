# cz-diesel-cap-1
- **Claim:** The maximum price of diesel set by the Czech Finance Ministry for Tuesday 3 November 2026 is higher than CZK 49.45 per litre.
- **Criterion:** YES if the maximum retail price of diesel valid on 3 Nov 2026, published by the Ministry of Finance (price decree / announcement on mfcr.cz) on 2 Nov 2026, is higher than CZK 49.45 per litre. NO if it is CZK 49.45 or lower, or if the ministry sets no new cap for 3 Nov on 2 Nov (e.g. the weekend cap is carried over).
- **Event window:** 2026-11-02T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Prague). Cap fixed at 14:00, Cenový věstník issue and ČTK report shortly after.
- **Written at:** 2026-10-31T18:35Z. All read times below are 2026-10-31, between 17:59Z and 18:12Z unless stated otherwise.

## Schedule
- Legal basis for November: government decree No. 203/2026 Sb. (regulation 1–30 Nov 2026). § 2(4): "Ministerstvo financí každý pracovní den zveřejní maximální cenu benzinu na litr, maximální cenu nafty na litr a aritmetické průměry IØPHM v Cenovém věstníku pro následující den." § 3: the 31 Oct caps apply to 1 and 2 November — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203 (read 18:02Z).
- Monday 2 Nov is a working day, so the ministry must publish a cap for Tuesday 3 Nov on 2 Nov. The weekend carry-over rule (§ 2(5)) only covers non-working days up to the next working day; it does not extend the 31 Oct cap past Monday 2 Nov (decree 203/2026 § 3 and § 2(5); Cenový věstník 114/2026 states validity "na období 31. října 2026 až 2. listopadu 2026").
- Timing: the current cap's "termín stanovení" was 30 Oct 2026 14:00 — MF page https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (read 18:00Z). ČTK reported the 30 Oct caps at 14:11 (below).
- Cabinet extended the regulation and the diesel excise cut to 30 Nov on 26 Oct — MF press release https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 18:02Z) "Regulace cen pohonných hmot i snížení spotřební daně z nafty se prodlužují do 30. listopadu 2026"; "O víkendech a svátcích platí naposledy vyhlášená cena."

## How the cap is set
- Formula (decree 172/2026 § 2(2), same in 203/2026): CPHM = (IØPHM + RMPHM) × 1.21, where RMPHM = regulated margin CZK 2.50/l and IØPHM is the average of four 3-day moving averages: wholesale offer prices (incl. excise, excl. VAT) of the three largest wholesalers (ČEPRO, MOL/MOLIN, ORLEN Unipetrol/UIC) "pro aktuální a 2 předcházející pracovní dny", and a Platts-based price, "Platts Barges CIF NWE High za předcházející 3 pracovní dny navýšený o přirážku 90 USD/t pro naftu", converted at the ČNB exchange rate for the quotation day and at 845 kg/m³. Excise is adjusted to the rate valid for the day the cap applies. The cap is rounded down to whole haléře (§ 2(6)) — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172 (read 18:01Z); 203/2026 same structure — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203 (read 18:02Z).
- Check (own arithmetic): Cenový věstník 114/2026 diesel average 38.37 → (38.37 + 2.50) × 1.21 = 49.45. 113/2026: (38.57 + 2.50) × 1.21 = 49.69. Both match the published caps.
- **What 49.45 means:** a cap above 49.45 requires an unrounded IØPHM of at least about 38.376 CZK/l (49.46 / 1.21 − 2.50; own arithmetic). The 30 Oct average was published as 38.37 (unrounded somewhere in 38.365–38.375). So in practice YES requires the four-source average to rise by roughly 0.005–0.01 CZK/l or more from Friday's; an unchanged or lower average gives 49.45 or less.
- **Which days move on Monday (own reading of § 2(2); 28 Oct was a public holiday, not a working day):** the Fri 30 Oct calculation used wholesale offers of 27, 29, 30 Oct and Platts of 26, 27, 29 Oct. The Mon 2 Nov calculation will use wholesale offers of 29, 30 Oct and 2 Nov, and Platts of 27, 29, 30 Oct. So the change in each wholesale column = (Mon 2 Nov offer − Tue 27 Oct offer)/3; the change in the Platts column = (Fri 30 Oct Platts − Mon 26 Oct Platts)/3.
- Diesel excise: 8.011 CZK/l (cut from 9.95) in October and extended for November — MF press release 26 Oct (above); ČTK 30 Oct (below). No excise change between 2 and 3 Nov.

## Facts — daily diesel caps (Cenový věstník, MF; all with VAT, CZK/l)
Source for each: Cenový věstník PDFs, e.g. https://mf.gov.cz/assets/attachments/2026-10-30_Cenovy-vestnik-114-2026.pdf, issue pages listed at https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik (read 18:04–18:06Z). Format: valid for — cap (IØPHM diesel average; ČEPRO / MOLIN / UIC per litre / Platts+costs) — issue, published.
- 1 Oct — 48.72 (ČTK, below; not checked in the věstník)
- 2 Oct — 48.58 (37.65; 38.01/37.68/37.68/37.23) — 91/2026, 1 Oct
- 3–5 Oct — 48.54 (37.62) — 92/2026, 2 Oct
- 6 Oct — 48.38 (37.49) — 93/2026, 5 Oct
- 7 Oct — 47.97 (37.15) — 95/2026, 6 Oct
- 8 Oct — 47.23 (36.54) — 96/2026, 7 Oct
- 9 Oct — 47.29 (36.59) — 97/2026, 8 Oct
- 10–12 Oct — 47.67 (36.90) — 98/2026, 9 Oct
- 13 Oct — 48.36 (37.47) — 99/2026, 12 Oct
- 14 Oct — 48.61 (37.68) — 100/2026, 13 Oct
- 15 Oct — 48.63 (37.69) — 101/2026, 14 Oct
- 16 Oct — 48.77 (37.81) — 102/2026, 15 Oct
- 17–19 Oct — 48.89 (37.91) — 103/2026, 16 Oct
- 20 Oct — 48.67 (37.72) — 104/2026, 19 Oct
- 21 Oct — 48.61 (37.68) — 105/2026, 20 Oct
- 22 Oct — 48.60 (37.67) — 107/2026, 21 Oct
- 23 Oct — 48.70 (37.75) — 108/2026, 22 Oct
- 24–26 Oct — 48.69 (37.74; 37.70/37.72/37.72/37.83) — 109/2026, 23 Oct
- 27 Oct — 48.96 (37.97; 37.90/37.95/37.95/38.07) — 110/2026, 26 Oct
- 28–29 Oct — 49.46 (38.38; 38.27/38.30/38.30/38.63) — 112/2026, 27 Oct
- 30 Oct — 49.69 (38.57; 38.53/38.50/38.50/38.75) — 113/2026, 29 Oct
- 31 Oct–2 Nov — 49.45 (38.37; 38.49/38.36/38.36/38.28) — 114/2026, 30 Oct. "Sdělení Ministerstva financí o vyhlášení maximálních cen pohonných hmot na období 31. října 2026 až 2. listopadu 2026 … nafty … 49,45 Kč s DPH / litr."
- **Change statistics (own arithmetic, 21 changes from 1 Oct to 31 Oct):** 11 rises, 10 falls, no unchanged; sd of daily changes 0.31 CZK/l; mean absolute change 0.23. Smallest moves: −0.01 (twice), +0.02. Last two weeks (from 17 Oct): +0.12, −0.22, −0.06, −0.01, +0.10, −0.01, +0.27, +0.50, +0.23, −0.24.
- ČTK on the 30 Oct caps: "diesel 49.45 (−0.24) … Natural 95 43.87 (−0.39)"; diesel cap fell from 48.72 at the start to 47.23 by 8 Oct, then rose; average pump price of diesel 48.06 CZK/l (CCS data) — https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-o-vikendu-a-v-pondeli-klesnou/2893299 (published 2026-10-30 14:11, updated 14:21, read 17:59Z).

## Facts — wholesale trend
- Implied daily changes from the věstník columns (own arithmetic; each 3-day average change × 3 = new day minus dropped day):
  - Platts column: Thu 29 Oct minus Fri 23 Oct = 3 × (38.28 − 38.75) = −1.41 CZK/l; Tue 27 minus Thu 22 = +0.36; Mon 26 minus Wed 21 = +1.68.
  - Wholesale offers, Fri 30 Oct minus Mon 26 Oct: ČEPRO −0.12, MOLIN −0.42, UIC −0.42 CZK/l.
- Futures proxy for diesel (NY Harbor ULSD futures, HO=F, USD/gal, daily close; Yahoo Finance https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d, read 18:07Z): 23 Oct 4.9842; 26 Oct 4.9120; 27 Oct 4.7752; 28 Oct 4.8152; 29 Oct 4.7360; 30 Oct 4.7905. Fri 30 Oct vs Mon 26 Oct: −2.5% (own arithmetic). Check: Thu 29 vs Fri 23 is −5.0%, which matches the −1.41 CZK/l implied Platts move above (about −5% on a pre-excise price near 30 CZK/l), so the proxy has tracked the Platts column. It is a US contract, not the NWE barge price used in the formula.
- Brent (BZ=F, USD/bbl, daily close; Yahoo Finance https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d, read 18:07Z): 23 Oct 116.72; 26 Oct 115.81; 27 Oct 113.88; 28 Oct 115.32; 29 Oct 114.88; 30 Oct 117.64. Crude rose on Friday while the diesel contract rose less; over 26–30 Oct crude +1.6%, diesel futures −2.5% (own arithmetic).
- ČNB USD/CZK: 26 Oct 21.782; 27 Oct 21.834; 29 Oct 21.862; 30 Oct 21.814 — ČNB daily fixing, text export from cnb.cz (section financni-trhy/devizovy-trh, file vybrane.txt?mena=USD&od=20.10.2026&do=31.10.2026; full URL withheld because the path contains a word the validator blocks) (read 18:05Z). 30 Oct vs 26 Oct +0.15%.
- Rough sizing (own arithmetic): a −2.5% move on a pre-excise Platts price of about 30 CZK/l is about −0.75 CZK/l on the day; divided by 3 for the moving average and by 4 for the four-source mean, about −0.06 CZK/l on IØPHM, or about −0.08 on the cap, before the Monday wholesale offers are known. The wholesale columns' change depends on Monday 2 Nov offers vs Tuesday 27 Oct offers; none is known yet.
- Background: Russia extended its diesel export ban to the end of January; Ukraine hit the Ufa refinery with drones (night of 30–31 Oct) — desk running notes, data in scratchpad running.json (no URL; treat as unverified here). Middle East war since late February, Strait of Hormuz blocked — ČTK 30 Oct (above).

## Base rate
- No class in pipeline/reference-classes.json fits a daily regulated-price direction. Loose own count: of 21 day-to-day cap changes in October 2026, 11 were rises and 10 falls (věstník series above); no cap was ever unchanged.

## Schedule slip
- `stats-release`: 0.006 [estimate], own 0/15 (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-31T18:13Z). The decree obliges publication every working day; MF has published every working day in October (21 issues found, including on 26 Oct, the day of the extension). A missed Monday publication would make the claim NO.

## Risks
- The threshold sits exactly at the current cap; a change of one haléř decides it. Rounding down to whole haléře makes ties resolve NO.
- Weekend news (Middle East, Russian refinery strikes, export bans) can move Monday's wholesale offers, which enter the average directly on Monday (current-day wholesale prices count).
- The Platts input for Fri 30 Oct is already fixed but not public; HO futures are only a proxy for NWE barges.
- Formula change: none announced for November; decree 203/2026 keeps the margin at 2.50 and the same averaging.

## Sources
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172
- https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik
- https://mf.gov.cz/assets/attachments/2026-10-30_Cenovy-vestnik-114-2026.pdf and issues 91–113/2026 (same pattern, e.g. 2026-10-29_Cenovy-vestnik-113-2026.pdf)
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559
- https://www.ceskenoviny.cz/zpravy/cenove-stropy-na-pohonne-hmoty-o-vikendu-a-v-pondeli-klesnou/2893299
- cnb.cz daily USD/CZK fixing text export (see Facts)
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d
- Failed: https://www.businessinfo.cz/clanky/vlada-prodlouzila-danovou-ulevu-na-naftu-a-upravila-pravidla-pro-vypocet-maximalnich-cen/ (client error); e-sbirka.gov.cz (JS only).
