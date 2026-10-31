# ir-ukmto-incident-1
- **Claim:** UKMTO reports at least one incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Monday 2 November 2026 (Gulf time).
- **Criterion:** YES if UKMTO publishes an incident notice or warning about an attack, explosion, mine strike, projectile, boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf, where the incident occurred between 00:00 and 23:59 GST (UTC+4) on 2 Nov 2026. Suspicious approaches, sightings or GPS interference alone do not count. NO otherwise.
- **Event window:** 2026-11-02T00:00:00+04:00 to 2026-11-02T23:59:00+04:00 (Asia/Dubai). Evidence read at 2026-11-03T04:00+01:00.
- **Written at:** 2026-10-31T18:20Z. Read times below are between 17:45Z and 18:12Z on 31 Oct.

## Schedule
- No scheduled event. The claim is about whether a qualifying incident happens on one day. UKMTO's incident page (https://www.ukmto.org/recent-incidents) could not be fetched tonight (client error). UKMTO also blocks automated access, according to the iMariner tracker README (below). Notices are published as numbered "UKMTO WARNING nnn-26" PDFs, e.g. https://www.ukmto.org/-/media/ukmto/products/20261026-ukmto_warning-182-26.pdf (seen in search results, dated 26 Oct; fetch failed).
- Late reporting is common. UKMTO publishes some notices a day or more after the incident (gCaptain, 5 Oct: three of four attack notices issued on Mon 5 Oct covered 3–4 Oct). So a 2 Nov incident may first appear on 3 Nov, before the evidence time of 04:00 CET on 3 Nov or after it.

## Facts
- **Warning serial numbers:** UKMTO 156-26 was issued for a projectile strike at 1637 UTC on 5 Oct. "Five Hormuz Incidents Reported Monday" — gCaptain https://gcaptain.com/five-hormuz-incidents-reported-monday-as-tanker-attacks-mount/ (published 2026-10-05 15:28 PDT, read 2026-10-31T18:00Z) "master reported being struck by an unknown projectile". UKMTO 186-26 covered a tanker hit by a projectile at 1600 UTC on 29 Oct near Khasab — iMariner tracker issue https://github.com/iMariner/maritime-security-tracker/issues/299 (opened 2026-10-31, read 2026-10-31T18:03Z). UKMTO Warning 187-26 covered a limpet-mine attack on the evening of 29 Oct — gCaptain (below). Own arithmetic: about 31 warnings were issued between 5 and 29 Oct, roughly 1.3 a day. That includes threats and hailings and late reports, not only qualifying incidents.
- **Monthly totals:** UKMTO counted more than 30 incidents in October in the Strait of Hormuz, the Gulf of Oman and the Arabian Gulf. That is the highest monthly total of the war and more than double September's. UKMTO has counted 145 incidents since the war began — The National https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/ (published 2026-10-31 06:35Z, read 2026-10-31T17:50Z) "highest monthly total since start of war".
- **Projectile strikes:** UKMTO has counted 145 conflict-related incidents since 28 Feb, 88 of them involving vessels in the Strait of Hormuz through 28 Oct. Its 30 Oct weekly overview says 59 of 81 projectile strikes since 6 July hit vessels on the southern route. Own arithmetic: 81 strikes in about 116 days is roughly 0.7 a day. Source: gCaptain, "Tanker Hit by Limpet Mines in Strait of Hormuz" https://gcaptain.com/tanker-hit-by-limpet-mines-in-strait-of-hormuz-as-new-threat-to-shipping-emerges/ (published 2026-10-30 08:16 PDT, read 2026-10-31T17:58Z) "additional incidents are known but cannot be independently verified".
- **Last week:**
  - 29 Oct: a limpet mine attack 25 nm NE of Khasab (tanker reportedly Louise 1, per FT). Separately, UKMTO reported a tanker struck by a projectile around 19:30 local while exiting via the US-promoted southern route.
  - 29–30 Oct: the IRGC claimed three to four tankers hit mines on the "unauthorized southern route" (claims, not UKMTO notices).
  - 30 Oct: Oman reported a Panama-flagged vessel on fire about 1.6 nm off Musandam, with 25 crew evacuated.
  - Sources: Euronews https://www.euronews.com/2026/10/30/irans-revolutionary-guard-reports-two-tankers-on-fire-in-strait-of-hormuz-as-talks-continu (published 2026-10-30 15:43 CET, read 2026-10-31T17:57Z); CBS live blog https://www.cbsnews.com/live-updates/iran-war-donald-trump-qatar-mediators-new-proposal-end-war/ (updated 2026-10-30 03:18 EDT, read 2026-10-31T17:47Z) "Iran had been targeting ships on the southern route 'at an increased rate'" (UKMTO, via CBS).
