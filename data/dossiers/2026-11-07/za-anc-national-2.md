# za-anc-national-2
Claim: By 23:59 SAST on 6 Nov 2026, the ANC stands below 35.0% in the IEC's nationwide results for the 4 Nov municipal election.
Criterion: YES if the IEC's headline nationwide percentage for the ANC (results.elections.org.za), as shown at 23:59 SAST on 6 Nov 2026 with at least 90% of voting districts captured, is below 35.0%. If the IEC has declared the final result by then, that result decides. If 90% is not reached by then or the deadline reading cannot be retrieved, the IEC's later declared result decides, since the votes were cast on 4 Nov. NO if the figure is 35.0% or higher.
Deadline: 2026-11-06 23:59 SAST
Written at (UTC): 2026-11-04T17:58:00Z

## Schedule
Voting took place on Wed 4 Nov 2026 (polls close 21:00 SAST; TimesLIVE, "will not be turned away if they arrive before 9pm"). No count existed when this was written. Date of the IEC's final declaration for 2026 NOT found. Pattern given in the brief: 2021 voted 1 Nov, declared 4 Nov, i.e. three days later, which here would be Sat 7 Nov (inference, not an announced date). The claim therefore reads the IEC tally at 23:59 SAST on 6 Nov, two days after voting, and uses the declared result only as the durable record.

## Facts
IEC: about 12 million ballots cast by 17:00, more than 29 million registered, nearly 24,000 stations — https://www.ewn.co.za/2026/11/04/12m-and-counting-iec-urges-final-dash-to-polls-as-2026-local-govt-elections-enter-home-stretch (published 2026-11-04T16:56Z, read 17:54Z) "about 12 million voters had cast their ballots by 5"
Special votes on 2-3 Nov: 1,425,942 — https://www.timeslive.co.za/politics/elections-2026/ (read 2026-11-04T17:51Z) "1,425,942 people cast special votes"
Results centre is at Midrand; IEC to outline counting and verification — https://www.ewn.co.za/2026/11/04/iec-to-provide-election-update-as-counting-preparations-get-underway-at-results-centre (published 2026-11-04T15:58Z, read 17:54Z)
2021 national shares: ANC 45.59, DA 21.62, EFF 10.32, IFP 5.65, ActionSA 2.34 — https://en.wikipedia.org/wiki/2026_South_African_municipal_elections (modified 2026-11-04T07:58Z, read 17:49Z). MK did not stand in 2021.
2024 general election: ANC just over 40, DA close to 22, MK just under 15 at 96% counted — https://www.sabcnews.com/sabcnews/iec-nearing-completion-of-vote-capturing/ (published 2024-06-01, read 2026-11-04T17:49Z) "ANC remains in pole position with just over 40%"
Ipsos Pulse of the People, published 4 Sep 2026, national: ANC 31, DA 25, MK 14, EFF 11, ActionSA 6, IFP 3, PA 2 (listed parties sum to 92; base registered voters, margin ±1.77 nationally; fieldwork dates not read) — https://www.dailymaverick.co.za/article/2026-09-04-anc-and-da-in-dead-heat-across-key-metros-as-mk-dominates-ethekwini/ (published 2026-09-04T05:03Z, read 17:49Z) "ANC 31%; DA 25%; MK 14%"
Same Ipsos, metros: Johannesburg ANC 31, DA 27; Tshwane DA 31, ANC 22; eThekwini MK 55. Metro margins larger, some marked indicative. DA and PA say Ipsos under-polls them. Same URL.
eNCA/MarkData, Johannesburg, fieldwork 10 Aug-14 Sep, n=1,011, mainly telephone, likely voters at modelled 48% turnout, margin about 3: DA 35.0, ANC 21.8, lead 13.2; MK, EFF and ActionSA all above 10 — https://www.timeslive.co.za/politics/elections-2026/2026-10-18-da-leads-anc-in-joburg-by-132-points-as-urban-politics-fragment-poll-finds/ (published 2026-10-18T10:10Z, read 17:49Z) "In Johannesburg, the DA polled 35%, compared with 21.8% for the ANC"; https://www.biznews.com/biznews-daybreak/bn-daybreak-261019
Social Research Foundation, published 28 Oct: headline says the DA leads Johannesburg and Tshwane, MK far ahead in eThekwini. Figures, fieldwork and base NOT read, so not in the average — https://www.biznews.com/sarenewal/da-leads-joburg-tshwane-mk-running-ethekwini (published 2026-10-28T13:33Z, read 17:54Z)
Wayne Sussman: ANC largest in four of six big metros in 2021; polling suggests it may lead none after this vote — TimesLIVE link above "will not be the strongest party in any of the six"
Poll average used for Johannesburg, DA minus ANC: (13.2 + (-4.0)) / 2 = +4.6 from two polls with very different results; sd 6.5 (above the 5.5 local minimum, because the two polls disagree by 17 points).
National ANC estimate: Ipsos 31 rescaled to the 92 points of listed parties = 33.7. One poll, two months old, and rescaling is my own arithmetic.
Analyst on the day: higher urban turnout seen as more trouble for the ANC — EWN page above (headline, 4 Nov 17:36) "Higher voter turnout in urban centres signals more trouble for ANC"

