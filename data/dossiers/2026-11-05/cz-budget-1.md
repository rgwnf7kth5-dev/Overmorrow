# cz-budget-1
- **Claim:** By 23:59 Prague time on 4 November 2026, the Czech coalition announces a decision to reduce Prague's share of tax revenue.
- **Criterion:** YES if between 00:00 on 3 Nov and 23:59 Prague time on 4 Nov 2026 Prime Minister Babiš, Finance Minister Schillerová, the Finance Ministry or a joint statement of the coalition parties ANO, SPD and Motoristé says that the coalition has decided or agreed to reduce Prague's share of tax revenue, or the Finance Ministry publishes a draft law doing so, as reported by ČTK or ČT24 or shown on mf.gov.cz. A statement that the idea is being discussed, or a proposal by a single deputy or party, does not count. NO otherwise.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-04T23:59:00+01:00 (Europe/Prague)
- **Written at:** 2026-11-02T18:30Z. Read times between 18:15Z and 18:30Z on 2 Nov.
- Pages were read through a summarising fetch tool: excerpts in quotation marks are the Czech wording it returned; where only its paraphrase exists this is marked (paraphrase). Facts marked 'via' are reused from an earlier dossier and were not re-opened.
- **Choice of step:** the refinery tax has no floor step in view for 4 Nov (a Chamber vote is put at the turn of November and December, and the bill is not on the agenda copy read), so the undecided Prague question is the open one.

## Schedule
- No date for a decision. No regular cabinet meeting found for 4 Nov; likely next on Mon 9 Nov (work/agenda-cz.json, inference). No coalition council date found after 2 Nov.
- Coalition wants all steps towards CZK 20bn known by the end of 2026 — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/vlada-hleda-cesty-na-snizeni-schodku-rozpoctu-prisla-s-dani-pro-rafinerie-379206 (published about 2026-11-02, page shows relative time only, read 2026-11-02T18:23Z) (paraphrase).

## Facts
- Hrnčíř (SPD): the state could move about CZK 10–15bn of Prague's taxes to the state and some regions; Schillerová: the coalition has not yet decided (paraphrase) — ČT24 379206.
- Munzar (ODS) calls the Prague debate unsystematic (paraphrase) — ČT24 379206.
- Measures come step by step, not as one package; about CZK 20bn in 2027 — ČT24 379206. "Máme připravené kroky v oblasti závislostí." (Schillerová, same page.)
- Refinery tax: 50%, CZK 5.5bn a year, first of a series of laws; the budget committee first took it on a Tuesday; the Chamber could vote at the turn of November and December — ČT24 379206. Kovářová (STAN): "Tato rafinérská daň cílí evidentně na jednu firmu."
- First reading passed on 13 Oct: "Sněmovna v úterý v úvodním kole podpořila vládní návrh na zavedení mimořádné daně na rafinerie." — e15/ČTK https://www.e15.cz/domaci/politika/mimoradna-dan-rafinerie-lex-unipetrol-orlen-schillerova-1436526 (published 2026-10-13 21:32, read 2026-11-02T18:23Z).
- Other measures: Ukrainians' humanitarian benefit halved (CZK 4bn), HGV toll from July (CZK 1.5bn) — ČT24 379206.
- Deficit CZK 230.9bn at end-October (194.5bn in September, 183.1bn a year earlier; plan 310bn); revenue +2.8% to 1.766tn, spending +5% to 1.997tn; fourth-deepest October since 1993 — ČTK https://www.ceskenoviny.cz/zpravy/-schodek-rozpoctu-v-rijnu-vzrostl-na-2309-miliardy-kc-je-vyssi-nez-pred-rokem/2895940 (published 2026-11-02 14:11, read 2026-11-02T18:23Z). No new savings in that article.
- 2027 draft: CZK 386bn deficit — ČT24 379206. Committees, second reading to end by 25 Nov, third on 2 Dec (data/planning/agenda.json).
- Prague is not reported as consulted; no Prague City Hall reaction was read. One search on Prague's share returned nothing current.

## Base rate
- `coalition-deal-announced-short-window`: 0.3, own record from 27 Oct 2026 (pipeline/reference-classes.json); a loose fit, as that class counts deals already under active negotiation. `unscheduled-announcement-within-one-day`: rate null.

## Schedule slip
- `none`: no scheduled event. (`cz-government-item` is 0.103 [estimate], not applicable.)

## Risks
- Babiš says loosely on TV "we will take it from Prague": counts only if stated as decided or agreed.
- Budget amendment by coalition deputies in committee, moving the money without a statement: a filed amendment by deputies is not one of the named acts → NO unless the named actors state it.
- Hrnčíř or Okamura claims agreement alone → NO.

## Sources
- https://ct24.ceskatelevize.cz/clanek/domaci/vlada-hleda-cesty-na-snizeni-schodku-rozpoctu-prisla-s-dani-pro-rafinerie-379206
- https://www.ceskenoviny.cz/zpravy/-schodek-rozpoctu-v-rijnu-vzrostl-na-2309-miliardy-kc-je-vyssi-nez-pred-rokem/2895940
- https://www.e15.cz/domaci/politika/mimoradna-dan-rafinerie-lex-unipetrol-orlen-schillerova-1436526
- https://ct24.ceskatelevize.cz/clanek/domaci/poslanci-by-meli-zahajit-jednani-o-zavedeni-mimoradne-dane-na-rafinerie-378520
- https://public.psp.cz/schuze/10/34
