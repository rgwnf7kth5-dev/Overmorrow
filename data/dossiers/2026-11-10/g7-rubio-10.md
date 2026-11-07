# g7-rubio-10
- **Claim:** US Secretary of State Marco Rubio takes part in person in the G7 foreign ministers' meeting in Paris on 9 November 2026.
- **Criterion:** YES if on 9 Nov 2026 (00:00–23:59 Paris time) Marco Rubio is in Paris and takes part in person in at least one part of the G7 foreign ministers' meeting (a session, working meal, family photo or welcome by the host), or holds an in-person meeting in Paris with a G7 counterpart or French leaders on its sidelines, as shown by the State Department (readouts, public schedule, photos), the French foreign ministry, or reports by AFP, Reuters, AP or Le Monde. Participation by video, or by the deputy secretary or another official in his place, does not count. NO if he is not in Paris taking part on 9 Nov, including if he arrives only on 10 Nov or the meeting is postponed.
- **Event window:** 2026-11-09T00:00+01:00 to 2026-11-09T23:59+01:00 (Europe/Paris)
- **Written at:** 2026-11-07T18:16Z

## Schedule
- Meeting 9–10 Nov, moved from Marseille's Palais du Pharo to the Quai d'Orsay in Paris — Le Parisien/AFP https://www.leparisien.fr/politique/prevue-a-marseille-la-reunion-des-ministres-des-affaires-etrangeres-du-g7-aura-finalement-lieu-a-paris-05-11-2026-QNWAVLSMKFCFDO5Y7VQYCMRPMU.php (published 2026-11-05T12:27+01:00, read 2026-11-07T17:56Z) "La réunion des ministres des Affaires étrangères du G7 se tiendra lundi 9 et mardi 10 novembre à Paris, et non plus à Marseille" ; "le G7 se déroulerait au Quai d'Orsay et non plus au Palais du Pharo".
- Reason given: logistics with the Paris Peace Forum — same URL "afin de permettre à Jean-Noël Barrot ... de participer au Forum de Paris sur la paix"; Made in Marseille https://madeinmarseille.net/breves/214191-le-g7-des-affaires-etrangeres-naura-finalement-pas-lieu-a-marseille/ (published 2026-11-05T13:35Z, read 2026-11-07T17:56Z) "se tiendra finalement à Paris pour des raisons de logistiques avec le Paris Peace Forum". (BGNES instead says "because of nationwide protests"; the AFP/Le Parisien account quotes the ministry's email.)
- Rubio's trip 8–10 Nov announced by the State Department — BGNES https://www.bgnes.com/politics/rubio-to-attend-g7-foreign-ministers-meeting-in-paris (published 2026-11-06T21:12Z, read 2026-11-07T17:56Z) "US Secretary of State Marco Rubio will visit Paris from November 8 to 10 to attend a meeting of foreign ministers from the Group of Seven (G7) countries, the State Department announced." ; "advance American interests in discussions with his G7 counterparts".
- Same in headlines (Google News RSS, read 2026-11-07T17:56Z): Reuters 6 Nov 19:02 GMT "Rubio to travel to Paris to meet G7 foreign ministers next week"; Breakingthenews.net "Rubio to be in Paris from November 8-10 for G7 meeting"; AP via WOWK "Rubio will venture to France on first post-midterm foreign trip to face questions on Trump policies".
- Programme by hour (opening session/dinner on 9 Nov) not found; state.gov returns HTTP 405 to the reader, so the public schedule was not read.

## Facts
- First trip abroad since the midterm losses — BGNES (above) "This will be the top US diplomat's first overseas trip since the Republican Party's heavy losses in the midterm elections".
- Rubio said on 5 Nov he plans to serve until the end of Trump's term — BGNES (above) "serving under Trump until the end of the president's term \"has always been my plan.\""
- Agenda (earlier notes): Ukraine, Middle East/Iran, G7 ports network against drug trafficking, AI — Made in Marseille 4 Nov https://madeinmarseille.net/actualite/213992-marseille-accueille-le-g7-des-ministres-des-affaires-etrangeres/ (via world_monday.md; not re-read today).
- Precedent, March 2026 G7 FMM in France: Rubio joined only the second day — WebSearch result title (griffonnews.com, AP photo caption, not opened) "Secretary of State Marco Rubio is due to join the meeting but only on Friday" (the March meeting was Thursday–Friday 26–27 March). For November his announced dates (8–10 Nov) cover both days.
- Background Iran: Trump confirmed "minor strikes" on Qeshm on 6 Nov; tanker hit a mine in the Strait of Hormuz on 7 Nov — world_monday.md (Al Jazeera 7 Nov; not re-read).

## Base rate
- `scheduled-appearance-takes-place`: base rate 0.92 ("large; cancellations are rare"), own record 5 yes / 1 no (pipeline/reference-classes.json).

## Schedule slip
```
class                         prior   own         rate (P that the event slips)
summit-or-visit               0.04    0/11        0.017  [estimate]
```
- slip_class `summit-or-visit`. The venue has already moved once (Marseille → Paris), but the dates stayed 9–10 Nov.

## Risks
- Iran crisis or a Washington event could delay departure so that he arrives only on 10 Nov (as in March, when he joined only the second day).
- If the 9 Nov programme is only an evening dinner, a late arrival misses it; travel 8–10 Nov makes this less likely.
- Evidence: State Department readouts may be dated 10 Nov; the resolver needs reports placing him at an event on 9 Nov.

## Sources
- https://www.leparisien.fr/politique/prevue-a-marseille-la-reunion-des-ministres-des-affaires-etrangeres-du-g7-aura-finalement-lieu-a-paris-05-11-2026-QNWAVLSMKFCFDO5Y7VQYCMRPMU.php
- https://madeinmarseille.net/breves/214191-le-g7-des-affaires-etrangeres-naura-finalement-pas-lieu-a-marseille/
- https://www.bgnes.com/politics/rubio-to-attend-g7-foreign-ministers-meeting-in-paris
- https://www.wfae.org/world/2026-03-27/rubio-meets-with-other-g7-nations-for-first-time-since-iran-war (opened, relevant passage not extracted)
- https://www.diplomatie.gouv.fr/fr (homepage; no G7 programme found)
- Google News RSS (en, fr): "G7 foreign ministers Rubio France", "Rubio G7 Paris", "G7 ministres affaires étrangères Barrot", "G7 Marseille Pharo" (read 2026-11-07T17:55–17:57Z)
- WebSearch: "Rubio travel Paris G7 foreign ministers November 9 2026 State Department"; "\"Rubio\" Paris G7 \"next week\" midterms foreign ministers November 2026" (mostly March 2026 results)
- Unreachable: state.gov (HTTP 405), Reuters (refuses reader).
