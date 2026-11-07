# cz-diesel-max-10 (interval) and cz-diesel-below-10 (derived)
- **Interval claim:** The maximum retail price of diesel (B7) that the Ministry of Finance sets in the Cenový věstník published on Monday 9 November 2026 as valid for Tuesday 10 November 2026, in CZK per litre including VAT.
- **Derived claim cz-diesel-below-10:** The maximum price of diesel set by the Finance Ministry on 9 November 2026 for Tuesday 10 November is lower than CZK 47.28 per litre, the cap in force from 7 to 9 November.
- **Criterion:** the "b) nafty" figure in the Cenový věstník issued on 9 Nov 2026 for 10 Nov (mf.gov.cz, or as reported by ČTK). Derived: YES if that figure is lower than 47.28; NO if it is 47.28 or higher, or if no cap for 10 Nov is published on 9 Nov. The interval claim is void if no cap for 10 Nov is published on 9 Nov.
- **Event window:** 2026-11-09T00:00:00+01:00 to 2026-11-09T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-07T18:10:00Z

## Schedule
- Government regulation 203/2026 Sb. (in force 1-30 Nov): "Ministerstvo financí každý pracovní den zveřejní maximální cenu ... v Cenovém věstníku pro následující den" (§ 2(4)); a cap set for a non-working day carries over to the next working day (§ 2(5)); "zaokrouhlují na celé haléře dolů" (§ 2(6)); if an input is unknown, "použije se poslední zveřejněná hodnota" (§ 2(7)) — https://www.zakonyprolidi.cz/cs/2026-203 (read 2026-11-07T17:55Z).
- Latest: Cenový věstník 119/2026, dated 6 Nov 2026, for 7-9 Nov: diesel 47.28, petrol 41.42 — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-119-2026-65664 (page time 06.11.2026 14:00, PDF https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf, read 2026-11-07T17:53Z) "47,28 Kč s DPH / litr".
- Publication time on Mondays: věstníky 93 (5 Oct, 14:03), 99 (12 Oct, 14:23), 104 (19 Oct, 14:18), 110 (26 Oct, 14:04), 115 (2 Nov, page time 20:09) — MF věstník pages (read 2026-11-07T17:54Z). Every working day since 1 Oct has had its věstník.

