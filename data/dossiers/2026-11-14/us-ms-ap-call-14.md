# us-ms-ap-call-14
- **Claim:** By 23:59 Central time on Friday 13 November 2026, the Associated Press has declared Democrat Scott Colom the winner of the US Senate election in Mississippi.
- **Criterion:** YES if the Associated Press (apnews.com race call or AP story, or an outlet quoting AP's call) declares Scott Colom the winner of the 3 Nov 2026 US Senate race in Mississippi at any time from now until 23:59 CST (UTC-6) on 13 Nov 2026. NO if by then AP has not called the race, or has called it for Cindy Hyde-Smith.
- **Event window:** 2026-11-11T12:00-06:00 to 2026-11-13T23:59-06:00 (America/Chicago)
- **Written at:** 2026-11-11T18:05Z
- Secondary claim in this story: us-ms-concede-14 (Hyde-Smith concedes by the same deadline); facts below serve both.

## Schedule
- Counties must submit certified results to the secretary of state within 10 days of the election, i.e. by 13 Nov 2026; the state must certify by 3 Dec 2026; Mississippi has no recount mechanism — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Mississippi (modified 2026-11-11T17:28Z, read 2026-11-11T17:54Z) "Counties must submit their certified results within 10 days of the date of the election ... After submission (by November 13, 2026), the state must certify this election by December 3, 2026."
- TNND/CBS Austin: "Qualifying absentee ballots can arrive through Tuesday, Nov. 10. Voters who cast affidavit ballots because of an ID issue have until then to provide identification. Counties must certify results by Nov. 13." — https://cbsaustin.com/news/nation-world/a-historic-first-hangs-on-mississippis-razor-close-senate-count (published 2026-11-08T18:37Z, read 2026-11-11T17:54Z)
- An AP race call is not scheduled; AP calls when it judges the trailing candidate has no path (see Facts).

## Facts
- Count as of 11 Nov 12:28 EST (98% counted, sourced to AP/NYT): Colom 470,309 (49.11%), Hyde-Smith 467,133 (48.79%); lead 3,176 — https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Mississippi (read 2026-11-11T17:54Z) "Votes counted 98% as of November 11, 12:28 PM EST ... 470,309 467,133"; infobox "Elected U.S. senator TBD".
- MFP liveblog 11 Nov: AP has not called the race; Colom lead 2,990 after Madison County affidavits; Hinds County results expected "sometime tomorrow" — https://www.mississippifreepress.org/liveblog-mississippis-2026-u-s-senate-election-results/ (modified 2026-11-11T17:40Z, read 2026-11-11T17:54Z) "AP has still yet to call the race for Colom, with some major counties like Hinds expected to release their results sometime tomorrow."
- Hinds County (largest, majority-Black, heavily Democratic) accepted 817 affidavit ballots and rejected 1,609; affidavit scanning began just after 11 a.m. on Wed 11 Nov; Hinds in-person absentee: Colom 5,999, Hyde-Smith 1,386, Pinkins 99 — same liveblog "Hinds County Accepts 817 Affidavit Ballots, Rejects 1,609".
- Affidavit ballots have broken toward Colom in other counties: Madison County 546–423 (55.5% to 43%); Rankin County (Hyde-Smith ~61% overall) affidavits 476–472 — same liveblog.
- Lead history (AP figures): 1,882 (5 Nov, MFP), 2,010 (6 Nov 11:36), 2,493 and 2,574 (6 Nov evening), 2,574 (8 Nov morning), 2,990 (11 Nov, MFP), 3,176 (11 Nov 12:28 EST, Wikipedia) — https://www.mississippifreepress.org/colom-lawyers-warn-election-officials-following-nrsc-demands-will-violate-voters-rights/ (published 2026-11-06T00:28Z) "Colom leads ... by 1,882 votes"; https://www.mississippifreepress.org/rolling-cov-entry/scott-coloms-lead-surpasses-2000-votes-in-mississippis-u-s-senate-race/ (published 2026-11-06T17:45Z) "by 2,010 votes ... AP reported in an update at 11:36 a.m."; https://www.democracydocket.com/news-alerts/live-mississippi-senate-ballot-fight-heats-up/ (modified 2026-11-10T16:35Z) "Colom's lead widens to 2,574 votes".
- AP method: calls only when the trailing candidate has no path; AP's outstanding-vote estimate was ~44,000 on 6 Nov morning, ~30,000 at 4:45 p.m. ET 6 Nov; Mississippi has no central reporting system and few counties post results — https://www.mississippifreepress.org/why-its-still-too-early-to-call-the-us-senate-race-in-mississippi/ (AP copy, published 2026-11-06T23:44Z, modified 2026-11-10T02:08Z, read 2026-11-11T17:54Z) "To call a race, The Associated Press relies on its estimate of how many votes remain to be counted".
- Hyde-Smith on 10 Nov said she still expected to win: "Mississippi, like I said, we've got a lot of votes still out" — MFP liveblog (above).
- Legal fight: Hyde-Smith's lawyers/NRSC demanded counties segregate and preserve affidavit ballots; Colom's lawyers (Elias Law Group) called it unlawful — https://www.mississippifreepress.org/colom-lawyers-warn-election-officials-following-nrsc-demands-will-violate-voters-rights/ (published 2026-11-06T00:28Z) "demanding that you take unlawful and extraordinary measures in handling affidavit ballots".
- Mail-ballot curing rule was eliminated in August; "no steps for curing a mail-in" — Democracy Docket liveblog (above).
- Senate control does not depend on this race: AP 4 Nov, Democrats hold "at least 54 of 100 seats" — https://www.mississippifreepress.org/democrats-usher-in-a-new-era-with-their-resounding-sweep-of-the-house-and-senate/ (published 2026-11-04T17:14Z, read 2026-11-11T17:54Z) "the Senate Democrats holding at least 54 of 100 seats".
- Earlier editions: our 7 Nov claim (AP call for Colom by 6 Nov) and 9 Nov margin claim — data/planning/2026-11-07.json, 2026-11-09.json (case us-midterms-2026).

## Base rate
- No reference class in pipeline/reference-data/ for AP call timing. Not computed.

## Schedule slip
- Slip class: other-scheduled (county certification deadline 13 Nov). `node scripts/refdata/slip.mjs other-scheduled`: "other-scheduled 0.07 5/69 0.072 [estimate]".
- The AP call itself is unscheduled; counties may miss the 13 Nov deadline; litigation over affidavit ballots could delay certification.

## Risks
- AP may wait for county certifications or for litigation to clear even with a ~3,000 lead (AP has no central state feed in Mississippi).
- AP may already have called on 11–12 Nov before the freeze (claim then resolves YES trivially; editor should check at the freeze).
- Hyde-Smith camp legal challenges (affidavit segregation demands) could keep AP from calling.

## Sources
- https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Mississippi
- https://www.mississippifreepress.org/liveblog-mississippis-2026-u-s-senate-election-results/
- https://www.mississippifreepress.org/why-its-still-too-early-to-call-the-us-senate-race-in-mississippi/
- https://www.mississippifreepress.org/rolling-cov-entry/scott-coloms-lead-surpasses-2000-votes-in-mississippis-u-s-senate-race/
- https://www.mississippifreepress.org/colom-lawyers-warn-election-officials-following-nrsc-demands-will-violate-voters-rights/
- https://www.mississippifreepress.org/democrats-usher-in-a-new-era-with-their-resounding-sweep-of-the-house-and-senate/
- https://www.democracydocket.com/news-alerts/live-mississippi-senate-ballot-fight-heats-up/
- https://cbsaustin.com/news/nation-world/a-historic-first-hangs-on-mississippis-razor-close-senate-count
- Unreachable: https://mississippitoday.org/2026/11/09/hinds-county-mississippi-senate-colom-hyde-smith (HTTP 403, exit 2).

## Research step (11 Nov 2026 evening)
- Hinds County aimed to finish counting and certify on Wed 11 Nov: Circuit Clerk Zack Wallace said the Resolution Board was scanning affidavit ballots, then "upload them ... to the SEMS system ... and hopefully try to certify today"; "All Mississippi counties have until Friday to certify their results" — MFP liveblog https://www.mississippifreepress.org/liveblog-mississippis-2026-u-s-senate-election-results/ (modified 2026-11-11T17:56Z, read 2026-11-11T18:13Z) "hopefully try to certify today," Wallace said.
- Hinds absentee scanning ended just before 11 a.m. 11 Nov; Colom +61 additional absentee votes that morning vs Hyde-Smith +3 — same liveblog "Colom won an additional 61 absentee votes this morning".
- Hinds received 64 mail-in absentee and over 8,000 in-person absentee ballots (in-person already counted) — same liveblog "Hinds County received 64 mail-in absentee ballots and over 8,000 in-person absentee ballots".
- AP's stated reason for not calling (unchanged AP explainer, 6 Nov): AP calls only when its outstanding-vote estimate leaves the trailing candidate no path; Mississippi has no central reporting system — https://www.wftv.com/news/politics/why-its-still-too/72WE6OP7BE4JZEKDLJMNXZ7JMU/ (published 2026-11-06T22:06Z, read 2026-11-11T18:15Z) "there is no central vote reporting system for the state of Mississippi". No newer AP statement on when it could call was found.
- No concession or change in Hyde-Smith's stance found since 10 Nov (applies to us-ms-concede-14).
