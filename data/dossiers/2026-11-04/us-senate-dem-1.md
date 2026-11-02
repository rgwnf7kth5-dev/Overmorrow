# us-senate-dem-1
- **Claim:** Democrats, together with independents who caucus with them, win control of the US Senate (at least 51 of 100 seats) as a result of the elections of 3 November 2026.
- **Criterion:** YES if, counting the 65 senators not up for election by their current caucus (34 Democrats and caucusing independents: 32 D plus Sanders and King; 31 Republicans) and the winners of the 35 Senate races decided in the 3 Nov 2026 general elections per AP race calls (or, where AP has not called, certified state results), Democrats and independents who caucus with them hold at least 51 seats in the Senate that convenes in January 2027. A newly elected independent counts with the Democrats only if he or she has said publicly, by the time the resolver reads the evidence, that he or she will caucus with the Democrats. A race that goes to a runoff after 3 Nov (e.g. Georgia's majority rule) counts as not won by the Democrats. 50 seats is not enough (Vice President Vance is a Republican). NO otherwise, including if the general election is not held on 3 Nov 2026. If the count cannot yet be completed when the resolver reads the evidence (uncalled races, Alaska's ranked-choice tabulation, recounts), the claim stays pending.
- **Event window:** 2026-11-02T19:00:00-10:00 (00:00 ET on 3 Nov) to 2026-11-03T23:59:00-10:00 (Pacific/Honolulu; Alaska's Aleutian precincts close at 8 pm HST, which is 01:00 ET on 4 Nov).
- **Written at:** 2026-11-01T18:16:00Z. Read times between 17:30Z and 18:15Z on 1 Nov. "Sweep" marks facts read by tonight's sweep agent (scratchpad sweep/midterms.md); I re-read the Wikipedia pages at 18:05Z.
- **Board question:** data/watchlist.json `us-senate-democrats` has the same threshold (51 incl. caucusing independents) but uses "certified results available by 31 Jan 2027" and the Senate "convening in January 2027", so it would also count events after election day. Our criterion keeps the outcome to the 3 Nov vote (holdovers by current caucus, runoffs not counted) and resolves earlier. The two should agree unless a Georgia runoff, a party switch or a vacancy decides control.

## Schedule
- 35 seats are up on 3 Nov 2026: 33 Class 2 seats plus special elections in Ohio and Florida — https://en.wikipedia.org/wiki/2026_United_States_Senate_elections (raw wikitext read 2026-11-01T18:05Z) "seats_for_election = 35{{efn|33 Class 2 seats, as well as 2 Class 3 seats being determined in special elections}}". "Class 2 currently consists of 20 Republicans and 13 Democrats."

## Facts
- **Chamber arithmetic:** R 53, D 45, independents 2 (Sanders, King, both caucus with Democrats); majority 51; Democrats need a net gain of 4 — Wikipedia (above) "seats_before1 = 53", "seats_before2 = 45", "seats_needed2 = {{increase}} 4". Seats up: R 22 (20 Class 2 + OH and FL specials), D 13. Holdovers: R 31, D+I 34 (own arithmetic). Democrats need 17 of the 35 races.
- **Race averages (cross-aggregator average in each Wikipedia race article, lead of the leader in pp, updated 20–31 Oct; sweep, with my re-read of OH, TX, ME at 18:05Z):** Republican-held: NC Cooper (D) +10.1; KS Hamilton (D) +3.2; ME Jackson (D) +3.1; TX Talarico (D) +2.8; OH Brown (D) +2.6; AK Peltola (D) +1.9; IA Hinson (R) +0.2; SC Graham (R) +1.4; NE Ricketts (R) +1.8 over independent Dan Osborn; FL Moody (R) +6.0; MT Alme (R) +10.5 over independent Seth Bodnar. Democratic-held: GA Ossoff +8.5; NH Pappas +7.0; MN Flanagan +6.4; MI El-Sayed +4.5. Source pattern: https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas etc.; cross-check https://fiftyplusone.news/averages (read by sweep ~17:35Z; agrees within 0.5 pp; e.g. Georgia "Ossoff 52.6% … Collins 42.3%").
- **Tipping point (own ranking of the averages):** Democrats hold their nine uncontested-looking seats plus GA, NH, MN and MI (13) and need four Republican-held seats. Ranked by Democratic lead the pickups are NC +10.1, KS +3.2, ME +3.1, TX +2.8, OH +2.6, AK +1.9. The 17th Democratic seat, i.e. the fourth-best pickup, is **Texas at Talarico +2.8**; the next two (OH +2.6, AK +1.9) are close behind, and the weakest Democratic hold (MI +4.5) is above it.
- **Latest individual polls (Yahoo, 31 Oct):** Texas "Quantus (Friday): Paxton +1"; CNN Talarico +6; Nebraska "NYT/Siena (Saturday): Ricketts +6"; South Carolina NYT/Siena "essentially tied"; Iowa Echelon Turek +2, co/efficient Hinson +2; Kansas CNN Hamilton +4 — https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html (published 2026-10-31 21:35Z, read by sweep) "A 50-50 split gives Vice President JD Vance the tiebreaker".
- **Runoff and ranked-choice rules:** Georgia requires a majority (runoff otherwise); Maine and Alaska use ranked-choice voting — Wikipedia race articles (sweep). Maine's Senate ballot lists only Collins (R) and Jackson (D) — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine (read 18:05Z, results box). In 2024 Alaska's ranked-choice result in close races was not known until 20 Nov, 15 days after the vote — Alaska Beacon https://alaskabeacon.com/?p=15667 (published Nov 2024, read 2026-11-01T18:08Z) "won't become apparent until Nov. 20."
- **Alaska litigation:** United States v. State of Alaska (D. Alaska, 3:26-cv-00376-SLG): DOJ seeks "to block the election results if Dan S. Sullivan loses by a small margin" (Wikipedia, via sweep); motions to dismiss under expedited consideration, no ruling seen on 1 Nov — https://www.democracydocket.com/cases/alaska-u-s-senate-election-certification-challenge-doj/ (read by sweep ~17:45Z).
- **Historical poll error, Senate (individual polls in the final 21 days, weighted):** 2013–14 5.5 pp with D+2.5 bias; 2017–19 4.3 pp, "essentially no partisan bias" — FiveThirtyEight "The State Of The Polls, 2019" via https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019 (published 2019-11-05, read by sweep). 2022 final RCP averages: about 3.4 pp mean absolute error over 11 Senate races (computed by a fetch tool from Daily Kos tables, unverified) — https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do. Races where the poll leader lost: 2014 4; 2018 6; 2022 5 — https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/ (published 2026-10-14, read by sweep).

## Base rate
- Board question us-senate-democrats records "President's party loses at least 4 Senate seats in a midterm, 1946–2022": 0.45, n = 20 (data/watchlist.json; not in pipeline/reference-data).
- `final-poll-leader-wins` (pipeline/reference-classes.json): 0.833, n = 6, own record 3 yes / 4 no (per race, not per chamber).

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-01T18:13Z).
- No sign that the election moves. Alaska's ranked-choice tabulation (mid/late Nov), recounts and the DOJ Alaska suit can delay resolution (pending, not NO).

