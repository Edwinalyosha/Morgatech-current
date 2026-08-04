# MTECH_chat-gemini-caller — Workflow Companion (n8n ID: Jd2NBUwSRF0kSsY0)
# Read this instead of the JSON. Open the JSON only when making changes.
# Note: JSON not stored locally — export from n8n if needed.
# Last verified: 2026-05-17

## Purpose
Calls the LLM (Groq/Gemini via chainLlm) with the assembled prompt and returns the response text.

## Trigger
Called by chat-main-MTECH (Execute Workflow node)

## Node Flow
Execute Workflow Trigger → Build Messages → chainLlm (Groq) → Parse Response → Return

## Key Behaviours
- Model: `llama-3.3-70b-versatile` on Groq (openai/gpt-oss-120b does not exist — was fixed)
- System prompt delivered with `"type": "SystemMessage"` in chainLlm messages array
- Parse Gemini Response reads `raw.text || raw.output || ''` (chainLlm outputs "text" not "output")

## Status
✅ Active
