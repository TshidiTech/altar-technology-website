import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Eye } from "lucide-react";
import jetourCar from "@/assets/jetour-car.avif";

const categories = ["All", "Systems", "Apps", "Websites", "AI Tools", "Marketing"];

const caseStudies = [
  {
    brand: "Jetour",
    campaign: "Valentine's Day Influencer Campaign",
    category: "Marketing",
    description: "Partnered with top influencer Quanzah to create authentic Valentine's Day content, driving unprecedented engagement for the Jetour brand.",
    metrics: [
      { label: "Total Reach", value: "2.4M", icon: Eye },
      { label: "Engagement", value: "350K", icon: Users },
      { label: "Conversion Rate", value: "12.5%", icon: TrendingUp }
    ],
    color: "from-pink-500 to-purple-500",
    image: jetourCar,
  },
  {
    brand: "IEMSA",
    campaign: "Workforce Management System",
    category: "Systems",
    description: "Built a custom workforce management and scheduling platform for IEMSA's BPO operations, automating shift allocation and performance tracking.",
    metrics: [
      { label: "Efficiency Gain", value: "40%", icon: TrendingUp },
      { label: "Users", value: "500+", icon: Users },
      { label: "Uptime", value: "99.9%", icon: Eye }
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    brand: "Araya Beauty",
    campaign: "E-commerce & Booking Platform",
    category: "Websites",
    description: "Designed and developed a full e-commerce website with integrated booking system for Araya Beauty's salon and product line.",
    metrics: [
      { label: "Online Sales", value: "+180%", icon: TrendingUp },
      { label: "Bookings", value: "2K+/mo", icon: Users },
      { label: "Load Time", value: "1.2s", icon: Eye }
    ],
    color: "from-pink-500 to-red-500",
  },
  {
    brand: "EFF",
    campaign: "Voting Compliance System",
    category: "AI Tools",
    description: "Developed a secure voting compliance and member management system with real-time analytics and audit trail capabilities.",
    metrics: [
      { label: "Members", value: "50K+", icon: Users },
      { label: "Accuracy", value: "99.8%", icon: TrendingUp },
      { label: "Processing", value: "Real-time", icon: Eye }
    ],
    color: "from-green-500 to-cyan-500",
  },
  {
    brand: "Transport Co.",
    campaign: "Taxi Ride Management App",
    category: "Apps",
    description: "Built a complete ride management app with driver tracking, fare calculation, passenger matching, and payment processing.",
    metrics: [
      { label: "Daily Rides", value: "1.5K", icon: TrendingUp },
      { label: "Drivers", value: "200+", icon: Users },
      { label: "Rating", value: "4.8★", icon: Eye }
    ],
    color: "from-orange-500 to-pink-500",
  },
  {
    brand: "EduTech",
    campaign: "Learning Management System",
    category: "Systems",
    description: "Created a comprehensive LMS with course creation, student tracking, assessments, and automated certification.",
    metrics: [
      { label: "Students", value: "10K+", icon: Users },
      { label: "Courses", value: "150+", icon: Eye },
      { label: "Completion", value: "78%", icon: TrendingUp }
    ],
    color: "from-purple-500 to-blue-500",
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? caseStudies : caseStudies.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
            <br />That Speak Volumes
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-dark-foreground/80 sm:mt-6 sm:text-xl">
            Real results from real projects across development, systems, AI, and marketing.
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b bg-background py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
            {categories.map(cat => (
              <Button key={cat} variant={activeCategory === cat ? "default" : "outline"} onClick={() => setActiveCategory(cat)} className="flex-shrink-0 snap-start text-xs sm:text-sm">
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filtered.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20">
                {study.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={study.image} alt={study.brand} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-2 w-16 bg-gradient-to-r ${study.color} rounded-full`} />
                    <Badge variant="outline">{study.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{study.brand}</h3>
                  <h4 className="text-primary font-semibold mb-3">{study.campaign}</h4>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    {study.metrics.map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div key={i} className="text-center p-3 bg-muted/50 rounded-xl">
                          <Icon className="h-4 w-4 mx-auto mb-1 text-primary" />
                          <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark text-dark-foreground sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">Ready to Be Our Next <span className="bg-gradient-primary bg-clip-text text-transparent">Success Story?</span></h2>
          <Link to="/lead-capture">
            <Button size="lg" className="mt-6 w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:w-auto sm:text-lg">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
