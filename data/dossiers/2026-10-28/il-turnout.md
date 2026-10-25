# il-turnout

- **Claim (interval):** Final national turnout (%) in Israel's Knesset election on 27 October 2026, as published by the Central Elections Committee (CEC).
- **Criterion:** The value is the turnout percentage (votes cast ÷ eligible voters) in the CEC's official results for the 27 Oct 2026 election. If the CEC prints no percentage, use votes cast ÷ eligible voters from those results, to 2 decimals.
  - The CEC's preliminary election-night figure is provisional and does not decide the claim. In 2022 that figure was 71.3%; the official result was 70.63%.
  - If the vote does not take place in the window, including if the election is postponed, the claim is void.
  - If no official figure has appeared yet, the claim stays pending.
- **Deadline (event window end):** 2026-10-27T23:59:59+02:00. Evidence is the official results, due about 4 Nov; the claim resolves by 2026-11-05T12:00:00+01:00.
- **Written at:** 2026-10-25T19:20:00+01:00

## Schedule
- **Election day:** 27 Oct 2026, 07:00–22:00; it is a national holiday. About 7.3 million eligible voters, per the CEC (Al Jazeera, https://www.aljazeera.com/amp/news/2026/10/20/israels-elections-2026-explained-in-maps-and-charts, published 2026-10-20, read 2026-10-25T17:52Z).
- **Official results:** due 4 Nov (Wikipedia 2026 page, background, read 17:51Z).

## Facts
- **Final turnout history, Knesset elections** (Wikipedia, https://en.wikipedia.org/wiki/Elections_in_Israel, read 2026-10-25T17:54Z):

| Election | Turnout | Change from previous |
|---|---|---|
| 2009 | 64.7 | |
| 2013 | 67.8 | +3.1 |
| 2015 | 72.4 | +4.6 |
| Apr 2019 | 68.5 | −3.9 |
| Sep 2019 | 69.8 | +1.3 |
| 2020 | 71.5 | +1.7 |
| 2021 | 67.4 | −4.1 |
| 2022 | 70.63 | +3.23 |

- **2022 official figures:** 6,788,804 eligible, 4,794,593 votes cast, 70.63%; final results on 9 Nov 2022 (Wikipedia, https://en.wikipedia.org/wiki/2022_Israeli_legislative_election, read 17:56Z).
- **Intraday figures, 2022:** 66.3% had voted by 20:00 on 1 Nov 2022, against 60.9% at the same hour in 2021. That was the highest 20:00 figure since 1999 (71.4%). Election-night turnout was "later confirmed at 71.3%" (ToI, https://www.timesofisrael.com/turnout-highest-in-decades-as-parties-project-tight-contest-to-drive-final-votes/, published 2022-11-01 20:19, read 17:55Z).
  - From the 20:00 figure to the official result: +4.3 pp in 2022 (66.3 → 70.63) and +6.5 pp in 2021 (60.9 → 67.4).
  - The election-night figure (71.3) was 0.7 pp above the official 70.63, probably because of a different denominator or ballot base. That basis was not verified.
- **Electorate 2026:** about 7.3 million against 6.79 million in 2022. At 70.63% that would be about 5.16 million ballots.
- **Voters abroad:** over 33,000 expatriates registered with Fly&Vote. A High Court petition to allow voting abroad was dismissed on 2 Sep 2026 (Wikipedia 2026 page). AP: "tens of thousands of Israelis living abroad are expected to fly home to vote" (news4jax/AP, 25 Oct, read 17:58Z).
- **Context that may raise turnout:**
  - This is the first election since 7 Oct 2023 (AP; ČT24, 25 Oct).
  - The final polls show a close race between the blocs (Ynet/ToI, 23–24 Oct).
  - Ynet says the outcome "could shift depending on turnout" (https://www.ynetnews.com/article/s1wppltnme).
- **Context that may lower turnout:**
  - **Security:** the CEC is preparing for possible Iranian missile fire on the morning of 27 Oct (Israel Hayom, 14 Oct).
  - **Arab lists:** the CEC barred Ra'am and the Joint List, and the Supreme Court reinstated them (ČT24, 25 Oct). Arab-sector turnout is a major swing factor; 2026 sector figures are not available.

## Base rate
- **Own count:** in the 7 elections from 2013 to 2022, turnout changed from the previous election by +3.1, +4.6, −3.9, +1.3, +1.7, −4.1 and +3.23 pp.
  - sd of change 3.48 pp; rms 3.33; mean absolute 3.13.
  - Turnout rose in 5 of 7 elections.
  - Mean of the five 2019–2022 elections 69.57, sd 1.64.

## For a number forecast (interval claims only)
- **Analysts' consensus:** none found; consensus = null.
- **Scale:** usual surprise about 3.4 pp. This is the sd of election-to-election changes, 2013–2022, n=7 (own derivation from the Wikipedia turnout table). It is the error of a "same as last time" forecast, so it is a conservative scale. The level spread over 2019–2022 is narrower, sd 1.6.
- **Reference points:** 2022, 70.63; mean 2019–22, 69.57; record in this period, 72.4 (2015).
- **Intraday signal on the day:** the CEC's 20:00 figure has been 4.3–6.5 pp below final turnout in 2021–22. The morning run will not have it, since the run freezes 26 Oct.

## Schedule slip
- **Class:** election-held, rate 0.010 (slip.mjs, estimate). See il-yashar-most-seats: the IDF chief's 8 Oct remark and CEC contingency planning; no postponement reported as of 25 Oct.

## Risks
- **Attack on election day:** a missile attack or major security incident would depress turnout, or could extend or suspend voting.
- **Which figure counts:** the CEC's election-night and official figures can differ by about 0.7 pp, as in 2022. The criterion uses the official one.
- **Arab sector:** a boycott or a mobilisation would swing the total by 1–2 pp.

## Sources
- https://en.wikipedia.org/wiki/Elections_in_Israel
- https://en.wikipedia.org/wiki/2022_Israeli_legislative_election
- https://en.wikipedia.org/wiki/2026_Israeli_legislative_election
- https://www.timesofisrael.com/turnout-highest-in-decades-as-parties-project-tight-contest-to-drive-final-votes/
- https://www.aljazeera.com/amp/news/2026/10/20/israels-elections-2026-explained-in-maps-and-charts
- https://www.ynetnews.com/article/s1wppltnme
- https://www.israelhayom.com/2026/10/14/israel-prepares-iranian-missile-threat-election-day/
- https://www.news4jax.com/news/world/2026/10/25/saudi-arabia-reopens-airport-as-attacks-by-houthi-rebels-persist-and-other-mideast-news/
- https://ct24.ceskatelevize.cz/clanek/svet/historicke-volby-budou-referendem-o-netanjahuovi-izraeli-hrozi-pat-378909
- https://bechirot.gov.il/ (CEC site, HTTP 301 at 2026-10-25T18:10Z; votes26.bechirot.gov.il returned 404, so the results subdomain is not yet live or has another name)
