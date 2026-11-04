# ca-lfs-rate-2
Claim: Statistics Canada reports on 6 Nov 2026 that the unemployment rate was 6.5% or higher in October.
Criterion: YES if the Labour Force Survey for October 2026 in The Daily of 6 Nov 2026 shows a seasonally adjusted unemployment rate of 6.5% or higher (as published, to one decimal). NO if it is 6.4% or lower. This is the first release. If the release does not appear on 5 or 6 Nov, NO.
Deadline: 2026-11-06 23:59 ET
Written at (UTC): 2026-11-04T17:58:00Z

## Schedule
Statistics Canada schedule: "November 6 (lockup) Labour Force Survey, October 2026"; releases at 8:30 a.m. Eastern — https://www150.statcan.gc.ca/n1/dai-quo/cal2-eng.htm (read 2026-11-04T17:49Z).

## Facts
September: employment -68,000 (-0.3%), unemployment rate up 0.1 to 6.5%, employment rate 60.6% — https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm (published 2026-10-09, read 2026-11-04T17:51Z) "Employment declined by 68,000"
Published scale: StatCan's average standard error of the change between two consecutive months is 33.2 thousand for employment and 0.1 point for the unemployment rate — https://www150.statcan.gc.ca/n1/daily-quotidien/261009/t001a-eng.htm (read 2026-11-04T17:56Z); the labour force fell 52.9 thousand in September, which held the rate down.
Forecast +13.6k, previous -68.3k against forecast +7k; 5 of the last 12 releases above forecast, 7 below — https://forexfundamentals.com/economic-calendar/ca-employment/2026-11-06 (modified 2026-11-04T01:00Z, read 17:51Z) "with a forecast of 13.6K"
RBC: +15,000 and 6.4% — https://www.rbc.com/en/economics/forward-guidance/post-rate-hike-spotlight-in-canada-turns-to-federal-budget-trade-and-jobs-releases/ (published 2026-10-30, modified 2026-11-04T16:00Z, read 17:49Z) "rose by 15,000 with the unemployment rate edging down to 6.4% from 6.5%". A single forecaster: no wider consensus on the rate found.
RBC notes September weakness was mostly public-sector education and health; Indeed job openings firmed in October. Same URL.
Rate this year: 6.5 January, peak 6.9 April, 6.4 July and August, 6.5 September. Daily link above.
Release test: employment consensus 13.6, threshold 35, scale 33.2: gap 0.64 scales. Rate consensus 6.4, threshold 6.5, scale 0.1: gap 1 scale.

## Base rate
stats-release-beats-threshold: own record 11 yes, 9 no (pipeline/reference-classes.json), no published rate.

## Schedule slip
stats-release 0.004.

## Risks
- Sampling noise: one standard error is 33.2k, and two straight falls (Aug -42k per the sweep, Sep -68k) leave room for a rebound.
- A wider consensus may differ from the single calendar and bank figures found.
- The 6.4 consensus is RBC alone; if a wider consensus is 6.5, this threshold breaks the half-scale rule and the claim should be dropped.

## Sources
- https://www150.statcan.gc.ca/n1/dai-quo/cal2-eng.htm
- https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm
- https://www150.statcan.gc.ca/n1/daily-quotidien/261009/t001a-eng.htm
- https://forexfundamentals.com/economic-calendar/ca-employment/2026-11-06
- https://www.rbc.com/en/economics/forward-guidance/post-rate-hike-spotlight-in-canada-turns-to-federal-budget-trade-and-jobs-releases/
- https://www150.statcan.gc.ca/n1/pub/71-543-g/71-543-g2025001-eng.htm
