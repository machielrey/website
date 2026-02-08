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
│   │   ├── blog/           # Blog posts (Markdown/MDX)
│   │   └── photos/         # Photo albums (Markdown)
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
tags: ['tag1', 'tag2'] # Optional
draft: true # Optional: hides post in production
toc: true # Optional: shows table of contents (needs h2/h3 headings)
---
```

**SEO notes for frontmatter:**

- **title**: Used in `<title>` tag as `{title} | Machiel Reyneke`. Write for humans first, but include searchable terms. Cryptic titles (e.g. "18:57") are fine for style but consider whether someone would find the post via search.
- **description**: Used as `<meta description>` — appears in Google search results. Keep it ~120-155 characters, compelling enough to click. This is not a summary; it's a pitch for why someone should read the post.

Photo albums go in `src/content/photos/` as `.md` files with frontmatter:

```yaml
---
title: 'Album Title'
description: 'Brief description'
pubDate: '2026-02-07'
location: 'City, Country' # Optional
tags: ['travel', 'landscape'] # Optional
draft: true # Optional: hides album in production
cover: 'https://photos.machielreyneke.com/album-slug/cover.webp'
photos:
  - src: 'https://photos.machielreyneke.com/album-slug/photo-01.webp'
    alt: 'Description of the photo'
    caption: 'Optional caption' # Optional
---
```

Photos are hosted on Cloudflare R2 at `photos.machielreyneke.com`. The markdown body is optional narrative text rendered above the photo grid.

### Photo Upload Workflow

Requires: `npx wrangler login` (one-time), ImageMagick (`brew install imagemagick`).

```bash
# 1. Create output directory
mkdir -p /tmp/album-upload/{album-slug}

# 2. Resize and convert to WebP (max 2400px, quality 82)
i=1; for f in /path/to/originals/*.JPEG; do
  magick "$f" -resize 2400x2400\> -quality 82 /tmp/album-upload/{album-slug}/$(printf "photo-%02d.webp" $i)
  i=$((i+1))
done

# 3. Copy one photo as cover
cp /tmp/album-upload/{album-slug}/photo-03.webp /tmp/album-upload/{album-slug}/cover.webp

# 4. Upload to R2 (bucket name is "photos")
for f in /tmp/album-upload/{album-slug}/*.webp; do
  npx wrangler r2 object put "photos/{album-slug}/$(basename $f)" \
    --file "$f" --content-type image/webp --remote
done
```

See `docs/r2-setup.md` for full R2 setup details.

### Creating New Posts

When creating a new blog post:

1. **Always confirm draft status** — explicitly state whether the post is set as `draft: true` or ready for publication
2. **Drafts are visible in dev** (`npm run dev`) but hidden in production
3. **Verify before publishing** — if removing `draft: true`, confirm with the user that the post is ready to go live

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
