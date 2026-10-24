# Editor's Manual: Producing One Edition

This is the operating procedure for the edition part of the morning run. It implements [`METHODOLOGY.md`](../METHODOLOGY.md); where the two seem to differ, the methodology wins. Follow every step, in order. Do not skip steps to save time.

**Method version 3 applies from edition No. 5** (`method_version: 3` in the edition; METHODOLOGY section 12). The validator enforces every rule marked *(v3)* below.

Notation: the run starts at about 05:00 on day **D**, right after the resolver part ([`RESOLVER.md`](RESOLVER.md)). The edition is dated **D+2**, forecasts the events of **D+1** and must be published by **06:00** on day D. All times are Europe/Paris.

**The work is done in two phases.** The evening desk on D−1 ([`PLANNER.md`](PLANNER.md)) selects the candidates, writes a research dossier for every proposed claim and runs the first full ensemble. It leaves everything in `data/planning/<D+2>.json` and `data/dossiers/<D+2>/`. The morning run checks what happened overnight, re-forecasts what moved, runs the red team and the fact-check, writes and publishes. If the planning file is missing (the evening run failed), do the evening steps now, cut toward `stories_min`, and say so in the report.

Time budget: resolver part by about 05:15; overnight check and re-forecasts by 05:30; red team and freeze by 05:38; writing, Czech version and fact-check by 05:55. Run all agents in parallel.

**Tool budget.** A run has a limited number of web searches (about 200 per session, shared by every agent). Prefer `WebFetch` on pages already known (the dossier lists them), `node scripts/markets.mjs` for markets and `pipeline/reference-data/` for base rates. Give each agent a narrow task.

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

The planning file ranks candidates by Impact × Reach × Uncertainty value (METHODOLOGY 2.4). Confirm or adjust it with the overnight facts, then fill the edition:

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
- **anchor**: a quantitative anchor — a liquid market (`node scripts/markets.mjs search …`: Polymarket, Kalshi, Manifold, Metaculus), bookmakers' odds (Tipsport, Fortuna, Betfair; read the page with WebFetch and convert with `node scripts/refdata/models.mjs odds <odds of every outcome>`), or a model from `scripts/refdata/models.mjs` (poll lead and error, binomial vote counts, release surprises) — adjusted only with stated reasons. Prefer a liquid exchange over a bookmaker, a bookmaker over Manifold.
- **outsider**: a different model (`model: "sonnet"` in the Agent call) with no web access, given only the dossier. It is the check on the others' shared blind spots.

Run each role on the model given in `config.ensemble_models` (Agent tool `model`); if a model is unavailable, use another one and record the model actually used — the validator warns when all five ran on the same model.

*(v3)* **Timing and outcome.** For every claim whose `slip_class` is not `none`, the base-rate and adversarial forecasters also give `p_held` (the event happens in the window) and `p_if_held` (the outcome if it does). Record their geometric means as `forecast.decomposition` `{p_held, p_if_held, p_if_not_held: 0}`, scaled so that p_held × p_if_held equals the published figure within 2 points (keep `p_held`, adjust `p_if_held`).

Combine by the geometric mean of odds of all five (`combined`). If `pipeline/calibration.json` has `params.method: "calibrated"`, apply those parameters (`combine(agents, params)` in `scripts/lib.mjs`: weighted mean of log-odds, then the Platt map), store the result in `calibrated` and the parameters in `combination`; otherwise the published figure is the plain geometric mean. Clamp to [`probability_min`, `probability_max`], round to the whole percent. If max − min exceeds `ensemble_disagreement_limit`, find the cause first and record it as `forecast.disagreement` `{cause, note}`: `interpretation` (the forecasters read the question differently: rewrite the claim and rerun), `inputs` (they had different facts: give all five the union of facts, numbers removed, and rerun once; keep the first numbers in each agent's `rounds`) or `genuine` (same facts, different judgement: keep the spread and say in the basis line that the evidence is mixed). Never rerun only to shrink the spread.

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

## 5. Red team and freeze

One agent reads the complete draft: the single most likely reason each forecast is wrong tomorrow, using only information published before now. A new decisive fact sends that claim back to step 4. Then set `frozen_at`. From here on, use no new information for the forecasts.

## 6. Writing

Write `data/editions/<D+2>.json` in the format of the latest edition. Rules:

- Past tense, as if D+1 has happened. British spelling. Plain newspaper prose. Headline states the forecast outcome; standfirst for the lead.
- **Read the sources yourself**; write from the source pages and the dossier, never from an agent's summary alone. Every factual sentence must be traceable to a page in `sources`.
- **Sources:** at least two different sites per story, at least one primary source or major outlet; name the outlet that actually published the text; no content farms or aggregators; Wikipedia is background only.
- **Times and dates** in Central European time, checked against daylight-saving changes.
- **Length** (body): lead 5–8 paragraphs, 400–650 words; `half` 3–5 paragraphs, 150–300 words; `third`, `quarter`, rail 2–4 paragraphs, 100–200 words. No rail story longer than the lead.
- Each story ends with a `basis` line. No forecasts of deaths, accidents, disasters, crimes or anyone's health; no private individuals. No invented quotations or figures.
- Where a story moves a question on the forecast board, add `"watch": ["question-id"]` and mention the board figure in the body.
- `meta`: `{"candidates": <pool size>, "unreachable": [sources that failed]}`.
- `diary`, `weather` (never empty; fallbacks in `sources.json`), `number` = previous + 1.

## 6b. Czech version

Each story gets a `cs` object (`kicker`, `headline`, `standfirst` for a lead, `body`, `basis`, `table`, `claims` keyed by id with `label`, `text`, `criterion`). The edition gets a top-level `cs` with `weather`, `diary` and `layout` (`front` with `lead` and `rail`, `sections` with `name`, `dek`, `stories`). A Czech story that leads the Czech edition needs a Czech standfirst even if it is not the English lead.

Translate faithfully into natural Czech newspaper prose (ČTK style), Czech date and number formats; identical numbers, probabilities and deadlines. **Foreign women's surnames are never feminised** (Roberta Metsola, Kaja Kallas, Iliana Iotova; předsedkyně Metsola, s Kajou Kallas). Czech and Slovak women keep their own forms.

**Czech page layout.** The Czech edition is split into two desks side by side: ZAHRANIČÍ (left) and DOMÁCÍ (right), with tabs on phones. A story goes to the domestic desk when its id starts with `cz-`, when it sits in an English section with "Czech" in its name, or when it is in the front-page rail; set `"desk": "domestic"` or `"desk": "foreign"` on a story to override. The first story listed for each desk heads it, so order `cs.layout` with the most important domestic story first. Both desks should carry real weight: with at least `cz_stories_min` Czech stories the page balances itself.

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

Summary: candidates, stories (Czech / Europe / world), claims with probabilities, disagreements and reruns, overnight changes since the evening ensemble, fact-check corrections, unreachable sources.

## Rules added on 23 October 2026 (afternoon)

Apply from edition No. 4 (`config.new_rules_from`): `slip_class` and `publishes` on every claim; at least `contested_min` claims in `contested_band`; at most `interval_claims_max` interval claims; models per `config.ensemble_models`; calibrated combination when `pipeline/calibration.json` says so. The validator enforces them.
