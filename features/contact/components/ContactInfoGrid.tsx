import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { CONTACT_CARDS } from "@/lib/constants";

export function ContactInfoGrid() {
  return (
    <section className="py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONTACT_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MaterialIcon name={card.icon} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {card.title}
            </h3>
            <p className="text-slate-500 text-sm mb-2">{card.subtitle}</p>
            <p className="text-primary font-bold text-lg">{card.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
