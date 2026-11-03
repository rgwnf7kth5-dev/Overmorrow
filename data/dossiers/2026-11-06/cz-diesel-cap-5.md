# cz-diesel-cap-5
- **Claim:** The maximum price of diesel set by the Czech Finance Ministry for Friday 6 November 2026 is lower than CZK 49.00 per litre.
- **Criterion:** YES if the maximum retail price of diesel valid on 6 Nov 2026, set by the Ministry of Finance on 5 Nov 2026 (Cenový věstník / announcement on mf.gov.cz), is lower than CZK 49.00 per litre. NO if it is CZK 49.00 or higher, or if the ministry sets no new cap for 6 Nov on 5 Nov.
- **Event window:** 2026-11-05T00:00:00+01:00 to 2026-11-05T23:59:00+01:00 (Europe/Prague). Cap fixed about 14:00 on 5 Nov.
- **Threshold:** CZK 49.00 is the latest published cap at writing (valid 4 Nov). The cap for 5 Nov comes about 14:00 on 4 Nov, after the morning freeze.
- **Written at:** 2026-11-03T18:15Z. Facts marked "per dossier" come from data/dossiers/2026-11-05/cz-diesel-cap-3.md and were not re-opened.

## Schedule
- Decree 203/2026 Sb. § 2(4): caps published every working day for the following day — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/203 (per dossier) "Ministerstvo financí každý pracovní den zveřejní maximální cenu benzinu na litr, maximální cenu nafty na litr". Thu 5 Nov is a working day.
- Regulation runs to 30 Nov — https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, per dossier) "Toto opatření potrvá až do 30. listopadu 2026".
- Publication record: every working day in October, 21 issues (per dossier); issues 115 (2 Nov) and 116 (3 Nov, 14:00) on time — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik and https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-116-2026-65641 (read 2026-11-03T18:09Z).

## Facts
- Cap for Wed 4 Nov: diesel 49.00, down CZK 0.35; petrol 43.04 — ČTK https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299 (published 2026-11-03 14:12, read 2026-11-03T18:09Z) "o 35 haléřů na rovných 49 korun za litr". Issue 116/2026: https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-116-2026-65641; figures not in the page text, PDF https://mf.gov.cz/assets/attachments/2026-11-03_Cenovy-vestnik-116-2026.pdf not opened.
- Cap for Tue 3 Nov: diesel 49.35, petrol 43.65 — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (read 2026-11-03T18:04Z).
- Earlier caps (per dossier): 27 Oct 48.96; 28–29 Oct 49.46; 30 Oct 49.69; 31 Oct–2 Nov 49.45. Start of regime 1 Oct 48.72; low 47.23 on 8 Oct — https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299.
- October day-to-day changes (per dossier): 10 falls, 11 rises; sd 0.31, mean absolute change 0.23.
- Formula, decree 172/2026 § 2, same structure in 203/2026: CPHM = (IØPHM + 2.50) × 1.21, IØPHM being the mean of four 3-day averages: ČEPRO, MOLIN and UIC wholesale offers including the calculation day, and Platts Barges CIF NWE High for the previous 3 working days plus USD 90/t; rounded down to haléře — https://www.epravo.cz/top/zakony/sbirka-zakonu/sb/2026/172 (per dossier).
- **Days compared (own reading):**
  - Cap for 4 Nov: wholesale 30 Oct, 2, 3 Nov; Platts 29, 30 Oct, 2 Nov.
  - Cap for 6 Nov: wholesale 3, 4, 5 Nov; Platts 2, 3, 4 Nov.
  - So 30 Oct and 2 Nov leave the wholesale columns, and 29 and 30 Oct leave the Platts column. A uniform move of d CZK/l of the new days against the dropped days moves the cap by about 0.81 × d (own arithmetic, 2/3 × 1.21).
- Brent front month closes, USD: 27 Oct 113.88; 28 Oct 115.32; 29 Oct 114.88; 30 Oct 117.64; 2 Nov 104.77; 3 Nov 103.48 (latest print, not a confirmed settlement) — https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF (read 2026-11-03T18:07Z). Caution: the 30 Oct figure is the contract then expiring; the last dossier had 113.43 for that day, and the feed appears to have rolled.
- NY Harbor ULSD, USD/gal, US proxy: 27 Oct 4.7752; 28 Oct 4.8152; 29 Oct 4.7360; 30 Oct 4.7905; 2 Nov 4.4216; 3 Nov 4.5362 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF (read 2026-11-03T18:07Z). The last dossier had 4.6761 for 30 Oct, same roll caution.
- Brent 2 Nov: fell more than 7% on signs of progress in US–Iran talks; 3 Nov about 103.30, with conflicting intraday items — https://tradingeconomics.com/commodity/brent-crude-oil (read 2026-11-03T18:07Z).
- European gasoil: "West of Suez: Brent slides, LSGO cracks extend gains" (undated, about 2 Nov), and 30 Oct "Brent ends week lower, LSGO rebounds" — https://qcintel.com/europe-oil-market-commentaries/ (read 2026-11-03T18:07Z). Headlines only: diesel margins rose as crude fell, so diesel fell less than crude. No gasoil or Platts figure read.
- Excise on diesel 8.011 CZK/l through November — https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299. Unchanged across the window.
- Unknown at writing: every Czech wholesale offer, and all inputs for 4 and 5 Nov.

## Base rate
- No class fits. Loose own count: October daily changes above. Latest step: replacing Platts 27 Oct by 2 Nov and wholesale 29 Oct by 3 Nov cut the cap by 0.35.

## Schedule slip
- `other-scheduled`: prior 0.07, own 2/15, rate 0.115 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-03). The decree obliges working-day publication and no sign of a change was found. A missing cap resolves NO.

## Risks
- Exactly 49.00 resolves NO; rounding is down.
- Two more working days of inputs: an oil rebound on US–Iran news on 4–5 Nov enters the wholesale columns directly (overnight strikes on Qeshm Island reported 3 Nov — https://tradingeconomics.com/commodity/brent-crude-oil).
- Diesel cracks rising while crude falls limit pass-through.
- Formula change: none announced for November (per dossier).
- The cap for 5 Nov, known 14:00 on 4 Nov, will say much about this claim.

## Sources
- https://www.ceskenoviny.cz/zpravy/statem-urcovane-maximalni-ceny-pohonnych-hmot-mirne-klesnou/2893299
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-116-2026-65641
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty
- https://tradingeconomics.com/commodity/brent-crude-oil
- https://query1.finance.yahoo.com/v8/finance/chart/BZ%3DF
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF
- https://qcintel.com/europe-oil-market-commentaries/
- https://tradingeconomics.com/commodity/gasoil (no gasoil figure on page)
- data/dossiers/2026-11-05/cz-diesel-cap-3.md
