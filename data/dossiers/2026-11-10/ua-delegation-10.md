# ua-delegation-10
- **Claim:** Ukraine's delegation for the Abu Dhabi talks with the US and Russia arrives in Abu Dhabi by 23:59 Kyiv time on Monday 9 November 2026.
- **Criterion:** YES if, by 23:59 Kyiv time (UTC+2) on 9 Nov 2026, Ukraine's delegation to the trilateral US-Russia-Ukraine talks (or its head, Rustem Umerov) has arrived in Abu Dhabi or elsewhere in the UAE, as stated on the record between 06:00 Kyiv time on 8 Nov and 23:59 Kyiv time on 9 Nov by President Zelensky, the Office of the President (its head or a named adviser), Umerov or another named member of the delegation, or reported as fact by Ukrinform, Interfax-Ukraine, Suspilne or the Kyiv Independent. A report published later counts only if it makes clear the arrival happened by 23:59 Kyiv time on 9 Nov. Statements that the delegation is preparing, departing or en route do not count, nor does the arrival of US or Russian teams alone. NO if the delegation has not arrived by then, including if the talks are postponed.
- **Deadline:** 2026-11-09T23:59:00+02:00 (= 2026-11-10T01:59 Abu Dhabi); resolver reads 2026-11-10T05:00+01:00
- **Written at (UTC):** 2026-11-07T18:20Z. Read times as stated.
- Replaces the naming claim (ua-delegation-1 to -3): the head is already named on the record (Arakhamia and adviser Lytvyn, 6 Nov, below), so a naming in the window would be a repeat. Arrival on the eve of the talks is the dated, checkable step for Monday. Chosen over "en route" (rarely stated and hard to date) and over a presidential decree on composition (in January it came on the day talks began).

## Schedule
- Talks: Tuesday-Wednesday 10-11 Nov in Abu Dhabi (Kremlin via Moscow Times; Putin confirmed "next Tuesday", Anadolu headline 2026-11-06T18:21Z). Kyiv Independent says talks "are expected to take place on Nov. 10". No published travel schedule for the Ukrainian team.

## Facts
- Kyiv Independent, 6 Nov: Arakhamia: "Umerov is head of negotiations"; delegation "would include himself, Lytvyn, Budanov, Umerov, and Serhii Kyslytsia"; Lytvyn: "No changes so far" — https://kyivindependent.com/umerov-to-lead-ukraine-delegation-in-abu-dhabi-peace-talks-despite-media-confusion-top-official-confirms/ (published 2026-11-06T20:15Z, read 2026-11-07T17:54Z)
- Ukrinform, 6 Nov: adviser Lytvyn said "Budanov would join the delegation but would not lead it" — https://www.ukrinform.net/rubric-polytics/4182234-budanov-to-join-ukrainian-delegation-in-abu-dhabi-but-not-lead-it-presidential-adviser.html (via ua-delegation-3.md)
- Moscow Times, 7 Nov: Russia's delegation "headed again by Kremlin aide Vladimir Medinsky" with Ryabkov, Zhigarlovsky, Galuzin and GRU chief Kostyukov; meeting "scheduled for Tuesday and Wednesday"; "All members of the delegation met Russian President Vladimir Putin on Friday" — https://www.themoscowtimes.com/2026/11/07/russian-diplomats-and-military-officials-to-join-talks-with-us-and-ukraine-kremlin-says-a94199 (published 2026-11-07T14:58+03:00, read 2026-11-07T17:54Z)
- US side: Witkoff said the US would mediate talks in Abu Dhabi (Reuters headline 2026-11-02T23:35Z); Zelensky discussed preparations with Witkoff and Kushner on 4 Nov (Ukrainska Pravda headline 2026-11-04T20:44Z) — Google News RSS "Witkoff Kushner Abu Dhabi travel" (read 2026-11-07T17:59Z)
- Precedent, January round (talks began 23 Jan): Ukrinform 23 Jan 14:06 Kyiv, "Some teams arrive in Abu Dhabi for negotiations, OP says"; "The head of state also approved today the composition of the Ukrainian delegation, headed by NSDC Secretary Rustem Umerov" — https://www.ukrinform.net/rubric-polytics/4083511-some-teams-arrive-in-abu-dhabi-for-negotiations-op-says.html (published 2026-01-23T14:06+02:00, read 2026-11-07T17:55Z)
- Precedent, February round (talks began 4 Feb): "On Wednesday, February 4, the Ukrainian delegation arrived in Abu Dhabi, where trilateral talks with the United States and Russia are planned. This was reported by UNN with reference to 'Suspilne'"; the Russian plane had landed earlier — https://unn.ua/en/news/ukrainian-delegation-arrived-in-abu-dhabi-for-talks-with-the-us-and-russia-first-details (published 2026-02-04T11:08+02:00, read 2026-11-07T17:55Z)
- Russia struck Kyiv's Northern Bridge and energy sites overnight to 7 Nov; Zelensky warned of a Russian strike plan (Kyiv Independent front page, read 2026-11-07T17:54Z). EU leaders discuss representation at peace talks on 13 Nov (Kyiv Independent article above).

## Base rate
- Class unscheduled-announcement-within-one-day (pipeline/reference-classes.json): own record 5 yes, 48 no; not a close fit (this is travel before a scheduled round).
- Precedents for arrival reported before the first day of talks: 0 of 2 (January and February 2026 rounds: arrival reported on the day talks began). Own series of naming claims: ua-delegation-1 NO; -2 and -3 open.

## Schedule slip
- negotiation-round 0.069 (`node scripts/refdata/slip.mjs negotiation-round`, 2026-11-07T17:58Z): if the round slips, the claim is NO.

## Risks
- Same-day arrival on 10 Nov (as in both 2026 precedents) gives NO even if the talks go ahead.
- Arrival may happen late on 9 Nov but be reported only on 10 Nov without a time; the resolver then needs a time stamp.
- Security: delegations sometimes travel unannounced; a video or Suspilne report without official confirmation still counts if Suspilne reports it as fact.
- A postponement after Russian strikes or a US scheduling change would make it NO.

## Sources
- https://kyivindependent.com/umerov-to-lead-ukraine-delegation-in-abu-dhabi-peace-talks-despite-media-confusion-top-official-confirms/
- https://kyivindependent.com/ (front page)
- https://www.themoscowtimes.com/2026/11/07/russian-diplomats-and-military-officials-to-join-talks-with-us-and-ukraine-kremlin-says-a94199
- https://www.ukrinform.net/rubric-polytics/4083511-some-teams-arrive-in-abu-dhabi-for-negotiations-op-says.html
- https://unn.ua/en/news/ukrainian-delegation-arrived-in-abu-dhabi-for-talks-with-the-us-and-russia-first-details
- https://censor.net/en/news/3598845/ukrainian-delegation-arrives-in-abu-dhabi-have-negotiations-begun (403, unreachable)
- https://en.interfax.com.ua/news/general/ (404)
- https://news.google.com/rss/search?q=Abu%20Dhabi%20talks%20Ukraine%20delegation&hl=en-US&gl=US&ceid=US:en
- https://news.google.com/rss/search?q=Witkoff%20Kushner%20Abu%20Dhabi%20travel&hl=en-US&gl=US&ceid=US:en
- WebSearch: Umerov "delegation has arrived" Abu Dhabi talks (2026-11-07T17:55Z)
- data/dossiers/2026-11-09/ua-delegation-3.md
