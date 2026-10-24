// Builds the static site into dist/: English at /, Czech at /cs/. Run: node scripts/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadEditions, correctionsFor, resultsFor, claimsOf, scoredClaims, summarise, brier, loadWatchlist, watchScore, watchProbAt, isInterval, intervalCloseness, intervalHit, intervalScore, scaledError, measuredClaims, allResults, slipTable, murphy, skill, loadCalibration, loadPublisher, loadConfig, methodVersion, brierInterval, eventKey, altCombos, loadCoverage } from './lib.mjs';

const DIST = path.join(ROOT, 'dist');
const REPO = 'https://github.com/rgwnf7kth5-dev/Overmorrow';
const LANGS = ['en', 'cs'];

// ---------- interface text ----------
const T = {
  en: {
    locale: 'en-GB', prefix: '', photo: 'Illustrative photo',
    motto: 'Tomorrow happens. Overmorrow reports it. You read it today.',
    places: 'Prague · Brussels · World',
    nav: ['Today', 'Forecast board', 'Archive', 'Accuracy', 'Method'],
    other: 'Čeština', otherLang: 'cs',
    forecastEdition: (t) => `Forecast edition · written ${t}`,
    forecastPaper: 'Forecast newspaper',
    pilot: 'Pilot',
    reporting: (d) => `Reporting the events of ${d}`,
    writtenAhead: 'Forecasts written two days ahead',
    latest: 'Latest',
    notice: (d, resolved) => `<b>Every report in this edition is a forecast.</b> Each describes an event scheduled or expected for ${d} and states the outcome we consider most likely, with its probability. The basis line under each report names what it rests on${resolved ? '. Stamps show how each forecast turned out' : ''}.`,
    results: 'Results',
    wentOurWay: (h, n) => `${h} of ${n} scored calls went our way`,
    noScored: 'No scored claims yet',
    brierNote: (b) => `Brier score ${b} (lower is better; 0.250 = always guessing 50%)`,
    awaiting: (n, v) => `${n} awaiting result${v ? `, ${v} void` : ''}`,
    stamp: { yes: 'Came true', no: 'Did not happen', void: 'Void', pending: 'Awaiting result', corrected: 'corrected', measured: 'Measured' },
    iv: { range: '80% range', actual: 'actual', inside: 'inside our range', outside: 'outside our range' },
    upd: { at: (t) => ` · updated ${t}`, banner: (t, r, a) => `<b>Afternoon update, ${t}.</b> ${r} forecast${r === 1 ? '' : 's'} revised, ${a} stor${a === 1 ? 'y' : 'ies'} added. Morning figures stay on record and are scored separately.`, morning: 'morning', afternoon: 'afternoon', why: 'Why it changed', added: 'Added in the afternoon update' },
    print: 'Print edition', printBtn: 'Print or save as PDF', printNote: 'One A4 page. Use your browser’s print dialog; choose “Save as PDF” to keep a copy.', printFoot: 'All reports are forecasts written before the events. Results and sources:',
    match: 'match', scale: ['Missed completely', 'Spot on'], scaleNote: 'Colour shows how close each forecast came: the probability we gave to what actually happened.',
    evidence: 'Evidence',
    howChecked: (many) => `How ${many ? 'these claims are' : 'this claim is'} checked`,
    deadline: 'Deadline', window: 'Event window', evidenceAt: 'Evidence expected', 
    basis: 'Basis', sources: 'Sources', correction: 'Correction', edNote: 'Editor’s note',
    comingUp: 'Coming Up', comingDek: 'Fixed dates for the next fortnight',
    footer: [
      ['About The Overmorrow', 'A newspaper written two days ahead. Every report describes a scheduled or expected event and states the outcome we consider most likely, with a probability. Nothing is edited after publication.'],
      ['Reading the likelihood bars', 'The figure is our estimated probability that the claim in that line comes true. Over many reports, a 70% call should prove right about seven times in ten. The <a href="{p}/accuracy/">accuracy page</a> shows whether it does.'],
      ['Record', `Every edition, forecast and result is kept in a public repository, with the time each was written. <a href="${REPO}">View the source and history</a>.`],
    ],
    archive: { h: 'Archive', lede: 'Every edition as published, with the result of each forecast once it is known.', cols: ['Edition', 'No.', 'Lead story', 'Claims', 'Result'], awaiting: 'Awaiting results', partly: 'Partly resolved', pending: 'pending', pilot: 'pilot' },
    acc: {
      h: 'Accuracy', lede: 'How well our probabilities match what actually happened. Each claim is checked against the primary source named in advance, in the 06:00 run on the date the edition bears.',
      empty: (d) => `No forecasts have been resolved yet. The first results appear on the morning of ${d}, when the claims of edition No. 1 fall due.`,
      howH: 'How we score',
      how: 'Each claim gets a Brier score: the squared difference between our probability and the outcome (1 if it came true, 0 if not). Lower is better. A forecaster who always says 50% scores 0.250. We also keep a log score, which punishes confident misses more heavily, and a calibration chart, which compares our stated probabilities with how often those claims came true.',
      notYet: 'not yet checked',
      small: (n, ev, lo, hi) => `<b>Small sample.</b> ${n} resolved claims from ${ev} separate events. Several claims on one election are not several independent tests, so the 90% interval of the Brier score is ${lo}–${hi}. Differences of a few hundredths mean nothing yet.`,
      verH: 'By version of the method', verNote: 'The method changes as we learn; each edition records the version it was made under, and old editions are never rescored under new rules. Only the latest version measures the method as it now stands.', verCols: ['Version', 'Editions', 'Claims', 'Events', 'Brier (90% interval)', 'Full forecaster record'],
      ver: { 1: 'Pilot and early editions (no recorded ensemble)', 2: 'Five recorded forecasters', 3: 'Event window, full record, derived numbers' },
      comboH: 'Combination rules compared', comboNote: 'The published figure is the geometric mean of the five forecasters’ odds. On the same claims we also score the plain mean, the median, the blind ensemble (estimates made before any market or bookmaker was shown), the market and the base rate. If a simpler rule wins over enough events, we switch.', comboCols: ['Rule', 'Claims', 'Brier', 'Skill vs coin'], comboRows: { pub: 'Published figure', geo: 'Geometric mean of odds', mean: 'Plain mean', median: 'Median', blind: 'Blind ensemble (before markets)', market: 'Market or bookmaker', base: 'Base rate' }, comboEmpty: 'No resolved claim has a full forecaster record yet.',
      decH: 'Timing or outcome?', decNote: 'For scheduled events each forecast is split into the chance that the event happens in the window and the outcome if it does. Scoring the two parts separately shows whether our misses come from the calendar or from the result.', decCols: ['Part', 'Claims', 'Brier'], decRows: ['Event happens in the window', 'Outcome, given it happened'],
      covH: 'What we missed', covNote: 'Each morning the resolver lists the significant events of the forecast day by a fixed procedure (an event counts when it appears in at least two of the reference lists) and marks whether the paper covered it, considered and dropped it, or missed it.', covCols: ['', 'Czech', 'Europe', 'World'], covRows: { covered: 'Covered', dropped: 'Considered, not selected', missed: 'Missed' }, covEmpty: 'Coverage is recorded from edition No. 5 on.',
      figs: ['claims resolved', 'Brier score (0.250 = coin toss)', 'calls that went our way', 'log score (0.69 = coin toss)'],
      calH: 'Calibration', cal: 'Each dot is a group of claims with similar probabilities. On the dashed line, our 70% calls come true 70% of the time. Dots below the line mean we were overconfident; above it, too cautious.',
      calCols: ['Forecast band', 'Claims', 'Average forecast', 'Came true'], axisX: 'Forecast probability', axisY: 'How often it came true',
      secH: 'By section', secCols: ['Section', 'Claims', 'Went our way', 'Brier'],
      trackH: 'Morning edition and afternoon update', trackNote: 'Both versions are frozen and scored on their own. If the afternoon revisions work, their Brier score is lower than the morning one on the same claims.', trackCols: ['Forecasts', 'Claims', 'Brier'], tracks: ['Morning edition, all claims', 'Final forecasts, after updates', 'Revised claims: morning figure', 'Revised claims: afternoon figure'],
      missH: 'Largest misses', missCols: ['Edition', 'Claim', 'Forecast', 'Outcome'], front: 'Front page',
      benchH: 'Against benchmarks', benchNote: 'Each row compares our Brier score with a benchmark on the same claims. Lower is better. A benchmark only counts where it existed when we froze the forecast.', benchCols: ['Benchmark', 'Claims', 'Ours', 'Benchmark'], bench: { coin: 'Coin toss (50%)', base: 'Base rate of the reference class', market: 'Prediction market at freeze', informative: 'Our informative claims only (15–85%)' },
      skillCol: 'Skill',
      skillNote: 'Skill = 1 − our Brier ÷ the benchmark’s Brier: 0 means no better than the benchmark, positive means better, negative worse.',
      bench2: { bookmaker: 'Bookmakers at freeze (margin removed)', platform: 'Forecasting platforms at freeze', exchange: 'Exchanges at freeze' },
      murphyH: 'Calibration and discrimination', murphyNote: 'The Brier score splits into three parts. Calibration error: how far our stated probabilities are from the observed frequencies (lower is better). Discrimination: how well our forecasts separate what happens from what does not (higher is better; a coin toss or a fixed base rate scores zero). Uncertainty: how hard the questions were, which we do not control.',
      murphyCols: ['Part', 'Value'], murphyRows: ['Calibration error', 'Discrimination', 'Uncertainty of the questions', 'Brier ≈ calibration − discrimination + uncertainty'],
      ivH: 'Number forecasts', ivNote: 'Some reports forecast a number (inflation, GDP, a vote count) as a central figure with an 80% range. An honest 80% range contains the result about eight times in ten. The score adds the width of the range to a penalty for results outside it, in units of the indicator’s usual surprise, so lower is better.',
      ivCols: ['Measure', 'Value'], ivRows: ['Number forecasts resolved', 'Results inside our 80% range (target 80%)', 'Interval score (lower is better)', 'Error of our central figure, in usual surprises', 'Error of the analysts’ consensus, same claims'],
      slipH: 'Did the scheduled events happen?', slipNote: 'Much of the risk in a forecast two days ahead is that the event does not take place that day. For each kind of event we start from a prior rate of postponement and update it with our own record; the forecasters use the current rate.', slipCols: ['Kind of event', 'Our record (slipped / checked)', 'Prior', 'Rate now'], slipEmpty: 'No scheduled events checked yet.',
      qualH: 'How checkable our claims were', qualCols: ['Measure', 'Share'], qualRows: ['Claims resolved (including void)', 'Void: the criterion could not be applied', 'Ambiguous: the resolver had to interpret the criterion', 'Resolved more than 48 hours after the deadline', 'Scheduled event did not take place that day'],
      calStH: 'Calibration correction', calSt: (n, w, pl, wOn, pOn, a, b) => `${n} claims with a full forecaster record are resolved. Forecaster weights: ${wOn ? 'in use' : `off until ${w} claims are resolved`}. Correction of our own bias: ${pOn ? `in use (intercept ${a}, slope ${b}; a slope above 1 means our raw ensemble was too timid)` : `off until ${pl} claims are resolved`}.`,
      pubH: 'The publisher’s own forecasts', pubNote: 'The publisher may add his own probability to some claims before the events begin. They are not used in the paper; they are scored separately to see whether human judgement adds anything.', pubCols: ['Forecasts', 'Claims', 'Brier'], pubRows: ['The paper', 'The publisher', 'Average of both (log-odds)', 'Publisher, made without seeing the paper'],
      agentH: 'Forecasters in the ensemble', agentNote: 'Brier score of each independent forecaster on the claims it forecast. The published number combines them.', agentCols: ['Forecaster', 'Claims', 'Brier'],
      roles: { 'base-rate': 'Base rate first', evidence: 'Evidence first', adversarial: 'Adversarial', anchor: 'Model or market anchor', outsider: 'Outsider (other model, dossier only)' },
      scopeH: 'Czech Republic, Europe and the world', scopeCols: ['Scope', 'Claims', 'Went our way', 'Brier'],
      watchH: 'Forecast board', watchNote: (n, b) => `${n} resolved question${n === 1 ? '' : 's'}, mean time-averaged Brier ${b}.`,
    },
    watch: {
      h: 'Forecast board', lede: 'Standing questions about the months ahead, each with a deadline and a rule for checking it. We re-forecast them whenever the evidence moves and keep every earlier figure on record.',
      strip: 'On the forecast board', stripDek: 'Our standing questions, latest figures', all: 'All questions',
      cols: ['Question', 'Now', 'Change', 'Market', 'Deadline'], since: (d) => `since ${d}`, none: '–',
      scopes: { cz: 'Czech Republic', europe: 'Europe', world: 'World' },
      how: 'How it is checked', history: 'History', resolvedH: 'Resolved', resolvedCols: ['Question', 'Final', 'Outcome', 'Time-averaged Brier'],
      note: 'The time-averaged Brier score counts every hour the question was open, so a forecast that was right early scores better than one that came round at the end. Market: the price of the matching Polymarket or Kalshi contract when we last checked, where one exists.',
      updated: (t) => `Updated ${t}`,
    },
    notFound: ['Page not found', 'Try <a href="{p}/">today’s edition</a> or the <a href="{p}/archive/">archive</a>.'],
  },
  cs: {
    locale: 'cs-CZ', prefix: '/cs', photo: 'Ilustrační foto',
    motto: 'Zítra se to stane. Pozítří se o tom píše. Vy to čtete dnes.',
    places: 'Praha · Brusel · Svět',
    nav: ['Dnes', 'Sledované otázky', 'Archiv', 'Přesnost', 'Metoda'],
    other: 'English', otherLang: 'en',
    forecastEdition: (t) => `Vydání predikcí · napsáno ${t}`,
    forecastPaper: 'Noviny z pozítří',
    pilot: 'Pilotní',
    reporting: (d) => `Zprávy o událostech: ${d}`,
    writtenAhead: 'Predikce psané dva dny dopředu',
    latest: 'Nejnovější',
    notice: (d, resolved) => `<b>Všechny zprávy v tomto vydání jsou predikce.</b> Každá popisuje událost naplánovanou nebo očekávanou na ${d} a uvádí výsledek, který považujeme za nejpravděpodobnější, s jeho pravděpodobností. Řádek „Podklad“ pod zprávou říká, z čeho vychází${resolved ? '. Razítka ukazují, jak predikce dopadly' : ''}.`,
    results: 'Výsledky',
    wentOurWay: (h, n) => `${h} z ${n} hodnocených tipů vyšlo`,
    noScored: 'Zatím žádné hodnocené predikce',
    brierNote: (b) => `Brierovo skóre ${b} (nižší je lepší; 0,250 = tip vždy 50 %)`,
    awaiting: (n, v) => `${n} čeká na výsledek${v ? `, ${v} neplatné` : ''}`,
    stamp: { yes: 'Vyšlo', no: 'Nevyšlo', void: 'Neplatné', pending: 'Čeká na výsledek', corrected: 'opraveno', measured: 'Změřeno' },
    iv: { range: '80% rozpětí', actual: 'skutečnost', inside: 'v našem rozpětí', outside: 'mimo naše rozpětí' },
    upd: { at: (t) => ` · aktualizováno ${t}`, banner: (t, r, a) => `<b>Odpolední aktualizace, ${t}.</b> Změněné predikce: ${r}, přidané zprávy: ${a}. Ranní čísla zůstávají v záznamu a hodnotí se zvlášť.`, morning: 'ráno', afternoon: 'odpoledne', why: 'Proč se to změnilo', added: 'Přidáno v odpolední aktualizaci' },
    print: 'Tisková verze', printBtn: 'Vytisknout nebo uložit jako PDF', printNote: 'Jedna strana A4. Použijte tisk v prohlížeči; volbou „Uložit jako PDF“ si uložíte kopii.', printFoot: 'Všechny zprávy jsou predikce napsané před událostmi. Výsledky a zdroje:',
    match: 'shoda', scale: ['Vůbec nevyšlo', 'Přesně vyšlo'], scaleNote: 'Barva ukazuje, jak blízko byla predikce skutečnosti: jakou pravděpodobnost jsme dali tomu, co se opravdu stalo.',
    evidence: 'Doklad',
    howChecked: () => 'Jak se to ověří',
    deadline: 'Termín', window: 'Okno události', evidenceAt: 'Doklad se čeká', 
    basis: 'Podklad', sources: 'Zdroje', correction: 'Oprava', edNote: 'Poznámka redakce',
    comingUp: 'Co nás čeká', comingDek: 'Pevné termíny na příští dva týdny',
    footer: [
      ['O novinách The Overmorrow', 'Noviny psané dva dny dopředu. Každá zpráva popisuje naplánovanou nebo očekávanou událost a uvádí výsledek, který považujeme za nejpravděpodobnější, s pravděpodobností. Po vydání se nic neupravuje.'],
      ['Jak číst proužky', 'Číslo je náš odhad pravděpodobnosti, že se tvrzení na daném řádku splní. Z mnoha tipů na 70 % by mělo vyjít zhruba sedm z deseti. Jestli to platí, ukazuje <a href="{p}/accuracy/">stránka přesnosti</a>.'],
      ['Záznam', `Každé vydání, predikce i výsledek jsou ve veřejném repozitáři i s časem, kdy vznikly. <a href="${REPO}">Zdroj a historie</a>.`],
    ],
    archive: { h: 'Archiv', lede: 'Všechna vydání tak, jak vyšla, a u každé predikce výsledek, jakmile je znám.', cols: ['Vydání', 'Č.', 'Hlavní zpráva', 'Tvrzení', 'Výsledek'], awaiting: 'Čeká na výsledky', partly: 'Částečně vyhodnoceno', pending: 'čeká', pilot: 'pilotní' },
    acc: {
      h: 'Přesnost', lede: 'Jak dobře naše pravděpodobnosti odpovídají tomu, co se skutečně stalo. Každé tvrzení se ověřuje podle předem určeného primárního zdroje, a to v šest ráno v den, kterým je vydání datováno.',
      empty: (d) => `Zatím nebyla vyhodnocena žádná predikce. První výsledky přibudou ráno ${d}, kdy vyprší termín tvrzení z vydání č. 1.`,
      howH: 'Jak hodnotíme',
      how: 'Každé tvrzení dostane Brierovo skóre: druhou mocninu rozdílu mezi naší pravděpodobností a výsledkem (1, když se splnilo, 0, když ne). Nižší je lepší. Kdo vždy tipuje 50 %, má 0,250. Sledujeme i logaritmické skóre, které víc trestá sebejisté omyly, a kalibrační graf, který porovnává uvedené pravděpodobnosti s tím, jak často se tvrzení splnila.',
      notYet: 'dosud nevyhodnoceno',
      small: (n, ev, lo, hi) => `<b>Malý vzorek.</b> ${n} vyhodnocených tvrzení z ${ev} samostatných událostí. Několik tvrzení k jedněm volbám není několik nezávislých zkoušek, a 90% interval Brierova skóre je proto ${lo}–${hi}. Rozdíly o pár setin zatím nic neznamenají.`,
      verH: 'Podle verze metody', verNote: 'Metoda se mění podle toho, co se učíme; každé vydání nese verzi, podle které vzniklo, a stará vydání se podle nových pravidel nepřehodnocují. Metodu v dnešní podobě měří jen poslední verze.', verCols: ['Verze', 'Vydání', 'Tvrzení', 'Události', 'Brier (90% interval)', 'Úplný záznam prognostiků'],
      ver: { 1: 'Pilot a první vydání (bez zaznamenaného týmu)', 2: 'Pět zaznamenaných prognostiků', 3: 'Okno události, úplný záznam, odvozená čísla' },
      comboH: 'Srovnání pravidel spojování', comboNote: 'Zveřejněné číslo je geometrický průměr šancí pěti prognostiků. Na stejných tvrzeních hodnotíme i prostý průměr, medián, slepý tým (odhady před ukázáním trhů a kurzů), trh a základní četnost. Pokud jednodušší pravidlo vyhrává na dost událostech, přejdeme na ně.', comboCols: ['Pravidlo', 'Tvrzení', 'Brier', 'Dovednost proti minci'], comboRows: { pub: 'Zveřejněné číslo', geo: 'Geometrický průměr šancí', mean: 'Prostý průměr', median: 'Medián', blind: 'Slepý tým (před trhy)', market: 'Trh nebo sázková kancelář', base: 'Základní četnost' }, comboEmpty: 'Zatím není vyhodnocené žádné tvrzení s úplným záznamem prognostiků.',
      decH: 'Termín, nebo výsledek?', decNote: 'U naplánovaných událostí se každá predikce dělí na pravděpodobnost, že se událost v daném okně uskuteční, a na výsledek, pokud se uskuteční. Samostatné hodnocení obou částí ukáže, zda se mýlíme v kalendáři, nebo ve výsledku.', decCols: ['Část', 'Tvrzení', 'Brier'], decRows: ['Událost se v okně uskuteční', 'Výsledek, pokud se uskutečnila'],
      covH: 'Co jsme přehlédli', covNote: 'Hodnotitel každé ráno pevným postupem sestaví seznam významných událostí předpovídaného dne (událost se počítá, když je aspoň ve dvou referenčních přehledech) a označí, zda ji noviny měly, zvažovaly a nevybraly, nebo přehlédly.', covCols: ['', 'Česko', 'Evropa', 'Svět'], covRows: { covered: 'Ve vydání', dropped: 'Zvažováno, nevybráno', missed: 'Přehlédnuto' }, covEmpty: 'Pokrytí se zaznamenává od vydání č. 5.',
      figs: ['vyhodnocených tvrzení', 'Brierovo skóre (0,250 = hod mincí)', 'tipů, které vyšly', 'log. skóre (0,69 = hod mincí)'],
      calH: 'Kalibrace', cal: 'Každý bod je skupina tvrzení s podobnou pravděpodobností. Na přerušované čáře se naše tipy na 70 % splní v 70 % případů. Body pod čarou znamenají přílišnou sebejistotu, nad ní přílišnou opatrnost.',
      calCols: ['Pásmo predikce', 'Tvrzení', 'Průměrná predikce', 'Splnilo se'], axisX: 'Predikovaná pravděpodobnost', axisY: 'Jak často se splnilo',
      secH: 'Podle rubrik', secCols: ['Rubrika', 'Tvrzení', 'Vyšlo', 'Brier'],
      trackH: 'Ranní vydání a odpolední aktualizace', trackNote: 'Obě verze jsou zamčené a hodnotí se samostatně. Pokud odpolední změny pomáhají, mají na stejných tvrzeních nižší Brierovo skóre než ranní.', trackCols: ['Predikce', 'Tvrzení', 'Brier'], tracks: ['Ranní vydání, všechna tvrzení', 'Konečné predikce po aktualizacích', 'Změněná tvrzení: ranní číslo', 'Změněná tvrzení: odpolední číslo'],
      missH: 'Největší omyly', missCols: ['Vydání', 'Tvrzení', 'Predikce', 'Výsledek'], front: 'Titulní strana',
      benchH: 'Proti měřítkům', benchNote: 'Každý řádek porovnává naše Brierovo skóre s měřítkem na stejných tvrzeních. Nižší je lepší. Měřítko se počítá jen tam, kde existovalo v okamžiku uzávěrky.', benchCols: ['Měřítko', 'Tvrzení', 'My', 'Měřítko'], bench: { coin: 'Hod mincí (50 %)', base: 'Základní míra referenční třídy', market: 'Predikční trh při uzávěrce', informative: 'Jen naše informativní tvrzení (15–85 %)' },
      skillCol: 'Dovednost',
      skillNote: 'Dovednost = 1 − naše Brierovo skóre ÷ skóre měřítka: 0 znamená ne lépe než měřítko, kladné číslo lépe, záporné hůř.',
      bench2: { bookmaker: 'Sázkové kanceláře při uzávěrce (bez marže)', platform: 'Predikční platformy při uzávěrce', exchange: 'Burzy predikcí při uzávěrce' },
      murphyH: 'Kalibrace a rozlišení', murphyNote: 'Brierovo skóre se dělí na tři části. Chyba kalibrace: jak daleko jsou naše pravděpodobnosti od skutečných četností (nižší je lepší). Rozlišení: jak dobře naše predikce oddělují to, co se stane, od toho, co ne (vyšší je lepší; hod mincí ani pevná základní míra nerozlišují nic). Nejistota: jak těžké otázky byly, což neovlivníme.',
      murphyCols: ['Část', 'Hodnota'], murphyRows: ['Chyba kalibrace', 'Rozlišení', 'Nejistota otázek', 'Brier ≈ kalibrace − rozlišení + nejistota'],
      ivH: 'Číselné predikce', ivNote: 'Některé zprávy předpovídají číslo (inflaci, HDP, počet hlasů) jako střední hodnotu s 80% rozpětím. Poctivé 80% rozpětí obsahuje výsledek zhruba osmkrát z deseti. Skóre sčítá šířku rozpětí a penalizaci za výsledky mimo ně, v jednotkách obvyklého překvapení daného ukazatele, takže nižší je lepší.',
      ivCols: ['Ukazatel', 'Hodnota'], ivRows: ['Vyhodnocené číselné predikce', 'Výsledky v našem 80% rozpětí (cíl 80 %)', 'Intervalové skóre (nižší je lepší)', 'Chyba naší střední hodnoty, v obvyklých překvapeních', 'Chyba konsenzu analytiků na stejných tvrzeních'],
      slipH: 'Konaly se naplánované události?', slipNote: 'Velká část rizika predikce na dva dny dopředu je, že se událost ten den vůbec nekoná. Pro každý druh události vycházíme z výchozí míry odkladů a upřesňujeme ji vlastním záznamem; prognostici používají aktuální míru.', slipCols: ['Druh události', 'Náš záznam (odloženo / ověřeno)', 'Výchozí', 'Míra teď'], slipEmpty: 'Zatím nebyla ověřena žádná naplánovaná událost.',
      qualH: 'Jak dobře šla tvrzení ověřit', qualCols: ['Ukazatel', 'Podíl'], qualRows: ['Vyhodnocená tvrzení (včetně neplatných)', 'Neplatná: kritérium nešlo použít', 'Nejednoznačná: kritérium bylo nutné vykládat', 'Vyhodnoceno déle než 48 hodin po termínu', 'Naplánovaná událost se ten den nekonala'],
      calStH: 'Kalibrační korekce', calSt: (n, w, pl, wOn, pOn, a, b) => `Vyhodnocených tvrzení s úplným záznamem prognostiků: ${n}. Váhy prognostiků: ${wOn ? 'používají se' : `vypnuto, dokud nebude vyhodnoceno ${w} tvrzení`}. Korekce vlastního zkreslení: ${pOn ? `používá se (posun ${a}, sklon ${b}; sklon nad 1 znamená, že surový ensemble byl příliš opatrný)` : `vypnuto, dokud nebude vyhodnoceno ${pl} tvrzení`}.`,
      pubH: 'Vlastní odhady vydavatele', pubNote: 'Vydavatel může k některým tvrzením připsat vlastní pravděpodobnost ještě před začátkem událostí. V novinách se nepoužívají; hodnotí se zvlášť, aby bylo vidět, jestli lidský úsudek něco přidává.', pubCols: ['Predikce', 'Tvrzení', 'Brier'], pubRows: ['Noviny', 'Vydavatel', 'Průměr obou (logaritmus šancí)', 'Vydavatel bez znalosti novin'],
      agentH: 'Prognostici v ensemblu', agentNote: 'Brierovo skóre každého nezávislého prognostika na tvrzeních, která odhadoval. Zveřejněné číslo je kombinuje.', agentCols: ['Prognostik', 'Tvrzení', 'Brier'],
      roles: { 'base-rate': 'Od základní míry', evidence: 'Od nejnovějších zpráv', adversarial: 'Ďáblův advokát', anchor: 'Model nebo trh', outsider: 'Nezávislý (jiný model, jen podklad)' },
      scopeH: 'Česko, Evropa a svět', scopeCols: ['Oblast', 'Tvrzení', 'Vyšlo', 'Brier'],
      watchH: 'Sledované otázky', watchNote: (n, b) => `Vyhodnocené otázky: ${n}, průměrné časově vážené Brierovo skóre ${b}.`,
    },
    watch: {
      h: 'Sledované otázky', lede: 'Stálé otázky o nejbližších měsících, každá s termínem a pravidlem, podle kterého se ověří. Předpověď měníme, kdykoli se pohnou podklady, a všechna dřívější čísla zůstávají v záznamu.',
      strip: 'Sledované otázky', stripDek: 'Naše stálé otázky, poslední čísla', all: 'Všechny otázky',
      cols: ['Otázka', 'Teď', 'Změna', 'Trh', 'Termín'], since: (d) => `od ${d}`, none: '–',
      scopes: { cz: 'Česko', europe: 'Evropa', world: 'Svět' },
      how: 'Jak se to ověří', history: 'Vývoj', resolvedH: 'Vyhodnocené', resolvedCols: ['Otázka', 'Poslední', 'Výsledek', 'Časově vážený Brier'],
      note: 'Časově vážené Brierovo skóre započítává každou hodinu, po kterou byla otázka otevřená, takže předpověď, která byla správně brzy, dopadne lépe než ta, která se k výsledku dopracovala až na konci. Trh: cena odpovídajícího kontraktu na Polymarketu nebo Kalshi při poslední kontrole, pokud existuje.',
      updated: (t) => `Aktualizováno ${t}`,
    },
    notFound: ['Stránka nenalezena', 'Zkuste <a href="{p}/">dnešní vydání</a> nebo <a href="{p}/archive/">archiv</a>.'],
  },
};

