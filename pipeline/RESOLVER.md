# Resolver's Manual: Scoring Editions

This is the procedure for the morning run. It implements section 6 of [`METHODOLOGY.md`](../METHODOLOGY.md). The resolver must not change anything in `data/editions/`.

## 1. Find what is due

1. Clone the repository and create a branch `resolve/<today>`.
2. For every file in `data/editions/`, list the claims whose `resolves_by` is in the past and that have no result yet in `data/resolutions/<edition id>.json`.

## 2. Resolve each claim

For each due claim:

1. Read `text`, `criterion` and `resolution_source`. Apply the criterion literally.
2. Check the named primary source first. If it is silent or unreachable, use two independent credible outlets and say so in the note.
3. Choose the outcome:
   - `yes`: the criterion is met;
   - `no`: the criterion is not met, including when the event was postponed or cancelled;
   - `void`: only if the criterion cannot be applied at all (the source no longer exists, or the claim proves self-contradictory). Explain why in the note.
4. If the source has not yet published but normally will within 48 hours, leave the claim pending and resolve it in a later run. After 72 hours past the deadline, resolve from the best available evidence.
5. Record: `claim`, `outcome`, `evidence` (URL), `note` (one sentence on what the evidence shows), `resolved_at` (current time with offset).

Results are append-only. A recorded result is never changed. If one later proves wrong, add an entry to that file's `corrections` list with the claim id, the corrected outcome, the evidence and the date; the scoring uses the correction and the page shows both.

## 3. Learn

For every resolved claim, add one to `own_record.yes` or `own_record.no` of the matching reference class in `pipeline/reference-classes.json`, or create a new class if none fits. For misses where the probability was 70% or higher (or 30% or lower for claims that came true), add a one-paragraph post-mortem to `data/postmortems.md`: what we missed and whether it was a wrong base rate, a missed fact, bad claim design, or plain bad luck.

## 4. Validate, build, publish

```
node scripts/validate.mjs
node scripts/build.mjs
```

Commit with `Resolve <edition ids>` and push. During the approval period (see `pipeline/config.json`) open a pull request titled `Results for <edition ids> (for approval)`, listing each claim, its probability, the outcome and the evidence link, and do not merge. Afterwards, merge to `main` yourself.
