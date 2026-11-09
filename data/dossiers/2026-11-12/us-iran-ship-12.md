# us-iran-ship-12
- **Claim:** UKMTO or JMIC reports at least one new attack or incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Wednesday 11 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) or the Joint Maritime Information Center (JMIC) reports an attack, explosion, mine strike, projectile hit, hostile approach (armed craft firing on or attempting to board the vessel), boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 11 Nov 2026, as shown on ukmto.org or by a wire, gCaptain, Lloyd's List, Khaleej Times, Gulf News, Arab News, Iran International or Al Jazeera quoting UKMTO or JMIC. A merchant vessel disabled, boarded or seized by US or other military forces under the US blockade counts only if UKMTO or JMIC itself reports that incident. A report published after the window counts if the incident occurred in it. Suspicious approaches, hailings or sightings without weapons fire or a boarding attempt, GPS or navigation-aid interference alone, and claims by Iran or other parties that neither UKMTO nor JMIC reports do not count. NO if no such incident occurred on that day.
- **Deadline:** 2026-11-11T23:59:00+04:00 (event; = 20:59 CET); resolver reads 2026-11-12T05:00+01:00 (later if UKMTO reports late)
- **Written at (UTC):** 2026-11-09T17:58Z. Read times as stated.
- Same wording as us-iran-ship-11 (data/dossiers/2026-11-11/us-iran-ship-11.md) with the day moved to 11 Nov; Iran International added as a relay (it carried the 9 Nov UKMTO notice).

## Schedule
- No scheduled event. ukmto.org refused scripted reading earlier (HTTP 403, data/dossiers/2026-11-09/us-iran-ship-4.md); resolution rests on outlets quoting UKMTO.

## Facts
- Iran International liveblog, 9 Nov: "A tanker caught fire and its crew evacuated following an incident northwest of Khasab, Oman, on Saturday that the UK Maritime Trade Operations agency classified as an attack on Monday"; "UKMTO said it received the delayed report from military authorities about the incident, which occurred at 1920 UTC on November 7, eight nautical miles northwest of Khasab" — https://www.iranintl.com/en/liveblog/202611077068 (published 2026-11-09T16:44Z, read 2026-11-09T17:53Z) "classified as an attack on Monday"
- Al Jazeera, 9 Nov: "Iranian state television reported on Monday that 11 tankers have been attacked over the past 10 days, with four unable to continue transit"; IRGC-affiliated media: maritime navigation systems "were targeted in the southern areas of the waterway overnight, preventing tankers from transiting as part of the US-coordinated oil shuttle system" — https://www.aljazeera.com/news/2026/11/9/iran-stands-by-demands-to-end-the-war-as-us-ramps-up-military-pressure (published 2026-11-09T14:39Z, read 2026-11-09T17:55Z)
- Arab News (IRGC via media), 9 Nov headline: "Iran says no unauthorized vessels transited Strait of Hormuz overnight after navigation aids destroyed" — https://www.arabnews.com/middle-east/iran-says-no-unauthorized-vessels-transited-strait-of-hormuz-overnight-after-navigation-aids-destroyed-3010655 (front-page link, read 2026-11-09T17:53Z)
- Reuters via Arab News, 9 Nov: "Attacks on tankers in the Gulf and Strait of Hormuz ramped up sharply in October and have continued at the highest rate since the start of the war, figures from international maritime agencies showed last week"; "On Sunday Iran, which typically does not acknowledge striking vessels that report being hit by projectiles, said a tanker had hit a mine east of the Strait of Hormuz" — https://www.arabnews.com/middle-east/trump-to-meet-iran-war-mediator-qatar-no-imminent-deal-seen-to-end-the-war-3010661 (published 2026-11-09T05:12Z, modified 13:28Z, read 2026-11-09T17:53Z)
- Same Reuters piece: Qatar's PM meets Trump and Vance on 9 Nov; "senior US and Gulf officials cast doubt on the chances of an imminent deal"; Trump "remains unwilling to accept an existing Iranian truce plan".
- Google News search "UKMTO" (last 2 days, read 2026-11-09T17:55Z): latest items are the 7 Nov bulk carrier/military forces incident east of Khor Fakkan and the 7 Nov Khasab tanker fire; no UKMTO incident dated 8 or 9 Nov found.
- Day-by-day (Gulf day, UKMTO-reported incident; from us-iran-ship-11 plus above): 24 Oct yes; 25 no; 26 yes; 27 no; 28 yes; 29 yes; 30 yes; 31 no; 1 Nov yes; 2 yes; 3 yes; 4 no; 5 yes; 6 yes; 7 yes; 8 Nov: none found as of 9 Nov 17:55Z; 9 Nov: day almost over in the Gulf, none found yet.

## Base rate
- Class merchant-incident-reported-on-day (pipeline/reference-classes.json): too thin (see us-iran-ship-10).
- Own count, Gulf days 24 Oct-8 Nov (n=16): 11 with a UKMTO-reported incident = 0.69. Last 7 days (2-8 Nov): 5/7. UKMTO reports often arrive one to two days late (Khasab incident of 7 Nov classified as an attack on 9 Nov), so 8 Nov may still turn yes.

## Schedule slip
- slip_class `none`: no scheduled event (`node scripts/refdata/slip.mjs none` → "unknown class none", 2026-11-09T17:55Z).

## Risks
- Quiet days come in runs (8 Nov, possibly 9 Nov); IRGC says navigation aids were knocked out and no "unauthorised" vessel transited overnight 8-9 Nov — fewer transits may mean fewer incidents.
- A Qatar-brokered pause after the 9 Nov Trump–Al Thani meeting could cut attacks; renewed large US strikes would likely bring Iranian action at sea.
- UKMTO reports late; an incident on 11 Nov may be published on 12 or 13 Nov (resolver should wait, not resolve NO early).
- Whether a "military forces" notice shows weapons fire or boarding can be unclear.

## Sources
- https://www.iranintl.com/en/liveblog/202611077068
- https://www.aljazeera.com/news/2026/11/9/iran-stands-by-demands-to-end-the-war-as-us-ramps-up-military-pressure
- https://www.arabnews.com/middle-east/trump-to-meet-iran-war-mediator-qatar-no-imminent-deal-seen-to-end-the-war-3010661
- https://www.arabnews.com/middle-east/iran-says-no-unauthorized-vessels-transited-strait-of-hormuz-overnight-after-navigation-aids-destroyed-3010655
- https://news.google.com/rss/search?q=UKMTO%20when:2d&hl=en-US&gl=US&ceid=US:en
- data/dossiers/2026-11-11/us-iran-ship-11.md
