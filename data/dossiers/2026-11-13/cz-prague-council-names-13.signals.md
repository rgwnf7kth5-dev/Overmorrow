# cz-prague-sign-13 / cz-prague-council-names-13 signals
- `node scripts/markets.mjs search "Prague coalition"` (2026-11-10T17:56:45Z and 17:58:30Z): process killed (exit 137), no output.
- `node scripts/markets.mjs search "Prague mayor"` and `"Hlavacek"` (2026-11-10T17:56:45Z): killed, no output.
- Retried with `node --max-old-space-size=256 scripts/markets.mjs search "Prague coalition"` (2026-11-10T17:59:15Z) and `"Prague mayor"` (17:59:20Z): JavaScript heap out of memory while parsing a JSON response (~730 MB heap). No results tonight; the script appears to download an oversized response.
- From the earlier file data/dossiers/2026-11-12/cz-prague-coalition-12.signals.md (read 2026-11-09T17:55Z, not re-read tonight): no market on the composition or signing of the Prague coalition; only next-mayor markets (Polymarket "Will Petr Hlaváček be the next Mayor of Prague?" Yes 0.9565, volume about 16.0k; Kalshi KXPRAGUEMAYOR series). These have no 12 Nov deadline and do not match either claim.
- No bookmaker odds, published models or forecasts on signing date or council names found.
