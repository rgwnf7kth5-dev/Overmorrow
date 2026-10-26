# us-fed-hold-28
- **Claim:** At the decision announced on 28 October 2026, the Federal Reserve's FOMC keeps the target range for the federal funds rate at 3.75–4.00%.
- **Criterion:** YES if the FOMC statement released on 28 Oct 2026 (scheduled 14:00 EDT, 19:00 CET) at the end of the 27–28 Oct meeting leaves the target range for the federal funds rate unchanged at 3.75 to 4.00 percent. NO if the statement raises or lowers the range, or if no FOMC rate decision is announced by 23:59:59 EDT on 28 Oct 2026 (meeting postponed or decision delayed). A missing or late web page does not make it NO; the claim then stays pending until the statement is read.
- **Deadline (event window end):** 2026-10-28T23:59:59-04:00
- **Written at:** 2026-10-26T19:23:00+01:00

## Schedule
- Fed FOMC calendar lists the meeting 27–28 Oct 2026 without a Summary of Economic Projections — https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm (as recorded in data/planning/agenda.json, item added 2026-10-25; the page itself was not re-read tonight: WebFetch refused federalreserve.gov/financecalendar/newsquawk pages for lack of permission).
- Statement at 14:00 EDT (19:00 CET), Chair Kevin Warsh's press conference ~14:30 EDT — agenda.json items (sources fxmacrodata.com/central-bank-meetings/2026-10, LBBW economic calendar, Newsquawk week-ahead).
- Fed is in its pre-meeting blackout; Warsh "refused to preview the October 28 rate decision" — kucoin.com/news/flash item of 2026-10-17 (full URL in the signals file; its slug contains a word the dossier may not carry) (published 2026-10-17, carried from scratchpad watch_b.json, not re-read).

## Facts
- Current range 3.75–4.00% after a 25 bp hike effective 17 Sep 2026; previous change was a cut to 3.50–3.75% effective 11 Dec 2025 — pipeline/reference-data/central-banks.json (Fed table, retrieved 2026-10-23).
- The September 2026 hike was 12–0 (no dissent): "16 Sep 2026 | Hike (+25 bp) | 3.50–3.75% → 3.75–4.00% | 12–0" — https://eco3min.fr/en/every-fomc-rate-decision-since-1990/ (updated 2026-10-06, read 2026-10-26T18:12Z).
- July 2026: hold at 3.50–3.75%, "The vote was nine to three with three dissents"; Hammack, Kashkari, Logan preferred "to raise rates by a quarter percentage point" — https://www.pcbb.com/industry-insights/economy/2026-07-29-fomc-july-2026 (published 2026-07-29, read 2026-10-26T18:08Z). Same: https://www.xtb.com/cy/market-analysis/news-and-research/breaking-fed-keeps-rates-unchanged-amid-regional-dissents-and-warsh-s-pause (2026-07-29 20:00, read 2026-10-26T18:06Z) "no Board of Governors members dissented".
- June 2026 (Warsh's first meeting as chair): hold, 12–0 — https://www.yardeni.com/tools/fomc-policy-meter (read 2026-10-26T18:10Z) "June 17, 2026 | Rates held at 3.50–3.75% | None. Vote was 12-0".
- Warsh named October and December as decision points and would not prejudge — https://investinglive.com/central-banks/warsh-won-t-prejudge-rest-of-2026-names-october-and-december-as-decision-points/ (cited in data/watchlist.json us-fed-hike-28-oct, not re-read).
- September projections' median pointed to a possible hike in December; markets mostly expected an October hold — https://www.itiger.com/news/1189778569 (Tiger Brokers, 2026-10-17; cited in watchlist, not re-read).
- Consensus: Newsquawk week-ahead reports 94 of 100 economists in the Reuters poll expect a hold — https://www.newsquawk.com/headlines/week-in-focus-26-30th-october-2026-fomc-boc-rbnz-ecb-boj-policy-decisions-us-pce (as recorded in agenda.json 2026-10-25; page refused tonight, not re-read). LBBW calendar: previous upper bound 4.0, consensus 4.0 — https://www.lbbw.de/group/news-and-service/research/economic-calendar/economic-calendar_ajorqffjk6_e.html (agenda.json).
- Hawkish voters' stance: Hammack called persistently high inflation her primary concern; Logan said "inflation is not heading sustainably back to the Fed's 2% target"; Kashkari moved his year-end projection to one hike — https://www.newsquawk.com/headlines/primer---todays-fedspeak-includes-hawkish-dissenters-hammack-kashkari-logan- (dated 2026-07-31, read 2026-10-26T18:08Z).
- Background: war with Iran since February 2026 has pushed up energy prices (watchlist background, Tiger Brokers).

## Base rate
- Class: scheduled FOMC decisions where the economists' consensus is a hold, 1994–2026: the Fed has essentially always delivered the consensus (no scheduled-meeting move against a clear poll consensus in this period; approximate, from the board question's base rate "FOMC decisions with a move priced at 20% or less one week before", rate 0.01 of a move, n≈200 — data/watchlist.json us-fed-hike-28-oct). Hold-rate in this class ≈ 0.99. pipeline/reference-data/central-banks.json lists changes only (18 changes in 38 meetings since 2022) and has no verified consensus matches (n_verified 0), so it cannot give the conditional rate directly.

## Schedule slip
- central-bank-decision: 0.010 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`, prior 0.01, own record 0/0). No sign of a moved meeting; the Fed is in blackout as scheduled.

## Risks
- Hawkish surprise: a back-to-back 25 bp hike (Warsh said October is "live"; three regional presidents wanted a hike already in July).
- A cut is practically excluded by the record (no dovish voices found) but would also make this NO.
- Government data gaps or an exogenous shock (energy/Iran) changing the call in the last two days.

## Sources
- https://eco3min.fr/en/every-fomc-rate-decision-since-1990/
- https://www.pcbb.com/industry-insights/economy/2026-07-29-fomc-july-2026
- https://www.xtb.com/cy/market-analysis/news-and-research/breaking-fed-keeps-rates-unchanged-amid-regional-dissents-and-warsh-s-pause
- https://www.yardeni.com/tools/fomc-policy-meter
- https://www.newsquawk.com/headlines/primer---todays-fedspeak-includes-hawkish-dissenters-hammack-kashkari-logan-
- Not read tonight (refused / carried over): federalreserve.gov/monetarypolicy/fomccalendars.htm, financecalendar.com/event/fomc-rate-decision-october-2026/, Newsquawk week-in-focus 26–30 Oct, itiger.com, investinglive.com, kucoin.com prediction-markets item
- pipeline/reference-data/central-banks.json; data/planning/agenda.json; data/watchlist.json
