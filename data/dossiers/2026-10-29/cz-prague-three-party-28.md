# cz-prague-three-party-28
- **Claim:** By 23:59 on 28 October 2026, STAN, Spolu and Praha sobě publicly announce that they have agreed to form a three-party coalition to govern Prague.
- **Criterion:** YES if, between 06:00 CET on 27 Oct 2026 and 23:59:59 CET on 28 Oct 2026, any of the following publicly states that STAN, Spolu and Praha sobě have agreed to form a coalition together at Prague City Hall: the three groupings jointly; the lead negotiators of all three; or the lead negotiator of one of them (e.g. Petr Hlaváček, Tomáš Portlík, Adam Scheinherr), provided no representative of the other two contradicts it by 23:59 on 28 Oct. ČTK, ČT24, iROZHLAS or another major Czech outlet must report it. An agreement still awaiting approval by party bodies, or one whose coalition contract and programme statement are still being drafted, counts if the parties say they have agreed to govern together. Signing the coalition contract is not required; a signing in the window also counts. These do not count: "talks continue", "we are close", agreement on some points only, a seat count while a party says it has not yet decided, and a STAN–Spolu coalition without Praha sobě. NO if no such announcement is made in the window, including if the 27 Oct meeting is postponed or ends without agreement.
- **Deadline (event window end):** 2026-10-28T23:59:59+01:00
- **Written at:** 2026-10-26T19:30:00+01:00

## Relation to earlier claim
- `cz-prague-coalition-signed-27` (edition 28 Oct) asks whether the three agree the portfolio split by 27 Oct. This claim asks about an agreement to form the coalition and adds 28 Oct (a holiday). After 26 Oct the draft portfolio split was already public, so the open question is whether the three close the deal. Signing the contract by 28 Oct was rejected as the target: no signing date is mentioned, the programme statement is written only after an agreement, and the 2022 Prague contract was signed 144 days after the election. That version would be a near-certain NO.

## Schedule
- Talks resume Tue 27 Oct in the morning. Per the sweep (ČT24/ČTK) they start at 9:30, and Hlaváček expects a long meeting and wants a deal. He also has an informal meeting with the Pirates that day — ČTK https://www.ceskenoviny.cz/zpravy/stan-spolu-a-praha-sobe-resily-program-a-gesce-znovu-se-sejdou-v-utery/2893369 (published 2026-10-26 15:55, updated 17:38; read 2026-10-26T18:11Z) "znovu se sejdou v úterý"
- Constituent session of the assembly: probably 19 Nov (Hlaváček) — same source.

