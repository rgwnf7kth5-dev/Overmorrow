# cz-diesel-max-13 (interval)
- **Claim:** The maximum retail price of diesel (B7) that the Czech Ministry of Finance sets in the Cenový věstník published on Thursday 12 November 2026 as valid for Friday 13 November 2026, in CZK per litre including VAT.
- **Criterion:** The "b) nafty" figure in the Cenový věstník issued on 12 Nov 2026 for 13 Nov (mf.gov.cz, or as reported by ČTK). Void if no cap for 13 Nov is published on 12 Nov.
- **Event window:** 2026-11-12T00:00+01:00 to 2026-11-12T23:59+01:00 (Europe/Prague)
- **Written at:** 2026-11-10T18:05Z
- **Note on the date:** series pattern (edition D claims the věstník published on D−1): cz-diesel-max-11 = věstník of 10 Nov (now published, 46.40), cz-diesel-max-12 = věstník of 11 Nov (published after the 11 Nov 06:00 freeze), so this claim covers the věstník of Thu 12 Nov for Fri 13 Nov. It sits two steps beyond the last cap known at the freeze (46.40 for 11 Nov).

## Schedule
- NV 203/2026 Sb. § 2(4): MF publishes the maximum price "každý pracovní den ... v Cenovém věstníku pro následující den"; regulation in force 1–30 Nov; a cap set for a non-working day carries over (§ 2(5)); last value used if an input is missing (§ 2(7)) — https://www.zakonyprolidi.cz/cs/2026-203 (as cited in data/dossiers/2026-11-11/cz-diesel-max-11.md; not re-read tonight).
- 12 Nov is a Thursday (working day), 13 Nov a Friday (working day), so the 12 Nov věstník sets a cap for 13 Nov only (the Friday věstník will cover 14–16 Nov).
- MF věstník list, latest entry "Cenový věstník 121/2026 10. listopadu 2026"; entries for every working day since 1 Oct (91–121) — https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026 (read 2026-11-10T17:55Z).
- Věstník 121 PDF last-modified 2026-11-10 13:08:44 GMT (14:08 CET) — https://mf.gov.cz/assets/attachments/2026-11-10_Cenovy-vestnik-121-2026.pdf (downloaded 2026-11-10T17:55Z). ČTK reported it at 14:17.

## Facts
- Cap for Wed 11 Nov: diesel 46.40, petrol 40.94 CZK/l — věstník 121 (published 2026-11-10 ~14:08 CET, read 2026-11-10T17:55Z) "46,40 Kč s DPH / litr"; ČTK https://www.ceskenoviny.cz/zpravy/-maximalni-cena-benzinu-klesne-pod-41-korun-zlevni-i-nafta/2899499 (published 2026-11-10 14:17, read 2026-11-10T17:56Z) "Naftu budou moci čerpací stanice v Česku prodávat nejvýše za 46,40 koruny, což je o 30 haléřů méně než dnes." (The page shows the same numeric id 2899499 as the 9 Nov ČTK item cited in cz-diesel-max-12.md, with a new slug and headline.)
- Novinky headline "Nové cenové stropy pro naftu a benzín klesly" (Google News RSS, 2026-11-10 13:10 GMT, read 2026-11-10T17:56Z; article not opened) — https://news.google.com/rss/search?q=cenov%C3%A9+stropy+nafta&hl=cs&gl=CZ&ceid=CZ:cs
- Věstník 121 diesel index table (3-day moving averages, CZK/l): ČEPRO 36.05; MOLIN 35.86; UIC 35,854.00 per 1000 l; Platts + costs 35.63; mean 35.85 → (35.85 + 2.50) × 1.21 = 46.4035, published 46.40 (own check). Previous (věstník 120): ČEPRO 36.34, MOLIN 36.08, UIC 36.08, Platts 35.91, mean 36.10. All four columns fell 0.22–0.29.
- Published diesel caps (valid date: cap): 1 Oct 48.72; 2 Oct 48.58; 3–5 Oct 48.54; 6 Oct 48.38; 7 Oct 47.97; 8 Oct 47.23; 9 Oct 47.29; 10–12 Oct 47.67; 13 Oct 48.36; 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17–19 Oct 48.89; 20 Oct 48.67; 21 Oct 48.61; 22 Oct 48.60; 23 Oct 48.70; 24–26 Oct 48.69; 27 Oct 48.96; 28–29 Oct 49.46; 30 Oct 49.69; 31 Oct–2 Nov 49.45; 3 Nov 49.35; 4 Nov 49.00; 5 Nov 48.79; 6 Nov 47.91; 7–9 Nov 47.28; 10 Nov 46.70; 11 Nov 46.40 (list to 9 Nov as cited in data/dossiers/2026-11-11/cz-diesel-max-11.md, 10 Nov from cz-diesel-max-12.md, 11 Nov from věstník 121). 46.40 is the lowest diesel cap since the regulation began on 1 Oct.
- Eight consecutive falls (caps valid 31 Oct–11 Nov): −0.24, −0.10, −0.35, −0.21, −0.88, −0.63, −0.58, −0.30.
- Formula: cap = (mean of four 3-day averaged price indices + 2.50) × 1.21; ČTK 10 Nov "Maximální ceny ministerstvo vypočítává na základě klouzavého třídenního průměru velkoobchodních cen. Přičítá k nim maximální marži obchodníků, kterou vláda zastropovala na 2,50 Kč za litr paliva." Diesel excise 8.011 CZK/l since 1 Oct (same ČTK item).
- Oil backdrop (Yahoo chart API, read 2026-11-10T17:56Z; Tuesday bar intraday): Brent front month 6 Nov 98.32, 9 Nov 92.57, 10 Nov 91.76 USD/bbl; NY Harbor ULSD 4 Nov 4.2055, 5 Nov 4.3519, 6 Nov 4.3317, 9 Nov 4.2148, 10 Nov 4.1204 USD/gal; USD/CZK 6 Nov 21.66, 9 Nov 21.81, 10 Nov 21.84 — https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d (and BZ%3DF, CZK%3DX). A US proxy, not Platts NWE; the crown weakened slightly against the dollar.
- Context in ČTK 10 Nov: fuel prices rose because of the Middle East conflict after US and Israeli strikes on Iran at the end of February and Iran's blockade of the Strait of Hormuz; the spring regulation (mid-April to mid-July) cost the budget about CZK 1 bn a month.

