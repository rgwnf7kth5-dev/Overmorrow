# Resolver's Manual: Scoring Editions

This is the procedure for the first part of the morning run (starting about 05:00, finished by about 05:15). It implements section 6 of [`METHODOLOGY.md`](../METHODOLOGY.md). The resolver must not change anything in `data/editions/`. The edition part ([`EDITOR.md`](EDITOR.md)) follows on the same branch.

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
4. **Missing evidence is not a "no".** If the source has not yet published, leave the claim pending and try again in later runs, even if an old criterion says otherwise. After 72 hours past the deadline, resolve from the best available evidence (two independent outlets) and say so in the note; mark it `ambiguous` if that required interpretation.
5. Record: `claim`, `outcome`, `evidence` (URL), `note` (one sentence on what the evidence shows), `resolved_at` (current time with offset), and:
   - `held`: `true` if the scheduled event behind the claim took place on the day it was expected (from edition No. 5: inside its `event_window`), `false` if it was postponed, interrupted, dropped or moved — required for every claim whose `slip_class` is not `none` (unless void). It records the schedule, not the outcome: a vote that took place and failed is `held: true`.
   - `ambiguous: true` if the criterion had to be interpreted (the reading a neutral observer would take); say how in the note.

Results are append-only. A recorded result is never changed. If one later proves wrong, add an entry to that file's `corrections` list with the claim id, the corrected outcome, the evidence and the date; the scoring uses the correction and the page shows both.

## 3. Learn

For every resolved claim, add one to `own_record.yes` or `own_record.no` of the matching reference class in `pipeline/reference-classes.json`, or create a new class if none fits. Then refit the record-based parameters:

```
node scripts/refdata/slip.mjs        # schedule-slip rates with today's held/slipped results
node scripts/calibrate.mjs           # writes pipeline/calibration.json (weights and bias correction)
```

Commit `pipeline/calibration.json` with the results. If the calibration has just switched on (or its parameters moved by more than 0.1), say so in the report. If a claim was `ambiguous` or `void` because of how it was written, add the cause in one line to `data/postmortems.md` under the heading "Claim design". For misses where the probability was 70% or higher (or 30% or lower for claims that came true), add a one-paragraph post-mortem to `data/postmortems.md`: what we missed and whether it was a wrong base rate, a missed fact, bad claim design, or plain bad luck.

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
node scripts/validate.mjs
node scripts/build.mjs
```

Commit with `Resolve <edition ids>` on the branch and continue with [`EDITOR.md`](EDITOR.md). The results are published together with the new edition (EDITOR.md, step 9). If nothing was due, make no commit and go straight on.
