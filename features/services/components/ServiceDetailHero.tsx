"use client";

import Link from "next/link";
import type { ServiceDetail } from "@/types";
import { useBooking } from "@/hooks/useBooking";

interface ServiceDetailHeroProps {
  service: ServiceDetail;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const { openBooking } = useBooking();
  return (
    <section className="py-8">
      <div
        className="relative min-h-[500px] flex flex-col items-start justify-end p-8 lg:p-16 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(16, 25, 34, 0.9), rgba(16, 25, 34, 0.2)), url('${service.heroImage}')`,
        }}
      >
        <div className="max-w-2xl relative z-10">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-primary text-white rounded-full">
            {service.tagline}
          </span>
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
            {service.title} Services
          </h1>
          <p className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-lg">
            {service.description}
          </p>
          <button
            onClick={openBooking}
            aria-label="Schedule Service"
            className="inline-flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25"
          >
            Schedule {service.title} Service
          </button>
        </div>
      </div>
    </section>
  );
}
