# cz-minar-30
- **Claim (binary):** Mikuláš Minář publishes the amount of his salary and an account of his assets by 23:59 on Sunday 29 November 2026.
- **Criterion:** YES if, between 19:00 on Fri 27 Nov and 23:59 Prague time on Sun 29 Nov 2026, Mikuláš Minář (chair of Milion chvilek pro demokracii) makes public, on his own or Milion chvilek's public channels (website, Facebook, Instagram, X, YouTube, newsletter) or in a statement reported by a major Czech outlet (ČTK, ČT24, Seznam Zprávy, iROZHLAS, Novinky, iDNES, Aktuálně, Deník N, Respekt), BOTH (a) a figure for his pay — a stated amount in CZK, monthly or annual, gross or net ("about X" counts; only a range or bound like "under X" does not) — AND (b) an account of his assets — a list of his main assets (property, savings, vehicles, investments, debts) or a stated total value; saying he owns nothing beyond named items counts as a list. Pay alone, assets alone, or a promise to publish later is NO.
- **Event window:** 2026-11-27T19:00:00+01:00 to 2026-11-29T23:59:00+01:00 (Europe/Prague). Not fulfilled before the window opened (nothing found as of 2026-11-27T18:00Z).
- **Evidence expected:** Minář's/Milion chvilek's Facebook or website post on Sunday evening; same-evening or Monday-morning reports (Seznam Zprávy, ČTK). evidence_at 2026-11-29T23:59:00+01:00.
- **Deadline (resolves by):** 2026-11-30T05:00:00+01:00
- **Written:** 2026-11-27T19:00+01:00 (2026-11-27T18:00Z)

## Schedule
- **The promise (only source):** Seznam Zprávy podcast/video "Ptám se já", host Minář — https://www.seznamzpravy.cz/clanek/audio-podcast-ptam-se-ja-pristi-demonstrace-muzou-byt-vetsi-co-chysta-milion-chvilek-321583 (published 2026-11-26T12:19Z, modified 16:11Z, read 2026-11-27T17:57Z). Headline: "V neděli večer řeknu výši své mzdy a majetku, říká Minář z Milionu chvilek". Transcript at 33:00: "Já sám teď intenzivně zvažuji, že nad rámec toho, co by bylo potřeba, budu reagovat na některé útoky. … Přemýšlím o tom, že se svléknu donaha. A řeknu přesně výši své mzdy a řeknu přesně svůj majetek, který mám. Nevěřím, že to cokoliv změní." At 34:30: "A kdy ty informace oznámíte? - Tuto neděli večer to zveřejníme."
- **Wording note:** he first says he is "intensively considering" it, then gives the date as a firm "we will publish it this Sunday evening"; "zveřejníme" (we) may mean via Milion chvilek. No time of day beyond "večer"; no channel named.
- **No second independent source for the promise found** (two WebSearches; ČTK, ČT24 topic page, milionchvilek.cz front page checked). Not found withdrawn or already fulfilled as of 2026-11-27T18:00Z.

## Facts
- **Trigger — Babiš's attack:** quoted in the same Seznam Zprávy transcript (7:00) from Babiš's interview for Deník (25 Nov): "Kdo to je, Mikuláš Minář? … Nebo oni jsou tak neschopní, že potřebují někoho, který kasíruje na demonstracích miliony korun?" (Deník original not opened.)
- **Minář on the funding criticism (32:00, same source):** "Zveřejňujeme nadstandard toho, co máme … Navíc máme auditované účetnictví."
- **2 Dec "warning" action and invitation:** same article (editorial text): "Zároveň vyhlásil celorepublikovou výstrahu na první středu v měsíci, 2. prosince v 16:36" with signs in windows and visits to ANO politicians/voters; he invited the whole cabinet to a debate at the Švandovo divadlo on 2 Dec.
- **Letná rally 15 Nov:** organisers' estimate 350,000–450,000 — ČT24 topic https://ct24.ceskatelevize.cz/tema/mikulas-minar-50162 (read 2026-11-27T17:58Z) "Na nedělním protestu na pražské Letné se podle organizátorů shromáždilo 350 tisíc až 450 tisíc lidí." Babiš (16 Nov) does not consider meeting the demands.
- **Earlier dispute with Babiš (26 Oct):** ČTK https://www.ceskenoviny.cz/zpravy/2893236 (published 2026-10-26 12:30, read 2026-11-27T17:57Z) "Spolek Milion chvilek pro demokracii odmítá tvrzení premiéra Andreje Babiše (ANO), že zveřejnil jeho telefonní číslo. ČTK to dnes sdělil jeho předseda Mikuláš Minář."
- **Precedent of disclosure:** Minář published the accounts of his failed movement Lidé PRO in the past (search results: Seznam Zprávy "Minář zveřejnil účetnictví…", eurozpravy "Minář zveřejnil hospodaření neúspěšného hnutí Lidé PRO"; not opened, dates not checked).

