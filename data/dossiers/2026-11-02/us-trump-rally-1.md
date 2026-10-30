# us-trump-rally-1
- **Claim:** Donald Trump speaks in person at a campaign rally for the midterm elections on Sunday 1 November 2026.
- **Criterion:** YES if on 1 Nov 2026 (local time at the venue, anywhere in the US) Donald Trump speaks in person at a public campaign rally or campaign event for candidates in the 3 Nov elections. Tele-rallies, phone-ins, video messages and social-media posts do not count. NO otherwise.
- **Event window:** 2026-11-01T00:00:00-04:00 to 2026-11-01T23:59:59-05:00 (America/New_York; venue local time governs)
- **Written at:** 2026-10-30T18:35Z

## Schedule
- **Sun 1 Nov, Salina, Kansas:** "It has been rescheduled Sunday, Nov. 1 at 2:00 in the afternoon at the Salina Regional Airport." (Kasey Windhorst, Salina Airport Authority) — Salina Post https://salinapost.com/posts/d44c1e25-a8a9-4c13-80eb-ea465da6be34 (published 2026-10-30 16:40 local, read 2026-10-30T18:00Z). For Sen. Roger Marshall. Originally Sat 31 Oct, 10:30 a.m., in a hangar at Salina Regional Airport — Newsweek https://www.newsweek.com/trump-cancels-kansas-rally-as-new-poll-shows-republican-trailing-democrat-12637635 (published 2026-10-29 17:59Z, read 2026-10-30T17:58Z).
- **Sun 1 Nov, Dubuque, Iowa:** original listing "Midterm Rally in Dubuque, Iowa featuring President Donald J. Trump", Sunday 1 Nov, Five Flags Event Center, 405 Main St; doors 11:30, program 13:30 CT, remarks 15:00 CT; "Paid for by Trump 47 Committee, Inc." — https://events.gop.com/events/midterm-rally-in-dubuque-iowa-president-donald-j-trump-djt47 (read 2026-10-30T17:59Z; page does not show it cancelled; signups closed). For Sen. Ashley Hinson — USA Today via Yahoo https://www.yahoo.com/news/politics/articles/trump-rallies-kansas-iowa-back-143808605.html (updated 2026-10-30 14:38Z, read 2026-10-30T18:00Z). Time/venue after reinstatement not confirmed: KCRG says Dubuque city and police "were not aware if the rally would still be held there" — https://www.kcrg.com/2026/10/30/trump-revives-iowa-rally-after-canceling-weekend-trip/ (published 2026-10-30 09:09 CDT, read 2026-10-30T17:59Z). The old Dubuque time (remarks 15:00 CT) clashes with Salina at 14:00 CT, so at least one time must change.
- **Sat 31 Oct:** no in-person event listed after the Kansas move — Al Jazeera https://www.aljazeera.com/news/2026/10/30/trump-reverses-course-reinstates-cancelled-campaign-rallies (published 2026-10-30 15:35, read 2026-10-30T17:57Z).
- **Mon 2 Nov:** Townhall's update (posted while the Kansas/Iowa trip was off) says Trump and Vance "will hold a rally in Rome, New York on Monday-- the day before midterms" — https://townhall.com/news/cameron-arcand/2026/10/30/we-know-trumps-final-midterms-schedule-heres-what-to-expect-n2685606 (published 2026-10-30 11:15, read 2026-10-30T17:58Z). Al Jazeera (later, 15:35): no Monday event confirmed; officials had not ruled one out. Not verified.
- **Fri 30 Oct:** rally in Daytona Beach, Florida, 7 p.m. (Townhall; USA Today).
- White House public schedule for 31 Oct–1 Nov: not found / not read.

