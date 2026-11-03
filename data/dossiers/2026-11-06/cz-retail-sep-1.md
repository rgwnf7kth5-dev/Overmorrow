# cz-retail-sep-1
- **Claim:** ČSÚ's first estimate puts real year-on-year growth of Czech retail sales excluding motor vehicles in September 2026 at … %. (Interval claim.)
- **Criterion:** The year-on-year change in percent, real and adjusted for working days, of retail sales excluding motor vehicles for September 2026 in ČSÚ's release "Maloobchod – září 2026", published on 5 Nov 2026. Later revisions do not count. Void if not published by 23:59 Prague time on 5 Nov 2026.
- **Deadline:** 2026-11-05T23:59:00+01:00. Release 09:00 Prague.
- **Written at:** 2026-11-03T18:15Z

## Schedule
- ČSÚ's August release gives the next release date: 5 November 2026 — https://csu.gov.cz/rychle-informace/maloobchod-srpen-2026 (published 2026-10-08, read 2026-11-03T18:04Z).
- Calendar shows Retail Sales YoY Sep at 08:00 UTC, 09:00 Prague, on 5 Nov — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z).

## Which figure
- Calendar-adjusted (working days). ČSÚ headline — https://csu.gov.cz/rychle-informace/maloobchod-srpen-2026 "Maloobchodní tržby se v srpnu reálně meziročně zvýšily o 4,3 % a meziměsíčně o 0,2 %."; note "Meziroční vývoj je publikován po očištění o vliv počtu pracovních dnů." The release page has no unadjusted y/y figure; ČTK and calendars report the same adjusted figure.

## Consensus
- 4.7% y/y, previous 4.3%; calendar's own forecast 4.5%; m/m own forecast 0.3% — https://tradingeconomics.com/czech-republic/calendar (page updated 2026-11-02, read 2026-11-03T18:12Z). Single source; provider's poll base unknown. The retail-sales page of the same site showed a blank consensus and an own forecast of 3.0% at the same time (https://tradingeconomics.com/czech-republic/retail-sales-annual, read 2026-11-03T18:10Z): treat the 4.7% as thin.
- One named bank figure is in the signals file. No ČTK or Reuters poll found.

## Facts
- First-release path (adjusted y/y, ex-autos): June later revised to 3.4 — https://www.ceskenoviny.cz/zpravy/2869894; July 4.8 first, 5.1 revised — https://www.ceskenoviny.cz/zpravy/2869894 (published 2026-09-04) and https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374; August 4.3 first — https://csu.gov.cz/rychle-informace/maloobchod-srpen-2026.
- August composition: non-food +7.4, food +3.0, fuel −3.2, internet +15; m/m 0.2 — https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374 (published 2026-10-08 09:15, read 2026-11-03T18:06Z) "Nejvyšší růst jsme tradičně zaznamenali u internetových prodejců".
- Analysts expect about 3.5–4.5% for full-year 2026: Pour's average, Krček 4.3, Marek up to 4.5, Novák 3.5–4 — https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374.
- Citfin's Novák: consumer confidence fell in recent months, not yet visible in sales — https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374. Creditas's Dufek: motorists fuelling across the Polish border — https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374.
- Fuel caps were in force from 1 Oct, so not in September — https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299.
- September 2026 had one working day fewer than September 2025 (own count: 21 v 22, with 28 Sep on a Monday in 2026, a Sunday in 2025), which the adjusted figure removes.
- First release; ČSÚ revises the previous month and publishes final 2026 months in March 2027 — https://csu.gov.cz/rychle-informace/maloobchod-srpen-2026.

## Usual surprise
- **Scale 0.43 pp, basis pooled.** Sourced surprises (actual − consensus, first figures): Czech Jul +0.3 (4.8 v 4.5), Aug +0.1 (4.3 v 4.2) — https://tradingeconomics.com/czech-republic/retail-sales-annual; Poland Aug −0.4 (3.8 v 4.2), Sep −0.4 (3.3 v 3.7) — https://tradingeconomics.com/poland/retail-sales-annual; euro area Jul −0.5 (0.6 v 1.1), Aug −0.2 (0.8 v 1.0) — https://tradingeconomics.com/euro-area/retail-sales-annual, all read 2026-11-03T18:12Z. RMS of six = 0.34; × pooled factor 1.25 = 0.43. Own arithmetic.
- Hungary and Slovakia pages had no consensus. `series.mjs` has no Czech retail series. Thin sample: December 2025 sales "significantly beat" both Erste and the market, no figure given — https://www.erstegroup.com/de/research/report/en/SR429428 (read 2026-11-03T18:10Z).

## Base rate
- No class for a number claim.

## Schedule slip
- `stats-release`: prior 0.01, own 0/33, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-03). Slip voids the claim.

## Risks
- July was revised up 0.3 pp after its first release; only the first September figure counts here.
- Internet sales swing the figure (+12.4 July, +15 August).
- A myfxbook page (read 2026-11-03T18:08Z) showed "2.5" against consensus 4.3 and previous 4.8 with next release 8 Oct; matches no ČSÚ figure and was not used.

## Sources
- https://csu.gov.cz/rychle-informace/maloobchod-srpen-2026
- https://www.ceskenoviny.cz/zpravy/maloobchodni-trzby-v-cesku-v-srpnu-zpomalily-mezirocni-rust/2884374
- https://www.ceskenoviny.cz/zpravy/2869894
- https://www.seznamzpravy.cz/clanek/317035
- https://tradingeconomics.com/czech-republic/calendar
- https://tradingeconomics.com/czech-republic/retail-sales-annual
- https://tradingeconomics.com/poland/retail-sales-annual
- https://tradingeconomics.com/euro-area/retail-sales-annual
- https://tradingeconomics.com/hungary/retail-sales-annual
- https://tradingeconomics.com/slovakia/retail-sales-annual
- https://www.erstegroup.com/de/research/report/en/SR429428
- https://www.myfxbook.com/forex-economic-calendar/czech-republic/retail-sales-yoy
- https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299
