# fr-strike-call-10
- **Claim:** Between 06:00 on 8 November and 23:59 on 9 November 2026 (Paris time), the national intersyndicale or the CGT calls a new national interprofessional day of strikes or demonstrations on a stated date.
- **Criterion:** YES if, between 06:00 on 8 Nov and 23:59 Paris time on 9 Nov 2026, the national intersyndicale (CFDT, CGT, FO, CFE-CGC, CFTC, Unsa, FSU, Solidaires, or any group of them acting as the intersyndicale) or the CGT confederation on its own publicly calls a new national, interprofessional day of strikes and/or demonstrations with a stated date, by communiqué or on-the-record statement of its leader, as published by the union(s) or reported by AFP, Le Monde, Le Figaro, Les Echos, franceinfo or BFMTV. Calls already made before 8 Nov (Saturday marches of the youth intersyndicale and regional unions, the European housing protests, the education strike of 10 Nov), calls by single federations or regional unions, and statements that the unions "will mobilise" without a date do not count. NO if no such call is made in the window.
- **Event window:** 2026-11-08T06:00+01:00 to 2026-11-09T23:59+01:00 (Europe/Paris)
- **Written at:** 2026-11-07T18:08Z

## Schedule
- The intersyndicale meets again after the Matignon conference on Monday and decides on next steps — Sud Ouest/AFP https://www.sudouest.fr/societe/greves-et-manifestations/apres-la-greve-du-5-novembre-l-intersyndicale-attend-l-issue-de-la-conference-sociale-annoncee-par-matignon-pour-decider-des-suites-a-donner-au-mouvement-31409684.php (published 2026-11-06T08:16+01:00, modified 09:38, read 2026-11-07T18:00Z) "« L'intersyndicale se retrouvera à nouveau ce lundi à l'issue de la réunion organisée à Matignon et décidera des suites de la mobilisation »"
- Same, Le Figaro/AFP https://www.lefigaro.fr/social/colere-sociale-l-intersyndicale-decidera-des-suites-de-la-mobilisation-apres-la-reunion-de-lundi-a-matignon-20261106 (published 2026-11-06T08:45+01:00, read 2026-11-07T17:53Z) "«Rendez-vous lundi soir» , a déclaré sur RTL la secrétaire générale de la CFDT Marylise Léon"
- Conference on Monday morning at Matignon — Sud Ouest live https://www.sudouest.fr/societe/greves-et-manifestations/direct-manifestations-du-7-novembre-2026-un-acte-iv-de-la-colere-sociale-sous-haute-securite-ce-samedi-avant-la-conference-de-matignon-lundi-suivez-les-dernieres-infos-31423769.php (published 2026-11-07T18:28+01:00, read 2026-11-07T17:54Z) "convoquée lundi matin à Matignon"

