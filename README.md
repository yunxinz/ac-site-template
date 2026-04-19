# Animal Crossing Personal Site Template

A cozy, Animal Crossing-themed personal website built with **Astro**, **TailwindCSS**, and **DaisyUI**. Features a warm cream palette, NookPhone-style sidebar navigation, light/dark mode, and charming rounded aesthetics.

## Features

- Animal Crossing visual style — warm colors, rounded shapes, 3D press-down buttons
- Light (Day) and Dark (Night) themes with localStorage persistence
- NookPhone-inspired sidebar with icon navigation
- Theme-aware banner images (light/dark variants)
- Blog, Notes, Projects, CV, and Personal pages
- Markdown/MDX content with KaTeX math support
- GitHub Pages deployment workflow included
- Responsive — mobile drawer sidebar, desktop persistent sidebar

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Setup

```bash
# Clone this repo (or use it as a template on GitHub)
git clone https://github.com/yunxinz/ac-site-template.git
cd ac-site-template

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open `http://localhost:4321` in your browser.

## Configuration

### 1. Site info — `src/config.ts`

```ts
export const SITE_TITLE = "Your Name"; // Used in header, sidebar, page titles
export const AUTHOR_NAME = "Your Name"; // Used in footer copyright
export const AUTHOR_INITIAL = "YN"; // Used in page title prefixes
export const SITE_DESCRIPTION = "Your Name's personal website.";
```

### 2. Social links — `src/components/SideBarFooter.astro`

Update the `href` attributes for GitHub, LinkedIn, WhatsApp, and Instagram links.

### 3. Contact email — `src/components/SideBarMenu.astro`

Update the `mailto:` link in the Contact menu item.

### 4. Profile photo — `public/profile.webp`

Replace with your own photo. The sidebar displays this image.

### 5. Banner images

The top and bottom of each page use theme-aware banners. Provide light and dark variants:

- `public/header_banner_light.png` / `public/header_banner_dark.png` — top banner
- `public/banner_light.png` / `public/banner_dark.png` — bottom banner

### 6. Sidebar icons

Sidebar navigation uses square icons from `public/`. Replace them with your own or keep the included set:

| Page     | Icon file          |
| -------- | ------------------ |
| Home     | `nookmiles.png`    |
| Projects | `brush.png`        |
| CV       | `nookwallet.png`   |
| Blog     | `photos.png`       |
| Personal | `nookcritters.png` |
| Notes    | `drawing.png`      |
| Contact  | `messages.png`     |

Theme toggle uses `leaf_light.png` / `leaf_dark.png`.

## Content

All content lives in `src/content/` as Markdown or MDX files.

### Blog posts — `src/content/blog/`

```md
---
title: "Your Post Title"
description: "A short description"
pubDate: "Apr 16 2026"
heroImage: "/your-image.webp"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Notes — `src/content/notes/`

Same format as blog posts. Supports KaTeX math:

```md
$$
\int_0^\infty \frac{1}{x^2+1} \, dx = \frac{\pi}{2}
$$
```

And code blocks:

````md
```python
print("hello, world")
```
````

### Projects — `src/content/projects/`

```md
---
title: "Your Project"
description: "Project description"
pubDate: "Apr 16 2026"
heroImage: "/project-preview.webp"
badge: "tag"
github: "https://github.com/yourusername/repo"
liveUrl: "https://yourproject.com"
tags: [tag1, tag2]
---
```

### Pages

Edit these Astro files to customize page content:

| Page      | File                          |
| --------- | ----------------------------- |
| Home      | `src/pages/index.astro`       |
| Projects  | `src/pages/projects.astro`    |
| CV/Resume | `src/pages/cv.astro`          |
| Personal  | `src/pages/personal.astro`    |
| Blog      | `src/pages/blog/index.astro`  |
| Notes     | `src/pages/notes/index.astro` |

## Theming

The design uses CSS custom properties defined in `src/styles/global.css`. The two themes are:

| Token      | Day (Light) | Night (Dark) |
| ---------- | ----------- | ------------ |
| Background | `#f7f3e7`   | `#374063`    |
| Text       | `#877358`   | `#e2d6c8`    |
| Primary    | `#2abaaa`   | `#2abaaa`    |

DaisyUI themes are defined in `tailwind.config.cjs` — edit the `nord` (light) and `night` (dark) theme objects.

## Fonts

- **Latin text**: Nunito Variable (rounded, friendly)
- **CJK text**: LXGW WenKai (霞鹜文楷)

Fonts are composed via CSS `@font-face` with `unicode-range` in `src/styles/global.css`.

## Deployment (GitHub Pages)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. Push your code to a `gh-pages` branch
2. The workflow builds the site and deploys to GitHub Pages
3. Set `BASE_URL` in the workflow to match your repo name (e.g., `/your-repo/`)
4. Update `site` in `astro.config.mjs` to your GitHub Pages URL

For a custom domain, add a `CNAME` file to `public/` and update the `site` field.

## Credits

- [Astro](https://astro.build/) — Static site framework
- [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) — Styling
- [Animal Crossing](https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/) by Nintendo — Visual inspiration
- [animal-crossing-ui](https://github.com/guokaigdg/animal-crossing-ui) — Design reference
- [okpng nookphone icons](https://okpng.gumroad.com/) - Icon assets

## License

MIT
