# Afternoon Update Manual

This is the procedure for the afternoon run on day **D**. It updates the edition published that morning (dated **D+2**, forecasting **D+1**) with what has become known since the morning freeze. It implements [`METHODOLOGY.md`](../METHODOLOGY.md), section 1 and 4.8. Start 12:20, publish by **13:30** (Europe/Paris). From edition No. 5 the rules of method version 3 apply.

The morning file in `data/editions/` is never changed. Everything this run produces goes into `data/updates/<D+2>.json`.


**Reading web pages: never use the WebFetch tool** (decision of the publisher, 3 November 2026: WebFetch stops the run for a per-site approval that keeps expiring). Read pages from the shell with `node scripts/read.mjs <url>` (`--links` lists a front page's article links, `--grep "word|other"` keeps matching paragraphs, `--max` sets the length); it prints the title, the publication time and the text. If a site refuses (exit 2: Reuters, AP, FT, Politico, iROZHLAS) or is unreachable (exit 3: some Czech government sites), use WebSearch results or another outlet for the same fact, and record the site in `meta.unreachable`. Tell every agent you start the same thing, in its prompt. Use the script only to read; never submit forms or send data.

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

1. Run the full ensemble again (EDITOR.md, steps 4 and 5): the five independent forecasters on their models from `config.ensemble_models`, combined as in step 4 (including `pipeline/calibration.json` when active), and the red team, each given the new fact with its link. Record every agent as in EDITOR.md step 4 (model, time, inputs). *(v5)* The revised figure follows EDITOR.md step 4b like a morning one: poll model for elections, market search on record, research when the forecasters span more than 15 points.
2. *(v3)* **Store every recomputation** in `checks` (claim, `at`, `agents`, `combined`, and the market price read at the same time if one exists), whatever its size.
3. Publish a revision only if the new combined probability differs from the morning figure by at least `v3.revision_min_pp` (5 points) **or** `v3.revision_min_logit` (0.5 in log-odds; 96% → 99% qualifies). Below that the morning figure stands for readers, but the check is on record.
4. *(v3)* Interval claims may be revised (`quantiles` instead of `probability`); revise the binary claims derived from them in the same update so they stay consistent.
5. *(v6)* Set `kind`: `confirmation` if the deciding news had already been reported when you revised (the vote took place, the cabinet is reported to have approved, and only the official record is missing), otherwise `forecast`. In doubt, `confirmation`. The forecast score leaves confirmations out.
5a. Record the revision with `claim`, `probability`, `reason` (one sentence in English naming the new fact), `reason_cs` (the same in Czech, house rules apply), and `sources` (at least one URL).
6. Exclusive sets must still sum to 100% after revision (or at most 100% for a set marked `set_exhaustive: false`): revise every member of the set together.

Do not revise a claim because of opinion or commentary alone. Do not touch headlines or body text of morning stories; the revision line under the likelihood bar is the only change readers see.

### 2a. Guards against false revisions *(publisher's decision, 12 November 2026)*

On 12 November the afternoon run cut `nvidia-huang-out-14` from 72% to 49% because the board's overnight meeting had ended without an announcement and a prediction market had fallen; Nvidia announced Huang's departure two hours after the freeze. The revision rested on the absence of news and on a market move that all five forecasters followed. These rules apply from that date.

1. **Silence is not a new fact until the window is used up.** For a claim that something is announced, decided or done by a deadline, "it has not happened yet" counts as a material new fact only if (a) the actor itself named a time for the decision and that time has passed, or (b) at least half of the time from the morning `frozen_at` to the end of the claim's `event_window` has passed. Otherwise there is no revision on that ground (a check may still be recorded). When silence is used, the forecasters state the likelihood ratio behind it: the chance of no news so far *if* the claim will come true, under a stated timing assumption, against the chance if it will not (which is 1). The revision may not move further than that ratio allows. Example: at 12:30 on 12 November about 7 of the 51 hours were gone, all of them at night in California; even if a quarter of the YES cases had been expected straight after the overnight meeting, P(no news yet | YES) ≈ 0.75, which takes 72% to about 66%, not 49%.
2. **A market move is a signal, not a fact.** (a) Market prices go only into the signals file, never into the facts file or brief that forecasters read before their blind estimate. (b) A revision whose only new input since the morning is a market move is not published; record the check. A market can set the size of a revision only when a new fact, reported by at least two independent outlets or by a primary source, also supports it. (c) The anchor writes down how the market's rules differ from the claim's criterion (what counts as YES, deadline, time zone) before using the price. (d) If every forecaster's final reason rests mainly on the same market, say so in the check's `disagreement.note`: the five are then one opinion, not five.
3. **The red team argues both ways on a revision.** For every revision, the red team gives the strongest case that the morning figure was right and the revision is a mistake, then the strongest case that the revision does not go far enough, and says which it finds stronger and why. If the case for the morning figure rests on facts the forecasters did not weigh, the claim goes back to step 2.1. Record both cases in `red_team`.

## 3. Adding stories

Add at most three stories, only for events newly announced for D+1 that clearly merit a place and happen by 23:59 local time on D+1. Each follows the full morning protocol: claim design (with `slip_class` and `publishes`), ensemble, red team, English text and Czech version (EDITOR.md, steps 3–6c). Put them in `added`, with `size` `quarter` or `half`. If you add stories, write a one-line `summary` and `summary_cs` of the update.

## 4. Freeze, validate, publish

1. Set `frozen_at` when the red team is done.
2. If nothing was recomputed, make no commit and report "Beze změn". If figures were recomputed but none crossed the display threshold, commit the update file with `checks` only (readers see no change) and report "Beze změn pro čtenáře, N přepočtů".
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
    { "claim": "claim-id", "probability": 0.72, "reason": "…", "reason_cs": "…", "sources": [{ "title": "…", "url": "https://…" }] },
    { "claim": "interval-claim-id", "quantiles": {"q10": 47.5, "q50": 49.3, "q90": 51.0}, "reason": "…", "reason_cs": "…", "sources": [ … ] }
  ],
  "checks": [
    { "claim": "claim-id", "at": "2026-10-25T12:55:00+01:00", "agents": [ …five entries as in EDITOR.md step 4… ], "combined": 0.71,
      "market": {"p": 0.70, "read_at": "…", "url": "…"} }
  ],
  "added": [ { …story in the same format as the morning edition, including cs… } ]
}
```
