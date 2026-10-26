# us-fed-dissent-28
- **Claim:** At least one voting member of the FOMC votes against the monetary policy decision announced on 28 October 2026.
- **Criterion:** YES if the FOMC statement released on 28 Oct 2026 (scheduled 14:00 EDT) at the end of the 27–28 Oct meeting names at least one member who voted against the action ("Voting against the action was/were …"), whatever the direction of the dissent (for a different rate move, or against the statement's wording as recorded in the vote). NO if the statement records a unanimous vote, or if no FOMC rate decision is announced by 23:59:59 EDT on 28 Oct 2026. Dissents on other matters recorded only in the later minutes do not count. A missing or late web page does not make it NO; the claim stays pending until the statement is read.
- **Deadline (event window end):** 2026-10-28T23:59:59-04:00
- **Written at:** 2026-10-26T19:23:00+01:00

## Schedule
- FOMC meeting 27–28 Oct 2026, statement 14:00 EDT (19:00 CET), no SEP — federalreserve.gov FOMC calendar as recorded in data/planning/agenda.json (page not re-read tonight: WebFetch refused). The statement lists the vote, including dissenters by name.

## Facts
- 2026 voters: Chair Warsh, NY Fed's Williams and the Board governors, plus rotating presidents Hammack (Cleveland), Kashkari (Minneapolis), Logan (Dallas), Paulson (Philadelphia) — https://continuumeconomics.com/a/042aea7f/fomc-keeps-rates-on-hold-but-three-of-four-dissents-are-hawkish (published 2026-04-29, read 2026-10-26T18:05Z) "Three of the four rotating regional voters dissented hawkishly. Philadelphia Fed's Paulson was the exception."; voter roles also https://www.newsquawk.com/headlines/primer---todays-fedspeak-includes-hawkish-dissenters-hammack-kashkari-logan- (dated 2026-07-31, read 2026-10-26T18:08Z) "Hammack (2026 voter, hawk)", "Logan (2026 voter, hawk)", "Kashkari (2026 voter, hawk)".
- April 2026: hold with four dissents — Miran for a 25 bp cut; Hammack, Kashkari, Logan "in agreement with the decision to leave rates unchanged but objecting to the inclusion of an easing bias" — continuumeconomics.com (above). Article notes Miran "is expected to leave once Warsh joins".
- June 2026 (Warsh's first meeting): hold, "Vote was 12-0" — https://www.yardeni.com/tools/fomc-policy-meter (read 2026-10-26T18:10Z).
- July 2026: hold at 3.50–3.75%, "The vote was nine to three with three dissents"; Hammack, Kashkari, Logan preferred a 25 bp hike — https://www.pcbb.com/industry-insights/economy/2026-07-29-fomc-july-2026 (published 2026-07-29, read 2026-10-26T18:08Z); "no Board of Governors members dissented and Chair Kevin Warsh voted with the majority" — https://www.xtb.com/cy/market-analysis/news-and-research/breaking-fed-keeps-rates-unchanged-amid-regional-dissents-and-warsh-s-pause (read 2026-10-26T18:06Z).
- September 2026: 25 bp hike to 3.75–4.00%, vote 12–0 — https://eco3min.fr/en/every-fomc-rate-decision-since-1990/ (updated 2026-10-06, read 2026-10-26T18:12Z). The three hawks got the hike they wanted and did not dissent.
- So under Warsh: dissent only when the majority held while hawks wanted a hike (July); unanimous at the hold in June and at the hike in September.
- Pre-meeting stances: Hammack's primary concern "persistently high inflation"; Logan called for "modestly" higher rates; Kashkari moved his year-end projection to one hike — Newsquawk primer (above). No October speeches by Hammack, Logan or Kashkari were read tonight (search cap; Fed in blackout since ~17 Oct).
- Consensus for the decision itself is a hold (Newsquawk: 94/100 Reuters economists; agenda.json, page not re-read). A hold one meeting after a hike, with September projections pointing to a December hike (Tiger Brokers via watchlist), is the setting in which hawks might or might not dissent for an immediate second hike.
- December 2025 (cut): three dissents — Miran (50 bp cut), Goolsbee and Schmid (no change) — https://www.williamblair.com/Insights/Economics-Weekly-Dissent-at-the-Fed-and-What-Will-Happen-in-2026 (published 2025-12-12, read 2026-10-26T18:13Z) "the most dissent since 2019".

## Base rate
- Own count, FOMC meetings with at least one dissent in the statement vote, verified from the pages above: Sep 2024 yes (11–1), Nov 2024 no (12–0), Dec 2024 yes (11–1), Sep 2025 yes (11–1), Oct 2025 yes, Dec 2025 yes (9–3), Apr 2026 yes (4), Jun 2026 no (12–0), Jul 2026 yes (9–3), Sep 2026 no (12–0) — **7/10 = 0.70** (eco3min.fr, williamblair.com, continuumeconomics.com, yardeni.com, pcbb.com). This sample covers rate-change meetings in 2024–25 and recent 2026 meetings; most 2024–25 holds are missing from it.
- Full 2024–Sep 2026 count including holds from desk memory (NOT verified tonight; federalreserve.gov unreadable): 2024 Jan/Mar/May/Jun/Jul unanimous; 2025 Jan unanimous, Mar Waller dissent, May/Jun unanimous, Jul Bowman+Waller; 2026 Jan Miran+Waller, Mar Miran — gives 2024 2/8, 2025 5/8, 2026 4/6 → **11/22 = 0.50**, and **8/10 since July 2025**. The morning should verify against the Fed's statements if possible.
- Under Chair Warsh only: 1/3 (June no, July yes, September no).

## Schedule slip
- central-bank-decision: 0.010 [estimate] (`node scripts/refdata/slip.mjs central-bank-decision`). No sign the meeting will move.

## Risks
- YES path: one or more of Hammack/Logan/Kashkari dissent for an immediate hike (as in July); or a governor dissents.
- NO path: hawks accept a hold after September's hike if the statement signals a December move (as hawks did not dissent in June/Sept); a hike passed unanimously (then also NO unless someone dissents against it).
- Wording: a dissent "against the statement language" is recorded as a vote against the action (April precedent) and counts.

## Sources
- https://continuumeconomics.com/a/042aea7f/fomc-keeps-rates-on-hold-but-three-of-four-dissents-are-hawkish
- https://www.kucoin.com/news/flash/fed-chairman-warsh-faces-highest-dissent-since-1970 (read 2026-10-26T18:07Z; July: "highest number of dissents in a single meeting since October 1992" — counts four, conflicts with pcbb/xtb three; not relied on)
- https://www.xtb.com/cy/market-analysis/news-and-research/breaking-fed-keeps-rates-unchanged-amid-regional-dissents-and-warsh-s-pause
- https://www.pcbb.com/industry-insights/economy/2026-07-29-fomc-july-2026
- https://www.yardeni.com/tools/fomc-policy-meter
- https://www.newsquawk.com/headlines/primer---todays-fedspeak-includes-hawkish-dissenters-hammack-kashkari-logan-
- https://eco3min.fr/en/every-fomc-rate-decision-since-1990/ (lists Oct 2025 as 10–1, which appears to omit one dissent; direction only, no names)
- https://www.williamblair.com/Insights/Economics-Weekly-Dissent-at-the-Fed-and-What-Will-Happen-in-2026
- https://accrue.com/m/will-no-one-dissent-the-june-fed-decision (pre-meeting page, no outcome)
- Not read (refused): federalreserve.gov, financecalendar.com, Newsquawk week-in-focus
