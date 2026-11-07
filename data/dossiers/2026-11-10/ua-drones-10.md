# ua-drones-10
- **Claim:** The Ukrainian Air Force reports that Russia launched at least 160 drones at Ukraine in the night of 8-9 November 2026.
- **Criterion:** YES if the Ukrainian Air Force's first morning summary on 9 Nov 2026, covering the overnight attack that normally counts from 18:00 Kyiv time on 8 Nov, states that Russia launched at least 160 drones (Shahed-type strike drones, jet-powered Shaheds, Gerbera and other decoys together; missiles not counted), as published on the Air Force's Telegram channel or repeated by Ukrinform, Ukrainska Pravda, Kyiv Independent or Interfax-Ukraine. Separate daytime reports and later corrections do not count. NO if that summary gives fewer than 160 drones.
- **Deadline:** attack window 2026-11-08T18:00+02:00 to 2026-11-09T09:00+02:00; summary expected 08:00-10:00 Kyiv on 9 Nov; evidence by 2026-11-09T12:00+02:00
- **Written at (UTC):** 2026-11-07T18:15Z. Read times as stated.
- Same framing as ua-drones-2 to -5; threshold moved from 150 to 160 because the median of the last 14 nights is about 162 (below). At 150 the 14-night count would be 8 of 14.

## Schedule
- The Air Force publishes a summary every morning; routine, not an announced event. Night 8-9 Nov is the eve of the Abu Dhabi talks (10-11 Nov).

## Facts (Air Force morning summaries; drones launched from about 18:00 the previous evening)
- Night to 7 Nov: 172 attack UAVs ("137 of them jet-powered") plus Iskander-M, Zircon, KN-23 and S-400 missiles; 149 drones and four missiles downed — https://www.ukrinform.net/rubric-ato/4182349-air-defense-downs-four-missiles-149-drones-used-by-russia-to-attack-ukraine-overnight.html (published 2026-11-07T09:55+02:00, read 2026-11-07T17:54Z) "as well as 172 attack UAVs, including Shahed drones"
- Night to 6 Nov: 227 — https://www.ukrinform.net/rubric-ato/4181994-adf-neutralizes-196-russian-drones-used-to-attack-ukraine-overnight.html (published 2026-11-06T09:34+02:00; via ua-drones-5.md; resolver confirmed, data/resolutions/2026-11-07.json ua-drones-3)
- Night to 5 Nov: 128 — https://www.ukrinform.net/rubric-ato/4181598-adf-neutralises-105-russian-drones-since-yesterday-evening.html (via ua-drones-5.md)
- Night to 4 Nov: 310 — https://www.ukrinform.net/rubric-ato/4181220-air-defense-neutralizes-272-of-310-drones-launched-by-russia-against-ukraine-overnight.html (Ukrinform headline 2026-11-04T07:45Z in Google News, read 2026-11-07T17:54Z) "272 of 310"
- Night to 3 Nov: 365 missiles and drones together; Zelensky: 17 ballistic missiles; drone-only figure not found (so between about 300 and 348) — Times Now headline 2026-11-03T12:23Z "Russia Fires 365 Missiles And Drones At Ukraine"; Ukrainska Pravda headline 2026-11-03T08:44Z "Zelenskyy says Russia launched 17 ballistic missiles" (Google News RSS, read 2026-11-07T17:54Z)
- Night to 2 Nov: 193 — https://www.ukrinform.net/rubric-ato/4180368-air-defenses-down-154-out-of-193-drones-used-by-russia-to-attack-ukraine-since-evening.html (via ua-drones-5.md)
- Night to 1 Nov: 433 — https://www.ukrinform.net/rubric-ato/4180165-air-defense-neutralizes-371-of-433-russian-drones-launched-against-ukraine-overnight.html (via ua-drones-5.md)
- Night to 31 Oct: 134 — https://www.ukrinform.net/rubric-ato/4179957-air-defenses-down-105-out-of-134-russian-drones-launched-at-ukraine-overnight.html (via ua-drones-5.md)
- Night to 30 Oct: 113 — https://www.ukrinform.net/rubric-ato/4179592-air-defenses-down-three-missiles-96-drones-used-by-russia-to-attack-ukraine-overnight.html (via ua-drones-5.md)
- Night to 29 Oct: 112 — https://www.pravda.com.ua/eng/news/2026/10/29/8060197/ (via ua-drones-5.md)
- Night to 28 Oct: 88 — https://www.ukrinform.net/rubric-ato/4178816-air-defenses-neutralize-71-russian-drones-overnight.html (via ua-drones-5.md)
- Night to 27 Oct: 280 — https://www.ukrinform.net/rubric-ato/4178499-air-defenses-neutralize-two-ballistic-missiles-255-drones-in-overnight-russian-attack-on-ukraine.html (via ua-drones-5.md)
- Night to 26 Oct: 140 — https://www.ukrinform.net/rubric-ato/4178118-ukraines-air-defenses-down-112-russian-drones-three-missiles-overnight.html (via ua-drones-5.md)
- Night to 25 Oct: 153 — https://www.ukrinform.net/rubric-ato/4177912-air-defense-neutralizes-119-of-153-drones-russia-launched-at-ukraine-overnight.html (via ua-drones-5.md)
- Zelensky, 6 Nov: intelligence indicates "Russia was preparing a new strike targeting the country's energy infrastructure, bridges across the Dnipro River, and civilian infrastructure" — https://www.ukrinform.net/rubric-ato/4182267-zelensky-warns-russia-prepares-new-strike-on-energy-facilities-bridges-and-civilian-infrastructure.html (published 2026-11-06T22:28+02:00, read 2026-11-07T17:54Z). The night to 7 Nov then brought 172 drones and missiles at Kyiv region and 12 regions (Ukrinform rubric headline "Zelensky: In addition to Kyiv, 12 regions of Ukraine come under attack overnight", read 2026-11-07T17:54Z).
- The nights to 8 Nov (ua-drones-5, open) and to 9 Nov are not yet known.