## Base rate
- **Hint (n = 9):** class scheduled-publication-takes-place (pipeline/reference-classes.json) — own record yes 9, no 0; base_rate null.
- **Wider class (≥ 10):** our own other-scheduled events: `node scripts/refdata/slip.mjs other-scheduled` → prior 0.07, own 11/122, rate 0.089 that the event slips [estimate] (run 2026-11-27T17:55Z). How this case differs: a personal, self-set promise in a podcast (no institution, no fixed format), first framed as "considering"; also a two-part content requirement (pay and assets), not just "something is published".
- Class scheduled-appearance-takes-place (leader appears at an announced event): 0.92, n "large", own 14/1 — less similar.

## Case record
## Case record: cz-milion-chvilek-2026
No earlier claim of this case in our editions.

## Schedule slip
- `node scripts/refdata/slip.mjs other-scheduled` → 0.089 (prior 0.07, own 11/122) [estimate].
- Signs it may move: "intenzivně zvažuji" framing; no channel announced; he may tie it to the 2 Dec action instead. Signs it holds: explicit date given when asked, headline promise by a major outlet, which will be checked by others.

## Risks
- **Partial disclosure:** pay only, or assets only, or a range ("less than an MP's salary") would be NO.
- **Format ambiguity:** a video statement on Facebook stating figures counts if the figures are spoken; resolver needs a report or the video. If it appears only in a video no outlet summarises, resolution may be slow.
- **Pay vs. income:** he may give his Milion chvilek salary but not other income (coaching, per a past iPrima report); the criterion requires a pay figure, not total income.
- **Late Sunday post** near midnight; posts after 23:59 Prague time are outside the window.

