# machielreyneke.com

Personal website and blog for Machiel Reyneke. Built with Astro, hosted on Cloudflare Pages.

## Tech Stack

- **Framework**: Astro (blog template)
- **Content**: Markdown/MDX in `src/content/`
- **Hosting**: Cloudflare Pages (static output)
- **Styling**: Dark theme (background #0f1219, light text)

## Project Structure

```
website/
├── src/
│   ├── content/
│   │   └── blog/           # Blog posts (Markdown/MDX)
│   ├── pages/              # Static pages (about, projects)
│   ├── layouts/            # Page layouts
│   └── components/         # Astro components
├── public/                 # Static assets (images, favicon)
└── astro.config.mjs        # Astro configuration
```

## Quick Commands

```bash
npm run dev          # Start dev server (localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## Deployment

Cloudflare Pages auto-deploys from `master` branch.

Build settings:

- Build command: `npm run build`
- Output directory: `dist`

## Content

Blog posts go in `src/content/blog/` as `.md` or `.mdx` files with frontmatter:

```yaml
---
title: 'Post Title'
description: 'Brief description'
pubDate: '2026-01-17'
---
```

## Before Committing

```bash
npm run build        # Ensure build succeeds
```

Pre-commit hooks run automatically (Prettier formatting via lint-staged).

## Content Consistency

Before committing changes, read these key pages to ensure consistency:

- `src/pages/index.astro` — Homepage with intro, projects list, latest posts
- `src/pages/about.astro` — Full bio and background
