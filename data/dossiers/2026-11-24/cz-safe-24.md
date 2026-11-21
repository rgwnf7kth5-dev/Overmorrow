# cz-safe-24
- **Claim:** By 23:59 Prague time on Monday 23 November 2026 the Czech government approves Czech participation in the second round of the EU's SAFE defence-loan instrument.
- **Criterion:** YES if, between 05:00 on Sun 22 Nov and 23:59 on Mon 23 Nov 2026 (Europe/Prague), a government resolution (vlada.gov.cz / odok) or a ČTK report shows that the cabinet approved a Czech request for, notification of interest in, or participation in the second round of the EU SAFE (Security Action for Europe) loan instrument, in any amount. Statements of interest by ministers, a proposal merely submitted to the cabinet, or a discussion that is interrupted or deferred do not count. NO otherwise. A report published after 23:59 about a resolution adopted in the window counts. (This is the board question cz-safe-second-round, limited to Monday.)
- **Event window:** 2026-11-22T05:00+01:00 – 2026-11-23T23:59+01:00 (Europe/Prague); in practice the regular Monday cabinet meeting of 23 Nov.
- **Evidence expected:** post-cabinet press conference on 23 Nov; ČTK; Government Office "Výsledky jednání vlády" / resolution; possibly a Defence Ministry release (mocr.army.cz). evidence_at 2026-11-23T16:00+01:00.
- **Deadline (resolves by):** 2026-11-25T05:00:00+01:00
- **Written at:** 2026-11-21T18:10Z

## Schedule
- Cabinet meeting on Mon 23 Nov is official: "Program schůze vlády dne 23. 11. 2026" listed on https://vlada.gov.cz/cz/vlada/jednani-vlady/ (read 2026-11-21T17:57:30Z). The programme (odok portal) is blocked to our reader, so **whether a SAFE item is on it is unknown**. No report trails a SAFE item for Monday.
- The Commission's deadline for member states to notify interest is 30 Nov: "Svůj zájem mohou členské státy oficiálně Evropské komisi nahlásit jen do 30. listopadu." — ČTK https://www.ceskenoviny.cz/zpravy/cesko-ma-zajem-zapojit-se-do-obrannych-pujcek-safe-rekl-babis/2900333 (published 2026-11-11T18:20+01:00, read 2026-11-21T17:55:45Z). Mon 30 Nov is also a regular cabinet day (not confirmed).
- The 19 Nov cabinet had no SAFE item (board-cz.md, 21 Nov; ČT24 briefing summary of 19 Nov lists Kozák for the new Úřad rozvoje území, the ÚOHS selection commission and civil-service posts — work/evening/cands-cz.md).

