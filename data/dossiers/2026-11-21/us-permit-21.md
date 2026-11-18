# us-permit-21
- **Claim:** The US Senate passes H.R.2347 (permitting reform, Bipartisan American Affordability and Jobs Act) between 05:00 CET on 19 Nov and 23:59 ET on 20 Nov 2026.
- **Criterion:** YES if, between 2026-11-18T23:00 ET (= 05:00 CET 19 Nov) and 2026-11-20T23:59 ET, the Senate agrees to passage of H.R.2347 (Cal. #453), with or without amendments (e.g. as amended by the Capito substitute #6883), by roll call or voice vote, as shown on senate.gov roll-call votes, the Senate Daily Press, the Senate Democrats floor wrap-up or Congress.gov. NO if the passage vote fails, if passage has not happened by 23:59 ET on 20 Nov, or if passage took place before 23:00 ET on 18 Nov (then the editor should drop the claim before freezing). House action is irrelevant. Late publication does not change the outcome.
- **Event window:** 2026-11-19T05:00+01:00 – 2026-11-20T23:59-05:00 (America/New_York)
- **Evidence expected:** Senate Daily Press in real time; senate.gov roll call and Senate Democrats wrap-up the same evening; evidence_at 2026-11-21T06:00+01:00
- **Resolves by:** 2026-11-22T05:00+01:00
- **Written at:** 2026-11-18T18:05Z (13:05 ET, while the 18 Nov votes were still under way)

## Schedule
- Wed 18 Nov plan: "At approximately 11:45am, if no further agreement is reached, all post-cloture time will be considered expired on Capito substitute amendment #6883 ... Then, the Senate is expected to vote adoption of Capito substitute amendment #6883. Following that vote, the Senate is expected to vote on the motion to invoke cloture on Cal. #453 H.R.2347 ... as amended, if amended." Up to 3 roll calls from ~11:30 — https://www.democrats.senate.gov/2026/11/17/schedule-for-wednesday-november-18-2026 (published 2026-11-17, read 2026-11-18T17:53Z).
- What happened by 13:00 ET: Merkley raised a budget point of order (11:36); motion to waive agreed 70–26 (12:41; not voting Cotton, Klobuchar, Murphy, Schiff; no = 24 Democrats + Paul (R) + Sanders (I)); "12:42 p.m. The Senate began voting on the Capito substitute amendment #6883." — https://www.dailypress.senate.gov/wednesday-november-18-2026/ (modified 2026-11-18T17:45Z, read 2026-11-18T17:58Z). Substitute adoption result and the bill-cloture vote (needs 60) were not yet posted at writing; senate.gov vote list still ended at roll call 265 (17 Nov) — https://www.senate.gov/legislative/votes_new.htm (read 2026-11-18T18:03Z).
- Earlier: cloture on the substitute 70–27 (16 Nov, roll call 264) — https://www.senate.gov/legislative/votes_new.htm (read 2026-11-18T17:53Z) "Nov 16 264 (70-27) Agreed to On the Cloture Motion S.Amdt. 6883 H.R. 2347".
- Pending amendment tree (17 Nov wrap-up): Thune for Capito substitute #6883; #6884 to #6883; #6885 to #6884; #6886 to the bill; #6887 to #6886 — https://www.democrats.senate.gov/2026/11/17/wrap-up-for-tuesday-november-17-2026 (read 2026-11-18T17:53Z). No time agreement for final passage posted.
- Timing logic (derived, not announced): if bill cloture is invoked early Wed afternoon (~13:30 ET), Rule XXII allows up to 30 hours of post-cloture consideration, which would expire around 19:30 ET Thu 19 Nov; passage would follow then (inside the window). By consent the time can be yielded back, which could bring passage forward to Wed evening (before 23:00 ET = outside the window) or keep it Thursday; extra amendment votes (Schiff on Title III, Shaheen, Hawley) could push into Friday. The Iran war-powers resolution (H.Con.Res.93, 6 hours of debate, UC deadline Fri 20 Nov) and four district-judge cloture motions also compete for floor time.
- Recess: "Nov 23 - Nov 27 State Work Period Thanksgiving" — https://www.senate.gov/legislative/2026_schedule.htm (read 2026-11-17T17:55Z, us-permit-20).

## Facts
- 18 Nov waiver vote 70–26 mirrors the 16 Nov cloture margin (70–27): the bipartisan coalition holds on procedure — Daily Press above.
- Coalition on 16 Nov: 49 R + 20 D + King yes; Hawley (R) and Cortez Masto (D) switched yes → no — https://bommaritollc.com/insights/baaja-senate-vote-november-2026/ (modified 2026-11-17, read 2026-11-18T17:59Z).
- Cortez Masto, 9 Nov: "If Title III stays in this bill, I will not vote for final passage." — same source. Nearly 30 Democrats co-sponsor Schiff's amendment to strike the historic-preservation title — https://heatmap.news/politics/house-baaja (published 2026-11-10T20:21Z, read 2026-11-18T18:02Z) "nearly 30 Democrats have signed onto an amendment proposed by California Senator Adam Schiff".
- Merkley (likely incoming EPW chair) wants the bill left to the next Congress — Heatmap, same page.
- Passage needs a simple majority; bill cloture needs 60.
- Previous edition's claim us-permit-20 (passage by 23:59 ET Thu 19 Nov) — data/dossiers/2026-11-20/us-permit-20.md.

## Base rate
- No counted series. Once bill cloture is invoked with a 10-vote cushion, passage rarely fails; the open part is timing (Wed night / Thu / Fri / after recess). base_rate: null.

## Schedule slip
- slip_class: other-scheduled. `node scripts/refdata/slip.mjs other-scheduled` → prior 0.07, own 7/93, rate 0.075 [estimate]. The passage date is derived from Rule XXII clocks, not announced; the window here (Thu–Fri) covers the most likely dates but not a Wednesday-night finish.

## Risks
- Bill cloture fails on 18 Nov (would need 11 of the 70 to switch) → no passage this week.
- Time yielded back and passage late Wed 18 Nov before 23:00 ET → NO (claim should be dropped by the editor).
- Amendment fights (Title III) or an objection to a time agreement push passage past Friday or after recess.
- Late Friday-night vote after 23:59 ET.

## Sources
- https://www.democrats.senate.gov/2026/11/17/schedule-for-wednesday-november-18-2026
- https://www.democrats.senate.gov/2026/11/17/wrap-up-for-tuesday-november-17-2026
- https://www.democrats.senate.gov/floor
- https://www.dailypress.senate.gov/wednesday-november-18-2026/
- https://www.senate.gov/legislative/votes_new.htm
- https://bommaritollc.com/insights/baaja-senate-vote-november-2026/
- https://heatmap.news/politics/house-baaja
- Refused (403): insideclimatenews.org
