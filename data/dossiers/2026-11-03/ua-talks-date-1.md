# ua-talks-date-1
- **Claim:** By 23:59 Kyiv time on 2 November 2026, the US, Russian or Ukrainian government officially announces the date of the next round of trilateral talks in Abu Dhabi.
- **Criterion:** YES if between 00:00 Kyiv time on 1 Nov and 23:59 Kyiv time (EET) on 2 Nov 2026 a US, Russian or Ukrainian government official (White House, State Department, a named envoy such as Witkoff; the Kremlin incl. Peskov, or the Russian MFA; Zelensky, his office, the MFA or the chief negotiator) publicly states a specific calendar date or dates for the next round of US–Russia–Ukraine talks in Abu Dhabi. "In the coming days", "mid-November" and unnamed sources do not count. NO otherwise.
- **Event window:** 2026-11-01T00:00:00+02:00 to 2026-11-02T23:59:00+02:00 (Europe/Kyiv). Evidence read at 2026-11-03T04:00+01:00.
- **Written at:** 2026-10-31T18:25Z. Read times between 17:30Z and 18:00Z on 31 Oct.

## Schedule
- No date has been set. Zelensky (28 Oct, The Hague): "We need to have this meeting ... between Nov. 6 and 10". He said Washington still had to confirm a date and that he expected it around 4 Nov, the day after the US midterms: "We are waiting for the American side, I think that they'll be ready with all the answers after the elections." The venue "could still change depending on the situation in the Middle East." Source: Kyiv Independent https://kyivindependent.com/zelensky-expects-trilateral-peace-talks-in-abu-dhabi-by-nov-10-but-no-firm-date-set/ (published 2026-10-28 17:54, updated 19:18, read 2026-10-31T17:35Z).

## Facts
- **Kremlin:** Ushakov said Europe would not be invited to the Abu Dhabi trilateral talks "next month". The Kremlin has not confirmed a timeline (Kyiv Independent, above).
- **Russian MFA:** Ryabkov, via TASS, said "At this stage it is premature to talk about the talks ... Overall, we are still in the preparation phase" (back-translated from Czech). Ushakov warned that large Ukrainian attacks around Russia's 4 Nov holiday would affect Moscow's stance on resuming the talks. ČT24 says the meeting was originally tentatively planned for late November. Source: ČT24 https://ct24.ceskatelevize.cz/clanek/svet/rusko-k-jednacimu-stolu-nespecha-kyjev-chce-zatlacit-do-kouta-mini-expert-379134 (published about 12 h before reading, i.e. about 2026-10-31 06:00Z; read 2026-10-31T17:40Z).
- **Peskov, 30 Oct:** asked about Trump's announcement of a Putin–Trump–Zelensky contact, he said "We know nothing about it." Source: Xinhua https://english.news.cn/europe/20261031/9d1da041e8364f06a0ce9e0b03e764aa/c.html (published 2026-10-31 09:48, read 2026-10-31T17:36Z).
- **Running notes (desk file running.json, from ČT24, 31 Oct):**
  - The meeting is "agreed in principle" (Ryabkov).
  - Zelensky said it could happen as early as 10 Nov. Kyiv will wait until after the US vote.
  - Witkoff met Putin on 21 Oct.
- **Precedent for short notice:** on 2 Feb 2026 Peskov announced that the next Abu Dhabi round would take place on 4–5 Feb, two days ahead. The round had been planned for 1 Feb and was delayed "to coordinate the schedules". The first rounds were on 23–24 Jan 2026. Source: Politis https://www.en.politis.com.cy/globe/globe-wide-world/983997/kremlin-confirms-zelenskyy-statement-on-abu-dhabi-trilateral-talks (published 2026-02-02 14:26, read 2026-10-31T17:45Z).
- **US side:** no US official has given a date. Zelensky expects US answers after the 3 Nov midterms (Kyiv Independent, above). Weekend of 31 Oct–1 Nov: the Oleshky local truce expires at 22:59 on 1 Nov (112.ua, via world_candidates.json: https://112.ua/en/evakuacia-ziteliv-olesok-zaversilasa-uspisno-ludi-riznogo-viku-ta-domasni-tvarini-v-bezpeci-195123, published 2026-10-31 18:42; not re-read).
- Search for news on 31 Oct (one search, 2026-10-31T17:42Z) found no new date statement.

## Base rate
- Class `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null; own record 1 YES / 18 NO.

## Schedule slip
- slip_class `none`. `node scripts/refdata/slip.mjs none` returned "unknown class none" (2026-10-31T18:00Z). No scheduled event is involved.
- Signs that a date could still come early:
  - Zelensky's 6–10 Nov window means a date would have to be fixed within days.
  - The February precedent shows the Kremlin naming dates two days ahead.
- Signs against an announcement on 1–2 Nov:
  - Kyiv says it is waiting for the US after 3 Nov.
  - Ryabkov says it is "premature".
  - Ushakov ties the talks to Ukrainian conduct around 4 Nov.
  - The venue may change because of the Gulf situation and possible US strikes on Iran after the midterms.

## Risks
- Zelensky speaks often. A remark such as "on 9 November in Abu Dhabi" made in an evening address would count, even if the US or Russia does not confirm it.
- A date for a different venue (e.g. Istanbul or Riyadh) does not count under the criterion ("in Abu Dhabi"). A date given only by unnamed sources (Axios, Reuters "officials said") does not count.
- An ambiguous phrase such as "next Monday" is arguably a specific date. The resolver would have to decide.

## Sources
- https://kyivindependent.com/zelensky-expects-trilateral-peace-talks-in-abu-dhabi-by-nov-10-but-no-firm-date-set/
- https://ct24.ceskatelevize.cz/clanek/svet/rusko-k-jednacimu-stolu-nespecha-kyjev-chce-zatlacit-do-kouta-mini-expert-379134
- https://english.news.cn/europe/20261031/9d1da041e8364f06a0ce9e0b03e764aa/c.html
- https://www.en.politis.com.cy/globe/globe-wide-world/983997/kremlin-confirms-zelenskyy-statement-on-abu-dhabi-trilateral-talks
- Search results only (fetches failed): pravda.com.ua 2026/10/28/8060119 ("Zelenskyy: We expect trilateral meeting ... by 10 November"); ukranews 1183865 ("Russia is serious about the negotiations in Abu Dhabi in November"); ukranews 1182816 and kurs.com.ua 1485210 ("Kremlin named possible venue"); charter97 2026/10/27/703337
