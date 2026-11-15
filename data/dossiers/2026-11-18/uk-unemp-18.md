# uk-unemp-18
- **Claim:** The ONS labour market release of Tue 17 Nov 2026 puts the UK ILO unemployment rate (people aged 16+, seasonally adjusted) for July–September 2026 at … per cent.
- **Criterion:** Value = the headline UK unemployment rate (aged 16 and over, seasonally adjusted, LFS) for July to September 2026, to one decimal, as first published by the Office for National Statistics on 17 Nov 2026 ("Labour market overview, UK: November 2026" / "Employment in the UK: November 2026"). Later revisions do not count. Void if the release does not take place on 17 Nov 2026 (UK time); pending if published but not yet readable.
- **Event window:** 2026-11-17T00:00+00:00 – 2026-11-17T23:59+00:00 (Europe/London; release 07:00 GMT = 08:00 CET)
- **Evidence expected:** 2026-11-17T07:00+00:00
- **Deadline (resolves by):** 2026-11-19T05:00+01:00
- **Written at:** 2026-11-15T17:55Z

## Schedule
- GOV.UK statistics announcement (ONS), Labour market in the regions of the UK: November 2026 — "Release date: 17 November 2026 7:00am (confirmed)" — https://www.gov.uk/government/statistics/announcements/labour-market-in-the-regions-of-the-uk-november-2026 (published 2026-02-05, read 2026-11-15T17:47Z). This regional release is part of the monthly labour market package.
- ONS bulletin Employment in the UK: October 2026 — "Release date: 20 October 2026 / Next release: 17 November 2026" — https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/employmentintheuk/october2026 (published 2026-10-20 00:00 BST, read 2026-11-15T17:47Z).
- The ons.gov.uk release calendar search page did not render in the script; direct /releases/ URLs guessed for November returned 404.

## Facts
- Jun–Aug 2026 unemployment rate 4.7%, down 0.1 pp on the quarter and on the year; employment rate 75.3%; inactivity 20.9% — ONS bulletin above (published 2026-10-20, read 2026-11-15T17:47Z) "The estimated UK unemployment rate decreased by 0.1 percentage points on the year and on the quarter, to 4.7%". First release.
- ONS sampling variability, Jun–Aug 2026: rate 4.7 ± 0.3; change on quarter −0.1 ± 0.3; unemployment level 1,712k ± 94k; change on quarter −47k ± 101k — same ONS bulletin, Table 1 "Unemployment rate (aged 16 years and over) 4.7 ± 0.3 -0.1 ± 0.3". (± is a 95% interval.)
- ONS caution: "Some volatility remains in the LFS estimates ... Caution should be taken when drawing conclusions from short-term changes" — same bulletin.
- October release vs expectations: "UK August ILO unemployment rate 4.7% vs 5.0% expected; Prior 4.9%"; employment change +102k vs +5k expected; regular pay +3.7% 3m/y; September payrolls +13k — https://investinglive.com/news/uk-unemployment-rate-falls-to-4-7-as-jobs-rebound-keeping-boe-rate-hike-bets-intact/ (published 2026-10-20T06:00Z, read 2026-11-15T17:47Z). Note: ForexFundamentals gives the October forecast as 4.9%; sources differ on the size of that surprise (−0.2 or −0.3 pp).
- Consensus for Jul–Sep: 4.7% — https://forexfundamentals.com/economic-calendar/uk-unemployment/2026-11-17 (modified 2026-11-15T01:00Z, read 2026-11-15T17:47Z) "due at 07:00 UTC, with a forecast of 4.7%. The last release came in at 4.7% for August 2026 against a forecast of 4.9%. Of the last 12 releases, 5 came in above the forecast and 6 below it." No Reuters/Bloomberg poll seen.
- RSM UK: rate fell "from 4.9% to 4.7%", lowest since July 2025, trending down since January 2026; vacancies fell 13k to lowest since the pandemic; "we still expect unemployment to edge up in the coming months" — https://www.rsmuk.com/insights/economic-voice/labour-market-stronger-growth-lifts-hiring-but-unemployment-is-likely-to-edge-up (undated, written after 20 Oct release; read 2026-11-15T17:47Z).
- Context: RSM says the labour data raised the likelihood of a November Bank Rate rise (same URL); Jul–Sep shares two of three months (Jul, Aug) with the May–Jul and Jun–Aug windows already published.

## Base rate
- Not a yes/no event. Reference class stats-release-beats-threshold (pipeline/reference-classes.json): own record only, no published rate. ForexFundamentals: last 12 UK unemployment prints 5 above forecast, 6 below (1 in line).

## Schedule slip
- stats-release: 0.003 [estimate] (`node scripts/refdata/slip.mjs stats-release`, own 0/55). Release confirmed on GOV.UK; no sign of a move.

## Number forecast (interval)
- Consensus 4.7% (ForexFundamentals calendar, verified 15 Nov). Single calendar source.
- Surprise scale 0.15 pp, basis "published": ONS 95% sampling interval of the quarterly change ±0.3 pp → standard error ≈ 0.15 pp; recent surprises of −0.2/−0.3 pp (Oct release) are consistent with this. No UK unemployment key in pipeline/reference-data/series.json.
- Quantiles (`node scripts/refdata/models.mjs quantiles 4.7 0.15 1.6`): q10 4.39, q50 4.70, q90 5.01.

## Baseline
status_quo: unclear — interval claim; continuing trend (rate falling since January) vs RSM's expectation of an edge up; consensus is unchanged at 4.7.

## Risks
- LFS volatility and low response rates; ONS warns about short-term changes.
- The consensus is from one calendar; a wider poll may say 4.8%.
- Month-of-September strength unknown; two of three months overlap with published windows, which limits movement.
- Revisions to Jun–Aug published the same day do not affect the value.

## Sources
- https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/employmentandemployeetypes/bulletins/employmentintheuk/october2026
- https://www.gov.uk/government/statistics/announcements/labour-market-in-the-regions-of-the-uk-november-2026
- https://forexfundamentals.com/economic-calendar/uk-unemployment/2026-11-17
- https://investinglive.com/news/uk-unemployment-rate-falls-to-4-7-as-jobs-rebound-keeping-boe-rate-hike-bets-intact/
- https://www.rsmuk.com/insights/economic-voice/labour-market-stronger-growth-lifts-hiring-but-unemployment-is-likely-to-edge-up
- https://www.ons.gov.uk/releasecalendar?query=labour%20market&release-type=type-upcoming (did not render)
- https://www.ons.gov.uk/releases/labourmarketoverviewuknovember2026 and .../employmentintheuknovember2026 (404)
- https://www.babypips.com/news/headline-uk-unemployment-october-2026-jobs-data-pay-growth-boe-rate-hike (refused, 403)
