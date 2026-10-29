# ua-oleshky-extend-31
- **Claim:** By 23:59 Kyiv time on Saturday 31 October 2026, Russia, Ukraine or the US mediator publicly announces that the Oleshky local truce is extended beyond its scheduled expiry at 22:59 on 1 November.
- **Criterion:** YES if, between 00:00 on 30 Oct and 23:59:59 on 31 Oct 2026 (Europe/Kyiv), at least one of the following publicly announces that the Oleshky ceasefire regime will continue past 22:59 Kyiv time on 1 Nov 2026 (for any length of time, including a new or renewed truce covering Oleshky that starts at or before expiry):
  - an official of the Ukrainian government, presidency, General Staff or parliament, or ombudsman Lubinets;
  - an official of the Russian government, Kremlin, MoD or MFA, or ombudswoman Lantratova;
  - the White House, the State Department, the UN or the ICRC.

  NO if no such announcement is made in the window. None of the following counts:
  - statements that an extension is possible, under discussion, or hoped for;
  - truces elsewhere on the front that do not cover Oleshky;
  - an announcement made on 1 Nov.
- **Event window:** 2026-10-30T00:00:00+02:00 to 2026-10-31T23:59:59+02:00 (Europe/Kyiv)
- **Written at:** 2026-10-29T18:12Z

## Schedule
- **Expiry.** The truce began at 03:00 Kyiv time on 27 Oct. Arakhamia: "Режим тиші триватиме з 27 жовтня до 22:59 години 1 листопада." — https://suspilne.media/1438069-peremira-v-oleskah-trivatime-do-vecora-1-listopada/ (published 2026-10-27 13:55, read 2026-10-29T17:58Z). The same wording appears in UNN — https://unn.ua/en/news/arakhamia-named-the-duration-of-the-ceasefire-in-occupied-oleshky (published 2026-10-27 11:55, read 2026-10-29T17:52Z). Ukranews headlines say "until November 2" (pages not fetched; most likely the same 22:59 1 Nov expiry rendered differently).
- **Area.** The truce area was expanded beyond Oleshky for convoys (LIGA, 27 Oct 18:59, via agenda_world.json): https://news.liga.net/en/politics/news/melania-trump-announces-expansion-of-oleshky-ceasefire
- **Stages.** The operation runs in several stages, each lasting from one to several days — suspilne (as above).
- **Aid.** Lubinets on 29 Oct: humanitarian cargo planned for delivery on 30 Oct, route demining under way. A Fox News report says the mission will last about a week — https://en.interfax.com.ua/news/general/1227758.html (published 2026-10-29 09:17, read 2026-10-29T17:55Z).
- **Evacuation.** Leaked documents (Fox News, via Meduza) show evacuees flown Anapa → Gomel on 31 Oct (dossier ua-oleshky-evac-30). Not confirmed by officials.

