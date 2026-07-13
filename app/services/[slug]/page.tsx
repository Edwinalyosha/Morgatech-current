import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailHero } from "@/features/services/components/ServiceDetailHero";
import { ServiceOverview } from "@/features/services/components/ServiceOverview";
import { SymptomsSection } from "@/features/services/components/SymptomsSection";
import { ReviewsSection } from "@/features/reviews/components/ReviewsSection";
import { ServiceCTA } from "@/features/services/components/ServiceCTA";
import { SERVICE_DETAILS, SERVICE_DETAIL_REVIEWS } from "@/lib/constants";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];
  if (!service) return {};

  return {
    title: service.overviewTitle,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.overviewTitle} | Morgatech Auto Repair`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:px-10">
      <ServiceDetailHero service={service} />
      <ServiceOverview service={service} />
      <SymptomsSection service={service} />

      {/* Before / After Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            The Morgatech Standard
          </h2>
          <p className="mt-2 text-slate-600">
            See the difference professional maintenance makes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden aspect-video border-4 border-red-500/20 relative">
              <Image
                src={service.beforeImage}
                alt={service.beforeAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-red-400">Before</span>
              <p className="text-sm text-slate-600">{service.beforeCaption}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden aspect-video border-4 border-green-500/20 relative">
              <Image
                src={service.afterImage}
                alt={service.afterAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-400">After</span>
              <p className="text-sm text-slate-600">{service.afterCaption}</p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection reviews={SERVICE_DETAIL_REVIEWS} showOverallRating={false} />
      <ServiceCTA />
    </div>
  );
}
