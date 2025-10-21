import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Sparkles, Globe, Palette, TrendingUp, Zap } from "lucide-react";

const tools = [
  {
    name: "AI Content Calendar",
    description: "Automatically generate a month's worth of content ideas tailored to your brand, industry, and target audience. Never run out of post ideas again.",
    icon: Calendar,
    status: "Coming Soon",
    color: "from-pink-500 to-purple-500",
    features: [
      "AI-powered content suggestions",
      "Multi-platform planning",
      "Optimal posting times",
      "Trending topic integration"
    ]
  },
  {
    name: "Smart Caption Generator",
    description: "Create engaging, on-brand captions in seconds with AI. Perfect for Instagram, TikTok, and all your social platforms.",
    icon: Sparkles,
    status: "Coming Soon",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Brand voice learning",
      "Hashtag recommendations",
      "Emoji optimization",
      "Multiple caption variations"
    ]
  },
  {
    name: "Brand Kit Creator",
    description: "Design consistent brand assets including logos, color palettes, and typography guidelines for cohesive branding.",
    icon: Palette,
    status: "Coming Soon",
    color: "from-orange-500 to-pink-500",
    features: [
      "AI logo generation",
      "Color palette suggestions",
      "Typography pairing",
      "Brand guidelines export"
    ]
  }
];

const addOnServices = [
  {
    name: "Website Builder",
    description: "Build stunning, conversion-optimized websites for your brand or influencer profile with our drag-and-drop builder.",
    icon: Globe,
    status: "Add-On Service",
    color: "from-purple-500 to-pink-500",
    features: [
      "Pre-designed templates",
      "Mobile responsive",
      "SEO optimized",
      "Analytics integration"
    ]
  },
  {
    name: "Performance Analytics Dashboard",
    description: "Track all your social media metrics in one place. Get actionable insights and recommendations to improve your performance.",
    icon: TrendingUp,
    status: "Add-On Service",
    color: "from-cyan-500 to-blue-500",
    features: [
      "Multi-platform tracking",
      "Competitor benchmarking",
      "ROI calculation",
      "Custom reports"
    ]
  },
  {
    name: "Viral Content Predictor",
    description: "Use AI to predict which content ideas have the highest potential to go viral before you create them.",
    icon: Zap,
    status: "Add-On Service",
    color: "from-pink-500 to-red-500",
    features: [
      "Trend analysis",
      "Engagement prediction",
      "Best format recommendations",
      "Timing optimization"
    ]
  }
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Coming Soon
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Powerful Tools
              </span>
              <br />
              For Modern Marketers
            </h1>
            <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto">
              AI-powered tools to streamline your content creation, grow your brand, and amplify your reach
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">AI-Powered Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} opacity-10 rounded-bl-full`} />
                  
                  <div className="relative space-y-6">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-10`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {tool.status}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${tool.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-muted hover:bg-muted/80 text-foreground"
                      disabled
                    >
                      Notify Me When Available
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">Add-On Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 relative overflow-hidden group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full`} />
                  
                  <div className="relative space-y-6">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        {service.status}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${service.color}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-muted hover:bg-muted/80 text-foreground"
                      disabled
                    >
                      Contact for Details
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">
              Want Early Access to
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Tools?
              </span>
            </h2>
            <p className="text-xl text-dark-foreground/80">
              Join our waitlist and be the first to know when these powerful marketing tools launch
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background/10 border border-border focus:border-primary focus:outline-none text-dark-foreground"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all rounded-full px-8">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
