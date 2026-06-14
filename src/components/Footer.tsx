import Link from "next/link";
import { SITE, NAV_LINKS, THEME_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-mist-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl text-mist-100 mb-3">Sitka Shore Excursion</h3>
            <p className="text-sm text-mist-300 leading-relaxed">
              Premium shore excursions for cruise passengers visiting Sitka, Alaska — bears, raptors, totem poles,
              rainforest trails, and Sitka Sound marine wildlife on Baranof Island.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-glacier-300 uppercase tracking-wider mb-3">Explore</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-glacier-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-glacier-300 uppercase tracking-wider mb-3">Tour Themes</h4>
            <ul className="space-y-2">
              {THEME_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-glacier-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-forest-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-mist-300">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. {SITE.domain}</p>
          <p>
            Independent excursion guide for cruise passengers. Not affiliated with any cruise line. Return-to-ship
            timing is your responsibility — we provide confidence guidance, not guarantees.
          </p>
        </div>
      </div>
    </footer>
  );
}
