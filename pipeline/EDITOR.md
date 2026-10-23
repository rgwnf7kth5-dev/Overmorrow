# Editor's Manual: Producing One Edition

This is the operating procedure for the edition part of the morning run. It implements [`METHODOLOGY.md`](../METHODOLOGY.md); where the two seem to differ, the methodology wins. Follow every step, in order. Do not skip steps to save time.

Notation: the run starts at about 05:00 on day **D**, right after the resolver part ([`RESOLVER.md`](RESOLVER.md)). The edition is dated **D+2**, forecasts the events of **D+1** and must be published by **06:00** on day D. All times are Europe/Paris.

Time budget: resolver part by about 05:15, candidate pool by 05:30, ensemble and red team by 05:45, writing and publishing by 05:58. Run sweeps, ensemble agents and the red team as parallel subagents to fit the hour. If the run falls behind, cut the number of stories toward `stories_min`, never the ensemble or the red team.

## 0. Setup

1. Work on the branch the resolver part created, `daily/<D>` (for example `daily/2026-10-22`).
2. Read `pipeline/config.json`, `pipeline/sources.json`, `pipeline/reference-classes.json`, and the two most recent edition files in `data/editions/` (for format and running stories).
3. Read the latest resolution files in `data/resolutions/` and the accuracy figures they imply. Note any recurring error (for example, consistent overconfidence on schedule-dependent claims) and correct for it in this edition.
4. Record the start time. The information cut-off (`frozen_at`) is the moment you finish step 6.

## 1. Calendar sweep (candidate pool)

Check **every** entry in `pipeline/sources.json` → `calendars` for day D+1. Use web search and fetch; when an official page cannot be reached, search for a recent secondary report of its agenda. For each event found, add a row to a working file `work/<D+2>/candidates.md` with: time, place, institution, one-line description, section, source URL, schedule status (`official` / `reported` / `speculative`).

**When an official calendar cannot be fetched** (hrad.cz, vlada.gov.cz and some others often refuse automated requests), do not stop there: search for its agenda in ČTK's daily list of expected events (ceskenoviny.cz, “Předpokládané události”), ČT24, iROZHLAS and Seznam Zprávy, and in the institution's own social media posts. A weekend is not an excuse for an empty Czech page: party congresses and councils, ministers' and the President's trips, regional events, demonstrations, Czech culture (festivals, premieres, awards) and Czech companies all count.

Also look for:

- elections, referendums and campaign milestones within the next 7 days (final polls, debates, campaign silence);
- court verdicts and rulings scheduled for D+1;
- statistical releases of political weight (inflation, GDP, unemployment) for the Czech Republic, the euro area and major economies. Report the release and the expected figure, not market reactions;
- anything in the edition's "Coming up" list from two days ago that falls on D+1.

## 2. Running-story sweep

List the running stories (wars, negotiations, crises, campaigns, Czech coalition disputes, EU files in trilogue). For each, read reporting from the last 48 hours in at least two outlets from `running_story_outlets` and write down the next step expected on D+1 and who decides it. Add those to the candidate pool.

Target: **at least 40 candidates.** If fewer, widen the sweep (national parliaments of DE, FR, PL, AT, SK; G20 governments; UN agencies) before moving on.

## 3. Selection

Score each candidate 1–5 on Impact, Reach and Uncertainty value (definitions in the methodology, section 2.4) and rank by the product. Then fill the edition:

- **Lead**: the most newsworthy event with `official` or `reported` status, wherever it happens. Prefer a Czech story when scores are close.
- **Rail**: two Czech stories. A story from a neighbouring country does not replace a Czech one; if the sweep found no second Czech event, widen the Czech sweep before giving up, and say so in the pull request or report.
- **World**: the largest section, five to six stories from outside the EU institutions: other continents, wars and diplomacy, elections, major national politics in Europe and elsewhere.
- **Europe**: two to three stories. At most three stories in the whole edition may be about EU institutions (Parliament, Council, Commission, EU courts and agencies); national politics of European countries does not count toward that cap.
- **Economy, Science and Health, Culture**: add a section when at least one candidate scores 27 or more (3 × 3 × 3).
- Total: between `stories_min` and `stories_max` from `config.json`.
- Excluded topics: sport, financial market prices.

Drop any event whose outcome is practically certain and that has no other uncertain dimension; mention it in the "Coming up" list or in a story's body instead.

