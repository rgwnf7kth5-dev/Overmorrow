# cz-cpi-oct-final-11 (interval) and cz-cpi-24-11 (derived)
- **Interval claim:** The year-on-year change of consumer prices for October 2026 in ČSÚ's full release of 10 November 2026 is … % (one decimal).
- **Derived claim cz-cpi-24-11:** The year-on-year CPI change for October 2026 in ČSÚ's full release of 10 Nov 2026 is 2.4%.
- **Criterion:** The "meziročně" total CPI figure (all items, one decimal) in ČSÚ's release "Indexy spotřebitelských cen - inflace - říjen 2026" of 10 Nov 2026 (csu.gov.cz/rychle-informace/indexy-spotrebitelskych-cen-inflace-rijen-2026, same text in the ČSÚ press release). The flash estimate of 4 Nov does not decide. Derived: YES if the published figure is 2.4 (between 2.35 and 2.45); NO if any other figure is published or if no release appears on 10 Nov. The interval claim is void if the release does not appear on 10 Nov.
- **Board question (noted, not a claim here):** cz-cpi-oct-above-sept, "above 2.5%" on the 10 Nov release; its criterion excludes the flash and falls back to the flash only if the release is delayed beyond 13 Nov. With the flash at 2.4 it is YES only if the final is revised up by at least 0.2 point.
- **Event window:** 2026-11-10T00:00:00+01:00 to 2026-11-10T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-08T18:05Z. Read times as stated.

