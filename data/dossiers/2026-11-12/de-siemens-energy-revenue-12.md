# de-siemens-energy-revenue-12
- **Claim:** Siemens Energy reports Group revenue of … billion euros for fiscal year 2026 (October 2025 to September 2026) in its results release on 11 November 2026. (interval claim)
- **Criterion:** The Group revenue figure for fiscal year 2026 (in EUR, as first published) in Siemens Energy's earnings release / press release on the Q4 and fiscal 2026 results, published on siemens-energy.com on 11 Nov 2026. If the release gives revenue in EUR million, it is converted to EUR billion. Later restatements do not count. No release on 11 Nov 2026 = no outcome (the claim is void for the window).
- **Deadline:** release 07:00 CET on 2026-11-11 (press conference 08:00 CET per sweep; analyst webcast 10:00 CET); window 2026-11-10 06:00 to 2026-11-11 23:59 CET
- **Written at (UTC):** 2026-11-09T18:10Z. Read times as stated.

## Schedule
- Company, Q4 pre-close call transcript (30 Sep 2026): "We plan to publish our Q4 and fiscal year 2026 results on Wednesday, November 11 at 7:00 a.m. CET, with the webcast scheduled for 10:00 a.m. CET that morning, which will be extended to 90 minutes." — https://assets.siemens-energy.com/dam/e8ced7ab-8dcc-48e5-b0b5-b4d500fee9a5/2026-09-30---Q4-FY26-Pre-Close-Call_transcript-pdf_Original%20file.pdf (published 2026-09-30, read 2026-11-09T17:53Z)
- dpa-AFX week preview lists Siemens Energy (FY) at 07:00 on 11 Nov — https://live.deutsche-boerse.com/nachrichten/WOCHENVORSCHAU-Termine-bis-12-November-2026-9e7f9fe4-a1c1-486e-af76-e390355f7e9d (from sweep notes, not re-read)
- Same transcript: the release will also "provide you with our FY 2027 outlook and FY 2030 targets ... as well as an updated capital allocation framework until FY 2030. As usual, we will share our company-compiled consensus one week ahead of the earnings release".

## Facts
- FY2026 outlook (raised after H1, confirmed with Q3 on 5 Aug): comparable revenue growth 14% to 16%, profit margin before special items 10% to 12% "towards the upper end", net income around €4bn, free cash flow pre tax around €8bn — https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html (published 2026-08-05, read 2026-11-09T17:52Z) "comparable revenue growth ... in a range of 14% to 16%"
- Q3 FY2026 revenue €11.4bn, +18.5% comparable; orders €17.9bn; backlog €162bn; net income €1,188m — same page.
- Quarterly revenue FY2026 as reported: Q1 €9,675m, Q2 €10,294m, Q3 €11,447m (sum €31,416m); FY2025 revenue €39,077m — MarketScreener finances table https://www.marketscreener.com/quote/stock/SIEMENS-ENERGY-AG-113013151/finances/ (read 2026-11-09T17:52:48Z)
- FY2025 revenue €39.1bn (+15.2% comparable); FY2025 dividend €0.70 per share (50% of adjusted net income attributable) — https://www.siemens-energy.com/us/en/home/press-releases/earnings-release-q4-fy-2025.html (published 2025-11-14, read 2026-11-09T17:52:47Z)
- Pre-close call 30 Sep: group profitability expected "at the upper end of the guidance range"; Q4 includes back-end-loaded capex; dividend policy unchanged, payout 40–60% of net income attributable; third buyback tranche up to €2bn started 24 Sep — transcript above (read 2026-11-09T17:53Z)
- Company-compiled consensus: announced for one week before the release, but no published consensus document was found on the investor-relations page (link list read 2026-11-09T17:52Z, no "consensus" item) — https://www.siemens-energy.com/global/en/home/investor-relations.html

