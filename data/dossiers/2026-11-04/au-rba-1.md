# au-rba-1
- **Claim:** The Reserve Bank of Australia raises its cash rate target at its decision on 3 November 2026.
- **Criterion:** YES if the Statement by the Monetary Policy Board published by the Reserve Bank of Australia on 3 Nov 2026 (Australia/Sydney time) announces an increase in the cash rate target from 4.60% (by any amount). NO if the target is left unchanged or lowered, or if no decision is announced on 3 Nov 2026 (Australia/Sydney time).
- **Event window:** 2026-11-02T16:00:00+11:00 to 2026-11-03T23:59:00+11:00 (Australia/Sydney)
- **Written at:** 2026-11-01T18:40Z. Read times below are between 17:55Z and 18:25Z on 1 Nov.

## Schedule
- 2026 Monetary Policy Board meetings include "2–3 November"; the outcome "is announced at 2:30 pm on the second day", Governor's media conference at 3:30 pm — RBA media release 2025-02 https://www.rba.gov.au/media-releases/2025/mr-25-02.html (published 2025-02-10, read 2026-11-01T18:20Z). 14:30 AEDT = 04:30 CET = 03:30Z on 3 Nov.
- The six earlier 2026 decisions all came on their scheduled dates (3 Feb, 17 Mar, 5 May, 16 Jun, 11 Aug, 29 Sep) — RBA media releases list https://www.rba.gov.au/media-releases/ (read 2026-11-01T18:19Z).

## Facts — 2026 decisions (RBA statements, read 2026-11-01T18:20–18:25Z)
- 3 Feb: +25 bp to 3.85%, "Today's policy decision was unanimous" — https://www.rba.gov.au/media-releases/2026/mr-26-03.html
- 17 Mar: +25 bp to 4.10%, "made by majority", 5–4 (four for a hold) — https://www.rba.gov.au/media-releases/2026/mr-26-08.html
- 5 May: +25 bp to 4.35%, majority 8–1 (one for a hold) — https://www.rba.gov.au/media-releases/2026/mr-26-12.html
- 16 Jun: hold at 4.35%, unanimous — https://www.rba.gov.au/media-releases/2026/mr-26-15.html
- 11 Aug: hold at 4.35%, unanimous — https://www.rba.gov.au/media-releases/2026/mr-26-19.html
- 29 Sep: +25 bp to **4.60%**, unanimous; the Board judged that "further tightening in financial conditions is warranted" and will be "increasing the cash rate target further if needed" — https://www.rba.gov.au/media-releases/2026/mr-26-27.html
- Current rate 4.60% confirmed. All 2026 moves were 25 bp.

## Facts — inflation and economists' calls
- September-quarter CPI (ABS, 28 Oct): annual headline 4.3% (from 4.0% in the August monthly), quarterly headline +1.3%, trimmed mean +1.0% q/q and 3.7% y/y against the 2–3% target — Savings.com.au https://www.savings.com.au/news/all-big-four-banks-back-november-rate-hike (published 2026-10-28, read 2026-11-01T18:01Z). (CommBank, below, gives the quarterly figure as 1.0%, probably the trimmed mean; the ABS release was not read directly.)
- All big four banks expect +25 bp to 4.85% in November: CBA "We now expect the RBA to hike the cash rate by 25bp to 4.85%" (previously a hold); NAB (previously a hold) says the RBA is "a long way from declaring victory on inflation"; Westpac expects the hike and no more this year; ANZ named in the headline — Savings.com.au (above).
- CommBank (Belinda Allen): November hike to 4.85% expected; then holds in December and February; trimmed mean 3.7% y/y vs CBA's 3.6% forecast — CommBank newsroom https://commbank.com.au/articles/newsroom/2026/10/commbank-november-rba-rate-hike-inflation-risks.html (published 2026-10-28, read 2026-11-01T18:01Z). Governor Bullock earlier: "Inflation will therefore likely be higher than was our base case in August" (sweep notes, same source).
- Reuters poll of economists: not found (sweep notes).

## Base rate
- pipeline/reference-data/central-banks.json has no RBA series (ČNB, ECB, Fed only).
- `central-bank-moves-as-priced` (pipeline/reference-classes.json): base_rate null, n 0; own record 1 YES / 0 NO.

## Schedule slip
- `central-bank-decision`: 0.008 [estimate], prior 0.01, own 0/6 (`node scripts/refdata/slip.mjs central-bank-decision`, run 2026-11-01T18:00Z). No sign of a move. 3 Nov is Melbourne Cup Day (a holiday in Melbourne only); the RBA has announced on Cup Day before.

## Risks
- **Hold:** the March vote was 5–4; a Board that sees the Q3 jump as temporary (fuel, administered prices) could pause, as in June and August.
- **Size:** a 50 bp move also resolves YES; no economist found calls for it.
- **Global shock** in the 48 hours before (US–Iran/Hormuz, US election night is after the decision).

## Sources
- https://www.rba.gov.au/media-releases/2025/mr-25-02.html
- https://www.rba.gov.au/media-releases/
- https://www.rba.gov.au/media-releases/2026/mr-26-03.html
- https://www.rba.gov.au/media-releases/2026/mr-26-08.html
- https://www.rba.gov.au/media-releases/2026/mr-26-12.html
- https://www.rba.gov.au/media-releases/2026/mr-26-15.html
- https://www.rba.gov.au/media-releases/2026/mr-26-19.html
- https://www.rba.gov.au/media-releases/2026/mr-26-27.html
- https://www.savings.com.au/news/all-big-four-banks-back-november-rate-hike
- https://commbank.com.au/articles/newsroom/2026/10/commbank-november-rba-rate-hike-inflation-risks.html
