# us-iran-ship-13 signals
Searches (markets.mjs; the script was intermittently killed for memory, partial output read):
- `node scripts/markets.mjs search Iran strike` (read 2026-11-10T17:56:40Z): first result Polymarket "Will the U.S. invade Iran before 2027?" — no match (different question and deadline); rest of output lost when process was killed.
- `node scripts/markets.mjs search Hormuz` (read 2026-11-10T17:58:55Z): Polymarket "Strait of Hormuz traffic returns to normal by December 31?" Yes 0.085 (volume ~17.6M, liquidity ~225k); Kalshi KXHORMUZNORM (PortWatch 7-day transits above 60) before 1 Dec Yes 0.03, before 1 Jan 0.082; Polymarket "returns to normal by November 30?" Yes 0.029. No match: none asks about a UKMTO incident on 12 Nov.
- `node scripts/markets.mjs search US strike Iran November` (read 2026-11-10T17:59:07Z): only "US strike on Cuba/Colombia/Mexico by December 31?" and "Will the US strike N countries in 2026?" — no match.
- Earlier (us-iran-ship-12.signals.md, read 2026-11-09T17:54Z): Polymarket "How many UKMTO notices November 9–15?" thin, bins centred on 8-11 notices; counts notices, not incidents. Not re-read.
No published model or bookmaker odds found.
