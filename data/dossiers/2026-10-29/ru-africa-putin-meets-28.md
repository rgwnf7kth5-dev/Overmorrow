# ru-africa-putin-meets-28

- **Claim:** On 28 October 2026 (Moscow time), the first day of the third Russia–Africa summit, President Putin holds talks or a meeting in person with at least one African head of state or government, as published on kremlin.ru.
- **Criterion:** YES if kremlin.ru (en.kremlin.ru or kremlin.ru, Events/News) publishes an item recording Putin's in-person talks or meeting, held between 00:00 and 23:59:59 Moscow time (UTC+3) on 28 Oct 2026, with at least one sitting African head of state or head of government.
  - Who counts as such a leader: a president, monarch, prime minister, or chair of a sovereign or transitional council acting as head of state.
  - What kind of meeting counts: a bilateral meeting, talks, or a group meeting such as the customary meeting with the leaders of African regional integration organisations, provided at least one participant is an African head of state or government.
  - What does not count: receptions, dinners, concerts, photo sessions or greeting ceremonies, unless kremlin.ru records talks or a meeting at them; speeches at a forum session; meetings with African ministers, vice presidents or AU Commission officials only; phone calls.

  The kremlin.ru item may be published after midnight, but the meeting must have taken place on 28 Oct (Moscow time). NO if no such meeting takes place on 28 Oct, including if the summit is postponed or Putin's meetings all fall on 29 Oct.
- **Deadline (event window end):** 2026-10-28T23:59:59+03:00 (resolves by 2026-10-29T05:00:00+01:00)
- **Written at:** 2026-10-26T19:45:00+01:00

## Schedule
- **Summit dates:** 28–29 Oct 2026 in Moscow. The joint statement is reported by TASS, https://tass.com/politics/2157099 (2026-07-07; from desk sweep world.json, not re-opened).
- **Ushakov on bilaterals:** Putin's bilateral meetings are on 29 Oct. The TASS report says: "Russian President Vladimir Putin will meet on October 29 with the presidents of Madagascar..." The others are Zimbabwe's Mnangagwa, Namibia's Nandi-Ndaitwah and Sudan's al-Burhan. It adds: "A series of bilateral meetings will begin after two plenary sessions of the Russia-Africa summit." Source: https://tass.com/politics/2208197 (dated 2026-10-26, no time; read 2026-10-26T18:18Z).
- **Ushakov on the AU chair:** Putin will meet the AU chairperson, Burundi's President Ndayishimiye, on 29 Oct. "A meeting with the African Union chairperson and Burundi president is schedule[d]". Source: https://tass.com/politics/2208119 (dated 2026-10-26, read 2026-10-26T18:18Z).
- **Conflicting programme:** The Diplomatic Insight (published 2026-10-26 15:11, read 2026-10-26T18:19Z), https://thediplomaticinsight.com/third-russia-africa-summit-new-action-plan/, puts the 28 Oct programme at the Gostiny Dvor Exhibition Centre, "with more than 2,000 guests expected". For 28 Oct it lists Putin's "customary meeting with leaders of Africa's regional integration bodies" and bilateral talks. The Thursday (29 Oct) plenary is "co-chaired by Putin and the African Union's current chair", followed by a news conference and signing.
- **RT Africa** (2026-10-26 13:28, read 2026-10-26T18:17Z), https://rt-english.com/africa/647734-third-russia-africa-summit-explained/: on 28 Oct Lavrov hosts a working breakfast for African foreign ministers; on 29 Oct Putin and Ndayishimiye co-chair the leaders' plenary. RT gives no dates for the bilaterals. The Gas Exporting Countries Forum summit is on 27 Oct.

## Facts
- **Attendance:** Ushakov: "Twenty-two countries will be represented by their heads of state"; 48 of 54 African countries have confirmed. Source: https://tass.com/politics/2208085 (dated 2026-10-26, read 2026-10-26T18:16Z).
- **Leaders already in Moscow by 26 Oct:** Zimbabwe's Mnangagwa, Ghana's Mahama, and the presidents of Mali and Mozambique, plus Senegal's prime minister. RT also lists as expected: Ruto (Kenya), Museveni (Uganda), al-Menfi (Libya), and Sassou Nguesso, Traoré, Tchiani, Kiir, Horta N'Tam, Nandi-Ndaitwah and al-Burhan. Nigeria sends Vice President Shettima. "South Africa: not attending the summit; Zane Dangor leads its delegation" (RT Africa, above). So Ramaphosa is not coming, and a claim on his attendance would be settled.
- **Africa Press** (2026-10-25 19:00Z, read 2026-10-26T18:17Z), https://www.africa-press.net/en/articles/russia-africa-summit-interests-test-political-ties: "17 African leaders have confirmed"; Tinubu was among five undecided. For comparison, about 43 heads of state came in 2019 and 17 in 2023.
- **Precedent, 2023 St Petersburg summit (27–28 Jul):** on day 1 (27 Jul), Putin addressed a plenary and met AU Chairperson Azali Assoumani (President of the Comoros) and AU Commission Chairperson Faki. Source: Wikipedia, https://en.wikipedia.org/wiki/2023_Russia%E2%80%93Africa_Summit (read 2026-10-26T18:20Z). In 2023 Ushakov said the leaders' plenary was on day 2, as now: https://www.globalsecurity.org/wmd/library/news/russia/2023/07/russia-230725-sputnik02.htm (read 2026-10-26T18:19Z) "the first plenary session, our president will speak as well as all the heads of 17 states" (28 Jul).
- **Difference from 2023:** in 2026 Ushakov has publicly placed both the AU-chair meeting and the named bilaterals on 29 Oct (TASS 2208119, 2208197).

