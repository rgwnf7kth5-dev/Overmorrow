# ua-delegation-1
- **Claim:** By 23:59 Kyiv time on 5 November 2026, Ukraine publicly names the head of its delegation to the Abu Dhabi talks of 10-11 November.
- **Criterion:** YES if between 00:00 Kyiv time on 4 Nov and 23:59 Kyiv time on 5 Nov 2026 President Zelensky, his office, the National Security and Defense Council, a presidential decree or the person named states on the record who will lead Ukraine's delegation at the trilateral US-Russia-Ukraine talks in Abu Dhabi, as reported by Interfax-Ukraine, Ukrinform or Kyiv Independent. Reports citing unnamed sources, and delegations to other meetings such as the White House meeting hosted by Melania Trump or the Brussels meeting, do not count. NO if Ukraine names no head of this delegation on the record in the window.
- **Deadline:** 23:59 Kyiv time on 5 Nov 2026
- **Written at:** 2026-11-03T18:15Z. Read times as stated.

## Schedule
- Peskov confirmed talks in Abu Dhabi on 10-11 Nov — https://www.al-monitor.com/originals/2026/11/kremlin-confirms-trilateral-ukraine-peace-talks-abu-dhabi-next-week (2026-11-03, read 2026-11-03T17:55Z). Witkoff announced them — https://kyivindependent.com/witkoff-reveals-location-date-for-new-trilateral-peace-deal-negotiations/ (published 2026-11-03 01:51 Kyiv, read 2026-11-03T18:03Z) "post-war security arrangements, de-escalation, humanitarian efforts, and next steps toward peace"
- No primary source gives a date for naming Ukraine's delegation.

## Facts
- Russia has already named its lead: Peskov said Medinsky continues as chief negotiator. This was before the window, so only Ukraine's naming is open — https://www.themoscowtimes.com/2026/11/03/us-mediated-ukraine-peace-talks-to-resume-in-abu-dhabi-next-week-a94160 (2026-11-03, read 2026-11-03T17:55Z) "chief negotiator"
- A senior US official told Reuters, as relayed, that Witkoff and Kushner are expected for the US — Moscow Times, as above.
- Neither report shows Ukraine confirming or naming a head; none of the Interfax-Ukraine headlines read on 3 Nov does.
- Precedent, January: Zelensky approved the delegation headed by Umerov on the day of the talks — https://www.ukrinform.net/rubric-polytics/4083503-zelensky-approves-composition-of-ukrainian-delegation-for-talks-in-abu-dhabi.html (published 2026-01-23 13:28, read 2026-11-03T18:03Z) "will take part today in talks"; 10-member delegation by decree — https://www.kyivpost.com/amp/post/68659 (read 2026-11-03T18:03Z).
- Umerov spoke for Ukraine in the February Abu Dhabi round and named the delegation for Geneva — https://www.kyivpost.com/topic/umerov?page=1 (read 2026-11-03T18:03Z). Same listing, 3 Aug 2026: he was reported appointed head of Foreign Intelligence, with Klymenko taking the NSDC post; this was not checked against the full article.
- Other meetings that do not count: Ukrainian teams in Brussels on 4 Nov with the US, Europe and NATO on recovery and guarantees — https://en.interfax.com.ua/news/general/1230572.html (published 2026-11-03 16:11, read 2026-11-03T18:08Z) "Tomorrow in Brussels our teams will also be there"; the Commission listed Ukraine, the US, France, Germany, the UK, NATO and the World Bank for its meeting that day.
- Arakhamia is to lead Ukraine's delegation at Melania Trump's White House meeting, per TSN — https://en.interfax.com.ua/news/general/1230767.html (published 2026-11-03 19:29, read 2026-11-03T18:08Z).

## Base rate
- Class `unscheduled-announcement-within-one-day`: base_rate null, own record 3 YES / 27 NO (pipeline/reference-classes.json). The window here is two days.

## Schedule slip
- slip_class `none`: `node scripts/refdata/slip.mjs none` returned "unknown class none" (run 2026-11-03T18:00Z). No scheduled event. For the talks themselves `negotiation-round` is 0.069 (`node scripts/refdata/slip.mjs negotiation-round`, 2026-11-03T18:00Z), which does not apply to the naming.

## Risks
- The January precedent was naming on the day; this window closes five days before the talks.
- Zelensky speaks daily and may name a lead in passing; a question at a press conference could settle it early.
- "Umerov will report on preparations" is not a naming; the statement must say who leads the delegation.
- The talks could move, which would not by itself change the claim.

## Sources
- https://www.themoscowtimes.com/2026/11/03/us-mediated-ukraine-peace-talks-to-resume-in-abu-dhabi-next-week-a94160
- https://www.al-monitor.com/originals/2026/11/kremlin-confirms-trilateral-ukraine-peace-talks-abu-dhabi-next-week
- https://kyivindependent.com/witkoff-reveals-location-date-for-new-trilateral-peace-deal-negotiations/
- https://kyivindependent.com/
- https://www.ukrinform.net/rubric-polytics/4083503-zelensky-approves-composition-of-ukrainian-delegation-for-talks-in-abu-dhabi.html
- https://www.kyivpost.com/amp/post/68659
- https://www.kyivpost.com/topic/umerov?page=1
- https://en.interfax.com.ua/news/general.html
- https://en.interfax.com.ua/news/general/1230572.html
- https://en.interfax.com.ua/news/general/1230767.html
- https://en.interfax.com.ua/news/general/1230544.html
