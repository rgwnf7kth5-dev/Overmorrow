# rs-call-25
- **Claim:** By 23:59 Belgrade time on Tuesday 24 November 2026, Speaker and acting President Aleksandar Čupić formally calls (raspisuje) the early presidential election in Serbia.
- **Criterion:** YES if, between 20:00 on Sun 22 Nov and 23:59 on Tue 24 Nov 2026 (Europe/Belgrade), the Speaker of the National Assembly signs the decision calling the election of the President of the Republic (odluka o raspisivanju izbora za predsednika Republike), as shown by the decision in the Službeni glasnik, a National Assembly or RIK (Republička izborna komisija) notice, or reported by RTS, Tanjug, Beta, FoNet or N1. An announcement of intent or of a date without a signed decision does not count. NO if no such decision is signed in the window (including when it is signed on 25–27 Nov). If the decision was signed before 20:00 on 22 Nov the claim is void. A report published after 23:59 about a decision signed in the window counts.
- **Event window:** 2026-11-22T20:00:00+01:00 – 2026-11-24T23:59:00+01:00 (Europe/Belgrade)
- **Evidence expected:** RTS/Tanjug report on the day of signing; Službeni glasnik publication the same or next day; RIK then adopts the election timetable. evidence_at 2026-11-25T12:00:00+01:00.
- **Resolves by:** 2026-11-26T05:00:00+01:00
- **Written at (UTC):** 2026-11-22T18:10Z

## Schedule
- No date for the call has been announced. Legal deadline 27 Nov: "Izbori moraju da budu raspisani najmanje 30 dana pre dana glasanja, što bi u ovom slučaju značilo da je poslednji rok za raspisivanje 27. novembar, prema Zakonu o predsedniku Republike. To znači da predsednički izbori moraju da budu održani najkasnije 27. decembra." — BBC News na srpskom via Naslovi.net https://naslovi.net/2026-11-21/bbc-news/kad-ce-biti-raspisani-predsednicki-izbori-u-srbiji-i-ko-ce-naslediti-vucica/42539247 (published 2026-11-21, read 2026-11-22T17:55Z).
- Čupić, day after his election as Speaker: "predsednički izbori biće raspisani u narednih nekoliko dana, u roku predviđenom propisima" (to FoNet; same BBC article). Headlines 20 Nov: RTS 09:06 GMT "Čupić: Raspisaću predsedničke izbore u narednih nekoliko dana"; Blic 09:12 "Rok je veoma kratak"; Mašina 09:40 "Predsedničke izbore raspisaću u narednih nekoliko dana, rok je 27. novembar"; Politika 10:18 "Predsednički izbori biće raspisani do 27. novembra"; repeated by N1 21 Nov 11:27 and Danas 22 Nov 11:47 GMT ("Čupić: Predsednički izbori biće raspisani u narednih nekoliko dana") — Google News RSS search "Čupić predsednički izbori" (read 2026-11-22T17:55Z).
- **Not yet called as of Sun 22 Nov evening:** Nova.rs headline 22 Nov 17:15 GMT "Predsednički izbori moraju biti raspisani do 27. novembra: Ovo su mogući kandidati, oglasili se Dačić i Karić" (Google News RSS, read 17:55Z). No report of a signed decision found.
- Čupić gives an RTS interview on Sun 22 Nov at 20:05 "o planovima, prioritetima i odgovornosti" — RTS https://www.rts.rs/vesti/politika/6089627/predsednik-skupstine-aleksandar-cupic--u-intervjuu-za-rts-o-planovima-prioritetima-i-odgovornosti-2005.html (read 2026-11-22T17:55Z). He may name a day there.

