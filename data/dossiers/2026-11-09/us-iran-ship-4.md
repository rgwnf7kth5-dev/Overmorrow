# us-iran-ship-4
- **Claim:** UKMTO reports at least one new attack or incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Sunday 8 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) reports an attack, explosion, mine strike, projectile hit, boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 8 Nov 2026, as shown on ukmto.org or by a wire, gCaptain, Lloyd's List, Khaleej Times or Gulf News quoting UKMTO. A UKMTO report published after the window counts if the incident occurred in it. UKMTO reports of suspicious approaches, hailings, sightings or GPS interference alone do not count, nor do claims by Iran or other parties that UKMTO does not report. NO if no such incident occurred on that day.
- **Deadline:** 2026-11-08T23:59:00+04:00 (event); resolver reads 2026-11-09T05:00+01:00
- **Written at (UTC):** 2026-11-06T18:15Z. Read times as stated.
- Criterion reused from us-iran-ship-3 (data/planning/2026-11-08.json), with the date moved to 8 Nov and two Gulf outlets added as relays.

## Schedule
- No scheduled event. ukmto.org refuses scripted reading (HTTP 403 at 2026-11-06T18:00Z), so resolution in practice rests on outlets quoting UKMTO.

## Facts
- Khaleej Times liveblog, 6 Nov, 16:16 Gulf time: "Tanker reports explosion near Oman's Khasab while transiting Strait of Hormuz: UKMTO" — https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-6-2026 (modified 2026-11-06T20:09+04:00, read 2026-11-06T18:02Z). Headline only; body not read.
- Al Jazeera liveblog, 6 Nov: "Tanker reports explosion while transiting Strait of Hormuz, and earlier Iran's Islamic Revolutionary Guard Corps (IRGC) said two oil tankers struck mines, caught fire in the strait. The IRGC also said it downed a US drone over Qeshm Island." — https://www.aljazeera.com/news/liveblog/2026/11/6/iran-war-live-trump-warns-us-may-have-to-destroy-rest-of-iran (modified 2026-11-06T18:00Z, read 2026-11-06T18:01Z)
- JMIC Update 111 advisory dated 5 Nov, distributed by UKMTO: "four attacks in the Strait of Hormuz over 96 hours, compared with three in the preceding reporting period"; "All four incidents occurred within approximately 52 hours, between November 1 and November 3, off Oman's Musandam coast"; one further incident, UKMTO 196-26, in the central Gulf north of Qatar — https://gulfnews.com/business/energy/hormuz-attacks-rise-as-iran-steps-up-pressure-on-shipping-ukmto-warns-1.500737866 (published 2026-11-06T05:36+04:00, read 2026-11-06T18:02Z)
- UKMTO: tanker struck by two projectiles about 50 nm north of Madinat ash-Shamal, Qatar, "on Wednesday at 23:20 GMT" (4 Nov; 03:20 Gulf time on 5 Nov) — https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack (published 2026-11-05T18:47Z, read 2026-11-06T18:02Z)
- Same page: IRGC and Iranian army say five tankers and a tugboat caught fire after mines on 4-5 Nov — "two more oil tankers struck naval mines and caught fire in the unsafe waters east of the Strait of Hormuz". Iranian claims, not UKMTO.
- Reuters via gCaptain, 6 Nov: one seafarer killed on MT Velos Sapphire, "believed to have been caused by a missile attack", ship sailing unladen to Bahrain — https://gcaptain.com/seafarer-killed-in-suspected-missile-attack-on-tanker-in-gulf/ (published 2026-11-06T08:32-08:00, read 2026-11-06T18:01Z)
- Al Jazeera explainer, 6 Nov: IRGC navy says "at least seven tankers have caught fire after sailing into mines while attempting to transit through the Strait of Hormuz using 'unauthorised routes' near Oman this week"; Rezaei: "As long as they do not execute our seven conditions, we will neither open the Strait of Hormuz nor have negotiations." — https://www.aljazeera.com/news/2026/11/6/russia-to-uae-iran-steps-up-diplomacy-amid-trump-threats-what-we-know (modified 2026-11-06T15:47Z, read 2026-11-06T18:01Z)
- Same page: Iran passed a new proposal via Qatar on 5 Nov, to be discussed only after the US meets seven demands; "The US is examining the proposal, Reuters reported"; Axios: CENTCOM "was just waiting on orders from Washington"; Trump: people will "know soon enough".
- Earlier own tracker (iMariner, UTC days, entries citing UKMTO, 21 Oct-5 Nov): 12 of 16 days with at least one entry — data/dossiers/2026-11-08/us-iran-ship-3.md. Not refreshed today: the tracker file (4.6 MB, plain text) is not served by the page reader, read 2026-11-06T18:00Z.
- UKMTO counted more than 30 incidents in October — https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/ (via data/dossiers/2026-11-07/us-iran-ship-2.md)
- Iranian lawmaker: ships of India, China, Iraq and Qatar exempt from Hormuz restrictions — https://www.aljazeera.com/news/2026/11/6/why-is-iran-exempting-india-china-qatar-iraq-from-hormuz-restrictions (published 2026-11-06T06:06Z; via work/scout-world.json, not re-read)

## Base rate
- Class merchant-incident-reported-on-day (pipeline/reference-classes.json): own record 1 yes, 0 no; too thin to use.
- Own count: 12 of 16 UTC days with a UKMTO-citing entry, 21 Oct-5 Nov (0.75, n=16). Official frame: more than 30 UKMTO incidents in October (about one a day); JMIC: four attacks in 96 hours to 5 Nov, all within 52 hours, i.e. clustered, with quieter days between.

## Schedule slip
- slip_class `none`: no scheduled event.

## Risks
- Attacks cluster: JMIC's four attacks fell within 52 hours, leaving two quiet days; a single calendar day can be empty.
- A US decision to resume major strikes, or a Qatar-channel pause, could change the tempo either way.
- Mine strikes claimed by the IRGC count only if UKMTO itself reports them.
- Gulf-time boundary: an incident at 23:20 GMT falls on the next Gulf day.
- A late UKMTO notice counts but may arrive after the resolver's first reading; the claim then stays pending.

## Sources
- https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-6-2026
- https://www.aljazeera.com/news/liveblog/2026/11/6/iran-war-live-trump-warns-us-may-have-to-destroy-rest-of-iran
- https://gulfnews.com/business/energy/hormuz-attacks-rise-as-iran-steps-up-pressure-on-shipping-ukmto-warns-1.500737866
- https://www.aljazeera.com/news/2026/11/5/iran-says-tankers-struck-in-hormuz-amid-fears-of-new-us-attack
- https://gcaptain.com/seafarer-killed-in-suspected-missile-attack-on-tanker-in-gulf/
- https://www.aljazeera.com/news/2026/11/6/russia-to-uae-iran-steps-up-diplomacy-amid-trump-threats-what-we-know
- https://www.ukmto.org/recent-incidents (403)
- https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json (not served by reader)
- data/dossiers/2026-11-08/us-iran-ship-3.md
