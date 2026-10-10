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

Refresh the credential-free GitHub discovery sensor before a Frontier Radar editorial run:

```sh
npm run fetch:github-discovery
```

The fetch makes at most eight GitHub repository-search requests with five results per query, sends no authorization header, and replaces `atlas/data/github-discovery.json` with normalized, sorted output. Its `lastRun` audit records the attempt, completion, query counts, and public API rate-limit state. A failed or rate-limited run exits non-zero, clears signals, and writes an explicit failed audit instead of retaining results that could look current. The daily Radar editor must run this command after syncing `origin/master` and before evaluating or marking the `github-public` sensor. It may mark that sensor `checked` only when `lastRun.status` is `success` and `completedAt` is no later than the Radar audit `asOf`; otherwise it must mark the sensor `failed` with a bilingual reason.

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
