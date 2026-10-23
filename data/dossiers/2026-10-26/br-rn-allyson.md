# br-rn-allyson — Allyson Bezerra elected governor of Rio Grande do Norte

- **Claim:** Allyson Bezerra (União Brasil) is elected governor of Rio Grande do Norte in the 25 Oct 2026 runoff.
- **Criterion:** YES if the TSE results (resultados.tse.jus.br) for the Rio Grande do Norte governor second round show Allyson Bezerra with more valid votes than Cadu "de Lula" Xavier (PT), as published by 26 Oct 2026 12:00 CET. NO if Cadu has more valid votes, or if the runoff is postponed or TSE has not published a result showing who won by that time.
- **Deadline:** 2026-10-26T12:00+01:00
- **Written at:** 2026-10-23T19:05+02:00

## Schedule
- Runoffs for governor in Acre, Amazonas, Espírito Santo, Rio Grande do Norte, Tocantins and the Federal District on Sunday 25 Oct 2026, together with the presidential runoff (status official). https://www.correio24horas.com.br/eleicoes/segundo-turno-para-governador-sera-realizado-em-cinco-estados-e-no-df-neste-domingo-1026
- Voting 08:00–17:00 Brasília time (12:00–21:00 CET); TSE releases results from 17:00 BRT / 21:00 CET (prior sweep note, world.json, citing jornalopcao.com.br and https://en.wikipedia.org/wiki/2026_Brazilian_general_election). In 2022 the national count was complete by 00:18 BRT.
- Runoff matchup confirmed: https://sbtnews.sbt.com.br/noticia/politica/governo-do-rn-allyson-e-cadu-de-lula-disputam-2-turno

## Facts
- **First round, 4 Oct 2026 (TRE-RN official count):** Allyson 733,809 votes (36.94% of valid votes), Cadu de Lula 718,300 (36.16%); gap 15,509 votes / 0.78 pp. https://www.dgabc.com.br/Noticia/4353722/no-rn-allyson-tem-45-e-cadu-de-lula-42-no-2-turno-mostra-pesquisa-real-time-big-data ; same figures in https://sbtnews.sbt.com.br/noticia/eleicoes/quaest-rn-allyson-tem-45-contra-42-de-cadu-de-lula (the prior sweep had 36.83/36.21 from another outlet; the two outlets read here agree on 36.94/36.16). Álvaro Dias (PL) was the main eliminated candidate (AtlasIntel Sept: Dias 27.3%).
- **Runoff polls (all released after the first round):**
  | Pollster | Fieldwork | n | MoE | Allyson | Cadu | Blank/null | DK | Valid-vote split | Source |
  |---|---|---|---|---|---|---|---|---|---|
  | Quaest (Inter TV), RN-03210/2026 | 9–12 Oct | 1,098 | ±3 | 45 | 42 | 7 | 6 | ≈51.7–48.3 (computed) | https://sbtnews.sbt.com.br/noticia/eleicoes/quaest-rn-allyson-tem-45-contra-42-de-cadu-de-lula |
  | ITEM, RN-01978/2026 (released 19 Oct) | 13–15 Oct | 1,250 | ±2.77 | 51 | 44 | – | – | 53.7–46.3 (published) | https://static.poder360.com.br/uploads/2026/10/ITEM-2oturno-RN-outubro.pdf |
  | Real Time Big Data, RN-02651/2026 (released 20 Oct) | 15–19 Oct | 1,600 | ±2 | 45 | 42 | 9 | 4 | 52–48 (published) | https://www.dgabc.com.br/Noticia/4353722/no-rn-allyson-tem-45-e-cadu-de-lula-42-no-2-turno-mostra-pesquisa-real-time-big-data |
- Simple mean of the three valid-vote leads (3.4, 7.4, 4.0): Allyson +4.9 pp; mean of total-vote leads (3, 7, 3): +4.3. Every runoff poll found has Allyson ahead, all within or near the margin of error. Rejection (ITEM): Cadu 46%, Allyson 41%.
- Pre-first-round runoff scenarios: Quaest 2–3 Oct (n=1,800, RN-09644/2026) Allyson 44, Cadu 34 (Sept 25: 50–30) https://static.poder360.com.br/uploads/2026/10/RN-096442026-Governador.pdf ; AtlasIntel 23–28 Sept (n=1,207) Cadu 41.9, Allyson 41.6 https://www.dgabc.com.br/Noticia/4349816/atlas-cadu-de-lula-lidera-corrida-ao-governo-do-rn-com-37-1-alvaro-dias-e-allyson-empatam
- **State poll accuracy in this very election:** Quaest's last first-round poll (2–3 Oct) had Allyson 37, Cadu 32 valid votes (lead 5); result lead was 0.78 → lead error +4.2 pp (PDF above). Quaest Tocantins first round: poll lead Dorinha +5, result +1.6 → error +3.4 (https://static.poder360.com.br/uploads/2026/10/quaest-to-3-out-2026.pdf).
- No AtlasIntel or Ipec runoff poll for RN was found in the searches (Poder360 aggregate of 20 Oct lists only Quaest and ITEM: https://www.poder360.com.br/brasil/saiba-como-estao-cadu-de-lula-e-allyson-nas-pesquisas-do-rn/). A final-week poll may still be released 23–24 Oct.
- Context: Lula is priced at 0.993 to carry RN in the presidential runoff (Polymarket) — the governor race needs split-ticket voting for Allyson to win; Cadu runs explicitly as Lula's candidate.

## Base rate
- Class: poll-lead model for a two-candidate state runoff. Input lead +4.7 pp on valid votes (rounded mean of the three runoff polls), error sd 6 pp on the lead.
- Why sd 6: national Brazilian runoff polls are accurate (Datafolha runoffs rms lead error 1.345, n=3, pipeline/reference-data/poll-error.json "brazil_datafolha_runoffs"; pooled all-elections rms 2.734, n=6), but state polls err more: in this cycle Quaest's final first-round state polls missed the top-two lead by +4.2 (RN) and +3.4 (TO), sources above. sd 6 ≈ 1.5–2× those observed misses and ~2× the pooled national rms.
- `node scripts/refdata/models.mjs lead 4.7 6` → 0.7833.

## Schedule slip
- Class `election-held`, rate 0.010 (`node scripts/refdata/slip.mjs`). No sign of postponement; the runoff is held nationwide with the presidential runoff. A recount/legal challenge would not stop TSE from publishing totals.

## Markets
- Polymarket "Rio Grande do Norte Governor Election Winner" (https://polymarket.com/event/rio-grande-do-norte-governor-election-winner), read 2026-10-23T17:02Z: Allyson Yes 0.70 (vol ~$55k), Cadu de Lula Yes 0.275.
- Polymarket "RN gubernatorial second round margin" (https://polymarket.com/event/rio-grande-do-norte-governor-election-second-round-margin-of-victory), read 17:02Z: Cadu wins 0.285; Allyson <3% 0.2345; 3–6% 0.21; 6–10% 0.165; 10–15% 0.0735; ≥15% 0.0715.
- No bookmaker odds found.

## Risks
- Lula's coattails in a state he carries heavily (Lula at 0.993 on Polymarket for RN): presidential-runoff turnout among PT voters can lift Cadu.
- Leads of 3–7 pp are at or inside the margin of error; Quaest overstated Allyson's first-round lead by ~4 pp.
- Transfer of Álvaro Dias (PL) first-round voters is the swing; Allyson leads on rejection (Cadu 46% rejected vs 41%).
- Late polls (23–24 Oct) could shift the picture; none seen yet.
- TSE publication: totals normally complete within hours of 21:00 CET; failure to publish by 12:00 CET Monday is unlikely but resolves NO.

## Sources
- https://www.correio24horas.com.br/eleicoes/segundo-turno-para-governador-sera-realizado-em-cinco-estados-e-no-df-neste-domingo-1026 (via sweep)
- https://sbtnews.sbt.com.br/noticia/eleicoes/quaest-rn-allyson-tem-45-contra-42-de-cadu-de-lula
- https://www.dgabc.com.br/Noticia/4353722/no-rn-allyson-tem-45-e-cadu-de-lula-42-no-2-turno-mostra-pesquisa-real-time-big-data
- https://static.poder360.com.br/uploads/2026/10/ITEM-2oturno-RN-outubro.pdf
- https://static.poder360.com.br/uploads/2026/10/RN-096442026-Governador.pdf
- https://www.poder360.com.br/brasil/saiba-como-estao-cadu-de-lula-e-allyson-nas-pesquisas-do-rn/
- https://www.dgabc.com.br/Noticia/4349816/atlas-cadu-de-lula-lidera-corrida-ao-governo-do-rn-com-37-1-alvaro-dias-e-allyson-empatam
- https://static.poder360.com.br/uploads/2026/10/quaest-to-3-out-2026.pdf
- https://polymarket.com/event/rio-grande-do-norte-governor-election-winner ; https://polymarket.com/event/rio-grande-do-norte-governor-election-second-round-margin-of-victory (via markets.mjs)
- pipeline/reference-data/poll-error.json
