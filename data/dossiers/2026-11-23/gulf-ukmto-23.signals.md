# gulf-ukmto-23 — signals
Read at 2026-11-20T18:11–18:13Z.

## Markets
- `node scripts/markets.mjs search "hormuz tanker attack"` (read 2026-11-20T18:11:53Z): no market on UKMTO incidents on a given day. Results were Hormuz traffic-normalisation markets and weekly transit-count markets, which do not match.
- `node scripts/markets.mjs search "UKMTO notices"` (read ~18:12:36Z): Polymarket "How many UKMTO notices …" bucket markets.
  - Week 16–22 Nov (closes 2026-11-23T04:59Z), https://polymarket.com/event/how-many-ukmto-notices-november-1622:
    - fewer than 4: 0.006 (volume ~59)
    - 4–7: 0.003 (volume ~3.0k, liquidity ~0.8k)
    - 8–11: 0.47 (volume ~0.8k)
    - 12–15: 0.41 (volume ~0.26k)
    - 16+: 0.16 (volume ~0.3k)
  - Week 23–29 Nov, https://polymarket.com/event/how-many-ukmto-notices-november-2329:
    - fewer than 4: 0.215
    - 4–7: 0.31
    - 8–11: 0.37
    - 12–15: 0.265
    - 16+: 0.125
    - (buckets do not sum to 1; thin books, volumes ~0.1–0.3k)
  - **Does not match:** these count all UKMTO notices in a week, in every region, including the Red Sea, the Gulf of Aden and non-attack advisories. Our claim needs a qualifying incident in the Gulf/Arabian Sea area with an occurrence time in the 21–22 Nov window. The 16–22 Nov markets mostly reflect notices already issued (Warnings 207–214 on 16–20 Nov). They indicate a high notice tempo but give no price for the weekend.
- `node scripts/markets.mjs search "iran ship attack november"` (read 18:11:58Z): Bab el-Mandeb transit-count markets only. Do not match.
- `node scripts/markets.mjs search "strait of hormuz"` (read 18:12:03Z): Polymarket "US announces end of Iranian blockade by November 30, 2026?" 0.039 (volume ~3.7m); "US-Iran Hormuz Agreement by November 30?" 0.026 (volume ~1.0m); "Strait of Hormuz traffic returns to normal by November 30?" 0.004. These are context for de-escalation risk only and do not match.
- No bookmaker odds found. No published models found.

Conclusion: no market matches. The UKMTO weekly-notice markets are related but count something different.
