Inventory of all MTECH_ workflows on the shared n8n instance.
Update when workflows are created, renamed, or deleted.
Last updated: 2026-05-18
---
Naming Convention
All MTECH workflows: MTECH_
Peer workflows on same instance: AUREA_ and DONNA_
Never create a workflow without prefix — collision risk.
Active Workflows
Workflow name	Phase	Status	Description
MTECH_Availability_Check	Booking	Active	POST /mtech-availability — returns available slots for a date from Google Calendar
MTECH_Booking_Intake	Booking	Active	POST /mtech-booking — creates Google Calendar event, sends confirmation emails
chat-main-MTECH	Chat	Active (k10kxPXXfkTsUWzz)	POST /morgatech-chat — orchestrator; calls all chat sub-workflows in sequence
chat-session-manager-MTECH	Chat	Active (BjTI6AvlMsVwFquk)	Sub-workflow: fetches account config from NocoDB, manages session state and timeout
chat-prompt-assembler-MTECH	Chat	Active	Sub-workflow: slices history, assembles prompt with system prompt + KB
chat-gemini-caller-MTECH	Chat	Active (Jd2NBUwSRF0kSsY0)	Sub-workflow: calls Groq llama-3.3-70b-versatile, parses and validates JSON response
chat-response-router-MTECH	Chat	Active (1z3mY2In6IfSIGAB)	Sub-workflow: routes by intent; Check Availability calls MTECH_Availability_Check webhook
chat-state-writer-MTECH	Chat	Active (mxpQlVgMtFv4wOT5)	Sub-workflow: merges customer/qualification updates, patches NocoDB chat_sessions
Collision Check Rule
Before creating any MTECH_ workflow:
Confirm no existing MTECH_ workflow has the same base name
Confirm no AUREA_ or DONNA_ workflow functionally overlaps
If collision found: stop and report to user.
Retired Workflows
Workflow name	Retired date	Reason
(none yet)	—	—
