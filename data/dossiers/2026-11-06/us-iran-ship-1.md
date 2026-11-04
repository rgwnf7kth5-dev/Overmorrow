# us-iran-ship-1
- **Claim:** UKMTO reports at least one new attack or incident involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurs on Thursday 5 November 2026 (Gulf time).
- **Criterion:** YES if the UK Maritime Trade Operations (UKMTO) reports an attack, explosion, mine strike, projectile hit, boarding or seizure involving a merchant vessel in the Strait of Hormuz, the Gulf of Oman or the Persian Gulf that occurred between 00:00 and 23:59 Gulf Standard Time (UTC+4) on 5 Nov 2026, as shown on ukmto.org or by a wire, gCaptain or Lloyd's List quoting UKMTO. A UKMTO report published after the window counts if the incident occurred in it. UKMTO reports of suspicious approaches, hailings, sightings or GPS interference alone do not count, nor do claims by Iran or other parties that UKMTO does not report. NO if no such incident occurred on that day.
- **Deadline:** incident on 5 Nov, 23:59 Gulf time (UTC+4)
- **Written at:** 2026-11-03T18:15Z. Read times as stated.

## Schedule
- No scheduled event; the claim is whether a qualifying incident happens on one day. UKMTO's list could not be fetched on 3 Nov (https://www.ukmto.org/ukmto-products/warnings/2026: client error, read attempt 2026-11-03T17:50Z); earlier dossiers record that it blocks automated access. Notices are numbered "UKMTO WARNING nnn-26" (186-26 and 187-26 on 29 Oct, data/dossiers/2026-11-04/ir-ukmto-1.md).

## Facts
- October count: UKMTO compiled more than 30 incidents in the Strait, the Gulf of Oman and the Arabian Gulf; it counts only incidents reported by verified vessels — https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/ (published 2026-10-31 06:35Z, read 2026-11-03T18:03Z) "more than 30"
- AP: October had the most attacks on commercial ships since March — https://www.clickondetroit.com/news/world/2026/11/02/us-has-conducted-defensive-strikes-on-some-iranian-targets-in-the-strait-of-hormuz-us-official-says/ (updated 2026-11-02 20:49, read 2026-11-03T18:03Z).
- 1 Nov: UKMTO reported a vessel struck by an unknown projectile in the Strait, and a vessel hit about 9 nm off Lima, Oman — https://www.cbsnews.com/live-updates/iran-war-us-trump-negotiations-midterms/ (read 2026-11-03T18:00Z) "an unknown projectile"
- 2 Nov: Iran's Navy, via Fars, claimed a tanker caught fire on a sea mine; IRIB claimed 11 tankers since 25 Oct, without evidence. Not UKMTO — CBS, as above.
- 3 Nov: India-flagged MSV Al Jusufi struck by an "unidentified aerial object" off Oman, 13 rescued — CBS, as above (post 03:04). iMariner entry INC-20261103-004 cites UKMTO for a suspected attack off Oman on 3 Nov.
- 29 Oct: UKMTO reported a vessel on fire 9 nm north of Khasab — https://republicworld.com/world-news/ukmto-says-ship-seen-ablaze-in-strait-of-hormuz-off-oman-coast-2026-10-29-139923 (published 2026-10-29, read 2026-11-03T17:55Z).
- US officials described the 2 Nov Qeshm strikes as partly aimed at stopping attacks on commercial vessels — Iran International https://www.iranintl.com/en/liveblog/202610312594 (read 2026-11-03T17:55Z).

## Base rate
- No class in pipeline/reference-classes.json applies. Own count from the iMariner tracker data/incidents.json (https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json, downloaded 2026-11-03T18:04Z). Filter: merchant; regions Strait of Hormuz, Gulf of Oman, Persian Gulf; status confirmed or reported; UTC dates.
  - Any source, 1-31 Oct: 20 of 31 days. 14 Oct-2 Nov: 10 of 20. 20 Oct-2 Nov: 7 of 14 (21, 23, 26, 28, 29, 30 Oct, 1 Nov). 27 Oct-2 Nov: 4 of 7.
  - Entry cites UKMTO, 1-31 Oct: 12 of 31. 20 Oct-2 Nov: 5 of 14. Adding 1 Nov (UKMTO per CBS, tracker cites others) and 3 Nov (partial day, tracker): 7 of 15 for 20 Oct-3 Nov.
- Caveat: the tracker undercounts UKMTO, which counted more than 30 incidents in October, and re-merges entries (October days: 17 on 1 Nov, 20 now). Incidents cluster.

## Schedule slip
- slip_class `none`: `node scripts/refdata/slip.mjs none` returned "unknown class none" (run 2026-11-03T18:00Z). No scheduled event.
- Signs the rate may shift: a Hormuz-for-blockade framework would lower it, but nothing is agreed. Further US strikes could raise it.

## Risks
- Late notices: a UKMTO notice may come a day later; evidence is read on 6 Nov, and resolution may need the later copy.
- Time zone: 20:00-24:00 UTC on 4 Nov is 5 Nov Gulf time; 20:00-24:00 UTC on 5 Nov is 6 Nov.
- Hailings and turn-back orders are excluded; IRGC or IRIB claims alone are excluded.
- UKMTO's own page is not readable by our tools; resolution relies on trade press and wires quoting it.

## Sources
- https://www.ukmto.org/ukmto-products/warnings/2026 (attempted, not retrievable)
- https://www.thenationalnews.com/news/mena/2026/10/31/attacks-on-ships-transiting-hormuz-in-october-highest-since-start-of-war/
- https://www.cbsnews.com/live-updates/iran-war-us-trump-negotiations-midterms/
- https://www.clickondetroit.com/news/world/2026/11/02/us-has-conducted-defensive-strikes-on-some-iranian-targets-in-the-strait-of-hormuz-us-official-says/
- https://republicworld.com/world-news/ukmto-says-ship-seen-ablaze-in-strait-of-hormuz-off-oman-coast-2026-10-29-139923
- https://www.iranintl.com/en/liveblog/202610312594
- https://raw.githubusercontent.com/iMariner/maritime-security-tracker/main/data/incidents.json
- data/dossiers/2026-11-04/ir-ukmto-1.md

## Morning addendum (2026-11-04T04:15Z)
- Al Jazeera live blog, 4 Nov (modified 03:58Z): UKMTO reports a tanker hit by two "unknown projectiles" near Hormuz; the IRGC says three tankers hit mines. Incident time not given; before the window. No new US strike since Qeshm (2 Nov). Vance "sees progress"; Tehran warns of a "crushing response".
- UKMTO reported an attack in the Persian Gulf on 1-2 Nov as well (gCaptain citing UKMTO; strike 2347 UTC 1 Nov).
