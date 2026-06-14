import { SITE } from "@/data/site";
import type { Tour } from "@/data/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    areaServed: {
      "@type": "City",
      name: "Sitka",
      containedInPlace: {
        "@type": "State",
        name: "Alaska",
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function tourProductSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: tour.title,
    description: tour.description,
    image: tour.image,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      price: tour.priceFrom,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/excursions/#${tour.slug}`,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Duration", value: tour.duration },
      { "@type": "PropertyValue", name: "Activity Level", value: tour.activityLevel },
      { "@type": "PropertyValue", name: "Cruise Confidence", value: tour.cruiseConfidence },
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function touristTripSchema(tour: Tour) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.description,
    touristType: tour.bestFor.join(", "),
    itinerary: {
      "@type": "ItemList",
      description: tour.shortDescription,
    },
  };
}
