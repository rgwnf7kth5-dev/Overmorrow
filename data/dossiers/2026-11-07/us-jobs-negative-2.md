# us-jobs-negative-2
- **Claim:** BLS first estimate shows US nonfarm payrolls falling in October 2026.
- **Criterion:** YES if the over-the-month change in total nonfarm payroll employment for October 2026 in the BLS Employment Situation release published on 6 Nov 2026 is below zero. NO if it is zero or higher, or if the release does not appear by 23:59 ET on 6 Nov 2026. Later revisions do not count.
- **Deadline:** 2026-11-06T23:59:00-05:00. Release 08:30 ET.
- **Written at:** 2026-11-04T17:57Z

## Schedule
- BLS calendar lists "Employment Situation for October 2026" under Friday, November 06, 2026 — https://www.bls.gov/schedule/2026/11_sched_list.htm (last modified 2026-11-03, read 2026-11-04T17:49Z).
- BLS release time is 8:30 a.m. ET, as on the September release — https://www.bls.gov/news.release/empsit.nr0.htm (read 2026-11-04T17:53Z) "embargoed until ... 8:30 a.m. (ET) Friday, October 2, 2026". FinanceCalendar: 08:30 EST, status confirmed, schedule checked 2026-11-04T11:39Z — https://www.financecalendar.com/event/us-employment-situation-non-farm-payrolls-november-2026/ (read 2026-11-04T17:53Z). The bls.gov page text does not show the hour for this row.
- US government funding runs to 11 Dec (world sweep of 4 Nov), so no shutdown stands in the way.

## Consensus
- Payrolls +55k, unemployment 4.2%, AHE +0.3% m/m, 2.9% y/y; prior +29k, 4.2% — https://www.newsquawk.com/headlines/week-in-focus-2nd-6th-november-2026-highlights-include-us-midterm-election-nfp-ism-pmis-rba-boe-and-ez-cpi- (published 2026-10-30T13:59Z; figures as recorded in the desk sweep of 4 Nov and in data/planning/agenda.json; on 4 Nov the read extract did not reach the NFP paragraph, so not re-read).
- Other forecasts from the sweep: Barclays +50k and 4.1%; RBC +42k and 4.2% — https://www.rbc.com/en/economics/forward-guidance/post-rate-hike-spotlight-in-canada-turns-to-federal-budget-trade-and-jobs-releases/ (30 Oct); Energy EXCH poll +63k via FinanceCalendar — https://www.financecalendar.com/event/us-employment-situation-non-farm-payrolls-november-2026/. Spread +42k to +63k. I found no later poll after ADP.

## Facts
- September first print: +29,000 payrolls, 4.2% unemployment — https://www.bls.gov/news.release/empsit.nr0.htm (published 2026-10-02, read 2026-11-04T17:53Z) "Both nonfarm payroll employment (+29,000) and the unemployment rate (4.2 percent) changed little in September".
- Revisions in that report: July +21,000 to -10,000, August +162,000 to +133,000, 60,000 lower combined — same URL "revised down by 31,000, from +21,000 to -10,000". So a negative month now stands in the 2026 record, though only after revision.
- Rate range: "has remained in a narrow range of 4.1 percent to 4.3 percent since March"; 7.1 million unemployed — same URL.
- ADP for October: +86,000 against a +65,000 calendar consensus and +90,000 in September — https://mediacenter.adp.com/2026-11-04-ADP-National-Employment-Report-Private-Sector-Employment-Increased-by-86,000-Jobs-in-October (published 2026-11-04, read via the ADP newsroom front page 2026-11-04T17:53Z) "Private-sector employment increased by 86,000 jobs in October"; consensus from data/planning/agenda.json (FinanceCalendar).
- Continuum Economics expected private payrolls of +45k — https://continuumeconomics.com/a/c049002b/preview-due-november-4-us-october-adp-employment-maintaining-a-moderate-trend (read 2026-11-04T17:53Z) "our forecast for private sector non-farm payrolls of 45k". ADP weekly 4-week average to 10 Oct was 16.5k, same URL. ADP's September education and health gain was 55k against 20k in payrolls, same URL.
- ADP does not cover government and has diverged from BLS: March 2026 ADP +62k, BLS +178k — https://thesynthesisai.substack.com/p/the-variance (published 2026-05-08, read 2026-11-04T17:54Z, secondary).
- The Fed held at 3.75-4.00% on 28 Oct and next meets on 9 Dec — https://www.aljazeera.com/economy/2026/10/28/fed-leaves-interest-rates-unchanged-despite-inflation-in-the-us (published 2026-10-28T19:05Z; world board check), https://www.financecalendar.com/event/us-employment-situation-non-farm-payrolls-november-2026/.
- All figures here are first release; the claim counts the first print of October, not the revisions of August and September in the same report.

## Surprise size
- No series record exists: `node scripts/refdata/series.mjs scale` gives n=0, so a published figure is used.
- Payrolls: BLS 90% confidence interval for the monthly change is ±122,000 at 1.6 standard errors, so a standard error of about 76,000 — https://www.bls.gov/news.release/empsit.tn.htm (read 2026-11-04T17:53Z) "on the order of plus or minus 122,000". This is sampling error, used as a stand-in for the surprise size. Check: 2026 surprises reported as -150k (Feb), +118k (Mar), +50-60k (Apr) — https://thesynthesisai.substack.com/p/the-variance, larger than this scale.
- Rate: ±0.3 point at a rate around 6.0%, so about 0.19 — https://www.bls.gov/news.release/empsit.tn.htm "for the monthly change in the unemployment rate it is about +/- 0.3 percentage point". At 4.2% the sampling error is somewhat smaller.
- `models.mjs quantiles 55 76 1.6` gives q10 -100.8, q50 55, q90 210.8.

## Base rate
none

## Schedule slip
stats-release, rate 0.004 (`node scripts/refdata/slip.mjs stats-release`). No sign of a move: BLS calendar last modified 3 Nov.

## Risks
- Government or strike effects that ADP cannot see; education and health gains slowing; the sampling error itself exceeds the consensus.
- Consensus dates from 30 Oct and predates the ADP and ISM services data.
- A rate rounding near a boundary: the unrounded September figure was not read.

## Sources
- https://www.bls.gov/schedule/2026/11_sched_list.htm
- https://www.bls.gov/news.release/empsit.nr0.htm
- https://www.bls.gov/news.release/empsit.tn.htm
- https://www.newsquawk.com/headlines/week-in-focus-2nd-6th-november-2026-highlights-include-us-midterm-election-nfp-ism-pmis-rba-boe-and-ez-cpi-
- https://www.financecalendar.com/event/us-employment-situation-non-farm-payrolls-november-2026/
- https://www.rbc.com/en/economics/forward-guidance/post-rate-hike-spotlight-in-canada-turns-to-federal-budget-trade-and-jobs-releases/
- https://mediacenter.adp.com/2026-11-04-ADP-National-Employment-Report-Private-Sector-Employment-Increased-by-86,000-Jobs-in-October
- https://mediacenter.adp.com/
- https://continuumeconomics.com/a/c049002b/preview-due-november-4-us-october-adp-employment-maintaining-a-moderate-trend
- https://thesynthesisai.substack.com/p/the-variance
- https://www.bls.gov/schedule/news_release/empsit.htm (no row text)
- https://www.bls.gov/news.release/empsit.t01.htm (table not in extract)