## Risks
- Six Democratic pickup leads lie between +1.9 and +3.2, all within one typical Senate polling error; a correlated miss toward Republicans (as in 2014) would sink several at once.
- Independents: an Osborn (NE) or Bodnar (MT) win counts with the Democrats only if they announce they will caucus with them.
- A Georgia runoff (Ossoff below 50%) would count as not Democratic here, unlike on the board question.
- DOJ litigation over Alaska certification; disputes over California-style ballot challenges elsewhere.

## Sources
- https://en.wikipedia.org/wiki/2026_United_States_Senate_elections
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Texas
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine
- https://en.wikipedia.org/wiki/2026_United_States_Senate_special_election_in_Ohio
- https://fiftyplusone.news/averages
- https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html
- https://alaskabeacon.com/?p=15667
- https://www.democracydocket.com/cases/alaska-u-s-senate-election-certification-challenge-doj/
- https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019
- https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do
- https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/
- https://political.org/2026/10/27/2026-midterms-when-polls-close-on-election-night-and-when-results-are-expected/

## Research step (1 Nov evening)
- Georgia ballot: Wikipedia (https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Georgia, read 1 Nov ~18:35Z) lists only Ossoff (D) and Collins (R) for the general election and cites the AJC article "Libertarians won't be on the ballot in Georgia". A runoff (1 Dec) is held only "if no candidate gets a majority". Averages as of 23 Sep: Ossoff 50.6 / Collins 42.8 (+7.8).
- Final polling aggregate vs result (Wikipedia race pages, read 1 Nov ~18:40Z; D-margin error, negative = Republican beat the polls):
  - TX 2024: avg Cruz +4.0 (538 +4.0, RCP +4.4, 270 +3.8, DDHQ +3.8); result Cruz +8.49 → −4.5. https://en.wikipedia.org/wiki/2024_United_States_Senate_election_in_Texas
  - OH 2024: avg Moreno +1.0; result +3.62 → −2.6. https://en.wikipedia.org/wiki/2024_United_States_Senate_election_in_Ohio
  - TX 2020: 270 Cornyn +5.2, RCP +6.5; result +9.6 → −3.1 to −4.4. https://en.wikipedia.org/wiki/2020_United_States_Senate_election_in_Texas
  - ME 2020: 270 Gideon +3.8 (RCP Sep +6.5); result Collins +8.6 → −12.4. https://en.wikipedia.org/wiki/2020_United_States_Senate_election_in_Maine
  - IA 2020: RCP Ernst +1.4, 270 +0.4; result +6.6 → −5.2 to −6.2. https://en.wikipedia.org/wiki/2020_United_States_Senate_election_in_Iowa
  - NC 2020: RCP Cunningham +2.6, 270 +2.8; result Tillis +1.75 → −4.4. https://en.wikipedia.org/wiki/2020_United_States_Senate_election_in_North_Carolina
  - NC 2022: avg Budd +5.1 (RCP +6.0, 538 +4.3, 270 +5.0); result +3.2 → +1.9 (Democrats beat the polls). https://en.wikipedia.org/wiki/2022_United_States_Senate_election_in_North_Carolina
  - TX 2018: no aggregate on the page; final polls Cruz +3 to +9 (Change Research tie); result +2.57, so O'Rourke beat the polls. FL 2018: final polls Nelson +7 to Scott +2; result Scott +0.12. https://en.wikipedia.org/wiki/2018_United_States_Senate_election_in_Texas , https://en.wikipedia.org/wiki/2018_United_States_Senate_election_in_Florida
