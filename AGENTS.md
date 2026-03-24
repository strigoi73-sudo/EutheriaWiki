# EutheriaWiki Agent Guide

The wiki lives in `wiki/`.
Incoming update documents live in `updates/inbox/`.
Processed update documents belong in `updates/processed/`.
`updates/processed/` is the archive for incorporated update documents; files moved there must be preserved and never deleted as part of the update workflow.

If the user says exactly `Update Wiki`, execute the workflow in `ops/update-wiki.md`.

When executing `Update Wiki`, you must do all of the following:

1. Read first:
   - `AGENTS.md`
   - `mkdocs.yml`
   - `ops/update-wiki.md`
   - all files currently in `updates/inbox/`
   - relevant existing files in `wiki/`

2. Identify all update documents in `updates/inbox/` that have not yet been manually inspected and incorporated during the current workflow run.

   - Treat every non-placeholder file in `updates/inbox/` as unincorporated until it has been manually inspected in that run.
   - Do not skip an inbox file merely because it already contains an incorporation marker.

3. For each unincorporated update document, extract all distinct substantial topics introduced or materially expanded by that document.

4. For every extracted topic, assign exactly one outcome:
   - update an existing article
   - create a new article
   - no standalone article needed, with explicit justification

5. Do not finish until every extracted topic from every processed update document has been accounted for.

6. Prefer updating an existing article when the topic is already adequately covered there.
   Create a new article whenever a named topic is substantial, distinct, and not already adequately covered.

7. Add cross-links between related articles.

8. Update relevant category index pages whenever new articles are created.

9. Do not invent unsupported facts.

10. Preserve terminology from the update documents where appropriate.

11. Keep wiki writing concise, readable, article-focused, and encyclopedic.

12. After successfully incorporating an update document:
   - add the incorporation marker required by `ops/update-wiki.md`
   - move it from `updates/inbox/` to `updates/processed/`
   - do not delete it after moving; `updates/processed/` is the permanent archive

13. Stage and commit the changes, push them to `origin/main`, and leave the worktree clean.

Direct user instructions override these instructions.
