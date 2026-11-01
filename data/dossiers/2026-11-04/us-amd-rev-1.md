# us-amd-rev-1
- **Claim:** AMD reports revenue of at least $13.50 billion for the third quarter of 2026 in results published on 3 November 2026.
- **Criterion:** YES if AMD's results release for its fiscal third quarter 2026 (quarter ended September 2026), published on 3 Nov 2026 (US Eastern Time), reports total revenue of $13.50 billion ($13,500 million) or more. NO if the figure is lower, or if AMD does not publish the results on 3 Nov 2026 (US Eastern Time).
- **Event window:** 2026-11-03T00:00:00-05:00 to 2026-11-03T23:59:00-05:00 (America/New_York)
- **Written at:** 2026-11-01T18:30Z. Read times below are between 17:55Z and 18:15Z on 1 Nov.
- **Threshold note:** the planning suggestion was $13.30bn (top of guidance). The beat history below puts $13.30bn only +1.6% above the $13.09bn consensus, less than every one of the last five revenue beats (+2.0% to +6.2%), so the threshold was moved to $13.50bn (+3.1% above consensus, inside the range of recent beats).

## Schedule
- AMD "will report fiscal third quarter 2026 financial results on Tuesday, Nov. 3, 2026, after the [US] close"; "conference call ... at 5 p.m. ET / 2 p.m. PT" — AMD press release https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results (published 2026-10-06 16:15 EDT, read 2026-11-01T18:02Z). Results are usually issued about 16:05–16:15 ET (22:05–22:15 CET).

## Facts
- **Guidance (Q2 release, 4 Aug 2026):** "For the third quarter of 2026, AMD expects revenue to be approximately $13 billion, plus or minus $300 million"; non-GAAP gross margin about 56% — SEC 8-K ex. 99 https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000121/q22026991.htm (published 2026-08-04, read 2026-11-01T18:03Z). Guided range $12.7–13.3bn; the $13.50bn threshold is $0.2bn above the top of the range.
- **Q2 2026 (first release):** revenue $11,536m, +50% y/y (from $7,685m); Data Center $6,718m (+107%), Client $3,062m (+23%), Gaming $779m (−31%), Embedded $977m (+19%) — same 8-K. Q1 2026 revenue $10,253m — same 8-K.
- Guidance midpoint implies about +13% q/q and about +41% y/y (on Q3 2025 $9.25bn; own arithmetic).

## Consensus
- Revenue $13.09bn, non-GAAP EPS $1.95 — optionsanalysissuite.com https://www.optionsanalysissuite.com/stocks/amd/earnings (read 2026-11-01T18:08Z); same figures at TheStreet https://pro.thestreet.com/earnings/2026-11-03 (sweep notes, updated 1 Nov, not re-read).
- Revenue $13.0bn, EPS $1.94 — digrin https://www.digrin.com/stocks/earnings_calendar/2026-11-03 (sweep notes, not re-read).
- Earnings Whispers shows $12.62bn (sweep notes) — an outlier below the guidance midpoint, probably stale.
- Range of individual estimates: not found.
- **Gap to threshold:** $13.50bn is $0.41bn (+3.1%) above the $13.09bn consensus (own arithmetic).

## Usual surprise size (revenue, actual vs consensus)
Source: optionsanalysissuite.com (above), read 2026-11-01T18:08Z; percentages own arithmetic.
- Q2 2025 (5 Aug 2025): $7.68bn vs $7.41bn → +3.6%
- Q3 2025 (4 Nov 2025): $9.25bn vs $8.76bn → +5.6%
- Q4 2025 (3 Feb 2026): $10.27bn vs $9.67bn → +6.2%
- Q1 2026 (5 May 2026): $10.25bn vs $9.90bn → +3.5%
- Q2 2026 (4 Aug 2026): $11.54bn vs $11.31bn → +2.0%
- Mean beat +4.2%, sd 1.7% (n = 5; about $0.22bn on the current consensus). Every one of the five was a beat; the latest was the smallest. Earlier quarters (Q3 2024–Q1 2025) revenue estimates were not found; EPS history from alphaquery https://www.alphaquery.com/stock/AMD/earnings-history (read 2026-11-01T18:07Z) shows EPS at or above estimate in 7 of 8 quarters (one miss: Q2 2025 $0.27 vs $0.28).
- Applied to $13.09bn, beats of +2.0%/+3.5%/+3.6%/+5.6%/+6.2% would give $13.35/13.55/13.56/13.82/13.90bn (own arithmetic).

