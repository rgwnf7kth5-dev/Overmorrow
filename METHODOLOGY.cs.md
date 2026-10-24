# Jak The Overmorrow funguje

The Overmorrow jsou noviny psané dva dny dopředu. Vydání s datem D+2 vychází v 6:00 dne D a popisuje, co podle nás nastane dne D+1. Každá zpráva stojí na události, která je naplánovaná nebo pevně očekávaná, a každá nese aspoň jednu predikci: tvrzení typu ano/ne s uvedenou pravděpodobností, termínem a pravidlem, podle kterého se ověří.

Po událostech se každé tvrzení ověří podle primárního zdroje a ohodnotí. Vydání se po zveřejnění nikdy neupravují. Celý záznam včetně všech omylů je veřejný v archivu a na stránce přesnosti a historie repozitáře přesně ukazuje, kdy která predikce vznikla.

Tento dokument popisuje celý postup. Podrobné pracovní návody pro lidi a agenty, kteří noviny připravují, jsou v [`pipeline/EDITOR.md`](pipeline/EDITOR.md) (psaní vydání) a [`pipeline/RESOLVER.md`](pipeline/RESOLVER.md) (vyhodnocení), zatím v angličtině.

## 1. Časový rozvrh

Večerní redakce den předem odvede pomalou práci: vede výhled na 14 dní, vybírá kandidáty, ke každému navrženému tvrzení sepíše podklad (dossier), provede první kolo predikcí a aktualizuje sledované otázky (oddíl 10). Ranní běh pak vyhodnotí, co je splatné, zkontroluje, co se změnilo přes noc, znovu odhadne, co se pohnulo, a napíše a vydá nové vydání. Kratší běh po poledni vydání aktualizuje o to, co se od rána dozvíme (oddíl 4.8).

| Krok | Kdy (středoevropský čas) |
|---|---|
| Večerní redakce: výhled, podklady, první predikce, sledované otázky | Kolem 18:40 dne D−1 |
| Začátek ranního běhu | Kolem 5:00 dne D |
| Vyhodnocení splatných tvrzení a razítka v archivu | První část běhu |
| Uzávěrka informací | Brzy ráno dne D, zapsaná jako `frozen_at` |
| Vydání s datem D+2 vychází | Do 6:00 dne D |
| Odpolední aktualizace téhož vydání | Běh začíná ve 12:20, vychází do 13:30 dne D |
| Předchozí vydání přechází do archivu | Ve stejnou chvíli, kdy ho nové nahradí |
| Predikované události | Den D+1 |
| Vyhodnocení tvrzení tohoto vydání | V běhu v 6:00 dne D+2, kdy jsou výsledky dne známé |

Vydání je tedy jeden den na titulní straně, druhý den ráno jde do archivu a třetí den ráno, v den, kterým je datováno, dostane výsledky.

Nic, co vyjde najevo po `frozen_at`, se ve vydání nesmí použít. Když se mezi uzávěrkou a zveřejněním objeví rozhodující fakt, vydání se uzavře znovu a zapíše se nový čas.

## 2. Hledání událostí

### 2.1 Kalendáře

Každé vydání začíná průchodem oficiálních kalendářů na den D+1. Seznam zdrojů je v [`pipeline/sources.json`](pipeline/sources.json) a pokaždé se prochází celý. Zahrnuje:

- **Česko:** harmonogram a pořad schůzí Sněmovny, Senát, očekávané události vlády (vlada.cz), vyhlašování nálezů Ústavního soudu, kalendář ČNB, termíny ČSÚ, program prezidenta.
- **Svět:** volební kalendáře (IFES ElectionGuide), program Rady bezpečnosti OSN a agentur OSN, NATO, G7 a G20, Africká unie, ASEAN, summity a státní návštěvy, parlamenty a vlády USA, Spojeného království, Německa, Francie, Polska a dalších velkých zemí, hlavní centrální banky, národní statistické úřady.
- **Evropská unie:** program pléna Parlamentu, výhled Rady a kalendář předsednictví, program kolegia Komise, soudní kalendář Soudního dvora, kalendář ECB, kalendář Eurostatu.
- **Soudy:** naplánované rozsudky mezinárodních a vrcholných národních soudů.
- **Věda, zdraví a kultura:** starty raket (ESA, NASA a další), WHO, velké ceny a vyhlášení, velké festivaly a premiéry.

