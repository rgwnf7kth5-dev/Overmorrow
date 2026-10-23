# Jak The Overmorrow funguje

The Overmorrow jsou noviny psané dva dny dopředu. Vydání s datem D+2 vychází v 6:00 dne D a popisuje, co podle nás nastane dne D+1. Každá zpráva stojí na události, která je naplánovaná nebo pevně očekávaná, a každá nese aspoň jednu predikci: tvrzení typu ano/ne s uvedenou pravděpodobností, termínem a pravidlem, podle kterého se ověří.

Po událostech se každé tvrzení ověří podle primárního zdroje a ohodnotí. Vydání se po zveřejnění nikdy neupravují. Celý záznam včetně všech omylů je veřejný v archivu a na stránce přesnosti a historie repozitáře přesně ukazuje, kdy která predikce vznikla.

Tento dokument popisuje celý postup. Podrobné pracovní návody pro lidi a agenty, kteří noviny připravují, jsou v [`pipeline/EDITOR.md`](pipeline/EDITOR.md) (psaní vydání) a [`pipeline/RESOLVER.md`](pipeline/RESOLVER.md) (vyhodnocení), zatím v angličtině.

## 1. Časový rozvrh

Jeden běh každé ráno udělá obě práce: nejdřív vyhodnotí, co je splatné, pak napíše a vydá nové vydání. Druhý, kratší běh po poledni vydání aktualizuje o to, co se od rána dozvíme (oddíl 4.8).

| Krok | Kdy (středoevropský čas) |
|---|---|
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
- **Počasí:** ČHMÚ a národní služby (jen pro informaci, obvykle se nehodnotí).

### 2.2 Probíhající kauzy

Mnoho důležitých událostí v žádném kalendáři není: vyjednávání, války, krize, kampaně. U každé probíhající kauzy čteme zpravodajství za posledních 48 hodin aspoň ze dvou nezávislých zdrojů a určíme další krok, který se čeká na den D+1.

### 2.3 Záznam kandidátů

Každý kandidát se zapíše s údaji:

- datum a čas, místo, instituce;
- rubrika (Česko, Evropa, Svět, Ekonomika, Věda a zdraví, Kultura);
- odkaz na zdroj;
- **stav termínu**: `official` (v kalendáři instituce), `reported` (ohlášeno aspoň ve dvou důvěryhodných médiích) nebo `speculative`. Spekulace nikdy nejdou na titulní stranu.

Před výběrem musí být na jedno vydání aspoň 40 kandidátů.

### 2.4 Výběr

Každý kandidát dostane tři známky od 1 do 5:

- **Dopad**: kolika lidí a jaké politiky, peněz nebo bezpečnosti se týká.
- **Dosah**: pro kolik čtenářů je důležitý. Jsou to všeobecné noviny s českým zázemím a pohledem na svět, ne bulletin EU: nejvíc váží české události a velké světové události; instituce EU dostanou vysokou známku jen tehdy, když má rozhodnutí skutečné důsledky mimo Brusel (peníze, zákony měnící každodenní život, zahraniční politika).
- **Hodnota nejistoty**: kolik čtenáři predikce řekne. Téměř jistý výsledek nebo čistý hod mincí bez informací dostane málo; sporný výsledek, ke kterému existují podklady, hodně.

Redakční skóre je Dopad × Dosah × Hodnota nejistoty. Kandidáti se seřadí a rozdělí do rubrik tak, aby každé vydání pokrylo Česko, svět, Evropu, ekonomiku a, když se najde, aspoň jednu věc z vědy, zdraví nebo kultury. Rubrika Svět je největší; zpráv o institucích EU smí být ve vydání nejvýš tři, včetně titulní strany. Sport a ceny na finančních trzích jsou vyloučené.

## 3. Jak formulovat tvrzení

Každá zpráva nese jedno nebo více tvrzení. Tvrzení musí být:

1. **Binární**: buď se splní, nebo ne. Žádné „částečně“.
2. **Časově omezené**: má termín (`resolves_by`), obvykle 23:59 dne D+1.
3. **Ověřitelné**: jmenuje primární zdroj, který rozhodne (`resolution_source`), a přesný test (`criterion`).
4. **Nepodmíněné**: když se událost odloží, tvrzení se obvykle nesplní. Riziko odkladu je proto součástí pravděpodobnosti. Neplatné je tvrzení jen tehdy, když zdroj přestane existovat nebo kritérium nejde použít.
5. **Informativní**: míří na nejistou část události. „Sacharovova cena bude oznámena“ nic neříká; „Sacharovovu cenu dostane Tundu Lissu“ ano.

Pravděpodobnosti se drží mezi 3 a 97 %. Co je jistější, není predikce a uvádí se jako naplánovaný fakt.

Vzájemně se vylučující tvrzení (například kdo ze tří finalistů vyhraje) se zveřejňují společně a jejich součet musí být 100 %.

## 4. Odhad pravděpodobnosti

Každé tvrzení projde stejným postupem. Všechny kroky se zapisují do souboru vydání pod `rationale`, aby šlo omyly později rozebrat.

### 4.1 Nejdřív pohled zvenku

Najít referenční třídu: soubor srovnatelných minulých případů. Například „dohody z trialogu předložené ke konečnému hlasování v 10. volebním období“, „první čtení rozpočtu při koaliční většině ve Sněmovně“, „průzkumy před druhým kolem s rozdílem do dvou bodů čtyři dny před volbami“. Zapsat základní četnost a velikost třídy. Knihovna referenčních tříd v [`pipeline/reference-classes.json`](pipeline/reference-classes.json) s každým vydáním roste.

### 4.2 Pohled zevnitř

