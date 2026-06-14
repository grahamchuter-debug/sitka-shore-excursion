import { Hero } from "@/components/TourCard";
import { CTAGroup } from "@/components/CTAButton";
import { CruiseSnapshot, CruiseConfidenceGuide, BestToursByTraveller } from "@/components/CruiseSections";
import { WildlifeHighlights } from "@/components/WildlifeHighlights";
import { ComparisonTable } from "@/components/ComparisonTable";
import { TourCard } from "@/components/TourCard";
import { InlineLinks } from "@/components/ThemePageLayout";
import { TOURS } from "@/data/tours";
import { IMAGES, SITE, THEME_LINKS } from "@/data/site";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";
import { tourProductSchema } from "@/lib/schema";

export default function HomePage() {
  const featured = TOURS.slice(0, 6);

  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema([{ name: "Home", url: SITE.url }]),
          ...featured.map((t) => tourProductSchema(t)),
        ]}
      />
      <Hero
        title="Sitka Shore Excursions for Cruise Passengers"
        subtitle="Bears, bald eagles, totem poles, temperate rainforest, and Sitka Sound marine wildlife — experience Alaska's most captivating wildlife port on Baranof Island."
        image={IMAGES.hero.src}
        imageAlt={IMAGES.hero.alt}
      >
        <CTAGroup />
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section className="prose-sitka max-w-3xl">
          <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-4">
            Alaska&apos;s Wildlife, Rainforest &amp; Coastal Port
          </h2>
          <p className="text-forest-700 leading-relaxed mb-4">
            Nestled between mountains and sea on Baranof Island, Sitka is one of Alaska&apos;s most scenic and
            culturally rich ports of call. Deep ties to Tlingit heritage and Russian colonial history meet dramatic
            coastal scenery, abundant wildlife, and a laid-back atmosphere perfect for your cruise port day.
          </p>
          <p className="text-forest-700 leading-relaxed">
            From Fortress of the Bear and the Alaska Raptor Center to totem poles at Sitka National Historical Park
            and whale watching in Sitka Sound, every excursion showcases the wild heart of Southeast Alaska.
          </p>
        </section>

        <CruiseSnapshot />
        <WildlifeHighlights />

        <section>
          <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-2">Featured Sitka Shore Excursions</h2>
          <p className="text-forest-700 mb-8">Curated tours for cruise passengers with clear confidence guidance.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="mt-8">
            <CTAGroup />
          </div>
        </section>

        <BestToursByTraveller />
        <ComparisonTable />
        <CruiseConfidenceGuide />

        <section>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Explore by Tour Theme</h2>
          <InlineLinks links={THEME_LINKS.map((l) => ({ href: l.href, label: l.label }))} />
        </section>
      </div>
    </>
  );
}
