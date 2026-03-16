import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { SERVICES } from "@/lib/constants";

export function ServiceDetailGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Professional Automotive Solutions
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              {service.image && (
                <div className="h-56 w-full overflow-hidden relative">
                  <Image
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MaterialIcon
                    name={service.icon}
                    className="text-primary text-3xl"
                  />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <span className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                  Learn More{" "}
                  <MaterialIcon name="arrow_forward" className="text-sm" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
