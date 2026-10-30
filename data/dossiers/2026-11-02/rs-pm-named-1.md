# rs-pm-named-1

- **Claim:** By 23:59 Belgrade time on Sunday 1 November 2026, the Student List publicly names its candidate for prime minister of Serbia.
- **Criterion:** YES if, between 00:00 on 31 Oct and 23:59 CET on 1 Nov 2026, the Student List publicly names one person as its candidate for prime minister, through its official channels or an authorised spokesperson at a press conference. These do not count: media speculation, unnamed sources, or lists of several possible names. NO otherwise.
- **Event window:** 2026-10-31T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Belgrade)
- **Written at:** 2026-10-30T18:32Z

## Schedule
- **No scheduled step for naming a PM candidate.**
- **Repeat voting on 1 Nov.** RIK ordered repeat voting at 53 polling stations on Sun 1 Nov, 07:00–20:00, so final results cannot be proclaimed before then.
  - RIK 72nd session: https://www.rik.parlament.gov.rs/vest/817847/72-sednica-republicke-izborne-komisije.php (carried over from rs-pm-named-31).
  - N1 confirms: "Re-votes are scheduled to take place at 53 polling stations on Sunday, November 1" — https://n1info.rs/english/news/brnabic-claims-presidential-election-will-be-called-by-dec-27-in-accordance-with-constitution/ (published 2026-10-30 11:27Z, read 2026-10-30T18:12Z).
- **Formal sequence** — BBC Serbian via Danas https://www.danas.rs/bbc-news-serbian/kada-se-konstituise-skupstina-srbije-a-kada-se-formira-nova-vlada-posle-izbora/ (published 2026-10-26 13:40, read ~18:06Z):
  1. RIK final results.
  2. RIK report to the Assembly.
  3. Constitutive session, convened by Speaker and acting president Brnabić within 30 days.
  4. The president consults the parliamentary groups and proposes the mandatar.
  5. The government is elected within 90 days.
  - Vreme https://vreme.com/vesti/studentska-lista-studentski-pokret-sta-je-sta/ (published 2026-10-27 14:51, read ~18:05Z): "rok za kontituisanje novog sastava parlamenta je mesec dana"; "Vlada mora da bude formirana u roku od 90 dana".
- **Brnabić on 30 Oct.** She will convene the session "u najkraćem mogućem roku" after final results. The presidential election will be called by 27 Nov (RFE/RL, Bosnian service) or "by December 27" (N1).
  - RFE/RL https://www.slobodnaevropa.org/a/srbija-brnabic-predsjednicki-izbori/33887390.html (published 2026-10-30 13:49 CET, read 18:12Z).
  - N1 (above): "You won, now form the government."
  - The two reports differ on the presidential-call date.
- **Novi Sad anniversary.** 1 Nov is the anniversary of the Novi Sad canopy collapse. Students called a memorial gathering in Novi Sad (rs-pm-named-31, N1 headline).

