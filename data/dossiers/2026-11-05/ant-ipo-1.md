# ant-ipo-1
- **Claim:** Anthropic files by 23:59 ET on 4 November 2026 an amended S-1 registration statement stating a price range for its IPO shares.
- **Criterion:** YES if, between 00:00 ET on 3 Nov and 23:59 ET on 4 Nov 2026, Anthropic files with the US Securities and Exchange Commission an amended S-1 (form S-1/A) that states a price range in dollars per share for the shares offered. The acceptance time shown on SEC EDGAR decides. NO if no such filing is made in the window.
- **Deadline:** 2026-11-04T23:59:00-05:00.
- **Disclosure for the story's sources note:** the paper's tools are built on Claude, made by Anthropic. Anthropic is treated here as any company.
- **Written at:** 2026-11-02T18:40Z. Pages opened this evening were read between 18:15Z and 18:30Z on 2 Nov through the fetch tool, which returns excerpts; facts reused from data/dossiers/2026-11-04/ keep their original read time.

## Schedule
- Not scheduled. The S-1 was made public on 26 Oct — Leverage Shares https://leverageshares.com/us/insights/when-is-the-anthropic-ipo/ (published 2026-10-30, read 2026-11-02T18:20Z) "filed its public S-1 with the SEC on October 26, 2026". A company that filed confidentially must be public "at least 15 days before the roadshow starts", so the earliest roadshow start is 10 Nov (same source).
- Reported timing: investor meetings could begin the week of 9 Nov (Bloomberg), target of the week of 16 Nov for listing (WSJ); goal of trading before Thanksgiving, 26 Nov — same source, secondary reporting of those papers, which were not read.
- WSJ, 26 Oct: Anthropic "could disclose its valuation and share details in about two weeks" — Leverage Shares https://leverageshares.com/us/insights/anthropic-ipo-price/ (published 2026-10-30, read 2026-11-02T18:25Z), via Investing.com. Two weeks from 26 Oct is about 9 Nov.

## Facts
- **2 Nov amendment:** the updated filing gave no size and no price: it "gave no indication of how much the company ultimately expects to raise, or what the shares will be priced at when it goes public" — AP via https://www.clickondetroit.com/business/2026/11/02/anthropic-posts-17b-quarterly-revenue-but-losses-continue-in-fresh-ipo-filing/ (published 2026-11-02 12:06, read 2026-11-02T18:25Z). Debut expected "later this month" (same source).
- **Cover page on 30 Oct:** "between $ and $" — Leverage Shares, above. The range "appears in an amended filing before the roadshow" (Leverage Shares, price article, above); that is the site's general statement, not a rule.
- **Numbers in the 2 Nov filing:** third-quarter revenue $17bn, net loss $23.3bn; nine months revenue $33.2bn, net loss $104bn including a $94bn accounting charge — AP, above.
- **Listing:** Nasdaq, ticker ANT — AP, above. Lead banks Goldman Sachs and Morgan Stanley; "The reported timing is the week of November 16, 2026"; "Reports stress the schedule could change" — https://tech-insider.org/anthropic-ipo-biggest-listings-ant-22-banks-542b-spend-2026/ (published 2026-10-26, read 2026-11-02T18:25Z). Reported raise $60bn to over $100bn (same source, unconfirmed).
- **EDGAR not read:** sec.gov was not opened in this run; the filing facts above are from press reports.

## Base rate
- `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): own record 3 yes / 27 no, for a one-day window; this window is two days. No class covers S-1/A price-range timing.

## Schedule slip
- slip_class `none`: no scheduled event; the reported dates above are the only guide.

## Risks
- The range could come earlier than the reported dates; nothing stops a filing before the roadshow's earliest date.
- A further S-1/A with no range (exhibits, updates) would not count.
- A delay of the listing makes this later still.
- Reports of a target valuation or price in the press do not count; only the filing does.

## Sources
- https://leverageshares.com/us/insights/when-is-the-anthropic-ipo/
- https://leverageshares.com/us/insights/anthropic-ipo-price/
- https://www.clickondetroit.com/business/2026/11/02/anthropic-posts-17b-quarterly-revenue-but-losses-continue-in-fresh-ipo-filing/
- https://tech-insider.org/anthropic-ipo-biggest-listings-ant-22-banks-542b-spend-2026/
