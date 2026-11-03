# cz-cpi-above-1
- **Claim:** ČSÚ's flash estimate of consumer prices for October 2026, published by 4 November, puts year-on-year inflation above September's 2.5%. (Derived from cz-cpi-oct, event > 2.5.)
- **Criterion:** YES if the year-on-year CPI change in ČSÚ's release "Předběžný odhad indexu spotřebitelských cen - říjen 2026", published by 23:59 Prague time on 4 Nov 2026, is above 2.5% (2.6% or higher at one decimal). NO if it is 2.5% or lower, or if the flash is not published by that time.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague).
- **Written at:** 2026-11-02T18:25Z. Full fact base: data/dossiers/2026-11-05/cz-cpi-oct.md.

## Schedule
- **Date NOT verified: 3 or 4 Nov** (see cz-cpi-oct.md). ČSÚ's previous flash gave no next date — https://csu.gov.cz/rychle-informace/predbezny-odhad-indexu-spotrebitelskych-cen-zari-2026 (read 2026-11-02T18:10Z) "Datum vydání: 06. 10. 2026".

## Facts
- September 2.5% (flash and final); Raiffeisenbank expects "by mohla zůstat na 2,5 %" (excerpt via https://www.fxstreet.cz/klicova-slova+raiffeisenbank.html, read 18:17Z; month inferred).
- The threshold equals the only consensus found, so a tie at 2.5% decides for NO; the figure prints to one decimal.
- Linked board question cz-cpi-oct-above-sept resolves on the final release of 10 Nov, not on the flash; ČSÚ has confirmed flash figures in previous months (https://www.fxstreet.cz/csu-zverejni-odhad-rijnove-inflace-je-mozne-dalsi-zvolneni.html).

## Base rate
- `stats-release-beats-threshold`: own record 11 YES / 7 NO, base_rate null.

## Schedule slip
- `stats-release`: 0.004 [estimate]. The date risk is described in cz-cpi-oct.md.

## Consensus and usual surprise size
- Consensus 2.5% (one source), scale 0.14 pooled (cz-cpi-oct.md). derived {from: cz-cpi-oct, event: ">", x: 2.5}.

## Risks
- As in cz-cpi-oct.md. Rounding: a true value from 2.50 to 2.55 prints 2.5 and is NO.

## Sources
- As listed in data/dossiers/2026-11-05/cz-cpi-oct.md.
## Overnight update (read 3 Nov ~04:00Z)
- Flash date: Wed 4 Nov per two market notes (fxstreet.cz 209825, 209842) and Raiffeisenbank ("4 or 10 November"). ČSÚ calendar not read; 09:00 customary.
- Published forecasts for October y/y: Komerční banka-attributed 2.3 (209825), ČSOB 2.4 "very slightly below the market" (209827), another note 2.4 (209842), Raiffeisenbank 2.5, +0.5% m/m (209602). Mean 2.4. September was 2.5. No numeric poll consensus. ČNB meets Thu 5 Nov; consensus +25 bp to 4.00%.