## Facts
- Formula (§ 2(2) NV 203/2026): C = (I + 2.50) × 1.21, where I is the mean of (a) the offer prices incl. excise, ex VAT, of the three largest wholesalers — Unipetrol Index Czech, MOLIN, ČEPRO base prices — "pro aktuální a 2 předcházející pracovní dny", and (b) Platts Barges CIF NWE High diesel "za předcházející 3 pracovní dny" plus USD 90/t; density 845 kg/m3, ČNB rate of the quote day — https://www.zakonyprolidi.cz/cs/2026-203 (read 2026-11-07T17:55Z). The věstník table shows four 3-day averages (ČEPRO, MOLIN, UIC, Platts) and their mean.
- Check on věstník 119: diesel ČEPRO 36.89, MOLIN 36.52, UIC 36,518.33 per 1000 l, Platts+costs 36.39, mean 36.58; (36.58 + 2.50) × 1.21 = 47.29, published 47.28 (rounded down from the unrounded mean) — PDF 119 (above) "Motorová nafta 36,89 36,52 36518,33 36,39 36,58".
- **Days used (own reading of § 2(2), same as earlier dossiers):** the věstník of 9 Nov uses wholesale offers of Thu 5, Fri 6 and Mon 9 Nov and Platts of Wed 4, Thu 5 and Fri 6 Nov. Against the 6 Nov věstník it drops wholesale of Wed 4 and Platts of Tue 3, and adds wholesale of Mon 9 and Platts of Fri 6. So about half the change is already fixed by Friday's market close (Platts Fri 6 is set but paywalled); the wholesale offers of Monday 9 are not known until Monday.
- Market moves since: Brent fell about 17% over the week; on Friday about −0.6% at 97.7 USD by 19:30 CET — FXstreet.cz/ČTK https://www.fxstreet.cz/komodity-ceny-ropy-dnes-mirne-klesaji-za-cely-tyden-ztraceji-zhruba-17-procent.html (published 2026-11-06 19:50+01:00, read 2026-11-07T17:57Z) "Od začátku týdne ztrácí cena Brentu zhruba 17 procent."
- US proxy (NY Harbor ULSD futures, USD/gal, daily closes): 30 Oct 4.7905; 2 Nov 4.4216; 3 Nov 4.5306; 4 Nov 4.2055; 5 Nov 4.3519; 6 Nov 4.3317. Brent futures: 3 Nov 103.60; 4 Nov 94.62; 5 Nov 98.29; 6 Nov 98.32 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d and https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d (regularMarketTime 2026-11-06 21:59Z, read 2026-11-07T17:56Z). USD/CZK 6 Nov 21.66 — https://query1.finance.yahoo.com/v8/finance/chart/USDCZK%3DX?range=1mo&interval=1d (read 2026-11-07T17:56Z). Proxy, not Platts; European gasoil not readable.
- **Proxy model (own arithmetic, data above):** regress each published diesel cap change on 1.21 × the change of the 3-working-day mean of ULSD (CZK/l) over the 3 working days before publication (28 Oct excluded as a Czech holiday), 16 steps 14 Oct-6 Nov: slope 0.56, correlation 0.79, residual sd 0.21 CZK (raw sd of the same steps 0.34). Other day alignments fit worse (correlation 0.52-0.73). The step to the 10 Nov cap drops ULSD 3 Nov (4.5306) and adds 6 Nov (4.3317): full pass-through −0.49 CZK, at the fitted slope −0.28 CZK, i.e. about 47.00. This is an estimate from a US proxy; the Czech wholesale offers of Monday are unknown.
- Published caps for diesel, CZK/l (valid date: cap; věstník No.) — PDFs at https://mf.gov.cz/assets/attachments/<date>_Cenovy-vestnik-<No>-2026.pdf (read 2026-11-07T17:54Z): 1 Oct 48.72 (90); 2 Oct 48.58 (91); 3-5 Oct 48.54 (92); 6 Oct 48.38 (93); 7 Oct 47.97 (95); 8 Oct 47.23 (96); 9 Oct 47.29 (97); 10-12 Oct 47.67 (98); 13 Oct 48.36 (99); 14 Oct 48.61 (100); 15 Oct 48.63 (101); 16 Oct 48.77 (102); 17-19 Oct 48.89 (103); 20 Oct 48.67 (104); 21 Oct 48.61 (105); 22 Oct 48.60 (107); 23 Oct 48.70 (108); 24-26 Oct 48.69 (109); 27 Oct 48.96 (110); 28-29 Oct 49.46 (112); 30 Oct 49.69 (113); 31 Oct-2 Nov 49.45 (114); 3 Nov 49.35 (115); 4 Nov 49.00 (116); 5 Nov 48.79 (117); 6 Nov 47.91 (118); 7-9 Nov 47.28 (119).
- Diesel mean index (I) in the same věstníky, 3-6 Nov: 38.29, 38.00, 37.83, 37.10, 36.58; Platts column 38.30, 37.78, 37.61, 36.78, 36.39 (PDFs 115-119).
- ČTK: caps fell all week; excise on diesel cut to 8.011 CZK/l from 1 Oct; margin capped at 2.50 — https://www.ceskenoviny.cz/zpravy/maximalni-ceny-nafty-i-benzinu-o-vikendu-opet-o-desitky-haleru-klesnou/2893299 (published 2026-11-06 14:13 CET, read 2026-11-07T17:53Z) "Maximální ceny ministerstvo vypočítává na základě klouzavého třídenního průměru velkoobchodních cen."
- Same ČTK item links an analysts' piece headed "Analytici: Benzin bude dál zlevňovat, cena nafty bude spíše stagnovat" (headline only; not opened).

