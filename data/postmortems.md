# Post-mortems

One paragraph for each confident miss: a claim at 70% or more that failed, or 30% or less that came true. Newest first.

## 2026-10-27 · br-loser-concedes (75%, failed)

We said the loser of Brazil's runoff would publicly acknowledge defeat or congratulate the winner in time; Flávio Bolsonaro said on election night that it was "impossible to recognise the result" and repeated it in a video on 26 October, while only his party, the PL, recognised the TSE's result. The forecast leaned on the general norm of concession in Latin American runoffs and on the PL's institutional behaviour, but the candidate himself had spent the campaign casting doubt on the voting extension and the family's 2022 precedent was a refusal to concede. Diagnosis: wrong base rate (a generic concession norm applied to a candidate with a stated record of contesting results). Rule: for concession claims, start from the candidate's own public record and statements in the final week, not the regional norm.

## 2026-10-26 · br-turnout-2022 (22%, came true)

We gave only 22% to turnout in the runoff exceeding the 79.41% of 2022; the TSE reported about 80.8%. The forecast treated 2022 as an unusually high peak and assumed mean reversion, but a close, polarised rematch-style runoff with a high-salience incumbent drew the same mobilisation, and the two-hour voting extension in three states added to it. Diagnosis: wrong base rate (mean reversion applied where the drivers of the previous peak were still present). Rule: for turnout claims against the last comparable election, condition on closeness and polarisation of the race, not only on the long-run average. (The same edition's Lula vote-share range, 47.3–50.9%, also missed the result of 51.79%, and br-flavio-wins at 69% failed: the paper read the late Datafolha lead as more solid than the house's own series supported.)

## 2026-10-27 · cz-pardubice-coalition-signed-26 (27%, came true)

We gave 27% to the five Pardubice groupings signing their coalition agreement on 26 October; they signed it that evening. The forecast started from the negotiation-round slip rate and from the earlier miss of a signing by noon, reading the delay as a sign of trouble, when the parties had publicly set the signing for that day. Diagnosis: missed fact compounded by over-weighting the slip prior: an announced signing date is a scheduled event, not an open negotiation. Rule: when partners announce the date of a signing, use the scheduled-event class, not negotiation-round.

## 2026-10-26 · sk-vallo-10 (35%, came true)

We gave Vallo only a 35% chance of beating Ráž by more than 10 points; ŠÚ SR results gave him 64.36% to 32.32%, a 32-point margin. The forecast ran the national poll-lead model on a single local poll showing a 7-point lead, and its own base-rate note already said the pooled error "understates spread for one local n=500 poll" — yet the spread was used to cap the margin rather than widen it. Incumbent big-city mayors with a fragmented or weak opposition tend to win by landslides that one small poll does not capture. Diagnosis: wrong base rate (a national-election error model applied to a municipal race, anchored on one poll). Rule: for local races with one poll, take the incumbent's previous margin as the anchor and widen the error well beyond the pooled rms.

## 2026-10-25 · br-datafolha-flavio (28%, came true)

We said Datafolha's 23–24 October poll would not show Flávio Bolsonaro strictly ahead; it gave him 51% to Lula's 49% of valid votes. Datafolha's own runoff series had shown Flávio at 52–48 (6–7 Oct) and 51–49 (13–15 Oct) before a 50–50 tie on 22 Oct, so "strictly ahead" was close to a coin flip on the house's own trend, not a 28% outcome. Diagnosis: wrong base rate from over-reading the last tie as a trend toward Lula. (Lula went on to win the actual runoff, so the poll itself was off; the claim was about the poll.) Rule: for claims about a named pollster's next release, start from the distribution of that house's last three rounds.


## 2026-10-23 · israel-no-majority (80%, failed)

We said no poll dated 22 October would give either Israeli bloc 61 seats; Channel 14's final pre-blackout poll (Direct Polls/Filber) gave the 37th-government parties 62, and Wikipedia's table highlights it as a majority. Channel 14 had already shown the government bloc at 61 in earlier October polls listed in the same table, and it publishes almost daily, so the claim effectively asked whether its 22 October poll would fall below 61. Diagnosis: wrong base rate, from a missed fact: the forecast looked at the average of pollsters, where neither bloc reaches 61, instead of at the most favourable house, which is the one that decides a "no poll gives either bloc" claim. Rule: for "any poll" claims, set the probability from the outlier pollster's recent figures, not from the polling average.

## 2026-10-24 · cz-benefits-stalled (75%, failed)