Vypsat konkrétní faktory, které tento případ od základní četnosti posouvají: aritmetika hlasů a postoje frakcí či stran, veřejná prohlášení, procedurální pravidla, dosavadní chování aktérů, riziko odkladu. Každý faktor se zapíše se směrem a přibližnou velikostí v logaritmu šancí, aby šlo výsledné číslo zrekonstruovat.

### 4.3 Vnější signály

Kde existují, použít nezávislé agregáty: predikční trhy (vážené podle likvidity), průměry průzkumů místo jednotlivých průzkumů, kurzy sázkových kanceláří, konsenzus analytiků u statistických dat. Predikce, která se od likvidního trhu liší o víc než 15 procentních bodů, musí mít písemné zdůvodnění.

### 4.4 Nezávislý tým

Na každém tvrzení pracují tři prognostici, kteří nevidí čísla ostatních:

- **A, od základní četnosti**: začne referenční třídou a upravuje opatrně;
- **B, od důkazů**: začne nejnovějším zpravodajstvím a signály;
- **C, oponent**: cíleně hledá důvody, proč samozřejmý výsledek nenastane (odklad, procedurální pasti, pozdní obraty).

Tři pravděpodobnosti se spojí geometrickým průměrem šancí. Když se liší o víc než 25 procentních bodů, tvrzení se vrátí: buď prognostici viděli různá fakta (ta se sdílí a kolo se opakuje), nebo je tvrzení špatně formulované a přepíše se.

### 4.5 Red team

Samostatný oponent čte hotové predikce s jedinou otázkou: co nás zítra nejspíš usvědčí z omylu? Každý nový rozhodující fakt vrací tvrzení do kroku 4.4.

### 4.6 Konzistence a kalibrace

- Vzájemně se vylučující tvrzení musí dát dohromady 100 %; související tvrzení si nesmí odporovat.
- Po 50 vyhodnocených tvrzeních se podle vlastní historie (jak často se naše tipy na 70 % skutečně splnily) nastaví kalibrační korekce a aplikuje se na surové číslo týmu. Korekce i data se zveřejňují na stránce přesnosti a aktualizují se jednou měsíčně.

### 4.7 Uzávěrka

Výsledná pravděpodobnost, text tvrzení, kritérium a zdůvodnění se zapíšou do souboru vydání, který se uloží s časovým razítkem. Od té chvíle se na něm nic nemění.

### 4.8 Odpolední aktualizace

Po poledni se totéž vydání aktualizuje podle [`pipeline/UPDATE.md`](pipeline/UPDATE.md). Ranní tvrzení se změní jen tehdy, když nový fakt zveřejněný po ranní uzávěrce posune celý tým o 5 procentních bodů nebo víc; změna uvádí nový fakt a jeho zdroj. Přibýt mohou až tři zprávy o událostech nově ohlášených na další den. Ranní soubor se nikdy nemění: změny a doplňky se ukládají zvlášť s vlastním časem uzávěrky, čtenář vidí „ráno 55 % → odpoledne 70 %“ a hodnotí se obě verze. Stránka přesnosti porovnává ranní a odpolední čísla na stejných tvrzeních, takže je vidět, zda aktualizace pomáhají.

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
3. Zapsat `yes` (splněno), `no` (nesplněno) nebo `void` (neplatné) s odkazem na doklad a jednou větou.
4. Výsledek zapsat do samostatného souboru výsledků. Soubor vydání se nikdy nemění.

Když je kritérium nejednoznačné, použije se výklad, který by neutrální pozorovatel vyčetl ze samotného textu tvrzení, a nejednoznačnost se poznamená. Nejednoznačná tvrzení se počítají a při opakování se pravidla psaní zpřísní.

## 7. Hodnocení

- **Brierovo skóre** každého tvrzení: (pravděpodobnost − výsledek)², kde výsledek je 1 pro „splněno“ a 0 pro „nesplněno“. Nižší je lepší. Kdo vždy tipuje 50 %, má 0,25.
- **Logaritmické skóre** se vede souběžně, protože víc trestá sebejisté omyly.
- **Kalibrace**: tvrzení se seskupí podle pásma pravděpodobnosti (například 60–70 %) a porovná se, jak často se splnila.
- **Rozpad** podle rubrik a podle stavu termínu.
- **Srovnání** se základní linií 50 % a s cenou na predikčním trhu v okamžiku uzávěrky, pokud existovala.

Neplatná tvrzení se uvádějí, ale nehodnotí.

V archivovaném vydání je každá vyhodnocená zpráva i razítko obarvené na škále od červené po zelenou podle **shody**: jakou pravděpodobnost jsme dali tomu, co se skutečně stalo. Predikce 90 %, která vyšla, má shodu 90 % (zelená); predikce 55 %, která vyšla, 55 % (oranžová); predikce 90 %, která nevyšla, 10 % (červená).

## 8. Učení z chyb

- Každý týden se rozeberou omyly s nejvyšším Brierovým skóre. Každý dostane odstavec rozboru: špatná základní četnost, přehlédnutý fakt, špatně postavené tvrzení, nebo smůla.
- Referenční třídy se aktualizují s každým vyhodnoceným tvrzením.
- Mezery v seznamu zdrojů, které rozbor odhalí, se doplní do `pipeline/sources.json`.

## 9. Vydávání a schvalování

V úvodním období se každý ranní běh připraví jako pull request a na web jde, až ho vydavatel schválí; Netlify ke každému pull requestu sestaví náhled. Délka tohoto období je v [`pipeline/config.json`](pipeline/config.json). Potom běh vydává sám do 6:00.

Vydání č. 1 vzniklo před dokončením tohoto postupu a je označené jako pilotní. Hodnotí se stejně jako všechna ostatní.
