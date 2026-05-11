# Morgatech Site — Session Progress Log

---

## Session 3 — 2026-04-30

### Completed
- **Google Places reviews** wired up end-to-end (live data, server-side, 1hr cache, fallback to static)
  - `lib/google-places.ts` — fetches from Places API (New), filters <4 stars, fixes smart-quote encoding
  - `app/page.tsx` — now `async`, fetches live reviews, falls back to `REVIEWS` from constants if API fails
  - `features/reviews/components/ReviewsSection.tsx` — accepts optional `rating` and `totalRatings` props, renders real numbers (4.5 / 70 reviews)
  - `.env.local` created with `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID=ChIJv16F3tLDt4kRCxcvuISWvcI`
  - API confirmed live: 4.5 stars, 70 ratings
- **Contact page fixes** in `lib/constants.ts`
  - Email: `service@morgatech.com` → `info@morgatechauto.com` (updated in both `BUSINESS.email` and the contact card)
  - Address card value: `123 Industrial Way` → `6713 Ammendale Rd` (subtitle already had `Beltsville, MD 20705`)

### Committed & Ready to Deploy
All changes from Sessions 2 and 3 have been staged and committed locally. To deploy:
```bash
git push origin redesign-nextjs
# Then on VPS:
ssh root@<vps-ip>
cd /root/docker/morgatech/website/Morgatech-current/Morgatech-current/
./deploy.sh
```

**Important — after deploy, create `.env.local` on the VPS manually** (it's gitignored):
```bash
nano .env.local
```
```
GOOGLE_PLACES_API_KEY=<key>
GOOGLE_PLACE_ID=ChIJv16F3tLDt4kRCxcvuISWvcI
```
Then restart the container:
```bash
docker restart morgatech-app
```

### Tekmetric API — Blocked
- User has a Tekmetric partner account but credentials are over a year old
- Single key in env (`TEKMETRIC_API_KEY`) was tested — it's a `client_id` but Tekmetric requires both `client_id` + `client_secret`
- User emailing Tekmetric support to get credentials reissued
- Once resolved, update `.env.local`:
  ```
  TEKMETRIC_CLIENT_ID=...
  TEKMETRIC_CLIENT_SECRET=...
  ```

### Next Up — Chat Bot (planned, not started)
Full architecture documented in `C:\Users\edwin\.claude\plans\structured-foraging-owl.md`. Summary:

- **No RAG needed** — all business info fits in a system prompt from `lib/constants.ts`
- **Stack:** Claude API (Haiku or Sonnet) → Next.js streaming Route Handler → chat panel UI
- **Appointment booking:** Claude tool call → n8n webhook (`MTECH_BookAppointment`) → Tekmetric API *(blocked on credentials)*
- **Files to create:**
  - `app/api/chat/route.ts` — streaming chat endpoint
  - `lib/chat-prompt.ts` — system prompt builder
  - `components/ui/ChatPanel.tsx` — slide-up chat UI
  - Modify `components/ui/ChatWidget.tsx` — open panel instead of tooltip
- **Env vars needed:** `ANTHROPIC_API_KEY`, `N8N_CHAT_WEBHOOK_URL`, `TEKMETRIC_CLIENT_ID`, `TEKMETRIC_CLIENT_SECRET`

### Next Session Priorities
1. Push to VPS + set `.env.local` on server
2. Build chat UI + Claude integration (can do without Tekmetric)
3. Wire Tekmetric booking once credentials arrive
4. On-page SEO copy improvements (user's stated next focus)

---

## Session 2 — 2026-04-29

### Completed
- **PunchlineSection** added between HeroSection and ServicesGrid (`features/home/components/PunchlineSection.tsx`)
  - White background, faded black text, emotional one-liner, centered, no callout
  - `app/page.tsx` updated to render it between the two sections
  - `ServicesGrid.tsx` top padding reduced from `py-24` → `pt-4 pb-24` to close the gap
- **Business hours updated** across the entire site in `lib/constants.ts`
  - Open: Mon–Fri 9:00 AM – 6:00 PM
  - Sat: Closed / Sun: Closed

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

### Key Fixes Documented
See `memory/feedback_chatwidget.md` for the full pattern to avoid repeating iOS Safari and flex-width bugs.
