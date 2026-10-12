# Stangyode

Stangyode is Mats O. Stangjordet's public website and professional calling card. The site is bilingual in English and Japanese and includes the AI Engineering Atlas.

This repository is the canonical source for the website.

## Project structure

- `public/index.html` — main page structure (loads `translations.js` and `app.js`)
- `public/styles.css` — responsive layout and visual system
- `public/translations.js` — English and Japanese homepage copy
- `public/app.js` — language switching, metadata, and page interactions
- `scripts/validate-i18n.mjs` — EN/JA key lockstep check for the homepage
- `public/ai-engineering/` — generated AI Engineering Atlas site
- `atlas/data/` — Atlas and Frontier Radar source data
- `atlas/scripts/` — Atlas build and validation scripts
- `atlas/artifacts/` — generated supporting artifacts
- `server.mjs` — dependency-free local static server

## Local development

The site has no runtime dependencies and requires a recent Node.js version.

```sh
npm start
```

Open `http://127.0.0.1:4173`.

Run the project checks with:

```sh
npm run check
```

Rebuild Atlas output when its source data changes:

```sh
npm run build:atlas
npm run build:frontier-radar
```

## Frontier discovery pipeline

The pipeline deliberately separates attention discovery from evidence evaluation.

### 1. Capture hype broadly

```sh
npm run fetch:hype-discovery
```

This credential-free scrape reads the configured observer feeds in `atlas/data/hype-discovery.json` and runs three broad, taxonomy-independent GitHub searches over newly created repositories. It preserves source mentions as an attention log, extracts linked GitHub repositories, records repository snapshots, and ranks repositories by independent-source mentions, measured star growth, and age-normalized stars. A mention means only that someone paid attention to a topic; it is not evidence that a claim is true or that Stangyode should adopt it. Partial source failures remain explicit while successful observations are retained.

The editor reviews this hype inbox for unfamiliar language and projects, then creates or updates entries in `discovery-candidates.json`. Discovery is allowed to expand the taxonomy rather than requiring a pre-existing Radar target.

### 2. Investigate and update known candidates

```sh
npm run fetch:github-updates
```

This targeted GitHub update fetch uses the fixed candidate and Radar queries in `atlas/data/github-discovery.json`. It makes at most eight repository-search requests with five results per query, sends no authorization header, and replaces the file with normalized, sorted output. The legacy `npm run fetch:github-discovery` command remains as an alias.

Run the targeted fetch after syncing `origin/master` and before a Frontier Radar editorial run. Its `lastRun` audit records the attempt, completion time, query counts, and public API rate limit. A failed or rate-limited request clears signals and writes an explicit failed audit; malformed input fails before replacing the prior file. The editor may mark `github-public` checked only when the targeted fetch succeeded before the Radar audit time.

The editorial stage then verifies primary sources, alternatives, criticism, compatibility, and task evidence before assigning WATCH, PILOT, or DEFER. Hype remains in the inbox even when evaluation is negative.

## Language support

English and Japanese are maintained as feature- and content-complete peers.

The `EN / 日本語` control changes page copy, metadata, and relevant accessibility labels. The selected locale is stored in `localStorage` under `stangyode-language` and restored on the next visit.

When changing translated content:

1. Bind the element with `data-i18n="key"` or `data-i18n-aria-label="key"`.
2. Add the same key to both `en` and `ja` in `public/translations.js`. Do not put copy in an inline script on the homepage.
3. Run `npm run check` (this includes an EN/JA key lockstep check) and verify both language states.

## Development workflow

Work may be done directly by Mats, through ChatGPT, or with local coding agents such as Hermes. The repository is intentionally tool-agnostic: agent profiles, personalities, runtime distributions, orchestration state, machine-specific hooks, and external governance configuration do not belong in this repository.

For normal website changes:

1. Create a focused branch.
2. Make the scoped change.
3. Run `npm run check` and relevant local/browser verification.
4. Open a pull request to `master`.
5. Review and merge.

`master` is the canonical source branch.

## Publication

The public site is hosted at `https://stangyode.com/` using the existing `gh-pages` branch and custom-domain configuration.

Publication is separate from source development. Do not change the custom domain or deployment configuration as part of unrelated website work.

## Repository history

Earlier revisions of this repository included Melancholy/Hermes project-management and agent-runtime configuration. That machinery is no longer part of the active project. Its history remains available through Git and should not be restored as repository-local runtime authority.
