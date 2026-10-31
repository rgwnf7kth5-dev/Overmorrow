# us-ism-55-1
- **Claim:** The ISM Manufacturing PMI for October 2026, published on 2 November, is 55.0 or higher. (Derived from us-ism-oct, event > 54.95.)
- **Criterion:** YES if the headline Manufacturing PMI for October 2026 in ISM's report published on 2 Nov 2026 is 55.0 or higher. NO if it is lower, or if the report is not issued on 2 Nov 2026 (Eastern Time) because of a postponement.
- **Event window:** 2026-11-02T00:00:00-05:00 to 2026-11-02T23:59:00-05:00 (America/New_York). Expected at 10:00 ET (15:00Z).
- **Written at:** 2026-10-31T18:12Z. Full fact base with all excerpts: data/dossiers/2026-11-03/us-ism-oct.md (same story). Read times 2026-10-31 17:55Z–18:08Z.

## Schedule
- Next release "November 2, 2026, 3:00 PM GMT (October data)" — https://tradingeconomics.com/united-states/business-confidence (read 18:02Z). investingLive week ahead: "10:00 AM ET – US ISM Manufacturing PMI" — https://investinglive.com/news/week-ahead-elections-rate-decisions-and-jobs-take-center-stage/ (published 2026-10-30T19:13, read 17:57Z). ISM's own report page is behind a login (read 18:00Z).

## Facts
- Consensus 54.7, prior 54.5 — Newsquawk https://www.newsquawk.com/headlines/week-in-focus-2nd-6th-november-2026-highlights-include-us-midterm-election-nfp-ism-pmis-rba-boe-and-ez-cpi- (published 2026-10-30T13:59Z, read 17:56Z) "seen rising a little to 54.7 in October (prev. 54.5 in September)". No range found.
- Threshold 55.0 is 0.3 above consensus and 0.5 above September.
- Recent first releases: Jul 55.6 (cons 53.9), Aug 54.6 (cons 55.2), Sep 54.5 (cons 55.0) — First Trust https://www.ftportfolios.com/Commentary/EconomicResearch/2026/8/3/the-ism-manufacturing-index-increased-to-55.6-in-july (published 2026-08-03); investingLive https://investinglive.com/news/us-manufacturing-pmi-54-6-versus-55-2-estimate/ (published 2026-09-01 14:15Z); XTB https://www.xtb.com/en/market-analysis/breaking-u-s-ism-manufacturing-data-below-expectations (published 2026-10-01). July 2026 (55.6) is the only month of the last 12 at or above 55.0; the 12-month range is 47.9–55.6 (energyexch history https://www.energyexch.com/calendar/252-us-ism-manufacturing-pmi, read 18:03Z).
- Sep components: new orders 55.3, employment 52.7, inventories below 50 — PNC https://www.pnc.com/content/dam/pnc-com/pdf/aboutpnc/EconomicReports/EconomicUpdates/2026/PNC_Economics_Research_ISM_Mfg_1_October_2026.pdf (published 2026-10-01) "a second consecutive monthly decline".
- S&P Global US flash manufacturing PMI Oct 56.0 (Sep 55.9), 53-month high; output 55.8 (from 56.2) — Newsquawk (above). In Sep the flash/final S&P figure (55.9) was 1.4 above ISM (54.5).
- Regional Fed surveys, October (headline, Sep in brackets): Empire 25.5 (7.6; cons 10.3); Philadelphia 20.9 (37.8; exp 28.4), new orders 4.3 from 29.2; Kansas City 16 (20); Richmond −2 (−2; cons 0); Dallas 13.4 (9.8), production 15.8 from 29.5 — https://tradingeconomics.com/united-states/ny-empire-state-manufacturing-index, https://investinglive.com/news/us-october-philly-fed-business-index-20-9-vs-28-4-expected/ (published 2026-10-15), https://tradingeconomics.com/united-states/kansas-fed-manufacturing-index, https://tradingeconomics.com/united-states/richmond-fed-manufacturing-index, https://tradingeconomics.com/united-states/dallas-fed-manufacturing-index (all read 17:59–18:01Z). Own average of the five: 14.8 in Oct vs 14.6 in Sep — flat, mixed.

## Base rate
- No ISM class in pipeline/reference-data/. Loose class `stats-release-beats-threshold` (pipeline/reference-classes.json): own record 7 YES / 3 NO, base_rate null. Own count: ISM was ≥ 55.0 in 1 of the last 12 months (Jul 2026).

## Schedule slip
- `stats-release`: 0.006 [estimate], own 0/15 (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-31T18:07Z). ISM is private, not affected by federal closures; 2 Nov is an ordinary business day. No sign of a move.

## Consensus and usual surprise size
- Consensus 54.7 (Newsquawk, investingLive, Trading Economics). Range not found.
- Surprise sd computed by us from Nov 2025–Sep 2026 (n = 11, actual − consensus: −0.8, −0.4, +4.1, +0.7, +0.4, −0.4, +0.7, −0.5, +1.7, −0.6, −0.5): sd 1.45, mean absolute 0.98; without the Jan 2026 +4.1 outlier: n = 10, sd 0.81, mean absolute 0.67. Sources as in us-ism-oct.md.
- Model input for `pReleaseAbove(54.7, 54.95, sd)`: sd 0.8–1.45.

## Risks
- YES path: supplier deliveries lengthening (Empire), S&P flash at 53-month high, and a July-type upside surprise (+1.7).
- NO path: three misses below consensus in the last four months; Philly new orders slump; Richmond in contraction; consensus itself is below 55.
- Rounding: ISM publishes one decimal; 54.9 is NO.

## Sources
- As listed in data/dossiers/2026-11-03/us-ism-oct.md (all opened 2026-10-31 17:55–18:08Z).
