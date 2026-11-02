# eu-hicp-above-1
- **Claim:** Eurostat's flash estimate published on 4 November 2026 puts euro-area annual inflation for October 2026 above September's 3.8%. (Derived from eu-hicp-oct, event > 3.8.)
- **Criterion:** YES if the euro-area annual HICP inflation rate for October 2026 in Eurostat's flash estimate published on 4 Nov 2026 is above 3.8% (3.9% or higher at one decimal). NO if it is 3.8% or lower, or if the flash is not published by 23:59 CET on 4 Nov 2026.
- **Event window:** 2026-11-04T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Luxembourg). Expected 11:00 CET.
- **Written at:** 2026-11-02T18:25Z. Full fact base: data/dossiers/2026-11-05/eu-hicp-oct.md.

## Schedule
- 4 Nov, 10:00 UTC — https://forexfundamentals.com/economic-calendar/eur-cpi/2026-11-04 (read 2026-11-02T18:11Z) "4 November 2026, 10:00 UTC". Details in eu-hicp-oct.md.

## Facts
- September 3.8% (agenda, Newsquawk); consensus for October 3.9% (ForexFundamentals, FinanceCalendar; thin). French CPI rose to 3.4% from 3.1% (data/resolutions/2026-10-31.json).
- The threshold is 0.1 pp, about 0.9 scales, below consensus; a tie at 3.8% is NO, because the figure prints to one decimal.

## Base rate
- `stats-release-beats-threshold`: own record 11 YES / 7 NO, base_rate null.

## Schedule slip
- `stats-release`: 0.004 [estimate]. No sign of a move.

## Consensus and usual surprise size
- Consensus 3.9%, scale 0.11 (published table, n=12; eu-hicp-oct.md). derived {from: eu-hicp-oct, event: ">", x: 3.8}.

## Risks
- As in eu-hicp-oct.md. Publication to one decimal: the continuous mass between 3.80 and 3.85 rounds to 3.8 and is NO.

## Sources
- As listed in data/dossiers/2026-11-05/eu-hicp-oct.md.