### 2.2 Probíhající kauzy

Mnoho důležitých událostí v žádném kalendáři není: vyjednávání, války, krize, kampaně. U každé probíhající kauzy čteme zpravodajství za posledních 48 hodin aspoň ze dvou nezávislých zdrojů a určíme další krok, který se čeká na den D+1.

### 2.3 Záznam kandidátů

Každý kandidát se zapíše s údaji:

- datum a čas, místo, instituce;
- rubrika (Česko, Evropa, Svět, Ekonomika, Věda a zdraví, Kultura);
- odkaz na zdroj;
- **stav termínu**: `official` (v kalendáři instituce), `reported` (ohlášeno aspoň ve dvou důvěryhodných médiích) nebo `speculative`. Spekulace nikdy nejdou na titulní stranu;
- **třída skluzu**: druh naplánované události z [`pipeline/reference-data/schedule-slip.json`](pipeline/reference-data/schedule-slip.json) (bod Sněmovny s pevným zařazením, schválení v Radě, rozsudek, start rakety…), nebo `none`. Každá třída nese míru, s jakou se takové události v plánovaný den nekonají (oddíl 4.1).

Před výběrem musí být na jedno vydání aspoň 40 kandidátů.

### 2.4 Výběr

Každý kandidát dostane tři známky od 1 do 5:

- **Dopad**: kolika lidí a jaké politiky, peněz nebo bezpečnosti se týká.
- **Dosah**: pro kolik čtenářů je důležitý. Jsou to všeobecné noviny s českým zázemím a pohledem na svět, ne bulletin EU: nejvíc váží české události a velké světové události; instituce EU dostanou vysokou známku jen tehdy, když má rozhodnutí skutečné důsledky mimo Brusel (peníze, zákony měnící každodenní život, zahraniční politika).
- **Hodnota nejistoty**: kolik čtenáři predikce řekne. Téměř jistý výsledek nebo čistý hod mincí bez informací dostane málo; sporný výsledek, ke kterému existují podklady, hodně.

Redakční skóre je Dopad × Dosah × Hodnota nejistoty. Kandidáti se seřadí a rozdělí do rubrik tak, aby každé vydání pokrylo Česko, svět, Evropu, ekonomiku a, když se najde, aspoň jednu věc z vědy, zdraví nebo kultury. Rubrika Svět je největší; zpráv o institucích EU smí být ve vydání nejvýš tři, včetně titulní strany. Sport a ceny na finančních trzích jsou vyloučené.

Počet českých zpráv (`cz_stories_min`) je cíl, ne kvóta, kterou je nutné naplnit za každou cenu. Když den nenabízí dost českých událostí skutečné váhy, vydání je kratší a důvod se zapíše (`meta.cz_shortfall`). Tvrzení, že se něco *nestane* (nebude sankce, dohoda, oznámení), je v pořádku, když je krok opravdu ve hře; není to způsob, jak zaplnit stránku.

Každý zvažovaný a nevybraný kandidát zůstává v plánovacím souboru i s důvodem a hodnotitel později zjišťuje, které významné události dne jsme měli, vyřadili nebo přehlédli (oddíl 7).

## 3. Jak formulovat tvrzení

Každá zpráva nese jedno nebo více tvrzení. Tvrzení musí být:

1. **Binární**: buď se splní, nebo ne. Žádné „částečně“.
2. **Uvnitř dne, o kterém vydání píše**: událost se musí stát v předpovídaném období a rozlišují se čtyři časy:
   - informační uzávěrka (`frozen_at`);
   - **okno události** (`event_window`, s časovým pásmem místa, `tz`): období, ve kterém se událost musí stát. Smí začít dne D po uzávěrce a musí skončit nejpozději ve 23:59 místního času dne D+1 tam, kde se událost koná (brazilské volby se posuzují podle brazilské neděle). Událost dne D+2 patří do dalšího vydání, ať připadne na D+2 jakkoli brzy; „do pondělního poledne“ není nedělní předpověď;
   - očekávané zveřejnění rozhodujícího dokladu (`evidence_at`), které může přijít později: nedělní volby sečtené přes noc jsou pořád nedělní událost;
   - termín vyhodnocení (`resolves_by`), do kterého hodnotitel doklad přečte.
