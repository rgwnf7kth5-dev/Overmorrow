# uk-budget-fuel-duty
- **Claim:** The UK Budget presented by Chancellor John Healey on 28 October 2026 cancels or postpones the fuel duty rise scheduled for January 2027: under the policy it announces, the main rate on petrol and diesel stays at or below 52.95p per litre throughout January 2027.
- **Criterion:** YES if, between 06:00 on 27 Oct 2026 and 23:59:59 on 28 Oct 2026 (London time, UTC+0), the Chancellor's Budget statement or the Budget documents HM Treasury publishes on gov.uk on 28 Oct 2026 (Budget report, policy costings, policy decisions table, HMRC tax information and impact notes) announce that the main rate of fuel duty on petrol and diesel will remain at or below 52.95p per litre from 1 January 2027 through 31 January 2027 — by extending the 5p cut beyond 31 December 2026, cancelling or delaying the scheduled rise, or cutting the rate. A decision trailed earlier counts if the 28 Oct statement or documents confirm it. What happens after January 2027 does not matter. NO if the Budget leaves the scheduled rise in place (including by saying nothing about fuel duty), confirms it, or sets any main rate above 52.95p taking effect on or before 31 January 2027 (for example a smaller 1p or 2p rise), and NO if the Budget is not delivered by 23:59:59 on 28 Oct 2026. Note: the rise is already the legal default, so the open question is whether the Budget stops it; ending the 5p cut on schedule counts as an increase and resolves NO.
- **Deadline (event window end):** 2026-10-28T23:59:59+00:00
- **Written at:** 2026-10-26T18:45:00Z (19:45 CET)

## Schedule
- Budget on Wednesday 28 Oct 2026, statement after PMQs ~12:30 GMT; Budget documents on gov.uk and OBR EFO after the speech (BBC explainer per world sweep, not re-read; date confirmed by petrolprices.co.uk below).
- Healey said he would announce the fuel duty decision in the Budget on 28 October — https://britbrief.co.uk/business/regulations/drivers-face-new-57p-per-litre-fuel-charges.html (published 2026-10-03 16:55, read 2026-10-26T18:18Z) "I'm conscious of the pressure this is putting on people at the pumps."

