# eu-shell-buyback-3bn
- **Claim:** In its third-quarter 2026 results, published by 23:59 London time on 29 October 2026, Shell announces a new share buyback programme of at least $3.0 billion.
- **Criterion:** YES if Shell plc's Q3 2026 results press release (or another Shell plc RNS announcement), published between 00:00 on 28 Oct and 23:59:59 London time (UTC+0) on 29 Oct 2026, announces a new share buyback programme whose new amount is $3.0bn or more. The new amount excludes any sum carried over from an earlier programme; for example, "$3.0 billion" or "$3.5 billion" is YES, but "$2.5 billion plus $0.5 billion carried over" is NO. NO if the new amount is below $3.0bn, if no new buyback is announced, or if the results are not published by 23:59:59 London time on 29 Oct 2026.
- **Event window:** 2026-10-28T00:00:00+00:00 to 2026-10-29T23:59:59+00:00 (Europe/London; GMT since 25 Oct)
- **Written at:** 2026-10-27T18:35:00Z

## Schedule
- Shell's Q2 2026 results release (30 Jul 2026) gives the next date as "Third quarter 2026 results and dividends: October 29, 2026" — https://shell.gcs-web.com/node/29541 (read 2026-10-27T18:03Z).
- Admiral Markets preview, citing Shell's advance notice: 07:00 GMT on Thursday 29 October (08:00 CET) — https://admiralmarkets.com/education/articles/shares/shell-share-price-q3-2026-results-preview (read 2026-10-27T17:56Z).
- The date is 29 Oct, so no replacement event is needed.

## Facts
- Q2 2026 (first release, 30 Jul): adjusted earnings $9,836m (Q1 2026 $6,915m; Q2 2025 $4,264m); CFFO $21,432m; net debt $41,754m (Q1 $52,606m); gearing 18.7% (Q1 23.2%); dividend $0.3906/share — https://shell.gcs-web.com/node/29541 (published 2026-07-30 07:00 BST, read 2026-10-27T18:03Z).
- Q2 2026 buyback: a new $3.0bn programme plus $1.2bn carried over from the Q1 programme, "expected to be completed by the Q3 2026 results announcement" — same source. The Q1 2026 programme ($3.0bn) was "temporarily suspended in connection with the ARC Resources acquisition"; only $1.8bn of it was completed.
- Distributions in Q2 2026: $5.2bn ($3.0bn of buybacks plus $2.2bn of dividends) — Admiral Markets (above) and the Q2 release.
- Q4 2025 results (5 Feb 2026) launched a $3.5bn buyback. The CEO's quote describes this as the "17th consecutive quarter of at least $3 billion of buybacks". Q4 2025 net debt was about $45.7bn and gearing 20.7%. 2025 distributions were about 52% of CFFO — Shell Q4 2025 release, republished at https://www.taiwannews.com.tw/news/6296857 (published 2026-02-05, read 2026-10-27T18:05Z) "commencing a $3.5 billion share buyback programme".
- Buyback sizes, last 8 quarters (amount announced at each results release). Q4 2025 results: $3.5bn. Q1 2026 results: $3.0bn (later suspended at $1.8bn for the ARC deal). Q2 2026 results: $3.0bn new + $1.2bn carry-over. Q2 2024 – Q3 2025 results: at least $3.0bn each, per the "17 consecutive quarters" statement (the individual sizes for those five quarters were not read tonight). Admiral Markets (above) "Q4 2025 results: $3.5bn programme… Q1 2026 results: $3.0bn programme, paused for the ARC deal after $1.8bn"; fintool https://fintool.com/news/shell-q4-earnings-buyback-maintains (read 2026-10-27T18:05Z) "17 consecutive quarters of at least $3 billion in repurchases".
- Payout policy: 40–50% of CFFO through the cycle (Admiral Markets, citing the CFO on the Q2 call: "the commitment that we have").
- Q3 2026 update note, 7 Oct 2026, per AskTraders as cited by Admiral Markets (the primary note was not read). Indicative refining margin $42/bbl (Q2 $24/bbl). Integrated Gas production 740–780 kboe/d (Q2 631), including ARC Resources. Upstream 1,735–1,835 kboe/d. LNG liquefaction 7.2–7.6 mt. Refinery utilisation 93–97%. Chemicals margin $208/t (Q2 $270/t). Headwinds: about $2.5bn working-capital outflow from the timing of German emissions-certificate payments, lower marketing earnings, about $0.3bn of exploration write-offs, and possibly higher net debt linked to the ARC deal. RBC said the production guidance was above consensus — https://admiralmarkets.com/education/articles/shares/shell-share-price-q3-2026-results-preview (read 2026-10-27T17:56Z).
- Analyst expectations for the buyback size: none found. Admiral Markets says only that "the size of the next buyback is likely to draw close attention". No adjusted-earnings consensus was found (agenda note: an aggregator, digrin, shows EPS 3.08).

## Base rate
- Reference class: Shell quarterly results announcing a new buyback of at least $3.0bn. Every announcement for 19 consecutive quarters (the 17 to Q4 2025, then Q1 and Q2 2026) was at least $3.0bn, n=19 (own count from the sources above). The size was cut from $3.5bn to $3.0bn at Q1 2026 (ARC acquisition). No file in pipeline/reference-data/ applies.

## Schedule slip
- Slip class: company-event, rate 0.020 [estimate] (`node scripts/refdata/slip.mjs company-event`). The date is set in Shell's Q2 release, and there is no sign of a move.

## Risks
- Balance sheet: the ARC Resources acquisition, the $2.5bn emissions-certificate working-capital outflow and possibly higher net debt could lead Shell to cut the buyback below $3.0bn, as it already trimmed it in May by suspending it.
- Format: Shell could announce a programme split into a new amount plus a carry-over (as in Q2). Only the new amount counts.
- Shell could pause buybacks for M&A or another deal (the ARC precedent).
- Very unlikely: a delay of the release.

## Sources
- https://shell.gcs-web.com/node/29541 (Q2 2026 results release)
- https://admiralmarkets.com/education/articles/shares/shell-share-price-q3-2026-results-preview
- https://www.taiwannews.com.tw/news/6296857 (Q4 2025 release, republished)
- https://fintool.com/news/shell-q4-earnings-buyback-maintains
- Not usable (JS shell pages, no content): https://www.shell.com/investors/results-and-reporting/quarterly-results.html, https://www.shell.com/investors/financial-calendar.html, https://www.shell.com/news-and-insights/newsroom/news-and-media-releases.html