3. **Ověřitelné**: jmenuje primární zdroj, který rozhodne (`resolution_source`), a přesný test (`criterion`).
4. **Nepodmíněné**: když se událost v okně nestane, tvrzení se nesplní. Riziko odkladu je proto součástí pravděpodobnosti. Chybějící doklad ale neznamená „ne“: když zdroj mešká, tvrzení čeká (oddíl 6). Neplatné je tvrzení jen tehdy, když zdroj přestane existovat nebo kritérium nejde použít.
5. **Informativní**: míří na nejistou část události. „Sacharovova cena bude oznámena“ nic neříká; „Sacharovovu cenu dostane Tundu Lissu“ ano.
6. **Včas ověřitelné**: tvrzení v poli `publishes` uvádí, kdy a kde rozhodující zdroj výsledek zveřejní („tisková zpráva ČSÚ v 9:00 dne 30. října“). Když to nikdo neumí říct, tvrzení se přepíše. Text tvrzení a kritérium musí říkat totéž; tvrzení, jehož text a kritérium se rozcházejí, se před uzávěrkou přepíše.

Zveřejněné pravděpodobnosti jsou mezi 1 a 99 %. I 98 % je predikce, ne fakt; redakce může téměř jistý výsledek vynechat jako málo zajímavý, ale samotné číslo se nikdy neposouvá ke středu ani k okrajům kvůli pravidlu.

Vzájemně se vylučující tvrzení, která dohromady pokrývají všechny výsledky (například kdo ze tří finalistů vyhraje), se zveřejňují společně a jejich součet musí být 100 %. Když množina některý výsledek vynechává (například „do půlnoci nerozhodnuto“), označí se jako neúplná a součet smí být menší.

### 3.1 Číselné predikce

Když je výsledkem číslo zveřejněné oficiálním zdrojem (rychlý odhad inflace, HDP, nezaměstnanost, počet hlasů, účast), binární práh zahazuje informaci. Taková zpráva může místo něj nést **intervalové tvrzení** (`kind: "interval"`): střední hodnotu a 80% rozpětí, zadané jako 10., 50. a 90. percentil, s jednotkou a obvyklou velikostí překvapení u daného ukazatele (`scale`, se zdrojem). Každý prognostik dá tři percentily; zprůměrují se. Konsenzus analytiků, kde existuje, se zapíše jako měřítko. Nejvýš tři intervalová tvrzení na vydání; hodnotí se zvlášť (oddíl 7). Když se binární tvrzení týká téže veličiny (kdo vyhraje, zda bude rozdíl pod čtyři body), odvozuje se ze stejného rozdělení (oddíl 4.6) a odpolední aktualizace, která posune jedno, posune i druhé.

## 4. Odhad pravděpodobnosti

Každé tvrzení projde stejným postupem. Všechny kroky se zapisují do souboru vydání pod `rationale`, aby šlo omyly později rozebrat.

### 4.1 Nejdřív pohled zvenku

Najít referenční třídu: soubor srovnatelných minulých případů. Například „dohody z trialogu předložené ke konečnému hlasování v 10. volebním období“, „první čtení rozpočtu při koaliční většině ve Sněmovně“, „průzkumy před druhým kolem s rozdílem do dvou bodů čtyři dny před volbami“. Zapsat základní četnost a velikost třídy. Základní četnosti se kde to jde berou z dat: [`pipeline/reference-data/`](pipeline/reference-data/README.md) obsahuje četnosti spočtené z otevřených dat o hlasování ve Sněmovně, z porovnání posledních průzkumů s výsledky voleb a z rozhodnutí centrálních bank, i se skripty, které je přepočítají. Knihovna referenčních tříd v [`pipeline/reference-classes.json`](pipeline/reference-classes.json) s každým vydáním roste.

**Bude se to ten den vůbec konat?** U novin na dva dny dopředu je nejčastější cestou k omylu ne špatný výsledek, ale událost, která se ten den nekoná. Třída skluzu každého tvrzení dává výchozí míru: u Sněmovny z dat (například v 9. volebním období se 381 z 565 bodů s pevným zařazením, zhruba dvě třetiny, projednalo na schůzi, na které byly zařazeny; jednotkou je schůze, ne den, takže pravděpodobnost pro jeden konkrétní den je ještě nižší), u ostatních institucí odhad.

