import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            How It Works
          </h2>
          <p className="text-slate-600">
            Simple 4-step process to get you back on the road
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-primary/20 z-0" />
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg shadow-primary/40">
                {step.number}
              </div>
              <h4 className="text-lg font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
