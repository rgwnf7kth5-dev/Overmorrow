# de-plastiksteuer-13
- **Claim:** Between 06:00 on Wednesday 11 November and 23:59 on Thursday 12 November 2026 (Berlin time), the CDU/CSU–SPD coalition announces, or is reported to have agreed, that the planned tax on plastic packaging will not be introduced in 2027 (dropped altogether or postponed to 2028 or later).
- **Criterion:** YES if, in that window, coalition leaders, the finance ministry or the coalition's budget or parliamentary-group spokespeople of BOTH sides announce it, or Tagesschau, Spiegel, Handelsblatt, FAZ, dpa or bundestag.de (hib) report, with a timestamp inside the window, that the coalition has agreed to drop the plastic packaging tax or to delay its start beyond 2027. Statements by one party alone (e.g. Frei's "machen wir nicht") do not count. NO if no such agreement is announced or reported by 23:59 on 12 Nov, or if the coalition keeps a start in 2027.
- **Event window:** 2026-11-11T06:00+01:00 to 2026-11-12T23:59+01:00 (Europe/Berlin)
- **Written at:** 2026-11-10T18:05Z

## Schedule
- Same as de-stromsteuer-13.md: Bereinigungssitzung Thu 12 Nov; in 2025 it ran 14:00 Thursday to early Friday (hib https://www.bundestag.de/presse/hib/kurzmeldungen-1126854, read 2026-11-10T17:56Z).
- Environment minister Schneider: "Bis Donnerstag müsse die Union Ideen vorlegen" — Tagesschau https://www.tagesschau.de/inland/innenpolitik/diskussion-plastiksteuer-100.html (published 2026-11-09 10:03, read 2026-11-10T17:56Z).

## Facts
- Frei (Union group leader, ZDF 8 Nov): "Die Plastiksteuer machen wir nicht, weil sie eine falsche, nicht nur ökonomische, sondern auch ökologische Wirkung hätte"; Miersch (SPD): "Es gibt einen ersten Entwurf und insofern ist das alles nicht vom Tisch"; CDU's Middelberg similar to Miersch; plan: €550 per tonne of plastic in packaging from July 2027; without it a gap of about €670m — Tagesschau https://www.tagesschau.de/inland/innenpolitik/plastiksteuer-absage-100.html (published 2026-11-08 21:38, read 2026-11-10T17:55Z).
- Klingbeil plans €805m from the tax in 2027 and almost €1.5bn a year from 2028; the tax was a spring coalition-committee agreement (Schneider) — Tagesschau 9 Nov (above).
- "Hier geht es nicht um das Wann, sondern um das Ob"; even SPD doubts, Miersch: "diskutieren wir darüber auch"; without it more than €1bn a year missing from 2028 — Tagesschau https://www.tagesschau.de/inland/innenpolitik/haushalt-steuerplaene-bundesregierung-100.html (published 2026-11-09 17:24, read 2026-11-10T17:55Z).
- Linked to the electricity-tax question: the coalition must close both gaps in the same package (de-stromsteuer-13.md).

## Base rate
- None.

## Schedule slip
- `node scripts/refdata/slip.mjs negotiation-round` → 0.119 (own 1/10). The decision may also be left out of the budget night (the tax is a separate bill) and settled later.

## Risks
- The coalition may keep the revenue line and defer the decision to the bill (NO), or the agreement may only surface after midnight (NO).
- Ambiguous outcomes: a reduced rate or a later start within 2027 (NO); a start on 1 Jan 2028 (YES).

## Sources
- https://www.tagesschau.de/inland/innenpolitik/plastiksteuer-absage-100.html
- https://www.tagesschau.de/inland/innenpolitik/diskussion-plastiksteuer-100.html
- https://www.tagesschau.de/inland/innenpolitik/haushalt-steuerplaene-bundesregierung-100.html
- https://www.bundestag.de/presse/hib/kurzmeldungen-1126854