// ---------- helpers ----------
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pctNum = (p, L) => (L.locale === 'cs-CZ' ? `${Math.round(p * 100)} %` : `${Math.round(p * 100)}%`);
// Reader-facing precision: one decimal unless the claim asks otherwise (display_decimals) or the usual surprise is tiny.
const decimalsOf = (c) => c.display_decimals ?? Math.min(Math.max(...[c.quantiles.q10, c.quantiles.q50, c.quantiles.q90].map((x) => (String(x).split('.')[1] || '').length)), c.scale && c.scale < 0.3 ? 2 : 1);
/** A value of an interval claim with its unit, in the page's number format ("2.4%", "2,4 %", "CZK 386 bn"). */
function ivNum(x, c, L, exact = false) {
  const d = exact ? Math.max(decimalsOf(c), Math.min(3, (String(x).split('.')[1] || '').length)) : decimalsOf(c);
  const t = x.toLocaleString(L.locale, { minimumFractionDigits: d, maximumFractionDigits: d });
  const u = c.unit || '';
  if (!u) return t;
  if (u === '%' || u === 'pp' || u === 'p. b.') return L.locale === 'cs-CZ' || u !== '%' ? `${t} ${u}` : `${t}%`;
  return `${t} ${u}`;
}
const ivRange = (c, L) => `${L.iv.range} ${ivNum(c.quantiles.q10, c, L)}–${ivNum(c.quantiles.q90, c, L)}`;
/** Position of the range on a small bar: the 80% range in the middle half, the median as a tick. */
function ivBar(c, extraValue) {
  const { q10: l, q50: m, q90: u } = c.quantiles;
  const lo = l - (u - l) / 2, hi = u + (u - l) / 2;
  const pos = (x) => Math.max(0, Math.min(100, ((x - lo) / (hi - lo)) * 100)).toFixed(1);
  return `<span class="bar range" aria-hidden="true"><i style="left:${pos(l)}%;width:${(pos(u) - pos(l)).toFixed(1)}%"></i><u style="left:${pos(m)}%"></u>${typeof extraValue === 'number' ? `<em style="left:${pos(extraValue)}%"></em>` : ''}</span>`;
}
const num3 = (x, L) => (L.locale === 'cs-CZ' ? x.toFixed(3).replace('.', ',') : x.toFixed(3));
const LONG = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const DAY = { weekday: 'long', day: 'numeric', month: 'long' };
const fmtDay = (d, L) => new Intl.DateTimeFormat(L.locale, { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(`${d}T12:00:00Z`));
const fmtDate = (d, L, opts = LONG) => new Intl.DateTimeFormat(L.locale, { ...opts, timeZone: 'UTC' }).format(new Date(`${d}T12:00:00Z`));
const fmtStamp = (s, L) => {
  const m = s.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}).*([+-]\d{2}:\d{2}|Z)$/);
  if (!m) return s;
  const zone = { '+01:00': 'CET', '+02:00': 'CEST', Z: 'UTC' }[m[3]] || m[3];
  return `${fmtDate(m[1], L, DAY)}, ${m[2]} ${zone}`;
};
const hhmm = (st) => (st.match(/T(\d{2}:\d{2})/) || [])[1] || '';
const write = (rel, html) => {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};
const link = (L, p) => `${L.prefix}${p}`;
const fill = (s, L) => s.replaceAll('{p}', L.prefix);

