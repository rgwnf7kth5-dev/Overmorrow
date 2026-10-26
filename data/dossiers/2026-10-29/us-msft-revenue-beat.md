# us-msft-revenue-beat
- **Claim:** Microsoft reports revenue above $90.61 billion (the Investing.com consensus read on 26 October) for its fiscal first quarter of 2027 (July–September 2026) in the results it publishes on 28 October 2026.
- **Criterion:** YES if Microsoft's earnings press release for the quarter ended 30 September 2026, published between 16:00 and 23:59:59 New York time (UTC-4) on 28 Oct 2026, reports total revenue strictly greater than $90,610 million (US$90.61bn), as stated on microsoft.com/investor (or Microsoft's release on its news site / SEC Form 8-K). The threshold is fixed and does not move with later consensus revisions. NO if reported revenue is $90,610 million or less, or if Microsoft does not publish the results by 23:59:59 New York time on 28 Oct 2026.
- **Deadline (event window end):** 2026-10-28T23:59:59-04:00
- **Written at:** 2026-10-26T18:50:00Z (19:50 CET)

## Schedule
- Microsoft press release (7 Oct): "will publish fiscal year 2027 first-quarter financial results after the close of the market on Wednesday, Oct. 28, 2026"; webcast 2:30 p.m. PT — https://finviz.com/news/400058/microsoft-announces-quarterly-earnings-release-date (published 2026-10-07 16:16, read 2026-10-26T18:16Z). Release normally ~16:05 EDT (21:05 CET).

## Facts
- Consensus revenue $90.61bn, EPS $4.72 (Investing.com, upcoming 28 Oct row, period 2026/09) — https://za.investing.com/equities/microsoft-corp-earnings (read 2026-10-26T18:17Z) "Oct 28, 2026 … 4,72 … 90,61B".
- Alternative consensus in tonight's world sweep: ChartMill via financecalendar.com, 42 analysts, revenue $92.46bn, EPS $4.82 (page updated 2026-08-25; refused to us tonight, not verified). $92.46bn lies $1.51bn above the top of company guidance; we use the verified Investing.com figure. The morning should check whether LSEG/FactSet consensus is nearer 90.6 or 92.5.
- Company guidance for FQ1 2027 revenue: $89.85bn–$90.95bn (midpoint $90.4bn); Azure guided to 45% constant-currency growth — https://www.tradingnews.com/news/microsoft-rips-25-percent-to-487-usd-with-zure-guided-to-45-percent (published 2026-08-04, read 2026-10-26T18:17Z) "First-quarter fiscal 2027 revenue guidance came in at $89.85 billion to $90.95 billion."
- Prior quarter (FQ4 2026, to 30 Jun 2026): revenue $90.01bn vs consensus ~$87.62bn, +17.75% y/y — tradingnews (above); Investing.com: 90.01B vs forecast 87.61B.
- Year-ago quarter (to 30 Sep 2025): revenue $77.70bn (Investing.com). $90.61bn would be +16.6% y/y.
- Revenue actual vs Investing.com forecast, last 9 quarters (Investing.com table, read 2026-10-26T18:17Z): Jun-26 90.01/87.61; Mar-26 82.90/81.29; Dec-25 81.27/80.23; Sep-25 77.70/75.32; Jun-25 76.40/73.79; Mar-25 70.07/68.53; Dec-24 69.60/68.92; Sep-24 65.60/64.55; Jun-24 64.70/64.38. Beat every time.
- Usual surprise size (computed from that table): mean +$1.51bn (+2.0%), sd $0.81bn (1.0 pp), smallest +$0.32bn (+0.5%, Jun-24).

## Base rate
- Own count, Investing.com table: Microsoft beat the revenue consensus in 9 of the last 9 quarters (Jun 2024 – Jun 2026), n=9 (the 12-quarter series could not be fully read; the three earlier quarters were not checked tonight). Smallest beat 0.5%.

## Schedule slip
- company-event: 0.020 [estimate] (`node scripts/refdata/slip.mjs company-event`). Date announced by Microsoft on 7 Oct; no sign of change.

## Risks
- Threshold choice: if the true street consensus is the higher $92.46bn figure, a "beat" in press headlines may differ from this claim; the claim is resolved only on the fixed $90.61bn.
- Guidance top ($90.95bn) is only $0.34bn above the threshold; a result inside the guidance range near the midpoint ($90.4bn) would be NO.
- FX: a stronger dollar in Jul–Sep 2026 versus guidance assumptions could trim reported revenue.
- Accounting changes / segment recasts (e.g. OpenAI-related revenue treatment) could shift reported revenue.
- Release delayed past midnight New York (very unlikely; company-event slip class).

## Sources
- https://finviz.com/news/400058/microsoft-announces-quarterly-earnings-release-date
- https://za.investing.com/equities/microsoft-corp-earnings
- https://www.tradingnews.com/news/microsoft-rips-25-percent-to-487-usd-with-zure-guided-to-45-percent
- Not readable tonight: https://www.financecalendar.com/event/msft-earnings-october-2026/ (permission refused), https://www.cmelitegroup.com/knowledge-hub/microsoft-earnings-date-fiscal-q1-2027-report-time-estimates-and-expected-move/ (fetch failed)
