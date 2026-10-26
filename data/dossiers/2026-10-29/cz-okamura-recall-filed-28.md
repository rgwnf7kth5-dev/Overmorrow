# cz-okamura-recall-filed-28
- **Claim:** By 23:59 Prague time on 28 October 2026, opposition MPs submit to the Chamber of Deputies (to the Speaker or the Chamber's office) a written proposal to recall Tomio Okamura as Speaker, signed by at least 80 MPs.
- **Criterion:** YES if, between 06:00 CET on 27 Oct 2026 and 23:59:59 CET on 28 Oct 2026, a written proposal to recall Okamura as Speaker is submitted to the Chamber (to the Speaker, the chamber's office or another formal channel). It must be signed by at least 80 MPs, which is two-fifths of all deputies. ČTK, ČT24, iROZHLAS or another major Czech outlet, an official statement of an opposition club, or psp.cz must confirm both the submission and that at least 80 signed. These do not count: announcements, signature collection still under way, a submission with fewer than 80 signatures, and a request merely to add the item to the agenda without the signed recall proposal. NO if no such submission is made in the window, including if the opposition waits to submit it at the sitting on 3 Nov.
- **Deadline (event window end):** 2026-10-28T23:59:59+01:00
- **Written at:** 2026-10-26T19:30:00+01:00

## Relation to earlier claim
- This is the same event as `cz-okamura-recall-signatures` (edition of 28 Oct, window 26 Oct 06:00 – 27 Oct 23:59), extended to the holiday of 28 Oct. As of the 26 Oct evening sweep, no submission had been reported on 26 Oct. If a 26 Oct submission comes to light, this claim is settled before its window and the morning should drop it.

## Schedule
- The Chamber's 34th sitting is "přerušeno do 3. 11. 2026, 14:00". The week of 26–30 Oct has committee meetings only — psp.cz https://www.psp.cz/sqw/hp.sqw?k=1005 and https://www.psp.cz/sqw/hp.sqw?k=202&r=2026&c=44 (read 2026-10-25T17:45Z, carried over)
- The Pirates (Hřib, 24 Oct) will propose the recall "na nejbližším jednání Sněmovny", i.e. 3 Nov — ČTK https://www.ceskenoviny.cz/zpravy/pirati-navrhnou-odvolani-okamury-z-cela-snemovny-podpori-je-dalsi-strany/2892523 (published 2026-10-24 15:02, read 2026-10-25T17:40Z, carried over)
- 28 Oct is a state holiday (Independence Day), so the Chamber's offices are normally closed.

## Facts
- Rule: a recall needs a written proposal from "dvou pětin všech poslanců", i.e. 80 MPs. The opposition has 92 MPs (ODS 27, STAN 22, Pirates 18, KDU-ČSL 16, TOP 09 9) — ČTK 2892523 (above). The exact section of the rules of procedure was not verified in the statute text this evening.
- Positions on 24 Oct: TOP 09 (Havel) and KDU-ČSL (Petrusová: support, but "mainly a political gesture") back it. STAN (Rakušan) will discuss it in the club first. ČTK gives no ODS position — ČTK 2892523 (above)
- New on 26 Oct: ODS chair Kupka said ODS wants Okamura removed. He asked police president Vondrášek to review the Protection Service's removal of the public from the gallery on 23 Oct. The Chamber security committee will deal with the incident on 3 Nov — iROZHLAS https://www.irozhlas.cz/zpravy-domov/tlak-na-prezidium-i-okamuru-kupka-zada-vondrasku-o-provereni-postupu-pri_2610261717_dci (published 2026-10-26 17:17; WebFetch refused, so this comes from the sweep summary); iDNES https://www.idnes.cz/zpravy/domaci/ods-policie-prezident-provereni-postup-verejnost-poslanecka-snemovna-kupka-zruseni-koncesionarske-po.A261026_171716_domaci_mikp (published 2026-10-26 16:49, headline "ODS … Chce odvolat Okamuru"; WebFetch refused); Novinky https://www.novinky.cz/clanek/domaci-incident-na-snemovnim-balkonu-uz-resi-policie-40605086 (published 2026-10-26 17:23, via sweep). None of these three, as summarised, gives a submission date.
- Precedent: on 13 Jan 2026 the five opposition clubs handed the Speaker 92 signatures, during a running sitting, for an agenda item on Okamura's recall. They said they would propose it again at the start of later sittings — https://www.pirati.cz/jak-pirati-pracuji/pirati-pokracuji-ve-snaze-odvolat-tomia-okamuru-z-cela-snemovny-opozicni-strany-predaly-sesbirane-podpisy-predsedovi-dolni-komory/ (published 2026-01-13 13:02, read 2026-10-25T17:52Z, carried over). Earlier attempts (January 2026, over the New Year speech) failed — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/ods-chce-ve-snemovne-projednat-okamurovy-vyroky-podpori-jeho-odvolani-368831 (search-result title, read 2026-10-26T18:24Z)
- Trigger: the overnight 23–24 Oct sitting on tisk 231 and the gallery incident — ČTK 2892523 (above)

## Base rate
- `unscheduled-announcement-within-one-day` (pipeline/reference-classes.json): base_rate null, own record 1/10. Own count for the specific class, opposition recall proposals against Okamura in this term: n=1 (Jan 2026). That one was submitted during a running sitting, not in a recess week. Too small for a rate.

## Schedule slip
- Slip class: none (no scheduled slot). The Pirates' own timing points to the 3 Nov sitting, outside the window. The holiday on 28 Oct leaves effectively one working day (27 Oct) in the window.

## Risks
- YES path: the opposition collects all 92 signatures early (ODS and STAN joining) and hands them in on 27 Oct as a media act before the holiday or the 3 Nov strike.
- NO path: STAN's club decision is unknown, and the item is naturally filed when the sitting resumes on 3 Nov. The 28 Oct holiday makes the office route unlikely.
- Resolution risk: a "signatures handed over" report may not say whether it is the recall proposal itself or a request to add an agenda item. The criterion requires the recall proposal with at least 80 signatures.

## Sources
- https://www.ceskenoviny.cz/zpravy/pirati-navrhnou-odvolani-okamury-z-cela-snemovny-podpori-je-dalsi-strany/2892523
- https://www.irozhlas.cz/zpravy-domov/tlak-na-prezidium-i-okamuru-kupka-zada-vondrasku-o-provereni-postupu-pri_2610261717_dci (refused)
- https://www.idnes.cz/zpravy/domaci/ods-policie-prezident-provereni-postup-verejnost-poslanecka-snemovna-kupka-zruseni-koncesionarske-po.A261026_171716_domaci_mikp (refused)
- https://www.novinky.cz/clanek/domaci-incident-na-snemovnim-balkonu-uz-resi-policie-40605086 (sweep only)
- https://www.pirati.cz/jak-pirati-pracuji/pirati-pokracuji-ve-snaze-odvolat-tomia-okamuru-z-cela-snemovny-opozicni-strany-predaly-sesbirane-podpisy-predsedovi-dolni-komory/
- https://ct24.ceskatelevize.cz/clanek/domaci/ods-chce-ve-snemovne-projednat-okamurovy-vyroky-podpori-jeho-odvolani-368831 (title only)
- https://www.psp.cz/sqw/hp.sqw?k=1005
- https://www.psp.cz/sqw/hp.sqw?k=202&r=2026&c=44
- data/dossiers/2026-10-28/cz-okamura-recall-signatures.md
