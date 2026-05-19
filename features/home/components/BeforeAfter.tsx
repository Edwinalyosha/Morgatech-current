import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { HOME_IMAGES } from "@/lib/constants";

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Precision Results
          </h2>
          <p className="text-slate-600">
            Real examples of our quality craftsmanship
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <Image
                src={HOME_IMAGES.beforeRepair}
                alt="Damaged rusty car engine component before repair"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                Before
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <Image
                src={HOME_IMAGES.afterRepair}
                alt="Clean refurbished car engine component after repair"
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                After
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:pl-12">
            <h3 className="text-3xl font-black mb-6">Quality You Can See</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don&apos;t just fix cars; we restore them. Our technicians use
              state-of-the-art tools and genuine parts to ensure every repair
              meets factory standards. From engine overhauls to cosmetic
              detailing, our attention to detail is unmatched in Beltsville.
            </p>
            <ul className="space-y-4">
              {[
                "Certified Technicians",
                "24-Month / 24k Mile TechNet Warranty",
                "Advanced Diagnostic Equipment",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-semibold text-primary"
                >
                  <MaterialIcon name="check_circle" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
