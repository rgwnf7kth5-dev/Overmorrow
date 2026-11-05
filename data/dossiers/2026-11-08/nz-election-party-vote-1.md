# nz-election-party-vote-1

**Claim:** Labour gets the most party votes in the preliminary count of New Zealand's general election of 7 November 2026.
**Criterion:** YES if Labour has more party votes than any other party in the Electoral Commission's preliminary count of the general election of 7 November 2026. The last preliminary figures published on electionresults.govt.nz when the resolver reads them at about 05:00 Paris on 8 Nov (17:00 NZDT), normally 100% of voting places counted. If that site cannot be read, the same preliminary figures as reported by RNZ or 1News. The official result with special votes, due on 27 Nov, does not count. NO if another party has more votes or the two are level, or if the election is not held on 7 November.
**Deadline:** event window ends 2026-11-07T23:59+13:00; resolver reads about 2026-11-08T05:00+01:00.
**Written:** 2026-11-05T17:55:46Z

## Schedule
- Election day Sat 7 Nov 2026, voting places open 09:00–19:00 NZDT (UTC+13), i.e. 19:00 is 06:00 UTC, 07:00 Paris. Preliminary results released progressively from 19:00 on electionresults.govt.nz; official results declared 27 Nov (20 days later, not 14) — https://www.nzherald.co.nz/northern-advocate/news/election-2026-what-northland-voters-need-to-know-about-new-rules/XW27VSMM6VF3TM4JGAMVJC4PP4/ (published 2026-09-28T02:52Z, read 2026-11-05T17:52Z) "November 7 – Election day. Voting places open 9am to 7pm. Preliminary election results released progressively from 7pm on electionresults.govt.nz." / "November 27 – Official results declared."
- When the preliminary count is final: no 2026 target could be read (elections.nz and vote.nz pages return empty to the reader, electionresults.govt.nz refuses it with HTTP 403). In 2023 the Commission's target was 50% of voting places by 22:00 and 95% by 23:30 — https://thespinoff.co.nz/politics/13-10-2023/when-will-we-know-the-nz-election-result (published 2023-10-13T03:18Z, read 2026-11-05T17:49Z) "The Electoral Commission target is to post results from 50% of voting places by 10pm and 95% by 11.30pm." Same pattern gives 95% about 11:30 Paris on 7 Nov; the last booths would then report around local midnight, about 12:00 Paris (our inference, not a published time; evidence_at is set at 00:30 NZDT, 12:30 Paris). Advance ordinary votes are counted from Saturday morning and come first after 19:00 (same source).
- Preliminary count = advance ordinary + election-day ordinary votes only; no special votes — https://kaweah.freedombox.rocks/kiwix/content/wikipedia_en_all_maxi_2023-10/A/Results_of_the_2023_New_Zealand_general_election (Wikipedia mirror, Oct 2023, read 2026-11-05T17:49Z) "The preliminary count only includes advance ordinary and election day ordinary votes; it does not include any special votes".
- Rules: MMP, 120 seats (71 electorates, 49 list) plus any overhang; a party needs 5% of the party vote or one electorate — https://en.wikipedia.org/wiki/2026_New_Zealand_general_election (modified 2026-11-05T06:39Z, read 2026-11-05T17:47Z) "comprising 71 members elected from single-member electorates and 49 members elected from closed party lists".

## Poll average (all final polls)
Rule: latest poll of each pollster with fieldwork ending on or after 19 Oct 2026; equal weight per pollster. All from https://en.wikipedia.org/wiki/Opinion_polling_for_the_2026_New_Zealand_general_election (modified 2026-11-04T07:13Z, read 2026-11-05T17:47Z). Shares are of decided voters (undecided, non-voters and refusals excluded).

| Pollster | Field dates | n | NAT | LAB | GRN | ACT | NZF | TPM | OPP |
|---|---|---|---|---|---|---|---|---|---|
| Taxpayers' Union–Curia | 28 Oct–3 Nov | 1,000 | 28.9 | 28.4 | 14.4 | 10.5 | 9.8 | 1.1 | 5.8 |
| 1News–Verian (final) | 29 Oct–2 Nov | 1,006 | 29.5 | 28.8 | 16.4 | 10.0 | 8.4 | 0.4 | 6.2 |
| RNZ–Reid Research | 20–26 Oct | 1,000 | 24.8 | 30.6 | 14.5 | 10.1 | 9.9 | 1.9 | 7.2 |
| Roy Morgan | 28 Sep–25 Oct | 859 | 26.5 | 27.5 | 15.5 | 11.0 | 10.0 | 1.0 | 8.0 |
| The Post/Freshwater | 9–19 Oct | 1,458 | 27.6 | 28.7 | 14.3 | 9.0 | 11.8 | 2.0 | 5.4 |
| **Average of five** | | | **27.66** | **28.62** | **15.00** | **10.12** | **9.98** | **1.28** | **6.52** |

