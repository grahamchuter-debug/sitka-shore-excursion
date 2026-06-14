import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export const dynamic = "force-static";

const routes = [
  "",
  "excursions",
  "port-guide",
  "one-day-in-sitka",
  "faq",
  "sitka-wildlife-tours",
  "bear-viewing-tours",
  "raptor-center-tours",
  "totem-park-tours",
  "private-sitka-tours",
  "family-friendly-sitka-excursions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route ? `${SITE.url}/${route}/` : `${SITE.url}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route === "excursions" ? 0.9 : 0.8,
  }));
}
