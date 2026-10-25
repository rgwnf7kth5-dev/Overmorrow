# How The Overmorrow Works

The Overmorrow is a newspaper written two days ahead. The edition dated day D+2 is published at 06:00 on day D and reports what we expect to happen on day D+1. Every report rests on an event that is scheduled or firmly expected, and every report carries at least one forecast: a binary claim with a stated probability, a deadline and a rule for checking it.

After the events, each claim is checked against a primary source and scored. Editions are never edited after publication. The full record, including every miss, is public in the archive and on the accuracy page, and the git history of this repository shows exactly when each forecast was made.

This document is the full protocol. The step-by-step operating manuals for the people and agents who run it are in [`pipeline/EDITOR.md`](pipeline/EDITOR.md) (writing an edition) and [`pipeline/RESOLVER.md`](pipeline/RESOLVER.md) (scoring an edition).

## 1. Timing

An evening desk the day before does the slow work: it keeps a 14-day agenda, selects the candidates, writes a research dossier for every proposed claim, runs the first round of forecasts and updates the forecast board (section 10). The morning run then scores whatever has fallen due, checks what changed overnight, re-forecasts what moved, and writes and publishes the new edition. A shorter run after midday updates that edition with what has become known since the morning (section 4.8).

| Step | When (Europe/Paris) |
|---|---|
| Evening desk: agenda, dossiers, first forecasts, forecast board | About 18:40 on day D−1 |
| Morning run starts | About 05:00 on day D |
| Claims due are resolved and stamped onto archived editions | First part of the run |
| Information cut-off and freeze | Early morning of day D, recorded as `frozen_at` |
| Edition dated D+2 published | By 06:00 on day D |
| Afternoon update of the same edition | Run starts 12:20, published by 13:30 on day D |
| Previous edition moves to the archive | At the same moment, when the new edition replaces it |
| Events forecast | Day D+1 |
| That edition's claims resolved | In the 06:00 run of day D+2, once the day's results are known |

So an edition is on the front page for one day, goes to the archive the next morning, and receives its results the morning after that, on the date it bears.

Nothing learned after `frozen_at` may be used in the edition. If a decisive fact emerges between freezing and publication, the edition is re-frozen and the new time recorded.

## 2. Finding the events

### 2.1 The calendar sweep

Every edition starts with a sweep of official calendars for day D+1. The registry of sources lives in [`pipeline/sources.json`](pipeline/sources.json) and is checked in full every time. It covers:

- **Czech Republic:** Chamber of Deputies schedule and order of business, Senate schedule, government expected events (vlada.cz), Constitutional Court announcements, Czech National Bank calendar, Czech Statistical Office release calendar, presidential office programme.
- **World:** election calendars (IFES ElectionGuide), UN Security Council programme of work and UN agencies, NATO, G7 and G20, African Union, ASEAN, summits and state visits, parliaments and governments of the United States, the United Kingdom, Germany, France, Poland and other large countries, major central banks, national statistics offices.
- **European Union:** Parliament plenary agenda, the Council's forward look and the rotating Presidency's calendar, the Commission's College agenda, the Court of Justice judicial calendar, ECB monetary policy calendar, Eurostat release calendar.
- **Courts:** scheduled verdicts and rulings of international and high national courts.
- **Science, health and culture:** launch schedules (ESA, NASA, others), WHO, major prizes and announcements, large festivals and premieres.

### 2.2 The running-story sweep

Many important events have no calendar entry: negotiations, wars, crises, campaigns. For each running story we read the reporting of the previous 48 hours from at least two independent outlets and identify the next step that is expected on day D+1.

From edition No. 6 the selection starts from **the stories of the day**: the stories that lead, or are in the top five of, at least two reference front pages (Reuters World and Business, AP, BBC, the Financial Times, ČT24, Seznam Zprávy, iROZHLAS). These are what readers will hear about on D+1, and each of them gets a report with a forecast of its next development by the end of that day, even when no institution has scheduled anything. At least six of the eight to ten biggest must be in the paper; the others are listed with the reason.

### 2.3 Recording candidates

Every candidate is recorded with:

