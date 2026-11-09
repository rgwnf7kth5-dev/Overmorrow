# Editor's Manual: Producing One Edition

This is the operating procedure for the edition part of the morning run. It implements [`METHODOLOGY.md`](../METHODOLOGY.md); where the two seem to differ, the methodology wins. Follow every step, in order. Do not skip steps to save time.

**Method version 3 applies from edition No. 5** (`method_version: 3` in the edition; METHODOLOGY section 12). The validator enforces every rule marked *(v3)* below.

Notation: the run starts at about 05:00 on day **D**, right after the resolver part ([`RESOLVER.md`](RESOLVER.md)). The edition is dated **D+2**, forecasts the events of **D+1** and must be published by **06:00** on day D. All times are Europe/Paris.

**The work is done in two phases.** The evening desk on D−1 ([`PLANNER.md`](PLANNER.md)) selects the candidates, writes a research dossier for every proposed claim and runs the first full ensemble. It leaves everything in `data/planning/<D+2>.json` and `data/dossiers/<D+2>/`. The morning run checks what happened overnight, re-forecasts what moved, runs the red team and the fact-check, writes and publishes. If the planning file is missing (the evening run failed), do the evening steps now, cut toward `stories_min`, and say so in the report.

Time budget: resolver part by about 05:15; overnight check and re-forecasts by 05:30; red team and freeze by 05:38; writing, Czech version and fact-check by 05:55. Run all agents in parallel.

