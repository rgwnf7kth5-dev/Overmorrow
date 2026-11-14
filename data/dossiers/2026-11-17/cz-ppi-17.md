# cz-ppi-17
- **Claim (interval):** ČSÚ puts the year-on-year change in Czech industrial producer prices for October 2026 at … %.
- **Criterion:** The year-on-year change of industrial producer prices (ceny průmyslových výrobců) for October 2026, in percent to one decimal, as first published in ČSÚ's release "Indexy cen výrobců – říjen 2026" on 16 Nov 2026 (scheduled 09:00 Prague), or as reported the same day by ČTK. Later revisions do not count. If ČSÚ does not publish it by 23:59 Prague time on 16 Nov 2026, the claim is scored as not held.
- **Event window:** 2026-11-16T09:00+01:00 to 2026-11-16T23:59+01:00 (Europe/Prague)
- **Evidence expected:** ČSÚ Rychlá informace at 09:00 CET; ČTK minutes later. evidence_at 2026-11-16T09:15+01:00
- **Deadline (resolves by):** 2026-11-18T05:00+01:00
- **Written at:** 2026-11-14T18:25Z (facts below copied from cz-prices-17, written 2026-11-14T18:12Z, with their sources)

## Schedule
- ČSÚ release calendar (iCal, DTSTAMP 2026-11-14 09:50Z): "Indexy cen výrobců - říjen 2026", product 011047-26, DTSTART 2026-11-16 09:00 Europe/Prague, URL https://csu.gov.cz/rychle-informace/indexy-cen-vyrobcu-rijen-2026 — https://csu.gov.cz/pdi-ws/external/ics/ri?rocnik=2026 (read 2026-11-14T17:58Z). The release is a single combined one: agricultural, industrial, construction-work and business-services producer prices (September edition below has all four). It was the only ČSÚ release found for 16 Nov in the calendar.
- The October page returns 404 before release (checked 2026-11-14T18:00Z), as expected.

## Facts
- September 2026 release (16 Oct): "Ceny průmyslových výrobců meziměsíčně vzrostly o 1,2 % a meziročně o 3,7 %"; headline "nejvyšší meziroční růst od dubna 2023"; agricultural −7.2% y/y (+3.2% m/m; August −11.8%), construction work +3.9% y/y (August +4.4%), services for business (tržní služby) +3.1% y/y (August +2.7%) — https://csu.gov.cz/rychle-informace/indexy-cen-vyrobcu-zari-2026 (published 2026-10-16, read 2026-11-14T17:59Z). Drivers named: coke and refined petroleum products up strongly; energies +8.1% y/y; industrial prices excluding energy +2.0% (August 1.5%). Data collection for industrial prices ends on the 20th of the month.
- Recent industrial PPI y/y first prints (release month: actual / prior consensus): Oct 2026 3.7 / 3.4; Sep 2.0 / 1.8; Aug 1.6 / none; Jul 1.3 / 1.5; Jun 1.5 / 2.3; May 1.0 / 0.6; Apr −1.1 / −1.1; Mar −2.9 / none — FX Blue calendar history https://www.fxblue.com/calendar/item/6ca98587-ed94-41b1-98ec-704905b1c430/6083bb35-9335-40bf-90ec-4da0b3674195 (read 2026-11-14T18:00Z, embedded page data).
- Last time y/y was 5% or more: the print for April 2023 (6.4%, released 18 May 2023); May 2023 was 3.6% — same FX Blue history.
- Raiffeisenbank monthly forecasts (27 Oct): "Index cen průmyslových výrobců Prognóza: 0,9 % m/m, 4,7 % r/r Období: říjen Datum zveřejnění: 16. listopad"; reasoning: Brent rose to about 117 USD/bbl in October, electricity about 160 EUR/MWh, Dutch gas near 100 EUR/MWh — https://www.fxstreet.cz/zpravodajstvi-209602.html (published 2026-10-27 20:20 CET, read 2026-11-14T17:59Z).
- FX Blue lists the 16 Nov 08:00 UTC release with consensus 4.7 and previous 3.7 (same FX Blue page, "upcomingEvents").
- Oil in early November fell from the late-October peak (Brent 117.64 on 30 Oct, 92–96 in 9–13 Nov; Yahoo chart API BZ=F, read 2026-11-14T17:56Z) — this falls after October's data collection and does not bear on October prices.

