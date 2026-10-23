# rs-turnout: turnout in Serbia's election (interval)

- **Claim:** Turnout in Serbia's 25 October 2026 parliamentary election, according to the Republic Electoral Commission (RIK), is … %.
- **Criterion:** Turnout as a percentage of registered voters (voters who voted ÷ registered voters), as stated by RIK in its most recent preliminary or final results published on rik.parlament.gov.rs (or announced at a RIK session) by 12:00 CET on 27 Oct 2026. Daytime interim turnout bulletins do not count. If RIK publishes no turnout figure by the deadline, or the election is postponed, the claim is void or NO, per the interval rules.
- **Deadline:** 2026-10-27T12:00:00+01:00
- **Written at:** 2026-10-23T19:14:00+02:00

## Schedule
- As for rs-sns-45. Registered voters: 6,450,523 (RIK via Novosti/Tanjug, 10 Oct 2026: https://www.novosti.rs/drustvo/vesti/1658233/rik-ukupan-broja-biraca-srbiji-parlamentarne-izbore-6-450-523).
- RIK preliminary results came on the Monday evening in 2022 and 2023, and at about 00:40 on election night in 2016 (sources in rs-sns-45).
- In 2008, RIK's early turnout figure (64.3% from 612 stations) differed from CeSID's 60.7% (srbija.gov.rs: https://www.srbija.gov.rs/vest/en/45915/rik-publishes-preliminary-results-of-parliamentary-elections.php). This shows that early partial figures can mislead; the claim uses RIK's latest figure.

## Facts
- **Last comparables:**
  - 2023 parliamentary: 58.77%, with 6,500,666 registered (Wikipedia: https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election).
  - 2022 parliamentary: about 58.5%, derived from Wikipedia's note that 2023 was up 0.24 pp. This is arithmetic, not a stated figure.
- **2024 local elections (2 Jun 2024):** no final turnout was found within budget. Interim figures:
  - CeSID/Ipsos at 11:00: Belgrade 14.3%, Novi Sad 18.2%, Niš 12.9% (RSE: https://www.slobodnaevropa.org/a/lokalni-izbori-srbija/32973891.html).
  - Belgrade at 14:00: 25.02%, against 31.86% at the same hour in Dec 2023 (RSE blog: https://www.slobodnaevropa.org/a/blog-lokalni-izbori-srbija-2024/32974145/lbl0lbi381225.html).
  - Belgrade at 16:00: 31.09% (Vreme blog headline: https://vreme.com/vesti/blog-uzivo-izborni-dan-u-senci-incidenata-izlaznost-u-beogradu-do-16-casova-3109-odsto/).
  - The 2024 locals ran lower than the 2023 parliamentary election. They are not a direct comparable.
- **Expectations:**
  - Vučić (N1, 19 Oct) expects about 4.1 million voters: https://n1info.rs/english/news/vucic-expects-turnout-of-more-than-4-million-accuses-opponents-of-planning-election-fraud. Against 6,450,523 registered, that is about 63.6% (arithmetic). He says turnout above 63% favours his list.
  - ANSA (22 Oct): "all polls show rising turnout", expected above 60%, which it says would be the highest in at least two decades: https://ansa.it/nuova_europa/en/news/sections/news/2026/10/22/latest-polls-in-serbia-indicate-an-uncertain-outcome-for-students-and-vucic_707d7628-9b19-431c-bb4e-08b44d7d252b.html
  - On the voter roll, an N1 headline reads "Rašuo: Zvaničan broj birača blago iznad očekivanog, uočen prostor za manipulaciju" (official number of voters slightly above expected; room for manipulation noted): https://n1info.rs/vesti/rasuo-biracki-spisak-izbori-manipulacija/ (search-result headline only; page not opened). An inflated roll lowers measured turnout.

## Base rate
- Not applicable; this is an interval claim. Comparables: 58.77 (2023) and about 58.5 (2022).

## Schedule slip
- **Class:** election-held, rate 0.010 (slip.mjs, estimate).

## Markets
Polymarket, "Serbia Parliamentary Election: Turnout", read 2026-10-23T17:02:37Z (one bucket re-read at 17:02:52Z) (https://polymarket.com/event/serbia-parliamentary-election-turnout):

| Outcome | Price | Volume |
|---|---|---|
| <58% | 0.1425, then 0.119 at the second read | |
| 58–62% | 0.11, then 0.1085 | |
| 62–66% | 0.42 | |
| 66–70% | 0.265 | |
| ≥70% | 0.12 | about $32.8k (largest volume) |

- Using the later read, the buckets sum to 1.0325. Normalised CDF: 58 → 0.115, 62 → 0.220, 66 → 0.627, 70 → 0.884.
- Interpolated market median: about 64.75%.
- A Normal fitted through the 62% and 70% CDF points gives a mean of about 65.1 and an sd of about 4.1 pp.

## For number claims
- **Consensus:** 65% (the Polymarket-implied median, about 64.75–65.1). Vučić's 4.1 million implies about 63.6%. ANSA reports pollsters expecting above 60%.
- **Scale:** 4.0 pp. No published record of the error of Serbian pre-election turnout expectations was found. The scale is derived from the spread of the market distribution (Normal fit, sd ≈ 4.1).
- For reference: `node scripts/refdata/models.mjs quantiles 65 4` gives q10 59.9, q50 65.0, q90 70.1.

## Risks
- RIK publishes no turnout figure by the deadline.
- The roll's quality is disputed (Rašuo: roll "slightly above expected"). Voters on the roll who live abroad or are inactive would lower the measured turnout. Turnout was 58.77% in 2023 and about 58.5% in 2022 (see Facts).
- The market may be overrun by opposition-sympathetic optimism.
- Polymarket may resolve on a different figure, such as CeSID or the final result.

## Sources
- https://www.novosti.rs/drustvo/vesti/1658233/rik-ukupan-broja-biraca-srbiji-parlamentarne-izbore-6-450-523
- https://en.wikipedia.org/wiki/2023_Serbian_parliamentary_election
- https://www.slobodnaevropa.org/a/lokalni-izbori-srbija/32973891.html
- https://www.slobodnaevropa.org/a/blog-lokalni-izbori-srbija-2024/32974145/lbl0lbi381225.html
- https://n1info.rs/english/news/vucic-expects-turnout-of-more-than-4-million-accuses-opponents-of-planning-election-fraud
- https://ansa.it/nuova_europa/en/news/sections/news/2026/10/22/latest-polls-in-serbia-indicate-an-uncertain-outcome-for-students-and-vucic_707d7628-9b19-431c-bb4e-08b44d7d252b.html
- https://www.srbija.gov.rs/vest/en/45915/rik-publishes-preliminary-results-of-parliamentary-elections.php
- https://n1info.rs/vesti/izbori-2023/preliminarni-rezultati-rik-a/
- https://polymarket.com/event/serbia-parliamentary-election-turnout (via markets.mjs)
