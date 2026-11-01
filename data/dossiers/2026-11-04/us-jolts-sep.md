# us-jolts-sep
- **Claim:** BLS's first estimate of US job openings for September 2026, published on 3 November, comes in at … million (interval claim)
- **Criterion:** The seasonally adjusted total nonfarm job openings level for September 2026 in the BLS Job Openings and Labor Turnover Survey (JOLTS) news release of 3 Nov 2026 (first estimate, Table 1), in millions.
- **Event window:** 2026-11-03T00:00:00-05:00 to 2026-11-03T23:59:00-05:00 (America/New_York). Expected at 10:00 ET (15:00Z, 16:00 CET).
- **Written at:** 2026-11-01T18:20Z. All read times below are 2026-11-01, between 18:05Z and 18:14Z unless stated otherwise.

## Schedule
- BLS August release: the September report "is scheduled to be published on Tuesday, November 3, 2026, at 10:00 a.m. (ET)" — https://www.bls.gov/news.release/archives/jolts_09292026.htm (published 2026-09-29 10:00 ET, read 18:06Z).
- BLS release calendar, November 2026: Tuesday 3 Nov lists only "Job Openings and Labor Turnover Survey" "September 2026" "10:00 AM" — https://www.bls.gov/schedule/2026/11_sched.htm (read 18:12Z).
- Note: the BLS per-release schedule page https://www.bls.gov/schedule/news_release/jolts.htm showed only "October 2026 | Dec. 01, 2026 | 10:00 AM" when read (18:11Z); the September row was not displayed there. The monthly calendar and the August release both give 3 Nov.
- Trading Economics calendar: September JOLTS "2026-11-03 at 3:00 PM GMT" — https://tradingeconomics.com/united-states/job-offers (read 18:06Z).
- 3 Nov 2026 is US Election Day; it is not a federal holiday and BLS has scheduled the release on it. No sign of a government-data delay; August JOLTS came out on time on 29 Sep.

## Facts
- August 2026 (first estimate): "The number and rate of job openings were little changed at 7.1 million and 4.3 percent, respectively, in August." — BLS https://www.bls.gov/news.release/archives/jolts_09292026.htm (published 2026-09-29, read 18:06Z). Exact level 7.079 million (Trading Economics, below).
- July 2026 revised: "The number of job openings for July was revised up by 64,000 to 7.3 million." — same BLS release. (First estimate for July: 7.271m; revised 7.335m per Trading Economics.)
- August other series: hires 5.2m (3.3%), quits 3.1m (1.9%, "unchanged"), layoffs and discharges 1.6m (1.0%) — same BLS release.
- Trading Economics: "The number of job openings in the US fell by 256,000 to 7.079 million in August 2026." — lowest in five months; decline concentrated in health care, professional services and the West — https://tradingeconomics.com/united-states/job-offers (read 18:06Z).
- The August level will itself be revised in the 3 Nov release; the claim uses the September first estimate only.

History (first estimate vs consensus at the time; surprise = actual − consensus, millions):
- energyexch history table "Release Date | Actual | Forecast | Previous" — https://www.energyexch.com/calendar/578-us-jolts-job-openings (read 18:08Z):
  - 9 Dec 2025: 7.67 vs 7.14 (+0.53)
  - 7 Jan 2026: 7.15 vs 7.61 (−0.46)
  - 5 Feb 2026: 6.54 vs 7.25 (−0.71)
  - 13 Mar 2026: 6.95 vs 6.76 (+0.19)
  - 31 Mar 2026: 6.88 vs 6.89 (−0.01)
  - 5 May 2026: 6.87 vs 6.86 (+0.01)
  - 2 Jun 2026: 7.62 vs 6.87 (+0.75)
  - 30 Jun 2026: 7.59 vs 7.28 (+0.31) — the row is split across two lines on the page; the actual/previous assignment is uncertain.
- Trading Economics calendar (same URL as above): 1 Sep 2026 (July data) 7.271m vs 7.30m (−0.03); 29 Sep 2026 (August data) 7.079m vs 7.23m (−0.15).
- The early-August 2026 release (June data) was not in either table. Ten releases in all.

## Consensus for September 2026
- 7.10 million (Trading Economics consensus; Trading Economics own forecast 7.06m) — https://tradingeconomics.com/united-states/job-offers (read 18:06Z). Previous 7.079m.
- No Reuters/Bloomberg survey median or range found (search budget).

## Base rate
- No JOLTS class in pipeline/reference-data/. Loose class `stats-release-beats-threshold` (pipeline/reference-classes.json): own record 10 YES / 6 NO, base_rate null.

## Schedule slip
- `stats-release`: prior 0.01, own 0/25, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-01T18:05Z). Release confirmed on the BLS monthly calendar; no shutdown or delay reported. A federal funding lapse would be the only realistic cause of a move.

## Consensus and usual surprise size
- Consensus 7.10m (Trading Economics).
- Surprise sd computed by us from the 10 releases above (+0.53, −0.46, −0.71, +0.19, −0.01, +0.01, +0.75, +0.31, −0.03, −0.15): n = 10, mean +0.04, sd 0.43, RMS 0.41, mean absolute 0.32. Excluding the uncertain 30 Jun row: n = 9, sd 0.45. (Python statistics.stdev, 2026-11-01T18:16Z.)
- Working scale: 0.43m.
- Suggested quantiles (method v5): `node scripts/refdata/models.mjs quantiles 7.10 0.43 1.6` → q10 6.218, q50 7.10, q90 7.982 (width 1.76 = 4.1 scales).
- Errors are two-sided and large: three of ten above 0.5m in absolute size.

## Risks
- Survey noise and revisions: JOLTS has a small sample; the July figure was revised up 64k in the next release.
- Downside: August was the lowest in five months; the last two releases came in below consensus.
- Upside: in Dec 2025, Jun 2026 and (probably) late Jun 2026 the first estimate beat consensus by 0.3–0.75m.
- Publication timing: no known risk; federal shutdown would delay it (none reported).

## Sources
- https://www.bls.gov/news.release/archives/jolts_09292026.htm
- https://www.bls.gov/schedule/2026/11_sched.htm
- https://www.bls.gov/schedule/news_release/jolts.htm
- https://tradingeconomics.com/united-states/job-offers
- https://www.energyexch.com/calendar/578-us-jolts-job-openings
- https://www.fxblue.com/calendar/item/JOLTS_Job_Openings_US (no history rows rendered; not used)
- Sweep notes: scratchpad/sweep/economy.md section 3 (fedratecalc.com and financecalendar.com list 3 Nov)