## Base rate
- `company-results-beat-threshold` (pipeline/reference-classes.json): base_rate null, n 0; own record 4 YES / 1 NO.

## Schedule slip
- `company-event`: 0.013 [estimate], prior 0.02, own 0/6 (`node scripts/refdata/slip.mjs company-event`, run 2026-11-01T18:00Z). No sign of a move; date set since 6 Oct.

## Risks
- **Beat shrinking:** the last beat (+2.0%) was the smallest of five; a repeat gives about $13.35bn → NO.
- **Data Center / export rules:** MI-series GPU shipments to China and any export-licence change move revenue by hundreds of millions.
- **Gaming decline** (−31% y/y in Q2) continuing.
- **Rounding:** the release states revenue in millions; headlines round. Use the exact figure ($13,500m or more).

## Sources
- https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results
- https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000121/q22026991.htm
- https://www.optionsanalysissuite.com/stocks/amd/earnings
- https://www.alphaquery.com/stock/AMD/earnings-history
- https://www.tipranks.com/news/amd-reports-earnings-tuesday-heres-why-analysts-expect-a-strong-data-center-quarter (opened; it is the 2025 preview, not used)
- https://www.benzinga.com/quote/amd/earnings (fetch failed)
- Sweep notes only: https://pro.thestreet.com/earnings/2026-11-03, https://www.digrin.com/stocks/earnings_calendar/2026-11-03, https://earningswhispers.com/epsdetails/AMD/202606

## Research step (1 Nov evening)
Actual revenue vs the midpoint of AMD's own prior-quarter guidance (every guide was "plus or minus $300 million"); ir.amd.com press releases, read 1 Nov ~18:25–18:45Z:
| Quarter | Guide midpoint (release) | Actual (release) | Beat vs midpoint |
|---|---|---|---|
| Q4 2024 | $7.5bn (29 Oct 2024) | $7,658m (4 Feb 2025) | +$158m, +2.1% |
| Q1 2025 | $7.1bn (4 Feb 2025) | $7,438m (6 May 2025) | +$338m, +4.8% |
| Q2 2025 | $7.4bn (6 May 2025) | $7,685m (5 Aug 2025) | +$285m, +3.85% |
| Q3 2025 | $8.7bn (5 Aug 2025) | $9,246m (4 Nov 2025) | +$546m, +6.3% |
| Q4 2025 | $9.6bn (4 Nov 2025) | $10,270m (3 Feb 2026) | +$670m, +7.0% |
| Q1 2026 | $9.8bn (3 Feb 2026; includes ~$100m MI308 China) | $10,253m (5 May 2026) | +$453m, +4.6% |
| Q2 2026 | $11.2bn (5 May 2026) | $11,536m (4 Aug 2026) | +$336m, +3.0% |
| Q3 2026 | $13.0bn (4 Aug 2026) | due 3 Nov | needs +$500m, +3.85% |
- Q1 2026 release: "For the second quarter of 2026, AMD expects revenue to be approximately $11.2 billion, plus or minus $300 million." Q2 2026 release: "For the third quarter of 2026, AMD expects revenue to be approximately $13 billion, plus or minus $300 million."
- URLs: https://ir.amd.com/news-events/press-releases/detail/1224/amd-reports-third-quarter-2024-financial-results ; .../1236/amd-reports-fourth-quarter-and-full-year-2024-financial-results ; .../1247/amd-reports-first-quarter-2025-financial-results ; .../1257/amd-reports-second-quarter-2025-financial-results ; .../1265/amd-reports-third-quarter-2025-financial-results ; .../1276/amd-reports-fourth-quarter-and-full-year-2025-financial-results ; .../1284/amd-reports-first-quarter-2026-financial-results ; https://www.sec.gov/Archives/edgar/data/0000002488/000000248826000121/q22026991.htm
