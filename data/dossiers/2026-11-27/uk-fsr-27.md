# uk-fsr-27
- **Claim:** In its Financial Stability Report and Record published on Thursday 26 November 2026, the Bank of England's Financial Policy Committee keeps the UK countercyclical capital buffer (CCyB) rate at 2%.
- **Criterion:** YES if the Bank of England's Financial Stability Report and/or Financial Policy Committee Record published on 26 Nov 2026 (Europe/London) states that the FPC has maintained (left unchanged) the UK CCyB rate at 2%. NO if the FPC announces in that publication a different UK CCyB rate (an increase or a reduction, whatever its effective date), or if no FSR/FPC Record is published on 26 Nov 2026. Other decisions (leverage ratio, mortgage LTI limits, stress-testing plans) do not affect the result.
- **Event window:** 2026-11-26T00:00:00+00:00 to 2026-11-26T23:59:00+00:00 (Europe/London); publication 10:30 GMT = 11:30 CET
- **Evidence expected:** bankofengland.co.uk FSR page and FPC Record at 10:30 GMT; press conference after; Reuters/Bloomberg/BBC same morning
- **Resolves by:** 2026-11-28T05:00:00+01:00
- **Written at:** 2026-11-24T19:40:00+01:00

## Schedule
- Bank of England page: "Financial Stability Report - November 2026 (to be published at 10.30am) … This Financial Stability Report will be published on 26 November 2026." — https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026 (read 2026-11-24T17:57Z). 10:30 UK time = 11:30 CET (confirmed; UK on GMT in November).
- Nasdaq calendar lists "05:30 [ET] United Kingdom | BoE Financial Stability Report" and "BoE FPC Meeting Minutes" on 26 Nov — https://api.nasdaq.com/api/calendar/economicevents?date=2026-11-27 (read 2026-11-24T17:55Z).

## Facts
- September 2026 FPC Record (meeting 25 Sep, published 30 Sep): CCyB maintained at neutral 2% — https://www.bankofengland.co.uk/financial-policy-committee-record/2026/september-2026 (published 2026-09-30, read 2026-11-24T17:57Z) "In view of these considerations, the FPC decided to maintain the UK CCyB rate at 2%. Maintaining a neutral setting of the UK CCyB rate in the region of 2% would help to ensure that banks continued to have capacity to absorb unexpected future shocks without an unwarranted restriction in essential services".
- Same record: "while the global risk environment remained elevated, UK households and corporates remained resilient in aggregate and credit conditions reflected the macroeconomic outlook. Past stress test results indicated that the banking system could withstand a scenario substantially more severe than the current outlook."
- Same record, credit growth: lending to large corporates +9.4%, SMEs +4.1%, mortgages +3.6% (July), all above 2015–19 averages (2.6%, 0.6%, 3.1%); project-finance terms "had eased significantly"; banks' RoTE 17.1% in Q2.
- Same record, mortgages: share of lending at high loan-to-income ratios rose to 14.1% this quarter (four-quarter average 12.0%); first-time buyers 18.1%.
- July 2026 FSR: CCyB maintained at 2%; "banks have continued to supply credit to households and businesses despite the deterioration in the macroeconomic outlook … with no sign of lending being restricted to protect capital positions" — https://www.bankofengland.co.uk/financial-stability-report/2026/july-2026 (published 2026-07-07, read 2026-11-24T17:57Z).
- December 2025 FPC Record: CCyB maintained at 2%; Tier 1 benchmark lowered to about 13% of RWAs — https://www.bankofengland.co.uk/financial-policy-committee-record/2025/december-2025 (read 2026-11-24T17:58Z) "The FPC has maintained the UK countercyclical capital buffer (CCyB) rate at 2%."
- Current rate shown on the BoE CCyB page: "Current UK CCyB rate 2%" — https://www.bankofengland.co.uk/financial-stability/the-countercyclical-capital-buffer (read 2026-11-24T18:00Z).
- Stress tests: the last Bank Capital Stress Test results were published 2 Dec 2025; the Bank's pages list a 2027 data framework for "Bank Capital Stress Tests and desk-based stress tests from 2027 onwards" and say desk-based tests may run "in intervening years"; no 2026 bank stress test with published bank-by-bank results was found — https://www.bankofengland.co.uk/stress-testing/uk-banks-building-societies and https://www.bankofengland.co.uk/stress-testing/uk-banks-building-societies/bank-capital-stress-test (read 2026-11-24T17:58Z).
- No preview naming a possible CCyB change found (one search, 24 Nov).

## Base rate
- Class: FPC quarterly UK CCyB decisions since the 2% rate was set (July 2022, effective July 2023): held at 2% at every decision from Q4 2022 to Q3 2026 — about 16 consecutive holds (n ≈ 16, rate of holding 1.0). Verified tonight: Dec 2025, Jul 2026, Sep 2026 (sources above); the 2023–2025 holds are from the FPC's quarterly Records (not each re-read tonight). The FPC describes 2% as its "neutral setting", which it means to keep in "standard risk" conditions.
- Wider class (central-bank macroprudential buffer decisions at scheduled meetings): pipeline/reference-data has none; ČNB CCyB example (dossier cz-ccyb-26): about 10 holds in 15 decisions since 2023, but ČNB was in an active tightening phase.

## Case record
## Case record: uk-boe-financial-stability
No earlier claim of this case in our editions.

## Schedule slip
- `central-bank-decision`: rate 0.006 (prior 0.01, own 0/15) — `node scripts/refdata/slip.mjs central-bank-decision`, run 2026-11-24T17:52Z. BoE page confirms 26 Nov 10:30; no sign of a move.

## Risks
- Raise (NO): strong corporate lending growth well above averages, easing project-finance terms, rising high-LTI share; inflationary energy shock and higher rates might lead the FPC to judge risks above "standard".
- Cut (NO): if the FPC judged that stress (energy shock, AI-equity correction, gilt yields) was crystallising, it could release the buffer as in March 2020 — but the September record shows no sign of restricted lending.
- Wording: the FSR may say "maintained" without restating "2%"; the FPC Record normally restates the rate.

## Sources
- https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026
- https://www.bankofengland.co.uk/financial-policy-committee-record/2026/september-2026
- https://www.bankofengland.co.uk/financial-stability-report/2026/july-2026
- https://www.bankofengland.co.uk/financial-policy-committee-record/2025/december-2025
- https://www.bankofengland.co.uk/financial-stability/the-countercyclical-capital-buffer
- https://www.bankofengland.co.uk/stress-testing/uk-banks-building-societies
- https://www.bankofengland.co.uk/stress-testing/uk-banks-building-societies/bank-capital-stress-test
- https://api.nasdaq.com/api/calendar/economicevents?date=2026-11-27

## Unreachable
- https://www.bankofengland.co.uk/financial-policy-summary-and-record/2026/september-2026 (404; correct path is financial-policy-committee-record)
- FPC September record PDF (reader: PDF not parsed)
