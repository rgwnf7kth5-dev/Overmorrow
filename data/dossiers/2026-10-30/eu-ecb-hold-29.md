# eu-ecb-hold-29
- **Claim:** The ECB Governing Council keeps the deposit facility rate at 2.50% in the monetary policy decision announced on 29 October 2026.
- **Criterion:** YES if the ECB monetary policy decision press release published by 23:59 CET on 29 October 2026 leaves the deposit facility rate unchanged at 2.50%. NO if it changes the deposit facility rate, or if no monetary policy decision is announced by 23:59 CET on 29 October 2026.
- **Event window:** 2026-10-28T00:00:00+01:00 to 2026-10-29T23:59:59+01:00 (meeting 28–29 Oct; decision 14:15 CET, press conference 14:45 CET)
- **Written at:** 2026-10-27T18:40:00Z

## Schedule
- ECB press-conference page shows the 29 October 2026 press conference, 14:45 CET, Frankfurt am Main; previous 10 Sep 2026 — https://www.ecb.europa.eu/press/press_conference/html/index.en.html (read 2026-10-27T17:56Z).
- Meeting 28–29 Oct, decision 14:15 CET, press conference 14:45 CET, next meeting with staff projections 17 Dec 2026 — https://admiralmarkets.com/analytics/traders-blog/ecb-meeting-october-2026 (published 2026-09-24, read 2026-10-27T17:50Z; broker marketing page).

## Facts
- Current rates (effective 16 Sep 2026): deposit facility 2.50%, MRO 2.65%, marginal lending 2.90%; +25bp on 10 Sep 2026 — admiralmarkets.com page above "raised all key rates by 25 basis points on 10 September 2026". ECB official table: DFR 2.25% from 17 Jun 2026, 2.50% from 16 Sep 2026 — pipeline/reference-data/central-banks.json (source https://www.ecb.europa.eu/stats/policy_and_exchange_rates/key_ecb_interest_rates/html/index.en.html, retrieved 2026-10-23).
- 10 Sep 2026 decision: "The Governing Council today decided to raise the three key ECB interest rates by 25 basis points"; guidance "data-dependent and meeting-by-meeting", "not pre-committing to a particular rate path"; Lagarde: "not taking a view as to which direction we go at our next meeting" — https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260910~6a45359cfc.en.html (published 2026-09-10, read 2026-10-27T18:00Z).
- Reuters poll, fieldwork 5–8 Oct 2026, 73 economists: all but three expect a hold on 29 Oct; 64 of 73 expect a 25bp hike in December; 40 of 70 see peak DFR 2.75%, 24 see 3.00% — Reuters via https://www.globalbankingandfinance.com/ecb-hike-rates-december-inflation-almost-doubles-2-target/ (published 2026-10-08, read 2026-10-27T17:50Z) "all but three of the 73".
- Euro-area inflation September 2026: 3.8%, "very close to the ECB's latest worst-case scenario"; poll sees Q4 average 3.7%, 2026 3.0%, 2027 2.6% — same Reuters article. August 3.2% (flash 3.3%), core 2.4% — admiralmarkets page.
- Accounts of the 9–10 Sep meeting: all policymakers agreed inflation risks are to the upside — same Reuters article.
- Rising global bond yields (France fiscal worries) reduced expectations of an immediate October hike; SocGen's Annenkov: "market rates have increased meaningfully and are doing some of the job for the ECB" — same Reuters article.
- Lane (5 Oct speech): energy surge "a second wave of the energy supply shock", upside inflation / downside growth risks; Lagarde: "rates do not move in lockstep with energy prices", no second-round effects yet but the ECB "cannot wait until they are in full view"; Nagel: no sign of pass-through to price and wage setting, leaving room to wait in October — https://investinglive.com/central-banks/economic-and-event-calendar-in-asia-wednesday-october-21-2026-ecb-lane-speaking/ (published 2026-10-21, read 2026-10-27T18:12Z). Lane spoke 21 Oct in Shanghai on the international monetary system (no policy steer expected).
- Schnabel: no October 2026 remarks found by this agent.
- Nagel (11 and 22 Sep): would not exclude "mild restrictive territory"; too early to decide — admiralmarkets page.

## Base rate
- Reference class: ECB decisions vs the Reuters-poll majority. pipeline/reference-data/central-banks.json lists 20 DFR changes since 2022 but consensus matches are not yet verified there (n_verified 0). Stated estimate from cited history: in 2025–2026 all 14 decisions read tonight (transcripts linked in eu-ecb-unanimous-29) were holds or 25bp moves; no 2025–2026 decision found that contradicted a >90% poll majority. With 70 of 73 economists on hold, the reference class is "decision matches a near-unanimous poll".

## Schedule slip
- Class central-bank-decision: 0.010 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`). The ECB calendar fixes the date; no sign of a move.

## Risks
- A hawkish surprise (hike to 2.75%) if October data (German CPI flash, euro area GDP) or the oil price push the Council; the poll is from 5–8 Oct, three weeks old.
- Some governors argued for a hike before the July 2026 hold (Lagarde 23 Jul transcript); a minority could press again.
- Market turbulence (bond selloff) cuts the other way: no sign of a cut.

## Sources
- https://www.ecb.europa.eu/press/press_conference/html/index.en.html
- https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260910~6a45359cfc.en.html
- https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260723~b6fadd48f4.en.html
- https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/index_include.en.html
- https://www.globalbankingandfinance.com/ecb-hike-rates-december-inflation-almost-doubles-2-target/
- https://admiralmarkets.com/analytics/traders-blog/ecb-meeting-october-2026
- https://investinglive.com/central-banks/economic-and-event-calendar-in-asia-wednesday-october-21-2026-ecb-lane-speaking/
- pipeline/reference-data/central-banks.json
