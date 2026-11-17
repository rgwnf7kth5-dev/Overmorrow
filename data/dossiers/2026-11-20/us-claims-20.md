# us-claims-20
- **Claim (interval):** The US Labor Department's release of Thu 19 Nov 2026 puts seasonally adjusted initial jobless claims for the week ending 14 November 2026 at … thousand.
- **Criterion:** Value = seasonally adjusted initial claims (advance figure) for the week ending 14 Nov 2026, in thousands, as first published by the US Department of Labor (ETA "Unemployment Insurance Weekly Claims" news release) on 19 Nov 2026 at 08:30 ET. Later revisions (e.g. in the 25 Nov release) do not count. Void if the release does not take place on 19 Nov 2026 (ET); pending if published but not yet readable.
- **Event window:** 2026-11-19T00:00-05:00 – 2026-11-19T23:59-05:00 (America/New_York)
- **Evidence expected:** DOL release 08:30 ET (14:30 CET); evidence_at 2026-11-19T14:35+01:00
- **Deadline (resolves by):** 2026-11-21T05:00+01:00
- **Written at:** 2026-11-17T18:10Z

## Schedule
- Admirals preview: "The next weekly jobless claims report is due on Thursday 19 November 2026 at 08:30 ET ... It covers the week ending 14 November." The following report moves to Wed 25 Nov (Thanksgiving) — https://admiralmarkets.com/education/articles/fundamental-analysys/initial-jobless-claims-preview-19-november-2026 (published 2026-11-14T19:28Z, read 2026-11-17T17:53Z).
- Sigmanomics: "The next release is scheduled for November 19, 2026." — https://sigmanomics.com/us/initial-jobless-claims (published 2026-11-12T13:30Z, read 2026-11-17T17:53Z).
- dpa-AFX calendar: 14:30 CET US jobless claims on 19 Nov (onvista Wochenvorschau, via sweep). The DOL schedule page itself was not opened.

## Facts
- Last print (week ending 7 Nov, first release 12 Nov): 200k, +9k from revised 191k (first print 189k); economists expected 195k; NSA claims 206,982 — Admirals preview (above) "Claims rose to 200,000 in the week ending 7 November ... Economists had expected 195,000"; Sigmanomics "This beat the market consensus of 195 thousand by 5 thousand" (above).
- Range: "Claims have stayed in a narrow band of roughly 189,000 to 212,000 since mid-July"; "Every week since 12 September has stayed at or below 200,000"; no week above 230k in 2026 (AP via AJC) — Admirals preview.
- Continuing claims 1.697m — https://analysisofficial.substack.com/p/global-macro-week-ahead-nov-1620 (published 2026-11-15T21:19Z, read 2026-11-17T17:44Z).
- Labour backdrop: October payrolls +165k, unemployment 4.1% — same substack (sweep).

## Consensus
- 197k: "The consensus is for initial claims to decrease to 197 thousand from 200 thousand last week." — https://economicweekly.substack.com/p/economic-weekly-november-13-2026 (published 2026-11-13T18:07Z, read 2026-11-17T17:44Z).
- 200k: "Claims are expected at 200,000 after 200,000 the week before" (Trading Economics consensus) — analysisofficial substack (above); Admirals "A provisional forecast of 200,000 is circulating" (not yet a survey as of 13 Nov).
- Used: 198.5k = midpoint of the two published figures (range 197–200k). No Bloomberg/Reuters survey median was readable.

## Surprise scale
- No claims series in pipeline/reference-data/series.json; no published standard deviation of claims surprises was found.
- Typical surprise from six sourced 2026 weeks (actual first print minus consensus):
  - Aug 8: 209k vs 202k → +7 — https://www.newsquawk.com/headlines/us-initial-jobless-claims-aug08-209-vs-exp-202-prev-200 (published 2026-08-13T12:50Z, read 2026-11-17T17:53Z)
  - Oct 3: 197k vs 200k → −3 — https://www.newsquawk.com/headlines/us-initial-jobless-claims-oct03-197k-vs-exp-200k-prev-199k (published 2026-10-08T12:50Z, read 2026-11-17T17:53Z)
  - Oct 10: 199k vs 200k → −1 — https://www.newsquawk.com/headlines/us-initial-jobless-claims-oct10-1990k-vs-exp-200k-prev-1980k (published 2026-10-15T12:50Z, read 2026-11-17T17:53Z)
  - Oct 17: 194k vs 200k → −6 — https://www.newsquawk.com/headlines/us-initial-jobless-claims-oct17-194k-vs-exp-200k-prev-200k (published 2026-10-22T12:50Z, read 2026-11-17T17:53Z)
  - Oct 24: 194k vs 199k → −5 — https://www.newsquawk.com/headlines/us-initial-jobless-claims-oct24-1940k-vs-exp-199k-prev-1950k (published 2026-10-29T12:50Z, read 2026-11-17T17:53Z)
  - Nov 7: 200k vs 195k → +5 — Sigmanomics and Admirals (above)
  - (Oct 31 week, first print 189k: consensus not found; not used.)
- RMS of the six surprises = 4.9k (mean absolute 4.5k). Pooled basis: scale = 1.45 × 4.9k = 7.1k (series.json pooled rms_in_scales 1.45, n = 41). scale_basis: pooled. Small sample (n = 6) in a calm period; the series is known to be noisier around holidays (Thanksgiving falls in the following week, not this one).
- `node scripts/refdata/models.mjs quantiles 198.5 7.1 1.6` → q10 183.9, q50 198.5, q90 213.1 (thousand).

## Schedule slip
- slip_class: stats-release. `node scripts/refdata/slip.mjs stats-release` → prior 0.01, own 0/56, rate 0.003 [estimate]. No sign of a move.

## Risks
- Seasonal adjustment around Veterans Day (11 Nov) falls in the reference week; holiday weeks can produce larger seasonal-factor misses.
- Any state-level reporting problem or estimate for a state (DOL flags) can shift the print.
- The consensus itself is uncertain (197 vs 200k).

## Sources
- https://admiralmarkets.com/education/articles/fundamental-analysys/initial-jobless-claims-preview-19-november-2026
- https://sigmanomics.com/us/initial-jobless-claims
- https://economicweekly.substack.com/p/economic-weekly-november-13-2026
- https://analysisofficial.substack.com/p/global-macro-week-ahead-nov-1620
- Newsquawk headlines listed above (five pages)
