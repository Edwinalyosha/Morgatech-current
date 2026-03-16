import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

interface ServiceCTAProps {
  title?: string;
}

export function ServiceCTA({ title = "Don't Wait Until It's Too Late" }: ServiceCTAProps) {
  return (
    <section className="py-16 text-center">
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-12 lg:p-20">
        <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="text-lg mb-10 max-w-xl mx-auto text-slate-600">
          Get a professional inspection today and ensure your vehicle is ready
          for any situation on the road.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/booking"
            className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform text-lg"
          >
            Schedule Service
          </Link>
          <a
            href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`}
            className="w-full sm:w-auto px-10 py-4 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors text-lg text-slate-900"
          >
            Call Us: {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