## 4. Claim design

For each selected story write one primary claim, plus a secondary claim only when it carries different information. Every claim needs:

- `text`: one sentence, binary, unconditional;
- `label`: up to 8 words for the likelihood bar;
- `resolves_by`: ISO timestamp with offset, normally `<D+1>T23:59:00+0X:00`;
- `criterion`: the exact test, naming the document or page and what must appear in it;
- `resolution_source`: a URL wherever possible;
- `schedule`: `official`, `reported` or `speculative`;
- `exclusive_set` when claims are mutually exclusive.

Check each claim with these questions. If any answer is no, rewrite it.

1. Could two honest people disagree about whether it came true? (Must be no.)
2. Is the deciding source named and likely to publish by the deadline?
3. Does it target the uncertain part of the event?
4. Is postponement covered (it should make the claim resolve no)?

## 5. Forecasting (ensemble)

For every claim, launch **three independent forecasting agents in parallel**, each with only the claim, the story notes and its own instructions. They must not see each other's work.

- **Agent A, base-rate first.** Find or build the reference class (check `reference-classes.json` first). State the base rate and n. Adjust for case-specific factors, each with a direction and a size in log-odds. Output a probability and a 3–5 line rationale.
- **Agent B, evidence first.** Search for the newest reporting (last 24 hours), official statements, vote arithmetic, polls and prediction markets. Output a probability and a 3–5 line rationale, listing the decisive facts with links.
- **Agent C, adversarial.** Assume the most obvious outcome fails. Find the most plausible routes: postponement, procedural traps, quorum, legal challenges, late reversals, the resolution source not publishing. Estimate how likely those routes are and output a probability with a 3–5 line rationale.

Combine: convert each probability p to odds p/(1−p), take the geometric mean of the three odds, convert back. Clamp to [`probability_min`, `probability_max`]. Round to the nearest whole percent.

Then check:

- **Disagreement**: if max − min of the three exceeds `ensemble_disagreement_limit`, give all three agents the union of facts they cited and rerun once. If they still disagree, keep the combined number but say in the basis line that the evidence is mixed.
- **Markets**: if a liquid prediction market exists and the result differs from it by more than `market_departure_flag`, write the reason in `rationale`, or move toward the market.
- **Sets**: rescale `exclusive_set` members to sum to exactly 1.00.
- **Calibration**: once `calibration_min_resolved` claims are resolved, apply the published correction from the accuracy page to every raw number and note it in `rationale`.

Store in each story's `rationale` a short summary: base rate and class, the three agent numbers, the combined number, any market price, and the main risk.

## 6. Red team and freeze

Launch one more agent with the complete draft and one instruction: find the single most likely reason each forecast is wrong tomorrow, using only information published before now. If it finds a new decisive fact, rerun step 5 for that claim.

Then set `frozen_at` to the current time. From here on, do not use any new information for the forecasts. (The fact-check in step 7c may still correct the text; if it shows that a story rests on a wrong premise, rerun step 5 for that claim and set `frozen_at` again.)

## 7. Writing

Write the stories into `data/editions/<D+2>.json`, following the format of the existing files exactly. Rules:

- Past tense, as if D+1 has happened. British spelling. Plain, adjective-light newspaper prose.
- Headline states the forecast outcome. Standfirst only for the lead.
- Every number in the text comes from a cited source or is the forecast itself. No invented quotations, ever.
- **Read the sources yourself.** Write from the source pages, not from an agent's summary of them. Every factual sentence must be traceable to a page listed in `sources`; a fact you cannot place in a listed source is either sourced or cut. Check the newest reporting (last 12 hours) for the lead and each rail story: positions change (a union that joins a protest, a route that is banned, a venue that moves).
- **Sources:** at least two different sites per story, at least one of them a primary source (the institution, court, statistics office, election commission, company) or a major outlet (Reuters, AP, AFP, BBC, ČTK, ČT24, iROZHLAS, national public broadcasters, the large national dailies). Name the outlet that actually published the text (Belga is not AFP). Never use content farms or aggregators (Archyde, Bloomingbit, Cryptobriefing, Octagon and similar); Wikipedia may be cited for background but does not count as one of the two sources.
- **Times and dates:** give times in Central European time and check them against daylight-saving changes (the last Sunday of October and of March). Give the date an announcement was made in the time zone where it was made.
- **Length** (body only): lead 5–8 paragraphs and 400–650 words, with a standfirst, the background a reader needs and the main numbers; `half` 3–5 paragraphs, 150–300 words; `third`, `quarter` and rail stories 2–4 paragraphs, 100–200 words. No rail story may be longer than the lead. The validator enforces the minimums from edition No. 4.
- Each story ends with a `basis` line: what it rests on, and the main risk to the forecast.
- Never forecast deaths, accidents, disasters, crimes, or the health of named people. No private individuals.
- `diary`: the fixed dates for the coming two weeks, especially Czech, EU and election dates.
- `weather`: Czech regions plus Strasbourg or Brussels when Parliament sits. Shown, not scored. Never leave a row empty: if chmi.cz cannot be fetched, use ČHMÚ's forecast as reported by ČT24 or iROZHLAS, or yr.no, and name the source in the note.
- `number`: previous edition number plus one. `pilot`: omit.

