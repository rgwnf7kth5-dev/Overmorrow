# ua-delegation-3
- **Claim:** Between 06:30 Kyiv time on 7 November and 23:59 Kyiv time on 8 November 2026, Ukraine publicly names the head of its delegation to the Abu Dhabi talks of 10-11 November.
- **Criterion:** YES if between 06:30 Kyiv time on 7 Nov (05:30 Prague) and 23:59 Kyiv time on 8 Nov 2026 President Zelensky, his office (including its head or a named presidential adviser), the National Security and Defense Council, a presidential decree or the person named states on the record who will lead Ukraine's delegation at the trilateral US-Russia-Ukraine talks in Abu Dhabi, as reported by Interfax-Ukraine, Ukrinform or Kyiv Independent. Reports citing unnamed sources, statements naming only members but not the head, and delegations to other meetings do not count. NO if no such statement is made in the window.
- **Deadline:** 2026-11-08T23:59:00+02:00; resolver reads 2026-11-09T05:00+01:00
- **Written at (UTC):** 2026-11-06T18:10Z. Read times as stated.
- Continues ua-delegation-1 and -2 (same wording, window moved). Changed from the brief's suggestion: the Russian side was named on 3 Nov (Medinsky, Kremlin), so a Kremlin naming or attendance claim is already decided; the Ukrainian head is open after a contradiction on 6 Nov.

## Schedule
- No scheduled announcement. Talks are set for 10-11 Nov in Abu Dhabi.

## Facts
- CBS, relayed by Interfax-Ukraine: Budanov, head of the President's Office, "will lead the Ukrainian delegation at the talks with the United States and Russia, which will take place on November 10-11 in Abu Dhabi", citing correspondent Aidan Stretch after a conversation with Budanov — https://en.interfax.com.ua/news/general/1232635.html (published 2026-11-06T19:08+02:00, read 2026-11-06T18:01Z)
- Same day, presidential adviser Lytvyn: "there had been a slip of the tongue, although he described it as 'not critical'"; "Budanov would join the delegation but would not lead it." No head is named in the text read — https://www.ukrinform.net/rubric-polytics/4182234-budanov-to-join-ukrainian-delegation-in-abu-dhabi-but-not-lead-it-presidential-adviser.html (published 2026-11-06T19:59+02:00, read 2026-11-06T18:06Z)
- Zelensky discussed preparations with NB8 leaders on 6 Nov: "we have conveyed our proposals regarding realistic potential outcomes to the U.S. side" — https://en.interfax.com.ua/news/general/1232650.html (published 2026-11-06T19:46+02:00, read 2026-11-06T18:01Z)
- Ukrainian agenda per adviser Leshchenko: end the war on the line of contact, sectoral ceasefires in energy and the Black Sea, prepare a leaders' meeting — https://www.ukrinform.net/rubric-polytics/4182072-preparation-for-leaders-meeting-sectoral-ceasefire-ukraine-outlines-agenda-for-abu-dhabi-talks.html (headline read 2026-11-06T18:05Z; details via work/scout-world.json)
- Umerov reported on security-guarantee talks in Brussels on 5 Nov — https://www.ukrinform.net/rubric-polytics/4181875-security-guarantees-for-ukraine-top-agenda-of-talks-in-brussels-umerov.html (headline read 2026-11-06T18:05Z)
- Russian side: Peskov named Medinsky, Putin's aide, as head of Russia's delegation on 3 Nov and confirmed participation — https://www.pravda.com.ua/eng/news/2026/11/03/8061009/ and https://novayagazeta.eu/articles/2026/11/03/medinskii-vnov-vozglavit-rossiiskuiu-delegatsiiu-na-peregovorakh-po-ukraine-news (search results, 2026-11-06T18:00Z; pages not opened)
- January precedent: decree No. 72/2026 approving the delegation, head Rustem Umerov, with Budanov, Arakhamia, Hnatov and others, published on the day talks began — https://www.ukrinform.net/rubric-polytics/4083503-zelensky-approves-composition-of-ukrainian-delegation-for-talks-in-abu-dhabi.html (published 2026-01-23T13:28+02:00, read 2026-11-06T18:01Z) "Head of the delegation Rustem Umerov"
- president.gov.ua refuses scripted reading (HTTP 403, 2026-11-06T18:05Z); whether a later decree changed the head was not checked there.

## Base rate
- Class unscheduled-announcement-within-one-day (pipeline/reference-classes.json): own record 5 yes, 48 no (0.094 per day, n=53); this window is about 1.7 days.
- Own series: ua-delegation-1 (4-5 Nov) resolved NO (data/resolutions/2026-11-06.json); ua-delegation-2 (6-7 Nov) is open; the CBS line on 6 Nov would have counted for it had it not been walked back (the resolver decides).

## Schedule slip
- slip_class `none` (no scheduled event). The talks themselves: negotiation-round 0.069 (`node scripts/refdata/slip.mjs negotiation-round`, 2026-11-06T18:06Z). A naming does not need the talks to happen.

## Risks
- The 6 Nov contradiction raises questions to Zelensky's office; a clarification naming the head may come quickly, possibly before the window opens (6 Nov evening), which would not count unless repeated in the window.
- January precedent: named on the day of talks, which here is 10 Nov.
- A statement that someone "will head the group" at a sub-level or a working group may be ambiguous; only the head of the delegation counts.

## Sources
- https://en.interfax.com.ua/news/general/1232635.html
- https://en.interfax.com.ua/news/general/1232650.html
- https://www.ukrinform.net/rubric-polytics/4182234-budanov-to-join-ukrainian-delegation-in-abu-dhabi-but-not-lead-it-presidential-adviser.html
- https://www.ukrinform.net/rubric-polytics/4182215-budanov-to-lead-ukrainian-delegation-at-talks-in-abu-dhabi.html
- https://www.ukrinform.net/rubric-polytics/4182072-preparation-for-leaders-meeting-sectoral-ceasefire-ukraine-outlines-agenda-for-abu-dhabi-talks.html
- https://www.ukrinform.net/rubric-polytics/4181875-security-guarantees-for-ukraine-top-agenda-of-talks-in-brussels-umerov.html
- https://www.ukrinform.net/rubric-polytics/4083503-zelensky-approves-composition-of-ukrainian-delegation-for-talks-in-abu-dhabi.html
- https://www.president.gov.ua/en/documents (403)
- data/dossiers/2026-11-08/ua-delegation-2.md ; data/resolutions/2026-11-06.json
