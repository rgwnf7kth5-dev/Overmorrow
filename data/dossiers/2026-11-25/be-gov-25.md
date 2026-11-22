# be-gov-25
- **Claim:** By 23:59 Brussels time on Tuesday 24 November 2026, Prime Minister Bart De Wever's five-party coalition (N-VA, MR, Les Engagés, Vooruit, CD&V) announces an agreement on the 2027 federal budget.
- **Criterion:** YES if, between 20:00 on Sun 22 Nov and 23:59 on Tue 24 Nov 2026 (Europe/Brussels), the Prime Minister, the Royal Palace or the five coalition parties jointly announce that the federal government has reached an agreement on the 2027 budget (the multi-year consolidation package under negotiation), as reported by Belga, VRT NWS, RTBF, De Standaard or Le Soir. An agreement on only part of the package, a "framework" accepted by fewer than all five parties, a deal to keep negotiating, or the provisional twelfths do not count. NO otherwise, including if the government falls or the King accepts its resignation. A report published after 23:59 about an announcement made in the window counts.
- **Event window:** 2026-11-22T20:00:00+01:00 – 2026-11-24T23:59:00+01:00 (Europe/Brussels)
- **Evidence expected:** a press conference or statement after a kern/council of ministers; Belga flash, VRT NWS liveblog. evidence_at 2026-11-25T08:00:00+01:00.
- **Resolves by:** 2026-11-26T05:00:00+01:00
- **Written at (UTC):** 2026-11-22T18:15Z

## Schedule
- Mon 23 Nov: kern (inner cabinet) at 09:30 with Vooruit present, then De Wever at the Palace at 11:30 — VRT NWS liveblog https://www.vrt.be/vrtnws/nl/liveblog/kernkabinet-komt-morgenochtend-samen-over-begroting-2-uur-voor-~1793247532380/ (modified 2026-11-22T17:49+01:00, read 2026-11-22T17:56Z) "Er komt morgenochtend om 9.30 uur een kernkabinet bijeen over de begroting… Ook Vooruit zal daarbij aanwezig zijn. 2 uur later, om 11.30 uur, wordt premier Bart De Wever (N-VA) bij de koning verwacht"; RTBF/Belga https://www.rtbf.be/article/bart-de-wever-attendu-ce-lundi-au-palais-aucune-reunion-n-est-prevue-d-ici-la-11819375 (published 2026-11-22T14:42+01:00, modified 18:18, read 17:56Z) "Le Premier ministre est attendu ce lundi, à 11h30 au Palais pour faire rapport au Roi".
- Mon 23 Nov: national trade-union demonstration and strike in Brussels (see data/dossiers/2026-11-24/be-demo-24.md; RTBF headline "Manifestation nationale et grève du 23 novembre").
- Tue 24 Nov: nothing scheduled was found (no announced kern, no Palace date, no Chamber vote on the budget). The Chamber's agenda for the week was not read. The next step depends on what the King decides on Monday.

