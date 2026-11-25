# cz-refinery-tax-28
- **Claim:** On Friday 27 November 2026 the Chamber of Deputies passes the government's extraordinary refinery tax bill (amendment to the Income Tax Act, print 311, "lex Orlen") in third reading with at least 90 deputies voting in favour.
- **Criterion:** YES if, between 09:00 and 23:59 on Fri 27 Nov 2026 (Europe/Prague), the Chamber adopts the final passage motion on print 311 ("Sněmovna vyslovuje souhlas s vládním návrhem zákona … sněmovní tisk 311", in any amended form) and the psp.cz roll call for that vote shows 90 or more "ano" votes. NO if the passage vote gets 89 or fewer "ano" votes, if the bill is rejected, or if no passage vote on print 311 is held on 27 Nov (item not reached, interrupted, postponed, or voted on another day). Deciding source: psp.cz roll call of 27 Nov (hlasování), published the same day; if psp.cz is unreachable, the yes count reported by ČTK or ČT24 that day.
- **Event window:** 2026-11-27T09:00:00+01:00 to 2026-11-27T23:59:00+01:00 (Europe/Prague). Fixed as the first item of the Friday third-reading block from 09:00.
- **Evidence expected:** psp.cz roll call within minutes of the vote; ČTK/ČT24 report the same morning. evidence_at about 2026-11-27T11:00+01:00.
- **Resolves by:** 2026-11-29T05:00:00+01:00
- **Written at:** 2026-11-25T18:55:00+01:00

## Schedule
- Fixed slot adopted at the opening of the 37th sitting: vote no. 40, 24 Nov 2026 19:16, motion "Přejdeme k návrhům paní předsedkyně Malé na pátek 27. 11. od 9 hodin v bloku třetích čtení. Paní poslankyně navrhuje, aby bod 148, sněmovní tisk 311, novela zákona o dani z příjmu, byl projednáván jako první bod." — 98 for, 1 against, 176 present — https://www.psp.cz/sqw/hlasy.sqw?G=89068 (vote 40 of 24 Nov; stenographic record https://www.psp.cz/eknih/2025ps/stenprot/037schuz/s037032.htm#h40). Read from the PSP desk snapshot data/psp/votes/2026-11-24.json (as of 2026-11-25T17:01+01:00), read 2026-11-25T17:40Z.
- Whole agenda of the 37th sitting approved: vote no. 84, 24 Nov 19:49, "Schválení celého pořadu 37. schůze", 97 for, 13 against (same file).
- Approved day order for Fri 27 Nov (after renumbering): "142, 140, 138, 143, 139, 134, 136, 144, 145, 146, 141", then "body dle schváleného pořadu schůze" — https://www.psp.cz/schuze/10/37 via data/psp/meetings/10-37.json (web heading "Aktuální stav k 25. 11. 2026, 12:42"; snapshot as_of 2026-11-25T17:01:41+01:00).
- Item 142 = "Vládní návrh zákona, kterým se mění zákon č. 586/1992 Sb., o daních z příjmů … /sněmovní tisk 311/ – třetí čtení", web note "Pá 27. 11., 1. bod (další projednávání možné od 25. 11. 2026 10:44)", 2 registered speakers (same file).
- Fallback days in the approved order: Wed 2 Dec, Fri 4 Dec, Wed 16 Dec, Fri 18 Dec each list "případně body z bloku 3. čtení" (same file).
- psp.cz itself is unreachable from this environment (`curl: (35) Recv failure: Connection reset by peer`, 2026-11-25T17:44Z); all psp.cz facts are from the snapshot.

