# sk-vallo-10

- **Claim:** Matúš Vallo beats Jozef Ráž by more than 10 percentage points in the Bratislava mayoral election, per the Slovak Statistical Office results published by 25 Oct 18:00 CET.
- **Criterion:** YES if the ŠÚ SR results (volby.statistics.sk), as published by 25 Oct 2026 18:00 CET, show Matúš Vallo's share of the valid votes for mayor of Bratislava exceeding Jozef Ráž's share by more than 10.0 percentage points. NO if the gap is 10.0 points or less, if Ráž (or anyone else) beats Vallo, or if the election is postponed or no Bratislava result is published by the deadline.
- **Deadline:** 2026-10-25T18:00:00+01:00
- **Written at:** 2026-10-23T19:10:00+02:00
- **Why this threshold:** the plain win claim (sk-vallo) sits near the top of the range (Polymarket 0.91); the only poll gives a 7.0-point lead, so a 10-point bar targets the uncertain part. Shares in the ŠÚ SR tables are percentages of valid votes for the office.

## Schedule
- As sk-vallo: vote Sat 24 Oct 07:00–20:00 CEST, single round; ŠÚ SR results overnight into 25 Oct (CET from 03:00 CEST). https://www.teraz.sk/komunalne-volby-2026 (sweep).

## Facts
- AKO/JOJ 24, 2–5 Oct 2026, n=500 (pub. 20 Oct): Vallo 49.3, Ráž 42.3, Šubová 5.4, Geci 3.0 (decided); lead 7.0 pp; CIs Vallo 42.7–56, Ráž 35.8–49; 18.4% undecided, 7.4% non-voters. — https://bratislava.zoznam.sk/posledny-prieskum-pred-volbami-v-bratislave-vallo-vedie-pred-razom-uz-iba-o-par-percent/ ; https://dennikn.sk/minuta/5637032
- The poll's four-candidate shares sum to 100; Polymarket lists at least three further candidates (Heredoš, Winkler, Čahojová), so real shares of the top two will be slightly lower than the poll's.
- 2022: Vallo won with 60.20% (sweep, https://en.wikipedia.org/wiki/2026_Slovak_local_elections). Ráž did not run in 2022.
- Šubová conditional withdrawal offer, 21 Oct — https://www.noviny.sk/slovensko/1275833-subova-je-ochotna-vzdat-sa-kandidatury-na-primatorku-v-prospech-valla-ma-podmienku

## Base rate / number context
- Poll lead 7.0, threshold 10 → model input lead − threshold = −3.0. `models.mjs lead -3 2.734` (pooled national rms lead error, poll-error.json, n=6) = 0.1363. The national error scale understates the spread for a single local n=500 poll 19 days out (sampling sd of the lead alone about 4 pp).
- Mean absolute lead error pooled 1.935 pp; CZ parliamentary rms 3.625 (poll-error.json).

## Schedule slip
- election-held 0.010 [estimate].

## Markets (read 2026-10-23T17:02Z)
- No margin market. Winner market: Polymarket Vallo 0.9075, Ráž 0.073 — https://polymarket.com/event/bratislava-mayoral-election-winner-2026

## Risks
- Single poll, old fieldwork, large undecided pool; incumbent races often break late either way.
- Turnout composition (2022 36.88%).
- Rounding: ŠÚ SR publishes shares to two decimals; a gap of exactly 10.00 resolves NO.

## Sources
- Same as sk-vallo (all opened pages listed there); Polymarket via markets.mjs; poll-error.json; models.mjs.
