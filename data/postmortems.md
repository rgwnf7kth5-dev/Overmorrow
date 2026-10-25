# Post-mortems

One paragraph for each confident miss: a claim at 70% or more that failed, or 30% or less that came true. Newest first.


## 2026-10-23 · israel-no-majority (80%, failed)

We said no poll dated 22 October would give either Israeli bloc 61 seats; Channel 14's final pre-blackout poll (Direct Polls/Filber) gave the 37th-government parties 62, and Wikipedia's table highlights it as a majority. Channel 14 had already shown the government bloc at 61 in earlier October polls listed in the same table, and it publishes almost daily, so the claim effectively asked whether its 22 October poll would fall below 61. Diagnosis: wrong base rate, from a missed fact: the forecast looked at the average of pollsters, where neither bloc reaches 61, instead of at the most favourable house, which is the one that decides a "no poll gives either bloc" claim. Rule: for "any poll" claims, set the probability from the outlier pollster's recent figures, not from the polling average.

## 2026-10-24 · cz-benefits-stalled (75%, failed)

We said the unemployment-benefit cut would stay stuck in the Chamber on 23 October; in fact the government had attached the cut to the Labour Code amendment (tisk 300), which passed its first reading on 20 October (motion to reject failed 43–78). The story rested on a ČT24 article of 8 October and nobody re-checked the Chamber's own record before freezing. Diagnosis: missed fact, compounded by bad claim design — the criterion spoke of a "benefit bill" that did not exist as a separate print, so the resolver had to interpret it. Rule: Chamber claims must name the print number (tisk) and be checked against psp.cz on the morning of the freeze.

## Claim design

- 2026-10-24 · cz-benefits-stalled: criterion named a stand-alone bill that did not exist; name the print (tisk) number.
- 2026-10-24 · france-unions-out: "formally call members to join" had to be read against a statement condemning the bans without a call; define what counts as a call (a published call to the specific day).
- 2026-10-24 · serbia-sns-ahead: criterion fixed a tracker snapshot date ("as of 23 October") that the tracker does not archive; use a dated publication instead.

## 2026-10-23 · sakharov-icc (15%, came true)

The Sakharov Prize went to the International Criminal Court and its officials, the finalist we rated least likely. We leaned on the Conference of Presidents arithmetic, assuming the EPP and ECR would carry Lissu, and gave too little weight to the chance that group leaders would converge on a laureate that defended international institutions under pressure. Diagnosis: wrong base rate. The class "laureate is the EPP-backed finalist" was untested and built from a handful of recent years; with this result it stands at 0 of 1 in our own record, and future Sakharov forecasts should start closer to an even split among finalists until the record grows. The pilot edition also lacked the three-agent ensemble that might have challenged the assumption.
