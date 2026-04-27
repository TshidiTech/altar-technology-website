import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, Smartphone, Settings, Bot, Megaphone, ArrowRight, CheckCircle2
} from "lucide-react";

import fitnessInfluencer from "@/assets/portrait-fitness-influencer.jpg";
import fitnessInfluencer2 from "@/assets/portrait-fitness-influencer_2.jpg";
import fitnessInfluencer1 from "@/assets/portrait-fitness-influencer_1.jpg";
import petsContent from "@/assets/person-creating-online-content-with-their-pets.jpg";
import foodContent from "@/assets/people-creating-food-content-upload-internet-food-lovers.jpg";
import lifestyleInfluencer5 from "@/assets/medium-shot-plus-sized-woman-influencer_5.jpg";
import lifestyleInfluencer4 from "@/assets/medium-shot-plus-sized-woman-influencer_4.jpg";
import lifestyleInfluencer3 from "@/assets/medium-shot-plus-sized-woman-influencer_3.jpg";

const serviceCategories = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    overview: "Custom websites, landing pages, e-commerce stores, and web applications designed for performance, SEO, and conversion.",
    included: ["Custom responsive design", "CMS integration", "SEO optimization", "Contact forms & lead funnels", "Analytics setup", "Performance optimization", "SSL & security"],
    useCases: ["Business websites", "E-commerce stores", "Landing pages", "Web portals", "Booking platforms"],
    pricing: { starter: "R15,000", growth: "R80,000", advanced: "R180,000" }
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App & Platform Development",
    overview: "Native and cross-platform mobile apps, digital platforms, and scalable products from MVP to full-scale systems.",
    included: ["UI/UX design", "Cross-platform development", "Admin dashboards", "API integrations", "User management", "Push notifications", "App store deployment"],
    useCases: ["Mobile apps", "SaaS platforms", "Marketplace apps", "Internal tools", "MVPs & prototypes"],
    pricing: { starter: "R40,000", growth: "R250,000", advanced: "R650,000+" }
  },
  {
    id: "systems",
    icon: Settings,
    title: "Systems & Automation",
    overview: "CRM systems, operational dashboards, internal tools, and workflow automation that streamline your business operations.",
    included: ["Custom CRM builds", "Workflow automation", "Data tracking dashboards", "Multi-department integration", "Reporting systems", "API connections", "Staff training"],
    useCases: ["CRM systems", "Operations dashboards", "Inventory management", "HR & payroll tools", "Logistics tracking"],
    pricing: { starter: "R160,000", growth: "R240,000", advanced: "R450,000+" }
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI & Automation Solutions",
    overview: "Intelligent chatbots, smart automation flows, predictive systems, and AI-powered tools that give your business a competitive edge.",
    included: ["AI chatbot development", "FAQ automation", "Smart automation flows", "CRM/API integrations", "Lead qualification bots", "Predictive analytics", "Full automation pipelines"],
    useCases: ["Customer service bots", "Lead qualification", "Data analysis", "Process automation", "Predictive systems"],
    pricing: { starter: "R25,000", growth: "R70,000", advanced: "R200,000+" }
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    overview: "Full-service digital marketing — social media strategy, influencer campaigns, paid advertising, content creation, and performance reporting.",
    included: ["Social media strategy", "Content creation (graphics + video)", "Paid ads management", "Influencer marketing", "Community management", "Monthly reporting", "Brand design"],
    useCases: ["Brand launches", "Lead generation", "Product campaigns", "Social media growth", "Reputation management"],
    pricing: { starter: "R16,000/mo", growth: "R30,000/mo", advanced: "R65,000/mo" }
  }
];

export default function Services() {
  const [selected, setSelected] = useState(serviceCategories[0]);

  const carouselImages = [
    fitnessInfluencer, fitnessInfluencer2, fitnessInfluencer1,
    petsContent, foodContent, lifestyleInfluencer5,
    lifestyleInfluencer4, lifestyleInfluencer3
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
              End-to-end digital solutions — from development to marketing
            </p>
          </div>
        </div>
      </section>

      {/* Service Nav */}
      <section className="sticky top-16 z-40 border-b bg-background py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full">
            {serviceCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Button
                  key={cat.id}
                  variant={selected.id === cat.id ? "default" : "outline"}
                  onClick={() => setSelected(cat)}
                  className="flex-shrink-0 gap-2 snap-start text-xs sm:text-sm"
                >
                  <Icon className="h-4 w-4" />
                  {cat.title}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-3xl font-black sm:text-4xl md:text-5xl">{selected.title}</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">{selected.overview}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-5 border-2 border-border sm:p-8">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-3">
                {selected.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-5 border-2 border-border sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <ul className="space-y-3">
                {selected.useCases.map((uc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-muted/30 rounded-lg">
                <h4 className="font-bold mb-3">Pricing Tiers</h4>
                 <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3 sm:gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Starter</p>
                    <p className="font-bold text-primary">{selected.pricing.starter}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Growth</p>
                    <p className="font-bold text-primary">{selected.pricing.growth}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Advanced</p>
                    <p className="font-bold text-primary">{selected.pricing.advanced}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/lead-capture">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:w-auto sm:text-lg">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Show carousel only for marketing */}
      {selected.id === "marketing" && (
        <ImageCarousel images={carouselImages} />
      )}

      <Footer />
    </div>
  );
}
