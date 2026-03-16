import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function Mission() {
  return (
    <section className="py-16 bg-primary/5 rounded-2xl px-8 md:px-16 mb-16 border border-primary/10">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <MaterialIcon name="verified" className="text-5xl text-primary" />
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
          Our Mission
        </h2>
        <p className="text-xl text-slate-800 italic font-medium leading-relaxed">
          &ldquo;To redefine the automotive repair experience by delivering
          uncompromising quality, radical transparency, and a level of customer
          satisfaction that builds lifelong relationships.&rdquo;
        </p>
      </div>
    </section>
  );
}
