# us-midterms-early-vote-29
- **Claim:** By the end of Thursday 29 October 2026 (New York time), the University of Florida Election Lab's 2026 early-vote tracker shows at least 42 million pre-election votes (in-person early votes plus mail ballots returned) cast nationwide in the US midterm elections.
- **Criterion:** YES if the national "Total early votes" figure on the UF Election Lab 2026 early-voting tracker (https://election.lab.ufl.edu/early-vote/2026-early-voting/; the figure is the sum of `voted_all` in https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv) is 42,000,000 or more in the last update timestamped at or before 23:59:59 EDT on 29 Oct 2026 (the page's "Last updated" line, or the CSV's Last-Modified header). It may be read from the live page or CSV if no later update has been posted, from an archived copy, or from a major outlet quoting that update's figure. NO if that figure is below 42,000,000. Updates posted after 23:59:59 EDT on 29 Oct do not count, even if they add votes cast on or before 29 Oct. A late reading is not NO: the claim waits until the timestamped figure is found.
- **Event window:** 2026-10-28T00:00:00-04:00 to 2026-10-29T23:59:59-04:00 (America/New_York)
- **Written at:** 2026-10-27T18:55:00Z

## Schedule
- The tracker runs continuously; it is not a scheduled event. It updates once or more a day. Page read 2026-10-27T17:58Z: "Last updated: Oct 27, 2026 @ 11:08am Eastern Time" — https://election.lab.ufl.edu/early-vote/2026-early-voting/. The underlying US.csv had "Last-Modified: Tue, 27 Oct 2026 15:08:41 GMT" (same update) and was unchanged at re-reads at 18:10Z and 18:13Z.
- How the national figure is built: the page's script `2026-early-voting-national.js` sums `voted_all`, `inperson_all` and `accept_all` over all state rows in US.csv into "Total early votes", "In-person early votes" and "Mail ballots returned" (read 2026-10-27T18:00Z). The figures render only in a browser; a text fetch of the page shows "X". The CSV can be read directly.
- Election day is Tuesday 3 November 2026. Thursday 29 Oct is the fifth day before it.

## Facts
- National tracker figures as of the 27 Oct 11:08 ET update (own sum of US.csv, read 2026-10-27T18:00Z):
  - Total early votes: **32,963,548**
  - In-person: 16,708,599
  - Mail returned: 16,254,949
  - Mail requested: 59,811,974
  - Coverage: 49 jurisdictions; Alabama and New Hampshire are absent.
  - State `last_update` dates: 24 states 27 Oct, 21 states 26 Oct, Tennessee 25 Oct, and Illinois, Minnesota and Missouri 23 Oct. So part of the total lags by one to four days.
- Largest states in that update: TX 4,542,522; CA 3,421,226; FL 3,175,047; GA 1,954,867; NC 1,773,890; MI 1,392,217; VA 1,183,390; OH 1,083,535; CO 982,530; AZ 971,184 (US.csv).
- Earlier readings of the same tracker, quoted in the press:
  - "almost 21 million", up "about 2 million since the previous day" — NPR via KJZZ, https://www.kjzz.org/2026-10-23/millions-of-americans-have-already-cast-their-votes-for-the-midterms-data-shows (published 2026-10-23 01:42 MST, read 2026-10-27T18:08Z) "latest data this morning".
  - "more than 21 million" — Scripps, https://www.wptv.com/politics/america-votes/democrats-tout-momentum-as-early-voting-rises-ahead-of-midterms (published 2026-10-23T10:48-04:00, read 2026-10-27T18:08Z).
  - "over 28 million" — Newsweek, 26 Oct (cited in the 28 Oct dossier).
  - "more than 30 million" — WJLA, 26 Oct (cited in the 28 Oct dossier).
- Pace (own arithmetic from the readings above):
  - About 21m (morning of 23 Oct) to 32.96m (11:08 ET on 27 Oct) is +12.0m in about 4.1 days, or about 2.9m per day on average, including a weekend.
  - The single-day increment reported on 23 Oct was about 2m.
  - Reaching 42m by the last update on 29 Oct needs +9.0m over about 2.5 days of updates, or about 3.6m per day.
- 2022 comparison: the 2022 tracker's final national pre-election total was 45,920,446 (in-person 20,487,803; mail returned 25,432,643) — https://rstudio-pubs-static.s3.amazonaws.com/948837_03cab8303e36475c8aa640e21282676a.html (linked from https://rpubs.com/ElectProject/early_vote_2022; "Last updated: 11/24/2022", read 2026-10-27T18:12Z). The 2022 figure at the equivalent date (five days before election day) was not found. The CSV's `turn_2022` column sums to 109,979,856 for the 49 reporting jurisdictions.
- State comparisons with 2022 at the same point: Texas +50% (NPR, 23 Oct); AP figures quoted by WJLA on 26 Oct: Texas about +74%, Ohio +30%, Maine +39%, Iowa −6%, Michigan similar to 2022.
- How last edition handled it: dossier us-midterms-early-40m-28 (edition 2026-10-29) set a 40m threshold for the last tracker update at or before 23:59:59 EDT on 28 Oct, read from the page, an archive or a press quote. Its pace estimate was 3–4m per day from about 30m on 26 Oct. Tonight's tracker reading (32.96m on 27 Oct at 11:08 ET) is lower than that path implied. This claim keeps the same "last update by 23:59 EDT on the day" rule for consistency.

## Base rate
- No reference class in pipeline/reference-data/ fits. This is a threshold on a cumulative count, driven by daily increments rather than a base rate. Own count: none.

## Schedule slip
- Slip class: none. The tracker updates continuously, and there is no sign it will stop. The only timing risk is that the tracker posts no update on 29 Oct, or posts its 29 Oct update after midnight. Several updates per day were seen on 26 Oct (1:26pm, 3:13pm and 6:40pm ET).

## Risks
- Update timing: if the Lab's main 29 Oct update lands after 23:59 EDT, the figure that counts is the earlier, lower one.
- Batch uploads: big states (California, Illinois, Minnesota, Missouri, which are stale since 23 Oct) can add millions in one update, before or after the cutoff.
- The final-week pace is uncertain. In-person early voting typically peaks in the last week (several states, Texas among them, close early voting at the end of the week), but weekday counting lags.
- Source mismatch: other trackers (AP, NBC, TargetSmart) give different totals. Only the UF Election Lab figure counts.
- Reading: the page needs a browser; the CSV and its Last-Modified header are the fallback. The Wayback Machine was unreachable from our proxy tonight.
- The Lab may revise or de-duplicate figures.

## Sources
- https://election.lab.ufl.edu/early-vote/2026-early-voting/
- https://election.lab.ufl.edu/data-downloads/earlyvote/2026/US.csv
- https://election.lab.ufl.edu/wp-content/themes/electionlab2023/2026-early-voting-national.js
- https://election.lab.ufl.edu/wp-content/themes/electionlab2023/2026-early-voting.js
- https://rpubs.com/ElectProject/early_vote_2022
- https://rstudio-pubs-static.s3.amazonaws.com/948837_03cab8303e36475c8aa640e21282676a.html
- https://www.kjzz.org/2026-10-23/millions-of-americans-have-already-cast-their-votes-for-the-midterms-data-shows
- https://www.wptv.com/politics/america-votes/democrats-tout-momentum-as-early-voting-rises-ahead-of-midterms
- /home/claude/overmorrow/data/dossiers/2026-10-29/us-midterms-early-40m-28.md (Newsweek and WJLA readings of 26 Oct)
- Unreachable: https://web.archive.org/ (connection reset via proxy)