U každého tvrzení o naplánované události se predikce zapisuje ve dvou částech: pravděpodobnost, že se událost v okně uskuteční (`p_held`), a pravděpodobnost výsledku, pokud se uskuteční (`p_if_held`); zveřejněné číslo je jejich součin. Hodnotitel zapíše, zda se událost uskutečnila (`held`), takže obě části se hodnotí zvlášť a poznáme, zda se mýlíme v kalendáři, nebo ve výsledku. Každá míra se zpřesňuje vlastním záznamem (`node scripts/refdata/slip.mjs`), takže během několika týdnů odhady nahradí naše pozorování. Prognostik od základní četnosti a oponent začínají riziko odkladu od této míry.

### 4.2 Pohled zevnitř

Vypsat konkrétní faktory, které tento případ od základní četnosti posouvají: aritmetika hlasů a postoje frakcí či stran, veřejná prohlášení, procedurální pravidla, dosavadní chování aktérů, riziko odkladu. Každý faktor se zapíše se směrem a přibližnou velikostí v logaritmu šancí, aby šlo výsledné číslo zrekonstruovat.

### 4.3 Vnější signály

Kde existují, použít nezávislé agregáty: predikční trhy (Polymarket, Kalshi, Betfair; vážené podle likvidity), kurzy sázkových kanceláří (Tipsport a Fortuna vypisují českou i zahraniční politiku), predikční platformy (Metaculus, Good Judgment Open, Manifold), průměry průzkumů místo jednotlivých průzkumů, konsenzus analytiků u statistických dat. Kurzy sázkových kanceláří se převádějí na pravděpodobnost bez marže kanceláře (`node scripts/refdata/models.mjs odds …`) a ukládají se i samotné kurzy, aby šel převod zkontrolovat. Každý signál se zapisuje s druhem (burza, sázková kancelář, platforma) a každý druh se jako měřítko vyhodnocuje zvlášť. Cena v okamžiku predikce se ukládá k tvrzení a slouží jako měřítko při hodnocení. Predikce, která se od likvidního trhu liší o víc než 15 procentních bodů, musí mít písemné zdůvodnění.

### 4.4 Nezávislý tým

Každé tvrzení začíná dvěma soubory. **Podklad** (dossier) obsahuje potvrzený termín, datovaná fakta se zdroji, základní četnost a rizika. Každý fakt nese zdroj, čas zveřejnění, čas, kdy jsme ho četli, a krátký podpůrný výňatek; agenturní zpráva převzatá několika médii se počítá jednou; průzkumy se berou z tabulek agentury a uvádějí, zda jde o platné hlasy, všechny hlasy, rozhodnuté respondenty, nebo pravděpodobné voliče; ekonomická čísla uvádějí, zda jde o první zveřejnění, nebo revizi. Samostatný soubor **signálů** obsahuje vše, co je samo pravděpodobností v jiném zápisu: ceny na trzích, kurzy sázkových kanceláří, predikční platformy a cizí modely, každý s časem odečtu a pokud možno s likviditou. Tržní cena je kotva pravděpodobnosti, proto do podkladu nepatří.

Pak pracuje pět prognostiků, kteří nevidí čísla ostatních, ve dvou krocích. Nejdřív **slepý odhad** (`p_blind`) bez souboru signálů; pak se signály ukážou a každý dá konečný odhad (`p`). Ukládají se oba, takže lze měřit, zda nám trhy pomáhají, nebo nás jen kotví.

- **Od základní četnosti**: začne referenční třídou a upravuje opatrně;
- **Od důkazů**: nejdřív si udělá vlastní rešerši a teprve pak čte společný podklad, aby aspoň jeden prognostik nebyl vázán výběrem faktů v podkladu;
- **Oponent**: sestaví nejsilnější argument proti samozřejmému výsledku (odklad, procedurální pasti, pozdní obraty) a pak dá svůj poctivý nejlepší odhad, který se s ostatními klidně může shodovat;
- **Kotva**: začne kvantitativní kotvou, likvidním trhem nebo statistickým modelem (chyba průzkumů, aritmetika hlasů, konsenzus a obvyklá velikost překvapení), a odchýlí se od ní jen ze zapsaných důvodů;
- **Nezávislý**: jiný model, který má jen podklad, jako kontrola slepých míst, která ostatní sdílejí.

