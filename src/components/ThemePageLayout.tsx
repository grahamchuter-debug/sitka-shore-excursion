import Link from "next/link";
import type { Tour } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { TourCard } from "./TourCard";

interface ThemePageLayoutProps {
  title: string;
  description: string;
  intro: string;
  tours: Tour[];
  breadcrumbs: { name: string; href: string }[];
  extraContent?: React.ReactNode;
}

export function ThemePageLayout({ title, description, intro, tours, extraContent }: ThemePageLayoutProps) {
  return (
    <>
      <section className="bg-forest-900 text-mist-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-glacier-300 text-sm uppercase tracking-widest mb-2">Sitka Shore Excursions</p>
          <h1 className="font-serif text-3xl lg:text-4xl mb-4">{title}</h1>
          <p className="text-mist-200 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-forest-700 leading-relaxed mb-8 max-w-3xl">{intro}</p>
        {extraContent}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <CTAButton href="/excursions/">Compare Sitka Tours</CTAButton>
          <CTAButton href="/one-day-in-sitka/" variant="outline">
            Plan Your Sitka Port Day
          </CTAButton>
        </div>
      </div>
    </>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>;
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-2">{title}</h2>
      {subtitle && <p className="text-forest-700 max-w-2xl">{subtitle}</p>}
    </div>
  );
}

export function InlineLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm bg-mist-200 hover:bg-glacier-200 text-forest-800 px-4 py-2 rounded-md transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
