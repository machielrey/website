# Feature: Astro Site Enhancements

## Overview

A collection of improvements to enhance the site's functionality, SEO, performance, and developer experience. The site is currently vanilla Astro with basic blog functionality.

## Scope

### Included

- Reading time display for blog posts
- Code syntax highlighting theme configuration
- Prefetching for faster navigation
- Cloudflare Web Analytics
- Draft status for blog posts
- View Transitions for smooth navigation
- JSON-LD structured data for SEO
- Table of Contents (configurable per post)

### NOT Included (Future Consideration)

- Dark/Light mode toggle (requires CSS refactor)
- Dynamic OG image generation (build time concerns)
- Pagefind search (overkill for small blog currently)
- Copy code button (nice-to-have)
- Giscus comments (external dependency)
- Newsletter signup (requires ongoing commitment)
- Related posts (needs more content first)
- Astro Image component migration

## Technical Approach

### Low-Risk Additions

These are configuration or small utility additions with minimal impact:

1. **Reading Time** — Utility function, display in post layout
2. **Syntax Highlighting** — Shiki theme config in `astro.config.mjs`
3. **Prefetching** — Built-in Astro feature, config only
4. **Cloudflare Analytics** — Script tag in BaseHead
5. **Draft Status** — Schema field + collection filter

### Medium-Risk Additions

These require more integration but are well-documented patterns:

1. **View Transitions** — Astro built-in, may affect analytics/islands
2. **JSON-LD** — New component, needs validation
3. **Table of Contents** — Rehype plugins + frontmatter flag + styling

## PR Breakdown

### PR 1: Low-Risk Enhancements

- **Branch:** `claude/review-astro-improvements-G0Vef`
- **Status:** [ ] In progress
- **Description:** Reading time, syntax highlighting, prefetching, Cloudflare Analytics, draft status
- **Depends on:** —

### PR 2: View Transitions & JSON-LD

- **Branch:** `claude/review-astro-improvements-G0Vef`
- **Status:** [ ] Not started
- **Description:** Add view transitions and structured data
- **Depends on:** PR 1

### PR 3: Table of Contents

- **Branch:** `claude/review-astro-improvements-G0Vef`
- **Status:** [ ] Not started
- **Description:** Configurable ToC with `toc: true` frontmatter
- **Depends on:** PR 1

## Open Questions

- Cloudflare Analytics token — needs to be obtained from CF dashboard
- JSON-LD: Include Person schema on about page or just Article schema on posts?
- ToC: Sticky positioning or inline at top of post?

## Notes

All work being done in single branch for this session. Will be committed incrementally.
