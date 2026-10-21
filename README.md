# The Overmorrow

*Tomorrow happens. Overmorrow reports it. You read it today.*

A newspaper written two days ahead, in English (default) and Czech (/cs/). Each edition reports the scheduled and expected events of the next day as if they had happened, and attaches a probability to every forecast. After the events, each forecast is checked and scored, and the result is stamped onto the archived edition.

- **How it works:** [METHODOLOGY.md](METHODOLOGY.md)
- **Producing an edition:** [pipeline/EDITOR.md](pipeline/EDITOR.md)
- **Scoring an edition:** [pipeline/RESOLVER.md](pipeline/RESOLVER.md)

## Repository layout

| Path | What it holds |
|---|---|
| `data/editions/YYYY-MM-DD.json` | One file per edition, named by its date. Never edited after publication. |
| `data/resolutions/YYYY-MM-DD.json` | Results for that edition's claims, added as they fall due. Append-only. |
| `data/postmortems.md` | Reviews of confident misses. |
| `METHODOLOGY.cs.md` | Czech version of the methodology, shown at /cs/method/. |
| `pipeline/` | Source registry, reference classes, settings and manuals. |
| `scripts/validate.mjs` | Checks all data against the rules. The Netlify build fails on any error. |
| `scripts/build.mjs` | Generates the site into `dist/`. No dependencies beyond Node 20. |
| `site/style.css` | The stylesheet. |

## Local build

```
node scripts/validate.mjs
node scripts/build.mjs
npx serve dist
```

## Netlify

Connect the repository; `netlify.toml` sets the build command and the `dist` publish directory. Deploy previews for pull requests are used to review each edition before it is merged.
