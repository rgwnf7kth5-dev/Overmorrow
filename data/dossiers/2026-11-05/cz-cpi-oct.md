# cz-cpi-oct
- **Claim:** ČSÚ's flash estimate of consumer prices for October 2026, published by 4 November, puts year-on-year inflation at … %. (Interval claim.)
- **Criterion:** The year-on-year CPI change in percent in ČSÚ's release "Předběžný odhad indexu spotřebitelských cen - říjen 2026", published by 23:59 Prague time on 4 Nov 2026. The final release planned for 10 Nov does not decide. Void if the flash is not published by then.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague). The window opens on 3 Nov on purpose, see Schedule.
- **Written at:** 2026-11-02T18:25Z. All read times 2026-11-02 between 18:10Z and 18:19Z.

## Schedule
**NOT VERIFIED: no primary or dated source for 4 Nov was seen. The date may be 3 Nov.**
- The only sources for 4 Nov are in-house: board question cz-cpi-oct-above-sept (opened 23 Oct, "The ČSÚ flash estimate for October is due on 4 November") and data/planning/agenda.json, whose entry says "Date as stated in the board question". That is circular.
- ČSÚ's flash release for September states no next-flash date — https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-zari-2026 (read 18:10Z) "Datum vydání: 06. 10. 2026"; "Definitivní údaje zveřejní Český statistický úřad 13. 10. 2026."
- Final October release: 10 Nov 09:00 per ČSÚ iCal (data/planning/agenda.json, https://csu.gov.cz/kalendar-vsech-produktu-csu-v-ical, not re-read).
- Pattern: the flash came seven days before the final in September 2026 (Tue 6 Oct / Tue 13 Oct) and six days before in October 2025 (Wed 5 Nov / Tue 11 Nov) — https://www.fxstreet.cz/odhad-csu-mezirocni-inflace-v-cr-zrychlila-na-25-procenta.html (published 2025-11-05 09:51, read 18:18Z) "Konečnou hodnotu říjnové inflace zveřejní ČSÚ v úterý 11. listopadu." For a final on Tue 10 Nov that points to Tue 3 Nov or Wed 4 Nov. So the flash is on one of those days if the pattern holds, and the window covers both.
- Clock time not verified; 09:00 is customary for ČSÚ; the Oct 2025 story ran at 09:51.
- ČSÚ's page for the claim is expected, by analogy of address, at https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-rijen-2026.

## Facts
- September 2026 flash +2.5% y/y, 0.0% m/m — https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-zari-2026 (published 2026-10-06, read 18:10Z) "meziročně vzrostly o 2,5 %". Final confirmed 2.5% on 13 Oct (https://www.fxstreet.cz/klicova-slova+raiffeisenbank.html, headline "Potvrzeno. Inflace v září stoupla na 2,5 %", read 18:17Z). August 1.9% (board background).
- Raiffeisenbank, "Měsíční odhady listopad 2026" (27 Oct): y/y inflation "by mohla zůstat na 2,5 %"; ČNB expected to raise the rate from 3.75% to 4% on 5 Nov — excerpt via https://www.fxstreet.cz/klicova-slova+raiffeisenbank.html (read 18:17Z). The excerpt does not name the month, so October is our reading; the full article https://www.fxstreet.cz/zpravodajstvi-209602.html was not opened, because the brief allows only URLs returned by a search.
- Analysts after the September figure: fuel behind inflation, faster towards 3% over the rest of the year (same tag page, FXstreet 13 Oct). No October figure given.
- October 2025 base: flash 2.5% against 2.3% in September 2025 — https://www.fxstreet.cz/odhad-csu-mezirocni-inflace-v-cr-zrychlila-na-25-procenta.html. So the year-ago month rose fast, which pulls this October's rate down if monthly growth is ordinary.
- Producer prices +3.7% y/y (September, headline on the tag page).
- ČSÚ has confirmed its flash estimate each time in previous months — https://www.fxstreet.cz/csu-zverejni-odhad-rijnove-inflace-je-mozne-dalsi-zvolneni.html (published 2025-11-05 07:26, read 18:18Z).

## Base rate
- Board note: Czech October CPI m/m of 0.6% or more since 2018, 0.13, n=8, marked "recollection, not verified from data". No class in pipeline/reference-data.

## Schedule slip
- `stats-release`: prior 0.01, own 0/28, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-02T18:25Z). Here the real risk is not a slip but the date itself: a flash on 3 Nov is inside the window; one on 5 Nov would void the claim and make the binary NO.

## Consensus and usual surprise size
- Consensus 2.5%, ONE source (Raiffeisenbank, month inferred). ČNB forecast, ČSOB, KB and Reuters poll: **not found** within the budget.
- Surprise: no series (`series.mjs scale cz-cpi` n=0). One point: October 2025 flash 2.5% against about 2.3% expected, +0.2 (RB 2.3, KB 2.2) — https://www.fxstreet.cz/csu-zverejni-odhad-rijnove-inflace-je-mozne-dalsi-zvolneni.html, https://www.fxstreet.cz/odhad-csu-mezirocni-inflace-v-cr-zrychlila-na-25-procenta.html.
- Scale 0.14, scale_basis `pooled`: euro-area flash HICP RMS 0.112 (eu-hicp-oct.md) × pooled factor 1.282 (`node scripts/refdata/series.mjs`, 2026-11-02T18:25Z) = 0.143.
- Starting range: `node scripts/refdata/models.mjs quantiles 2.5 0.14 1.6` → q10 2.21, q50 2.50, q90 2.79 (width 0.57 = 4.1 scales).

## Risks
- Date (above). Thin consensus. Fuel prices and the diesel cap story; the Oct 2025 surprise was +0.2, larger than the scale.
- The flash prints to one decimal.

## Sources
- https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-zari-2026
- https://www.fxstreet.cz/klicova-slova+raiffeisenbank.html
- https://www.fxstreet.cz/csu-zverejni-odhad-rijnove-inflace-je-mozne-dalsi-zvolneni.html
- https://www.fxstreet.cz/odhad-csu-mezirocni-inflace-v-cr-zrychlila-na-25-procenta.html
- data/planning/agenda.json; data/watchlist.json (cz-cpi-oct-above-sept)
- Could not be read: the July 2026 monthly estimates page on the Czech portal zpravy (robots refused) (robots)
