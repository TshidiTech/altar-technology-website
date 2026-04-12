import { Mail, Phone, Instagram, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Brand Hype
            </h3>
            <p className="text-dark-foreground/70 mb-4">
              Your partner in digital solutions — from web & app development to AI automation and marketing.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">App & Platform Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Systems & Automation</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">AI & Automation Solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/tools" className="hover:text-primary transition-colors">Tools</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-dark-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:admin@brandhype.co.za" className="hover:text-primary transition-colors">
                  admin@brandhype.co.za
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:0670622953" className="hover:text-primary transition-colors">
                  067 062 2953
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Schedule a Call
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a href="https://instagram.com/brandhype" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @brandhype
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center text-dark-foreground/60 text-sm">
          <p>© 2025 Brand Hype Digital Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
