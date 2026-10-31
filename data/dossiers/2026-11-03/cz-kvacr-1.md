# cz-kvacr-1
- **Claim:** The Czech government approves the Army of the Czech Republic development concept to 2040 at its meeting on 2 November 2026.
- **Criterion:** YES if at its meeting on 2 Nov 2026 the Czech government adopts a resolution approving the Concept of the Development of the Army of the Czech Republic to 2040 (Koncepce výstavby Armády ČR 2040), as shown in the government's list of resolutions (vlada.gov.cz / ODOK) or stated by the government or the Defence Ministry and reported by ČTK. Approval 'taking note' only, postponement or withdrawal resolve NO.
- **Event window:** 2026-11-02T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-10-31T18:15:00Z. Read times below are approximate, all between 17:35Z and 18:05Z on 31 Oct.

## Schedule
- vlada.gov.cz lists the next cabinet meeting on 2 Nov 2026, with a programme and "Dodatek č. 1" linked to ODOK — https://vlada.gov.cz/cz/vlada/ (read 2026-10-31T17:50Z). The ODOK programme page (https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-02) could not be read (fetch blocked by the site's robots rules), so the item number and wording on the programme are **not verified at the primary source**.
- ČTK, 30 Oct: President Pavel will attend Monday's cabinet meeting because the new army concept and the long-term defence outlook to 2045 are on the programme — https://www.ceskenoviny.cz/zpravy/pavel-se-zucastni-jednani-vlady-na-programu-bude-armadni-koncepce/2895044 (published 2026-10-30 13:30 CET, read 2026-10-31T17:40Z) "Pavel se zúčastní jednání vlády, na programu bude armádní koncepce" (headline).

## Facts
- **History of slips:** the cabinet was originally to discuss KVAČR 2040 on Mon 19 Oct; Babiš moved it to 26 Oct because the State Security Council had not yet discussed it — Ekonomický deník https://ekonomickydenik.cz/babis-kvacr-2040-prutahy/ (published 2026-10-19, read 2026-10-31T17:45Z) "Ten termín se posunul proto, protože jsme si vlastně uvědomili, že to neprojednala Bezpečnostní rada státu." Babiš: "Trvalo to dlouho, nevím, co je na tom složitého."
- **Security Council, 20 Oct:** took note of the concept, recommended no changes, and told the minister to submit it to the next cabinet meeting; "the plan stands that the government will discuss it next week" (i.e. 26 Oct) — Echo24 https://echo24.cz/a/HnzRC/zpravy-domaci-bezpecnostni-rada-statu-armadni-koncepce-tajne-sluzby-petr-pavel-andrej-babis (published 2026-10-20 12:58 CEST, read 2026-10-31T17:47Z) "Platí plán, že příští týden ji projedná vláda." Minister Bednárik (SPD) attributed the delay to the recent appointment of Chief of General Staff Hlaváč.
- **26 Oct:** not approved. ČTK on 30 Oct says the document was not discussed at the government session (refers to the previous meeting) — ČTK 30 Oct (above). vlada.gov.cz press releases for 26 Oct mention only the fuel-price measure — https://vlada.gov.cz/scripts/detail.php?pgid=1305 (read 2026-10-31T17:55Z); ČT24 summary of 26 Oct cabinet (fuel caps, appellate-courts bill, koruna in the constitution) mentions no army concept — https://ct24.ceskatelevize.cz/clanek/domaci/vlada-by-mela-projednat-zda-bude-pokracovat-v-regulaci-cen-pohonnych-hmot-379004 (published 2026-10-26, read via ČT24 topic page 2026-10-31T18:00Z). No public reason for the 26 Oct non-discussion was found.
- **Content (ČTK, 30 Oct):** per material ČTK obtained, planned funding to 2030 allows only "limited development of selected capabilities"; professional-soldier target raised to at least 32,000 by 2030 (2023 concept: 30,000 plus 10,000 active reservists). Defence Minister Zůna (SPD) said in October it would be approved and published by the end of October. Preparation was months late (originally expected early summer) — ČTK 30 Oct (above).
- **Precedent for the resolution form:** the previous concept was "approved" (schválila) by the Fiala government in 2023 — ČTK 30 Oct (above). The Security Council on 20 Oct only "took note" (vzala na vědomí) — Echo24 (above). A "taking note" resolution by the cabinet would resolve NO.
- **Pavel's presence:** Pavel last attended a cabinet session in June amid a dispute with the government over leading the delegation to the NATO summit — ČTK 30 Oct (above). His attendance is tied to this item.
- **Babiš's stance:** publicly impatient with the delay and wants +3,000 soldiers a year, SPYDER air defence and anti-drone systems — Ekonomický deník 19 Oct (above).

## Base rate
- No specific class in pipeline/reference-classes.json. The schedule-slip class `cz-government-item` (prior 0.20, n=6, estimate) covers "material on the published agenda of a cabinet meeting is approved that day". This item has already slipped twice (19 Oct → 26 Oct → 2 Nov); own loose count from this dossier: 0 of 2 previously announced dates kept.

## Schedule slip
- `cz-government-item`: rate 0.171 [estimate], prior 0.20, own 0/1 (`node scripts/refdata/slip.mjs cz-government-item`, run 2026-10-31T18:06Z).
- Signs it may move: two earlier slips; ODOK programme not verified; the defence outlook to 2045 is discussed together with it and funding to 2030 is described as tight, and the President has publicly criticised the government's defence-spending cuts (headline only, undated in search results: https://ground.news/article/czech-president-adds-to-criticism-of-governments-defence-spending-cuts_d253f4). Signs it holds: the President's attendance is arranged around this item; the Security Council recommended no changes; the minister promised approval by end-October; Babiš publicly pushes for it.

## Risks
- Postponed again (third time), e.g. if the joint session with the President turns into a funding dispute or the 2045 outlook is not ready.
- Cabinet adopts only "bere na vědomí" (takes note) rather than "schvaluje" — resolves NO.
- Approved but resolution posted on ODOK late; ČTK reporting of the press conference should cover it the same day.
- Classified annexes: the resolution may be partly non-public; the criterion accepts a government/MoD statement reported by ČTK.

## Sources
- https://vlada.gov.cz/cz/vlada/
- https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-02 (not readable)
- https://www.ceskenoviny.cz/zpravy/pavel-se-zucastni-jednani-vlady-na-programu-bude-armadni-koncepce/2895044
- https://ekonomickydenik.cz/babis-kvacr-2040-prutahy/
- https://echo24.cz/a/HnzRC/zpravy-domaci-bezpecnostni-rada-statu-armadni-koncepce-tajne-sluzby-petr-pavel-andrej-babis
- https://vlada.gov.cz/scripts/detail.php?pgid=1305
- https://ct24.ceskatelevize.cz/tema/ustavni-soud-558 (listing incl. 26 Oct cabinet summary)
- https://www.e15.cz/byznys/obrana-a-zbrojni-prumysl/nova-armadni-koncepce-do-roku-2040-cesko-chysta-obri-nakupy-za-stovky-miliard-do-hry-vstoupi-i-prezident-pavel-1433160 (29 May 2026, background only)
- https://ground.news/article/czech-president-adds-to-criticism-of-governments-defence-spending-cuts_d253f4 (search-result headline only)
