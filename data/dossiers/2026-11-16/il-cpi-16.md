# il-cpi-16
- **Claim (interval):** Israel's Central Bureau of Statistics puts consumer-price inflation over the 12 months to October 2026 at … % (80% range q10–q90).
- **Criterion:** The 12-month change of the CPI (general index) for October 2026 as first published by the CBS on 15 Nov 2026 (one decimal), as in the CBS release or as reported the same evening by Globes, TheMarker, Calcalist or Trading Economics. Later revisions do not count. If the CBS does not publish the October CPI by 23:59 Israel time on 15 Nov, the claim is scored as not held.
- **Event window:** 2026-11-15T00:00+02:00 to 2026-11-15T23:59+02:00 (Asia/Jerusalem); release expected 18:30 Israel time (17:30 CET)
- **Deadline (resolves by):** 2026-11-17T05:00+01:00
- **Written at:** 2026-11-13T18:25Z

## Schedule
- Trading Economics calendar lists "Inflation Rate YoY | Oct" for 2026-11-15 at 04:30 PM GMT (18:30 Israel standard time) — https://tradingeconomics.com/israel/inflation-cpi (read 2026-11-13T17:56Z) "2026-11-15 | 04:30 PM | Inflation Rate YoY | Oct | | 1.6%" (columns: date, time, indicator, period, actual, previous).
- Maariv (12 Nov) previews the October index as due "on Sunday" — https://www.maariv.co.il/economy/israel/article-1387514 (published 2026-11-12 06:00 +02:00, read 2026-11-13T17:58Z) "ההפתעה שמחכה לישראלים ביום ראשון" ("the surprise awaiting Israelis on Sunday"), "לקראת פרסום מדד אוקטובר".
- Pattern: CBS publishes the CPI on the 15th at 18:30; the September index came out on Thu 15 Oct 2026 at 18:30 (TheMarker report timestamped 2026-10-15T18:30+03:00) — https://www.themarker.com/news/macroeconomics/2026-10-15/ty-article/000001a1-3f82-da29-abbd-7fffc5320000 (read 2026-11-13T17:57Z). When the 15th is a Saturday the release moves to Friday (14 Nov 2025) — https://en.globes.co.il/en/article-1001526485 (published 2025-11-14 14:29, read 2026-11-13T17:57Z, headline "CPI up 0.5% in October, while home prices fall again"). Sunday is a working day in Israel.
- CBS release calendar itself unreachable (empty reply), so the date rests on Trading Economics and Maariv, not the primary calendar.