## Facts
- Draft split discussed on 26 Oct, not final. The council has 11 seats: STAN 5 (územní rozvoj, bydlení, životní prostředí, bezpečnost, IT), Spolu 4 (finance, infrastruktura, sociální věci a zdravotnictví, kultura), Praha sobě 2 (doprava, majetek). Hlaváček is proposed as mayor — ČTK 2893369 (above); ČT24 https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/stan-spolu-a-praha-sobe-resily-rozdeleni-gesci-379026 (published 2026-10-26 ~15:40–16:40, via sweep)
- Still open on 26 Oct: at least four points (Hlaváček), plus the programme statement, the staffing of working groups and supervisory boards of city companies. Hlaváček did not rule out the Pirates, who were offered one seat — ČTK 2893369
- Quotes from ČTK 2893369. Hlaváček: "Myslím, že jednání běží rychle, myslel jsem si, že bude delší." and "Věřím, že se buď dohodneme, nebo budeme muset hledat nějakou další cestu." Scheinherr (Praha sobě): "Bylo to ve velice příjemném tónu, takže si myslím, že zatím ta jednání probíhají seriózně." Portlík (Spolu): "Pro nás je důležité, abychom věděli, že Praha sobě bude respektovat základní věci."
- ČT24, Hlaváček: "Když se zítra (v úterý) dohodneme, tak si myslím, že se práce na programovém prohlášení může rozjet." — ČT24 379026 (via watch_a.json)
- Fallback: without a three-party deal by the November session, STAN and Spolu (34 of 65 seats) form a two-party coalition and leave seats open — ČTK 2893369; ČTK https://www.ceskenoviny.cz/zpravy/prazsky-klub-stan-ve-ctvrtek-prijme-doporuceni-k-magistratni-koalici/2891104 (read 2026-10-25T18:20Z, carried over)
- Results (65 seats): STAN 17, Spolu 17, Praha sobě 13, ANO 11, Pirates 7 — ČTK https://www.ceskenoviny.cz/zpravy/praha-sobe-nabidla-stan-vetsinu-v-rade-a-post-primatora-v-koalici-s-piraty/2890525 (carried over)
- Background frictions: STAN–Spolu programme differences (housing, parking, toll) and a strained Hlaváček–Scheinherr relationship before the election — Reflex https://www.reflex.cz/clanek/komentare/138690/koalicni-rebus-v-praze-stan-a-spolu-rozdeluje-doprava-i-bydleni-s-prahou-sobe-spatne-vztahy.html (published 2026-10-12, carried over). On 19 Oct Praha sobě had preferred a coalition without Spolu — Novinky https://www.novinky.cz/clanek/volby-komunalni-prazska-koalice-se-rysuje-vitezne-stan-rozdava-nabidky-40603616 (carried over)
- Comparable 2026 city: Pardubice signed a five-party coalition (announced 26 Oct) — ČT24 https://ct24.ceskatelevize.cz/clanek/regiony/pardubicky-kraj/pardubice-povede-koalice-peti-subjektu-vitezne-ano-bude-v-opozici-379032 (via sweep)

## Base rate
- No class in pipeline/reference-data or reference-classes.json fits. Non-systematic 2026 count from earlier dossiers: Plzeň announced its council composition on 22 Oct, Hradec Králové split portfolios before signing on 2 Nov, Pardubice signed on 26 Oct. No rate for "deal announced at the round after the portfolio draft". null.

## Schedule slip
- `negotiation-round`: 0.300 [estimate] (`node scripts/refdata/slip.mjs`, run 2026-10-26). Signs of movement: Hlaváček says the meeting may run long and parallel contact with the Pirates continues. 28 Oct is a holiday, so a follow-up round that day is less likely.

## Risks
- The meeting ends with "we agreed on most points, details next week". Praha sobě asks for internal approval and says it has not decided yet (NO under the criterion).
- Hlaváček announces a deal and Praha sobě qualifies it (contradiction gives NO).
- A Pirate option, or STAN–Spolu alone, replaces Praha sobě.
- Resolution: wording like "dohoda na koalici" versus "shoda na gescích" needs care. A portfolio agreement stated as the basis of a joint coalition counts; a portfolio list alone, with the coalition itself left open, does not.

## Sources
- https://www.ceskenoviny.cz/zpravy/stan-spolu-a-praha-sobe-resily-program-a-gesce-znovu-se-sejdou-v-utery/2893369
- https://ct24.ceskatelevize.cz/clanek/regiony/hlavni-mesto-praha/stan-spolu-a-praha-sobe-resily-rozdeleni-gesci-379026 (sweep)
- https://www.ceskenoviny.cz/zpravy/prazsky-klub-stan-ve-ctvrtek-prijme-doporuceni-k-magistratni-koalici/2891104
- https://www.ceskenoviny.cz/zpravy/praha-sobe-nabidla-stan-vetsinu-v-rade-a-post-primatora-v-koalici-s-piraty/2890525
- https://www.reflex.cz/clanek/komentare/138690/koalicni-rebus-v-praze-stan-a-spolu-rozdeluje-doprava-i-bydleni-s-prahou-sobe-spatne-vztahy.html
- https://www.novinky.cz/clanek/volby-komunalni-prazska-koalice-se-rysuje-vitezne-stan-rozdava-nabidky-40603616
- https://ct24.ceskatelevize.cz/clanek/regiony/pardubicky-kraj/pardubice-povede-koalice-peti-subjektu-vitezne-ano-bude-v-opozici-379032 (sweep)
- data/dossiers/2026-10-28/cz-prague-coalition-signed-27.md
