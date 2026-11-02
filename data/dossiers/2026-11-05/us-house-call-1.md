# us-house-call-1
- **Claim:** AP declares by 23:59 ET on 4 November 2026 that one party has won control of the US House of Representatives (218 seats).
- **Criterion:** YES if, between 18:00 ET on 3 Nov and 23:59 ET on 4 Nov 2026, the Associated Press declares that the Democratic or the Republican Party has won a majority in the House in the elections of 3 Nov 2026, or, if AP publishes no explicit declaration, if AP race calls made in that time give one party at least 218 of the 435 seats. AP's dated report decides; a call made in the window counts even if it is read later. Calls by other outlets do not count. NO if neither happens in the window, including if the election is not held.
- **Deadline:** 2026-11-04T23:59:00-05:00 (05:59 CET on 5 Nov). US DST ended on 1 Nov.
- **Written at:** 2026-11-02T18:40Z. Pages opened this evening were read between 18:15Z and 18:30Z on 2 Nov through the fetch tool, which returns excerpts; facts reused from data/dossiers/2026-11-04/ keep their original read time.

## Schedule
- First polls close 18:00 ET on 3 Nov (parts of IN, KY); last at 01:00 ET on 4 Nov (Aleutians), so the window runs about 23 hours past the last closing — https://political.org/2026/10/27/2026-midterms-when-polls-close-on-election-night-and-when-results-are-expected/ (published 2026-10-27, read by sweep 2026-11-01 ~17:50Z; refused on re-read 2 Nov) "Most of Alaska at midnight; a final Aleutian Islands site at 1 a.m."
- AP is not bound to any time. It declares a chamber at 218 seats — Newsquawk https://www.newsquawk.com/daily/us-midterms (30 Oct, via work/agenda-world.json, read by sweep 2 Nov, not re-read) "AP calls a chamber only at 218 House / 51 Senate (50 with VP)" (agenda note wording).

## Facts
- **2022 precedent:** AP called the House on Wed 16 Nov 2022 at 18:32 ET, eight days after the vote — Roll Call https://rollcall.com/2022/11/16/republicans-secure-house-majority-but-it-will-be-a-narrow-one/ (published 2022-11-16, read 2026-11-02T18:24Z) Mike Garcia's win in California's 27th gave Republicans their 218th seat at "6:32 p.m."
- **How the 218th seat fell in 2022:** a California seat — AP via ClickOrlando https://www.clickorlando.com/news/politics/2022/11/17/why-ap-has-called-control-of-the-us-house-for-republicans/ (published 2022-11-16 19:20 ET, read 2026-11-02T18:20Z) "the requisite 218th seat for the majority."
- **AP's rule for a race:** it declares only when "there is no scenario that would allow the trailing candidates to close the gap" — AP via ClickOrlando https://www.clickorlando.com/news/politics/2022/11/13/control-of-congress-why-the-ap-hasnt-called-the-house/ (published 2022-11-13, read by sweep 2026-11-01).
- **2018 precedent, not established:** the pages opened do not give AP's 2018 call date or hour. A mirror of the Wikipedia article says "at the end of election night" Democratic gains "appeared modest", with later counting adding seats; final Democratic net gain 41, 235 seats — https://wiki.riteme.site/wiki/2018_blue_wave (undated mirror, read 2026-11-02T18:20Z). The desk should check the 2018 hour before citing it.
- **Margin that year and this:** RCP's final generic-ballot lead in 2018 was D+7.2 (D gained 41) — Yahoo News https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html (published 2026-10-31 21:35Z, read by sweep 2026-11-01). Cross-aggregator generic-ballot average on 30 Oct: D+8.6 — https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections (read 2026-11-01T18:05Z) "Democrats +8.6%". Own reasoning, not a sourced fact: the wider the national lead, the likelier the 218th seat comes from a faster-counting state.
- **Seats needed:** chamber before the vote R 218, D 214, 1 independent; Democrats need net +3 on their 2024 result; redistricting moved about 6 net seats toward Republicans on paper (own arithmetic in us-house-dem-1) — Wikipedia, above.
- **Slow California count:** "6–8 California House races may not be called for 10–14 days"; "House majority is frequently not confirmed until November 15–20" — https://uspollingdata.com/news/2026-election-night-guide/ (read 2026-11-02T18:24Z). Weak source: the page is dated April 2026 and has internal inconsistencies. Mail arrival window for California: postmarked by 3 Nov accepted through 10 Nov (work/agenda-world.json, item "US late count", sweep 2 Nov; the underlying page was not re-opened).
- **Other late counts:** AP did not call Alaska's House race in 2024 until 20 Nov; California has 3 competitive House districts (NPR 19 Oct, via work/agenda-world.json, not re-read).
- **California ballot dispute:** the administration asked the Supreme Court on 2 Nov to stop about 20,000 mail ballots being counted with the rest — AP (Lindsay Whitehurst) via https://www.click2houston.com/news/politics/2026/11/02/trump-administration-appeals-to-supreme-court-in-push-to-sideline-20000-california-mail-ballots/ (published 2026-11-02 10:29, updated 10:50, read 2026-11-02T18:25Z) "stop commingling suspected illegal ballots with legal ones". See us-scotus-ballots-1.
- **Early vote:** 53,688,976 early votes in 49 jurisdictions by 1 Nov against a final 2022 pre-election total of 45,920,446 — https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv (downloaded by sweep 2026-11-01 17:43Z).

## Base rate
- No class in pipeline/reference-classes.json or pipeline/reference-data covers the timing of an AP chamber call. Sourced record here: 2022, no (eight days). 2018, 2020 and 2024 could not be sourced in this run, so n = 1 and no rate is given.

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, run 2026-11-02T18:27Z). No sign that the vote moves. The call itself has no schedule; it can run late without any slip of the election.

## Risks
- A narrow chamber makes the 218th seat a slow-count seat in California or Washington, as in 2022.
- Even with a wide national lead, AP needs 218 individual calls; many safe seats are called fast but close ones in mail-heavy states are not.
- Redistricting makes the seat count less predictable from the national lead.
- A call shortly after 23:59 ET (about 06:00 CET on 5 Nov) resolves NO; the resolver needs AP's time stamp.
- AP may report a tally without a headline declaration; the fallback in the criterion (218 calls in the window) handles that.

## Sources
- https://rollcall.com/2022/11/16/republicans-secure-house-majority-but-it-will-be-a-narrow-one/
- https://www.clickorlando.com/news/politics/2022/11/17/why-ap-has-called-control-of-the-us-house-for-republicans/
- https://www.clickorlando.com/news/politics/2022/11/13/control-of-congress-why-the-ap-hasnt-called-the-house/
- https://wiki.riteme.site/wiki/2018_blue_wave
- https://uspollingdata.com/news/2026-election-night-guide/
- https://www.click2houston.com/news/politics/2026/11/02/trump-administration-appeals-to-supreme-court-in-push-to-sideline-20000-california-mail-ballots/
- https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections
- https://www.yahoo.com/news/politics/article/the-2026-midterms-are-next-week-which-party-has-a-better-chance-of-winning-heres-what-the-latest-polls-say-155319308.html
- https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv
- https://www.newsquawk.com/daily/us-midterms (via agenda)
- Refused: https://political.org/2026/10/27/2026-midterms-when-polls-close-on-election-night-and-when-results-are-expected/ (permission not answered, 2 Nov); https://www.columbian.com/news/2022/nov/09/why-ap-hasnt-called-control-of-congress-yet/ opened but has nothing on timing.
