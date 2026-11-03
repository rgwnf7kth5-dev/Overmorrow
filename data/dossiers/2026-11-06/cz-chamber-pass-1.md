# cz-chamber-pass-1
- **Claim:** Between 00:00 on 4 November and 23:59 on 5 November 2026, the Chamber of Deputies passes at least one bill in a third-reading vote.
- **Criterion:** YES if between 00:00 on 4 Nov and 23:59 Prague time on 5 Nov 2026 the Chamber of Deputies approves any bill (návrh zákona) in a third-reading final vote, as recorded in the vote lists on psp.cz or reported by ČTK. Any bill and any proposer counts. Approval in first reading under section 90(2) of the rules of procedure, votes on 3 Nov or 6 Nov, and votes on agenda or other resolutions do not count. NO if no bill is approved in a third-reading final vote in that window.
- **Deadline / event window:** 2026-11-04T00:00+01:00 to 2026-11-05T23:59+01:00 (Europe/Prague; V4 claim: Europe/Bratislava)
- **Written at:** 2026-11-03T18:15Z. Read times are approximate (17:50Z-18:10Z). Pages were read through a summarising fetch tool: quoted Czech or Slovak is the wording it returned. 'via' = reused from an earlier dossier, not re-opened.
- **Rewrite:** the suggested claim named one bill. The reading stage of Lepší penzijko, the child certificate and the January pension rise could not be confirmed (psp.cz is blocked), so a named bill would be a guess. The claim tests the open point: whether obstruction lets any bill finish this week.

## Schedule
- Approved agenda of the 34th sitting, copy dated 16 Oct 14:10, via data/dossiers/2026-11-05/cz-army-1.md (read 2026-11-02): "St 4. 11. 2026: případně body z bloku 3. čtení body dle schváleného pořadu schůze"; "Čt 5. 11. 2026: v 11.00 hodin: body dle schváleného pořadu schůze", "ve 14.30 hodin: 203"; "Pá 6. 11. 2026: případně body z bloku 3. čtení". Stale; the meaning of item 203 was not confirmed. Not re-opened: psp.cz refuses the fetcher.
- No day-by-day plan for 4-6 Nov is published in any article read. ČTK's report says so in effect: no day schedule, voting times or bills named.

## Facts
- Coalition will not hold debates or votes after 19:00 this week; Friday ends at 14:00 — Echo24 https://m.echo24.cz/a/Htrq7/snemovna-koalice-opozice-nacher-mala-okamura-babis-ano-spd-motoriste-poplatky-jednani-obstrukce-hlasovani-poslanci (published 2026-11-03 15:16, read 2026-11-03T18:00Z) "Celý týden nebudeme načítat jednání a hlasování po 19. a 21. hodině."
- Nacher treats it as a trial — same page "Uvidíme a uvidí to i veřejnost, co jsme schopni takto projednat."; after it the coalition will assess night sittings or extraordinary sessions.
- Named items: Lepší penzijko, child certificate; Okamura adds a pension rise from January and tougher animal-cruelty penalties — same page. No reading stage given, no day given.
- Okamura expects blocking — same page "Myslím si, že opozice bude blokovat jednání, abychom to nemohli projednat."
- Morning meeting of leaders and club chairs ended without agreement; Malá proposed about thirty programme changes; about forty opposition MPs spoke on the agenda, the block with voting took about four hours — ČTK https://www.ceskenoviny.cz/zpravy/opozice-neprosadila-doplneni-programu-schuze-o-odvolani-okamury-z-cela-snemovny/2896078 (published 2026-11-03 15:06, updated 18:20, read 2026-11-03T18:00Z) (paraphrase).
- Benda: opposition will debate every bill at length until the fee bill is withdrawn — same page (paraphrase).
- Coalition had 87 MPs present against the removal motion on 3 Nov, opposition 72 — same page.
- Lepší penzijko: cabinet approved it on 24 Aug, proposed effect 1 Jan 2027 — Finance Ministry https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-schvalila-lepsi-penzijko-64961 (published 2026-08-24, read 2026-11-03T18:00Z) "Platnost změn je navrhována k 1. lednu 2027." Whether it had first reading or a committee report is not confirmed.
- Could not confirm: whether Malá's programme changes were adopted; which bills stand at third reading; whether any third reading is set for 4 or 5 Nov.