## Base rate
- **Own count:** day 1 of Russia–Africa summits with a Putin meeting with an African head of state. 2023: yes (Assoumani, Wikipedia). 2019 Sochi: from memory, Putin met several leaders on day 1 (23 Oct 2019); this was not verified in this run. Rate 1/1 verified, n=2 with the unverified case.
- **Class scheduled-appearance-takes-place** (pipeline/reference-classes.json, 0.92): this does not fit, because a 28 Oct meeting is not on the published programme.
- **base_rate:** null.

## Schedule slip
- **Class summit-or-visit:** 0.080 [estimate] (`node scripts/refdata/slip.mjs summit-or-visit`). The summit is officially scheduled, leaders are already arriving, and there is no sign of postponement.
- The real uncertainty is the programme: whether any Putin meeting with a leader falls on 28 Oct rather than 29 Oct.

## Risks
- **Toward NO:** Putin may host only a reception or dinner on the evening of 28 Oct, or no leader event at all, with all meetings on 29 Oct as Ushakov's briefing implies.
- **Toward YES:** Putin may receive early-arriving leaders on 28 Oct (Mnangagwa, Mahama and others are already in Moscow). The "regional integration bodies" meeting may be on 28 Oct, per The Diplomatic Insight; that counts only if a head of state takes part.
- **Ambiguity:** a kremlin.ru item titled "Meeting with heads of delegations" held at a dinner counts only if it is published as a meeting or talks.
- **Timing:** a late-evening meeting after 23:59 Moscow time would not count.

## Sources
- https://tass.com/politics/2208085
- https://tass.com/politics/2208197
- https://tass.com/politics/2208119
- https://thediplomaticinsight.com/third-russia-africa-summit-new-action-plan/
- https://rt-english.com/africa/647734-third-russia-africa-summit-explained/
- https://www.africa-press.net/en/articles/russia-africa-summit-interests-test-political-ties
- https://en.wikipedia.org/wiki/2023_Russia%E2%80%93Africa_Summit
- https://www.globalsecurity.org/wmd/library/news/russia/2023/07/russia-230725-sputnik02.htm
- https://biztoc.com/x/f8dbc3d27dd41511 (aggregator; Ushakov confirmed the plans on 26 Oct)
- https://www.globalsecurity.org/wmd/library/news/safrica/safrica-260911-kremlin01.htm (failed to load)
- https://tass.com/politics/2157099 (from sweep)

## Added after round one (union of facts, 26 Oct ~21:00 CET)
- The evidence forecaster's own research found a Sputnik report listing three Putin bilaterals with African leaders on 28 Oct (URL not retained by the agent; same direction as The Diplomatic Insight). It conflicts with TASS/Ushakov, who place the named bilaterals and the AU-chair meeting on 29 Oct. The morning must check the Kremlin's published schedule.

## Overnight facts (morning check, 27 Oct 05:10–05:25 CET)
- TASS (26 Oct, read 27 Oct ~05:20 CET), https://tass.com/politics/2208229 : Kremlin aide Yuri Ushakov said that on 28 Oct Putin will meet Egypt's President Abdel Fattah el-Sisi before the evening reception in the Palace of Facets, Ethiopia's Prime Minister Abiy Ahmed after the reception, and the Republic of Congo's President Denis Sassou Nguesso as the last meeting of the day. The 29 Oct meetings (Madagascar, Zimbabwe, Namibia, Sudan) are a separate block. This briefing was published before the evening freeze but was missed by the dossier (which had only the TASS reports covering the 29 Oct block).
- Sputnik (26 Oct 15:24 GMT, updated 17:23 GMT), https://sputnikglobe.com/20261026/putin-to-hold-24-bilateral-meetings-during-russia-africa-summit---kremlin-aide-1124943405.html : Ushakov said Putin will hold 24 bilateral meetings during the summit; per-day counts as reported add up to 25.
- kremlin.ru itself could not be opened this morning.
- Remaining ways to NO: a meeting slipping past 23:59 Moscow time or to 29 Oct; kremlin.ru recording only reception contacts.
