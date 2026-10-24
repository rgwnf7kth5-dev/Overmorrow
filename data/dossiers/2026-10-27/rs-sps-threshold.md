# rs-sps-threshold: Dačić's SPS-led list reaches 3%

- **Claim:** In the RIK preliminary results of Serbia's 25 October 2026 parliamentary election, Ivica Dačić's SPS-led list ("Ivica Dačić – Stability Factor", list no. 2) receives at least 3% of the vote.
- **Criterion:** YES if the RIK preliminary results (rik.parlament.gov.rs or a RIK session), published between 06:00 CET on 25 Oct and 23:59 CET on 26 Oct 2026, show list no. 2 at 3.00% or more. The percentage is the one RIK prints. If RIK prints none, it is the list's votes divided by the number of voters who voted. NO if the share shown is below 3.00%, or if the election is not held on 25 Oct. If RIK publishes in stages, the latest figure published in the window decides. If RIK publishes nothing in the window, the claim stays pending.
- **Deadline (event window end):** 2026-10-26T23:59:59+01:00; resolves by 2026-10-27T05:00:00+01:00
- **Written at:** 2026-10-24T19:20:00+02:00

## Schedule
- Same as rs-students-most-votes: election 25 Oct; RIK preliminary results in 2023 at about 21:46 CET on the Monday (Insajder, https://insajder.net/prenosimo/rik-saopstio-preliminarne-rezultate-na-izborima-za-skupstinu-srbije, read 2026-10-24T17:03Z).
- **List:** Vreme, https://vreme.com/en/izbori-2026/izbori-2026-izborne-liste-rik/ (read 2026-10-24T17:00Z) "2. Ivica Dačić – Stability Factor"; the article speaks of "the 3 percent threshold" without giving the basis. Minority lists (4–7, 10, 13, 14 per Vreme) are exempt from the threshold under Serbian law; SPS is not a minority list.

## Facts
- **Threshold basis:** the Rio Times tracker says "3% of votes cast" (previous dossier rs-sns-45). The 2022 election law text was not opened in this pass. The claim is pinned to RIK's printed share, so the legal basis matters only if RIK prints no percentage.
- **RIK percentage basis, 2023:**
  - Insajder gives preliminary figures of SNS 46.71%, Dačić list 6.57% and Zavetnici–Dveri 2.78% (2023-12-18 20:46 UTC).
  - Wikipedia gives the official figures as SNS 48.06% and SPS–JS–Zeleni 6.73% of valid votes: https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election (read 2026-10-24T17:02Z).
  - The ratios are 0.972 and 0.976. They fit RIK dividing by all voters who voted, invalid ballots included. This is inferred from arithmetic.
  - Consequence: RIK's printed share is about 2.5% lower in relative terms, about 0.08 pp at a 3% share, than a valid-vote share.
- **Polls of the SPS list in 2026 (PolitPro):** https://politpro.eu/en/serbia (read 2026-10-24T16:58Z)

| Pollster | Date | SPS/JS |
|---|---|---|
| Ipsos (commissioned by the ruling list, n=3,624) | 22 Oct | 3.2 |
| NSPM (fieldwork 25 Sep–5 Oct, n=1,050, decided voters) | 5 Oct | 2.9 |
| Faktor Plus | 21 Sep | 4.9 |
| CRTA | 15 Jul | 3.8 |

  - The PolitPro average (as of 24 Oct) is 3.3.
- **2023 poll error for SPS:** https://en.wikipedia.org/wiki/Opinion_polling_for_the_2023_Serbian_parliamentary_election (read 2026-10-24T17:04Z)
  - Each pollster's last poll: Ipsos (14 Dec) 8.7, OFID (14 Dec) 8.9, NSPM (12 Dec) 8.9.
  - The result was 6.7 of valid votes, 6.57 RIK preliminary.
  - All three overstated SPS, by about 2.0–2.2 pp, roughly a quarter of its vote.
- **Last comparables for the Dačić list:**
  - 2023: 6.73% official, 18 seats.
  - The 2022 and 2020 results were not checked in this pass.
- **Coalition status:** SPS ran alone in 2026 rather than on Vučić's list (Vreme list order). In 2023 it ran as SPS–JS–Zeleni.
- **Đilas / European Serbia:**
  - List no. 9 "European Serbia" is headed by Marinika Tepić (SSP) and Zdravko Ponoš (SRCE) (Vreme list page).
  - Vreme, 11 Jun 2026 19:31, https://vreme.com/vesti/proevropska-opozicija-izbori-koalicija/ (read 2026-10-24T17:01Z): SSP (Dragan Đilas) announced the pro-European coalition, and SRCE confirmed. NPS and ZLF leaned toward the Student List.
  - Polls (PolitPro, "PES"): Ipsos 0.8, NSPM 2.7, Faktor Plus 3.6; average 1.4.
  - A European Serbia ≥3% claim sits further from the line than SPS (average 1.4 against 3.3). The polls also disagree widely (0.8 to 3.6). It was therefore not written as a second claim.

## Base rate
- **Class:** SPS crossing 3% in parliamentary elections. It is believed to have done so in every election since 1990 (not verified in this pass; 2023: 6.73%). However, it ran in alliances, and in 2023 it polled about double the present level. This was not compiled from a primary table, so base_rate = null.
- **Directly relevant error:** in 2023 the final polls overstated SPS by about 2 pp (n=3 pollsters, 1 election). poll-error.json has no Serbian entries; the pooled party-level sd there is 2.61 pp, large against a 3% line.

## Schedule slip
- **Class:** election-held, rate 0.010 (slip.mjs, estimate). No sign of postponement.
- The RIK release timing risk is the same as for rs-students-most-votes.

## Risks
- **Polls at the line:** the average (3.3) is right at the line. The 2023 overstatement, if repeated proportionally, would put SPS near 2.5.
- **Late protocols:** if the share sits at about 3.0, early RIK figures could fall on either side, and later protocols could move it across.
- **Squeeze:** polarisation between the two main lists squeezes small lists. SPS voters may defect to Vučić's list to avoid a wasted vote.
- **Basis:** RIK's all-ballots denominator lowers the printed share slightly (about 0.08 pp).

## Sources
- https://vreme.com/en/izbori-2026/izbori-2026-izborne-liste-rik/
- https://vreme.com/vesti/proevropska-opozicija-izbori-koalicija/
- https://politpro.eu/en/serbia
- https://insajder.net/prenosimo/rik-saopstio-preliminarne-rezultate-na-izborima-za-skupstinu-srbije
- https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election
- https://en.wikipedia.org/wiki/Opinion_polling_for_the_2023_Serbian_parliamentary_election
- data/dossiers/2026-10-26/rs-sns-45.md
