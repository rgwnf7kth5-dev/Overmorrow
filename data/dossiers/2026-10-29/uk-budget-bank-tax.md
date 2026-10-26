# uk-budget-bank-tax
- **Claim:** The UK Budget presented by Chancellor John Healey on 28 October 2026 raises a tax on banks: it announces a higher bank corporation tax surcharge rate (now 3%), a higher bank levy rate (now 0.1% short-term / 0.05% long-term), or a new tax charged only on banks' profits, balance sheets or reserves (such as a bank windfall tax), whatever the date it takes effect.
- **Criterion:** YES if, between 06:00 on 27 Oct 2026 and 23:59:59 on 28 Oct 2026 (London time, UTC+0), the Chancellor's Budget statement or the Budget documents HM Treasury publishes on gov.uk on 28 Oct 2026 (Budget report/"Red Book", policy costings, policy decisions table) announce at least one of: (a) an increase in the bank corporation tax surcharge rate above 3%; (b) an increase in either bank levy rate (above 0.1% on short-term or 0.05% on long-term chargeable equity and liabilities); (c) a new tax or charge levied only on banks or building societies, on their profits, balance sheets or reserves (including a one-off or temporary windfall tax, or one applying only to larger banks). The effective date does not matter. A measure trailed earlier counts if the 28 Oct statement or documents confirm it. Changes only to the surcharge allowance, to loss relief (including restrictions on carried-forward losses or deferred tax assets), or to the interest the Bank of England pays on reserves do not count; nor does a consultation, review or call for evidence alone. NO if no such measure is announced, including if the Budget is not delivered by 23:59:59 on 28 Oct 2026.
- **Deadline (event window end):** 2026-10-28T23:59:59+00:00
- **Written at:** 2026-10-26T18:40:00Z (19:40 CET)

