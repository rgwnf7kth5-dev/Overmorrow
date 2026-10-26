# cz-diesel-max-28-above
- **Claim:** The Ministry of Finance sets a higher maximum diesel price for Wednesday 28 October 2026 than for Tuesday 27 October (48.96 CZK per litre incl. VAT).
- **Criterion:** YES if the maximum daily price of motorová nafta (B7), CZK per litre incl. VAT, that the Ministry of Finance's Cenový věstník declares valid for 28 Oct 2026 (alone or as part of a period) is higher than 48.96 CZK, i.e. 48.97 or more. NO if it is 48.96 or lower, or if the MF declares no maximum diesel price for 28 Oct 2026. The comparison threshold is fixed at 48.96 (the published 27 Oct value); if the 27 Oct value turns out to differ, the threshold stays 48.96. Derived from cz-diesel-max-28 (event ">" x = 48.96).
- **Deadline (event window end):** 2026-10-28T23:59:59+01:00 (decision expected in the věstník of Tue 27 Oct, about 14:00 CET)
- **Written at:** 2026-10-26T19:37:00+01:00

## Schedule
- MF publishes a Cenový věstník notice every working day around 13:50–14:00 local, setting the maximum price for the next day; on Fridays one notice covers Saturday to Monday. Publication times from portal.gov.cz file timestamps: věstník 90/2026 11:50Z on 30 Sep, 91/2026 11:52Z on 1 Oct, 93/2026 11:54Z on 5 Oct (own reading of the timestamp in the URL, e.g. https://portal.gov.cz/vestniky/xzeaauv/P:1790769034.pdf).
- Weekend precedent: věstník 98/2026 of Fri 9 Oct sets one price "na období 10. října 2026 až 12. října 2026" — https://mf.gov.cz/assets/attachments/2026-10-09_Cenovy-vestnik-98-2026.pdf (read 2026-10-26T18:08Z); věstník 103/2026 of Fri 16 Oct "na období 17. října 2026 až 19. října 2026" — https://mf.gov.cz/assets/attachments/2026-10-16_Cenovy-vestnik-103-2026.pdf (read 2026-10-26T18:12Z).
- For 28 Oct (state holiday, Wednesday): by the same pattern the notice of Tue 27 Oct is expected to set the maximum for 28 Oct, possibly as a period 28–29 Oct (inference; no holiday precedent read tonight). Either way a maximum valid on 28 Oct should exist.
- Legal basis: government decree 172/2026 Sb., for 1–31 Oct 2026 (quoted in every October notice). Cabinet on 26 Oct extended the regulation (margin cap 2.50 CZK/l) and the diesel excise waiver to 30 Nov with a new price decree from 1 Nov — https://vlada.gov.cz/cz/media-centrum/aktualne/vlada-prodlouzila-opatreni-na-snizeni-cen-pohonnych-hmot-229547/ (published 2026-10-26 16:35, from sweep czech.json; not re-read tonight). The extension does not affect 28 Oct, which is under the October decree.

## Facts
- Method (věstník 107/2026 of 21 Oct, valid 22 Oct): maximum = three-day moving arithmetic averages of four wholesale indices (ČEPRO base price, MOLIN, UIC, Platts + costs), averaged (diesel 37.67 CZK/l), including excise valid on the day, plus regulated margin and VAT; Platts converted at ČNB rates — https://mf.gov.cz/assets/attachments/2026-10-21_Cenovy-vestnik-107-2026.pdf (read 2026-10-26T18:08Z) "třídenní klouzavé aritmetické průměry".
- Diesel maximum, CZK/l incl. VAT, by validity date (MF věstník, each read 2026-10-26T18:08–18:12Z):
  - 1 Oct 48.72 — věstník 90/2026 https://portal.gov.cz/vestniky/xzeaauv/P:1790769034.pdf
  - 2 Oct 48.58 — věstník 91/2026 https://mf.gov.cz/assets/attachments/2026-10-01_Cenovy-vestnik-91-2026.pdf
  - 6 Oct 48.38 — věstník 93/2026 https://portal.gov.cz/vestniky/xzeaauv/P:1791201255.pdf
  - 10–12 Oct 47.67 — věstník 98/2026 (above)
  - 13 Oct 48.36 — věstník 99/2026 https://mf.gov.cz/assets/attachments/2026-10-12_Cenovy-vestnik-99-2026.pdf "48,36 Kč s DPH / litr"
  - 14 Oct 48.61 — věstník 100/2026 https://mf.gov.cz/assets/attachments/2026-10-13_Cenovy-vestnik-100-2026.pdf
  - 15 Oct 48.63 — věstník 101/2026 https://mf.gov.cz/assets/attachments/2026-10-14_Cenovy-vestnik-101-2026.pdf
  - 16 Oct 48.77 — věstník 102/2026 https://mf.gov.cz/assets/attachments/2026-10-15_Cenovy-vestnik-102-2026.pdf
  - 17–19 Oct 48.89 — věstník 103/2026 (above)
  - 20 Oct 48.67 — věstník 104/2026 https://mf.gov.cz/assets/attachments/2026-10-19_Cenovy-vestnik-104-2026.pdf
  - 21 Oct — not found
  - 22 Oct 48.60 — věstník 107/2026 (above)
  - 23 Oct — not found
  - 24–26 Oct 48.69 — implied by ČTK (27 Oct is +0.27), not read directly
  - 27 Oct 48.96 (+0.27), petrol 44.47 (−0.08) — ČTK https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-v-utery-vzroste-na-4896-kcl-benzin-naopak-mirne-zlevni/2893299 (published 2026-10-26 14:08, from sweep czech.json; WebFetch blocked tonight, NOT verified by this agent)
- Petrol 95 maximum for comparison: 13 Oct 46.85, 14 Oct 47.21, 15 Oct 47.11, 16 Oct 46.72, 17–19 Oct 46.11, 20 Oct 45.65, 22 Oct 45.19 (same věstníky).

## Usual change size
- Day-to-day changes between consecutive notices, 12→27 Oct: +0.69 (10–12→13), +0.25, +0.02, +0.14, +0.12 (16→17–19), −0.22 (→20), +0.27 (24–26→27); sd 0.28 CZK (n = 7, own calculation). Without the +0.69 jump the sd is about 0.18. Two-step gaps (20→22: −0.07; 22→24: +0.09) excluded.
- Changes are smoothed by the three-day moving average, so consecutive moves tend to share sign (inference from method).
- No consensus exists for this series.

## Base rate
- Own count, single-step diesel changes listed above: up 6 of 7 (one down). Over all known validity dates 1–27 Oct, range 47.67–48.96; 27 Oct value 48.96 is the highest of the month so far.

## Schedule slip
- Class stats-release: 0.010 [estimate] (`node scripts/refdata/slip.mjs stats-release`) — closest class (an official notice published every working day; none missed in the notices read). Holiday handling is the only schedule question; no sign that MF will skip 28 Oct.

## Risks
- The 27 Oct value (48.96) is from the sweep (ČTK), not verified directly tonight; morning must confirm in věstník of 26 Oct.
- Notice could set a period 28–29 Oct; still decides (period includes 28 Oct).
- Excise change: the diesel excise waiver is extended to 30 Nov, so no excise jump on 28 Oct.
- This is a regulated (administratively set) price, not a market price, but it is computed from wholesale fuel quotations.

## Sources
- https://mf.gov.cz/assets/attachments/2026-10-21_Cenovy-vestnik-107-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-19_Cenovy-vestnik-104-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-16_Cenovy-vestnik-103-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-15_Cenovy-vestnik-102-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-14_Cenovy-vestnik-101-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-13_Cenovy-vestnik-100-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-12_Cenovy-vestnik-99-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-09_Cenovy-vestnik-98-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-01_Cenovy-vestnik-91-2026.pdf
- https://portal.gov.cz/vestniky/xzeaauv/P:1790769034.pdf
- https://portal.gov.cz/vestniky/xzeaauv/P:1791201255.pdf
- https://www.ceskenoviny.cz/zpravy/maximalni-cena-nafty-v-utery-vzroste-na-4896-kcl-benzin-naopak-mirne-zlevni/2893299 (sweep; blocked tonight)
- https://vlada.gov.cz/cz/media-centrum/aktualne/vlada-prodlouzila-opatreni-na-snizeni-cen-pohonnych-hmot-229547/ (sweep)
