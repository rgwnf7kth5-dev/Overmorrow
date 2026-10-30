# bg-turnout-above-r1-1

- **Claim:** Turnout in the Bulgarian presidential runoff on 1 November 2026 is higher than the 22.98% of the first round.
- **Criterion:** YES if CIK's headline turnout for the 1 Nov 2026 runoff is above 22.98%. Preliminary results at or near 100% of protocols count, as do final results. NO if it is 22.98% or lower, or if the runoff is not held on 1 Nov.
- **Derived from:** bg-turnout-1 (event ">", x = 22.98). All facts are in data/dossiers/2026-11-02/bg-turnout-1.md.
- **Event window:** 2026-11-01T07:00:00+02:00 to 2026-11-01T20:00:00+02:00 (Europe/Sofia)
- **Written at:** 2026-10-30T18:27Z

## Schedule
- The runoff is on Sun 1 Nov, with the same sections and machines as round 1. See bg-turnout-1.

## Facts
- **Threshold problem.** CIK's official round-1 turnout is **22.98%**, not 22.93%.
  - CIK spokesperson: "Избирателната активност на 25 октомври е била 22,98%" — https://www.pbnovini.com/balgariya/2026/okonchatelno-ot-tsik-22-98-izbiratelna-aktivnost-samo-31-spreli-mashini-i-bez-novi-zayavleniya-za-balotazha/ (published 2026-10-28 11:42Z, read ~2026-10-30T18:08Z).
  - Sofia Globe (26 Oct) and Wikipedia also give 22.98%. Our computation from the CIK table: 1,524,988 / 6,637,238 = 22.976%.
  - The 22.93% figure comes from riotimesonline (27 Oct).
  - A runoff result between 22.94% and 22.98% would resolve YES under the claim but would not exceed the official round-1 figure.
- **History.** In each of the 2006, 2011, 2016 and 2021 runoffs, turnout fell below round 1, by 1.49 to 5.84 pp. Runoff ÷ round 1 ranged 0.86–0.97 (bg-turnout-1).
- **Comparability.** The 2011 and 2021 first rounds were combined with local and parliamentary votes respectively. The 2026 first round was stand-alone in the sources read.
- **Mobilisation signals** (bg-turnout-1):
  - The race is close (2.81 points).
  - Borissov, Kostov, Denkov, Plevneliev and Terziev endorsed Gyurov on 30 Oct.
  - Kostadinov expects some Revival voters to abstain.

## Base rate
- **Bulgarian presidential runoffs with turnout above round 1:** 0 of 4 (2006–2021, Wikipedia infoboxes).
- **Pipeline class `turnout-above-previous-election`:** base 0.5, own record 1/0. It is a loose fit; the history above is the closer class.

## Schedule slip
- Slip class `election-held`: rate **0.005** (prior 0.01, own record 0/19) [estimate].

## Risks
- **Toward NO:** the historic pattern of runoff decline; record apathy; a share of Revival voters abstaining.
- **Toward YES:** a close race, new endorsements, and polarised stakes. Round 1 had no concurrent election inflating it. A small absolute rise of about 0.1 pp (about 3,000 voters) is enough to clear 22.93%.
- **Resolution:** the 22.93% threshold sits 0.05 pp below CIK's official figure. Proposed fix: use 22.98% ("higher than the round-1 turnout of 22.98% reported by CIK"), or keep 22.93% and say so explicitly in the text.

## Sources
- See data/dossiers/2026-11-02/bg-turnout-1.md (all pages listed there).
- https://www.pbnovini.com/balgariya/2026/okonchatelno-ot-tsik-22-98-izbiratelna-aktivnost-samo-31-spreli-mashini-i-bez-novi-zayavleniya-za-balotazha/

## Desk note (2026-10-30T18:20Z)
- The claim threshold was changed to CIK's official round-1 turnout of 22.98% before any forecast was made, following the threshold problem above. Lines 13–35 above were written against the earlier 22.93% draft.
