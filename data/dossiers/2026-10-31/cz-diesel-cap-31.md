# cz-diesel-cap-31
- **Claim:** The maximum diesel price that the Czech Ministry of Finance announces on Friday 30 October 2026 for Saturday 31 October is higher than the maximum diesel price in force on Friday 30 October.
- **Criterion:** YES if a Ministry of Finance Cenový věstník notice published on 30 Oct 2026 (by 23:59:59 CET) declares a maximum daily price of motorová nafta (B7), CZK per litre incl. VAT, valid for Saturday 31 Oct 2026 (alone or as part of a period), and that price is at least CZK 0.01 higher than the diesel maximum valid for Friday 30 Oct 2026 (declared by the notice published on 29 Oct 2026). NO if it is equal or lower, or if no notice declaring a diesel maximum for 31 Oct is published on 30 Oct 2026.
- **Event window:** 2026-10-30T00:00:00+01:00 to 2026-10-30T23:59:59+01:00 (Europe/Prague; notice expected at 14:00 CET)
- **Written at:** 2026-10-28T18:30:00Z

## Schedule
- MF press release of 26 Oct: "Ministerstvo financí bude každý pracovní den vyhlašovat maximální ceny benzinu a nafty pro následující den, přičemž v nepracovní dny se uplatní cena naposledy vyhlášená. Toto opatření potrvá až do 30. listopadu 2026." — https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (published 2026-10-26 12:45, read 2026-10-28T18:10Z).
- In practice the Friday notice names a period covering the weekend: věstník 109/2026 (Fri 23 Oct 14:00) "na období 24. října 2026 až 26. října 2026" — data/dossiers/2026-10-30/cz-diesel-cap-30-above.md (PDF read 2026-10-27T18:02Z). The 30 Oct notice is the one that sets 31 Oct.
- Page where caps are published: the MF page "Maximální přípustné ceny benzinu a nafty" (updated with each notice; at read time "Termín stanovení: 27. října 2026 ve 14:00 … Účinnost: 28. října 2026 od 00:00 - 29. října do 24:00") — https://www.mfcr.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (read 2026-10-28T18:09Z); the notices themselves are listed at https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik (read 2026-10-28T18:09Z: latest fuel notice 112/2026 of 27 Oct 14:00, nothing newer — 28 Oct is a state holiday).
- Decree switch: 31 Oct still falls under government decree 172/2026 Sb. ("pro období od 1. října 2026 až 31. října 2026", věstník 112/2026); 1–30 Nov under a new decree approved by the cabinet on 26 Oct (decree number and text not read). A Friday notice may therefore cover 31 Oct alone (with 1–2 Nov in a separate notice under the new decree) or 31 Oct–2 Nov. The criterion uses only the value valid for 31 Oct.

