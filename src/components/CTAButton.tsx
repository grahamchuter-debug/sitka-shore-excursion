import Link from "next/link";

type CTAVariant = "primary" | "secondary" | "outline";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: CTAVariant;
  className?: string;
}

const variants: Record<CTAVariant, string> = {
  primary: "bg-glacier-400 text-forest-950 hover:bg-glacier-300",
  secondary: "bg-forest-800 text-mist-100 hover:bg-forest-700",
  outline: "border-2 border-forest-800 text-forest-800 hover:bg-forest-800 hover:text-mist-100",
};

export function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold text-sm transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CTAGroup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <CTAButton href="/excursions/">View Sitka Shore Excursions</CTAButton>
      <CTAButton href="/one-day-in-sitka/" variant="outline">
        Plan Your Sitka Port Day
      </CTAButton>
      <CTAButton href="/excursions/#compare" variant="secondary">
        Compare Sitka Tours
      </CTAButton>
    </div>
  );
}
