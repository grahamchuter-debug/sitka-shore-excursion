import type { Metadata } from "next";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { TourDetail, TourCard } from "@/components/TourCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CruiseConfidenceGuide } from "@/components/CruiseSections";
import { CTAButton } from "@/components/CTAButton";
import { TOURS } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitka Shore Excursions & Tours",
  description:
    "Browse all Sitka Alaska shore excursions — bear viewing, raptor center, totem poles, whale watching, rainforest walks, and private tours for cruise passengers.",
};

export default function ExcursionsPage() {
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Excursions", href: "/excursions/" }])),
          ...TOURS.map((t) => tourProductSchema(t)),
        ]}
      />
      <section className="bg-forest-900 text-mist-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-4xl mb-4">Sitka Shore Excursions</h1>
          <p className="text-mist-200 max-w-2xl leading-relaxed">
            Every tour includes duration, activity level, cruise confidence guidance, and return-to-ship advice.
            Compare options and choose the right fit for your port day.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "Excursions", href: "/excursions/" }]} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TOURS.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        <ComparisonTable />

        <div className="mt-16 mb-8">
          <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-2">Full Tour Details</h2>
          <p className="text-forest-700 mb-8">
            Detailed information for every Sitka shore excursion including who should choose each tour.
          </p>
        </div>

        {TOURS.map((tour) => (
          <TourDetail key={tour.id} tour={tour} />
        ))}

        <CruiseConfidenceGuide />

        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/one-day-in-sitka/">Plan Your Sitka Port Day</CTAButton>
          <CTAButton href="/faq/" variant="outline">
            Sitka Excursion FAQ
          </CTAButton>
        </div>
      </div>
    </>
  );
}
