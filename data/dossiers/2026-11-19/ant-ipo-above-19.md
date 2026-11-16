# ant-ipo-above-19
- **Claim:** Anthropic prices its IPO above $78 per share (the top of its filed $70–78 range) by 23:59 ET on Wednesday 18 November 2026.
- **Criterion:** YES if the initial public offering price per Class A share (ticker ANT), set by 23:59 ET on 18 Nov 2026 and stated in Anthropic's pricing press release, a free-writing prospectus or the 424B4 on SEC EDGAR, or reported by Bloomberg, Reuters, CNBC, WSJ or AP, is above $78.00. NO if the price is $78.00 or lower, or if the offering is not priced by 23:59 ET on 18 Nov 2026 (pricing on 19 Nov or later, postponement, withdrawal). A pricing agreed on 18 Nov but published after midnight still counts. Derived from ant-ipo-price-19 (event ">", x = 78).
- **Event window:** 2026-11-18T00:00-05:00 to 2026-11-18T23:59-05:00 (America/New_York)
- **Evidence expected:** Wed 18 Nov evening ET (≈02:00–04:00 CET Thu 19 Nov); evidence_at 2026-11-19T08:00+01:00
- **Deadline (resolves by):** 2026-11-20T05:00+01:00
- **Written at:** 2026-11-16T18:10Z

## Schedule
- Same as ant-ipo-price-19 (data/dossiers/2026-11-19/ant-ipo-price-19.md): pricing expected 18 Nov, Nasdaq trading 19 Nov (CNBC via MLQ https://mlq.ai/news/anthropics-bankers-weigh-pricing-its-ipo-above-the-70-to-78-range-lifting-its-valuation-to-15-trillion-or-more-ft-reports/, read 2026-11-16T17:52Z); one outlet says debut "Thursday or Friday" (https://finance.yahoo.com/markets/stocks/articles/anthropic-ipo-reportedly-oversubscribed-7-035659320.html, read 2026-11-16T17:52Z).

## Facts
- Filed range $70–78, unchanged as of 12 Nov evening ET (EDGAR, per MLQ above); no later revision found by 16 Nov 18:00Z.
- FT 10 Nov (five people): banks "expect to price the initial public offering above $70 to $78 a share", valuation "$1.5 trillion or more" (≈$83/share fully diluted, MLQ arithmetic) — MLQ above.
- Book: covered at the range (CNBC 10 Nov), ~6x (Bloomberg 12 Nov), ~7x (Bloomberg 15 Nov) — MLQ above; Yahoo above.
- Bloomberg 15 Nov: "targeting a $1.4 trillion valuation" (≈ $78 top of range, fully diluted) — Yahoo above.
- FT: company cares more about raising cash than maximising valuation — MLQ above (could mean upsizing rather than raising the price).
- Any price change above the range normally shows up first in a range revision (S-1/A or FWP) or is decided at pricing; SEC rules allow pricing up to 20% above the range top without recirculation (general practice, not sourced today).

## Base rate
- Large, heavily oversubscribed tech IPOs: Klarna (2025, $35–37 → $40), Figma (2025, raised range then $33 above it), Circle (2025, $31 above raised range) priced above; Arm (2023) and Reddit (2024) priced at the top, not above. Sources in ant-ipo-price-19.md. Renaissance Capital: 18 sizable IPOs priced above range in 2025 to early Sept (denominator not given) — https://www.renaissancecapital.com/IPO-Center/News/113374/buy-now-trade-later-e-commerce-loan-platform-klarna-prices-ipo-above (read 2026-11-16T17:54Z).

## Schedule slip
- slip_class: company-event; slip.mjs rate 0.006 (prior 0.02, own 0/26) [estimate]. Specific risk: Thursday pricing for a Friday debut (one report) → NO.

## Release (derived threshold)
- From the interval claim: consensus $80, scale $4.0 (pooled), threshold $78 (0.5 scale below consensus). Model `node scripts/refdata/models.mjs quantiles 80 4 1.6` → q10 71.8, q50 80.0, q90 88.2.

## Baseline
status_quo: no — the filed range tops at $78; YES needs the price lifted above the filed range (which the FT reported banks expect).

## Risks
- Pricing at exactly $78 (top) is NO; deals with Bloomberg's "$1.4 trillion" framing point there.
- Timing slip to Thursday → NO.
- Market shock on 17–18 Nov (Nvidia results 17 Nov after the close, Fed minutes 18 Nov) can sway the final price.

## Sources
- https://mlq.ai/news/anthropics-bankers-weigh-pricing-its-ipo-above-the-70-to-78-range-lifting-its-valuation-to-15-trillion-or-more-ft-reports/
- https://finance.yahoo.com/markets/stocks/articles/anthropic-ipo-reportedly-oversubscribed-7-035659320.html
- https://investinglive.com/news/earnings-week-ahead-nvidia-without-jensen-anthropic-s-ipo-and-the-consumer-meets-a-hiking-fed/
- https://www.renaissancecapital.com/IPO-Center/News/122657/anthropic-sets-terms-for-61-billion-ipo-targeting-a-1.2-trillion-market-cap
- https://www.renaissancecapital.com/IPO-Center/News/113374/buy-now-trade-later-e-commerce-loan-platform-klarna-prices-ipo-above
- Refused: https://www.cnbc.com/2026/11/16/anthropic-ipo-date-price-range.html (403)
