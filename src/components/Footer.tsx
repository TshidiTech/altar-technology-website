import { Mail, Phone, Instagram } from "lucide-react";

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
              Your partner in social media marketing, influencer partnerships, and paid advertising success.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Social Media Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Influencer Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Creation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-dark-foreground/70">
              <li><a href="/case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/tools" className="hover:text-primary transition-colors">Tools</a></li>
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-dark-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@brandhype.co.za" className="hover:text-primary transition-colors">
                  hello@brandhype.co.za
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:086617013" className="hover:text-primary transition-colors">
                  08 661 7013
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
          <p>© 2025 Brand Hype Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