## Schedule
- Flash page of 4 Nov: "Datum vydání: 04. 11. 2026 ... Definitivní údaje zveřejní Český statistický úřad 10. 11. 2026." and "Termín zveřejnění RI – inflace: 10. 11. 2026" — https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-rijen-2026 (published 2026-11-04, read 2026-11-08T17:51Z).
- Clock time 09:00 is the ČSÚ habit (brief and agenda); not printed on the flash page. The iCal calendar page (https://csu.gov.cz/kalendar-vsech-produktu-csu-v-ical, read 2026-11-08T17:52Z) shows no readable entries in text form; the agenda entry in data/planning/agenda.json refers to it and to https://csu.gov.cz/pdi-ws/external/ics/ri?rocnik=2026 (not re-read).
- The October final page does not exist yet (HTTP 404 on https://csu.gov.cz/rychle-informace/indexy-spotrebitelskych-cen-inflace-rijen-2026, read 2026-11-08T17:52Z); expected at that address by analogy with the earlier months.

## Facts
- October 2026 flash: +0.4% m/m, +2.4% y/y — https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-rijen-2026 (published 2026-11-04, read 2026-11-08T17:51Z) "meziměsíčně vzrostly o 0,4 % a meziročně o 2,4 %".
- Flash details (Citfin commentary on the ČSÚ flash): core (excl. energy, food, alcohol, tobacco) 3.3% y/y, +0.5% m/m; energy −0.5% m/m; food +0.6% m/m, −4.0% y/y; services 4.5% y/y — https://www.fxstreet.cz/zpravodajstvi-210038.html (published 2026-11-04 16:03, read 2026-11-08T17:53Z) "Inflace bez energií, potravin, alkoholu a tabáku zůstala na 3,3 %".
- Analysts' expectation before the flash: Bloomberg survey of 22 analysts, mean 2.46%, median 2.5%, range 2.3-2.6; the flash (2.4) was below the median — https://www.fxstreet.cz/zpravodajstvi-209999.html (published 2026-11-04 09:47, read 2026-11-08T17:53Z) "průměrná prognóza říjnové inflace 2,46 procenta, medián ... 2,5 procenta".
- Fuel: the renewed diesel excise cut lowered October inflation by about 0.1 point (same article, "bez nějž by inflace byla o zhruba 0,1 procentního bodu vyšší").
- September 2026: 2.5% y/y, 0.0% m/m, flash 2.5% = final — https://csu.gov.cz/rychle-informace/indexy-spotrebitelskych-cen-inflace-zari-2026 (published 2026-10-13, read 2026-11-08T17:50Z) "Meziročně vzrostly spotřebitelské ceny v září o 2,5 %".
- Analysts' expectation for the final: none separate; the final is normally expected to equal the flash. No published preview of the 10 Nov release was found (one search, ČSÚ flash and commentary only).
- **Flash against final, every month Jan 2025 to Sep 2026 (21 months), y/y total CPI, one decimal. All 21 final figures equal the flash; the m/m figure equals the flash too in every month.** Pairs (month: flash / final), from the ČSÚ pages https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-<month>-<year> and https://csu.gov.cz/rychle-informace/indexy-spotrebitelskych-cen-inflace-<month>-<year> (read 2026-11-08T17:44-17:50Z):
  - 2025: Jan 2.8/2.8; Feb 2.7/2.7; Mar 2.7/2.7; Apr 1.8/1.8; May 2.4/2.4; Jun 2.9/2.9; Jul 2.7/2.7; Aug 2.5/2.5; Sep 2.3/2.3; Oct 2.5/2.5; Nov 2.1/2.1; Dec 2.1/2.1.
  - 2026: Jan 1.6/1.6; Feb 1.4/1.4; Mar 1.9/1.9; Apr 2.5/2.5; May 2.1/2.1; Jun 1.5/1.5; Jul 1.7/1.7; Aug 1.9/1.9; Sep 2.5/2.5.
  - Example excerpts: Sep 2026 flash "meziročně vzrostly o 2,5 %" and final "o 2,5 %"; Aug 2026 flash 1.9, final "o 1,9 %"; Oct 2025 flash 2.5, final "o 2,5 %".
- Months before Jan 2025 were not read.

## Number forecast
- Consensus: 2.4 (the flash; ČSÚ's final has equalled its flash in 21 of 21 months). Source: ČSÚ flash page above.
- Surprise size: sd of (final − flash) over the 21 months = 0.00 (21 zero differences). `node scripts/refdata/series.mjs scale czech-cpi-year-on-year-october-2026-flash-estimate-c-su` (run 2026-11-08T17:51Z) gives n=1 recorded surprise (the flash against the analysts' 2.5: −0.1) and "pooled_factor 1.265"; fewer than 4 recorded surprises, so the scale comes from the published ČSÚ record counted above. An sd of 0.00 cannot serve as a scale; the stub uses a floor of 0.05, half of one printed decimal step, because the printed figure is rounded and a revision of 0.1 is possible in principle although not seen in 21 months. This choice is the writer's; the editor may widen it.
- `node scripts/refdata/models.mjs quantiles 2.4 0.05 1.6` → q10 2.2975, q50 2.4, q90 2.5025.

## Base rate
- Own count: flash = final in 21 of 21 months (list above); this is not a reference-data class.
- Board background: Czech October CPI m/m of 0.6% or more since 2018 in 0.13 of years (n=8, "recollection, not verified"); not relevant to the final once the flash is out.

## Schedule slip
```
stats-release                 0.01    0/48        0.003  [estimate]
```
(`node scripts/refdata/slip.mjs`, run 2026-11-08T17:50Z.) ČSÚ's flash pages name the final date; 10 Nov was announced on 4 Nov. Final releases in 2025-26 came on the announced day in every month read (e.g. 13 Oct 2026 as announced on 6 Oct).

## Risks
- A 0.1 revision up or down after the full price base is processed (not seen in 21 months).
- The flash is rounded; the unrounded flash could sit near a rounding edge (not published).
- ČSÚ delay (very unlikely; 10 Nov is a Tuesday, not a holiday).

## Sources
- https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-rijen-2026
- https://csu.gov.cz/rychle-informace/indexy-spotrebitelskych-cen-inflace-zari-2026 and the other monthly ČSÚ flash and final pages named above (Jan 2025 - Sep 2026)
- https://www.fxstreet.cz/zpravodajstvi-210038.html
- https://www.fxstreet.cz/zpravodajstvi-209999.html
- https://csu.gov.cz/kalendar-vsech-produktu-csu-v-ical
- data/watchlist.json (cz-cpi-oct-above-sept); data/dossiers/2026-11-05/cz-cpi-oct.md
