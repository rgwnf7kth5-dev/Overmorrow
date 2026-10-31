# us-apple-rev-1
- **Claim:** Apple reports revenue of at least $114.0 billion for its fiscal fourth quarter of 2026 on 2 November 2026.
- **Criterion:** YES if Apple's results release for its fiscal fourth quarter 2026 (quarter ended September 2026), published on 2 Nov 2026 (Pacific Time), reports total net sales of $114.0 billion or more. NO if the figure is lower, or if Apple does not publish the results on 2 Nov 2026 (Pacific Time).
- **Event window:** 2026-11-02T00:00:00-08:00 to 2026-11-02T23:59:00-08:00 (America/Los_Angeles)
- **Written at:** 2026-10-31T18:25Z. Read times below are all between 17:45Z and 18:10Z on 31 Oct.

## Schedule
- Apple will release results "at 1:30 p.m. Pacific Time on November 2", with a 2:00 p.m. PT call, per "the company's updated Investor Relations page" — MacRumors https://macrumors.com/2026/10/06/apple-q4-2026-earnings-nov-2 (published 2026-10-06 14:43 PDT, read 2026-10-31T18:09Z).
- "on Monday, November 2, 2026 at 2:00 p.m. PT / 5:00 p.m. ET" (call) — MacTrast https://www.mactrast.com/2026/10/apple-to-announce-fiscal-q4-2026-earnings-on-november-2/ (published 2026-10-06, read 2026-10-31T17:47Z). Also 9to5Mac, iClarified, MacDailyNews (search results, 6–7 Oct).
- investor.apple.com was fetched (read 2026-10-31T17:59Z) but the fetched text showed no event dates (page is script-rendered). The date is confirmed via three outlets citing the IR page, not read directly.
- Monday is unusual for Apple (it usually reports on a Thursday). One preview notes that "some countdown and data sites show a late-October date, which is not Apple's date" — news.ifyouspent.com https://news.ifyouspent.com/en/news/apple-earnings-what-to-watch-november-2026 (published 2026-10-25, read 2026-10-31T18:08Z).

## Facts
- **Guidance (30 Jul 2026 call, CFO Kevan Parekh):** total revenue growth "9 to 11 percent year-over-year" in the September quarter; iPhone growth in the mid-teens; FX and supply constraints as headwinds — MacRumors (above). On the $102.5bn base this is about $111.7–113.8bn (own arithmetic: 102.5 × 1.09 = 111.7; × 1.11 = 113.8). The $114.0bn threshold is above the top of the guided range.
- Further guidance detail: gross margin 47–48% incl. about one point from tariff refunds; FX headwind of about 2.5 points; opex $19.1–19.4bn — ifyouspent (above); iThinkDifferent https://www.ithinkdiff.com/apple-q4-2026-earnings-what-to-expect/ (published 2026-10-26, updated 2026-10-27, read 2026-10-31T17:53Z).
- **Base quarter:** FQ4 2025 revenue $102.5bn — MacTrast, MacRumors (above). First release; FQ4 2026 will also be a first release.
- **Prior quarter (FQ3 2026, June):** revenue $109.4bn (+16%), EPS $2.02 vs $1.89 consensus, iPhone $54.3bn (+22%), Mac $10.4bn (+29%), Services $30.7bn (+12%), gross margin 50.1% — iThinkDifferent (above).
- **Product timing:** iPhone 18 Pro/Pro Max on sale 18 Sep, so only about nine days in the quarter; iPhone Duo on sale 23 Oct, so none in this quarter — iThinkDifferent (above).
- First report under CEO John Ternus — iThinkDifferent, MacTrast (above).

## Consensus
- Revenue about $113.3bn; EPS $1.99 ("Wall Street", no provider named) — iThinkDifferent (above).
- Revenue $113.38bn; EPS $1.99 (MarketBeat via Beinsure, 18 Oct) — ifyouspent (above).
- Desk notes (scratchpad econ_candidates.json, 30 Oct, not re-verified): EPS $1.98 (StockTitan 30 Oct, https://www.stocktitan.net/articles/earnings-calendar-week-of-november-2-2026); revenue $113.2–113.4bn.
- Range of individual estimates: not found.
- **Gap to threshold:** $114.0bn is about $0.6–0.7bn (+0.5–0.6%) above the $113.3–113.4bn consensus (own arithmetic).

## Usual surprise size
- No sourced history of Apple's revenue surprises was found tonight. Desk notes (econ_candidates.json, not re-verified): Apple "has beaten revenue consensus in most recent quarters, typically by 1-2%". The FQ3 2026 EPS beat was $0.13 (+6.9%, own arithmetic from $2.02 vs $1.89) — iThinkDifferent.

## Base rate
- `company-results-beat-threshold` (pipeline/reference-classes.json): base_rate null, n 0; own record 3 YES / 1 NO.

## Schedule slip
- `company-event`: 0.013 [estimate], prior 0.02, own 0/5 (`node scripts/refdata/slip.mjs company-event`, run 2026-10-31T18:06Z). No sign of a move; the date has stood since 6 Oct.

## Risks
- **Supply:** guidance flagged iPhone supply constraints; only nine days of iPhone 18 Pro sales fall in the quarter.
- **FX:** a 2.5-point headwind was built into guidance; dollar moves since July change the outcome.
- **Threshold:** a result that beats consensus by less than about 0.5% resolves NO.
- **Rounding:** the release states net sales in millions; headline reports may round "$114.0bn" from $113,95x million. Use the exact figure.

## Sources
- https://macrumors.com/2026/10/06/apple-q4-2026-earnings-nov-2
- https://www.mactrast.com/2026/10/apple-to-announce-fiscal-q4-2026-earnings-on-november-2/
- https://www.ithinkdiff.com/apple-q4-2026-earnings-what-to-expect/
- https://news.ifyouspent.com/en/news/apple-earnings-what-to-watch-november-2026
- https://investor.apple.com/ (no dates visible in fetched text)
- Desk notes only: https://www.stocktitan.net/articles/earnings-calendar-week-of-november-2-2026
- Search results only: 9to5mac.com, iclarified.com, macdailynews.com (6–7 Oct date announcements)