## Facts
- **Truce holding.** Lubinets on 29 Oct: "The ceasefire has already been in effect for 54 hours"; "no violations of the ceasefire regime have been recorded" — interfax.com.ua (as above).
- **Ombudsmen.** Lubinets and Lantratova travelled to Oleshky on the afternoon of 29 Oct. Both say their main task is aid delivery and the safe evacuation of residents who want to leave — https://meduza.io/en/feature/2026/10/29/if-this-works-it-will-be-the-first-real-ceasefire-across-a-large-stretch-of-the-front-russia-and-ukraine-maintain-truce-in-occupied-oleshky-for-more-than-two-days (published 2026-10-29 16:05, read 2026-10-29T17:57Z).
- **Ukrainian expectations.** If the truce holds, the Ukrainian side expects to repeat similar local ceasefires on other parts of the front. A source in the presidential administration (to Ukrainska Pravda) says the goal is for commanders to learn to "stop, ensure safe passage, and so on." Meduza (as above) reports no talk of extending the Oleshky truce itself.
- **AP, 29 Oct.** A "planned six-day ceasefire" with aid deliveries due to begin Friday 30 Oct. Lantratova: engineers demining roads and preparing "a safe passage for the humanitarian convoy". Evacuation "mechanics … unclear". A volunteer estimates about 1,000 residents want to leave. A Kherson resident: "we understand it will end soon" — https://www.whio.com/news/world/humanitarian-aid-set/3XCJP724Y424BB7SV6CB66WDRY/ (AP, published 2026-10-29 11:16 EDT, read 2026-10-29T17:58Z).
- **No extension found.** None of the sources read (UNN, suspilne, interfax-Ukraine, Meduza, AP) mentions any proposal to extend the truce. Searches in English and Ukrainian found none.
- **Timing pressure.** Aid on 30 Oct, then an evacuation leg reportedly on 31 Oct. Any delay, for example from demining, would compress the operation against the 22:59 1 Nov expiry. That is the most likely trigger for an extension.
- **Planned repeats.** Leaked documents mention further "repatriation operations" at least monthly (Meduza 28 Oct, via dossier ua-oleshky-evac-30). These might be organised as new truces rather than an extension.
- **Wider truce.** No Russia–Ukraine ceasefire beyond local arrangements was in force as of 29 Oct (sources above).

## Base rate
- **Loose fit:** `envoy-visit-ceasefire` (0.03, about 10 cases). It covers a different event (a general ceasefire after envoy meetings). The pipeline has no class for extending a local humanitarian truce.
- **Precedents:** the Easter truce 2025 (30 h) and the 9 May 2025 truce (72 h) were not extended. The Oleshky truce differs because it is tied to an unfinished humanitarian operation. Precedents are from the news record and not checked in this session.
- **Pipeline class:** `unscheduled-announcement-within-one-day`: own record 1 yes / 17 no (loose fit).

## Schedule slip
- `none` for the announcement itself. The expiry is fixed (22:59 1 Nov).
- If the operation runs late, a decision on extension may come only on 1 Nov, just before expiry. That would fall outside the window: an announcement on 1 Nov is NO.

## Risks
- **Toward YES:**
  - The aid convoy or the evacuation slips by a day or more.
  - The White House frames success as grounds to extend.
  - Russia uses an extension as goodwill ahead of the G20 foreign ministers' meeting in Atlanta (30–31 Oct).
- **Toward NO:**
  - The operation finishes on schedule.
  - The parties prefer a fresh truce for each monthly operation.
  - Any extension is agreed late on 1 Nov.
  - The truce breaks down.
- **Resolution ambiguity:**
  - Only one side announces the extension. That counts.
  - Statements about an extension "for evacuation completion" without a new end time. These count if they explicitly say the truce continues past 1 Nov.
  - Ukraine's General Staff discourages publicity, so an extension might be implemented quietly with no announcement in the window.

## Sources
- https://suspilne.media/1438069-peremira-v-oleskah-trivatime-do-vecora-1-listopada/
- https://unn.ua/en/news/arakhamia-named-the-duration-of-the-ceasefire-in-occupied-oleshky
- https://en.interfax.com.ua/news/general/1227758.html
- https://meduza.io/en/feature/2026/10/29/if-this-works-it-will-be-the-first-real-ceasefire-across-a-large-stretch-of-the-front-russia-and-ukraine-maintain-truce-in-occupied-oleshky-for-more-than-two-days
- https://www.whio.com/news/world/humanitarian-aid-set/3XCJP724Y424BB7SV6CB66WDRY/
- https://www.usnews.com/news/world/articles/2026-10-29/humanitarian-aid-set-to-enter-oleshky-as-a-rare-russia-ukraine-truce-holds-for-a-third-day (fetch failed)
- https://ukranews.com/en/news/1183651-the-ceasefire-in-oleshky-will-last-until-november-2-says-arakhamia (fetch failed; title only)
- data/dossiers/2026-10-31/ua-oleshky-evac-30.md; scratchpad w/agenda_world.json (LIGA 27 Oct)
