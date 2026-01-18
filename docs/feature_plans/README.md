# Feature Plans

Planning documents for features that span multiple PRs.

## When to Create

- Feature requires more than one PR
- Multiple developers (human or AI) will work on it
- Architectural decisions need documenting before implementation

## Naming

```text
YYYY-MM-feature_name.md
```

## Template

```markdown
# Feature: [Name]

## Overview

Brief description of what and why.

## Scope

- Included
- NOT included

## Technical Approach

High-level architecture decisions.

## PR Breakdown

### PR 1: [Title]

- **Branch:** `feat/feature-name-part-1`
- **Status:** [ ] Not started / [ ] In progress / [x] Merged
- **Description:** What this accomplishes
- **Depends on:** —

### PR 2: [Title]

- **Branch:** `feat/feature-name-part-2`
- **Status:** [ ] Not started
- **Description:** What this accomplishes
- **Depends on:** PR 1

## Open Questions

- Unresolved decisions

## Notes

Context or learnings during implementation.
```

## Lifecycle

1. **Create** before starting work
2. **Update** as PRs merge
3. **Delete** when deployed to production

Do not archive — remove completed plans to keep this directory clean.
