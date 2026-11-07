# us-iran-ship-10
- **Claim:** UKMTO or JMIC reports at least one new attack or incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Monday 9 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) or the Joint Maritime Information Center (JMIC) reports an attack, explosion, mine strike, projectile hit, hostile approach (armed craft firing on or attempting to board the vessel), boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 9 Nov 2026, as shown on ukmto.org or by a wire, gCaptain, Lloyd's List, Khaleej Times, Gulf News or Al Jazeera quoting UKMTO or JMIC. A report published after the window counts if the incident occurred in it. Reports of suspicious approaches, hailings or sightings without weapons fire or a boarding attempt, and GPS interference alone, do not count, nor do claims by Iran or other parties that neither UKMTO nor JMIC reports. NO if no such incident occurred on that day.
- **Deadline:** 2026-11-09T23:59:00+04:00 (event); resolver reads 2026-11-10T05:00+01:00
- **Written at (UTC):** 2026-11-07T18:05Z. Read times as stated.
- Criterion carried over from us-iran-ship-4 (data/planning/2026-11-09.json), with the date moved to 9 Nov, JMIC added as an equal source (its updates are distributed by UKMTO) and Al Jazeera added as a relay. Hostile approach added at the planner's request, limited to armed craft firing on or attempting to board, so that routine "suspicious approach" notices stay out as before.

## Schedule
- No scheduled event. ukmto.org refused scripted reading on 6 Nov (HTTP 403, data/dossiers/2026-11-09/us-iran-ship-4.md); resolution in practice rests on outlets quoting UKMTO.

## Facts
- Al Jazeera, 7 Nov: "At least 11 ships were attacked in and around the Strait of Hormuz over the week ending on November 6, according to the United Kingdom Maritime Trade Operations (UKMTO), which said three of them sank"; UKMTO "has recorded 88 projectile strikes since hostilities resumed in early July"; transits "approximately 65 percent below pre-conflict levels" — https://www.aljazeera.com/news/2026/11/7/qeshm-island-and-hormuz-hit-as-mediators-try-to-prevent-us-iran-escalation (published 2026-11-07T12:22Z, read 2026-11-07T17:52Z)
- Same page: "The Iranian military's naval force said on Saturday that a tanker with its transponder turned off caught fire in the eastern area of the Strait of Hormuz after hitting a mine. Washington says the mines have been cleared." Iranian claim; no UKMTO notice for 7 Nov found by 17:53Z.
- Khaleej Times liveblog 7 Nov (to 20:58 Gulf time): "2:04 PM Iran navy says tanker hits mine, catches fire in Hormuz"; no UKMTO item listed for 7 Nov — https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-7-2026 (modified 2026-11-07T20:58+04:00, read 2026-11-07T17:53Z)
- Arab News / Al Arabiya, 6 Nov 12:19-12:24Z: "Tanker reports explosion near Oman's Khasab while transiting Strait of Hormuz, UKMTO says" — Google News RSS "UKMTO when:14d" (read 2026-11-07T17:53Z)
- Investing.com / Cyprus Mail, 5 Nov 08:5x-13:41Z: "Tanker struck by two projectiles north of Qatar, crew status unconfirmed, UKMTO says" (incident 4 Nov 23:20 GMT = 03:20 Gulf time 5 Nov, per Al Jazeera in us-iran-ship-4) — same RSS
- Middle East Eye, 3 Nov 21:05Z: "Tanker hit by two unknown projectiles off Oman, UKMTO says"; Al-Bawaba 3 Nov 22:00Z: "second attack within 24 hours" — same RSS
- Iran International, 2 Nov 01:47Z: "Tanker struck by two projectiles near Saudi port in Persian Gulf - UKMTO" — same RSS
- Middle East Eye, 1 Nov 19:00Z: "Vessel struck by unknown projectile in Hormuz, UKMTO says" — same RSS
- JMIC Update 111 (via Gulf News, 6 Nov): "four attacks in the Strait of Hormuz over 96 hours"; "All four incidents occurred within approximately 52 hours, between November 1 and November 3" — https://gulfnews.com/business/energy/hormuz-attacks-rise-as-iran-steps-up-pressure-on-shipping-ukmto-warns-1.500737866 (via us-iran-ship-4.md)
- Middle East Eye, 30 Oct 20:38Z: "Oil tanker struck by unknown projectile while exiting Hormuz: UKMTO"; Iran International 30 Oct 03:31Z: "Explosive devices attached to tanker in Strait of Hormuz, UKMTO says" — Google News RSS "UKMTO after:2026-10-22 before:2026-10-30" (read 2026-11-07T17:53Z)
- CGTN 29 Oct 06:31Z: UKMTO "incident occurring in the Strait of Hormuz, 9 NM north of Khasab, Oman"; Deccan Herald 29 Oct: "Vessel catches fire, sinks off Oman"; SANA 29 Oct 21:34Z: "Tanker hit by unknown projectile in Strait of Hormuz, UKMTO says" — same RSS
- Roya News 28 Oct 16:53Z: "Tanker struck by drone near Sohar anchorage in Oman: UKMTO"; Maritime Executive 28 Oct: "UKMTO Reports Burning Tanker Off Musandam Peninsula" — same RSS
- Iran International 26 Oct 09:34Z: "Tanker struck and disabled in Strait of Hormuz, UKMTO says"; Al Arabiya 26 Oct: "UKMTO reports vessel on fire off Iraq's coast" — same RSS
- Middle East Eye, 24 Oct (date only): "Tanker hit by unknown projectile off Oman, UKMTO says" — same RSS
- Context: Iranian military says the strait stays shut until the US accepts seven conditions; Araghchi spoke with 12 foreign ministers in 48 hours; Qatar says mediation continues (Al Jazeera 7 Nov, above; Khaleej Times liveblog 7 Nov 07:16-08:20 entries).
- Diplomacy, dated for 9 Nov: none found. Qatar's PM said on 6 Nov "settlement is within reach"; Qatar denied on 7 Nov that talks had failed — https://www.aljazeera.com/news/2026/11/7/trump-confirms-new-us-strikes-on-irans-qeshm-island (published 2026-11-07T03:53Z, read 2026-11-07T17:52Z). A Qatari "48-hour, two-stage plan" was reported on 6 Nov by a single minor site (houseofsaud.com, GN headline 2026-11-06T19:40Z); not confirmed elsewhere in what I read.