Prognostici neběží všichni na stejném modelu ([`config.ensemble_models`](pipeline/config.json)): prognostici postavení na jednom modelu dělají stejné chyby, a jejich průměr pak vypadá jistěji, než by měl.

Pět pravděpodobností se spojí geometrickým průměrem šancí. Když se liší o víc než 25 procentních bodů, nejdřív se zjistí příčina: jiný výklad otázky (tvrzení se přepíše), jiné informace (všech pět dostane souhrn faktů bez čísel a odhadne znovu), nebo skutečný nesouhlas nad stejnými fakty (rozptyl zůstane a řádek Podklad uvede, že podklady jsou smíšené). Shoda se nikdy nevynucuje jen kvůli menšímu rozptylu.

Ke každému tvrzení se zapisuje každý krok: u každého prognostika přesný model a verze, čas, vstupy, které měl (podklad, signály, vlastní rešerše, referenční data), slepý a konečný odhad, případné dřívější kolo s důvodem změny; pak použité pravidlo spojování a kalibrační parametry a nakonec výsledek s dokladem. Krok, který neproběhl, se zapíše jako chybějící i s důvodem; záznam se nikdy dodatečně nedotváří tak, aby vypadal, jako by krok proběhl před uzávěrkou.

Tvrzení vybíráme podle informační hodnoty, která je součástí redakčního skóre (oddíl 2.4): dáváme přednost otázkám, jejichž výsledek je opravdu otevřený. Žádná kvóta pravděpodobností v jakémkoli pásmu neexistuje. Číslo odpovídá důkazům; pestrost zajišťuje výběr témat.

### 4.5 Red team

Samostatný oponent čte hotové predikce s jedinou otázkou: co nás zítra nejspíš usvědčí z omylu? Každý nový rozhodující fakt vrací tvrzení do kroku 4.4.

### 4.6 Konzistence a kalibrace

- Vzájemně se vylučující a úplné množiny tvrzení musí dát dohromady 100 %; související tvrzení si nesmí odporovat.
- **Související čísla z jednoho modelu.** Když zpráva nese číselnou predikci a binární tvrzení o téže veličině (Lulův podíl hlasů; kdo vyhraje; zda bude rozdíl pod čtyři body), binární čísla se odvozují ze stejného rozdělení (`derived`) a validátor kontroluje, že se shodují do 3 bodů. Vydání č. 4 zveřejnilo šanci Flávia Bolsonara na vítězství (69 %) odděleně od rozpětí podílu hlasů, které odpovídalo zhruba 74 %; pod zprávou je o tom nyní poznámka.
- Když se tvrzení a otázka na tabuli sledovaných otázek týkají téhož výsledku, musí se čísla při uzávěrce shodovat do 5 bodů, nebo se rozdíl (jiný termín, jiné znění) vysvětlí.
- Pravidlo spojování se zlepšuje podle vlastního záznamu skriptem [`scripts/calibrate.mjs`](scripts/calibrate.mjs), který každé ráno spouští hodnotitel a který zapisuje [`pipeline/calibration.json`](pipeline/calibration.json):
  - **Korekce vlastního zkreslení** (od 50 vyhodnocených tvrzení): logit(p) = a + b·x, kde x je průměrný logaritmus šancí prognostiků. Sklon b nad 1 znamená, že surový tým byl příliš opatrný, a jeho čísla se posunou dál od 50 % (prognostici se společnými informacemi mají sklon reagovat společně slabě); nenulové a opravuje náklon k ano nebo ne. Odhad je tažen k „žádné korekci“, takže malé vzorky mění málo, a jeho účinek mimo vzorek se zveřejňuje.
  - **Váhy prognostiků** (od 120 vyhodnocených tvrzení): prognostici s lepším Brierovým skóre dostanou v průměru větší váhu, tlumenou směrem k rovným vahám.
- Dokud je korekce aktivní, každé nové tvrzení zapisuje použité parametry (`forecast.combination`), validátor z nich zveřejněné číslo přepočítá a stránka přesnosti ukazuje aktuální stav.

### 4.7 Uzávěrka

Výsledná pravděpodobnost, text tvrzení, kritérium a zdůvodnění se zapíšou do souboru vydání, který se uloží s časovým razítkem. Od té chvíle se na něm nic nemění.