## Facts
- No passage vote on print 311 among the 86 roll calls of 24 Nov; PSP desk note: "Třetí čtení pevně zařazeno na pátek 27. listopadu jako první bod." — data/psp/latest.json claim cz-orlen-25 (verified, as_of 2026-11-25T17:01+01:00). Not among the roll calls of 25 Nov either (votes 87–131 of 25 Nov: agenda, prints 48, 210, 179) — data/psp/votes/2026-11-25.json.
- Period before third reading shortened to seven days: vote 89028, 13 Nov 2026 13:17, "Zkrácení lhůty pro třetí čtení tisku 311 na sedm dnů", 77 for, 23 against, 100 present — https://www.psp.cz/sqw/hlasy.sqw?G=89028 (snapshot data/psp/votes/2026-11-13.json).
- Content: tax on refineries' increased margin compared with 2025, for 2026 and 2027; firms with ≥CZK 2bn revenue and ≥CZK 50m from refining; in practice the Kralupy and Litvínov refineries of Orlen Unipetrol; about CZK 5.5bn for 2026; not shared with regions — ČTK https://www.ceskenoviny.cz/zpravy/dan-pro-rafinerie-miri-ke-schvalovani-podle-orlenu-ohrozi-investice/2901415 (published 2026-11-13T10:35+01:00, updated 17:00; read 2026-11-25T17:47Z): "Týkat se bude velkých korporací a v tuzemsku dopadne zřejmě jen na dva podniky, a to rafinerie v Kralupech nad Vltavou a Litvínově… Jen za letošní rok by podle ministerstva financí měla daň do státního rozpočtu přinést asi 5,5 miliardy korun."
- Amendments filed in second reading (13 Nov): about 30, all from the opposition; Pirates 25% rate (from 50%) plus coal power plants; Svárovská/Ferčíková Konečná permanent excess-profit tax from 2028 (33%/60%); Jurečka (KDU-ČSL) kindergarten fee, faster farm depreciation; STAN higher tax on investment-flat sales — same ČTK article: "Opozice se přihlásila ke třem desítkám pozměňovacích návrhů… Žádný koaliční návrh na rozšíření daně i na jiné sektory dnes nezazněl."
- Opposition position: ODS leader Kupka calls it "lex Orlen" (same ČTK article); in first reading (13 Oct) the opposition moved rejection and return to the government — Novinky https://www.novinky.cz/clanek/ekonomika-schvalili-mimoradnou-dan-na-rafinerie-40602655 (published 2026-10-13T19:02Z, read 2026-11-25T17:47Z): "Zákon odolal návrhům na zamítnutí i na vrácení vládě, které vznesla opozice… Opozice varuje před zpětnou účinností nové daně."
- Coalition position: Motoristé club chair Šťastný (13 Nov) "jeho strana zatím o žádných návrzích na nové daně nebyla informována" (about extending to other sectors) but Schillerová "legitimně hledá i způsoby, jak peníze do rozpočtu získat" (ČTK 13 Nov, above). No coalition club has announced a vote against (none found).
- Orlen Unipetrol: "Pokud bude daň uplatněna v navrhované podobě, významně ohrozí naše investice do modernizace a bezpečnosti rafinérií" (ČTK 13 Nov, above).
- Budget committee before second reading (11 Nov) backed the bill without amendments — Seznam Zprávy https://www.seznamzpravy.cz/clanek/ekonomika-snemovni-vybor-podporil-navrh-mimoradne-dane-na-rafinerie-320264 (per dossier cz-orlen-25, read 2026-11-22T17:58Z). The committee's recommendation on the second-reading amendments (print 311/4 or later) was not read (psp.cz unreachable).
- Seats: coalition ANO + SPD + Motoristé = 108 of 200; "Požadavek na Okamurovo odvolání podepsalo všech 92 opozičních poslanců ODS, STAN, Pirátů, KDU-ČSL a TOP 09" — ČTK https://www.ceskenoviny.cz/zpravy/2896078 (published 2026-11-03T15:06+01:00, read 2026-11-25T17:45Z). coalition_seats_S = 108 in 407 of 464 contested votes since 15 Dec 2025 — pipeline/reference-data/cz-chamber.json (generated 2026-11-25T15:58Z).
- Vote arithmetic, this term (cz-chamber.json, babis-3, contested final passage votes, n = 12, all adopted): coalition yes votes mean 90.1, sd 6.9, min 79, q10 84, q25 84, median 90, q75 94, q90 97.9, max 103. All contested votes (n = 464): median 89, q25 81, q75 95. Contested full-house votes (≥180 logged in, n = 25): median 106.
- Recent comparable passage votes (snapshot data/psp/votes/2026-11-25.json): print 48 (plant health + groundwater fee, contested), Wed 25 Nov 11:36, "Závěrečný souhlas s tiskem 48 v přijatém znění" 97 for, 0 against, 172 present (opposition did not vote against); print 210 (board gender quotas), 11:58, 90 for, 13 against, 131 present. Fixed-slot vote for this bill on 24 Nov: 98 for.
- Pace: 24 Nov the Chamber spent about six hours on the agenda and dealt with one bill — ČTK https://www.ceskenoviny.cz/zpravy/poslanci-se-budou-zabyvat-rozpoctem-a-schvalovat-dan-na-rafinerie/2904989 (published 2026-11-25T09:03+01:00, updated 13:37; read 2026-11-25T17:45Z): "V úterý poslanci schválili program nynější schůze po zhruba šesti hodinách od jejího zahájení. Opozice neúspěšně navrhovala čtyři desítky změn… Po 23:00 si opoziční kluby vyžádaly přestávky a jednací den skončil." ANO club chair Malá: "dolní komora projednala jen jeden návrh zákona."
- On Wed 25 Nov the block of third readings worked fast: first vote on print 48 at 11:13, passage 11:36; print 210 passage 11:58 (snapshot, above). On Wed morning the Chamber first held five agenda votes (09:06–09:34).
- Previous Friday with third readings (6 Nov, 34th sitting): no bill passed; third readings of lex Ukrajina, the NKÚ amendment and the groundwater fee were postponed — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-by-meli-schvalovat-zprisneni-podminek-docasne-ochrany-ukrajincu-379335 (published 2026-11-06T04:45+01:00, modified 16:01; read 2026-11-25T17:46Z): "Odložila mimo jiné schvalování novely, která má umožnit Nejvyššímu kontrolnímu úřadu (NKÚ) prověrku České televize… Odklad schvalování se týká také novely o zpřísnění českých podmínek dočasné ochrany uprchlíků". That Friday had no fixed slots for these bills (our dossier cz-lexukr-1).
- Third readings on days other than Wednesday and Friday need a Chamber decision, and two clubs can block such a vote (§54(4) of the Rules of Procedure, quoted in our dossiers of 4–6 Nov). Moving the bill to Thursday 26 Nov would therefore be blockable by the opposition.

