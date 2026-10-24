# bg-gyurov-28: Gyurov at 28% or more in round one (proposed replacement for bg-gyurov-second)

- **Claim:** In the CIK results of the first round of Bulgaria's presidential election on 25 Oct 2026, Andrey Gyurov receives at least 28.0% of valid votes.
- **Criterion:** YES if the latest CIK (results.cik.bg / cik.bg) preliminary or final first-round result published between 06:00 EET on 25 Oct and 23:59 EET on 26 Oct 2026 shows the Gyurov–Kandev ticket at 28.00% or more of valid votes. Valid votes are as CIK counts them, including the "I do not support anyone" option. If CIK prints a percentage, that figure decides; otherwise the ticket's votes divided by that total. NO if the share shown is below 28.00%, or if the first round is not held on 25 Oct. If CIK publishes nothing in the window, the claim stays pending.
- **Deadline (event window end):** 2026-10-26T23:59:59+02:00; resolves by 2026-10-27T05:00:00+01:00
- **Written at:** 2026-10-24T19:30:00+02:00

## Schedule
- Same as bg-gyurov-second. CIK interim results begin around midnight and were at 98% of protocols by 14:22 the next day (April 2026, BTA/BNT; URLs in bg-gyurov-second).

## Facts
- **Final-week polls for Gyurov:**

| Pollster | Fieldwork | n | Gyurov | Base | Source |
|---|---|---|---|---|---|
| Gallup International Balkan | 14–22 Oct | 1,001 | 29.7 | includes undecided 2.2 and "none" 0.4 | BTA 2026-10-23 15:05, https://www.bta.bg/en/news/bulgaria/1231172-iotova-and-valchev-lead-in-presidential-election-with-43-2-support-gallup-poll (read 2026-10-24T17:06Z) |
| Alpha Research | 18–22 Oct | 1,000 | 28.3 | not stated | Novinite 2026-10-23 10:08, https://www.novinite.com/articles/241210/Two+Polls+Show+Yotova+in+Front,+but+Gap+with+Gyurov+Narrows (read 17:07Z) |
| Trend for 24 Chasa | 14–20 Oct | 1,002 | 27.8 | intending voters | same Novinite article |

  - Mean 28.6; spread 1.9 pp.
- **Trend over October:** Alpha 26.1 (24 Sep–1 Oct) → 28.3. Trend 24.6 (26 Sep–2 Oct) → 27.8. Sources: Sofia Globe, 2026-10-05; BTA, 2026-10-06 (previous dossier bg-iotova-45).
- **CIK base:** valid votes include "I do not support anyone". That option took 2.27% in 2021 and 5.59% in 2016, against 0.4% in Gallup (Wikipedia 2021/2016 pages; previous dossier). Each point of "none" above the polled level lowers Gyurov's share by about 0.3 pp.
- **Backing:** PP–DB, which polled 12.4% in the 19 Apr 2026 parliamentary election (Wikipedia 2026 presidential page). Gyurov's polled share is more than double the PP–DB vote, so he is drawing beyond the alliance.
- **Last comparable:** the 2021 runner-up, Gerdzhikov, got 22.83% with polls in a similar range. The 2021 per-candidate poll errors for the runner-up were not compiled.

## Base rate
- No compiled Bulgarian poll error (poll-error.json: "not compiled"). The pooled candidate/party sd is 2.61 pp (n=29). In 2021 the leader was understated by 2.2 pp on the poll mean. base_rate = null.

## For number claims
- **Consensus:** the final-week poll mean is 28.6 (27.8–29.7). After a CIK base adjustment for "none" at about 2% (−0.5 pp), it is about 28.1. That adjustment is arithmetic, not a published figure.
- **Usual error:** sd 2.61 pp, pooled (poll-error.json).

## Schedule slip
- **Class:** election-held, rate 0.010 (slip.mjs, estimate).

## Risks
- **Turnout mix:** at turnout of about 40%, urban and diaspora voters (who lean PP–DB) may be over-represented, which would help Gyurov. Late-arriving Sofia and abroad protocols push his share up through the count.
- **Strategic voting:** anti-Iotova voters consolidating behind Gyurov to force a runoff would also help him.
- **"None" and minor tickets:** "none" plus 24 minor tickets may take more than the polls show.

## Sources
- https://www.bta.bg/en/news/bulgaria/1231172-iotova-and-valchev-lead-in-presidential-election-with-43-2-support-gallup-poll
- https://www.novinite.com/articles/241210/Two+Polls+Show+Yotova+in+Front,+but+Gap+with+Gyurov+Narrows
- https://en.wikipedia.org/wiki/2026_Bulgarian_presidential_election
- https://www.bta.bg/en/news/bulgaria/1210743-andrey-gurov-runs-for-president
- https://www.bta.bg/en/Parliamentary-elections-2026/1109464-central-election-commission-starts-publishing-interim-results
- https://bntnews.bg/news/based-on-9833-of-tally-sheets-processed-progressive-bulgaria-leads-gerb-udf-overtkae-we-continue-the-change-democratic-b-1389431news.html
- data/dossiers/2026-10-26/bg-iotova-45.md
