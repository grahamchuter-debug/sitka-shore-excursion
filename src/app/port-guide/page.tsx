import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { CruiseSnapshot } from "@/components/CruiseSections";
import { CTAButton, CTAGroup } from "@/components/CTAButton";
import { InlineLinks } from "@/components/ThemePageLayout";
import { IMAGES, THEME_LINKS } from "@/data/site";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitka Port Guide for Cruise Passengers",
  description:
    "Complete Sitka Alaska cruise port guide — tender info, walking distances, wildlife highlights, totem poles, Russian history, and shore excursion planning tips.",
};

export default function PortGuidePage() {
  return (
    <>
      <SchemaMarkup data={breadcrumbSchema(breadcrumbUrls([{ name: "Port Guide", href: "/port-guide/" }]))} />
      <section className="relative h-64 lg:h-80">
        <Image src={IMAGES.coastal.src} alt={IMAGES.coastal.alt} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-forest-950/60 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <h1 className="font-serif text-3xl lg:text-4xl text-mist-100">Sitka Port Guide</h1>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "Port Guide", href: "/port-guide/" }]} />

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 prose-sitka space-y-6">
            <section>
              <h2 className="font-serif text-2xl text-forest-900 mb-3">Welcome to Sitka, Alaska</h2>
              <p className="text-forest-700 leading-relaxed">
                Sitka is the only Inside Passage community that fronts the Pacific Ocean, hugging Baranof Island&apos;s
                west shore in the shadow of Mount Edgecumbe — a dormant volcano with a graceful cone. Once the capital
                of Russian America, Sitka today is a living blend of Tlingit culture, Russian Orthodox heritage, and
                world-class wildlife viewing.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-forest-900 mb-3">Getting Ashore</h2>
              <p className="text-forest-700 leading-relaxed mb-3">
                Cruise ships either dock at the Old Sitka Dock (Halibut Point Road) or anchor in Sitka Sound requiring
                tender boats. Tender operations add 20–40 minutes each way during busy periods — factor this into your
                excursion planning.
              </p>
              <p className="text-forest-700 leading-relaxed">
                Downtown Sitka is compact and walkable from most docking locations. Taxi and shuttle services connect
                major attractions like Fortress of the Bear and the Alaska Raptor Center.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-forest-900 mb-3">Must-See Highlights</h2>
              <ul className="space-y-3 text-forest-700">
                <li><strong>Fortress of the Bear</strong> — Rescued brown and black bears in naturalized habitats</li>
                <li><strong>Alaska Raptor Center</strong> — Bald eagles and birds of prey rehabilitation</li>
                <li><strong>Sitka National Historical Park</strong> — Totem poles and Tlingit cultural trails</li>
                <li><strong>St. Michael&apos;s Cathedral</strong> — Historic Russian Orthodox cathedral</li>
                <li><strong>Sitka Sound</strong> — Whale watching, sea otters, and coastal scenery</li>
                <li><strong>Temperate Rainforest</strong> — Old-growth trails on Baranof Island</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-forest-900 mb-3">Weather &amp; What to Pack</h2>
              <p className="text-forest-700 leading-relaxed">
                Sitka receives abundant rainfall — that&apos;s what makes the rainforest lush. Expect temperatures of
                50–65°F (10–18°C) in summer. Waterproof layers, sturdy walking shoes, and binoculars are essentials for
                any shore excursion.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <CruiseSnapshot />
            <div className="bg-forest-800 text-mist-100 rounded-xl p-6">
              <h3 className="font-serif text-lg mb-3">Ready to Explore?</h3>
              <p className="text-sm text-mist-200 mb-4">
                Browse shore excursions matched to your port schedule and interests.
              </p>
              <CTAButton href="/excursions/" className="w-full text-center">
                View Sitka Shore Excursions
              </CTAButton>
            </div>
          </div>
        </div>

        <InlineLinks links={THEME_LINKS.map((l) => ({ href: l.href, label: l.label }))} />
        <CTAGroup className="mt-8" />
      </div>
    </>
  );
}
