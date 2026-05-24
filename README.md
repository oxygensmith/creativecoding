# CreativeCoding

Just a place where we drop our CreativeCoding explorations, which are initially guided by Bruno Imbrezi's courses on Domestika. In place of canvas-sketch and canvas-sketch-utils we use our own architecture to integrate examples with Hugo (which runs its own local server). However, we use other useful dependencies like TweakPane to set up quick GUIs and bind animation object properties to them.

# CreativeCoding uses our Hugo Markdown Template

CreativeCoding uses our starting point for Hugo static sites driven by markdown content files. Includes a full SCSS design system, a front-matter-based homepage section system, a pages section, and a blog.

---

## How this stack works

**Hugo** is a static site generator. It builds HTML files from templates and markdown content, and serves nothing at runtime — the output is just files.

**Content** lives in the `content/` directory as `.md` files with YAML front matter. The homepage (`content/_index.md`) uses a `sections` array in front matter to drive a structured layout without a CMS. All other pages are standard markdown files.

**Assets** (SCSS and JS) are processed by Hugo Pipes at build time — no separate bundler step needed.

---

## Prerequisites

- **Hugo** installed — `brew install hugo` (check with `hugo version`)
- **Node.js** — v18 or later

---

## Spinning up a new project

### 1. Copy this template folder to your new project location

```bash
cp -r /path/to/template-hugo /path/to/my-new-project
cd /path/to/my-new-project
```

---

### 2. Update `hugo.toml`

```toml
baseURL = "https://your-live-domain.com/"
title = "Your Site Title"

[params]
  description = "Your site description for search engines and social sharing."
  author = "Your Name or Organization"
  gaID = ""                    # Google Analytics 4 measurement ID — leave blank to disable
  ogImage = "https://your-live-domain.com/img/social/og-image.png"
```

`baseURL` is critical — Hugo uses it to generate all absolute URLs (canonical tags, sitemaps, OG tags). During local development it's overridden automatically, but for production builds it must be your real domain.

`gaID` is optional. If you leave it blank, the GA4 script block won't render at all.

---

### 3. Update `package.json`

```json
{
  "name": "my-project-name",
  "description": "Client or project description."
}
```

---

### 4. Update `static/robots.txt`

```
Sitemap: https://your-live-domain.com/sitemap.xml
```

Hugo generates a `sitemap.xml` automatically. Update the domain to match your live site.

---

### 5. Add project fonts (if applicable)

Place `.woff2` font files in `static/fonts/`. Then open `assets/scss/styles.scss` and uncomment and fill in the `@font-face` blocks.

---

### 6. Install dependencies

```bash
npm install
```

This installs GSAP, Font Awesome, and normalize. Hugo Pipes processes these from `node_modules` when it builds `assets/js/scripts.js`.

---

### 7. Update the homepage sections

Edit `content/_index.md`. The `sections` array drives the homepage layout — each item maps to a partial in `layouts/partials/sections/`.

```yaml
sections:
  - type: hero
    heading: "Your Headline"
    body: "Supporting copy."
    cta:
      label: "Get in touch"
      url: "/contact"
  - type: text
    heading: "About"
    body: "Body text."
```

Available section types:

| type   | Partial                               | Fields                                    |
| ------ | ------------------------------------- | ----------------------------------------- |
| `hero` | `layouts/partials/sections/hero.html` | `heading`, `body`, `cta.label`, `cta.url` |
| `text` | `layouts/partials/sections/text.html` | `heading`, `body`                         |

Add new section types by creating a new partial and adding a condition to `layouts/index.html`.

---

### 8. Start the dev server

```bash
npm run dev
# Hugo dev server at http://localhost:1313 (drafts included)
```

---

## Day-to-day development workflow

```bash
npm run dev        # Hugo dev server with live reload and drafts enabled
npm run preview    # Hugo server without drafts (mirrors production content)
npm run clean      # Remove public/ and resources/_gen/
```

---

## Building for production

```bash
npm run build
```

Output goes to `public/`. If deploying to Netlify, `netlify.toml` already configures this command and the `public/` publish directory.