## Consensus and surprise size
- Q4 revenue consensus €12.72bn (average of estimates; same report: Q4 EPS €1.33 from six analysts, FY EPS €4.48) — https://trading-treff.de/trading/siemens-energy-aktie-analysten-sehen-den-gewinn-davonziehen (published 2026-10-27T07:39Z, read 2026-11-09T17:53:12Z) "Beim Quartalsumsatz liegt der Durchschnitt der Schätzungen bei 12,72 Mrd. EUR"
- Implied FY2026 consensus: €31.416bn reported + €12.72bn = **€44.14bn** (own arithmetic). Cross-check: MarketScreener FY2026 net sales estimate €44,194m (Q4 estimate €12,665m), FY2027 €50,698m, 28 analysts — MarketScreener page above.
- Surprise history: Q1 FY2026 revenue €9.7bn vs expected €9.86bn (−€0.185bn) — https://stock3.com/news/siemens-energy-startet-stark-ins-neue-geschaeftsjahr-16925243 (published 2026-02-11T07:45+01:00, read 2026-11-09T17:54:10Z) "blieb damit leicht unter der Markterwartung von 9,86 Mrd. EUR"; Q3 FY2026 €11.447bn vs consensus €11.20bn (+€0.247bn) — https://www.boerse-express.com/news/articles/siemens-energy-aktie-4-prozent-vor-q3-zahlen-am-mittwoch-935596 (published 2026-08-04T22:57+02:00, read 2026-11-09T17:53:47Z) "bei einem Umsatz von 11,20 Milliarden Euro". Q2 was pre-released (ad hoc outlook raise with preliminary Q2 figures) and is excluded.
- Scale: RMS of the two surprises = €0.218bn × pooled factor 1.235 (node scripts/refdata/series.mjs) = **€0.27bn**. Normal start with width factor 1.6: q10 43.59 / q50 44.14 / q90 44.69 (models.mjs quantiles 44.14 0.27 1.6). Only Q4 is unknown, so the FY surprise equals the Q4 surprise.

## Base rate
- No reference class in pipeline/reference-data for company revenue; series.mjs has no Siemens Energy series (n=0). Two sourced surprises in FY2026 (one below, one above), both within 2.2% of the quarter's consensus.

## Schedule slip
- slip.mjs company-event: prior 0.02, own 0/15, current rate 0.008. Date and time confirmed by the company on 30 Sep; silent period running; no sign of a move.

## Risks
- Revenue is reported in EUR million in the release tables; the headline text may round to €44.xbn — use the table figure.
- Currency: the guidance is comparable (ex FX); a weaker dollar lowers nominal revenue against the comparable growth rate.
- New segment structure or portfolio changes with the FY2030 framework could restate prior-year figures; the claim uses the FY2026 figure as first published.
- Q4 orders and Gas Services seasonality flagged as softer by management (sweep notes, Admirals preview); revenue depends on project phasing and capacity ramp-up.

## Sources
- https://assets.siemens-energy.com/dam/e8ced7ab-8dcc-48e5-b0b5-b4d500fee9a5/2026-09-30---Q4-FY26-Pre-Close-Call_transcript-pdf_Original%20file.pdf
- https://www.siemens-energy.com/global/en/home/press-releases/earnings-release-q3-fy-2026.html
- https://www.siemens-energy.com/us/en/home/press-releases/earnings-release-q4-fy-2025.html
- https://www.marketscreener.com/quote/stock/SIEMENS-ENERGY-AG-113013151/finances/
- https://trading-treff.de/trading/siemens-energy-aktie-analysten-sehen-den-gewinn-davonziehen
- https://stock3.com/news/siemens-energy-startet-stark-ins-neue-geschaeftsjahr-16925243
- https://www.boerse-express.com/news/articles/siemens-energy-aktie-4-prozent-vor-q3-zahlen-am-mittwoch-935596
- https://www.siemens-energy.com/global/en/home/investor-relations.html
