# shenzhou-26
- **Claim:** China launches the crewed Shenzhou-24 spacecraft (Long March 2F, Jiuquan) on Wed 25 Nov 2026 (Beijing time).
- **Criterion:** YES if the Long March 2F carrying the crewed Shenzhou-24 spacecraft lifts off from the Jiuquan Satellite Launch Center between 00:00 and 23:59 Beijing time (Asia/Shanghai, UTC+8) on Wed 25 Nov 2026, as reported by CMSA/Xinhua/CCTV or a major outlet (Reuters, AP, AFP, BBC, Space.com). Lift-off counts regardless of later mission outcome. NO if lift-off does not occur in that window (launch earlier, later, or scrubbed). A launch at, say, 00:30 on 26 Nov Beijing time (= 17:30 CET on 25 Nov) is NO.
- **Event window:** 2026-11-25T00:00:00+08:00 to 2026-11-25T23:59:00+08:00 (Asia/Shanghai) = 24 Nov 17:00 to 25 Nov 16:59 CET
- **Evidence expected:** CMSA press conference at Jiuquan the day before launch (would be 24 Nov) announcing the crew and lift-off time; Xinhua/CCTV flash at lift-off.
- **Deadline (resolves by):** 2026-11-27T05:00:00+01:00
- **Written at:** 2026-11-23T18:00:00Z

## Schedule
- Status: **expected, not official.** CMSA has given no date or time; it says only "近日择机实施发射" (launch at an opportune time in the coming days). The 25 Nov date comes from Next Spaceflight's listing.
- Next Spaceflight: "Shenzhou 24 — Wednesday November 25, 2026 … Jiuquan Satellite Launch Center, China … Long March 2F" — https://nextspaceflight.com/launches/details/8429/ (read 2026-11-23T17:50:40Z). No time given.
- Xinhua (primary relay of the CMSA statement), 17 Nov: "神舟二十四号计划近日择机实施发射，船箭组合体17日转运至发射区 … 神舟二十四号载人飞船与长征二号F遥二十四运载火箭组合体已转运至发射区 … 后续将按计划开展发射前的各项功能检查、联合测试等工作" — https://www.news.cn/tech/20261117/6051f1517f204adab2fece714a27cf01/c.html (published 2026-11-17, read 2026-11-23T17:51:12Z).
- CMSA's own site cmse.gov.cn was unreachable from this environment (connection reset), 2026-11-23T17:51Z.
- No press-conference announcement, NOTAM or airspace closure was found in this run (one English and one Chinese search, 23 Nov ~17:50Z). Space.com: "CMSA typically holds a press conference at Jiuquan a day ahead of launch, during which the crew for the mission is revealed" — so the official date/time would normally be known on 24 Nov.

