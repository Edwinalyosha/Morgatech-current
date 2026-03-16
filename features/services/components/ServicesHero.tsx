import Link from "next/link";

export function ServicesHero() {
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
            <Link
              href="/booking"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30"
            >
              Schedule Service
            </Link>
            <button className="bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-300 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
