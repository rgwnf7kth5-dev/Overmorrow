# us-flights-17
- **Claim:** FlightAware counts at least 300 cancelled flights within, into or out of the United States on Monday 16 November 2026.
- **Criterion:** YES if FlightAware's figure "Total cancellations within, into, or out of the United States" for Monday 16 Nov 2026 is 300 or more, as shown on https://www.flightaware.com/live/cancelled/yesterday read between 12:00 and 23:59 UTC on Tue 17 Nov 2026 (or an Internet Archive snapshot of that page taken in that window); if that page cannot be read, the Monday 16 Nov US total attributed to FlightAware by AP, Reuters, CNN, CBS, NBC or ABC News. NO if that figure is below 300.
- **Event window:** 2026-11-16T00:00-06:00 to 2026-11-16T23:59-06:00 (America/Chicago; FlightAware's own day boundary applies)
- **Evidence expected:** FlightAware "today" page updates live on 16 Nov; final Monday figure on the "yesterday" page on 17 Nov. evidence_at 2026-11-17T08:00-06:00
- **Deadline (resolves by):** 2026-11-18T05:00+01:00
- **Written at:** 2026-11-14T18:10Z

## Schedule
- Not a scheduled event: the figure is a daily count published continuously by FlightAware (https://www.flightaware.com/live/cancelled/ ; /yesterday ; /tomorrow). Page read without problems on 2026-11-14T17:57Z; daily snapshots exist in the Internet Archive (CDX listing read 2026-11-14T17:59Z).

## Facts
- FAA halted all departures from the continental US for more than four hours from 15:54 EST Fri 13 Nov; Duffy blames a copper-to-fibre upgrade by contractor L3Harris after a router "started flooding other air traffic control systems"; no evidence of cyber-attack; disruption "expected to last for days" — https://www.bbc.com/news/articles/c6wy9lynq4qno (published 2026-11-14T08:42Z, modified 17:16Z, read 2026-11-14T17:57Z) "More than 3,500 flights were cancelled and more than 2,000 delayed in the US on Saturday, according to tracking website Flight Aware".
- Duffy (Fri night): "It's going to take us some time to unwind"; ripple effect "for a few days" — https://www.bbc.com/news/articles/cqx2wyvyr3zzo (published 2026-11-14T03:10Z, read 2026-11-14T17:58Z). Al Jazeera: Duffy expects operations "back up and operational as we come into the heat of travel during Thanksgiving"; "It's going to be slow" — https://www.aljazeera.com/news/2026/11/14/faa-ground-stop-lifted-why-were-us-flights-grounded-and-whats-next (published 2026-11-14T03:32Z, read 2026-11-14T17:58Z).
- FlightAware live, read 2026-11-14T17:57Z: Fri 13 Nov ("yesterday") US cancellations 9,183, US delays 7,450; Sat 14 Nov ("today", as of ~11:57 CST) US cancellations 4,458, US delays 4,219; Sun 15 Nov ("tomorrow") US cancellations so far 80 — https://www.flightaware.com/live/cancelled/yesterday ; /today ; /tomorrow.
- Normal-day level (FlightAware "yesterday" figure from Internet Archive snapshots, read 2026-11-14T18:00–18:04Z; the day each refers to depends on snapshot time and FlightAware's day boundary, so dates are approximate): 234, 111, 93, 102, 351, 123, 264, 1,143, 281, 143, 451 (mid/late Sep 2026); 107 (≈Sun 8 Nov), 122 (≈Mon 9 Nov), 117 (≈Tue 10 Nov), 98 (≈Wed 11 Nov), 1,022 (≈Thu 12 Nov), 9,161 (Fri 13 Nov, snapshot 14 Nov 14:02Z). Snapshots: https://web.archive.org/web/20261110140349/https://www.flightaware.com/live/cancelled/yesterday and others listed under Sources.
- Trump requested $30.1bn from Congress for ATC upgrades; Duffy warned a similar failure could recur without it (BBC above). GAO report in Sept warned about 1960s copper cables (Al Jazeera above).

## Base rate
- Class: ordinary (non-crisis) days with FlightAware US cancellations >= 300. Own count from 15 distinct archived daily figures (Sep and 8–12 Nov 2026, excluding 13 Nov): 4 of 15 (351, 1,143, 451, 1,022) = 0.27, n=15. Source: Internet Archive snapshots of flightaware.com/live/cancelled/yesterday (listed below).
- No sourced count for "day 4 after a nationwide ATC outage"; the Sunday pre-cancellation figure (80 as of Saturday midday) suggests airlines plan a near-normal Sunday.

## Schedule slip
- slip_class: none (a daily count always exists).

## Risks
- Weather (a storm or fog at a hub) or a repeat FAA/telecom failure could push Monday well above 300 regardless of the Friday outage; ordinary-day values above 300 occurred on ~1 day in 4.
- Crew and aircraft out of position could prolong airline-specific cancellations into Monday (the Saturday total was still about half of Friday's).
- FlightAware's day boundary (likely US Central or Eastern) and the "yesterday" page switching time: read the page in the stated window (12:00–23:59 UTC on 17 Nov) only.
- FlightAware may revise figures slightly; the criterion uses the value on the "yesterday" page in the window.
- If media report a figure "so far" during Monday, that is not the final daily total.

## Sources
- https://www.bbc.com/news/articles/c6wy9lynq4qno
- https://www.bbc.com/news/articles/cqx2wyvyr3zzo
- https://www.aljazeera.com/news/2026/11/14/faa-ground-stop-lifted-why-were-us-flights-grounded-and-whats-next
- https://www.flightaware.com/live/cancelled/ ; https://www.flightaware.com/live/cancelled/today ; https://www.flightaware.com/live/cancelled/yesterday ; https://www.flightaware.com/live/cancelled/tomorrow
- https://web.archive.org/cdx/search/cdx?url=flightaware.com/live/cancelled/yesterday (listing)
- Internet Archive snapshots of flightaware.com/live/cancelled/yesterday: 20260915004509, 20260916010903, 20260917004204, 20260918005503, 20260919005445, 20260920004318, 20260922001758, 20260923003913, 20260924002855, 20260925005803, 20260927235437, 20260928005635, 20261109204338, 20261110140349, 20261111140350, 20261112151805, 20261113140253, 20261114140208 (https://web.archive.org/web/<timestamp>/https://www.flightaware.com/live/cancelled/yesterday)
- WebSearch (2): post-ground-stop cancellations Sat/Sun (results only 2025 shutdown-era items, not used); Nov 14 2026 cancellations (same).

## Unreachable
- https://www.theguardian.com/world/2026/nov/14/faa-ground-stop-flights-resume-airport-chaos (client challenge page)
- https://www.cnbc.com/2026/11/13/faa-ground-stop.html (403, from sweep)

## Research step (14 Nov, after round one)
- FAA Administrator Bryan Bedford: air traffic should return to normal by the end of Sunday (ČTK citing Reuters/AP) — https://www.ceskenoviny.cz/zpravy/letovy-provoz-v-usa-se-podle-uradu-asi-vrati-k-normalu-behem-nedele/2901912 (published 2026-11-14 18:41 page time, read 2026-11-14T18:12Z) "Šéf FAA Bryan Bedford současně uvedl, že letový provoz by se měl vrátit k normálu do konce neděle." Same report: Delta, United, American cancelled about 20% of Saturday flights, JetBlue 40%.
- FlightAware live re-read 2026-11-14T18:10Z: Sat 14 Nov ("today") US cancellations 4,493; Sun 15 Nov ("tomorrow") US cancellations 80 (unchanged since 17:57Z) — https://www.flightaware.com/live/cancelled/today ; https://www.flightaware.com/live/cancelled/tomorrow. No page for Monday could be read (tab URL not found).
- Day boundary (own reading of Internet Archive snapshots, read 2026-11-14T18:11Z): the "yesterday" page snapshot at 2026-11-14T00:49Z (Fri 13 Nov evening in US time zones) still showed 1,024 (Thursday), while the 14:02Z snapshot showed 9,161 (Friday); snapshot 2026-11-10T00:51Z showed 107 (Sunday 8 Nov), 14:03Z showed 122 (Monday 9 Nov). So FlightAware's day follows US local time, not UTC; the switch is after 00:51Z (i.e. at a US midnight) — https://web.archive.org/web/20261114004927/https://www.flightaware.com/live/cancelled/yesterday ; https://web.archive.org/web/20261110005152/https://www.flightaware.com/live/cancelled/yesterday ; https://web.archive.org/web/20261110140349/https://www.flightaware.com/live/cancelled/yesterday
- Recent Monday figures (FlightAware "yesterday", archive): Mon 9 Nov 122 (snapshot 20261110140349); Mon 14 Sep 111 (snapshot 20260916010903); Mon 21 Sep 1,143 (snapshot 20260923003913) — https://web.archive.org/web/20260916010903/https://www.flightaware.com/live/cancelled/yesterday ; https://web.archive.org/web/20260923003913/https://www.flightaware.com/live/cancelled/yesterday (read 2026-11-14T18:11Z).
