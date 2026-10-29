# us-iran-talks-31
- **Claim:** By 23:59 US Eastern time on Saturday 31 October 2026, the US, Iranian, Qatari or Turkish government officially announces a calendar date for a round of US–Iran negotiations, or a named senior Iranian official publicly states that Iran accepts the US proposal, conveyed in Vice President Vance's letter, to hold talks.
- **Criterion:** The window runs from 2026-10-30T00:00:00-04:00 to 2026-10-31T23:59:59-04:00. YES if, within it, either of these is made on the record:
  - **(a)** The US government (President Trump, the White House, the State Department, Vice President Vance, envoy Witkoff), the Iranian government (Supreme Leader's office, President Pezeshkian, FM Araghchi, MFA spokesman Baghaei, the Supreme National Security Council or its secretary Rezaei, Speaker Ghalibaf), or the Qatari or Turkish government (foreign ministry, prime minister, president, emir) announces a calendar date for a US–Iran negotiating round, direct or indirect with both delegations in the same city.
  - **(b)** One of the Iranian officials listed in (a), speaking by name, states that Iran accepts the US proposal to hold talks or agrees to a meeting with a US delegation.
  NOT counted: statements citing unnamed officials or sources; "talks could happen next week" or "soon" without a date; Iran saying it is "reviewing" the letter or "gives diplomacy a chance"; an Iranian rejection; written message exchanges; Hormuz-plan statements that do not accept talks. NO if neither (a) nor (b) happens inside the window. A statement made in the window and reported after it counts.
- **Event window:** 2026-10-30T00:00:00-04:00 to 2026-10-31T23:59:59-04:00 (America/New_York; 07:30 Tehran 30 Oct to 07:29 Tehran 1 Nov)
- **Written at:** 2026-10-29T18:15:00Z

Why this claim instead of the suggested "a round of talks is held": the only reported plan puts a meeting "as soon as next week" (after 31 Oct), with no date set. A round held by Saturday is close to impossible. The open question for the weekend is whether the Vance letter turns into a date or a public Iranian yes.

## Schedule
- Nothing is scheduled. No date or venue has been set for talks.
  - Vance's letter "proposed a meeting soon, with Vance heading the US delegation"; "talks could happen as soon as next week"; Qatar or Türkiye named as possible venues; "No date has been set" — Al Jazeera https://www.aljazeera.com/news/2026/10/29/what-we-know-of-vances-letter-to-rezaei-as-trump-warns-gulf-to-prepare (published 2026-10-29 11:41, updated 12:21; read 2026-10-29T17:50Z)
  - Rezaei "is expected to formally respond on Thursday", per the New York Times as cited by Al Jazeera (same URL). Thursday 29 Oct is before the window opens. Whether a response, if any, was made public on 29 Oct is not known at writing.
- Friday 30 Oct is Iran's weekend. The Iranian MFA weekly briefing is normally on Mondays (next 2 Nov, outside the window).
- US midterm elections are Tue 3 Nov.

## Facts
- Vance sent a letter to Iran's Supreme National Security Council secretary Mohsen Rezaei; Qatari mediators delivered it "on Sunday" (25 Oct by the calendar). WSJ: it aimed to see whether differences could be narrowed enough to avoid new US strikes, a "framework for negotiations" rather than peace terms. NYT: Vance called for direct talks and said the nuclear programme must be on the table from the outset. — Al Jazeera, Vance letter (above) "framework for negotiations"
- Iran "has not publicly commented on the letter"; NYT reported it was "received well by Iran's leaders"; Araghchi on Wednesday 28 Oct said Iran "continues to give diplomacy a chance". — Al Jazeera, Vance letter (above)
- WSJ: Trump warned Gulf allies to prepare for a brief, high-intensity campaign after next week's midterms; Trump said the US may "do another little Epic Fury". — Al Jazeera, Vance letter (above)
- Trump says he approved Vance's request to contact Iran over medical supplies but denies directing him to restart peace talks; Araghchi says Tehran remains "in close and ongoing contact" with mediators on implementing the seven-day Hormuz plan. — Al Jazeera live blog https://www.aljazeera.com/news/liveblog/2026/10/29/iran-war-live-tehran-presses-7-day-hormuz-plan-trump-denies-peace-talks (29 Oct, last updated 07:02; read 2026-10-29T17:42Z) "in close and ongoing contact"
- Pakistani, Saudi, Qatari and Turkish diplomats held talks with Iranian officials in Tehran on Monday 26 Oct. — Al Jazeera, Vance letter (above)
- WSJ (via Seznam Zprávy): Trump and Netanyahu weigh a new large attack, "nejspíše po amerických kongresových volbách, které jsou 3. listopadu" — https://www.seznamzpravy.cz/clanek/zahranicni-netanjahu-ve-volbach-ztratil-ale-mene-nez-se-cekalo-uder-na-iran-se-blizi-318975 (c. 28 Oct; carried over from desk sweep w/running.json, not re-read)
- Carried over from us-iran-response-30 (28 Oct, not re-read tonight): Munir carried a US proposal to Tehran on 26–27 Oct and Iran's formal response had not been made public (House of Saud, 27–28 Oct); Iran publicly confirmed an answer to a US proposal on 4 Oct (Araghchi, Daily Beirut); US–Iran diplomacy reported "effectively paused until after the 3 November midterms" (The National, 8 Oct, via House of Saud).
- Last confirmed rounds: Islamabad 11–12 April (Vance-led, failed); Switzerland meeting 21 June (photo caption, Al Jazeera Vance letter article); Bürgenstock technical talks late June — earlier dossier and Wikipedia (read 2026-10-28).
- Watchlist question us-iran-talks-resume (data/watchlist.json) needs a same-venue round confirmed by both Iran's MFA and the US government, by 31 Dec. This claim is an announcement/acceptance, not a meeting held, so it does not match the board criterion; a YES here would be a strong lead indicator for it.

## Base rate
- Class unscheduled-announcement-within-one-day (pipeline/reference-classes.json): base rate null, own record 1 yes / 17 no. Loose fit: this window is two days and has two routes.
- Class mediated-deal-announced-short-window: 0.30, n small, own record 0/1 — a full agreement, a stricter event; loose fit.
- Own precedent: yesterday's similar claim (us-iran-response-30, answer or date by 30 Oct) is unresolved at writing.

## Schedule slip
- Slip class: none (nothing is scheduled). If a date is announced, the negotiation-round slip rate is 0.138 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`, run 2026-10-29T18:05Z); not relevant to whether a date is announced.

## Risks
- **Toward YES:** the letter proposes concrete talks led by Vance with named venues; NYT says it was well received; Rezaei was expected to reply on 29 Oct, and Qatar, a mediator that often announces dates, holds the channel; Washington may want a diplomatic headline before 3 Nov.
- **Toward NO:** Trump publicly denies peace talks; reported US planning for strikes after the midterms; Tehran usually replies through mediators and unnamed sources; Iran's weekend on Friday; Iran's precondition (sanctions relief, Hormuz conditions) and the US demand that the nuclear file be on the table from the start.
- **Timing:** if Rezaei publicly accepted on Thursday 29 Oct (before the window), route (b) needs a repeat on-record acceptance on 30–31 Oct, and a date announcement becomes the main route. Morning should check 29 Oct statements.
- **Ambiguity:** "Iran is ready for talks under conditions" — counts under (b) only if presented as accepting the proposal/meeting; a resolver must judge. A US statement "we will meet next week" without a calendar date does not count.

## Sources
- https://www.aljazeera.com/news/2026/10/29/what-we-know-of-vances-letter-to-rezaei-as-trump-warns-gulf-to-prepare
- https://www.aljazeera.com/news/liveblog/2026/10/29/iran-war-live-tehran-presses-7-day-hormuz-plan-trump-denies-peace-talks
- https://www.aljazeera.com/news-sitemap.xml (read 2026-10-29T17:55Z)
- https://www.seznamzpravy.cz/clanek/zahranicni-netanjahu-ve-volbach-ztratil-ale-mene-nez-se-cekalo-uder-na-iran-se-blizi-318975 (via sweep)
- /home/claude/overmorrow/data/dossiers/2026-10-31/us-iran-response-30.md (House of Saud, Daily Beirut, CBS, Wikipedia carried over)
- /home/claude/overmorrow/data/watchlist.json (us-iran-talks-resume)
- Searches returned only older (April–June) items on Vance–Iran talks; nothing newer than the Al Jazeera article found.
