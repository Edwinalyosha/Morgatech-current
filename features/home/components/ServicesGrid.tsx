import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/constants";

export function ServicesGrid() {
  const homeServices = SERVICES.slice(0, 6);

  return (
    <section className="pt-4 pb-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Professional Services" showUnderline />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/50 hover:bg-white transition-all shadow-sm"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <MaterialIcon name={service.icon} className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
