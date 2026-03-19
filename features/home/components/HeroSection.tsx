"use client";
import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { HOME_IMAGES, BUSINESS } from "@/lib/constants";
import { useBooking } from "@/hooks/useBooking";

export function HeroSection() {
  const { openBooking } = useBooking();
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/40 z-10" />
      <Image
        src={HOME_IMAGES.hero}
        alt="Modern high-quality professional automotive mechanic workshop interior"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Certified Expert Mechanics
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Trusted Auto Repair <br />
            <span className="text-primary">in Beltsville</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
            Certified mechanics, honest pricing, and fast repairs. We keep your
            vehicle running at peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={openBooking}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MaterialIcon name="calendar_month" />
              Book Appointment
            </button>
            <a
              href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`}
              className="bg-slate-800/80 hover:bg-slate-700 text-white backdrop-blur-md px-8 py-4 rounded-xl text-lg font-bold border border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <MaterialIcon name="phone_in_talk" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