## Base rate
vote-share-threshold: 0.5, own record 2 yes, 1 no (pipeline/reference-classes.json).

## Schedule slip
election-held 0.005 (voting already took place). Declaration date unknown, see Schedule.

## Risks
- Ipsos is one poll from early September, and rescaling assumes undecideds split evenly.
- The ANC has a rural and small-town base in local votes, which metro-focused polling may undercount.
- Early results lean rural; the tally at 90% may still shift, though little.
- Same ballot-basis issue as the Johannesburg claim.
- Ballot basis: metros have ward and PR ballots, and media may quote different totals. Criterion fixes the IEC's headline figure, but a very close race could differ by basis.

## Sources
- https://www.timeslive.co.za/politics/elections-2026/2026-10-18-da-leads-anc-in-joburg-by-132-points-as-urban-politics-fragment-poll-finds/
- https://www.dailymaverick.co.za/article/2026-09-04-anc-and-da-in-dead-heat-across-key-metros-as-mk-dominates-ethekwini/
- https://www.biznews.com/sarenewal/da-leads-joburg-tshwane-mk-running-ethekwini (headline only; body not readable)
- https://www.enca.com/news-shows/enca-markdata-election-survey-johannesburg-results-are
- https://www.timeslive.co.za/politics/elections-2026/2026-10-19-das-negotiating-stance-for-coalitions-in-joburg-no-eff-or-mk/
- https://www.biznews.com/biznews-daybreak/bn-daybreak-261019
- https://www.ewn.co.za/2026/11/04/12m-and-counting-iec-urges-final-dash-to-polls-as-2026-local-govt-elections-enter-home-stretch
- https://www.ewn.co.za/2026/11/04/iec-to-provide-election-update-as-counting-preparations-get-underway-at-results-centre
- https://www.timeslive.co.za/politics/elections-2026/
- https://en.wikipedia.org/wiki/2026_South_African_municipal_elections
- https://www.sabcnews.com/sabcnews/iec-nearing-completion-of-vote-capturing/
- https://results.elections.org.za/home/ (page loads, no text in the shell reader)
- https://www.elections.org.za/ (no usable text; news list 403)

## Research on the disputed fact (2026-11-04T18:50Z)
Nothing found. Polls closed 21:00 SAST (19:00Z), after this read at about 18:50Z, so no count existed: Daily Maverick results widget shows no figures and its blog says 'as the count begins'. Turnout: only the IEC's 12 million ballots by 17:00, no final figure; IEC CEO Mamabolo 'encouraged by the turnout'. Own arithmetic: 12m of 'more than 29 million' registered is about 41% at 17:00. No expected declaration date found; 2021 pattern in dossier stays an inference. New: the first council meeting must be called within 14 days after the council is declared elected.
Sources: https://www.ewn.co.za/2026/11/04/12m-and-counting-iec-urges-final-dash-to-polls-as-2026-local-govt-elections-enter-home-stretch https://www.dailymaverick.co.za/article/2026-11-04-local-elections-2026-live-blog/ https://www.dailymaverick.co.za/local-elections-results-2026/ https://www.dailymaverick.co.za/article/2026-11-03-fourteen-days-to-find-a-mayor-mashaba-holds-the-key-anc-the-lock/

## Overnight facts (morning run, read 5 Nov 2026 05:00-05:10 CET)
First counts, PR ballot, about 13% of voting districts (about 3,200 of 23,696; 1.02m votes): ANC 32.6, DA 30.5, EFF 4.9, MKP 4.9. Uneven: Gauteng 5% in (ANC 19.0), KZN 6% in (MKP leads, ANC 24.5), Eastern Cape 22% in (ANC 50.0), eThekwini 0%. — https://esp.info/elections/local/2026?ballot=pr
Johannesburg: only 29 of 862 voting districts in: DA 44.9, ActionSA 15.8, ANC 12.7. — https://esp.info/elections/local/2026/gauteng/city-of-johannesburg?ballot=pr
Simple reweighting by province gives ANC 30.2 to 34.3, depending on weights (arithmetic, not a forecast). In 2021 the ANC stood at 45.59% nationally on all ballots combined; PR-ballot and all-ballot figures can differ slightly. The final declaration date is not confirmed; the 2021 pattern implies about 7 Nov. Unmarked ballots and a stamp were reported stolen in eThekwini. — https://www.ewn.co.za/2026/11/05/unmarked-ballot-papers-stolen-in-ethekwini-as-vote-counting-gets-in-motion
Criterion note: the nationwide claim reads the IEC's headline figure for all ballots combined (where the IEC shows only the PR ballot, that figure decides).
