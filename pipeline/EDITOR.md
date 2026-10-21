# Editor's Manual: Producing One Edition

This is the operating procedure for the edition part of the morning run. It implements [`METHODOLOGY.md`](../METHODOLOGY.md); where the two seem to differ, the methodology wins. Follow every step, in order. Do not skip steps to save time.

Notation: the run starts at 04:20 on day **D**, right after the resolver part ([`RESOLVER.md`](RESOLVER.md)). The edition is dated **D+2**, forecasts the events of **D+1** and must be published by **06:00** on day D. All times are Europe/Paris.

Time budget: resolver part by about 04:40, candidate pool by 05:00, ensemble and red team by 05:35, writing and publishing by 05:55. If the run falls behind, cut the number of stories toward `stories_min`, never the ensemble or the red team.

## 0. Setup

1. Work on the branch the resolver part created, `daily/<D>` (for example `daily/2026-10-22`).
2. Read `pipeline/config.json`, `pipeline/sources.json`, `pipeline/reference-classes.json`, and the two most recent edition files in `data/editions/` (for format and running stories).
3. Read the latest resolution files in `data/resolutions/` and the accuracy figures they imply. Note any recurring error (for example, consistent overconfidence on schedule-dependent claims) and correct for it in this edition.
4. Record the start time. The information cut-off (`frozen_at`) is the moment you finish step 6.

## 1. Calendar sweep (candidate pool)

Check **every** entry in `pipeline/sources.json` → `calendars` for day D+1. Use web search and fetch; when an official page cannot be reached, search for a recent secondary report of its agenda. For each event found, add a row to a working file `work/<D+2>/candidates.md` with: time, place, institution, one-line description, section, source URL, schedule status (`official` / `reported` / `speculative`).

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
- **Rail**: two Czech stories.
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

Then set `frozen_at` to the current time. From here on, do not use any new information.

## 7. Writing

Write the stories into `data/editions/<D+2>.json`, following the format of the existing files exactly. Rules:

- Past tense, as if D+1 has happened. British spelling. Plain, adjective-light newspaper prose.
- Headline states the forecast outcome. Standfirst only for the lead.
- Every number in the text comes from a cited source or is the forecast itself. No invented quotations, ever.
- Each story ends with a `basis` line: what it rests on, and the main risk to the forecast.
- At least one source with a URL per story.
- Never forecast deaths, accidents, disasters, crimes, or the health of named people. No private individuals.
- `diary`: the fixed dates for the coming two weeks, especially Czech, EU and election dates.
- `weather`: Czech regions plus Strasbourg or Brussels when Parliament sits. Shown, not scored.
- `number`: previous edition number plus one. `pilot`: omit.

## 7b. Czech version

English is the default; the Czech edition at `/cs/` is built from Czech text stored in the same file. Follow the format of `data/editions/2026-10-23.json`:

- each story gets a `cs` object with `kicker`, `headline`, `standfirst` (lead only), `body`, `basis`, `table` (if the story has one: `caption` and `rows` in the same order) and `claims` keyed by claim id, each with `label`, `text` and `criterion`;
- the edition gets a top-level `cs` object with `weather`, `sections` (same order, `name` and `dek`) and `diary`.

Translate faithfully into natural Czech newspaper prose (ČTK style): Czech names of institutions, Czech date and number formats (22. října, 2,5 procenta, 386 miliard korun). Do not add, drop or soften anything; probabilities, deadlines and sources are shared and never translated into different numbers.

**House rule: foreign women's surnames are never feminised.** Write them exactly as in the original: Roberta Metsola, Kaja Kallas, Ursula von der Leyen, Taraneh Rahimi, sestry Rahimi, Helen McEntee — never Metsolaová, Kallasová, Rahimiová. The surname stays undeclined; the sentence carries case through the first name, title or function (předsedkyně Metsola, s vysokou představitelkou Kajou Kallas, sester Rahimi). Czech and Slovak women keep their own forms (Schillerová). The validator rejects feminised forms of names that appear in the English text.

## 8. Validate and build

```
node scripts/validate.mjs
node scripts/build.mjs
```

Both must pass with no errors. Fix the data, never the validator, unless the validator itself is wrong; in that case explain the change in the pull request.

## 9. Publish

Commit with the message `Edition No. <n>, dated <D+2>` and push the branch `daily/<D>`, which also carries the morning's results.

- **If D is on or before `approval_required_through`:** open one pull request to `main` titled `<D>: edition No. <n> and results (for approval)`. In the description list the results first (claim, probability, outcome, evidence link), then every new claim with its probability, the three agent numbers, and anything that needed a judgement call. Do not merge. Send the publisher a short message with the pull request link; Netlify will add a deploy preview link to the pull request.
- **Otherwise:** merge the branch into `main` yourself and push, no later than 06:00.

## 10. Report

End the run with a summary: number of candidates found, stories selected, claims and their probabilities, any claims where the ensemble disagreed, and any source in the registry that could not be reached (add a note to `pipeline/sources.json` if a source has moved).
