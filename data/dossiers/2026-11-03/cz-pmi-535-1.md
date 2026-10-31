# cz-pmi-535-1
- **Claim:** The S&P Global Czech Republic Manufacturing PMI for October 2026, published on 2 November, is 53.5 or higher. (Derived from cz-pmi-oct, event > 53.45.)
- **Criterion:** YES if the headline seasonally adjusted PMI for October 2026 in S&P Global's Czech Republic Manufacturing PMI release of 2 Nov 2026 is 53.5 or higher (as published, one decimal). NO if it is lower, or if the release is not issued on 2 Nov 2026 (Prague time) because of a postponement.
- **Event window:** 2026-11-02T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Prague). Expected at 09:30 CET (08:30Z).
- **Written at:** 2026-10-31T18:27Z. Full fact base with all excerpts: data/dossiers/2026-11-03/cz-pmi-oct.md (same story). Read times 2026-10-31 17:58Z–18:12Z.

## Schedule
- S&P Global release calendar, 2 November 2026: "Czechia: Manufacturing PMI, 08:30 UTC" — https://www.pmi.spglobal.com/Public/Release/ReleaseDates?language=en (read 18:10Z). 08:30 UTC = 09:30 CET. First release; no flash for Czechia.

## Facts
- The threshold 53.5 equals the September 2026 reading: 53.5, down from 54.1 in August — RTTNews https://www.rttnews.com/3695833/czechia-manufacturing-growth-remains-strong-in-september.aspx?type=eueco (published 2026-10-01 09:26 ET, read 18:06Z). So YES means "unchanged or higher than September".
- History Sep 2025–Sep 2026 (S&P Global releases, see cz-pmi-oct.md): 49.2, 47.2, 48.0, 50.4, 49.8, 50.0, 52.8, 52.9, 52.2, 53.9, 52.2, 54.1, 53.5.
- Readings at or above 53.5 in that run: Jun 53.9, Aug 54.1, Sep 53.5 (3 of 13; own count). Aug 54.1 was "the highest reading since April 2022 (54.4)" — bne IntelliNews https://www.intellinews.com/czech-pmi-improves-to-54-1-in-august-highest-level-since-april-2022-465142/ (published 2026-09-02, read 18:04Z).
- Month-on-month changes over the last 12 months: 7 up, 5 down, none at 0.0 (own count from the history). Sample sd of changes 1.58 points; mean absolute change 1.29 (own arithmetic, Python `statistics.stdev` on consecutive differences).
- Consensus: 53.3 per sigmanomics' calendar (previous 53.5), unverified country label — https://sigmanomics.com/cz/manufacturing-pmi (read 18:00Z). September's consensus was 53.9 and the outcome 53.5 (Trading Economics, https://tradingeconomics.com/czech-republic/manufacturing-pmi, read 17:58Z).
- September detail: output and new orders rose more slowly, new export orders slower, delivery times lengthened at the fastest pace in three months, input costs accelerated — Trading Economics (same URL).
- Context: euro-area October flash manufacturing PMI 52.4 (prior 52.9, expected 52.7) — investingLive https://investinglive.com/news/eurozone-october-pmi-misses-estimates-as-growth-slows-keeping-ecb-rate-hike-dilemma-alive/ (published 2026-10-23 08:00 GMT, read 18:09Z); Germany October flash manufacturing 54.2 (prior 53.9, expected 53.5) — investingLive https://investinglive.com/news/germany-october-flash-manufacturing-pmi-54-2-vs-53-5-expected/ (published 2026-10-23 07:30 GMT, read 18:09Z).
- Czech composite business confidence (ČSÚ) 96.6 in October, from 98.4 — Trading Economics related table (read 18:08Z).

## Base rate
- `stats-release-beats-threshold` (pipeline/reference-classes.json): base_rate null, own record 7 YES / 3 NO. That class is for thresholds near consensus; here the threshold (53.5) is 0.2 above the only consensus figure found (53.3).

## Schedule slip
- `stats-release`: 0.006 [estimate], own 0/15 (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-31T18:13Z). A postponement resolves NO. No sign of one.

## Risks
- Rounding: the headline is published to one decimal, and 53.5 itself counts as YES.
- The series moves about 1.5 points a month, so 53.5 sits in the middle of the plausible range rather than at an edge.
- Signals point both ways: German flash up and beat; euro-area flash down and missed; Czech confidence down; supplier delays lift the index mechanically.

## Sources
- As in data/dossiers/2026-11-03/cz-pmi-oct.md, in particular:
- https://www.pmi.spglobal.com/Public/Release/ReleaseDates?language=en
- https://www.rttnews.com/3695833/czechia-manufacturing-growth-remains-strong-in-september.aspx?type=eueco
- https://www.intellinews.com/czech-pmi-improves-to-54-1-in-august-highest-level-since-april-2022-465142/
- https://tradingeconomics.com/czech-republic/manufacturing-pmi
- https://sigmanomics.com/cz/manufacturing-pmi
- https://investinglive.com/news/eurozone-october-pmi-misses-estimates-as-growth-slows-keeping-ecb-rate-hike-dilemma-alive/
- https://investinglive.com/news/germany-october-flash-manufacturing-pmi-54-2-vs-53-5-expected/
