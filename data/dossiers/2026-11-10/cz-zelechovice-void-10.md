# cz-zelechovice-void-10 (same facts as cz-zelechovice-ruling-10)
- **Claim:** On 9 November 2026 the Regional Court in Ostrava, Olomouc branch, declares the municipal election, or the vote, in Želechovice (Olomouc region) invalid.
- **Criterion:** YES if on 9 Nov 2026 (by 23:59 Prague time) the court announces or issues a decision declaring the October 2026 municipal election or the vote (hlasování) in Želechovice (Olomouc district) invalid (neplatnost voleb / neplatnost hlasování), as reported by ČTK, Czech regional media, the court's spokesman or shown on the court's website. NO if the court rejects or dismisses the complaints, declares only an individual candidate's election invalid, changes the result without annulment, adjourns, or announces its decision after 9 Nov.
- **Event window:** 2026-11-09T00:00:00+01:00 to 2026-11-09T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-07T18:22:00Z

**Name check:** the case is Želechovice on Olomoucko (Uničov area, about 250 inhabitants, Olomouc region), not Želechovice nad Dřevnicí (Zlín region, which would go to the Brno regional court). Texts should say "Želechovice (Olomoucko)".

## Schedule
- Hearing on Monday at 09:00 with witnesses; five complaints joined — Aktuálně.cz (ČTK-based) https://zpravy.aktualne.cz/domaci/volby-v-zelechovicich-zpochybnilo-pet-stiznosti-soud-kvuli-nim-naridil-jednani/r~aaa29ed88da6b20f3d574b691d66bd3f/ (published 2026-11-06 09:52, updated 11:46, read 2026-11-07T17:59Z) "Všech pět stížností soud spojil a jednání nařídil v pondělí na 09:00. 'Veřejné zasedání je nařízeno kvůli tomu, že byli předvoláni svědci,' uvedl mluvčí soudu."
- ČTK headline 6 Nov 07:28 GMT "Stížnosti na volby v Želechovicích projedná soud veřejně, jednání je v pondělí"; Hanácká Drbna repeated it 7 Nov (Google News RSS, read 2026-11-07T17:59Z; articles not opened, Drbna unreachable: TLS error).
- Time limit: courts have 20 days from receipt of an election complaint — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/soudy-resi-volebni-stiznosti-v-karvine-se-dostalo-spd-na-moldave-se-bude-volit-znovu-379283 (published 2026-11-04 17:20, read 2026-11-07T18:00Z) "Na posouzení všech stížností mají soudy dvacet dní od jejich doručení." Filing dates of the five complaints not found. Own inference: the election was 9-10 Oct, complaints are due within 10 days of the results' announcement, so 20 days from receipt ends around 9-11 Nov at the latest; a ruling on Monday or within a day or two is likely to be needed.

## Facts
- Allegation: someone breached the lock and official seal of the polling room in the night of 9-10 Oct, between the two voting days; the complaints ask to declare the vote invalid — Aktuálně (above) "Návrh na vyslovení neplatnosti hlasování v Želechovicích je opřen o skutečnost, že někdo údajně narušil uzamčení a úřední pečeť volební místnosti v noci mezi jednotlivými volebními dny".
- Police (Olomouc) found no suspicion of an offence so far; Uničov police still checking — Aktuálně "podle dosud zjištěných skutečností nebylo dáno podezření z žádného protiprávního jednání"; "Podle výsledku soudu a vyhodnocení všech skutečností bude rozhodnuto o dalším postupu".
- Mayor Antonín Hampl (Želechovice - naše obec, náš domov) denies any break-in; says the ballot box had four seals signed by the commission, intact — Aktuálně "volební urna byla zabezpečena čtyřmi pečetěmi s podpisy členů komise, které byly podle něj neporušené".
- Result: three lists; the mayor's list won with almost 69% and 5 of 7 seats; the new council cannot meet until the court decides — Aktuálně "Uskupení volilo téměř 69 procent obyvatel, v sedmičlenném zastupitelstvu získalo pět mandátů. Obec do rozhodnutí soudu nemůže svolat ustavující zastupitelstvo."
- Public hearings on election complaints are exceptional; here because most of the evidence is witness testimony — Aktuálně "Podanými volebními stížnostmi se soudy v hlavních líčeních zabývají výjimečně".
- Same court, Olomouc region: 12 complaints; Veselíčko and Beňov rejected, Mohelnice stopped, Koválovice-Osíčany rejected for lack of jurisdiction; Měrovice nad Hanou, Mikulovice, Horní Moštěnice undecided as of 6 Nov — Aktuálně (above).
- Nationwide by 4 Nov: 230 complaints, 97 decided, most rejected; Moldava (Teplice) vote annulled because voters had been struck off the roll; results changed in Pulečný and Karviná after recounts — ČT24 (above) "Stížností na komunální volby přišlo ke krajským soudům celkem 230. Vypořádaných jich je zatím 97."; "Krajský soud v Ústí nad Labem tam totiž volby prohlásil za neplatné".
- Earlier coverage: Olomoucký deník 15 Oct "Volby ve vsi na Olomoucku prověří soud. Vyvrcholení boje, míní starosta"; Hanácká Drbna 16 Oct "Byl někdo v noci ve volební místnosti? V Želechovicích drtivě vyhrála jedna strana" (headlines via Google News RSS, read 2026-11-07T17:59Z; not opened).

## Base rate
- No class. Nationwide, of 97 municipal complaints decided by 4 Nov at least one vote was annulled (Moldava) and two results were corrected (ČT24, above); the full count of annulments was not found. Annulment needs a defect that could have affected the result; here the winner had almost 69% and 5 of 7 seats, police found no suspicion of an offence, and the mayor says the urn seals were intact. The claim also needs the decision announced on 9 Nov (cz-zelechovice-ruling-10).

## Schedule slip
```
class                         prior   own         rate (P that the event slips)
cz-court-ruling               0.12    0/0         0.120  [estimate]
```
(`node scripts/refdata/slip.mjs`, run 2026-11-07T17:53Z.) The class covers a ruling announced for a given day; here only the hearing is set, and the court may reserve its decision for a later day within the 20-day limit.

## Risks
- NO paths: rejection on the merits (seal breach not proven or not shown to affect the result), or the decision announced after 9 Nov.
- YES path: witnesses confirm entry into the room and the court cannot exclude tampering with ballots kept overnight; in a village of about 250 people a small number of ballots could change seats.
- Court hears witnesses and reserves the decision (announces it later, or only publishes it on the website after 9 Nov).
- Adjournment because a witness fails to appear.
- Reporting: a small case may get only a short ČTK item; the court website can lag.

## Sources
- https://zpravy.aktualne.cz/domaci/volby-v-zelechovicich-zpochybnilo-pet-stiznosti-soud-kvuli-nim-naridil-jednani/r~aaa29ed88da6b20f3d574b691d66bd3f/
- https://ct24.ceskatelevize.cz/clanek/domaci/soudy-resi-volebni-stiznosti-v-karvine-se-dostalo-spd-na-moldave-se-bude-volit-znovu-379283
- https://news.google.com/rss/search?q=Želechovice+volby+soud (headlines)
- https://www.hanackadrbna.cz/ (unreachable: TLS self-signed certificate)
- https://www.denik.cz/tagy/zelechovice-15962.html (nothing relevant)
- https://www.zakonyprolidi.cz/cs/2002-150 and /cs/2001-491 (interstitial page; law text not read)
