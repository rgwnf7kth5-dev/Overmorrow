# rs-call-23
- **Claim:** Speaker Aleksandar Čupić signs the decision calling Serbia's presidential election between 05:00 CET on Saturday 21 November and 23:59 CET on Sunday 22 November 2026.
- **Criterion:** YES if, between 05:00 on Sat 21 Nov 2026 and 23:59 on Sun 22 Nov 2026 (Europe/Belgrade), Aleksandar Čupić, as Speaker of the National Assembly performing the duties of President of the Republic, signs (adopts) the decision calling the election for President of the Republic (Odluka o raspisivanju izbora za predsednika Republike), as published in the Službeni glasnik or announced by the National Assembly / Presidency, or reported by RTS, Tanjug, N1, Danas or Insajder. NO if no such decision is signed in that window. A report published after 23:59 about a decision signed within the window counts.
- **Event window:** 2026-11-21T05:00+01:00 – 2026-11-22T23:59+01:00 (Europe/Belgrade)
- **Evidence expected:** announcement by Čupić / the Assembly and RTS/Tanjug/N1 reports the same day; decision in the Službeni glasnik within days. evidence_at 2026-11-22T22:00+01:00.
- **Deadline (resolves by):** 2026-11-24T05:00:00+01:00
- **Written at:** 2026-11-20T18:15Z

## Schedule
- **Not called on Friday 20 Nov — he said explicitly he would not call it that day.** N1 (FoNet), 20 Nov: "On je dodao da izbore neće raspisati danas, ali će ta procedura biti obavljena narednih dana." — https://n1info.rs/vesti/cupic-raspisacu-predsednicke-izbore-u-narednih-nekoliko-dana/ (published 2026-11-20T10:09+01:00, read 2026-11-20T18:06Z). B92 English: "He added that he would not call the elections today, but that the procedure would be completed in the coming days." — https://www.b92.net/english/politics/286587/cupic-speaks-out-on-presidential-elections/vest (published 2026-11-20T10:36+01:00, read 18:05Z). No report of a call later on Friday found as of 19:06 CET (Google News RSS searches in Serbian, read 18:05–18:06Z).
- No date announced for the call; only "u narednih nekoliko dana", and the legal deadline: "Rok je veoma kratak i izbori treba da budu raspisani do 27. novembra" (N1, above).
- Vote dates: B92: "Under the law and the Constitution, only two dates are possible: December 20 or December 27." Rule: "Od dana raspisivanja izbora do dana glasanja ne može proteći manje od 30 ni više od 60 dana" (N1), and the vote must be held within three months of the end of the mandate (Vučić resigned 27 Sep → by 27 Dec). Arithmetic: since he did not call it on 20 Nov, 20 Dec is no longer reachable (a call on 21 Nov leaves 29 days); any call between 21 and 27 Nov points to a vote on 27 Dec. So a weekend call gains nothing on the date of the vote versus a call on Mon 23–Fri 27 Nov.
- Known commitments: Čupić is a guest on N1's "Utisak nedelje", Sun 22 Nov at 20:30 — https://n1info.rs/najave-emisija/utisak-nedelje-gosti-aleksandar-cupic-ivanka-popovic-i-stefan-surlic/ (published 2026-11-20T10:57+01:00, read 18:06Z). He is expected to represent Serbia at the EU–Western Balkans summit in Brussels on Wed 25 Nov — N1 https://n1info.rs/vesti/n1-saznaje-cupic-ce-predstavljati-srbiju-na-samitu-eu-i-zapadnog-balkana-u-briselu/ (published 2026-11-20T14:00+01:00, read 18:06Z) "trebalo bi da predstavlja Srbiju na samitu Evropske unije i Zapadnog Balkana, koji će biti održan u sredu, 25. novembra".

## Facts
- Čupić elected Speaker on Thu 19 Nov (140 votes) and is acting President; the constituent sitting ended late on 19 Nov after three days — B92 (above) "The parliament's inaugural session concluded late last night, after three days of proceedings."
- 90-day government-formation clock running since the Assembly was constituted — B92 (above).
- Fri 20 Nov: after the sitting, Čupić painted a faculty building with students; headline: "Predsedničke izbore raspisaće za nekoliko dana" — KoSSev via Google News RSS (published 2026-11-20T14:20Z; article not opened).
- SNS may not field a candidate; decision by its bodies in December, extraordinary SNS congress 13 Dec — Glas Slavonije (HINA) https://glas-slavonije.hr/novosti/svijet/2026/11/20/sns-bez-kandidata-za-predsjednika-799010/ (published 2026-11-20T18:40+01:00; via board-check-g2.json). No formal Student List candidate yet (board-check-g2.json, rs-student-list-president).
- Correction to the candidate note: the note says a call by 27 Nov puts the vote "between about 27 Dec and 26 Jan"; the three-month rule and B92/Čupić limit the vote to 27 Dec at the latest.

## Base rate
- No reference class in pipeline/reference-data/. Serbian precedents (desk knowledge carried from rs-call-22, not re-verified): 2012 call one day after Tadić's resignation; 2017 (2 Mar for 2 Apr) and 2022 (15 Feb for 3 Apr) close to the earliest useful date for the chosen vote day. None known to have been signed on a weekend (not verified).

## Schedule slip
- slip_class: none — unscheduled decision, legal last date 27 Nov (Fri). `node scripts/refdata/slip.mjs other-scheduled` (generic) 0.069 [estimate] — not applicable.
- Signs it may come later: no date given; weekend; the vote date (27 Dec) is the same for any call on 21–27 Nov, so there is no calendar pressure to act on the weekend; Čupić has a TV appearance Sunday evening and a Brussels trip Wednesday.
- Signs it may come soon: "u narednih nekoliko dana"; the deadline is "veoma kratak"; a Sunday-evening TV interview could be an occasion to announce a just-signed decision.

## Risks
- He signs on Monday 23 Nov or later → NO.
- Signing late Sunday night but reported only on Monday: counts if the decision is dated/signed within the window; dating ambiguity (decision dated 23 Nov but signed Sunday night) could complicate resolution — rely on the date on the decision in the Službeni glasnik.
- Announcing an intended date (e.g. on "Utisak nedelje") without signing is not a YES.

## Sources
- https://n1info.rs/vesti/cupic-raspisacu-predsednicke-izbore-u-narednih-nekoliko-dana/
- https://n1info.rs/english/news/parliament-speaker-cupic-presidential-vote-to-be-called-in-coming-days/
- https://www.b92.net/english/politics/286587/cupic-speaks-out-on-presidential-elections/vest
- https://n1info.rs/vesti/n1-saznaje-cupic-ce-predstavljati-srbiju-na-samitu-eu-i-zapadnog-balkana-u-briselu/
- https://n1info.rs/najave-emisija/utisak-nedelje-gosti-aleksandar-cupic-ivanka-popovic-i-stefan-surlic/
- https://glas-slavonije.hr/novosti/svijet/2026/11/20/sns-bez-kandidata-za-predsjednika-799010/ (via board-check-g2.json)
- https://n1info.rs/ (link list)
- Google News RSS: "Čupić raspisivanje predsedničkih izbora", "Cupic raspisaće izbore", "Čupić izbori 27. decembar" (read 2026-11-20T18:05–18:06Z)
- data/dossiers/2026-11-22/rs-call-22.md (earlier dossier)

## Unreachable
- None refused. RTS, Tanjug and parlament.gov.rs not opened.
