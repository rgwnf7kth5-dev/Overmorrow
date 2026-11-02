# us-senate-call-1
- **Claim:** AP declares by 23:59 ET on 4 November 2026 that one party has won control of the US Senate.
- **Criterion:** YES if, between 18:00 ET on 3 Nov and 23:59 ET on 4 Nov 2026, the Associated Press declares that the Democratic or the Republican Party has won control of the Senate after the elections of 3 Nov 2026, or, if AP publishes no explicit declaration, if AP race calls made in that time, added to the senators not up for election, give Republicans at least 50 seats or Democrats with independents who caucus with them at least 51. A newly elected independent counts with the Democrats only if he or she has said publicly that he or she will caucus with them. AP's dated report decides; a call made in the window counts even if it is read later. Calls by other outlets do not count. NO if neither happens in the window, including if the election is not held.
- **Deadline:** 2026-11-04T23:59:00-05:00 (05:59 CET on 5 Nov).
- **Written at:** 2026-11-02T18:40Z. Pages opened this evening were read between 18:15Z and 18:30Z on 2 Nov through the fetch tool, which returns excerpts; facts reused from data/dossiers/2026-11-04/ keep their original read time.

## Schedule
- Last polls close 01:00 ET on 4 Nov (Aleutians). Senate polls in the states that decide close from 19:00 to 21:00 ET — https://uspollingdata.com/news/2026-election-night-guide/ (read 2026-11-02T18:24Z; weak source, see below).
- AP declares a chamber at 51 seats, or 50 with the Vice President — Newsquawk https://www.newsquawk.com/daily/us-midterms (30 Oct, via work/agenda-world.json, not re-read). Vance is the tiebreaker: "A 50-50 split gives Vice President JD Vance the tiebreaker" — Yahoo https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html (published 2026-10-31 21:35Z, read by sweep 2026-11-01).

## Facts
- **2022 precedent:** AP determined Democrats kept the Senate on Sat 12 Nov 2022, four days after the vote, on calling Nevada; Arizona had been called the day before — AP via ClickOrlando https://www.clickorlando.com/news/politics/2022/11/17/why-ap-has-called-control-of-the-us-house-for-republicans/ (published 2022-11-16, read 2026-11-02T18:20Z) "Last Saturday". 
- **2018 and 2024:** the hour of AP's Senate call could not be sourced in this run. The Wikipedia mirror says Arizona and Montana changed the picture in later counting, but Republicans kept control — https://wiki.riteme.site/wiki/2018_blue_wave (read 2026-11-02T18:20Z).
- **Arithmetic:** R 53, D 45, 2 independents with the Democrats; Democrats need net +4. 35 seats up; holdovers R 31, D+I 34. Republicans reach 50 with 19 of the 35 races, Democrats 51 with 17 — https://en.wikipedia.org/wiki/2026_United_States_Senate_elections (raw wikitext read 2026-11-01T18:05Z) "seats_needed2 = {{increase}} 4"; own arithmetic.
- **Close Democratic pickup targets (averages, leader's lead in pp, updated 20–31 Oct, us-senate-dem-1):** NC Cooper +10.1; KS Hamilton +3.2; ME Jackson +3.1; TX Talarico +2.8; OH Brown +2.6; AK Peltola +1.9; IA Hinson (R) +0.2; SC Graham (R) +1.4; NE Ricketts (R) +1.8. Democratic holds: MI El-Sayed +4.5, MN +6.4, NH +7.0, GA Ossoff +8.5 — Wikipedia race articles, cross-check https://fiftyplusone.news/averages (read by sweep 2026-11-01 ~17:35Z).
- **What this means for a call:** the fourth Democratic pickup is the tipping seat (TX, OH or AK on those averages). Control is known on the night only if the tipping seat is decided without Alaska, or if the outcome does not need Alaska.
- **Alaska:** ranked-choice state; mail ballots can arrive up to 10 days after the vote (Newsquawk 30 Oct, via work/agenda-world.json). In 2024 close ranked-choice results there were not known until 20 Nov — Alaska Beacon https://alaskabeacon.com/?p=15667 (published Nov 2024, read 2026-11-01T18:08Z) "won't become apparent until Nov. 20." Last polls close at 01:00 ET. DOJ suit over Senate ballots: United States v. State of Alaska, 3:26-cv-00376-SLG, no ruling seen on 1 Nov — https://www.democracydocket.com/cases/alaska-u-s-senate-election-certification-challenge-doj/ (read by sweep 2026-11-01 ~17:45Z). DOJ asked for a ruling by Monday 2 Nov on segregating ballots ranking Daniel J. Sullivan — CBS https://www.cbsnews.com/live-updates/2026-midterm-elections-campaigns-weekend-before/ (via data/planning/agenda.json, not re-read).
- **Maine:** ranked-choice applies, but the ballot lists only Collins and Jackson, so a tabulation round is needed only if write-ins keep both below 50% — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine (read 2026-11-01T18:05Z). June primary tabulation took ten days — https://www.maine.gov/sos/news/maine-secretary-states-office-announces-ranked-choice-tabulations (published 2026-06-19, per us-me-jackson-1).
- **Georgia:** runoff on 1 Dec only if nobody has a majority; the general-election ballot has only Ossoff and Collins — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Georgia (read 2026-11-01 ~18:35Z) "if no candidate gets a majority". Results "often not called until 10 PM or later due to Fulton County mail ballots" — uspollingdata, above. That page also says Senate control "could be known by midnight"; it is dated April 2026 and has internal inconsistencies.
- **Independents:** Dan Osborn (NE) and Seth Bodnar (MT) run as independents — us-senate-dem-1. A win would leave their caucus choice open unless stated.
- **Michigan:** on 1 Nov Haley Stevens endorsed Republican Mike Rogers against Abdul El-Sayed (work/running.json).

## Base rate
- No class covers the timing of an AP chamber call. Sourced record here: 2022, no (four days); n = 1, no rate given.

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-02T18:27Z). No sign that the vote moves. A late call is not a slip.

## Risks
- If Alaska is the tipping seat, no call is possible in the window.
- Several races within 3 pp mean more uncalled seats on the night; a Republican call needs them to reach 19 of the 35 races, a Democratic call needs 17 plus the caucus condition.
- An independent winner in NE or MT with no stated caucus choice can hold up the Democratic count.
- Recount-range margins in any tipping state.
- A call just after 23:59 ET resolves NO; AP's time stamp decides.

## Sources
- https://www.clickorlando.com/news/politics/2022/11/17/why-ap-has-called-control-of-the-us-house-for-republicans/
- https://wiki.riteme.site/wiki/2018_blue_wave
- https://uspollingdata.com/news/2026-election-night-guide/
- https://en.wikipedia.org/wiki/2026_United_States_Senate_elections
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Maine
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Georgia
- https://fiftyplusone.news/averages
- https://alaskabeacon.com/?p=15667
- https://www.democracydocket.com/cases/alaska-u-s-senate-election-certification-challenge-doj/
- https://www.maine.gov/sos/news/maine-secretary-states-office-announces-ranked-choice-tabulations
- https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html
- https://www.newsquawk.com/daily/us-midterms (via agenda)
- https://www.cbsnews.com/live-updates/2026-midterm-elections-campaigns-weekend-before/ (via agenda)
