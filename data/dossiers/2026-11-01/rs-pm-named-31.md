# rs-pm-named-31

- **Claim:** By 23:59 Belgrade time on Saturday 31 October 2026, Serbia's Student List publicly names one person as its candidate for prime minister.
- **Criterion:** YES if, between 2026-10-30T00:00:00+01:00 and 2026-10-31T23:59:59+01:00 (Europe/Belgrade), the Student List ("Studentska lista – Studenti pobeđuju") publicly announces one named person as the list's candidate for prime minister (mandatar/premijer). The announcement must come from the list's official spokespeople or leadership, or from the coordinating body of the student movement, and be reported by its official channels or by N1, RTS, RFE/RL (Slobodna Evropa), Vreme, Danas, Beta, FoNet, AP or Reuters. Media speculation, "possible" names, several names, a negotiating team, or a statement that the list will decide later do not count. NO if no single named candidate is announced in the window. (A name announced on 29 Oct would make this claim moot; the editor replaces it.)
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-31T23:59:59+01:00 (Europe/Belgrade)
- **Written at:** 2026-10-29T18:25:00Z

## Schedule
- No scheduled step for naming a PM candidate.
- Why not the suggested RIK claim: RIK decided on 28 Oct (72nd session) to hold repeat voting at 53 polling stations on **Sunday 1 Nov 2026, 07:00–20:00** — so final results cannot be proclaimed by 31 Oct. — RIK https://www.rik.parlament.gov.rs/vest/817847/72-sednica-republicke-izborne-komisije.php (session 28 Oct 2026, read 2026-10-29T18:01Z) "Поновно гласање на 53 бирачкa места спровешће се у недељу 1. новембра 2026. године, у времену од 7.00 до 20.00 часова."; RFE/RL https://www.slobodnaevropa.org/a/srbija-rik-ponavljanje-glasanja/33886458.html (published 2026-10-29 07:40Z, read 2026-10-29T18:02Z) "biće ponovljeni na 53 biračka mesta, u nedelju 1. novembra" (31 stations results undeterminable, 22 annulled; 24,438 ballots printed).
- Formal sequence (carried over): RIK final results → assembly constituted within 30 days → (acting) president consults lists and proposes PM → 90 days to elect government. — tportal (in data/dossiers/2026-10-31/rs-pm-candidate-30.md)
- 1 Nov is also the anniversary of the Novi Sad canopy collapse; students called a memorial gathering in Novi Sad (N1 English headline "Students call for memorial gathering in Novi Sad to mark anniversary of train station canopy collapse", https://n1info.rs/english/news/students-call-for-memorial-gathering-in-novi-sad-to-mark-anniversary-of-train-station-canopy-collapse/, not opened) — movement's attention on the weekend.

## Facts
- Updated preliminary results (8,338 of 8,392 stations): Student List 53.04% (2,349,689 votes), "Ujedinjena Srbija" (Vučić) 38.97% (1,726,375); only minority lists also enter parliament. — RFE/RL 33886458 (above)
- Seat projection (CeSID/Ipsos, earlier): Student List 140 of 250, Vučić coalition 103–104; majority 126. — data/dossiers/2026-10-31/rs-pm-candidate-30.md; EUobserver via running.json "Students' List 140 of 250 seats, SNS 104".
- 29 Oct, Student Movement news conference in front of the Presidency: demanded RIK "announce the final election results as soon as possible, so that the conditions to constitute the National Assembly can be created without delay"; demanded resignations (top prosecutors, BIA director Orlić, VBA director, RTS interim management, Telekom CEO). No PM name reported. — N1 https://n1info.rs/english/news/student-movement-demands-resignations-final-election-results/ (published 2026-10-29 15:15Z, read 2026-10-29T18:02Z) "announce the final election results as soon as possible"
- Radomir Saičić (academician, Student List candidate), NIN interview: aim is that forming the government "does not drag on unnecessarily or stretch to the very limits of the legally permitted timeframe", but "they intend to approach the task responsibly, without rushing into decisions"; "With 250 candidates and a larger pool of external associates … it will certainly not be difficult to select qualified people". — N1 https://n1info.rs/english/news/saicic-new-government-will-not-take-long-to-form-illegally-acquired-assets-to-be-seized/ (published 2026-10-29 09:31Z, read 2026-10-29T18:02Z)
- Srdanović (list head): names for government posts will be decided by the majority group of Student List MPs; elections end officially when RIK proclaims the results. — RFE/RL https://www.slobodnaevropa.org/a/ilija-srdanovic-studentska-lista-izbori-srbija/33885209.html (carried over from rs-pm-candidate-30) "Imena, odnosno personalna rešenja u vladi, formiraće većinska grupa poslanika"
- RFE/RL 27 Oct profile: "ostaje neizvesno ko će biti premijer Srbije"; Srdanović did not rule himself out; Šoškić one of few with senior state experience. — https://www.slobodnaevropa.org/a/srbija-studentska-lista-lica/33885271.html (carried over)
- Costa to Srdanović (27 Oct): "The priority now is to establish Parliament and the new government without delay". — N1 (carried over)
- No report of a named PM candidate as of 29 Oct ~19:00 CET: N1 English, RFE/RL and Danas front pages scanned at 2026-10-29T18:00Z (headlines on resignations demands, whistleblowers, Fitch, Saičić, repeat vote; Danas "Promene počinju odmah", BBC "Kad će biti raspisani predsednički izbori").

## Base rate
- No clean class. Carried over (not re-verified): Serbia 2012 (PM agreed ~3 weeks after the vote), Montenegro 2020 (~9 days) — 0 of 2 named within 5–6 days. 30–31 Oct are days 5–6 after the 25 Oct vote.
- Loose fit: `unscheduled-announcement-within-one-day` own record 1/17 (window here is two days).
- Our preceding claims rs-student-pm-named-28, -29 and rs-pm-candidate-30 cover 25–30 Oct; no name by 29 Oct evening.

## Schedule slip
- Slip class: none (no scheduled event). `node scripts/refdata/slip.mjs none` → "unknown class none".

## Risks
- Toward NO: the list's own sequence (RIK final results → assembly → MP group decides); final results now delayed until after the 1 Nov repeat vote; Saičić "without rushing"; weekend plus Novi Sad anniversary on 1 Nov; leaderless collective decision-making.
- Toward YES: EU pressure to move fast; a 140-seat majority; front-runners already discussed (Šoškić, Srdanović, Saičić); a symbolic announcement around the anniversary is conceivable; one press conference is enough.
- Ambiguity: "team", conditional nominations, leaks from unnamed sources do not count.

## Sources
- https://www.rik.parlament.gov.rs/ ; https://www.rik.parlament.gov.rs/vest/817847/72-sednica-republicke-izborne-komisije.php ; https://www.rik.parlament.gov.rs/vest/816164/71-sednica-republicke-izborne-komisije.php (national minority councils, 8 Nov) (curl)
- https://www.slobodnaevropa.org/ ; https://www.slobodnaevropa.org/a/srbija-rik-ponavljanje-glasanja/33886458.html ; https://www.slobodnaevropa.org/a/izbori-srbija--studentska-lista/33886019.html (video intro only) (curl)
- https://n1info.rs/english/news/ ; https://n1info.rs/english/news/student-movement-demands-resignations-final-election-results/ ; https://n1info.rs/english/news/saicic-new-government-will-not-take-long-to-form-illegally-acquired-assets-to-be-seized/ (curl)
- https://www.danas.rs/ (curl, front page)
- Carried over: data/dossiers/2026-10-31/rs-pm-candidate-30.md and its sources
