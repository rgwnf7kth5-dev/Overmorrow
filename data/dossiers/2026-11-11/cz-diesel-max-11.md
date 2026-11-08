# cz-diesel-max-11 (interval)
- **Claim:** The maximum retail price of diesel (B7) that the Czech Ministry of Finance sets in the Cenový věstník published on Tuesday 10 November 2026 as valid for Wednesday 11 November 2026, in CZK per litre including VAT.
- **Criterion:** The "b) nafty" figure in the Cenový věstník issued on 10 Nov 2026 for 11 Nov (mf.gov.cz, or as reported by ČTK). Void if no cap for 11 Nov is published on 10 Nov.
- **Event window:** 2026-11-10T00:00:00+01:00 to 2026-11-10T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-08T18:10Z. Read times as stated.
- **Series status:** the věstník of 9 Nov (sets the cap for Tue 10 Nov) is not yet published; the latest věstník is No. 119 of 6 Nov (caps for 7-9 Nov). So the caps "for 9 and 10 Nov" do not exist yet: 9 Nov carries the 47.28 set on 6 Nov, and the 10 Nov cap comes out on Monday afternoon. The editor should re-anchor to that figure (see Number forecast).

## Schedule
- Government regulation 203/2026 Sb. (in force 1-30 Nov): "Ministerstvo financí každý pracovní den zveřejní maximální cenu ... v Cenovém věstníku pro následující den" (§ 2(4)); a cap set for a non-working day carries over (§ 2(5)); amounts rounded down to whole haléř (§ 2(6)); if an input is unknown "použije se poslední zveřejněná hodnota" (§ 2(7)) — https://www.zakonyprolidi.cz/cs/2026-203 (as read for data/dossiers/2026-11-10/cz-diesel-max-10.md on 2026-11-07T17:55Z; the page returned only a cookie notice on 2026-11-08, not re-read).
- 10 Nov is a Tuesday and a working day, 11 Nov a Wednesday; the regulation runs to 30 Nov, so the věstník of 10 Nov is due.
- MF věstník list, latest entry "Cenový věstník 119/2026, 06. listopadu 2026"; every working day since 1 Oct has an entry (věstníky 91-119) — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026 (read 2026-11-08T17:53Z) "Cenový věstník 119/2026 06. listopadu 2026".
- Publication times: Monday věstníky 14:03-14:23 on 5, 12, 19 and 26 Oct; page time 20:09 on 2 Nov (data/dossiers/2026-11-10/cz-diesel-max-10.md, read 2026-11-07T17:54Z). Weekday times for Tuesdays not recorded; the claim window runs to 23:59, so lateness within the day does not matter.

