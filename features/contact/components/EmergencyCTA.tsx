import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BUSINESS } from "@/lib/constants";

export function EmergencyCTA() {
  return (
    <section className="py-12 px-6 md:px-10 bg-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black mb-2">
            Need Emergency Assistance?
          </h3>
          <p className="text-white/80">
            Call our 24/7 roadside assistance hotline for immediate help.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${BUSINESS.emergency.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-black text-lg hover:bg-slate-100 transition-colors"
          >
            <MaterialIcon name="call" />
            {BUSINESS.emergency}
          </a>
        </div>
      </div>
    </section>
  );
}
