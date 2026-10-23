# Planner's Manual: The Evening Desk

The evening run (about 18:40 Europe/Paris on day **E**) does the slow work so that the morning run can concentrate on what changed overnight. It prepares the edition that the next morning run (day E+1) publishes: dated **E+3**, about the events of **E+2**. It also maintains the 14-day agenda and the forecast board. It implements [`METHODOLOGY.md`](../METHODOLOGY.md) sections 2, 4 and 10.

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

## 3. Shortlist for edition E+3

From the agenda items dated E+2, the running stories (two outlets each, last 48 hours) and the forecast board (a question whose next step falls on E+2), build a pool of at least `candidate_pool_min` candidates. Score each 1–5 on Impact, Reach (for a Czech reader and for a world reader) and Uncertainty value. Write `data/planning/<E+3>.json`:

```json
{
  "edition": "2026-10-26", "events_date": "2026-10-25", "prepared_at": "…",
  "candidates": 47,
  "stories": [
    { "id": "…", "scope": "cz", "rank": 1, "scores": {"impact": 5, "reach": 5, "uncertainty": 4},
      "event": "…", "sources": [{"title": "…", "url": "…"}],
      "claims": [{ "id": "…", "text": "…", "criterion": "…", "resolution_source": "…", "resolves_by": "…", "schedule": "official",
                   "dossier": "data/dossiers/2026-10-26/<claim-id>.md", "forecast": { …as in EDITOR.md step 4… } }] }
  ],
  "dropped": [{"event": "…", "why": "practically certain / not important / no checkable outcome"}]
}
```

Propose `stories_max` stories, so the morning can drop some, with at least `cz_stories_min` + 2 Czech ones. Claims follow EDITOR.md step 3 (informative, thresholds near expectations, postponement covered, `slip_class`, `publishes`, text and criterion identical). Plan at least `contested_min` + 2 claims that you expect to land between 30% and 70%, and consider an interval claim for each official number released on E+2.

## 4. Dossiers

For every proposed claim one research agent writes `data/dossiers/<E+3>/<claim-id>.md`:

- header: claim, criterion, deadline, time of writing;
- **schedule**: confirmation of the event with the primary source;
- **facts**: dated, each with its URL — statements, vote arithmetic, polls with fieldwork dates, consensus forecasts, the last comparable outcomes;
- **base rate**: the class, rate and n, from `pipeline/reference-data/` where it applies;
- **schedule slip**: the claim's slip class and its current rate (`node scripts/refdata/slip.mjs <class>`), plus any sign that this particular event may move (contested agenda, obstruction, drafts still open);
- **markets**: `node scripts/markets.mjs search …` results that match (Polymarket, Kalshi, Manifold, Metaculus), with price and read time; for Czech and other political questions also the Tipsport and Fortuna pages from `pipeline/sources.json` (decimal odds of every outcome, read time);
- **for a number forecast**: the analysts' consensus and its range, and the usual surprise size for this release with its source;
- **risks**: what would make the obvious outcome fail;
- **sources**: every page opened.

Dossiers hold facts, never probabilities.

## 5. Round-one ensemble

Run the five forecasters of EDITOR.md step 4 for every proposed claim (an agent may take up to eight claims of one role), each role on its model from `config.ensemble_models`. The outsider gets only the dossier. Apply `pipeline/calibration.json` when it is active. Record the result in the planning file under each claim's `forecast`, with the disagreement rerun where needed.

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