## Sources
- https://www.seznamzpravy.cz/clanek/audio-podcast-ptam-se-ja-pristi-demonstrace-muzou-byt-vetsi-co-chysta-milion-chvilek-321583 (read 2026-11-27T17:57Z)
- https://ct24.ceskatelevize.cz/tema/mikulas-minar-50162 (link list, read 2026-11-27T17:58Z)
- https://www.ceskenoviny.cz/zpravy/2893236 (read 2026-11-27T17:57Z)
- https://milionchvilek.cz/ (front page only "Už nikdy 4:36!" petition, read 2026-11-27T17:58Z)
- https://www.echo24.cz/g/SwSDv/… ; https://www.echo24.cz/g/Sxk56/… ; https://www.echo24.cz/g/SKpaj/… (gallery pages, captions only, dates unreliable; nothing usable)
- https://www.blesk.cz/tag/minar/1 (link list, nothing current)
- WebSearch (4): "Minář zveřejní mzdu a majetek neděle Milion chvilek"; "Mikuláš Minář "mzdy" majetek zveřejní Babiš kasíruje miliony listopad 2026"; "Minář "svléknu donaha" mzda majetek"; "Babiš Deník "Kdo to je, Mikuláš Minář" kasíruje na demonstracích miliony" — no second report of the promise.
- Search-result title only (not opened): iPrima CNN "Z aktivisty koučem. Tahle sranda není zadarmo, ale nikomu to necpu, píše Minář" (https://cnn.iprima.cz/z-aktivisty-minare-se-stal-kouc-sluzby-nabizi-za-nizsi-tisice-nikomu-to-necpu-vzkazal-347041, date not checked).

## Added after the vendors' search (evening of 2026-11-27)
Leads named by other vendors' models in their own search; each fact below was confirmed by our own agent on the page cited (last read 2026-11-27T20:14:02Z). Leads that could not be confirmed on a page, forecasts, prices and opinions were dropped.
- On 26 November 2026 Seznam Zprávy's own X account posted the podcast clip quoting Minář as saying he would state the exact amount of his pay and his assets 'within a horizon of several weeks', whereas the article transcript has him answer 'this Sunday evening' when asked when. — https://x.com/SeznamZpravy/status/2125947186991051101 (published 2026-11-26T13:38:02.000Z, read 2026-11-27T20:14:02Z): "„V horizontu několika týdnů řeknu přesně výši své mzdy a řeknu přesně svůj majetek, který mám,' říká předseda Milionu chvilek pro demokracii Mikuláš Minář."
- On 30 April 2021 Minář published the closing financial report of his Lidé PRO movement, disclosing that he had been paid 138,728 CZK for six months of work, i.e. 22,971 CZK net per month. — https://mikulasminar.substack.com/p/minar-penize-miliony-lidepro-zaverecna-zprava (published 2021-04-30T10:37:00+00:00, read 2026-11-27T20:13:47Z): "Celkově mi bylo za 6 měsíců práce vyplaceno 138 728 korun, tedy 22 971 korun čistého měsíčně."
- According to Milion chvilek's 2025 annual report, as summarised in a 15 November 2026 commentary, the group's revenue rose from 21.86m CZK in 2024 to 33.57m CZK in 2025, and the total cost of the chair's remuneration rose from 709,000 CZK to 1.433m CZK; this is an aggregate for the post, not Minář's own documented pay. — https://iportal24.cz/nazory/minaruv-chvilkovy-byznys-demokracie-za-33-milionu-a-cepice-za-1190-korun/ (published 2026-11-15T07:00:00+01:00, read 2026-11-27T20:14:01Z): "A celkové náklady na odměny za výkon funkce předsedy se zvýšily ze 709 tisíc na 1,433 milionu korun."

## Added by the disagreement research (evening check, 2026-11-27)
Question: Has Minář or Milion chvilek, on any own channel or in any Czech outlet since 26 Nov, confirmed, repeated, postponed or qualified the Sunday 29 Nov disclosure of his pay and assets, or pointed to a later date; and does the full podcast transcript reconcile 'this Sunday evening' with Seznam Zprávy's X clip 'within several weeks'?
Finding: No new confirmation, postponement or qualification found: Minář's Substack has no post since 19 Nov (that post names only the 2 Dec 16:36 'Výstraha' and the 19:00 Švandovo divadlo debate, nothing on pay/assets), milionchvilek.cz shows only the petition, and searches found no Czech-outlet follow-up; an English site, aroundprague.cz, carries the headline 'Minář of Million Moments to disclose his income and assets' with slug '…on-sunday-evening' (403, search result only, undated, apparently derived from Seznam). The Seznam Zprávy article transcript, re-read in full for the relevant passages, contains no 'několika týdnů' phrase: at 33:00 he says he is 'thinking about' stating his pay and assets, and at 34:30, asked when, answers 'Tuto neděli večer to zveřejníme' — so the transcript does not reconcile the X clip wording; the discrepancy stays unexplained (possibly an edited transcript vs. spoken words, not verifiable without the audio).
- Article transcript (excerpted timestamps 2:00, 3:00, 32:00, 33:00, 34:30) has no 'several weeks' wording; the only 'týdnů' is about mobile operators needing six weeks' notice; the date given when asked is this Sunday evening. — https://www.seznamzpravy.cz/clanek/audio-podcast-ptam-se-ja-pristi-demonstrace-muzou-byt-vetsi-co-chysta-milion-chvilek-321583 (published 2026-11-26T12:19:26Z (modified 2026-11-26T16:11:27Z), read 2026-11-27T20:23:24Z): "34:30 A kdy ty informace oznámíte? - Tuto neděli večer to zveřejníme."
- Minář's Substack: latest post 19 Nov 2026; announces 2 Dec actions, says nothing about pay/assets; no post since the podcast. — https://mikulasminar.substack.com/feed (published 2026-11-19T20:35:28Z (latest item), read 2026-11-27T20:23:34Z): "Ve středu 2. prosince v 19:00 zveme vládu k dialogu do Švandova divadla."
- Milion chvilek website front page shows only the petition, no announcement on Minář's pay/assets. — https://milionchvilek.cz/ (published n/a, read 2026-11-27T20:23:45Z): "Už nikdy 4:36! Odmítáme silové vládnutí bez diskuse. To chci podepsat"
- English-language site repeats the Sunday-evening promise (search result title/slug only; page refused scripted reading, date unknown). — https://aroundprague.cz/en/news/politics/minar-i-will-reveal-my-salary-and-assets-on-sunday-evening (published unknown, read 2026-11-27T20:23:29Z): "Minář of Million Moments to disclose his income and assets"
