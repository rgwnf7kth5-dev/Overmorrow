# ua-talks-date-announced-28

- **Claim:** By 23:59 Kyiv time on 28 October 2026, the Kremlin, the Ukrainian presidency or the US government (White House or State Department) officially announces a specific calendar date for the next trilateral US–Russia–Ukraine round of talks.
- **Criterion:** YES if, between 06:00 Kyiv time on 27 Oct 2026 and 23:59:59 Kyiv time on 28 Oct 2026 (UTC+2), an on-record official announces the specific calendar day on which the next trilateral US–Russia–Ukraine negotiating round (at any level, including technical or expert level) is to start. These officials count:
  - Russia: the Kremlin, meaning Putin, Peskov or Ushakov, or kremlin.ru.
  - Ukraine: President Zelensky, the Office of the President, or the head of Ukraine's negotiating delegation speaking officially.
  - United States: President Trump, the White House press office, the State Department, or special envoy Witkoff on record.

  A single day counts ("on 9 November"). So does a stated start day of a multi-day round ("9–10 November"). These do not count: "after 4 November", "around 10 November", "mid-November", "next week", or a range of possible days; reports citing unnamed sources; a venue without a date. NO if no such announcement is made in the window, including if the round is announced only later.
- **Deadline (event window end):** 2026-10-28T23:59:59+02:00 (resolves by 2026-10-29T05:00:00+01:00)
- **Written at:** 2026-10-26T19:25:00+01:00

## Schedule
- **No date is official.** Meduza (citing Ukrainska Pravda): "Neither the date nor the location of the talks has been officially announced yet." Source: https://meduza.io/en/news/2026/10/26/when-you-have-no-electricity-water-or-heating-every-day-matters-ukraine-wants-to-move-up-trilateral-talks-with-russia-and-the-u-s-by-a-week (published 2026-10-26T14:11Z; quote from the desk sweep watch_b.json, WebFetch refused for this agent). Mezha, also citing Ukrainska Pravda: https://mezha.net/eng/news/mezha-ceb94dd553cc4d83460a4cfb_ukraine_wants_to (published 2026-10-26 12:49 Kyiv / 10:49Z, read 2026-10-26T18:12Z). The round is planned for Abu Dhabi "around November 10, after the US midterm elections". Kyiv and Washington want it "at least a week earlier". As of the evening of 25 Oct, "Russia had not confirmed a date change". The page cites Ukrainska Pravda and anonymous sources.
- **Ushakov (Kremlin) on record:** Russia is ready to resume trilateral talks "after November 4". He called them "merely preliminary, expert-level contacts". The venue is not decided; the options are Abu Dhabi, elsewhere in the Middle East, or European cities. Trump said the talks would happen "soon", with no schedule. Source: Bastille Post (Xinhua copy), https://www.bastillepost.com/global/article/6289208-russia-us-ukraine-expected-to-hold-trilateral-talks-in-november (published 2026-10-26 05:10 UTC+8, read 2026-10-26T18:12Z).
- **TASS press review (Izvestia), 26 Oct:** "The next round of talks will take place after November 4, most likely in Abu Dhabi." Nezavisimaya Gazeta, citing Ushakov, gives "around November 10-19" and calls the meeting "exploratory". Switzerland is ready to host. Source: https://tass.com/pressreview/2207699 (dated 2026-10-26, no time; read 2026-10-26T18:13Z).

