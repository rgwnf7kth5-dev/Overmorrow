# us-oh-brown-1
- **Claim:** Sherrod Brown (D) wins the Ohio US Senate special election of 3 November 2026.
- **Criterion:** YES if Sherrod Brown is the winner of the 3 Nov 2026 Ohio US Senate special election (the seat Jon Husted holds by appointment) according to the AP race call or, if AP has not called the race when the resolver reads the evidence, the result certified by the Ohio Secretary of State. NO if AP calls (or the certified result shows) another candidate as winner, or if the election is not held on 3 Nov 2026. A race that is uncalled or in a recount when the resolver reads the evidence stays pending.
- **Event window:** 2026-11-03T00:00:00-05:00 to 2026-11-03T23:59:00-05:00 (America/New_York). Polls close 7:30 pm ET = 01:30 CET Wed 4 Nov.
- **Written at:** 2026-11-01T18:16:00Z. Read times between 17:30Z and 18:15Z on 1 Nov. "Sweep" marks facts read by tonight's sweep agent.

## Schedule
- Special election on 3 Nov 2026 for the remaining two years of JD Vance's term (Vance resigned 10 Jan 2025 to become Vice President) — https://en.wikipedia.org/wiki/2026_United_States_Senate_elections (read 2026-11-01T18:05Z) "Special U.S. Senate elections in Florida and Ohio are scheduled for November 3, 2026."
- Candidates on the results template: Jon Husted (R, incumbent), Sherrod Brown (D), Bill Redpath, Greg Levy — https://en.wikipedia.org/wiki/2026_United_States_Senate_special_election_in_Ohio (raw wikitext read 18:05Z).

## Facts
- **Aggregate average:** Brown 48.2, Husted 45.6, **Brown +2.6** (other/undecided 6.2) — Wikipedia Ohio article (above, read 18:05Z), "colspan="3"|'''Average''' |45.6% | '''48.2%''' |6.2% | '''Brown +2.6%'''". Rows (all updated 31 Oct): 270toWin Oct 22–31 Brown +2.0; DDHQ through 31 Oct +2.4; FiftyPlusOne through 31 Oct +2.9; RCP Oct 5–26 +2.6; Silver Bulletin through 26 Oct +3.0.
- **RCP polls (7 in the average, Oct 5–26):** Suffolk 21–26 Oct Brown +3; InsiderAdvantage 21–22 Oct Brown +3; Fox News 15–19 Oct Brown +5; Marist 15–18 Oct Brown +4; Rasmussen 12–14 Oct Husted +2; Cook Political Report 9–13 Oct Brown +6; co/efficient 5–6 Oct Husted +1 — https://www.realclearpolling.com/polls/senate/special-election/2026/ohio/husted-vs-brown (read 2026-11-01T18:06Z) "RCP Average (Oct 5–26): Brown 47.9%, Husted 45.3%, spread Brown+2.6". Five of seven show Brown ahead.
- **Poll volume:** about 18 raw polls dated October in the Wikipedia general-election table (sweep's approximate count).
- **Same ballot:** governor race Acton (D) +2.9 over Ramaswamy (R) (48.3–45.4, updated 31 Oct) — https://en.wikipedia.org/wiki/2026_Ohio_gubernatorial_election via sweep.
- **Context:** Brown lost his Senate seat in 2024; Husted was appointed to Vance's seat in January 2025 (Wikipedia Senate overview, above: "The appointed incumbents in these races…").
- **Early vote:** Ohio early votes equal 0.379 of total 2022 turnout — UF Election Lab https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv (Last-Modified 2026-11-01 17:33:55 GMT; ratio computed by sweep).
- **Historical poll error:** competitive midterm Senate races' final averages have missed the margin by roughly 3–5 pp (2013–14 individual Senate polls 5.5 pp with D+2.5 bias; 2017–19 4.3 pp; 2022 final RCP averages about 3.4 pp, unverified computation) — https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019; https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do (both via sweep). Ohio 2022 final RCP miss: 1.6 pp (same unverified computation).
- **AP practice:** AP declares a winner only when "there is no scenario that would allow the trailing candidates to close the gap" — https://www.clickorlando.com/news/politics/2022/11/13/control-of-congress-why-the-ap-hasnt-called-the-house/ (2022, via sweep).

## Base rate
- `final-poll-leader-wins` (pipeline/reference-classes.json): 0.833, n = 6, own record 3 yes / 4 no. Leader of the final average lost in 4 (2014), 6 (2018) and 5 (2022) midterm Senate and governor races — https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/ (via sweep).

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-01T18:13Z). No sign of postponement.

## Risks
- Lead of 2.6 pp is within one typical error; 2014-style pro-Democratic poll bias would erase it. Two of RCP's seven October polls show Husted ahead.
- Ohio has a recount threshold for very close margins (automatic recount rules not checked); a close race could stay uncalled past the resolver's date (pending).
- Third-party candidates (Redpath, Levy) take a small share; undecided 6.2%.

## Sources
- https://en.wikipedia.org/wiki/2026_United_States_Senate_special_election_in_Ohio
- https://en.wikipedia.org/wiki/2026_United_States_Senate_elections
- https://www.realclearpolling.com/polls/senate/special-election/2026/ohio/husted-vs-brown
- https://en.wikipedia.org/wiki/2026_Ohio_gubernatorial_election (via sweep)
- https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv
- https://www.goodreads.com/author_blog_posts/19102010-the-state-of-the-polls-2019
- https://www.dailykos.com/stories/2022/12/26/2142529/-Polls-and-Pundits-on-the-Midterms-How-did-they-do
- https://www.davemanuel.com/2026/10/14/the-biggest-polling-misses-in-midterm-election-history/
- https://www.clickorlando.com/news/politics/2022/11/13/control-of-congress-why-the-ap-hasnt-called-the-house/
