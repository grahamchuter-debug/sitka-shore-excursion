import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitka Wildlife Tours",
  description:
    "Sitka Alaska wildlife shore excursions — bears, bald eagles, sea otters, whales, and marine wildlife tours for cruise passengers on Baranof Island.",
};

export default function WildlifeToursPage() {
  const tours = getToursByTheme("wildlife");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Sitka Wildlife Tours", href: "/sitka-wildlife-tours/" }])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Sitka Wildlife Tours", href: "/sitka-wildlife-tours/" }]} />
      </div>
      <ThemePageLayout
        title="Sitka Wildlife Tours"
        description="From Fortress of the Bear to Sitka Sound whale watching — Alaska wildlife experiences for cruise passengers."
        intro="Sitka is Southeast Alaska's premier wildlife port. Brown and black bears, rehabilitated bald eagles, sea otters, humpback whales, and temperate rainforest creatures converge on Baranof Island. These shore excursions prioritize wildlife encounters with clear cruise confidence guidance."
        tours={tours}
        breadcrumbs={[{ name: "Sitka Wildlife Tours", href: "/sitka-wildlife-tours/" }]}
      />
    </>
  );
}
