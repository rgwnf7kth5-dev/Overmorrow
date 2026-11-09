# cz-csg-revenue-12 (interval)
- **Claim:** Czechoslovak Group (CSG N.V.) reports revenue for the first nine months of 2026 of … EUR billion in its 9M 2026 trading update on 11 November 2026.
- **Criterion:** The group revenue for January–September 2026 stated in CSG's 9M 2026 trading update published on 11 Nov 2026 (csg.com / investors.csg.com, or as reported by ČTK or Reuters), in EUR billion. If the release states only third-quarter revenue, 9M = €3,251m (H1 2026 as reported) plus the stated Q3 figure. Void if no update is published on 11 Nov.
- **Deadline:** 2026-11-11T23:59+01:00
- **Written at:** 2026-11-09T18:10Z

## Schedule
- CSG IR homepage, Financial calendar: "UPCOMING EVENT 11 NOV ... 9M 2026 Trading Update (Quiet Period: from 12 October 2026)" — https://investors.csg.com/en (read 2026-11-09T17:54Z).
- Presentation/webcast set for 11 Nov 2026 at 10:00 CET: "Der Kapitalmarkttermin ist für den 11. November 2026 um 10:00 Uhr MEZ angesetzt" — finanztrends.de https://www.finanztrends.de/news/csg-aktie-trading-update-fuer-november-angesetzt/ (published 2026-10-20, read 2026-11-09T17:54Z). (The article calls it a Q2 update in one sentence, apparently an error; the IR calendar says 9M.)
- Release-time pattern: Q1 2026 trading statement page time 2026-05-20 05:59:55Z (07:59 CEST) — https://csg.com/en/news/csg-q1-2026-trading-statement; H1 2026 results statement 2026-08-07 06:00Z (08:00 CEST) — https://csg.com/en/news/csg-h1-2026-results-statement (both read 2026-11-09T17:54-17:56Z). So expect early morning on 11 Nov.
- J&T Banka weekly preview: "Společnost CSG zveřejní ve středu 11. 11. tzv. trading update." — [Czech financial portal article 881020; full URL in the story file claims/cz-csg.json sources] (published 2026-11-07 15:04, read 2026-11-09T17:54Z).

## Facts
- H1 2026: revenue €3,251m (+17.2% y/y), Defence Systems +27.0%; operating EBIT €784m, margin 24.1%; "All FY 2026 and medium-term guidance reaffirmed" — CSG H1 2026 Results Statement (above).
- Q1 2026: revenue €1,544m (+13.8%), operating EBIT €372m; "FY 2026 and medium-term guidance reaffirmed" — CSG Q1 2026 Trading Statement (above). The Q1 statement gave three-month figures, so the 9M update is expected to give revenue.
- FY2026 guidance: revenue €7.4–7.6bn, operating EBIT margin 24–25% — portal article 870664, 7 Aug [Czech financial portal article 870664; full URL in the story file claims/cz-csg.json sources] (published 2026-08-07 09:44, read 2026-11-09T17:55Z).
- FY2025 revenue €6.7bn, adjusted operating EBIT €1.6bn — investors.csg.com (above).
- Backlog and pipeline under negotiation up to €46bn (H1) — H1 statement.
- J&T Banka preview: "Očekáváme, že za 9M 2026 rostly tržby o 16,3 % r/r na 5,21 mld. EUR ... EBIT ... 1,26 mld. EUR (+18,3 % r/r) při EBIT marži 24,2 %. ... CSG potvrdí svůj výhled ... 7,4 – 7,6 mld. EUR"; backlog may rise only modestly given fewer new orders in the last quarter — J&T weekly (above).
- Implied Q3 2026 revenue in the J&T figure: 5.21 − 3.251 = €1.96bn (own arithmetic); implied 9M 2025 base 5.21/1.163 ≈ €4.48bn (own arithmetic).
- Context: arms stocks sold off after the US midterms (J&T weekly); SPD MPs float a sector tax on arms makers (Seznam Zprávy 9 Nov, https://www.seznamzpravy.cz/clanek/domaci-politika-vlada-resi-koho-zdani-jeji-poslanci-se-neshodnou-320073).

## Consensus and surprise size
- Consensus: €5.21bn (J&T Banka, single house, 7 Nov). No multi-analyst consensus for 9M found tonight.
- `node scripts/refdata/series.mjs scale csg-9m-revenue` → n=0, pooled_factor 1.235 (no series).
- Published surprise history (basis "published"):
  - Q1 2026: actual €1.544bn vs market estimate €1.42bn (+0.124) and J&T €1.43bn — [Czech financial portal article 859857; full URL in the story file claims/cz-csg.json sources] (published 2026-05-20 09:19, read 2026-11-09T17:56Z) "nad naším odhadem 1,43 mld. a nad odhadem trhu 1,42 mld."
  - H1 2026: actual €3.251bn vs market €3.14bn (+0.111) and J&T €3.10bn — portal article 870664 (above) "nad odhadem trhu 3,14 mld. i naším odhadem 3,10 mld. EUR"; Börse Global https://www.boerse-global.de/csg-aktie-h1-umsatz-325-milliarden-uebertrifft-erwartung/818047 (read 2026-11-09T17:55Z) "im Schnitt lediglich mit 3,14 Milliarden Euro gerechnet". Q2 alone vs Patria €1.61bn: actual €1.71bn — portal article 870649.
  - Since H1 is known, the 9M surprise is the Q3 surprise; the two quarterly surprises vs market consensus were +0.124 and +0.111 (rms 0.118, own arithmetic). Scale used: €0.12bn.
- `node scripts/refdata/models.mjs quantiles 5.21 0.12 1.6` → q10 4.964, q50 5.21, q90 5.456 (q90−q10 = 0.49 = 4.1 scales).
- Note: both surprises were beats (n=2); no inference on direction drawn here.

## Base rate
- No class. CSG has reported on its announced date for Q1 and H1 2026 (2 of 2, sources above).

## Schedule slip
- `node scripts/refdata/slip.mjs company-event` → 0.008 (own 0/15, prior 0.02) [estimate]. Date is on the IR calendar with a quiet period; no sign of a move.

## Risks
- Single-house consensus; the market consensus may differ (in Q1 and H1 the market figure was €0.01–0.04bn above J&T's).
- Revenue definition (reported vs organic; currency effects with USD weakness) — the claim uses the reported group revenue.
- Release may give Q3 only; criterion handles that.

## Sources
- https://investors.csg.com/en
- https://www.finanztrends.de/news/csg-aktie-trading-update-fuer-november-angesetzt/
- https://csg.com/en/news/csg-q1-2026-trading-statement
- https://csg.com/en/news/csg-h1-2026-results-statement
- [Czech financial portal article 881020; full URL in the story file claims/cz-csg.json sources]
- [Czech financial portal article 870664; full URL in the story file claims/cz-csg.json sources]
- [Czech financial portal article 870649; full URL in the story file claims/cz-csg.json sources]
- [Czech financial portal article 859857; full URL in the story file claims/cz-csg.json sources]
- https://www.boerse-global.de/csg-aktie-h1-umsatz-325-milliarden-uebertrifft-erwartung/818047
