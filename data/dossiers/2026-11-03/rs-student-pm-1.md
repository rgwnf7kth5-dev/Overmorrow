# rs-student-pm-1
- **Claim:** By 23:59 Belgrade time on 2 November 2026, Serbia's Student List publicly names its candidate for prime minister.
- **Criterion:** YES if between 00:00 on 1 Nov and 23:59 Belgrade time on 2 Nov 2026 the Student List (its official channels or authorised representatives) publicly names a specific person as its candidate or proposal for prime minister, as reported by N1, RTS, Danas, BIRN or a wire agency. Speculation, shortlists without a single name and unnamed sources do not count. If a candidate was already officially named before 1 Nov, NO unless a different person is named in the window. NO otherwise.
- **Event window:** 2026-11-01T00:00:00+01:00 to 2026-11-02T23:59:00+01:00 (Europe/Belgrade)
- **Written at:** 2026-10-31T18:30:00Z. Read times below are approximate, all between 17:55Z and 18:15Z on 31 Oct.

## Schedule
- No date is set for naming a PM. The formal sequence runs through four steps. First, RIK publishes the final results. Second, the new National Assembly is constituted "within 30 days of the final results being announced". Third, a government is formed "within 90 days after that" (Al Jazeera, below). The PM is elected by the Assembly "nakon političkog dogovora i zvaničnog prijedloga kandidata" (Klix, below).
- **Final results are not yet in.** RIK ordered repeat voting at 53 polling stations on **Sun 1 Nov**. Novosti's related headline says 31 stations, so the count differs between sources — Novosti https://www.novosti.rs/vesti/politika/1665285/rik-objavio-najnovije-rezultate-studentska-lista-osvojila-53-04-odsto-glasova-ujedinjena-srbija-38-97-odsto (published 2026-10-29 09:10, read 2026-10-31T18:08Z). RIK then has "rok od 96 sati da objavi ukupan izveštaj o rezultatima glasanja" after receiving all local protocols — 24sedam https://24sedam.rs/politika/vesti/486594/glasanje-ce-biti-ponovljeno-na-oko-50-mesta/vest (published 2026-10-28 22:43, read 2026-10-31T18:10Z). The final results therefore fall at the earliest late on 1 Nov, and more likely later in the week (own inference).
- The acting President of the Republic is Ana Brnabić (Assembly speaker) since Vučić resigned on 27 Sep. A presidential election is due by 27 Dec — Al Jazeera (below).

## Facts
- **Preliminary results (8,338 of 8,392 polling stations):** Student List 53.04%, "Aleksandar Vučić – Ujedinjena Srbija" 38.97%, turnout 68.99% — Novosti (above). Seats: Student List 140–141, Ujedinjena Srbija 103–104 of 250, majority 126 — 24sedam (above); Al Jazeera https://www.aljazeera.com/news/2026/10/26/serbia-after-vucic-who-will-be-pm-and-when-will-a-government-be-formed (published 2026-10-26 11:28, read 2026-10-31T17:57Z).
- **Earlier RIK release:** Student List 52.65%, United Serbia 39.22%, turnout 68.78% (8,135 stations) — Serbian government https://www.srbija.gov.rs/vest/en/290649/latest-rik-data-student-list-wins-5265-united-serbia-3922-of-vote.php (published 2026-10-26, read 2026-10-31T17:58Z). Vučić conceded (tovima.com, search result only).
- **No candidate named:** the Student List "avoided highlighting single candidates". Ilija Srdanović (cardiologist, Novi Sad) is called "the most likely candidate", and nothing has been formally announced — Al Jazeera (above).
- **Šoškić speculation:** former central-bank governor Dejan Šoškić is "spominje se kao najozbiljniji kandidat … iako studenti njegovu kandidaturu zvanično nisu potvrdili" — Klix https://www.klix.ba/vijesti/regija/dejan-soskic-najozbiljniji-kandidat-za-novog-premijera-srbije-vec-je-najavio-lustraciju-i-provjeru-porijekla-imovine/261026162 (published 2026-10-26 12:34, read 2026-10-31T18:12Z).
- **Šoškić on timing (27 Oct):** "Ja sam samo jedan od 250 ravnopravnih kandidata". On naming the PM: "Očekujem to relativno brzo". He said it depends on RIK publishing final results, given the repeat voting, and that parliament comes first, then the government — Mondo https://mondo.rs/Info/Politika/a2302822/dejan-soskic-o-delovanju-van-institucija.html (published 2026-10-27 22:56, read 2026-10-31T18:14Z).
- **Other names:** Reuters ran a list of four possible PMs, including a basketball figure. This is from a sidebar headline only (24sedam, above), and the list was not read.
- No source read up to 31 Oct ~18:15Z reports an official Student List PM name. The candidate research file also cites RFE/RL of 26 Oct for "no PM candidate officially named" (not re-read).

## Base rate
- Loose class: `coalition-deal-announced-short-window` (pipeline/reference-classes.json), base_rate 0.3, own record 1 YES / 6 NO. The fit is partial: this is a single-party majority naming a PM, not a coalition deal.
- Alternative: `unscheduled-announcement-within-one-day`, own record 1 YES / 18 NO, base_rate null.

## Schedule slip
- slip_class `none`: `node scripts/refdata/slip.mjs none` gives "unknown class none" (run 2026-10-31T18:07Z).
- Signs it may move later: Šoškić ties the naming to final RIK results, which cannot come before the 1 Nov repeat vote plus counting (up to 96 h). The movement has avoided single leaders throughout, and the constitutive session is weeks away.

## Risks
- **Toward YES:** the movement could pre-announce its nominee right after the repeat vote to end speculation, for example on Mon 2 Nov at a press conference. A named "proposal" in an interview by an authorised representative would count.
- **Toward NO:** the stated sequencing (final results, then Assembly, then government), the movement's collective, leaderless style, and the fact that the formal nomination is the acting President's after consultations.
- **Resolution ambiguity:** "authorised representatives" is loose for a horizontally organised movement. One candidate saying "I am ready to be PM" may or may not count.

## Sources
- https://www.aljazeera.com/news/2026/10/26/serbia-after-vucic-who-will-be-pm-and-when-will-a-government-be-formed
- https://www.srbija.gov.rs/vest/en/290649/latest-rik-data-student-list-wins-5265-united-serbia-3922-of-vote.php
- https://www.novosti.rs/vesti/politika/1665285/rik-objavio-najnovije-rezultate-studentska-lista-osvojila-53-04-odsto-glasova-ujedinjena-srbija-38-97-odsto
- https://24sedam.rs/politika/vesti/486594/glasanje-ce-biti-ponovljeno-na-oko-50-mesta/vest
- https://www.klix.ba/vijesti/regija/dejan-soskic-najozbiljniji-kandidat-za-novog-premijera-srbije-vec-je-najavio-lustraciju-i-provjeru-porijekla-imovine/261026162
- https://mondo.rs/Info/Politika/a2302822/dejan-soskic-o-delovanju-van-institucija.html
- https://dnevnik.hr/vijesti/svijet/dejan-soskic-o-situaciji-u-srbiji-nakon-pobjede-studenata-na-izborima---1010442.html (fetch failed)
- Search results only: vreme.com, rts.rs, kurir.rs, telegraf.rs, euronews.rs (RIK results); jabuka.tv, tportal.hr, index.hr, nezavisne.com, 6yka.com (Šoškić profiles); tovima.com
