# ua-talks-date-2
- **Claim:** By 23:59 Kyiv time on 3 November 2026, the US, Russian or Ukrainian government officially announces the date of the next round of trilateral US–Russia–Ukraine talks in Abu Dhabi.
- **Criterion:** YES if between 07:00 Kyiv time on 2 Nov and 23:59 Kyiv time (EET) on 3 Nov 2026 an official of the US, Russian or Ukrainian government publicly states a specific calendar date or dates for the next round of US–Russia–Ukraine talks in Abu Dhabi. Counts: the White House, State Department or a named envoy such as Witkoff; the Kremlin, including Peskov or Ushakov, or the Russian MFA; Zelensky, his office, the MFA or the chief negotiator. "In the coming days", "mid-November", "after 10 November" and unnamed sources do not count. NO otherwise.
- **Event window:** 2026-11-02T07:00:00+02:00 to 2026-11-03T23:59:00+02:00 (Europe/Kyiv). Evidence read at 2026-11-04T04:00+01:00.
- **Written at:** 2026-11-01T18:25Z. Read times between 17:55Z and 18:15Z on 1 Nov unless stated.
- **Carried over:** ua-talks-date-1 (window 1–2 Nov) is still open. Nothing found by 18:15Z on 1 Nov shows a date was given.

## Schedule
- No date is set. Zelensky (28 Oct): "We need to have this meeting ... between Nov. 6 and 10." He expects US answers "after the elections", around 4 Nov — Kyiv Independent https://kyivindependent.com/zelensky-expects-trilateral-peace-talks-in-abu-dhabi-by-nov-10-but-no-firm-date-set/ (published 2026-10-28 17:54, read 2026-10-31T17:35Z).

## Facts by actor
### Russia
- **Ushakov, 1 Nov:** the next round "by se mělo v první fázi uskutečnit v třístranném formátu" (should in its first phase be trilateral, Interfax via ČTK). He gave no date and no venue — ČTK https://www.ceskenoviny.cz/zpravy/putinuv-poradce-kreml-chce-prvni-kolo-jednani-o-ukrajine-v-tristrannem-formatu/2895696 (published 2026-11-01 11:30, read 2026-11-01T18:00Z) "alespoň první kola jednání konala v třístranném formátu".
- **Earlier Kremlin line:** Peskov (27 Oct): date "not yet determined". Ushakov: the round could take place after 10 Nov — apa.az https://en.apa.az/cis-countries/kremlin-date-for-trilateral-talks-on-ukraine-in-abu-dhabi-not-yet-determined-532465 (via data/planning/agenda.json, not re-read). Ryabkov: "premature to talk about the talks" (ČT24, 31 Oct, in the 3 Nov dossier). Ushakov tied Moscow's stance to Ukrainian strikes around Russia's 4 Nov holiday (same).
- **Precedent:** on 2 Feb 2026 Peskov announced the 4–5 Feb Abu Dhabi round two days ahead — Politis https://www.en.politis.com.cy/globe/globe-wide-world/983997/kremlin-confirms-zelenskyy-statement-on-abu-dhabi-trilateral-talks (published 2026-02-02 14:26, read 2026-10-31T17:45Z).
### Ukraine
- **Zelensky, 23 Oct:** "The plan is to meet in the first half of November, as soon as possible" — Interfax-Ukraine https://en.interfax.com.ua/news/general/1225475.html (published 2026-10-23 20:22, read 2026-11-01T18:10Z).
- **Zelensky, 28 Oct:** "Today, Abu Dhabi depends on the American side." Ukraine and Russia have confirmed participation — Censor.NET https://censor.net/en/news/4030741/trilateral-talks-between-ukraine-russia-and-the-us-depend-on-washington (published 2026-10-28 10:00, read 2026-11-01T18:11Z).
- On 1 Nov the ČTK homepage led with Zelensky on Russian losses in October, not with a talks date (sweep/running.md, ČTK homepage read about 18:40 CET).
### United States
- No US official has given a date. 3 Nov is Election Day, and the White House focus is on the midterms and on Iran (sweep/world.md). Speaker Johnson said only that the US is "close to" trilateral talks (Censor.NET, above).

## Base rate
- Class `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null; own record 2 YES / 20 NO. The window here is about two days (2 Nov 07:00 to 3 Nov 23:59).

## Schedule slip
- slip_class `none`. `node scripts/refdata/slip.mjs none` returned "unknown class none" (2026-11-01T18:12Z). For the talks themselves the class would be `negotiation-round` (0.069), which does not apply to an announcement.
- **For a date on 2–3 Nov:** Zelensky's 6–10 Nov window would need a date within days. Russia named dates two days ahead in February. Zelensky speaks daily and could name a date himself.
- **Against:** Kyiv says the decision is Washington's, and the US is not expected to answer before the 3 Nov vote. The Kremlin speaks of "after 10 November", so a date would more likely come later. A venue change is possible because of the Gulf war.

## Risks
- A date given only by unnamed officials (Axios, Reuters) does not count. Nor does a date for another venue (e.g. Geneva or Istanbul).
- A date may already be given on 1 Nov or early on 2 Nov, before the window. The claim would then be NO, because the window requires a new statement. A repeat of that date in the window does count.
- "Next week" or "on Monday" is ambiguous. The resolver must decide whether it is a specific date.

## Sources
- https://www.ceskenoviny.cz/zpravy/putinuv-poradce-kreml-chce-prvni-kolo-jednani-o-ukrajine-v-tristrannem-formatu/2895696
- https://kyivindependent.com/zelensky-expects-trilateral-peace-talks-in-abu-dhabi-by-nov-10-but-no-firm-date-set/
- https://en.interfax.com.ua/news/general/1225475.html
- https://censor.net/en/news/4030741/trilateral-talks-between-ukraine-russia-and-the-us-depend-on-washington
- https://www.en.politis.com.cy/globe/globe-wide-world/983997/kremlin-confirms-zelenskyy-statement-on-abu-dhabi-trilateral-talks
- https://en.apa.az/cis-countries/kremlin-date-for-trilateral-talks-on-ukraine-in-abu-dhabi-not-yet-determined-532465 (via agenda.json)
- data/dossiers/2026-11-03/ua-talks-date-1.md
- Search results only: pravda.com.ua 2026/10/28/8060119; 24tv.ua "talks in Abu Dhabi: Zelenskyy announces when" (undated)
