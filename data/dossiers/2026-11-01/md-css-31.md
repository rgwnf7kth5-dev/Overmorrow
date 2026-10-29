# md-css-31

- **Claim:** By 23:59 Chișinău time on Saturday 31 October 2026, the security council that Moldovan President Maia Sandu convened over the cyberattack on state data holds its meeting, having met on Friday 30 or Saturday 31 October.
- **Criterion:** YES if, between 2026-10-30T00:00:00+02:00 and 2026-10-31T23:59:59+02:00 (Europe/Chisinau), a meeting of Moldova's Supreme Security Council (Consiliul Suprem de Securitate; called "Consiliul Național de Securitate" in the 28 Oct Moldpres release) takes place, as shown by a presedinte.md press release, or by Moldpres, IPN, NewsMaker, ZdG or RFE/RL (Europa Liberă Moldova) reporting that the meeting was held on that date. NO if no such meeting takes place in the window (including if it was held on 29 Oct or is held on 1 Nov or later). (A meeting already held on 29 Oct would make this claim moot; the editor replaces it.)
- **Event window:** 2026-10-30T00:00:00+02:00 to 2026-10-31T23:59:59+02:00 (Europe/Chisinau)
- **Written at:** 2026-10-29T18:20:00Z

## Schedule
- No date set. Presidential office, 28 Oct: Sandu "a convocat, pentru zilele următoare, o ședință a Consiliului Național de Securitate, pentru a evalua atacul și măsurile de răspuns." — Moldpres https://www.moldpres.md/rom/oficial/presedinta-maia-sandu-subliniaza-riscurile-inteligentei-artificiale-pentru-securitatea-cibernetica-la-reuniunea-liderilor-privind-controlul-modelelor-de-frontiera-si-convoaca-consiliul-national-de-securitate (datePublished 2026-10-28T20:05Z, read 2026-10-29T18:00Z)
- ČTK/AFP: "Prezidentka Maia Sanduová svolala na příští dny zasedání Národní bezpečnostní rady, aby vyhodnotila útok a stanovila vhodná protiopatření" (presidential office statement of Wednesday 28 Oct). — ČT24/ČTK https://ct24.ceskatelevize.cz/clanek/svet/v-moldavsku-se-po-rozsahlem-kyberutoku-sejde-narodni-bezpecnostni-rada-379093 (published 2026-10-29 ~06:00, read 2026-10-29T17:58Z)
- As of 29 Oct ~20:00 Chișinău: no report of the meeting having been held. Moldpres front page (read 2026-10-29T18:00Z, page clock "29 Octombrie, 2026 / 19:59") shows the 28 Oct item as the latest on the council; NewsMaker and ZdG front pages show cyberattack stories but no council meeting. presedinte.md did not load by curl (empty reply); WebFetch returned only one undated old item (stale/partial).
- Days: 30 Oct is a Friday (working day), 31 Oct Saturday. "Zilele următoare" (the coming days) leaves 29 Oct evening and the week of 2 Nov open.

## Facts
- Attack: on government information systems 19–23 Oct per the e-Government Agency (AGE); attempt to obtain personal data linked to about 1 million personal ID numbers; about 750,000 records stolen; data incl. dates of birth, health data, IBANs; population ~2.4 million. — ČT24/ČTK (above) "pachatelům podařilo odcizit zhruba 750 tisíc datových záznamů"
- PM Vasile Tofan: the attack may be part of a wider action involving foreign state actors; AGE director Nicoleta Colomeeț dismissed. — ČT24/ČTK (above)
- Moldpres: Sandu said Moldova "se confruntă în prezent cu un atac cibernetic de amploare" and linked it to AI-facilitated attacks (at a virtual leaders' meeting on frontier AI control, 28 Oct). — Moldpres (above)
- NewsMaker 29 Oct newsletter items: "Autoritățile suspectează implicarea altor state în atacul cibernetic"; "Directoarea Agenției de Guvernare Electronică pleacă din funcție"; "CEC: Atacul cibernetic nu a afectat datele alegătorilor". — NewsMaker https://newsmaker.md/ro/ (front page, read 2026-10-29T18:00Z)
- Precedents of Sandu convening the CSS quickly after incidents (search results only, dates not opened): after the Transnistria incidents (spotmedia.ro "Maia Sandu a convocat de urgenţă Consiliul Suprem de Securitate, după incidentele din Transnistria"), after massive power cuts (bursa.ro), gas emergency (g4media.ro "reuniune de urgenta pe tema gazelor"); euronews.ro headline "Maia Sandu convoacă joi Consiliul Suprem de Securitate…" (a named-day convocation). Those were "urgent" convocations; this one was announced for "the coming days", not as urgent.

## Base rate
- No clean class. Loose fit: `unscheduled-announcement-within-one-day` (own record 1 yes / 17 no) does not apply well — the meeting has been announced, only its date is open. Own reasoning: "in the coming days" announced Wednesday evening → Thu 29, Fri 30 or the following week; the window covers two of the next ~4 working days (Thu, Fri, Mon, Tue) plus a Saturday.

## Schedule slip
- Slip class: `other-scheduled` → 0.082 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-10-29T18:03Z) — loose; there is no fixed date to slip from.
- Signs it may move: Sandu's agenda (35th independence anniversary invitations to Romanian and Ukrainian presidents per presedinte.md front page — date not checked); Romanian PM Niculescu was in Chișinău with Tofan around 28–29 Oct (Moldpres headlines). A Friday meeting is plausible after a Thursday of bilateral events.

## Risks
- Toward NO: meeting held already on Thu 29 Oct (late evening, not yet reported) → moot; or pushed to Mon 2 Nov or later; CSS meetings are not always announced in advance, and a Saturday is unusual.
- Toward YES: political pressure (750,000 records); Sandu announced it publicly; Friday is the last working day of the week.
- Resolution risk: presedinte.md unreachable from our tools; Moldpres and Moldovan outlets report CSS meetings the same day. Name confusion (Supreme vs National Security Council) — criterion accepts both.

## Sources
- https://ct24.ceskatelevize.cz/clanek/svet/v-moldavsku-se-po-rozsahlem-kyberutoku-sejde-narodni-bezpecnostni-rada-379093 (curl)
- https://www.moldpres.md/ (curl) and the Moldpres article above (curl)
- https://newsmaker.md/ro/ (curl); https://www.zdg.md/ (curl); https://www.ipn.md/ro (curl, 5 KB shell only)
- https://presedinte.md/rom/comunicate-de-presa and https://www.presedinte.md/ (curl: empty reply; WebFetch: one stale item)
- Searches: "Consiliul Suprem de Securitate ședință atac cibernetic Sandu octombrie 2026"; "Maia Sandu convoacă \"în zilele următoare\" ședința Consiliului Suprem de Securitate" (2026-10-29T18:00Z) — results only older precedents (spotmedia.ro, bursa.ro, g4media.ro, euronews.ro, presedinte.md archive pages)