## Facts
- Formula (§ 2(2) NV 203/2026): C = (I + 2.50) × 1.21, where I is the mean of four prices (ex VAT, incl. excise, CZK/l): offers of the three largest wholesalers (Unipetrol Index Czech, MOLIN, ČEPRO base prices) averaged over the current and two preceding working days, and the Platts Barges CIF NWE High diesel quote over the preceding 3 working days plus USD 90/t (density 845 kg/m3, ČNB rate), rounded down to haléř — https://www.zakonyprolidi.cz/cs/2026-203 (read 2026-11-07T17:55Z) "pro aktuální a 2 předcházející pracovní dny". Each of the four columns is a 3-day average, so each day's step swaps one day out and one in (the dossier of 10 Nov gives the day alignment, which is the writer's reading; MF does not print the days).
- Check on věstník 119: columns ČEPRO 36.89, MOLIN 36.52, UIC 36.52, Platts+costs 36.39, mean 36.58; (36.58 + 2.50) × 1.21 = 47.29, published 47.28 (rounded down from the unrounded mean) — https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf (page time 2026-11-06 14:00, read 2026-11-07T17:53Z) "47,28 Kč s DPH / litr".
- Latest cap: diesel 47.28 and petrol 41.42 for 7-9 Nov — same PDF.
- What drives the day-to-day change: the moving 3-day averages of Czech wholesale offers and of the Platts quote (so Brent/gasoil moves and the USD/CZK rate, passed on with a lag of 1-3 days), plus the excise change (diesel excise cut to 8.011 CZK/l from 1 Oct) and the fixed 2.50 margin. Quote: "Maximální ceny ministerstvo vypočítává na základě klouzavého třídenního průměru velkoobchodních cen." — ČTK https://www.ceskenoviny.cz/zpravy/maximalni-ceny-nafty-i-benzinu-o-vikendu-opet-o-desitky-haleru-klesnou/2893299 (published 2026-11-06 14:13, read 2026-11-07T17:53Z).
- Market backdrop: Brent fell about 17% in the week to 6 Nov, to about 97.7 USD on Friday evening — https://www.fxstreet.cz/komodity-ceny-ropy-dnes-mirne-klesaji-za-cely-tyden-ztraceji-zhruba-17-procent.html (published 2026-11-06 19:50, read 2026-11-07T17:57Z) "Od začátku týdne ztrácí cena Brentu zhruba 17 procent." Closes of NY Harbor ULSD futures (USD/gal): 3 Nov 4.5306; 4 Nov 4.2055; 5 Nov 4.3519; 6 Nov 4.3317; Brent 3 Nov 103.60; 4 Nov 94.62; 5 Nov 98.29; 6 Nov 98.32; USD/CZK 6 Nov 21.66 — Yahoo chart API https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d (last bar 2026-11-06, read 2026-11-07T17:56Z; not re-read, markets closed on 8 Nov). A US proxy, not Platts.
- Published caps for diesel, CZK/l (valid date: cap): 1 Oct 48.72; 2 Oct 48.58; 3-5 Oct 48.54; 6 Oct 48.38; 7 Oct 47.97; 8 Oct 47.23; 9 Oct 47.29; 10-12 Oct 47.67; 13 Oct 48.36; 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17-19 Oct 48.89; 20 Oct 48.67; 21 Oct 48.61; 22 Oct 48.60; 23 Oct 48.70; 24-26 Oct 48.69; 27 Oct 48.96; 28-29 Oct 49.46; 30 Oct 49.69; 31 Oct-2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7-9 Nov 47.28. Source: MF věstníky 90-119 PDFs (https://mf.gov.cz/assets/attachments/<date>_Cenovy-vestnik-<No>-2026.pdf), read 2026-11-07T17:54Z in data/dossiers/2026-11-10/cz-diesel-max-10.md; no new věstník since (list read 2026-11-08T17:53Z).
- Changes between consecutive caps (26 changes since 1 Oct): −0.14, −0.04, −0.16, −0.41, −0.74, +0.06, +0.38, +0.69, +0.25, +0.02, +0.14, +0.12, −0.22, −0.06, −0.01, +0.10, −0.01, +0.27, +0.50, +0.23, −0.24, −0.10, −0.35, −0.21, −0.88, −0.63 (own arithmetic from the list above).
- Proxy model from the dossier of 10 Nov (own regression, 16 steps 14 Oct-6 Nov): cap change ≈ 0.56 × 1.21 × change of the 3-day mean of ULSD in CZK/l; correlation 0.79, residual sd 0.21 CZK. Applied: the 10 Nov cap (věstník 9 Nov) drops ULSD 3 Nov (4.5306) and adds 6 Nov (4.3317), fitted step about −0.28, so about 47.00. The 11 Nov cap (věstník 10 Nov) drops 4 Nov (4.2055, the low of the week) and adds Mon 9 Nov (unknown). If Monday closes at the Friday level 4.33, the 3-day mean rises 0.042 USD/gal, which is +0.29 CZK/l at full pass-through and about +0.16 at the fitted slope, i.e. the 11 Nov cap about 47.16 (47.00 + 0.16). Each 0.10 USD/gal on Monday's ULSD moves it by about ±0.13 CZK. This is a chain of two estimates from a US proxy, not a forecast with known error.
- ČTK headline linked from the 6 Nov item: "Analytici: Benzin bude dál zlevňovat, cena nafty bude spíše stagnovat" (headline only, not opened).

## Number forecast
- Consensus: 47.28, the last published cap (persistence); no analyst forecast of the daily cap exists. Documented reason to differ: the proxy chain above gives about 47.16 for 11 Nov (down 0.12 from the last cap), well inside the scale. Stub keeps persistence 47.28 as the stated consensus; the editor should replace it with the 9 Nov cap once published, since the 11 Nov cap is that cap plus one step.
- `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` (run 2026-11-08T17:53Z, key as in pipeline/reference-data/series.json): n=0 recorded surprises, pooled_factor 1.291 per the 7 Nov run; no usable series scale.
- Scale, basis "published": sd of changes between consecutive published caps, last 15 changes (caps valid 20 Oct to 7-9 Nov): 0.349 CZK (rms 0.352); all 26 changes since 1 Oct: sd 0.360; last 10: 0.419 (the two latest steps are −0.88 and −0.63). Scale used 0.35 (own arithmetic from the changes above; same figure as in the 10 Nov dossier).
- `node scripts/refdata/models.mjs quantiles 47.28 0.35 1.6` → q10 46.562, q50 47.28, q90 47.998.
- Horizon: the sd of a one-step change is the scale; the claim is one step beyond the 10 Nov cap that is still unknown on 8 Nov, so the spread of the 2-step ahead outcome from the 6 Nov cap is wider than one step (if steps were independent, 0.35 × √2 ≈ 0.50; the editor can use the 10 Nov cap as the new centre with 0.35 once it exists).

## Base rate
- No class. Past claims on this series: cz-diesel-cap-1 to -9 and cz-diesel-max-10 (data/editions, data/dossiers/2026-11-10/).
- Own count: of the 26 steps since 1 Oct, 14 down, 12 up; after two consecutive falls of 0.5 or more (7 Oct-8 Oct: −0.41, −0.74 then +0.06; 5-6 Nov: −0.88, −0.63) the single earlier case was followed by +0.06 (n=1, no inference).

## Schedule slip
```
other-scheduled               0.07    4/51        0.078  [estimate]
```
(`node scripts/refdata/slip.mjs`, run 2026-11-08T17:50Z.) The duty to publish held on every working day since 1 Oct (the MF list shows věstníky 91-119; the 10 Nov dossier counted 27 of 27 working days to 6 Nov). § 2(7) uses the last value if an input is missing, so a missing input does not stop publication. No sign of a change of the regulation before 30 Nov in the sources read.

## Board
- cz-fuel-cap-december: government decision on extending beyond 30 Nov not expected on 10 Nov by the October pattern (the October regulation was extended about five days before expiry); the Echo24 headline "prodloužila regulaci cen paliv do 30. listopadu" was seen via Google News RSS on 2-3 Nov (data/dossiers/2026-11-10/cz-diesel-max-10.md). Not read again.

## Risks
- Monday's and Tuesday's wholesale offers and Platts: an oil rebound (Iran talks, tanker attacks) or a further drop shifts the cap by 0.3 CZK per day on a typical day.
- The 10 Nov cap is unknown: the claim sits two steps from the last published figure.
- Day alignment of the formula is our reading; the proxy is US ULSD, not European gasoil.
- A government change to the regulation (no sign), or a late věstník (still same day).
- Exactly equal to a threshold is possible: caps print to the haléř and are rounded down.

## Sources
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf and věstníky 90-118
- https://www.zakonyprolidi.cz/cs/2026-203
- https://www.ceskenoviny.cz/zpravy/maximalni-ceny-nafty-i-benzinu-o-vikendu-opet-o-desitky-haleru-klesnou/2893299
- https://www.fxstreet.cz/komodity-ceny-ropy-dnes-mirne-klesaji-za-cely-tyden-ztraceji-zhruba-17-procent.html
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d
- data/dossiers/2026-11-10/cz-diesel-max-10.md
