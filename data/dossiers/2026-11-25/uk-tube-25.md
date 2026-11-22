# uk-tube-25
- **Claim:** After Tuesday's talks at Acas, the RMT calls off or suspends the London Underground drivers' strike due from noon on Thursday 26 November 2026, by 23:59 London time on Tuesday 24 November.
- **Criterion:** YES if, between 19:00 on Sun 22 Nov and 23:59 on Tue 24 Nov 2026 (Europe/London), the RMT announces that the 24-hour Tube drivers' strike due to start at noon on Thu 26 Nov is called off, suspended or postponed, as shown by an RMT statement (rmt.org.uk), a TfL statement, or BBC / Evening Standard / PA reporting. Suspending only later dates (December–February) while the 26 Nov strike stands does not count. NO if no such announcement is made in the window — including when talks end without agreement, are adjourned to Wednesday, or the strike is called off only on Wed 25 or Thu 26 Nov. A report published after 23:59 about an announcement made in the window counts.
- **Event window:** 2026-11-22T19:00+00:00 – 2026-11-24T23:59+00:00 (Europe/London); in practice the outcome of the Acas talks on Tue 24 Nov.
- **Evidence expected:** RMT/TfL statements on Tuesday afternoon or evening; BBC London live copy. evidence_at 2026-11-25T08:00+00:00.
- **Deadline (resolves by):** 2026-11-26T05:00:00+01:00
- **Written at (UTC):** 2026-11-22T18:25Z

## Schedule
- "Representatives from TfL and the union are due to meet at the conciliation service Acas on Tuesday in a bid to break the deadlock… Unless an agreement is reached at Tuesday's talks, the next strike is due to begin at noon on Thursday." — BBC https://www.bbc.co.uk/news/articles/c6wy4nq55gv4o (published 2026-11-22T12:43Z, read 2026-11-22T17:54:15Z).
- Strike dates (24-hour, from noon): Thu 26 Nov, Thu 17 Dec, Sat 19 Dec, Mon 4 Jan, Wed 6 Jan, Wed 17 Feb, Tue 23 Feb, Thu 25 Feb — BBC explainer https://www.bbc.co.uk/news/articles/c0ljyd03n88o (updated 2026-11-17T19:01Z, read 2026-11-22T17:54:24Z).

## Facts
- **Dispute:** TfL's voluntary four-day week for drivers (starting on the Bakerloo line); RMT says it means longer, less predictable shifts and lost protections; Aslef backs it. Dempsey (RMT): "London Underground is attempting to dress up a wholesale attack on drivers' working conditions as a voluntary four-day week." TfL's Nick Dent: discussions "had led to changes to the original proposal" — BBC 22 Nov (above).
- **RMT has suspended strikes before:** "The RMT said it had suspended strikes three times already to allow for negotiations… The RMT suspended planned strikes in March and May this year after progress in talks."; Dempsey: talks "going round in circles", blamed "a dishonest negotiating approach from TfL" — BBC https://www.bbc.co.uk/news/articles/ckz6qw2y3pypo (published 2026-11-16T06:17Z, read 2026-11-22T17:54:24Z).
- **Strikes that went ahead:** "Members of the Rail, Maritime and Transport (RMT) union previously staged four days of strike action across April and June this year." Only RMT drivers (about half of all drivers) would walk out — BBC explainer (above).
- **Member positions:** RMT referendum April 2025: 1,219 against the proposals, 126 in favour; Aslef members backed them by 70% — BBC 16 Nov (above).
- **Political pressure:** MPs urged the mayor to intervene; a mayoral spokesperson said he had urged both sides to keep talking — BBC 16 Nov (above).

## Base rate
- Own count from BBC (above), this dispute in 2026: strike rounds suspended after talks 3 (RMT's figure; March and May named) vs rounds that went ahead 2 (April, June). Timing of past suspensions relative to talks not found.
- Related class: slip_class `strike-or-protest` measures whether a scheduled strike happens: `node scripts/refdata/slip.mjs strike-or-protest` (run 2026-11-22T17:58Z) → prior 0.15, own 0/14, rate 0.045 [estimate].

## Schedule slip
- The Acas meeting: slip_class `negotiation-round` → prior 0.15, own 4/20, rate 0.188 [estimate] (`node scripts/refdata/slip.mjs negotiation-round`, run 2026-11-22T17:58Z). If talks are moved to Wednesday, a call-off on Wednesday is NO.

## Risks
- Talks end without agreement and the strike stands (RMT rhetoric hard: "nothing voluntary", "going round in circles").
- Talks continue into Wednesday and a suspension comes on 25 Nov → NO.
- RMT suspends only to put a revised offer to members — counts YES if the 26 Nov strike is suspended.

## Sources
- https://www.bbc.co.uk/news/articles/c6wy4nq55gv4o
- https://www.bbc.co.uk/news/articles/c0ljyd03n88o
- https://www.bbc.co.uk/news/articles/ckz6qw2y3pypo
- Google News feed "Tube strike RMT Acas" (read 2026-11-22T17:54Z; no further items surfaced).
