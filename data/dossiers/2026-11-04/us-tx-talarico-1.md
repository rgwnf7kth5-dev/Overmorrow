# us-tx-talarico-1
- **Claim:** James Talarico (D) defeats Ken Paxton (R) in the Texas US Senate election of 3 November 2026.
- **Criterion:** YES if James Talarico is the winner of the 3 Nov 2026 Texas US Senate election according to the AP race call or, if AP has not called the race when the resolver reads the evidence, the result certified by the Texas Secretary of State's state canvass. NO if AP calls (or the certified result shows) another candidate as winner, or if the election is not held on 3 Nov 2026. A race that is uncalled or in a recount when the resolver reads the evidence stays pending.
- **Event window:** 2026-11-03T00:00:00-06:00 to 2026-11-03T23:59:00-06:00 (America/Chicago). Polls close 7 pm CT (02:00 CET Wed) and 7 pm MT in El Paso (03:00 CET).
- **Written at:** 2026-11-01T18:16:00Z. Read times between 17:30Z and 18:15Z on 1 Nov. "Sweep" marks facts read by tonight's sweep agent.

## Schedule
- General election on 3 Nov 2026 for the open seat of John Cornyn, who lost the Republican primary runoff to Ken Paxton — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas (raw wikitext read 2026-11-01T18:05Z) infobox "nominee1 = [[Ken Paxton]]", "nominee2 = [[James Talarico]]". Libertarian nominee Ted Brown is also on the ballot (same article, Libertarian convention section).

## Facts
- **Aggregate average:** Talarico 49.0, Paxton 46.2, **Talarico +2.8** (other/undecided 4.8) — Wikipedia Texas article (above, read 18:05Z) "colspan="3" |Average |46.2% | '''49.0%''' |4.8% | '''Talarico +2.8%'''". Rows: 270toWin Oct 1–30 +3.3; DDHQ through 30 Oct +3.4; FiftyPlusOne through 30 Oct +3.4; RCP Oct 15–28 +1.4; Texas Tribune through 28 Oct +2.7; Silver Bulletin through 30 Oct +2.9 (updated 30–31 Oct).
- **RCP:** an earlier read showed "RCP Average | 10/8 - 10/21 | 48.5 | 46.7 | Talarico+1.8", 11 polls — https://www.realclearpolling.com/polls/senate/general/2026/texas/talarico-vs-paxton (read by sweep ~17:35Z). Wikipedia lists the later RCP window (Oct 15–28) at +1.4.
- **Latest individual polls:** "Quantus (Friday): Paxton +1"; CNN Talarico +6; YouGov Blue Talarico +8 — Yahoo News https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html (published 2026-10-31 21:35Z, read by sweep).
- **Poll volume:** about 34 raw polls dated October in the Wikipedia general-election table (sweep's approximate count) — the most-polled Senate race.
- **Same ballot:** governor Abbott (R) +2.8 over Hinojosa (D) (49.6–46.8, updated 31 Oct) — Wikipedia via sweep. Polls therefore show sizeable ticket-splitting (Abbott and Talarico both ahead).
- **Early vote:** 7,699,516 early votes, 0.945 of total 2022 turnout (8.15m) — UF Election Lab https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv (Last-Modified 2026-11-01 17:33:55 GMT; ratio computed by sweep).
- **History:** Democrats have not won a Texas Senate race since 1988 (general knowledge; not re-checked tonight). In 2018 Cruz beat O'Rourke by 2.6 pp (general knowledge).
- **Historical poll error:** competitive midterm Senate races' final averages have missed by roughly 3–5 pp (FiveThirtyEight 2019 via https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019; 2022 RCP final averages about 3.4 pp, unverified computation from https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do).

## Base rate
- `final-poll-leader-wins` (pipeline/reference-classes.json): 0.833, n = 6, own record 3 yes / 4 no. Final-average leaders lost 4/6/5 midterm Senate and governor races in 2014/2018/2022 — https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/ (via sweep).

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-01T18:13Z). No sign of postponement.

## Risks
- Aggregators disagree: RCP +1.4 against +3.3/+3.4 elsewhere; latest Quantus poll Paxton +1.
- Texas polls have historically overstated Democrats (no figure gathered tonight).
- Paxton is Texas Attorney General; post-election litigation over counting is possible, and certification is by the state canvass (late Nov). A close race could stay uncalled (pending).

## Sources
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas
- https://www.realclearpolling.com/polls/senate/general/2026/texas/talarico-vs-paxton
- https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html
- https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv
- https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019
- https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do
- https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/
