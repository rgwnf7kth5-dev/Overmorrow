# us-iran-strike-10
- **Claim:** The White House, the Pentagon or US Central Command confirms a US strike on Iranian territory carried out between 06:00 Tehran time on Sunday 8 November and 23:59 Tehran time on Monday 9 November 2026.
- **Criterion:** YES if a US military strike (air, missile or drone) on a target on Iranian territory, including Iranian territorial waters and islands, carried out between 06:00 Tehran time on 8 Nov 2026 and 23:59 Tehran time on 9 Nov 2026, is confirmed on the record by the White House (including President Trump in remarks, interviews or posts), the Department of Defense / Department of War (including the Secretary or the Pentagon press office) or US Central Command. A confirmation published after the window counts if it makes clear the strike took place in the window. Media reports citing anonymous US officials, Iranian claims, strikes only on Iranian proxies outside Iran, on vessels in international waters, or by Israel alone do not count. NO if no strike in the window is so confirmed.
- **Deadline:** 2026-11-09T23:59:00+03:30 (event); resolver reads 2026-11-10T05:00+01:00
- **Written at (UTC):** 2026-11-07T18:10Z. Read times as stated.
- Changed from us-iran-strike-5: the route "two outlets citing US officials" is dropped at the planner's request; only on-the-record US confirmation counts. Window is 06:00 8 Nov (02:30Z) to 23:59 9 Nov (20:29Z) Tehran time.

## Schedule
- No scheduled event.

## Facts
- Al Jazeera/AP, 7 Nov: "Trump said on Friday that US forces had carried 'minor strikes' against Iranian air defence systems"; Trump: "they built a little bit of an anti-aircraft device, and we knocked it out in about 15 minutes, maybe five"; Iranian state media reported "two missile strikes in the Suza area of Qeshm island"; CENTCOM said the situation is "relatively calm" and an official had "no further comment" — https://www.aljazeera.com/news/2026/11/7/trump-confirms-new-us-strikes-on-irans-qeshm-island (published 2026-11-07T03:53Z, read 2026-11-07T17:52Z)
- Same page: Trump: "We're dealing with them now. They want to make a deal"; "We've made a lot of progress with Iran". Qatar's spokesman al-Ansari dismissed reports that talks had failed. "Friday's strikes are the first since Trump's Republican Party was dealt a blow in Tuesday's midterm elections."
- Guardian/AP, 7 Nov: "The US military had previously reported carrying out what it described as 'defensive' strikes on Monday, when explosions were heard on the islands of Qeshm and Hengam and in the nearby mainland area of Bandar Abbas"; Hegseth spoke with Qatar's defence minister on 6 Nov — https://www.theguardian.com/world/2026/nov/07/us-carries-out-another-round-of-minor-strikes-on-iran-trump-says (published 2026-11-07T03:07Z, read 2026-11-07T17:53Z)
- Al Jazeera, 7 Nov: "Two projectiles hit Iran's Qeshm on Friday night, the latest in a series of air strikes on the southern island over recent weeks targeting Iranian air defences and launchers"; Iran's army says it downed an MQ-9 early on 7 Nov; IRGC spokesman: missile range "limitation has been lifted for us" — https://www.aljazeera.com/news/2026/11/7/qeshm-island-and-hormuz-hit-as-mediators-try-to-prevent-us-iran-escalation (published 2026-11-07T12:22Z, read 2026-11-07T17:52Z)
- Same page: NYT (4 Nov) — Pentagon officials say forces "are poised to resume major combat operations against Iran on Trump's orders" (via the 03:53Z article above).
- Khaleej Times liveblog 7 Nov: "6:07 PM US announces new task force against Iran"; "5:32 PM US to restrict Iranian land commerce: Statement seen by Reuters"; "10:01 AM US offers $20 million reward for info on 'Iran's nuclear program': Centcom"; "7:23 AM Qatar PM says progress made in talks, believes settlement is within reach" — https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-7-2026 (modified 2026-11-07T20:58+04:00, read 2026-11-07T17:53Z; headlines only)
- Google News headlines 7 Nov: Bol News 14:39Z "U.S. CENTCOM launches Task Force Iron Gate to curb weapons shipments to Iran"; Modern Ghana 10:00Z "US strikes Iran's Qeshm island for second time this week" — Google News RSS "CENTCOM strike Iran" / "US strikes Iran Qeshm after:2026-10-15" (read 2026-11-07T17:54Z)
- Late October: Rubio on 31 Oct said the US had "yet to decide on new Iran strikes" (Arab News headline 2026-10-31T18:55Z); no US strike on Iran found in headlines 12-31 Oct — Google News RSS "US strike Iran after:2026-10-12 before:2026-11-01" (read 2026-11-07T17:54Z)
- Diplomacy dated for 8-9 Nov: none found in what I read.

## Base rate
- Class us-strike-iran-in-short-window (pipeline/reference-classes.json): own record 0 yes, 1 no; too thin.
- Own count, US-confirmed strike days on Iran, 24 Oct-7 Nov (n=15 days): 2 (Mon 2 Nov "defensive" strikes, confirmed by Trump "we hit it last night"; Fri 6 Nov "minor strikes", confirmed by Trump). Both after 1 Nov; none found 12-31 Oct. This window is about 1.75 days.
- Own series: us-iran-strike-2 (5 Nov) resolved NO (data/resolutions/2026-11-06.json).

## Schedule slip
- slip_class `none`: no scheduled event.

## Risks
- Small "defensive" strikes on Qeshm launchers or radars are now repeating every few days; confirmation has come from Trump in passing remarks to reporters, which counts if on the record.
- CENTCOM has declined to comment on reported strikes ("relatively calm"); a strike confirmed only by anonymous officials does not count.
- The Qatar channel and Trump's "a lot of progress" line could pause strikes; a decision to resume major operations would make YES near certain.
- A confirmation may not say when a strike took place; the resolver needs a time inside the window (Iranian reports of explosions can date it if the US confirms the same strike).
- Sunday-Monday after the midterms: Trump's public schedule unknown; fewer occasions for remarks.

## Sources
- https://www.aljazeera.com/news/2026/11/7/trump-confirms-new-us-strikes-on-irans-qeshm-island
- https://www.aljazeera.com/news/2026/11/7/qeshm-island-and-hormuz-hit-as-mediators-try-to-prevent-us-iran-escalation
- https://www.theguardian.com/world/2026/nov/07/us-carries-out-another-round-of-minor-strikes-on-iran-trump-says
- https://www.khaleejtimes.com/world/mena/us-israel-iran-saudi-arabia-yemen-war-live-updates-november-7-2026
- https://www.aljazeera.com/news/liveblog/2026/11/7/iran-war-live-qatar-says-us-iran-should-not-wait-to-reach-a-peace-deal
- https://news.google.com/rss/search?q=CENTCOM%20strike%20Iran&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=US%20strikes%20Iran%20Qeshm%20after%3A2026-10-15&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=%22defensive%20strikes%22%20Iran%20after%3A2026-10-10&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=US%20strike%20Iran%20after%3A2026-10-12%20before%3A2026-11-01&hl=en-US&gl=US&ceid=US:en
- https://thehill.com/policy/defense/ (403, unreachable)
- data/dossiers/2026-11-09/us-iran-strike-5.md ; data/resolutions/2026-11-06.json