- National minus Labour: −0.96 on the average; +0.7 Verian, +0.5 Curia, −5.8 Reid, −1.0 Morgan, −1.1 Freshwater. The two polls in the final week both have National ahead; Reid is the outlier, and fieldwork for Reid and Verian's previous poll overlapped almost exactly (Verian 21–25 Oct: 28.9/27.3).
- Not included: Talbot Mills (latest public 1–11 Aug), Anacta (6–10 Oct: NAT 28, LAB 29, OPP 5.4). No poll with fieldwork after 3 Nov was found as of 5 Nov 17:50 UTC.
- Verian final, method — https://www.1news.co.nz/2026/11/03/final-poll-election-set-to-go-down-to-wire-as-nationals-partners-slip/ (published 2026-11-03T05:00Z, read 2026-11-05T17:49Z) "Between October 29 and November 2 2026, 1006 eligible voters were polled by mobile phone (500) and online using online panels (506)... Party vote results to one decimal place were: National 29.5%, Labour 28.8%, Greens 16.4%, ACT 10.0%, NZ First 8.4%, Opportunity 6.2% and Te Pāti Māori 0.4%."
- Reid against Verian — https://thespinoff.co.nz/politics/29-10-2026/rnz-reid-research-poll-national-below-disastrous-2020-result-as-opportunity-surges (published 2026-10-28T19:46Z, read 2026-11-05T17:48Z) "National has dismissed the result as \"out of step\" with other polls" / "Reid Research used online panels, while Verian split its interviews evenly between phone and online."
- Verian weekly run (NAT/LAB): 28/28 (8–12 Oct), 32/27 (15–19 Oct), 28.9/27.3 (21–25 Oct), 29.5/28.8 (29 Oct–2 Nov) (Wikipedia table above).

## Preliminary against official: 2023
| | NAT | LAB | GRN | ACT | NZF | TPM | OPP (TOP) |
|---|---|---|---|---|---|---|---|
| Preliminary 14 Oct 2023 | 38.99 | 26.85 | 10.78 | 9.00 | 6.46 | 2.60 | 2.07 |
| Official 3 Nov 2023 | 38.08 | 26.92 | 11.61 | 8.64 | 6.09 | 3.08 | 2.22 |
| Official minus preliminary | −0.91 | +0.07 | +0.83 | −0.36 | −0.37 | +0.48 | +0.15 |

- Preliminary figures: Wikipedia mirror above (a snapshot before the official count); official figures: https://en.wikipedia.org/wiki/2026_New_Zealand_general_election (read 2026-11-05T17:47Z). Confirmed roughly by the Herald — https://www.nzherald.co.nz/bay-of-plenty-times/news/when-will-we-know-the-final-election-2023-results-what-if-there-is-a-recount-what-does-overhang-mean/QRUJP2PL3RF3BNWYYYEEXDQPO4/ (published 2023-10-14T23:13Z, read 2026-11-05T17:50Z) "National in the lead with 39 per cent of the votes, with Labour on 26.9, Green on 10.8, Act on 9".
- Direction is regular — https://www.newstalkzb.co.nz/news/politics/what-are-special-votes-your-essential-guide-ahead-of-the-official-results (published 2023-11-02, read 2026-11-05T17:49Z) "In every election since 1999, the special votes have benefitted the more left-leaning parties."; "The election night results were preliminary as they only 80 per cent of the total votes cast."
- About 567,000 specials in 2023 — https://theconversation.com/special-votes-mean-national-and-act-will-likely-lose-their-majority-215994 (published 2023-10-30, read 2026-11-05T17:49Z) "the estimated 567,000 special votes not reported in the preliminary results".
- The shift could differ in 2026: same-day enrolment is gone, enrolment closed 13 days before polling day, so the pool of late enrollers among specials changes — Wikipedia, 2026 election, as above: "limits voter enrolment to 13 days before polling day". Reading poll averages as closer to the official than to the preliminary figures is our inference from the fact that polls sample all voters; it is not a measured rule.

