# us-confidence-oct (with derived us-confidence-oct-falls)
- **Claim (interval):** The Conference Board Consumer Confidence Index for the United States for October 2026 stands at … (index points, 1985=100).
- **Criterion:** The headline Consumer Confidence Index for October 2026 (preliminary) as published by The Conference Board on 27 Oct 2026, 10:00 ET.
- **Deadline (event window end):** 2026-10-27T23:59:59-04:00 (window 2026-10-27T00:00 to 23:59:59 America/New_York; evidence 10:00 EDT = 15:00 CET; resolves by 2026-10-28T05:00:00+01:00)
- **Written at:** 2026-10-25T19:20:00+01:00
## Schedule
- The Conference Board, September release page: "The next release is Tuesday, October 27th at 10 AM ET." — https://www.conference-board.org/topics/consumer-confidence (published 2026-09-29, read 2026-10-25T17:40Z)
- LBBW economic calendar (week 26–30 Oct 2026): US Conference Board consumer confidence, Tue 27 Oct, 15:00 CET, period Oct — https://www.lbbw.de/group/news-and-service/research/economic-calendar/economic-calendar_ajorqffjk6_e.html (read 2026-10-25T17:50Z)
- Note: financecalendar.com (https://www.financecalendar.com/?p=2379, read 2026-10-25T17:45Z) lists the same slot but is stale (previous "89.4 in August", consensus "not yet published", status "Estimated"); mtsinsights.com also lists 27 Oct 10:00 with only Feb 2026 figures. The calendar that listed "July 90.8" is likewise stale. Ignore these for values.
## Facts
- September 2026 (FIRST release, 29 Sep, preliminary, cutoff 23 Sep): index "fell by 6.7 points to 81.9 (1985=100) in September, down from 88.6 in August"; Present Situation 109.3 (−7.9); Expectations 63.6 (−5.9, third consecutive decline) — https://www.conference-board.org/topics/consumer-confidence (published 2026-09-29, read 2026-10-25T17:40Z). The September value will be revised in the October release (the Conference Board routinely revises the prior month).
- August 2026 as published in the September release: 88.6 (no revision note in the September text). The stale calendar figure "89.4" for August is probably the August first release, implying a downward revision of about 0.8 — inference, not verified.
- Reuters: index at lowest level since 2014; "Economists polled by Reuters had expected the index to reach 89.2" for September; Dana Peterson: "Consumer appraisals of current business conditions became negative for the first time since September 2024." — https://gvwire.com/2026/09/29/us-consumer-confidence-dives-to-more-than-12-year-low-in-september/ (Reuters copy, published 2026-09-29 14:41Z, read 2026-10-25T17:42Z)
- September release detail: average 12-month inflation expectations rose 0.3 pt to 6.1% (median 5.1%); labor differential down 2.5 pt to +1.7; write-in mentions of oil and gas prices at new highs (September fuel-price surge); war/conflict mentions eased but elevated — https://fedprimerate.com/docs/Conference-Board/Fed-Prime-Rate---Conference-Board---CONSUMER---CONFIDENCE---INDEX---SEPTEMBER---2026.pdf (reprint of the CB release, read 2026-10-25T17:52Z)
- Related October indicator: University of Michigan consumer sentiment, October final 48.0 (preliminary 46.3; September 48.1), "lowest level in five months" — https://tradingeconomics.com/united-states/consumer-confidence (published 2026-10-23, read 2026-10-25T17:46Z). I.e. Michigan roughly flat from September to October.
## Base rate
- No reference class in pipeline/reference-data/. Own count (background, see below): in the 13 months listed, actual was below consensus 9 times, above 4 times.
## Schedule slip
- stats-release: rate 0.010 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-25T18:05Z). Date confirmed on conference-board.org; no sign of change.
## For a number forecast (interval claims only)
- Consensus for October 2026: **80.4** (Bloomberg/Reuters consensus as shown in the LBBW calendar; previous 81.9; LBBW's own forecast 78.8) — LBBW URL above, read 2026-10-25T17:50Z. No range found.
- Usual surprise size (actual − consensus, first release): Sep 2026 −7.3 (81.9 vs 89.2, verified, Reuters). 2025 months from desk background knowledge, NOT re-verified this session: Jan −1.6 (104.1 v 105.7), Feb −4.2 (98.3 v 102.5), Mar −1.1 (92.9 v 94.0), Apr −1.5 (86.0 v 87.5), May +10.9 (98.0 v 87.1), Jun −6.8 (93.0 v 99.8), Jul +1.3 (97.2 v 95.9), Aug +1.0 (97.4 v 96.4), Sep −1.8 (94.2 v 96.0), Oct +1.2 (94.6 v 93.4), Nov −4.6 (88.7 v 93.3), Dec −1.9 (89.1 v 91.0).
- On these 13 values: sd 4.6, rms 4.6, mean −1.3, median absolute 1.8 (fat tails: May and June 2025, Sep 2026). Proposed scale **4.5 index points**. `node scripts/refdata/models.mjs quantiles 80.4 4.5` → q10 74.6, q50 80.4, q90 86.2.
- Consensus 80.4 sits 1.5 below the September first release; LBBW 78.8.
## Risks
- Revision of September (often ±1–2 points) changes the comparison base for the derived claim; the headline is the preliminary October value.
- Fuel prices and inflation expectations drove September; any easing in October could give a rebound (Michigan flat in October).
- Part of the surprise history is unverified background; the scale rests on it plus one verified large miss.
## Sources
- https://www.conference-board.org/topics/consumer-confidence
- https://www.lbbw.de/group/news-and-service/research/economic-calendar/economic-calendar_ajorqffjk6_e.html
- https://gvwire.com/2026/09/29/us-consumer-confidence-dives-to-more-than-12-year-low-in-september/
- https://fedprimerate.com/docs/Conference-Board/Fed-Prime-Rate---Conference-Board---CONSUMER---CONFIDENCE---INDEX---SEPTEMBER---2026.pdf
- https://tradingeconomics.com/united-states/consumer-confidence
- https://tradingeconomics.com/united-states/cb-consumer-confidence (no usable data)
- https://www.financecalendar.com/?p=2379 (stale)
- https://www.mtsinsights.com/events/3934/ (stale)
- https://www.advisorperspectives.com/dshort/updates/2026/08/26/consumer-confidence-conference-board-september-2026 (fetch failed)
