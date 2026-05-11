CLAUDE.md — Morgatech Auto Repair
Loaded automatically by Claude Code every session.
Do NOT delete or rename this file.
---
1. Project Identity
Name: Morgatech Auto Repair
Type: Next.js 16 web application (TypeScript + Tailwind CSS v4)
Architecture: Feature-based, App Router, Server Components by default
n8n prefix: MTECH_ (all n8n workflows must use this prefix)
Peer status: Reads from AUREA + DONNA (one-way). Publishes own digest.
Not yet registered in AUREA/DONNA peer registries — hookup pending.
---
2. Operating Mode
Read, analyse, generate code freely
For any destructive operation: explain what it does + wait for explicit confirmation
Never guess when ambiguous — ask the user
Never generate more than 900 lines in a single response. If more is needed,
build across multiple steps — write first section, then continue in follow-up steps.
---
3. Mandatory Session Start Sequence
Run IN ORDER at the start of EVERY session before doing anything else.
```
STEP 1 → Read context/project-context.md
           (static architecture, stack, folder structure, component map)
STEP 2 → Read memory/session-log.md — LAST ENTRY ONLY
           (what was done last session, what was left unfinished, next action)
STEP 3 → Read memory/problems.md — ACTIVE + RECURRING ONLY (skip resolved)
           (persistent problems that affect current work)
STEP 4 → Read peers/peer-registry.md
           → Attempt to read AUREA digest at registered path
           → Attempt to read DONNA digest at registered path
           → If either unreachable: note in report, skip, continue — do NOT halt
           → Flag any peer digest with last_generated older than 14 days as [STALE]
           → If starting a new phase: also read AUREA memory/solutions-log.md
STEP 5 → Report to user:
           - Last session summary (1-2 lines from session-log)
           - Current active problems (names + status only — no full detail)
           - Peer summaries: AUREA + DONNA phase/progress + peer_relevant problems
           - Any peer patterns relevant to current work
           - Staleness warnings if applicable
           - Proposed next action based on last session notes
```
---
4. Mandatory Session End Sequence
⚠️ SESSION SAVE TRIGGER — WATCH FOR THESE PHRASES:
If user says ANY of: "wrap up" / "stopping" / "done" / "save" / "pause" /
"continue later" / "that's enough" / "close" / "i'm done for now" —
IMMEDIATELY run this sequence BEFORE responding or closing.
Never let a session end without updating the log.
```
STEP 1 → APPEND to memory/session-log.md
           → Timestamp (date + time)
           → What was accomplished this session (specific, not vague)
           → What was NOT finished and why
           → Exact next action for next session (specific enough to resume cold)
           → Any decisions made this session
           → Any new problems encountered
STEP 2 → PATCH memory/problems.md
           → Update problems worked on: new attempts, status changes
STEP 3 → APPEND to memory/solutions-log.md
           → Only if a pattern or solution was proven this session
STEP 4 → PATCH context/content-directory.md
           → If any new pages, components, services, or blog content was added
STEP 5 → OVERWRITE peers/peer-digest.md
           → Regenerate from current state (see Section 13 for format rules)
```
If session ends abruptly with no explicit close:
→ On next session start: note the gap, reconstruct what changed from file diffs,
append a recovery entry to session-log.md before proceeding.
---
5. Tech Stack (locked)
Layer	Technology	Notes
Framework	Next.js 16.1.6	App Router, TypeScript
UI	React 19.x	Server Components by default
Styling	Tailwind CSS v4	PostCSS, CSS theme tokens in globals.css
Icons	Google Material Symbols Outlined	Via MaterialIcon.tsx wrapper
Fonts	Inter (Google Fonts)	Via next/font
Images	next/image	Google CDN, remotePatterns configured
Navigation	next/link	All internal links
---
6. Architecture Rules (non-negotiable)
Page files are thin — `app/*/page.tsx` only imports and composes feature components
Feature components — `features/[name]/components/` — own their section logic
UI primitives — `components/ui/` — small, stateless, accept className prop
All static data in `lib/constants.ts` — never hardcoded in components
TypeScript interfaces for all data shapes in `types/index.ts`
Server Components by default — document why if adding "use client"
Path alias `@/` for all imports — never relative `../../` paths
`next/image` for all images — never raw `<img>` tags
`next/link` for all internal nav — never raw `<a>` tags
Named exports only — no default exports in feature or ui components
---
7. File Map
File	Purpose	Read	Written
`CLAUDE.md`	Global rules	Every session	Rarely
`context/project-context.md`	Static architecture snapshot	Every session	On architecture changes
`context/content-directory.md`	Site content index for AUREA	Session end if content changed	When content changes
`memory/session-log.md`	Append-only session history	Last entry at start	Appended every session end
`memory/problems.md`	Persistent problem registry	Active+recurring every session	When problems change
`memory/solutions-log.md`	Proven patterns + solutions	On new phase or problem hit	When solutions proven
`peers/peer-registry.md`	Peer paths + reading rules	Every session	When peers change
`peers/peer-digest.md`	This project's digest for future peers	Never (write only)	Every session end
---
8. Component Creation Checklist
When creating any new component:
[ ] Determine type: page / feature / ui / layout
[ ] Place in correct directory per architecture rules
[ ] Server Component unless interactivity required
[ ] Use `cn()` from `lib/utils.ts` for conditional classes
[ ] Accept `className` prop if it is a ui/ component
[ ] Named export only
[ ] Add TypeScript interface to `types/index.ts` if new data shape
[ ] Add static data to `lib/constants.ts` if new content
[ ] Update `context/content-directory.md` if new page or content section
---
9. Blog Feature Rules
New post: add to `BLOG_POSTS` in `lib/constants.ts`
Rich content: add to `BLOG_POST_DETAILS` keyed by slug with `sections` for TOC
SSG routes pick up new posts automatically via `generateStaticParams()`
Client components in blog — do NOT convert to server:
ReadingProgressBar, CategoryFilter, SearchBar, Pagination
---
10. SEO Rules
Every page must export a metadata object:
```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description.",
  openGraph: { ... },
};
```
Root layout defines `title.template` — child pages set plain title string only.
---
11. Security Rules
No secrets in any tracked file
`.env.local` is gitignored — verify before every commit
No API keys in component files or constants
---
12. n8n Rules (if MTECH_ workflows are built)
All workflows prefixed: `MTECH_`
Check `n8n/workflow-inventory.md` before creating any workflow
Shared instance also has `AUREA_` and `DONNA_` workflows — never overwrite
If collision detected: stop and report to user before proceeding
---
13. Peer Project Intelligence
Peers this project reads (one-way)
Peer	ID	Prefix	Digest path
Scripe AI	AUREA	AUREA_	See peer-registry.md
Donna Assistant	DONNA	DONNA_	See peer-registry.md
This project is NOT yet registered in AUREA or DONNA peer registries.
When hookup is ready: add MTECH entry to AUREA's peers/peer-registry.md
and optionally DONNA's. No changes needed here when that happens.
What to look for in peer digests
Scan for relevance to CURRENT work only — do not read broadly:
n8n patterns relevant to any MTECH_ workflows being built
Claude API prompt structures (if content generation is added later)
Docker + infrastructure patterns (shared VPS)
Testing + verification patterns
Problem-solution records — problems peers solved that may affect this project
When to do a deep peer read
New feature phase starting → read peer solutions-log.md
Unsolved problem hit → read peer problems.md
Explicit user request → read whatever is asked
Borrow proposal — mandatory format
```
─────────────────────────────────────────────
BORROW SUGGESTION
─────────────────────────────────────────────
Source:        [AUREA or DONNA] — [solution_id or name]
What it is:    [one sentence]
Applies to:    [which Morgatech task or feature]
What changes:  [exact file or component added/modified]
What it does NOT touch: [existing working components]

⚠️  MANDATORY VERIFICATION TESTS — CANNOT BE SKIPPED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Test 1: [specific thing to verify still works]
[ ] Test 2: [specific thing to verify still works]
[ ] Test 3: [new thing to verify works correctly]
[ ] Build check: npm run build passes with no errors
[ ] Shared infra check: AUREA_ and DONNA_ workflows unaffected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Awaiting your approval. Reply YES to apply or NO to skip.
─────────────────────────────────────────────
```
Safety boundary
Borrows ONLY add new functionality or replace not-yet-built components
Borrows NEVER modify existing working code
No borrow proceeds without the test checklist above
After approval: log to memory/session-log.md with what was applied + tests completed
Digest generation rules (session end STEP 5)
Overwrite peers/peer-digest.md with:
last_generated: today's date
active_phase: current work area (e.g. "Blog feature", "Services pages")
last_session: one-line summary from session-log last entry
Active problems where peer_relevant: yes
Recently proven patterns from solutions-log (last 30 days)
content_directory_available: yes — path to context/content-directory.md
Any shared infrastructure warnings
