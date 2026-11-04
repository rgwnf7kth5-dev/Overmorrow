# pl-kier-1
Claim: On 6 November 2026 the Sejm votes on the no-confidence motion against Interior Minister Marcin Kierwiński and the motion fails.
Criterion: YES if between 00:00 and 23:59 Warsaw time on 6 Nov 2026 the Sejm holds the vote on the motion of no confidence in Marcin Kierwiński (druk 3279) and it gets fewer than 231 votes in favour, according to the Sejm voting record for the 68th sitting. NO if the motion gets 231 or more, or if no vote on it is held in that time.
Deadline: 2026-11-06T23:59:00+01:00
Written at (UTC): 2026-11-04T18:05:00Z

## Schedule
Sejm's approximate timetable for the 68th sitting, published after the Presidium and Senior Convent: https://api.sejm.gov.pl/sejm/term10/proceedings/68 (read 2026-11-04T17:53Z). The order can change.

## Facts
Timetable, Fri 6 Nov: 10:05 Metsola address; 12:15-13:30 report on the 2027 budget companion bill (druk 3154); 14:30-16:15 no-confidence motion against Kierwiński; 16:15-18:00 votes — https://api.sejm.gov.pl/sejm/term10/proceedings/68 (read 2026-11-04T17:53Z) "Wniosek o wyrażenie wotum nieufności wobec Ministra Spraw Wewnętrznych"
The 16:15 vote block lists third readings of older bills and does not itemise the Kierwiński motion or druk 3154; the voting note published so far covers only 5 Nov — https://api.sejm.gov.pl/sejm/term10/proceedings/68 (same read) "Głosowania, w tym"
Motion dated 22 Oct, delivered 29 Oct, PiS signatories, before the Tribunal events of 30 Oct — https://api.sejm.gov.pl/sejm/term10/prints/3279/3279.pdf (read 2026-11-04T17:58Z) "o wyrażenie wotum nieufności"
Earlier no-confidence votes (for-against), Sejm voting records: Krajewski 201-235 (26 Feb), Hennig-Kloska 213-238 and Sobierańska-Grenda 212-238 (30 Apr), Kierwiński 202-232 (10 Jun), Domański 204-234 (20 Oct) — https://api.sejm.gov.pl/sejm/term10/votings/{52,56,59,67} (read 2026-11-04T17:53Z)
Timetable, Thu 5 Nov: 15:45-16:30 Council of Ministers' request on the Belarus border limit (druk 3276), votes at 16:30 and 21:00 — https://api.sejm.gov.pl/sejm/term10/proceedings/68 (same read) "czasowego ograniczenia prawa do złożenia wniosku"
Request dated 29 Oct, 60 more days; latest extending regulation dated 15 Sep 2026 — https://api.sejm.gov.pl/sejm/term10/prints/3276/3276.pdf (read 2026-11-04T17:52Z) "na czas oznaczony, wynoszący 60 dni"
Earlier consents: 406-16-5 on 3 Jul 2026, 418-16-4 on 4 Sep 2026 — https://api.sejm.gov.pl/sejm/term10/votings/61, https://api.sejm.gov.pl/sejm/term10/votings/64 (read 2026-11-04T17:51Z). Next planned sitting is 17-19 Nov.
Budget companion bill: first reading 8 Oct, rejection motion failed 198-236 — https://api.sejm.gov.pl/sejm/term10/votings/66 (read 2026-11-04T17:51Z). Previous year: 2026 companion act passed 240-203 on 7 Nov 2025, the last day of the sitting — https://api.sejm.gov.pl/sejm/term10/votings/44 (read 2026-11-04T17:58Z). The 2027 budget itself is still in committee opinions on 5-6 Nov — https://api.sejm.gov.pl/sejm/term10/committees/FPB/sittings (read 2026-11-04T17:52Z). No committee report print for druk 3154 yet at reading.
Tribunal: no item on the Sejm timetable; Nawrocki gave Tusk until 11 Nov (see planning story pl-tribunal); disciplinary moves against Święczkowski proceed, no dated step in the window found — https://notesfrompoland.com/2026/11/03/disputed-polish-constitutional-court-holds-first-meeting-after-takeover-by-government-backed-judges/ (read 2026-11-04T17:54Z) "moved forward with disciplinary proceedings"

## Base rate
none in pipeline/reference-data. Own count from Sejm records: 5 of 5 such motions read in 2026 failed, with 201-213 votes in favour.

## Schedule slip
other-scheduled 0.142 (node scripts/refdata/slip.mjs other-scheduled). Timetable is approximate; the Sejm sat late on many Fridays, and the sitting may run past the block but the day ends at 23:00 in the timetable.

## Risks
A vote carried over to the next sitting; an ad hoc break over the Tribunal dispute; coalition absences would matter only with a defection of over 30 votes.

## Sources
https://api.sejm.gov.pl/sejm/term10/proceedings/68
https://api.sejm.gov.pl/sejm/term10/votings/59
https://api.sejm.gov.pl/sejm/term10/votings/61
https://api.sejm.gov.pl/sejm/term10/votings/64
https://api.sejm.gov.pl/sejm/term10/votings/66
https://api.sejm.gov.pl/sejm/term10/votings/44
https://api.sejm.gov.pl/sejm/term10/prints/3279/3279.pdf
https://api.sejm.gov.pl/sejm/term10/prints/3276/3276.pdf
https://notesfrompoland.com/2026/11/03/disputed-polish-constitutional-court-holds-first-meeting-after-takeover-by-government-backed-judges/
