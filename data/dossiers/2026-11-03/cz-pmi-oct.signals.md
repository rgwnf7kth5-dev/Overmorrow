# cz-pmi-oct — signals

Read 2026-10-31T18:11Z with `node scripts/markets.mjs search`, queries "Czech PMI", "Czech manufacturing", "Czech" and "PMI".

No market matches. "Czech PMI" and "Czech manufacturing" returned only Polymarket Czech mayoral markets and UEFA EURO 2028 winners. "Czech" returned Kalshi's ČNB November rate-decision markets (e.g. "cut more than 25bps": Yes 0.01, volume $157k), which are not about the PMI. "PMI" returned only US ISM buckets on Polymarket (e.g. "ISM Manufacturing PMI between 56.0 and 56.9 in October": Yes 0.1045, volume $13.5k), which are a different index.

## Other signals (published models)
- Trading Economics model: Czech manufacturing PMI "about 53.00 by the end of the current quarter"; 51.20 for 2027 — https://tradingeconomics.com/czech-republic/manufacturing-pmi (read 2026-10-31T17:58Z). Not a point forecast for October.
- Sigmanomics "rolling-surprise" model: 52.45 for the 2 Nov release (calendar consensus shown as 53.3, previous 53.5) — https://sigmanomics.com/cz/manufacturing-pmi (read 2026-10-31T18:00Z). The page's country label and time zone for this entry could not be confirmed.