## 7b. Czech version

English is the default; the Czech edition at `/cs/` is built from Czech text stored in the same file. Follow the format of `data/editions/2026-10-23.json`:

- each story gets a `cs` object with `kicker`, `headline`, `standfirst` (lead only), `body`, `basis`, `table` (if the story has one: `caption` and `rows` in the same order) and `claims` keyed by claim id, each with `label`, `text` and `criterion`;
- the edition gets a top-level `cs` object with `weather`, `sections` (same order, `name` and `dek`) and `diary`.

Translate faithfully into natural Czech newspaper prose (ČTK style): Czech names of institutions, Czech date and number formats (22. října, 2,5 procenta, 386 miliard korun). Do not add, drop or soften anything; probabilities, deadlines and sources are shared and never translated into different numbers.

**House rule: foreign women's surnames are never feminised.** Write them exactly as in the original: Roberta Metsola, Kaja Kallas, Ursula von der Leyen, Taraneh Rahimi, sestry Rahimi, Helen McEntee — never Metsolaová, Kallasová, Rahimiová. The surname stays undeclined; the sentence carries case through the first name, title or function (předsedkyně Metsola, s vysokou představitelkou Kajou Kallas, sester Rahimi). Czech and Slovak women keep their own forms (Schillerová). The validator rejects feminised forms of names that appear in the English text.

## 7c. Fact-check (mandatory)

Launch one agent that did not write the stories, with the edition file and one instruction: open every URL in `sources` and every `resolution_source`, and mark each factual statement and number in the English and Czech text as supported, unsupported or wrong, with the URL; check times, time zones, dates, attributions and that the Czech says the same as the English. Fix every wrong statement; source or cut every unsupported one. If a correction changes the premise of a forecast (as when a union the story said stayed out had in fact joined), go back to step 5 for that claim. Record in the pull request or report how many statements were checked and fixed.

## 8. Validate and build

```
node scripts/validate.mjs
node scripts/build.mjs
```

Both must pass with no errors. Fix the data, never the validator, unless the validator itself is wrong; in that case explain the change in the pull request.

The page lays itself out: when the rail runs longer than the lead, the build moves the best-fitting section story up under the lead, and the last story of any incomplete row is widened. Still look at the built front page (`dist/index.html`) before publishing; large empty areas mean the lead is too short.

## 9. Publish

Commit with the message `Edition No. <n>, dated <D+2>` and push the branch `daily/<D>`, which also carries the morning's results.

- **If D is on or before `approval_required_through`:** open one pull request to `main` titled `<D>: edition No. <n> and results (for approval)`. In the description list the results first (claim, probability, outcome, evidence link), then every new claim with its probability, the three agent numbers, and anything that needed a judgement call. Do not merge. Send the publisher a short message with the pull request link; Netlify will add a deploy preview link to the pull request.
- **Otherwise:** merge the branch into `main` yourself and push, no later than 06:00.

## 9b. Corrections after publication

The edition file is never changed after publication. If a fact in the text turns out wrong, add an entry to `data/corrections/<D+2>.json` (`story`, `date`, `text`, `text_cs`, `url`); it is shown under the story. Probabilities are never corrected.

## 10. Report

End the run with a summary: number of candidates found, stories selected, claims and their probabilities, any claims where the ensemble disagreed, and any source in the registry that could not be reached (add a note to `pipeline/sources.json` if a source has moved).