## Schedule
- Budget date: Wednesday 28 October 2026; statement usually begins about 12:30 UK time after PMQs and lasts about an hour (BBC explainer per tonight's world sweep, https://www.bbc.co.uk/news/articles/c6x2zrjl7kjno — page refused to us tonight, not re-read). OBR Economic and Fiscal Outlook published the same day after the speech.
- Budget date set on 31 July 2026 and OBR commissioned — https://petrolprices.co.uk/budget-28-october-2026-fuel-duty-decision.php (published 2026-08-11, read 2026-10-26T18:10Z) "31 July 2026: Budget date announced … 28 October 2026: Budget delivered".
- Guardian report via Alliance News: Healey "poised to tax Britain's banks more heavily in his October 28 budget" — https://www.ajbell.co.uk/news/articles/press-chancellor-poised-tax-raid-uk-banks-budget-guardian (published 2026-10-16, read 2026-10-26T18:13Z).

## Facts
- Current rates: surcharge 3% on top of 25% corporation tax — https://www.ajbell.co.uk/news/articles/press-chancellor-poised-tax-raid-uk-banks-budget-guardian (published 2026-10-16, read 2026-10-26T18:13Z) "currently pay a surcharge of 3% on top of the baseline 25% rate of corporation tax"; cut from 8% when CT rose from 19% to 25%.
- Bank levy rates and yield — https://thepaypers.com/fintech/news/uk-banks-expect-higher-sector-taxes-in-budget (published 2026-10-16, read 2026-10-26T18:15Z): levy "0.1% on short-term loans and 0.05% on longer-dated loans, with mortgages excluded"; in 2025 the levy raised GBP 1.4bn and the surcharge GBP 1.2bn.
- Option under discussion: reversing the surcharge cut, "upwards of £2 billion a year" (Guardian via Alliance News, ajbell link above); "Healey met with bank chiefs earlier this month but no decision on tax was made"; bankers told the BBC the sector is "on the menu".
- Other options reported: Treasury officials discussed limiting banks' use of past losses (temporary moratorium ~GBP 1bn a year); Sir Philip Augar: a moderate rise could raise up to GBP 3bn — thepaypers (above). (A loss-relief-only measure does NOT count under the criterion.)
- One-off windfall tax reported as under consideration; deferred-tax-asset moratorium as an alternative; revenue to offset a GBP 12bn hole from the Middle East war and fund winter energy support — https://www.scottishfinancialnews.com/articles/john-healey-eyes-bank-tax-rise-to-fund-winter-energy-support (published 2026-10-16, read 2026-10-26T18:14Z) "Reversing the cut would raise an additional £2bn a year".
- Brit Brief preview lists "reversing a reduction in the surcharge on corporation tax from 8% to 3%" and "raising the bank levy, a small percentage charged on loans" among plans — https://britbrief.co.uk/politics/westminster/john-healeys-budget-2026-key-plans-revealed.html (published 2026-10-21 11:41 UTC, read 2026-10-26T18:08Z).
- UK Finance warned "further tax increases would weaken competitiveness" — thepaypers (above). City bosses' warning also reported by PA (Express & Star 9278800; fetch failed).
- Fiscal context (world sweep, not re-read tonight): March 2026 OBR headroom GBP 23.6bn; KPMG sees about GBP 12bn, IFS about GBP 20bn; Labour manifesto rules out rises in income tax, NI, VAT — BBC explainer and PA/Express & Star https://www.expressandstar.com/uk-news/chancellors-headroom-to-halve-because-of-iran-war-inflation-and-weak-growth-9124311 (2026-09-21).
- Four largest UK banks: about GBP 15bn profit in H1 2026 (thepaypers); "£200 billion in pretax profit over the past five years" (ajbell/Guardian).
- No official Treasury confirmation of a bank measure found as of 26 Oct evening; latest dedicated reports are from 15–21 Oct.

## Base rate
- Own count (from memory of UK fiscal events, not re-verified tonight): bank levy/surcharge raised or a new bank tax introduced at about 7 of roughly 30 UK fiscal events 2010–2025 (levy rises 2011–2015, surcharge created 2015); none raised from 2016 to Nov 2025 (surcharge cut 2021/2023, levy cut 2015–2021). Rate ~0.23, n≈30. Not conditioned on pre-briefing; this Budget has repeated pre-briefing of a bank tax rise (Guardian 15 Oct, BBC), which is the more relevant signal.

## Schedule slip
- other-scheduled: 0.150 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`). The class prior is generic; a UK Budget date fixed since 31 July with the OBR forecast commissioned is rarely moved. No sign of movement as of 26 Oct (BBC and Guardian previews on 24–26 Oct treat 28 Oct as fixed).

## Risks
- Healey chooses only a loss-relief restriction / deferred-tax-asset moratorium or a reserves-interest change: does not count (NO).
- Bank tax increase deferred to a consultation or to the Spring Statement (NO).
- Measure framed as a general corporation tax or windfall tax covering several sectors (e.g. oil and banks together): counts only if a separate charge applies only to banks; a cross-sector tax does not count.
- Political pushback from the City (UK Finance, City bosses) could shrink the measure; any rate increase, however small, counts.
- Ambiguous classification if the levy base is widened without rate change: base widening alone does not count (criterion counts only rate increases or a new bank-only tax).

## Sources
- https://www.ajbell.co.uk/news/articles/press-chancellor-poised-tax-raid-uk-banks-budget-guardian
- https://thepaypers.com/fintech/news/uk-banks-expect-higher-sector-taxes-in-budget
- https://www.scottishfinancialnews.com/articles/john-healey-eyes-bank-tax-rise-to-fund-winter-energy-support
- https://britbrief.co.uk/politics/westminster/john-healeys-budget-2026-key-plans-revealed.html
- https://petrolprices.co.uk/budget-28-october-2026-fuel-duty-decision.php
- Not readable tonight: https://www.bbc.co.uk/news/articles/c6x2zrjl7kjno, https://www.theguardian.com/money/2026/oct/24/budget-tax-talking-points-explained-john-healey (permission refused), https://www.expressandstar.com/uk-news/city-bosses-warn-healey-hiking-bank-taxes-could-drive-business-out-of-uk-9278800 (fetch failed), https://www.lbc.co.uk/politics/uk-politics/chancellor-mulls-windfall-tax-on-oil-companies-and-banks/ (fetch failed)