## Facts
- Rollout: Shenzhou-24 / Long March 2F Y24 moved to the launch area at Jiuquan on Tue 17 Nov 2026 — People's Daily/Xinhua https://en.people.cn/n3/2026/1117/c90000-20520139.html (published 2026-11-17, read 2026-11-23T17:50:47Z) "transferred to the launch area on Tuesday, with the Shenzhou-24 crewed spacecraft scheduled for launch at an appropriate time".
- Rollout details: "rolled out to the pad … on Tuesday (Nov. 17), with launch expected in the next week … starting around 4 a.m. EST (0900 GMT, or 5 p.m. Beijing Time)"; "launch is scheduled to take place in the coming days, without providing a date" — Space.com https://www.space.com/space-exploration/human-spaceflight/china-rolls-out-rocket-for-launch-of-1st-international-astronaut-to-tiangong-space-station-video (published 2026-11-19T19:00Z, read 2026-11-23T17:50:57Z).
- Crew: three astronauts; one Pakistani payload specialist (first foreign astronaut on a Chinese mission and Pakistan's first astronaut), who stays "multi-day" on Tiangong and returns with two Shenzhou-23 astronauts — China Daily HK https://www.chinadailyhk.com/hk/article/642836 (published 2026-11-18, read 2026-11-23T17:50:39Z) "the first joint flight involving Chinese and foreign astronauts in the history of China's manned space program". Space.com: "One of two Pakistani astronaut candidates will fly … stay aboard Tiangong for around a week, returning home on the departing Shenzhou-23 spacecraft." Crew names not yet published.
- Global Times: "The mission is scheduled to be launched in the coming days, following pre-launch checks and joint tests" — https://www.globaltimes.cn/page/202611/1374541.shtml (read 2026-11-23T17:50:48Z).
- Next Spaceflight: "will mark the 18th crewed Chinese spaceflight and the 24th flight of the Shenzhou program … 12th flight to the Chinese Space Station … another Chinese astronaut to undergo a year long expedition" (URL above).
- Launch time of day varies widely for recent Shenzhou missions (e.g. Shenzhou-20 at 17:17 Beijing time per Global Times teaser; Shenzhou-22 at 12:11 — same Global Times page). Desk knowledge, not re-read this run: Shenzhou-21 lifted off at about 23:44 Beijing time (31 Oct 2025) and Shenzhou-19 at about 04:27 — a late-evening slot near midnight is possible, which matters for this calendar-day claim.

## Base rate
- Rollout-to-launch interval, recent Shenzhou missions (desk knowledge, not re-verified this run): Shenzhou-16 ~6 days, -17 ~6, -18 ~8, -19 ~8, -20 ~8, -21 ~7. Rollout 17 Nov + 8 days = 25 Nov, consistent with Next Spaceflight; 6–7 days (23–24 Nov) has also occurred.
- Once CMSA announces a crewed launch date at the eve press conference, Chinese crewed launches have in recent years lifted off on the announced date (desk knowledge; no scrub of an announced crewed Shenzhou launch in 2021–2025 is known to the desk).
- Reference classes: `launch-lifts-off-by-day-after-scheduled` own record 0 yes / 1 no (Falcon 9 NROL; not comparable); `launch-lifts-off-in-window` 1/0 (pipeline/reference-classes.json).

## Schedule slip
- `node scripts/refdata/slip.mjs launch` (2026-11-23T17:53Z): prior 0.30, own 1/4, rate **0.283** [estimate]. The generic class is dominated by weather/technical scrubs of US launches; Chinese crewed launches announced the day before rarely move, but here the date itself is unofficial.
- Signs of movement: none found. The date is a tracker estimate; the main risk is that the actual date is 24 or 26 Nov, or that a near-midnight lift-off falls on the other side of the Beijing date line.

## Risks
- Date unofficial (CMSA: "coming days"); Next Spaceflight dates for Chinese launches are often inferred from rollout timing and NOTAMs.
- Calendar-day edge: a late-evening (23:xx) or early-morning slot can move the date by one day relative to expectations.
- First international crew member may add pre-launch procedures (no evidence of delay).
- Weather at Jiuquan in late November (cold, wind) rarely stops Long March 2F launches.

## Sources
- https://nextspaceflight.com/launches/details/8429/
- https://www.news.cn/tech/20261117/6051f1517f204adab2fece714a27cf01/c.html
- https://en.people.cn/n3/2026/1117/c90000-20520139.html
- https://www.chinadailyhk.com/hk/article/642836
- https://www.space.com/space-exploration/human-spaceflight/china-rolls-out-rocket-for-launch-of-1st-international-astronaut-to-tiangong-space-station-video
- https://www.globaltimes.cn/page/202611/1374541.shtml
- Unreachable: https://www.cmse.gov.cn/ (connection reset); https://m.thepaper.cn (403)


## Added after the disagreement research (evening of 2026-11-23)

Question: Is there an official or tracker launch time for Shenzhou-24 on 25 Nov (Beijing)?

- Space Launch Schedule lists Shenzhou 24 as Go for 25 Nov 00:18 GMT — https://www.spacelaunchschedule.com/launch/long-march-2fg-shenzhou-24/ (modified 23 Nov 2026 18:10 UTC, read 23 Nov) "Launch Status Go For Launch Wed • Nov 25th, 2026 12:18 AM GMT"
- Space Launch Now gives the window and says the date rests on NOTAMs — https://spacelaunchnow.app/launch/long-march-2fg-shenzhou-24/ (read 23 Nov) "November 25, 2026 - 00:18 UTC Launch Window November 25, 2026 - 00:08 UTC - November 25, 2026 - 00:48 UTC ... Nov. 20, 2026 ... GO for launch per NOTAMs."
- CMSA's site has no launch time yet; latest item is the 17 Nov rollout — https://www.cmse.gov.cn/ (read 23 Nov) "神舟二十四号船箭组合体转运至发射区 计划近日择机实施发射"
- Next Spaceflight lists the date only — https://nextspaceflight.com/launches/details/8429/ (read 23 Nov) "Wednesday November 25, 2026"
