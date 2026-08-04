# MTECH_chat-session-manager — Workflow Companion (n8n ID: BjTI6AvlMsVwFquk)
# Read this instead of the JSON. Open the JSON only when making changes.
# Note: JSON not stored locally — export from n8n if needed.
# Last verified: 2026-05-17

## Purpose
Manages chat session lifecycle in NocoDB. Creates new sessions, retrieves existing ones, detects timeouts.

## Trigger
Called by chat-main-MTECH (Execute Workflow node)

## Node Flow
Execute Workflow Trigger → Get Session (NocoDB) → New Session? (IF)
  - NEW    → Create New Session → Get New Session → New Session Output
  - EXISTING → Check Timeout (IF)
    - TIMED OUT → Mark Timed Out → Timed Out Output
    - ACTIVE    → Active Session Output

## Key Behaviours
- NocoDB PK casing fix: `nocodb_session_id` reads `Id || id` (NocoDB inconsistency between read/write responses)
- "Mark Timed Out" uses `genericAuthType: "httpHeaderAuth"` (fixed from "headerAuth")
- Session data stored in NocoDB chat_sessions table

## Status
✅ Active
