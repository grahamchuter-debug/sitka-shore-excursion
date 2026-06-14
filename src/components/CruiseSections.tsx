export function CruiseSnapshot() {
  const facts = [
    { label: "Port Location", value: "Baranof Island, Southeast Alaska" },
    { label: "Typical Port Time", value: "6–9 hours (varies by cruise line)" },
    { label: "Tender Required", value: "Sometimes — check your ship's Sitka call" },
    { label: "Currency", value: "USD" },
    { label: "Weather", value: "Cool, rainy possible — layers essential" },
    { label: "Top Highlights", value: "Bears, eagles, totem poles, rainforest, Sitka Sound" },
  ];

  return (
    <section className="bg-white rounded-xl border border-mist-300 shadow-sm p-6 lg:p-8">
      <h2 className="font-serif text-2xl text-forest-900 mb-2">Cruise Passenger Snapshot</h2>
      <p className="text-forest-700 text-sm mb-6">
        Quick reference for planning your Sitka port day. Always verify times with your cruise line.
      </p>
      <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-mist-100 rounded-lg p-4">
            <dt className="text-xs uppercase tracking-wider text-timber-600 font-semibold mb-1">{fact.label}</dt>
            <dd className="text-sm text-forest-900 font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function CruiseConfidenceGuide() {
  return (
    <section className="bg-forest-900 text-mist-100 rounded-xl p-6 lg:p-8">
      <h2 className="font-serif text-2xl text-mist-100 mb-2">Cruise Confidence Guide</h2>
      <p className="text-mist-200 text-sm mb-6 leading-relaxed">
        We use confidence levels — not guarantees — to help you match tours to your port schedule. You are
        responsible for returning to your ship on time.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <ConfidenceCard
          level="High Cruise Confidence"
          color="border-green-400"
          description="Tour duration and typical port windows align well. Suitable for most standard Sitka port calls with normal buffer time."
        />
        <ConfidenceCard
          level="Medium Cruise Confidence"
          color="border-amber-400"
          description="Weather, wildlife activity, or trail conditions may affect timing. Best when you have at least 90 minutes buffer before all-aboard."
        />
        <ConfidenceCard
          level="Plan Carefully"
          color="border-orange-400"
          description="Longer duration or variable conditions. Recommended only for full-day port calls with generous time margins."
        />
      </div>
    </section>
  );
}

function ConfidenceCard({ level, color, description }: { level: string; color: string; description: string }) {
  return (
    <div className={`border-l-4 ${color} bg-forest-800/50 rounded-r-lg p-4`}>
      <h3 className="font-semibold text-glacier-300 mb-2 text-sm">{level}</h3>
      <p className="text-sm text-mist-200 leading-relaxed">{description}</p>
    </div>
  );
}

export function BestToursByTraveller() {
  const types = [
    {
      type: "First-Time Alaska Visitors",
      tours: "Best of Sitka, Premium Scenic Sitka",
      reason: "Covers bears, raptors, totem poles, and coastal scenery in one efficient outing.",
    },
    {
      type: "Wildlife Photographers",
      tours: "Private Wildlife Photo Safari, Whale Watching & Marine Wildlife",
      reason: "Extended time on the water with photography-focused guides and prime Sitka Sound locations.",
    },
    {
      type: "Families with Children",
      tours: "Family Wildlife Adventure, Fortress of the Bear",
      reason: "Kid-friendly pacing, reliable bear viewing at Fortress of the Bear, and engaging raptor center experiences.",
    },
    {
      type: "Culture & History Enthusiasts",
      tours: "Sitka National Historical Park, Best of Sitka",
      reason: "Tlingit totem poles, Russian-era history, and rainforest trails rich with heritage.",
    },
    {
      type: "Active Nature Lovers",
      tours: "Temperate Rainforest Nature Walk, Sitka Scenic Tour",
      reason: "On-foot exploration of Baranof Island's old-growth temperate rainforest.",
    },
    {
      type: "Private & Custom Travelers",
      tours: "Private Scenic Sitka, Private Wildlife Photo Safari",
      reason: "Your party, your pace — customize stops and timing for your group.",
    },
  ];

  return (
    <section>
      <h2 className="font-serif text-2xl text-forest-900 mb-2">Best Tours by Traveller Type</h2>
      <p className="text-forest-700 text-sm mb-6">Match your travel style to the right Sitka shore excursion.</p>
      <div className="grid md:grid-cols-2 gap-4">
        {types.map((item) => (
          <div key={item.type} className="bg-white border border-mist-300 rounded-lg p-5">
            <h3 className="font-semibold text-forest-900 mb-1">{item.type}</h3>
            <p className="text-sm text-timber-600 font-medium mb-2">{item.tours}</p>
            <p className="text-sm text-forest-700">{item.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
