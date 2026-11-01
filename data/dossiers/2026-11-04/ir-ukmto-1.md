# ir-ukmto-1
- **Claim:** UKMTO reports at least one incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Tuesday 3 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) publishes an incident notice or warning about an attack, explosion, mine strike, projectile, boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf, where the incident occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 3 Nov 2026. Advisories about suspicious approaches, hailings, sightings or GPS interference alone do not count. NO if no such incident occurred in that window. A notice published after the resolver's read time still counts once it appears.
- **Event window:** 2026-11-03T00:00:00+04:00 to 2026-11-03T23:59:00+04:00 (Asia/Dubai). Evidence read at 2026-11-04T04:00+01:00.
- **Written at:** 2026-11-01T18:20Z. Read times between 18:00Z and 18:15Z on 1 Nov unless stated.
- **Definition carried over:** same criterion as ir-ukmto-incident-1 (edition of 3 Nov, claim day 2 Nov), re-dated to 3 Nov.

## Schedule
- No scheduled event; the claim is whether a qualifying incident happens on one day. UKMTO's page https://www.ukmto.org/recent-incidents could not be fetched on 31 Oct (client error) and UKMTO blocks automated access (iMariner README, read 2026-10-31). Notices are numbered "UKMTO WARNING nnn-26" PDFs (e.g. 186-26 and 187-26 on 29 Oct, per the 3 Nov dossier).
- 3 Nov is US Election Day. Reports say the US told Gulf allies to prepare for strikes "as early as November 4" (Times of Israel liveblog 31 Oct, via sweep/running.md). That is after the window.

## Facts
- **1 Nov incident:** the Qatari LNG carrier Al Mayeda was "hit by unidentified objects while transiting the Gulf", with a fire aboard and crew safe, per a Qatari company statement — iMariner tracker entry INC-20261101-001 citing The National (published 2026-11-01T08:24Z; tracker data downloaded 2026-11-01T18:05Z) "Qatar LNG carrier Al Mayeda hit by unidentified objects while transiting the Gulf". Not checked at UKMTO. Qatar is the mediator in the US–Iran talks.
- **October total:** UKMTO counted more than 30 incidents in October, the highest monthly total of the war — The National https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/ (published 2026-10-31 06:35Z, read 2026-10-31T17:50Z) "highest monthly total since start of war". The sweep note quotes "at least 35 attacks" in October from the Khaleej Times liveblog (31 Oct, via sweep/running.md; not re-read).
- **Last UKMTO-cited incidents:** 29 Oct limpet mine on tanker Louise 1, 25 nm NE of Khasab (UKMTO 187-26); 29 Oct projectile on a tanker near Khasab (UKMTO 186-26); 30 Oct tanker Riti (UKMTO cited) — tracker entries, downloaded 2026-11-01T18:05Z; gCaptain https://gcaptain.com/tanker-hit-by-limpet-mines-in-strait-of-hormuz-as-new-threat-to-shipping-emerges/ (published 2026-10-30 08:16 PDT, read 2026-10-31T17:58Z).
- **31 Oct:** the IRGC said four tankers caught fire in the Strait; a headline cited UKMTO on a tanker struck by a projectile. The tracker merged both into earlier events (no separate 31 Oct entry) — tracker, downloaded 2026-11-01T18:05Z.
- **Diplomacy:** an Iranian delegation is in Doha. Araghchi on 31 Oct: "We see no need to meet with the Americans at this stage" — Al Jazeera https://www.aljazeera.com/news/2026/10/31/iran-fm-says-us-outreach-a-positive-step-as-delegation-in-qatar-for-talks (published 2026-10-31 14:31, read 2026-10-31T17:46Z). Senior Iranian official: no Hormuz reopening until the US accepts Iran's demands (Times of Israel liveblog 31 Oct, via sweep/running.md).
- **Traffic:** Hormuz transits are about 70% below pre-war levels (Khaleej Times liveblog 31 Oct, via sweep/running.md). Fewer transits mean fewer targets.