## Base rate
- Passage once a third-reading vote is held, this term: 31 of 32 bills (government bills 20 of 21, 0.952) — cz-chamber.json final_votes_on_bills (10th term). 9th term: 256 of 258.
- Fixed-slot items dealt with at their meeting (9th term): 381 of 565 (0.674); bill items with a fixed slot 262 of 355 (0.738) — cz-chamber.json agenda_items. Per meeting, not per day.
- Yes-vote threshold: contested final-passage votes this term reached ≥90 "ano" in about half of 12 cases (median 90) — hint (n = 12). Wider class: all contested votes this term (n = 464), median 89 coalition yes votes, q25 81, q75 95 — cz-chamber.json. This case differs: a fixed first item at 09:00 on a Friday, a flagship budget measure; the wider class includes routine procedural votes with lower turnout.

## Case record
## Case record: cz-refinery-tax
Earlier claims of this running story in our editions, oldest first (1; 1 still pending). Outcomes are from data/resolutions.
- edition 2026-11-25 (events of 2026-11-24), cz-stan-25: Chamber rejects STAN's Poland item — pending

(Note for the desk: the ledger files cz-stan-25 under this case key, and does not list cz-orlen-25, which was about this bill; check data/claim-labels.json.)

Our own record for Friday Chamber claims (case cz-chamber-obstruction, `node scripts/case-ledger.mjs cz-chamber-obstruction`): on 6 Nov all five Friday passage claims resolved NO because the items were not voted that day.

## Schedule slip
- Class: **cz-chamber-fixed-slot** (the item has a date and position fixed by vote no. 40 of 24 Nov). `node scripts/refdata/slip.mjs` (run 2026-11-25T17:41Z): prior 0.33, own 0/0, rate 0.330 [data].
- Signs: first item of the block at 09:00, only 2 registered speakers, period before third reading already passed. Friday may begin with agenda-change motions (Wednesday began with five). The opposition can debate at length in third reading and move a return to second reading; opposition clubs can request breaks (they did on 24 Nov). End time of the Friday sitting not confirmed (our earlier dossiers say Friday sittings end around 14:00 unless extended by vote). The coalition could move the bill to another day, e.g. back to Wednesday 2 Dec.

## Risks
- Item not finished on Friday (long third-reading debate, breaks, motion to return to second reading) → NO.
- Low coalition turnout on a Friday morning: yes votes below 90 even though the bill passes (median of contested final-passage votes is 90; print 210 passed with 90 on 25 Nov).
- Opposition MPs voting yes would raise the count (Pirates/Greens back windfall taxes in principle, but filed a 25% rate amendment); opposition abstaining instead of voting no (as on print 48) does not change the yes count.
- An amendment changing the substance (e.g. the Pirates' lower rate or coal plants) is unlikely to pass without coalition votes (all opposition proposals rejected 91–94 against on 25 Nov for print 48).

## Sources
- data/psp/latest.json, data/psp/meetings/10-37.json, data/psp/votes/2026-11-13.json, 2026-11-24.json, 2026-11-25.json (PSP desk snapshot, as_of 2026-11-25T17:01+01:00)
- https://www.psp.cz/schuze/10/37 ; https://www.psp.cz/sqw/historie.sqw?o=10&t=311 (unreachable, exit 3)
- https://www.ceskenoviny.cz/zpravy/dan-pro-rafinerie-miri-ke-schvalovani-podle-orlenu-ohrozi-investice/2901415
- https://www.ceskenoviny.cz/zpravy/poslanci-se-budou-zabyvat-rozpoctem-a-schvalovat-dan-na-rafinerie/2904989
- https://www.ceskenoviny.cz/zpravy/2896078
- https://www.novinky.cz/clanek/ekonomika-schvalili-mimoradnou-dan-na-rafinerie-40602655
- https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-by-meli-schvalovat-zprisneni-podminek-docasne-ochrany-ukrajincu-379335
- https://www.seznamzpravy.cz/clanek/ekonomika-snemovni-vybor-podporil-navrh-mimoradne-dane-na-rafinerie-320264 (via dossier cz-orlen-25)
- pipeline/reference-data/cz-chamber.json; pipeline/reference-data/schedule-slip.json; data/dossiers/2026-11-25/cz-orlen-25.md; data/dossiers/2026-11-08/cz-lexukr-1.md