**Reading web pages: never use the WebFetch tool** (decision of the publisher, 3 November 2026: WebFetch stops the run for a per-site approval that keeps expiring). Read pages from the shell with `node scripts/read.mjs <url>` (`--links` lists a front page's article links, `--grep "word|other"` keeps matching paragraphs, `--max` sets the length); it prints the title, the publication time and the text. If a site refuses (exit 2: Reuters, AP, FT, Politico, iROZHLAS) or is unreachable (exit 3: some Czech government sites), use WebSearch results or another outlet for the same fact, and record the site in `meta.unreachable`. Tell every agent you start the same thing, in its prompt. Use the script only to read; never submit forms or send data.

**Tool budget.** A run has a limited number of web searches (about 200 per session, shared by every agent). *(v6)* Keep at least `v6.search_budget.morning_reserve` for the morning's checks, and count them: the total goes into `meta.run.searches`. Prefer `node scripts/read.mjs` on pages already known (the dossier lists them), `node scripts/markets.mjs` for markets and `pipeline/reference-data/` for base rates. Give each agent a narrow task.

## 0. Setup

1. Work on the branch the resolver part created, `daily/<D>`.
2. Read `pipeline/config.json`, `data/planning/<D+2>.json`, the dossiers in `data/dossiers/<D+2>/`, the agenda `data/planning/agenda.json`, and the latest edition in `data/editions/` (for format).
3. Read the latest resolution files and the accuracy page figures (`node scripts/build.mjs` and open `dist/accuracy/index.html`): per-forecaster Brier scores, benchmarks and skill, calibration and discrimination, schedule slips, checkability. Note any recurring error and correct for it.
4. Read `pipeline/calibration.json`. If `params.method` is `calibrated`, every claim frozen in this run uses those parameters (step 4).
5. Print the current schedule-slip rates: `node scripts/refdata/slip.mjs`.
6. If `METACULUS_TOKEN` is provided in the run instructions, export it so `scripts/markets.mjs` can read Metaculus.

## 1. Overnight check

For every story in the planning file, one evidence agent reads the reporting since the evening freeze of the dossier (time in the dossier header) and the agenda source, and reports: is the event still on, has anything decisive changed (a postponement, a new statement, a poll, a vote count, a market move of 10 points or more)? Add any newly announced event for D+1 that would rank in the top half of the planning list.

## 2. Selection (final)

The planning file ranks candidates by news value (METHODOLOGY 2.4; *(v4)* Impact × Reach decides which stories run, Uncertainty value which claim they carry). Confirm or adjust it with the overnight facts, then fill the edition:

- *(v4)* **The stories of the day first** (PLANNER step 3a): every big running story from the planning file's `running` list gets a story with a claim on its next development by 23:59 local time on D+1, at least `config.v4.running_min` of them. Record the list in `meta.running` (`title`, `lists`, `status: covered` with `story`, or `not_covered` with a real `why`; "no dated step" is not one). Refresh the list with the overnight front pages.
- *(v4)* **Economy:** at least `config.v4.economy_min` stories with `topic: "economy"` (or `meta.economy_shortfall` with the reason). The English edition has an **Economy** section; in Czech they sit in the Domácí or Zahraničí desk. Only stock indices, exchange rates and commodity or crypto prices are excluded.
- *(v4)* Every story has `topic` (`config.v4.topics`).
- **Report what happens, not what does not** *(from edition No. 15)*. A story's main claim (its first claim) is about the outcome of something that actually takes place on that day: who wins, how a vote goes, what figure is published, what a government approves, what a meeting agrees, what a leader says or does. The headline then reports what happened. For a running story without a decisive step that day, aim the claim at what does happen (a meeting held, a statement made, a strike going ahead, a figure released), not at a breakthrough that most likely will not come. "Nothing happened" is a news story only when something was widely expected (a deal announced in advance, a promised decision): at most `negative_stories_max` (3) stories per edition may have a main claim below 50% or a negative headline ("no", "not", "without", "still", "did not"; Czech "ne…", "bez", "stále"). Do not get round the rule by inverting the wording ("Iran stays silent: 90%"); the validator counts negative headlines as well as low main claims. Secondary claims are free. For a data release, lead with the interval claim (the figure that was published) rather than a threshold that most likely was not crossed.

- **Ask the open question** *(publisher's decision, 9 November 2026; from edition No. 22; METHODOLOGY section 15)*. The main claim is the question a reader actually asks about the story: who wins, by how much, how a vote goes, what is decided, what figure is published. At most `open_questions.easy_main_max` (2) stories may lead with a claim of 90% or more either way. If more do, reframe their main claims (the margin, the figure, the vote count, the content of the decision) with the ensemble; never drop a big story to pass. A secondary claim at 95% or more either way needs `forecast.open_because` `{why, source}` (a URL showing that someone credible expects or demands it, or that it is under way); otherwise drop the claim. The validator enforces both.

- **Stories:** between `stories_min` and `stories_max`. Every story gets `scope`: `cz`, `europe` or `world`.
- **Czech stories:** aim for `cz_stories_min` with scope `cz` — politics, economy, courts, regions, companies, unions, society, Czech culture. A neighbouring country is not Czech. *(v3)* This is a target: if the day does not have enough Czech events of real weight, run fewer and write the reason in `meta.cz_shortfall`. Do not invent "nothing will happen" claims to fill the desk; such a claim is fine only when the action is genuinely in play.
- **English edition** (`front`, `sections`): lead = the most important event anywhere; World is the largest section; a section "Czech Republic" carries the Czech stories that are not on the front; at most three stories about EU institutions.
- **Czech edition** (`cs.layout`): its own front page and sections. Lead = the most important story for a Czech reader (Czech or world). Rail = two Czech stories. First section **Domov** with the remaining Czech stories, then **Svět**, **Evropa**, and Ekonomika or Kultura when they qualify.
- Excluded topics: sport, financial market prices. Drop any claim whose outcome is practically certain.

## 3. Claims

Claims come from the planning file; adjust them only to the overnight facts. Each claim needs `text`, `label`, `resolves_by`, `criterion`, `resolution_source`, `schedule`, `slip_class` (a class id from `pipeline/reference-data/schedule-slip.json`, or `none` when no scheduled event is involved), `publishes` (when and where the deciding source publishes: "ČSÚ press release, 09:00 on 30 Oct"), and `exclusive_set` where claims exclude each other.

*(v3)* **Times.** Four times are kept apart:

```json
"tz": "America/Sao_Paulo",
"event_window": {"start": "2026-10-25T08:00:00-03:00", "end": "2026-10-25T17:00:00-03:00"},
"evidence_at": "2026-10-25T21:00:00+01:00",
"resolves_by": "2026-10-26T12:00:00+01:00"
```

- `tz`: IANA zone of the place where the event happens.
- `event_window`: when the event itself must happen. It may open on day D after the freeze and must close by 23:59 local time on D+1. **An event on D+2 is out, however early**: "by 12:00 on Monday" is not a Sunday claim. For "will X announce Y" claims the window is [freeze, 23:59 D+1 local] and the claim text says "by 23:59 on <D+1>".
- `evidence_at`: when the deciding source is expected to publish (may be after the window).
- `resolves_by`: when the resolver reads the evidence (not before `evidence_at`).
- The criterion says NO when the event does not happen in the window. It must **not** say NO when the source fails to publish: missing evidence leaves the claim pending (RESOLVER step 4).

Checks:

1. Could two honest people disagree about whether it came true? (Must be no.)
2. Is the deciding source named and likely to publish by the deadline?
3. Does it target the uncertain part? At most `extreme_share_max` of the claims may lie below `extreme_below` or above `extreme_above`. Prefer thresholds near the expected value (a release against consensus, a turnout against the last election, a vote count against the majority).
4. Is postponement covered (the event not happening in the window resolves no)?
5. Do the claim text and the criterion say exactly the same thing? (Edition No. 3 had a claim whose text spoke of new cases while its criterion counted the total; such a claim resolves on a technicality.)
6. *(v3)* No quotas on probabilities. Choose questions whose outcome is open (the Uncertainty score of step 2), then let the number follow the evidence. Never move a threshold or swap a claim just to land in a band.
6a. *(v3)* **Related numbers.** If a story has an interval claim and binary claims about the same quantity, the binary figures are derived from the interval's distribution: set `"derived": {"from": "<interval claim id>", "event": "<" | ">" | "between" | "outside", "x": 50}` (or `"x": [48, 52]`). Compute them with `node scripts/refdata/models.mjs` or `derivedProb` in `scripts/lib.mjs`; the validator requires agreement within `v3.coherence_tolerance`, otherwise explain in `coherence_note`. Binary claims in such a story that are about something else set `"not_derived": true`.
6b. *(v3)* **Forecast board.** If a claim concerns the same outcome as a board question, set `"watch": {"id": "<question id>", "inverse": false}`. At the freeze the latest board figure must agree within 5 points; otherwise append a board entry with the morning ensemble, or explain the difference in `watch.note`.
6c. *(v3)* **Exclusive sets** sum to 100% only if they cover every outcome. If an outcome is left out ("not decided by midnight"), set `"set_exhaustive": false` on the set's claims.
7. **Number forecasts:** where the outcome is a number from an official release (inflation flash, GDP, unemployment, a vote count, turnout) prefer an interval claim (METHODOLOGY 3.1), at most `interval_claims_max` per edition:
   ```json
   { "id": "cz-cpi-oct", "kind": "interval", "label": "Inflation in October", "text": "ČSÚ's flash estimate puts consumer prices in October 2026 at … year on year",
     "quantity": "CPI, year on year, flash estimate", "unit": "%", "quantiles": {"q10": 2.2, "q50": 2.4, "q90": 2.6}, "scale": 0.15,
     "resolves_by": "…", "criterion": "The year-on-year figure in ČSÚ's flash estimate release.", "resolution_source": "https://csu.gov.cz/…", "publishes": "ČSÚ, 09:00 on …",
     "schedule": "official", "slip_class": "stats-release",
     "forecast": { "agents": [{"role": "base-rate", "model": "…", "q10": 2.2, "q50": 2.4, "q90": 2.6}, …], "consensus": {"value": 2.5, "source": "Reuters poll …"},
                   "scale_source": "sd of (actual − consensus) for this release, 2023–2026, from …", "dossier": "…" } }
   ```
   `quantiles` = the mean of the forecasters' quantiles; `scale` = the usual surprise size (sd of actual − consensus), with its source. `node scripts/refdata/models.mjs quantiles <consensus> <sd>` gives the Normal starting point. The `cs.claims` entry has `label`, `text`, `criterion` as for any claim. Interval claims carry no probability. Reader-facing numbers are rounded to one decimal by default (`display_decimals` to override); keep full precision in the data.

## 4. Forecasting (five independent forecasters)

The evening desk ran round one (blind estimates, then estimates after the signals; PLANNER step 5). In the morning:

- If the overnight check found nothing material for a claim, keep the evening numbers and say so in `rationale`.
- If it found something material, rerun all five forecasters for that claim with the new facts added to its dossier.

The five roles (`config.ensemble_roles`), each an independent agent that never sees another's number:

*(v3)* Every forecaster first gives a **blind** estimate without the signals file (`p_blind`, `inputs_blind`), then sees `<claim>.signals.md` and gives its final estimate (`p`, `inputs`). The anchor works from the signals and has no blind estimate. Continue the same agent for the second step (SendMessage) so it is one forecaster, not two.

- **base-rate**: the reference class from `pipeline/reference-data/` (Chamber votes, poll errors, central-bank decisions) or `reference-classes.json`, with n; the postponement risk from the claim's slip class (`node scripts/refdata/slip.mjs <class>`); adjustments in log-odds.
- **evidence**: *(v3)* starts with its own research (at most 8 searches per claim), **before** reading the dossier: the newest reporting, statements, vote arithmetic, polls. Its blind estimate rests on that (`inputs_blind: ["own-research"]`); then it reads the dossier and the signals.
- **adversarial**: builds the strongest case for the other outcome (postponement, starting from the slip-class rate; procedure; late shifts), then gives its honest best estimate. It is not required to differ from the others.
- **anchor**: a quantitative anchor — a liquid market (`node scripts/markets.mjs search …`: Polymarket, Kalshi, Manifold, Metaculus), bookmakers' odds where a news report quotes them (the Tipsport and Fortuna pages cannot be read by the runs; convert quoted odds with `node scripts/refdata/models.mjs odds <odds of every outcome>`), or a model from `scripts/refdata/models.mjs` (poll lead and error, binomial vote counts, release surprises) — adjusted only with stated reasons. Prefer a liquid exchange over a bookmaker, a bookmaker over Manifold. *(v5)* For elections the anchor is the poll model (step 4b), not the market.
- **outsider**: a different model (`config.ensemble_models.outsider`). *(v5)* It does **not** get the shared dossier: only the claim, its criterion, the reference data and its own short research (at most 5 searches; `inputs: ["own-research", "reference-data"]`, then `signals` for the final estimate). Until 1 November it read the dossier and scored like a fifth copy of the others (all five within 0.150–0.155); its value is a view the dossier did not shape.

Run each role on the model given in `config.ensemble_models` (Agent tool `model`); if a model is unavailable, use another one and record the model actually used — the validator warns when all five ran on the same model.

*(v3)* **Timing and outcome.** For every claim whose `slip_class` is not `none`, the base-rate and adversarial forecasters also give `p_held` (the event happens in the window) and `p_if_held` (the outcome if it does). Record their geometric means as `forecast.decomposition` `{p_held, p_if_held, p_if_not_held: 0}`, scaled so that p_held × p_if_held equals the published figure within 2 points (keep `p_held`, adjust `p_if_held`).

Combine by the geometric mean of odds of all five (`combined`). If `pipeline/calibration.json` has `params.method: "calibrated"`, apply those parameters (`combine(agents, params)` in `scripts/lib.mjs`: weighted mean of log-odds, then the Platt map), store the result in `calibrated` and the parameters in `combination`; otherwise the published figure is the plain geometric mean. Clamp to [`probability_min`, `probability_max`], round to the whole percent. If max − min exceeds `ensemble_disagreement_limit`, find the cause first and record it as `forecast.disagreement` `{cause, note}`: `interpretation` (the forecasters read the question differently: rewrite the claim and rerun), `inputs` (they had different facts: give all five the union of facts, numbers removed, and rerun once; keep the first numbers in each agent's `rounds`) or `genuine` (same facts, different judgement: keep the spread and say in the basis line that the evidence is mixed). Never rerun only to shrink the spread.

*(v5)* **Research when the forecasters disagree.** If the five final estimates span more than `v5.research_spread` (15 points), one research agent gets the question "which fact would settle the difference?" (from the forecasters' reasons, not their numbers), looks for it (at most 6 searches) and records `forecast.research {at, question, finding, sources}`. If it finds a new decisive fact, the five forecasters rerun with it (earlier numbers in `rounds`); if not, the spread stands and the basis line says the evidence is mixed. Claims with a spread of 15 points or more scored 0.170 against 0.140 for the rest: they need the extra work, not a rounder number.

### 4a. Shadow trials *(from 9 November 2026)*

Claims in the planning file may carry `forecast.shadow` (PLANNER step 11: a sequential researcher, other vendors' models). Copy it into the edition unchanged. It is never one of `forecast.agents`, never part of `combined`, `calibrated` or the published probability, and is not mentioned in the report or its basis line. If the overnight check finds something material and the five forecasters rerun for a claim, give the same new facts to the claim's sequential researcher as one more step (no new search): it rewrites its belief state, the trace gains a step, and `p`, `at` and `steps` are updated; rerun the external providers on the dossier with the new facts added. Every shadow figure must carry a time before the freeze. The accuracy page scores them beside the published figure; none goes live before it beats that figure by `v6.backtest_min_gain` on `v6.backtest_min_test` later claims, and that decision is the publisher's.

### 4b. Rules from method version 5 (edition No. 13 on)

These come from the first 132 resolved claims (accuracy page; analysis of 1 November 2026). The validator enforces them.

1. **Market search on record.** Every claim has `forecast.market`, or `forecast.market_search {at, checked: ["markets.mjs search <words>", …], note}` saying what was searched and that nothing matched. Signals measurably help (blind ensemble 0.155, final 0.135 on the same 66 claims), yet only 11 of 91 claims had a market.
2. **Elections: the poll model is the anchor.** A claim with `slip_class: "election-held"` carries `election {kind: winner | margin | rank | turnout | other, level: national | regional | local}`. For winner, margin and rank: `forecast.poll_model {lead, sd, threshold, p, source}` — lead (pp) of the side the claim is about in the latest poll average (not one poll), sd at least `v5.election_lead_sd_min` for the level (3.5 / 4.5 / 5.5 pp), `p = Φ((lead − threshold) / sd)` (`node scripts/refdata/models.mjs leadabove <lead> <sd> <threshold>`). The published figure stays within 12 points of the model unless `poll_model.note` gives a reason other than the market price. Without usable polls: `poll_model {none: true, why}` and a probability between 25 and 75%. Our first 17 election claims scored 0.265, the worst of any kind: Brazil's runoff went against a favourite we had at 69% while the polls were tied.
3. **Number ranges wider and centred on consensus.** For an interval claim q90 − q10 is at least `v5.interval_width_min_scales` (4.1) surprise scales — 1.6 times the textbook width, because only 7 of our first 13 ranges held the result — and the central figure stays within half a scale of the analysts' consensus unless `forecast.consensus_note` gives a documented reason. Our central figures were no better than consensus (1.18 against 1.05 scales). Use `node scripts/refdata/models.mjs quantiles <consensus> <sd> 1.6`.
4. **Data-release direction claims only away from the threshold.** A yes/no claim with `slip_class: "stats-release"` (not derived from an interval) records `forecast.release {consensus, threshold, scale, source}` and needs the threshold at least half a surprise scale from consensus; nearer, it is a coin toss (those claims scored 0.195): forecast the number as an interval claim, or derive the binary claim from one.
5. **The outsider works without the dossier** (step 4) and **disagreement triggers research** (above).
6. **Many possible actors.** When a criterion is met if any one of many actors acts (any rector, any union, any of 27 governments), estimate the chance per actor, say how independent they are, and combine (1 − (1 − p)^N for independent actors); do not use a one-announcement base rate. (Post-mortem cz-fee-strike-rector-30: 26%, came true.)
7. **Criteria that can still be checked later.** Name a figure that will be readable when the resolver comes; for a live tracker without history, require an archived copy at the freeze or use a figure that is published and kept. (us-midterms-early-40m-28 was voided for this.)

Record every claim's forecast in the claim itself:

```json
"forecast": {
  "agents": [
    {"role": "base-rate", "model": "claude-opus-5-5", "at": "2026-10-25T05:12:00+01:00",
     "p_blind": 0.60, "inputs_blind": ["dossier", "reference-data"], "p": 0.62, "inputs": ["dossier", "reference-data", "signals"],
     "rounds": [{"p": 0.55, "at": "2026-10-24T19:40:00+02:00", "reason": "evening round; overnight poll added"}]},
    {"role": "evidence", "model": "claude-opus-5-5", "at": "…", "p_blind": 0.58, "inputs_blind": ["own-research"], "p": 0.60, "inputs": ["own-research", "dossier", "signals"]},
    {"role": "anchor", "model": "claude-fable-5-1", "at": "…", "p": 0.64, "inputs": ["signals", "reference-data"]},
    …five entries…],
  "missing": [{"step": "outsider", "why": "model unavailable at 05:20; not replaced"}],
  "disagreement": null,
  "decomposition": {"p_held": 0.97, "p_if_held": 0.64, "p_if_not_held": 0},
  "combined": 0.618,
  "combination": {"method": "geo-odds"},
  "calibrated": null,
  "base_rate": {"class": "cz-budget-first-reading-majority", "rate": 0.95, "n": 337, "source": "pipeline/reference-data/cz-chamber.json"},
  "market": {"source": "polymarket", "kind": "exchange", "url": "https://polymarket.com/event/…", "p": 0.58, "read_at": "2026-10-24T03:40:00Z"},
  "market_note": "why we depart from the market, when by more than market_departure_flag",
  "adjustment": "only if the published probability is not the rounded ensemble; say why",
  "dossier": "data/dossiers/2026-10-26/claim-id.md",
  "signals": "data/dossiers/2026-10-26/claim-id.signals.md"
}
```

*(v3)* `model` is the exact model id with version as reported by the agent (not an alias). `at` is the time of the final estimate (before `frozen_at`). `inputs` come from `config.v3.agent_inputs`. If a step was not done, list it in `missing` with the reason; never fill in a record afterwards. The dossier must contain no market prices, odds or other people's probabilities (the validator rejects them); they belong in the signals file.

`base_rate` and `market` are null when none exists. `market.kind` is `exchange` (Polymarket, Kalshi, Betfair), `bookmaker` or `platform` (Metaculus, Manifold, Good Judgment Open). A bookmaker entry also carries `odds` (decimal odds of every outcome of that market) and `outcome` (the index of the outcome the claim is about); `p` is the margin-free probability. When the calibration is active, `combination` is a copy of `pipeline/calibration.json` `params` plus its `version`. The validator checks all of this arithmetic and the market rule.

Also write a short `rationale` per story: the class and base rate, the five numbers, the combined number, any market, the main risk.

### 4c. Rules from method version 6 (edition No. 15 on)

- **Baseline first.** Before any forecaster reports, set `forecast.baseline.status_quo` on every binary claim that is not derived: `yes` if the claim's YES is what you get when things simply continue (the published schedule goes ahead, a situation persists, nobody does anything not already announced), `no` if YES needs a change, `unclear` if it cannot be told. Never change it after seeing a forecast.
- **Keys.** Every story has `event_key` (the occurrence it resolves on, such as `il-knesset-vote-2026-10-27`) and `case_key` (the running story, such as `us-iran-talks`). Read the keys in the last editions and in `data/claim-labels.json` and reuse a case key whenever the story continues.
- **Blind means blind.** Give a forecaster the signals file only in a second, separate step, after its blind estimate has been written to a file and that file exists. A blind estimate fixed in the same step as reading the signals is recorded in `forecast.missing`.
- **Number forecasts.** `node scripts/refdata/series.mjs scale <key>` gives the scale. Record `forecast.series`, `forecast.scale_basis` (`series`, `published` with `forecast.scale_url`, or `pooled`) and `scale_source`. A scale from memory or from the forecasters' own spread is refused. When no sourced figure can be found, use a similar indicator with the pooled factor.
- **Linked races.** When an edition carries a claim on control of a chamber or on a total of seats, mark it `election.kind: "chamber"`, write the races to `data/dossiers/<D+2>/<claim>.sim.json`, run `node scripts/refdata/election-sim.mjs <file>` and record `forecast.sim` `{input, draws, p, scenario}` (at least `v6.sim_min_draws` draws). Use one polling average per race, and take the claims on each race and on the chamber from the same run. The story's `analysis` gives the chance of the exact combination it tells.
- **Sources.** Before the freeze record `meta.source_access`: `reference` `{read, total}` for the reference front pages, `factcheck` `{opened, total}` from step 6c, and `limited: true` if either share is under `v6.source_access_min_share`. At the start of the run read one reference page with `node scripts/read.mjs`. If it fails, say so in `meta.unreachable` with the exact error, and read the remaining pages one at a time.
- **Run record.** `meta.run` `{started_at, finished_at, agents, searches}`, covering the morning run.

## 5. Red team and freeze

One agent reads the complete draft: the single most likely reason each forecast is wrong tomorrow, using only information published before now. A new decisive fact sends that claim back to step 4. Then set `frozen_at`. From here on, use no new information for the forecasts.

## 6. Writing

Write `data/editions/<D+2>.json` in the format of the latest edition. Rules:

- **The body is a news report, not an article about forecasts** (from edition No. 7; the validator rejects forecast language in `body` and `standfirst`). Write it the way Reuters or ČTK would write it on the evening of D+1, after the event, describing the most likely outcome as what happened: who decided what, the result, the reactions, what follows, and the background a reader needs. Past tense, British spelling, plain newspaper prose. Headline states the outcome; standfirst for the lead.
- **No forecasting talk in the report.** Never: "our forecast", "we gave / put / expected", "forecast", "probability", "chance", "the polls suggested", "the main risk", "was expected to", "would have", conditional scenarios. Polls, markets, base rates, the reasoning and the risks belong in `analysis` (a list of short paragraphs, English and `cs.analysis` in Czech) and the `basis` line; both are shown only when the reader opens "Basis and sources". The likelihood bars already show the numbers.
- Invented detail stays out: no invented quotations, figures, vote counts or reactions. Where the outcome itself is the forecast (the winner, a vote passing), state it plainly; surround it with real, sourced facts (schedule, the actors, their stated positions, what the decision means). A plausible reaction may be described only in general terms that follow from stated positions ("the opposition criticised the decision"), never as a quotation.
- **Read the sources yourself**; write from the source pages and the dossier, never from an agent's summary alone. Every factual sentence must be traceable to a page in `sources`.
- **Sources:** at least two different sites per story, at least one primary source or major outlet; name the outlet that actually published the text; no content farms or aggregators; Wikipedia is background only.
- **Times and dates** in Central European time, checked against daylight-saving changes.
- **Length** (body): lead 5–8 paragraphs, 400–650 words; `half` 3–5 paragraphs, 150–300 words; `third`, `quarter`, rail 2–4 paragraphs, 100–200 words. No rail story longer than the lead.
- Each story ends with a `basis` line (what the forecast rests on and the main risk) and `analysis` (the forecasting discussion: polls, markets, base rate, why this outcome, what could go the other way). No forecasts of deaths, accidents, disasters, crimes or anyone's health; no private individuals. No invented quotations or figures.
- Where a story moves a question on the forecast board, link it with `watch` and mention the board figure in `analysis`, not in the body.
- `meta`: `{"candidates": <pool size>, "unreachable": [sources that failed]}`.
- `diary`, `number` = previous + 1. No `weather`: the box was dropped on 24 October 2026 (a forecast of the next day's weather reads, in a paper dated the day after, as a report of weather already past).

## 6b. Czech version

Each story gets a `cs` object (`kicker`, `headline`, `standfirst` for a lead, `body`, `basis`, `table`, `claims` keyed by id with `label`, `text`, `criterion`). The edition gets a top-level `cs` with `diary` and `layout` (`front` with `lead` and `rail`, `sections` with `name`, `dek`, `stories`). A Czech story that leads the Czech edition needs a Czech standfirst even if it is not the English lead.

Translate faithfully into natural Czech newspaper prose (ČTK style), Czech date and number formats; identical numbers, probabilities and deadlines. **Foreign women's surnames are never feminised** (Roberta Metsola, Kaja Kallas, Iliana Iotova; předsedkyně Metsola, s Kajou Kallas). Czech and Slovak women keep their own forms.

**Czech page layout.** The Czech edition is split into two desks side by side: ZAHRANIČÍ (left) and DOMÁCÍ (right), with tabs on phones. A story goes to the domestic desk when its id starts with `cz-`, when it sits in an English section with "Czech" in its name, or when it is in the front-page rail; set `"desk": "domestic"` or `"desk": "foreign"` on a story to override. The first story listed for each desk heads it, so order `cs.layout` with the most important domestic story first. Both desks should carry real weight: with at least `cz_stories_min` Czech stories the page balances itself.

## 6d. Photographs *(v4)*

Give 3 to 6 stories an illustrative photograph (at least `config.v4.photos_min`; otherwise `meta.photos_shortfall` with the reason): the lead, then stories where a place or object carries the subject (a parliament, a seat of government, a company headquarters, a factory, a border crossing, a ship). Never photos of people at events that have not happened yet, no news photos of a specific day, no logos. Use only Wikimedia Commons with a free licence:

```
node scripts/photos.mjs search "Palácio do Planalto"
node scripts/photos.mjs add <D+2> <story-id> "File:…jpg" --alt "…" --alt-cs "…" --caption "…" --caption-cs "…"
```

The script checks the licence, downloads a 960 px copy into `site/photos/<D+2>/` and writes the credit into `data/images/<D+2>.json`; the page marks each one as an illustrative photo with author, licence and source. Captions describe the place, not the forecast. Commons rate-limits shared addresses: the script waits; run the searches early and in one batch.

## 6c. Fact-check (mandatory)

One agent that did not write the stories opens every URL in `sources` and every `resolution_source` and marks each factual statement and number in English and Czech as supported, unsupported or wrong; it checks times, time zones, dates, attributions and EN–CS agreement. Fix every wrong statement; source or cut every unsupported one. A correction that changes a forecast's premise sends the claim back to step 4.

## 7. Validate and build

```
node scripts/validate.mjs
node scripts/build.mjs
```

Both must pass. Fix the data, never weaken the validator. Look at the built front pages (`dist/index.html`, `dist/cs/index.html`); large empty areas mean a lead that is too short.

## 8. Publish

Commit `Edition No. <n>, dated <D+2>` on `daily/<D>` together with the results.

- **If D is on or before `approval_required_through`:** open a pull request titled `<D>: edition No. <n> and results (for approval)`, results first, then every claim with its probability and five agent numbers, then judgement calls. Do not merge.
- **Otherwise:** merge into `main` and push by 06:00.

Corrections after publication go to `data/corrections/<D+2>.json` (`story`, `date`, `text`, `text_cs`, `url`). The edition file and probabilities are never changed.

## 9. Report

Summary: candidates, stories (Czech / Europe / world), claims with probabilities, disagreements and reruns (and what the research found), overnight changes since the evening ensemble, fact-check corrections, unreachable sources, and the number of claims overdue for a result (`node scripts/validate.mjs` lists them).

## Rules added on 23 October 2026 (afternoon)

Apply from edition No. 4 (`config.new_rules_from`): `slip_class` and `publishes` on every claim; at least `contested_min` claims in `contested_band`; at most `interval_claims_max` interval claims; models per `config.ensemble_models`; calibrated combination when `pipeline/calibration.json` says so. The validator enforces them.
