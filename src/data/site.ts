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
    src: "https://images.unsplash.com/photo-1589656966895-2f0923797833?w=1920&q=80",
    alt: "Brown bear in Alaska rainforest near Sitka",
  },
  eagle: {
    src: "https://images.unsplash.com/photo-1552728080-8152b789203f?w=1200&q=80",
    alt: "Bald eagle soaring over Alaska coastal wilderness",
  },
  totem: {
    src: "https://images.unsplash.com/photo-1596484552834-086affc358ae?w=1200&q=80",
    alt: "Tlingit totem poles at Sitka National Historical Park",
  },
  coastal: {
    src: "https://images.unsplash.com/photo-1506905925346-3b393f2d72c5?w=1200&q=80",
    alt: "Sitka Sound coastal mountains and misty Alaska waters",
  },
  rainforest: {
    src: "https://images.unsplash.com/photo-1448375249986-d394391cb12c?w=1200&q=80",
    alt: "Temperate rainforest trail on Baranof Island near Sitka",
  },
  otter: {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80",
    alt: "Sea otter floating in Sitka Sound Alaska",
  },
} as const;
