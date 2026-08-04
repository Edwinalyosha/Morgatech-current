# MTECH_chat-main — Workflow Companion (n8n ID: k10kxPXXfkTsUWzz)
# Read this instead of the JSON. Open the JSON only when making changes.
# Note: JSON not stored locally — export from n8n if needed.
# Last verified: 2026-05-17

## Purpose
Main entry point for the Lana chat widget. Receives user messages, manages session routing, and returns the final response to the website.

## Trigger
Webhook — POST (from app/api/chat/route.ts via x-chat-secret header)

## Node Flow
Webhook → Extract Request → Session Timed Out? (IF)
  - TRUE  → Reset Session
  - FALSE → Prepare Prompt Input (Set node — bundles session data + user_message)
            → Call PromptAssembler → Call LLM (chat-gemini-caller) → Call Response Router
→ Send Response

## Key Behaviours
- "Prepare Prompt Input" Set node is critical — without it, user_message is undefined in PromptAssembler
- Session timeout check delegates to chat-session-manager
- All sub-workflows called via Execute Workflow node

## Integrations
- Calls: chat-session-manager-MTECH, chat-gemini-caller-MTECH, chat-response-router-MTECH, chat-state-writer-MTECH

## Status
✅ Active — confirmed working end-to-end (execution 8547)
