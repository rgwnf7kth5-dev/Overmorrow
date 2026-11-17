# za-sarb-20
- **Claim:** At the end of its meeting on Thursday 19 November 2026 the Monetary Policy Committee of the South African Reserve Bank (SARB) keeps the repo rate (SARB policy rate) unchanged at 7.25%.
- **Criterion:** YES if the SARB announces on 19 Nov 2026 (by 23:59 South African time, SAST) the outcome of its November MPC meeting with the repo rate held at 7.25%, as shown in the MPC statement on resbank.co.za or reported by SAnews, BusinessTech, News24, Reuters or Bloomberg. NO if the repo rate is changed (hike or cut), or if no decision is announced by 23:59 SAST on 19 Nov 2026.
- **Event window:** 2026-11-19T00:00+02:00 – 2026-11-19T23:59+02:00 (Africa/Johannesburg)
- **Evidence expected:** MPC statement read by Governor Kganyago, usually about 15:00 SAST (14:00 CET; time not confirmed on the SARB page); evidence_at 2026-11-19T15:30+02:00
- **Deadline (resolves by):** 2026-11-21T05:00+01:00
- **Written at:** 2026-11-17T18:00Z

## Schedule
- SARB policy-rate page (September statement page): "Next due: 19 November 2026" — https://www.resbank.co.za/en/home/publications/publication-detail-pages/statements/monetary-policy-statements/2026/september (read 2026-11-17T17:54Z). The hour is not given. The ~15:00 SAST hour is the usual practice; it is not confirmed for this meeting.
- BusinessTech: "The MPC will deliver its final call for the year on Thursday, 19 November" — https://businesstech.co.za/news/finance/884684/what-to-expect-from-interest-rates-this-week/ (published 2026-11-17T10:30Z, read 2026-11-17T17:54Z).
- Newsquawk week ahead lists "Thu: SARB policy announcement" — https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs (published 2026-11-13T21:50Z, read 2026-11-17T17:43Z).

## Facts
- September 2026 decision: "the committee decided to raise the policy rate by 25 basis points, to 7.25%, effective from 25 September. The decision was unanimous." — SARB September statement (URL above, read 2026-11-17T17:54Z).
- In September the SARB said "Headline inflation will likely be above 5% later this year and early next year" and "We see upside risks to inflation"; Q2 GDP -0.2%, 2026 growth forecast 1.2% — same statement.
- Earlier cycle: +25 bp to 7.00% in May 2026; prime rate now 10.75% — https://businessnewssouthafrica.co.za/markets-finance/economists-expect-sarb-rate-hike-in-november-despite-fuel-tax-relief/ (published 2026-10-28T07:17Z, read 2026-11-17T17:43Z) "The repo rate is currently 7.25% and the prime lending rate 10.75%".
- Consensus: "with most economists expecting the policy rate to be held at 7.25%" — BusinessTech (published 2026-11-17T10:30Z, read 2026-11-17T17:54Z).
- PSG (Johann Els): MPC likely split between hold and hike, "On balance, I think the majority of the MPC will favour keeping interest rates unchanged." — same BusinessTech article.
- Investec (Annabel Bishop): "Absent evidence of second-round price pressures, the repo rate is unlikely to increase next week" — same article; she cites the plunge in oil prices and the fuel-levy cut.
- EY (Angelika Goliger): "Our modelling suggests a hold in the policy rate for now" — same article.
- Nedbank: "the outcome of next week's meeting is open to interpretation ... a difficult one to call" (BusinessTech, same article); "On balance, we see the need for another 25 bps hike in this cycle, but the timing is difficult to pin down" — https://businessreport.co.za/business/2026-11-16-will-interest-rates-rise-again-reserve-bank-faces-difficult-decision-as-inflation-climbs/ (published 2026-11-16T13:04Z, read 2026-11-17T17:54Z). On 27 Oct Nedbank said "we expect the Monetary Policy Committee to raise interest rates by 25 basis points at its November meeting" — https://businesstech.co.za/news/trending/881553/interest-rate-expectations-flip-flop-for-south-africa/ (published 2026-10-27T09:30Z, read 2026-11-17T17:54Z).
- Inflation: CPI September 4.5% y/y (August 4.4%); fuel +27.9% y/y; Nedbank forecasts October CPI at 5.6% — businessreport.co.za (above). October CPI is due Wed 18 Nov 10:00 SAST, the day before the decision (sweep: businessreport.co.za); not yet published at writing.
- Fuel relief: the MTBPS cut fuel taxes by R1.50/l (petrol) and R3.00/l (diesel) for November; Nedbank then cut its peak inflation forecast to 5.7% in October — BusinessTech 881553 (above). December fuel prices are expected to fall again ("Fuel pricing for December looks to be another sizeable cut") — BusinessTech 884684.
- SARB communication: adverse scenarios imply one or two additional hikes — Newsquawk week ahead (above) "the SARB said adverse scenarios imply one or two additional hikes".
- Old Mutual (Izak Odendaal), 27 Oct: "further rate increases are probably unnecessary and unlikely" — BusinessTech 881553.

## Base rate
- No SARB series in pipeline/reference-data/central-banks.json (it covers ČNB, ECB, Fed only). base_rate: null. Qualitative: the stated majority of economists expects a hold; the dissent (Nedbank) is for +25 bp, not a cut.

## Schedule slip
- slip_class: central-bank-decision. `node scripts/refdata/slip.mjs central-bank-decision` → prior 0.01, own 0/13, rate 0.006 [estimate].
- No sign that the date may move; the SARB's own page lists 19 Nov.

## Risks
- October CPI (18 Nov) far above 5.6% or a jump in core/services inflation could tip the MPC to a hike; the September hike was unanimous and the SARB says it sees upside risks.
- A split MPC (PSG expects a split) — a split vote that ends in a hike is NO.
- Rand weakness (Investec notes pressure from a narrowing rate differential with the US, where a further Fed hike is expected) argues for a hike.
- A cut is not discussed by any economist quoted.

## Sources
- https://www.resbank.co.za/en/home/publications/publication-detail-pages/statements/monetary-policy-statements/2026/september
- https://businesstech.co.za/news/finance/884684/what-to-expect-from-interest-rates-this-week/
- https://businesstech.co.za/news/trending/881553/interest-rate-expectations-flip-flop-for-south-africa/
- https://businessreport.co.za/business/2026-11-16-will-interest-rates-rise-again-reserve-bank-faces-difficult-decision-as-inflation-climbs/
- https://businessnewssouthafrica.co.za/markets-finance/economists-expect-sarb-rate-hike-in-november-despite-fuel-tax-relief/
- https://www.newsquawk.com/headlines/week-in-focus--16-20th-november-2026-highlights-include-us-retail-sales-fomc-minutes-chinese-activity-data-pboc-lpr-rba-minutes-uk-inflation-and-uk-jobs
- Refused (403): https://dailyinvestor.com/?p=164259
