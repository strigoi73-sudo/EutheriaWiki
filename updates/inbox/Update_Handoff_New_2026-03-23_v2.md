# EutheriaWiki Update Handoff

This file is a handoff document for Codex or any other implementation agent. It is intended to continue the wiki refinement work without directly editing files through GitHub from chat.

## Goal

Preserve the wiki's strong organizational structure while continuing to move article prose toward the tone, explanatory density, and causal texture of the encyclopedia.

The desired end state is:

- clean, navigable MkDocs pages
- consistent article architecture
- prose that feels like finished setting reference rather than briefing notes
- stronger historical consequence, institutional texture, and lived-world implication
- better section completeness in the currently light parts of the wiki

## Current state summary

The wiki now has stronger landing pages and more developed entries for geography, states, religions, and cosmology.

The next major need is not broad structural cleanup, but completion and deepening:

- seed the thin sections with real content
- make article types more consistent
- continue adding consequence and specificity
- improve cross-link density where pages imply related topics that do not yet exist

## Tone guidance

Write in a style that is:

- confident
- explanatory
- canon-conscious
- concise enough for a wiki, but not skeletal
- willing to state implications instead of only listing facts

Prefer:

- “X matters because…”
- “This helps explain why…”
- “The result is…”
- “This gives the state, region, or tradition a distinctive role…”

Avoid:

- placeholder phrasing
- explicit draft language
- overly clipped note-style prose
- vague filler like “articles will be added over time”

## Structural guidance by article type

### Geography articles

Preferred order:

1. Overview
2. Physical geography
3. Peoples and settlement
4. Political or strategic significance
5. Historical character
6. Related

### State articles

Preferred order:

1. Overview
2. Political character
3. Economy and geography where relevant
4. Religion and legitimacy where relevant
5. Regional relationships
6. Strategic significance
7. Related

### Religion articles

Preferred order:

1. Overview
2. Core orientation or beliefs
3. Institutions and practice
4. Political expressions
5. Civilizational role
6. Related

### Cosmology articles

Preferred order:

1. Overview
2. Place in the wider metaphysical system
3. Implications for mortal existence, magic, or theology
4. Related

### Section landing pages

Each landing page should do three things:

1. define the section
2. explain why the section matters
3. orient the reader toward the first useful pages

## Priority work remaining

### Highest priority: create first real articles for thin sections

These sections still need actual content pages, not just landing pages:

- History
- Cultures
- Places
- Peoples
- Glossary

The best first pass is to add a few flagship entries rather than try to make each section exhaustive.

## Recommended new pages

### History

Create:

- `wiki/history/veltric-empire.md`
- `wiki/history/fall-of-the-veltric-empire.md`
- `wiki/history/likian-dukan-war.md`

Update `wiki/history/index.md` to list them.

#### Notes

**Veltric Empire**
Should explain:
- what it was
- where it dominated most strongly
- how it shaped Nereth in particular
- what institutions, trade patterns, and identities survived it

**Fall of the Veltric Empire**
Should focus on:
- fragmentation
- regional succession effects
- why collapse did not produce uniform outcomes
- how collapse altered trade, legitimacy, and diplomacy

**Likian-Dukan War**
Should synthesize material already implied elsewhere:
- dates 874–876 LC
- liberation pretext vs economic-strategic drivers
- Dukanese gains at heavy cost
- Likian blockade aftermath
- long-term weakening despite tactical success

### Cultures

Create:

- `wiki/cultures/likian-culture.md`
- `wiki/cultures/rawran-civilization.md`
- `wiki/cultures/berber-culture-in-kasmora.md`

Update `wiki/cultures/index.md` to list them.

#### Notes

**Likian culture**
Focus on:
- guild structure
- maritime discipline
- urban/coastal identity
- pragmatic institutionalism
- relationship between commerce and civic life

**Rawran civilization**
This should be broader than the religion page.
Focus on:
- literate institutional culture
- archives, councils, education, legalism
- Sipharan and Haran expressions
- how a religious tradition becomes a civilizational style

