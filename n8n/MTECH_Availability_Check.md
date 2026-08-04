# MTECH_Availability_Check — Workflow Companion
# Read this instead of the JSON. Open the JSON only when making changes.
# Last verified: 2026-05-17

## Purpose
Returns available booking time slots for a given date. Called by the website booking modal and (planned) by the chat booking flow.

## Trigger
Webhook — POST `/webhook/mtech-availability`
Body: `{ date }` — ISO date string

## Node Flow
Webhook → Parse Date → Generate Candidate Slots → Google Calendar Freebusy Check → Filter Busy Slots → Respond

## Data Contract
Input: `{ date: "YYYY-MM-DD" }`
Output: `{ available_slots: ["09:00", "10:00", ...] }` — array of HH:MM strings for open slots

## Key Behaviours
- Checks Google Calendar for existing events in the given day
- Returns only slots that are not blocked
- Currently stubbed in chat-response-router-MTECH (returns empty array) — restore HTTP call when wiring booking into chat

## Credential
Google Calendar credential: "morgatech calendar"

## Status
✅ Active — imported and tested in n8n
