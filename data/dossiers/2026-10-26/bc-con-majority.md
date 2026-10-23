# bc-con-majority

- **Claim:** The BC Conservatives win a majority (at least 47 of 93 seats) in Elections BC's preliminary results of the 24 Oct 2026 British Columbia election, as shown by 25 Oct 12:00 CET.
- **Criterion:** YES if Elections BC's preliminary (election-night) results, as displayed at 12:00 CET on 25 Oct 2026, show Conservative Party of BC candidates elected or leading in at least 47 of the 93 electoral districts. NO if fewer than 47, or if the election is postponed or Elections BC shows no preliminary results by the deadline. Later final-count changes do not matter.
- **Deadline:** 2026-10-25T12:00:00+01:00
- **Written at:** 2026-10-23T19:10:00+02:00

## Schedule
- Snap election called by Premier David Eby on 22 Sep 2026; polling day Saturday 24 Oct 2026 (fixed date would have been 21 Oct 2028). Advance voting 16–21 Oct. Returns due 18 Nov. — https://en.wikipedia.org/wiki/2026_British_Columbia_general_election ; https://www.ctvnews.ca/vancouver/article/who-are-the-party-leaders-as-british-columbia-goes-to-the-polls/
- Polls close 20:00 PDT = 04:00 CET Sun 25 Oct (sweep world.json). Elections BC publishes preliminary results district by district from poll close (elections.bc.ca); the deadline gives 8 hours.
- Legislature: 93 seats, 47 for a majority (Wikipedia above).

## Facts
- Ipsos for Global News, 7–11 Oct 2026, n=1,356 (1,001 online + 350 phone), ±3.1: decided Con 43 (+1), NDP 38 (−2), Green 11, OneBC 4, CentreBC 2, other 2; 25% undecided/no preference. Regions: Metro Vancouver Con 42 / NDP 39; Vancouver Island NDP 47 / Con 27; Southern Interior/North Con 53 / NDP 32. 50% "time for another party", 31% Eby government deserves re-election. Best premier Eby 30, Doerkson 19. — https://www.ipsos.com/en-ca/bc-conservatives-fractured-front-runners
- Angus Reid, released about 19 Oct 2026, n=793, ±3: Con 46, NDP 43, Green 8 ("statistical tie"). — https://dailyhive.com/vancouver/bc-ndp-conservatives-poll-oct-19
- Earlier (Wikipedia table): Angus Reid 22–24 Sep Con 43 / NDP 35; Liaison 21–22 Sep NDP 41 / Con 36; Innovative 4–18 Sep NDP 43 / Con 39; Ipsos 8–14 Sep NDP 45 / Con 35 — campaign swing toward the Conservatives.
- CTV 20 Oct: race tightening, Conservatives slight edge (sweep: https://www.ctvnews.ca/vancouver/article/with-less-than-a-week-to-go-bc-election-race-tightening/).
- 2024 result: NDP 47 seats (44.86%), Con 44 seats (43.28%), Green 2 (8.24%). A 1.6-pt NDP vote lead produced a one-seat NDP majority. — Wikipedia above.
- Seats at dissolution: NDP 47, Con 28 (+8 rejoined at writ → 36), CentreBC 8 (→1), Green 2, OneBC 2, Ind 4, vacant 2. Conservative leader Lorne Doerkson is interim (since 20 Sep 2026, after Kerry-Lynne Findlay resigned). — Wikipedia above.
- Poll average of the two October polls: Con lead ≈ 4 pp (Ipsos +5, Angus Reid +3).

## Base rate
- No seat-majority class in reference data. Poll-lead model for "Conservatives ahead in votes": `models.mjs lead 4 2.734` = 0.9283 (pooled rms lead error, poll-error.json, n=6). A majority needs more than the vote lead: in 2024 a 1.6-pt vote lead gave 47 seats; the Conservatives' vote is concentrated in the Interior/North (53–32), which inflates their wasted votes there, while Vancouver Island remains NDP (47–27).

## Schedule slip
- election-held 0.010 [estimate]. No sign of postponement (advance voting already completed).

## Markets (read 2026-10-23T17:02Z, markets.mjs)
- Polymarket "British Columbia general election winner" (most seats) https://polymarket.com/event/british-columbia-general-election-winner : Conservative 0.925, NDP 0.08.
- Polymarket "Next Premier of BC" https://polymarket.com/event/next-premier-of-british-columbia : Doerkson 0.925, Eby 0.075, Brodie 0.0005, Lowan 0.0005.
- Riding markets: Vernon-Lumby Acton (Con) 0.915 vs Sandhu 0.07; Vancouver-Yaletown Dovgal 0.61 vs Terry Yung 0.395.
- No seat-count/majority market found. "Most seats" is NOT a majority market: a Conservative plurality short of 47 resolves this claim NO.

## Risks
- Narrow lead in latest poll (Angus Reid +3, "statistical tie"); a plurality-but-minority outcome (e.g., 44–46 seats) is the main NO path, as in 2024's near-tie.
- Vote efficiency: Conservative vote piles up in Interior; NDP efficient in Metro Vancouver/Island.
- Preliminary results exclude some absentee/mail ballots counted at final count, so close ridings may show a different leader on election night than later; the claim uses the noon-CET preliminary picture only.
- Elections BC site outage or slow count by 12:00 CET (8 h after close) is unlikely to block the picture.

## Sources
- https://www.ipsos.com/en-ca/bc-conservatives-fractured-front-runners (opened)
- https://dailyhive.com/vancouver/bc-ndp-conservatives-poll-oct-19 (opened)
- https://en.wikipedia.org/wiki/2026_British_Columbia_general_election (opened)
- https://www.ctvnews.ca/vancouver/article/who-are-the-party-leaders-as-british-columbia-goes-to-the-polls/ (opened)
- Sweep world.json (globalnews Ipsos, CTV 20 Oct, Polymarket)
- Polymarket via markets.mjs; poll-error.json; slip.mjs; models.mjs
