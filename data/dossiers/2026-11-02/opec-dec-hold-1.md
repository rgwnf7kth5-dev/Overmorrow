# opec-dec-hold-1
- **Claim:** At their meeting on Sunday 1 November 2026, the OPEC+ countries that set monthly output targets announce that their December 2026 production targets stay unchanged from November.
- **Criterion:** YES if, by 23:59 Riyadh time on 1 Nov 2026, the OPEC+ countries that have been setting monthly targets (the group meeting on 1 Nov) announce, in an OPEC press release or official statement, that their December 2026 production targets are unchanged from November. NO if they announce any increase or cut for December, or if no December decision is announced by then.
- **Event window:** 2026-11-01T00:00:00+03:00 to 2026-11-01T23:59:59+03:00 (Asia/Riyadh)
- **Written at:** 2026-10-30T18:10:00Z (read times below are approximate, all between 17:20Z and 18:05Z on 30 Oct)

## Schedule
- OPEC press release of 4 Oct 2026: the seven countries "will meet monthly", with the next meeting on 1 November 2026 — https://opec.org/pr-detail/1891616-4-october-2026.html (meeting 4 Oct 2026, read 2026-10-30T17:35Z). The date is also given by engine.online (5 Oct): next meeting 1 November 2026 to "review market conditions" — https://engine.online/news/opec-decides-to-keep-output-steady-in-november-8239 (published 2026-10-05, read 2026-10-30T17:25Z).
- Reuters via Yahoo Finance, 27 Oct: the meeting is online, on Sunday — https://finance.yahoo.com/energy/articles/opec-expected-maintain-december-oil-103915092.html (published 2026-10-27 03:39 PDT, read 2026-10-30T17:22Z).
- No start time has been published. Past decisions in this series were all taken on a Sunday and published the same day: the 6 Sep meeting decided October and the 4 Oct meeting decided November (the press releases above and below). Nairametrics reported the 4 Oct decision at 06:18Z on 5 Oct, saying it was "announced after a virtual meeting on Sunday, October 4" — https://nairametrics.com/2026/10/05/opec-keeps-november-oil-production-unchanged-at-31-01-million-bpd/ (read 2026-10-30T17:37Z). The exact publication time of the opec.org releases was not found.
- The full OPEC+ ministerial meets on 29 Nov to set policy for 2027 — dailybyte.pk (below).

## Facts
- **Who meets:** Saudi Arabia, Russia, Iraq, Kuwait, Kazakhstan, Algeria and Oman, "the seven countries that announced additional voluntary adjustments in April and November 2023". The UAE is not among them — OPEC 4 Oct press release (above). The same list appears in Reuters/Yahoo, 27 Oct (above).
- **November decision (4 Oct):** the seven "decided to maintain September 2026 required production for November 2026" and "reiterated their collective commitment to achieve full conformity with the Declaration of Cooperation" — OPEC https://opec.org/pr-detail/1891616-4-october-2026.html (read 2026-10-30T17:35Z). Combined required production was 31.01 mb/d: Saudi Arabia 10.478, Russia 9.949, Iraq 4.431, Kuwait 2.676, Kazakhstan 1.628, Algeria 1.007, Oman 0.841. This "extends the pause that began in October, after four consecutive monthly increases" — Nairametrics (published 2026-10-05 06:18Z, read 2026-10-30T17:37Z).
- **October decision (6 Sep):** "decided to maintain September 2026 required production levels for October 2026"; the next meeting was set for 4 October — OPEC https://www.opec.org/pr-detail/1835613-6-september-2026.html (meeting 6 Sep 2026, read 2026-10-30T17:35Z). Gulf News headline: "OPEC+ keeps October oil output quota unchanged from September levels" — https://gulfnews.com/business/energy/opec-keeps-october-oil-output-quota-unchanged-from-september-levels-1.500665366 (search result only, not opened).
- So December unchanged would be the third flat month in a row (October, November, December). The last increase was for September: +188k b/d — engine.online (above) "raised output by 188,000 b/d in September".
- **Source reporting for December:** three people familiar with the talks told Reuters that OPEC+ "is likely to keep its current December targets", while stressing that "no final decision had been made". Attention is turning to quota talks for 2027 — Reuters via Yahoo Finance (published 2026-10-27 03:39 PDT, read 2026-10-30T17:22Z). The same Reuters line was carried by a Jin10 flash: "OPEC+ is likely to maintain its December oil production target" — https://www.kucoin.com/news/flash/opec-to-maintain-oil-output-target-at-sunday-meeting-iran-calls-for-war-conditions-implementation (release time 2026-10-27 23:22, time zone not given, read 2026-10-30T17:27Z). Dailybyte.pk (28 Oct) repeats this: "No final decision has been made" … "the expectation is for continuity" — https://dailybyte.pk/blog/opec-plus-december-oil-output-steady-28-october-2026 (read 2026-10-30T17:25Z). All three go back to the one Reuters report. No Bloomberg survey or delegates' story from 28–30 Oct was found; a search on 30 Oct returned only items from 2025.
- **Hormuz and Gulf output:** "Gulf producers are increasing exports after several months of disruption linked to the Iran conflict. Most remain well below their production targets" — Reuters via Yahoo (above). Dailybyte: physical supply and shipping disruption are driving prices more than the headline targets (above). OPEC's 4 Oct statement, as quoted by engine.online, said "restoring damaged energy assets to full capacity is both costly and takes a long time" (above). The JMMC on 2 Aug raised concern about "attacks on energy infrastructure and disruptions to maritime routes" — https://www.opec.org/pr-detail/1870612-2-august-2026.html (read 2026-10-30T17:28Z).
- **Hormuz this week (desk sweep, not re-read):** on 30 Oct the IRGC said tankers hit mines on a southern route off Oman, and transits through Hormuz were in single digits a day — CNBC Africa https://www.cnbcafrica.com/2026/iran-claims-four-tankers-struck-mines-in-hormuz-as-strike-fears-grow-after-u-s-midterms (via the scratchpad world.json sweep, 30 Oct).
- **Prices:** Brent fell 0.9% to $109.74 in the morning briefing of 27/28 Oct — Jin10/KuCoin (above). It was about $117 on 30 Oct per the desk's running file, which cites al Jazeera's liveblog (scratchpad running.json, not re-read).
- **JMMC:** the 68th JMMC was set for 4 Oct 2026 — OPEC 2 Aug release (above). No JMMC meeting is listed for 1 Nov.

