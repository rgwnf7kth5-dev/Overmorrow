# ua-swap-15
- **Claim:** Russia and Ukraine carry out a prisoner exchange between the morning of Friday 13 November and the end of Saturday 14 November 2026 (Kyiv time).
- **Criterion:** YES if, between 07:00 Kyiv time (UTC+2) on 13 Nov 2026 and 23:59 Kyiv time on 14 Nov 2026, Russia and Ukraine carry out an exchange of prisoners (prisoners of war, and civilians if released in the same swap) in which both sides hand over people, as confirmed by Zelensky, the Ukrainian Presidential Office, the Coordination Headquarters for the Treatment of POWs or the Russian Ministry of Defence, or reported as fact by at least two major outlets (e.g. Reuters, AP, AFP, Kyiv Independent, Ukrinform, Ukrainska Pravda, TASS, Moscow Times). Any size counts; it need not be the "large-scale" exchange agreed in Abu Dhabi; the first stage of a multi-stage exchange counts if it takes place in the window. Does NOT count: an announced agreement or date for a future exchange; exchanges of bodies only; one-sided releases or handovers; returns of children or civilians outside a two-way prisoner swap. NO if no such exchange takes place in the window. A report published after the window counts if it makes clear the exchange took place in the window.
- **Event window:** 2026-11-13T07:00+02:00 to 2026-11-14T23:59+02:00 (Europe/Kyiv); evidence: same-day posts by Zelensky / Coordination HQ / Russian MoD; resolver reads 2026-11-15T05:00+01:00.
- **Written at:** 2026-11-12T18:05Z
- Predecessor: ua-talks-swap-13 (window 11–12 Nov), data/dossiers/2026-11-13/ua-talks-swap-13.md. No exchange was reported on 11–12 Nov in any source read tonight; Witkoff on 12 Nov still spoke of the "upcoming" exchange.

## Schedule
- No date for the exchange has been published. Umerov, 11 Nov: "The main result is that we managed to reach an agreement on a large-scale prisoner exchange. We are now working to agree on the details and practical implementation." — Kyiv Independent https://kyivindependent.com/large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/ (published 2026-11-11T14:54Z, read 2026-11-12T17:53Z).
- Medinsky, 11 Nov: "We reached a fundamental agreement on another large-scale prisoner exchange. Details will be announced soon." — same article. "Neither Kyiv nor Moscow has disclosed the exact number of people who could be included in the upcoming exchange or when it might take place."
- Exchanges are not announced in advance; they are confirmed on the day.

## Facts
- TASS, citing Gen. Alexander Zorin: the exchange "will be the largest ever, involving more than 1,000 people on each side" — Kyiv Independent, URL above. Zorin via BBC (as cited by ČTK in data/dossiers/2026-11-14/ua-envoys-zelensky-14.md): possibly within two to three weeks.
- Zelensky (10 Nov): discussed a 1,000-for-1,000 or 1,500-for-1,500 format — Kyiv Independent, URL above.
- Witkoff in the Kremlin, 12 Nov (TASS summary): "The upcoming prisoner exchange between Russia and Ukraine means progress in the settlement process." Putin "noted that there has been success regarding the humanitarian track" — TASS https://tass.com/politics/2217341 (published 2026-11-12T16:42Z, read 2026-11-12T17:54Z).
- Putin on 12 Nov proposed a humanitarian mission in Kostiantynivka, to be organised by the two ombudsmen; Russia "would require five days to clear mines" — TASS, URL above; Kyiv rejects Russian control claims — Kyiv Independent https://kyivindependent.com/witkoff-kushner-arrive-in-moscow-following-ukraine-peace-talks/ (published 2026-11-12T05:51Z, modified 15:59Z, read 2026-11-12T17:53Z).
- Last exchange: 23 Oct 2026, 270 for 270; "the 11th reported prisoner exchange of 2026" — Kyiv Independent (11 Nov), URL above.
- The 1,000-for-1,000 exchange of May 2025 took three days (23–25 May) after agreement in Istanbul on 16 May — Kyiv Independent (11 Nov), URL above.
- Senior Russian diplomat (TASS 12 Nov): next round should come with "a better prepared position"; no date for the next round — https://tass.com/politics/2216973 (published 2026-11-12T11:33Z, read 2026-11-12T17:54Z).

