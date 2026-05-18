"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";
import type { ChatMessage, ChatApiResponse, ChatBookingForm } from "@/types";

const SESSION_KEY = "morgatech_chat_session";

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm Lana, Morgatech's virtual assistant. Ask me about our services, availability, or what's going on with your car — I can also help you book a repair appointment.",
};

function formatSlot(iso: string): string {
  return new Date(iso).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

const TIME_OPTIONS = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "15:00","15:30","16:00","16:30","17:00","17:30",
];

function fmtHHMM(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  return `${h % 12 || 12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function slotTimeFromISO(iso: string): string {
  return iso.split("T")[1]?.slice(0, 5) ?? "";
}

function BookingCard({ form }: { form: ChatBookingForm }) {
  const slots = form.available_slots ?? [];
  const hasConfirmed = !!form.confirmed_slot;

  type Phase = "slots" | "form" | "submitting" | "success" | "error";
  const [phase, setPhase] = useState<Phase>(
    hasConfirmed || slots.length === 0 ? "form" : "slots"
  );
  const [selTime, setSelTime] = useState<string>(() => {
    if (form.confirmed_slot) return slotTimeFromISO(form.confirmed_slot);
    if (form.alternative_slot) return slotTimeFromISO(form.alternative_slot);
    return "";
  });
  const [selDate, setSelDate] = useState<string>(form.date ?? "");
  const [name, setName] = useState(form.prefill.name ?? "");
  const [phone, setPhone] = useState(form.prefill.phone ?? "");
  const [email, setEmail] = useState(form.prefill.email ?? "");

  const canSubmit = name.trim() && phone.trim() && selDate && selTime && phase !== "submitting";

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setPhase("submitting");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          service: form.prefill.service_type ?? "Auto Repair",
          date: selDate,
          time: selTime,
          notes: form.prefill.vehicle ? `Vehicle: ${form.prefill.vehicle}` : "",
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPhase(data.success ? "success" : "error");
    } catch {
      setPhase("error");
    }
  };

  const inputCls =
    "w-full rounded-lg border border-indigo-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-200";

  if (phase === "success") return (
    <div className="mt-2.5 rounded-xl border border-green-200 bg-green-50 p-3">
      <p className="text-xs font-semibold text-green-700">
        Booked! We&apos;ll see you then — check your email for confirmation.
      </p>
    </div>
  );

  if (phase === "error") return (
    <div className="mt-2.5 rounded-xl border border-red-200 bg-red-50 p-3">
      <p className="text-xs text-red-600">
        Couldn&apos;t confirm online — please call us at (301)-477-4113.
      </p>
    </div>
  );

  if (phase === "slots") return (
    <div className="mt-2.5 space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-3">
      <p className="text-xs font-semibold text-indigo-700">
        Available times{form.date ? ` for ${form.date}` : ""}:
      </p>
      <div className="flex flex-wrap gap-1.5">
        {slots.map((t) => (
          <button
            key={t}
            onClick={() => { setSelTime(t); setPhase("form"); }}
            className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-300 transition-colors hover:bg-indigo-100"
          >
            {fmtHHMM(t)}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="mt-2.5 space-y-2 rounded-xl border border-indigo-200 bg-indigo-50 p-3">
      {(hasConfirmed || selTime) && (
        <p className="text-xs font-semibold text-indigo-700">
          {hasConfirmed
            ? `Confirmed: ${formatSlot(form.confirmed_slot!)}`
            : `${fmtHHMM(selTime)}${selDate ? ` on ${selDate}` : ""}`}
        </p>
      )}

      <div className="space-y-1.5">
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Your name *" className={inputCls}
        />
        <input
          type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number *" className={inputCls}
        />
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (for confirmation)" className={inputCls}
        />
        {!selDate && (
          <input
            type="date" value={selDate} onChange={(e) => setSelDate(e.target.value)}
            className={inputCls}
          />
        )}
        {!selTime && (
          <select value={selTime} onChange={(e) => setSelTime(e.target.value)} className={inputCls}>
            <option value="">Select a time *</option>
            {TIME_OPTIONS.map((t) => (
              <option key={t} value={t}>{fmtHHMM(t)}</option>
            ))}
          </select>
        )}
      </div>

      <div className="flex items-center gap-2">
        {slots.length > 0 && !hasConfirmed && (
          <button
            onClick={() => setPhase("slots")}
            className="shrink-0 text-xs text-indigo-600 hover:underline"
          >
            ← Times
          </button>
        )}
        <button
          onClick={() => void handleSubmit()}
          disabled={!canSubmit}
          className="flex-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-indigo-700 disabled:opacity-50"
        >
          {phase === "submitting" ? "Booking…" : "Confirm Appointment"}
        </button>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
        L
      </div>
      <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [welcomeSent, setWelcomeSent] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    if (stored) setSessionId(stored);
  }, []);

  // Prevent body scroll when chat is full-screen on mobile
  useEffect(() => {
    if (open && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Animate welcome message in when chat first opens
  useEffect(() => {
    if (!open || welcomeSent) return;
    setLoading(true);
    const t = setTimeout(() => {
      setLoading(false);
      setMessages([WELCOME]);
      setWelcomeSent(true);
    }, 1200);
    return () => clearTimeout(t);
  }, [open, welcomeSent]);

  const fallbackText = `I'm having a little trouble right now — please try again in a moment, or call us directly at ${BUSINESS.phone}.`;

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: text, account_id: "morgatech" }),
      });

      if (!res.ok) throw new Error("API error");
      const data: ChatApiResponse = await res.json();

      if (data.timed_out) {
        localStorage.removeItem(SESSION_KEY);
        setSessionId(null);
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text: data.message }]);
        return;
      }

      if (data.session_id) {
        setSessionId(data.session_id);
        localStorage.setItem(SESSION_KEY, data.session_id);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "bot",
          text: data.intent === "error" ? fallbackText : data.message,
          intent: data.intent,
          booking_form: data.booking_form,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "bot", text: fallbackText },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, sessionId, loading, fallbackText]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  const telHref = `tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className={cn(
            "fixed z-[75] flex flex-col bg-white",
            "inset-0",
            "md:inset-auto md:bottom-[92px] md:right-6 md:w-[380px] md:h-[520px]",
            "md:rounded-2xl md:shadow-2xl md:shadow-slate-900/20 md:ring-1 md:ring-slate-200"
          )}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 bg-blue-950 px-4 py-3 md:rounded-t-2xl">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-400/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-indigo-300">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223Z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white">Morgatech Auto</p>
              <p className="text-xs text-slate-400">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn("flex items-end gap-2", msg.role === "user" && "flex-row-reverse")}
                >
                  {msg.role === "bot" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">
                      L
                    </div>
                  )}
                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                      msg.role === "bot"
                        ? "rounded-tl-sm bg-white text-slate-700 shadow-sm ring-1 ring-slate-200"
                        : "rounded-tr-sm bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                    )}
                  >
                    {msg.text}
                    {msg.role === "bot" && msg.intent === "booking" && msg.booking_form && (
                      <BookingCard form={msg.booking_form} />
                    )}
                  </div>
                </div>
              ))}
              {loading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="shrink-0 border-t border-slate-200 bg-white px-3 py-3 md:rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={loading}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 disabled:opacity-50"
              />
              <button
                onClick={() => void send()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white transition-opacity disabled:opacity-40"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAB stack */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 transition-opacity duration-500",
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Mobile call button — hidden when chat is open on mobile */}
        <a
          href={telHref}
          aria-label="Call us"
          className={cn(
            "md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg shadow-blue-950/50 transition-transform duration-200 hover:scale-105 active:scale-95",
            open && "hidden"
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Chat FAB */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close chat" : "Chat with us"}
          aria-expanded={open}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-95",
            open
              ? "bg-slate-700 shadow-slate-700/40"
              : "bg-gradient-to-br from-indigo-500 to-violet-600 shadow-indigo-500/40"
          )}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
