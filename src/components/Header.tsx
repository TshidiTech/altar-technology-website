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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-xl font-display font-extrabold tracking-tight uppercase">
              <span className="h-4 w-4 border-2 border-border bg-primary shadow-[var(--shadow-brutal-sm)]" />
              Brand Hype.
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

            <button className="md:hidden border-2 border-border bg-background p-2 shadow-card" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t-2 border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
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
