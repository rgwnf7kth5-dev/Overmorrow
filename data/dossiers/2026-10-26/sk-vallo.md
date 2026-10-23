# sk-vallo

- **Claim:** Matúš Vallo is re-elected mayor of Bratislava in the 24 Oct 2026 municipal election, per the Slovak Statistical Office results published by 25 Oct 18:00 CET.
- **Criterion:** YES if the results of the Statistical Office of the Slovak Republic (ŠÚ SR, volby.statistics.sk), as published by 25 Oct 2026 18:00 CET, show Matúš Vallo with the most valid votes of all candidates for mayor (primátor) of the capital Bratislava. NO if another candidate has more votes, or if the election in Bratislava is postponed or ŠÚ SR publishes no Bratislava mayoral result by the deadline.
- **Deadline:** 2026-10-25T18:00:00+01:00
- **Written at:** 2026-10-23T19:10:00+02:00

## Schedule
- Joint municipal and regional elections Saturday 24 Oct 2026, polling 07:00–20:00 CEST; single round, first past the post (most votes wins, no runoff). Sweep: https://www.teraz.sk/komunalne-volby-2026 (TASR election hub, status official); https://en.wikipedia.org/wiki/2026_Slovak_local_elections .
- ŠÚ SR publishes results electronically on volby.statistics.sk overnight 24→25 Oct; clocks go back at 03:00 CEST → 02:00 CET on 25 Oct. 2022 precedent: results available the morning after the vote (sweep europe.json note). No Bratislava result can exist before polls close at 20:00 CEST on 24 Oct, i.e. nothing is known before 05:00 CEST 24 Oct.

## Facts
- Candidates (at least): Matúš Vallo (incumbent, Team Bratislava/independent), Jozef Ráž (Minister of Transport, linked to Smer-SD), Zuzana Šubová (Pirate Party – Slovensko), Ľubomír Geci (My Slovensko) — https://www.noviny.sk/slovensko/1275833-subova-je-ochotna-vzdat-sa-kandidatury-na-primatorku-v-prospech-valla-ma-podmienku (21 Oct 2026). Polymarket also lists Miroslav Heredoš, Martin Winkler, Dana Čahojová (markets.mjs, see below).
- AKO poll for TV JOJ 24, fieldwork 2–5 Oct 2026, n=500, published 20 Oct: decided voters Vallo 49.3%, Ráž 42.3%, Šubová 5.4%, Geci 3.0%; 18.4% of respondents undecided, 7.4% would not vote. Confidence intervals: Vallo 42.7–56%, Ráž 35.8–49% (overlap; publishers call it a "tight duel"). — https://bratislava.zoznam.sk/posledny-prieskum-pred-volbami-v-bratislave-vallo-vedie-pred-razom-uz-iba-o-par-percent/ ; https://dennikn.sk/minuta/5637032 ; https://joj24.noviny.sk/prieskumy/1274954-vallo-alebo-raz-prieskum-joj-24-ukazal-tesny-suboj-o-bratislavu ; https://www.pravda.sk/spravy/regionalne-volby-2026/clanok/2062917-vallo-alebo-raz-prieskum-ukazal-rozdiel-medzi-favoritmi-aj-to-co-trapi-bratislavcanov ; https://www.bratislavak.sk/clanky/15958/bratislavu-caka-volebna-drama-suboj-valla-a-raza-sa-vyostruje-novy-prieskum-ukazal-prekvapive-cisla . zoznam.sk headlines it as the "last poll before the election".
- 21 Oct 2026: Šubová offered to withdraw in Vallo's favour on condition he create a magistrate section for risk management/anti-social activity led by her with four ex-NAKA officers; otherwise she stays in and "won't take responsibility for a possible Ráž win". No report found of Vallo accepting. — noviny.sk URL above.
- 2022 result: Vallo 60.20%, Bratislava turnout 36.88% (sweep, citing https://en.wikipedia.org/wiki/2026_Slovak_local_elections and teraz.sk 2022 coverage).

## Base rate
- Class: final-poll leader wins (pipeline/reference-data/poll-error.json, winner_called_correctly): 5 of 6 national elections (n=6; wrong in CZ 2021). Not a local-election class; the Bratislava poll is a single n=500 poll ending 19 days before the vote.
- Poll-lead model: lead 7.0 pp, error sd = pooled rms lead error 2.734 (poll-error.json) → `models.mjs lead 7 2.734` = 0.9948. This error scale comes from national polls with final-week fieldwork and n in the thousands; a single local n=500 poll has a sampling sd on the lead alone of roughly 4 pp before any non-sampling error, so the national scale understates the spread.

## Schedule slip
- Class election-held: 0.010 [estimate] (slip.mjs, read 2026-10-23). No sign of postponement.

## Markets (read 2026-10-23T17:02–17:03Z, node scripts/markets.mjs)
- Polymarket "Bratislava Mayoral Election Winner" https://polymarket.com/event/bratislava-mayoral-election-winner-2026 (volume ~$14.6k, liquidity ~$38k, closes 25 Oct 03:59Z): Vallo Yes 0.9075–0.9085; Ráž 0.073; Heredoš 0.006; Geci 0.0055; Čahojová 0.002; Winkler 0.0005; Šubová 0.0005.
- No bookmaker odds gathered.

## Risks
- Only one public poll found, 19 days old, n=500, with overlapping intervals; 18.4% undecided.
- Ráž is a sitting minister with the governing party's machine; differential turnout (2022 turnout 36.88%) can swing a low-turnout local race.
- Šubová/Geci vote share splits the anti-Ráž or anti-Vallo camps; any late withdrawal could shift votes.
- Source timing: ŠÚ SR publication overnight during the clock change; a processing glitch is possible but deadline (18:00 CET 25 Oct) is generous.

## Sources
- https://www.noviny.sk/slovensko/1275833-subova-je-ochotna-vzdat-sa-kandidatury-na-primatorku-v-prospech-valla-ma-podmienku (opened)
- https://bratislava.zoznam.sk/posledny-prieskum-pred-volbami-v-bratislave-vallo-vedie-pred-razom-uz-iba-o-par-percent/ (opened)
- https://joj24.noviny.sk/prieskumy/1274954-vallo-alebo-raz-prieskum-joj-24-ukazal-tesny-suboj-o-bratislavu (opened)
- https://www.pravda.sk/spravy/regionalne-volby-2026/clanok/2062917-vallo-alebo-raz-prieskum-ukazal-rozdiel-medzi-favoritmi-aj-to-co-trapi-bratislavcanov (opened)
- https://www.bratislavak.sk/clanky/15958/bratislavu-caka-volebna-drama-suboj-valla-a-raza-sa-vyostruje-novy-prieskum-ukazal-prekvapive-cisla (opened)
- https://dennikn.sk/minuta/5637032 (opened)
- https://www.finreport.sk/agenturne-spravy/vallo-ma-pred-razom-naskok-prieskum-tiez-ukazal-akou-znamkou-by-bratislavcania-ohodnotili-jeho-pracu/ (fetch failed)
- Sweep: planners.json / europe.json (teraz.sk hub, Wikipedia 2026 Slovak local elections)
- Polymarket via markets.mjs; pipeline/reference-data/poll-error.json; slip.mjs; models.mjs