/** Overlay an edition's Czech text (fields under "cs") onto a copy of it. Falls back to English. */
function localise(ed, lang) {
  if (lang === 'en') return ed;
  const c = structuredClone(ed);
  const top = ed.cs || {};
  if (top.weather && c.weather) Object.assign(c.weather, top.weather);
  if (top.layout) { c.front = top.layout.front; c.sections = top.layout.sections; }
  else if (top.sections) c.sections = c.sections.map((s, i) => ({ ...s, ...(top.sections[i] || {}) }));
  if (top.diary) c.diary = top.diary;
  // With its own layout, the Czech edition may lead with a story that is small in the English one, and vice versa.
  const role = new Map();
  if (top.layout) {
    role.set(top.layout.front.lead, 'lead');
    for (const id of top.layout.front.rail || []) role.set(id, 'rail');
  }
  c.stories = c.stories.map((s) => {
    const x = s.cs || {};
    const out = { ...s };
    if (top.layout) out.size = role.get(s.id) || (s.size === 'lead' || s.size === 'rail' ? 'half' : s.size);
    for (const k of ['kicker', 'headline', 'standfirst', 'body', 'basis']) if (x[k]) out[k] = x[k];
    if (x.table && s.table) out.table = { caption: x.table.caption || s.table.caption, rows: s.table.rows.map((r, i) => ({ ...r, ...(x.table.rows?.[i] || {}) })) };
    out.claims = s.claims.map((cl) => {
      const o = { ...cl, ...(x.claims?.[cl.id] || {}) };
      if (cl.update?.reason_cs) o.update = { ...cl.update, reason: cl.update.reason_cs };
      return o;
    });
    return out;
  });
  return c;
}

// ---------- page frame ----------
function layout(L, { title, nav, header, main, description, path: pagePath }) {
  const keys = ['today', 'watch', 'archive', 'accuracy', 'method'];
  const hrefs = ['/', '/watch/', '/archive/', '/accuracy/', '/method/'];
  const other = T[L.otherLang];
  return `<!doctype html>
<html lang="${L === T.cs ? 'cs' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description || L.motto)}">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="alternate" hreflang="en" href="${pagePath}">
<link rel="alternate" hreflang="cs" href="/cs${pagePath}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/style.css">
</head>
<body>
<div class="page">
${header}
<nav class="nav" aria-label="Sections">${keys.map((k, i) => `<a href="${link(L, hrefs[i])}"${k === nav ? ' aria-current="page"' : ''}>${L.nav[i]}</a>`).join('')}<a class="lang" href="${link(other, pagePath)}" hreflang="${L.otherLang}">${L.other}</a></nav>
${main}
<footer>${L.footer.map(([h, p]) => `<div><h4>${h}</h4><p>${fill(p, L)}</p></div>`).join('')}</footer>
</div>
</body>
</html>
`;
}

function masthead(L, ed, latestDate, printHref) {
  const top = ed ? L.forecastEdition(fmtStamp(ed.frozen_at, L)) + (ed.update ? L.upd.at(hhmm(ed.update.frozen_at)) : '') : L.forecastPaper;
  const line = ed
    ? `<span>${fmtDate(ed.edition_date, L)}</span><span>No. ${ed.number}${ed.pilot ? ` · ${L.pilot}` : ''}${printHref ? ` · <a href="${printHref}">${L.print}</a>` : ''}</span><span>${L.reporting(fmtDate(ed.events_date, L, DAY))}</span>`
    : `<span>${L.writtenAhead}</span><span>${L.latest}: <a href="${link(L, '/')}">${fmtDate(latestDate, L, DAY)}</a></span>`;
  return `<header>
  <div class="topline"><span>${esc(top)}</span><span>${L.places}</span></div>
  <div class="mast"><a href="${link(L, '/')}"><img class="logo" src="/logo.svg" width="400" height="400" alt=""><span>The Overmorrow</span></a></div>
  <p class="motto">${esc(L.motto)}</p>
  <div class="dateline">${line}</div>
</header>`;
}

// ---------- edition ----------
// How close a forecast came: the probability we gave to what actually happened (1 = spot on, 0 = missed completely).
const closeness = (claim, r) => (!r || !claim ? null : r.outcome === 'measured' && isInterval(claim) ? intervalCloseness(claim, r.value) : r.outcome === 'yes' ? claim.probability : r.outcome === 'no' ? 1 - claim.probability : null);
// Red (0) through amber to green (1).
const hue = (x) => Math.round(4 + 136 * x);

function stampFor(result, L, claim) {
  if (!result) return `<span class="stamp pending">${L.stamp.pending}</span>`;
  const c = closeness(claim, result);
  const style = c === null ? '' : ` style="--h:${hue(c)}"`;
  if (result.outcome === 'measured' && isInterval(claim)) return `<span class="stamp measured scored"${style}>${L.iv.actual} ${ivNum(result.value, claim, L, true)} · ${intervalHit(claim, result.value) ? L.iv.inside : L.iv.outside}${result.corrected ? ` (${L.stamp.corrected})` : ''}</span>`;
  return `<span class="stamp ${result.outcome}${c === null ? '' : ' scored'}"${style}>${L.stamp[result.outcome]}${c === null ? '' : ` · ${L.match} ${pctNum(c, L)}`}${result.corrected ? ` (${L.stamp.corrected})` : ''}</span>`;
}

