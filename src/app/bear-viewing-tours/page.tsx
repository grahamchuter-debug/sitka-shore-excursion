import type { Metadata } from "next";
import { ThemePageLayout } from "@/components/ThemePageLayout";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { getToursByTheme } from "@/data/tours";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema, tourProductSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Bear Viewing Tours in Sitka",
  description:
    "Sitka bear viewing shore excursions at Fortress of the Bear — close-up brown and black bear encounters for cruise passengers in Alaska.",
};

export default function BearToursPage() {
  const tours = getToursByTheme("bear");
  return (
    <>
      <SchemaMarkup
        data={[
          breadcrumbSchema(breadcrumbUrls([{ name: "Bear Viewing Tours", href: "/bear-viewing-tours/" }])),
          ...tours.map((t) => tourProductSchema(t)),
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ name: "Bear Viewing Tours", href: "/bear-viewing-tours/" }]} />
      </div>
      <ThemePageLayout
        title="Bear Viewing Tours"
        description="See Alaskan brown and black bears up close at Fortress of the Bear and on comprehensive Sitka wildlife tours."
        intro="Fortress of the Bear is Sitka's premier bear viewing destination — a rescue and rehabilitation center where orphaned brown and black bears live in naturalized habitats. Safe platform viewing, expert guides, and conservation stories make this a must-do for any Alaska cruise passenger fascinated by bears."
        tours={tours}
        breadcrumbs={[{ name: "Bear Viewing Tours", href: "/bear-viewing-tours/" }]}
      />
    </>
  );
}