## Facts
- **Cancellation, Thu 29 Oct.** Trump cancelled the Kansas (Sat) and Iowa (Sun) rallies without explanation; RNC said tele-rallies would reach more voters. Trump: "I don't feel I have to go to Kansas." Marshall suggested Trump had "better places to spend his time" — Al Jazeera 30 Oct (above). To a reporter asking if he was tired of travelling: "You've been following me for two weeks. I feel perfect." — USA Today/Yahoo (above). Salina airport director: "all Salina events are cancelled" — Newsweek (above).
- **Reinstatement, Fri 30 Oct.** Source close to the administration to Al Jazeera: "Rallies are BACK ON!"; Trump "will headline in-person rallies in Kansas and Iowa" on Sunday — Al Jazeera (above). Person familiar: "the Iowa and Kansas rallies have been rearranged to accommodate the new telerallies added to Trump's schedule" — KCRG (above). On the record confirmation: Salina Airport Authority (Salina Post, above).
- **Tele-rally plan.** RNC "72-hour sprint" of tele-rallies — Salina Post (above). RNC list of tele-rally states: Alabama, Alaska, Arizona, Colorado, Florida, Iowa, Kansas, Louisiana, Michigan, Montana, Nebraska, Nevada, New Mexico, New York, Ohio, Pennsylvania, South Carolina, Texas, Virginia — Townhall (above). Tele-rallies do not count.
- **Political motive.** Newsweek headline: Kansas cancellation "as new poll shows Republican trailing Democrat"; USA Today: tight Senate races in both states.
- **2018 pattern (as president, midterm 6 Nov 2018):** Sat 3 Nov Belgrade MT (Bozeman airport) and Pensacola FL; Sun 4 Nov Macon GA (Middle Georgia Regional Airport) and Chattanooga TN (McKenzie Arena); Mon 5 Nov Cleveland OH, Fort Wayne IN, Cape Girardeau MO — https://en.wikipedia.org/wiki/List_of_Donald_Trump_rallies_(December_2016%E2%80%932022) (read 2026-10-30T18:02Z). AP (29 Oct 2018): "at least 10 rallies in the final stretch" — https://www.cbsnews.com/news/trump-loads-up-on-rallies-before-election-day (read 2026-10-30T18:00Z).
- **2022 pattern (out of office, midterm 8 Nov 2022):** Sat 5 Nov Latrobe PA; Sun 6 Nov Miami FL (Miami-Dade County Fair & Exposition); Mon 7 Nov Dayton OH — same Wikipedia list.
- So in both previous midterms he held an in-person rally on the Sunday before Election Day.
- **Health/stamina context:** none reported beyond the "tired of traveling" question; no medical reason given for the cancellation.

## Base rate
- `scheduled-appearance-takes-place`: 0.92, n large (estimate), own record 3 YES / 0 NO. Fits: two rallies announced for the day, on the record (Salina Airport Authority). This rally was already cancelled once in this cycle, which the class does not capture.
- Final-weekend precedent: Sunday-before-midterm rally held in 2018 and 2022 (2 of 2).

## Schedule slip
- Slip class: none per spec. For reference, `summit-or-visit` slip rate 0.046 [estimate] (`node scripts/refdata/slip.mjs summit-or-visit`, run 2026-10-30T18:07Z). The 29 Oct cancellation and 30 Oct reinstatement show this schedule is unusually fluid.

## Risks
- **Toward NO:** a second cancellation (the first came without explanation two days earlier); the RNC prefers tele-rallies; weather or a security/Iran-war event (strike decision, Hormuz escalation) keeps him in Washington; a move of both rallies to Monday.
- **Toward YES:** two separate venues on the same day give redundancy; airport-hangar format is easy to stage; Salina confirmed on the record; consistent final-weekend habit in 2018 and 2022.
- **Resolution:** a remark-only stop (e.g. airport tarmac greeting) — counts if it is a public campaign event where he speaks. Kansas rally at 14:00 CT = 15:00 ET, well inside the date. Ensure he speaks in person, not by phone to the crowd.

## Sources
- https://salinapost.com/posts/d44c1e25-a8a9-4c13-80eb-ea465da6be34
- https://www.aljazeera.com/news/2026/10/30/trump-reverses-course-reinstates-cancelled-campaign-rallies
- https://www.yahoo.com/news/politics/articles/trump-rallies-kansas-iowa-back-143808605.html (USA Today)
- https://www.kcrg.com/2026/10/30/trump-revives-iowa-rally-after-canceling-weekend-trip/
- https://www.newsweek.com/trump-cancels-kansas-rally-as-new-poll-shows-republican-trailing-democrat-12637635
- https://townhall.com/news/cameron-arcand/2026/10/30/we-know-trumps-final-midterms-schedule-heres-what-to-expect-n2685606
- https://events.gop.com/events/midterm-rally-in-dubuque-iowa-president-donald-j-trump-djt47
- https://www.cbsnews.com/news/trump-loads-up-on-rallies-before-election-day (2018)
- https://en.wikipedia.org/wiki/List_of_Donald_Trump_rallies_(December_2016%E2%80%932022)
- https://en.wikipedia.org/wiki/List_of_post-election_Donald_Trump_rallies (tables empty)
- Search-result titles only: audacy.com/knss "Salina is back on Trump's rally schedule, for Sunday afternoon"; newsbytesapp "Donald Trump reinstates Salina and Dubuque Nov. 1 rallies"; kcrg.com 29 Oct "President Trump cancels Dubuque rally"
