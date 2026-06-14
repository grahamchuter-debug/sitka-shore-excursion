import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Family-Friendly Sitka Excursions",
  description:
    "Family-friendly Sitka Alaska shore excursions — kid-safe bear viewing, raptor center visits, and totem pole walks for cruise passengers with children.",
};

export default function FamilyToursPage() {
  const tours = getToursByTheme("family");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([
            { name: "Family-Friendly Excursions", href: "/family-friendly-sitka-excursions/" },
          ])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Family-Friendly Excursions", href: "/family-friendly-sitka-excursions/" }]} />
      </div>
      <ThemePageLayout
        title="Family-Friendly Sitka Excursions"
        description="Kid-friendly Sitka tours with bears, eagles, and totem poles — paced for families and multi-generational cruise groups."
        intro="Sitka is one of Alaska's best family ports. Fortress of the Bear captivates children of all ages, the Raptor Center's flight demonstrations amaze, and totem pole stories bring Tlingit culture to life. These excursions feature easy activity levels and High Cruise Confidence for stress-free port days."
        tours={tours}
        breadcrumbs={[{ name: "Family-Friendly Excursions", href: "/family-friendly-sitka-excursions/" }]}
      />
    </>
  );
}