/** Class and colour for a whole story once results are in: the mean closeness of its resolved claims. */
function storyTone(story, results) {
  const xs = story.claims.map((c) => closeness(c, results.get(c.id))).filter((x) => x !== null);
  if (!xs.length) return { cls: '', style: '' };
  const m = xs.reduce((a, b) => a + b, 0) / xs.length;
  return { cls: ' scored', style: ` style="--h:${hue(m)}"` };
}

function likelihood(claim, results, show, L) {
  const r = results.get(claim.id);
  if (isInterval(claim)) {
    const val = show && r?.outcome === 'measured' ? r.value : undefined;
    const mq = claim.morning_quantiles;
    const was = mq ? `<s title="${L.upd.morning}">${ivNum(mq.q50, claim, L)}</s> → ` : '';
    const ivWhy = mq && claim.update?.reason ? `<p class="why"><b>${L.upd.why}:</b> ${esc(claim.update.reason)}${(claim.update.sources || []).filter((x) => x.url).map((x) => ` <a href="${esc(x.url)}">${esc(x.title)}</a>`).join(';')}</p>` : '';
    return `<div class="lk iv${mq ? ' rev' : ''}">${ivBar(claim, val)}<span>${esc(claim.label)}: ${was}<b>${ivNum(claim.quantiles.q50, claim, L)}</b> <small>(${ivRange(claim, L)})${mq ? ` ${L.upd.afternoon} ${hhmm(claim.update.frozen_at)}` : ''}</small></span>${show ? stampFor(r, L, claim) : ''}</div>${ivWhy}${
      r && r.note ? `<p class="resnote">${esc(r.note)}${r.evidence ? ` <a href="${esc(r.evidence)}">${L.evidence}</a>` : ''}</p>` : ''}`;
  }
  const revised = claim.update && claim.morning !== null && claim.morning !== undefined && claim.morning !== claim.probability;
  const figure = revised
    ? `<s title="${L.upd.morning}">${pctNum(claim.morning, L)}</s> → <b>${pctNum(claim.probability, L)}</b> <small>${L.upd.afternoon} ${hhmm(claim.update.frozen_at)}</small>`
    : `<b>${pctNum(claim.probability, L)}</b>`;
  const why = revised && claim.update.reason ? `<p class="why"><b>${L.upd.why}:</b> ${esc(claim.update.reason)}${(claim.update.sources || []).filter((x) => x.url).map((x) => ` <a href="${esc(x.url)}">${esc(x.title)}</a>`).join(';')}</p>` : '';
  return `<div class="lk${revised ? ' rev' : ''}"><span class="bar" aria-hidden="true"><i style="width:${Math.round(claim.probability * 100)}%"></i></span><span>${esc(claim.label)}: ${figure}</span>${show ? stampFor(r, L, claim) : ''}</div>${why}${
    r && r.note ? `<p class="resnote">${esc(r.note)}${r.evidence ? ` <a href="${esc(r.evidence)}">${L.evidence}</a>` : ''}</p>` : ''}`;
}

function storyHtml(story, results, show, L, opts = {}) {
  const isLead = story.size === 'lead';
  const H = isLead || story.size === 'half' ? 'h3' : 'h4';
  const tableClaims = new Set((story.table?.rows || []).map((r) => r.claim));
  const lines = story.claims.filter((c, i) => i === 0 || !tableClaims.has(c.id)).map((c) => likelihood(c, results, show, L)).join('');
  const table = story.table ? `<figure class="alt"><table><caption>${esc(story.table.caption)}</caption>${story.table.rows.map((row) => {
    const c = story.claims.find((x) => x.id === row.claim);
    const r = results.get(row.claim);
    return `<tr><td>${esc(row.label)}${row.note ? ` <small>· ${esc(row.note)}</small>` : ''}</td><td class="n">${c ? pctNum(c.probability, L) : ''}${show && r ? ` ${stampFor(r, L, c)}` : ''}</td></tr>`;
  }).join('')}</table></figure>` : '';
  const paras = story.body.map((p) => `<p>${esc(p)}</p>`);
  if (table) paras.splice(Math.min(2, paras.length), 0, table);
  const sources = (story.sources || []).filter((s) => s.url).map((s) => `<a href="${esc(s.url)}">${esc(s.title)}</a>`).join('; ');
  const checks = `<details class="check"><summary>${L.howChecked(story.claims.length > 1)}</summary>${story.claims
    .map((c) => `<p><b>${esc(c.text)}</b> ${esc(c.criterion)}${c.event_window ? ` ${L.window}: ${esc(fmtStamp(c.event_window.start, L))} – ${esc(fmtStamp(c.event_window.end, L))}${c.tz ? ` (${esc(c.tz)})` : ''}.` : ''}${c.evidence_at ? ` ${L.evidenceAt}: ${esc(fmtStamp(c.evidence_at, L))}.` : ''} ${L.deadline}: ${esc(fmtStamp(c.resolves_by, L))}.</p>`).join('')}</details>`;
  const fixes = (opts.corrections || []).map((c) => `<p class="correction"><b>${c.kind === 'note' ? L.edNote : L.correction} (${esc(fmtDay(c.date, L))}):</b> ${esc(c.text)}${c.url ? ` <a href="${esc(c.url)}">${L.sources}</a>` : ''}</p>`).join('');
  const basis = `<p class="basis">${L.basis}: ${esc(story.basis.replace(/^(Basis|Podklad):\s*/i, ''))}${sources ? ` ${L.sources}: ${sources}.` : ''}</p>${fixes}${checks}`;
  const content = (isLead || opts.wide) && !opts.flat ? `<div class="cols">${paras.join('')}${basis}</div>` : `${paras.join('')}${basis}`;
  const Hx = opts.h || H;
  const ph = opts.photo;
  const photo = ph ? `<figure class="photo"><img src="/photos/${esc(ph.edition)}/${esc(ph.file)}" width="${ph.width}" height="${ph.height}" alt="${esc(ph.alt)}" decoding="async"><figcaption>${esc(ph.caption)} <span class="credit">${L.photo}: ${esc(ph.credit)}, ${ph.license_url ? `<a href="${esc(ph.license_url)}">${esc(ph.license)}</a>` : esc(ph.license)}, <a href="${esc(ph.source_url)}">Wikimedia Commons</a></span></figcaption></figure>` : '';
  const top = opts.top ?? isLead;
  return `${top ? photo : ''}<div class="hgroup"><div class="kicker">${story.added ? `<span class="addtag">${L.upd.added}</span> ` : ''}${esc(story.kicker)}</div><${Hx}>${esc(story.headline)}</${Hx}>${story.standfirst ? `<p class="standfirst">${esc(story.standfirst)}</p>` : ''}${lines}</div>${top ? '' : photo}${content}`;
}

/** Experimental illustrative photographs, kept apart from the frozen edition in data/images/<edition>.json. */
function photosFor(id, lang) {
  const f = path.join(ROOT, 'data', 'images', `${id}.json`);
  if (!fs.existsSync(f)) return {};
  const out = {};
  for (const [sid, p] of Object.entries(JSON.parse(fs.readFileSync(f, 'utf8')).photos || {})) {
    if (!fs.existsSync(path.join(ROOT, 'site', 'photos', id, p.file))) continue;
    out[sid] = { ...p, edition: id, alt: (lang === 'cs' && p.alt_cs) || p.alt, caption: (lang === 'cs' && p.caption_cs) || p.caption };
  }
  return out;
}

const spanClass = { half: 's6', third: 's4', quarter: 's3' };

