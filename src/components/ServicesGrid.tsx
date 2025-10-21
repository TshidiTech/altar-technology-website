import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Target, 
  BarChart, 
  Video, 
  Megaphone,
  Palette,
  Settings
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Strategy",
    description: "Custom content calendars, brand positioning, and platform optimization tailored to your audience.",
    color: "from-pink-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "End-to-end influencer campaigns from discovery to reporting with vetted creators.",
    color: "from-purple-500 to-blue-500"
  },
  {
    icon: Target,
    title: "Paid Advertising",
    description: "ROI-focused ad campaigns across Facebook, Instagram, TikTok, and YouTube.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Monthly performance insights with actionable recommendations and growth metrics.",
    color: "from-orange-500 to-pink-500"
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Professional UGC, branded posts, and engaging video content that converts.",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: Megaphone,
    title: "Community Management",
    description: "Active engagement, DM responses, and community building that drives loyalty.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Brand Design",
    description: "Visual identity, logo design, and complete brand guidelines for consistency.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Settings,
    title: "Marketing Automation",
    description: "Streamlined workflows, CRM integration, and automated scheduling systems.",
    color: "from-orange-500 to-yellow-500"
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
              Grow Your Brand
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marketing solutions designed to elevate your brand's digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 group cursor-pointer"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