## Facts
- Last first-release prints, 12-month CPI change: Jun 2026 1.6%, Jul 1.5%, Aug 1.5%, Sep 1.6%; Oct 2025 2.5%, Nov 2025 2.4%, Dec 2025 2.6%, Jan 2026 1.8%, Feb 2.0%, Mar–May 1.9% — TheMarker chart, source CBS (same URL) "מקור: הלשכה המרכזית לסטטיסטיקה". (Chart values are as published in October 2026; the Israeli CPI is not revised in practice, but treat as reported.)
- September 2026 (first release, 15 Oct): CPI −0.5% m/m against economists' −0.3%; 12-month rate 1.6% against expectations of 1.8% — TheMarker "ירידה חדה מעט מציפיות הכלכלנים, שרובם ציפו לירידה של 0.3%" / "כלכלנים ציפו שיעלה ל–1.8%"; Trading Economics https://tradingeconomics.com/israel/inflation-cpi "below market expectations of 1.8%".
- September drivers: travel abroad and domestic flights −7.3%, hotels −14.2% (together about −0.5 pt), fuel −2.2% after a fuel-tax cut (regulated petrol 7.75 shekels/l vs 8.09 in August), fresh vegetables +6.6%, rent +0.4% — TheMarker, same URL.
- August 2026: +0.7% m/m (consensus 0.9%), 12-month 1.5% (consensus 1.6%); July 2026 12-month 1.5% against expectations of an unchanged 1.6% — Trading Economics calendar table and news https://tradingeconomics.com/israel/inflation-cpi/news/575465 (read 2026-11-13T17:56Z) "below market expectations of an unchanged reading".
- Base effect: October 2025 rose 0.5% m/m (Globes 2025 headline above). With September 2026 at 1.6%, an October 2026 monthly rise of 0.5% keeps the 12-month rate at about 1.6%; each 0.1 pt of monthly change above/below 0.5% moves the 12-month rate by about 0.1 pt (own arithmetic).
- Forecasts for October 2026 found (as of 13 Nov): Psagot economists +0.5% m/m, 12-month rate unchanged at 1.6%; stock-market analyst Nissan Avraham 12-month rate 1.4% — Maariv, same URL, "כלכלני בית ההשקעות פסגות צופים עלייה של 0.5% במדד אוקטובר ... ולכן מעריכים שהאינפלציה השנתית תישאר על 1.6%" / "ניסן אברהם צופה ירידה באינפלציה השנתית ל-1.4%". Mean of the two: 1.5%. No poll of forecasters (Globes/Bizportal round-up) for October 2026 had been published at writing; such round-ups usually appear 1–3 days before release (e.g. Bizportal 10 Nov 2025 for October 2025: Harel 0.5, Mizrahi-Tefahot 0.4, Meitav 0.6 — https://www.bizportal.co.il/general/news/article/20023502, read 2026-11-13T17:57Z).
- Context: the shekel has weakened since the October election (Maariv: "מאז הבחירות ההיחלשות של השקל החריפה"); Bank of Israel policy rate 3.25%, next decision 23 Nov; Bank of Israel Research Department forecast 1.5% inflation in 2026 and 2.1% in 2027; the October minutes say forecasters expect inflation "to remain at its current level" — https://www.boi.org.il/media/h1bl2ng2/october-2026.pdf (published 2026-11-04, read 2026-11-13T17:57Z) "According to forecasters' projections, inflation is expected to remain at its current level".

## Consensus and surprise size
- Consensus used: 1.5% y/y (mean of Psagot 1.6% and Avraham 1.4%; Maariv, 12 Nov). Thin: two named forecasts. Morning desk should replace it with a Globes/Bizportal/TheMarker round-up if one appears on 14–15 Nov.
- Surprise scale: no series key exists (`node scripts/refdata/series.mjs scale israel-cpi-yoy` → n=0). Own computation from published consensus vs first release: Jul 2026 −0.1 (1.5 vs 1.6), Aug 2026 −0.1 (1.5 vs 1.6), Sep 2026 −0.2 (1.6 vs 1.8), Sep 2025 −0.3 (m/m −0.6 vs −0.3, Bizportal above), Oct 2025 0.0 (m/m 0.5 vs 0.5); rms 0.17 pt (n=5; m/m surprises translate one-for-one into the 12-month rate). Cross-check, pooled: Czech CPI flash series scale 0.1 × pooled factor 1.445 = 0.145. Scale 0.17 used.

## Base rate
- No reference class in pipeline/reference-data applies. Last three releases all came in below consensus (3 of 3).

## Schedule slip
- Class `stats-release`: `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/53, rate 0.003.
- Signs it may move: none found; date not checked against the CBS calendar itself (unreachable).

## Risks
- Consensus rests on two forecasts; a fuller round-up may shift it.
- Seasonal items (flights, hotels after the September–October holidays), fuel price changes and the weaker shekel can swing the monthly figure by several tenths.
- Rounding to one decimal.

## Sources
- https://tradingeconomics.com/israel/inflation-cpi
- https://tradingeconomics.com/israel/inflation-rate-mom
- https://tradingeconomics.com/israel/inflation-cpi/news/592482
- https://tradingeconomics.com/israel/inflation-cpi/news/575465
- https://tradingeconomics.com/israel/inflation-cpi/news/583957
- https://www.themarker.com/news/macroeconomics/2026-10-15/ty-article/000001a1-3f82-da29-abbd-7fffc5320000
- https://www.maariv.co.il/economy/israel/article-1387514
- https://www.bizportal.co.il/general/news/article/20023502
- https://en.globes.co.il/en/article-1001526485
- https://www.globes.co.il/news/article.aspx?did=1001559348 (13 Oct preview; text not extractable)
- https://www.calcalistech.com/ctechnews/article/490dvty6u (16 Sep; text not extractable)
- https://www.boi.org.il/media/h1bl2ng2/october-2026.pdf
- Front pages scanned for a preview: bizportal.co.il, bizportal.co.il/general, bizportal.co.il/capitalmarket, globes.co.il, ice.co.il, maariv.co.il/economy, themarker.com/news/macroeconomics
- WebSearch ×3: "Israel October 2026 consumer price index forecast analysts expect November 15 Globes"; "Israel October CPI forecast 2026 economists expect …"; "מדד המחירים לצרכן אוקטובר 2026 תחזית החזאים"; "\"מדד אוקטובר\" צפוי לעלות כלכלנים נובמבר 2026"

## Unreachable
- https://www.cbs.gov.il/en/Pages/Release-Calendar.aspx (empty reply, exit 3)
- boi.org.il press-release pages (bot check page)
- https://www.calcalist.co.il/local_news (HTTP 403)
