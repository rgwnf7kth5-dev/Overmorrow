# ca-boc-hike-28 — signals

`node scripts/markets.mjs search "Bank of Canada October"`, read 2026-10-26T18:20Z:
- Polymarket "Will the Bank of Canada increase the target for the overnight rate by 25 bps at the October interest rate announcement?" — Yes 0.818 — volume $163k, liquidity $5.3k — https://polymarket.com/event/bank-of-canada-decision-in-october-20260715203359314 — match for +25 bp; our claim also counts +50 bp (priced 0.0005). No change 0.173 (vol $187k, liq $24.6k); cuts 0.0005 each. Implied P(hike) ≈ 0.82. Note: market "closes" 2026-10-28T00:00Z, before the announcement (trading end, settles on the announcement).
- Kalshi KXCBDECISIONCANADA-26OCT: hike 0.82 / hold 0.18 (from sweep world.json, 26 Oct; not re-read) — https://kalshi.com/markets/kxcbdecisioncanada — match.
- Swaps/OIS path (from articles, facts about pricing): 2 Oct ~74% hold (financecalendar via sweep); 7 Oct about one in three for a hike (mpamag); 13 Oct ~25% after jobs (LSEG via wealthprofessional; TD's Hencic 27%); 19 Oct hike pricing ~9 bp → ~18 bp after Macklem (Scotiabank), 18% → ~32% after surveys (cryptobriefing); 20 Oct swaps 78% for 25 bp, up from 60% (BBH/FXStreet) — while wealthprofessional (20 Oct) said money markets did not expect a move on 28 Oct (conflicting). Since then markets ~0.82 (26 Oct).
- Precedent signal: 26 Jan 2022, markets priced ~70% for a hike and the BoC held (bloombergquint page).
- No forecast-board question for BoC; no bookmaker line; no published model.

Full URLs of dossier sources whose slugs carry a banned word:
- https://www.wealthprofessional.ca/news/industry-news/job-losses-push-october-bank-of-canada-hike-odds-down-to-25/393757 (13 Oct 2026, jobs −68k; LSEG ~25% for a hike)
- https://www.fxstreet.com/news/canadian-dollar-rate-hike-odds-rise-as-energy-supports-economy-commerzbank-202610201641 (Commerzbank, 20 Oct)
- https://cryptobriefing.com/bank-of-canada-survey-raises-odds-of-25bps-rate-hike-consideration/ (19 Oct)
