# cz-okamura-recall-signatures — signals
- `node scripts/markets.mjs search "Czech"` (read 2026-10-25T17:59:52Z): only Czech mayoral races, EURO 2028 and a CNB rate market. No market on Okamura, the licence fees, or Czech TV.
- `node scripts/markets.mjs search "Okamura"` (read 2026-10-25T17:59:57Z): no relevant market. The results are unrelated (NFL fantasy and similar).
- `node scripts/markets.mjs search "Czech Television"`: no relevant market.
- Tipsport (https://www.tipsport.cz/kurzy/politika-a-spolecnost-15) and Fortuna (https://www.ifortuna.cz/sazeni/politika): not checked; the pages are JS-only and unreadable by fetch. A market on a recall-submission date is unlikely there.
- Result: no matching market found.