## Facts
- Intersyndicale communiqué, 6 Nov: "la seule chose qui arrêtera la mobilisation c'est la réponse aux revendications" — Sud Ouest/AFP (above); signed by "la CFDT, la CGT, FO, la CFE-CGC, la CFTC, l'Unsa, la FSU et Solidaires".
- Unions deplore that civil servants and youth have no meeting — same URL "les fonctionnaires et les jeunes, mobilisés en nombre, « n'ont même pas de rendez-vous »".
- Demands: CFDT +100 euros net, CGT about +150 (10%) — Sud Ouest https://www.sudouest.fr/societe/greves-et-manifestations/mouvement-social-acte-iv-samedi-manifestations-coordonnees-en-europe-fin-novembre-quelles-suites-pour-la-mobilisation-31414814.php (6 Nov, read 2026-11-07T18:00Z) "(100 euros net pour la CFDT, environ 150 pour la CGT)"; government's stated aim is about +22 euros net to pass 1,500 — Les Echos https://www.lesechos.fr/economie-france/social/smic-le-ministre-du-travail-jean-pierre-farandou-veut-franchir-la-barre-des-1500-euros-net-2261486 (published 2026-11-06T09:20+01:00, read 2026-11-07T17:53Z) "soit 22 euros net de plus par mois".
- CGT scepticism — Sud Ouest 6 Nov (above): CGT's Denis Gravouil: "À Matignon, « ils n'ont vraiment pas grand-chose dans la besace »".
- Existing calls before the window: Saturday marches by youth intersyndicale and regional unions; Interfac march Tuesday; European housing protests end of November — Sud Ouest 6 Nov (above) "l'intersyndicale de jeunesse (Union étudiante, Fage, Unef et USL) et les unions syndicales régionales (CGT, FO, FSU, Solidaires, CFDT) appellent à occuper à nouveau le terrain dès samedi"; "des « manifestations coordonnées »" (housing, several countries).
- Turnout trend: 5 Nov 575,000 (authorities) / 1.5–1.6 million (unions); 7 Nov "entre 146.000 et 250.000 personnes ... une mobilisation en net recul" — Les Echos section headline https://www.lesechos.fr/economie-france/social (read 2026-11-07T17:53Z).
- Atlantico headline (not opened): "Conférence sociale : la CGT réclame davantage qu'un « coup de pouce » sur les salaires" (Google News RSS, 2026-11-07 08:48 GMT, read 2026-11-07T17:53Z).
- Previous union days this autumn (Les Echos 1 Nov and Le Figaro list): 17, 24, 31 Oct (Saturdays, mostly youth/CGT/Solidaires) and 5 Nov (all unions) — https://www.lesechos.fr/economie-france/social/semaine-sociale-a-haut-risque-pour-lexecutif-coup-de-pouce-significatif-en-vue-sur-le-smic-2260374 (read 2026-11-07T17:53Z) "les syndicats de salariés, tous désormais unanimes, appellent à se mobiliser sur le pouvoir d'achat le 5 novembre".

## Base rate
- no class. Closest: `unscheduled-announcement-within-one-day` own record 5/53, but here a decision meeting is scheduled for Monday evening, so the unscheduled class understates. Two actors (intersyndicale, CGT alone) are correlated, not independent.

## Schedule slip
```
class                         prior   own         rate (P that the event slips)
negotiation-round             0.15    0/7         0.069  [estimate]
```
- slip_class `negotiation-round` for the Monday conference. The intersyndicale meeting could end late or be pushed to Tuesday; a decision announced after 23:59 is NO.

## Risks
- If the government announces a Smic coup de pouce, the CFDT may judge it a first step and the intersyndicale may postpone a decision or opt for a new meeting date or a consultation, not a strike day.
- The CGT could call alone (more likely if the offer is small) — counts; Solidaires or FSU alone do not.
- The intersyndicale may announce only "rassemblements" without a national day, or regional actions — do not count unless framed as a national day with a date.
- Late-evening communiqué could fall after midnight.

## Sources
- https://www.sudouest.fr/societe/greves-et-manifestations/apres-la-greve-du-5-novembre-l-intersyndicale-attend-l-issue-de-la-conference-sociale-annoncee-par-matignon-pour-decider-des-suites-a-donner-au-mouvement-31409684.php
- https://www.sudouest.fr/societe/greves-et-manifestations/mouvement-social-acte-iv-samedi-manifestations-coordonnees-en-europe-fin-novembre-quelles-suites-pour-la-mobilisation-31414814.php
- https://www.sudouest.fr/societe/greves-et-manifestations/direct-manifestations-du-7-novembre-2026-un-acte-iv-de-la-colere-sociale-sous-haute-securite-ce-samedi-avant-la-conference-de-matignon-lundi-suivez-les-dernieres-infos-31423769.php
- https://www.lefigaro.fr/social/colere-sociale-l-intersyndicale-decidera-des-suites-de-la-mobilisation-apres-la-reunion-de-lundi-a-matignon-20261106
- https://www.lesechos.fr/economie-france/social/smic-le-ministre-du-travail-jean-pierre-farandou-veut-franchir-la-barre-des-1500-euros-net-2261486
- https://www.lesechos.fr/economie-france/social/semaine-sociale-a-haut-risque-pour-lexecutif-coup-de-pouce-significatif-en-vue-sur-le-smic-2260374
- https://www.lesechos.fr/economie-france/social (section list)
- Google News RSS (fr), "CGT conférence sociale Binet" (read 2026-11-07T17:53Z)
- Unreachable: lemonde.fr (HTTP 402).
