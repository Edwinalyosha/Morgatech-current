# MTECH_Booking_Intake — Workflow Companion
# Read this instead of the JSON. Open the JSON only when making changes.
# Last verified: 2026-05-17

## Purpose
Creates a Google Calendar booking event and sends confirmation emails to the customer and the shop.

## Trigger
Webhook — POST `/webhook/mtech-booking`
Body: customer details + selected slot

## Node Flow
Webhook → Parse Booking Data → Create Google Calendar Event → Send Customer Confirmation Email → Send Shop Notification Email → Respond

## Data Contract
Input: `{ name, email, phone, service, date, time }`
Output: `{ success: true, event_id, message }` or `{ success: false, error }`

## Key Behaviours
- Creates event on "morgatech calendar" Google Calendar
- Sends two emails: customer confirmation + internal shop notification
- Email sender: "mgtsales email" Gmail credential — ⚠️ needs reconnection (flagged in SESSION 006)

## Credentials
- Google Calendar: "morgatech calendar"
- Gmail: "mgtsales email" — needs reconnection in n8n UI

## Status
✅ Active — imported and tested in n8n
⚠️ Gmail credential disconnected — booking confirmation email will fail until reconnected
