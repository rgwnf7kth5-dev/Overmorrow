# cz-drone-bill-10
- **Claim:** At its meeting on 9 November 2026 the Czech government approves the Interior and Transport ministries' bill that lets critical-infrastructure operators stop drones over their sites and, as a last resort, destroy them.
- **Criterion:** YES if at its meeting on 9 Nov 2026 the government adopts a resolution approving the bill (usnesení "schvaluje", with or without changes), as shown in the government's resolutions (vlada.gov.cz / odok.gov.cz) or reported from the post-cabinet press conference or by ČTK. NO if the item is postponed, interrupted ("přerušila projednávání"), withdrawn, returned to the ministries, rejected, or if the government does not meet on 9 Nov. Taking note or approving only a "věcný záměr" does not count.
- **Event window:** 2026-11-09T00:00:00+01:00 to 2026-11-09T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-07T18:05:00Z

## Schedule
- vlada.gov.cz lists the 9 Nov meeting with a programme and an addendum: "Dodatek č. 1 programu schůze vlády dne 9. 11. 2026" linking to https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-09 — https://vlada.gov.cz/cz/vlada/jednani-vlady/ (read 2026-11-07T17:52Z). The ODOK programme page itself returned "Požadavek byl zablokován" (read 2026-11-07T17:52Z), so the item's place on the programme was not seen directly.
- ČTK says the cabinet will discuss it on Monday — https://www.ceskenoviny.cz/zpravy/vlada-projedna-obranu-kriticke-infrastruktury-proti-dronum/2898612 (published 2026-11-07 06:20 CET, read 2026-11-07T17:52Z) "Počítá s tím návrh ministerstev vnitra a dopravy, který v pondělí projedná vláda."

## Facts
- Content: operators may ask for special protected zones; trained employees may stop or, in extreme cases, destroy a drone; the Civil Aviation Authority declares the no-fly zones — ČTK 2898612 (above) "v krajním případě je i zničit"; "Bezletové zóny nad objekty kritické infrastruktury bude podle návrhu vyhlašovat po dohodě s dalšími subjekty Úřad pro civilní letectví."
- Others gain powers: intelligence services, Prison Service, GIBS; firefighters during rescue work; simpler rules for police and military police — ČTK 2898612 "oprávnění k zásahu získat podle návrhu také příslušníci zpravodajských služeb, vězeňské služby nebo Generální inspekce bezpečnostních sborů (GIBS)".
- It is a power, not a duty: "návrhem se pouze konstituuje oprávnění zamezovat letu bezpilotního letadla, nikoliv taková povinnost" — ČTK 2898612, quoting the Interior Ministry's submission.
- Goes to cabinet with unresolved objections (rozpory): the Agriculture Ministry and others want private security firms allowed to act, others object that intervention is allowed only over the perimeter and that radio jamming is not allowed, and that pilot liability for damage is missing — ČTK 2898612 "Ministerstva vládě návrh předkládají s několika rozpory."
- Minister Metnar (ANO) told the Chamber security committee on Tuesday 3 Nov that the bill will clearly define police powers; he signed an anti-drone equipment purchase a week earlier — ČTK 2898612 "před týdnem podepsal zakázku na nákup protidronové techniky".
- Bill name: the official title was not readable (ODOK blocked). Ekonomický deník calls it the "novela zákona, která má posílit odolnost subjektů kritické infrastruktury proti bezpilotním systémům", submitted at the end of July by Metnar and Transport Minister Ivan Bednárik (for SPD) — https://ekonomickydenik.cz/dron-vyhrady-bis-energetici/ (published 2026-08-25 04:30Z, read 2026-11-07T18:00Z) "předložili společně koncem července ministři vnitra Lubomír Metnar (ANO) a dopravy Ivan Bednárik (za SPD)".
- Consultation closed 18 Aug; ČTÚ warned that untrained jamming could paralyse mobile networks and emergency systems; BIS filed four fundamental comments (own powers, publication of zones, documentation, licence requirement); the Defence Ministry asked for the same power as BIS — Ekonomický deník (above) "Připomínkové řízení k normě skončilo 18. srpna."; "Čtyři zásadní připomínky předložila i Bezpečnostní informační služba (BIS)". ČTK's 7 Nov list of objections no longer names the BIS/Defence point, which suggests (own inference) it was met by adding intelligence services.
- Sent to inter-ministerial consultation on 21 Jul 2026 — MV https://mv.gov.cz/ministerstva-pripravila-navrh-nove-legislativy-o-antidronove-ochrane-kriticke-infrastruktury (published 2026-07-21 13:20, read 2026-11-07T18:00Z) "návrhu zákona, který byl dnes odeslán do meziresortního připomínkového řízení".
- Context: May 2026 drone disruption at Prague airport — ČTK 2898612 "květnové narušení provozu pražského letiště".
- Not found: any statement by Babiš, coalition partners or the Legislative Council (LRV) opinion on the bill; any sign it was pulled from the programme.

## Base rate
- No class for approval of a contested bill at a named meeting. The government-item slip class (below) covers "material on the published agenda is approved that day".

## Schedule slip
```
class                         prior   own         rate (P that the event slips)
cz-government-item            0.12    2/5         0.247  [estimate]
```
(`node scripts/refdata/slip.mjs cz-government-item`, run 2026-11-07T17:53Z.) Signs of possible slip: bill goes with several unresolved objections from ministries (Agriculture) and other bodies; the programme on ODOK could not be read to confirm the item's presence; an addendum to the programme exists (content unknown).

## Risks
- Interruption to settle the rozpory (private guards, jamming) is the main NO path; the cabinet often "přerušuje" items with open disputes.
- Cabinet may approve with a changed version (still YES) — make sure the resolution says "schvaluje".
- Monday is also busy with sector taxes and the coalition council in the evening; agenda overflow can push items.
- Resolutions are published on ODOK with delay; ODOK blocks scripted reading. The press conference or ČTK may not mention a minor item; the resolver may need the resolutions list on 10 Nov.

## Sources
- https://www.ceskenoviny.cz/zpravy/vlada-projedna-obranu-kriticke-infrastruktury-proti-dronum/2898612
- https://vlada.gov.cz/cz/vlada/jednani-vlady/
- https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-09 (blocked)
- https://ekonomickydenik.cz/dron-vyhrady-bis-energetici/
- https://mv.gov.cz/ministerstva-pripravila-navrh-nove-legislativy-o-antidronove-ochrane-kriticke-infrastruktury
- https://news.google.com/rss/search?q=drony+kritické+infrastruktury+zákon (headlines: SP ČR comments 20 Aug, ČT24 21 Jul, Ekonomický deník 6 Aug)
