export const SITE = {
  name: "Sitka Shore Excursion",
  domain: "sitkashoreexcursion.com",
  url: "https://sitkashoreexcursion.com",
  port: "Sitka, Alaska",
  tagline: "Alaska's wildlife, bears, raptors, totem poles & rainforest port day",
  description:
    "Premium Sitka shore excursions for cruise passengers. Bear viewing, raptor center tours, totem poles, marine wildlife, rainforest walks, and private sightseeing on Baranof Island.",
  email: "info@sitkashoreexcursion.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/excursions/", label: "Excursions" },
  { href: "/port-guide/", label: "Port Guide" },
  { href: "/one-day-in-sitka/", label: "One Day in Sitka" },
  { href: "/faq/", label: "FAQ" },
] as const;

export const THEME_LINKS = [
  { href: "/sitka-wildlife-tours/", label: "Wildlife Tours" },
  { href: "/bear-viewing-tours/", label: "Bear Viewing" },
  { href: "/raptor-center-tours/", label: "Raptor Center" },
  { href: "/totem-park-tours/", label: "Totem Park" },
  { href: "/private-sitka-tours/", label: "Private Tours" },
  { href: "/family-friendly-sitka-excursions/", label: "Family-Friendly" },
] as const;

export type CruiseConfidence = "High Cruise Confidence" | "Medium Cruise Confidence" | "Plan Carefully";

export type ActivityLevel = "Easy" | "Moderate" | "Difficult";

export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  activityLevel: ActivityLevel;
  bestFor: string[];
  walkingRequired: string;
  foodDrink: string;
  cruiseConfidence: CruiseConfidence;
  whoShouldChoose: string[];
  whoShouldChooseDifferent: string[];
  whatToBring: string[];
  returnToShipAdvice: string;
  priceFrom: number;
  themes: string[];
  image: string;
  imageAlt: string;
}

export const IMAGES = {
  hero: {
    src: "/images/hero-sitka-bears.png",
    alt: "Two brown bears fishing at a river in Sitka Alaska with a seagull on mossy rocks",
  },
  bear: {
    src: "/images/sitka-bear-tour.png",
    alt: "Brown bear at Fortress of the Bear sanctuary with misty rainforest mountain in Sitka Alaska",
  },
  eagle: {
    src: "/images/sitka-eagle.png",
    alt: "Two bald eagles perched on a Sitka spruce tree in the Alaskan rainforest",
  },
  totem: {
    src: "/images/sitka-totem.png",
    alt: "Tlingit totem pole before a snow-capped mountain at Sitka National Historical Park",
  },
  coastal: {
    src: "/images/sitka-totem.png",
    alt: "Snow-capped mountain and coastal rainforest scenery near Sitka Alaska",
  },
  rainforest: {
    src: "/images/sitka-bear-tour.png",
    alt: "Misty evergreen rainforest on Baranof Island near Sitka Alaska",
  },
  otter: {
    src: "/images/hero-sitka-bears.png",
    alt: "River and coastal wildlife habitat in Sitka Sound Alaska",
  },
} as const;
