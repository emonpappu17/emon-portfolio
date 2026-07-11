import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for does not exist. Return to Emon Howlader's portfolio to explore projects, skills, and more.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg space-y-8">
        {/* 404 Display */}
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-bold text-primary glow-text">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 rounded-full font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/#projects"
            className="px-8 py-4 rounded-full font-medium border border-border hover:border-primary/50 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links" className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Or try one of these:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/#about", label: "About" },
              { href: "/#skills", label: "Skills" },
              { href: "/#projects", label: "Projects" },
              { href: "/#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