## Facts
- Current main rate 52.95p/l; default path 55.95p in January 2027, 57.95p in March — https://www.carwow.co.uk/news/11369/autumn-budget-2026-driver-impact (published 2026-10-05, read 2026-10-26T18:11Z) "Under current rules, fuel duty is due to rise to 55.95p per litre in January 2027, then to 57.95p in March."; "BDO expects the January rise is likely to be scrapped, but nothing is confirmed yet."
- Same path: "rise by 3p to 55.95p per litre in January, before climbing another 2p to 57.95p in March"; Healey "has not ruled out extending the 5p cut"; PM Andy Burnham: "every possible measure is being looked at", no "huge room for manoeuvre" — britbrief 2026-10-03 (above).
- Legal default: "HMRC's legal default, a 3p increase takes effect from January, with a further 2p rise in March 2027" — https://britbrief.co.uk/environment/policy/healey-urged-to-scrap-fuel-duty-rise-or-lose-30m-drivers.html (published 2026-09-07 06:52, read 2026-10-26T18:18Z).
- September 2026 rise cancelled on 20 May 2026; cut extended to 31 Dec 2026; "3p rise due on 1 January 2027 is only the legislative default" — https://petrolprices.co.uk/fuel-duty-september-rise-cancelled-2026.php (published 2026-06-10, read 2026-10-26T18:11Z) "The 5p-per-litre cut is now extended to 31 December 2026."
- History: 5p cut March 2022, extended 2023 and 2024 (Conservatives), Autumn 2024 to April 2026 (Labour); November 2025 Budget extended to 31 Aug 2026 with staged reversal 1p Sep 2026, 2p Dec 2026, 2p Mar 2027 back to 57.95p; RPI uprating for 2026/27 cancelled; PM on 11 Mar 2026: "Fuel duty is frozen" — https://fullfact.org/politics/fuel-duty-plans-2026/ (published 2026-03-12, read 2026-10-26T18:10Z).
- petrolprices.co.uk frames the Budget choice as whether the cut "gets extended for a fifth time"; "the Treasury has never confirmed how the rise will be staged from January 2027" — https://petrolprices.co.uk/budget-28-october-2026-fuel-duty-decision.php (published 2026-08-11, read 2026-10-26T18:10Z).
- Brit Brief preview (21 Oct): "Mr Healey could freeze fuel duty, following previous increases of 3p and 2p per litre" — https://britbrief.co.uk/politics/westminster/john-healeys-budget-2026-key-plans-revealed.html (published 2026-10-21, read 2026-10-26T18:08Z). This conflicts with carwow (5 Oct) and britbrief (3 Oct) giving 52.95p as the current rate; treated as an error in that preview (no rise has taken effect per the other sources).
- Fiscal pressure: GBP 12bn hole from the Middle East war reported (scottishfinancialnews 16 Oct); headroom expected to shrink (world sweep: KPMG ~GBP 12bn vs March GBP 23.6bn). Freeze is costly: Zemo Partnership says continuing the freeze costs nearly GBP 4bn a year to 2030 (headline in search result, https://www.zemo.org.uk/news-events/news,continuing-the-fuel-duty-freeze-set-to-cost-treasury-nearly-4bn-a-year-to-2_4765.htm, not opened).
- Pump-price pressure: Iran war cited by the government as reason to review (fullfact 12 Mar); Road Haulage Association called for a 15p/l rebate (britbrief 21 Oct).

## Base rate
- Own count from the sources above: at every fiscal decision point since March 2022 at which the 5p cut was due to end or a rise was imminent, the government extended the cut or delayed the rise — Spring 2023, Spring 2024, Autumn 2024, Nov 2025 (extended, with staged reversal), plus the ad-hoc 20 May 2026 deferral. 5/5 (fullfact, petrolprices). Main-rate RPI uprating has not been applied since 2011 (petrolprices 11 Aug: "frozen since 2011"). Caveat: tighter fiscal position this year than at most of those events.

## Schedule slip
- other-scheduled: 0.150 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`). Budget date fixed since 31 July with OBR forecast commissioned; no sign of movement as of 26 Oct.

## Risks
- Partial measure: e.g. a 1p rise in January instead of 3p, or a rise phased from January → NO (rate above 52.95p in January).
- A short delay that still lets a rise take effect within January (e.g. to 15 January) → NO; a delay of the rise to any date after 31 January 2027 (e.g. folding it into March or April) → YES.
- Budget silent on fuel duty (default rise stands) → NO; check the policy decisions table for a fuel duty line.
- Announcement trailed before the Budget but not repeated in documents: the criterion requires confirmation on 28 Oct; check HMRC/TIIN documents.
- Measure confined to some fuels (e.g. diesel only, red diesel, or a rebate scheme) rather than the main rate → NO unless the main rate for both petrol and diesel stays at or below 52.95p.

## Sources
- https://www.carwow.co.uk/news/11369/autumn-budget-2026-driver-impact
- https://britbrief.co.uk/business/regulations/drivers-face-new-57p-per-litre-fuel-charges.html
- https://britbrief.co.uk/environment/policy/healey-urged-to-scrap-fuel-duty-rise-or-lose-30m-drivers.html
- https://britbrief.co.uk/politics/westminster/john-healeys-budget-2026-key-plans-revealed.html
- https://petrolprices.co.uk/fuel-duty-september-rise-cancelled-2026.php
- https://petrolprices.co.uk/budget-28-october-2026-fuel-duty-decision.php
- https://fullfact.org/politics/fuel-duty-plans-2026/
- https://www.scottishfinancialnews.com/articles/john-healey-eyes-bank-tax-rise-to-fund-winter-energy-support
- Not readable tonight: BBC explainer c6x2zrjl7kjno and Guardian 24 Oct talking points (permission refused).
