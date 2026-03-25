export function NewsletterSection() {
  return (
    <section className="bg-slate-900 py-24 mt-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-white tracking-tight leading-none">
            Stay Ahead of the Curve.
          </h2>
          <p className="text-slate-400 text-lg">
            Join 5,000+ car enthusiasts and owners getting monthly maintenance
            alerts and exclusive performance tips.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary outline-none transition-all placeholder:text-white/50"
            placeholder="Enter your email"
          />
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-xl hover:shadow-primary/30 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
