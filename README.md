# PWA — From Zero to Hero

A bilingual (EN/TH), standalone, beginner→advanced course on **Progressive Web Apps** — from first principles (web app manifest, service workers, caching, offline) through push and advanced capabilities, plus dedicated framework sessions for **React, Astro, and Svelte**. Examples run in **StackBlitz** (real service workers + manifests, installable), diagrams are **Mermaid**, and there's a **read-mode** toggle.

## Tech Stack

| Layer | Technology |
| ----- | ---------- |
| Site framework | [Astro 6](https://astro.build) + [Starlight 0.40](https://starlight.astro.build) |
| UI islands | [Preact](https://preactjs.com) (via `@astrojs/preact`) |
| Hands-on | **`<PwaPlayground>`** opens a runnable multi-file PWA in [StackBlitz](https://stackblitz.com) (WebContainers run a real service worker + manifest); lessons also show copy-able snippets. |
| Diagrams | Client-side, theme-aware **Mermaid** (`<Mermaid>` + `public/enhance.js`) |
| Reading | **Read-mode** toggle (hides sidebar/TOC, widens content) via `public/enhance.js` |
| Unit tests | [Vitest](https://vitest.dev) + `@testing-library/preact` |
| i18n | Starlight built-in, `defaultLocale: 'en'`, locales: `en` + `th` |

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview the production build locally
npm test           # Run Vitest unit tests
```

## Content Structure

```
src/content/docs/
  en/                          # English — served at /en/...
    intro-what-is-pwa/
    web-app-manifest/
    service-workers/
    caching-strategies/
    offline-app-shell/
    push-advanced/
    pwa-with-react/
    pwa-with-astro/
    pwa-with-svelte/
    index.mdx                  # EN landing (splash)
  th/                          # Thai — served at /th/...
    (same module directories)
    index.mdx
```

### The 9 Modules

| Directory | Module |
| --------- | ------ |
| `intro-what-is-pwa` | Intro: What is a PWA? |
| `web-app-manifest` | Web App Manifest |
| `service-workers` | Service Workers |
| `caching-strategies` | Caching Strategies |
| `offline-app-shell` | Offline & App Shell |
| `push-advanced` | Push & Advanced |
| `pwa-with-react` | PWA with React (`vite-plugin-pwa`) |
| `pwa-with-astro` | PWA with Astro (`@vite-pwa/astro`) |
| `pwa-with-svelte` | PWA with Svelte (`@vite-pwa/sveltekit`) |

### Components & Lesson Template

- **`PwaPlayground.tsx`** `{ files, openFile? }` — opens a multi-file PWA project in StackBlitz; `pwa-project.ts` `buildPwaProject(files)` merges the lesson's `files` onto a static `serve` base. Author runnable demos as a hoisted `export const proj = { 'index.html': …, 'sw.js': …, 'manifest.webmanifest': … }` then `<PwaPlayground files={proj} />`.
- **`Mermaid.astro`** `{ code, title }` — diagrams (hoisted `export const ...Diagram`).
- **`Callout.astro`** `{ title }`, **`Quiz.tsx`** `{ id, questions }` (0-based `answer`, field `q`), **`ProgressTracker.tsx`** `{ id }`.

Lesson order: frontmatter → imports → concept intro → prose (fenced code + `<Mermaid>`) → `export const proj` + `<PwaPlayground>` (where runnable) → `<Callout>` → `<Quiz>` → `<ProgressTracker>` (last). IDs follow `<module>/<slug>`.

> **⚠️ Authoring notes:**
> - **In `export const` snippets escape `${`→`\${`** (SW code/template literals) and double-escape `\\n`. Fenced blocks are literal.
> - **Never a bare `{...}`/`${...}` in prose** — keep manifest JSON, JS objects, and JSX in code spans / fenced blocks / `export const`. **Diagrams are Mermaid, not ASCII.**
> - **Internal links include the base path**, e.g. `/pwa-from-zero-to-hero/en/service-workers/`.
> - Use **current PWA APIs + plugins** (`vite-plugin-pwa`, `@vite-pwa/astro`, `@vite-pwa/sveltekit`).

## Deployment

Fully static → `dist/`. Base path in `astro.config.mjs`: `site: 'https://avetavos.github.io'`, `base: '/pwa-from-zero-to-hero'`.

Deployed to GitHub Pages via **branch-source** (`gh-pages`): build `dist/`, add `.nojekyll`, push `dist/` to `gh-pages`, set **Settings → Pages → Source: Deploy from a branch → `gh-pages` / `/`**, then **request a Pages build** (`gh api -X POST repos/<owner>/<repo>/pages/builds`) — flipping the source alone does not trigger one. If you change `base`, update the base-prefixed links in `src/content/docs/{en,th}/index.mdx`.
