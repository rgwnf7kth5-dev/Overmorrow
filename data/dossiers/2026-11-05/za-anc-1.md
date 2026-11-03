# za-anc-1
- **Claim:** In South Africa's municipal elections of 4 November 2026, the ANC wins more than 33% of the national vote.
- **Criterion:** YES if the Independent Electoral Commission's results for the municipal elections held on 4 November 2026 give the ANC more than 33.0% of the national vote, reading the IEC's national figure for proportional-representation ballots where it publishes one, otherwise its headline national percentage for the party. The figure stays readable on the IEC results site after declaration. NO if the figure is 33.0% or lower, or if the elections are not held on 4 November 2026.
- **Deadline:** voting ends 21:00 SAST on 4 Nov; evidence from the IEC expected by about 8 Nov, declaration due by 11 Nov.
- **Written at:** 2026-11-02T18:30Z. Read times 18:15–18:25Z on 2 Nov.
- **Threshold:** 33.0% is a third of the vote, a round mark just above the mean of the national figures found. It was set from the polls, before any further reading.

## Schedule
- Polls open 07:00–21:00 SAST on 4 Nov, special votes 2–3 Nov 08:00–17:00. Count at each station after 21:00. IEC dashboard updates every 5–10 minutes. Declaration due within seven days, by 11 Nov. In 2021 the vote was on 1 Nov, final results on 4 Nov — Rio Times https://www.riotimesonline.com/south-africa-local-elections-november-2026/ (publication date not shown, read 2026-11-02T18:23Z) "only the IEC declares the final outcome"
- Date confirmed, about 29m registered, 2,655,067 special votes approved, 23,696 stations — SAnews https://www.sanews.gov.za/node/85201 via work/agenda-world.json (not re-read).

## Facts: polls (national)
- Ipsos, released 30 Oct: "A new Ipsos poll puts ANC support at a record low: 30% nationally, 27% in Johannesburg and just 10% in Durban." — Daily Maverick https://www.dailymaverick.co.za/article/2026-10-30-mk-support-down-as-zuma-disappears-from-stump-new-big-poll.md (published 2026-10-30 12:07 SAST, read 2026-11-02T18:17Z). Fieldwork, sample and vote base not stated. Other parties' national figures not given. City figures: Cape Town DA 51% (adjusted for registered voters); Johannesburg DA 30, ANC 27; Tshwane DA 34, ANC 31; eThekwini MK 47.
- Ipsos, June–July, 3,600 in-home interviews, published 4 Sep: among registered voters naming a party (81.8%) ANC 31, DA 25, MK 14, EFF 11 — Rio Times (above) and Ipsos https://www.ipsos.com/en-za/key-metros-remain-battlegrounds-ahead-november-local-government-elections (published 2026-09-04, read 2026-11-02T18:17Z) "should not be interpreted as a prediction of the final election outcome"
- TCS/SRF, fieldwork 8–31 Jul, margin 2.1%, 53% turnout model, published 9 Sep: ANC 34, DA 27, MK 15, EFF 7 — Daily Maverick https://www.dailymaverick.co.za/article/2026-09-13-voters-splinter-among-parties-as-support-for-the-anc-plunges/ (published 2026-09-13, read 2026-11-02T18:17Z). The same article gives a second, unexplained set (ANC 36, MK 24, DA 13, EFF 12), which conflicts; it is not used.
- Four national polls (TCS/SRF August, Ipsos September, News24/Sabi early October, TCS/SRF mid-October): ANC down "at least six percentage points" from 40.2%; DA up "at least three"; MK "treading water" — Daily Maverick https://www.dailymaverick.co.za/article/2026-10-20-four-national-polls-show-anc-decline-da-growth-and-mk-drift.md (published 2026-10-20 23:03 SAST, read 2026-11-02T18:17Z). Per-poll figures are in charts we could not read. The article warns national polls "can't describe the tapestry of local government elections".
- **Average used:** Ipsos 30 and TCS/SRF 34: mean 32. It is thin: two pollsters, one with July fieldwork. The October TCS/SRF and News24/Sabi numbers are missing, and the "at least six" line caps all four at about 34.
- eNCA/MarkData is municipal only: Ekurhuleni and Nelson Mandela Bay close, DA 33.9 in Tshwane, MK 48 in eThekwini — TimesLIVE https://www.timeslive.co.za/politics/elections-2026/2026-10-24-mk-eyes-durban-majority-da-leads-in-tshwane/ (published 2026-10-25 00:00, read 2026-11-02T18:23Z, headline and subheading only).

