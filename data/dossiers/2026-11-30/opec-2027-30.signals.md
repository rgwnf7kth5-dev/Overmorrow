# opec-q1-30 — signals
Read 2026-11-27T18:00:34Z–18:01:08Z with `node scripts/markets.mjs search` (METACULUS_TOKEN exported in the shell).

## Markets
- `markets.mjs search "OPEC"` (read 18:00:39Z): Polymarket "Will another country leave OPEC in 2026?" Yes 0.078 (vol ~219k); Kalshi same question 0.07 (vol ~30k); Polymarket "OPEC dissolves in 2026?" 0.017; Kalshi "Will Venezuela agree to or announce an OPEC exit before Jul 1, 2027?" 0.25 (vol 3, no liquidity); Manifold "Will OPEC functionally dissolve by 2028?" 0.43 (vol ~946); Manifold Brent/WTI price thresholds; Metaculus long-range oil questions. None asks about Sunday's production decision.
- `markets.mjs search "OPEC+ production"` (read 18:00:44Z): same set; no match.
- `markets.mjs search "oil output 2027"` (read 18:00:51Z): Iran-blockade, Hormuz-agreement and crude all-time-high markets only. No match.
- Context only (Iraq exit relevance): the "another country leave OPEC in 2026" price (0.07–0.08) bears on the Iraq risk named in the dossier, not on the claim.

Conclusion: no market matches the claim (horizon of production levels decided on 29 Nov) or its alternatives (Q1 unchanged; new baselines).

## Other signals
- No bookmaker odds or published model probabilities found. Rapidan's expectation (maintain targets, postpone major quota decisions) and the Reuters sources are in the dossier as reported expectations, not probabilities.

## Our earlier figures in this case: opec-plus-output-2026
The case ledger (`node scripts/case-ledger.mjs opec-plus-output-2026 --before 2026-11-30 --series opec-q1-30`, run 18:01:55Z) printed no "Our earlier figures" block: "No earlier claim of this case in our editions." (Our separate opec-dec-hold-1 of 2 Nov resolved YES; its figure is not under this case key.)
