# cz-sfa-budget-1
- **Claim:** The Czech government approves the 2027 budget of the State Fund for Audiovisual at its meeting on 2 November 2026.
- **Criterion:** YES if at its meeting on 2 Nov 2026 the Czech government approves the draft 2027 budget of the State Fund for Audiovisual (Státní fond audiovize), as shown in the government's list of resolutions (vlada.gov.cz / ODOK) or stated by the government or the Culture Ministry and reported by ČTK. Postponement or withdrawal resolve NO.
- **Event window:** 2026-11-02T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-10-31T18:20:00Z. Read times below are approximate, all between 17:35Z and 18:10Z on 31 Oct.

## Schedule
- vlada.gov.cz lists a cabinet meeting on 2 Nov 2026 (programme + Dodatek č. 1 on ODOK) — https://vlada.gov.cz/cz/vlada/ (read 2026-10-31T17:50Z). The ODOK programme (https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-02) could not be read (blocked by robots rules). **Whether the SFA budget is on the 2 Nov programme is not verified at the primary source**; the date rests on the producers' account of Babiš's promise (below).

## Facts
- **Promise:** after meeting PM Babiš, APA (producers' association) chair Vratislav Šlajer said: "Slíbil, že v pondělí státní rozpočet fondu audiovize na příští rok schválí na vládě." Budget CZK 2.4bn, of which CZK 1.9bn from the state; talks on 2028 and 2029 budgets to continue — ČTK https://www.ceskenoviny.cz/zpravy/rozpocet-sfa-na-pristi-rok-by-mela-vlada-schvalit-v-pondeli-2-listopadu/2893853 (published 2026-10-27 16:57 CET, read 2026-10-31T17:40Z) "Rozpočet SFA na příští rok by měla vláda schválit v pondělí 2. listopadu" (headline). Culture Minister Klempíř attended the meeting.
- **Earlier non-approval:** "the government did not approve the fund's draft 2027 budget last week" (as of 27 Oct) — Seznam Zprávy/ČTK https://www.seznamzpravy.cz/clanek/318920 (published 2026-10-27 13:05, updated 17:10, read 2026-10-31T18:05Z), headline "Vláda schválí rozpočet fondu audiovize, slíbil Babiš. Klempíř odvolává Dvořáka". Same fact in CNN Prima News/ČTK https://cnn.iprima.cz/klempir-odvola-exsefa-ct-z-noveho-postu-dvorak-odmitl-seskrtat-podporu-na-polovinu-525579 (published 2026-10-27 13:32, read 2026-10-31T18:05Z).
- **The dispute:** Klempíř (Motoristé) asked the SFA board to cut planned 2027 support by about CZK 400m; the board refused and kept the CZK 787.5m it agreed in September. Klempíř removed board chair Petr Dvořák (ex-ČT director) effective Tue 27 Oct, citing "insufficient cooperation on savings". Dvořák called the ministry's proposal non-compliant with the law, hasty and undiscussed — Seznam Zprávy/ČTK and CNN Prima News (above).
- **Fallback:** Klempíř said that without an approved budget by year-end the fund would run on a provisional budget (max. 1/12 of the 2026 budget per month); Seznam Zprávy says this will likely not happen — Seznam Zprávy/ČTK (above).
- **Which version:** no source says whether the 2 Nov draft is the board's version (CZK 787.5m support) or one with the ministry's cut. The criterion is satisfied by approval of either version.
- **Procedure note:** the SFA budget is submitted by the government to the Chamber of Deputies for final approval; a cabinet resolution approving the draft and sending it on would count under the criterion (own reading of the criterion; not separately sourced tonight).

## Base rate
- No specific class. Schedule-slip class `cz-government-item` (prior 0.20, n=6, estimate): "material on the published agenda of a cabinet meeting is approved that day". Here the item's presence on the agenda is itself unverified. No own count for PM-promised cabinet approvals.

## Schedule slip
- `cz-government-item`: rate 0.171 [estimate], prior 0.20, own 0/1 (`node scripts/refdata/slip.mjs cz-government-item`, run 2026-10-31T18:06Z).
- Signs it may move: cabinet already declined to approve it the previous week; open conflict between the Culture Minister (Motoristé) and the fund's board; board chair replaced 27 Oct, so the board's position may be revised first; ODOK programme unverified. Signs it holds: explicit PM promise, reported by ČTK, with the minister present at the meeting.

## Risks
- Item not on the 2 Nov programme or withdrawn pending a revised draft from the reshaped board.
- Approved without public mention: the resolution list on ODOK is the fallback, but if the item passes as a non-discussed item and ČTK does not report it, verification depends on ODOK access.
- Confusion over "approval": a cabinet decision only "taking note" or returning the draft to the ministry would not count.

## Sources
- https://vlada.gov.cz/cz/vlada/
- https://www.odok.cz/portal/zvlady/jednani-detail/2026-11-02 (not readable)
- https://www.ceskenoviny.cz/zpravy/rozpocet-sfa-na-pristi-rok-by-mela-vlada-schvalit-v-pondeli-2-listopadu/2893853
- https://www.seznamzpravy.cz/clanek/318920
- https://cnn.iprima.cz/klempir-odvola-exsefa-ct-z-noveho-postu-dvorak-odmitl-seskrtat-podporu-na-polovinu-525579
- Search results only: mediaguru.cz (Klempíř odvolá Dvořáka; Fond audiovize odmítá snížení podpory), newstream.cz, blesk.cz/851382
