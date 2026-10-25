# cz-prague-coalition-signed-27

- **Claim:** By 23:59 on 27 October 2026, STAN, Spolu and Praha sobě publicly announce that the three of them have agreed how the Prague City Council (rada) portfolios are divided among them, or sign a three-party coalition agreement.
- **Criterion:** YES if, between 06:00 CET on 26 Oct 2026 and 23:59 CET on 27 Oct 2026, the three groupings jointly, or a lead negotiator of one of them (e.g. Petr Hlaváček, Tomáš Portlík, Adam Scheinherr) without contradiction from another of the three by 23:59 on 27 Oct, publicly state that STAN, Spolu and Praha sobě have agreed the allocation of council portfolios (gesce) among the three, as reported by ČTK, ČT24 or another major Czech outlet; signing a three-party coalition agreement in the window also counts. Statements that talks continue, agreement "in principle" without the portfolio split, a seat count without portfolios, or a STAN–Spolu split without Praha sobě do not count. NO if no such announcement or signing happens in the window, including if the meeting is postponed.
- **Deadline (event window end):** 2026-10-27T23:59:59+01:00
- **Written at:** 2026-10-25T19:10:00+01:00

## Relation to the 26 Oct claim
- Same criterion as `cz-prague-coalition-agreement` (edition 27 Oct), window extended by one day (26 Oct 06:00 – 27 Oct 23:59). A YES on 26 Oct makes this YES too; the open part added is an announcement on Tuesday 27 Oct after a Monday meeting that ends without a result. Signing alone by 27 Oct was rejected as a target: no source mentions a signing date, programme talks continue, and the 2022 Prague agreement was signed 144 days after the election — that version would be a near-certain NO.

## Schedule
- Monday 26 Oct: negotiating teams of STAN, Spolu and Praha sobě meet; afterwards they are expected to announce the portfolio split — ČTK via České noviny https://www.ceskenoviny.cz/zpravy/prazsky-klub-stan-ve-ctvrtek-prijme-doporuceni-k-magistratni-koalici/2891104 (published 2026-10-22 11:31, updated 12:33, read 2026-10-25T18:20Z) "v pondělí" meeting; after it the parties are to announce which portfolios go to whom (paraphrase). Meeting time not published. (Carried over from 26 Oct dossier and re-read.)
- Same in ČT24 — https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/v-hlavnim-meste-asi-vznikne-koalice-stan-spolu-a-prahy-sobe-naznacil-hlavacek-378900 (published 2026-10-22, read 2026-10-24T16:48Z, carried over) "Po této schůzce by politici měli oznámit, jaké gesce připadnou kterému uskupení."
- Constituent assembly: "November" session, no exact date in sources read. Schedule status: reported.
- No reporting dated 24–25 Oct about the Monday meeting found (two searches on 25 Oct).

## Facts
- Results (65 seats, majority 33): STAN 17, Spolu 17, Praha sobě 13, ANO 11, Pirates 7 — ČTK https://www.ceskenoviny.cz/zpravy/praha-sobe-nabidla-stan-vetsinu-v-rade-a-post-primatora-v-koalici-s-piraty/2890525 (20 Oct; carried over).
- Planned council split: STAN 5, Spolu 4, Praha sobě 2 (11-member council); without a third partner STAN 6, Spolu 5 — ČTK 2891104 (above); ČT24: one Praha sobě seat with transport "Jedním z nich by byla gesce dopravy." (carried over).
- Fallback: if no three-party coalition by the November session, STAN and Spolu (34 seats) govern as two and keep negotiating; Hlaváček expects those talks could end in December — ČTK 2891104 (above). Hlaváček: "Praha musí dál fungovat".
- STAN and Spolu negotiate as one team; programme statement ready (Portlík) — Aktuálně https://zpravy.aktualne.cz/domaci/pokud-nebude-trojkoalice-do-listopadu-bude-prahu-ridit-koalice-stan-a-spolu/r~aaa29a7e1db2bef719c831ff917261fc/ (carried over) "STAN a Spolu už budou v jednáních vystupovat jako jeden tým."
- Pirates rejected STAN's offer (wanted 2 seats, offered 1) — ČT24 URL above (carried over).
- Praha sobě preferred STAN–Praha sobě–Pirates and wanted guarantees on transport and housing; on 22 Oct said it wants to keep negotiating (ČTK/ČT24, carried over). Novinky 19 Oct: Praha sobě wants a coalition without Spolu (paraphrase) — https://www.novinky.cz/clanek/volby-komunalni-prazska-koalice-se-rysuje-vitezne-stan-rozdava-nabidky-40603616 (carried over).
- Pre-election tensions: programme differences STAN–Spolu (housing, parking, toll) and a strained Hlaváček–Scheinherr relationship — Reflex https://www.reflex.cz/clanek/komentare/138690/koalicni-rebus-v-praze-stan-a-spolu-rozdeluje-doprava-i-bydleni-s-prahou-sobe-spatne-vztahy.html (published 2026-10-12 09:00, read 2026-10-25T18:21Z) "Složení koalice chce mít Hlaváček rozhodnuté do listopadu."
- Precedent: after the 2022 election, Spolu, Pirates and STAN signed the Prague coalition agreement 144 days after the vote — Pražský deník https://prazsky.denik.cz/zpravy_region/praha-koalice-magistrat-koalicni-smlouva-podpis-primator.html (headline read 2026-10-25T18:25Z in search result) "Spolu, Piráti a STAN podepsali koaliční smlouvu. 144 dní po volbách".

## Base rate
- No class in pipeline/reference-data/. Comparable 2026 cases (from the Pardubice dossier): Plzeň announced council composition 22 Oct; Hradec Králové split portfolios before signing on 2 Nov. Not a systematic count. null.

## Schedule slip
- negotiation-round: 0.300 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`, run 2026-10-25). The extra day (27 Oct) partly covers a slip of Monday's meeting by one day. Signs of movement: Praha sobě's preference for a coalition without Spolu; Spolu's preference for two parties; possible internal approval in Praha sobě (no information).

## Risks
- Meeting ends with "talks continue" or a further round later in the week.
- Partial announcement (seat count only, or only transport to Praha sobě) — resolver must check the full split is stated as agreed by all three.
- Praha sobě walks away → STAN–Spolu two-party split (NO).
- Announcement made but contradicted by Praha sobě (NO under the criterion).

## Sources
- https://www.ceskenoviny.cz/zpravy/prazsky-klub-stan-ve-ctvrtek-prijme-doporuceni-k-magistratni-koalici/2891104
- https://www.reflex.cz/clanek/komentare/138690/koalicni-rebus-v-praze-stan-a-spolu-rozdeluje-doprava-i-bydleni-s-prahou-sobe-spatne-vztahy.html
- https://prazsky.denik.cz/zpravy_region/praha-koalice-magistrat-koalicni-smlouva-podpis-primator.html (search result only)
- Carried over (data/dossiers/2026-10-27/cz-prague-coalition-agreement.md): ct24 378900, aktualne r~aaa29a7e…, novinky 40603616, ceskenoviny 2890525
