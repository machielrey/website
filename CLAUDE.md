# machielreyneke.com

Personal website and blog for Machiel Reyneke. Built with Astro, hosted on Cloudflare Pages.

## Tech Stack

- **Framework**: Astro (blog template)
- **Content**: Markdown/MDX in `src/content/`
- **Hosting**: Cloudflare Pages (static output)
- **Styling**: Dark theme (background #0f1219, light text)

## Project Structure

```text
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

## Test-Driven Development

**This project uses strict TDD. Tests come first.**

1. Write tests based on expected input/output before implementation
2. Tests must cover basic functionality AND edge cases
3. Run tests, confirm they fail
4. Implement until tests pass
5. Never cut corners on tests

## Multi-PR Features

For features requiring multiple PRs:

1. Create `docs/feature_plans/YYYY-MM-feature_name.md`
2. Document scope and PR breakdown
3. Update as PRs merge
4. Delete when feature is deployed

See `docs/feature_plans/README.md` for template.