**Berber culture in Kasmora**
Focus on:
- Haria as center
- distinction between civilizational identity and state boundary
- coastal and inland expressions
- relation to Delistanism without collapsing culture into religion

### Places

Create:

- `wiki/places/ashaybar.md`
- `wiki/places/tuwaid.md`
- `wiki/places/jora-territory.md`

Update `wiki/places/index.md` to list them.

#### Notes

**Ashaybar**
Should emphasize:
- largest capital in Kasmora
- fortified port identity
- Hawan commercial and political centrality

**Tuwaid**
Should emphasize:
- sacred significance
- why access matters politically
- pilgrimage and legitimacy

**Jora Territory**
Should emphasize:
- role as access corridor to Tuwaid
- administrative and diplomatic importance
- why sacred geography requires political management

### Peoples

Create:

- `wiki/peoples/likians.md`
- `wiki/peoples/berbers-of-kasmora.md`
- `wiki/peoples/dwarves-of-valthera-and-nereth.md`

Update `wiki/peoples/index.md` to list them.

#### Notes

These pages should treat peoples as enduring communities, not just state populations.

Include:
- where they live
- how they are distributed politically
- what makes them historically distinct
- how geography and state power shape them without fully defining them

### Glossary

Create:

- `wiki/glossary/likian-calendar.md`
- `wiki/glossary/oceanus-centralis.md`
- `wiki/glossary/pleroma.md`
- `wiki/glossary/kenoma.md`

Update `wiki/glossary/index.md` to list them.

#### Notes

These should be short pages.
Aim for concise, stable definitions with links outward.

## Existing pages that would benefit from a second pass later

These are improved, but still good candidates for eventual expansion:

- `wiki/geography/valthera.md`
- `wiki/geography/nereth.md`
- `wiki/geography/kasmora.md`
- `wiki/states/likia.md`
- `wiki/religions/rawranism.md`
- `wiki/cosmology/souls-cycle.md`

### Specific future upgrades

**Valthera**
Could gain more on:
- west and central upland frontier dynamics
- comparative state zones
- inland water transport consequences

**Nereth**
Could gain more on:
- Veltric legacy by region
- western and eastern divergence in state formation
- dwarven control of passes as a persistent structural factor

**Kasmora**
Could gain more on:
- demographic centrality
- why abundance sustains plural major powers
- finer differentiation between agrarian, maritime, sacred, and imperial leverage

**Likia**
Could gain more on:
- guild internal politics
- fleet logistics and island governance
- how ordinary civic life reflects maritime structure

**Rawranism**
Could gain more on:
- ritual practice
- initiatory structure
- what fellowship houses and Rawran education look like day to day

**Souls and the Cycle of Existence**
Could gain more on:
- funerary implications
- religious interpretations
- how reincarnation affects everyday belief

## Cross-link recommendations

As new pages are added, increase cross-link density deliberately.

Examples:
- `likian-culture.md` should link to `likia.md`, `central-island-chain.md`, and `likian-calendar.md`
- `rawran-civilization.md` should link to `rawranism.md`, `sipharan.md`, and `har.md`
- `tuwaid.md` should link to `sala.md` and `jora-territory.md`
- `veltric-empire.md` should link to `nereth.md`
- glossary pages should point outward to their major concept pages

## Implementation guidance for Codex

Suggested order of work:

1. Add first real pages to History
2. Add first real pages to Places
3. Add first real pages to Glossary
4. Add first real pages to Cultures
5. Add first real pages to Peoples
6. Revisit cross-links across all touched pages
7. Ensure each updated index page lists its new entries
8. Keep nav changes minimal unless a section becomes crowded

## Quality bar

Before considering a page done, check:

- Does the opening paragraph clearly explain why the subject matters?
- Does the page describe consequences, not just facts?
- Does the prose feel like a finished reference entry rather than notes?
- Does the page link outward to the most relevant existing pages?
- Does it preserve canon and avoid inventing beyond current evidence?

## Final instruction

When uncertain, prefer careful inference from established canon over invention.

The encyclopedia, maps, and CSV-derived world structure should be treated as one combined canon system.
