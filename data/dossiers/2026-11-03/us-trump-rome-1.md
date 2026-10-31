> **Claim as revised by the desk (31 Oct, ~19:20 CET; supersedes the header below):** Donald Trump appears in person at the rally in Rome, New York, billed as the final Trump–Vance event of the midterm campaign on Monday 2 November 2026.
> **Criterion:** YES if Donald Trump appears in person and speaks at a campaign rally held in Rome, New York (Oneida County), between 00:00 and 23:59 Eastern Time on 2 Nov 2026, as reported by AP, Reuters or another major US outlet or shown on the campaign's livestream. Remote, telephone, tele-rally or video hookups to the Rome event do not count. NO if he does not speak in person at a rally in Rome, NY, in that window (including cancellation, postponement or a Vance-only event).

# us-trump-rome-1
- **Claim:** Donald Trump speaks in person at a campaign rally in Rome, New York, on Monday 2 November 2026.
- **Criterion:** YES if Donald Trump appears in person and speaks at a campaign rally held in Rome, New York (Oneida County), between 00:00 and 23:59 Eastern Time on 2 Nov 2026, as reported by AP, Reuters or another major US outlet or shown on the campaign's livestream. Remote, telephone or video appearances do not count. NO if he does not speak in person at a rally in Rome, NY, in that window (including cancellation or postponement).
- **Event window:** 2026-11-02T00:00:00-05:00 to 2026-11-02T23:59:00-05:00 (America/New_York; EST, DST ends 1 Nov)
- **Written at:** 2026-10-31T18:15Z. Read times below are all between 17:40Z and 18:10Z on 31 Oct.

## Schedule
- No primary source (RNC, White House or campaign page) was found tonight. The only report of the event is second-hand: an embedded post by reporter Marisela Ramirez in a Townhall article: "@RNC put out an advisory that @POTUS and @VP will hold a rally in Rome, New York on Monday-- the day before midterms." — https://townhall.com/news/cameron-arcand/2026/10/30/we-know-trumps-final-midterms-schedule-heres-what-to-expect-n2685606 (published 2026-10-30T11:15, read 2026-10-31T17:45Z).
- **Conflicting billing:** the same Townhall article's own text describes the Rome event as Vice President JD Vance's "final rally of the midterms". It does not say Trump will be there. Time and venue are not given.
- CBS News' live blog for the weekend before the election (many posts on 30 Oct about Trump's rallies) does not mention a Rome, NY rally — https://www.cbsnews.com/live-updates/2026-midterm-elections-campaigns-weekend-before/ (updated 2026-10-31T00:14-04:00, read 2026-10-31T17:46Z).
- Two web searches for a Rome, NY rally on 2 Nov 2026 returned only older events: Trump at Griffiss International Airport, Rome, NY on 12 Apr 2016 (Mediaite, published 2016-04-12 16:07, https://www.mediaite.com/online/watch-live-donald-trump-speaks-at-campaign-rally-in-rome-ny, read 2026-10-31T18:05Z) and rallies in Rome, Georgia. No local report (Rome Sentinel, Syracuse.com, WKTV) about the 2026 event was found.

## Facts
- RNC advisory relayed by reporter: "@POTUS and @VP will hold a rally in Rome, New York on Monday" — Townhall (above) (published 2026-10-30T11:15, read 2026-10-31T17:45Z).
- Townhall body text: Rome is Vance's "final rally of the midterms"; Rome is in NY-21, an open seat Townhall rates "Lean Republican" — same URL.
- Trump's Kansas and Iowa rallies for Sun 1 Nov were cancelled on the morning of 30 Oct and then reinstated the same day: "rearranged for scheduling purposes to accommodate dozens of additional tele-rallies" — CBS live blog (post 10:08 ET 30 Oct, read 2026-10-31T17:46Z).
- Trump at his Daytona Beach rally on 30 Oct: "28 days of this crap is a lot" — CBS live blog (post 21:50 ET 30 Oct, read 2026-10-31T17:46Z).
- Trump planned tele-rallies in 19 states; "nearly 20" tele-rallies in the final days — CBS (post 06:42 ET 30 Oct) and Townhall (above).
- Trump spoke at a rally in Daytona Beach, Florida, on the evening of 30 Oct — CBS (posts 20:11 and 20:24 ET 30 Oct).
- Desk notes (scratchpad world_candidates.json, gathered 30–31 Oct, not re-verified): Trump said Monday "is going to be exciting".

## Base rate
- `scheduled-appearance-takes-place` (pipeline/reference-classes.json): rate 0.92, n "large; cancellations are rare" (estimate pending a full count); own record 3 YES / 0 NO. Caveat: that class assumes the leader is billed for the event. Here Trump's billing rests on one relayed advisory, contradicted by the article's own text. The class rate may not apply.

## Schedule slip
- `other-scheduled`: 0.075 [estimate], prior 0.15, own 0/6 (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-10-31T18:06Z).
- Signs this event may move: Trump cancelled and then reinstated two rallies within one day this week; the campaign is shifting effort to tele-rallies; no time or venue has been published for Rome.

## Risks
- **Billing:** if the Rome event is a Vance-only rally (as Townhall's text says), Trump not attending is the default outcome. A tele-rally or phone-in by Trump to the Rome crowd does not count.
- **Schedule churn:** a last-minute switch to a different state, or to tele-rallies only, on election eve.
- **Location:** a rally "near Rome" (for example at Griffiss International Airport, which is inside Rome city limits, or in Utica/Oriskany, which are not) — the criterion requires a rally held in Rome, NY.
- **Time:** an evening event running past 23:59 ET is fine as long as Trump speaks before midnight; a speech after midnight ET would not count.

## Sources
- https://townhall.com/news/cameron-arcand/2026/10/30/we-know-trumps-final-midterms-schedule-heres-what-to-expect-n2685606
- https://www.cbsnews.com/live-updates/2026-midterm-elections-campaigns-weekend-before/
- https://www.mediaite.com/online/watch-live-donald-trump-speaks-at-campaign-rally-in-rome-ny (2016 event, context only)
- Search results only: wrvo.org (2016 Rome rally), sixmilepost.com and wvsmfm.com (Rome, Georgia rallies)