## Base rate
- No reference class fits exactly. The nearest is `central-bank-holds-as-expected` (pipeline/reference-classes.json): a scheduled policy body holds when a hold is the consensus. Own record 3 YES / 0 NO, base_rate null. This is a loose analogue.
- Series record: in the two most recent monthly meetings (6 Sep, 4 Oct) the group held targets flat, and in both cases the outcome matched pre-meeting source reporting. Before that came four consecutive increases (Nairametrics, above).

## Schedule slip
- `other-scheduled`: 0.082 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-10-30T18:01Z).
- Specific risks: the meeting is online and has no published start time. In earlier years, monthly meetings of this group were sometimes moved by a day or brought forward. No sign of a move was found as of 30 Oct. A meeting postponed to after 23:59 Riyadh time on 1 Nov makes the claim NO.

## Risks
- **A hike to answer high prices:** with Brent around $110–117 and Hormuz traffic disrupted, the group could add a nominal increase for December to show supply response. Most members cannot produce more anyway, so a paper hike costs little.
- **A cut:** unlikely while prices are high and Gulf supply is constrained. No reporting points to one.
- **Wording:** the group could skip a December figure and defer to the 29 Nov ministerial (for example "decided to review at the 29 November meeting"). That counts as NO, because no December decision is announced. It could also adopt targets that differ by country (compensation schedules) while the group total stays flat. The criterion is about "production targets … unchanged". If the headline required-production table is unchanged and only compensation plans are updated, that should still count as unchanged.
- **Timing:** a statement published after 23:59 Riyadh time (20:59 UTC). Past statements came out on the day of the meeting.
- **Single-source expectation:** all the "hold" reporting goes back to one Reuters story, from 27 Oct.

## Sources
- https://finance.yahoo.com/energy/articles/opec-expected-maintain-december-oil-103915092.html
- https://engine.online/news/opec-decides-to-keep-output-steady-in-november-8239
- https://dailybyte.pk/blog/opec-plus-december-oil-output-steady-28-october-2026
- https://www.kucoin.com/news/flash/opec-to-maintain-oil-output-target-at-sunday-meeting-iran-calls-for-war-conditions-implementation
- https://www.opec.org/pr-detail/1870612-2-august-2026.html
- https://opec.org/pr-detail/1891616-4-october-2026.html
- https://www.opec.org/pr-detail/1835613-6-september-2026.html
- https://nairametrics.com/2026/10/05/opec-keeps-november-oil-production-unchanged-at-31-01-million-bpd/
- https://www.opec.org/press-releases.html (fetch failed, client error)
- Search results only: gulfnews.com October item; Bloomberg/Reuters items from Nov 2025 (old, not relevant)
- Desk sweep files: scratchpad econ.json, world.json, running.json (30 Oct)