function editionMain(original, L, isLatest = false) {
  const ed = localise(original, L === T.cs ? 'cs' : 'en');
  const results = resultsFor(ed.id);
  const byId = new Map(ed.stories.map((s) => [s.id, s]));
  const show = results.size > 0;
  const sum = summarise(scoredClaims([original]));
  const total = claimsOf(original).length;
  const voids = [...results.values()].filter((r) => r.outcome === 'void').length;

  const scorebar = show ? `<div class="scorebar"><b>${L.results}</b><span>${sum ? L.wentOurWay(sum.hits, sum.n) : L.noScored}</span>${sum ? `<span>${L.brierNote(num3(sum.brier, L))}</span>` : ''}<span>${L.awaiting(total - results.size, voids)}</span><span class="legend"><span>${L.scale[0]}</span><i aria-hidden="true"></i><span>${L.scale[1]}</span></span><small>${L.scaleNote}</small></div>` : '';
  const tone = (st) => storyTone(st, results);
  const fixesFor = correctionsFor(original.id, L === T.cs ? 'cs' : 'en');
  const photos = photosFor(original.id, L === T.cs ? 'cs' : 'en');
  const art = (st, cls, wide, extra = {}) => { const t = tone(st); return `<article class="story${cls ? ` ${cls}` : ''}${t.cls}"${t.style}>${storyHtml(st, results, show, L, { wide, corrections: fixesFor.get(st.id), photo: photos[st.id], ...extra })}</article>`; };
  const w = ed.weather;
  const weather = w ? `<div class="box"><h4>${esc(w.title)}</h4><div class="wx">${w.rows.map(([a, b]) => `<span>${esc(a)}</span><span>${esc(b)}</span>`).join('')}</div>${w.note ? `<p class="note">${esc(w.note)}</p>` : ''}</div>` : '';

  // Front page balance: the lead column (8/12) and the rail (4/12) should end level. Estimate heights from text
  // length per column width; while the rail is clearly taller, move the first story of the sections up under the lead.
  const textLen = (st) => 260 + [st.headline, st.standfirst || '', ...st.body, st.basis, ...(st.sources || []).map((x) => x.title)].join(' ').length;
  const railH = ed.front.rail.reduce((a, id) => a + textLen(byId.get(id)), 0) / 4 + (w ? 500 / 4 : 0);
  let leadH = (textLen(byId.get(ed.front.lead)) + 200) / 8;
  const secs = (ed.sections || []).map((sec) => ({ ...sec, stories: [...sec.stories] }));
  const frontExtra = [];
  while (railH > leadH * 1.12 && frontExtra.length < 2) {
    // Best fit: the section story whose height comes closest to closing the gap (each section keeps at least one story).
    let best = null;
    for (const sec of secs) if (sec.stories.length > 1) for (const id of sec.stories) {
      const miss = Math.abs(railH - leadH - (textLen(byId.get(id)) * 1.6) / 8);
      if (!best || miss < best.miss) best = { sec, id, miss };
    }
    if (!best || best.miss >= railH - leadH) break;
    best.sec.stories.splice(best.sec.stories.indexOf(best.id), 1);
    const st = byId.get(best.id);
    frontExtra.push(st);
    leadH += (textLen(st) * 1.6) / 8; // a second story costs more height than its text alone (large headline, narrower columns)
  }
  const rail = ed.front.rail.map((id) => art(byId.get(id), '')).join('');

  // Sections: stories flow through newspaper columns (3 / 2 / 1 by screen width). Text may continue into the next
  // column, the headline block never splits, so columns end level and no gaps or squeezed columns appear.
  let sections = '';
  for (const sec of secs) {
    sections += `<div class="section"><h2>${esc(sec.name)}</h2>${sec.dek ? `<span>${esc(sec.dek)}</span>` : ''}</div>`;
    sections += `<div class="flow s12">${sec.stories.map((id) => art(byId.get(id), '', false, { flat: true, h: byId.get(id).size === 'half' ? 'h3' : 'h4' })).join('')}</div>`;
  }
  const diary = ed.diary?.length ? `<div class="section"><h2>${L.comingUp}</h2><span>${L.comingDek}</span></div><div class="s12"><ul class="diary">${ed.diary.map((d) => `<li><time>${esc(d.date)}</time>${esc(d.text)}</li>`).join('')}</ul></div>` : '';

  const updBanner = ed.update ? `<p class="updbanner">${L.upd.banner(hhmm(ed.update.frozen_at), ed.update.revisions, ed.update.added)}</p>` : '';
  if (L === T.cs) {
    // Czech edition: two desks side by side, foreign news left, domestic right; tabs on narrow screens.
    const enSec = new Map(); for (const sc of original.sections || []) for (const id of sc.stories) enSec.set(id, sc.name);
    const domestic = (st) => st.desk ? st.desk === 'domestic' : st.id.startsWith('cz-') || /czech/i.test(enSec.get(st.id) || '') || (original.front.rail || []).includes(st.id);
    const enOrder = [original.front.lead, ...(original.front.rail || []), ...(original.sections || []).flatMap((x) => x.stories)];
    const csOrder = [ed.front.lead, ...(ed.front.rail || []), ...(ed.sections || []).flatMap((x) => x.stories)];
    const uniq = (a) => [...new Set(a)].filter((id) => byId.has(id));
    const foreign = uniq(enOrder).filter((id) => !domestic(byId.get(id)));
    const home = uniq([...csOrder, ...enOrder]).filter((id) => domestic(byId.get(id)));
    // Balance: choose the width split and, for the longer desk, one or two inner columns so that both desks end at
    // about the same height. Height is estimated as text length / column width; the lead story always spans the desk.
    const len = (id) => textLen(byId.get(id));
    const est = (ids, extra, share, k) => (ids.reduce((a, id) => a + len(id), 0) + extra) / (share * k) * (k > 1 ? 1.1 : 1);
    let best = null;
    for (let sh = 0.34; sh <= 0.661; sh += 0.02) for (const kf of [1, 2]) for (const kh of [1, 2]) {
      if ((kf === 2 && sh < 0.5) || (kh === 2 && sh > 0.5)) continue; // two inner columns only in the wider desk
      const diff = Math.abs(est(foreign, 0, sh, kf) - est(home, w ? 600 : 0, 1 - sh, kh));
      const score = diff * (1 + 0.15 * (kf + kh - 2)) + Math.abs(sh - 0.5) * 400; // prefer single columns and an even split
      if (!best || score < best.score) best = { score, sh, kf, kh };
    }
    const cols = `style="--fw:${best.sh.toFixed(2)}fr;--hw:${(1 - best.sh).toFixed(2)}fr"`;
    // With two inner columns the whole desk flows, lead included; with one, the lead heads the desk.
    const desk = (ids, key, title, k, tail = '') => `<section class="desk ${key}${k > 1 ? ' two' : ''}" aria-labelledby="desk-${key}"><h2 class="deskhead" id="desk-${key}">${title}</h2><div class="deskbody">${ids.map((id, i) => art(byId.get(id), i === 0 ? 'dlead' : '', false, { flat: true, h: i === 0 ? 'h3' : 'h4', top: i === 0 })).join('')}${tail}</div></section>`;
    // When the domestic desk is still the shorter one, the diary moves into it instead of running across the page.
    const homeShort = est(home, w ? 600 : 0, 1 - best.sh, best.kh) < est(foreign, 0, best.sh, best.kf) * 0.8;
    const diaryBox = ed.diary?.length ? `<div class="box diarybox"><h4>${L.comingUp}</h4><ul class="diary">${ed.diary.map((d) => `<li><time>${esc(d.date)}</time>${esc(d.text)}</li>`).join('')}</ul></div>` : '';
    return `<p class="method">${L.notice(fmtDate(ed.events_date, L, DAY), show)}</p>
${updBanner}
${scorebar}
<input type="radio" name="desk" id="tab-foreign" class="tabin" checked><input type="radio" name="desk" id="tab-home" class="tabin">
<div class="tabs" role="tablist"><label for="tab-foreign">Zahraničí</label><label for="tab-home">Domácí</label></div>
<main class="desks" ${cols}>
  ${desk(foreign, 'foreign', 'Zahraničí', best.kf)}
  ${desk(home, 'home', 'Domácí', best.kh, weather + (diaryBox ? diaryBox.replace('class="box diarybox"', `class="box diarybox"${homeShort ? '' : ' hidden'}`) : ''))}
</main>
<div class="grid">${isLatest ? watchStrip(L) : ''}${diary ? `<div class="fulldiary"${homeShort ? ' hidden' : ''}>${diary}</div>` : ''}</div>
<script>
// Measure both desks and pick the width split, inner columns and diary placement that end them most nearly level.
(function () {
  var desks = document.querySelector('.desks'); if (!desks) return;
  var f = desks.querySelector('.foreign'), h = desks.querySelector('.home');
  var box = h.querySelector('.diarybox'), full = document.querySelector('.fulldiary');
  function bottom(el) { var m = 0; el.querySelectorAll('.story,.box').forEach(function (e) { if (e.hidden) return; var r = e.getClientRects(); for (var i = 0; i < r.length; i++) m = Math.max(m, r[i].bottom); }); return m; }
  function apply(c) { desks.style.setProperty('--fw', c.sh + 'fr'); desks.style.setProperty('--hw', (1 - c.sh).toFixed(2) + 'fr'); f.classList.toggle('two', c.kf > 1); h.classList.toggle('two', c.kh > 1); if (box) { box.hidden = !c.diary; if (full) full.hidden = c.diary; } }
  function balance() {
    if (getComputedStyle(desks).display !== 'grid') return;
    var best = null;
    for (var sh = 0.34; sh <= 0.701; sh += 0.02) for (var kf = 1; kf <= 2; kf++) for (var kh = 1; kh <= 2; kh++) for (var d = 0; d <= (box ? 1 : 0); d++) {
      if ((kf === 2 && sh < 0.54) || (kh === 2 && sh > 0.46)) continue;
      var c = { sh: +sh.toFixed(2), kf: kf, kh: kh, diary: !!d }; apply(c);
      var diff = Math.abs(bottom(f) - bottom(h));
      var score = diff + 60 * (kf + kh - 2) + 300 * Math.abs(c.sh - 0.5) + (d ? 40 : 0);
      if (!best || score < best.score) { best = c; best.score = score; }
    }
    apply(best);
  }
  var t; window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(balance, 150); });
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(balance);
})();
</script>`;
  }
  return `<p class="method">${L.notice(fmtDate(ed.events_date, L, DAY), show)}</p>
${updBanner}
${scorebar}
<main class="grid">
  <div class="frontcol s8">${art(byId.get(ed.front.lead), 'lead')}${frontExtra.map((st) => art(st, 'second', true)).join('')}</div>
  <aside class="rail s4 vr">${rail}${weather}</aside>
  ${sections}
  ${isLatest ? watchStrip(L) : ''}
  ${diary}
</main>`;
}


// ---------- one-page print edition ----------
function printPage(original, L) {
  const ed = localise(original, L === T.cs ? 'cs' : 'en');
  const results = resultsFor(ed.id);
  const byId = new Map(ed.stories.map((s) => [s.id, s]));
  const scored = results.size > 0;
  const claimLine = (c) => {
    const r = results.get(c.id), k = closeness(c, r);
    if (isInterval(c)) {
      const res = scored ? (r ? ` <span class="res"${k === null ? '' : ` style="--h:${hue(k)}"`}>${r.outcome === 'measured' ? `${L.iv.actual} ${ivNum(r.value, c, L, true)}` : L.stamp[r.outcome]}</span>` : ` <span class="res pend">${L.stamp.pending}</span>`) : '';
      return `<p class="lk">${esc(c.label)}: <b>${ivNum(c.quantiles.q50, c, L)}</b> (${ivRange(c, L)})${res}</p>`;
    }
    const res = scored ? (r ? ` <span class="res"${k === null ? '' : ` style="--h:${hue(k)}"`}>${L.stamp[r.outcome]}${k === null ? '' : ` · ${L.match} ${pctNum(k, L)}`}</span>` : ` <span class="res pend">${L.stamp.pending}</span>`) : '';
    const rev = c.update && c.morning !== null && c.morning !== undefined && c.morning !== c.probability;
    return `<p class="lk"><span class="bar"><i style="width:${Math.round(c.probability * 100)}%"></i></span>${esc(c.label)}: ${rev ? `<s>${pctNum(c.morning, L)}</s> → ` : ''}<b>${pctNum(c.probability, L)}</b>${res}</p>`;
  };
  const story = (s, lead) => {
    const tableClaims = new Set((s.table?.rows || []).map((r) => r.claim));
    const lines = s.claims.filter((c, i) => i === 0 || !tableClaims.has(c.id)).map(claimLine).join('');
    const table = s.table ? `<table>${s.table.rows.map((row) => { const c = s.claims.find((x) => x.id === row.claim); return `<tr><td>${esc(row.label)}</td><td>${c ? pctNum(c.probability, L) : ''}</td></tr>`; }).join('')}</table>` : '';
    const paras = s.body.map((t, i) => `<p class="${i === 0 ? 'first' : lead ? 'extra lead-extra' : 'extra'}">${esc(t)}</p>`).join('');
    const t = storyTone(s, results);
    return `<article class="${lead ? 'lead' : 'st'}${t.cls}"${t.style}><div class="kick">${esc(s.kicker)}</div><h${lead ? 2 : 3}>${esc(s.headline)}</h${lead ? 2 : 3}>${lead && s.standfirst ? `<p class="stand">${esc(s.standfirst)}</p>` : ''}${lines}${lead ? `<div class="leadcols">${paras}${table}</div>` : paras + table}<p class="basis">${L.basis}: ${esc(s.basis.replace(/^(Basis|Podklad):\s*/i, ''))}</p></article>`;
  };
  const order = [...ed.front.rail, ...ed.sections.flatMap((x) => x.stories)];
  const secOf = new Map(); ed.sections.forEach((x) => x.stories.forEach((id, i) => { if (i === 0) secOf.set(id, x.name); }));
  const flow = order.map((id) => `${secOf.has(id) ? `<h4 class="sec">${esc(secOf.get(id))}</h4>` : ''}${story(byId.get(id), false)}`).join('');
  const w = ed.weather;
  const extras = `${w ? `<div class="box"><h4>${esc(w.title)}</h4>${w.rows.map(([a, b]) => `<div class="row"><span>${esc(a)}</span><span>${esc(b)}</span></div>`).join('')}</div>` : ''}${ed.diary?.length ? `<div class="box"><h4>${L.comingUp}</h4>${ed.diary.map((d) => `<p><b>${esc(d.date)}</b> ${esc(d.text)}</p>`).join('')}</div>` : ''}`;
  const site = `${L.prefix}/edition/${ed.id}/`;
  return `<!doctype html>
<html lang="${L === T.cs ? 'cs' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>The Overmorrow — ${fmtDate(ed.edition_date, L, { day: 'numeric', month: 'long', year: 'numeric' })} · ${L.print}</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;1,6..72,400&family=IBM+Plex+Sans+Condensed:wght@400;500;600&display=swap">
<style>
@page{size:A4;margin:10mm}
:root{--ink:#111;--ink2:#444;--hair:#bbb;--acc:#1f3a5f;--serif:"Newsreader",Georgia,serif;--sans:"IBM Plex Sans Condensed","Arial Narrow",Arial,sans-serif}
*{box-sizing:border-box}
html{background:#e8e6e1}
body{margin:0;color:var(--ink);font-family:var(--serif)}
.tools{max-width:210mm;margin:16px auto 10px;padding:0 16px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;font-family:var(--sans);font-size:14px}
.tools button{font:inherit;font-weight:600;background:#111;color:#fff;border:0;padding:8px 14px;cursor:pointer}
.tools a{color:var(--ink2)}
.paper{background:#fff;width:210mm;max-width:100%;margin:0 auto 24px;padding:10mm;box-shadow:0 2px 12px rgba(0,0,0,.15);overflow-x:auto}
.sheet{width:190mm;height:277mm;overflow:hidden;font-size:9.5pt;line-height:1.28}
.mh{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:4mm;border-bottom:.4mm solid var(--ink);padding-bottom:1.5mm}
.mh img{width:19mm;height:19mm;display:block}
.mh .t{font-weight:700;font-size:2.9em;line-height:1;letter-spacing:-.01em;text-align:center}
.mh .m{font-style:italic;font-size:.95em;color:var(--ink2);text-align:center;margin-top:.8mm}
.mh .r{font-family:var(--sans);font-size:.72em;text-align:right;color:var(--ink2);line-height:1.35}
.dl{display:flex;justify-content:space-between;font-family:var(--sans);font-size:.72em;letter-spacing:.05em;text-transform:uppercase;border-bottom:.8mm double var(--ink);padding:1mm 0;margin-bottom:1.6mm}
.note{font-family:var(--sans);font-size:.7em;color:var(--ink2);margin:0 0 2mm}
.body{column-count:4;column-gap:4mm;column-rule:.2mm solid var(--hair);column-fill:auto;height:var(--bodyh,200mm)}
.lead{column-span:all;border-bottom:.3mm solid var(--ink);padding-bottom:2mm;margin-bottom:2mm}
.lead h2{font-size:1.85em;line-height:1.08;margin:.5mm 0 1mm}
.stand{font-size:1.08em;color:var(--ink2);margin:0 0 1mm}
.leadcols{column-count:3;column-gap:4mm;column-rule:.2mm solid var(--hair)}
.st{break-inside:avoid-column;padding-bottom:1.6mm;margin-bottom:1.6mm;border-bottom:.2mm solid var(--hair)}
h3{font-size:1.18em;line-height:1.12;margin:.3mm 0 .8mm}
h4.sec{font-family:var(--sans);font-size:.75em;letter-spacing:.12em;text-transform:uppercase;border-top:.5mm solid var(--ink);padding-top:.6mm;margin:0 0 1mm;break-after:avoid}
.kick{font-family:var(--sans);font-size:.68em;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--acc)}
p{margin:0 0 .9mm;hyphens:auto;-webkit-hyphens:auto}
.lk{font-family:var(--sans);font-size:.74em;color:var(--ink2);text-align:left;display:flex;flex-wrap:wrap;align-items:center;gap:1mm 1.5mm}
.lk b{color:var(--ink)}
.bar{display:inline-block;width:9mm;height:.9mm;background:#ddd;position:relative}.bar i{position:absolute;inset:0 auto 0 0;background:var(--acc)}
.res{font-weight:600;text-transform:uppercase;font-size:.92em;padding:0 1mm;color:hsl(var(--h,0) 60% 28%);background:hsl(var(--h,0) 70% 90%)}
.res.pend{color:var(--ink2);background:#eee}
.scored{background:hsl(var(--h) 65% 95%);box-shadow:inset .8mm 0 0 hsl(var(--h) 55% 42%);padding-left:1.8mm}
table{width:100%;border-collapse:collapse;font-family:var(--sans);font-size:.8em;margin:.5mm 0 1mm;break-inside:avoid}
td{border-bottom:.2mm solid var(--hair);padding:.3mm 0}td+td{text-align:right}
.basis{font-family:var(--sans);font-size:.66em;color:var(--ink2);text-align:left;margin-top:.6mm}
.box{break-inside:avoid-column;background:#f1efea;padding:1.5mm 2mm;margin-bottom:1.6mm;font-size:.85em}
.box h4{font-family:var(--sans);font-size:.85em;letter-spacing:.08em;text-transform:uppercase;margin:0 0 .8mm}
.box .row{display:flex;justify-content:space-between;font-family:var(--sans)}
.box p{text-align:left;margin:0 0 .6mm}
.foot{font-family:var(--sans);font-size:.62em;color:var(--ink2);border-top:.4mm solid var(--ink);padding-top:.8mm;margin-top:1mm;display:flex;justify-content:space-between;gap:4mm}
.hide{display:none!important}
@media print{html{background:#fff}.tools{display:none}.paper{box-shadow:none;margin:0;padding:0;width:auto}.sheet{height:277mm}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
</style></head>
<body>
<div class="tools"><button type="button" onclick="window.print()">${L.printBtn}</button><span>${L.printNote}</span><a href="${site}">← ${esc(L.nav[0])}</a></div>
<div class="paper"><div class="sheet" id="sheet">
  <div class="mh"><img src="/logo.svg" alt=""><div><div class="t">The Overmorrow</div><div class="m">${esc(L.motto)}</div></div><div class="r">${L.places}<br>No. ${ed.number}${ed.pilot ? ` · ${L.pilot}` : ''}</div></div>
  <div class="dl"><span>${fmtDate(ed.edition_date, L)}</span><span>${L.reporting(fmtDate(ed.events_date, L, DAY))}</span></div>
  <p class="note">${L.notice(fmtDate(ed.events_date, L, DAY), scored)}</p>
  <div class="body" id="body">${story(byId.get(ed.front.lead), true)}${flow}${extras}</div>
  <div class="foot" id="foot"><span>${L.printFoot} <span id="addr">${site}</span></span><span>${L.forecastEdition(fmtStamp(ed.frozen_at, L))}</span></div>
</div></div>
<script>
// Fit the whole edition on one A4 page: drop secondary paragraphs first, then reduce the type size.
(function () {
  const sheet = document.getElementById('sheet'), body = document.getElementById('body'), foot = document.getElementById('foot');
  const mm = (n) => n * 96 / 25.4;
  function setBodyHeight() { const top = body.getBoundingClientRect().top - sheet.getBoundingClientRect().top; body.style.setProperty('--bodyh', (mm(277) - top - foot.offsetHeight - mm(1.5)) + 'px'); }
  function overflows() { setBodyHeight(); return body.scrollWidth > body.clientWidth + 2; }
  function fit() {
    let size = 9.5;
    sheet.style.fontSize = size + 'pt';
    const extras = [...document.querySelectorAll('.extra:not(.lead-extra)')].reverse(), leadExtras = [...document.querySelectorAll('.lead-extra')].reverse();
    while (overflows() && size > 8) { size -= 0.25; sheet.style.fontSize = size + 'pt'; }
    for (const el of extras) { if (!overflows()) break; el.classList.add('hide'); }
    for (const el of leadExtras) { if (!overflows()) break; el.classList.add('hide'); }
    while (overflows() && size > 6) { size -= 0.25; sheet.style.fontSize = size + 'pt'; }
    // Give back whatever still fits: lead paragraphs first, then the others in reading order.
    for (const el of [...leadExtras.reverse(), ...extras.reverse()]) {
      if (!el.classList.contains('hide')) continue;
      el.classList.remove('hide');
      if (overflows()) el.classList.add('hide');
    }
  }
  document.getElementById('addr').textContent = location.host + location.pathname.replace('print/', '');
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(fit);
  window.addEventListener('beforeprint', fit);
})();
</script>
</body></html>
`;
}

