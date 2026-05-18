import { NextRequest, NextResponse } from "next/server";

const N8N_URL = "https://n8n.sagehive.cloud/webhook/mtech-booking";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = ["name", "phone", "service", "date", "time"];
    for (const field of required) {
      if (!body[field] || typeof body[field] !== "string" || !body[field].trim()) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const response = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "identity",
        "x-chat-secret": process.env.CHAT_SECRET ?? "",
      },
      body: JSON.stringify({
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        service: body.service.trim(),
        date: body.date.trim(),
        time: body.time.trim(),
        notes: body.notes?.trim() ?? "",
      }),
    });

    const raw = await response.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      console.error("[book] n8n returned non-JSON:", raw.slice(0, 200));
      return NextResponse.json({ success: false, error: "Booking service unavailable" }, { status: 502 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ success: false, error: "Booking service unavailable" }, { status: 500 });
  }
}
