import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, Smartphone, Settings, Bot, Megaphone, Code
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and web applications built for performance and conversion."
  },
  {
    icon: Smartphone,
    title: "App & Platform Development",
    description: "Native and cross-platform apps, MVPs, and scalable digital platforms."
  },
  {
    icon: Settings,
    title: "Systems & Automation",
    description: "CRM systems, dashboards, internal tools, and workflow automation for operational efficiency."
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Intelligent chatbots, predictive systems, and full automation pipelines powered by AI."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social media strategy, influencer marketing, paid advertising, content creation, and analytics."
  },
  {
    icon: Code,
    title: "Prototypes & MVPs",
    description: "Rapid prototyping and minimum viable products to validate your ideas fast."
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-background border-b-2 border-border">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div className="inline-flex w-fit border-2 border-border bg-warning px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
            Services menu
          </div>
          <div className="space-y-4 md:text-right">
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none">
            Everything You Need to
            <br />
            <span className="text-primary">
              Build & Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl md:ml-auto">
            Comprehensive digital solutions designed to transform your business
          </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to="/services" key={index}>
                <Card 
                  className="p-6 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg border-2 border-border group cursor-pointer h-full bg-card shadow-card rounded-sm"
                >
                  <div className="w-14 h-14 border-2 border-border bg-primary flex items-center justify-center mb-4 transition-transform shadow-card">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2 group-hover:text-primary transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
