# il-herzog-1
- **Claim:** By 23:59 Israel time on 3 November 2026, President Isaac Herzog's office publishes the schedule of his coalition consultations with the Knesset factions.
- **Criterion:** YES if between 07:00 Israel time on 2 Nov and 23:59 Israel time on 3 Nov 2026 the President's Residence publishes a schedule of the consultations on forming the government, through president.gov.il, its spokesperson or its official social-media accounts, or as reported by Times of Israel, Haaretz, Ynet or a wire agency citing the President's Residence. The schedule must give the date or time of the meeting with at least one named faction. A general statement that consultations will begin after the results are received does not count. NO otherwise.
- **Event window:** 2026-11-02T07:00:00+02:00 to 2026-11-03T23:59:00+02:00 (Asia/Jerusalem). Evidence read at 2026-11-04T04:00+01:00.
- **Written at:** 2026-11-01T18:30Z. Read times between 18:00Z and 18:15Z on 1 Nov unless stated.
- **Choice of claim:** the desk suggested either this claim or a Likud challenge. Likud has still not been reported filing anything. The statutory appeal runs for 14 days from publication of the results on about 4 Nov, so a filing by 3 Nov is unlikely to be the day's story. The consultation schedule is the next dated step.

## Schedule
- **Herzog, 1 Nov:** "This coming Wednesday, I will receive the official election results." "I will then begin consultations at the President's Residence." "The doors of the President's Residence will be wide open to all factions and parties." Wednesday is 4 Nov. Source: Jerusalem Post https://www.jpost.com/israel-election-2026/article-913448 (published 2026-11-01 11:35, updated 12:27, read 2026-11-01T18:05Z).
- **Legal timetable:** results must be presented to Herzog by 4 Nov. The Knesset is sworn in on 10 Nov. Herzog must task a member by 11 Nov. The candidate has 28 days plus 14 — Al Jazeera https://www.aljazeera.com/news/2026/11/1/israel-election-when-will-government-be-formed-who-will-lead-it (published 2026-11-01 14:16, read 2026-11-01T18:03Z) "must be officially certified and presented to President Isaac Herzog by November 4". Al Jazeera gives no consultation schedule.

## Facts
- **2022 precedent:** results were delivered to Herzog on Wednesday morning, 9 Nov 2022. Consultations began the same day and ran over three days (Wed–Fri). The Media Line's 9 Nov article already carried the day-by-day list — The Media Line https://themedialine.org/headlines/israels-election-results-certified-president-begins-consultations/print (published 2022-11-09 11:54, read 2026-11-01T18:12Z) "Later on Wednesday, Herzog will begin consultations with all of the parties". The article does not say when the schedule was first released. Our deadline is the day before certification.
- **Final count:** Likud 27, Yashar 21, B'Yachad 12, Joint List 11, Democrats 8, Ra'am 8, Yisrael Beytenu 7, UTJ 7, Otzma 7, Shas 6, RZ 6. Netanyahu bloc 53 — Times of Israel https://www.timesofisrael.com/liveblog_entry/central-elections-committee-publishes-final-election-results-knesset-to-be-sworn-in-nov-10/ (published 2026-10-30 00:51, via sweep/running.md, not re-read).
- **Recommendations:** a senior Joint List official told Walla that the Joint List and Ra'am are expected to recommend Eisenkot (JPost, above).
- **Herzog's tone:** "This week at the President's Residence, we will try to put up ladders so that our leaders can come down" (JPost, above). He will have 11 factions to see.
- **Likud challenge:** on 29 Oct Likud said it would petition to annul results at some polling stations (Ynet, in the 3 Nov dossier). JPost and Al Jazeera of 1 Nov mention no filing.

## Base rate
- No class fits exactly. The nearest is `scheduled-publication-takes-place` (own record 4 YES / 0 NO), but the timing of a schedule release is not fixed by law. The loose alternative is `unscheduled-announcement-within-one-day` (2 YES / 20 NO). Neither is a good fit.

