# cz-refinery-committee-12
- **Claim:** On Wednesday 11 November 2026 the Chamber of Deputies' budget committee adopts a resolution recommending that the Chamber pass the government bill on the extraordinary tax on refineries (with or without amendments).
- **Criterion:** YES if, between 10 Nov 06:00 and 11 Nov 23:59 (Prague), the budget committee (rozpočtový výbor PSP) adopts a resolution (usnesení) recommending that the Chamber approve the refinery-tax bill, with or without amendments, as shown by the committee's resolution on psp.cz or reported by ČTK/ČT24. NO if the committee does not meet on the bill, adjourns it again, rejects it, or recommends rejection by then.
- **Deadline:** 2026-11-11T23:59+01:00 (Europe/Prague)
- **Written at:** 2026-11-09T18:05Z

## Schedule
- The committee adjourned the bill on Tue 27 Oct "until 11 November" to allow amendments: "Sněmovní rozpočtový výbor v úterý přerušil do 11. listopadu projednávání vládního návrhu mimořádné daně na rafinerie kvůli případnému podávání pozměňovacích návrhů." — ČTK via Respekt, https://www.respekt.cz/informacni-servis/snemovni-rozpoctovy-vybor-prerusil-debatu-o-zavedeni-mimoradne-dane-na-rafinerie-2026-10-27-16-59 (27 Oct 16:59, read 2026-11-09T17:52Z).
- ČTK on 5 Nov: "Ve středu by měl debatu o daňové novele uzavřít rozpočtový výbor." The Chamber meets in an extraordinary sitting on Fri 13 Nov with a single item, the second reading — oEnergetice/ČTK https://oenergetice.cz/energetika-v-cr/vlada-chce-zdanit-rafinerie-kvuli-vyssim-marzim-poslanci-chystaji-upravy (published 2026-11-05 16:11, read 2026-11-09T17:52Z) "Poslanci se mimořádně sejdou příští týden v pátek ke druhému čtení".
- Time of the committee meeting NOT confirmed: psp.cz (committee schedule and invitation) was unreachable (connection reset, 2026-11-09T17:52Z). No news item gives the hour.

## Facts
- The bill: 50% tax on the margin increase over 2025, for 2026 and 2027; firms with total revenue ≥ CZK 2bn and refining revenue ≥ CZK 50m; about CZK 5.5bn for 2026 per the Finance Ministry; likely hits only Orlen Unipetrol's Kralupy and Litvínov refineries — Respekt/ČTK (above) "Daň dopadne zřejmě jen na rafinerie v Kralupech nad Vltavou a v Litvínově".
- Filed amendments so far (opposition): STAN — extend to importers; TOP 09 (Jan Jakob) — cut the rate to 39.5% and make it non-deductible — same sources.
- At the 27 Oct committee session ODS's Vojtěch Munzar and SP president Jan Rafaj criticised the bill; STAN's Jan Papajanovský agreed with the principle — Respekt/ČTK (above).
- First reading passed on 13 Oct (bill "prošel prvním kolem") — e15 https://www.e15.cz/domaci/politika/mimoradna-dan-rafinerie-lex-unipetrol-orlen-schillerova-1436526 (headline seen in search; not re-read tonight); board question cz-refinery-tax-passed background.
- Sector-tax debate: Seznam Zprávy 6 Nov — the government was to discuss a bank tax on Monday, the intention being to attach it "rovnou příští týden" to the refinery bill in the Chamber — https://www.seznamzpravy.cz/clanek/ekonomika-finance-uroky-rostou-banky-bohatnou-a-babis-ma-problem-319813 (published 2026-11-06 06:20Z, read 2026-11-09T17:53Z) "konkrétně rovnou příští týden novinku přilepit ve Sněmovně k již rozjetému zákonu o zdanění rafinérií".
- Seznam Zprávy 9 Nov: SPD MP and budget-committee member Jan Hrnčíř: "Diskutuje se to v rámci koalice, ale na stole zatím nic konkrétního není"; committee vice-chair Patrik Pařil (ANO) says a bank sector tax now is not right; SPD's Foldyna against a bank tax but open to up to 90% on arms makers; Motoristé (Krejčí, Turek) against tax rises in principle — https://www.seznamzpravy.cz/clanek/domaci-politika-vlada-resi-koho-zdani-jeji-poslanci-se-neshodnou-320073 (published 2026-11-09 17:15Z, read 2026-11-09T17:53Z).
- Coalition council (ANO, SPD, Motoristé) on the evening of 9 Nov was to discuss sector taxes; no outcome published by 17:57Z (front pages of ČTK, ČT24, Novinky, Seznam Zprávy, Aktuálně checked 2026-11-09T17:53Z) — see also edition 2026-11-10 story cz-sector-tax.
- SPD (Okamura, 5 Nov): "SPD ... nepodpoří jakékoli další zdanění českých občanů" — but did not oppose the refinery tax; oEnergetice/ČTK (above).

## Base rate
- No committee-specific class in pipeline/reference-data. Proxy: contested votes under the Babiš government in which a majority of coalition members voted yes were adopted in 0.98 of cases (n=397, plenary) — pipeline/reference-data/cz-chamber.json, coalition_discipline babis-3, share_adopted 0.9798. The coalition also holds a majority in the committee (desk sweep note, not re-verified tonight because psp.cz is unreachable).
- The main uncertainty is not the vote but whether the committee concludes on 11 Nov rather than adjourning again.

## Schedule slip
- `node scripts/refdata/slip.mjs cz-chamber-other-item` → 0.682 (own 0/3, prior 0.75) [data]. This class is built on plenary agenda items under obstruction; a committee session on a date the committee itself fixed is a different setting, and the closest alternative `other-scheduled` is 0.067. The editor should choose; the dossier writer leans to treating slip risk as well below the plenary rate.
- Signs it may move: the coalition has not settled a sector-tax amendment (Hrnčíř: "nothing concrete"); the committee could adjourn again to wait for it, though amendments can also be filed at Friday's second reading. Opposition could prolong debate but cannot block a vote in committee. psp.cz invitation not seen.

## Risks
- Meeting time/agenda unconfirmed (psp.cz unreachable).
- Re-adjournment to accommodate a coalition bank/arms amendment.
- Resolution may be reported only briefly; committee resolutions appear on psp.cz with a lag.

## Sources
- https://www.respekt.cz/informacni-servis/snemovni-rozpoctovy-vybor-prerusil-debatu-o-zavedeni-mimoradne-dane-na-rafinerie-2026-10-27-16-59
- https://oenergetice.cz/energetika-v-cr/vlada-chce-zdanit-rafinerie-kvuli-vyssim-marzim-poslanci-chystaji-upravy
- https://www.seznamzpravy.cz/clanek/ekonomika-finance-uroky-rostou-banky-bohatnou-a-babis-ma-problem-319813
- https://www.seznamzpravy.cz/clanek/domaci-politika-vlada-resi-koho-zdani-jeji-poslanci-se-neshodnou-320073
- pipeline/reference-data/cz-chamber.json

- Editor (2026-11-09T18:25Z): slip_class set to `other-scheduled` (rate 0.067, own 4/60), since the claim concerns a committee session on a date the committee fixed, not a plenary agenda item.
