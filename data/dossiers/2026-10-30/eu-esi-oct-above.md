# eu-esi-oct-above
- **Claim:** The European Commission's Economic Sentiment Indicator (ESI) for the euro area for October 2026, published on 29 Oct 2026, is higher than the September 2026 value shown in the same release (first published as 97.9).
- **Criterion:** YES if, in the Commission's business and consumer survey results released on 29 Oct 2026, the euro-area ESI for October 2026 is higher than the euro-area ESI for September 2026 as printed in that same release (one decimal; i.e. the reported monthly change is positive). NO if it is equal or lower, or if the release does not take place on 29 Oct 2026 (Brussels time). The EU aggregate, the EEI and later revisions do not decide. Pending if published but not yet readable.
- **Event window:** 2026-10-29T00:00:00+01:00 to 2026-10-29T23:59:59+01:00 (expected 11:00 CET)
- **Written at:** 2026-10-27T18:30:00Z

## Schedule
- Commission BCS page: "Next update: Press release business and consumer survey results (incl. ESI, EEI, EUI, sectoral CIs) - 29 October 2026" — https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys_en (read 2026-10-27T18:14Z). Time 11:00 CET per LBBW calendar (sweep agenda; the Commission page gives no time).

## Facts
- September 2026 (released 29 Sep 2026): ESI euro area 97.9 (−0.5 vs August), EU 97.9 (−0.4); EEI euro area 97.5 (−1.3) — https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/latest-business-and-consumer-surveys_en (read 2026-10-27T18:15Z) "again drifted away from their long-term average of 100". Sectoral September values not read (in PDF).
- Revision: the Commission re-estimates seasonal adjustment each month, so the previous month's ESI can change by a few tenths in the next release (standard practice; no revision note on the page for August). Hence the criterion compares with September as printed in the 29 Oct release.
- ESI weights (Commission methodology): industry 40%, services 30%, consumers 20%, retail 5%, construction 5% (standard ESI weighting; not re-read tonight).
- Flash consumer confidence October 2026 (22 Oct): euro area −17.9 (−1.1), EU −17.3 (−1.2), "fell further below its long-term average" — same Commission page (read 2026-10-27T18:15Z). This is the 20% consumer component, so it starts the October ESI with a drag.
- HCOB flash euro-area PMI October (23 Oct): composite 51.9 (Sept 53.1; consensus 52.7), manufacturing 52.4 (52.9), services 51.7 (53.0); Chris Williamson: "the Eurozone economy starts the fourth quarter with businesses reporting further robust growth" — https://www.fxstreet.com/news/eurozone-hcob-composite-pmi-declines-to-519-in-october-vs-527-expected-202610230806 (published 2026-10-23 08:06 GMT, read 2026-10-27T18:17Z).
- Ifo business climate October (26 Oct): 90.2 (Sept 89.9; consensus 89.8); expectations 91.6 (90.4); current assessment 88.8 (89.5) — https://www.fxstreet.com/news/germanys-ifo-business-climate-index-unexpectedly-improves-to-902-in-october-202610260903 (published 2026-10-26 09:03 GMT, read 2026-10-27T18:16Z); https://tradingeconomics.com/germany/business-confidence/news/595003 "edged up to 90.2 in October 2026". Ifo press release title "ifo Business Climate Rises (October 2026)" — https://www.ifo.de/en/press-release/2026-10-26/ifo-business-climate-rises-october-2026 (title from search, not opened).
- INSEE business climate France October (22 Oct): +1 point to 97; industry climate "repart fortement à la hausse"; employment climate −3 to 95 — https://www.optionfinance.fr/info-financiere-en-continu/d/2026-10-22-france-le-climat-des-affaires-sameliore-timidement-selon-linsee.html (published 2026-10-22 08:55, read 2026-10-27T18:18Z) "gagne un point pour atteindre 97 en octobre".
- Italy ISTAT business/consumer confidence for October: not found tonight (normally released in the last days of the month; not verified).
- Forecast: LBBW 98.1 (sweep agenda, not re-read); no consensus found.
- Context: euro-area HICP 3.8% in September (Wells Fargo, https://www.fxstreet.com/analysis/economics-week-ahead-202610252214); ECB decision on 29 Oct at 14:15 CET, after the ESI.

## Base rate
- No compiled series in pipeline/reference-data. Month-on-month the ESI rises and falls roughly equally often over long samples (stated estimate, not computed tonight). Recent direction: down 0.5 in September.

## Schedule slip
- stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`). Date confirmed on the Commission page.

## Risks
- Revision of September in the October release can flip a small change.
- Mixed national signals: consumer confidence and PMI down, Ifo and INSEE up; industry (40% weight) vs services (30%) direction decides.
- Equal value (change 0.0) resolves NO.

## Sources
- https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys_en
- https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/latest-business-and-consumer-surveys_en
- https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/download-business-and-consumer-survey-data/press-releases_en (September PDF not yet listed)
- https://www.fxstreet.com/news/eurozone-hcob-composite-pmi-declines-to-519-in-october-vs-527-expected-202610230806
- https://www.fxstreet.com/news/germanys-ifo-business-climate-index-unexpectedly-improves-to-902-in-october-202610260903
- https://tradingeconomics.com/germany/business-confidence/news/595003
- https://www.optionfinance.fr/info-financiere-en-continu/d/2026-10-22-france-le-climat-des-affaires-sameliore-timidement-selon-linsee.html
- https://www.fxstreet.com/analysis/economics-week-ahead-202610252214