// ---------- forecast board ----------
const SCOPES = { en: ['world', 'europe', 'cz'], cs: ['cz', 'europe', 'world'] };
const qText = (q, lang, k) => (lang === 'cs' && q[`${k}_cs`]) || q[k];
const lastH = (q) => (q.history || [])[q.history.length - 1];
/** Change against the figure in force seven days before the latest entry (or the first figure, if younger). */
function watchChange(q) {
  const h = q.history || [];
  if (h.length < 2) return null;
  const last = h[h.length - 1];
  const ref = watchProbAt(q, Date.parse(last.at) - 7 * 864e5) ?? h[0].p;
  return last.p - ref;
}
const signed = (d, L) => (d === null ? '' : d === 0 ? '±0' : `${d > 0 ? '+' : '−'}${Math.round(Math.abs(d) * 100)}`);
function sparkline(q) {
  const h = q.history || [];
  if (h.length < 2) return '';
  const t0 = Date.parse(h[0].at), t1 = Math.max(Date.parse(h[h.length - 1].at), t0 + 1);
  const W = 90, H = 22, x = (t) => ((t - t0) / (t1 - t0)) * W, y = (p) => H - p * H;
  let d = '';
  h.forEach((e, i) => { const X = x(Date.parse(e.at)).toFixed(1), Y = y(e.p).toFixed(1); d += i ? ` H${X} V${Y}` : `M${X} ${Y}`; });
  return `<svg class="spark" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" aria-hidden="true"><line x1="0" y1="${H / 2}" x2="${W}" y2="${H / 2}" stroke="#d6d3cd"/><path d="${d}" fill="none" stroke="#1f3a5f" stroke-width="1.6"/></svg>`;
}
function watchRow(q, L, lang, full) {
  const W = L.watch, last = lastH(q);
  const m = last?.market;
  const ch = watchChange(q);
  const details = full ? `<details class="check"><summary>${W.how}</summary><p><b>${esc(qText(q, lang, 'question'))}</b> ${esc(qText(q, lang, 'criterion'))} ${L.deadline}: ${esc(fmtStamp(q.resolves_by, L))}.</p>${last?.note ? `<p>${esc(qText(last, lang, 'note'))}</p>` : ''}${last?.market_note ? `<p>${esc(qText(last, lang, 'market_note'))}</p>` : ''}<p class="basis">${W.history}: ${(q.history || []).map((h) => `${fmtDate(h.at.slice(0, 10), L, { day: 'numeric', month: 'numeric' })} ${pctNum(h.p, L)}`).join(' · ')}${(q.sources || []).length ? `. ${L.sources}: ${q.sources.map((x) => `<a href="${esc(x.url)}">${esc(x.title)}</a>`).join('; ')}` : ''}.</p></details>` : '';
  return `<tr><td><span class="wq">${esc(qText(q, lang, 'question'))}</span>${details}</td><td class="n"><b>${last ? pctNum(last.p, L) : '–'}</b>${sparkline(q)}</td><td class="n ch${ch > 0 ? ' up' : ch < 0 ? ' down' : ''}">${signed(ch, L)}</td><td class="n">${m && m.p !== null && m.p !== undefined ? `<a href="${esc(m.url)}">${pctNum(m.p, L)}</a>` : W.none}</td><td class="n">${fmtDate(q.resolves_by.slice(0, 10), L, { day: 'numeric', month: 'short' })}</td></tr>`;
}
function watchTable(list, L, lang, full) {
  const W = L.watch;
  return `<div class="tbl"><table class="watch"><thead><tr><th>${W.cols[0]}</th><th class="n">${W.cols[1]}</th><th class="n">${W.cols[2]}</th><th class="n">${W.cols[3]}</th><th class="n">${W.cols[4]}</th></tr></thead><tbody>${list.map((q) => watchRow(q, L, lang, full)).join('')}</tbody></table></div>`;
}
function watchPage(L) {
  const lang = L === T.cs ? 'cs' : 'en', W = L.watch;
  const qs = loadWatchlist().questions || [];
  const open = qs.filter((q) => !q.result), done = qs.filter((q) => q.result);
  const latest = qs.flatMap((q) => q.history || []).map((h) => h.at).sort().pop();
  let out = `<div class="prose wide"><h1>${W.h}</h1><p class="lede">${W.lede}</p>${latest ? `<p class="note">${W.updated(fmtStamp(latest, L))}</p>` : ''}`;
  for (const sc of SCOPES[lang]) {
    const list = open.filter((q) => q.scope === sc).sort((a, b) => a.resolves_by.localeCompare(b.resolves_by));
    if (list.length) out += `<h2>${W.scopes[sc]}</h2>${watchTable(list, L, lang, true)}`;
  }
  if (done.length) {
    out += `<h2>${W.resolvedH}</h2><div class="tbl"><table><thead><tr>${W.resolvedCols.map((c, i) => `<th${i ? ' class="n"' : ''}>${c}</th>`).join('')}</tr></thead><tbody>${done.map((q) => { const sc = watchScore(q); return `<tr><td>${esc(qText(q, lang, 'question'))}${q.result.evidence ? ` <a href="${esc(q.result.evidence)}">${L.evidence}</a>` : ''}</td><td class="n">${sc ? pctNum(sc.final, L) : '–'}</td><td class="n">${L.stamp[q.result.outcome]}</td><td class="n">${sc ? num3(sc.brier, L) : '–'}</td></tr>`; }).join('')}</tbody></table></div>`;
  }
  return `${out}<p class="note">${W.note}</p></div>`;
}
/** Front-page strip: six open questions, home scope first, biggest recent movers and nearest deadlines. */
function watchStrip(L) {
  const lang = L === T.cs ? 'cs' : 'en', W = L.watch;
  const open = (loadWatchlist().questions || []).filter((q) => !q.result && (q.history || []).length);
  if (!open.length) return '';
  const rank = (q) => Math.abs(watchChange(q) || 0) * 3 + 1 / (1 + (Date.parse(q.resolves_by) - Date.now()) / 864e5 / 30);
  const pick = [];
  for (const sc of SCOPES[lang]) pick.push(...open.filter((q) => q.scope === sc).sort((a, b) => rank(b) - rank(a)).slice(0, 2));
  return `<div class="section"><h2>${W.strip}</h2><span>${W.stripDek} · <a href="${link(L, '/watch/')}">${W.all}</a></span></div><div class="s12">${watchTable(pick, L, lang, false)}</div>`;
}

