import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ConstructionBanner } from "./ConstructionBanner";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formSection = document.getElementById('lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ConstructionBanner />
      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Brand Hype
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </Link>
            <Button onClick={scrollToForm} className="bg-gradient-primary hover:shadow-glow transition-all">
              Start Campaign
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
                Case Studies
              </Link>
              <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/tools" className="text-sm font-medium hover:text-primary transition-colors">
                Tools
              </Link>
              <Button onClick={scrollToForm} className="bg-gradient-primary hover:shadow-glow transition-all w-full">
                Start Campaign
              </Button>
            </div>
          </nav>
        )}
        </div>
      </div>
    </header>
  );
};
