# za-iec-decl-1
Claim: By 23:59 SAST on 7 November 2026 the IEC has declared the final results of the 4 November municipal elections.
Criterion: YES if, up to 23:59 South African time on 7 Nov 2026, the Electoral Commission of South Africa (IEC) has formally announced/declared the final results of the 2026 local government elections nationwide (declaration of results at the national results centre), as shown by the IEC or by SAnews, EWN, News24, SABC or TimesLIVE. Partial or provisional dashboard figures do not count. NO if the final declaration comes after 23:59 on 7 Nov.
Deadline: 2026-11-07 23:59 SAST
Written at (UTC): 2026-11-05T17:52:00Z

## Schedule
No announced date for the IEC's final declaration. In 2021 the declaration came 3 days after voting (Thu), in 2024 4 days. By the same count 2026 would fall on Sat 7 Nov or Sun 8 Nov; statutory limit 7 days (Wed 11 Nov, per the brief; not confirmed in a page read). Primary source for the result: IEC results site https://results.elections.org.za/ (loads, but the shell reader returns no text) and its declaration event at the Midrand results centre.

## Facts
- 2021 precedent: voted Mon 1 Nov 2021; IEC announced final results at the national results centre on Thu 4 Nov 2021 (three days) — https://www.sanews.gov.za/node/54772 (published 2021-11-04T19:37+02:00, read 2026-11-05T17:49Z) "announced the final results of the elections at the National Results Operations Centre in Pretoria on Thursday". 2021 Johannesburg final: ANC 33.60, DA 26.47, ActionSA 16.05 (same page).
- 2024 national election: voted 29 May, results declared 2 June 2024 (four days) — https://www.ewn.co.za/2026/11/05/iec-says-good-progress-being-made-with-counting-of-votes (photo caption, "announces the 2024 election results on 2 June 2024", read 17:48Z); TimesLIVE headline "IEC to declare election results some time this weekend" (2024-05-31) — https://www.timeslive.co.za/politics/2024-05-31-iec-to-declare-election-results-some-time-this-weekend/ (search result title only).
- 2026 timetable: the IEC's timetable (published Aug 2026) covers "the declaration of results"; no declaration date found in anything read. The earlier dossiers record that the statutory window is 7 days after polling (to 11 Nov) — brief for this run, not independently confirmed here. — https://novanews.co.za/cityvision/iec-election-timetable-out-as-voters-roll-closed-for-wednesday-4-november-polls/ (published 2026-08-09, read 17:48Z)
- Count progress at the IEC briefing on Thu 5 Nov (EWN, published 07:30Z, so a morning figure): "about 11,000 of the expected 66,000 individual results finalised", 18% of voting districts completed — https://www.ewn.co.za/2026/11/05/iec-says-good-progress-being-made-with-counting-of-votes (read 17:48Z). IEC dealing with "more than 800 complaints", mostly party agents allegedly prevented from observing — https://www.ewn.co.za/2026/11/05/iec-dealing-with-more-than-800-complaints-from-contesting-parties (published 09:30Z). Unmarked ballots and a security stamp stolen in eThekwini; 40 Cape Town wards not fully ready on Monday (EWN, first URL).
- Preliminary turnout 54.2%, higher than 2021 — https://www.dailymaverick.co.za/article/2026-11-04-local-elections-2026-live-blog/ (headline, read 17:48Z).
- Provisional national tally, ward ballot, 6,877,318 valid votes counted: ANC 31.7%, DA 25.7%, MK 8.1%, EFF 5.9%, IFP 4.1%, ActionSA 4.0%, FF Plus 3.5%, PA 2.9%, SACP 2.7% — https://esp.info/elections/local/2026 (modified 2026-11-05T17:46Z, read 17:48Z) "ANC 31.7% Leading on the ward ballot so far (provisional)". This is a third-party aggregator, not the IEC; the counted share of votes is unclear (turnout 54.2% of more than 29 million registered implies roughly 15-16 million votes in total, so under half is in), and early returns are uneven by province (see the earlier note: Eastern Cape ahead of KZN and Gauteng).
- Provisional City of Johannesburg, ward ballot, 337,885 valid votes: DA 37.7%, ANC 17.1%, ActionSA 15.7%, EFF 7.5%, MK 5.7%, IFP 2.5%; 103 wards partly counted, wards leading ANC 39, DA 38, ActionSA 15 — https://esp.info/elections/local/2026/gauteng/city-of-johannesburg (modified 17:46Z, read 17:48Z). Aggregator again; the ward-seat lead (ANC 39 vs DA 38) is by wards and not the headline vote share.
- Polls before the vote: eNCA/MarkData Johannesburg DA 35.0, ANC 21.8 (fieldwork 10 Aug-14 Sep, n=1,011); Ipsos Johannesburg ANC 31, DA 27 (published 4 Sep) — see data/dossiers/2026-11-07/za-joburg-largest-1.md.
- Analyst expectations: "South Africa could face more than 100 hung councils" (EWN headline) and ANC "falls off cliff" (EWN analysis headline, 5 Nov) — https://www.ewn.co.za/2026/11/05/analysis-lge-2026-as-anc-falls-off-cliff-negotiations-among-political-parties-are-inevitable (headline only).

