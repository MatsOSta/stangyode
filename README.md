# Stangyode

Stangyode is Mats O. Stangjordet's main public website and professional calling card. It showcases technical work and public proof, with the main site in scope by default. Public subsites may be added explicitly later.

The site is bilingual in English and Japanese. Both languages are maintained as feature- and content-complete peers.

## Project status

This repository is the canonical source for the Stangyode website. The current migration preserves the existing website implementation and behavior; redesign and broader content review are separate future projects.

The project is governed by Melancholy. Old Melancholy Inc / ai-company control-plane infrastructure, credentials, workflows, and historical coordination records are not part of this repository.

Mats is the owner and final approver. Changes use an assigned feature branch, pushed branch, pull request, review, approval, and merge. The `master` branch is the canonical source branch.

## Project structure

- `public/index.html` — page structure and translatable element bindings
- `public/styles.css` — responsive layout, visual system, and language-specific typography
- `public/translations.js` — complete English and Japanese copy
- `public/app.js` — language switching, menu behavior, reveal effects, and footer year
- `server.mjs` — dependency-free local static server

## Local development

The site has no runtime dependencies and requires a recent Node.js version.

```sh
npm start
```

Open `http://127.0.0.1:4173`.

Run JavaScript syntax checks with:

```sh
npm run check
```

## Language support

The `EN / 日本語` control changes all page copy, metadata, and relevant accessibility labels. The selected locale is stored in `localStorage` under `stangyode-language` and restored on the next visit.

When adding or removing translated content:

1. Bind the element with `data-i18n="key"` or `data-i18n-aria-label="key"`.
2. Add the same key to both `en` and `ja` in `public/translations.js`.
3. Run `npm run check` and verify both language states before publication.

## Publication

The public site remains on GitHub Pages at `https://stangyode.com/`. The existing publication branch and custom-domain configuration are retained as the deployment target.

Publication is manual and separately approved for now. A reviewed deployment workflow may automate publication in a later project. Do not publish, change the custom domain, or create deployment automation without explicit approval.

## Migration boundary

The current website source was imported as the migration baseline. The previous source directory is not a second active source and may be removed only after the canonical repository has been verified and that deletion is explicitly authorized.

The first migration acceptance checks are:

- JavaScript syntax checks
- Local server smoke test
- Responsive browser review
- English interaction checks
- Japanese interaction checks
