Incorporation Status: incorporated
Incorporated On: 2026-03-25

# Eutheria Wiki Cleanup RunDoc for Codex v3

You are working in the root of the GitHub repository `EutheriaWiki`.

This document is the structural, editorial, and source-discipline brief for updating the
published wiki so it aligns with current canon while also supporting a deliberately visible
**GM Section** inside the same site.

The source-of-truth canon for this pass is, in priority order:

1. **Encyclopedia_Eutheria_v12_reconciled.md**
2. **RunDoc_v7 (1).md** (or the latest equivalent RunDoc placed in `sources/inbox`)
3. this cleanup RunDoc
4. existing repo wiki content

If older wiki wording conflicts with those sources, revise the wiki.
Do not preserve outdated wording for the sake of continuity.
Do not treat older wiki pages as canon merely because they already exist.

---

## 1. Primary Goal

Update the wiki so that it:

1. aligns with current canon,
2. clearly separates **public knowledge** from **GM-only knowledge**,
3. publishes both kinds of material inside the same wiki,
4. treats the **GM Section** as a distinct top-level area of the site,
5. does not leak GM truth into public pages by accident,
6. improves page structure, naming, cross-linking, and navigation,
7. preserves source-grounded worldbuilding methodology instead of flattening everything into unsupported summary.

This is a structural and editorial cleanup, not a wholesale stylistic
rewrite of every page.

---

## 2. Core Operating Discipline

### 2.1 Fresh-source discipline

Treat this pass as source-driven.
Do **not** import or assume lore conclusions from prior chats, old wiki text, or stale summaries unless they are:
- present in the current canonical source files, or
- explicitly included in the current RunDoc / encyclopedia.

### 2.2 Honesty and conflict handling

- Be direct.
- Do not hallucinate missing source support.
- Do not smooth over contradictions silently.
- If the encyclopedia, RunDoc, wiki, maps, or CSV-backed state logic conflict, identify the inconsistency and resolve it in favor of the current source-of-truth documents.

### 2.3 Source discipline

Treat the project sources as the canon base.
Where state, regional, or geopolitical pages are being revised, use the same methodology established in the RunDoc:
- read prose, maps, and CSV-style world data together when available,
- infer within source constraints,
- do not over-rely on generator labels,
- prefer geography, settlement pattern, roads, ports, rivers, biome, and demographic pattern over simplistic tags.

### 2.4 Inference discipline

Inference is allowed and expected, but only when it is source-grounded.
Do not invent details that clash with the encyclopedia, the current RunDoc, or visible geographic / demographic logic.
Where the RunDoc records a stabilized inference from prior source-based work, treat it as canon for this cleanup pass.

---

## 3. Core Structural Decision

This wiki will intentionally contain both:

- **public-facing pages**
- **GM-only pages**

GM content should **not** be moved outside the published docs tree.

### Required structure

- `wiki/` remains the published documentation tree.
- Create or maintain a top-level directory:
  - `wiki/gm/`
- Expose that directory in MkDocs navigation as:
  - **GM Section**

This means GM material is published on the site. That is intentional.

The job is therefore **not** to hide GM material technically.
The job is to keep public pages and GM pages **cleanly separated**.

---

## 4. Extraction Rule from the Encyclopedia

Use **Encyclopedia v12** as the main extraction guide.

### Default conversion rule

- **Main text** in the encyclopedia = public-facing canon or reasonably
  reconstructable in-world knowledge
- **Blockquoted GM Notes** = GM-only truth, hidden causality, campaign
  secrets, or designer-facing campaign information

### Important nuance

Not every encyclopedia *GM Note* needs to become its own wiki page.

Some GM notes are:
- adventure hooks,
- campaign prompts,
- implementation notes,
- or optional framing guidance.

Only create dedicated GM wiki pages for GM material that:
- explains the hidden truth of the setting,
- materially affects campaign interpretation,
- or organizes major secret-history chains.

Smaller hook-style GM notes can remain only in the encyclopedia or be
absorbed into a broader GM page where useful.

---

## 5. Public vs GM Content Rule

### 5.1 Public pages

Public pages must:
- read as setting reference or reconstructable history,
- preserve ambiguity where the setting intends ambiguity,
- avoid confirming hidden truths,
- avoid direct spoiler language,
- avoid inline GM notes, spoiler callouts, or collapsible “secret”
  sections.

Public pages may mention:
- rumors,
- later traditions,
- disputed historiography,
- unexplained disturbances,
- occult speculation,
- fragmentary archival evidence.

Public pages must **not** explicitly confirm:
- that the current Pontif is compromised,
- that the Cult’s real agenda is the destruction of ordered existence,
- that the ancient Deep Folk pressure was definitively caused by void
  contact,
