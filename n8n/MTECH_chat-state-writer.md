# MTECH_chat-state-writer — Workflow Companion (n8n ID: mxpQlVgMtFv4wOT5)
# Read this instead of the JSON. Open the JSON only when making changes.
# Note: JSON not stored locally — export from n8n if needed.
# Last verified: 2026-05-17

## Purpose
Writes updated session state back to NocoDB after each chat turn.

## Trigger
Called by chat-main-MTECH (Execute Workflow node)

## Node Flow
Execute Workflow Trigger → Has Valid PK? (IF)
  - YES → PATCH session in NocoDB
  - NO  → Skip (no-op)

## Key Behaviours
- "Has Valid PK?" IF node added to guard against ERR_INVALID_PK_VALUE crash when nocodb_session_id is null
- Without this guard, a null PK crashes the entire chat flow

## Status
✅ Active
