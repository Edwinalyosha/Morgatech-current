"use client"

import Link from "next/link";
import { useBooking } from "@/hooks/useBooking"

export function CTASection() {
  const { openBooking } = useBooking();
  return (
    <section className="py-20">
      <div className="bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-black">
            Ready to hit the road again?
          </h2>
          <p className="text-white/90 text-lg">
            Experience the Morgatech difference. Schedule your inspection or
            service appointment today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/booking"
              onClick={openBooking}
              className="w-full sm:w-auto bg-white text-primary hover:bg-slate-100 rounded-lg h-14 px-10 text-lg font-bold transition-all shadow-xl inline-flex items-center justify-center"
            >
              Schedule Service
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:bg-white/10 rounded-lg h-14 px-10 text-lg font-bold transition-all inline-flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
