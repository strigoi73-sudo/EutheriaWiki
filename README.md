# EutheriaWiki

#Use this prompt to update the wiki:
You are working in the root of the GitHub repository EutheriaWiki.

Read first:

AGENTS.md
mkdocs.yml
the contents of updates/inbox/
relevant existing files in wiki/
Goal: Apply all new, unincorporated update documents in updates/inbox/ to the wiki.

Rules for selecting update documents:

Only use files in updates/inbox/.
Ignore any file already marked as incorporated.
Treat a file as already incorporated if either of these is true:
it contains a clear status marker indicating incorporation
it has already been moved out of updates/inbox/
Task:

Inspect updates/inbox/ and identify all update documents that have not yet been incorporated.
For each unincorporated update document:
determine which existing wiki articles should be updated
update those articles
create new articles for substantial new topics that do not already have pages
add cross-links between related articles
update relevant category index pages when new articles are created
Do not invent unsupported facts.
Avoid duplicate articles for the same topic.
Prefer updating an existing article over creating a new one when the topic is already covered.
Incorporation handling:

After successfully applying an update document, mark it as incorporated by adding a clear status marker at the top of the file.
Use this exact marker format at the top of the file:
Incorporation Status: incorporated Incorporated On: [today's date]

After marking it, move the incorporated document from updates/inbox/ to updates/processed/.
Do not reprocess documents already marked incorporated.
Style requirements:

keep wiki writing concise, readable, and article-focused
preserve terminology from the source documents
use normal Markdown links for cross-references
keep changes targeted and relevant
Execution steps:

inspect the repo first
identify unincorporated update documents in updates/inbox/
apply them to the wiki
mark them as incorporated
move them to updates/processed/
stage and commit the changes
leave the worktree clean
Commit message: Apply incorporated update documents to wiki

Final response format:

list processed update documents
list updated articles
list new articles
list added cross-links
list updated category pages
confirm which documents were marked incorporated and moved
confirm the git commit hash
confirm the worktree is clean
END OF PROMPT
