# Planner's Manual: The Evening Desk

For Czech Chamber claims, read [the PSP desk snapshot](../data/psp/latest.json) and its sitting files before assigning schedule risk. Check the observation time, agenda approval, the item's own fixed slot and the print's earliest eligible date.

The evening run (about 18:40 Europe/Paris on day **E**) does the slow work so that the morning run can concentrate on what changed overnight. It prepares the edition that the next morning run (day E+1) publishes: dated **E+3**, about the events of **E+2**. It also maintains the 14-day agenda and the forecast board. It implements [`METHODOLOGY.md`](../METHODOLOGY.md) sections 2, 4 and 10. From edition No. 5 the rules of method version 3 apply (METHODOLOGY section 12; EDITOR.md steps marked *(v3)*).

**Reading web pages: never use the WebFetch tool** (decision of the publisher, 3 November 2026: WebFetch stops the run for a per-site approval that keeps expiring). Read pages from the shell with `node scripts/read.mjs <url>` (`--links` lists a front page's article links, `--grep "word|other"` keeps matching paragraphs, `--max` sets the length); it prints the title, the publication time and the text. If a site refuses (exit 2: Reuters, AP, FT, Politico, iROZHLAS) or is unreachable (exit 3: some Czech government sites), use WebSearch results or another outlet for the same fact, and record the site in `meta.unreachable`. Tell every agent you start the same thing, in its prompt. Use the script only to read; never submit forms or send data.

Run every agent in parallel. A session has a limited number of web searches (about 200 shared by all agents). *(v6)* Split them in advance (`v6.search_budget`): at most 120 for agenda and dossiers, and 50 kept for the evidence forecasters, whose own research must not be the step that runs out. In general: give agents narrow tasks, prefer `node scripts/read.mjs` on known pages, `node scripts/markets.mjs` and `pipeline/reference-data/`.

## 1. Setup

1. `git fetch origin main && git checkout main && git reset --hard origin/main`. Work on `main` (the evening desk publishes only planning data, dossiers and the forecast board).
2. Read `pipeline/config.json`, `pipeline/sources.json`, `pipeline/reference-data/README.md`, `data/planning/agenda.json`, `data/watchlist.json`, and the accuracy figures (`node scripts/build.mjs`, then `dist/accuracy/index.html`).
3. Export `METACULUS_TOKEN` if the run instructions provide it.

## 2. Agenda (next 14 days)

Update `data/planning/agenda.json` (`items`: `date`, `time`, `title`, `title_cs`, `scope` (`cz`/`europe`/`world`), `institution`, `source` URL, `status` (`official`/`reported`/`speculative`), `importance` 1–5, `note`, `added`). Four parallel sweep agents:

- **Czech:** Sněmovna schedule and agendas (psp.cz), vláda (Monday cabinet, ODOK list of materials), Senát, President's programme, ČNB, ČSÚ calendar, courts (ÚS, NSS, high courts), regions and Prague, party congresses, unions and strikes, large companies (results, general meetings), polls (Median, STEM, Kantar for ČT, NMS), Czech culture. When an official page cannot be fetched, use ČTK's “Předpokládané události”, ČT24, iROZHLAS, Seznam Zprávy.
- **World:** elections (IFES ElectionGuide), summits and state visits, UN Security Council, central banks, statistics of political weight, courts, wars and negotiations, US Congress and White House.
- **Europe:** EU institutions (Parliament, Council, Commission, Court of Justice), national politics of European countries.
- **Newsroom planners:** ČTK's week ahead, Reuters Week Ahead, AP Daybook, Politico Playbooks, FT “week ahead”: what other editors plan to cover. An item they all carry and we lack is a gap to fill.

Remove past items; keep every entry sourced.

## 3a. The stories of the day *(v4, from edition No. 6)*

Before any calendar work, list what the news is actually about. Open the reference front pages in `config.v4.running_lists` (Reuters World, Reuters Business, AP, BBC, FT, ČT24, Seznam Zprávy, iROZHLAS) and take the stories that lead or sit in the top five of **at least two** of them: wars and security (Ukraine, the Middle East), big political fights, big business and technology stories (Starlink in Ukraine, tariffs, a major merger or failure), Czech front-page affairs. Keep the 8–10 biggest in the planning file as `running`: `{ "title": "…", "lists": ["reuters-world", "bbc"], "sources": [two URLs], "next_step": "what may happen by 23:59 on E+2" }`.

Each of them gets a story in the edition with a claim on **what happens in it by 23:59 local time on E+2** (from edition No. 15: an occurrence the paper can report, not a breakthrough that most likely will not come; see EDITOR step 2, "Report what happens") (a decision, a restored service, a vote, a deal, a figure published, a strike called off), unless there is truly nothing that can be forecast for that day. "No dated step" is not by itself a reason: running stories move every day, and forecasting the next move is the paper's job. **From edition No. 28 (publisher's decision, 16 November 2026):** the occurrence must be something a newspaper would report on its own: a meeting and what it agrees, a vote, a decision, a ruling, a figure, a strike, a statement at a scheduled occasion. "Someone says (or repeats) their known position at some point that day" is not such an occurrence and may not be the main claim; nor may any claim you expect to come out below 50%, unless the event was announced or scheduled for that day (`awaited`, at most one story per edition; see EDITOR step 2). If a running story offers nothing of that kind on E+2, do not manufacture a claim: give it a diary line with its next dated step, mark it `not_covered` with `why`, and if fewer than `running_min` are then covered, say so in `meta.running_shortfall`. A thinner edition is better than a story about something not being said. At least `config.v4.running_min` of them must be covered; the morning records the list in `meta.running` with `status` `covered` (and `story`) or `not_covered` (and `why`).