## Facts
- Babiš, 11 Nov: Czechia wants to join the second round; "Zapojení České republiky do druhého kola SAFE by mělo připravit ministerstvo obrany a předložit to vládě"; "Podíl by měl být podstatně vyšší" than the EUR 2.06bn of round one; no sum given. "Ministerstvo financí podle premiéra záměr příliš nepodporovalo, protože u půjčky není stanovena úroková míra." — ČTK (above).
- Process: "členské státy EU mají nyní čas do 30. listopadu, aby vyjádřily svůj zájem o dosud nevyužité prostředky. Evropská komise následně předběžně rozdělí zbývající finance mezi zájemce. Státy pak budou moci na základě přislíbených částek připravit nové národní plány" — ČTK (above), same in Ekonomický deník https://ekonomickydenik.cz/cesko-miliardy-obranu-babis-pujcek-safe/ (published 2026-11-12T07:46Z, read 2026-11-21T17:55:38Z). So the 30 Nov step is a notification of interest; national plans come later.
- Pot: EUR 21.3bn left over from round one; the Commission invited states in late October; priorities are air and missile defence, drones and counter-drone systems, ammunition and missiles — ČTK (above).
- A different deadline was reported by Kyiv Post (13 Nov) according to the board question's background (data/watchlist.json); ČTK's 30 Nov is the later and more specific date.
- Before the call, the Defence Ministry was only analysing participation "ve spolupráci s dalšími resorty" and conditions were unknown — Ekonomický deník https://ekonomickydenik.cz/cesko-druhe-kolo-safe-miliardy-na-obranu/ (published 2026-10-04T09:30Z, read 2026-11-21T17:55:41Z); 29 Oct: "Zatím ale není potvrzené, že Česko o další prostředky požádá" — https://ekonomickydenik.cz/druhe-kolo-safe-miliardy/ (published 2026-10-29T12:56Z, read 2026-11-21T17:55:44Z).
- First-round precedent: the Fiala government requested EUR 2.06bn; the Babiš cabinet **interrupted** the item on Mon 11 May, asking Defence Minister Zůna for details on the Leopard 2A8 and Tatra projects ("Vláda dnes přerušila projednávání využití unijní půjčky… SAFE") — ČTK https://www.ceskenoviny.cz/zpravy/vlada-prerusila-jednani-o-unijni-pujcce-safe-na-vojenske-vybaveni/2823347 (published 2026-05-11T14:41+02:00, read 2026-11-21T17:57:09Z); it approved participation on 15 Jun ("Vláda schválila zapojení Česka do unijní půjčky SAFE na vojenské vybavení", headline) — Novinky https://www.novinky.cz/clanek/domaci-vlada-schvalila-zapojeni-ceska-do-unijni-pujcky-safe-na-vojenske-vybaveni-40583316 (published 2026-06-15T15:27Z, read 2026-11-21T17:55:46Z; body not readable). Round one thus took two cabinet sittings five weeks apart.
- SAFE loans do not count towards NATO defence spending targets because they are borrowed money — ČTK 11 May (above).
- No report since 11 Nov that the Defence Ministry has sent a SAFE proposal to the cabinet or into inter-ministerial comment was found (searches below).

## Base rate
- Reference class `cz-cabinet-decides-trailed-item-on-day`: own record 0/1 (pipeline/reference-classes.json). Here the item is not even trailed for Monday specifically.
- Precedent: in round one, 1 of 2 cabinet sittings that took up SAFE approved it (11 May interrupted, 15 Jun approved).

## Schedule slip
- slip_class `cz-government-item`: rate 0.266 (prior 0.12, own 3/8) [estimate] — `node scripts/refdata/slip.mjs cz-government-item`, run 2026-11-21T17:59Z.
- No date was ever announced for this item; the 30 Nov deadline leaves the 30 Nov meeting (or a notification without a resolution) as alternatives.

## Risks
- Item not on Monday's programme (unknown); decision left to 30 Nov → NO.
- The interest may be notified to the Commission by the Defence or Finance Ministry without a cabinet resolution, or approved in a non-public (classified) part of the meeting and not reported → NO as worded unless ČTK or a resolution shows it.
- Finance Ministry resistance; Babiš has interrupted a SAFE item before.
- A YES needs only approval in any amount; a resolution approving notification of interest counts.

## Sources
- https://vlada.gov.cz/cz/vlada/jednani-vlady/
- https://www.ceskenoviny.cz/zpravy/cesko-ma-zajem-zapojit-se-do-obrannych-pujcek-safe-rekl-babis/2900333
- https://ekonomickydenik.cz/cesko-miliardy-obranu-babis-pujcek-safe/
- https://ekonomickydenik.cz/cesko-druhe-kolo-safe-miliardy-na-obranu/
- https://ekonomickydenik.cz/druhe-kolo-safe-miliardy/
- https://www.ceskenoviny.cz/zpravy/vlada-prerusila-jednani-o-unijni-pujcce-safe-na-vojenske-vybaveni/2823347
- https://ekonomickydenik.cz/miliardy-obrana-babis-pujcka-stopka-zuna/
- https://www.novinky.cz/clanek/domaci-vlada-schvalila-zapojeni-ceska-do-unijni-pujcky-safe-na-vojenske-vybaveni-40583316
- data/watchlist.json (cz-safe-second-round), work/evening/board-cz.md, work/evening/cands-cz.md
- WebSearch: "SAFE druhé kolo vláda ministerstvo obrany Česko 30. listopadu"; "Zůna SAFE druhé kolo návrh vládě půjčka miliardy eur listopad"; "jednání vlády 23. listopadu 2026 program pohonné hmoty SAFE".

## Unreachable
- odok.cz / odok.gov.cz (blocked); Novinky body (navigation only).
