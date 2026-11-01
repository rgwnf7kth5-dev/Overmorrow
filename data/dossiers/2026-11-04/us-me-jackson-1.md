# us-me-jackson-1
- **Claim:** Troy Jackson (D) defeats Senator Susan Collins (R) in Maine's US Senate election of 3 November 2026.
- **Criterion:** YES if Troy Jackson is the winner of the 3 Nov 2026 Maine US Senate election according to the AP race call or, if AP has not called the race when the resolver reads the evidence, the Maine Secretary of State's final tabulation (including the ranked-choice tabulation if no candidate has a first-round majority) or certified result. NO if AP calls (or the final tabulation shows) Susan Collins or anyone else as winner, or if the election is not held on 3 Nov 2026. A race that is uncalled, awaiting ranked-choice tabulation or in a recount when the resolver reads the evidence stays pending.
- **Event window:** 2026-11-03T00:00:00-05:00 to 2026-11-03T23:59:00-05:00 (America/New_York). Polls close 8 pm ET = 02:00 CET Wed 4 Nov.
- **Written at:** 2026-11-01T18:16:00Z. Read times between 17:30Z and 18:15Z on 1 Nov. "Sweep" marks facts read by tonight's sweep agent.

## Schedule
- General election 3 Nov 2026, conducted with ranked-choice voting — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine (raw wikitext read 2026-11-01T18:05Z) "Both the primary and general elections will be conducted with ranked-choice voting."
- **Nominee check (the sweep's "Jackson" is correct):** Graham Platner won the 9 June Democratic primary but withdrew on 10 July; former Maine Senate President Troy Jackson was chosen at a nominating convention on 25 July, beating Saundra Pelletier 566–5 — same article "withdrew from the race on July 10 following sexual assault accusations and other controversies. Jackson was chosen to replace Platner through a nominating convention on July 25." and "Jackson won the convention vote over Pelletier, 566–5."
- **Ballot:** the article's results box lists only Collins (R, incumbent) and Jackson (D); independent Tim Rich "did not qualify" — same article (read 18:05Z). With two candidates, a ranked-choice round is needed only if write-ins keep both below 50%.

## Facts
- **Aggregate average:** Jackson 49.4, Collins 46.3, **Jackson +3.1** (other/undecided 4.3) — Wikipedia Maine article (above, read 18:05Z) "| colspan="3" |Average |46.3% | '''49.4%''' |4.3% | '''Jackson +3.1%'''". Rows: 270toWin Oct 16–27 +3.6; DDHQ through 27 Oct +3.8; FiftyPlusOne through 27 Oct +3.5; RCP Oct 5–26 +1.7; Silver Bulletin through 26 Oct +2.7 (updated 30–31 Oct).
- **RCP (7 polls, Oct 5–26):** Marist +2, CNN +4, Trafalgar tie, Fox tie, InsiderAdvantage +2, Suffolk +2, Rasmussen +2 (all Jackson or tie) — https://www.realclearpolling.com/polls/senate/general/2026/collins-vs-jackson (read by sweep ~17:35Z) "RCP Average 10/5 - 10/26 … Jackson+1.7".
- **Latest poll in the table:** YouGov 26–29 Oct, 1,503 LV, ±4.0: Jackson 52, Collins 47 — Wikipedia (above, read 18:05Z).
- **Poll volume:** about 16 raw polls dated October (sweep's approximate count).
- **History:** in 2020 "despite almost all polls and analysts predicting that she would lose her re-election bid, Collins defeated Democratic nominee Sara Gideon by a nine-point margin" — Wikipedia (above). Democrats have not won a Maine Senate election since 1988 (same article).
- **Ranked-choice timing precedent:** after the 9 June 2026 primary the Secretary of State "completed ranked choice tabulations on five June 9, 2026 Primary Election races" on 19 June; official results within 20 days; recount requests "within five business days after results are announced" — https://www.maine.gov/sos/news/maine-secretary-states-office-announces-ranked-choice-tabulations (published 2026-06-19, read 2026-11-01T18:07Z).
- **Monitoring:** Maine SoS Bellows "will monitor the monitors very carefully" on DOJ election monitors — https://www.valleynewslive.com/2026/10/27/trumps-doj-sends-1000-election-monitors-50-states-locations-not-yet-disclosed/ (published 2026-10-27, via sweep).
- **Historical poll error:** see 2020 above; midterm Senate final averages have missed by roughly 3–5 pp (FiveThirtyEight 2019 via https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019, via sweep).

## Base rate
- `final-poll-leader-wins` (pipeline/reference-classes.json): 0.833, n = 6, own record 3 yes / 4 no. Collins outran her final polls by a wide margin in 2020 (above).

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-01T18:13Z). No sign of postponement.

## Risks
- Collins's 2020 overperformance against polls; RCP has only +1.7, with two ties among its seven polls.
- Nominee replaced in late July; Platner's withdrawal controversy may still affect turnout among his supporters.
- If write-ins deny a first-round majority, the ranked-choice tabulation takes about ten days (June precedent); a recount request can follow. Both mean pending, not NO.

## Sources
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine
- https://www.realclearpolling.com/polls/senate/general/2026/collins-vs-jackson
- https://www.maine.gov/sos/news/maine-secretary-states-office-announces-ranked-choice-tabulations
- https://www.valleynewslive.com/2026/10/27/trumps-doj-sends-1000-election-monitors-50-states-locations-not-yet-disclosed/
- https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019
- https://electionlawblog.org/?p=117884 (2020 article on Maine's ranked-choice timing; background only)
- https://www.wpxi.com/news/politics/maine-counts-ranked/5ZAZ25D24M3ZFNAWO4Y7LFP73E/ (AP, June 2026 primary RCV count; background only)