## Facts
- Mechanism (MF, 26 Oct): "Maximální cena se vypočte jako součet průměrné velkoobchodní ceny z třídenního klouzavého průměru čtyř referenčních zdrojů (indexy PKN ORLEN/Unipetrol, MOL/MOLIN, ČEPRO a kalkulované ceny na základě kotací Platts) a regulované marže ve výši 2,50 Kč za litr. Výsledná cena zahrnuje DPH a zaokrouhluje se na celé haléře dolů." (press release above). No change of margin or method announced for November.
- Věstník 112/2026 (for 28–29 Oct): diesel ČEPRO 38.27, MOLIN 38.30, UIC 38,304.00 CZK/1000 l, Platts + costs 38.63, average 38.38 → cap 49.46; petrol average 34.24 → 44.45. Footnote: "Cenové indexy v sobě zahrnují sazbu spotřební daně účinnou pro den, pro který se maximální ceny … stanovují" — https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf (published 2026-10-27 14:00, read 2026-10-28T18:10Z).
- Arithmetic (own): cap ≈ (average + 2.50) × 1.21 rounded down: (38.38 + 2.50) × 1.21 = 49.46. One haléř in the cap ≈ 0.008 CZK in the average.
- Excise: diesel excise relief (CZK 1.939/l, 2.35 incl. VAT; rate 8.011 instead of 9.95 CZK/l) continues in November per the 26 Oct cabinet decision (press release above). 31 Oct is in October, so no excise change applies to the 31 Oct cap either way.
- Diesel cap by validity date, CZK/l incl. VAT: 14 Oct 48.61; 15 Oct 48.63; 16 Oct 48.77; 17–19 Oct 48.89; 20 Oct 48.67; 21 Oct 48.61; 22 Oct 48.60; 23 Oct 48.70; 24–26 Oct 48.69; 27 Oct 48.96; 28–29 Oct 49.46 (věstníky 100–112/2026, from data/dossiers/2026-10-30/cz-diesel-cap-30-above.md). 30 Oct value: set 29 Oct 14:00, not known at writing.
- ČTK 27 Oct: diesel max "vzroste o 50 haléřů na 49,46 koruny"; since 8 Oct (47.23) the diesel maximum "nepřetržitě rostlo a zdražování se zastavilo až v minulém týdnu"; petrol has been falling since its peak of 47.21 — https://www.ceskenoviny.cz/zpravy/nejvyssi-pripustna-cena-nafty-ve-stredu-vzroste-o-50-haleru/2893299 (published 2026-10-27 14:20, read 2026-10-28T18:11Z).
- Wholesale driver, Brent (Dec contract) daily changes: 21 Oct 0.0; 22 Oct +4.4; 23 Oct +3.6; 26 Oct −0.9; 27 Oct −1.9; 28 Oct +1.5 USD/bbl; 28 Oct 19:10 CET 115.41 (previous 113.88); +9.6% over a month — https://oenergetice.cz/energostat/ceny-aktualne/ropa-brent (read 2026-10-28T18:11Z). So Brent jumped 22–23 Oct (≈108.7 → ≈116.7, own reconstruction from the daily changes), eased 26–27 Oct, and rose again 28 Oct. Diesel crack spreads and the CZK/USD rate not read.
- European gas TTF briefly above €100/MWh on 28 Oct, first time since Dec 2022 — ČTK https://www.ceskenoviny.cz/zpravy/cena-plynu-v-evrope-poprve-od-prosince-2022-kratce-prekrocila-100-eur/2890524 (headline, carried over from sweep).
- Lag (inference): the 28–29 Oct cap (set 27 Oct) jumped 0.50 after the 22–23 Oct oil spike, so the indices enter with a lag of a few days. The 31 Oct cap (set 30 Oct) will mostly reflect wholesale quotes of about 27–29 Oct, when Brent was ~114–115 vs ~116–117 on 23–26 Oct. Which quote days enter is not stated in the notices.

## Base rate
- Own count, consecutive notices 12 Oct → 28 Oct (12 steps): up 8, down 4; after an up step, the next step was up 5 of 7 times (moving-average persistence). Step sd ≈ 0.26 CZK — data/dossiers/2026-10-30/cz-diesel-cap-30-above.md.
- Related class `stats-release-beats-threshold` (pipeline/reference-classes.json): loose fit.

## Schedule slip
- `stats-release`: 0.008 [estimate] (`node scripts/refdata/slip.mjs stats-release`, run 2026-10-28T18:00Z), closest class for an official daily notice. No working-day fuel notice missed in October. Specific risk: the decree switch on 1 Nov could change the form of the Friday notice (split notices), but 31 Oct must be priced on Friday because Saturday is a non-working day; the cabinet decision keeps the regime running.

## Risks
- Reversal: Brent in the 27–29 Oct window is slightly below the 23–26 Oct level, so the three-day average could fall back after two rises; the 30 Oct value (set 29 Oct) may already capture the peak.
- Tie: an unchanged cap resolves NO.
- The 30 Oct reference value is unknown tonight; if 29 Oct's notice moves sharply, the claim is about the next step from a new level.
- Notice form: a notice published 29 Oct that already covers 30–31 Oct (unlikely; MF has used single-day notices midweek) would mean no 31 Oct notice is published on 30 Oct → NO by the criterion. Morning update should check the 29 Oct notice's period.
- Policy: no margin or excise change applies to 31 Oct.

## Sources
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/vlada-rozhodla-o-prodlouzeni-regulace-cen-pohonnyc-65559 (via curl)
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy (via curl)
- https://www.mfcr.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/maximalni-pripustne-ceny-benzinu-a-nafty (via curl)
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik (via curl)
- https://mf.gov.cz/cs/kontrola-a-regulace/cenova-regulace-a-kontrola/cenovy-vestnik/2026/cenovy-vestnik-112-2026-65574 (via curl)
- https://mf.gov.cz/assets/attachments/2026-10-27_Cenovy-vestnik-112-2026.pdf
- https://www.ceskenoviny.cz/zpravy/nejvyssi-pripustna-cena-nafty-ve-stredu-vzroste-o-50-haleru/2893299 (via curl)
- https://www.ceskenoviny.cz/zpravy/svaz-prumyslu-mimoradna-dan-na-rafinerie-muze-ohrozit-cely-cesky-prumysl/2893678 (refinery windfall tax; context only)
- https://oenergetice.cz/energostat/ceny-aktualne/ropa-brent
- data/dossiers/2026-10-30/cz-diesel-cap-30-above.md