### 4.8 Odpolední aktualizace

Po poledni se totéž vydání aktualizuje podle [`pipeline/UPDATE.md`](pipeline/UPDATE.md). Každé skutečně přepočítané číslo se ukládá, ať je změna jakkoli malá. Čtenář změnu uvidí, když se číslo posune aspoň o 5 procentních bodů nebo aspoň o 0,5 v logaritmu šancí (96 % → 99 % je v bodech málo, ale riziko neúspěchu klesne na čtvrtinu); změna uvádí nový fakt a jeho zdroj. Odpoledne lze měnit i číselné predikce, spolu s binárními tvrzeními z nich odvozenými. Přibýt mohou až tři zprávy o událostech nově ohlášených na další den. Ranní soubor se nikdy nemění: změny a doplňky se ukládají zvlášť s vlastním časem uzávěrky, čtenář vidí „ráno 55 % → odpoledne 70 %“ a hodnotí se obě verze. Stránka přesnosti porovnává ranní a odpolední čísla na stejných tvrzeních, takže je vidět, zda aktualizace pomáhají.

## 5. Psaní zpráv

- Zprávy se píšou v minulém čase, jako by den už proběhl.
- Známá fakta (termíny, čísla z dokumentů, už vyslovené postoje) se drží odděleně od predikce. Predikcí je tvrzení; text kolem něj ho vysvětluje.
- Žádné vymyšlené citace. Žádná vymyšlená čísla: každé číslo je buď z uvedeného zdroje, nebo je to samotná predikce.
- Každá zpráva končí řádkem **Podklad**, který říká, z čeho vychází a co je hlavní riziko predikce.
- Nepředpovídáme úmrtí, nehody, katastrofy, trestné činy ani zdravotní stav konkrétních lidí a nepíšeme o soukromých osobách.
- Každá stránka jasně uvádí, že jde o predikce.
- Cizí ženská příjmení v češtině nepřechylujeme: Roberta Metsola, Kaja Kallas, sestry Rahimi. Pád nese křestní jméno nebo funkce (předsedkyně Metsola, s Kajou Kallas).
- Noviny vycházejí anglicky (výchozí verze) a česky. Český text je věrný překlad pořízený ve stejném běhu; predikce, pravděpodobnosti i termíny jsou totožné. Překlad lze později opravit, predikci nikdy.
- Fakta kolem predikce před vydáním ověřuje proti uvedeným zdrojům někdo, kdo zprávu nepsal. Každá zpráva stojí nejméně na dvou nezávislých zdrojích, z nichž aspoň jeden je primární nebo z velkého média; agregátory a obsahové farmy se nepoužívají.
- Pokud se fakt ve zveřejněné zprávě ukáže jako chybný, pod zprávou vyjde oprava (z `data/corrections/`). Soubor vydání ani jeho predikce se nemění.

## 6. Ověřování

Vyhodnocuje oponent, který vydání nepsal, podle [`pipeline/RESOLVER.md`](pipeline/RESOLVER.md):

1. Počkat, až uplyne termín tvrzení.
2. Použít zveřejněné kritérium na jmenovaný primární zdroj. Sekundární zpravodajství jen tehdy, když primární zdroj mlčí, a to ze dvou nezávislých médií.
3. Zapsat `yes` (splněno), `no` (nesplněno) nebo `void` (neplatné) – u intervalového tvrzení `measured` se zveřejněnou hodnotou `value`, nebo `void` – s odkazem na doklad a jednou větou. Zapsat také, zda se naplánovaná událost ten den konala (`held`), a označit `ambiguous`, když bylo nutné kritérium vykládat.
4. Výsledek zapsat do samostatného souboru výsledků. Soubor vydání se nikdy nemění.

Když je kritérium nejednoznačné, použije se výklad, který by neutrální pozorovatel vyčetl ze samotného textu tvrzení, a nejednoznačnost se poznamená. Nejednoznačná tvrzení se počítají a při opakování se pravidla psaní zpřísní.

Nedostupný doklad neznamená „ne“. Když rozhodující zdroj ještě nezveřejnil výsledek, tvrzení čeká; hodnotitel to zkouší v dalších bězích a 72 hodin po termínu rozhodne podle nejlepšího dostupného dokladu (dvě nezávislá média) a uvede to v poznámce.