## Consensus and surprise size
- Consensus: 46.40, the last cap published before the freeze (persistence; věstník 121 for 11 Nov). No analyst forecast of daily caps exists.
- `node scripts/refdata/series.mjs scale mf-maximum-daily-retail-price-of-diesel-b7-valid-on-28-oct-2` (run 2026-11-10T17:57Z) → n=1, pooled_factor 1.234, basis "published or pooled"; no usable series scale.
- Scale, basis "published": sd of changes between consecutive published caps (MF věstníky), 28 changes since 1 Oct incl. −0.58 (10 Nov) and −0.30 (11 Nov): last 15 sd 0.366 (rms 0.385, mean −0.151); last 10 sd 0.405 (rms 0.462, mean −0.256); all 28 sd 0.363 (rms 0.366) (own arithmetic). Scale used 0.37.
- `node scripts/refdata/models.mjs quantiles 46.40 0.37 1.6` (run 2026-11-10T17:56Z) → q10 45.6413, q50 46.40, q90 47.1587 (width 1.517 = 4.1 scales).
- Two steps ahead at the freeze (12 Nov cap and 13 Nov cap both unknown); if steps were independent, sd ≈ 0.37 × √2 ≈ 0.52. Recent steps run in one direction (eight falls).

## Base rate
- No class. Own count: of 28 steps since 1 Oct, 17 down, 11 up. The current run of eight falls is the longest since 1 Oct; the only earlier run of five or more falls (1–8 Oct) was followed by +0.06 (n=1, no inference).

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` (run 2026-11-10T17:56Z) → prior 0.07, own 5/66, rate 0.075 [estimate]. Publication on every working day since 1 Oct (věstníky 91–121). No sign of a change to the regulation before 30 Nov in the sources read.

## Board
- cz-fuel-cap-december (regulation beyond 30 Nov): no news found tonight of a decision or proposal. Google News RSS search "regulace cen pohonných hmot prosinec" (read 2026-11-10T17:56Z) and one web search returned only the October extension items (MF press release https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559; CNN Prima https://cnn.iprima.cz/vlada-prodluzuje-regulaci-cen-pohonnych-hmot-chranime-tim-firmy-tvrdi-schillerova-525441; neither re-opened). ČTK 10 Nov: "Vláda nedávno prodloužila platnost regulace cen paliv do konce listopadu." In October the extension came on 26 Oct, about five days before expiry (cz-diesel-max-12.md). ČTK 9 Nov 16:55: government approved a change on electricity price regulation (headline only; not fuel).

## Risks
- Oil reversal (US–Iran talks, Hormuz) on Wed–Thu; offers react within a day.
- Two unknown steps at the freeze.
- Day alignment of the formula columns is the dossier writers' reading of the regulation.
- Caps print to the haléř and are rounded down.

## Sources
- https://mf.gov.cz/assets/attachments/2026-11-10_Cenovy-vestnik-121-2026.pdf
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026
- https://www.ceskenoviny.cz/zpravy/-maximalni-cena-benzinu-klesne-pod-41-korun-zlevni-i-nafta/2899499
- https://news.google.com/rss/search?q=cenov%C3%A9+stropy+nafta&hl=cs&gl=CZ&ceid=CZ:cs
- https://query1.finance.yahoo.com/v8/finance/chart/HO%3DF?range=10d&interval=1d
- https://www.zakonyprolidi.cz/cs/2026-203 (not re-read)
- data/dossiers/2026-11-12/cz-diesel-max-12.md, data/dossiers/2026-11-11/cz-diesel-max-11.md
