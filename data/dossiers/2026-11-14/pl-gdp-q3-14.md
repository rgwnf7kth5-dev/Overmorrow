# pl-gdp-q3-14 (interval)
- **Claim:** Poland's GDP grew by … % year on year in the third quarter of 2026 (not seasonally adjusted), according to the GUS flash estimate published on 13 November 2026.
- **Criterion:** The headline real GDP growth rate, not seasonally adjusted, year on year (constant average prices of the previous year, one decimal), for Q3 2026 in the GUS release "Szybki szacunek produktu krajowego brutto za 3 kwartał 2026 r." published on 13 Nov 2026, as first published; the seasonally adjusted figures and later revisions do not count. Void if the flash estimate is not published on 13 Nov 2026 (Warsaw time).
- **Event window:** 2026-11-13T00:00+01:00 to 2026-11-13T23:59+01:00 (Europe/Warsaw)
- **Written at:** 2026-11-11T18:10Z

## Schedule
- ING week ahead: "Poland: GDP, inflation and current account data due on Friday ... Friday brings the release of the 3Q26 GDP flash estimate, final October CPI and September current account data." — https://think.ing.com/articles/cee-cca-week-ahead-061126/ (published 2026-11-06, read 2026-11-11T17:57:37Z)
- GUS calendar: "Wszystkie 'Opracowania sygnalne' GUS od 18.03.2026 publikowane są o godz. 09:30" — https://stat.gov.pl/kalendarium/13-11-2026.html (read 2026-11-11T17:56:25Z). The day's item list is loaded by script and was not visible to the reader; the downloaded annual calendar PDF (https://stat.gov.pl/kalendarz-roczny/?pdf=1, read ~2026-11-11T17:57Z) lists the earlier flashes (Q4 2025: 12 Feb; Q1 2026: 14 May; Q2 2026: 13 Aug) but its November list stops at 10 Nov. So the 13 Nov date rests on ING plus the pattern (Q3 2025 flash was also published on 13 Nov: https://stat.gov.pl/kalendarium/13-11-2025.html, search result title "PKB wzrósł o 3,7% r/r w III kw. 2025 r. wg szybkiego szacunku GUS" https://bank.pl/?p=532863). Schedule = "reported".
- Expected time 09:30 CET (Q1 flash reported 14 May 09:31, Q2 flash 13 Aug 09:36 by Interia, below).

## Facts
- Q2 2026 flash: NSA +3.8% y/y; SA +0.9% q/q, +3.7% y/y — https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/kwartalne-rachunki-narodowe/szybki-szacunek-produktu-krajowego-brutto-za-2-kwartal-2026-r-,1,54.html (published 2026-08-13, read 2026-11-11T17:57:51Z) "produkt krajowy brutto (PKB) niewyrównany sezonowo w 2 kwartale 2026 r. zwiększył się realnie o 3,8% rok do roku"
- Q2 revised to 3.9% NSA on 31 Aug — https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/kwartalne-rachunki-narodowe/wstepny-szacunek-produktu-krajowego-brutto-w-2-kwartale-2026-r-,3,96.html (published 2026-08-31, read 2026-11-11T17:59:08Z) "zwiększył się realnie o 3,9% rok do roku"
- 16 Oct update (annual revision): NSA y/y Q1 2025 3.4, Q2 3.5, Q3 4.0, Q4 4.3; Q1 2026 3.7, Q2 2026 4.1 (all +0.2 pp vs 31 Aug) — GUS PDF https://stat.gov.pl/download/gfx/portalinformacyjny/pl/defaultaktualnosci/5480/8/18/1/produkt_krajowy_brutto__zaktualizowany_szacunek_wg_kwartalow_2025-2026.pdf (dated 16.10.2026, read ~2026-11-11T17:58Z) "Dynamika realnego PKB, dane z 16.10.2026 103,4 103,5 104,0 104,3 103,8 103,7 104,1". So Q3 2026 is compared with a strong Q3 2025 (4.0%).
- Q1 2026 flash was 3.4% NSA y/y (later 3.5, now 3.7) — Interia https://biznes.interia.pl/gospodarka/news-wazne-dane-gus-tak-urosla-polska-gospodarka-w-2026-roku,nId,23477624 (published 2026-05-14 09:31, read 2026-11-11T17:58:46Z) "PKB wzrósł w I kwartale o 3,4 proc. rok do roku"
- Q2 flash reported by Interia at 09:36 on 13 Aug — https://biznes.interia.pl/gospodarka/news-duze-przyspieszenie-w-gospodarce-gus-podal-nowe-dane-o-pkb-p,nId,23528416 (published 2026-08-13 09:36, read 2026-11-11T17:58:44Z) "niewyrównany sezonowo produkt krajowy brutto wzrósł realnie o 3,8 proc. rok do roku"
- ING forecast for Q3: 3.4% y/y, slower consumption (fuel prices), negative net exports, buoyant investment — ING week ahead (above) "According to our estimates, GDP growth moderated to 3.4% YoY from 4.1% YoY in 2Q26."
- ING: goods exports up nearly 12% y/y and imports nearly 15% (EUR), net exports probably negative — same ING article.
- Full-year forecasts (30 Oct roundup): six institutions average 3.68% for 2026 (mBank 3.9, PKO BP 3.8, ING and Pekao 3.7, Erste 3.6, IMF 3.4); mBank: weaker construction may lower Q3 growth — https://www.analizy.pl/tylko-u-nas/40940/prognozy-pkb-i-inflacji-pazdziernik-2026-ulga-w-tym-roku-wyzsze-ceny-w-przyszlym (published 2026-10-30 12:56, read 2026-11-11T17:58:14Z) "słabsze dane z budownictwa mogą obniżyć dynamikę PKB w III kwartale"
- Note: these annual forecasts partly predate the 16 Oct revision; with Q1 3.7 and Q2 4.1, a year of ~3.7% implies roughly 3.5% average in H2 (own rough arithmetic, equal weights).
- Q3 2025 flash: 3.7% vs consensus 3.7% (search-result headline, bank.pl, article not opened) — https://bank.pl/?p=532863