## Facts
- **No PM candidate named as of 30 Oct ~19:00 CET.**
  - N1 English news index (curl, 2026-10-30T18:10Z) has no such headline. Student-related items are El Sarag on Health Ministry documents and "Students in Blockade reject RTS apology".
  - RFE/RL front page (curl, 18:10Z) and its 30 Oct round-up "Pet dana nove 'vlasti' u Srbiji" (https://www.slobodnaevropa.org/a/srbija-izbori-promene-vlast/33887447.html, published 2026-10-30 16:39 CET) mention no PM name.
- **Decision process.** Radomir Saičić: "Budući poslanici će birati premijera i vladu", in agreement with the student movement. Decisions are taken by plebiscite, with no hierarchy. Political scientist Stojiljković says the whole process "može da traje tri, četiri meseca". No date is given for naming a PM.
  - Source: BBC Serbian via Danas https://www.danas.rs/bbc-news-serbian/koji-su-dalji-koraci-studentske-liste-i-kako-donose-odluke-demokratski-eksperiment/ (published 2026-10-29 07:35 CET, read ~18:16Z).
- **Vreme, 27 Oct:**
  - "Koga će za premijera predložiti Studentska lista još uvek se ne zna"
  - "O sastavu nove Vlade zajednički će, kada bude konstituisana Skupština, odlučivati studenti"
  - Srdanović heading the list does not make him the mandatar.
- **Srdanović** (list head), RFE/RL earlier: "Imena, odnosno personalna rešenja u vladi, formiraće većinska grupa poslanika" (carried over from rs-pm-named-31). His RFE/RL interview of 29 Oct (https://www.slobodnaevropa.org/a/ilija-srdanovic-srbija/33886773.html, published 2026-10-29 17:38 CET) covers EU integration and no revanchism; no PM statement was found in the extracted text.
- **Names in circulation.** Kurir citing Reuters lists Šoškić, Srdanović, Bodiroga and Saičić; "u zemlji se sa nestrpljenjem očekuje odluka" — https://www.kurir.rs/vesti/politika/10147163/rojters-prognozira-ko-ce-biti-premijer-srbije (published 2026-10-28 18:41, read ~18:16Z).
- **Anadolu, 26 Oct.** The movement has not "publicly named a candidate for prime minister"; Saičić: the PM will be chosen by lawmakers "in consultation with the student movement" — https://www.aa.com.tr/en/features/explainer-serbias-students-won-the-election-but-who-will-govern/4101491 (read ~18:15Z).
- **Results.**
  - Preliminary: Student List 53.04%, about 140 of 250 seats (rs-pm-named-31).
  - Votes abroad: RIK adopted its final report on 29 Oct. The Student List had 57,756 votes, United Serbia 19,763 — https://n1info.rs/english/news/election-commission-adopts-final-report-on-votes-abroad/ (published 2026-10-29 21:04Z, read 18:13Z).

## Base rate
- **No clean class.** Carried over, not re-verified: Serbia 2012 (PM agreed about 3 weeks after the vote) and Montenegro 2020 (about 9 days). That is 0 of 2 named within one week; 31 Oct–1 Nov are days 6–7 after the 25 Oct vote.
- **Loose class `unscheduled-announcement-within-one-day`:** own record 1 yes / 18 no.
- **Our preceding claims** (rs-student-pm-named-28, -29, rs-pm-candidate-30, rs-pm-named-31): no name through 30 Oct evening.

## Schedule slip
- Slip class `none`: `node scripts/refdata/slip.mjs none` returns "unknown class none".

## Risks
- **Toward NO:**
  - The list's own stated sequence: final results, then the Assembly, then the MP group decides by plebiscite.
  - Final results are blocked until after the 1 Nov repeat vote.
  - Weekend, plus the Novi Sad anniversary on 1 Nov.
  - A leaderless structure.
  - Saičić and Stojiljković signal no rush.
- **Toward YES:**
  - Public pressure from Brnabić ("You won, now form the government") and from the EU.
  - A symbolic announcement at the anniversary is conceivable.
  - One statement is enough.
- **Ambiguity:**
  - Shortlists, a "team" or unnamed-source leaks do not count.
  - If the student movement (not the list) names someone, it may not count as "its official channels".

## Sources
- https://n1info.rs/english/news/ (curl index)
- https://n1info.rs/english/news/brnabic-claims-presidential-election-will-be-called-by-dec-27-in-accordance-with-constitution/
- https://n1info.rs/english/news/election-commission-adopts-final-report-on-votes-abroad/
- https://www.slobodnaevropa.org/ (curl index)
- https://www.slobodnaevropa.org/a/srbija-brnabic-predsjednicki-izbori/33887390.html
- https://www.slobodnaevropa.org/a/srbija-izbori-promene-vlast/33887447.html
- https://www.slobodnaevropa.org/a/ilija-srdanovic-srbija/33886773.html
- https://www.slobodnaevropa.org/a/studenti-lista-srbija-izbori-mladi-protesti-/33886827.html (no relevant text extracted)
- https://www.danas.rs/bbc-news-serbian/kada-se-konstituise-skupstina-srbije-a-kada-se-formira-nova-vlada-posle-izbora/
- https://www.danas.rs/bbc-news-serbian/koji-su-dalji-koraci-studentske-liste-i-kako-donose-odluke-demokratski-eksperiment/
- https://vreme.com/vesti/studentska-lista-studentski-pokret-sta-je-sta/
- https://www.republika.rs/vesti/politika/780219/konacni-rezultati-izbora-rik (27 Oct: final results "could be" announced Thursday; overtaken by the repeat vote)
- https://www.aa.com.tr/en/features/explainer-serbias-students-won-the-election-but-who-will-govern/4101491
- https://www.kurir.rs/vesti/politika/10147163/rojters-prognozira-ko-ce-biti-premijer-srbije
- Failed: moderndiplomacy.eu (29 Oct); the n1info English index via WebFetch (read via curl instead)
- Carried over: data/dossiers/2026-11-01/rs-pm-named-31.md
