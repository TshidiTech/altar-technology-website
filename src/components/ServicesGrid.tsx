import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Sparkles, Headphones, BarChart3, Megaphone, Settings, Layers
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Customer Experience",
    description: "Journey design, self-service and engagement technology that makes every customer interaction easier."
  },
  {
    icon: Headphones,
    title: "Contact Centre Technology",
    description: "Omnichannel contact centre platforms, routing, quality and AI assistance for service teams."
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Data warehousing, dashboards and reporting that turn scattered data into decisions."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Intelligence",
    description: "Campaign, audience and attribution intelligence that shows what actually drives growth."
  },
  {
    icon: Settings,
    title: "Business Operations",
    description: "Workflow automation, internal systems and integrations that remove manual effort."
  },
  {
    icon: Layers,
    title: "Digital Platforms",
    description: "Web, mobile and cloud platforms engineered to scale with your organisation."
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
