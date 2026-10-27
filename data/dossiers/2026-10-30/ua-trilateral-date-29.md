# ua-trilateral-date-29

- **Claim:** By 23:59 Kyiv time on 29 October 2026, the Kremlin, the White House or the Ukrainian presidency publicly announces a specific calendar date for the next trilateral US–Russia–Ukraine round of talks.
- **Criterion:** YES if, between 00:00 Kyiv time on 28 Oct and 23:59:59 Kyiv time on 29 Oct 2026 (UTC+2), an on-record official announces the specific calendar day on which the next trilateral US–Russia–Ukraine negotiating round (at any level, including technical or expert) is to start. Officials who count: Russia — Putin, Peskov, Ushakov or kremlin.ru; Ukraine — Zelensky, the Office of the President, or the head of Ukraine's delegation speaking officially; US — Trump, the White House press office, the State Department, or special envoy Witkoff on record. A single day ("on 11 November") or the stated start day of a multi-day round ("11–12 November") counts. Not counting: "after 10 November", "around 10 November", "mid-November", "next week", a range of possible days, reports citing unnamed sources, a venue without a date. NO if no such announcement is made in the window.
- **Event window:** 2026-10-28T00:00:00+02:00 to 2026-10-29T23:59:59+02:00 (Europe/Kyiv)
- **Deadline:** 2026-10-29T23:59:59+02:00; resolves by 2026-10-31T05:00:00+01:00
- **Written at:** 2026-10-27T18:35:00Z

## Schedule
- No scheduled step. As of 27 Oct no date is set. APA (27 Oct): Peskov said the date for the trilateral talks in Abu Dhabi "has not yet been determined" (paraphrase); Ushakov said the meeting could take place after 10 November, called it preliminary and urged lowered expectations (paraphrase) — https://en.apa.az/cis-countries/kremlin-date-for-trilateral-talks-on-ukraine-in-abu-dhabi-not-yet-determined-532465 (published 2026-10-27 14:02 UTC+4, read 2026-10-27T18:04Z)
- This continues claim ua-talks-date-announced-28 (window to 28 Oct); see data/dossiers/2026-10-29/ua-talks-date-announced-28.md.

## Facts
- **Drift of the indicated timing:** 21 Oct, UNN: Ushakov earlier said Russia was ready to resume trilateral talks "in the first ten days of November", at "the expert level"; "Putin will determine the composition of the delegation", possibly incl. military personnel and Medinsky — https://unn.ua/en/news/a-new-russia-us-ukraine-meeting-may-take-place-in-abu-dhabi-putins-aide-outlined-the-topics-and-possible-composition-of-the-delegation (published 2026-10-21 16:01 Kyiv, read 2026-10-27T18:05Z)
- 22 Oct, Azernews: Ushakov said talks "may take place in early November" (paraphrase); Peskov: "For now, we're talking about Abu Dhabi", urged reporters not to "rush ahead" — https://www.azernews.az/region/266020.html (published 2026-10-22 16:53 UTC+4, read 2026-10-27T18:05Z)
- 26 Oct, Ushakov via Xinhua/Bastille Post: Russia ready to resume "after November 4", "merely preliminary, expert-level contacts" (28 Oct dossier).
- 26 Oct, mezha.net citing Ukrainska Pravda: round planned for Abu Dhabi "around November 10, after the US midterm elections"; Kyiv and Washington want it "at least a week earlier"; Russia had not confirmed a change (28 Oct dossier).
- 27 Oct: Ushakov "after 10 November" (APA, above) — later than the earlier "first ten days of November" and "after November 4".
- **US midterms on 3 Nov** — US-side timing tied to "after the midterms" (28 Oct dossier).
- **Agenda for Kyiv (Zelensky, 25 Oct):** technical-level talks in November, focused on energy infrastructure and a Black Sea ceasefire (28 Oct dossier, Bastille Post).
- **Context 27 Oct:** Finnish President Stubb and Norwegian PM Støre phoned Putin (first known direct contact since 2022), then Zelensky; AP: trilateral talks "expected in Abu Dhabi, UAE, in November" — https://www.ky3.com/2026/10/27/one-city-ceasefire-between-russia-ukraine-brokered-by-first-lady-melania-trump-is-effect/ (published 2026-10-27 06:07 CDT, read 2026-10-27T18:03Z)
- **Oleshky truce** in force since 27 Oct, described in Russian press as a test that could help restart the talks (28 Oct dossier, TASS press review).
- **Earlier rounds:** Abu Dhabi (from January 2026) and Switzerland (most recent host); earlier Abu Dhabi rounds were typically dated publicly only a few days ahead (28 Oct dossier; from search, not verified).

## Base rate
- **Class unscheduled-announcement-within-one-day** (pipeline/reference-classes.json): base_rate null, own record 1 yes / 11 no. This window is two days.
- With Ushakov now pointing to "after 10 November" (12+ days away), a date fixed 28–29 Oct would be earlier than the usual few-days-ahead pattern noted above (unverified pattern).

## Schedule slip
- **Class negotiation-round:** 0.164 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`) — applies to the round itself, not to the announcement.
- **Signs of movement:** Kremlin timing has drifted later (first ten days of Nov → after 4 Nov → after 10 Nov); Kyiv and Washington want it earlier; disagreement over Europeans at the table.

## Risks
- Officials stay vague ("after 10 November", "mid-November") — NO.
- A date leaks via Axios/Ukrainska Pravda/RBC citing sources with no on-record confirmation — NO.
- Zelensky says in an evening address that talks are "planned for the 11th" — counts only if it is a specific day; check wording.
- Ushakov or Peskov speaks at the Russia–Africa summit (28–29 Oct) press events; Kremlin officials will be in front of cameras both days, so an off-hand date is possible.

## Sources
- https://en.apa.az/cis-countries/kremlin-date-for-trilateral-talks-on-ukraine-in-abu-dhabi-not-yet-determined-532465
- https://unn.ua/en/news/a-new-russia-us-ukraine-meeting-may-take-place-in-abu-dhabi-putins-aide-outlined-the-topics-and-possible-composition-of-the-delegation
- https://www.azernews.az/region/266020.html
- https://www.ky3.com/2026/10/27/one-city-ceasefire-between-russia-ukraine-brokered-by-first-lady-melania-trump-is-effect/
- data/dossiers/2026-10-29/ua-talks-date-announced-28.md (mezha.net, Bastille Post, TASS press review, 112.ua facts carried over)
- Search results only (not opened): https://en.interfax.com.ua/news/general/1224138.html ; https://ukranews.com/en/news/1183033-talks-between-ukraine-the-u-s-and-russia-are-planned-for-the-first-half-of-november-in-abu-dhabi