---

## Adding content

### New page

```bash
hugo new pages/my-page.md
```

Edit the file in `content/pages/my-page.md`. It will be served at `/pages/my-page/`.

To serve a page at the root (e.g. `/about/`), add `slug: "about"` to the front matter and place the file at `content/about.md`.

### New blog post

```bash
hugo new posts/my-post-title.md
```

Edit the file in `content/posts/my-post-title.md`. Set `draft: false` when ready to publish.

---

## Project structure overview

```
template-hugo/
├── assets/
│   ├── js/
│   │   └── scripts.js          # JS entry point — processed by Hugo Pipes
│   └── scss/
│       ├── styles.scss          # SCSS entry point
│       ├── _normalize.scss
│       ├── variables/           # Design tokens (colors, spacing, type, etc.)
│       ├── mixins/              # Utility class generators and helpers
│       ├── components/          # Reusable UI components (navbar, forms, modals)
│       └── sections/            # Page-section styles — add per project
├── content/
│   ├── _index.md               # Homepage front matter and sections array
│   ├── pages/                  # Generic pages (About, Services, Contact, etc.)
│   └── posts/                  # Blog posts
├── layouts/
│   ├── _default/               # baseof.html, single.html, list.html
│   ├── index.html              # Homepage — loops over front matter sections
│   └── partials/
│       ├── head.html
│       ├── nav.html
│       ├── footer.html
│       └── sections/
│           ├── hero.html
│           └── text.html
├── static/                     # Files served as-is (fonts, images, robots.txt)
├── archetypes/
│   ├── default.md              # Default archetype for hugo new
│   └── posts.md                # Archetype for blog posts (adds description field)
├── hugo.toml                   # Hugo config — update this first
├── package.json                # Node deps and scripts
└── netlify.toml                # Netlify build config
```

---

## Adding a new homepage section type

1. Create a partial in `layouts/partials/sections/my-section.html`
2. Add a condition for the new `type` in `layouts/index.html`
3. Add a corresponding SCSS file in `assets/scss/sections/` and import it in `sections/_index.scss`
4. Use the new type in `content/_index.md`

---

## Sketch pages

### Keyboard shortcuts

Every sketch page has keyboard navigation active via `static/js/keyboard-nav.js`:

| Key | Action |
|---|---|
| `↵ Return` | Regenerate sketch (re-runs `canvasSketch`) |
| `← / →` | Navigate to previous / next sketch |
| `Ctrl+/` | Save current canvas as PNG |
| `Ctrl+Shift+/` | Save current canvas as WebP |
| `Ctrl+P` | Save 4× print-resolution PNG (offscreen re-render) |

Press the ⓘ button in the post footer nav to see a shortcut reference at any time.

Exported files are named by page slug + session counter (e.g. `grid-one-001.png`) and go to the browser's default download folder. Move them to `static/screenshots/` to use them in the site.

---

### Post front matter

```yaml
title: "Grid I"
date: 2026-01-07
draft: false
description: "Short description shown on the post and in cards."
screenshot: "grid-one-001.png"   # filename in static/screenshots/
sketches: ["grid-one"]           # JS sketch file(s) in static/js/sketches/
bordered: true                   # adds a visible border around the canvas
tweakpane: true                  # loads TweakPane v3 CDN for parameter GUIs
tags: ["noise", "grid", "featured"]
categories: ["generative"]
```

- **`screenshot`** — links a saved export to the post. Enables card display on the homepage and examples list.
- **`featured`** tag — surfaces the post in the homepage card grid (requires `screenshot` to be set).

---

### Card layouts

Posts appear as cards on the homepage and examples list. Two formats are available, set via `cardLayout` in a section's `_index.md`:

| `cardLayout` | Appearance |
|---|---|
| `"grid"` (default) | Square image top, 2–3 column grid |
| `"horizontal"` | Title + description left, square thumbnail right |

```yaml
# content/_index.md or content/posts/_index.md
cardLayout: "horizontal"
```

Current defaults: homepage uses `grid`, examples list uses `horizontal`.
