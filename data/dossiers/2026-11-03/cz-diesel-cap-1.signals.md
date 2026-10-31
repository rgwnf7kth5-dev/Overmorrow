# cz-diesel-cap-1 — signals

Read 2026-10-31T18:11Z with `node scripts/markets.mjs search`, queries "Czech", "Czech fuel" and "diesel price".

No market matches the Czech diesel cap. "Czech fuel" returned only Polymarket Czech mayoral markets. "Czech" returned Kalshi ČNB rate-decision markets. "diesel price" returned US-only markets:
- Kalshi "Will Diesel Price on November 2, 2026 be above $6.30?" Yes 0.30, volume $5.6k; "above $6.28?" Yes 0.94, volume $7.3k; "above $6.32?" Yes 0.02, volume $9.1k (closes 2026-11-02T04:59Z). US AAA-type retail average, not the Czech cap, and it settles on the US weekend price, so it says nothing about Monday's NWE/Czech wholesale move.
- Kalshi AAA national average diesel on 3 Nov 2026 buckets (e.g. "above $6.20?" Yes 0.79, volume $13.8k). Not matching.
- Polymarket "Will the US announce a diesel export ban by December 31?" Yes 0.185, volume $16.3k. Context only.
- Tipsport/Fortuna: no page for fuel prices (not a political question; not checked).

## Other signals
- No published model or analyst projection of the Czech daily cap was found.
