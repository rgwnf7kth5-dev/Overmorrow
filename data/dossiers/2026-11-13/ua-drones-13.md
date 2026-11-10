# ua-drones-13
- **Claim:** The Ukrainian Air Force reports that Russia launched at least 180 drones at Ukraine in the night of 11-12 November 2026.
- **Criterion:** YES if the Ukrainian Air Force's first morning summary on 12 Nov 2026, covering the overnight attack that normally counts from 18:00 Kyiv time on 11 Nov, states that Russia launched at least 180 drones (strike UAVs as the summary counts them: Shahed-type and jet-powered Shaheds, Gerbera, Parodiya and other decoys, and any jet UAVs the summary includes in the UAV total; missiles listed separately not counted), as published on the Air Force's Telegram channel or repeated by Ukrinform, Ukrainska Pravda, Kyiv Independent or Interfax-Ukraine. Separate daytime reports and later corrections do not count. NO if that summary gives fewer than 180 drones.
- **Event window:** attack 2026-11-11T18:00+02:00 to 2026-11-12T09:00+02:00; summary expected 08:00-10:00 Kyiv on 12 Nov; evidence by 2026-11-12T12:00+02:00; resolver reads 2026-11-13T05:00+01:00.
- **Written at (UTC):** 2026-11-10T18:05Z. Read times as stated.
- Same framing and threshold as ua-drones-12 (data/dossiers/2026-11-12/ua-drones-12.md). The night 11-12 Nov follows the scheduled last day of the Abu Dhabi talks (11 Nov).

## Schedule
- The Air Force publishes a summary every morning; routine, not an announced event.

## Facts (Air Force morning summaries; drones launched from about 18:00 the previous evening)
- Night to 10 Nov: 162 — "Starting at 18:00 on Monday, November 9, Russian forces attacked Ukraine with one Iskander-M ballistic missile ... and 162 Shahed-type attack drones, 96 of them jet-powered, as well as Gerbera drones and Parodiya-type decoy drones"; 135 downed — https://www.ukrinform.net/rubric-ato/4183161-adf-down-135-of-162-russian-drones-launched-against-ukraine-overnight.html (published 2026-11-10T08:27+02:00, read 2026-11-10T17:56Z)
- Night to 9 Nov: 317 — https://www.ukrinform.net/rubric-ato/4182779-air-defense-neutralizes-271-of-317-russian-drones-targeting-ukraine-overnight.html (as cited in ua-drones-12.md; not re-read tonight)
- Nights to 28 Oct-8 Nov (as cited in ua-drones-12.md with Ukrinform/UP URLs; not re-read tonight): 8 Nov 164; 7 Nov 172; 6 Nov 227; 5 Nov 128; 4 Nov 310; 3 Nov at least 289; 2 Nov 193; 1 Nov 433; 31 Oct 134; 30 Oct 113; 29 Oct 112; 28 Oct 88.
- Night to 11 Nov (during the talks): not yet published at writing time; will be out on the morning of 11 Nov — update the series then.
- Daytime 10 Nov: drone strikes on Zaporizhzhia, Ladyzhyn (two killed), a commuter train in Sumy, energy facilities in Cherkasy region and Nizhyn (Ukrinform headlines, https://www.ukrinform.net/rubric-ato, read 2026-11-10T17:56Z). Ukrinform also carries an intelligence-source claim "Russia preparing strikes on food industry facilities in Ukraine" (same page).

## Base rate
- Own count, 14 nights to 28 Oct-10 Nov, sorted: 88, 112, 113, 128, 134, 162, 164, 172, 193, 227, 289, 310, 317, 433. At least 180 on 7 of 14 (0.50). Median 182.5. Threshold 180 sits between 172 and 193.
- Last 7 nights (4-10 Nov): at least 180 on 3 of 7 (310, 227, 317).
- Pattern: big nights have usually been followed by one or more smaller nights (433 → 193; 310 → 128; 227 → 172 → 164; 317 → 162), with 289 → 310 an exception.

## Schedule slip
- slip_class stats-release: 0.003 (`node scripts/refdata/slip.mjs`, 2026-11-10T17:56Z). Routine daily report; the summary has been published every morning in the series.

## Risks
- Whether Russia restrains or escalates around the end of the talks is unknown; no published indication either way.
- Daytime waves are reported separately and do not count.
- Summary start time can differ (e.g. 19:00 instead of 18:00); it still counts as the first morning summary.
- Composition: the 9 Nov summary counted S8000 Banderol/Dan-T jet munitions within the "strike UAV" total; the criterion takes the UAV total as the summary states it.

## Sources
- https://www.ukrinform.net/rubric-ato/4183161-adf-down-135-of-162-russian-drones-launched-against-ukraine-overnight.html
- https://www.ukrinform.net/rubric-ato (read 2026-11-10T17:56Z)
- data/dossiers/2026-11-12/ua-drones-12.md and data/dossiers/2026-11-11/ua-drones-11.md (series and URLs)
