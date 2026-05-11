import { ABOUT_IMAGES } from "@/lib/constants";

export function AboutHero() {
  return (
    <section className="py-8 md:py-12">
      <div
        className="relative min-h-[500px] flex flex-col items-center justify-center rounded-xl overflow-hidden text-center p-8"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 25, 34, 0.7), rgba(16, 25, 34, 0.8)), url("${ABOUT_IMAGES.hero}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl space-y-6">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            The Auto Repair Shop <br />Beltsville Actually Needs
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-normal max-w-2xl mx-auto">
            7+ years. Family-run. We tell you exactly what we find — and exactly
            what it costs — before we touch anything.
          </p>
          <div className="pt-4">
            <a
              href="/services"
              className="inline-block bg-primary hover:bg-primary/90 text-white rounded-lg h-12 px-8 text-base font-bold transition-all leading-[3rem]"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
