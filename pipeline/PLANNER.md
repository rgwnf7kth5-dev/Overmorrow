# Planner's Manual: The Evening Desk

The evening run (about 18:40 Europe/Paris on day **E**) does the slow work so that the morning run can concentrate on what changed overnight. It prepares the edition that the next morning run (day E+1) publishes: dated **E+3**, about the events of **E+2**. It also maintains the 14-day agenda and the forecast board. It implements [`METHODOLOGY.md`](../METHODOLOGY.md) sections 2, 4 and 10. From edition No. 5 the rules of method version 3 apply (METHODOLOGY section 12; EDITOR.md steps marked *(v3)*).

Run every agent in parallel. A session has a limited number of web searches (about 200 shared by all agents): give agents narrow tasks, prefer `WebFetch` on known pages, `node scripts/markets.mjs` and `pipeline/reference-data/`.

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

Each of them gets a story in the edition with a claim on its **next development by 23:59 local time on E+2** (a statement, a decision, a restored service, a vote, a deal, a figure published, a strike called off), unless there is truly nothing that can be forecast for that day. "No dated step" is not a reason: running stories move every day, and forecasting the next move is the paper's job. At least `config.v4.running_min` of them must be covered; the morning records the list in `meta.running` with `status` `covered` (and `story`) or `not_covered` (and `why`).

## 3. Shortlist for edition E+3

From the stories of the day (step 3a), the agenda items dated E+2, the other running stories (two outlets each, last 48 hours) and the forecast board (a question whose next step falls on E+2), build a pool of at least `candidate_pool_min` candidates. Score each 1–5 on Impact, Reach (for a Czech reader and for a world reader) and Uncertainty value. *(v4)* **Stories are selected by news value, Impact × Reach.** Uncertainty value decides which claim a story carries (aim it at the open part), not whether a big story runs: a story is never dropped because its outcome looks predictable or because it has no calendar slot.

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

In Czech, at most six lines: the planned lead and Czech stories for E+3, how many claims and dossiers, forecast-board moves of 5 points or more (old → new and why), questions resolved or added, anything that failed.
