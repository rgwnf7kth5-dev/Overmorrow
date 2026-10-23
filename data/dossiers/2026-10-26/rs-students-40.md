# rs-students-40: Student List at 40% or more

- **Claim:** In Serbia's 25 October 2026 parliamentary election, the Student List ("Student List – Students Are Winning", list no. 3) gets at least 40.00% in the Republic Electoral Commission's (RIK) results.
- **Criterion:** YES if the vote share that RIK itself prints for the Student List (list no. 3) is 40.00% or more, in the most recent RIK preliminary or final results published on rik.parlament.gov.rs (or announced at a RIK session) by 12:00 CET on 27 Oct 2026. The share is RIK's printed percentage. In past releases it is taken over all voters who voted, with invalid ballots included. If RIK publishes no results by the deadline, or the election is postponed, the claim resolves NO.
- **Deadline:** 2026-10-27T12:00:00+01:00
- **Written at:** 2026-10-23T19:12:00+02:00

## Schedule
- Same as rs-sns-45. The election is on 25 Oct 2026, with 6,450,523 registered voters (Novosti/Tanjug, 10 Oct: https://www.novosti.rs/drustvo/vesti/1658233/rik-ukupan-broja-biraca-srbiji-parlamentarne-izbore-6-450-523).
- **List name:** Vreme describes the main contest as list 1, "Aleksandar Vučić – United Serbia", against list 3, "Student list – Students are winning": https://vreme.com/en/izbori-2026/izbori-2026-izborne-liste-rik/. Polymarket calls it "Student List – Students Win".
- **When RIK published preliminary results:**
  - 2023: Monday after the vote, session from about 21:00 (N1: https://n1info.rs/vesti/izbori-2023/preliminarni-rezultati-rik-a/).
  - 2022: Monday after 20:00 (biznis.rs: https://biznis.rs/vesti/ipsos-cesid-objavio-prve-preliminarne-rezultate-izbora-rik-se-oglasava-tek-sutra-posle-20-casova/).
  - 2016: election night, about 00:40 (Insajder: https://www.insajder.net/vesti/rik-with-9746-ballots-counted-seven-tickets-in-parliament).
- **Publishes:** RIK session and rik.parlament.gov.rs, expected on the night of 25/26 Oct or the evening of 26 Oct CET.

## Facts
- **Polls for the Student List:**

| Pollster | Published | Fieldwork / details | Student List | Source |
|---|---|---|---|---|
| Ipsos (commissioned by the ruling list) | 22 Oct | n=3,624 | 40.0 | Rio Times, 23 Oct: https://www.riotimesonline.com/serbia-final-polls-split-before-sunday-vote/ |
| NSPM | 20 Oct | fieldwork 25 Sep–5 Oct, n=1,050, telephone, decided voters, 18.3% undecided | 44.5 | Rio Times; ANSA gives 44.4 |
| Faktor Plus (government-affiliated per ANSA) | not dated by ANSA; sweep says 21 Sep | | 37.1 | ANSA: https://ansa.it/nuova_europa/en/news/sections/news/2026/10/22/latest-polls-in-serbia-indicate-an-uncertain-outcome-for-students-and-vucic_707d7628-9b19-431c-bb4e-08b44d7d252b.html |
| CRTA | 15 Jul | | 44.9 | Rio Times tracker: https://www.riotimesonline.com/serbia-election-poll-tracker/ |
| Birodi (model) | | range 45.9–51.1 | 48.5 | N1: https://n1info.rs/english/news/birodi-model-puts-serbias-student-list-at-485-percent-ahead-of-vucics-sns/ |
| Faktor Plus | 26 Jun | n=1,200 | 30.7 | Wikipedia: https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Serbian_parliamentary_election |

- **Averages:** Rio Times tracker 42.5 (23 Oct); PolitPro 42.5 (23 Oct).
- **Rally:** the final student rally on 22 Oct drew about 150,000, according to the Archive of Public Gatherings (sweep; Al Jazeera, 22 Oct: https://www.aljazeera.com/news/2026/10/22/thousands-gather-at-final-student-led-rally-ahead-of-serbia-election).
- **Percentage basis:** in 2023, RIK's preliminary figure for SNS was 46.71%, against an official 48.06% of valid votes. The ratio 0.972 fits RIK dividing by all ballots cast, invalid included. This is an inference from arithmetic (N1, 18 Dec 2023; Wikipedia 2023). RIK's printed Student share will therefore run about 1 point below a valid-vote share.
- **Last comparable:** the largest opposition list in 2023, Serbia Against Violence (SPN), got 23.58% (RIK preliminary) and 24.32% (official, valid votes), 65 seats (N1; https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election). This is the first time the opposition runs as essentially one list.

## Base rate
- None. No opposition list has reached 40% in a Serbian parliamentary election in the period covered here (2016–2023 figures above). The class does not fit a single united list. base_rate = null.

## Schedule slip
- **Class:** election-held, rate 0.010 (slip.mjs, estimate). No sign of postponement.

## Markets
Polymarket, "Serbia Election: Student List Vote Share?", read 2026-10-23T17:02:45Z (https://polymarket.com/event/serbia-election-student-list-vote-share):

| Outcome | Price |
|---|---|
| <30% | 0.0545 |
| 30–35% | 0.078 |
| 35–40% | 0.225 |
| 40–45% | 0.31 |
| 45–50% | 0.235 |
| ≥50% | 0.1455 |

- The buckets sum to 1.048. Normalised, 40% or more = 0.6905/1.048 = 0.659. The market median is about 42.7.
- Polymarket's vote-share basis was not checked (see Risks).
- Winner market: Student List most seats 0.295 (https://polymarket.com/event/serbia-parliamentary-election-winner-2026).

## For number claims
- **Consensus:** non-commissioned poll average 42.5 (Rio Times tracker, 23 Oct). Range 37.1–48.5 across the last poll of each pollster.
- **Usual error:** Serbia is not compiled in pipeline/reference-data/poll-error.json. Pooled party-level sd is 2.61 pp (all elections), and 2.92 pp for Czech parliamentary elections, a stand-in. The spread between pollsters (7–11 points) is wider than that.

## Risks
- RIK publishes after the deadline.
- RIK's all-ballots denominator takes about 1 point off the printed share.
- Invalid ballots may be higher than usual if there is ballot-design confusion among 16 lists in 29 language variants (Novosti).
- The commissioned Ipsos poll (40.0) and Faktor Plus (37.1) put the list at or below the line. Polls of decided voters may overstate the list if its supporters are younger and less likely to vote, or understate it if pollsters close to the government are biased.
- Votes may be annulled at disputed polling stations.

## Sources
- https://www.riotimesonline.com/serbia-final-polls-split-before-sunday-vote/
- https://www.riotimesonline.com/serbia-election-poll-tracker/
- https://ansa.it/nuova_europa/en/news/sections/news/2026/10/22/latest-polls-in-serbia-indicate-an-uncertain-outcome-for-students-and-vucic_707d7628-9b19-431c-bb4e-08b44d7d252b.html
- https://en.wikipedia.org/wiki/Opinion_polling_for_the_next_Serbian_parliamentary_election
- https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election
- https://n1info.rs/vesti/izbori-2023/preliminarni-rezultati-rik-a/
- https://biznis.rs/vesti/ipsos-cesid-objavio-prve-preliminarne-rezultate-izbora-rik-se-oglasava-tek-sutra-posle-20-casova/
- https://www.insajder.net/vesti/rik-with-9746-ballots-counted-seven-tickets-in-parliament
- https://www.novosti.rs/drustvo/vesti/1658233/rik-ukupan-broja-biraca-srbiji-parlamentarne-izbore-6-450-523
- https://polymarket.com/event/serbia-election-student-list-vote-share (via markets.mjs)
- Sweep: scratchpad/sweep/europe.json (Vreme list names, Al Jazeera rally)