## Consensus and surprise size
- Consensus: 3.4% (ING's own forecast; no Reuters/PAP/Bloomberg poll found in 3 searches; cbonds consensus page refused scripted reading, 403).
- `node scripts/refdata/series.mjs` has no Polish GDP series. Similar indicators (GDP first estimates in series.json, n=1 each): US Q3 advance 0.2, euro area Q3 flash 0.2, Germany Q3 0.1, Czech Q3 0.1 → rms 0.158 pp; × pooled factor 1.284 = 0.20. Scale 0.20, basis "pooled". The consensus here is a single bank's forecast, not a survey median.
- `node scripts/refdata/models.mjs quantiles 3.4 0.2 1.6` (run 2026-11-11T18:01Z) → q10 2.99, q50 3.40, q90 3.81.

## Base rate
- None. Flash vs first figure history: Q1 2026 flash 3.4 later 3.5/3.7; Q2 flash 3.8 later 3.9/4.1 (revisions upward, not surprises vs consensus).

## Schedule slip
- `node scripts/refdata/slip.mjs stats-release` (run 2026-11-11T18:00Z) → rate 0.003 (0/52). Date reported by ING and consistent with GUS's pattern; not seen on a GUS page tonight.

## Risks
- Only one forecast as consensus; others may sit at 3.5–3.8 after the upward revision of Q2 to 4.1.
- Base effect: Q3 2025 was revised to 4.0%, raising the bar for y/y.
- Calendar/working-day effects affect the NSA y/y headline; no working-day count found.
- GUS release date not seen in GUS's own forward calendar (script-loaded page).

## Sources
- https://think.ing.com/articles/cee-cca-week-ahead-061126/
- https://stat.gov.pl/kalendarium/13-11-2026.html
- https://stat.gov.pl/kalendarz-roczny/?pdf=1
- https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/kwartalne-rachunki-narodowe/szybki-szacunek-produktu-krajowego-brutto-za-2-kwartal-2026-r-,1,54.html
- https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/kwartalne-rachunki-narodowe/wstepny-szacunek-produktu-krajowego-brutto-w-2-kwartale-2026-r-,3,96.html
- https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/kwartalne-rachunki-narodowe/produkt-krajowy-brutto-zaktualizowany-szacunek-wedlug-kwartalow-2025-2026,8,18.html and its PDF
- https://biznes.interia.pl/gospodarka/news-wazne-dane-gus-tak-urosla-polska-gospodarka-w-2026-roku,nId,23477624
- https://biznes.interia.pl/gospodarka/news-duze-przyspieszenie-w-gospodarce-gus-podal-nowe-dane-o-pkb-p,nId,23528416
- https://bank.pl/gus-zrewidowal-w-gore-odczyt-wzrostu-pkb-polski-w-ii-kwartale-2026-roku/
- https://www.analizy.pl/tylko-u-nas/40940/prognozy-pkb-i-inflacji-pazdziernik-2026-ulga-w-tym-roku-wyzsze-ceny-w-przyszlym
- https://www.analizy.pl/komentarze-i-prognozy/40642/pekao-makrokompas-wrzesien-2026
- Unreachable: https://cbonds.com/indexes/191025/ (403), https://www.bankier.pl/... (403), https://tradingeconomics.com/poland/calendar (no data), new.stat.gov.pl calendar (404)
