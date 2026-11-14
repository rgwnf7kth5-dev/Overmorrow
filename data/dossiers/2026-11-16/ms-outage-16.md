# ms-outage-16
- **Claim:** Microsoft declares its global Microsoft 365 outage (incident MO1550821, Outlook, Teams, Copilot) resolved by 23:59 UTC on Sunday 15 November 2026.
- **Criterion:** YES if, between the freeze and 23:59 UTC on 15 Nov 2026, Microsoft states that the Microsoft 365 incident that began on 12 Nov 2026 (admin-center ID MO1550821, or the ID under which Microsoft continues tracking the same incident) is resolved: a final service-health update marking it resolved or "service restored", or a Microsoft 365 Status (@MSFT365Status) or Microsoft statement that the impact "has been resolved", "remediated" or "fully recovered", as shown on X, status.cloud.microsoft or reported by BleepingComputer, Petri, The Verge, Windows Central, the BBC or another established outlet quoting Microsoft. Statements that recovery is "nearly complete", that "most users" are restored, or that "residual" or "intermittent" issues remain do not count. If Microsoft closes MO1550821 but opens a new incident for leftover effects, closing MO1550821 counts. NO if no such declaration is made by 23:59 UTC on 15 Nov. (If the incident is already declared resolved before the freeze, the claim is withdrawn rather than published.)
- **Event window:** freeze (about 2026-11-14T05:30+01:00 = 04:30Z) to 2026-11-15T23:59:00Z; resolution on Saturday 14 Nov after the freeze counts. Evidence: Microsoft posts on X in real time; outlets report within hours. Resolver reads by 2026-11-17T05:00+01:00.
- **Time zone chosen:** UTC (Microsoft's service-health posts quote UTC; Pacific would add 8 hours).
- **Written at (UTC):** 2026-11-13T18:10Z.

## Schedule
- No scheduled step. Incident open as of 13 Nov 17:23Z (Petri, update 12:23 PM ET): "We remain focused on addressing residual impact ... closely monitoring service health to verify sustained stability."

## Facts
- BleepingComputer, 12-13 Nov: admin-center advisory "MO1550821"; customers "may be unable to connect to" Exchange Online, Teams, SharePoint Online, Microsoft 365 Copilot and Defender XDR; incident "began Thursday at 1:26 PM ET"; Microsoft: "the elevated load isn't driven by an increase in traffic, but by a number of servers being unexpectedly unavailable"; 13 Nov 12:06 PM ET: "email queues significantly reduced and approaching normal levels"; EVP Charles Lamanna: "Our teams are reviewing what happened and how we can prevent similar issues going forward"; "has not yet disclosed the underlying cause of the server failures"; a separate Teams incident TM1550488 (9:45-10:53 AM ET, 12 Nov) "has been fully resolved" — https://www.bleepingcomputer.com/news/microsoft/massive-microsoft-365-outage-disrupts-outlook-teams-copilot-worldwide/ (published 2026-11-12 20:15Z, modified 2026-11-13 17:50Z, read 2026-11-13T17:57Z)
- Petri, 13 Nov (updated 12:23 PM ET = 17:23Z): incident "began around 11:17 a.m. ET (16:17 UTC) on Thursday"; "a core process on backend servers became overwhelmed"; Microsoft patched "an upstream authentication and routing component"; Microsoft: "service health remains variable and capacity has not yet fully returned to baseline. Network and traffic-management actions remain active"; latest: "We remain focused on addressing residual impact and ensuring reliable service restoration" — https://petri.com/microsoft-deploys-patch-stabilize-microsoft-365-outage/ (published 2026-11-13 10:51Z, modified 17:24Z, read 2026-11-13T17:57Z)
- BBC, 13 Nov: services "being restored almost 24 hours since issues first surfaced"; Microsoft "deeply sorry"; cause "elevated load" stemming "from an issue during an earlier network capacity upgrade"; email timeout window extended to 48 hours; "not a cyber-security incident"; Microsoft 365 has more than 430 million users — https://www.bbc.com/news/articles/cwvg238zrnm5o (published 2026-11-13 07:12Z, modified 17:12Z, read 2026-11-13T17:56Z)
- DW, 12-13 Nov: Microsoft "not aware" of malicious activity; Downdetector reports from 74 countries; nearly 130,000 US Outlook reports; 02:54 GMT Friday update said changes "not taking as expected"; NHS "serious impact" (union leader); "second disruption to Microsoft's 365 services this year" — https://www.dw.com/en/microsoft-rules-out-malicious-activity-as-cause-for-global-outage/a-79935611 (published 2026-11-12 21:19Z, modified 2026-11-13 13:46Z, read 2026-11-13T17:56Z)
- No compensation or service-credit statement found in the articles read (Microsoft 365 SLA credits are claimed by tenants, per standard terms; not re-checked tonight).
- Post-incident review practice: Azure publishes PIRs on azure.status.microsoft/status/history; the page's newest entry is September 2026 (PIR 7Q30-010) and lists nothing for this Microsoft 365 incident — https://azure.status.microsoft/en-us/status/history/ (read 2026-11-13T17:56Z). Microsoft 365 post-incident reports go to tenant admins in the admin center, not to a public page, so a PIR claim could not be checked publicly.
- Precedent MO941162 (25-26 Nov 2024, Exchange Online/Teams): Microsoft said the fix reached "approximately 98% of the affected environments" around noon ET on 25 Nov; "around 3:00 pm Eastern time on November 26, 2024, Microsoft reported that the issues had been resolved" (about 1.5 days) — https://www.enowsoftware.com/office-365-monitoring-outages/microsoft365-outage-november-2024 (read 2026-11-13T17:57Z); Windows Central headline "Microsoft 365 is back after two days of outages" — https://www.windowscentral.com/software-apps/microsoft-365-outlook-and-microsoft-teams-are-down-heres-when-youll-be-able-to-use-them-again (modified 2024-11-27, read 2026-11-13T17:57Z)
- Google News "Microsoft 365 outage when:1d" headlines (read 2026-11-13T17:57Z): Forbes "Microsoft 365 Outage Improves Into Friday"; AP "Microsoft reports progress in reviving email and other services"; CRN "'Millions And Millions Of Dollars Lost,' Partners Say" — https://news.google.com/rss/search?q=Microsoft%20365%20outage%20when:1d

## Base rate
- Class: large multi-service Microsoft 365 incidents, time from start to declared resolution. Known cases: MO941162 (Nov 2024) about 1.5 days; Microsoft's July 2025 Outlook outage about 19 hours (Computerworld headline "Microsoft's 19-hour Outlook outage", seen in WebSearch results, not opened). n=2, both resolved well within 3.3 days. The present incident (start 12 Nov 16:17Z; window ends 3 days 7.7 hours later) has already lasted longer than either. Too thin for a rate; base_rate null.

## Schedule slip
- slip_class `none`: no scheduled event (`node scripts/refdata/slip.mjs none` → "unknown class none"; company-event 0.006 does not apply, 2026-11-13T17:58Z).

## Risks
- Microsoft keeps a long incident open while it "verif[ies] sustained stability" and while the 48-hour email timeout window runs; a weekend may slow formal closure.
- Relapse: restarted servers "repeatedly crashed under live traffic" on 12 Nov; Monday-morning load (after the window) is the usual test, so Microsoft may wait.
- Resolution could come before the freeze (Friday night or Saturday), making the claim moot; the editor must check @MSFT365Status at the freeze.
- Microsoft may split leftover issues into new IDs; the criterion counts closure of MO1550821.
- Resolution wording in the admin center is visible only to tenants; reliance on @MSFT365Status and press reports.

## Sources
- https://www.bleepingcomputer.com/news/microsoft/massive-microsoft-365-outage-disrupts-outlook-teams-copilot-worldwide/ ; https://www.bleepingcomputer.com/news/microsoft/
- https://petri.com/microsoft-deploys-patch-stabilize-microsoft-365-outage/ ; https://petri.com/feed/ ; https://petri.com/
- https://www.bbc.com/news/articles/cwvg238zrnm5o
- https://www.dw.com/en/microsoft-rules-out-malicious-activity-as-cause-for-global-outage/a-79935611
- https://azure.status.microsoft/en-us/status/history/
- https://status.cloud.microsoft/ (JS shell, no content)
- https://www.enowsoftware.com/office-365-monitoring-outages/microsoft365-outage-november-2024
- https://www.windowscentral.com/software-apps/microsoft-365-outlook-and-microsoft-teams-are-down-heres-when-youll-be-able-to-use-them-again
- https://news.google.com/rss/search?q=Microsoft%20365%20outage%20when:1d ; https://news.google.com/rss/search?q=Microsoft%20outage%20MO1550821
- https://isdown.app/status/microsoft365 (empty)
- WebSearch "Microsoft 365 outage incident EX resolved post-incident report Petri November 13 2026" and "MO941162 … resolved how long" (2026-11-13T17:57Z)
- scratchpad frontpages.json, sweep-world.json

## Unreachable
- https://status.cloud.microsoft/ (renders empty), https://isdown.app/status/microsoft365 (empty), X/@MSFT365Status (not readable by script; used via BleepingComputer/Petri quotes), AP (refused by policy)