## Seats and overhang
- Verian final, seats without a National overhang: right bloc 58; left 56 or 60; Opportunity 7 — 1News final poll article above: "That leaves the right bloc on 58 seats" / "The left bloc – of Labour, the Greens and Te Pāti Māori – would have 56 or 60 MPs" / "In this poll, National’s party vote entitled it to 36 seats. But if it wins more electorates than that, it keeps those extra seats" / "In the 121-seat scenario, where Te Pāti Māori falls to one seat, National would need around five or six extra seats to close off Labour’s route to power with Opportunity." / "If Te Pāti Māori holds four seats and Te Tai Tokerau MP Mariameno Kapa-Kingi keeps hers, Parliament grows to 125 MPs and 63 are needed to govern."
- Week before, 21–25 Oct Verian: right bloc 61 — https://www.1news.co.nz/2026/10/27/poll-coalition-has-path-to-power-but-labour-steady-amid-gangs-row/ (published 2026-10-27T05:01Z, read 2026-11-05T17:49Z) "the right coalition bloc has 61 seats".
- Reid 20–26 Oct: coalition 54; Labour 37, Greens 18, Opportunity 9 — Spinoff/RNZ article above: "The current coalition would win just 54 seats".
- National overhang: 1News, 6 Nov NZDT — https://www.1news.co.nz/2026/11/06/analysis-these-15-seats-could-decide-this-election/ (published 2026-11-05T17:00Z, read 2026-11-05T17:49Z) "on recent poll results, it looks almost certain the right bloc will create an overhang" / "Our most recent results show National having 36 MPs, that's a reduction of 8 on their current allocation." (National needs to lose 8 of its 44 electorates to avoid it.)
- Herald-Motu electorate model, 27 Oct, on a poll-of-polls National 28.6%: National 41 electorates, 34 list-basis seats, 7-seat overhang, 128-seat House, coalition 66, Labour-Greens-TPM 51 — https://thespinoff.co.nz/politics/28-10-2026/new-polling-shows-overhang-could-hand-the-coalition-a-second-term-and-other-news (published 2026-10-27T18:11Z, read 2026-11-05T17:49Z) "That would produce a seven-seat overhang, taking Parliament to 128 seats and giving the National-ACT-NZ First coalition 66 seats". The model's author calls it "very much a starting point". It was built before the final polls.
- Left overhang: TPM runs an electorate-only campaign, list of one name; Kapa-Kingi's Te Tai Tokerau Party also filed a list — https://thespinoff.co.nz/politics/29-10-2026/how-an-overhang-or-two-could-decide-the-election-in-one-simple-table (published 2026-10-28T20:22Z, read 2026-11-05T17:52Z) "TPM has a list with only one name on it"; 1News 15 seats article: "if she were to be elected it would create an extra seat overhang for the left." Te Tai Tokerau is a four-way race (Kapa-Kingi, TPM, Labour's Prime, Green Lyndon). TPM won 6 electorates in 2023.
- Vote splitting: ACT and NZ First approved ads telling right voters that a party vote for National is wasted — https://www.newstalkzb.co.nz/news/politics/election-2026-vote-splitting-divides-the-right-in-final-week-national-s-christopher-luxon-calls-out-disappointing-act-nz-first/ (published 2026-11-01, read 2026-11-05T17:50Z) "party voting for National was a wasted vote and they should instead vote for one of those two parties." This moves party votes from National to its partners, without changing the bloc total; it raises National's overhang.
- Precedent, seats on preliminary count: 2023 election-night House 121, official 122 with TPM gaining two electorates; National lost two seats — https://www.rnz.co.nz/news/politics/501624/special-votes-national-and-act-lose-majority-in-largest-ever-parliament (published 2023-11-03T15:49+13:00, read 2026-11-05T17:49Z) "the number of overhang seats only increases by a further one seat compared to election night" / "With National and ACT on 59, they will need Winston Peters' New Zealand First to reach the 62 needed".
- Opportunity: Luxon and Peters have ruled out working with it; leader Qiulae Wong says she will talk first to the party with most seats — 1News final poll article and Spinoff/RNZ above.

