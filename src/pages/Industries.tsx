import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Headphones, Sparkles, Truck, GraduationCap, ShoppingCart, Banknote } from "lucide-react";

const industries = [
  {
    id: "bpo",
    icon: Headphones,
    title: "BPO & Customer Experience",
    description: "Custom CRM systems, AI chatbots, workforce management dashboards, and automation tools for contact centres and BPO operations.",
    projects: ["CRM Dashboard", "AI Customer Service Bot", "Workforce Scheduler", "Quality Assurance System"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "beauty",
    icon: Sparkles,
    title: "Beauty & Wellness",
    description: "Booking platforms, e-commerce stores, loyalty systems, and marketing campaigns tailored for salons, spas, and wellness brands.",
    projects: ["Salon Booking App", "Beauty Marketplace", "Lash Booking Platform", "Influencer Campaigns"],
    color: "from-pink-500 to-purple-500"
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Transport",
    description: "Fleet management systems, ride-hailing apps, warehouse platforms, and real-time tracking solutions.",
    projects: ["Taxi Ride Management App", "Warehouse Platform", "Delivery Tracking System", "Fleet Dashboard"],
    color: "from-orange-500 to-pink-500"
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems, student portals, virtual classrooms, and educational content platforms.",
    projects: ["Learning Management System", "Student Portal", "Online Course Platform", "Assessment Engine"],
    color: "from-purple-500 to-blue-500"
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Online stores, marketplace platforms, inventory systems, and digital payment integrations.",
    projects: ["E-commerce Store", "3D Virtual Mall", "Inventory Management", "Digital Payment System"],
    color: "from-cyan-500 to-blue-500"
  },
  {
    id: "finance",
    icon: Banknote,
    title: "Finance & Payments",
    description: "Payment gateways, invoicing systems, financial dashboards, and compliance tools for fintech and financial services.",
    projects: ["AI Invoicing System", "Digital Payment Platform", "Financial Dashboard", "Voting Compliance System"],
    color: "from-green-500 to-cyan-500"
  }
];

export default function Industries() {
  const [selected, setSelected] = useState(industries[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-7xl">
            Industries <span className="bg-gradient-primary bg-clip-text text-transparent">We Serve</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
            Tailored digital solutions across key sectors
          </p>
        </div>
      </section>

      <section className="sticky top-16 z-40 border-b bg-background py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Button
                  key={ind.id}
                  variant={selected.id === ind.id ? "default" : "outline"}
                  onClick={() => setSelected(ind)}
                  className="flex-shrink-0 gap-2 snap-start text-xs sm:text-sm"
                >
                  <Icon className="h-4 w-4" />
                  {ind.title}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center mb-6`}>
              {(() => { const Icon = selected.icon; return <Icon className="h-10 w-10 text-white" />; })()}
            </div>
             <h2 className="mb-4 text-3xl font-black sm:text-4xl">{selected.title}</h2>
             <p className="text-base text-muted-foreground sm:text-lg">{selected.description}</p>
          </div>

           <Card className="mb-8 border-2 border-border p-5 sm:p-8">
            <h3 className="text-xl font-bold mb-4">Related Projects</h3>
             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {selected.projects.map((project, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium">{project}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center">
            <Link to="/lead-capture">
               <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:w-auto sm:text-lg">
                Discuss Your Project <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
