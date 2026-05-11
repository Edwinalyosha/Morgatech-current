import Image from "next/image";
import { ABOUT_IMAGES } from "@/lib/constants";

export function CompanyStory() {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 text-primary">
          <span className="h-px w-8 bg-primary" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Our Story
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
          7+ Years Serving Beltsville and the Surrounding Area
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Morgatech Auto Repair has been the go-to mechanic for drivers in
          Beltsville, College Park, Laurel, Greenbelt, and across Prince
          George&apos;s County for over 7 years. We&apos;re a family-run shop
          and proud of it — small means we know your name, remember your car,
          and give every job the attention it deserves.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          Our technicians are trained to diagnose first and repair second. We
          follow the fault to its actual cause — not just the part a code
          happens to point to. That approach is how we catch what other shops
          miss, and it&apos;s why drivers keep coming back to us for brakes,
          suspension, cooling systems, and everything in between.
        </p>
      </div>
      <div className="rounded-xl overflow-hidden aspect-video shadow-2xl relative">
        <Image
          src={ABOUT_IMAGES.mechanics}
          alt="Professional mechanics working together on a car engine in workshop"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
