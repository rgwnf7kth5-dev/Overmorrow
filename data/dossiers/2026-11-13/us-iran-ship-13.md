# us-iran-ship-13
- **Claim:** UKMTO or JMIC reports at least one new attack or incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Thursday 12 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) or the Joint Maritime Information Center (JMIC) reports an attack, explosion, mine strike, projectile hit, hostile approach (armed craft firing on or attempting to board the vessel), boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 12 Nov 2026, as shown on ukmto.org or by a wire, gCaptain, Lloyd's List, Khaleej Times, Gulf News, Arab News, Iran International or Al Jazeera quoting UKMTO or JMIC. A merchant vessel disabled, boarded or seized by US or other military forces under the US blockade counts only if UKMTO or JMIC itself reports that incident. A report published after the window counts if the incident occurred in it. Suspicious approaches, hailings or sightings without weapons fire or a boarding attempt, GPS or navigation-aid interference alone, and claims by Iran (including IRGC statements about burning or mined tankers) or other parties that neither UKMTO nor JMIC reports do not count. NO if no such incident occurred on that day.
- **Event window:** 2026-11-12T00:00:00+04:00 to 2026-11-12T23:59:00+04:00 (= 11 Nov 21:00 CET to 12 Nov 20:59 CET); resolver reads 2026-11-13T05:00+01:00 (later if UKMTO reports late)
- **Written at (UTC):** 2026-11-10T18:05Z. Read times as stated.
- Same wording as us-iran-ship-12 (data/dossiers/2026-11-12/us-iran-ship-12.md) with the day moved to 12 Nov and IRGC statements explicitly excluded.

## Schedule
- No scheduled event. ukmto.org refused scripted reading earlier (HTTP 403, data/dossiers/2026-11-09/us-iran-ship-4.md); resolution rests on outlets quoting UKMTO/JMIC.

## Facts
- gCaptain, 10 Nov: "According to UKMTO Warning 201-26, the incident occurred at 1338 UTC on November 10"; a tanker "struck by an unidentified projectile approximately 19 nautical miles northeast of Lima, Oman"; separately ADNOC L&S said one of its vessels "sustained damage in an attack in the Persian Gulf on the afternoon of November 10" in UAE waters — https://gcaptain.com/adnoc-vessel-damaged-in-gulf-attack-as-ukmto-reports-fresh-tanker-strike-near-hormuz/ (published 2026-11-10T16:57Z, read 2026-11-10T17:56Z)
- Same gCaptain piece: JMIC's 8 Nov advisory "maintained the threat level for the Strait of Hormuz at SEVERE, warning that further deliberate attacks were highly likely"; JMIC "reported five attacks off Oman's Musandam coast between November 1 and November 5, followed by additional incidents on November 7."
- AFP via Arab News, 10 Nov: IRGC: "Two violating oil tankers, traveling along an unauthorized route in the Strait of Hormuz, have been brought to a halt following massive explosions and are left burning"; "A third violating oil tanker ... exploded this afternoon after striking a naval mine"; "It was unclear whether either incident [ADNOC, UKMTO] was one of the ships mentioned by Tehran" — https://www.arabnews.com/middle-east/iran-says-three-oil-tankers-on-fire-in-hormuz-3010988 (published 2026-11-10T15:58Z, modified 17:49Z, read 2026-11-10T17:56Z)
- Google News RSS "UKMTO when:3d" (read 2026-11-10T17:56Z): headlines include "UK Maritime Trade Operations Lists Two Tanker Reports Dated Nov. 8" (tokenpost, 10 Nov 16:08Z; not opened), "Three maritime incidents hit Gulf waters on Sunday" (Logistics Middle East, 9 Nov 05:24Z; not opened), "Hormuz shipping 'below normal, but not stalled': UKMTO" (Gulf News, 10 Nov 00:54Z; not opened) — https://news.google.com/rss/search?q=UKMTO%20when:3d&hl=en-US&gl=US&ceid=US:en
- Al Jazeera analysis, 10 Nov: "US attacks against Iranian targets in the Strait of Hormuz and on the island of Qeshm have been a daily occurrence. Tehran has reacted by downing US aircraft and controlling marine traffic on the key waterway" — https://www.aljazeera.com/news/2026/11/10/positive-momentum-is-the-us-war-on-iran-about-to-end (published 2026-11-10T15:18Z, read 2026-11-10T17:55Z)
- Arab News, 9-10 Nov: Trump said the war "militarily is effectively over" and "we're just keeping it the status quo"; on Truth Social strikes "quite unlikely"; Rezaei: US should "stop manufacturing fake news about imaginary talks" — https://www.arabnews.com/middle-east/trump-says-iran-war-is-militarily-effectively-over-after-qatar-pm-talks-3010816 (published 2026-11-09T21:46Z, read 2026-11-10T17:56Z)
- Arab News, 10 Nov: Qatar MFA spokesman Al-Hashmi: "We cannot say whether an agreement is near or far"; calls for restoring freedom of navigation in Hormuz — https://www.arabnews.com/middle-east/us-iran-mediation-continues-despite-reports-of-imminent-strike-says-qatar-3010972 (published 2026-11-10T14:37Z, read 2026-11-10T17:56Z)
- Earlier (as cited in data/dossiers/2026-11-12/us-iran-ship-12.md; not re-read tonight): Iranian state TV said 11 tankers attacked in 10 days; Reuters: attacks "ramped up sharply in October and have continued at the highest rate since the start of the war".

