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