We said the unemployment-benefit cut would stay stuck in the Chamber on 23 October; in fact the government had attached the cut to the Labour Code amendment (tisk 300), which passed its first reading on 20 October (motion to reject failed 43–78). The story rested on a ČT24 article of 8 October and nobody re-checked the Chamber's own record before freezing. Diagnosis: missed fact, compounded by bad claim design — the criterion spoke of a "benefit bill" that did not exist as a separate print, so the resolver had to interpret it. Rule: Chamber claims must name the print number (tisk) and be checked against psp.cz on the morning of the freeze.

## Claim design

- 2026-10-27 · ca-toronto-chow-reelected, cz-babis-algeria-arrival-noon: resolved as ambiguous because the primary source (toronto.ca results; a time-stamped arrival report) could not be read; name a secondary fallback with timestamps in the criterion.
- 2026-10-24 · fr-paris-ban: the prefecture banned the negotiated march route (Bastille–Nation) rather than issuing a zone ban, and the resolver had to read a route ban as "banning demonstrations in part of Paris"; say explicitly whether a route ban counts.
- 2026-10-24 · cz-benefits-stalled: criterion named a stand-alone bill that did not exist; name the print (tisk) number.
- 2026-10-24 · france-unions-out: "formally call members to join" had to be read against a statement condemning the bans without a call; define what counts as a call (a published call to the specific day).
- 2026-10-24 · serbia-sns-ahead: criterion fixed a tracker snapshot date ("as of 23 October") that the tracker does not archive; use a dated publication instead.

## 2026-10-23 · sakharov-icc (15%, came true)

The Sakharov Prize went to the International Criminal Court and its officials, the finalist we rated least likely. We leaned on the Conference of Presidents arithmetic, assuming the EPP and ECR would carry Lissu, and gave too little weight to the chance that group leaders would converge on a laureate that defended international institutions under pressure. Diagnosis: wrong base rate. The class "laureate is the EPP-backed finalist" was untested and built from a handful of recent years; with this result it stands at 0 of 1 in our own record, and future Sakharov forecasts should start closer to an even split among finalists until the record grows. The pilot edition also lacked the three-agent ensemble that might have challenged the assumption.

### 2026-10-28 run
- **eu-baltic-quotas-26 (edition 2026-10-27, 10%, came true).** The Council reached the Baltic agreement on day 1 of AGRIFISH (26 Oct), as its own press release says. We leaned on the habit of overnight Baltic talks running into day 2; the reference class (day-1 agreements in October AGRIFISH) was built from too few years. Wrong base rate.
- **cz-cabinet-26-koruna (edition 2026-10-28, 27% in the edition, 83% after the afternoon update, came true).** The cabinet approved a positive opinion on tisk 320 on 26 Oct. The morning number missed that the item was on the published agenda; the afternoon update caught it. Missed fact.

## Coverage
- 2026-10-28 run, edition 2026-10-28: WMO Greenhouse Gas Bulletin (27 Oct) was missed though announced in advance; the WMO/UNEP pre-COP report calendar is not in the sweep. Added to pipeline/sources.json.

### 2026-10-29 run
- Claim design · il-yashar-largest-28 (edition 2026-10-29): the criterion asked which list won the most votes, but the reachable count reported seats; the resolver had to infer the vote order from seats (Likud 26, Yashar 21 at about 90% counted). Name a source that publishes raw vote totals, or ask about seats.
- Coverage · edition 2026-10-29: five significant events of 28 Oct were missed (Toledo high-speed collision, Belgrade embassy knife attack, Pellegrini on Slovak airspace, Russia–Ukraine strikes, Reuters' Iran-war cost estimate); none was announced in advance, so no sweep gap. Reuters and AP lists were unreachable.

### 2026-10-30 run
- Coverage · edition 2026-10-30: seven significant events of 29 Oct were missed: Lagarde's announcement that she will step down early as ECB President on 7 Feb 2027, the Russian strike on Dnipro station, Patrick Stewart's death, KHNP ending the Dukovany construction-contract talks without a deal, ANO losing its Turnov councillors, criminal proceedings over the Postoloprty remains, and the Most coalition deal. None was announced in advance, so there is no sweep gap. The Lagarde exit was flagged as a market in the eu-ecb dossier but dismissed as negligible for 29 Oct; when an institution's head faces a live exit market, consider an "announces departure" claim on the day of a scheduled press conference. Reuters and AP lists were unreachable.
