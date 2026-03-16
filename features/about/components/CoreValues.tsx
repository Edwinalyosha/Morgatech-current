import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CORE_VALUES } from "@/lib/constants";

export function CoreValues() {
  return (
    <section className="py-16 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
          Our Core Values
        </h2>
        <p className="text-slate-600 mt-4">
          The pillars that uphold every service we provide.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_VALUES.map((value) => (
          <div
            key={value.title}
            className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col gap-4 hover:border-primary/50 transition-all hover:shadow-lg"
          >
            <MaterialIcon
              name={value.icon}
              className="text-primary text-4xl"
            />
            <h3 className="text-xl font-bold text-slate-900">{value.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
