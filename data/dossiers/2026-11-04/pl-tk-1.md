# pl-tk-1
- **Claim:** On 3 November 2026 the General Assembly of Polish Constitutional Tribunal judges, convened by Anna Korwin-Piotrowska, adopts a resolution consenting to lift the immunity of the Tribunal's president Bogdan Święczkowski.
- **Criterion:** YES if on 3 Nov 2026 (Warsaw time) the General Assembly of Constitutional Tribunal judges convened by Judge Anna Korwin-Piotrowska adopts a resolution consenting to criminal liability of Bogdan Święczkowski (lifting his immunity) on at least one of the prosecution's motions. The resolution must be announced by a Tribunal communiqué or by Korwin-Piotrowska, or reported by PAP, TVN24, Rzeczpospolita or a wire agency. It counts even if Święczkowski, President Nawrocki or other judges dispute its legal validity. NO if the Assembly does not meet that day, lacks a quorum, does not vote on the motions, or refuses consent.
- **Event window:** 2026-11-03T00:00:00+01:00 to 2026-11-03T23:59:00+01:00 (Europe/Warsaw). Evidence read at 2026-11-04T04:00+01:00.
- **Written at:** 2026-11-01T18:40Z. Read times between 18:00Z and 18:20Z on 1 Nov unless stated.
- **Background:** the 3 Nov dossier's claim (pl-tribunal-1, whether the Tribunal would state by 2 Nov that the motions are on the 3 Nov agenda) is still open. Nothing found by 18:20Z on 1 Nov shows such a statement.

## Schedule
- **Convened:** "zarządzenie o zwołaniu Zgromadzenia Ogólnego Sędziów Trybunału Konstytucyjnego na wtorek, 3 listopada". The stated purpose is "uchwalenia budżetu TK na 2027 r.". The immunity of Święczkowski and Sochański "może też zostać uchylony", which is the article's own wording, not a confirmed agenda item. No hour is given — prawo.pl https://www.prawo.pl/prawnicy-sady/zgromadzenie-ogolne-sedziow-tk-anna-korwin-piotrowska-immunitet-bogdana-swieczkowskiego,1556209.html (published 2026-10-30 21:03, read 2026-11-01T18:16Z).
- **Rules:** resolutions pass "bezwzględną większością głosów, w obecności co najmniej 2/3 ogólnej liczby sędziów". With 15 judges the quorum is 10. Consent to criminal liability is a resolution under the same rule (prawo.pl, above; art. 8(1) of the organisation act and art. 23(1) of the status act, per the Prokuratura Krajowa communiqué of 3 Dec 2025).

## Facts
- **Quorum arithmetic:** the five "new" judges, including Korwin-Piotrowska, plus Bentkowska, Szostek and Patyra form a majority of the Tribunal. prawo.pl adds: "Potrzebnych jest jednak do tego dwóch 'starych' sędziów" (prawo.pl, above). So 8 judges are counted on the Korwin-Piotrowska side. A quorum of 10 needs two judges from the camp loyal to Święczkowski.
- **Bench:** the bench has 15 seats. Parliament chose eight new judges this year, and Nawrocki refuses to swear in five of them, including Korwin-Piotrowska, Markiewicz and Berek — Notes from Poland https://notesfrompoland.com/2026/10/31/polish-president-in-physical-confrontation-with-judges-amid-power-struggle-at-constitutional-court/ (published 2026-10-31 12:37, read 2026-11-01T18:15Z).
- **Motions:** on 30 Oct Prosecutor General Żurek sent five motions, four on Święczkowski and one on vice-president Sochański, with 50 volumes of files — Rzeczpospolita https://www.rp.pl/sady-i-trybunaly/art45423951-premier-komentuje-sytuacje-w-tk-zgromadzenie-ogolne-sedziow-3-listopada (published 2026-10-30 19:08, upd. 2026-10-31 00:29, read 2026-10-31T17:40Z). On 31 Oct a Tribunal communiqué said the motions "zostaną rozpatrzone zgodnie z obowiązującymi zasadami", with no date — Interia https://wydarzenia.interia.pl/kraj/news-nowy-komunikat-trybunalu-konstytucyjnego-nawiaze-bezposredni,nId,23566878 (read 2026-10-31T17:45Z).
- **Counter-moves:**
  - Święczkowski's order no. 16/2026 makes 3–6 Nov days off for staff and disputes Korwin-Piotrowska's order — Rzeczpospolita https://www.rp.pl/sady-i-trybunaly/art45425341-wojna-na-zarzadzenia-swieczkowski-podwaza-decyzje-korwin-piotrowskiej (published 2026-10-31 11:28, read 2026-10-31T17:48Z).
  - Święczkowski says he will come back "z panem prezydentem" and "Będę przychodził codziennie" (rp.pl, 30 Oct).
  - Nawrocki: "a forceful takeover of a constitutional body". He told the judges "you are not Constitutional Tribunal judges" (Notes from Poland, 31 Oct).
- **Building access:** on 30 Oct police kept Święczkowski out, and seven judges were escorted in by the State Protection Service (Notes from Poland, 30 Oct, in the 3 Nov dossier). Korwin-Piotrowska's side controls the building.
- **Precedent:** on 15 Oct 2025 the Assembly then led by Święczkowski (11 judges present, 10 voting) unanimously refused consent on an earlier motion — Notes from Poland https://notesfrompoland.com/2025/10/17/polish-constitutional-court-rejects-justice-ministers-request-to-lift-chief-justices-immunity/ (read 2026-10-31T17:32Z). In July 2026 Święczkowski broke off an Assembly "z obawy o przegrane głosowania" (OKO.press headline, search result only: https://oko.press/pierwsza-przegrana-swieczkowskiego-z-obawy-o-przegrane-glosowania-zerwal-zgromadzenie-sedziow-tk).
- No reporting from 1 Nov on the 3 Nov Assembly was found: two searches, plus the notesfrompoland.com homepage and the OKO.press tag page, read 18:05–18:15Z.

