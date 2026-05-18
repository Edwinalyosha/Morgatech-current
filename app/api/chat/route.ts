import { NextRequest, NextResponse } from "next/server";

const N8N_URL = "https://n8n.sagehive.cloud/webhook/morgatech-chat";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.message || typeof body.message !== "string" || !body.message.trim()) {
      return NextResponse.json({ error: "Empty message" }, { status: 400 });
    }

    const secretSet = !!process.env.CHAT_SECRET;
    console.log("[chat] forwarding to n8n — secret set:", secretSet);

    const response = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "identity",
        "x-chat-secret": process.env.CHAT_SECRET ?? "",
      },
      body: JSON.stringify({
        session_id: body.session_id ?? null,
        message: body.message.trim(),
        account_id: "morgatech",
      }),
    });

    console.log("[chat] n8n status:", response.status);
    console.log("[chat] content-type:", response.headers.get("content-type"));
    console.log("[chat] content-encoding:", response.headers.get("content-encoding"));
    const raw = await response.text();
    console.log("[chat] n8n raw response:", raw.slice(0, 500));

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      console.error("[chat] n8n returned non-JSON:", raw.slice(0, 200));
      return NextResponse.json(
        { session_id: null, message: null, intent: "error", booking_form: null, timed_out: false },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { session_id: null, message: null, intent: "error", booking_form: null, timed_out: false },
      { status: 500 }
    );
  }
}
