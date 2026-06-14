import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/data/site";

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export function Hero({ title, subtitle, image, imageAlt, children, compact }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[40vh]" : "min-h-[70vh]"}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/70 to-forest-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
      <div className="mist-overlay absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-mist-100/30 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[inherit] py-16 lg:py-24">
        <p className="text-glacier-300 text-sm uppercase tracking-[0.2em] mb-3 font-medium">
          Sitka, Alaska Shore Excursions
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-mist-100 max-w-3xl leading-tight mb-4">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-mist-200 max-w-2xl leading-relaxed mb-8">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const confidenceColors = {
    "High Cruise Confidence": "bg-green-100 text-green-800",
    "Medium Cruise Confidence": "bg-amber-100 text-amber-800",
    "Plan Carefully": "bg-orange-100 text-orange-800",
  };

  return (
    <article
      id={tour.slug}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-mist-300 flex flex-col"
    >
      <div className="relative h-48">
        <Image src={tour.image} alt={tour.imageAlt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        <span className="absolute top-3 right-3 bg-forest-900/90 text-mist-100 text-xs px-2 py-1 rounded font-medium">
          From ${tour.priceFrom}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-serif text-xl text-forest-900">{tour.title}</h3>
        </div>
        <p className="text-sm text-forest-700 mb-4 flex-1">{tour.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4 text-xs">
          <span className="bg-mist-200 text-forest-800 px-2 py-1 rounded">{tour.duration}</span>
          <span className="bg-mist-200 text-forest-800 px-2 py-1 rounded">{tour.activityLevel}</span>
          <span className={`px-2 py-1 rounded font-medium ${confidenceColors[tour.cruiseConfidence]}`}>
            {tour.cruiseConfidence}
          </span>
        </div>
        <Link
          href={`/excursions/#${tour.slug}`}
          className="text-sm font-semibold text-forest-800 hover:text-glacier-400 transition-colors"
        >
          Check Tour Options →
        </Link>
      </div>
    </article>
  );
}

export function TourDetail({ tour }: { tour: Tour }) {
  const confidenceColors = {
    "High Cruise Confidence": "border-green-500 bg-green-50",
    "Medium Cruise Confidence": "border-amber-500 bg-amber-50",
    "Plan Carefully": "border-orange-500 bg-orange-50",
  };

  return (
    <article id={tour.slug} className="bg-white rounded-xl shadow-md border border-mist-300 overflow-hidden mb-12 scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-auto min-h-[280px]">
          <Image src={tour.image} alt={tour.imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
        </div>
        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-timber-600 font-semibold">From ${tour.priceFrom}</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border-l-4 ${confidenceColors[tour.cruiseConfidence]}`}>
              {tour.cruiseConfidence}
            </span>
          </div>
          <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-3">{tour.title}</h2>
          <p className="text-forest-700 leading-relaxed mb-6">{tour.description}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <DetailItem label="Duration" value={tour.duration} />
            <DetailItem label="Activity Level" value={tour.activityLevel} />
            <DetailItem label="Walking Required" value={tour.walkingRequired} />
            <DetailItem label="Food & Drink" value={tour.foodDrink} />
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-8 border-t border-mist-200 bg-mist-100/50 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DetailBlock title="Best For" items={tour.bestFor} />
        <DetailBlock title="Who Should Choose This Tour" items={tour.whoShouldChoose} />
        <DetailBlock title="Who Should Choose a Different Tour" items={tour.whoShouldChooseDifferent} />
        <DetailBlock title="What to Bring" items={tour.whatToBring} />
        <div className="md:col-span-2 lg:col-span-2">
          <h4 className="font-semibold text-forest-900 mb-2 text-sm uppercase tracking-wider">Return-to-Ship Advice</h4>
          <p className="text-sm text-forest-700 leading-relaxed">{tour.returnToShipAdvice}</p>
        </div>
      </div>
    </article>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-forest-700 font-semibold mb-1">{label}</dt>
      <dd className="text-forest-900">{value}</dd>
    </div>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-forest-900 mb-2 text-sm uppercase tracking-wider">{title}</h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-forest-700 flex gap-2">
            <span className="text-glacier-400 shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