## Consensus and surprise size
- Consensus: 4.7% y/y (FX Blue calendar consensus; Raiffeisenbank forecast 4.7%, 27 Oct). No other bank's forecast was readable.
- Scale: 0.36 pp, RMS of the last 12 first-print surprises against consensus (releases Jan 2025–Oct 2026 with a consensus; own arithmetic from FX Blue history). RMS of the last 24: 0.33; of all 101 since 2011: 0.95 (inflated by 2022–23). No series in pipeline/reference-data/series.json.
- Model quantiles (`node scripts/refdata/models.mjs quantiles 4.7 0.36 1.6`, run 2026-11-14T18:15Z): q10 3.96, q50 4.70, q90 5.44.
- Recent surprises by release date: +0.3 (16 Oct), +0.2 (16 Sep), −0.2 (17 Jul), −0.8 (16 Jun), +0.4 (20 May).

## Base rate
- Class: Czech PPI y/y first print vs consensus. Own count of the last 24 releases with a consensus (FX Blue, release dates Jan 2024–Oct 2026): 6 of 24 at least 0.3 pp above consensus (+0.3 Oct 2026, +0.4 May 2026, +0.3 Dec 2025, +0.4 Jan 2025, +0.6 Aug 2024, +0.3 Mar 2024). The last two releases were above consensus (+0.3, +0.2).

## Schedule slip
- `node scripts/refdata/slip.mjs stats-release` (run 2026-11-14T17:54Z) → prior 0.01, own 0/55, rate 0.003 [estimate]. ČSÚ calendar confirms the date as of 14 Nov.

## Risks
- Single-source consensus (one bank plus a calendar consensus that may simply copy it); other forecasts on Monday morning may differ.
- Energy prices (electricity, gas, refined products) moved sharply in October; surprises have been larger in such months (−0.8 in the release of 16 Jun 2026).
- Base effect of October 2025 m/m is not known from the pages read; a different base month change would move the y/y figure.
- The quantity is the headline industrial y/y; agricultural, construction and services indices do not count.

## Sources
- data/dossiers/2026-11-17/cz-prices-17.md (all facts copied; no new pages opened for this claim)
- https://csu.gov.cz/pdi-ws/external/ics/ri?rocnik=2026
- https://csu.gov.cz/rychle-informace/indexy-cen-vyrobcu-zari-2026
- https://csu.gov.cz/rychle-informace/indexy-cen-vyrobcu-rijen-2026 (404 before release)
- https://csu.gov.cz/rychle-informace/inflace-spotrebitelske-ceny-rijen-2026 (404, URL guess)
- https://www.fxstreet.cz/zpravodajstvi-209602.html
- https://www.fxstreet.cz/zpravodajstvi-210301.html (Fio weekly preview 9 Nov; no Czech PPI item)
- https://www.fxblue.com/calendar/item/6ca98587-ed94-41b1-98ec-704905b1c430/6083bb35-9335-40bf-90ec-4da0b3674195
- https://sigmanomics.com/cz/ppi-yoy (only Dec 2024 data shown)
- https://tradingeconomics.com/czech-republic/producer-prices-change and news/592677, news/567802 (titles only)
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF?range=1mo&interval=1d
- WebSearch (2): "ceny průmyslových výrobců říjen 2026 odhad analytici"; "Czech PPI YoY actual vs expected 2026".

## Unreachable
- tradingeconomics.com news pages render only titles to the reader
