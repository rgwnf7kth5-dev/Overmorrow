# ua-oleshky-violation-alleged

- **Claim:** By 23:59 Kyiv time on 27 October 2026, an official of Ukraine or of Russia publicly accuses the other side of violating the local ceasefire around Oleshky.
- **Criterion:** YES if, between 03:00 Kyiv time on 27 Oct (the scheduled ceasefire start) and 23:59:59 Kyiv time on 27 Oct 2026, either of these publicly accuses the other side of violating the Oleshky / Kherson-front ceasefire (shelling, drone strikes or attacks in the ceasefire sector, or on the convoy or demining teams):
  - a Ukrainian official source: the President or his Office, the General Staff, the Defence Ministry, ombudsman Lubinets, the Kherson regional military administration, or the Southern Defence Forces command;
  - a Russian official source: the Kremlin, the Defence Ministry, the General Staff, Lantratova, or the Russian-installed Kherson administration.

  The accusation must refer to the Oleshky ceasefire specifically, not to attacks elsewhere. NO if no such accusation is made in the window, including if the ceasefire is postponed and does not begin on 27 Oct.
- **Deadline (event window end):** 2026-10-27T23:59:59+02:00 (resolves by 2026-10-28T05:00:00+01:00)
- **Written at:** 2026-10-25T19:10:00+01:00

## Schedule
- **Start:** the ceasefire is to start at 03:00 Kyiv time (04:00 Moscow time) on 27 Oct. Source: Kyiv Post, https://www.kyivpost.com/post/88088 (published 2026-10-25 08:58, read 2026-10-25T17:45Z). Gerasimov gave the same time: "cease fire on the Kherson front starting at 4 a.m. on October 27" (Meduza/Interfax, https://meduza.io/en/news/2026/10/23/russia-announces-october-27-ceasefire-on-southern-ukraine-s-kherson-front-to-evacuate-residents-of-occupied-oleshky, published 2026-10-23 17:23, read 2026-10-25T17:45Z).
- **Humanitarian operation:** planned for 29 Oct (Al Jazeera, https://www.aljazeera.com/news/2026/10/24/ukraine-says-starlink-restored-as-attacks-continue-in-russia-and-ukraine, read 2026-10-25T17:40Z). So 27 Oct is the first, quieter day, presumably demining.

## Facts
- **Purpose:** demining the route, aid delivery and evacuation of civilians. The operation is "phased", with no published end time and no named monitor (Kyiv Post 88088; 112.ua, https://112.ua/en/rezim-tisi-z-27-zovtna-dla-rozminuvanna-olesok-ta-dostavki-gumanitarnoi-dopomogi-193628, read 2026-10-25T17:46Z).
- **Brokering:** Melania Trump's team brokered the deal (AP via News4JAX, https://www.news4jax.com/news/world/2026/10/24/ukraine-and-russia-eye-new-peace-talks-and-melania-trumps-mission-but-steep-obstacles-remain/, read 2026-10-25T17:40Z). Both sides therefore have an incentive to show compliance to Washington, and also to blame the other if the operation stalls.
- **Fighting elsewhere:** large-scale strikes continued on 23–24 Oct elsewhere, including a Russian strike on Chornomorsk port and Ukrainian strikes in Russia (ČT24, https://ct24.ceskatelevize.cz/clanek/svet/rusko-uvedlo-ze-drony-zasahlo-ukrajinsky-pristav-cornomorsk-a-nakladni-lod-378974, read 2026-10-25T17:41Z; Al Jazeera above). Accusations about attacks outside the sector do not count.
- **Analogue with an accusation:** during the June 2026 IAEA local ceasefire at Zaporizhzhia, Russia's Rosatom accused Ukraine of a drone strike on engineers clearing mines; "fighting continued on Friday despite the truce". Source: Al Jazeera, https://www.aljazeera.com/news/2026/6/5/iaea-brokers-ukraine-ceasefire-to-allow-nuclear-plant-repairs (published 2026-06-05, read 2026-10-25T17:52Z).
- **Analogue without one:** for the September 2026 ZNPP ceasefire (the 7th), WNN reported no violation accusations. Source: https://wnn.world-nuclear.org/articles/local-ceasefire-in-place-for-zaporizhzhia-power-line-repairs (published 2026-09-07, read 2026-10-25T17:52Z).

## Base rate
- **Class:** local Russia–Ukraine ceasefires for a technical or humanitarian task (IAEA ZNPP series, n=7 since 2022). Checked: 2 cases, 1 with a public violation accusation within the first days (June 2026, by Rosatom, a state corporation) and 1 without (Sep 2026). The rate is about 1/2 on a tiny sample. The other 5 were not checked.
- **Broader class:** general Russia–Ukraine truces (energy moratorium Mar 2025, Easter Apr 2025, May 2025). Both sides traded violation accusations within the first day in each. This is from the news record and was not re-verified in this run, so it is not used numerically.
- base_rate = null.

## Schedule slip
- **Class:** other-scheduled, current rate 0.150 (estimate). If the ceasefire slips, this claim resolves NO (see criterion).

## Risks
- **Postponement:** the ceasefire may be postponed, making it NO by definition.
- **Short window:** only 21 hours. Accusations may first come on 28–29 Oct, around the convoy.
- **Ambiguity:** reports of shelling of Oleshky may be framed as "Russian shelling of Kherson" without a ceasefire reference. Check the wording.
- **Incentive to stay quiet:** both sides may refrain from accusations so as not to anger the US mediators.

## Sources
- https://www.kyivpost.com/post/88088
- https://meduza.io/en/news/2026/10/23/russia-announces-october-27-ceasefire-on-southern-ukraine-s-kherson-front-to-evacuate-residents-of-occupied-oleshky
- https://www.aljazeera.com/news/2026/10/24/ukraine-says-starlink-restored-as-attacks-continue-in-russia-and-ukraine
- https://112.ua/en/rezim-tisi-z-27-zovtna-dla-rozminuvanna-olesok-ta-dostavki-gumanitarnoi-dopomogi-193628
- https://www.news4jax.com/news/world/2026/10/24/ukraine-and-russia-eye-new-peace-talks-and-melania-trumps-mission-but-steep-obstacles-remain/
- https://ct24.ceskatelevize.cz/clanek/svet/rusko-uvedlo-ze-drony-zasahlo-ukrajinsky-pristav-cornomorsk-a-nakladni-lod-378974
- https://hromadske.ua/en/amp/war/273075-ukraine-russia-agree-to-ceasefire-in-occupied-oleshky-for-humanitarian-mission-starting-oct-27
- https://www.aljazeera.com/news/2026/6/5/iaea-brokers-ukraine-ceasefire-to-allow-nuclear-plant-repairs
- https://wnn.world-nuclear.org/articles/local-ceasefire-in-place-for-zaporizhzhia-power-line-repairs