## Facts
- State of talks, Sun 22 Nov: "Er is nog altijd geen zicht op hoe premier Bart De Wever de begrotingsonderhandelingen uit het slop wil trekken. De regeringspartijen hebben ook voor vandaag nog geen uitnodiging gekregen voor een nieuw gesprek." Rousseau (Vooruit) says the party is meeting "en naar oplossingen gezocht… Op een zondag" (internal meeting) — VRT liveblog (above).
- "elles sont à ce stade toujours dans l'impasse : Vooruit refuse de poursuivre les discussions sur la base de la proposition de Bart De Wever"; De Wever and Rousseau met Friday evening, "rien n'a filtré" — RTBF 22 Nov (above).
- De Wever at the N-VA members' day, 22 Nov: "Nous devons tenir bon… il n'y a pas d'autre choix honorable"; he wants to continue leading this government; no concrete way out mentioned (RTBF 22 Nov above; Knack headline 22 Nov 16:03 GMT "Bart De Wever wil verder met regering: 'Wij moeten blijven staan. Er is geen andere, eerbare keuze'"). He said a further ~€20bn of consolidation will be needed in coming years beyond the €10bn under negotiation (VRT liveblog).
- Sequence so far: 2 Nov resignation offered, King held it in abeyance; 6 Nov King refused it and sent the coalition back to talks; 16 Nov King gave another week; talks collapsed on Sun 15 Nov when Vooruit alone refused De Wever's table — data/dossiers/2026-11-24/be-king-24.md (Eunews 2 Nov, Brussels Signal 6 Nov, VRT 16 Nov). Palace statement 16 Nov: "continue the negotiations in order to reach an agreement as soon as possible" — https://www.vrt.be/vrtnws/en/2026/11/16/king-filip-gives-prime-minister-bart-de-wever-an-extra-week-to-r/.
- Sticking point: a contribution from the wealthiest; De Wever's possible offer is lowering the securities-account tax threshold from €1m to €750,000, rejected so far by Vooruit (VRT liveblog 20 Nov entry, via be-king-24.md). Les Engagés float once-a-year indexation harmonisation (RTBF related headline).
- Interior ministry sent municipalities a letter on preparing for possible early elections — NOS https://nos.nl/artikel/2640564-nederlandse-taferelen-in-belgie-begrotingscrisis-nadert-climax (published 2026-11-22 11:33, per sweep-world.json; not re-opened).
- Vlaams Belang (Van Grieken) calls for early elections (VRT liveblog 22 Nov). Plan B (Anders replacing Vooruit) would leave 76 of 150 seats — RTBF 20 Nov (via be-king-24.md).
- Fitch kept A+ and expects the impasse to be resolved as last year (VRT liveblog). Last year's (2025) budget deal came after a similar royal-deadline sequence (NOS headline "Begrotingsakkoord in België, noodbegroting afgewend", 2025).
- Government already cleared the first tranche of provisional twelfths (Jan–Mar 2027) for the Chamber (VRT liveblog 21 Nov, via be-king-24.md).

## Base rate
- `coalition-deal-announced-short-window` (pipeline/reference-classes.json): base rate 0.30, own record 3 yes / 17 no.
- Within this crisis: no five-party agreement in three earlier royal-deadline windows (6, 16 and — so far — 23 Nov).

## Schedule slip
- slip_class `none` (no scheduled event decides it). Related: the Monday audience is `other-scheduled` (0.080) and has been held on the announced date each time.

## Risks
- YES paths: the Monday kern produces a deal before or right after the audience; or the King gives a short deadline (e.g. 24–48 h) and a deal follows on Tuesday.
- NO paths: another extension of days or a week (as on 6 and 16 Nov); talks continue past Tuesday; Vooruit leaves or the King accepts the resignation; an agreement announced only "in principle" by some parties.
- Wording risk: "akkoord over de krijtlijnen" or "un accord de principe" announced by the PM for all five parties counts; partial deals (e.g. only on one measure) do not.

## Sources
- https://www.vrt.be/vrtnws/nl/liveblog/kernkabinet-komt-morgenochtend-samen-over-begroting-2-uur-voor-~1793247532380/
- https://www.rtbf.be/article/bart-de-wever-attendu-ce-lundi-au-palais-aucune-reunion-n-est-prevue-d-ici-la-11819375
- https://www.rtbf.be/info (link list)
- https://www.vrt.be/vrtnws/en/2026/11/16/king-filip-gives-prime-minister-bart-de-wever-an-extra-week-to-r/ (via be-king-24.md)
- https://nos.nl/artikel/2640564-nederlandse-taferelen-in-belgie-begrotingscrisis-nadert-climax (via sweep)
- data/dossiers/2026-11-24/be-king-24.md, be-demo-24.md; data/watchlist.json (be-dewever-out)
- Google News RSS "De Wever budget Roi lundi Vooruit" (fr-BE), "De Wever begroting koning Vooruit" (nl-BE) — headlines L'Avenir, BX1, Knack, Le Vif
- WebSearch: "De Wever koning maandag 23 november begroting Vooruit akkoord"

## Unreachable
- bx1.be (HTTP 403).
