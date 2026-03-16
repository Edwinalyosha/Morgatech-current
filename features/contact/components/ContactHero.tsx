import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CONTACT_IMAGES, BUSINESS } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="relative py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl md:rounded-3xl min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-slate-50 border border-slate-200">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={CONTACT_IMAGES.hero}
              alt="Professional auto repair shop interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/40 to-white" />
          <div className="relative z-10 max-w-2xl px-4">
            <h1 className="text-slate-900 text-4xl md:text-6xl font-black mb-4 tracking-tight">
              Contact Morgatech Auto Repair
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8">
              We&apos;re here to help with your vehicle repair and maintenance
              needs. Expert service you can trust.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/booking"
                className="flex items-center gap-2 rounded-xl h-12 px-8 bg-primary text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                <MaterialIcon name="calendar_month" />
                Schedule Service
              </Link>
              <a
                href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2 rounded-xl h-12 px-8 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm"
              >
                <MaterialIcon name="call" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
