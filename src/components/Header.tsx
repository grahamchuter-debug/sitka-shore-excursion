import Link from "next/link";
import { SITE, NAV_LINKS, THEME_LINKS } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-forest-900/95 backdrop-blur-sm border-b border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-xl lg:text-2xl text-mist-100 tracking-wide group-hover:text-glacier-300 transition-colors">
              Sitka Shore Excursion
            </span>
            <span className="text-xs text-glacier-300/80 tracking-widest uppercase hidden sm:block">
              {SITE.port}
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-mist-200 hover:text-glacier-300 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/excursions/"
              className="text-sm bg-glacier-400 text-forest-950 px-4 py-2 rounded-md font-semibold hover:bg-glacier-300 transition-colors"
            >
              View Sitka Shore Excursions
            </Link>
          </nav>
          <details className="lg:hidden relative">
            <summary className="list-none cursor-pointer text-mist-100 p-2" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-64 bg-forest-900 border border-forest-800 rounded-lg shadow-xl p-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-mist-200 hover:text-glacier-300 text-sm">
                  {link.label}
                </Link>
              ))}
              <hr className="border-forest-800" />
              <span className="text-xs text-glacier-400 uppercase tracking-wider">Tour Themes</span>
              {THEME_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-mist-200 hover:text-glacier-300 text-sm pl-2">
                  {link.label}
                </Link>
              ))}
              <Link
                href="/excursions/"
                className="text-center bg-glacier-400 text-forest-950 px-4 py-2 rounded-md font-semibold text-sm mt-2"
              >
                View Sitka Shore Excursions
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
