# eu-hicp-oct
- **Claim:** Eurostat's flash estimate published on 4 November 2026 puts euro-area annual inflation (HICP) for October 2026 at … %. (Interval claim.)
- **Criterion:** The euro-area annual HICP inflation rate for October 2026, in percent to one decimal, in Eurostat's flash estimate published on 4 Nov 2026. Later revisions do not decide. Void if no flash appears by 23:59 CET on 4 Nov.
- **Event window:** 2026-11-04T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Luxembourg). Expected 11:00 CET (10:00 UTC).
- **Written at:** 2026-11-02T18:25Z. All read times 2026-11-02 between 18:10Z and 18:12Z.

## Schedule
- Date check: yes, 4 Nov, not 30/31 Oct. 2026 flash dates have run late: 2 Oct (Sep), 1 Sep (Aug), 31 Jul, 1 Jul, 2 Jun — https://forexfundamentals.com/economic-calendar/eur-cpi/2026-11-04 (figures "verified on 1 November 2026", read 18:11Z) "4 November 2026, 10:00 UTC", period October 2026.
- FinanceCalendar: 4 Nov, 5:00 ET / 11:00 CET, October data — https://www.financecalendar.com/?p=2213 (read 18:11Z); header says "Time not confirmed". The older page https://www.financecalendar.com/?p=2097 lists 11:00 CET too (read 18:11Z) and is internally inconsistent.
- dpa-AFX and Newsquawk also give 4 Nov (work/agenda-world.json, not re-read); ECB calendar lists the seasonally adjusted series at 15:00 on 4 Nov (data/planning/agenda.json). Eurostat's own calendar was not read tonight; agenda.json's 1 Nov entry from it lists other 4 Nov items as "same day as euro-area flash HICP".

## Facts
- September 2026 final: 3.8% y/y; core 2.5%, services 3.2% — https://www.newsquawk.com/headlines/week-in-focus-2nd-6th-november-2026-highlights-include-us-midterm-election-nfp-ism-pmis-rba-boe-and-ez-cpi- (via work/agenda-world.json, not re-read). August 3.3%, July 2.9%: https://forexfundamentals.com/economic-calendar/eur-cpi/2026-11-04. First-release figures per that table; the September flash was itself 3.8%.
- France, October provisional CPI +3.4% y/y (September final 3.1%; national CPI, not HICP): data/resolutions/2026-10-31.json (INSEE key figure read by the resolver 2026-11-01; the Informations rapides page was not opened). French HICP October not seen.
- German, Spanish and Italian October flashes (due 29-30 Oct or thereabouts): not found. Say so: they are the best input and the desk should read them before the freeze.
- HCOB euro-area flash PMI October: input prices rose at the steepest rate since May amid higher energy costs — data/dossiers/2026-11-04 (investinglive, 23 Oct; not re-read).

## Base rate
- Own class `stats-release-beats-threshold` is loose and has no rate (11 YES / 7 NO). Direction in the table below: rate rose in each of the last three months.

## Schedule slip
- `stats-release`: prior 0.01, own 0/28, rate 0.004 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-11-02T18:25Z). No sign of a move.

## Consensus and usual surprise size
- Consensus 3.9%: ForexFundamentals https://forexfundamentals.com/economic-calendar/eur-cpi/2026-11-04 "Forecast 3.9%"; FinanceCalendar https://www.financecalendar.com/?p=2213 3.9%, which adds that major polling services had not yet published a consensus when it was prepared. The two may share one origin; Newsquawk gives none. No Reuters or Bloomberg poll seen.
- Surprise (actual − forecast, pp), 12 releases Sep 2025-Sep 2026 from the ForexFundamentals table: Sep +0.2, Aug 0, Jul 0, Jun −0.2, May 0, Apr +0.1, Mar −0.1, Feb +0.2, Jan 0, Nov +0.1, Oct 0, Sep 0. n=12, mean +0.03, sd 0.114, RMS 0.112. Own computation from the published table.
- Scale 0.11, scale_basis `published` (pipeline/reference-data/series.json has no HICP series; `series.mjs scale` returns n=0).
- Starting range: `node scripts/refdata/models.mjs quantiles 3.9 0.11 1.6` → q10 3.67, q50 3.90, q90 4.13 (width 0.45 = 4.1 scales).

## Risks
- Energy pass-through and base effects: October 2025 was 2.1% against 2.2% in September 2025 (table above).
- Consensus is thin and may move once real polls appear; the figure prints to one decimal.

## Sources
- https://forexfundamentals.com/economic-calendar/eur-cpi/2026-11-04
- https://www.financecalendar.com/?p=2213
- https://www.financecalendar.com/?p=2097
- https://www.newsquawk.com/headlines/week-in-focus-2nd-6th-november-2026-highlights-include-us-midterm-election-nfp-ism-pmis-rba-boe-and-ez-cpi- (via agenda, not re-read)
- data/resolutions/2026-10-31.json
