# uk-boe-vote-1
- **Claim:** At least two of the nine MPC members vote to keep Bank Rate at 3.75% or lower at the decision announced on 5 November 2026.
- **Criterion:** YES if the vote recorded in the Monetary Policy Summary and minutes of the decision announced by 23:59 London time on 5 Nov 2026 shows at least two members voting for a Bank Rate of 3.75% or lower. Members voting for a larger rise do not count. NO if fewer than two do, or if no decision is taken in that window.
- **Deadline:** 2026-11-05T23:59:00+00:00.
- **Written at:** 2026-11-03T18:30Z. Pages read through the fetch tool, which returns excerpts and summaries.

## Schedule
- The BoE lists Thursday 5 November as an MPC announcement date with the November Monetary Policy Report. The page gives no clock time. — https://www.bankofengland.co.uk/monetary-policy/upcoming-mpc-dates (published undated page, read 2026-11-03T18:10Z) "Thursday 5 November"
- Reuters gives the time: announcement at 12:00 GMT (13:00 CET), press conference 12:30 GMT. — https://finance.yahoo.com/economy/policy/articles/bank-england-poised-raise-rates-000331757.html (published 2026-11-02 00:03 UTC, read 2026-11-03T18:10Z) "1200 GMT Thursday"

## Facts
- Reuters poll: economists expect Bank Rate to rise from 3.75% to 4.0%. The poll size is not stated in the copy read. — https://finance.yahoo.com/economy/policy/articles/bank-england-poised-raise-rates-000331757.html (published 2026-11-02 00:03 UTC, read 2026-11-03T18:10Z) "3.75% to 4.0%"
- Same Reuters copy, republished; counts once. The poll "pointed to a 7-2 vote in favour of a hike", with external members Alan Taylor and Swati Dhingra seen as most likely to vote to hold. — https://www.brecorder.com/news/40447002/bank-of-england-poised-to-raise-rates-but-may-push-back-on-bets-for-more (published 2026-11-02, read 2026-11-03T18:10Z) "7-2 vote in favour of a hike"
- September vote: 6-3 to hold at 3.75%. Hold: Bailey, Breeden, Dhingra, Lombardelli, Ramsden, Taylor. Raise to 4%: Greene, Mann, Pill. The statement said the committee "stands ready to act as necessary". — https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/september-2026 (published 2026-09-17, read 2026-11-03T18:10Z) "stands ready to act as necessary"
- Taylor and Dhingra have stressed spare capacity as a reason to wait; Bailey has said the BoE cannot wait for conclusive proof of second-round effects. — https://finance.yahoo.com/economy/policy/articles/bank-england-poised-raise-rates-000331757.html (published 2026-11-02 00:03 UTC, read 2026-11-03T18:10Z) "spare capacity"
- CPI was 3.5% in the year to September, above the BoE July forecast of 3.0%; in September the BoE warned inflation would rise above 4% early next year. — https://finance.yahoo.com/economy/policy/articles/bank-england-poised-raise-rates-000331757.html (published 2026-11-02 00:03 UTC, read 2026-11-03T18:10Z) "3.5%"
- Bloomberg copy: the economists' consensus is a move to 4% this week; a "surprisingly dovish" BoE survey of private-sector firms appeared last week; Pill said he was "skeptical" that four rate rises would be needed. — https://uk.finance.yahoo.com/news/markets-economists-divided-beyond-boe-051500624.html (published 2026-11-02, read 2026-11-03T18:10Z) "surprisingly dovish"
- Bloomberg survey of 2 Nov ("BOE to Raise Interest Rates for First Time Since 2023, Survey Shows") seen only as a search headline; page blocked to fetch (https://www.bloomberg.com/news/articles/2026-11-02/boe-to-raise-rates-for-first-time-since-2023-survey-shows). Numbers not read.
- financecalendar lists a Reuters poll for 4.00% and 12:00 GMT, but its text is internally stale (it also says a hike is "not currently priced"). Not relied on. — https://www.financecalendar.com/event/bank-of-england-mpc-rate-decision-november-2026/ (published undated, read 2026-11-03T18:10Z) "not currently priced"

## Base rate
- `central-bank-dissent` (pipeline/reference-classes.json): own record 2 yes, 0 no; n=2. Dissent is signalled here for Taylor and Dhingra.

## Schedule slip
central-bank-decision: rate 0.008 (scripts/refdata/slip.mjs; prior 0.01, own 0/6). No sign of a move; the date is on the BoE calendar.

## Risks
- Taylor or Dhingra could join the majority, giving 8-1 or 9-0.
- More hold votes than the two named (6-3 or closer) still resolve YES. If the MPC holds outright, at least five members vote 3.75% or lower and the claim resolves YES.
- A member voting for a 50 bp rise does not count.

## Sources
- https://www.bankofengland.co.uk/monetary-policy/upcoming-mpc-dates
- https://finance.yahoo.com/economy/policy/articles/bank-england-poised-raise-rates-000331757.html
- https://www.brecorder.com/news/40447002/bank-of-england-poised-to-raise-rates-but-may-push-back-on-bets-for-more
- https://uk.finance.yahoo.com/news/markets-economists-divided-beyond-boe-051500624.html
- https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/september-2026
- https://www.financecalendar.com/event/bank-of-england-mpc-rate-decision-november-2026/
- Bloomberg 2 Nov and FXStreet 3 Nov: blocked or failed, not read
