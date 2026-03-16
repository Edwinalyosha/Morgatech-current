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
          Reliable &amp; Customer-Focused
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Founded on the principles of integrity and excellence, Morgatech has
          been serving the Beltsville community with top-tier automotive care for
          years. Our journey began with a simple goal: to provide honest,
          high-quality repairs that keep our neighbors safe on the road.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed">
          Over the decades, we&apos;ve evolved from a small family-owned shop
          into a state-of-the-art repair center, yet our commitment to
          personalized service remains unchanged. Every vehicle that enters our
          bay is treated with the same precision and care as if it were our own.
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
