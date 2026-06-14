import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Private Sitka Tours",
  description:
    "Private Sitka Alaska shore excursions — customize your port day with private sightseeing and wildlife photo safari tours for cruise passengers.",
};

export default function PrivateToursPage() {
  const tours = getToursByTheme("private");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Private Sitka Tours", href: "/private-sitka-tours/" }])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Private Sitka Tours", href: "/private-sitka-tours/" }]} />
      </div>
      <ThemePageLayout
        title="Private Sitka Tours"
        description="Your party, your pace — private sightseeing and wildlife photo safaris customized for your Sitka port day."
        intro="Private tours offer maximum flexibility for families, couples, and groups who want control over their Sitka itinerary. Choose your stops, adjust timing, and enjoy undivided guide attention — ideal when you have specific interests or mobility needs."
        tours={tours}
        breadcrumbs={[{ name: "Private Sitka Tours", href: "/private-sitka-tours/" }]}
      />
    </>
  );
}
