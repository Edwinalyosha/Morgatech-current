"use client";
import Link from "next/link";
import { useBooking } from "@/hooks/useBooking";

export function ServicesHero() {
  const { openBooking } = useBooking();
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-slate-600 mb-6">
            Expert car care for your vehicle&apos;s performance and longevity.
            From routine maintenance to complex repairs, our trusted automotive
            specialists are at your service.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={openBooking}
              aria-label="Schedule Service"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 cursor-pointer"
            >
              Schedule Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
