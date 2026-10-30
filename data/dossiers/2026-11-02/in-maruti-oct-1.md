# in-maruti-oct-1
- **Claim:** Maruti Suzuki's total sales in October 2026, reported on 1 November, exceed its September level of 236,013 vehicles.
- **Criterion:** YES if Maruti Suzuki's monthly sales press release published on 1 Nov 2026 (IST) gives total sales for October 2026 above 236,013 units. Total sales means the headline figure: domestic plus exports, including sales to other OEMs. NO if the figure is 236,013 or lower, or if the release is not published on 1 Nov 2026.
- **Event window:** 2026-11-01T00:00:00+05:30 to 2026-11-01T23:59:59+05:30 (Asia/Kolkata)
- **Written at:** 2026-10-30T18:30:00Z. Read times below are approximate, all between 17:20Z and 18:05Z on 30 Oct.

## Schedule
- Maruti publishes on the 1st, Sundays included. The February 2026 sales release is dated "March 1, 2026", a Sunday — https://www.marutisuzuki.com/corporate/media/press-releases/2026/march/maruti-suzuki-sales-in-february-2026 (search result). The NSE filing is MARUTIASHISH_01032026105606, a filename timestamp of 1 Mar 2026 10:56:06 IST — https://nsearchives.nseindia.com/corporate/MARUTIASHISH_01032026105606_STxIntimation_Sales_Feb_2026.pdf (search result, not opened).
- The release for October 2025 was dated 1 November 2025, a Saturday — https://www.marutisuzuki.com/corporate/media/press-releases/2025/november/maruti-suzuki-sales-in-october-2025 (read 2026-10-30T18:05Z).
- Recent releases: September 2026 data on 1 Oct 2026; July 2026 data on 1 Aug 2026, a Saturday (both below).
- The 1 Jun 2025 (Sunday) release was not checked; 1 Mar 2026 serves as the Sunday precedent.

## Facts
- **Sep 2026:** total 236,013 = domestic 185,252 + other OEMs 6,542 + exports 44,219 — Maruti https://www.marutisuzuki.com/corporate/media/press-releases/2026/october/maruti-suzuki-sales-in-september-2026 (dated 1 Oct 2026, read 2026-10-30T17:23Z) "Maruti Suzuki sales in September 2026". The desk sweep gives +24% y/y (scratchpad econ.json).
- **Aug 2026:** total 219,220, +21% from 180,683; domestic 180,078; exports 33,844 (−7%) — Autocar Professional https://www.autocarpro.in/news/maruti-suzuki-august-2026-sales-rise-21-percent-yoy-to-219220-units-134391 (published 2026-09-01, read 2026-10-30T18:05Z).
- **Jul 2026:** total 241,421 = domestic 200,123 ("an all-time high") + OEM 11,242 + exports 30,056 — Maruti https://www.marutisuzuki.com/corporate/media/press-releases/2026/august/maruti-suzuki-sales-in-july-2026 (dated 1 Aug 2026, read 2026-10-30T18:05Z). Sahi reports July 2025 at 180,526 (search result headline).
- **Note:** July 2026 (241,421) is higher than September (236,013). The spec's phrase "its September level" is correct; September is not the company record.
- **Feb 2026:** total 213,995, +7.3%; exports 39,155 — Free Press Journal and Daily Excelsior headlines (search results, 1 Mar 2026).
- **Oct 2025:** total 220,894 = domestic 180,675 + OEM 8,915 + exports 31,304, "highest-ever monthly sales volume" at the time — Maruti, 1 Nov 2025 (above).
- **Festive timing:** in 2026 Navratri is about 11–20 Oct, Dussehra 20 Oct, Dhanteras 6 Nov and Diwali 8 Nov (Hindu calendar; dates not re-verified against an official holiday list tonight). Dealer dispatches, which are what Maruti's wholesale figure measures, are usually built up in the month before Diwali. In 2025 Diwali was 20 Oct. In 2024 it was 31 Oct/1 Nov. In 2023 it was 12 Nov.
- **October vs September wholesale in past years (from memory, not re-verified tonight):**
  - 2023 (Diwali 12 Nov): Sep 181,343 → Oct 199,217
  - 2024 (Diwali 31 Oct): Sep 184,727 → Oct 206,434
  - 2025 (Diwali 20 Oct): Sep 189,665 → Oct 220,894

  October was above September by about 10–16% in each year. The 2023 case (Diwali in mid-November) is the closest calendar analogue for 2026.
- **Arithmetic (own):** above 236,013 needs October ≥ 236,014, which is +6.8% y/y on October 2025 and just above September. Growth in 2026 so far: Jul +34% (vs 180,526), Aug +21%, Sep +24%.
- **Capacity:** Maruti's production in August 2026 was 221,613 — Autocar Professional headline https://www.autocarpro.in/news/maruti-suzuki-production-rises-40-percent-yoy-to-221613-units-in-august-134402 (search result). No capacity statement was read.
- No analyst estimate for Maruti's October 2026 total was found.

## Base rate
- No close class. The nearest is `company-results-beat-threshold`, own record 2 YES / 0 NO (pipeline/reference-classes.json), a loose fit. The own pattern above: October above September in 3 of 3 years recalled (unverified).

## Schedule slip
- `company-event`: 0.015 [estimate] (`node scripts/refdata/slip.mjs company-event`, run 2026-10-30T18:01Z). Maruti published on Sunday 1 Mar 2026 and on Saturday 1 Nov 2025.

## Risks
- **Plant or supply limits:** September dispatches were already high (236k). Exports are volatile: 44,219 in September vs 30,056 in July. A drop in exports of about 10k could offset domestic growth.
- **Inventory:** after a strong September, dealers may hold stock ahead of Diwali on 8 Nov and take dispatches in early November instead.
- **OEM sales** (to Toyota) swing between about 6.5k and 11k a month.
- **Publication:** a release slipping to Mon 2 Nov counts as NO. The precedents show weekend publication.

## Sources
- https://www.marutisuzuki.com/corporate/media/press-releases/2026/october/maruti-suzuki-sales-in-september-2026
- https://www.marutisuzuki.com/corporate/media/press-releases/2026/august/maruti-suzuki-sales-in-july-2026
- https://www.marutisuzuki.com/corporate/media/press-releases/2025/november/maruti-suzuki-sales-in-october-2025
- https://www.autocarpro.in/news/maruti-suzuki-august-2026-sales-rise-21-percent-yoy-to-219220-units-134391?amp=1
- Search results only: marutisuzuki.com March 2026 release, NSE filing, freepressjournal, dailyexcelsior, sahi.com, autocarpro production item, businesstoday Oct 2025
- Desk sweep: scratchpad econ.json (30 Oct)
