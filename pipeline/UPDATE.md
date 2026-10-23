# Afternoon Update Manual

This is the procedure for the afternoon run on day **D**. It updates the edition published that morning (dated **D+2**, forecasting **D+1**) with what has become known since the morning freeze. It implements [`METHODOLOGY.md`](../METHODOLOGY.md), section 1 and 4.8. Start 12:20, publish by **13:30** (Europe/Paris).

The morning file in `data/editions/` is never changed. Everything this run produces goes into `data/updates/<D+2>.json`.

## 0. Setup

1. Fetch `main`. If today's edition (dated D+2) is in `main`, branch `update/<D>` from `main`. If it is not there yet because the morning pull request is still awaiting approval, branch from `daily/<D>` instead, so the update sits on top of it.
2. Read the morning edition in full, including every claim's `rationale`. Note its `frozen_at`: only information published after that moment is new.

## 1. What changed since the morning

1. **Calendars:** re-check the official sources behind every morning story for D+1 (agenda changes, postponements, cancellations, new items).
2. **Running stories:** read reporting published since the morning freeze from at least two outlets for each story in the edition.
3. **New events:** look for events announced since the morning for D+1 that would have scored highly in the morning selection (EDITOR.md, step 3).

Write the findings to `work/<D+2>/afternoon.md`, each with time of publication and link.

## 2. Revising morning claims

For each morning claim with a material new fact:

1. Run the full ensemble again (EDITOR.md, steps 4 and 5): the five independent forecasters on their models from `config.ensemble_models`, combined as in step 4 (including `pipeline/calibration.json` when active), and the red team, each given the new fact with its link. Interval claims are not revised.
2. Revise the claim only if the new combined probability differs from the morning figure by at least 5 percentage points. Small drift is noise; the morning figure stands.
3. Record the revision with `claim`, `probability`, `reason` (one sentence in English naming the new fact), `reason_cs` (the same in Czech, house rules apply), and `sources` (at least one URL).
4. Exclusive sets must still sum to 100% after revision: revise every member of the set together.

Do not revise a claim because of opinion or commentary alone. Do not touch headlines or body text of morning stories; the revision line under the likelihood bar is the only change readers see.

## 3. Adding stories

Add at most three stories, only for events newly announced for D+1 that clearly merit a place. Each follows the full morning protocol: claim design (with `slip_class` and `publishes`), ensemble, red team, English text and Czech version (EDITOR.md, steps 3–6c). Put them in `added`, with `size` `quarter` or `half`. If you add stories, write a one-line `summary` and `summary_cs` of the update.

## 4. Freeze, validate, publish

1. Set `frozen_at` when the red team is done.
2. If nothing was revised or added, make no commit and report "Beze změn".
3. Run `node scripts/validate.mjs` and `node scripts/build.mjs`; both must pass.
4. Publish according to `pipeline/config.json`: during the approval period open a pull request titled `<D>: afternoon update (for approval)` listing each revision (morning → afternoon, reason, source) and each added claim with its three agent numbers; afterwards merge to `main` by 13:30. Each revision records the five new agent numbers in its `reason` or in the pull request.

## File format

```
{
  "edition": "2026-10-24",
  "frozen_at": "2026-10-22T13:10:00+02:00",
  "summary": "One line on what the update adds.",
  "summary_cs": "Totéž česky.",
  "revisions": [
    { "claim": "claim-id", "probability": 0.72, "reason": "…", "reason_cs": "…", "sources": [{ "title": "…", "url": "https://…" }] }
  ],
  "added": [ { …story in the same format as the morning edition, including cs… } ]
}
```