## 7. Hodnocení

- **Brierovo skóre** každého tvrzení: (pravděpodobnost − výsledek)², kde výsledek je 1 pro „splněno“ a 0 pro „nesplněno“. Nižší je lepší. Kdo vždy tipuje 50 %, má 0,25.
- **Logaritmické skóre** se vede souběžně, protože víc trestá sebejisté omyly.
- **Kalibrace**: tvrzení se seskupí podle pásma pravděpodobnosti (například 60–70 %) a porovná se, jak často se splnila.
- **Rozpad** podle rubrik a podle stavu termínu.
- **Srovnání a dovednost** se základní linií 50 %, se základní četností referenční třídy a s cenou na trhu, u sázkové kanceláře nebo na platformě v okamžiku uzávěrky, pokud existovala; naše informativní tvrzení (15–85 %) se hodnotí i samostatně. Každé srovnání se uvádí i jako dovednost, 1 − náš Brier ÷ Brier měřítka: nula znamená, že k měřítku nic nepřidáváme.
- **Kalibrace a rozlišení**: Brierovo skóre se rozkládá na chybu kalibrace (vycházejí naše tipy na 70 % v 70 % případů?), rozlišení (oddělují naše čísla to, co se stane, od toho, co ne?) a obtížnost otázek. Vysoká úspěšnost bez rozlišení by znamenala, že jsme si vybírali jen snadné otázky.
- **Číselné predikce**: podíl výsledků uvnitř našeho 80% rozpětí (má být kolem 80 %), intervalové skóre (šířka rozpětí plus penalizace za minutí, v jednotkách obvyklého překvapení) a chyba naší střední hodnoty proti konsenzu analytiků.
- **Skluzy termínů** podle druhu události a **ověřitelnost**: podíl neplatných, nejednoznačných a pozdě vyhodnocených tvrzení.
- **Prognostici**: Brierovo skóre každé z pěti rolí v týmu.
- **Oblast**: tvrzení o Česku, Evropě a světě zvlášť.
- **Verze metody**: výsledky se ukazují zvlášť pro každou verzi metody (oddíl 12). Pilot a první vydání, vzniklá před zaznamenáváním práce prognostiků, se nikdy nevydávají za doklad o dnešní metodě.
- **Poctivá velikost vzorku**: vedle počtu tvrzení uvádíme počet samostatných událostí, ze kterých pocházejí, a 90% interval Brierova skóre z bootstrapu, který převzorkovává celé události. Několik tvrzení k jedněm volbám není několik nezávislých zkoušek. Kalibrace a vážení se zapínají po 50 a 120 vyhodnocených tvrzeních jako opatrný postup, ne jako důkaz dostatečného vzorku; jejich účinek se posuzuje jen na dalších vydáních. Zpětné testy modely, které mohou znát výsledek, nikdy nepoužíváme jako doklad přesnosti.
- **Srovnání pravidel spojování**: na stejných tvrzeních hodnotíme zveřejněný geometrický průměr šancí, prostý průměr, medián, slepý tým (před trhy), trh a základní četnost. Trh slouží jako měřítko, jen když jeho otázka, termín a pravidla vypořádání odpovídají tvrzení (trh na konečného vítěze není trh na to, zda bude vítěz potvrzen do půlnoci); ukládá se čas odečtu a likvidita.
- **Ráno a odpoledne**: porovnání na stejných tvrzeních, každé s měřítkem dostupným v době jeho uzávěrky.
- **Termín, nebo výsledek**: u naplánovaných událostí se zvlášť hodnotí, zda se událost v okně uskutečnila, a výsledek za předpokladu, že ano.
- **Co jsme přehlédli**: hodnotitel každé ráno pevným postupem sestaví seznam významných událostí předpovídaného dne (RESOLVER, krok 7) a zapíše, zda je noviny měly, zvažovaly a nevybraly, nebo přehlédly. Přesnost u otázek, které jsme si vybrali, je jen polovina obrazu.

Neplatná tvrzení se uvádějí, ale nehodnotí.

V archivovaném vydání je každá vyhodnocená zpráva i razítko obarvené na škále od červené po zelenou podle **shody**: jakou pravděpodobnost jsme dali tomu, co se skutečně stalo. Predikce 90 %, která vyšla, má shodu 90 % (zelená); predikce 55 %, která vyšla, 55 % (oranžová); predikce 90 %, která nevyšla, 10 % (červená).

