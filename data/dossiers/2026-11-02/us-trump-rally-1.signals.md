# us-trump-rally-1 — signals

Read 2026-10-30T18:08–18:10Z with `node scripts/markets.mjs search`. Queries: "Trump rally", "Trump Kansas", "Trump Iowa", "Trump say during rally".

No market directly asks whether Trump holds an in-person rally on 1 Nov.

Indirect:
- **Kalshi "What will Donald Trump say during midterm rally in Dubuque, Iowa originally scheduled for November 1, 2026?"** https://kalshi.com/markets/kxtrumpmention — a series of word-mention markets, still open (close 2026-11-15T15:00Z), with high-volume strikes trading at 0.93, 0.85, 0.77 etc. (top strike vol ~$85k; liquidity not reported). The title wording "originally scheduled for" signals that Kalshi treats the event as possibly moved; mention markets usually resolve No or are voided if the event does not take place (rules not read). The high prices on common words are a weak signal that traders expect the Dubuque event to happen. MATCH: no (word mentions, not attendance).
- **Polymarket "Which states will Donald Trump visit in 2026?"** https://polymarket.com/event/which-states-will-donald-trump-visit-in-2026 — only Oregon surfaced (0.10, vol $20k, liq $0.5k). Kansas/Iowa legs not returned by search. MATCH: no.

No Metaculus question. No published model found.
