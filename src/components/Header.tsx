import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConstructionBanner } from "./ConstructionBanner";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industries", label: "Industries" },
    { to: "/tools", label: "Tools" },
    { to: "/tshidi-ai", label: "TshidiAI" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/calculator", label: "Calculator" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ConstructionBanner />
      <div className="bg-background border-b-2 border-border">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex min-w-0 items-center gap-3 text-lg font-display font-extrabold tracking-tight uppercase sm:text-xl">
              <span className="h-4 w-4 border-2 border-border bg-primary shadow-[var(--shadow-brutal-sm)]" />
              <span className="truncate">Brand Hype.</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link to="/lead-capture">
                <Button className="border-2 border-border bg-foreground text-background shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow transition-all rounded-sm uppercase tracking-widest">
                  Start Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </nav>

            <button className="min-h-11 min-w-11 md:hidden border-2 border-border bg-background p-2 shadow-card" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation" aria-expanded={mobileMenuOpen}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden max-h-[calc(100svh-5rem)] overflow-y-auto py-4 border-t-2 border-border">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="min-h-11 border-2 border-border bg-background px-3 py-3 text-sm font-bold uppercase tracking-widest shadow-[var(--shadow-brutal-sm)] transition-colors hover:bg-primary hover:text-primary-foreground" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/lead-capture" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="border-2 border-border bg-foreground text-background shadow-card hover:shadow-glow transition-all w-full rounded-sm uppercase tracking-widest">
                    Start Project
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
