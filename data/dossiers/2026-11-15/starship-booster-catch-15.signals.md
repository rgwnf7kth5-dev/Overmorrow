# starship-booster-catch-15 — signals

Market search at 2026-11-12T18:06–18:07Z: `node scripts/markets.mjs search starship flight 15`, `node scripts/markets.mjs search starship catch`.

Polymarket event "SpaceX Starship Flight Test 15?" (https://polymarket.com/event/spacex-starship-flight-test-15), read 2026-11-12T18:06:51Z:
- Launch by November 30, 2026: Yes 0.947 (vol ~$20.9k)
- Launch by November 15, 2026: Yes 0.565 (vol ~$12.7k) — deadline is end of 15 Nov (timezone per rules, not checked), i.e. about a day LONGER than our window (ours ends 23:59 CST Sat 14 Nov = 05:59 UTC Sun 15 Nov). Near-match, not exact.
- Chopsticks catch the Super Heavy booster (Flight 15, no date limit): Yes 0.81 (vol ~$8.1k) — no deadline, effectively conditional on the flight happening; not a match for our window claim.
- Chopsticks catch the Starship (ship) (no date limit): Yes 0.395 (vol ~$11.9k) — no deadline; not a match.
- Super Heavy booster explodes: Yes 0.26 (vol ~$6.2k); Ship successful splashdown: Yes 0.295 (vol ~$2.2k).
Manifold (low volume): ship catch attempt executed 0.70 (vol ~240); booster catch attempt executed 0.85 (vol ~160); "upper stage caught on first attempt" 0.63 (vol ~2.9k); booster explodes 0.21 (vol ~450); payload deployed 0.91 (vol ~320).
Other people's estimates: Elon Musk (Oct 2026 earnings call) put a ship catch at "more likely than not"; Wikipedia records his estimate as 50–60% for the first ship-catch attempt (https://en.wikipedia.org/wiki/SpaceX_Starship_flight_tests). Drive Tesla: "Musk put the odds above even money" (https://driveteslacanada.ca/news/starship-flight-15-nov-13-catch/).
No bookmaker odds found in news.

Verdict: No matching market: booster-catch market (0.81) has no date limit and implicitly assumes the flight happens; multiply by a launch-in-window estimate to compare.