- that the Veltric collapse was cultically accelerated in hidden ways,
- that the Veltric manuscript is the Necronomicon,
- the true strategic significance of apex-cleric scarcity,
- the metaversal escalation model for a simultaneous GOO awakening.

### 5.2 GM pages

GM pages may:
- state hidden truth directly,
- explain causal mechanisms,
- connect ancient and modern crises,
- identify compromised institutions and actors,
- explain campaign-scale stakes,
- speak analytically rather than in-world.

GM pages should:
- be direct,
- be explanatory,
- prioritize clarity,
- avoid unnecessary ambiguity.

---

## 6. Cross-Linking Discipline

Maintain strict one-way separation.

### Allowed
- GM pages may link to public pages.
- GM pages may summarize how public history differs from hidden truth.

### Not allowed
- Public pages should not link to GM pages.
- Public pages should not mention that a GM page exists.
- Public pages should not use spoiler labels, “secret truth,” or similar
  framing.

Where public pages must acknowledge uncertainty, use language like:
- “some scholars speculate...”
- “later traditions suggest...”
- “the true cause remains unknown...”
- “this has never been conclusively established...”
- “restricted occult traditions connect...”

---

## 7. Canon Clarifications to Enforce

These are the key canon points that should guide page revision.

### 7.1 Public-facing canon

These belong in the public wiki:

- The current year is **1026 LC**.
- The Veltric Empire collapsed beginning around **876 LC** after the
  Emperor died in **Marcici** without an heir.
- Marcici was the joint seat of both **Emperor** and **Pontif**.
- After the emperor’s death, the Church in Marcici declared itself the
  de facto governing authority of the Empire until lawful continuity
  could be restored.
- That declaration publicly initiated the **Fracture**.
- The post-876 period should be described in phases:
  - Immediate Collapse
  - Wars of Settlement
  - False Stabilization
  - Deepening Fracture
- The Rocciaganel Church survived institutionally after the fall of the
  Empire but lost authority over time.
- The Polbium Theocracy is the main territorial claimant to the
  institutional inheritance of the Rocciaganel Church.
- The modern Cult of the Void is a **late-Veltric** phenomenon.
- The knowledge behind the Cult is older than the Cult itself.
- The original Deep Folk pressure from the Thousand-Year War should be
  presented publicly as historically obscure or disputed.
- The present age is a **deeper phase of the Age of Fracture**, not a
  fully settled post-collapse equilibrium.
- Great Old Ones are setting-level existential threats, not ordinary
  adversaries.

### 7.2 GM-only canon

These belong in the GM Section:

- The Veltric manuscript is the **Necronomicon**, or a recurrence /
  recension of the same void knowledge.
- The current Pontif is compromised by the Cult, whether as a conscious
  initiate or a thrall of compromised clerics.
- The Cult spent roughly 150 years infiltrating the Church and finally
  reached the primatial office in 1026 LC.
- The Cult’s actual agenda is not worldly rule but the weakening of
  lawful coherence and the spread of Kenoma pressure through ordered
  existence.
- The ancient Deep Folk crisis and the modern crisis are linked through
  older void contact.
- The hidden dimension of the Veltric collapse is real: the public
  collapse was political, but its acceleration was cultic.
- The current world is weaker in apex lawful divine power than the
  ancient world that turned the tide of the Thousand-Year War.
- An uncompromised Lawful Good level-18 cleric may not exist, or there
  may be only one.
- A simultaneous full awakening of multiple Great Old Ones would exceed
  normal mortal response capacity and likely require intervention by
  dragons, powerful outsiders, or other ancient defenders of ordered
  existence.

### 7.3 Additional stabilized canon from the RunDoc

These items also need to be enforced where relevant pages exist.

#### Kasmora / Sala religion correction
- Remove outdated claims that Sala’s capital is Dedeok-aligned.
- Treat all Dedeok presence in Kasmora / Sala related to that old encyclopedia error as superseded.
- If public pages currently preserve that claim, revise them.

#### Tengc Empire
Tengc should be presented as:
- an old, sparse, fishery-centered northern confederation with imperial prestige,
- politically closer to a clan-confederated empire than a dense bureaucracy,
- strongest along its southern and southeastern settled coastal belt,
- demographically and administratively thinner across its northern reaches,
- maritime in a practical cold-water / fishery / convoy sense rather than a first-rate blue-water hegemon,
- religiously more private than publicly demonstrative,
- governed through elected imperial seniority above regional clan powers.

#### Kaihui
Kaihui should be presented as:
- a former kingdom turned republic after the Likian–Xin War,
- a plains-and-pasture food state with access to the sea rather than a true maritime power,
- heavily shaped by horse culture, grain production, and conservative communal traditions,
- dependent historically on Xin’s maritime order and now constrained by the treaty order,
- publicly republican but not culturally reconciled to that imposed structure.