## 3. Shortlist for edition E+3

**The scouts' agenda** *(from the evening desk of 23 November 2026)*. Before this run a separate task asks three other vendors' models what is scheduled for E+2 and writes `data/external/agenda/<E+2>.json` (one list per provider; `title`, `scope`, `when`, `source`). If the file is there, read it after you have drawn up your own candidates, not before. An entry is a lead, never a fact: for every event that two providers list, or that one lists with an official source, and that is not among your candidates, open the source with `node scripts/read.mjs` and confirm the date. If it holds, the event becomes a candidate and is scored like any other; if it does not, or it is out of scope, record it in `dropped` with `reason` starting `scout:`. Record `"scouts": {"file": "…", "listed": 41, "new_to_us": 6, "confirmed": 3, "added": ["…"]}` in the planning file. If the file is missing, go on and say so in `unreachable`.

From the stories of the day (step 3a), the agenda items dated E+2, the other running stories (two outlets each, last 48 hours) and the forecast board (a question whose next step falls on E+2), build a pool of at least `candidate_pool_min` candidates. Score each 1–5 on Impact, Reach (for a Czech reader and for a world reader) and Uncertainty value. *(v4)* **Stories are selected by news value, Impact × Reach.** Uncertainty value decides which claim a story carries (aim it at the open part), not whether a big story runs: a story is never dropped because its outcome looks predictable or because it has no calendar slot. *(publisher's decision, 9 November 2026)* **Ask the open question:** for each proposed story choose the claim a reader actually asks about (who wins, by how much, how a vote goes, what is decided, what figure is published), not the safest one; from edition No. 22 at most two stories may lead with a claim of 90% or more either way, and secondary claims at 95% or more need `forecast.open_because` (EDITOR step 2).

*(v4)* **Economy desk.** At least `config.v4.economy_min` stories with `topic: "economy"`: data releases (ČSÚ, Eurostat, US and other national statistics), central banks, budgets and taxes, company results and decisions of large companies, energy and regulated prices, trade and tariffs, labour and strikes, big deals and insolvencies. The exclusion of "financial market prices" covers only stock indices, exchange rates and commodity or crypto prices; everything else in the economy is news. Give every story a `topic` from `config.v4.topics`. Write `data/planning/<E+3>.json`:

```json
{
  "edition": "2026-10-26", "events_date": "2026-10-25", "prepared_at": "…",
  "candidates": 47,
  "stories": [
    { "id": "…", "scope": "cz", "rank": 1, "scores": {"impact": 5, "reach": 5, "uncertainty": 4},
      "event": "…", "sources": [{"title": "…", "url": "…"}],
      "claims": [{ "id": "…", "text": "…", "criterion": "…", "resolution_source": "…", "schedule": "official",
                   "tz": "Europe/Prague", "event_window": {"start": "…", "end": "…"}, "evidence_at": "…", "resolves_by": "…",
                   "dossier": "data/dossiers/2026-10-26/<claim-id>.md", "forecast": { …as in EDITOR.md step 4… } }] }
  ],
  "dropped": [{"event": "…", "scope": "cz", "scores": {"impact": 3, "reach": 2, "uncertainty": 1}, "why": "practically certain / not important / no checkable outcome / happens after E+2"}]
}
```

Propose `stories_max` stories, so the morning can drop some, aiming at `cz_stories_min` + 2 Czech ones; if E+2 lacks Czech events of real weight, propose fewer and say why (the morning records it in `meta.cz_shortfall`). Claims follow EDITOR.md step 3 (informative, postponement covered, `slip_class`, `publishes`, text and criterion identical) and its *(v3)* time rules: **the event must happen by 23:59 local time on E+2**; an announcement expected on the morning of E+3 belongs to the next edition. Choose open questions; never tune a threshold to hit a probability band. Consider an interval claim for each official number released on E+2, and derive binary claims about the same quantity from it (`derived`). Keep every candidate you considered and did not select in `dropped`, with its scores and the reason: the resolver uses it to tell "dropped" from "missed" (RESOLVER step 7).

## 4. Dossiers

For every proposed claim one research agent writes two files. *(v3)* The dossier `data/dossiers/<E+3>/<claim-id>.md` holds facts only; everything that is itself a probability (markets, bookmakers' odds, forecasting platforms, other people's models and win probabilities) goes into `data/dossiers/<E+3>/<claim-id>.signals.md`. The validator rejects a dossier that names a market, bookmaker or platform.

The dossier:

- header: claim, criterion, deadline, time of writing;
- **schedule**: confirmation of the event with the primary source;
- **facts**: one per line, each with its URL, the time it was published, the time we read it and a short supporting excerpt in quotation marks: `- Datafolha 20–22 Oct: Flávio 50%, Lula 50% of valid votes — https://… (published 2026-10-22 21:10, read 2026-10-23T17:05Z) "…excerpt…"`. Statements, vote arithmetic, polls with fieldwork dates and the vote base (valid votes, all votes, decided respondents, likely voters; from the pollster's own tables where possible), consensus forecasts for releases, the last comparable outcomes. Agency copy republished by several outlets is one source: cite the agency. For economic data say whether a figure is a first release or a revision;
- **base rate**: the class, rate and n, from `pipeline/reference-data/` where it applies;
- **schedule slip**: the claim's slip class and its current rate (`node scripts/refdata/slip.mjs <class>`), plus any sign that this particular event may move (contested agenda, obstruction, drafts still open);
- **(signals file, not the dossier)**: `node scripts/markets.mjs search …` results that match (Polymarket, Kalshi, Manifold, Metaculus), with price, read time and volume or liquidity; for Czech and other political questions also the Tipsport and Fortuna pages from `pipeline/sources.json` (decimal odds of every outcome, read time); published models and their probabilities. For each market say whether its question, deadline and settlement rules match the claim (a market on the eventual winner is not a market on confirmation by midnight);
- **for a number forecast**: the analysts' consensus and its range, and the usual surprise size for this release with its source;
- **risks**: what would make the obvious outcome fail;
- **sources**: every page opened.

Dossiers hold facts, never probabilities. For the Czech Chamber use the open data in `pipeline/reference-data/cz-chamber.json` (votes, agenda items, stenographic records via psp.cz); for rates the ČNB's decision history and communication; for macro data ČSÚ's exact definitions. GDELT can help find local reporting across languages, but every fact is checked at its original source. Save a copy of the agenda page you relied on (`data/planning/agenda.json` keeps the item; add the URL of an archived copy when the page changes often), so that postponements can be measured later.

## 5. Round-one ensemble

Run the five forecasters of EDITOR.md step 4 for every proposed claim (an agent may take up to eight claims of one role), each role on its model from `config.ensemble_models`. *(v3)* In two steps with the same agent: the blind estimate without the signals file, then the final estimate after reading it; the evidence forecaster does its own research before it reads the dossier; the outsider gets only the dossier, then the signals. Record for every agent the exact model id, the time and the inputs (EDITOR.md step 4). Apply `pipeline/calibration.json` when it is active. Record the result in the planning file under each claim's `forecast`, with the disagreement handled by its cause.

## 6. Forecast board

For each open question in `data/watchlist.json`:

1. **Resolve** questions whose deadline has passed or whose outcome is already certain under the criterion: add `result` (`outcome`, `evidence`, `note`, `resolved_at`).
2. **Check**: one evidence agent per group of about eight questions reads the news since the last history entry.
3. **Re-forecast** with all five forecasters when something material happened, or when the last entry is seven or more days old. Append a history entry (`at`, `p`, `combined`, `agents`, `market`, `note`, `note_cs`, `market_note` where needed) only if the new figure differs by at least 5 points, or the weekly re-forecast is due. Never edit an earlier entry.
4. **Add** questions when a new issue of the first rank appears (keep 25–40 open, at least a third Czech). A new question needs the full five-forecaster ensemble, two sources, an exact criterion and a Czech translation.

## 7. Validate, build, commit

```
node scripts/validate.mjs
node scripts/build.mjs
```

Commit to `main`: `Evening desk <E>: agenda, dossiers for <E+3>, forecast board` and push. The forecast board goes live at once; the planning file and dossiers are public too, which is part of the record of how each forecast was made.

## 8. Report

In Czech, at most seven lines: the planned lead and Czech stories for E+3, how many claims and dossiers, forecast-board moves of 5 points or more (old → new and why), questions resolved or added, anything that failed. *(v5)* Last line: **„Pro vydavatele:“** two or three Czech claims planned for E+3, each as `id – text – termín`, so the publisher can send his own probabilities before the events day begins (METHODOLOGY 11). Pick claims he can judge from Czech politics, not data releases.

## 9. Rules from method version 5

Dossiers and round-one forecasts follow EDITOR.md step 4b: the market search is recorded for every claim; election claims get `election` and the poll model; number ranges are at least 4.1 surprise scales wide and centred on consensus; a data-direction claim needs its threshold at least half a scale from consensus; the outsider gets no dossier; a spread above 15 points triggers targeted research. The dossier for a number release records the consensus with its source and the surprise sd with its source.

**Calendars that we missed.** In the agenda sweep also check, for E+2: the Commission's College agenda and its list of planned items (`pipeline/sources.json`, "European Commission College agenda"); the annual-reports calendar (WMO Greenhouse Gas Bulletin and State of the Climate, UNEP Emissions Gap, IEA World Energy Outlook, OECD and Commission economic forecasts); Czech energy suppliers' price lists for the next year (ČEZ, PRE, E.ON, innogy) and ERÚ price decisions, which come from October to December; ECB and ČNB personnel questions when markets or Reuters discuss them. The coverage files of 25–31 October show these as the foreseeable misses.

## 10. Rules from method version 6

The planning file and dossiers already carry what EDITOR step 4c asks of a claim: `forecast.baseline`, `event_key` and `case_key`, the scale basis of number forecasts, the simulation for a chamber claim, and the two-step blind procedure.

## 11. Shadow trials *(from 9 November 2026; METHODOLOGY 16)*

These run beside the ensemble and are recorded under each claim's `forecast.shadow` in the planning file. They never change a published figure, never enter `forecast.agents`, and are never shown to the five forecasters, the red team or the writers. Settings: `config.shadow`.

**Sequential researcher** (`shadow.sequential.enabled`). After round one, take the binary claims whose combined round-one figure lies inside `band` (20–80%), order them by the spread of the five forecasters (widest first, ties by claim id) and take the first `claims_max` (3). For each, start one agent on `shadow.sequential.model` with only the claim text, its criterion, the deadline, today's date and `pipeline/reference-data/`. It gets no dossier, no signals file and no other forecaster's number or reasoning. It works in a loop of at most `steps_max` (8) steps:

1. Step 1 states a prior from the reference class or the slip class, before any search.
2. Each later step takes exactly one action, chosen from what the belief state says is still open: `search` (one WebSearch; at most `searches_max`, 6, per claim), `read` (one page with `node scripts/read.mjs`), `data` (one lookup in `pipeline/reference-data/` or `scripts/refdata/`), or `submit`.
3. After every action the agent rewrites its whole belief state; it does not append notes: `{"p": 0.58, "confidence": "low | medium | high", "for": ["dated fact — URL", …], "against": […], "open": ["what would move the figure most", …]}`. A fact that is not in the belief state is lost, so the state must carry everything the final figure rests on. The next action is chosen from `open`.
4. `submit` ends the loop; it is forced at the step limit. The figure at `submit` is `p_blind`. Then the same agent reads `<claim-id>.signals.md` (if there is one) and gives its final `p`.

The agent writes the trace to `data/dossiers/<E+3>/<claim-id>.belief.json`: `{claim, model, started_at, finished_at, steps: [{n, action, target, found, belief}], p_blind, p}` (`target` is the query, URL or data file; `found` one sentence). Record on the claim:

```json
"shadow": {"sequential": {"model": "claude-opus-5-5", "at": "2026-11-10T19:40:00+01:00", "p_blind": 0.55, "p": 0.58, "steps": 6, "searches": 4, "trace": "data/dossiers/2026-11-13/<claim-id>.belief.json"}}
```

The searches count towards `meta.run.searches`. The shadow run never takes searches from the dossiers, the evidence forecaster or the morning reserve (`v6.search_budget`): if the budget is short, run it for fewer claims or not at all, and say so in the report. A skipped shadow run needs no entry in `forecast.missing`.

**Other vendors' models** (`shadow.external`). The evening desk does nothing for these and never runs `scripts/external.mjs`, `scripts/external-run.mjs` or `scripts/external-desk.mjs`: the vendors' keys exist only in another cloud environment, so every call from here fails. A separate scheduled task ("Overmorrow external models", about 20:07) starts in that environment once this run has pushed, runs `node scripts/external-run.mjs latest` and commits into the planning file and next to the dossiers: the models' own search on up to `research.claims_max` claims (6) with the dated facts and the counter-argument each gives (`forecast.shadow.research`, `<claim>.research.json`); Google's figure from the dossier (`forecast.shadow.external`; the dossier trial ended for the other two on 22 November 2026); and each model's reading of every criterion (`<claim>.wording.json`, `external_run.wording_flags`). So: push the planning file with each claim's `dossier` and `signals` paths and the sequential researcher's record in place, leave `forecast.shadow.external` and `forecast.shadow.research` out, and write nothing about these providers in `unreachable`. What happens with it afterwards is step 12.

**Nothing to do** for the market blend and the empirical number ranges: `scripts/build.mjs` computes them from what the claims already record (`forecast.market`, `forecast.consensus`, `scale`).

## 12. Evening check *(from 22 November 2026; a run of its own, "Overmorrow evening check", about 21:10)*

This is not part of the evening desk. A third run of the evening, on our own models, takes what the other vendors' models found (step 11) and uses it the only way it may be used: as facts confirmed on a page, never as numbers. It works on the planning file for E+3 and leaves it ready for the morning.

1. Get the repository as in step 1 and read METHODOLOGY section 16. Run `node scripts/external-gaps.mjs latest --all`. It lists up to `check.claims_max_evening` claims (6) for which the models named dated facts, the ones where a model landed far from our figure first, each with the `facts` (`provider`, `date`, `fact`, `url`), the `dossier` and the `trace` file; and under `wording` the claims whose criterion all three models read as ambiguous (`wording.flag_at`). If `external_run` is missing from the planning file, the vendors' run has not finished: wait ten minutes and try again, three times at most, then stop and report.
2. **Facts.** For each listed claim start one agent (the evidence forecaster's model) with the claim, the criterion, the dossier, the listed `facts` and, from the trace file, each provider's `reason` and `sources`. Give it no probability and tell it to ignore any figure it meets in the trace. Its task: (a) say which of the facts, and which dated facts in the reasoning, the dossier does not already have; (b) for each, open the page with `node scripts/read.mjs` (the cited page or the primary source behind it; Google's sources are redirect links, follow them) and confirm that the page says it and when it was published; (c) drop what it cannot confirm on a page it has read, what is undated or published after now, and anything that is a forecast, a market price or an opinion. A model's statement is never a source.
3. Append the confirmed facts to the claim's dossier under the heading `## Added after the vendors' search (evening of <E>)`, each with URL, publication time, read time and a short excerpt, as every dossier fact.
4. **Rerun.** If at least one confirmed fact is material to the claim, the five forecasters rerun for that claim by the rules of EDITOR step 4, on the dossier with the added facts (blind, then with the signals file; the outsider as always without the dossier), and the planning file takes the new `agents`, `combined` and what follows from them. If none is material, the evening figure stands.
5. Record inside the claim's `forecast`: `"external_check": {"at": "…", "providers": ["google", "xai"], "facts_listed": 5, "facts_confirmed": 2, "added": ["https://…"], "reforecast": true, "before": 0.48, "after": 0.39}` (`before` and `after` are our combined figure; with `reforecast: false` leave `after` out). Do this for every listed claim, also when nothing was confirmed.
6. **Wording.** For each claim under `wording`, read the models' `scenario` in the listed file. If the scenario is real (it could happen, and the criterion as written does not say how it would be judged), tighten the criterion so that it does, without changing what the claim is about, keep `text` and `criterion` saying the same thing, and record on the claim `"wording_check": {"at": "…", "flagged_by": ["openai", "xai"], "changed": true, "was": "<old criterion>", "why": "…"}`. If the change would alter what is being forecast, do not make it: record `changed: false` with the reason and leave the question to the morning run. If the scenario is not real, record `changed: false` and why.
7. Run `node scripts/validate.mjs` and `node scripts/build.mjs`; both must pass. Commit to main with the message "Evening check <E>: vendors' facts for <E+3>" and push. Report to the publisher in Czech, at most 5 lines: claims checked, facts listed and confirmed, which figures moved (before → after, and the fact that moved them), which criteria were tightened, and anything that failed.

Never show a vendor's probability to a forecaster, the red team or a writer. If a rerun cannot be finished, leave the evening figure, record the claim in `forecast.missing` with the reason and say so in the report.
