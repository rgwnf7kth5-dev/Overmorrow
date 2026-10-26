# cz-babis-vladislav-28
- **Claim:** Prime Minister Andrej Babiš attends the state honours ceremony in Vladislav Hall at Prague Castle on the evening of 28 October 2026.
- **Criterion:** YES if Andrej Babiš is present in Vladislav Hall, Prague Castle, during the state honours ceremony on 28 Oct 2026 (programme 20:00 Prague time), as reported by ČTK, Czech Television (incl. its live broadcast or recording) or the Office of the President (hrad.cz), or shown in their photographs or footage. NO if he does not attend (including if reports say he was absent or excused himself), or if the ceremony is not held on 28 Oct 2026 between 19:00 and 23:59 Prague time.
- **Deadline (event window end):** 2026-10-28T23:59:59+01:00
- **Written at:** 2026-10-26T19:35:00+01:00

## Schedule
- Official Castle programme (hrad.cz release 20 Oct 2026 13:57) — https://www.hrad.cz/cs/pro-media/tiskove-zpravy/aktualni-tiskove-zpravy/program-prezidenta-republiky-pri-prilezitosti-oslav-statniho-svatku-ceske-republiky-28.-rijna-2026-19595 [hrad.cz is 403 to our fetcher; text read from a news-site mirror, URL in the signals file] (published 2026-10-20 13:57, read 2026-10-26T18:19Z) "20:00 – slavnostní ceremoniál udílení státních vyznamenání ve Vladislavském sále".
- Babiš's own diary: Algeria 26–27 Oct, back in Prague for Fico 27 Oct 16:30 (vlada.gov.cz 229505) and hosts Magyar 29 Oct from 11:30 (vlada.gov.cz 229523) — from desk sweep czech.json. No government programme item for 28 Oct evening found; no statement of his plans for 28 Oct found.

## Facts
- 30 Jun 2026: Babiš skipped Pavel's appointment of CGS Hlaváč at the Castle (whom Babiš had pushed for); only Def. Min. Zůna and committee chair Flek came; Pavel hoped the "modest attendance" "není odrazem pozornosti věnované armádě a naší bezpečnosti" — Forum24 https://www.forum24.cz/odvahu-ma-jen-doma-v-kuchyni-boji-se-prezidenta-babis-schytal-ostrou-kritiku-za-neucast-na-hrade (published 2026-06-30, read 2026-10-26T18:19Z).
- 21 Aug 2026: Babiš did not attend the invasion-anniversary event at Czech Radio where Pavel spoke (excused, visit to South Bohemia) — ČTK https://www.ceskenoviny.cz/zpravy/2864296 (published 2026-08-21 11:35, read 2026-10-26T18:05Z) "Babiš … se omluvil".
- 2023 (as opposition leader): Babiš was a confirmed guest of Pavel's first ceremony; he complained his wife was not invited — CNN Prima https://cnn.iprima.cz/babis-zamiri-na-hrad-bez-manzelky-nedostala-pozvani-manzel-nerudove-prijit-mohl-pripomnel-415937 (published 2023-10-27 07:46, read 2026-10-26T18:10Z) "Mám to stejně jako při inauguraci, takže moji paní nepozvali." Actual attendance that evening not confirmed by the pages read.
- 2025: then-PM Fiala attended the ceremony (left with his wife afterwards) — Seznam Zprávy https://seznamzpravy.cz/clanek/domaci-politika-statni-vyznamenani-2025-online-290199 (published 2025-10-28 18:00, read 2026-10-26T18:10Z) "Následně odešel i premiér Petr Fiala s manželkou." Babiš's 2025 attendance not reported in the pages read.
- 2021 (as PM): when Zeman was hospitalised, Babiš proposed postponing the ceremony and refused to hand out decorations himself — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/babis-navrhuje-odlozit-udelovani-vyznamenani-k-28-rijnu-sam-je-predavat-nechce-28025 (published 2021-10-20, read 2026-10-26T18:19Z) "Určitě žádné vyznamenání nebudu předávat, nebylo by to vhodné."
- Current conflict: fee-abolition bill — Pavel 24 Oct: the night vote "podkopává víru v dobré úmysly"; Babiš the same day told the opposition to "přestala lhát, strašit" — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/zpusob-jednani-o-poplatcich-dle-pavla-budi-pochyby-o-zamerech-predkladatelu-378978 (published 2026-10-24 15:22, read 2026-10-26T18:20Z). Coalition overrode vetoes on stripping the president's power over heads of permanent missions; opposition filed at the Constitutional Court 23 Oct — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/vyjadreni-opozice-k-omezeni-pravomoci-prezidenta-379024 (published 2026-10-26, from desk sweep).
- Babiš countersigns the honours list as PM (practice under Zeman, 2021) — ČT24 2021 article above: Babiš "had countersigned the list" (summary).
- Babiš and Pavel discuss matters at meetings of constitutional officials (26 Jan 2026 meeting mentioned) — ČTK https://www.ceskenoviny.cz/index_view.php?id=2766920 (published 2026-01-07 15:53, read 2026-10-26T18:13Z).

## Base rate
- Own count (non-systematic, from pages read): sitting PM present at the 28 Oct Castle ceremony — Fiala 2025 yes; earlier years not verified tonight. Babiš's record at Pavel's Castle events in 2026: Hlaváč appointment 30 Jun absent; (21 Aug event outside the Castle) absent. n too small; no reference class in pipeline/reference-data/ applies.

## Schedule slip
- other-scheduled: 0.150 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`). Programme official, no sign of change.

## Risks
- Attendance may go unreported if routine; resolver must check ČT recording (front row of constitutional officials) or ČTK photos — absence of a report is not NO; leave pending.
- Babiš could attend daytime events (Vítkov) but skip the evening, or vice versa; only the evening ceremony counts.
- Late arrival/early departure still counts as present during the ceremony.
- A demonstrative boycott over the fee/powers dispute is possible; equally, the ceremony is the top state event and absence of the PM would be a major snub.

## Sources
- https://www.forum24.cz/odvahu-ma-jen-doma-v-kuchyni-boji-se-prezidenta-babis-schytal-ostrou-kritiku-za-neucast-na-hrade
- https://www.ceskenoviny.cz/zpravy/2864296
- https://cnn.iprima.cz/babis-zamiri-na-hrad-bez-manzelky-nedostala-pozvani-manzel-nerudove-prijit-mohl-pripomnel-415937
- https://cnn.iprima.cz/sledujte-zive-special-k-oslavam-28-rijna-komu-petr-pavel-udeli-statni-vyznamenani-416070
- https://seznamzpravy.cz/clanek/domaci-politika-statni-vyznamenani-2025-online-290199
- https://ct24.ceskatelevize.cz/clanek/domaci/babis-navrhuje-odlozit-udelovani-vyznamenani-k-28-rijnu-sam-je-predavat-nechce-28025
- https://ct24.ceskatelevize.cz/clanek/domaci/zpusob-jednani-o-poplatcich-dle-pavla-budi-pochyby-o-zamerech-predkladatelu-378978
- https://www.ceskenoviny.cz/index_view.php?id=2766920
- From desk sweep: vlada.gov.cz 229505, 229523; ct24 …379024