#### Kan Guo and Fuz Guo
- Kan Guo should be treated as a relatively straightforward feudal monarchy.
- Fuz Guo should be treated as an old semi-autonomous duchy within Kan Guo.
- Fuz Guo’s noble prestige is tied to hereditary sorcerous bloodlines.
- Sorcerous bloodlines in Eutheria may be inherited but cannot be reliably intensified or bred upward in a stable way.
- Fuz Guo should not be presented as an overpowering mage-state; its prestige exceeds its average current magical reality.

---

## 8. State / Region Methodology Requirements

When revising state, region, religion, or geopolitical pages that are covered by the RunDoc or by map/CSV-backed development:

1. start from the current canonical source text,
2. preserve geography-first reasoning,
3. avoid simplistic generator-label interpretation,
4. use settlement pattern, ports, roads, rivers, coastlines, biome, and demographic logic when shaping prose,
5. prefer concise synthesis over speculative embellishment,
6. preserve already-stabilized source-grounded inferences from the RunDoc.

Do not flatten developed states into generic fantasy-state summaries if the RunDoc already established a more specific and source-grounded identity.

---

## 9. Nav / MkDocs Requirements

Update `mkdocs.yml`.

Keep the existing top-level public sections, and add:

- `GM Section:`
  - `gm/index.md`
  - plus major GM subpages

Recommended nav shape:

- Home
- Geography
- History
- States
- Cultures
- Religions
- Places
- Peoples
- Cosmology
- Glossary
- **GM Section**

Within the GM Section, use a compact hierarchy. Do not duplicate the
entire public nav tree unless necessary.

---

## 10. Public Page Priorities

Revise or create public pages so they reflect the current canon cleanly.

### 10.1 History
Revise:
- `wiki/history/chronology-of-eutheria.md`
- `wiki/history/fall-of-the-veltric-empire.md`
- `wiki/history/great-catastrophe-and-trelhelm.md`
- `wiki/history/post-trelhelm-era.md`
- `wiki/history/tome-and-cult-of-the-void.md`
- `wiki/history/veltric-empire.md`

Requirements:
- add the phased post-876 structure,
- keep ancient deep pressures publicly uncertain,
- keep the modern Cult late-Veltric,
- present the manuscript publicly as forbidden and obscure rather than
  fully explained,
- state clearly that Church assumption of de facto rule from Marcici
  triggered the Fracture.

### 10.2 Religion
Revise:
- `wiki/religions/eastern-nereth-religious-landscape.md`

Create if missing:
- `wiki/religions/rocciaganel-church.md`
- `wiki/religions/old-roman-beliefs.md`
- `wiki/religions/roman-beliefs.md`

Requirements:
- make Marcici and the Pontif public-facing and explicit,
- explain the Church’s imperial role, post-imperial survival, and loss
  of uncontested authority,
- present Polbium as significant but contested,
- do **not** reveal the compromised Pontif in public pages.

### 10.3 States / places
Create or revise:
- `wiki/states/polbium-theocracy.md`
- `wiki/places/marcici.md`
- relevant pages for `wiki/states/tengc-empire.md`, `wiki/states/kaihui.md`, `wiki/states/kan-guo.md`, and `wiki/states/fuz-guo.md` if those pages already exist or need creation

Requirements:
- Marcici must be treated as the old joint imperial-pontifical seat.
- Polbium must be treated as the surviving core of the old Empire and
  as the main territorial inheritor of Rocciaganel institutional power.
- Tengc, Kaihui, Kan Guo, and Fuz Guo must reflect the stabilized RunDoc treatment summarized above.

### 10.4 Cosmology
Revise:
- `wiki/cosmology/kenoma-and-outer-gods.md`
- `wiki/cosmology/divine-power-and-magic.md`

Requirements:
- keep Great Old Ones existential,
- keep the distinction between Outer Gods and Great Old Ones,
- avoid public disclosure of hidden current infiltration,
- avoid explicit public numerical claims about top-level cleric counts.

### 10.5 Public Cult page
Either revise existing public coverage or create a dedicated public page
for the Cult if needed.

That page should:
- treat the Cult as fragmentary, hidden, and poorly understood,
- acknowledge late-Veltric origins in cautious public terms,
- mention the forbidden manuscript and later occult traditions,
- avoid the full true agenda.

### 10.6 Optional public GOO page
A limited public-facing Great Old Ones page is acceptable if useful, but
it must remain restrained.

It should:
- explain them as occult, cosmological, or apocalyptic entities,
- avoid the full campaign threat model,
- avoid direct connection to current Church infiltration.