## Base rate
- No class in pipeline/reference-classes.json applies. Own count from the iMariner tracker `data/incidents.json` (https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json, downloaded 2026-11-01T18:05Z). Filter: vessel category merchant; regions Strait of Hormuz, Gulf of Oman, Persian Gulf; status confirmed or reported (merged and rejected entries dropped); counted by the tracker's UTC date:
  - **1–31 Oct:** at least one incident on 17 of 31 days (1, 2, 4, 5, 7, 9, 10, 11, 13, 16, 18, 19, 21, 23, 26, 29, 30 Oct).
  - **12 Oct–1 Nov (21 days):** 10 of 21 days.
  - **19 Oct–1 Nov (14 days):** 7 of 14 days (19, 21, 23, 26, 29, 30 Oct, 1 Nov).
  - **26 Oct–1 Nov (7 days):** 4 of 7 days.
  - **Days where the entry cites UKMTO itself, October:** 11 of 31 (4, 5, 7, 9, 11, 13, 21, 23, 26, 29, 30 Oct). The rest cite the IMO list, CENTCOM, company or national statements.
- Caveats: the tracker is automated (news, IMO list, LLM extraction) and re-merges entries over time. The 3 Nov dossier counted 19 of 30 October days from an earlier download. UTC dates, not Gulf time. Clustering is strong (several ships on one day, then quiet spells: 24–25 and 27–28 Oct, 31 Oct).

## Schedule slip
- slip_class `none`. `node scripts/refdata/slip.mjs none` returned "unknown class none" (run 2026-11-01T18:12Z). No scheduled event.
- Signs the rate may shift on 3 Nov: a Qatar-mediated deal would lower it, but nothing is agreed and reopening would take 2–5 days. Possible US strikes are reported for 4 Nov or later, after the window. Iran tends to hit ships on the US-promoted southern route.

## Risks
- Late notices: UKMTO sometimes publishes a day or more after the incident (gCaptain, 5 Oct). A notice about a 3 Nov incident may appear only on 4–5 Nov.
- Time-zone edge: 20:00–24:00 UTC on 3 Nov is already 4 Nov Gulf time; 20:00–24:00 UTC on 2 Nov is 3 Nov Gulf time.
- Non-UKMTO reports (IRGC claims, company statements such as the Al Mayeda one, the IMO list) do not count unless UKMTO also reports the incident.
- Hailings and "turn back" orders are excluded; a seizure or boarding counts.

## Sources
- https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json (downloaded 2026-11-01T18:05Z)
- https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/
- https://gcaptain.com/tanker-hit-by-limpet-mines-in-strait-of-hormuz-as-new-threat-to-shipping-emerges/
- https://www.aljazeera.com/news/2026/10/31/iran-fm-says-us-outreach-a-positive-step-as-delegation-in-qatar-for-talks
- https://www.timesofisrael.com/liveblog-october-31-2026/ and https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-october-31-2026 (via sweep notes, not re-read)
- data/dossiers/2026-11-03/ir-ukmto-incident-1.md (earlier dossier)
- Not readable: https://www.ukmto.org/recent-incidents

## Research step (1 Nov evening)
- https://www.ukmto.org/recent-incidents: not readable (fetch blocked, about 18:30Z). The National (31 Oct), seatrade-maritime.com, shipandbunker.com and straits.live also failed. No per-day count of UKMTO's own notices could be built.
- Newsquawk, published 9 Oct 2026 13:06 UTC (read 1 Nov ~18:40Z): "UKMTO has received a report of an incident 13nm west of Al Jazeera, UAE … Vessel has been struck by a projectile causing a fire that has since been extinguished." The incident was at 10:00 UTC on 9 Oct, so the UKMTO warning came out the same day, about 3 h after the incident. https://www.newsquawk.com/headlines/ukmto-has-received-a-report-of-an-incident-13nm-west-of-al-jazeera-uae
- IANS via webindia123, 17 Oct 2026 13:32 IST (read 1 Nov ~18:40Z): UKMTO received a "time-late report" of a tanker struck by an unknown projectile 68nm NE of Al Jubail. UKMTO's weekly review is cited as counting 135 incidents during the conflict. An MT ST 3 projectile strike on 16 Oct is sourced to India's shipping minister, not UKMTO. https://news.webindia123.com/news/articles/World/20261017/4512057.html
- Search headlines (could not be dated or opened) show UKMTO issuing both multi-incident and late reports: "UKMTO Reports Four Vessel Attacks in Strait of Hormuz", "New Tanker Attack Reported in Strait of Hormuz: UKMTO" (shipandbunker), "UKMTO issues four Hormuz attack reports", "Late reports of Hormuz attacks as Iran blacklist expands" (seatrade-maritime).