## Facts
- Legal frame: the Speaker calls the election; "od dana raspisivanja do dana glasanja mora proći najmanje 30, a najviše 60 dana"; voting day must be a non-working day; with Vučić's resignation on 27 Sep the vote must be held within three months, by 27 Dec (a Sunday) — Vreme https://vreme.com/vesti/aleksandar-vucic-ostavka-kada-ce-biti-predsednicki-izbori-srbija/ (published 2026-09-16, read 17:55Z). Constitution art. 120: the Speaker may stand in for the President for at most three months — N1 https://n1info.rs/vesti/predsednik-ostavka-predsednicki-izbori-rokovi/ (published 2026-09-28, read 17:55Z).
- Consequence (own arithmetic from the rules above): a call on 22–27 Nov allows only voting days from 22–27 Dec onward and no later than 27 Dec, i.e. in practice Sun 27 Dec (or Sat 26 Dec). Sun 20 Dec would have required a call by 20 Nov and is no longer possible.
- The previous acting president, Ana Brnabić, said on 30 Oct the elections would be called "in accordance with the law, by November 27" — B92 https://www.b92.net/english/politics/280780/brnabic-presidential-elections-to-be-called-by-november-27/vest (published 2026-10-30T12:15+01:00, read 17:55Z); she did not call them before the new Assembly took over (BBC above).
- Context: Student List holds an absolute majority (140 of 250, board question rs-student-list-president); new Assembly constituted 17 Nov, Čupić elected Speaker ~19 Nov and became acting President (Nedeljnik headline 19 Nov "Čupić postaje i v.d. predsednika Srbije"). Student List has a candidate but has not named them ("Imamo kandidata, ali još ne izlazimo sa imenom", Jovo Bakić; BBC above). Vučić says SNS participation is "besmisleno" in current conditions (BBC above).
- Čupić's schedule: headline 021.rs 20 Nov 15:50 GMT "Čupić predstavlja Srbiju na samitu EU i Zapadnog Balkana u Briselu" (date of the summit not confirmed in this run).
- Board context (data/watchlist.json): rs-student-list-president (Student List candidate elected by 24 Jan 2027) and rs-vucic-prime-minister (Vučić elected PM by 31 Jan 2027). The call date affects neither directly; the polling day (27 Dec) and a possible run-off two weeks later bear on the 24 Jan deadline of rs-student-list-president.

## Base rate
- No reference class for "official calls an election on a given day before a legal deadline". Nearest own-record class `unscheduled-announcement-within-one-day` 14 yes / 74 no (pipeline/reference-classes.json), but here the act is certain within five days (22–27 Nov) and the question is only whether it falls in the first ~2.2 days. Serbian precedent: Vučić called the 25 Oct parliamentary election promptly (N1, "Vučić raspisao izbore za 25. oktobar"); Brnabić delayed the presidential call for two months up to the deadline window.

## Schedule slip
- slip_class `none` (no announced date). The legal deadline (27 Nov) is fixed; signing on Wed 25 – Fri 27 Nov is NO here.

## Risks
- Čupić signs on 25–27 Nov (e.g. after the Brussels trip or after consultations) → NO.
- He signed already on Sun 22 Nov before 20:00 (not reported as of 17:15 GMT) → void.
- Announcement of a date without a signed decision is NO; ambiguous wording in reports ("najavio" vs "raspisao") — check for the decision text.

## Sources
- https://naslovi.net/2026-11-21/bbc-news/kad-ce-biti-raspisani-predsednicki-izbori-u-srbiji-i-ko-ce-naslediti-vucica/42539247
- https://www.b92.net/english/politics/280780/brnabic-presidential-elections-to-be-called-by-november-27/vest
- https://vreme.com/vesti/aleksandar-vucic-ostavka-kada-ce-biti-predsednicki-izbori-srbija/
- https://n1info.rs/vesti/predsednik-ostavka-predsednicki-izbori-rokovi/
- https://vreme.com/en/vesti/zasto-jos-uvek-nisu-raspisani-predsednicki-izbori/
- https://www.rts.rs/vesti/politika/6089627/predsednik-skupstine-aleksandar-cupic--u-intervjuu-za-rts-o-planovima-prioritetima-i-odgovornosti-2005.html
- Google News RSS searches "Čupić predsednički izbori", "raspisani predsednički izbori" (headlines only)
- data/watchlist.json (rs-student-list-president, rs-vucic-prime-minister)
- WebSearch: "Čupić raspisivanje predsedničkih izbora datum"; "Čupić raspisaću predsedničke izbore u narednih nekoliko dana rok 27. novembar datum izbora decembar"

## Unreachable
- danas.rs / nova.rs / 021.rs article pages (section pages gave no matching links; 021 search 404).