- FL 2024: "Rick Scott (R) won reelection in Florida by a whopping 12.8%", outperforming the final 538 average by 7.8 (blog, Jul 2025). https://jasonbeets.blogspot.com/2025/07/grading-my-2024-senate-predictions.html
- Breitbart, 10 Nov 2022: Democrats "on average performed about three points better than pre-election RealClearPolitics polling averages". Gaps toward Democrats: NH 8.2, AZ 5.3, PA 3.8, NC 2.6, WI 2.6, GA 2.3, OH 1.4, NV 0.7. https://www.breitbart.com/midterm-election/2022/11/10/senate-poll-averages-overstated-republican-support
- The Federalist (J. H. Anderson), 28 Oct 2026: average Senate polling misses 2016–2024: Republicans better than expected in ME 4.3, IA 3.6, MI 2.5, NC 1.7, TX 1.0, OH 1.0; Democrats better in NH 3.4, MN 2.3, GA 0.3. https://thefederalist.com/2026/10/28/what-the-midterm-senate-polls-wont-tell-you-and-where-they-might-be-wrong/
- Newsweek, 1 Oct 2026 (presidential, 270toWin): IA 2024 Trump +4.7 avg vs +13; OH +7.7 vs just over +11; TX +7.4 vs nearly +14. https://www.newsweek.com/democrat-optimism-in-six-senate-races-may-be-a-mirage-what-the-polls-reveal-12512862
- "The State of the Polls, 2019" (repost): Senate polling bias "is not very consistent from cycle to cycle"; average error 5.3 pts, average bias D+0.1 across all years since 1998; 2017–19 error 4.3. https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019

## Morning red team (2 Nov, 05:15–05:25 CET)
- Georgia's two-name ballot makes a runoff very unlikely; the runoff discount in some evening reasons was stale. Pending clause tightened to match the House claim.
