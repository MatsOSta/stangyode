# Stangyode

Source for [stangyode.com](https://stangyode.com), the bilingual company homepage for Mats O. Stangjordet's independent technology practice.

Stangyode focuses on secure cloud infrastructure, cybersecurity, automation, and production-minded AI systems. The site is available in English and Japanese.

## Project structure

- `public/index.html` — page structure and translatable element bindings
- `public/styles.css` — responsive layout, visual system, and language-specific typography
- `public/translations.js` — complete English and Japanese copy
- `public/app.js` — language switching, menu behavior, reveal effects, and footer year
- `server.mjs` — dependency-free local static server

The `master` branch is the source of truth. GitHub Pages serves a flat copy of `public/` from the root of the `gh-pages` branch; `CNAME` on that branch configures `stangyode.com`.

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
3. Run `npm run check` and confirm both language states before deployment.

## Deployment

Publishing is currently manual:

1. Commit and push source changes to `master`.
2. Copy the contents of `public/` to the root of `gh-pages`.
3. Retain the `CNAME` file containing `stangyode.com`.
4. Commit and push `gh-pages`.
5. Confirm the latest GitHub Pages build succeeded and verify the public assets at `https://stangyode.com`.

GitHub Pages manages the TLS certificate and enforces HTTPS for the custom domain.