## Facts: past results and turnout
- ANC 45.6% in 2021 (Daily Maverick 13 Sep, above); 40.2% in the 2024 national election (Daily Maverick 20 Oct, above).
- 2021: 12.3m of 26.1m registered voted, roughly 47%; ANC majorities in 161 of 213 municipalities, 66 councils hung (Rio Times, above; these are as given there).
- Ipsos: about three-quarters of registered voters say they are likely or very likely to vote; Western Cape 84%, Limpopo 83% (Ipsos, above) "turnout could prove just as important as party support in determining election outcomes."

## Base rate
- No class for party share. `poll-error.json` holds no South African election. The local floor of sd 5.5 applies (pipeline/config.json `election_lead_sd_min`).
- Alternative not used: turnout against 2021 (class `turnout-above-previous-election`, 0.5, own 1/0). The IEC's exact 2021 turnout figure was not read.

## Schedule slip
- `election-held`: rate 0.005 [estimate], prior 0.01, own 0/19 (`node scripts/refdata/slip.mjs election-held`, 2026-11-02T18:14Z). No sign of postponement. Local reruns in single wards would not change the national figure much.

## Risks
- Polls of national preference may not carry over: turnout is lower and uneven in municipal votes, and independents and local parties take votes that national polls do not offer.
- The IEC publishes ward, PR and district ballots, and several totals exist. The criterion reads PR first. We did not verify how the IEC's dashboard labels the national percentage; the gap to an all-ballots figure may be a few tenths, which could matter near 33.0.
- Vote-share base: Ipsos' 30% base is unclear; if it counts undecided respondents, the share of valid votes would be higher.
- Evidence may arrive only at declaration, by 11 Nov. The claim then stays pending.

## Sources
- https://www.dailymaverick.co.za/article/2026-10-30-mk-support-down-as-zuma-disappears-from-stump-new-big-poll.md
- https://www.dailymaverick.co.za/article/2026-10-20-four-national-polls-show-anc-decline-da-growth-and-mk-drift.md
- https://www.dailymaverick.co.za/article/2026-09-13-voters-splinter-among-parties-as-support-for-the-anc-plunges/
- https://www.ipsos.com/en-za/key-metros-remain-battlegrounds-ahead-november-local-government-elections
- https://www.riotimesonline.com/south-africa-local-elections-november-2026/
- https://novanews.co.za/major-metros-remain-up-for-grabs-as-sa-local-elections-loom/
- https://www.timeslive.co.za/politics/elections-2026/2026-10-24-mk-eyes-durban-majority-da-leads-in-tshwane/
- https://www.timeslive.co.za/politics/2026-10-10-da-leads-anc-in-knife-edge-metro-races/
- work/agenda-world.json

## Overnight update (read 3 Nov ~04:05Z)
- Ipsos PDF read: ANC 30, DA 28, MK 12, EFF 10, don't know 3 (registered voters, 12 Sep–13 Oct). SRF October: ANC 32 (replaces July 34). Daily Maverick: all polls 22–32. Latest-poll average about 31.
- Ipsos's table gives the ANC 2021 result as 47.5 against the dossier's 45.6 (unresolved): the gap between ballot types may be about 2 points, not "a few tenths". Criterion reads the PR-ballot national figure where published.
- Date and result timing unchanged.
