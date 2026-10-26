# us-midterms-early-40m-28
- **Claim:** By the end of Wednesday 28 October 2026 (New York time), the University of Florida Election Lab's 2026 early-vote tracker shows at least 40 million early votes (in-person and mail combined) cast nationwide in the US midterm elections.
- **Criterion:** YES if the national "Total early votes" figure on the UF Election Lab 2026 early-voting tracker (https://election.lab.ufl.edu/early-vote/2026-early-voting/), in its last update timestamped at or before 23:59:59 EDT on 28 Oct 2026, is 40,000,000 or more. Read from the live page, an archived copy of it, or a report (AP, NPR, major outlet) quoting that update's figure. NO if that figure is below 40,000,000. A later update (29 Oct or after) does not count, even if it adds votes cast on 28 Oct. Delayed reading is not NO: if the figure cannot be read by the morning run, the claim stays pending until the timestamped figure is found.
- **Deadline (event window end):** 2026-10-28T23:59:59-04:00
- **Written at:** 2026-10-26T20:58:00+01:00

## Schedule
- The tracker is continuous, not a scheduled event. It updates several times a day: the page read at 2026-10-26T19:3xZ showed "Last updated: Oct 26, 2026 @ 1:26pm Eastern Time", and a second read minutes later showed "Last updated: Oct 26, 2026 @ 3:13pm Eastern Time" — https://election.lab.ufl.edu/early-vote/2026-early-voting/ and https://election.lab.ufl.edu/?p=8857 (read 2026-10-26T19:40Z). The national fields ("Total early votes", "In-person early votes", "Mail ballots returned", "Mail ballots requested") render by JavaScript; our text fetch saw only "X" placeholders, so the current figure was NOT read directly.
- Election day is 3 November 2026. Wednesday 28 Oct is the sixth day before it. Many states run in-person early voting through that week (Texas, Georgia, North Carolina and others).

## Facts
- Newsweek, 26 Oct: over 28 million votes, per the UF Election Lab — https://www.newsweek.com/map-states-early-voters-midterms-12619134 (published 2026-10-26T15:23Z, read 2026-10-26T19:45Z) "Over 28 million Americans have already cast ballots in the 2026 midterms." The article says early voting "is outpacing 2022 numbers". No nationwide 2022 figure.
- WJLA / Sinclair Fact Check Team, 26 Oct: more than 30 million, per the UF Election Lab — https://wjla.com/news/nation-world/fact-check-team-what-early-voting-numbers-tell-us-about-the-midterm-election-ballots (published 2026-10-26, read 2026-10-26T19:45Z). "More than 30 million Americans had already voted, according to the University of Florida's Election Lab". The article also cites AP's comparison with the same point in 2022, about two weeks before election day: Texas about +74%, Maine about +39%, Ohio about +30%, Iowa about −6%, Michigan similar to 2022.
- NPR, 23 Oct, headline "Over 19 million people have already cast their votes for the midterms, data shows" — https://www.npr.org/2026/10/23/nx-s1-6012692/over-19-million-people-have-already-cast-their-votes-for-the-midterms-data-shows (published 2026-10-23; robots-blocked, only the URL slug and title from the search result were read, 2026-10-26T19:44Z). The tracker the article used and its as-of time were not read.
- FOX 10 / AP data, 17 Oct: about 6 million early votes from 39 states, "as of Thursday" (probably 15 Oct) — https://www.fox10phoenix.com/news/no-kings-rallies-across-us-push-voting-early-heres-how-many-voters-already-have (published 2026-10-17 19:34 MST, read 2026-10-26T19:36Z). "Data gathered as of Thursday shows that 6 million voters have cast their ballots early." "The AP's report lists data from 39 states." This is a different tracker (AP).
- Implied pace (our own arithmetic, mixed sources): about 19m (23 Oct) rising to about 28–30m (26 Oct) is about 3–4m per day. Reaching 40m by the last 28 Oct update needs about 10m more from the 26 Oct afternoon level of about 30m, over roughly 2.3 days of reporting. Note that states report with lags, and some states batch mail-ballot counts.
- Colorado Newsline, 21 Oct: Colorado had 509,364 ballots returned (12.6% of active voters), "outpacing the 2022 midterm elections" — https://www.newsfromthestates.com/node/433952 (published 2026-10-21 06:00 ET, read 2026-10-26T19:37Z). A related headline on that page: "Midterm early voter turnout tops 2022 stats by 57% in first 8 days, but lags behind 2018". It is unsourced and not verified.
- Georgia passed 1 million votes cast by 19 Oct — https://www.atlantanewsfirst.com/2026/10/19/more-than-1-million-votes-cast-georgias-midterm-election-so-far/ (search result title only, read 2026-10-26T19:36Z).
- Context: Trump has scheduled midterm rallies in Lubbock and Waco, Texas, on Tue 27 Oct — https://texasscorecard.com/decisiontexas/trump-plans-two-texas-rallies-in-final-stretch-of-midterm-campaign/ (published 2026-10-20, read 2026-10-26T19:50Z) "Trump is scheduled to appear in Lubbock and Waco on Tuesday, October 27". No 28 Oct event was found.
- 2022 comparison: the Election Lab's 2022 tracker is archived at https://rpubs.com/ElectProject/early_vote_2022 (linked from the 2026 page; not read). We have not read a 2022 national total for the same point, 6 days before the election (2 Nov 2022). No figure is given here.

## Base rate
- No reference class in pipeline/reference-data/ fits. This claim is a threshold on a cumulative count, so it is driven by the daily increments above rather than by a base rate. Own count: none.

## Schedule slip
- Slip class: none. The count accumulates continuously, and the tracker keeps updating. Risk of the tracker not updating on 28 Oct: there is no sign of this, since it updated at least twice on 26 Oct.

## Risks
- Reading: the national figures render only in a browser, so the morning reader may need a browser, an archive snapshot or a news report quoting the figure.
- Source mismatch: different trackers (AP, Election Lab, TargetSmart, NBC) give different totals. Only the UF Election Lab figure counts.
- Reporting lags and batch uploads, such as a large state like California posting mail returns in bulk, can move the figure by several million in one update, either before or after the cutoff.
- The 19m figure (NPR) may come from a different tracker or as-of time, so the pace estimate is rough.
- Possible revisions or de-duplication by the Lab.

## Sources
- https://election.lab.ufl.edu/early-vote/2026-early-voting/
- https://election.lab.ufl.edu/?p=8857
- https://election.lab.ufl.edu/blog/
- https://www.newsweek.com/map-states-early-voters-midterms-12619134
- https://wjla.com/news/nation-world/fact-check-team-what-early-voting-numbers-tell-us-about-the-midterm-election-ballots
- https://www.npr.org/2026/10/23/nx-s1-6012692/over-19-million-people-have-already-cast-their-votes-for-the-midterms-data-shows (blocked)
- https://www.fox10phoenix.com/news/no-kings-rallies-across-us-push-voting-early-heres-how-many-voters-already-have
- https://www.newsfromthestates.com/node/433952
- https://texasscorecard.com/decisiontexas/trump-plans-two-texas-rallies-in-final-stretch-of-midterm-campaign/
- https://ontheissues.org/SENATE/Senate_Debates_2026.htm (no 28 Oct debate listed)
- https://www.wpxi.com/news/politics/troy-jackson-tells/IKT2RCK5CUZV5HQXMXQMIYSB7U/ (Maine debate 15 Oct, the last of four)
- https://cbsnews.com/news/trump-loads-up-on-rallies-before-election-day/ (2018 article, not relevant)
- https://www.theguardian.com/us-news/live/2026/oct/26/... (blocked)
