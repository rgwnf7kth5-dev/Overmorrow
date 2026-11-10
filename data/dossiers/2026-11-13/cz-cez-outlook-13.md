# cz-cez-outlook-13
- **Claim:** ČEZ raises its 2026 adjusted net-profit outlook when it publishes Q1–Q3 2026 results on 12 November 2026.
- **Criterion:** YES if ČEZ's results release, presentation or management statements published on 12 Nov 2026 give a 2026 adjusted net profit (čistý zisk očištěný) outlook with at least one bound above the current CZK 31–35bn range and neither bound below it (e.g. 32–35, 32–36, 33–36, or a point figure above 33). NO if the range is confirmed, narrowed by cutting the upper bound, lowered, or if no results are published on 12 Nov.
- **Event window:** 2026-11-12T00:00+01:00 – 2026-11-12T23:59+01:00 (release 07:00 CET; conference call later that day)
- **Written at:** 2026-11-10T18:05Z

## Schedule
- See cz-cez-profit-13.md (KB preview: Thursday 12 Nov 2026, 07:00).

## Facts
- Current outlook (since H1, 11 Aug 2026): EBITDA CZK 109–114bn, adjusted NP CZK 31–35bn; raised from 107–112 / 30–34 set at Q1 (14 May), which itself was a raise — oEnergetice/ČTK https://oenergetice.cz/en/czech-energy-sector/cez-reports-higher-profit-and-improved-outlook-expects-up-to-czk-35-billion-this-year (published 2026-08-11, read 2026-11-10T17:56Z); ČTK https://www.ceskenoviny.cz/zpravy/2823340 (published 2026-05-14, read 17:57Z).
- KB: "ČEZ přehodnocuje celoroční projekce na kvartální bázi. Očekáváme, že do aktualizace celoročních cílů bude zahrnut ... také prodej JESS (cca 2,4 mld. CZK) ze začátku října. Předpokládáme, že alespoň stávající projekce čistého zisku bude zvýšena." KB's YTD estimates = 78% of the NP midpoint — https://zpravy.kurzy.cz/880698-cez-rust-cisteho-zisku-ocekavane-zvyseni-cilu-odhady-vysledku/ (published 2026-11-05 09:47, read 17:55Z).
- H1 adjusted NP 17.8bn = 54% of the 33bn midpoint (own arithmetic); KB-implied Q1–Q3 25.6bn leaves 7.4bn for Q4 to hit the midpoint.
- Q3 2025 precedent: ČEZ cut the upper bound of the 2025 adjusted NP outlook (26–30 → 26–28) at Q1–Q3 results — KB comment https://zpravy.kurzy.cz/836679-cez-cisty-zisk-nad-odhady-vzhledem-k-nizsi-efektivni-dani-ebitda-zaostala-komentar-k-vysledkum/ (published 2025-11-11, read 17:58Z).
- Q3 2024 precedent: ČEZ raised EBITDA outlook to 126–130bn and gave adjusted NP 26–30bn at Q1–Q3 results — ČT24 https://ct24.ceskatelevize.cz/clanek/ekonomika/cezu-klesl-za-tri-ctvrtleti-cisty-zisk-o-vice-nez-sest-miliard-355236 (published 2024-11-12, read 17:56Z); the original 2024 NP outlook was 25–30bn per oEnergetice/ČTK https://oenergetice.cz/rychle-zpravy/analytici-hospodareni-cez-dal-omezuje-windfall-tax-zisk-i-tak-nad-ocekavani (published 2024-08-05, read 17:56Z); whether the 25→26 lower-bound change happened at H1 or Q3 2024 was not established.
- Headwinds named: cabinet's 9 Nov energy-act amendment (possible price caps on generators; KB: negative, impact not yet estimable) — https://zpravy.kurzy.cz/881316-cez-novela-energetickeho-zakona/ (read 17:58Z); coalition talk of additional sector taxes — https://zpravy.kurzy.cz/881302-kratke-zpravy-cez-tezba-lithia-uvahy-vlady-nad-zavedeni-dodatecnych-sektorovych-dani/ (read 17:58Z). A tax or levy enacted later would not normally enter a guidance update before it becomes law.
- Q3 2025 KB comment: Rolls-Royce SMR equity loss −0.4bn per quarter likely to recur (above).

## Base rate
- Own count, ČEZ adjusted-NP outlook change at Q1–Q3 results: 2025 cut upper bound (NO); 2024 range 26–30 at Q3 vs 25–30 earlier in the year, timing of the change unconfirmed (unclear). 2026 in-year: raised at Q1 and H1 (2/2). Too few to give a rate; class "company-guidance-raise" not in reference data.

## Schedule slip
- `node scripts/refdata/slip.mjs company-event` → 0.008 (own 0/16, prior 0.02) [estimate].

## Risks
- JESS gain may be classed as extraordinary and excluded from adjusted NP, removing KB's main reason.
- Management may keep the range and say it expects the upper half (counts NO).
- ČEZ may raise only EBITDA (counts NO for this claim).
- Political pressure (state wants full ownership; new levies) may favour conservative guidance.

## Sources
- https://zpravy.kurzy.cz/880698-cez-rust-cisteho-zisku-ocekavane-zvyseni-cilu-odhady-vysledku/
- https://zpravy.kurzy.cz/836679-cez-cisty-zisk-nad-odhady-vzhledem-k-nizsi-efektivni-dani-ebitda-zaostala-komentar-k-vysledkum/
- https://zpravy.kurzy.cz/881316-cez-novela-energetickeho-zakona/
- https://zpravy.kurzy.cz/881302-kratke-zpravy-cez-tezba-lithia-uvahy-vlady-nad-zavedeni-dodatecnych-sektorovych-dani/
- https://oenergetice.cz/en/czech-energy-sector/cez-reports-higher-profit-and-improved-outlook-expects-up-to-czk-35-billion-this-year
- https://oenergetice.cz/rychle-zpravy/analytici-hospodareni-cez-dal-omezuje-windfall-tax-zisk-i-tak-nad-ocekavani
- https://www.ceskenoviny.cz/zpravy/2823340
- https://ct24.ceskatelevize.cz/clanek/ekonomika/cezu-klesl-za-tri-ctvrtleti-cisty-zisk-o-vice-nez-sest-miliard-355236
