import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <section className="py-16 px-6 md:px-10 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 font-medium">
            Quick answers to common questions about our repair services.
          </p>
        </div>
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <div
              key={faq.question}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <h4 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <MaterialIcon name="help" className="text-primary" />
                {faq.question}
              </h4>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
