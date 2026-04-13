import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Brand Hype
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm font-medium hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link to="/lead-capture">
                <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                  Start Project
                </Button>
              </Link>
            </nav>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <Link to="/lead-capture" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-gradient-primary hover:shadow-glow transition-all w-full">
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
