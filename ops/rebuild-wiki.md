# Rebuild Wiki Workflow

You are working in the root of the GitHub repository `EutheriaWiki`.

## Goal

Perform a hard reset of the published wiki content while preserving the repository, workflow files, archive, inbox, raw source assets, and Git history.

This workflow is for full reconstruction from a new authoritative encyclopedia, not for incremental update passes.

## Preserve these paths

- `AGENTS.md`
- `mkdocs.yml`
- `ops/`
- `updates/inbox/`
- `updates/processed/`
- `source_assets/maps/`
- Git history and normal repository structure

## Reset these paths

- legacy content pages under `wiki/`
- legacy GM pages under `wiki/gm/`
- section indexes and cross-links derived from outdated canon
- wiki-ready map crops in `wiki/assets/maps/` that belong to removed pages

## Skeleton requirements

Before new encyclopedia content is ingested, the published wiki should consist of a minimal skeleton:

- `wiki/index.md`
- `wiki/geography/index.md`
- `wiki/history/index.md`
- `wiki/states/index.md`
- `wiki/cultures/index.md`
- `wiki/religions/index.md`
- `wiki/places/index.md`
- `wiki/peoples/index.md`
- `wiki/cosmology/index.md`
- `wiki/glossary/index.md`
- `wiki/gm/index.md`

The skeleton should:

- explain that the wiki is being rebuilt from the current encyclopedia
- keep public and GM sections structurally separate
- avoid carrying forward legacy canon summaries unless deliberately re-imported
- preserve the repository workflow around `updates/inbox/`, even though that folder is not published as wiki content

## Encyclopedia-driven rebuild rules

When the new encyclopedia is placed into `updates/inbox/`, rebuild from it as a fresh canon pass:

- derive the article set from the encyclopedia
- redesign article names and structure freely where cleaner organization requires it
- do not preserve old pages merely because they existed before the reset
- split public and GM material directly from the encyclopedia's public body text and GM-only material

## Public and GM separation

- Public pages must remain encyclopedic and non-spoilery.
- GM truth must not leak into public pages.
- GM pages may link to public pages.
- Public pages must not link directly to GM pages.

## Map rules

- Raw source maps live in `source_assets/maps/`.
- Wiki-ready map crops live in `wiki/assets/maps/`.
- When rebuilding or creating a state, continent, or major region article, add or refresh a cropped wiki-ready map excerpt when a usable source map exists and the article does not already have an adequate map.
- State pages should normally receive a political map crop when a clear crop is possible from the available source map.
- Continent pages should normally receive a continent crop when a clear crop is possible from the available source map.
- Major region pages should normally receive a regional crop when a clear crop is possible from the available source map.
- Prefer cropped excerpts over embedding the full world map.
- Use lowercase hyphenated filenames.

## Completion criteria

The rebuild is complete only when:

- legacy wiki content intended for removal is gone
- skeleton pages and temporary navigation work before rebuild ingestion
- the new encyclopedia has been fully ingested
- every substantial topic has a destination
- public/GM separation is re-established and verified
- maps are regenerated where appropriate
- processed rebuild source documents are marked and moved to `updates/processed/`
- the repo is committed, pushed, and clean
