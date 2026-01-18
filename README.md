# machielreyneke.com

Personal website and blog built with [Astro](https://astro.build), hosted on [Cloudflare Pages](https://pages.cloudflare.com).

## Features

- **Blog** with tags, reading time, and optional table of contents
- **RSS feed** at `/rss.xml`
- **SEO** — OpenGraph, Twitter cards, JSON-LD structured data
- **Performance** — Prefetching, view transitions, static output
- **Analytics** — Cloudflare Web Analytics (enabled via CF dashboard)
- **Dark theme** with syntax highlighting (github-dark)

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
```

## Writing Posts

Create `.md` or `.mdx` files in `src/content/blog/`:

```yaml
---
title: 'Post Title'
description: 'Brief description'
pubDate: 2026-01-17
tags: ['tag1', 'tag2'] # Optional
draft: true # Optional: hides in production
toc: true # Optional: shows table of contents
---
```

## Deployment

Cloudflare Pages auto-deploys from the `master` branch.

## License

Content © Machiel Reyneke. Code based on the [Astro Blog template](https://github.com/withastro/astro/tree/main/examples/blog).