## Base rate
- Class ua-ru-pow-exchange-two-day-window (pipeline/reference-classes.json): 0.069 (21 of 304 two-day windows in 2026; source data/dossiers/2026-11-05/ua-pow-1.md); own record 0/1.
- Lag from an announced exchange agreement to the first swap (own count, n=5):
  - Istanbul 16 May 2025 → first stage 23 May: 7 days (Kyiv Independent 11 Nov, above).
  - Istanbul 2 Jun 2025 → 9 Jun: 7 days (https://greekcitytimes.com/2025/06/10/prisoner-russia-ukraine/, as cited in ua-talks-swap-13.md).
  - Umerov's 1,200 deal, 15 Nov 2025 ("Technical consultations will take place soon") — https://kyivindependent.com/kyiv-moscow-reach-deal-on-prisoner-exchange-to-free-1-200-ukrainians/ (published 2025-11-15T18:27Z, read 2026-11-12T17:54Z) → next swap 5 Feb 2026, "first POW swap since October 2025" (Euromaidan Press headline via WebSearch, https://euromaidanpress.com/2026/02/05/157-ukrainians-return-from-russian-captivity-in-first-pow-swap-since-october-2025-photos): 82 days.
  - Abu Dhabi 5 Feb 2026: 314 announced and exchanged the same day (Moscow Times, as cited in ua-talks-swap-13.md): 0 days.
  - Geneva 17–18 Feb 2026 → 5 Mar 2026: about 15 days (as cited in ua-talks-swap-13.md).
  - First swap 2–3 days after agreement: 0 of 5. All non-same-day cases took 7 days or more. Day 2–3 after the 11 Nov agreement = 13–14 Nov.
- Kyiv Post (1 Jan 2026): 10 exchanges in 2025 plus the three-stage Istanbul swap — https://www.kyivpost.com/post/66828 (published 2026-01-01T10:15+02:00, read 2026-11-12T17:54Z).

## Schedule slip
- slip_class none: no scheduled event (the swap is undated; schedule "speculative"). For reference, negotiation-round 0.090 and other-scheduled 0.092 (`node scripts/refdata/slip.mjs`, 2026-11-12T17:54Z).

## Risks
- Large swaps need lists to be verified; Umerov on 11 Nov said details and "practical implementation" were still being agreed → points later than 14 Nov.
- A smaller, separate swap could happen independently (counts YES).
- A swap on 15 Nov or later, or only an announced date, → NO.
- Body repatriations and the Kostiantynivka humanitarian mission do not count.
- Fresh Russian strikes (Kyiv, 12 Nov) and the Starshield dispute do not, on past form, stop exchanges.

## Sources
- https://kyivindependent.com/large-scale-prisoner-exchange-agreed-as-2nd-day-of-abu-dhabi-talks-concludes-umerov-says/
- https://kyivindependent.com/2nd-day-of-trilateral-peace-talks-begins-between-ukraine-russia-us-in-abu-dhabi/
- https://kyivindependent.com/witkoff-kushner-arrive-in-moscow-following-ukraine-peace-talks/
- https://kyivindependent.com/kyiv-moscow-reach-deal-on-prisoner-exchange-to-free-1-200-ukrainians/
- https://tass.com/politics/2217341
- https://tass.com/politics/2216973
- https://tass.com/ (front page, read 2026-11-12T17:54Z)
- https://united24media.com/world/ukraine-and-russia-reportedly-agree-to-large-scale-prisoner-exchange-in-abu-dhabi-24249 (10 Nov; no figures or timeline)
- https://www.kyivpost.com/post/66828
- https://euromaidanpress.com/2026/02/05/157-ukrainians-return-from-russian-captivity-in-first-pow-swap-since-october-2025-photos (WebSearch title only)
- https://rtvi.com/news/medinskij-anonsiroval-masshtabnyj-obmen-plennymi-mezhdu-rossiej-i-ukrainoj/ (empty page returned)
- WebSearch: "prisoner exchange Ukraine Russia November 12 2026 date Ushakov Umerov Coordination Headquarters"; "обмен пленными 1000 на 1000 сроки Мединский Ушаков ноябрь 2026"; "first prisoner exchange since October 2025 Ukraine Russia February 2026 157" — no 13–14 Nov date found.
- data/dossiers/2026-11-13/ua-talks-swap-13.md; data/dossiers/2026-11-14/ua-envoys-zelensky-14.md

## Unreachable
- https://censor.net/en/news/4033082/ukraine-and-russia-discuss-large-scale-pow-swap-in-abu-dhabi (HTTP 403)
- https://rtvi.com/news/medinskij-anonsiroval-masshtabnyj-obmen-plennymi-mezhdu-rossiej-i-ukrainoj/ (no content)
