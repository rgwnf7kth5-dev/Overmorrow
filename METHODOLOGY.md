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
- **Weather:** ČHMÚ and ECMWF-based national services (shown for information; normally not scored).

### 2.2 The running-story sweep

Many important events have no calendar entry: negotiations, wars, crises, campaigns. For each running story we read the reporting of the previous 48 hours from at least two independent outlets and identify the next step that is expected on day D+1.

### 2.3 Recording candidates

Every candidate is recorded with:

- date and time, place, institution;
- section (Czech Republic, Europe, World, Economy, Science and Health, Culture);
- source URL;
- **schedule status**: `official` (in an institution's own calendar), `reported` (announced in at least two credible outlets), or `speculative`. Speculative items never lead the paper and may appear only in briefs.

The candidate pool for one edition should contain at least 40 events before selection.

### 2.4 Selecting what goes in

Each candidate gets three scores from 1 to 5:

- **Impact**: how many people and how much policy, money or security it affects.
- **Reach**: how many readers it matters to. The paper is a general newspaper with a Czech home base and a world view, not an EU bulletin: Czech events and major world events weigh most; EU institutions score high only when a decision has real consequences beyond Brussels (money, law that changes daily life, foreign policy).
- **Uncertainty value**: how much a forecast tells the reader. An outcome that is close to certain, or a pure coin toss with no information, scores low; a contested outcome on which evidence exists scores high.

The editorial score is Impact × Reach × Uncertainty value. Candidates are ranked and then fitted to section quotas, so that each edition covers the Czech Republic, world affairs, Europe, the economy and at least one item from science, health or culture when one qualifies. The World section is the largest; EU institutional stories are capped at three per edition, including the front page. Sport and financial market prices are excluded by policy.

## 3. Writing a forecastable claim

Every report carries one or more claims. A claim must be:

1. **Binary**: it comes true or it does not. No "partly".
2. **Time-bounded**: it has a deadline (`resolves_by`), normally 23:59 CET on day D+1.
3. **Checkable**: it names the primary source that will decide it (`resolution_source`) and the exact test (`criterion`).
4. **Unconditional**: if the event is postponed, the claim usually resolves "No". The risk of postponement is therefore part of the probability. A claim is void only if its resolution source no longer exists or the criterion turns out to be impossible to apply.
5. **Informative**: it targets the uncertain part of the event. "The Sakharov Prize is announced" is uninformative; "the Sakharov Prize goes to Tundu Lissu" is informative.

Probabilities are held between 3% and 97%. Anything more certain is not a forecast and is reported as a scheduled fact instead.

Where several claims are mutually exclusive (for example, which of three finalists wins), they are published together as a set and must sum to 100%.

## 4. Estimating the probability

Each claim goes through the same protocol. All steps are recorded in the edition file under `rationale`, so that misses can be examined later.

### 4.1 Outside view first

Find the reference class: the set of comparable past cases. Examples: "trilogue agreements put to a final plenary vote in the 10th term", "budget first readings with a coalition majority in the Czech Chamber", "runoff polls within two points four days before a vote". Record the base rate and the size of the class. Base rates come from data wherever possible: [`pipeline/reference-data/`](pipeline/reference-data/README.md) holds rates computed from the Czech Chamber's open voting records, the record of final polls against election results, and central-bank decisions, with the scripts that rebuild them. The library of reference classes in [`pipeline/reference-classes.json`](pipeline/reference-classes.json) grows with every edition.

### 4.2 Inside view

List the specific factors that move this case away from the base rate: vote arithmetic and group or party positions, public statements, procedural rules, the record of the actors, schedule risk. Each factor is written down with its direction and a rough size in log-odds, so that the final number can be reconstructed.

### 4.3 External signals

Where they exist, use independent aggregates: prediction markets (Polymarket, Kalshi; weighted by liquidity), Metaculus community forecasts, polling averages rather than single polls, analyst consensus for data releases. The price read at the time of forecasting is stored with the claim and used as a benchmark in scoring. A forecast that departs from a liquid market by more than 15 percentage points needs a written reason.

### 4.4 Independent ensemble

Each claim starts from a research dossier: the confirmed schedule, dated facts with their sources, the base rate, matching markets and the risks, but no probability. Five forecasters then work on it without seeing each other's numbers:

- **Base rate first**: starts from the reference class and adjusts conservatively;
- **Evidence first**: starts from the latest reporting and signals;
- **Adversarial**: looks specifically for reasons the obvious outcome fails (postponement, procedural traps, late shifts);
- **Anchor**: starts from a quantitative anchor, a liquid market or a statistical model (poll error, vote arithmetic, consensus and the usual size of surprises), and moves away from it only for stated reasons;
- **Outsider**: a different model with the dossier only, as a check on blind spots the others share.

The five probabilities are combined by the geometric mean of odds. If they differ by more than 25 percentage points, all five receive the union of the facts (without the numbers) and forecast again once; if they still differ, the evidence is reported as mixed, or the claim is rewritten. Every forecaster's number is stored with the claim and scored separately, so that once enough claims are resolved the forecasters can be weighted by their record.

Claims are chosen for their information value: at most a quarter of an edition's claims may lie below 10% or above 90%.

### 4.5 Red team

A separate reviewer reads the finished forecasts with one question: what is most likely to make us wrong tomorrow? Any new, decisive fact sends the claim back to step 4.4.

### 4.6 Consistency and calibration

- Mutually exclusive sets must sum to 100%; linked claims must not contradict each other.
- Once 50 claims have been resolved, a calibration correction is fitted to our own record (how often our 70% calls actually came true) and applied to the raw ensemble number. The correction and its data are published on the accuracy page and updated monthly.

### 4.7 Freeze

The final probability, the claim text, the criterion and the rationale are written into the edition file, which is committed with its timestamp. From then on nothing in it changes.

### 4.8 Afternoon update

After midday the same edition is updated, following [`pipeline/UPDATE.md`](pipeline/UPDATE.md). A morning claim is revised only when a new fact published after the morning freeze moves the full ensemble by at least 5 percentage points; the revision states the new fact and its source. Up to three stories may be added for events newly announced for the next day. The morning file is never changed: revisions and additions are stored separately with their own freeze time, readers see "morning 55% → afternoon 70%", and both versions are scored. The accuracy page compares morning and afternoon figures on the same claims, which shows whether the updates help.

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
3. Record `yes`, `no` or `void`, with an evidence link and a one-line note.
4. Write the result to a separate resolution file. The edition file itself is never touched.

If the criterion is ambiguous, the resolver applies the reading a neutral observer would take from the claim text alone and notes the ambiguity. Ambiguous claims are counted, and the writing rules are tightened when they recur.

## 7. Scoring

- **Brier score** for each claim: (probability − outcome)², where the outcome is 1 for "yes" and 0 for "no". Lower is better. Always forecasting 50% scores 0.25.
- **Log score** is kept alongside, because it punishes confident misses more heavily.
- **Calibration**: claims grouped by probability band (for example 60–70%) and compared with how often they came true.
- **Breakdowns** by section and by schedule status.
- **Benchmarks**: the 50% baseline, the base rate of the reference class, and the prediction-market price at freeze time where one existed; our informative claims (15–85%) are also scored on their own.
- **Forecasters**: the Brier score of each of the five ensemble roles.
- **Scope**: Czech, European and world claims separately.

Void claims are listed but not scored.

On the archived edition, each scored story and stamp is coloured on a scale from red to green by its **closeness**: the probability we gave to what actually happened. A 90% forecast that came true is 0.90 (green); a 55% forecast that came true is 0.55 (amber); a 90% forecast that failed is 0.10 (red).

## 8. Learning loop

- Every week the misses with the largest Brier scores are reviewed. Each gets a one-paragraph post-mortem: wrong base rate, missed fact, bad claim design, or bad luck.
- Reference classes are updated with every resolved claim.
- Source registry gaps found in post-mortems are fixed in `pipeline/sources.json`.

## 9. Publication and approval

During the launch period each morning's run is prepared as a pull request and goes live when the publisher approves it; Netlify builds a preview of each pull request for review. The approval period is set in [`pipeline/config.json`](pipeline/config.json). After it ends, the run publishes by itself by 06:00.

Edition No. 1 was produced before this protocol was complete and is marked as a pilot. It is scored like every other edition.

## 10. The forecast board

Besides the daily edition, the paper keeps a board of 25 to 40 standing questions about the months ahead: elections and government formation, budgets, central-bank decisions, wars and negotiations, at least a third of them Czech. Each has an exact criterion, a deadline and a primary source, like any claim. The evening desk checks them every day and re-forecasts them with the full ensemble whenever something material happens, and at least weekly; a new figure is recorded only if it moves by 5 points or more. Earlier figures are never changed, so the history shows how each forecast developed. Resolved questions are scored by the time-averaged Brier score: every hour the question was open counts, so being right early is worth more than being right at the end. When a daily story moves a board question, the story says so.