// ---------- archive ----------
function archivePage(editions, L) {
  const A = L.archive;
  const rows = [...editions].reverse().map((orig) => {
    const ed = localise(orig, L === T.cs ? 'cs' : 'en');
    const sum = summarise(scoredClaims([orig]));
    const total = claimsOf(orig).length;
    const res = resultsFor(orig.id);
    const status = !res.size ? A.awaiting : sum ? `${L.wentOurWay(sum.hits, sum.n)} · Brier ${num3(sum.brier, L)}${res.size < total ? ` · ${total - res.size} ${A.pending}` : ''}` : A.partly;
    return `<tr><td><a href="${link(L, `/edition/${ed.id}/`)}">${fmtDate(ed.edition_date, L, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</a></td><td class="n">${ed.number}${ed.pilot ? ` (${A.pilot})` : ''}</td><td>${esc(ed.stories.find((s) => s.id === ed.front.lead).headline)}</td><td class="n">${total}</td><td>${status}</td></tr>`;
  }).join('');
  return `<div class="prose" style="max-width:1000px"><h1>${A.h}</h1><p class="lede">${A.lede}</p>
<div class="tbl"><table><thead><tr><th>${A.cols[0]}</th><th class="n">${A.cols[1]}</th><th>${A.cols[2]}</th><th class="n">${A.cols[3]}</th><th>${A.cols[4]}</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
}

// ---------- accuracy ----------
function calibrationSvg(bins, L) {
  const W = 360, H = 300, Lm = 44, B = 36, Tm = 12, R = 12;
  const x = (p) => Lm + p * (W - Lm - R), y = (p) => H - B - p * (H - B - Tm);
  let g = [0, 0.25, 0.5, 0.75, 1].map((t) => `<line x1="${x(0)}" y1="${y(t)}" x2="${x(1)}" y2="${y(t)}" stroke="#d6d3cd"/><text x="${Lm - 6}" y="${y(t) + 4}" text-anchor="end" font-size="11" fill="#4b4b4b">${pctNum(t, L)}</text><text x="${x(t)}" y="${H - B + 16}" text-anchor="middle" font-size="11" fill="#4b4b4b">${pctNum(t, L)}</text>`).join('');
  g += `<line x1="${x(0)}" y1="${y(0)}" x2="${x(1)}" y2="${y(1)}" stroke="#6f6f6f" stroke-dasharray="4 3"/>`;
  g += bins.filter((b) => b.n).map((b) => `<circle cx="${x(b.meanP)}" cy="${y(b.freq)}" r="${Math.min(4 + Math.sqrt(b.n) * 2, 12)}" fill="#1f3a5f" fill-opacity="0.85"><title>${b.label}: ${pctNum(b.meanP, L)} → ${pctNum(b.freq, L)} (${b.n})</title></circle>`).join('');
  g += `<text x="${(x(0) + x(1)) / 2}" y="${H - 4}" text-anchor="middle" font-size="11.5" fill="#161616">${L.acc.axisX}</text>`;
  g += `<text transform="translate(12 ${(y(0) + y(1)) / 2}) rotate(-90)" text-anchor="middle" font-size="11.5" fill="#161616">${L.acc.axisY}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${L.acc.calH}" font-family="IBM Plex Sans Condensed, Arial, sans-serif">${g}</svg>`;
}

function trackBlock(editions, L) {
  if (!editions.some((e) => e.update)) return '';
  const A = L.acc;
  const morning = scoredClaims(editions, 'morning'), latest = scoredClaims(editions, 'latest');
  const isRev = (r) => r.update && r.morning !== null && r.morning !== undefined;
  const revM = morning.filter(isRev), revA = latest.filter(isRev);
  const row = (label, rows) => { const x = summarise(rows); return `<tr><td>${label}</td><td class="n">${x ? x.n : 0}</td><td class="n">${x ? num3(x.brier, L) : '–'}</td></tr>`; };
  return `<h2>${A.trackH}</h2><p>${A.trackNote}</p><div class="tbl"><table><thead><tr><th>${A.trackCols[0]}</th><th class="n">${A.trackCols[1]}</th><th class="n">${A.trackCols[2]}</th></tr></thead><tbody>${row(A.tracks[0], morning)}${row(A.tracks[1], latest)}${row(A.tracks[2], revM)}${row(A.tracks[3], revA)}</tbody></table></div>`;
}

/** Benchmarks, forecasters, scope and the forecast board, from the structured forecast records (edition No. 4 on). */
function benchBlocks(rows, L) {
  const A = L.acc;
  const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const sk = (x, L) => (x === null ? '–' : `${x >= 0 ? '+' : '−'}${num3(Math.abs(x), L)}`);
  const line = (label, list, other) => { if (!list.length) return ''; const o = mean(list.map((r) => brier(r.probability, r.outcome))), b = mean(list.map((r) => brier(other(r), r.outcome))); return `<tr><td>${label}</td><td class="n">${list.length}</td><td class="n">${num3(o, L)}</td><td class="n">${num3(b, L)}</td><td class="n">${sk(skill(o, b), L)}</td></tr>`; };
  const withBase = rows.filter((r) => typeof r.forecast?.base_rate?.rate === 'number');
  const withMarket = rows.filter((r) => typeof r.forecast?.market?.p === 'number');
  const informative = rows.filter((r) => r.probability >= 0.15 && r.probability <= 0.85);
  const byKind = (k) => withMarket.filter((r) => (r.forecast.market.kind || 'exchange') === k);
  const kinds = ['exchange', 'bookmaker', 'platform'].filter((k) => byKind(k).length);
  const kindRows = kinds.length > 1 ? kinds.map((k) => line(A.bench2[k], byKind(k), (r) => r.forecast.market.p)).join('') : '';
  let out = `<h2>${A.benchH}</h2><p>${A.benchNote} ${A.skillNote}</p><div class="tbl"><table><thead><tr>${[...A.benchCols, A.skillCol].map((c, i) => `<th${i ? ' class="n"' : ''}>${c}</th>`).join('')}</tr></thead><tbody>${line(A.bench.coin, rows, () => 0.5)}${line(A.bench.base, withBase, (r) => r.forecast.base_rate.rate)}${line(A.bench.market, withMarket, (r) => r.forecast.market.p)}${kindRows}${line(A.bench.informative, informative, () => 0.5)}</tbody></table></div>`;
  const byRole = new Map();
  for (const r of rows) for (const a of r.forecast?.agents || []) { if (!byRole.has(a.role)) byRole.set(a.role, []); byRole.get(a.role).push(brier(a.p, r.outcome)); }
  if (byRole.size) out += `<h2>${A.agentH}</h2><p>${A.agentNote}</p><div class="tbl"><table><thead><tr>${A.agentCols.map((c, i) => `<th${i ? ' class="n"' : ''}>${c}</th>`).join('')}</tr></thead><tbody>${[...byRole].map(([role, xs]) => `<tr><td>${esc(A.roles[role] || role)}</td><td class="n">${xs.length}</td><td class="n">${num3(mean(xs), L)}</td></tr>`).join('')}</tbody></table></div>`;
  const scoped = rows.filter((r) => r.story.scope);
  if (scoped.length) {
    const names = L.watch.scopes;
    out += `<h2>${A.scopeH}</h2><div class="tbl"><table><thead><tr>${A.scopeCols.map((c, i) => `<th${i ? ' class="n"' : ''}>${c}</th>`).join('')}</tr></thead><tbody>${['cz', 'europe', 'world'].map((sc) => { const x = summarise(scoped.filter((r) => r.story.scope === sc)); return x ? `<tr><td>${names[sc]}</td><td class="n">${x.n}</td><td class="n">${x.hits}</td><td class="n">${num3(x.brier, L)}</td></tr>` : ''; }).join('')}</tbody></table></div>`;
  }
  const done = (loadWatchlist().questions || []).map(watchScore).filter(Boolean);
  if (done.length) out += `<h2>${A.watchH}</h2><p>${A.watchNote(done.length, num3(mean(done.map((x) => x.brier)), L))} <a href="${link(L, '/watch/')}">${L.watch.all}</a></p>`;
  return out;
}