- **Strait status:** Iran allows only its authorised northern routes. The US promotes the southern lane, which it says is clear of mines. The US counter-blockade of Iranian ports continues (in force again since 14 Jul). CBS (above): the IRGC said "Prove your claim of mine-clearing ... with independent evidence".
- **Diplomacy (31 Oct):** an Iranian delegation is in Doha after Qatari mediators visited Tehran. Araghchi called Vance's letter "a positive step" but said "We see no need to meet with the Americans at this stage." Iran's counter-proposal cuts the Hormuz reopening implementation period from 5 days to 2, with conditions: sanctions relief, a US force reduction, oil waivers, frozen funds and recognised routes. Source: Al Jazeera https://www.aljazeera.com/news/2026/10/31/iran-fm-says-us-outreach-a-positive-step-as-delegation-in-qatar-for-talks (published 2026-10-31 14:31, read 2026-10-31T17:46Z).
- **Escalation timing:** per the WSJ via CBS (28 Oct), the US told Gulf allies to prepare for a "brief but intense campaign" after the midterms. Per AP via CBS (29 Oct), Trump is weighing action once the "critical Nov. 3 elections are over" (CBS, above). The claim day, 2 Nov, falls before the midterms.

## Base rate
- No reference class in pipeline/reference-classes.json applies. Loose own count from the iMariner maritime-security-tracker `data/incidents.json` (https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json, downloaded 2026-10-31T18:07Z). It counts incidents with status "confirmed", vessel category "merchant", regions Hormuz, Gulf of Oman and Persian Gulf, not merged, by Gulf-time date:
  - **7–30 Sep:** 15 incidents; 11 of 24 days had at least one.
  - **1–30 Oct:** 30 incidents; 19 of 30 days had at least one.
  - **17–30 Oct:** 8 incidents; 7 of 14 days had at least one.
  - **24–30 Oct:** 3 incidents; 3 of 7 days had at least one (26, 29, 30 Oct).
  - Caveats: the tracker is automated (news, IMO list, LLM extraction) and merges multiple ships per event. Many entries cite the IMO list, not UKMTO. Some dates are approximate. Only 16 of the 55 days from 7 Sep to 31 Oct have an entry that explicitly cites UKMTO, but UKMTO counted more than 30 incidents in October, so attribution in the tracker is incomplete. Clustering is strong: Iran tends to hit several ships on the same day, as on 4, 11 and 29 Oct.

## Schedule slip
- slip_class `none`. `node scripts/refdata/slip.mjs none` returned "unknown class none" (run 2026-10-31T18:00Z). No scheduled event is involved.
- Signs that conditions may shift on 2 Nov:
  - A Hormuz reopening deal under negotiation through Qatar would lower the incident rate, but implementation would take 2–5 days even if agreed.
  - Possible US strikes after 3 Nov would fall after the window.
  - The UKMTO publication lag could push a 2 Nov incident's notice into 3 Nov.

## Risks
- Late notices: an incident on 2 Nov may only be published on 3–4 Nov, after the evidence time. A notice published on 2 Nov may describe an incident on 1 Nov, which does not count.
- Iranian claims (IRGC "mine" announcements) are not UKMTO notices. Some UKMTO notices are threats or hailings ("ordered to turn around or be targeted"), which arguably do not count, since they are neither an attack nor a boarding.
- Time-zone boundary: an incident at 22:00–24:00 UTC on 1 Nov falls on 2 Nov Gulf time, and one at 20:00–24:00 UTC on 2 Nov falls on 3 Nov.
- Calm spells happen: 14–15 Oct, 24–25 Oct and 27–28 Oct had no confirmed merchant incidents in the tracker.

## Sources
- https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/
- https://gcaptain.com/tanker-hit-by-limpet-mines-in-strait-of-hormuz-as-new-threat-to-shipping-emerges/
- https://gcaptain.com/five-hormuz-incidents-reported-monday-as-tanker-attacks-mount/
- https://www.euronews.com/2026/10/30/irans-revolutionary-guard-reports-two-tankers-on-fire-in-strait-of-hormuz-as-talks-continu
- https://www.cbsnews.com/live-updates/iran-war-donald-trump-qatar-mediators-new-proposal-end-war/
- https://www.aljazeera.com/news/2026/10/31/iran-fm-says-us-outreach-a-positive-step-as-delegation-in-qatar-for-talks
- https://github.com/iMariner/maritime-security-tracker (README) and issues/299; raw data/incidents.json
- https://en.wikipedia.org/wiki/List_of_ships_attacked_during_the_2026_Iran_war and https://en.wikipedia.org/wiki/2026_Strait_of_Hormuz_crisis (no October entries)
- Failed: ukmto.org/recent-incidents, the UKMTO 182-26 PDF, seatrade-maritime, roic.ai
