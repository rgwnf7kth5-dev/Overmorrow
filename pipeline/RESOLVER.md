# Resolver's Manual: Scoring Editions

For Czech Chamber claims, start with [the PSP desk snapshot](../data/psp/latest.json) and its named vote files. Match the motion in the stenogram to the vote ID and event window. For late proceedings, check the official vote index beyond the snapshot cutoff.

This is the procedure for the first part of the morning run (starting about 05:00, finished by about 05:15). It implements section 6 of [`METHODOLOGY.md`](../METHODOLOGY.md). The resolver must not change anything in `data/editions/`. The edition part ([`EDITOR.md`](EDITOR.md)) follows on the same branch.


**Reading web pages: never use the WebFetch tool** (decision of the publisher, 3 November 2026: WebFetch stops the run for a per-site approval that keeps expiring). Read pages from the shell with `node scripts/read.mjs <url>` (`--links` lists a front page's article links, `--grep "word|other"` keeps matching paragraphs, `--max` sets the length); it prints the title, the publication time and the text. If a site refuses (exit 2: Reuters, AP, FT, Politico, iROZHLAS) or is unreachable (exit 3: some Czech government sites), use WebSearch results or another outlet for the same fact, and record the site in `meta.unreachable`. Tell every agent you start the same thing, in its prompt. Use the script only to read; never submit forms or send data.

## 1. Find what is due

1. Create the branch `daily/<today>` from `main`.
2. For every file in `data/editions/` and its afternoon update in `data/updates/` (added stories carry their own claims), list the claims whose `resolves_by` is in the past and that have no result yet in `data/resolutions/<edition id>.json`.

## 2. Resolve each claim

For each due claim:

1. Read `text`, `criterion` and `resolution_source`. Apply the criterion literally.
2. Check the named primary source first. If it is silent or unreachable, use two independent credible outlets and say so in the note.
3. Choose the outcome:
   - `yes`: the criterion is met;
   - `no`: the criterion is not met, including when the event was postponed, cancelled or happened outside its `event_window` (from edition No. 5);
   - `void`: only if the criterion cannot be applied at all (the source no longer exists, or the claim proves self-contradictory). Explain why in the note.
   - for an interval claim (`kind: "interval"`): `measured` with `value` (the number exactly as published, in the claim's unit), or `void`.
4. **Missing evidence is not a "no".** If the source has not yet published, leave the claim pending and try again in later runs, even if an old criterion says otherwise. After 72 hours past the deadline, resolve from the best available evidence (two independent outlets) and say so in the note; mark it `ambiguous` if that required interpretation. *(v5)* This is binding: `node scripts/validate.mjs --strict-due` fails while any claim is more than `v5.due_hours` past its deadline without a result, and the morning run must use it. On 1 November 25 claims were waiting, the oldest four days; claims that are hard to decide are the ones most likely to have been missed, so a backlog flatters the score.
5. Record: `claim`, `outcome`, `evidence` (URL), `note` (one sentence on what the evidence shows), `resolved_at` (current time with offset), and:
   - `held`: `true` if the scheduled event behind the claim took place on the day it was expected (from edition No. 5: inside its `event_window`), `false` if it was postponed, interrupted, dropped or moved — required for every claim whose `slip_class` is not `none` (unless void). It records the schedule, not the outcome: a vote that took place and failed is `held: true`.
   - `ambiguous: true` if the criterion had to be interpreted (the reading a neutral observer would take); say how in the note.

Results are append-only. A recorded result is never changed. If one later proves wrong, add an entry to that file's `corrections` list with the claim id, the corrected outcome, the evidence and the date; the scoring uses the correction and the page shows both.

### 2a. Second opinion *(from 23 November 2026)*

Before this run, a separate task asks two other vendors' models, each with its own search, for the outcome of every claim falling due and writes `data/external/resolve/<today>.json` (`edition`, `claim`, `provider`, `outcome` yes / no / not_yet / unclear, `evidence`, `note`). Decide every outcome by yourself first, by step 2, without opening that file. Then compare:

1. Where a model answers the opposite (yes against your no, or no against your yes), open its `evidence` page with `node scripts/read.mjs` and your own evidence again, and apply the criterion literally once more. The primary source decides, not the count of opinions. Change your outcome only if the page shows you were wrong.
2. Where you resolved and a model says `not_yet` or `unclear`, check once more that your evidence is the source the criterion names and that it has in fact published.
3. Where you left a claim pending and a model gives an outcome with an `evidence` page, read that page: if it settles the criterion, resolve.
4. Record in the result `"second_opinion": {"agree": ["google"], "disagree": ["openai"], "note": "one sentence on what you found when you looked again"}` for every claim that had opinions. A claim on which you and a model still disagree after the second look is `ambiguous: true` if the difference comes from how the criterion is read.

If the file is missing or empty, go on without it. The models' answers are never evidence and are never quoted in a note.

## 3. Learn

For every resolved claim, add one to `own_record.yes` or `own_record.no` of the matching reference class in `pipeline/reference-classes.json`, or create a new class if none fits. Then refit the record-based parameters:

```
node scripts/refdata/slip.mjs        # schedule-slip rates with today's held/slipped results
node scripts/calibrate.mjs           # writes pipeline/calibration.json (weights and bias correction)
```

Commit `pipeline/calibration.json` with the results. *(v5)* The correction switches on only when it beats the plain ensemble with each claim left out in turn (`gate` in the file); if it has just switched on or off, or its parameters moved by more than 0.1, say so in the report. If a claim was `ambiguous` or `void` because of how it was written, add the cause in one line to `data/postmortems.md` under the heading "Claim design". For misses where the probability was 70% or higher (or 30% or lower for claims that came true), add a one-paragraph post-mortem to `data/postmortems.md`: what we missed and whether it was a wrong base rate, a missed fact, bad claim design, or plain bad luck.

Also run `node scripts/refdata/series.mjs` to add the new number results to the history. *(v6)* Record the first published figure, never a later revision.

## 3a. Audit *(v6)*

`node scripts/audit.mjs sample` lists the results in the fixed sample that have not been audited, without their recorded outcome. Hand that list, and nothing else from the repository, to one separate agent on `config.v6.audit_model`. It must not open the repository or the site; it applies each criterion from the evidence, as in step 2, and answers `yes`, `no`, `measured` with `value`, `void`, or `unresolved` if the evidence does not settle it. Write its answers to `data/audits/<edition>.json` as `{"edition": "…", "entries": [{"claim", "outcome", "value", "evidence", "note", "at", "model"}]}`, without changing them.

`node scripts/audit.mjs report` lists the differences. For each one, read both sources. If the record is wrong, add a correction under step 2; if the audit is wrong, say why in `data/postmortems.md` under "Audit". Audit files are append-only.

## 3b. Coverage: what the paper missed

For the edition whose claims you just resolved (events of the previous day), write `data/coverage/<edition id>.json` by this fixed procedure, version `coverage-1`, so that the choice cannot be bent after the fact:

1. Take the reference lists for that day, in this order: (a) Wikipedia "Portal:Current events" entry for the day; (b) the top stories of Reuters World and AP for the day; (c) for Czech events, the main stories of ČT24 and ČTK for the day.
2. An event is **significant** if it happened on that day and appears in at least two of the lists (for Czech events: in both (c) lists, or in one of them and in (a) or (b)). Sport and financial market prices are excluded, as in the paper.
3. For each significant event record `title`, `scope` (`cz`, `europe`, `world`), `lists` (which lists it appeared in), `source` (one URL), and `status`:
   - `covered`: the edition had a story on it (`story`: its id);
   - `dropped`: it is in the planning file's `dropped` list or was a planned story the morning cut (`note`: the recorded reason);
   - `missed`: it was nowhere in the planning file (`note`: was it announced in advance? where should we have seen it?).
4. A `missed` event that was announced in advance is a sweep gap: add the source to `pipeline/sources.json` and a line to `data/postmortems.md` under "Coverage".

```json
{ "edition": "2026-10-26", "checked_at": "…", "procedure": "coverage-1",
  "events": [ { "title": "…", "scope": "world", "lists": ["wikipedia", "reuters"], "source": "https://…", "status": "missed", "note": "…" } ] }
```

## 4. Validate, build, publish

```
node scripts/validate.mjs --strict-due
node scripts/build.mjs
```

Commit with `Resolve <edition ids>` on the branch and continue with [`EDITOR.md`](EDITOR.md). The results are published together with the new edition (EDITOR.md, step 9). If nothing was due, make no commit and go straight on.
