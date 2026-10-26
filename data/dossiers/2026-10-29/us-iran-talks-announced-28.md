# us-iran-talks-announced-28

- **Claim:** By 23:59 Tehran time on 28 October 2026, the US government or the Iranian government officially announces either that a round of US–Iran negotiations (direct or indirect) will take place on a stated date, or that such a round has taken place.
- **Criterion:** YES if, between 2026-10-27T08:30:00+03:30 (06:00 CET) and 2026-10-28T23:59:59+03:30, an official makes an on-record announcement of either:
  - (a) a stated calendar date for a round of US–Iran negotiations; or
  - (b) a round of US–Iran negotiations held in that window.

  These officials count:
  - United States: President Trump, the White House, the State Department, special envoy Witkoff or Vice President Vance.
  - Iran: President Pezeshkian, Foreign Minister Araghchi, foreign-ministry spokesman Baghaei, the Supreme National Security Council or its secretary.

  "Round of negotiations" means delegations of both countries meeting to negotiate. They may meet face to face (direct), or in the same city or venue with a mediator carrying messages between them (indirect). These do not count: messages exchanged through intermediaries such as Qatar, Pakistan, Oman, Saudi Arabia or Turkey without both delegations present; mediators' visits to one capital; statements that talks are possible, being considered or will happen "soon" without a date; reports citing unnamed officials. NO if no such announcement is made in the window.
- **Deadline (event window end):** 2026-10-28T23:59:59+03:30 (resolves by 2026-10-29T05:00:00+01:00)
- **Written at:** 2026-10-26T19:35:00+01:00

## Schedule
- **Not scheduled.** No round is announced. Iran International (26 Oct, 09:56Z, read 2026-10-26T18:15Z), https://iranintl.com/en/202610260367: the page announces no scheduled round of US–Iran talks and no date. The Hill reported that US options for renewed strikes were prepared "for after the November 3 midterm elections".

## Facts
- **26 Oct, Tehran meeting:** Saudi Defence Minister Khalid bin Salman, Pakistan's Field Marshal Asim Munir and Turkish intelligence chief Ibrahim Kalın met Iran's "top security officials and negotiators to push for a deal between Tehran and Washington". Source: AP via PBS, https://www.pbs.org/newshour/world/delegations-meet-in-iran-with-the-middle-east-on-edge-over-potential-for-renewed-fighting (published 2026-10-26 11:51 EDT, read 2026-10-26T18:15Z). President Pezeshkian met the delegation.
- **Qatari mediators:** they were in Tehran on 25 Oct, "coordinating with the U.S." (AP via PBS, above).
- **Baghaei, 24–25 Oct weekend:** Iran "had not closed the window of diplomacy", and messages are being passed to the US through intermediaries. He also said negotiations have been stalled for a long time and the US presses unilateral demands such as "complete surrender" (AP via PBS, above).
- **Iran's ambassador to Pakistan:** Tehran is willing to resume negotiations under the June interim agreement. Iran offered, through Islamabad, to reopen Hormuz if Washington lifts its naval blockade, and the ambassador says Trump rejected this (Iran International, above).
- **Trump, 25 Oct:** "Do I make a deal with them or do I finish them off? That's the only question." Later the same day: "There will not be a strike today" (Iran International, above).
- **20 Oct:** Iran told Pakistan there would be no talks with the US until its demands were met. Source: TimesLIVE, https://www.timeslive.co.za/news/world/2026-10-20-iran-tells-pakistan-no-talks-with-the-us-until-demands-met/ (from data/watchlist.json; not re-opened).
- **22 Oct:** Trump: "We are not negotiating with" Iran. Source: Times of Israel liveblog, https://www.timesofisrael.com/liveblog-october-22-2026/ (carried over from data/dossiers/2026-10-28/us-iran-deal-announced.md).
- **Hardliner pressure:** Iranian hardliners (the Paydari Front) urge NPT withdrawal and attack Pezeshkian's openness to talks. Source: Al Jazeera, https://www.aljazeera.com/news/2026/10/26/irans-anti-negotiation-hardliners-turn-against-president-pezeshkian (2026-10-26T14:27Z; from desk sweep watch_b.json, not re-opened).
- **24 Oct, Istanbul:** the foreign ministers of Turkey, Saudi Arabia, Egypt, Pakistan, Britain, France, Germany and Italy met. Turkey's FM said diplomacy is the only way (Iran International, above).
- **Last confirmed rounds:** the June 2026 Pakistan/Qatar-brokered interim agreement (Islamabad Memorandum, 17 Jun) followed in-person rounds. It "unraveled quickly" (AP via PBS); the ceasefire collapsed on 8 Jul (Wikipedia background, carried over). Talks have been "stalled since mid-September" (bdnews24/Reuters 12 Oct, carried over).

## Base rate
- **Class unscheduled-announcement-within-one-day** (pipeline/reference-classes.json): "An unscheduled announcement or decision (date set, decree, levy, round of talks) is made within a one-day window". The base rate is null; the own record is 1 yes / 9 no.
- **Board question us-iran-talks-resume** (data/watchlist.json): "Stalled US-Iran tracks resuming a same-venue round within ~10 weeks (2019-2026)", rate 0.25, n=6 (approximate count). That is a 10-week window; ours is about 1.6 days.
- **Own count:** in the 2026 war, publicly confirmed same-venue US–Iran rounds clustered around April–June (Islamabad). None has been confirmed since the 8 Jul collapse, about 110 days ago.

## Schedule slip
- **Slip class:** negotiation-round, 0.300 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`). It applies only if a round is announced and then postponed. Nothing is scheduled now.

## Risks
- **Toward YES:**
  - A three-nation security delegation plus Qatar are actively mediating, and the Qatari effort is coordinated with the US.
  - Trump frames the choice as "deal or finish them off".
  - Before the 3 Nov midterms a Hormuz deal would be a political win. An Islamabad or Doha round could be announced quickly, as in April.
- **Toward NO:**
  - Iran's 20 Oct position is "no talks until demands met", and Trump said "We are not negotiating" on 22 Oct.
  - Strike planning points to after 3 Nov.
  - Hardliner pressure in Tehran.
  - Mediation typically takes the form of message-passing, which does not count.
- **Ambiguity:**
  - Trump says "we're talking to Iran" without a date or venue. This does not count.
  - Iran describes a mediator's shuttle as "indirect talks" with no US delegation present. This does not count; check that both delegations are in the same venue.

## Sources
- https://www.pbs.org/newshour/world/delegations-meet-in-iran-with-the-middle-east-on-edge-over-potential-for-renewed-fighting
- https://iranintl.com/en/202610260367
- https://www.timeslive.co.za/news/world/2026-10-20-iran-tells-pakistan-no-talks-with-the-us-until-demands-met/ (not re-opened)
- https://www.timesofisrael.com/liveblog-october-22-2026/ (carried over)
- https://www.aljazeera.com/news/2026/10/26/irans-anti-negotiation-hardliners-turn-against-president-pezeshkian (from sweep)
- https://www.theguardian.com/world/2026/oct/26/saudi-pakistani-turkish-delegation-iran-avert-flare-up-conflict-us (from sweep, not re-opened)
- data/dossiers/2026-10-28/us-iran-deal-announced.md, us-iran-strike-27.md