### 10.7 Public correction pass for known stale lore
Perform a targeted pass for known stale material, especially:
- Sala / Kasmora religion references,
- Tengc pages that overstate bureaucracy or grand-fleet power,
- Kaihui pages that overstate maritime identity or understate horse/plains identity,
- Fuz Guo pages that treat it as a dominant mage-state rather than an old sorcerous duchy with diluted blood prestige.

---

## 11. GM Section Priorities

Create `wiki/gm/` and add major hidden-canon pages there.

### Required GM pages

- `wiki/gm/index.md`
- `wiki/gm/hidden-timeline-of-the-fracture.md`
- `wiki/gm/cult-of-the-void-true-nature.md`
- `wiki/gm/the-tome-and-void-knowledge.md`
- `wiki/gm/ancient-void-contact.md`
- `wiki/gm/the-pontif-compromised-cleric.md`
- `wiki/gm/church-infiltration-and-collapse-mechanism.md`
- `wiki/gm/deep-folk-true-cause.md`
- `wiki/gm/great-old-ones-metaversal-threat-model.md`

### What these pages should do

#### `gm/index.md`
Provide a short explanation that this section contains GM-only canon,
hidden causality, and campaign secrets.

#### `gm/hidden-timeline-of-the-fracture.md`
Lay out the secret chronology beneath the public timeline:
- ancient void-contact precursor,
- likely post-Trelhelm sequestration,
- late-Veltric manuscript translation,
- cult acceleration of the 876 crisis,
- 1026 capture/compromise of the primatial office.

#### `gm/cult-of-the-void-true-nature.md`
State the Cult’s actual agenda, methods, clerical power source, and
relationship to Law, the Church, and the Empire.

#### `gm/the-tome-and-void-knowledge.md`
Explain the Necronomicon identity, cross-universal implications if
included, and how the tome relates to ancient and modern void contact.

#### `gm/ancient-void-contact.md`
Explain the hidden ancient precursor to the modern Cult and its role in
the Deep Folk pressure behind the Thousand-Year War.

#### `gm/the-pontif-compromised-cleric.md`
State plainly that the current Pontif is compromised. Clarify whether he
is a conscious cultist, a manipulated figure, or an open ambiguity
between those states.

#### `gm/church-infiltration-and-collapse-mechanism.md`
Explain how Church infiltration helped turn lawful institutions into
engines of fracture.

#### `gm/deep-folk-true-cause.md`
Explain how ancient deep pressure, later Deep Folk movement, and present
pressure connect without reducing the Deep Folk to mere puppets.

#### `gm/great-old-ones-metaversal-threat-model.md`
Explain the real scale of threat, the scarcity of adequate mortal
responses, and when dragons / outsiders / ancient powers become relevant.

---

## 12. What Should NOT Be Ported Directly into the GM Section

Do **not** mechanically convert every encyclopedia *GM Note* into a wiki
page.

In particular:
- small adventure hooks,
- location-specific campaign seeds,
- speculative implementation notes,
- and one-off “this could be interesting” remarks

should not automatically become formal GM wiki entries.

Instead:
- keep them in the encyclopedia only, or
- fold them into broader GM pages when genuinely useful.

The GM Section should be a **secret-history and campaign-truth layer**,
not a dump of every aside.

---

## 13. Tone Rules

### Public pages
- encyclopedic
- setting-facing
- reconstructable-history tone
- cautious where hidden truth exists

### GM pages
- direct
- analytical
- explanatory
- spoiler-safe because they already live in the GM Section

When updating state or regional pages, preserve the more conversationally developed but canon-grounded analytical logic from the RunDoc rather than reducing everything to flat encyclopedia boilerplate.

---

## 14. Final Quality Check

Before finishing, verify all of the following:

- `mkdocs.yml` includes a top-level **GM Section**
- GM content lives under `wiki/gm/`
- public pages do not link to GM pages
- public pages do not accidentally reveal GM truth
- GM pages clearly state hidden truth
- public/GM duplication is intentional rather than sloppy
- Marcici, the Pontif, Polbium, and the Fracture are all aligned with
  current canon
- the late-Veltric Cult / ancient knowledge distinction is preserved
- the 876–1026 phased structure is used consistently
- Sala / Kasmora religion is corrected
- Tengc, Kaihui, Kan Guo, and Fuz Guo pages reflect the stabilized RunDoc treatment where applicable
- outdated lore has been revised rather than preserved

---

## 15. Final Instruction

Treat:
- **Encyclopedia_Eutheria_v12_reconciled.md** as the canonical truth
- **RunDoc_v7 (1).md** as supporting canon, methodology, and stabilized state-level guidance
- **this RunDoc** as the wiki execution brief
- **existing wiki content** as editable and subordinate

Where older wiki pages conflict with current canon, update them.
Where a topic needs both a public page and a GM page, build both layers
deliberately rather than trying to split the difference inside one page.