## Base rate
No reference class for IEC declaration timing; own record class other-scheduled 4 slips in 21 (estimate 0.164). Local precedents: declared 3 days after voting (2021 local) and 4 days after (2024 general), n=2, both inside the statutory window.

## Schedule slip
Slip class other-scheduled, rate 0.164 (node scripts/refdata/slip.mjs). Signs: count was only 18% of districts on the morning of Thu 5 Nov (two days of counting left before Sat), more than 800 complaints being handled, theft of ballots in eThekwini; but turnout was higher than 2021 (more votes) and the IEC's results system runs continuously.

## Risks
- Declaration may come on Sun 8 Nov or later (hung councils, complaints, recounts, delayed outlying results); the claim then resolves NO.
- IEC headline can be PR ballot, ward ballot or the sum of ballots; the criterion fixes the IEC's headline nationwide or city figure for all ballots combined (PR where only that is shown).
- Aggregator figures above come from esp.info, not the IEC.
- Early returns are skewed by province/ward type, so the provisional shares may move.

## Sources
- https://www.sanews.gov.za/node/54772
- https://www.ewn.co.za/2026/11/05/iec-says-good-progress-being-made-with-counting-of-votes
- https://www.ewn.co.za/2026/11/05/iec-dealing-with-more-than-800-complaints-from-contesting-parties
- https://esp.info/elections/local/2026
- https://esp.info/elections/local/2026/gauteng/city-of-johannesburg
- https://www.dailymaverick.co.za/article/2026-11-04-local-elections-2026-live-blog/
- https://novanews.co.za/cityvision/iec-election-timetable-out-as-voters-roll-closed-for-wednesday-4-november-polls/
- https://www.timeslive.co.za/politics/2024-05-31-iec-to-declare-election-results-some-time-this-weekend/ (title only)
- https://results.elections.org.za/ (no text readable)
- data/dossiers/2026-11-07/za-joburg-largest-1.md, za-anc-national-2.md


## Research step, 5 Nov evening (after round one)
- Question: Has the IEC said the final results will be announced on Sunday 8 Nov?
- Finding: Yes in substance, from one outlet and not as a fixed date. The Citizen on Moepya's Thursday evening briefing: 'he said the IEC was the sole party responsible for verified results, which are "anticipated" to be presented on Sunday.' Only the word 'anticipated' is quoted; the day is the paper's paraphrase. Headline: 'why SA must wait until the weekend for the final results'. SABC on the same briefing: 'anticipates that the results collation process will be concluded by this weekend' (no day). At 17:00 SAST over 60% of 66,073 results captured, 65 of 213 municipalities complete; Gauteng 35%, none of its nine municipalities confirmed. Earliest legal point: Sheburi, SAnews: 'Lawfully, the Commission cannot release or declare the results before 17:00 hours tomorrow afternoon' (Fri 6 Nov) and it 'will release the result as soon as all objections have been dealt with'. Reuters, News24 and the IEC site were not read (News24 and elections.org.za refuse the reader); one search found nothing on 2026 dates; NovaNews gave no date.
- Sources: https://www.citizen.co.za/news/south-africa/elections/counting-complete-why-wait-weekend-final-results/ (published 2026-11-05T17:47:55Z, read 2026-11-05T18:26:18Z) ; https://www.sabcnews.com/sabcnews/1175067-2/ (published 2026-11-05T19:13:50+02:00, read 2026-11-05T18:26:18Z) ; https://www.sanews.gov.za/south-africa/iec-reports-159-million-election-participants-results-process-continues (published 2026-11-05T13:46:57+02:00, modified 15:26:07+02:00, read 2026-11-05T18:26:20Z)
