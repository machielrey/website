# machielreyneke.com

Personal website and blog. Built with Astro, hosted on Cloudflare Pages.

## Tech Stack

- **Framework**: Astro (blog template)
- **Content**: Markdown/MDX in `src/content/`
- **Hosting**: Cloudflare Pages (static output)
- **Styling**: TBD

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

Cloudflare Pages auto-deploys from `main` branch.

Build settings:
- Build command: `npm run build`
- Output directory: `dist`

## Content

Blog posts go in `src/content/blog/` as `.md` or `.mdx` files with frontmatter:

```yaml
---
title: "Post Title"
description: "Brief description"
pubDate: "2026-01-17"
---
```

## Before Committing

```bash
npm run build        # Ensure build succeeds
```
