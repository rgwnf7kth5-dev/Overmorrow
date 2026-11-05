# cz-diesel-cap-9
- **Claim:** The maximum price of diesel in force in the Czech Republic on Saturday 7 November 2026, as set by the Finance Ministry, is lower than CZK 47.91 per litre, the cap in force on Friday 6 November.
- **Criterion:** YES if the maximum retail price of diesel valid on 7 Nov 2026, as set by the Ministry of Finance (Cenový věstník / announcement on mf.gov.cz, or ČTK), is lower than CZK 47.91 per litre. NO if it is CZK 47.91 or higher, or if no cap is in force on 7 Nov.
- **Deadline / event window:** 2026-11-06T06:00:00+01:00 to 2026-11-07T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-05T17:58:51Z

## Schedule
- Latest notice — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (updated 5.11.2026 14:00, read 2026-11-05T17:47Z) "Termín stanovení: 5. listopadu 2026 ve 14:00", effective 6 Nov 00:00-24:00; regulation runs 1-30 Nov.
- Friday publication: working-day duty; a cap set on Friday applies on Saturday and carries over non-working days to the next working day; precedent 31 Oct-2 Nov 49.45 set on Fri 30 Oct — data/dossiers/2026-11-07/cz-diesel-cap-7.md (per dossier, decree 203/2026 § 2(5)).
- Next cap due Fri 6 Nov about 14:00, valid Sat 7 Nov.

## Facts
- Cap for Fri 6 Nov: diesel 47.91, down 88 haléřů; petrol 41.84, down 80 — ČTK https://www.ceskenoviny.cz/zpravy/pokles-maximalnich-cen-pohonnych-hmot-v-patek-zrychli/2893299 (published 2026-11-05 14:13, read 2026-11-05T17:47Z) "sníží o 88 haléřů na 47,91 korun za litr"; "nejvýše za 41,84 koruny".
- Caps fell all week — same ČTK item: "Cenové stropy klesají po celý tento týden." Diesel series 49.45 (31 Oct-2 Nov), 49.35, 49.00, 48.79, 47.91 — data/dossiers/2026-11-07/cz-diesel-cap-7.md and ČTK above. Regime low diesel 47.23 on 8 Oct; petrol peak 47.21 in mid-Oct.
- Pump averages (CCS), week to about 4 Nov: Natural 95 42.39, diesel 48.08 — ČTK https://www.ceskenoviny.cz/zpravy/pokles-maximalnich-cen-pohonnych-hmot-v-patek-zrychli/2893299 "Za naftu nyní řidiči zaplatí průměrně 48,08 Kč/l".
- Formula: (mean of four 3-day averages + 2.50) × 1.21, wholesale ČEPRO, MOLIN and UIC offers including the calculation day and Platts for the previous 3 working days, rounded down — per cz-diesel-cap-7 (the MF page names ORLEN and MOL; cenový výměr not opened). ČTK says rolling three-day average of wholesale prices plus a CZK 2.50 margin.
- **Days compared (own reading):** cap for 6 Nov uses wholesale 3, 4, 5 Nov and Platts 2, 3, 4 Nov. Cap for 7 Nov uses wholesale 4, 5, 6 Nov and Platts 3, 4, 5 Nov. Czech wholesale seems to follow the prior day's close, so the steep 4 Nov close entered wholesale only on 5 Nov.
- NY Harbor ULSD closes, USD/gal, US proxy: 30 Oct 4.7905; 2 Nov 4.4216; 3 Nov 4.5306; 4 Nov 4.2055; 5 Nov 4.3148 (session print, not a settlement) — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d (read 2026-11-05T17:48Z).
- RBOB gasoline, USD/gal, US proxy: 30 Oct 3.3120; 2 Nov 2.9001; 3 Nov 2.9355; 4 Nov 2.7286; 5 Nov 2.7442 (session print) — https://query1.finance.yahoo.com/v8/finance/chart/RB%3DF?range=10d&interval=1d (read 2026-11-05T17:48Z).
- USD/CZK 21.63-21.80 in the period — https://query1.finance.yahoo.com/v8/finance/chart/USDCZK%3DX?range=5d&interval=1d (read 2026-11-05T17:54Z).
- Unknown at writing: Czech wholesale offers, gasoil and gasoline cracks, Platts values, 6 Nov inputs. No European product quote was readable.
- Rough estimate, own arithmetic with the US proxy and the one-day lag above: the step to the 6 Nov cap implied -1.35 and came in at -0.88, about 65%. For 7 Nov the step drops the 2 Nov close and adds the 5 Nov print, -0.107 USD/gal over three days, about -0.25 before pass-through and -0.16 at 65%; cap about 47.66-47.75 if the 5 Nov print holds. Very approximate.

## Base rate
- No class fits. Same figure was asked with thresholds 48.00 and 48.50 in edition 2026-11-07 (cz-diesel-cap-7, -8), unresolved at writing; 47.91 is already below both.
- October daily changes in the diesel cap: sd 0.31, mean absolute 0.23 (per dossier cz-diesel-cap-5, via cz-diesel-cap-7).

## Schedule slip
- `other-scheduled`: prior 0.07, own 4/21, rate 0.164 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-05T17:47Z). The working-day duty held on 21 of 21 October working days and on every November day so far; no sign of change. A cap carried over unchanged resolves NO.

## Risks
- Threshold is last cap: any rebound on Iran news on 5-6 Nov, or rising diesel cracks, can flip the sign; ULSD rose on 5 Nov.
- Exactly 47.91 resolves NO; rounding is down.
- The proxy lag is own inference from one step.
- Same underlying figure as cz-diesel-cap-7 and -8 in the previous edition.

## Sources
- https://www.ceskenoviny.cz/zpravy/pokles-maximalnich-cen-pohonnych-hmot-v-patek-zrychli/2893299
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/RB%3DF?range=10d&interval=1d
- https://query1.finance.yahoo.com/v8/finance/chart/USDCZK%3DX?range=5d&interval=1d
- data/dossiers/2026-11-07/cz-diesel-cap-7.md
