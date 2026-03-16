import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { ServiceDetail } from "@/types";

interface SymptomsSectionProps {
  service: ServiceDetail;
}

export function SymptomsSection({ service }: SymptomsSectionProps) {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">
          Common {service.title} Symptoms
        </h2>
        <p className="mt-2 text-slate-600">
          If you notice any of these, it&apos;s time for an inspection
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {service.symptoms.map((symptom) => (
          <div
            key={symptom.title}
            className="bg-white border border-slate-200 p-6 rounded-xl hover:border-primary/50 transition-colors shadow-sm"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
              <MaterialIcon name={symptom.icon} />
            </div>
            <h4 className="text-lg font-bold mb-2 text-slate-900">
              {symptom.title}
            </h4>
            <p className="text-sm text-slate-600">{symptom.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
