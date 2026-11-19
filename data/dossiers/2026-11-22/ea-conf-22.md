# ea-conf-22
- **Claim (interval):** The European Commission's flash consumer confidence indicator for the euro area in November 2026 is …
- **Criterion:** Value = DG ECFIN's flash estimate of the consumer confidence indicator (balance, seasonally adjusted) for the euro area, November 2026, as first published by the European Commission on 20 Nov 2026 (scheduled 16:00 CET). The final November figure (due with the Economic Sentiment Indicator at the end of November) and later revisions do not count. Void if the flash is not published on 20 Nov 2026 (Europe/Brussels); pending if published but not yet readable.
- **Event window:** 2026-11-20T06:00+01:00 – 2026-11-21T23:59+01:00 (Europe/Brussels); release at 16:00 CET on Fri 20 Nov.
- **Evidence expected:** DG ECFIN flash press release, 16:00 CET; evidence_at 2026-11-20T16:05+01:00
- **Deadline (resolves by):** 2026-11-23T05:00+01:00
- **Written at:** 2026-11-19T18:10Z

## Schedule
- DG ECFIN "Latest business and consumer surveys": "Next update: Flash Consumer Confidence Indicator - 20 November 2026." — https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/latest-business-and-consumer-surveys_en (modified 2026-10-29T11:06+01:00, read 2026-11-19T17:51Z).
- Econoday event page for the November flash dated 2026-11-20 10:00 ET (16:00 CET) — https://www.cmegroup.com/education/events/econoday/682511 (read 2026-11-19T17:52Z).
- Admiral Markets preview: "due on Friday 20 November at 15:00 GMT (16:00 CET, 10:00 ET)" — https://admiralmarkets.com/education/articles/forex-analysis/euro-area-consumer-confidence-flash-november-2026 (published 2026-11-14T19:41Z, read 2026-11-19T17:51Z).

## Facts
- October 2026 flash: euro area −17.9 (−1.1 pts), EU −17.3 (−1.2) — DG ECFIN page (above) "Down to -17.3 (EU) and -17.9 points (euro area), consumer confidence fell further below its long-term average." First release; the final figure on 29 Oct confirmed the flash (Admiral preview: "The final figure on 29 October confirmed the flash.").
- October ESI 96.9 in both EU and euro area (−0.6), second consecutive fall — DG ECFIN page "the Economic Sentiment Indicator (ESI) declined for the second consecutive month ... falling by 0.6 points to 96.9".
- 2026 path of flash readings (Econoday pages): Feb −12.2; Mar about −16.4 (April's −20.6 described as a 4.2-point fall); Apr −20.6; May −19.0; Jun −17.7; Jul −15.9; Aug −15.5; Sep −16.5; Oct −17.9 — e.g. https://www.cmegroup.com/education/events/econoday/682504 (published 2026-04-22, read 2026-11-19T17:52Z) "a further decline of 4.2 points to -20.6"; https://www.cmegroup.com/education/events/econoday/682508 (published 2026-08-21) "rising by 0.4 points from minus 15.9 to minus 15.5".
- Background: euro area HICP 4.0% in October, ECB deposit rate 2.50% after hikes in June and September; ECB held on 29 Oct; German GfK consumer climate for November −30.8 from −30.6; French household confidence 80 in October (lowest since 2013) — Admiral preview (above), "Euro area inflation rose to 4.0% in October"; "The NIM/GfK consumer climate for November fell to -30.8 from -30.6."
- Euro area Q3 GDP +0.4% q/q — Admiral preview citing investingLive.

## Consensus and scale
- Consensus **−17.3** (from −17.9) — Admiral preview citing Trading Economics and CME Group/Econoday: "The consensus is -17.3, against -17.9 in October." Trading Economics' own model −17.6 (same page). The Econoday page for 20 Nov had a "Market Consensus" section without a figure at read time.
- Past flash surprises (actual − consensus), Econoday consensus sections and Newsquawk:
  - Mar 2026: about −16.4 vs −14.5 → −1.9 (actual derived from April's "4.2-point" fall) — https://www.cmegroup.com/education/events/econoday/682503 "The consensus looks for consumer confidence down at minus 14.5"
  - Apr 2026: −20.6 vs −17.3 → −3.3 — Admiral preview "In April ... The consensus had been -17.3"; https://www.cmegroup.com/education/events/econoday/682504
  - May 2026: −19.0 vs −21.0 → +2.0 — https://www.cmegroup.com/education/events/econoday/682505 "Confidence expected nearly unchanged at a gloomy minus 21.0"
  - Jun 2026: −17.7 vs −17.5 → −0.2 — https://www.cmegroup.com/education/events/econoday/682506 "expected higher at minus 17.5"
  - Jul 2026: −15.9 vs −17.2 → +1.3 — https://www.cmegroup.com/education/events/econoday/682507 "Confidence seen at minus 17. 2 in July."
  - Aug 2026: −15.5 vs −16.5 → +1.0 — https://www.cmegroup.com/education/events/econoday/682508 "stronger than the market consensus of minus 16.5"
  - Sep 2026: −16.5 vs −16.8 → +0.3 — https://www.cmegroup.com/education/events/econoday/682509 "expected at minus 16.8 for September"
  - Oct 2026: −17.9 vs −17.0 → −0.9 — https://www.newsquawk.com/headlines/european-consumer-confidence-flash-oct--179-vs-exp--17-prev--165 (via Admiral source list) "European Consumer Confidence Flash (Oct) -17.9 vs. Exp. -17"
  - (all Econoday pages read 2026-11-19T17:52Z)
- n = 8: RMS 1.66 pts, mean −0.21, mean absolute 1.36.
- `node scripts/refdata/series.mjs scale` → no euro area consumer confidence series (related survey series have n ≤ 1; tool says "published or pooled", pooled factor 1.385). Basis **pooled**: scale = 1.385 × 1.66 = **2.30 pts**.
- `node scripts/refdata/models.mjs quantiles -17.3 2.30 1.6` → {"q10":-22.0161,"q50":-17.3,"q90":-12.5839}.

## Base rate
- No reference class applies. Recent record: 4 of 8 sourced flashes above consensus, 4 below; the largest miss (−3.3 in April) came with the oil shock at the start of the Iran war.

## Schedule slip
- slip_class: stats-release. `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/63, rate 0.002 [estimate] (run 2026-11-19T18:00Z). DG ECFIN page names 20 Nov; no sign of a move.

## Risks
- Energy prices and the Middle East: oil moves during the survey weeks shift household expectations sharply (April).
- Rate path: a December ECB hike widely discussed; higher borrowing costs weigh on the major-purchases component.
- Flash is based on partial data; final figures occasionally differ by 0.1–0.3, but only the flash counts.
- Only the euro-area figure counts, not the EU figure published alongside it.

## Sources
- https://economy-finance.ec.europa.eu/economic-forecast-and-surveys/business-and-consumer-surveys/latest-business-and-consumer-surveys_en
- https://admiralmarkets.com/education/articles/forex-analysis/euro-area-consumer-confidence-flash-november-2026
- https://www.cmegroup.com/education/events/econoday/682502 … 682511 (EMU: EC Consumer Confidence Flash, Feb–Nov 2026)
- https://www.mql5.com/en/economic-calendar/european-union/consumer-confidence-indicator (no values rendered)
- https://tradingeconomics.com/euro-area/consumer-confidence and /news, /news/527108, /news/505473 (titles only)

## Unreachable
- investing.com (403), forexfactory.com (403), fxstreet.com (403), tradingeconomics.com (content not rendered), forexfundamentals.com (empty pages), financecalendar.com (404).
