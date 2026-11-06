# de-insa-gap-1
- **Claim:** In INSA's weekly Sonntagstrend for Bild am Sonntag published on 7 or 8 November 2026, the AfD leads CDU/CSU by … percentage points. (Interval claim.)
- **Criterion:** AfD share minus CDU/CSU share, in percentage points, in the first INSA federal voting-intention poll for Bild am Sonntag (the T-O-Mix weekly, "TOM") published between 05:30 CET on 7 Nov and 23:59 CET on 8 Nov 2026, as listed on wahlrecht.de/umfragen/insa.htm (row dated 07.11.2026 or 08.11.2026), or, if that page cannot be read, as reported by Bild/BamS. The online-panel poll INSA publishes on Tuesdays does not count. Void if no such poll is published in the window.
- **Deadline:** 2026-11-08T23:59:00+01:00
- **Written at:** 2026-11-06T18:10Z

## Schedule
- INSA's T-O-Mix poll for Bild am Sonntag appears every weekend; wahlrecht.de dates it on the Saturday of release: 31.10., 24.10., 17.10., 03.10., 26.09. 2026 (all Saturdays), once 11.10. (Sunday). Fieldwork runs Monday to Friday (31.10. row: "TOM • 1.202 26.10.–30.10."). 44 TOM polls in 2026 up to 31 Oct, one every week — https://www.wahlrecht.de/umfragen/insa.htm (no publication time, read 2026-11-06T17:59:47Z).
- Expected this week: fieldwork about 2–6 Nov, release Sat 7 Nov (Bild online) / Sun 8 Nov (BamS print).

## Facts (all from https://www.wahlrecht.de/umfragen/insa.htm, read 2026-11-06T17:59:47Z; first published figures as tabulated by wahlrecht.de)
- Latest TOM, 31.10.2026: CDU/CSU 20, AfD 29 (gap 9), SPD 14, Grüne 15, Linke 10, FDP 5, BSW 3 — "31.10.2026 20 % 14 % 15 % 5 % 10 % 29 % 3 % 4 % TOM • 1.202 26.10.–30.10."
- Latest online panel, 03.11.2026: CDU/CSU 20, AfD 28 (gap 8) — "03.11.2026 20 % 14 % 15 % 5 % 10 % 28 % 3,5 % 4,5 % O • 2.004 30.10.–02.11."
- TOM gap, most recent first: 9 (31.10.), 11 (24.10.), 11 (17.10.), 11 (11.10.), 12 (03.10.), 10 (26.09.), 9, 9, 8, 9, 8, 8 (early Aug). Union TOM 20, 19, 18, 19, 18, 19, 20; AfD TOM 29, 30, 29, 30, 30, 29, 29.
- In January 2026 the TOM gap was about 0 to 2 points; it widened through spring to 7–8 by May and 11–12 in October (own computation from the table).
- Context: the Union's choice of Ilse Aigner as presidential candidate became public on 6 Nov, during this week's fieldwork — https://www.tagesschau.de/inland/innenpolitik/cdu-csu-aigner-bundespraesidentin-100.html (published 2026-11-06T18:17+01:00, read 2026-11-06T18:02:17Z) "Die Unionsparteien sind sich einig, dass sie die CSU-Politikerin Ilse Aigner als Bundespräsidentin vorschlagen wollen."

## For a number forecast
- Consensus: there is no analysts' consensus for a poll. Reference value 8.5 = mean of INSA's two latest readings (TOM 31.10. gap 9; online 03.11. gap 8, whose fieldwork 30.10.–02.11. overlaps the new TOM week). Both from the wahlrecht.de table above.
- Scale: sd of the week-to-week change in the TOM AfD–Union gap = 1.02 pp, n = 43 changes (3 Jan to 31 Oct 2026); last 20 changes 1.09; mean absolute change 0.79. Online-panel series: sd 1.06, n 43. Own computation from the wahlrecht.de table. `node scripts/refdata/series.mjs scale` has no series for this (n 0; pooled factor 1.173).
- Normal starting point `node scripts/refdata/models.mjs quantiles 8.5 1.02 1.6`: q10 6.41, q50 8.5, q90 10.59 (width 4.18 = 4.1 scales).
- TOM figures are whole numbers, so the gap is an integer.

## Base rate
- No reference class for a weekly poll gap. Persistence in 43 consecutive TOM pairs (own count from the table): unchanged 15 times, moved by 1 point 22 times, by 2 points 6 times, never by more than 2.

## Schedule slip
- `stats-release` (closest class for a regular weekly publication): rate 0.003, 0/42 own (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-06T18:04Z). INSA published a TOM poll every week of 2026 in the table.

## Risks
- Release slips to Monday or is not tabulated in time; then the criterion falls back to Bild reporting.
- Aigner news and Union infighting over the candidacy during fieldwork could move the Union either way.
- INSA's online and TOM series differ by up to 1.5 points in the same week (e.g. 03.10. TOM 12 against 05.10. O 13).

## Sources
- https://www.wahlrecht.de/umfragen/insa.htm
- https://www.tagesschau.de/inland/innenpolitik/cdu-csu-aigner-bundespraesidentin-100.html
- https://www.zdfheute.de/politik/bundespraesidentin-aigner-koalition-merz-100.html
