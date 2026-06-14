import Link from "next/link";
import { SITE } from "@/data/site";

interface BreadcrumbsProps {
  items: { name: string; href: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-forest-700 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        {allItems.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            {i > 0 && <span className="text-mist-300 mx-1">/</span>}
            {i === allItems.length - 1 ? (
              <span className="text-forest-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-glacier-400 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbUrls(items: { name: string; href: string }[]) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  return allItems.map((item) => ({
    name: item.name,
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
  }));
}
