import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Alaska Raptor Center Tours in Sitka",
  description:
    "Sitka raptor center shore excursions — bald eagles, owls, and birds of prey at the Alaska Raptor Center for cruise passengers.",
};

export default function RaptorToursPage() {
  const tours = getToursByTheme("raptor");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Raptor Center Tours", href: "/raptor-center-tours/" }])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Raptor Center Tours", href: "/raptor-center-tours/" }]} />
      </div>
      <ThemePageLayout
        title="Raptor Center Tours"
        description="Meet rehabilitated bald eagles and birds of prey at the Alaska Raptor Center — Sitka's essential avian wildlife experience."
        intro="The Alaska Raptor Center cares for injured eagles, hawks, owls, and falcons before returning them to the wild. Walk the rainforest boardwalk, watch flight training demonstrations, and learn about raptor rehabilitation — all within an easy shore excursion from your cruise ship."
        tours={tours}
        breadcrumbs={[{ name: "Raptor Center Tours", href: "/raptor-center-tours/" }]}
      />
    </>
  );
}