## Facts
- **Zelensky (25 Oct):** the three parties plan technical-level working talks in November. They are to prepare future leader-level talks, with a focus on energy infrastructure and a Black Sea ceasefire (Bastille Post, above).
- **Zelensky's red lines:** on 25–26 Oct he said Ukraine won't discuss limits on its armed forces or neutrality, and he seeks a meeting with Putin. Source: Guardian war briefing, https://www.theguardian.com/world/2026/oct/26/ukraine-war-briefing-trilateral-us-ukraine-russia-talks-restart-november (published 2026-10-26 01:27 GMT; taken from the desk sweep world.json, not re-opened by this agent).
- **Peskov, 26 Oct briefing:** listed "a decision on the resumption of trilateral talks". He said this "does not imply any restrictions on combat operations". Source: https://tass.com/politics/2207939 (published 2026-10-26 12:30Z per desk sweep watch_b.json; WebFetch was refused for this agent, so not re-read).
- **Ukraine's push for an earlier date:** a Ukrainska Pravda source on Zelensky's team: "in December, every week will matter. When you have no electricity, water or heating, every day counts" (mezha.net, above).
- **Europeans at the table:** Ukraine wants Europeans in Abu Dhabi; Russia reportedly does not want them at the first meeting (mezha.net, above). This is a possible point of delay.
- **112.ua (citing Espreso):** Peskov "confirmed that the next Russia–Ukraine–US meeting will take place as planned", with Abu Dhabi as the venue. No specific date is given; the round is expected "in the first half of November". Source: https://112.ua/en/rosia-gotova-vidnoviti-tristoronni-peregovori-z-ukrainou-ta-ssa-pisla-4-listopada-2023-roku-193713 (published "yesterday, 14:00", i.e. about 25 Oct; read 2026-10-26T18:12Z). The headline wrongly says "2023"; this is a page error.
- **US midterms:** they are on 3 Nov, and US-side scheduling is tied to "after the midterms" (mezha.net, above).
- **Oleshky / Alyoshki local ceasefire:** due to take effect on the morning of 27 Oct, and described as a test that could help restart the talks (TASS press review, above). The humanitarian operation is planned for 29 Oct (data/dossiers/2026-10-28/ua-oleshky-ceasefire-starts.md).
- **Earlier rounds:** previous trilateral rounds were held in Abu Dhabi (from January 2026) and in Switzerland (the most recent host, per TASS press review). Earlier Abu Dhabi rounds were typically dated publicly only a few days ahead; this is from search results, e.g. https://www.pravda.com.ua/eng/news/2026/01/28/8018265, not opened.

## Base rate
- **Class unscheduled-announcement-within-one-day** (pipeline/reference-classes.json): "An unscheduled announcement or decision (date set, decree, levy, round of talks) is made within a one-day window". The base rate is null; the own record is 1 yes / 9 no. Our window is about 1.75 days.
- **Context:** the planned round is about 12–14 days away (around 10 Nov). Official dates for such rounds have usually come within the last week before them. This is my own impression, not counted.

## Schedule slip
- **Class negotiation-round:** 0.300 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`). This applies to the round itself, not to the announcement.
- **Signs of movement:** Kyiv and Washington are pushing to move the round earlier by a week (around 3 Nov), while Moscow says "after 4 November". The date is contested, which can either speed up a fixed announcement (a compromise date) or delay it.

## Risks
- **Officials stay vague:** they keep saying "after 4 November" or "mid-November" without naming a day. This is NO.
- **Unofficial leaks:** a date leaks via Axios, Ukrainska Pravda or RBC citing sources, but no on-record confirmation follows. This is NO.
- **Ambiguous phrasing:** Zelensky names a date in an evening address as "planned for the 10th". That counts if it is a specific day; check the wording.
- **Range of days:** Ushakov says "on 10 or 11 November". That is a range and does not count.

## Sources
- https://mezha.net/eng/news/mezha-ceb94dd553cc4d83460a4cfb_ukraine_wants_to
- https://www.bastillepost.com/global/article/6289208-russia-us-ukraine-expected-to-hold-trilateral-talks-in-november
- https://tass.com/pressreview/2207699
- https://112.ua/en/rosia-gotova-vidnoviti-tristoronni-peregovori-z-ukrainou-ta-ssa-pisla-4-listopada-2023-roku-193713
- https://www.theguardian.com/world/2026/oct/26/ukraine-war-briefing-trilateral-us-ukraine-russia-talks-restart-november (from sweep, not re-opened)
- https://tass.com/politics/2207939 (WebFetch refused; fact from sweep)
- https://meduza.io/en/news/2026/10/26/when-you-have-no-electricity-water-or-heating-every-day-matters-ukraine-wants-to-move-up-trilateral-talks-with-russia-and-the-u-s-by-a-week (WebFetch refused; quote from desk sweep)
- data/dossiers/2026-10-28/ua-oleshky-ceasefire-starts.md