## Schedule slip
- slip_class `none`. `node scripts/refdata/slip.mjs none` returned "unknown class none" (2026-11-01T18:12Z).
- The Residence may publish the schedule only on 4 Nov, after receiving the results. The certification date could also move if the CEC is still examining "errors or inquiries" (ToI 30 Oct, in the 3 Nov dossier). Shin Bet's foreign-funding findings are due around 5 Nov.

## Risks
- A press notice that "consultations will begin on Wednesday afternoon", with no named faction, resolves NO. The resolver must check that at least one faction's slot is given.
- Reports such as "Likud is expected to meet Herzog first" that cite party sources, not the Residence, do not count.
- The schedule may come out late on 3 Nov in Hebrew only (president.gov.il, X). English outlets may report it only on 4 Nov. Evidence published after the window about a release inside it still counts.

## Sources
- https://www.jpost.com/israel-election-2026/article-913448
- https://www.aljazeera.com/news/2026/11/1/israel-election-when-will-government-be-formed-who-will-lead-it
- https://themedialine.org/headlines/israels-election-results-certified-president-begins-consultations/print
- https://www.timesofisrael.com/liveblog_entry/central-elections-committee-publishes-final-election-results-knesset-to-be-sworn-in-nov-10/ (via sweep)
- data/dossiers/2026-11-03/il-likud-challenge-1.md

## Research step (1 Nov evening)
Question: does the Residence publish the faction timetable before the day it receives the results, and has a 2026 timetable been announced? Read 2026-11-01T18:30–18:44Z.
- **2026, Residence announcement:** Times of Israel liveblog (dated 1 Nov 2026, "7:25 pm"): "President Isaac Herzog will begin consultations with the factions elected to the 26th Knesset this coming Wednesday," the President's Residence announces. Director General Eyal Shviki "says he has invited the heads of all elected factions". No order, times or later schedule is mentioned — https://www.timesofisrael.com/liveblog_entry/herzog-invites-factions-to-coalition-talks-wednesday-urges-against-another-election (read 18:40Z).
- **2026, Ynetnews** (1 Nov, 07:52 UTC): Herzog "is expected to begin consultations with party representatives on Wednesday, with the meetings likely to continue Thursday and possibly into Friday". No order of factions and no official timetable — https://www.ynetnews.com/article/sk8eaw4pge (read 18:39Z).
- **2026, VIN News** (1 Nov, 09:00 UTC-5): Herzog's words only, with no dates beyond Wednesday — https://vinnews.com/2026/11/01/herzog-to-begin-coalition-consultations-this-week-urges-party-leaders-to-stop-climbing-trees/ (read 18:39Z). Haaretz of 31 Oct could not be read (robots). INN 435480 could not be read (client error).
- **2022 precedent (mixed):** JPost article-721778, dated 8 Nov 2022 12:46 and updated 20:46, one day before the results were presented on 9 Nov. It carries a day-by-day list: "Herzog will meet today with representatives of the Likud, Yesh Atid, National Unity and Shas; on Thursday with … and on Friday with Labor and Noam." The list is not attributed to the Residence. The same article quotes the President's Office: the process "will only start tomorrow [Wednesday]" — https://www.jpost.com/israel-news/politics-and-diplomacy/article-721778 (read 18:33Z).
- **2022, 9 Nov reports:** JPost article-721875 (9 Nov 2022 09:52) and JNS (9 Nov 2022 11:06, "After receiving official election results, Herzog sets date to grant mandate") — https://www.jpost.com/breaking-news/article-721875, https://jns.org/israeli-president-receives-official-election-results-2 (read 18:32Z, 18:43Z). The Jewish Press "Schedule of consultations (subject to change)" page has no timestamp — https://jewishpress.com/news/elections-news/schedule-president-herzog-to-begin-consultations-with-knesset-party-representatives/2022/11/09.
- **2019 and 2021:** no source on when those schedules were released was found.
- Nothing found settles the question.