## Base rate
- pipeline/reference-data/cz-chamber.json, 9th term: 256 of 258 bills with third-reading votes passed (0.992). This is the rate once a final vote is held; it says nothing about reaching it.
- reference-classes cz-chamber-government-bill-progress: own record 1 yes, 2 no.

## Schedule slip
- cz-chamber-gov-bill-reading: 0.60 chance a given reading slips (scripts/refdata/slip.mjs). The claim allows any bill, so one slip does not decide it; bills on a shared agenda under the same obstruction are not independent.

## Risks
- YES paths: coalition moves a third-reading block to a fixed slot; a bill with few speakers clears; coalition has the votes for programme changes.
- NO paths: long speeches on each item; third readings left to Friday (outside the window) or to later; no night sitting this week; opposition uses breaks.
- Resolution traps: a section 90(2) approval does not count; a third reading opened but interrupted does not count; a vote on 6 Nov does not count.

## Sources
- https://m.echo24.cz/a/Htrq7/snemovna-koalice-opozice-nacher-mala-okamura-babis-ano-spd-motoriste-poplatky-jednani-obstrukce-hlasovani-poslanci
- https://www.ceskenoviny.cz/zpravy/opozice-neprosadila-doplneni-programu-schuze-o-odvolani-okamury-z-cela-snemovny/2896078
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-schvalila-lepsi-penzijko-64961
- https://ct24.ceskatelevize.cz/tema/poslanecka-snemovna-218 (no third-reading item or Thursday plan)
- data/dossiers/2026-11-05/cz-army-1.md

## Research, 3 Nov evening
- The 34th sitting has already held third readings: four EU-implementing bills cleared final votes on 14 Oct (voted 104:14 to 148:0) — Sledovna https://sledovna.cz/hlasovani-prehled/ (undated tracker, newest vote 24 Oct, read 2026-11-03T18:36:55Z) "Dílčí hlasování 14 z 14 (3. čtení)." The tracker shows nothing from November, so it says nothing about 3 Nov or what is left at third reading.
- Later bills listed for the sitting are at first reading: labour code 20 Oct, 2027 budget 22 Oct, ČT/ČRo 23-24 Oct, platform work 16 Oct — same page. No third-reading item after 14 Oct appears there.
- ČT/ČRo fee bill is not a third-reading candidate this week: committee paused it until 10 Dec — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/opozice-zatahla-media-verejne-sluzby-do-politickeho-boje-mini-klempir-379120 (published 2026-10-29, read via the topic page 2026-11-03T18:36:55Z, not opened) (paraphrase).
- Coalition open to a fixed-time vote on the media bill at second reading — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/nedelni-debata-o-fungovani-snemovny-379190 (published 2026-11-01, read via the topic page 2026-11-03T18:36:55Z, not opened) (paraphrase). Concerns that bill only, not this week's agenda.
- ČTK report rechecked, last update 18:20: no evening events, no outcome for Malá's programme changes, no third reading mentioned — https://www.ceskenoviny.cz/zpravy/opozice-neprosadila-doplneni-programu-schuze-o-odvolani-okamury-z-cela-snemovny/2896078 (published 2026-11-03 15:06, read 2026-11-03T18:36:55Z) "Sněmovna tento týden jednat do noci nebude."
- Still could not confirm: which bills stand at third reading for 4 or 5 Nov; what the Chamber did on the evening of 3 Nov. ČT24's Chamber topic page ends at 1 Nov; two searches returned no reporting from this week; ceskezakony.cz and parlametr.cz would not load.
