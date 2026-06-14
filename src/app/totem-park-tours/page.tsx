import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Totem Park Tours — Sitka National Historical Park",
  description:
    "Sitka totem pole and Tlingit culture shore excursions at Sitka National Historical Park — rainforest trails and carved heritage for cruise passengers.",
};

export default function TotemToursPage() {
  const tours = getToursByTheme("totem");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Totem Park Tours", href: "/totem-park-tours/" }])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Totem Park Tours", href: "/totem-park-tours/" }]} />
      </div>
      <ThemePageLayout
        title="Totem Park Tours"
        description="Explore Tlingit totem poles, rainforest trails, and Native Alaskan heritage at Sitka National Historical Park."
        intro="Sitka National Historical Park preserves one of Alaska's finest collections of totem poles along old-growth temperate rainforest trails. Learn Tlingit clan stories, Russian-era history, and the artistry behind each carved pole — a cultural cornerstone of any Sitka port day."
        tours={tours}
        breadcrumbs={[{ name: "Totem Park Tours", href: "/totem-park-tours/" }]}
      />
    </>
  );
}