## Base rate
- Class merchant-incident-reported-on-day (pipeline/reference-classes.json): too thin.
- Own count, Gulf days 24 Oct–10 Nov (n=18): 12 days with a UKMTO-reported incident = 0.67. Built from us-iran-ship-12 count (11/16 through 8 Nov, 8 Nov counted no per resolution of us-iran-ship-4) plus 9 Nov (none found as of 10 Nov 17:56Z) and 10 Nov (yes, UKMTO 201-26). 8 Nov may flip to yes (tokenpost headline "Two Tanker Reports Dated Nov. 8"), which would make 13/18 = 0.72. Last 7 days (4–10 Nov): 4 or 5 of 7.

## Schedule slip
- slip_class `none`: no scheduled event (`node scripts/refdata/slip.mjs none` → "unknown class none", 2026-11-10T17:56Z).

## Risks
- Quiet days come in runs (8–9 Nov); a Qatar-brokered pause or a de-facto calm ("status quo") could cut attacks; conversely IRGC continues to claim tanker hits on "unauthorised routes".
- UKMTO reports late (Khasab incident of 7 Nov classified as an attack only on 9 Nov); resolver should wait for 12 Nov incidents published on 13 Nov.
- IRGC claims are frequent but do not count unless UKMTO/JMIC reports the incident; ADNOC/WAM statements alone do not count either.
- Whether a "military forces" notice shows weapons fire or boarding can be unclear.

## Sources
- https://gcaptain.com/adnoc-vessel-damaged-in-gulf-attack-as-ukmto-reports-fresh-tanker-strike-near-hormuz/
- https://www.arabnews.com/middle-east/iran-says-three-oil-tankers-on-fire-in-hormuz-3010988
- https://www.arabnews.com/middle-east/trump-says-iran-war-is-militarily-effectively-over-after-qatar-pm-talks-3010816
- https://www.arabnews.com/middle-east/us-iran-mediation-continues-despite-reports-of-imminent-strike-says-qatar-3010972
- https://www.aljazeera.com/news/2026/11/10/positive-momentum-is-the-us-war-on-iran-about-to-end
- https://news.google.com/rss/search?q=UKMTO%20when:3d&hl=en-US&gl=US&ceid=US:en
- data/dossiers/2026-11-12/us-iran-ship-12.md ; data/resolutions/2026-11-09.json
