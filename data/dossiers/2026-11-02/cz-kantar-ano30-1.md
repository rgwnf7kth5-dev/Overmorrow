# cz-kantar-ano30-1
- **Claim:** Česká televize publishes on Sunday 1 November 2026 a new Kantar CZ voting model in which ANO has 30.0% or more.
- **Criterion:** YES if on 1 Nov 2026 ČT (ct24.ceskatelevize.cz or its broadcast) publishes a new Kantar CZ voting model (not previously published) in which ANO is at 30.0% or more. NO if ANO is below 30.0%, or if no new Kantar model is published by ČT on 1 Nov 2026.
- **Event window:** 2026-11-01T00:00:00+01:00 to 2026-11-01T23:59:59+01:00 (Europe/Prague)
- **Written at:** 2026-10-30T18:20:00Z

## Schedule
- **No release is announced for 1 Nov.** ČT does not publish a calendar for Kantar models. The latest model (30 Aug) does not say when the next one comes — ČT24 https://ct24.ceskatelevize.cz/clanek/domaci/ano-se-dle-kantaru-dal-drzi-na-spici-cast-jeho-volicu-ale-miri-ke-stan-377082 (published 2026-08-30, read 2026-10-30T18:00Z). The spec's schedule label "reported" is not supported by any source found. The date is an inference from past patterns.
- Every Kantar model on the ČT24 "volební model" topic page (https://ct24.ceskatelevize.cz/tema/volebni-model-6352, read 2026-10-30T18:00Z), with release date, weekday and ANO where shown:
  - 2026: Sun 8 Feb; Sun 8 Mar; Sat 11 Apr; Sun 10 May; Sun 14 Jun; Sun 30 Aug (ANO 30.5). There is no July, September or October 2026 model, so this is 6 models in 2026.
  - 2025: Sat 8 Feb; Sat 8 Mar (ANO 37.5); Sat 12 Apr (35.5); Sat 10 May (35); Sat 7 Jun (34.5); Sat 30 Aug (33); Sat 27 Sep (33). Nothing followed from the Oct 2025 general election until Feb 2026.
  - 2024 (partial): Sun 30 Jun; Sun 20 Oct; Sat 16 Nov.
- Pattern: roughly monthly, but not strictly. July is skipped, and gaps follow elections. Most releases fall on the 2nd weekend of the month (7–14). End-of-month releases (30 Aug 2025, 27 Sep 2025, 30 Aug 2026) occur in election-campaign periods. In 2026 the releases are all at weekends, mostly Sundays.
- **Last release: Sun 30 Aug 2026.** By 30 Oct that is 61 days, the longest gap in 2026 apart from the post-election winter break. The October 2026 municipal and Senate elections fall in this gap. A release on 1 Nov (1st weekend) or 8 Nov (2nd weekend, the more usual slot) is plausible. Neither is announced.

## Facts
- Kantar, published 30 Aug 2026, fieldwork 3–21 Aug, n=1,200 (991 in the model), CATI+CAWI, base: respondents who do not rule out voting. ANO 30.5, STAN 17, ODS 15.5, Piráti 8.5, SPD 6.5, Motoristé 5. Error ±1.0 to ±3.3 pp — ČT24 377082 (above) "První místo zaujímá ANO, kterému srpnový model přisoudil 30,5 procenta, tedy o jeden bod méně než v květnu." This implies ANO 31.5 in the May 2026 model. The other 2026 values (Feb, Mar, Apr, Jun) were not shown on the topic page and were not read.
- Kantar ANO trend: 37.5 (Mar 2025) → 33 (Sep 2025) → 31.5 (May 2026) → 30.5 (Aug 2026). ANO's Oct 2025 election result was 34.5 per the article's "down four points" comparison (30.5 + 4).
- Median, published Sat 17 Oct 2026 14:50 (Echo24). The model is for "September", fieldwork before the municipal and Senate elections, n≈1,000, exact dates not given. ANO 29.5, STAN 17, ODS 12.5, SPD 9, Piráti 7.5, Motoristé 5 — Echo24 https://www.echo24.cz/a/HHZ4Y/zpravy-domov-predvolebni-pruzkum-median-zari-poslanecka-snemovna (read 2026-10-30T18:01Z) "Sněmovní volby by v září vyhrálo hnutí ANO, jeho podpora ale klesla na 29,5 procenta, což je nejméně od letošního května."
- NMS for Novinky, fieldwork 3–8 Jun 2026, online, n=1,035: ANO 31.6, STAN 14.8, ODS 13.9 — Echo24 https://www.echo24.cz/a/HveJ5/zpravy-domov-pruzkum-nms-volby-by-vyhralo-ano-stan-preskocili-ods (published 2026-06-10 19:02, read 2026-10-30T18:02Z) "Hnutí ANO by nyní při volbách do Sněmovny zvítězilo se ziskem 31,6 procenta hlasů."
- NMS for Právo, fieldwork 5–10 Mar 2026, n=1,048: ANO 31.5 — Newstream https://www.newstream.cz/politika/volebni-model-ano-zustava-bez-konkurence-motoriste-posilili-nase-cesko-oslabilo (published 2026-03-12 08:30, read 2026-10-30T18:02Z) "ANO je stále bez konkurence."
- STEM (CNN Prima News): no 2026 model was found in the sources searched. The newstream STEM tag page (https://www.newstream.cz/stitek/stem/2, read 2026-10-30T18:02Z) shows no 2026 STEM model. Two e15 hits were from 2025 (STEM 31.6 in Apr 2025; 30.9 in Jul 2025) and are not current.
- No October 2026 (post-municipal-election) national poll by NMS or STEM was found. The search was not exhaustive (one search each).
- Context: the coalition lost the municipal elections. MP David Pražák left ANO on 27 Oct. Analysts speak of a "red light" in ANO — ČTK/CNN Prima https://cnn.iprima.cz/u-ano-zablikala-cervena-kontrolka-rika-expert-budou-babisovy-cistky-kvuli-odchodum-mirnejsi-525711 (published 2026-10-30 13:57, read 2026-10-30T18:06Z).

## Base rate
- Publication: `irregular-poll-publication-in-window` (pipeline/reference-classes.json), 0.12, n "Kantar/ČT 2026: 5 models in about 42 weekends", own record 0 YES / 1 NO. Note: the topic page shows 6 Kantar models in 2026 (Feb, Mar, Apr, May, Jun, Aug), not 5. The hazard is higher after a 9-week gap than on an average weekend.
- Threshold, given a release: no class fits. The last Kantar was 30.5 (0.5 pp above the threshold), and the ANO trend is down about 1 pp per quarter. Kantar's stated error for a party at about 30% is near the top of ±1.0–3.3 pp. Median's September figure was 29.5.

## Schedule slip
- Slip class `other-scheduled`: 0.082 [estimate] (`node scripts/refdata/slip.mjs other-scheduled`, run 2026-10-30T17:58Z; prior 0.15, own 0/5). This assumes a scheduled date. None is announced here, so the publication risk is better described by the base rate above.

## Risks
- Main NO path: no release on 1 Nov. The model comes on 8 Nov (2nd-weekend habit) or later, or has been suspended after the municipal elections, as after the 2025 general election.
- Given a release: ANO at 30.0 or above needs a hold or slight rise from 30.5 in a period of local losses and defections. Kantar reports in half points, so 30.0 and 29.5 are adjacent possible values.
- Saturday release: 2025 releases were on Saturdays and one 2026 release (11 Apr) was a Saturday. A model released Sat 31 Oct would be "previously published" on 1 Nov and resolve NO.
- Reporting trap: ČT may cite the Kantar model on air before the web article. The criterion accepts the broadcast.

## Sources
- https://ct24.ceskatelevize.cz/tema/volebni-model-6352
- https://ct24.ceskatelevize.cz/clanek/domaci/ano-se-dle-kantaru-dal-drzi-na-spici-cast-jeho-volicu-ale-miri-ke-stan-377082
- https://www.echo24.cz/a/HHZ4Y/zpravy-domov-predvolebni-pruzkum-median-zari-poslanecka-snemovna
- https://www.echo24.cz/a/HveJ5/zpravy-domov-pruzkum-nms-volby-by-vyhralo-ano-stan-preskocili-ods
- https://www.newstream.cz/politika/volebni-model-ano-zustava-bez-konkurence-motoriste-posilili-nase-cesko-oslabilo
- https://www.newstream.cz/stitek/stem/2
- https://www.e15.cz/volby/volby-do-snemovny/pruzkum-stem-ano-klesa-starostove-posiluji-spd-sbira-protestni-hlasy-1425825 (2025, not used)
- https://www.e15.cz/vysledky-voleb-a-referend/volby-do-poslanecke-snemovny/babisovi-by-podpora-spd-k-vetsine-nestacila-ukazuje-novy-pruzkum-1423873 (2025, not used)
- https://cnn.iprima.cz/u-ano-zablikala-cervena-kontrolka-rika-expert-budou-babisovy-cistky-kvuli-odchodum-mirnejsi-525711
- Search result lists only: "volební model říjen 2026 ANO STEM Median NMS průzkum"; "průzkum STEM CNN Prima News ANO říjen 2026"; "NMS Market Research volební model ANO Novinky 2026"