## Base rate
- Class drone-count-above-threshold-night (pipeline/reference-classes.json): own record 0 yes, 1 no; too thin. Own series: ua-drones-2 NO (128 vs 150), ua-drones-3 YES (227).
- Own count, nights to 25 Oct-7 Nov, n=14: at least 160 on 7 nights (172, 227, 310, ~3 Nov, 193, 433, 280), below on 7 (128, 134, 113, 112, 88, 140, 153). Rate 0.50. Median about 162 (between 153 and 172). Mean of the 13 drone-only figures 191.
- Last 7 nights (1-7 Nov): 6 of 7 at or above 160 (only 128 below).

## Schedule slip
- slip_class `none`: routine daily report.

## Risks
- Pulses: big nights come a few days apart; a mass attack on the eve of talks is possible, as is a lull.
- Daytime waves are counted separately and take drones out of the night count.
- The summary may count from another start time (e.g. 19:00); it still counts as the first morning summary.
- Missile-heavy nights (36 ballistic on 6-7 Nov) can carry fewer drones.

## Sources
- https://www.ukrinform.net/rubric-ato (read 2026-11-07T17:54Z)
- https://www.ukrinform.net/rubric-ato/4182349-air-defense-downs-four-missiles-149-drones-used-by-russia-to-attack-ukraine-overnight.html
- https://www.ukrinform.net/rubric-ato/4182267-zelensky-warns-russia-prepares-new-strike-on-energy-facilities-bridges-and-civilian-infrastructure.html
- https://www.ukrinform.net/rubric-ato/page2 (404)
- https://news.google.com/rss/search?q=Ukraine%20air%20force%20drones%20overnight%20November%203%202026&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=Russia%20launched%20drones%20missiles%20overnight%20Ukraine%20November%203%20365&hl=en-US&gl=US&ceid=US:en
- all article URLs above; data/dossiers/2026-11-09/ua-drones-5.md ; data/resolutions/2026-11-07.json