- date and time, place, institution;
- section (Czech Republic, Europe, World, Economy, Science and Health, Culture);
- source URL;
- **schedule status**: `official` (in an institution's own calendar), `reported` (announced in at least two credible outlets), or `speculative`. Speculative items never lead the paper and may appear only in briefs;
- **slip class**: the kind of scheduled event, from [`pipeline/reference-data/schedule-slip.json`](pipeline/reference-data/schedule-slip.json) (a Chamber item with a fixed slot, a Council adoption, a court judgment, a space launch…), or `none`. Each class carries the rate at which such events do not take place on the scheduled day (section 4.1).

The candidate pool for one edition should contain at least 40 events before selection.

### 2.4 Selecting what goes in

Each candidate gets three scores from 1 to 5:

- **Impact**: how many people and how much policy, money or security it affects.
- **Reach**: how many readers it matters to. The paper is a general newspaper with a Czech home base and a world view, not an EU bulletin: Czech events and major world events weigh most; EU institutions score high only when a decision has real consequences beyond Brussels (money, law that changes daily life, foreign policy).
- **Uncertainty value**: how much a forecast tells the reader. An outcome that is close to certain, or a pure coin toss with no information, scores low; a contested outcome on which evidence exists scores high.

The editorial score is Impact × Reach × Uncertainty value. From edition No. 6 the stories are chosen by news value, Impact × Reach; Uncertainty value decides which claim a story carries, never whether a big story runs. Every edition has an economy desk of at least three reports: data releases, central banks, budgets and taxes, company results and decisions, energy and regulated prices, trade and tariffs, labour and strikes. Only market prices (stock indices, exchange rates, commodity and crypto prices) are excluded. Every edition also carries three to six illustrative photographs of places and objects from Wikimedia Commons under free licences, credited and marked as illustrations; never pictures of people at events that have not yet happened. Candidates are ranked and then fitted to section quotas, so that each edition covers the Czech Republic, world affairs, Europe, the economy and at least one item from science, health or culture when one qualifies. The World section is the largest; EU institutional stories are capped at three per edition, including the front page. Sport and financial market prices are excluded by policy.

The number of Czech stories (`cz_stories_min`) is a target, not a quota to be filled at any price. If the day does not offer enough Czech events of real weight, the edition runs shorter and records why (`meta.cz_shortfall`). A claim that something will *not* happen (no sanction, no deal, no announcement) is legitimate when the action is genuinely in play; it is not a way of filling a page.

Every candidate that is considered and not selected is kept in the planning file with the reason, and the resolver later checks which significant events of the day we covered, dropped or missed (section 7).

## 3. Writing a forecastable claim

Every report carries one or more claims. A claim must be:

1. **Binary**: it comes true or it does not. No "partly".
2. **Inside the day it reports**: the event must happen in the forecast period, and four times are kept apart:
   - the information cut-off (`frozen_at`);
   - the **event window** (`event_window`, with the time zone of the place, `tz`): the period in which the event must happen. It may open on day D after the freeze and must close by 23:59 local time on day D+1 where the event takes place (a Brazilian election is judged on Brazilian Sunday). An event on day D+2 belongs to the next edition, however early on D+2 it falls; "by Monday noon" is not a Sunday forecast;
   - the expected publication of the deciding evidence (`evidence_at`), which may be later: a Sunday election counted overnight is still a Sunday event;
   - the evaluation deadline (`resolves_by`), by which the resolver reads the evidence.
3. **Checkable**: it names the primary source that will decide it (`resolution_source`) and the exact test (`criterion`).
4. **Unconditional**: if the event does not happen in its window, the claim resolves "No". The risk of postponement is therefore part of the probability. Missing evidence is not a "No": if the source is late, the claim waits (section 6). A claim is void only if its resolution source no longer exists or the criterion turns out to be impossible to apply.
5. **Informative**: it targets the uncertain part of the event. "The Sakharov Prize is announced" is uninformative; "the Sakharov Prize goes to Tundu Lissu" is informative.
6. **Resolvable on time**: the claim states in `publishes` when and where the deciding source will publish the result ("ČSÚ press release at 09:00 on 30 October"). If nobody can say that, the claim is rewritten. The claim text and the criterion must say the same thing; a claim whose text and criterion diverge is rewritten before freezing.

Published probabilities run from 1% to 99%. A 98% figure is still a forecast, not a fact; the editor may leave a near-certain outcome out as uninformative, but the number itself is never pushed towards the middle or the edges to fit a rule.

Where several claims are mutually exclusive and together cover every outcome (for example, which of three finalists wins), they are published together and must sum to 100%. If the set leaves an outcome out (for example "not yet decided by midnight"), it is marked as not exhaustive and may sum to less.

### 3.1 Number forecasts

Where the outcome is a number published by an official source (an inflation flash estimate, GDP, unemployment, a vote count, turnout), a yes/no threshold throws information away. Such a report may instead carry an **interval claim** (`kind: "interval"`): a central figure and an 80% range, given as the 10th, 50th and 90th percentiles, with the unit and the usual size of a surprise for that indicator (`scale`, with its source). Each forecaster gives the three percentiles; they are averaged. The analysts' consensus, where one exists, is recorded as a benchmark. At most three interval claims per edition; they are scored separately (section 7). When a binary claim is about the same quantity (who wins, whether the margin is under four points), it is derived from the same distribution (section 4.6), and an afternoon update that moves one moves the other.

## 4. Estimating the probability

Each claim goes through the same protocol. All steps are recorded in the edition file under `rationale`, so that misses can be examined later.

### 4.1 Outside view first

Find the reference class: the set of comparable past cases. Examples: "trilogue agreements put to a final plenary vote in the 10th term", "budget first readings with a coalition majority in the Czech Chamber", "runoff polls within two points four days before a vote". Record the base rate and the size of the class. Base rates come from data wherever possible: [`pipeline/reference-data/`](pipeline/reference-data/README.md) holds rates computed from the Czech Chamber's open voting records, the record of final polls against election results, and central-bank decisions, with the scripts that rebuild them. The library of reference classes in [`pipeline/reference-classes.json`](pipeline/reference-classes.json) grows with every edition.

**Will it happen that day at all?** For a newspaper two days ahead the most common way to be wrong is not a wrong outcome but an event that does not take place on the day. Every claim's slip class gives a starting rate: data-based for the Czech Chamber (for example, 381 of 565 agenda items with a fixed slot in the 9th term, about two thirds, were dealt with at the meeting where they were listed; the unit is the meeting, not the day, so the chance for one specific day is lower still), estimates for other institutions.

For every claim on a scheduled event the forecast is recorded in two parts: the chance that the event happens in the window (`p_held`) and the chance of the outcome if it does (`p_if_held`); the published figure is their product. The resolver records whether the event happened (`held`), so the two parts are scored separately and we learn whether our misses come from the calendar or from the result. Each rate is updated with our own record (`node scripts/refdata/slip.mjs`), so that within weeks our observations replace the estimates. The base-rate and adversarial forecasters start the postponement risk from this rate.

### 4.2 Inside view

List the specific factors that move this case away from the base rate: vote arithmetic and group or party positions, public statements, procedural rules, the record of the actors, schedule risk. Each factor is written down with its direction and a rough size in log-odds, so that the final number can be reconstructed.

### 4.3 External signals

Where they exist, use independent aggregates: prediction markets (Polymarket, Kalshi, Betfair; weighted by liquidity), bookmakers' odds (Tipsport and Fortuna list Czech and international politics), forecasting platforms (Metaculus, Good Judgment Open, Manifold), polling averages rather than single polls, analyst consensus for data releases. Bookmakers' odds are converted to probabilities with the bookmaker's margin removed (`node scripts/refdata/models.mjs odds …`), and the odds themselves are stored so the conversion can be checked. Each signal is recorded with its kind (exchange, bookmaker or platform), and each kind is benchmarked separately. The price read at the time of forecasting is stored with the claim and used as a benchmark in scoring. A forecast that departs from a liquid market by more than 15 percentage points needs a written reason.

### 4.4 Independent ensemble

Each claim starts from two files. The research **dossier** holds the confirmed schedule, dated facts with their sources, the base rate and the risks. Each fact carries its source, the time it was published, the time we read it and a short supporting excerpt; agency copy republished by several outlets counts once; polls are taken from the pollster's own tables and say whether they report valid votes, all votes, decided respondents or likely voters; economic figures say whether they are a first release or a revision. The separate **signals** file holds everything that is itself a probability in another form: market prices, bookmakers' odds, forecasting platforms and other people's models, each with its read time and, where known, its liquidity. A market price is a probability anchor, so it stays out of the dossier.

Five forecasters then work without seeing each other's numbers, in two steps. First, a **blind estimate** (`p_blind`) without the signals file; then the signals are shown and each gives its final estimate (`p`). Both are stored, so we can measure whether markets improve or merely anchor us.

- **Base rate first**: starts from the reference class and adjusts conservatively;
- **Evidence first**: does its own research before reading the shared dossier, so that at least one forecaster is not bound to the dossier's choice of facts;
- **Adversarial**: builds the strongest case against the obvious outcome (postponement, procedural traps, late shifts), then gives its honest best estimate, which may well agree with the others;
- **Anchor**: starts from a quantitative anchor, a liquid market or a statistical model (poll error, vote arithmetic, consensus and the usual size of surprises), and moves away from it only for stated reasons;
- **Outsider**: a different model with the dossier only, as a check on blind spots the others share.

The forecasters do not all run on the same model ([`config.ensemble_models`](pipeline/config.json)): forecasters built on one model tend to make the same mistakes, which makes their average look more certain than it should be.

The five probabilities are combined by the geometric mean of odds. If they differ by more than 25 percentage points, the cause is established first: a different reading of the question (the claim is rewritten), different information (all five receive the union of the facts, without numbers, and forecast again), or genuine disagreement on the same facts (the spread is kept and the basis line says the evidence is mixed). Agreement is never forced just to shrink the spread.

Every step is recorded with the claim: for each forecaster the exact model and version, the time, the inputs it had (dossier, signals, own research, reference data), the blind and final estimates, any earlier round with the reason for the change; then the combination rule and calibration parameters used, and the result with its evidence. A step that was not done is recorded as missing, with the reason; a record is never reconstructed afterwards to look as if a step had been done before the freeze.

Claims are chosen for their information value, which is part of the editorial score (section 2.4): we prefer questions whose outcome is genuinely open. There is no quota of probabilities in any band. The figure follows the evidence; variety comes from the choice of topics.

### 4.5 Red team

A separate reviewer reads the finished forecasts with one question: what is most likely to make us wrong tomorrow? Any new, decisive fact sends the claim back to step 4.4.

### 4.6 Consistency and calibration

- Mutually exclusive and exhaustive sets must sum to 100%; linked claims must not contradict each other.
- **Related numbers come from one model.** When a story carries a number forecast and binary claims about the same quantity (Lula's share of the vote; who wins; whether the margin is under four points), the binary figures are derived from the same distribution (`derived`), and the validator checks that they agree within 3 points. Edition No. 4 published Flávio Bolsonaro's chance of winning (69%) separately from a vote-share range that implied about 74%; that note now stands under the story.
- When a claim and a question on the forecast board concern the same outcome, the figures must agree within 5 points at the freeze, or the difference (another deadline, other wording) is explained.
- The combination rule is improved from our own record by [`scripts/calibrate.mjs`](scripts/calibrate.mjs), which the resolver runs every morning and which writes [`pipeline/calibration.json`](pipeline/calibration.json):
  - **Correction of our own bias** (from 50 resolved claims): logit(p) = a + b·x, where x is the forecasters' mean log-odds. A slope b above 1 means the raw ensemble has been too timid and its figures are pushed away from 50% (forecasters who share information tend to under-react together); a non-zero a corrects a lean towards yes or no. The fit is pulled towards "no correction", so small samples change little, and its out-of-sample effect is reported.
  - **Forecaster weights** (from 120 resolved claims): forecasters with a better Brier score get more weight in the mean, shrunk towards equal weights.
- While a correction is active, every new claim records the parameters used (`forecast.combination`), the validator recomputes the published figure from them, and the accuracy page shows the current status.

### 4.7 Freeze

The final probability, the claim text, the criterion and the rationale are written into the edition file, which is committed with its timestamp. From then on nothing in it changes.

### 4.8 Afternoon update

After midday the same edition is updated, following [`pipeline/UPDATE.md`](pipeline/UPDATE.md). Every figure that is actually recomputed is stored, whatever its size. Readers see a revision when the new figure moves by at least 5 percentage points or by at least 0.5 in log-odds (96% → 99% is small in points but cuts the risk of failure by three quarters); the revision states the new fact and its source. Number forecasts may be revised too, together with the binary claims derived from them. Up to three stories may be added for events newly announced for the next day. The morning file is never changed: revisions and additions are stored separately with their own freeze time, readers see "morning 55% → afternoon 70%", and both versions are scored. The accuracy page compares morning and afternoon figures on the same claims, which shows whether the updates help.

## 5. Writing the reports

- Reports are written in the past tense, as if the day had happened.
- Known facts (schedules, numbers from documents, positions already stated) are kept apart from the forecast content. The forecast is the claim; the text around it explains it.
- No invented quotations. No invented figures: every number is either from a cited source or is the forecast itself.
- Each report ends with a **basis** line naming what it rests on and the main risk to the forecast.
- We do not forecast deaths, accidents, disasters, crimes, or the health of named people, and we do not write about private individuals.
- Every page carries a clear statement that its content is forecast.
- The paper appears in English (default) and Czech. The Czech text is a faithful translation written in the same run; the forecasts, probabilities and deadlines are identical. A translation may be corrected later; a forecast never. In Czech, foreign women's surnames are left in their original form, never feminised (Roberta Metsola, not Metsolaová).
- Facts around the forecast are checked against the cited sources before publication by a reviewer who did not write the story. Each story rests on at least two independent sources, at least one primary or from a major outlet; aggregators and content farms are not used.
- If a fact in a published report turns out to be wrong, a correction is published under the story (from `data/corrections/`). The edition file and its forecasts are not changed.

## 6. Checking the claims

Resolution is done by a reviewer who did not write the edition, following [`pipeline/RESOLVER.md`](pipeline/RESOLVER.md):

1. Wait until the claim's deadline has passed.
2. Apply the published criterion to the named primary source. Secondary reporting is used only if the primary source is silent, and then from two independent outlets.
3. Record `yes`, `no` or `void` (for an interval claim: `measured` with the published `value`, or `void`), with an evidence link and a one-line note. Record also whether the scheduled event took place that day (`held`), and mark `ambiguous` if the criterion had to be interpreted.
4. Write the result to a separate resolution file. The edition file itself is never touched.

If the criterion is ambiguous, the resolver applies the reading a neutral observer would take from the claim text alone and notes the ambiguity. Ambiguous claims are counted, and the writing rules are tightened when they recur.

Unavailable evidence is not a "No". If the deciding source has not yet published, the claim is pending; the resolver tries again in later runs and, 72 hours after the deadline, resolves from the best available evidence (two independent outlets), saying so in the note.

## 7. Scoring

- **Brier score** for each claim: (probability − outcome)², where the outcome is 1 for "yes" and 0 for "no". Lower is better. Always forecasting 50% scores 0.25.
- **Log score** is kept alongside, because it punishes confident misses more heavily.
- **Calibration**: claims grouped by probability band (for example 60–70%) and compared with how often they came true.
- **Breakdowns** by section and by schedule status.
- **Benchmarks and skill**: the 50% baseline, the base rate of the reference class, and the market, bookmaker or platform price at freeze time where one existed; our informative claims (15–85%) are also scored on their own. Each comparison is also given as a skill score, 1 − our Brier ÷ the benchmark's Brier: zero means we add nothing over the benchmark.
- **Calibration and discrimination**: the Brier score is split into calibration error (are our 70% calls right 70% of the time?), discrimination (do our figures separate what happens from what does not?) and the difficulty of the questions. High accuracy with no discrimination would mean we only picked easy questions.
- **Number forecasts**: the share of results inside our 80% ranges (it should be about 80%), the interval score (width of the range plus a penalty for misses, in units of the usual surprise), and the error of our central figure against the analysts' consensus.
- **Schedule slips** by kind of event, and **checkability**: shares of void, ambiguous and late-resolved claims.
- **Forecasters**: the Brier score of each of the five ensemble roles.
- **Scope**: Czech, European and world claims separately.
- **Method versions**: results are shown separately for each version of the method (section 12). The pilot and early editions, made before the forecasters' work was recorded, are never presented as evidence for the present method.
- **Honest sample size**: next to the number of claims we show the number of separate events behind them, and a 90% interval of the Brier score from a bootstrap that resamples whole events. Several claims on one election are not several independent tests. Calibration and weighting switch on after 50 and 120 resolved claims as a cautious procedure, not as proof that the sample is large; their effect is judged on later editions only. Backtests by models that might know the outcome are never used as evidence of accuracy.
- **Combination rules compared**: on the same claims we score the published geometric mean of odds, the plain mean, the median, the blind ensemble (before markets), the market and the base rate. A market is used as a benchmark only if its question, deadline and settlement rules match the claim (a market on the eventual winner is not a market on whether the winner is confirmed by midnight); its read time and liquidity are stored.
- **Morning and afternoon**: compared on the same claims, each against the benchmark available at its own freeze.
- **Timing or outcome**: for scheduled events, the chance that the event happened in the window and the outcome given that it did, scored separately.
- **What we missed**: each morning the resolver lists the significant events of the forecast day by a fixed procedure (RESOLVER step 7) and records whether the paper covered them, considered and dropped them, or missed them. Accuracy on the questions we chose is only half of the picture.

Void claims are listed but not scored.

On the archived edition, each scored story and stamp is coloured on a scale from red to green by its **closeness**: the probability we gave to what actually happened. A 90% forecast that came true is 0.90 (green); a 55% forecast that came true is 0.55 (amber); a 90% forecast that failed is 0.10 (red).

## 8. Learning loop

- Every week the misses with the largest Brier scores are reviewed. Each gets a one-paragraph post-mortem: wrong base rate, missed fact, bad claim design, or bad luck.
- Reference classes are updated with every resolved claim.
- Source registry gaps found in post-mortems are fixed in `pipeline/sources.json`.
- Every morning the schedule-slip rates and the calibration parameters are refitted from the record (`scripts/refdata/slip.mjs`, `scripts/calibrate.mjs`).
- Ambiguous or void claims lead to a tighter writing rule; a recurring cause is added to EDITOR.md.

## 9. Publication and approval

During the launch period each morning's run is prepared as a pull request and goes live when the publisher approves it; Netlify builds a preview of each pull request for review. The approval period is set in [`pipeline/config.json`](pipeline/config.json). After it ends, the run publishes by itself by 06:00.

Edition No. 1 was produced before this protocol was complete and is marked as a pilot. It is scored like every other edition, but shown apart from the later versions of the method.

## 10. The forecast board

Besides the daily edition, the paper keeps a board of 25 to 40 standing questions about the months ahead: elections and government formation, budgets, central-bank decisions, wars and negotiations, at least a third of them Czech. Each has an exact criterion, a deadline and a primary source, like any claim. The evening desk checks them every day and re-forecasts them with the full ensemble whenever something material happens, and at least weekly; a new figure is recorded only if it moves by 5 points or more. Earlier figures are never changed, so the history shows how each forecast developed. Resolved questions are scored by the time-averaged Brier score: every hour the question was open counts, so being right early is worth more than being right at the end. When a daily story moves a board question, the story says so.

## 11. The publisher's own forecasts

The publisher may add his own probability to some claims before the events begin. These figures are never used in the paper. They are stored in `data/publisher/` with the time they were given and whether he had seen the paper's figure, and scored separately on the accuracy page against the paper and against the average of both. If human judgement adds information, the average will beat the paper; if not, the record will show that too.

## 12. Versions of the method

Each edition records the version of the method it was made under (`method_version`; for older editions it follows from the edition number in [`config.method_versions`](pipeline/config.json)). Rules are never applied retroactively, and published forecasts are never rescored under new rules; mistakes found later are added as transparent notes under the story.

| Version | From edition | Adopted | What changed |
|---|---|---|---|
| 1 | No. 1 | 21 October 2026 | Pilot and early editions: forecasts without a structured record of the forecasters. |
| 2 | No. 4 | 23 October 2026 | Five recorded forecasters with their models, schedule-slip classes, number forecasts, quotas on probability bands. |
| 3 | No. 5 | 24 October 2026 | After an outside review: event window and evidence time kept apart, events after day D+1 excluded; full record of every forecasting step with blind and after-market estimates; dossier split from market signals; timing and outcome scored separately; related numbers derived from one distribution; quotas on probabilities removed; every recomputed afternoon figure stored; results by method version with event counts and uncertainty; coverage of missed events. |
| 4 | No. 6 | 25 October 2026 | Stories chosen by news value; the biggest running stories of the day covered with a forecast of their next step; an economy desk of at least three reports; illustrative photographs in every edition. |
