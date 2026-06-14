import type { Metadata } from "next";
import { Breadcrumbs, breadcrumbUrls } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "One Day in Sitka — Cruise Port Itinerary",
  description:
    "Plan the perfect one day in Sitka Alaska port — sample itineraries for 6, 8, and 10-hour port calls with bears, totem poles, raptors, and Sitka Sound wildlife.",
};

const itineraries = [
  {
    title: "6-Hour Port Call",
    confidence: "Plan carefully — limited buffer time",
    schedule: [
      { time: "Arrive", activity: "Tender or dock — head directly to pre-booked excursion" },
      { time: "Hour 1–3", activity: "Fortress of the Bear OR Alaska Raptor Center (pick one)" },
      { time: "Hour 3–4", activity: "Walk totem pole trail at Sitka National Historical Park" },
      { time: "Hour 4–5", activity: "Quick lunch downtown, browse Russian-era sites" },
      { time: "Hour 5–6", activity: "Return to ship with 30+ minute buffer before all-aboard" },
    ],
    recommended: "Fortress of the Bear, Sitka National Historical Park",
  },
  {
    title: "8-Hour Port Call",
    confidence: "High Cruise Confidence with good planning",
    schedule: [
      { time: "Arrive", activity: "Meet your Best of Sitka or Premium Scenic tour" },
      { time: "Hour 1–3.5", activity: "Combined bears, raptors, and totem poles tour" },
      { time: "Hour 3.5–5", activity: "Independent downtown exploration — St. Michael's, harbor walk" },
      { time: "Hour 5–6.5", activity: "Optional: Sitka Scenic Tour or rainforest walk" },
      { time: "Hour 6.5–8", activity: "Shopping, coffee, return to ship with buffer" },
    ],
    recommended: "Best of Sitka, Sitka Scenic Tour",
  },
  {
    title: "10-Hour Port Call",
    confidence: "Maximum flexibility — all tour types viable",
    schedule: [
      { time: "Arrive", activity: "Morning Best of Sitka comprehensive tour" },
      { time: "Hour 1–3.5", activity: "Bears, raptors, totem poles" },
      { time: "Hour 3.5–4.5", activity: "Lunch downtown" },
      { time: "Hour 4.5–7", activity: "Whale Watching & Marine Wildlife on Sitka Sound" },
      { time: "Hour 7–9", activity: "Downtown shopping, Totem Square, harbor photography" },
      { time: "Hour 9–10", activity: "Leisurely return with generous all-aboard buffer" },
    ],
    recommended: "Best of Sitka + Whale Watching, Private Scenic Sitka",
  },
];

export default function OneDayPage() {
  return (
    <>
      <SchemaMarkup data={breadcrumbSchema(breadcrumbUrls([{ name: "One Day in Sitka", href: "/one-day-in-sitka/" }]))} />
      <section className="bg-forest-900 text-mist-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl lg:text-4xl mb-4">One Day in Sitka</h1>
          <p className="text-mist-200 max-w-2xl leading-relaxed">
            Sample itineraries for cruise passengers based on your port time. Adjust for tender delays and always
            confirm your ship&apos;s all-aboard deadline.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: "One Day in Sitka", href: "/one-day-in-sitka/" }]} />

        <div className="space-y-8 mb-16">
          {itineraries.map((plan) => (
            <article key={plan.title} className="bg-white border border-mist-300 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-forest-800 text-mist-100 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h2 className="font-serif text-xl">{plan.title}</h2>
                <span className="text-sm text-glacier-300">{plan.confidence}</span>
              </div>
              <div className="p-6">
                <ol className="space-y-4 mb-4">
                  {plan.schedule.map((item) => (
                    <li key={item.time} className="flex gap-4 text-sm">
                      <span className="font-semibold text-timber-600 w-24 shrink-0">{item.time}</span>
                      <span className="text-forest-700">{item.activity}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-sm text-forest-800">
                  <strong>Recommended tours:</strong> {plan.recommended}
                </p>
              </div>
            </article>
          ))}
        </div>

        <ComparisonTable />

        <div className="mt-10 flex flex-wrap gap-4">
          <CTAButton href="/excursions/">View Sitka Shore Excursions</CTAButton>
          <CTAButton href="/excursions/#compare" variant="outline">
            Compare Sitka Tours
          </CTAButton>
        </div>
      </div>
    </>
  );
}