const tbl2 = (cols, rows) => `<div class="tbl"><table><thead><tr>${cols.map((c, i) => `<th${i ? ' class="n"' : ''}>${c}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((x, i) => `<td${i ? ' class="n"' : ''}>${x}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

/** Blocks added on 23 Oct 2026: decomposition, number forecasts, schedule slips, checkability, calibration status, publisher. */
function moreBlocks(editions, rows, L) {
  const A = L.acc;
  const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const share = (k, n) => (n ? `${pctNum(k / n, L)} (${k})` : '–');
  let out = '';
  const m = murphy(rows);
  if (m) out += `<h2>${A.murphyH}</h2><p>${A.murphyNote}</p>${tbl2(A.murphyCols, [[A.murphyRows[0], num3(m.reliability, L)], [A.murphyRows[1], num3(m.resolution, L)], [A.murphyRows[2], num3(m.uncertainty, L)], [A.murphyRows[3], num3(m.reliability - m.resolution + m.uncertainty, L)]])}`;

  const iv = measuredClaims(editions);
  if (iv.length) {
    const withCons = iv.filter((r) => typeof r.forecast?.consensus?.value === 'number');
    const rowsIv = [[A.ivRows[0], String(iv.length)], [A.ivRows[1], share(iv.filter((r) => intervalHit(r, r.value)).length, iv.length)], [A.ivRows[2], num3(mean(iv.map((r) => intervalScore(r, r.value))), L)], [A.ivRows[3], num3(mean(iv.map((r) => scaledError(r, r.value))), L)]];
    if (withCons.length) rowsIv.push([`${A.ivRows[4]} (${withCons.length})`, num3(mean(withCons.map((r) => scaledError(r, r.value, r.forecast.consensus.value))), L)]);
    out += `<h2>${A.ivH}</h2><p>${A.ivNote}</p>${tbl2(A.ivCols, rowsIv)}`;
  }

  const slips = slipTable(editions).filter((k) => k.own_n > 0);
  out += `<h2>${A.slipH}</h2><p>${A.slipNote}</p>${slips.length ? tbl2(A.slipCols, slips.map((k) => [esc(k.description), `${k.own.slipped} / ${k.own_n}`, pctNum(k.prior_rate, L), pctNum(k.rate, L)])) : `<p><i>${A.slipEmpty}</i></p>`}`;

  const all = allResults(editions);
  if (all.length) {
    const n = all.length;
    const late = all.filter(({ claim, result }) => Date.parse(result.resolved_at) - Date.parse(claim.resolves_by) > 48 * 3600e3).length;
    const checked = all.filter(({ claim, result }) => typeof result.held === 'boolean' && claim.slip_class && claim.slip_class !== 'none');
    out += `<h2>${A.qualH}</h2>${tbl2(A.qualCols, [[A.qualRows[0], String(n)], [A.qualRows[1], share(all.filter(({ result }) => result.outcome === 'void').length, n)], [A.qualRows[2], share(all.filter(({ result }) => result.ambiguous).length, n)], [A.qualRows[3], share(late, n)], [A.qualRows[4], checked.length ? share(checked.filter(({ result }) => result.held === false).length, checked.length) : A.notYet]])}`;
  }

  const cal = loadCalibration(), cfg = loadConfig();
  if (cal) out += `<h2>${A.calStH}</h2><p>${A.calSt(cal.resolved, cfg.weighting_min_resolved, cfg.calibration_min_resolved, cal.active.weights, cal.active.platt, num3(cal.params.platt.a, L), num3(cal.params.platt.b, L))}</p>`;

  const pubRows = [];
  const byEd = new Map(editions.map((e) => [e.id, e]));
  for (const pf of loadPublisher()) {
    const ed = byEd.get(pf.file.replace('.json', ''));
    if (!ed) continue;
    const res = resultsFor(ed.id);
    for (const e of pf.entries || []) {
      const c = claimsOf(ed).find((x) => x.id === e.claim), r = res.get(e.claim);
      if (!c || isInterval(c) || !r || !['yes', 'no'].includes(r.outcome)) continue;
      const lo = (q) => Math.log(q / (1 - q));
      const avg = 1 / (1 + Math.exp(-(lo(c.morning ?? c.probability) + lo(e.p)) / 2));
      pubRows.push({ paper: c.morning ?? c.probability, pub: e.p, avg, saw: e.saw_paper, outcome: r.outcome });
    }
  }
  if (pubRows.length) {
    const b = (list, k) => num3(mean(list.map((x) => brier(x[k], x.outcome))), L);
    const blind = pubRows.filter((x) => !x.saw);
    const rowsP = [[A.pubRows[0], String(pubRows.length), b(pubRows, 'paper')], [A.pubRows[1], String(pubRows.length), b(pubRows, 'pub')], [A.pubRows[2], String(pubRows.length), b(pubRows, 'avg')]];
    if (blind.length) rowsP.push([A.pubRows[3], String(blind.length), b(blind, 'pub')]);
    out += `<h2>${A.pubH}</h2><p>${A.pubNote}</p>${tbl2(A.pubCols, rowsP)}`;
  }
  return out;
}

/** Added 24 Oct 2026: method versions, small-sample warning, combination rules, timing vs outcome, coverage. */
const fullRecord = (r) => (r.forecast?.agents || []).filter((a) => typeof a.p === 'number').length >= 3;
function versionBlock(editions, rows, L) {
  const A = L.acc;
  const cfg = loadConfig();
  const fmtCI = (ci) => (ci ? ` (${num3(ci.lo, L)}–${num3(ci.hi, L)})` : '');
  const vers = [...new Set(editions.map((e) => methodVersion(e, cfg)))].sort();
  const lines = vers.map((v) => {
    const eds = editions.filter((e) => methodVersion(e, cfg) === v);
    const list = rows.filter((r) => methodVersion(r.edition, cfg) === v);
    const nums = eds.map((e) => e.number);
    const range = nums.length > 1 ? `${Math.min(...nums)}–${Math.max(...nums)}` : String(nums[0]);
    if (!list.length) return [esc(A.ver[v] || `v${v}`), range, '0', '0', '–', '–'];
    const sm = summarise(list);
    const ci = brierInterval(list);
    return [esc(A.ver[v] || `v${v}`), range, String(sm.n), String(new Set(list.map(eventKey)).size), `${num3(sm.brier, L)}${fmtCI(ci)}`, `${list.filter(fullRecord).length} / ${list.length}`];
  });
  const ci = brierInterval(rows);
  const events = new Set(rows.map(eventKey)).size;
  const warn = rows.length < (cfg.v3?.small_sample_n ?? 100) && ci ? `<p class="note warnbox">${A.small(rows.length, events, num3(ci.lo, L), num3(ci.hi, L))}</p>` : '';
  return `${warn}<h2>${A.verH}</h2><p>${A.verNote}</p>${tbl2(A.verCols, lines)}`;
}
function comboBlock(rows, L) {
  const A = L.acc;
  const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const full = rows.filter((r) => altCombos(r));
  let out = `<h2>${A.comboH}</h2><p>${A.comboNote}</p>`;
  if (!full.length) return `${out}<p><i>${A.comboEmpty}</i></p>`;
  const line = (label, list, pf) => { if (!list.length) return null; const b = mean(list.map((r) => brier(pf(r), r.outcome))), coin = mean(list.map((r) => brier(0.5, r.outcome))); const k = skill(b, coin); return [label, String(list.length), num3(b, L), k === null ? '–' : `${k >= 0 ? '+' : '−'}${num3(Math.abs(k), L)}`]; };
  const R = A.comboRows;
  const withBlind = full.filter((r) => altCombos(r).blind !== null);
  const withMarket = full.filter((r) => typeof r.forecast?.market?.p === 'number');
  const withBase = full.filter((r) => typeof r.forecast?.base_rate?.rate === 'number' && r.forecast.base_rate.rate >= 0 && r.forecast.base_rate.rate <= 1);
  const lines = [line(R.pub, full, (r) => r.probability), line(R.geo, full, (r) => altCombos(r).geo), line(R.mean, full, (r) => altCombos(r).mean), line(R.median, full, (r) => altCombos(r).median), line(R.blind, withBlind, (r) => altCombos(r).blind), line(R.market, withMarket, (r) => r.forecast.market.p), line(R.base, withBase, (r) => r.forecast.base_rate.rate)].filter(Boolean);
  return out + tbl2(A.comboCols, lines);
}
function decompBlock(rows, L) {
  const A = L.acc;
  const mean = (xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
  const d = rows.filter((r) => r.forecast?.decomposition && typeof r.result.held === 'boolean');
  if (!d.length) return '';
  const held = d.filter((r) => r.result.held);
  const b1 = mean(d.map((r) => (r.forecast.decomposition.p_held - (r.result.held ? 1 : 0)) ** 2));
  const lines = [[A.decRows[0], String(d.length), num3(b1, L)]];
  if (held.length) lines.push([A.decRows[1], String(held.length), num3(mean(held.map((r) => brier(r.forecast.decomposition.p_if_held, r.outcome))), L)]);
  return `<h2>${A.decH}</h2><p>${A.decNote}</p>${tbl2(A.decCols, lines)}`;
}
function coverageBlock(L) {
  const A = L.acc;
  const all = loadCoverage().flatMap((c) => c.events || []);
  if (!all.length) return `<h2>${A.covH}</h2><p>${A.covNote}</p><p><i>${A.covEmpty}</i></p>`;
  const cnt = (st, sc) => String(all.filter((e) => e.status === st && e.scope === sc).length);
  const lines = ['covered', 'dropped', 'missed'].map((st) => [A.covRows[st], cnt(st, 'cz'), cnt(st, 'europe'), cnt(st, 'world')]);
  const missed = all.filter((e) => e.status === 'missed').slice(-8).map((e) => `<li>${esc(e.title)}${e.note ? ` — <small>${esc(e.note)}</small>` : ''}</li>`).join('');
  return `<h2>${A.covH}</h2><p>${A.covNote}</p>${tbl2(A.covCols, lines)}${missed ? `<ul class="missed">${missed}</ul>` : ''}`;
}

function accuracyPage(editions, L) {
  const A = L.acc;
  const rows = scoredClaims(editions);
  const sum = summarise(rows);
  const head = `<div class="prose"><h1>${A.h}</h1><p class="lede">${A.lede}</p>`;
  if (!sum) return `${head}<div class="empty">${A.empty(fmtDate(editions[0].edition_date, L, DAY))}</div><h2>${A.howH}</h2><p>${A.how}</p></div>`;

  const bins = Array.from({ length: 10 }, (_, i) => ({ label: `${i * 10}–${(i + 1) * 10} %`, items: [] }));
  for (const r of rows) bins[Math.min(9, Math.floor(r.probability * 10))].items.push(r);
  for (const b of bins) { b.n = b.items.length; b.meanP = b.n ? b.items.reduce((s, r) => s + r.probability, 0) / b.n : 0; b.freq = b.n ? b.items.filter((r) => r.outcome === 'yes').length / b.n : 0; }

  const lang = L === T.cs ? 'cs' : 'en';
  const bySection = new Map();
  for (const r of rows) {
    const secIdx = (r.edition.sections || []).findIndex((s) => s.name === r.section);
    const name = secIdx < 0 ? A.front : (lang === 'cs' && r.edition.cs?.sections?.[secIdx]?.name) || r.section;
    if (!bySection.has(name)) bySection.set(name, []);
    bySection.get(name).push(r);
  }
  const secRows = [...bySection].map(([name, list]) => { const s = summarise(list); return `<tr><td>${esc(name)}</td><td class="n">${s.n}</td><td class="n">${s.hits}</td><td class="n">${num3(s.brier, L)}</td></tr>`; }).join('');
  const claimText = (r) => (lang === 'cs' && r.story.cs?.claims?.[r.id]?.text) || r.text;
  const worst = [...rows].sort((a, b) => brier(b.probability, b.outcome) - brier(a.probability, a.outcome)).slice(0, 5)
    .map((r) => `<tr><td><a href="${link(L, `/edition/${r.edition.id}/`)}">${fmtDate(r.edition.edition_date, L, { day: 'numeric', month: 'short' })}</a></td><td>${esc(claimText(r))}</td><td class="n">${pctNum(r.probability, L)}</td><td>${L.stamp[r.outcome]}</td></tr>`).join('');

  return `${head}
<div class="figures">
  <div><b>${sum.n}</b><span>${A.figs[0]}</span></div>
  <div><b>${num3(sum.brier, L)}</b><span>${A.figs[1]}</span></div>
  <div><b>${pctNum(sum.hits / sum.n, L)}</b><span>${A.figs[2]}</span></div>
  <div><b>${num3(sum.log, L).slice(0, -1)}</b><span>${A.figs[3]}</span></div>
</div>
${versionBlock(editions, rows, L)}
<h2>${A.calH}</h2><p>${A.cal}</p>
<div class="chart">${calibrationSvg(bins, L)}</div>
<div class="tbl"><table><thead><tr><th>${A.calCols[0]}</th><th class="n">${A.calCols[1]}</th><th class="n">${A.calCols[2]}</th><th class="n">${A.calCols[3]}</th></tr></thead><tbody>${bins.filter((b) => b.n).map((b) => `<tr><td>${b.label}</td><td class="n">${b.n}</td><td class="n">${pctNum(b.meanP, L)}</td><td class="n">${pctNum(b.freq, L)}</td></tr>`).join('')}</tbody></table></div>
<h2>${A.secH}</h2>
<div class="tbl"><table><thead><tr><th>${A.secCols[0]}</th><th class="n">${A.secCols[1]}</th><th class="n">${A.secCols[2]}</th><th class="n">${A.secCols[3]}</th></tr></thead><tbody>${secRows}</tbody></table></div>
${benchBlocks(rows, L)}
${comboBlock(rows, L)}
${decompBlock(rows, L)}
${moreBlocks(editions, rows, L)}
${coverageBlock(L)}
${trackBlock(editions, L)}
<h2>${A.missH}</h2>
<div class="tbl"><table><thead><tr><th>${A.missCols[0]}</th><th>${A.missCols[1]}</th><th class="n">${A.missCols[2]}</th><th>${A.missCols[3]}</th></tr></thead><tbody>${worst}</tbody></table></div>
</div>`;
}

// ---------- minimal Markdown (headings, paragraphs, lists, tables, code, bold, inline code, links) ----------
function md(src) {
  const inline = (s) => esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => `<a href="${/^https?:/.test(u) ? u : `${REPO}/blob/main/${u.replace(/^(\.\.\/)+/, '')}`}">${t}</a>`);
  const lines = src.split('\n');
  let out = '', i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(esc(lines[i++])); i++; out += `<pre><code>${buf.join('\n')}</code></pre>`; continue; }
    const h = l.match(/^(#{1,3})\s+(.*)/);
    if (h) { out += `<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`; i++; continue; }
    if (/^\|/.test(l)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      out += `<div class="tbl"><table><thead><tr>${cells(rows[0]).map((c) => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(2).map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      continue;
    }
    if (/^\s*(- |\d+\. )/.test(l)) {
      const ordered = /^\s*\d+\. /.test(l); const items = [];
      while (i < lines.length && /^\s*(- |\d+\. )/.test(lines[i])) { let t = lines[i++].replace(/^\s*(- |\d+\. )/, ''); while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*(- |\d+\. )/.test(lines[i])) t += ' ' + lines[i++].trim(); items.push(t); }
      out += `<${ordered ? 'ol' : 'ul'}>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
      continue;
    }
    if (!l.trim()) { i++; continue; }
    const buf = []; while (i < lines.length && lines[i].trim() && !/^(#|\||```|\s*(- |\d+\. ))/.test(lines[i])) buf.push(lines[i++]);
    out += `<p>${inline(buf.join(' '))}</p>`;
  }
  return out;
}

// ---------- build ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.copyFileSync(path.join(ROOT, 'site', 'style.css'), path.join(DIST, 'style.css'));
for (const f of ['logo.svg', 'favicon.svg']) fs.copyFileSync(path.join(ROOT, 'site', f), path.join(DIST, f));
if (fs.existsSync(path.join(ROOT, 'site', 'photos'))) fs.cpSync(path.join(ROOT, 'site', 'photos'), path.join(DIST, 'photos'), { recursive: true });

const editions = loadEditions();
const latest = editions[editions.length - 1];

for (const lang of LANGS) {
  const L = T[lang];
  const pre = lang === 'en' ? '' : 'cs/';
  for (const ed of editions) {
    const header = masthead(L, ed, null, link(L, `/edition/${ed.id}/print/`));
    write(`${pre}edition/${ed.id}/print/index.html`, printPage(ed, L));
    const main = editionMain(ed, L, ed === latest);
    const p = `/edition/${ed.id}/`;
    write(`${pre}edition/${ed.id}/index.html`, layout(L, { title: `The Overmorrow — ${fmtDate(ed.edition_date, L, { day: 'numeric', month: 'long', year: 'numeric' })}`, nav: ed === latest ? 'today' : 'archive', header, main, path: p }));
    if (ed === latest) {
      write(`${pre}index.html`, layout(L, { title: 'The Overmorrow', nav: 'today', header, main, path: '/' }));
      write(`${pre}print/index.html`, printPage(ed, L));
    }
  }
  const plain = masthead(L, null, latest.edition_date);
  write(`${pre}watch/index.html`, layout(L, { title: `${L.watch.h} — The Overmorrow`, nav: 'watch', header: plain, main: watchPage(L), path: '/watch/' }));
  write(`${pre}archive/index.html`, layout(L, { title: `${L.archive.h} — The Overmorrow`, nav: 'archive', header: plain, main: archivePage(editions, L), path: '/archive/' }));
  write(`${pre}accuracy/index.html`, layout(L, { title: `${L.acc.h} — The Overmorrow`, nav: 'accuracy', header: plain, main: accuracyPage(editions, L), path: '/accuracy/' }));
  const mdFile = path.join(ROOT, lang === 'en' ? 'METHODOLOGY.md' : 'METHODOLOGY.cs.md');
  const method = fs.readFileSync(fs.existsSync(mdFile) ? mdFile : path.join(ROOT, 'METHODOLOGY.md'), 'utf8');
  write(`${pre}method/index.html`, layout(L, { title: `${L.nav[4]} — The Overmorrow`, nav: 'method', header: plain, main: `<div class="prose">${md(method)}</div>`, path: '/method/' }));
  write(`${pre}404.html`, layout(L, { title: `${L.notFound[0]} — The Overmorrow`, nav: '', header: plain, main: `<div class="prose"><h1>${L.notFound[0]}</h1><p>${fill(L.notFound[1], L)}</p></div>`, path: '/' }));
}

console.log(`Built ${editions.length} edition(s) in ${LANGS.join(' and ')} into dist/. Latest: ${latest.id}.`);