## 8. Učení z chyb

- Každý týden se rozeberou omyly s nejvyšším Brierovým skóre. Každý dostane odstavec rozboru: špatná základní četnost, přehlédnutý fakt, špatně postavené tvrzení, nebo smůla.
- Referenční třídy se aktualizují s každým vyhodnoceným tvrzením.
- Mezery v seznamu zdrojů, které rozbor odhalí, se doplní do `pipeline/sources.json`.
- Každé ráno se z vlastního záznamu znovu spočítají míry skluzů a kalibrační parametry (`scripts/refdata/slip.mjs`, `scripts/calibrate.mjs`).
- Nejednoznačná nebo neplatná tvrzení vedou ke zpřísnění pravidel psaní; opakovaná příčina se zapíše do EDITOR.md.

## 9. Vydávání a schvalování

V úvodním období se každý ranní běh připraví jako pull request a na web jde, až ho vydavatel schválí; Netlify ke každému pull requestu sestaví náhled. Délka tohoto období je v [`pipeline/config.json`](pipeline/config.json). Potom běh vydává sám do 6:00.

Vydání č. 1 vzniklo před dokončením tohoto postupu a je označené jako pilotní. Hodnotí se stejně jako všechna ostatní, ale ukazuje se odděleně od pozdějších verzí metody.

## 10. Sledované otázky

Vedle denního vydání vedeme tabuli 25 až 40 stálých otázek o nejbližších měsících: volby a sestavování vlád, rozpočty, rozhodnutí centrálních bank, války a jednání, nejméně třetina z nich o Česku. Každá má přesné kritérium, termín a primární zdroj jako každé tvrzení. Večerní redakce je denně kontroluje a celým týmem znovu odhaduje, kdykoli se stane něco podstatného, a nejméně jednou týdně; nové číslo se zapíše, jen pokud se pohne aspoň o 5 bodů. Dřívější čísla se nikdy nemění, takže historie ukazuje, jak se predikce vyvíjela. Vyhodnocené otázky hodnotíme časově váženým Brierovým skóre: počítá se každá hodina, po kterou byla otázka otevřená, takže správný odhad včas má větší cenu než správný odhad na poslední chvíli. Když denní zpráva posune sledovanou otázku, zpráva to uvede.

## 11. Vlastní odhady vydavatele

Vydavatel může k některým tvrzením připsat vlastní pravděpodobnost ještě před začátkem událostí. Tato čísla se v novinách nikdy nepoužijí. Ukládají se do `data/publisher/` s časem, kdy vznikla, a s údajem, zda vydavatel už viděl číslo novin, a na stránce přesnosti se hodnotí zvlášť proti novinám i proti průměru obou. Pokud lidský úsudek přidává informaci, průměr porazí noviny; pokud ne, ukáže to záznam také.

## 12. Verze metody

Každé vydání nese verzi metody, podle které vzniklo (`method_version`; u starších vydání plyne z čísla vydání podle [`config.method_versions`](pipeline/config.json)). Pravidla se nikdy nepoužívají zpětně a zveřejněné predikce se podle nových pravidel nepřehodnocují; chyby nalezené později se doplňují jako transparentní poznámky pod zprávou.

| Verze | Od vydání | Přijato | Co se změnilo |
|---|---|---|---|
| 1 | č. 1 | 21. října 2026 | Pilot a první vydání: predikce bez strukturovaného záznamu prognostiků. |
| 2 | č. 4 | 23. října 2026 | Pět zaznamenaných prognostiků s modely, třídy skluzu, číselné predikce, kvóty na pásma pravděpodobností. |
| 3 | č. 5 | 24. října 2026 | Po vnějším posudku: oddělené okno události a čas dokladu, vyloučení událostí po dni D+1; úplný záznam každého kroku včetně slepých odhadů a odhadů po zobrazení trhu; podklad oddělený od tržních signálů; termín a výsledek hodnocené zvlášť; související čísla z jednoho rozdělení; zrušené kvóty na pravděpodobnosti; ukládání každého odpoledního přepočtu; výsledky podle verze metody s počtem událostí a nejistotou; evidence přehlédnutých událostí. |
