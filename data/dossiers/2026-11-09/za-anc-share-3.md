# za-anc-share-3 (interval) and za-anc-below31-4 (derived)
Interval claim: The ANC's nationwide share of the vote in the IEC's declared results of the 4 November 2026 municipal elections, declared by 23:59 SAST on 8 Nov 2026.
Derived claim za-anc-below31-4: In the IEC's results declared by 23:59 SAST on 8 Nov 2026, the ANC's nationwide share is below 31.0%.
Criterion: the ANC's nationwide percentage in the IEC's declared results (all ballots combined as the IEC's national results page shows them; the ward ballot if the IEC shows only per-ballot national figures; as reported by the IEC, SAnews, EWN, News24 or SABC). Derived claim: YES if that figure is below 31.0% and the declaration takes place between 06:30 SAST 7 Nov and 23:59 SAST 8 Nov; NO if it is 31.0% or higher or the national declaration has not taken place by 23:59 SAST on 8 Nov. The interval claim is void if there is no declaration in the window.
Deadline: 2026-11-08 23:59 SAST
Written at (UTC): 2026-11-06T18:12:00Z
Update of: data/dossiers/2026-11-08/za-anc-dec-1.md (threshold 33.0% and deadline 7 Nov there).

## Schedule
See za-iec-decl-2.md: declaration reported for Sunday 8 Nov (EWN), IEC: "by the weekend", statutory limit 11 Nov.

## Facts
- Provisional national tally, ward ballot, 13,137,255 valid votes counted: ANC 4,096,604 = 31.2%, DA 24.3%, MK 9.5%, EFF 6.2%, IFP 5.0%, ActionSA 4.9%, FF Plus 3.0%, SACP 2.5%, PA 2.0% — https://esp.info/elections/local/2026 (modified 2026-11-06T17:57:42Z, read 2026-11-06T17:59:33Z) "ANC 31.2% Leading on the ward ballot so far (provisional)". esp.info is a third-party aggregator of IEC data, not the IEC.
- Same aggregator 24 hours earlier: 6,877,318 valid votes, ANC 31.7% (read 2026-11-05T17:48Z, previous dossier za-anc-dec-1.md). Change from roughly 44% to 84% counted: -0.5 pp.
- EWN at 90% of voting districts: "the African National Congress (ANC) topping the national leaderboard with 31%" — https://www.ewn.co.za/2026/11/06/vote-counting-enters-final-stage-with-90-of-districts-counted (published 2026-11-06T16:39:13Z, read 2026-11-06T17:59:28Z)
- Total participation 15.9 million (IEC, SAnews 5 Nov, see za-iec-decl-2.md). 13.14 million valid ward votes counted therefore leaves roughly 2.5 million ballots (about 16%), less spoilt ballots (own arithmetic).
- Where the remainder is: eThekwini (ANC 17.0% of 684,456 counted; 64% of slips captured at 12:00 Fri) — https://esp.info/elections/local/2026/kwazulu-natal/ethekwini (read 2026-11-06T17:59:41Z) and https://www.sanews.gov.za/south-africa/kzn-iec-captures-88-election-results-slips (read 18:00:24Z); Emfuleni 10% of districts (EWN, above); Johannesburg 76 wards partly counted, ANC 17.9% — https://esp.info/elections/local/2026/gauteng/city-of-johannesburg (read 17:59:33Z); Limpopo had only 23% captured on Thursday evening, the province where the ANC is strongest — https://www.sanews.gov.za/south-africa/lge2026-results-capturing-making-steady-progress (read 18:00:22Z). The remaining areas pull in both directions.
- Last comparable outcome: 2021 local elections, ANC 45.59% nationally (previous dossiers).
- Ballot measure: local elections have ward, PR and (outside metros) district-council ballots. Shares differ by ballot; independents stand only on the ward ballot. The aggregator figure is the ward ballot; the IEC's national headline may combine ballots.

## Number forecast basis
- Consensus stand-in: the current provisional tally, 31.2% (no published forecast of the final national share was found).
- Scale: no series exists (node scripts/refdata/series.mjs scale za-anc-national-share: n=0, pooled factor 1.173). Similar indicator: the change in the provisional ANC share between the two readings above, 0.5 pp (31.7 at about 44% counted to 31.2 at about 84%), times the pooled factor 1.173 = 0.59 pp (basis "pooled"). The remaining count is smaller than the last step, but the ballot-measure difference adds uncertainty of similar size, so the step is kept as the scale.
- node scripts/refdata/models.mjs quantiles 31.2 0.587 1.6 gives q10 30.0, q50 31.2, q90 32.4 (4.1 scales wide).
- node scripts/refdata/models.mjs derive 30.0 31.2 32.4 '<' 31 gives 0.415 for "below 31.0%", conditional on declaration. The derived claim also needs the declaration in the window (za-iec-decl-2), so its unconditional chance is lower; recorded as coherence_note.
- Threshold 31.0 is the round figure next to the tally, chosen because it is the open part; not set to hit a band.

## Base rate
Vote-share threshold class: none specific. Declaration slip: other-scheduled 0.138 (4/26 own, prior 0.07).

## Schedule slip
other-scheduled, 0.138 (node scripts/refdata/slip.mjs other-scheduled). The votes were cast on 4 Nov (election-held 0.004 is not the relevant risk); the open schedule step is the IEC declaration. Slip class chosen as other-scheduled because the claim resolves on the declaration of an already-held count, not on whether the election takes place; a share claim (kind other) needs no poll model, and polls are superseded by an 84% count.

## Risks
- Late Limpopo or rural Eastern Cape returns lift the ANC above 31; late eThekwini, Johannesburg and Ekurhuleni returns pull it down.
- IEC headline on combined ballots could differ from the ward-ballot tally by several tenths of a point.
- Declaration after 8 Nov: interval void, derived claim NO.

## Sources
- https://esp.info/elections/local/2026
- https://esp.info/elections/local/2026/kwazulu-natal/ethekwini
- https://esp.info/elections/local/2026/gauteng/city-of-johannesburg
- https://www.ewn.co.za/2026/11/06/vote-counting-enters-final-stage-with-90-of-districts-counted
- https://www.sanews.gov.za/south-africa/kzn-iec-captures-88-election-results-slips
- https://www.sanews.gov.za/south-africa/lge2026-results-capturing-making-steady-progress
- https://www.sanews.gov.za/south-africa/iec-reports-159-million-election-participants-results-process-continues
- data/dossiers/2026-11-08/za-anc-dec-1.md
