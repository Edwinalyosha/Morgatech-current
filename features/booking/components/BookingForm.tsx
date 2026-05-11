"use client";

import { useState, useEffect } from "react";
import { useBookingContext } from "@/providers/BookingContext";
import { SERVICES } from "@/lib/constants";

interface BookingFormData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

interface AvailabilityResponse {
  date: string;
  available_slots: string[];
  error?: string;
}

interface BookingConfirmation {
  success: boolean;
  message: string;
  appointment?: { service: string; date: string; time: string };
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayHour}:${String(m).padStart(2, "0")} ${period}`;
}

function todayMin(): string {
  return new Date().toISOString().split("T")[0];
}

interface Props {
  onClose: () => void;
}

export function BookingForm({ onClose }: Props) {
  const { preselectedService } = useBookingContext();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<BookingFormData>({
    service: preselectedService || SERVICES[0].title,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  useEffect(() => {
    if (!form.date) return;
    setLoadingSlots(true);
    setSlotsError("");
    setForm((f) => ({ ...f, time: "" }));

    fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: form.date }),
    })
      .then((r) => r.json())
      .then((data: AvailabilityResponse) => {
        if (data.error) {
          setSlotsError(data.error);
          setSlots([]);
        } else {
          setSlots(data.available_slots ?? []);
        }
      })
      .catch(() => setSlotsError("Could not load availability. Please try again."))
      .finally(() => setLoadingSlots(false));
  }, [form.date]);

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: BookingConfirmation = await res.json();
      if (!res.ok) {
        setSubmitError("Booking failed. Please call us at (301)-477-4113.");
        return;
      }
      setConfirmation(data);
      setStep(4);
    } catch {
      setSubmitError("Something went wrong. Please call us at (301)-477-4113.");
    } finally {
      setSubmitting(false);
    }
  }

  const displayDate = form.date
    ? new Date(form.date + "T12:00:00Z").toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 id="booking-title" className="text-xl font-bold text-slate-900">
          Book an Appointment
        </h2>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 transition-colors"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Progress bar */}
      {step < 4 && (
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      )}

      {/* Step 1 — Service + Date */}
      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Service
            </label>
            <select
              value={form.service}
              onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date
            </label>
            <input
              type="date"
              min={todayMin()}
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-slate-500 mt-1">Mon–Fri only · We&apos;re closed on weekends</p>
          </div>

          <button
            disabled={!form.service || !form.date}
            onClick={() => setStep(2)}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            Check Availability
          </button>
        </div>
      )}

      {/* Step 2 — Time Slot */}
      {step === 2 && (
        <div className="space-y-4">
          <p className="text-sm text-slate-600">
            Available times for{" "}
            <span className="font-semibold text-slate-900">{displayDate}</span>
          </p>

          {loadingSlots && (
            <p className="text-sm text-slate-500 text-center py-6">
              Loading availability…
            </p>
          )}
          {slotsError && (
            <p className="text-sm text-red-500 text-center py-6">{slotsError}</p>
          )}
          {!loadingSlots && !slotsError && slots.length === 0 && (
            <p className="text-sm text-slate-500 text-center py-6">
              No availability on this date. Please choose another day.
            </p>
          )}
          {!loadingSlots && slots.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setForm((f) => ({ ...f, time: slot }))}
                  className={`py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                    form.time === slot
                      ? "bg-primary text-white border-primary"
                      : "border-slate-300 text-slate-700 hover:border-primary hover:text-primary"
                  }`}
                >
                  {formatTime(slot)}
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setStep(1)}
              className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Back
            </button>
            <button
              disabled={!form.time}
              onClick={() => setStep(3)}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3 — Personal Info */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your full name"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@example.com"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              placeholder="(301) 000-0000"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Notes
            </label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              placeholder="Describe the issue or anything we should know"
              rows={3}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          {submitError && (
            <p className="text-sm text-red-500">{submitError}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setStep(2)}
              className="flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors"
            >
              Back
            </button>
            <button
              disabled={!form.name || !form.email || submitting}
              onClick={handleSubmit}
              className="flex-1 bg-primary text-white py-3 rounded-xl font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              {submitting ? "Booking…" : "Book Now"}
            </button>
          </div>
        </div>
      )}

      {/* Step 4 — Success */}
      {step === 4 && (
        <div className="text-center space-y-5 py-2">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-green-600" style={{ fontSize: "2rem" }}>
              check_circle
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">You&apos;re booked!</h3>
            <p className="text-slate-500 text-sm">
              A confirmation has been sent to {form.email}
            </p>
          </div>

          {confirmation?.appointment && (
            <div className="bg-slate-50 rounded-xl p-4 text-left space-y-1.5">
              <p className="text-sm">
                <span className="font-medium text-slate-700">Service: </span>
                {confirmation.appointment.service}
              </p>
              <p className="text-sm">
                <span className="font-medium text-slate-700">Date: </span>
                {confirmation.appointment.date}
              </p>
              <p className="text-sm">
                <span className="font-medium text-slate-700">Time: </span>
                {confirmation.appointment.time} ET
              </p>
            </div>
          )}

          <p className="text-xs text-slate-500">
            Need to reschedule? Call{" "}
            <a href="tel:+13014774113" className="text-primary font-medium">
              (301)-477-4113
            </a>
          </p>

          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
