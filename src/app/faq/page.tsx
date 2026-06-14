import type { Metadata } from "next";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { FAQList } from "@/components/FAQList";
import { FAQ_ITEMS } from "@/data/faq";
import { CruiseConfidenceGuide } from "@/components/CruiseSections";
import { CTAButton } from "@/components/CTAButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitka Shore Excursion FAQ",
  description:
    "Frequently asked questions about Sitka Alaska shore excursions — bears, tender boats, weather, cruise confidence, whale watching, and family-friendly tours.",
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "FAQ", href: "/faq/" }])),
          faqSchema(FAQ_ITEMS),
        ]}
      />
      <section className="bg-forest-900 text-mist-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-4xl mb-4">Sitka Shore Excursion FAQ</h1>
          <p className="text-mist-200 max-w-2xl leading-relaxed">
            Answers to common questions from cruise passengers planning their Sitka port day.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "FAQ", href: "/faq/" }]} />
        <FAQList />
        <div className="mt-12">
          <CruiseConfidenceGuide />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/excursions/">Check Tour Options</CTAButton>
          <CTAButton href="/one-day-in-sitka/" variant="outline">
            Plan Your Sitka Port Day
          </CTAButton>
        </div>
      </div>
    </>
  );
}