## Number forecast
- Consensus stand-in: 47.28, the last published cap (no analyst consensus exists for a daily administrative figure; random walk).
- `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` (run 2026-11-07T17:53Z): {"basis":"published or pooled","n":0,"pooled_factor":1.291} — no recorded surprises.
- Scale, basis "published": sd of publication-to-publication changes of the diesel cap from the MF věstníky, last 15 changes (caps valid 16 Oct-7 Nov): 0.349 CZK (rms 0.352); all 26 changes since 1 Oct: sd 0.360. Changes since 16 Oct: +0.12, −0.22, −0.06, −0.01, +0.10, −0.01, +0.27, +0.50, +0.23, −0.24, −0.10, −0.35, −0.21, −0.88, −0.63.
- `node scripts/refdata/models.mjs quantiles 47.28 0.349 1.6`: q10 46.564, q50 47.28, q90 47.996. Derived "< 47.28": `models.mjs derive 46.565 47.28 47.995 '<' 47.28` = 0.500 by construction (threshold equals the centre).
- **Documented reason to move the centre (for consensus_note):** the formula uses market prices already fixed by Friday's close for about half of the step (Platts) and the wholesale offers follow the market with about a one-day lag; the proxy model above gives a step of about −0.28 (centre about 47.00) with residual sd 0.21. With that centre, `models.mjs quantiles 47.00 0.211 1.6` gives q10 46.57, q50 47.00, q90 47.43. The editor chooses; both are recorded here.

## Base rate
- No class. Previous claims on this figure: cz-diesel-cap-1 … -9 in editions 3-8 Nov (data/editions/2026-11-0*.json).

## Schedule slip
```
class                         prior   own         rate (P that the event slips)
other-scheduled               0.07    4/35        0.108  [estimate]
```
(`node scripts/refdata/slip.mjs`, run 2026-11-07T17:53Z.) The duty to publish every working day held on every working day since 1 Oct (27 of 27); § 2(7) uses the last published input if one is missing, so a missing input does not stop publication. Late publication (2 Nov at 20:09) still fell on the same day.

## Board
- cz-fuel-cap-december: no reported plan for the cabinet to decide on 9 Nov on extending the regulation beyond 30 Nov. The current regulation (NV 203/2026) is dated 26 Oct, five days before the October regulation (NV 172/2026) ran out; the government "prodloužila regulaci cen paliv do 30. listopadu" (Echo24 headline 2-3 Nov, via Google News RSS, read 2026-11-07T17:58Z; not opened). The 9 Nov programme on ODOK could not be read. By the October pattern a December decision would come around 23 Nov (own inference).

## Risks
- Monday wholesale offers could rebound if oil jumps over the weekend (Iran talks, tanker attacks: Brent +$3 on 5 Nov).
- Exactly 47.28 resolves the derived claim NO; rounding is down.
- The proxy uses US ULSD, not European diesel; cracks can diverge.
- The day alignment of § 2(2) is our reading; MF does not print which days it used.
- Government could change or end the regulation (no sign of that before 30 Nov).

## Sources
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-119-2026-65664 and pages/PDFs of věstníky 85-118
- https://mf.gov.cz/assets/attachments/2026-11-06_Cenovy-vestnik-119-2026.pdf
- https://www.zakonyprolidi.cz/cs/2026-203
- https://www.ceskenoviny.cz/zpravy/maximalni-ceny-nafty-i-benzinu-o-vikendu-opet-o-desitky-haleru-klesnou/2893299
- https://www.fxstreet.cz/komodity-ceny-ropy-dnes-mirne-klesaji-za-cely-tyden-ztraceji-zhruba-17-procent.html
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=1mo&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/USDCZK%3DX?range=1mo&interval=1d
- Google News RSS: oil prices (en), ropa brent (cs), regulace cen paliv (cs)
- data/dossiers/2026-11-08/cz-diesel-cap-9.md
