import type { Tour } from "./site";
import { IMAGES } from "./site";

export const TOURS: Tour[] = [
  {
    id: "best-of-sitka",
    slug: "best-of-sitka",
    title: "Best of Sitka",
    shortDescription:
      "Fortress of the Bear, Alaska Raptor Center, and Sitka National Historical Park totem poles in one curated half-day.",
    description:
      "The definitive Sitka introduction for cruise passengers who want bears, raptors, and Tlingit culture without rushing. Visit Fortress of the Bear for close-up views of rescued brown and black bears, continue to the Alaska Raptor Center to meet rehabilitated bald eagles and birds of prey, then stroll among towering totem poles on rainforest trails at Sitka National Historical Park.",
    duration: "2 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["First-time Sitka visitors", "Wildlife lovers", "Culture seekers", "Photographers"],
    walkingRequired: "Light walking on paved paths and short forest trails; wheelchair-accessible options at most stops.",
    foodDrink: "Not included. Snacks available for purchase at some locations.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "You want the top three Sitka highlights in one efficient tour",
      "You prefer a small-group guided experience with expert commentary",
      "You are interested in bears, eagles, and totem pole heritage",
    ],
    whoShouldChooseDifferent: [
      "You want extended time on the water for whales and sea otters",
      "You prefer a fully private itinerary at your own pace",
      "You are seeking an active rainforest hike rather than gentle walks",
    ],
    whatToBring: ["Comfortable walking shoes", "Rain jacket", "Camera", "Binoculars (optional)"],
    returnToShipAdvice:
      "This tour is designed with cruise schedules in mind and typically returns well before all-aboard. Confirm your ship's departure time with your guide at check-in and allow buffer time for tender operations if applicable.",
    priceFrom: 155,
    themes: ["wildlife", "bear", "raptor", "totem", "scenic", "family"],
    image: IMAGES.nationalPark.src,
    imageAlt: "Best of Sitka tour covering Fortress of the Bear, Raptor Center, and Sitka National Historical Park",
  },
  {
    id: "fortress-of-the-bear",
    slug: "fortress-of-the-bear",
    title: "Fortress of the Bear",
    shortDescription:
      "Up-close bear viewing at Sitka's renowned rescue and rehabilitation center for orphaned Alaskan bears.",
    description:
      "Fortress of the Bear offers one of the most reliable bear-viewing experiences in Southeast Alaska. Observe rescued brown and black bears in naturalized habitats while learning about conservation and rehabilitation efforts. Expert guides share stories of each bear and the challenges facing Alaska's iconic wildlife.",
    duration: "1 hour 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Bear enthusiasts", "Families with children", "Wildlife photographers", "Conservation-minded travelers"],
    walkingRequired: "Minimal; viewing platforms and short paths.",
    foodDrink: "Not included.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "Seeing Alaska bears is your top Sitka priority",
      "You want a safe, reliable bear encounter without backcountry hiking",
      "You appreciate rescue and rehabilitation stories",
    ],
    whoShouldChooseDifferent: [
      "You want wild bears in natural habitat (consider a wildlife boat tour instead)",
      "You also want totem poles and raptors in the same outing (choose Best of Sitka)",
    ],
    whatToBring: ["Camera with zoom lens", "Rain layer", "Warm layer for overcast days"],
    returnToShipAdvice:
      "Short duration makes this one of the most schedule-friendly Sitka options. Pair with a second short tour only if your port time exceeds five hours.",
    priceFrom: 79,
    themes: ["wildlife", "bear", "family"],
    image: IMAGES.bear.src,
    imageAlt: IMAGES.bear.alt,
  },
  {
    id: "alaska-raptor-center",
    slug: "alaska-raptor-center",
    title: "Alaska Raptor Center",
    shortDescription:
      "Meet rehabilitated bald eagles, owls, and birds of prey at Sitka's premier avian rescue facility.",
    description:
      "The Alaska Raptor Center cares for injured eagles, hawks, owls, and falcons before release back to the wild. Walk through the flight-training area and clinic viewing windows, then explore the rainforest boardwalk to see resident birds up close. An essential stop for anyone fascinated by Alaska's raptors.",
    duration: "1 hour 15 minutes",
    activityLevel: "Easy",
    bestFor: ["Bird watchers", "Families", "Educational travelers", "Photographers"],
    walkingRequired: "Easy boardwalk and paved paths; approximately 0.3 miles total.",
    foodDrink: "Not included.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "Bald eagles and birds of prey are on your Alaska bucket list",
      "You want an educational, low-impact wildlife experience",
      "You are traveling with children or mobility-limited companions",
    ],
    whoShouldChooseDifferent: [
      "You prefer open-water wildlife over facility-based viewing",
      "You want a comprehensive tour covering multiple Sitka highlights",
    ],
    whatToBring: ["Binoculars", "Camera", "Light rain jacket"],
    returnToShipAdvice:
      "Compact timing fits easily into a port day. Ideal as a standalone visit or combined with totem park walking nearby.",
    priceFrom: 65,
    themes: ["wildlife", "raptor", "family"],
    image: IMAGES.eagle.src,
    imageAlt: IMAGES.eagle.alt,
  },
  {
    id: "sitka-national-historical-park",
    slug: "sitka-national-historical-park",
    title: "Sitka National Historical Park & Totem Poles",
    shortDescription:
      "Rainforest trails, Tlingit totem poles, and Russian-era history in Sitka's cultural heart.",
    description:
      "Walk among dozens of carved totem poles along the Indian River trail through old-growth temperate rainforest. Learn Tlingit clan stories, Russian colonial history, and the artistry behind each pole. The park visitor center offers exhibits on Native Alaskan culture and the Battle of Sitka.",
    duration: "2 hours",
    activityLevel: "Easy",
    bestFor: ["Culture enthusiasts", "History buffs", "Photographers", "Rainforest walkers"],
    walkingRequired: "1–2 miles on flat, well-maintained trails; optional shorter loop available.",
    foodDrink: "Not included. Water fountains at visitor center.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "Totem poles and Tlingit heritage are your focus",
      "You enjoy peaceful rainforest walks with cultural depth",
      "You want a flexible, unhurried experience",
    ],
    whoShouldChooseDifferent: [
      "Wildlife viewing is your primary goal (consider bear or marine tours)",
      "You have limited mobility and cannot walk forest trails",
    ],
    whatToBring: ["Comfortable walking shoes", "Insect repellent (summer)", "Camera", "Rain gear"],
    returnToShipAdvice:
      "Self-paced options allow you to control timing. If joining a guided tour, confirm return time against your ship's all-aboard deadline.",
    priceFrom: 55,
    themes: ["totem", "rainforest", "scenic", "family"],
    image: IMAGES.nationalPark.src,
    imageAlt: IMAGES.nationalPark.alt,
  },
  {
    id: "whale-watching-marine-wildlife",
    slug: "whale-watching-marine-wildlife",
    title: "Whale Watching & Marine Wildlife",
    shortDescription:
      "Humpback whales, sea otters, bald eagles, and porpoises in the spectacular waters of Sitka Sound.",
    description:
      "Sitka fronts the Pacific Ocean on Baranof Island — one of the Inside Passage's best settings for marine wildlife. Cruise Sitka Sound aboard a heated vessel with a naturalist guide, scanning for humpback whales, sea otters, Steller sea lions, puffins, and bald eagles against the backdrop of Mount Edgecumbe.",
    duration: "2 hours",
    activityLevel: "Easy",
    bestFor: ["Marine wildlife lovers", "Photographers", "Couples", "Nature enthusiasts"],
    walkingRequired: "Minimal boarding; seated and standing on stable vessel.",
    foodDrink: "Not included. Hot beverages may be available on some vessels.",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose: [
      "Whales and sea otters are your Alaska wildlife priority",
      "You prefer being on the water to bus-based sightseeing",
      "You want dramatic coastal scenery with wildlife opportunities",
    ],
    whoShouldChooseDifferent: [
      "You are prone to seasickness (choose land-based wildlife tours)",
      "Your port time is very limited (under four hours)",
      "You need guaranteed wildlife sightings (wildlife is never guaranteed)",
    ],
    whatToBring: ["Warm layers", "Rain jacket", "Binoculars", "Motion sickness remedy if needed", "Camera"],
    returnToShipAdvice:
      "Weather and wildlife activity can affect timing. Choose departures with ample buffer before all-aboard. Medium Cruise Confidence — plan carefully on short port days.",
    priceFrom: 259,
    themes: ["wildlife", "scenic"],
    image: IMAGES.whales.src,
    imageAlt: IMAGES.whales.alt,
  },
  {
    id: "premium-scenic-sitka",
    slug: "premium-scenic-sitka",
    title: "Premium Scenic Sitka",
    shortDescription:
      "Small-group scenic tour covering Fortress of the Bear, rainforest viewpoints, and Sitka's coastal highlights.",
    description:
      "Experience Sitka's most photogenic landscapes in comfort. Wind through Japonski Island rainforest, pause at viewpoints overlooking Mount Edgecumbe volcano and Sitka Sound, visit Fortress of the Bear, and explore Sitka National Historical Park's totem poles — all with an expert local guide.",
    duration: "2 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Scenic photographers", "Comfort seekers", "First-time visitors", "Small groups"],
    walkingRequired: "Light walking at stops; mostly vehicle-based touring.",
    foodDrink: "Not included.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "You want premium comfort with maximum scenery",
      "You prefer a guided overview rather than self-planning",
      "Photography and landscapes matter as much as wildlife",
    ],
    whoShouldChooseDifferent: [
      "You want extended time on the water",
      "You prefer a fully customized private itinerary",
    ],
    whatToBring: ["Camera", "Sunglasses", "Rain layer", "Comfortable shoes for short walks"],
    returnToShipAdvice:
      "Well-suited to standard cruise port windows. High Cruise Confidence for typical seven-to-nine-hour port calls.",
    priceFrom: 139,
    themes: ["scenic", "bear", "totem", "rainforest"],
    image: IMAGES.coastal.src,
    imageAlt: IMAGES.coastal.alt,
  },
  {
    id: "sitka-scenic-tour",
    slug: "sitka-scenic-tour",
    title: "Sitka Scenic Tour",
    shortDescription:
      "Affordable small-group highlights tour with a local guide through Sitka's wild beauty.",
    description:
      "A true Alaskan guide leads this value-focused scenic tour through Sitka's most beautiful viewpoints, historic neighborhoods, and wildlife hotspots. Potential sightings include bald eagles, deer, and harbor seals while you learn local stories and history.",
    duration: "2 hours",
    activityLevel: "Moderate",
    bestFor: ["Budget-conscious travelers", "Independent explorers", "Photographers", "Repeat Alaska cruisers"],
    walkingRequired: "Moderate; several short stops with optional short walks.",
    foodDrink: "Not included.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "You want a solid overview at a lower price point",
      "You enjoy a more active tour with multiple stops",
      "You are comfortable with moderate walking",
    ],
    whoShouldChooseDifferent: [
      "You need minimal walking (choose Premium Scenic or Fortress of the Bear)",
      "You want dedicated bear or raptor center time",
    ],
    whatToBring: ["Walking shoes", "Rain gear", "Camera", "Water bottle"],
    returnToShipAdvice:
      "Two-hour format leaves flexibility for shopping or independent exploration before returning to ship.",
    priceFrom: 115,
    themes: ["scenic", "family"],
    image: IMAGES.coastal.src,
    imageAlt: IMAGES.coastal.alt,
  },
  {
    id: "rainforest-nature-walk",
    slug: "rainforest-nature-walk",
    title: "Temperate Rainforest Nature Walk",
    shortDescription:
      "Guided walk through Baranof Island's moss-draped old-growth rainforest with naturalist commentary.",
    description:
      "Step into one of the world's largest temperate rainforests. Your naturalist guide identifies native plants, explains the ecosystem, and points out wildlife signs — from bald eagles overhead to salmon streams below. A meditative contrast to bus tours and a genuine Alaska wilderness experience.",
    duration: "2 hours 15 minutes",
    activityLevel: "Moderate",
    bestFor: ["Nature lovers", "Hikers", "Eco-travelers", "Photographers"],
    walkingRequired: "2–3 miles on uneven forest trails with roots and steps.",
    foodDrink: "Not included. Bring your own water.",
    cruiseConfidence: "Medium Cruise Confidence",
    whoShouldChoose: [
      "You want an authentic rainforest experience on foot",
      "You enjoy moderate hiking and don't mind muddy trails",
      "Plant and ecosystem knowledge interests you",
    ],
    whoShouldChooseDifferent: [
      "You have limited mobility or balance concerns",
      "Wildlife close-ups are your priority (choose bear or marine tours)",
      "Your port time is under five hours",
    ],
    whatToBring: ["Waterproof hiking boots", "Rain pants and jacket", "Trekking poles (optional)", "Bug spray"],
    returnToShipAdvice:
      "Trail conditions can slow pace. Medium Cruise Confidence — allow extra buffer on wet days and verify tender schedules.",
    priceFrom: 89,
    themes: ["rainforest", "wildlife", "scenic"],
    image: IMAGES.rainforest.src,
    imageAlt: IMAGES.rainforest.alt,
  },
  {
    id: "private-scenic-sitka",
    slug: "private-scenic-sitka",
    title: "Private Scenic Sitka",
    shortDescription:
      "Your party, your pace — customize a private Sitka sightseeing tour with a local guide.",
    description:
      "Take control of your port day with a private vehicle and dedicated guide. Choose your stops — Fortress of the Bear, totem poles, downtown Sitka, scenic overlooks, or shopping — and adjust timing as you go. Ideal for families, couples, or groups who want flexibility.",
    duration: "2–4 hours (customizable)",
    activityLevel: "Easy",
    bestFor: ["Families", "Couples", "Groups", "Travelers with specific interests"],
    walkingRequired: "Customizable based on your preferences.",
    foodDrink: "Not included; stops can be arranged.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "You want complete control over your Sitka itinerary",
      "You are traveling with young children or elderly companions",
      "You prefer not to share a vehicle with strangers",
    ],
    whoShouldChooseDifferent: [
      "You are traveling solo and want the lowest per-person cost",
      "You want a specialized marine or hiking experience",
    ],
    whatToBring: ["Comfortable clothing", "Camera", "Ship departure time written down", "Rain layer"],
    returnToShipAdvice:
      "Private tours offer the most schedule control. Share your all-aboard time upfront; High Cruise Confidence when duration stays within port window.",
    priceFrom: 109,
    themes: ["private", "scenic", "family"],
    image: IMAGES.coastal.src,
    imageAlt: IMAGES.coastal.alt,
  },
  {
    id: "private-wildlife-photo-safari",
    slug: "private-wildlife-photo-safari",
    title: "Private Wildlife Photo Safari",
    shortDescription:
      "Exclusive expedition boat safari through Sitka Sound's hidden passages for photographers and wildlife lovers.",
    description:
      "A private boat navigates Sitka Sound's golden kelp forests, hidden coves, and island channels. Frame snow-capped Baranof peaks, Mount Edgecumbe, and abundant marine life — sea otters, seals, eagles, and occasionally whales — with undivided guide attention for your camera.",
    duration: "3 hours 30 minutes",
    activityLevel: "Easy",
    bestFor: ["Photographers", "Wildlife enthusiasts", "Couples", "Special occasions"],
    walkingRequired: "Minimal; boarding small expedition vessel.",
    foodDrink: "Beverages and snacks included on most departures.",
    cruiseConfidence: "Plan Carefully",
    whoShouldChoose: [
      "Photography is your primary Sitka goal",
      "You want an exclusive, unhurried water experience",
      "You are celebrating an anniversary or special trip",
    ],
    whoShouldChooseDifferent: [
      "Your port time is under six hours",
      "You are on a tight budget",
      "You experience seasickness easily",
    ],
    whatToBring: ["DSLR or mirrorless camera with telephoto lens", "Extra batteries", "Warm layers", "Seasickness remedy"],
    returnToShipAdvice:
      "Longer duration requires careful planning. Plan Carefully — best for full-day port calls with at least two hours buffer before all-aboard.",
    priceFrom: 336,
    themes: ["private", "wildlife", "scenic"],
    image: IMAGES.otter.src,
    imageAlt: IMAGES.otter.alt,
  },
  {
    id: "family-wildlife-adventure",
    slug: "family-wildlife-adventure",
    title: "Family Wildlife Adventure",
    shortDescription:
      "Kid-friendly Sitka tour combining bears, eagles, and totem poles with engaging guides and short walks.",
    description:
      "Designed for families with children ages 5 and up, this tour paces stops for young attention spans. Fortress of the Bear captivates kids, the Raptor Center's flight demonstrations amaze, and totem pole stories bring Tlingit culture to life. Guides specialize in making Alaska accessible for all ages.",
    duration: "2 hours 45 minutes",
    activityLevel: "Easy",
    bestFor: ["Families with children", "Multi-generational groups", "First-time Alaska visitors"],
    walkingRequired: "Short, easy walks suitable for strollers at most locations.",
    foodDrink: "Not included. Snack breaks built into itinerary.",
    cruiseConfidence: "High Cruise Confidence",
    whoShouldChoose: [
      "You are cruising with school-age children",
      "You want educational wildlife without strenuous activity",
      "Grandparents and kids will enjoy the same itinerary",
    ],
    whoShouldChooseDifferent: [
      "You are an adults-only group seeking adventure sports",
      "You want extended whale watching on open water",
    ],
    whatToBring: ["Snacks for kids", "Layers for changeable weather", "Camera", "Stroller if needed"],
    returnToShipAdvice:
      "Family pacing includes built-in breaks. High Cruise Confidence for standard port days; confirm stroller/tender access if applicable.",
    priceFrom: 145,
    themes: ["family", "wildlife", "bear", "raptor", "totem"],
    image: IMAGES.hero.src,
    imageAlt: "Family viewing bears and eagles on Sitka wildlife tour Alaska",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}

export function getToursByTheme(theme: string): Tour[] {
  return TOURS.filter((t) => t.themes.includes(theme));
}
