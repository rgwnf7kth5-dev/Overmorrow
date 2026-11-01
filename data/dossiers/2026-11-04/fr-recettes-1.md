# fr-recettes-1
- **Claim:** The French National Assembly adopts the first part ("recettes") of the 2027 finance bill (PLF 2027) in a vote on 3 November 2026.
- **Criterion:** YES if on 3 Nov 2026 (Paris time) the Assemblée nationale, in a public vote, adopts the first part of the projet de loi de finances pour 2027 (PLF 2027) at first reading, with more votes for than against, as shown in the Assemblée's scrutin record (assemblee-nationale.fr) or reported by LCP, AFP or Le Monde. NO if the first part is rejected. NO if the vote does not take place on 3 Nov, for example because it is postponed. NO if the government uses Article 49.3 instead of a vote, because the text is then deemed adopted without one.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-03T23:59:00+01:00 (Europe/Paris). The vote is expected after Questions au Gouvernement (15:00), roughly 16:15–17:30. Evidence read at 2026-11-03T20:00+01:00, resolved by 2026-11-04T05:00+01:00.
- **Written at:** 2026-11-01T18:35Z. Read times between 18:00Z and 18:15Z on 1 Nov unless stated.

## Schedule
- **Date confirmation (secondary source):** "Le budget de l'État reprend le mardi 27 octobre et jusqu'au lundi 2 novembre" and "Le vote des députés sur la partie recettes du budget 2027 aura lieu le mardi 3 novembre" — nosparlementaires.fr https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines (published 2026-10-11, modified 2026-10-24, read 2026-11-01T18:05Z).
- **Primary source not verified:** the Assemblée agenda page (https://www.assemblee-nationale.fr/dyn/agendas) returned a client error. The franceinfo calendar page is blocked by robots. Of the other sources read, LCP's Budget 2027 dossier gives no new date, and neither does the Deloitte note of 27 Oct, which says only "la date du vote de la 1re partie du texte a finalement été repoussée" (https://blog.avocats.deloitte.fr/plf-et-plfss-2027-point-detape/, published 2026-10-27, read 2026-11-01T18:03Z). **The morning desk should confirm the slot on the Assemblée agenda or with the conférence des présidents.**
- **Original plan, now slipped:** "Le vote solennel sur l'ensemble de la première partie aura lieu le mardi 20 octobre, après les questions au Gouvernement" — Assemblée, organisation of the budget debate https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1119828/file/organisation_discussion_budgetaire.pdf (29 Sep 2026, via sweep/world.md). LCP, 19 Oct: "le vote prévu demain à l'Assemblée va être reporté" — https://lcp.fr/actualites/budget-2027-le-marathon-de-la-partie-recettes-loin-d-etre-termine-le-vote-prevu-demain-a (published 2026-10-19 12:07, upd. 17:45, via sweep/world.md).
- The vote solennel on the whole PLF is on 17 Nov (organisation PDF, via agenda.json). The Senate takes the bill from 20 Nov.

## Facts
- **Committee:** the finance committee rejected the recettes part "almost unanimously". Only EPR voted for it, and Les Démocrates abstained — LCP https://lcp.fr/actualites/budget-2027-le-gouvernement-sur-un-fil-a-la-veille-de-l-ouverture-des-debats-a-l (published 2026-10-12 16:15, via sweep/world.md).
- **Group positions (16 Oct):**
  - PS (Glucksmann): the text is "en l'état inacceptable"; "si le texte ne bouge pas, il y aura censure".
  - RN: Le Pen prefers an "imparfait" budget to a special law; Tanguy calls pension de-indexation a "ligne rouge".
  - LFI: a censure motion if 49.3 is used.
  - LR: wants a "baisse des dépenses publiques".
  - Minister Panifous called adoption by vote "très difficile" and did not exclude 49.3.
  - Source: https://blog.iambeezy.app/fr/vote-budget-2027-assemblee-premiere-partie-impot-plfss-49-3/ (published 2026-10-16, read 2026-11-01T18:04Z; secondary aggregator).
- **Amendments in the chamber:** the windfall surtax on large companies was deleted "à deux voix près" (27 Oct), and an anti-"optimisation fiscale agressive" mechanism was adopted (evening of 27 Oct) — LCP Budget 2027 dossier https://lcp.fr/index%2Ephp/dossiers/budget-2027-440523 (read 2026-11-01T18:02Z). The text is now heavily amended. Groups that won amendments may still vote against the whole part.
- **Last year's precedent (PLF 2026):** on 21 Nov 2025 the recettes part was rejected by 404 votes to 1, with 84 abstentions (489 voting). Every group voted against except EPR (66 abstentions, 7 against) and Les Démocrates (15 abstentions). That included the government's partner Horizons (34 against) and LR (33 against) — datan.fr https://datan.fr/votes/legislature-17/vote_4241 (read 2026-11-01T18:14Z). Consequence: "celui-ci est considéré comme rejeté en première lecture" (art. 119 al. 3 of the Règlement) — Assemblée https://www.assemblee-nationale.fr/dyn/actualites-accueil-hub/projet-de-loi-de-finances-pour-2026-rejet-de-la-1ere-partie (read 2026-11-01T18:13Z).
- **Same-session precedent:** on 23 Oct 2026 the Assemblée rejected Part 1 of the PLFSS 2027 by 115 votes to 1 (agenda.json, citing franceinfo; not re-read).
- **Arithmetic:** 577 seats. Taking last year's vote as a guide, the government camp (EPR, Dem, Horizons) is about 160–170 deputies and cannot pass Part 1 alone. It needs RN or PS to abstain or vote for. Adoption needs only more "pour" than "contre" among votes cast. A mass abstention by RN (about 120) or PS (about 60) with the rest against would still lose.

## Base rate
- No class in pipeline/reference-classes.json covers a French budget-part vote. Own observation: the last two Assemblée votes on a Part 1 of a finance or social-security bill (PLF 2026 on 21 Nov 2025; PLFSS 2027 on 23 Oct 2026) were both rejections.

## Schedule slip
- `other-scheduled`: rate 0.084 [estimate], prior 0.07, own 1/11 (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-01T18:12Z).
- **This vote has already slipped once (20 Oct to 3 Nov).** The 3 Nov slot requires the Part 1 debate to finish by Monday 2 Nov, and on 19 Oct a backlog of amendments forced the delay. The government could also use 49.3 on Part 1, which would mean no vote. The date comes from a secondary source, not the Assemblée agenda.

## Risks
- Debate not finished by 2 Nov, so the vote moves to 4 Nov or later (resolves NO).
- 49.3 on Part 1 (resolves NO; the outcome is then a censure motion, not adoption).
- A surprise deal in which RN or PS abstains while the centre and LR vote for. This is the path to YES.

## Sources
- https://nosparlementaires.fr/actualites/budget-2027-calendrier-assemblee-cinq-semaines
- https://www.assemblee-nationale.fr/dyn/contenu/visualisation/1119828/file/organisation_discussion_budgetaire.pdf (via sweep)
- https://lcp.fr/index%2Ephp/dossiers/budget-2027-440523
- https://lcp.fr/actualites/budget-2027-le-marathon-de-la-partie-recettes-loin-d-etre-termine-le-vote-prevu-demain-a (via sweep)
- https://lcp.fr/actualites/budget-2027-le-gouvernement-sur-un-fil-a-la-veille-de-l-ouverture-des-debats-a-l (via sweep)
- https://blog.avocats.deloitte.fr/plf-et-plfss-2027-point-detape/
- https://blog.iambeezy.app/fr/vote-budget-2027-assemblee-premiere-partie-impot-plfss-49-3/
- https://datan.fr/votes/legislature-17/vote_4241
- https://www.assemblee-nationale.fr/dyn/actualites-accueil-hub/projet-de-loi-de-finances-pour-2026-rejet-de-la-1ere-partie
- Not readable: https://www.assemblee-nationale.fr/dyn/agendas (client error); franceinfo PLF calendar (robots)
