import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Globe, Smartphone, Settings, Bot, Megaphone, Code
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites, e-commerce platforms, and web applications built for performance and conversion.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Smartphone,
    title: "App & Platform Development",
    description: "Native and cross-platform apps, MVPs, and scalable digital platforms.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Settings,
    title: "Systems & Automation",
    description: "CRM systems, dashboards, internal tools, and workflow automation for operational efficiency.",
    color: "from-orange-500 to-pink-500"
  },
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    description: "Intelligent chatbots, predictive systems, and full automation pipelines powered by AI.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Social media strategy, influencer marketing, paid advertising, content creation, and analytics.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Code,
    title: "Prototypes & MVPs",
    description: "Rapid prototyping and minimum viable products to validate your ideas fast.",
    color: "from-purple-500 to-blue-500"
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">
            Everything You Need to
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Build & Scale
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to="/services" key={index}>
                <Card 
                  className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 group cursor-pointer h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
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
