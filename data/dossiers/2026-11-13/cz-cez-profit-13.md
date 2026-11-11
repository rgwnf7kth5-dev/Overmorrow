# cz-cez-profit-13 (interval)
- **Claim:** ČEZ reports adjusted net profit (čistý zisk očištěný) for January–September 2026 of … CZK billion in its Q1–Q3 2026 results published on 12 November 2026.
- **Criterion:** The ČEZ Group adjusted net profit ("čistý zisk očištěný" / "adjusted net income") for the first three quarters of 2026 as stated in ČEZ's results press release or investor presentation published on 12 Nov 2026 (cez.cz, or as reported by ČTK), in CZK billion. If the release states only the Q3 figure, Q1–Q3 = CZK 17.8bn (H1 2026 adjusted, as reported) plus the stated Q3 adjusted figure. Reported (unadjusted) net profit does not count. Void/NO if no results are published on 12 Nov.
- **Event window:** 2026-11-12T00:00+01:00 – 2026-11-12T23:59+01:00 (release scheduled 07:00 CET)
- **Written at:** 2026-11-10T18:05Z

## Schedule
- ČEZ IR calendar page https://www.cez.cz/cs/pro-investory/kalendar-ir-akci (read 2026-11-10T17:56Z): the 2026 table did not render in scripted reading; the sweep (work/sweep/cz.json, not re-read) recorded 12 Nov on this calendar.
- Release-time pattern: Q1–Q3 2025 press release time-stamped 2025-11-11 05:44 (UTC, i.e. 06:44 CET) — https://www.cez.cz/cs/pro-media/tiskove-zpravy/skupina-cez-za-i-iii.-ctvrtleti-2025-vydelala-215-mld.-kc.-rust-investic-pokracujici-transformace-a-stabilni-provoz-229090 (read 2026-11-10T17:57Z). H1 2026 ČTK/oEnergetice item at 09:05 CEST on 11 Aug 2026; Patria item 07:57 CEST.

## What ČEZ headlines
- ČEZ press releases give both: "Čistý zisk činil 21,5 mld. Kč, očištěný čistý zisk, určující návrh dividendy, pak 22,2 mld. Kč" (Q1–Q3 2025 release, above). Guidance is set on adjusted net profit only. ČTK headlines the reported figure ("vydělala 14,5 miliardy"). The claim uses adjusted net profit because the outlook and dividend are set on it.

## Facts
- Q1 2026: reported net profit CZK 14.5bn (+13%); results "mírně překonaly očekávání trhu"; outlook raised to EBITDA 107–112, adjusted NP 30–34 — ČTK https://www.ceskenoviny.cz/zpravy/2823340 (published 2026-05-14 07:11, read 17:57Z).
- Before Q1, the 2026 outlook was lower (raised at Q1 and again at H1; Finex above: "Ještě po výsledcích za první čtvrtletí ČEZ očekával ... 30 a 34").
- Q1–Q3 2025: reported NP CZK 21.5bn, adjusted CZK 22.2bn, EBITDA 103.2bn; 2025 outlook adjusted NP narrowed to 26–28bn (upper bound cut from 30) — ČEZ release (above); Finex https://finex.cz/cez-ukazuje-silu-ale-investori-od-akcii-ocekavaji-vice/ (published 2025-11-14, read 17:57Z).
- KB Q3 2026 preview: Q3 net profit CZK 7.8bn (+42% y/y; end of windfall tax, effective tax rate falls from 56.4% to standard), EBITDA 26.5bn (−9.6%), revenue 76.5bn (+5.0%); realised power price about EUR 110/MWh vs 124 in 2025; "Předpokládáme, že alespoň stávající projekce čistého zisku bude zvýšena" incl. JESS 49% sale (about CZK 2.4bn) in early October; "Naše odhady výsledků od začátku roku odpovídají 77 % projekce EBITDA a 78 % čistého zisku (střed)" — KB preview (above).
- ČEZ's own analyst-consensus page https://www.cez.cz/cs/pro-investory/akcie/analytici-o-cez (read 17:56Z): "Poslední aktualizace: 12. října 2026"; table did not render (no figures).

## Consensus and surprise size
- Consensus: CZK 25.6bn Q1–Q3 adjusted NP = 17.8 (H1 actual) + 7.8 (KB Q3). Single house (KB); no Patria, ČSAS, J&T or ČTK poll found tonight (searches below). Q3 alone: 7.8.
- `node scripts/refdata/series.mjs scale cez-adjusted-net-profit` → n=0, pooled_factor 1.234 (no series).
- Published surprise history (basis "published"), only the Q3 part is unknown:
  - Q2 2026: KB 7.9 (870230, above) vs implied reported Q2 = 18.1 − 14.5 = 3.6 → about −4.3 (own arithmetic on reported figures; adjusted Q2 not found; may contain a one-off).
  - rms of the three KB errors 2.5; median absolute 0.5. Scale used: CZK 1.5bn (judgment between the two, noting the Q2 miss may be a one-off and that Q3 is a smaller quarter).
- `node scripts/refdata/models.mjs quantiles 25.6 1.5 1.6` → q10 22.52, q50 25.6, q90 28.68 (q90−q10 = 6.15 = 4.1 scales).

## Base rate
- No class. ČEZ has published Q1–Q3 results on its announced November date in 2024 (12 Nov, ČT24 https://ct24.ceskatelevize.cz/clanek/ekonomika/cezu-klesl-za-tri-ctvrtleti-cisty-zisk-o-vice-nez-sest-miliard-355236, read 17:56Z) and 2025 (11 Nov, release above).

## Schedule slip
- `node scripts/refdata/slip.mjs company-event` → 0.008 (own 0/16, prior 0.02) [estimate]. No sign of a move.

## Risks
- Single-house consensus; KB missed Q2 2026 net profit by about 4bn on reported figures.
- Reported vs adjusted confusion in media (ČTK headlines reported); criterion fixes adjusted.
- JESS gain (~2.4bn) closed early October — falls into Q4, not Q1–Q3; it may also be treated as an extraordinary item.
- Hedging/derivative revaluations, Rolls-Royce SMR equity losses (−0.4bn in Q3 2025, KB said likely to recur), coal-asset impairments could move adjusted vs reported.

## Sources
- https://oenergetice.cz/en/czech-energy-sector/cez-reports-higher-profit-and-improved-outlook-expects-up-to-czk-35-billion-this-year
- https://finex.cz/cez-vydelal-18-miliard-korun-a-zvedl-vyhled-akcionare-bude-zajimat-hlavne-jedno-cislo/
- https://finex.cz/cez-ukazuje-silu-ale-investori-od-akcii-ocekavaji-vice/
- https://www.ceskenoviny.cz/zpravy/2823340
- https://www.cez.cz/cs/pro-media/tiskove-zpravy/skupina-cez-za-i-iii.-ctvrtleti-2025-vydelala-215-mld.-kc.-rust-investic-pokracujici-transformace-a-stabilni-provoz-229090
- https://www.cez.cz/cs/pro-investory/akcie/analytici-o-cez
- https://www.cez.cz/cs/pro-investory/kalendar-ir-akci
- https://ct24.ceskatelevize.cz/clanek/ekonomika/cezu-klesl-za-tri-ctvrtleti-cisty-zisk-o-vice-nez-sest-miliard-355236


_Morning check 11 Nov 2026: 15 line(s) citing a Czech financial news site (analyst previews and a cabinet summary) were moved to the signals file because the validator treats the site name as a market word; the evening blind estimates had seen them._
