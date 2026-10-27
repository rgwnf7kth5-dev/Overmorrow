# cz-prague-pha-sobe-29
- **Claim:** By 23:59 Prague time on 29 October 2026, Praha sobě publicly confirms that it will join a coalition with STAN and Spolu at Prague City Hall.
- **Criterion:** YES if, between 00:00 on 28 Oct 2026 and 23:59:59 CET on 29 Oct 2026, Praha sobě confirms that it will enter a coalition with STAN and Spolu to govern Prague. It can do this through its leader Adam Scheinherr, another authorised representative, an official statement, or the announced result of a vote by its members, club or board. The confirmation must be reported by ČTK, ČT24, iROZHLAS, Deník or another major Czech outlet, or published on Praha sobě's own channels. A confirmation conditional only on the formal signing of the coalition contract counts. These do not count: "talks continue", acceptance of seats or portfolios without a commitment to join, and a confirmation made before 00:00 on 28 Oct. NO if no such confirmation is made in the window.
- **Event window:** 2026-10-28T00:00:00+01:00 to 2026-10-29T23:59:59+01:00
- **Deadline:** 2026-10-29T23:59:59+01:00
- **Written at:** 2026-10-27T18:25:00Z

## Schedule
- No scheduled Praha sobě decision on 28 or 29 Oct was found. After the 27 Oct round, Scheinherr must take the property-portfolio offer to his council club and negotiating team. No date is given. — Pražský deník https://prazsky.denik.cz/komunalni-volby/praha-sobe-souhlasi-se-dvema-radnimi-misto-tri-koalici-ale-zatim-nepotvrdila/ (published 2026-10-27 13:20, read 2026-10-27T17:41Z) "musím převést do našeho zastupitelského klubu a do vyjednávacího týmu"
- Next steps per ČTK (27 Oct): top-level three-party talks with Praha sobě on Monday 2 Nov and with the Pirates on Tuesday 3 Nov. Working groups with both parties, three members each per portfolio, run until the end of next week. STAN will announce the result of the talks at the start of the following week. — ČTK live https://www.ceskenoviny.cz/zpravy/-zive-praha-sobe-souhlasi-se-dvema-radnimi-koalici-ale-zatim-nepotvrdila/2893550 (published/updated 2026-10-27 13:21, read 2026-10-27T18:05Z)
- Constituent session of the assembly: expected around 19 Nov, with Hlaváček (STAN) proposed as mayor. — ČTK https://www.ceskenoviny.cz/zpravy/stan-spolu-a-praha-sobe-resily-program-a-gesce-znovu-se-sejdou-v-utery/2893369 (published 2026-10-26 15:55, carried over)
- 28 Oct is a state holiday.

## Facts
- 27 Oct: Praha sobě accepted two council seats instead of three, with transport (Scheinherr himself) and property, under "určitých podmínek a záruk", for example keeping the transport councillor's powers intact. It has not confirmed entry into the coalition, and the allocation of portfolios among its councillors has not been discussed. — Pražský deník (above) "Koalici ale zatím nepotvrdila"
- The Pirates received a modified offer on 27 Oct: one council seat with the property and housing portfolio, plus one more committee chair. They have not responded. Nislerová: "Jsou tam nějaké pojistky a mechanismy, které by mohly zlepšit naše postavení" and "Teď je to skutečně o tom programu". — ČTK 2893550 (above)
- Hlaváček said a STAN–Spolu coalition alone (34 of 65 seats) remains possible. If no three-party coalition forms before the November session, they would form one and keep seats open. — ČTK 2893550; Pražský deník (above)
- Council split under discussion: STAN 5, Spolu 4, Praha sobě 2 (11 seats). Assembly: STAN 17, Spolu 17, Praha sobě 13, ANO 11, Pirates 7. — ČTK 2893369; ČTK https://www.ceskenoviny.cz/zpravy/praha-sobe-nabidla-stan-vetsinu-v-rade-a-post-primatora-v-koalici-s-piraty/2890525 (carried over)
- The earlier claim cz-prague-three-party-28 (edition 29 Oct) asked whether a three-party agreement would be announced by 28 Oct. The 27 Oct round ended without one, as above.

## Base rate
- `coalition-deal-announced-short-window`: base_rate 0.3, own record 1 YES / 4 NO (n=5) (pipeline/reference-classes.json).
- `unscheduled-announcement-within-one-day`: base_rate null, own record 1 YES / 11 NO (n=12).

## Schedule slip
- No scheduled event behind the claim. Slip class: none.
- For reference, `negotiation-round` is 0.164 [estimate] (slip.mjs, run 2026-10-27T18:05Z).
- Timing signals: the process is set for 2 Nov (Praha sobě round), then working groups to about 6 Nov, then a STAN announcement in the week of 9 Nov. Nothing points to a Praha sobě decision on 28–29 Oct.

## Risks
- YES path: the Praha sobě club meets during the holiday period and Scheinherr announces "jdeme do toho" before Monday's round to strengthen his position against the Pirates' parallel offer.
- NO path: Praha sobě waits for the working groups and the 2 Nov round, as the stated timetable implies. The Pirates' parallel offer (also involving property and housing) may make Praha sobě hold out for better terms.
- Resolution: "we are ready to go into the coalition if…" with open conditions is ambiguous. Count it only if it reads as a commitment to join rather than a negotiating stance.

## Sources
- https://prazsky.denik.cz/komunalni-volby/praha-sobe-souhlasi-se-dvema-radnimi-misto-tri-koalici-ale-zatim-nepotvrdila/
- https://www.ceskenoviny.cz/zpravy/-zive-praha-sobe-souhlasi-se-dvema-radnimi-koalici-ale-zatim-nepotvrdila/2893550
- https://www.irozhlas.cz/zpravy-domov/praha-sobe-souhlasi-na-magistratu-se-dvema-radnimi-misto-tri-koalici-ale-zatim_2610271324_lar (fetch failed)
- https://www.ceskenoviny.cz/zpravy/stan-spolu-a-praha-sobe-resily-program-a-gesce-znovu-se-sejdou-v-utery/2893369 (carried over)
- https://www.ceskenoviny.cz/zpravy/praha-sobe-nabidla-stan-vetsinu-v-rade-a-post-primatora-v-koalici-s-piraty/2890525 (carried over)
- data/dossiers/2026-10-29/cz-prague-three-party-28.md
