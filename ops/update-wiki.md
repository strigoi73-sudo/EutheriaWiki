# Update Wiki Workflow

You are working in the root of the GitHub repository `EutheriaWiki`.

## Read first

- `AGENTS.md`
- `mkdocs.yml`
- all files in `updates/inbox/`
- relevant existing files in `wiki/`

## Goal

Apply all new, unincorporated update documents in `updates/inbox/` to the wiki.

## What counts as already incorporated

Treat an update document as already incorporated if either of these is true:

1. It contains a clear incorporation status marker.
2. It has already been moved out of `updates/inbox/`.

Only process files currently in `updates/inbox/` that do not already meet either condition.

## Required workflow

### Step 1: Inspect the repository first

Before editing anything:

- inspect the repo structure
- inspect `mkdocs.yml`
- inspect `updates/inbox/`
- inspect relevant files in `wiki/`

### Step 2: Identify unincorporated update documents

Create a list of all update documents in `updates/inbox/` that still need incorporation.

### Step 3: Extract topics from each update document

For each unincorporated update document, extract all distinct substantial topics introduced or materially expanded by that document.

Substantial topics include, but are not limited to:

- named polities
- named settlements
- named regions
- named peoples
- religions, sects, doctrines, and philosophies
- historical events and conflicts
- institutions and organizations
- legal or political arrangements
- major geographic features
- major canon revisions
- any topic likely to deserve future inbound links

### Step 4: Coverage audit

For every extracted topic, assign exactly one outcome:

- `update existing article`
- `create new article`
- `no standalone article needed`

For every topic, record:

- source update document
- topic name
- chosen outcome
- destination article
- one-sentence justification

Do not proceed to final editing until every extracted topic has one of these outcomes.

### Step 5: Article decision rules

#### Prefer updating an existing article when:

- the topic is already the primary subject of an existing page
- the new material fits naturally into that page
- the topic does not need a distinct target for future cross-links

#### Create a new article when:

- the topic is a named and substantial subject
- the topic does not already have an adequate standalone page
- the topic is likely to receive future cross-links
- omitting a standalone page would force repeated explanation across multiple pages
- the topic receives substantial treatment in the update document

Do not skip article creation merely because a topic can be mentioned inside another page.

### Step 6: Apply updates to the wiki

For each processed update document:

- update existing pages where appropriate
- create new pages where required
- add cross-links using normal Markdown links
- update relevant category index pages whenever new pages are added

## Content rules

- Do not invent unsupported facts.
- Preserve terminology from the update documents where appropriate.
- Keep writing concise, readable, encyclopedic, and article-focused.
- Avoid duplicate pages for the same topic.
- Prefer targeted edits over broad rewrites unless the update clearly requires broader revision.

## Incorporation marker

After successfully incorporating an update document, add this exact marker at the very top of the file:

Incorporation Status: incorporated
Incorporated On: [today's date]

After adding the marker, move the file from `updates/inbox/` to `updates/processed/`.

Do not reprocess documents already marked incorporated.

## Completion gate

Before staging changes, verify all of the following:

- every unincorporated update document in `updates/inbox/` was inspected
- every processed update document had its topics extracted
- every extracted topic was assigned an outcome
- every extracted topic was incorporated into either:
  - an updated article
  - a new article
  - a justified non-standalone destination
- every processed update document was marked incorporated
- every processed update document was moved to `updates/processed/`

If any extracted topic lacks a destination or justification, the task is not complete.

## Git requirements

After all incorporation work is complete:

- stage all relevant changes
- commit the changes
- leave the worktree clean

## Commit message

Apply incorporated update documents to wiki

## Final response format

Your final response must include all of the following:

- Processed update documents:
  - [list]

- Extracted topics by update document:
  - [document name]
    - [topic]
    - [topic]

- Topic-to-article mapping:
  - [topic] → [updated article or new article]

- Topics deliberately not given standalone pages:
  - [topic] — [justification]

- Updated articles:
  - [list]

- New articles:
  - [list]

- Added cross-links:
  - [list]

- Updated category pages:
  - [list]

- Marked incorporated and moved:
  - [list]

- Git commit hash:
  - [hash]

- Worktree clean:
  - yes / no

END OF PROMPT
