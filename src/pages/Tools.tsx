import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BarChart, Receipt, Car, Vote, CreditCard, GraduationCap, Calendar,
  UtensilsCrossed, FileText, Users, MessageSquare, User, Box, Sparkles, Warehouse
} from "lucide-react";

const tools = [
  { name: "AI Marketing Data Analytics Tool", desc: "Track and analyze marketing performance across platforms with AI-powered insights.", useCase: "Marketing teams needing real-time campaign analytics", icon: BarChart, color: "from-blue-500 to-cyan-500" },
  { name: "AI Invoicing System", desc: "Automated invoice generation, tracking, and payment reminders with smart categorization.", useCase: "Freelancers and businesses managing billing", icon: Receipt, color: "from-green-500 to-cyan-500" },
  { name: "Taxi Ride Management App", desc: "End-to-end ride management with driver tracking, fare calculation, and passenger matching.", useCase: "Transport companies and ride-hailing services", icon: Car, color: "from-orange-500 to-pink-500" },
  { name: "Voting Compliance System", desc: "Secure digital voting with compliance tracking, audit trails, and real-time results.", useCase: "Organizations requiring secure voting processes", icon: Vote, color: "from-purple-500 to-blue-500" },
  { name: "Digital Payment System", desc: "Integrated payment processing with multi-currency support and transaction dashboards.", useCase: "E-commerce and financial service providers", icon: CreditCard, color: "from-cyan-500 to-blue-500" },
  { name: "Learning Management System", desc: "Course creation, student tracking, assessments, and certifications in one platform.", useCase: "Educational institutions and corporate training", icon: GraduationCap, color: "from-pink-500 to-purple-500" },
  { name: "Booking Platforms (Salon, Lash, Wellness)", desc: "Online booking with staff management, reminders, and payment integration.", useCase: "Beauty salons, spas, and wellness businesses", icon: Calendar, color: "from-pink-500 to-red-500" },
  { name: "Food Delivery App", desc: "Restaurant ordering, delivery tracking, driver management, and customer ratings.", useCase: "Restaurants and food delivery businesses", icon: UtensilsCrossed, color: "from-orange-500 to-yellow-500" },
  { name: "Quote Generator", desc: "Professional quote creation with templates, calculations, and client management.", useCase: "Service businesses needing quick proposals", icon: FileText, color: "from-blue-500 to-purple-500" },
  { name: "Virtual Assistant Marketplace", desc: "Connect businesses with virtual assistants through matching, task management, and payments.", useCase: "Remote work and outsourcing agencies", icon: Users, color: "from-purple-500 to-pink-500" },
  { name: "Social Media CRM", desc: "Manage social media interactions, schedule content, and track audience engagement.", useCase: "Brands managing multi-platform presence", icon: MessageSquare, color: "from-cyan-500 to-blue-500" },
  { name: "Personal Brand Builder App", desc: "Build and manage your personal brand with templates, content planning, and analytics.", useCase: "Influencers and professionals building their brand", icon: User, color: "from-pink-500 to-purple-500" },
  { name: "3D Virtual Mall Prototype", desc: "Immersive 3D shopping experience with virtual storefronts and product showcases.", useCase: "Retail brands exploring virtual commerce", icon: Box, color: "from-purple-500 to-blue-500" },
  { name: "Beauty Marketplace Platform", desc: "Multi-vendor beauty marketplace with reviews, bookings, and product listings.", useCase: "Beauty industry aggregators", icon: Sparkles, color: "from-pink-500 to-red-500" },
  { name: "Warehouse Platform", desc: "Inventory management, order fulfillment, and warehouse operations dashboard.", useCase: "Logistics and distribution companies", icon: Warehouse, color: "from-orange-500 to-pink-500" },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">AI Powered</Badge>
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Tools</span>
            <br />& Products
          </h1>
          <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto mt-6">
            Ready-to-deploy and custom-built digital solutions for every industry
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                  <p className="text-xs text-muted-foreground mb-4"><strong>Use case:</strong> {tool.useCase}</p>
                  <Link to="/lead-capture">
                    <Button size="sm" variant="outline" className="w-full">Request Demo</Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
