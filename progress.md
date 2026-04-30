# Morgatech Site — Session Progress Log

---

## Session 2 — 2026-04-29

### Completed
- **PunchlineSection** added between HeroSection and ServicesGrid (`features/home/components/PunchlineSection.tsx`)
  - White background, faded black text, emotional one-liner, centered, no callout
  - `app/page.tsx` updated to render it between the two sections
  - `ServicesGrid.tsx` top padding reduced from `py-24` → `pt-4 pb-24` to close the gap
- **Business hours updated** across the entire site in `lib/constants.ts`
  - Open: Mon–Fri 9:00 AM – 6:00 PM
  - Sat: Closed
  - Sun: Closed
  - Updated in two places: `BUSINESS.hours` object and the contact card entry

### Pending (uncommitted)
The following files have local changes that have NOT been committed or deployed yet:

| File | Change |
|------|--------|
| `app/page.tsx` | Added PunchlineSection |
| `features/home/components/ServicesGrid.tsx` | Reduced top padding |
| `lib/constants.ts` | Updated business hours |
| `features/home/components/PunchlineSection.tsx` | New file (untracked) |

**To deploy these changes:**
```bash
git add app/page.tsx features/home/components/ServicesGrid.tsx lib/constants.ts features/home/components/PunchlineSection.tsx
git commit -m "Add punchline section and update business hours"
git push origin redesign-nextjs
# Then on VPS:
# cd /root/docker/morgatech/website/Morgatech-current/Morgatech-current/
# ./deploy.sh
```

### Next Up
- **Google Reviews section** — discussed options:
  - Google Places API (free, 5 most recent reviews, requires Google Cloud + API key) ← recommended
  - Third-party widget like Elfsight (~$9–25/mo, more reviews, no backend)
  - Static/curated hardcoded reviews (free, manual)
  - *Action needed: confirm Google Business Profile exists and whether to set up Google Cloud project*
- **Before/After images** — still using external Google URLs; need matching images
  - Located in `lib/constants.ts` at `HOME_IMAGES.beforeRepair` and `HOME_IMAGES.afterRepair`

---

## Session 1 — (prior session, summarized)

### Completed
- VPS deployment: Docker + Caddy setup for `test.morgatechauto.com`
  - `Dockerfile`, `.dockerignore`, `deploy.sh`, `DEPLOYMENT.md` created
  - `next.config.ts` set to `output: "standalone"`
- Floating ChatWidget + call button added (`components/ui/ChatWidget.tsx`)
  - Chat: indigo-violet gradient, speech bubble icon, bottom-right
  - Call: dark blue (`blue-950`), phone icon, mobile only (`md:hidden`)
  - Tooltip "Chat coming soon!" auto-dismisses after 3s, fades in after 1.2s
  - Fixed multiple mobile bugs: iOS Safari transform bug, flex width eating taps
  - `ChatWidgetLoader.tsx` wrapper pattern for `ssr: false` in App Router
  - `allowedDevOrigins` added for local network mobile dev

### Key Fixes Documented
See `memory/feedback_chatwidget.md` for the full pattern to avoid repeating iOS Safari and flex-width bugs.
