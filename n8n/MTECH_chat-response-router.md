# MTECH_chat-response-router — Workflow Companion (n8n ID: 1z3mY2In6IfSIGAB)
# Read this instead of the JSON. Open the JSON only when making changes.
# Note: JSON not stored locally — export from n8n if needed.
# Last verified: 2026-05-17

## Purpose
Routes the LLM response to the correct output format. Handles booking intents by checking availability and returning a booking card.

## Trigger
Called by chat-main-MTECH (Execute Workflow node)

## Node Flow
Execute Workflow Trigger → Detect Intent (Switch)
  - booking  → Check Availability → Build Booking Response (BookingCard or "call us")
  - faq      → Format FAQ Response
  - general  → Pass Through Response

## Key Behaviours
- Check Availability is currently STUBBED — returns `{ available_slots: [] }` (Code node, not real HTTP call)
- Real HTTP call to MTECH_Availability_Check was crashing on non-JSON response — stubbed as workaround
- Build Booking Response: shows booking form when no slots returned (from stub)
- Restoring the real HTTP call is APPROVED but not yet implemented (borrow from SESSION 005)

## Pending Implementation
STEP 1: Restore Check Availability as HTTP call to https://n8n.sagehive.cloud/webhook/mtech-availability with body { date }
STEP 2: Create app/api/book/route.ts — POST to mtech-booking webhook with x-chat-secret header
STEP 3: Update BookingCard in ChatWidget.tsx — replace anchor with async POST to /api/book

## Status
✅ Active (with stubbed availability check)
⚠️ Booking integration borrow approved — not yet implemented
