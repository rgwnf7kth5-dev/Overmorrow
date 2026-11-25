# gulf-ukmto-28 — signals
Read at 2026-11-25T17:46Z.

## Markets
- `node scripts/markets.mjs search "UKMTO notices"` (read 2026-11-25T17:45:52Z): Polymarket weekly UKMTO-notice-count buckets, week 23–29 Nov (closes 2026-11-30T04:59Z), https://polymarket.com/event/how-many-ukmto-notices-november-2329:
  - 8–11: 0.43 (vol ~801); 12–15: 0.29 (vol ~437); 4–7: 0.26 (vol ~230); fewer than 4: 0.051 (vol ~329); 16+: 0.054 (vol ~245).
  - **Does not match:** counts all UKMTO notices of every type and region over a week; our claim needs a qualifying Gulf-area incident dated 27 Nov. Movement since 24 Nov: 8–11 down from 0.545, 12–15 down from 0.34, 4–7 now 0.26.
- `node scripts/markets.mjs search "hormuz tanker attack"` (read 2026-11-25T17:45:59Z): only Hormuz traffic markets (e.g. "Strait of Hormuz traffic returns to normal by January 31, 2027?" 0.055, vol ~25.6k; "Will 7+ ships transit the Strait of Hormuz on any day week of November 23?" 0.17, vol ~4.5k). No match.
- No bookmaker odds or published models found. JMIC threat level for Hormuz "SEVERE" (qualitative).

Conclusion: no market matches.

## Our earlier figures in this case: gulf-shipping-attacks
Our own published morning figures; probabilities, so they belong in the signals file.
- 2026-11-25 gulf-ukmto-25: 59% — pending (pending)
- 2026-11-26 gulf-ukmto-26: 52% — pending (pending)
- 2026-11-27 gulf-ukmto-27: 70% — pending (pending)
The same question (gulf-ukmto): we stated 73% on average for yes; it happened 2 of 2 times.
- Note: the ledger prints only 2 resolved same-id claims (gulf-ukmto-22, -23, both yes). The desk's "ten claims at ~71% came true five times" is not reproduced by the ledger script.
