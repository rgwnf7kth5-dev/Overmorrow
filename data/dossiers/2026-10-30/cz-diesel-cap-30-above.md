# cz-diesel-cap-30-above
- **Claim:** The Ministry of Finance's Cenový věstník published on 29 October 2026 sets a maximum diesel price for Friday 30 October 2026 higher than CZK 49.46 per litre (the maximum valid 28–29 October).
- **Criterion:** YES if the maximum daily price of motorová nafta (B7), CZK per litre incl. VAT, that a Ministry of Finance Cenový věstník notice published by 23:59 CET on 29 October 2026 declares valid for 30 October 2026 (alone or as part of a period) is 49.47 or more. NO if it is 49.46 or lower, or if no such notice declaring a diesel maximum for 30 October is published by 23:59 CET on 29 October 2026. Threshold fixed at 49.46.
- **Event window:** 2026-10-28T00:00:00+01:00 to 2026-10-29T23:59:59+01:00 (notice expected ~14:00 CET on Thu 29 Oct)
- **Written at:** 2026-10-27T18:35:00Z

## Schedule
- MF publishes a fuel-price notice each working day at 14:00 for the following day; on Fridays one notice covers Sat–Mon. Recent notices on the MF list (read 2026-10-27T17:52Z, https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik): 105/2026 (20 Oct 14:00, for 21 Oct), 108/2026 (22 Oct 14:00, for 23 Oct), 109/2026 (23 Oct 14:00, "na období 24. října 2026 až 26. října 2026"), 110/2026 (26 Oct 14:00, "na den 27. října 2026"), 112/2026 (27 Oct 14:00, "na období 28. října 2026 až 29. října 2026"). 106 and 111 are non-fuel notices (Prague price decree; water prices).
- Because 28 Oct (state holiday) has no notice, 112/2026 covers 28 and 29 Oct. Thu 29 Oct is a working day; by the pattern the next notice is published 29 Oct ~14:00 for Fri 30 Oct (inference from pattern; no MF statement read). ČTK: "Ceny budou platit po následující dva dny" — https://www.ceskenoviny.cz/zpravy/nejvyssi-pripustna-cena-nafty-ve-stredu-vzroste-o-50-haleru/2893299 (published 2026-10-27 14:20, read 2026-10-27T17:58Z).
- Legal basis: government decree 172/2026 Sb., for 1–31 Oct 2026 ("§ 2 odst. 4 nařízení vlády č. 172/2026 Sb.", věstník 112). 30 Oct is still under the October decree. Cabinet on 26 Oct extended the regulation (margin cap CZK 2.50/l) and the diesel excise waiver to 30 Nov with a new decree from 1 Nov (sweep, vlada.gov.cz; not re-read).

## Facts
- Mechanism (věstník 108/2026 and 112/2026): three-day moving arithmetic averages of four wholesale indices — ČEPRO base price, MOLIN, UIC (Unipetrol Index Czech), Platts + costs — averaged; indices include the excise rate valid for the day; then the regulated margin and VAT are added. Example 108/2026 (for 23 Oct): diesel ČEPRO 37.70, MOLIN 37.68, UIC 37.68, Platts+costs 37.94, average 37.75 → cap 48.70 — https://mf.gov.cz/assets/attachments/2026-10-22_Cenovy-vestnik-108-2026.pdf (published 2026-10-22 14:00, read 2026-10-27T18:02Z) "třídenní klouzavé aritmetické průměry".
- Arithmetic check (own calculation): cap = (average + 2.50) × 1.21, within a haléř of rounding: (38.38+2.50)×1.21 = 49.46; (37.74+2.50)×1.21 = 48.69. To exceed 49.46 the average for 30 Oct must be about 38.39 CZK/l or more (38.38 rounds to 49.46).
- Diesel maximum by validity date, CZK/l incl. VAT (three-day average in brackets where read):
  - 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17–19 Oct 48.89; 20 Oct 48.67 — věstníky 100–104/2026 (read 2026-10-26T18:08–18:12Z by the 28 Oct dossier, data/dossiers/2026-10-29/cz-diesel-max-28-above.md)
  - 21 Oct 48.61 (37.68) — https://mf.gov.cz/assets/attachments/2026-10-20_Cenovy-vestnik-105-2026.pdf (published 2026-10-20 14:00, read 2026-10-27T18:03Z)
  - 22 Oct 48.60 — věstník 107/2026 https://mf.gov.cz/assets/attachments/2026-10-21_Cenovy-vestnik-107-2026.pdf (read 2026-10-26T18:08Z by the earlier dossier)
  - 23 Oct 48.70 (37.75) — věstník 108/2026 (above)
  - 24–26 Oct 48.69 (37.74) — https://mf.gov.cz/assets/attachments/2026-10-23_Cenovy-vestnik-109-2026.pdf (published 2026-10-23 14:00, read 2026-10-27T18:02Z) "48,69"
  - 27 Oct 48.96 (37.97) — https://mf.gov.cz/assets/attachments/2026-10-26_Cenovy-vestnik-110-2026.pdf (published 2026-10-26 14:00, read 2026-10-27T18:02Z)
  - 28–29 Oct 49.46 (38.38), petrol 44.45 (34.24) — https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf (published 2026-10-27 14:00, read 2026-10-27T17:55Z) "49,46 Kč s DPH / litr"
- Last two steps were the largest of the month after 12→13 Oct: +0.27 and +0.50; the three-day average rose 37.74 → 37.97 → 38.38. 49.46 is the highest diesel cap of October.
- Petrol moved the other way: 23 Oct 44.94, 24–26 44.55, 27 44.47, 28–29 44.45 (same věstníky).
- Which wholesale quote days enter the 30 Oct average is not stated in the notices; because the average is a three-day moving average, the 30 Oct value drops the oldest quote in the 28–29 window and adds newer ones (inference). A daily average for the newest days above about 38.4 keeps it rising.

## Base rate
- Own count, consecutive notices 12 Oct → 28 Oct (12 steps): up 8, down 4. After an up step, the next step was up 5 of 7 times (moving-average persistence). Step sizes: +0.69, +0.25, +0.02, +0.14, +0.12, −0.22, −0.06, −0.01, +0.10, −0.01, +0.27, +0.50 (sd ≈ 0.26).

## Schedule slip
- Class stats-release: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`), closest class (official daily notice). No fuel notice missed on a working day in October notices read. Signs of move: none; the holiday is already handled by 112/2026.

## Risks
- Wholesale reversal: if diesel wholesale quotes fell on 27–29 Oct the moving average can drop; the claim needs the average to stay ≥ ~38.39.
- Rounding: a flat average gives exactly 49.46 → NO.
- Notice could cover a longer period (e.g. 30 Oct–2 Nov); it still decides if it includes 30 Oct.
- Excise: waiver extended to 30 Nov, so no excise jump on 30 Oct (sweep, not re-read).
- Notice publication time: fuel notices at 14:00; a late notice still counts by 23:59.

## Sources
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-112-2026-65574
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-111-2026-65573
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-110-2026-65549
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-109-2026-65542
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-108-2026-65540
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-106-2026-65524
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-105-2026-65513
- https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-26_Cenovy-vestnik-110-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-23_Cenovy-vestnik-109-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-22_Cenovy-vestnik-108-2026.pdf
- https://mf.gov.cz/assets/attachments/2026-10-20_Cenovy-vestnik-105-2026.pdf
- https://www.ceskenoviny.cz/zpravy/nejvyssi-pripustna-cena-nafty-ve-stredu-vzroste-o-50-haleru/2893299
- data/dossiers/2026-10-29/cz-diesel-max-28-above.md (earlier values)
