import { TOURS } from "@/data/tours";

export function ComparisonTable() {
  return (
    <section id="compare" className="scroll-mt-24">
      <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-2">
        Which Sitka Excursion Is Right for You?
      </h2>
      <p className="text-forest-700 mb-6 max-w-2xl">
        Compare duration, activity level, and cruise confidence across our Sitka shore excursions.
      </p>
      <div className="overflow-x-auto rounded-xl border border-mist-300 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-forest-900 text-mist-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Tour</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
              <th className="px-4 py-3 font-semibold">Activity</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
              <th className="px-4 py-3 font-semibold">Cruise Confidence</th>
              <th className="px-4 py-3 font-semibold">From</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-mist-200">
            {TOURS.map((tour) => (
              <tr key={tour.id} className="hover:bg-mist-100/50">
                <td className="px-4 py-3 font-medium text-forest-900">
                  <a href={`#${tour.slug}`} className="hover:text-glacier-400 transition-colors">
                    {tour.title}
                  </a>
                </td>
                <td className="px-4 py-3 text-forest-700">{tour.duration}</td>
                <td className="px-4 py-3 text-forest-700">{tour.activityLevel}</td>
                <td className="px-4 py-3 text-forest-700">{tour.bestFor.slice(0, 2).join(", ")}</td>
                <td className="px-4 py-3">
                  <ConfidenceBadge level={tour.cruiseConfidence} />
                </td>
                <td className="px-4 py-3 font-semibold text-timber-600">${tour.priceFrom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ConfidenceBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    "High Cruise Confidence": "bg-green-100 text-green-800",
    "Medium Cruise Confidence": "bg-amber-100 text-amber-800",
    "Plan Carefully": "bg-orange-100 text-orange-800",
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-1 rounded ${colors[level] ?? "bg-mist-200"}`}>
      {level}
    </span>
  );
}
