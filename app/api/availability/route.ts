import { NextRequest, NextResponse } from "next/server";

const N8N_BASE = process.env.N8N_BASE_URL ?? "https://n8n.sagehive.cloud";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.date) {
    return NextResponse.json({ error: "date is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${N8N_BASE}/webhook/mtech-availability`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: body.date }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ error: "Could not reach booking service" }, { status: 502 });
  }
}
