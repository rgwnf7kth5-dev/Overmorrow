# ua-drones-15
- **Claim:** The Ukrainian Air Force reports that Russia launched at least 170 drones at Ukraine in the night of 13–14 November 2026.
- **Criterion:** YES if the Ukrainian Air Force's first morning summary on 14 Nov 2026, covering the overnight attack that normally counts from 18:00 Kyiv time on 13 Nov, states that Russia launched at least 170 drones (strike UAVs as the summary counts them: Shahed-type and jet-powered Shaheds, Gerbera, Parodiya and other decoys, and any jet munitions the summary includes in the UAV total; missiles listed separately not counted), as published on the Air Force's Telegram channel or repeated by Ukrinform, Ukrainska Pravda, Kyiv Independent or Interfax-Ukraine. Separate daytime reports and later corrections do not count. NO if that summary gives fewer than 170 drones.
- **Event window:** attack 2026-11-13T18:00+02:00 to 2026-11-14T09:00+02:00 (Europe/Kyiv); summary expected 08:00–10:00 Kyiv on 14 Nov; evidence by 2026-11-14T12:00+02:00; resolver reads 2026-11-15T05:00+01:00.
- **Written at:** 2026-11-12T18:00Z
- Same framing as ua-drones-11 to -14. Threshold stays at 170: the median of the last 14 nights (to 30 Oct–12 Nov) is 168, rounded to 170.

## Schedule
- The Air Force publishes a summary every morning; routine, not an announced event. The night 13–14 Nov follows the Putin–Witkoff–Kushner meeting in Moscow (12 Nov) and the envoys' planned debrief of Zelensky in Dublin — TASS https://tass.com/politics/2217341 (published 2026-11-12T16:42Z, read 2026-11-12T17:54Z) "Witkoff said he would brief Zelensky on today's talks with Putin."

## Facts (Air Force morning summaries; drones launched from about 18:00 the previous evening)
- Night to 12 Nov: 123 — "Russian forces launched Iskander-M/KN-23/S-400 ballistic missiles, Zircon anti-ship missiles, Gerbera, Banderol/Dan-T and 123 long-range attack drones at Ukraine overnight on Nov. 12, including 73 jet-powered drones, the Air Force said." 89 drones and 5 Banderol/Dan-T intercepted by 08:00 — Kyiv Independent https://kyivindependent.com/russian-attacks-kill-10-injure-40-across-ukraine-over-past-day-as-peace-talks-end/ (published 2026-11-12T10:07Z, read 2026-11-12T17:53Z). Same figure (123, "including 72 jet-powered drones") in https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/ (published 2026-11-11T23:27Z, modified 2026-11-12T12:33Z, read 2026-11-12T17:53Z).
- The 12 Nov attack hit Kyiv with ballistic missiles and drones "hours after" the Abu Dhabi round ended; one killed in Kyiv — same Kyiv Independent article (11T23:27Z) "Russia launched ballistic missiles and drones at Ukraine's capital and the surrounding area overnight on Nov. 12."
- Night to 11 Nov: 163 — Kyiv Independent https://kyivindependent.com/russian-attacks-kill-9-injure-39-across-ukraine-over-past-day-as-2-russian-cruise-missiles-violate-moldovan-airspace/ (as cited in data/dossiers/2026-11-14/ua-drones-14.md, read there 2026-11-11T17:54Z).
- Night to 10 Nov: 162 — https://www.ukrinform.net/rubric-ato/4183161-adf-down-135-of-162-russian-drones-launched-against-ukraine-overnight.html (as cited in ua-drones-14.md).
- Nights to 30 Oct–9 Nov (as cited in data/dossiers/2026-11-14/ua-drones-14.md and 2026-11-12/ua-drones-12.md with their URLs; not re-read tonight): 9 Nov 317; 8 Nov 164; 7 Nov 172; 6 Nov 227; 5 Nov 128; 4 Nov 310; 3 Nov at least 289; 2 Nov 193; 1 Nov 433; 31 Oct 134; 30 Oct 113.
- Night to 13 Nov: not published at writing time (out on the morning of 13 Nov) — the morning desk should add it and re-check the median.
- Starshield (military Starlink) speed restrictions: Zelensky said on 12 Nov they make it "significantly harder for Ukrainian forces to intercept Russian jet-powered drones" — Kyiv Independent https://kyivindependent.com/starshield-speed-restrictions-return-hampering-efforts-to-intercept-russian-drones-zelensky-says/ (published 2026-11-12T10:47Z, modified 17:05Z, read 2026-11-12T17:53Z) "this is helping the Russians kill more Ukrainians and carry out more accurate strikes against Ukraine". Affects interception, not the launch count.

## Base rate
- Own count, 14 nights to 30 Oct–12 Nov, sorted: 113, 123, 128, 134, 162, 163, 164, 172, 193, 227, ≥289, 310, 317, 433. Median 168 → threshold 170. At least 170 on 7 of 14 (0.50).
- Last 7 nights (6–12 Nov): 227, 172, 164, 317, 162, 163, 123 — at least 170 on 3 of 7 (0.43).
- Trend: the last three nights were 162, 163, 123 — the lowest three-night run since 29–31 Oct (112, 113, 134). Large nights (≥289) came roughly every 3–5 nights (1, 3, 4, 9 Nov); none since 9 Nov.
- Reference class drone-count-above-threshold-night (pipeline/reference-classes.json): own record 1 yes / 3 no; base_rate null.

## Schedule slip
- slip_class none (routine daily report; stats-release rate 0.003 per `node scripts/refdata/slip.mjs`, 2026-11-12T17:54Z). The summary has been published every morning in the series.

## Risks
- Diplomacy: the Abu Dhabi round ended 11 Nov, Putin met the US envoys 12 Nov, a debrief of Zelensky follows; no announced pause in strikes — the night to 12 Nov came "hours after" the talks ended.
- Composition: summaries sometimes include Banderol/Dan-T jet munitions in the UAV total, sometimes list them separately (12 Nov: listed separately); the criterion takes the UAV total as stated.
- Summary start time can differ (e.g. 19:00); still the first morning summary.
- Ukrinform was hacked on 11 Nov (see ua-drones-14.md); resolution can use Air Force Telegram, Kyiv Independent, Ukrainska Pravda or Interfax-Ukraine.

## Sources
- https://kyivindependent.com/russian-attacks-kill-10-injure-40-across-ukraine-over-past-day-as-peace-talks-end/
- https://kyivindependent.com/russia-attacks-kyiv-with-ballistic-missiles-hours-after-peace-talks-end/
- https://kyivindependent.com/starshield-speed-restrictions-return-hampering-efforts-to-intercept-russian-drones-zelensky-says/
- https://kyivindependent.com/ (front page, read 2026-11-12T17:53Z)
- https://tass.com/politics/2217341
- data/dossiers/2026-11-14/ua-drones-14.md; data/dossiers/2026-11-12/ua-drones-12.md (series URLs)

## Unreachable
- None tonight (Ukrinform not attempted; hacked on 11 Nov per ua-drones-14.md).
