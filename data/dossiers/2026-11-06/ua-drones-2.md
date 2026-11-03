<!-- Claim rewritten from ua-drones-1 on 3 Nov 2026 after round one (see the planning file). -->
# ua-drones-2
- **Claim:** The Ukrainian Air Force reports that Russia launched at least 150 drones at Ukraine in the night of 4-5 November 2026.
- **Criterion:** YES if the Ukrainian Air Force's first morning summary on 5 Nov 2026, covering the overnight attack that normally counts from 18:00 Kyiv time on 4 Nov, states that Russia launched at least 150 drones (strike drones and decoys together, missiles not counted), as published on the Air Force's Telegram channel or repeated by Kyiv Independent, Ukrinform or Interfax-Ukraine. Separate daytime reports and later corrections do not count. NO if that summary gives fewer than 150 drones.
- **Deadline:** first Air Force summary on the morning of 5 Nov 2026
- **Written at:** 2026-11-03T18:15Z. Read times as stated.

## Schedule
- The Air Force publishes a summary each morning. Examples: 01.11 08:23 and 02.11 07:56 on Ukrinform, 30.10 09:37 on Interfax-Ukraine, each counting from 18:00 the evening before.

## Facts
- Night to 29 Oct: 112 drones, 97 downed — https://www.pravda.com.ua/eng/news/2026/10/29/8060197/ (2026-10-29; search-result headline only, page not retrievable, read 2026-11-03T18:00Z) "attacks Ukraine with 112 drones"
- Night to 30 Oct: 113 strike UAVs plus 4 Kh-59/69 and ballistic missiles — https://en.interfax.com.ua/news/general/1228505.html (published 2026-10-30 09:37, read 2026-11-03T18:10Z) "113"
- Night to 31 Oct: not found.
- Night to 1 Nov: 433 drones, 371 downed, from 18:00 on 31 Oct to 07:30 — https://www.ukrinform.net/rubric-ato/4180165-air-defense-neutralizes-371-of-433-russian-drones-launched-against-ukraine-overnight.html (published 2026-11-01 08:23, read 2026-11-03T18:05Z) "371 of 433"
- Night to 2 Nov: 193 drones, 154 downed, from 18:00 on 1 Nov — https://www.ukrinform.net/rubric-ato/4180368-air-defenses-down-154-out-of-193-drones-used-by-russia-to-attack-ukraine-since-evening.html (published 2026-11-02 07:56, read 2026-11-03T18:05Z) "154 out of 193"
- Night to 3 Nov: 365 missiles and drones together, aimed at the energy grid, 309 destroyed or jammed; the drone-only figure was not read — https://www.pravda.com.ua/eng/news/2026/11/03/8060994/ and https://www.pravda.com.ua/eng/news/2026/11/03/8060979/ (2026-11-03; search-result headlines only, read 2026-11-03T18:00Z) "365 missiles and drones"
- Daytime waves are reported separately: 171 drones and 10 missiles on 2 Nov, 06:30-19:00 — https://www.ukrinform.net/rubric-ato/4180645-adf-neutralizes-139-drones-eight-banderol-missiles-during-russian-daytime-attack.html (published 2026-11-02 20:22, read 2026-11-03T18:10Z); 81 drones on 3 Nov, 06:30-19:00 — https://en.interfax.com.ua/news/general/1230782.html (published 2026-11-03 19:55, read 2026-11-03T18:10Z).
- Sorted known nights: 112, 113, 193, up to 365 less missiles, 433.

## Base rate
- Own count, thin: of five nights with a figure, 1 Nov and 3 Nov clearly reach 200 (3 Nov inferred from the total with missiles), 2 Nov is just under at 193, and 29-30 Oct are well under. The median of these five is 193. No longer series was retrievable.
- No class in pipeline/reference-classes.json applies.

## Schedule slip
- slip_class `none`: `node scripts/refdata/slip.mjs none` returned "unknown class none" (run 2026-11-03T18:00Z). No scheduled event. The summary itself appears daily.

## Risks
- Large attacks come in pulses, a few days apart, and daytime waves can move drones out of the night count.
- First summaries are preliminary; the criterion uses the first one.
- The 18:00 start is customary; a summary with a different start still counts as the night's figure.
- Air Force wording may separate types; all drone types are added, missiles excluded.
- The sample is short and from an escalating week; it says little about levels earlier in October.

## Sources
- https://www.ukrinform.net/rubric-ato/4180165-air-defense-neutralizes-371-of-433-russian-drones-launched-against-ukraine-overnight.html
- https://www.ukrinform.net/rubric-ato/4180368-air-defenses-down-154-out-of-193-drones-used-by-russia-to-attack-ukraine-since-evening.html
- https://www.ukrinform.net/rubric-ato/4180645-adf-neutralizes-139-drones-eight-banderol-missiles-during-russian-daytime-attack.html
- https://en.interfax.com.ua/news/general/1228505.html
- https://en.interfax.com.ua/news/general/1230782.html
- https://www.ukrinform.net/rubric-ato ; https://en.interfax.com.ua/news/general.html (listings)
- https://www.pravda.com.ua/eng/news/2026/11/03/8060994/ ; https://www.pravda.com.ua/eng/news/2026/11/03/8060979/ ; https://www.pravda.com.ua/eng/news/2026/10/29/8060197/ (not retrievable, headlines from search)
