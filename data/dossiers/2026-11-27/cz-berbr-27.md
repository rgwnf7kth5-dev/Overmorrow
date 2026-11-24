# cz-berbr-27
- **Claim:** The Plzeň Regional Court, ruling on appeals in the football-corruption case of former FAČR vice-chairman Roman Berbr, delivers its appeal decision on Thursday 26 November 2026 and upholds Berbr's first-instance conviction for embezzlement only (it does not convict him of bribery or organised crime and does not quash his verdict).
- **Criterion:** YES if, on 26 Nov 2026 (Europe/Prague, by 23:59), the Krajský soud v Plzni announces its decision on the appeals against the June 2024 verdict of the Okresní soud Plzeň-město and, as regards Roman Berbr, leaves in force a conviction for embezzlement only (sentence may be changed), as reported by ČTK, ČT24 or another major Czech outlet. NO if no decision is announced on 26 Nov (hearing adjourned, decision postponed), or if the court convicts Berbr of bribery/aiding bribery or participation in an organised criminal group, acquits him, or quashes his part of the verdict and returns it to the district court.
- **Event window:** 2026-11-26T00:00+01:00 – 2026-11-26T23:59+01:00 (Europe/Prague)
- **Evidence expected:** ČTK/ČT24 same day. evidence_at 2026-11-26T15:00+01:00.
- **Resolves by:** 2026-11-28T05:00:00+01:00
- **Written at:** 2026-11-24T19:10:00+01:00
- **Status: date NOT confirmed by a credible outlet — recommend dropping (see notes).**

## Schedule
- The only source for 26 Nov is the AI-written case tracker sledujkauzy.cz — https://sledujkauzy.cz/spis/roman-berbr-zpronevera-a-podplaceni-ve-fotbale.html (modified 2026-11-24T08:00, read 2026-11-24T17:56Z) "24. 11. 2026 zazněly u soudu závěrečné návrhy stran. … Rozhodnutí o odvolání má soud vyhlásit 26. 11. 2026." It attributes this to iROZHLAS ("Podle iROZHLAS …"), but the page lists no iROZHLAS link for the 24 Nov event and iROZHLAS refuses scripted reading. Odd detail: the page dates the closing arguments to 24 Nov, yet its own "STAV" text and page date stamp are 08:00 on 24 Nov.
- ČTK 10 Nov — https://www.ceskenoviny.cz/zpravy/2899803 (published 2026-11-10 11:48, read 2026-11-24T17:55Z) "Na jednání si krajský soud vyhradil včetně dneška devět dní do konce roku. Předseda senátu Karel Velek řekl, že není zatím možné odhadnout, zda je vyčerpá všechny nebo zda soud případ zvládne rozhodnout dříve."
- No ČTK, ČT24, Novinky or iDNES report of the 24 Nov closing arguments or of a 26 Nov ruling date found (ČTK front page and ČT24 topic pages read 2026-11-24T17:55–17:56Z; three web searches).

## Facts
- Appeal at the Plzeň Regional Court began 10 Nov 2026; first instance was the Okresní soud Plzeň-město (June 2024); prosecutor and most of 21 original defendants appealed — ČTK 10 Nov (above) "Rozsudek vynesl okresní soud v červnu 2024, odvolal se proti němu státní zástupce a většina z 21 původně obžalovaných."
- First instance: Berbr convicted only of embezzling money of the Plzeň regional football association; 3 years suspended (5-year probation), CZK 2m fine, 3-year ban on statutory roles; acquitted of bribery; organised-crime count not proved; Rogoz got 4 years unsuspended — ČTK 10 Nov (above).
- Prosecutor Jan Scholle appeals against the acquittal on bribery and the failure to find an organised criminal group; at first instance he sought 7 years, CZK 5.55m fine — ČTK 10 Nov "Soud prvního stupně zejména nedovodil existenci organizované zločinecké skupiny … žádám, aby Krajský soud v Plzni jako soud odvolací přehodnotil tyto závěry".
- Berbr's lawyer seeks acquittal on embezzlement too, as the regional football association withdrew its appeal and found no damage — ČTK 10 Nov "svaz ale … zjistil, že mu nevznikla žádná škoda".
- Per sledujkauzy (iROZHLAS-attributed, unverified): prosecutor in closing asked for stricter sentences for some and for parts of the case to be returned to the district court — sledujkauzy page above.
- File has over 11,100 pages; 2 legal persons and 15 natural persons appealed — sledujkauzy page above.

## Base rate
- No reference class for Czech appellate outcomes in pipeline/reference-data. Own class `court-annuls-local-election` is unrelated. None found with ten or more cases.

## Case record
## Case record: cz-berbr-case
No earlier claim of this case in our editions.

## Schedule slip
- `node scripts/refdata/slip.mjs cz-court-ruling` (run 2026-11-24T17:59Z): prior 0.12, own 0/3, rate 0.080 [estimate]. That rate assumes a confirmed date; here the date itself is unconfirmed, and the court reserved nine days to year-end.

## Risks
- Date wrong or ruling postponed (unconfirmed date, 17 appellants, 11,100-page file).
- Partial quashing and return to the district court for some defendants (sought by the prosecutor) could include Berbr.
- Outcome mixed (e.g., embezzlement upheld for Berbr but other counts returned) — criterion covers Berbr only.

## Sources
- https://sledujkauzy.cz/ ; https://sledujkauzy.cz/spis/roman-berbr-zpronevera-a-podplaceni-ve-fotbale.html
- https://www.ceskenoviny.cz/zpravy/2899803
- https://ct24.ceskatelevize.cz/tema/krajsky-soud-v-plzni-3395 ; https://ct24.ceskatelevize.cz/tema/odvolaci-soud-3944
- https://www.ceskenoviny.cz/ (front page)
- WebSearch: "Berbr odvolání Krajský soud Plzeň rozsudek 26. listopadu"; "Berbr krajský soud odvolání závěrečné řeči rozhodnutí čtvrtek listopad 2026"; "Berbr odvolací soud vyhlásí rozhodnutí 26. listopadu Velek"; "irozhlas Berbr závěrečné návrhy odvolání Plzeň žalobce" — none returned a 2026 report confirming the date.

## Unreachable
- irozhlas.cz (HTTP 403, refuses scripted reading); idnes.cz (consent wall); ceskenoviny.cz tag page (404).