## Base rate
- No class applies. The loose class `unscheduled-announcement-within-one-day` (2 YES / 20 NO) does not fit a convened body's vote. No precedent exists for this Assembly composition.

## Schedule slip
- `other-scheduled`: rate 0.084 [estimate], prior 0.07, own 1/11 (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-11-01T18:12Z).
- Signs it may move or fail:
  - The other camp disputes the convening order and has declared 3–6 Nov days off.
  - Quorum needs two judges from the other camp.
  - The immunity motions are not on the published agenda (budget only).
  - The Tribunal's procedure may require a disciplinary-style hearing of the judge concerned before a vote.

## Risks
- If the Assembly meets but declares a quorum by its own count (e.g. treating some seats as vacant or some judges as improperly appointed), the resolution may be adopted and then disputed. The criterion counts it as YES if adopted and announced.
- The Assembly may lift Sochański's immunity but not Święczkowski's. That resolves NO.
- It may adopt only the budget and postpone the motions to a later sitting, which also resolves NO.
- The Tribunal website is contested, so reporting may come mainly through PAP and TVN24.

## Sources
- https://www.prawo.pl/prawnicy-sady/zgromadzenie-ogolne-sedziow-tk-anna-korwin-piotrowska-immunitet-bogdana-swieczkowskiego,1556209.html
- https://notesfrompoland.com/2026/10/31/polish-president-in-physical-confrontation-with-judges-amid-power-struggle-at-constitutional-court/
- https://notesfrompoland.com/ (homepage, read 2026-11-01T18:14Z)
- https://oko.press/tag/anna-korwin-piotrowska (headlines only)
- https://oko.press/swieczkowski-idzie-na-zwarcie-w-tk-chce-silowo-zablokowac-nowym-sedziom-wejscie-na-zgromadzenie (10 Jul 2026, background on a July Assembly)
- https://www.rp.pl/sady-i-trybunaly/art45423951-premier-komentuje-sytuacje-w-tk-zgromadzenie-ogolne-sedziow-3-listopada
- https://www.rp.pl/sady-i-trybunaly/art45425341-wojna-na-zarzadzenia-swieczkowski-podwaza-decyzje-korwin-piotrowskiej
- https://wydarzenia.interia.pl/kraj/news-nowy-komunikat-trybunalu-konstytucyjnego-nawiaze-bezposredni,nId,23566878
- https://notesfrompoland.com/2025/10/17/polish-constitutional-court-rejects-justice-ministers-request-to-lift-chief-justices-immunity/
- https://www.gov.pl/web/prokuratura-krajowa/komunikat-o-nierozpoznaniu-przez-zgromadzenie-ogolne-sedziow-trybunalu-konstytucyjnego-wniosku-o-uchylenie-immunitetu-bogdanowi-swieczkowskiemu
- data/dossiers/2026-11-03/pl-tribunal-1.md
- Not readable: https://www.rp.pl/sady-i-trybunaly (client error)

## Research step (1 Nov evening)
Question: are the immunity motions on the 3 Nov agenda, and can the 10-judge quorum be reached? Read 2026-11-01T18:30–18:42Z.
- **Agenda and quorum:** prawo.pl (published 2026-11-01 15:28, modified 15:41) — https://www.prawo.pl/prawnicy-sady/immunitet-prezesa-swieczkowskiego-a-zgromadzenie-ogolne-sedziow-co-wynika-z-przepisow-ilu-sedziow-potrzeba,1556272.html (read 18:37Z):
  - "Z zarządzenia wynika, że ma ono objąć rozpatrzenie dochodów i wydatków TK na przyszły rok."
  - Unofficially: "najpierw Zgromadzenie zajmie się budżetem, a immunitetom poświęcone zostanie kolejne Zgromadzenie."
  - "nowym sędziom brakuje jeszcze dwóch sędziów"
  - Święczkowski: "żaden z „legalnych" sędziów, czyli pozostałej siódemki, nie weźmie udziału w Zgromadzeniu".
  - Deadline, art. 21 of the status act: a resolution is due "nie później niż w terminie miesiąca od dnia złożenia wniosku". The motions were filed on 30 Oct.
- **Boycott:** prawo.pl (published 2026-10-31 17:11, modified 2026-11-01 09:32) — https://www.prawo.pl/prawnicy-sady/zgromadzenie-ogolne-sedziow-tk-korwin-piotrowska-zapowiedz-swieczkowskiego,1556242.html (read 18:36Z). Święczkowski says the "legal" judges will take part in no actions of the "usurpers", including the convening of the Assembly, and that "uzurpator nie może zwoływać Zgromadzenia Ogólnego". He says he will come to work on Monday.
- **Former TK presidents:** prawo.pl (2026-11-01 09:16) — https://www.prawo.pl/prawnicy-sady/zawieszenie-bogdana-swieczkowskiego-zgromadzenie-ogolne-sedziow-tk-oswiadczenie-byly-prezesow-tk,1556266.html (read 18:38Z). On the statement by former TK presidents: "Założenie jest takie, że zgromadzenie ma dotyczyć projektu budżetu na 2027 r."; "musi uczestniczyć w nim 10 sędziów"; "Święczkowski zapowiada jednak, że ci nie wezmą w nim udziału."
- No report was found of the convening camp claiming a quorum on another count. No old-camp judge was found saying they will attend.
- Notes from Poland had nothing dated 1 Nov (read 18:35Z). rp.pl, tvn24.pl, wyborcza and PAP for 1 Nov were not checked: the search budget was used up.