## Other context
- Advance voting: 913,762 votes 26 Oct–1 Nov, 28% above same period 2023 — https://www.thestar.com.my/news/world/2026/11/02/new-zealand-early-voting-surges-ahead-of-november-7-election (Reuters, published 2026-11-02T11:39+08:00, read 2026-11-05T17:49Z) "The count represents a 28% jump compared with the same period during the 2023 election". More than a million by 3 Nov (1News final poll article).
- National did better in advance votes than on the day in 2023 — https://www.1news.co.nz/2026/11/03/analysis-theres-a-pattern-when-turnout-is-high-but-no-guarantee-of-a-repeat/ (published 2026-11-02T17:00Z, read 2026-11-05T17:49Z) "National secured 40.88% of the advanced vote." Turnout 2023: 78.2%.
- Unemployment rose to 5.7%, published 4 Nov — https://www.1news.co.nz/2026/11/04/new-jobless-figures-unemployment-rate-rises-to-57/ (headline list read 2026-11-05T17:48Z; article not opened).
- eRoll failure in 2023; the Commission says it is fixed — https://www.1news.co.nz/2026/11/06/electoral-commission-confident-2023-eroll-outage-wont-reoccur/ (published 2026-11-05T17:00Z, read 2026-11-05T17:49Z).

## Base rate
Class final-poll-leader-wins: rate 0.833, n 6 (pipeline/reference-classes.json, from poll-error.json; our own record on it 3 yes, 4 no). No New Zealand election in that data. Here "leader" depends on the set: Labour on the five-poll average, National in the two final-week polls.

## Schedule slip
Class election-held: rate 0.005 (0 of 22 own record; prior 0.01), `node scripts/refdata/slip.mjs election-held`. No sign that the election will move. A delay to the preliminary count (booth problems, eRoll) would delay evidence, not the event.

## Risks
- Vote splitting moves right-leaning party votes from National to ACT and NZ First; the 1News final poll shows those two falling, not rising.
- Reid (Labour +5.8) may be right and Verian/Curia wrong: the pollsters disagree more than sampling explains.
- The preliminary shift may be smaller this year.
- Rounding: Labour and National may finish a few thousand votes apart; a level count resolves NO; the criterion uses votes, not rounded percentages.
- The pooled lead-error data holds no New Zealand election.

## Sources
Wikipedia: Opinion polling for the 2026 NZ general election; 2026 NZ general election. 1News: final poll 3 Nov; poll 27 Oct; poll 20 Oct; turnout analysis 3 Nov; 15 seats 6 Nov; eRoll 6 Nov. RNZ via The Spinoff 29 Oct. Spinoff: Bulletin 28 Oct; overhang table 29 Oct; When will we know 2023. Newstalk ZB: vote splitting 1 Nov; special votes 2023. NZ Herald: Northland rules 28 Sep; final results 2023. RNZ 3 Nov 2023. The Conversation 30 Oct 2023. Reuters via The Star 2 Nov. interest.co.nz 5 Nov (poll methods). Wikipedia mirror of 2023 results (Oct 2023).
Not readable by script: electionresults.govt.nz (HTTP 403), elections.nz and vote.nz (empty page).


## Research step, 5 Nov evening (after round one)
- Question: Was any poll published after 3 Nov?
- Finding: Yes. The Post/Freshwater Strategy final poll, fieldwork 'between October 29 and November 3': Labour 30.7 (up 2), National 26.4 (down 1.2), Greens 13, NZ First 12, Act 9.8, Opportunity 5.1 (down 0.3), TPM 2. Spinoff calls it 'the final public-facing poll of the campaign'. RNZ: on a 120-seat basis National, Act and NZ First 59 seats, Labour, Greens and TPM 55, Opportunity holding the balance. This replaces the Freshwater row in the dossiers' poll average (National minus Labour -1.1 becomes -4.3) and voids the dossier line that the final-week polls both have National ahead: Freshwater is a third final-week poll, with Labour ahead. Spinoff also dates Three new polls side by side and a New poll item to 04 Nov (published NZ time); not opened. The dossiers' note 'no poll with fieldwork after 3 Nov' still holds.
- Sources: https://thespinoff.co.nz/politics/06-11-2026/four-final-polls-and-the-tiny-margins-that-could-decide-the-result (published 2026-11-05T17:27:14Z, read 2026-11-05T18:26:21Z) ; https://www.rnz.co.nz/news/politics_election-2026/2368732/last-poll-before-election-puts-labour-slightly-ahead-of-national-with-opportunity-just-making-it-to-parliament (published 2026-11-06T07:24:13+13:00, read 2026-11-05T18:26:21Z) ; https://thespinoff.co.nz/politics/06-11-2026/election-eve-one-last-poll-and-one-last-debate (published 2026-11-05T18:19:21Z, read 2026-11-05T18:26:23Z)

- Average of five with the Freshwater row replaced by its final poll: NAT 27.32, LAB 29.02, NAT+ACT+NZF 47.72, LAB+GRN+OPP 50.22, OPP 6.46. Earlier average in the table above is superseded.

- Claim reworded on 5 Nov after round two, from National to Labour: see rewrite_note in the planning file.