## Base rate
- Class merchant-incident-reported-on-day (pipeline/reference-classes.json): own record 1 yes, 0 no; too thin.
- Own count from Google News headlines quoting UKMTO, Gulf days 24 Oct-7 Nov (n=15), day assigned from publication time (approximate; several feed stamps are date-only):
  - with an incident: 24, 26, 28, 29, 30 Oct; 1, 2, 3, 5, 6 Nov (10)
  - none found: 25, 27, 31 Oct; 4, 7 Nov (5; 7 Nov only an Iranian mine claim so far)
  - Rate 10/15 = 0.67. Last 7 days (1-7 Nov): 5/7. Previous series: 12/16 UTC days 21 Oct-5 Nov (iMariner tracker, us-iran-ship-3).
- UKMTO weekly: 11 ships attacked in the week to 6 Nov.

## Schedule slip
- slip_class `none`: no scheduled event (`node scripts/refdata/slip.mjs none` → "unknown class none", 2026-11-07T17:58Z).

## Risks
- Attacks cluster (four within 52 hours 1-3 Nov), with quiet days in between (4 Nov, 7 Nov so far).
- A Qatar-brokered pause or deal announcement could cut attacks; a US escalation could raise them.
- IRGC mine claims count only if UKMTO or JMIC reports the incident.
- Gulf-day boundary: an incident late on 9 Nov GMT can fall on 10 Nov Gulf time, and vice versa.
- ukmto.org is unreadable by script; a minor notice not relayed by any listed outlet may be missed.

## Sources
- https://www.aljazeera.com/news/2026/11/7/qeshm-island-and-hormuz-hit-as-mediators-try-to-prevent-us-iran-escalation
- https://www.aljazeera.com/news/2026/11/7/trump-confirms-new-us-strikes-on-irans-qeshm-island
- https://www.aljazeera.com/news/liveblog/2026/11/7/iran-war-live-qatar-says-us-iran-should-not-wait-to-reach-a-peace-deal (body mostly not served)
- https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-7-2026
- https://news.google.com/rss/search?q=UKMTO%20when%3A14d&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=UKMTO%20after%3A2026-10-22%20before%3A2026-10-30&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=Hormuz%20tanker%20mine%20fire&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=Qatar%2048-hour%20plan%20Iran%20Hormuz&hl=en-US&gl=US&ceid=US:en
- data/dossiers/2026-11-09/us-iran-ship-4.md
