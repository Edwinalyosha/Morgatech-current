import type { ServiceDetail } from "@/types";

interface ServiceOverviewProps {
  service: ServiceDetail;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="py-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
          Expert Care
        </h2>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-slate-900">
          {service.overviewTitle}
        </h3>
        <div className="space-y-4 text-lg leading-relaxed text-slate-600">
          {service.overviewText.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-2 gap-6 text-center">
          {service.stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-lg bg-slate-50">
              <div className="text-primary text-3xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
