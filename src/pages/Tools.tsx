import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  BarChart, Receipt, Car, CreditCard, GraduationCap, Calendar,
  UtensilsCrossed, FileText, Users, MessageSquare, Box, Sparkles, Warehouse,
  ExternalLink, Brain, Globe, BookOpen
} from "lucide-react";

const tools = [
  { name: "AI Customer Data Analytics Tool", desc: "Predict churn, prioritise customers, and execute revenue-driving actions automatically.", useCase: "Banks, telecom, retail, insurance — any revenue team", icon: BarChart, color: "from-blue-500 to-cyan-500", demo: "https://aidataana.netlify.app/", screenshot: "/demos/ai-data-analytics.png" },
  { name: "AI Invoicing System", desc: "Automated invoice generation, tracking, and payment reminders with smart categorization.", useCase: "Freelancers and businesses managing billing", icon: Receipt, color: "from-green-500 to-cyan-500", demo: "https://orchinvoice.netlify.app/", screenshot: "/demos/invoicing.png" },
  { name: "Taxi Ride Management App", desc: "End-to-end ride management with driver tracking, fare calculation, and passenger matching.", useCase: "Transport companies and ride-hailing services", icon: Car, color: "from-orange-500 to-pink-500", demo: "https://taxiflowdemo.netlify.app/", screenshot: "/demos/taxi.png" },
  { name: "Digital Payment System", desc: "Integrated payment processing with multi-currency support and transaction dashboards.", useCase: "E-commerce and financial service providers", icon: CreditCard, color: "from-cyan-500 to-blue-500", demo: "https://mobuxx.netlify.app/", screenshot: "/demos/payment.png" },
  { name: "Learning Management System", desc: "Course creation, student tracking, assessments, and certifications in one platform.", useCase: "Educational institutions and corporate training", icon: GraduationCap, color: "from-pink-500 to-purple-500", demo: "https://ai4sa.netlify.app/", screenshot: "/demos/lms.png" },
  { name: "Learning App", desc: "Interactive learning experience with AI-powered content delivery and progress tracking.", useCase: "Students and self-paced learners", icon: BookOpen, color: "from-indigo-500 to-purple-500", demo: "https://demoai4sa.netlify.app/", screenshot: "/demos/learning-app.png" },
  { name: "Booking Platform (Wellness)", desc: "Online booking with staff management, reminders, and payment integration.", useCase: "Beauty salons, spas, and wellness businesses", icon: Calendar, color: "from-pink-500 to-red-500", demo: "https://wellnessconnect.netlify.app/", screenshot: "/demos/wellness.png" },
  { name: "Booking Platform (Travel)", desc: "Travel booking with destination search, itinerary management, and availability calendars.", useCase: "Travel agencies and tour operators", icon: Globe, color: "from-teal-500 to-cyan-500", demo: "https://travelseassidedemo.netlify.app/", screenshot: "/demos/travel.png" },
  { name: "Food Delivery App", desc: "Restaurant ordering, delivery tracking, driver management, and customer ratings.", useCase: "Restaurants and food delivery businesses", icon: UtensilsCrossed, color: "from-orange-500 to-yellow-500", demo: "https://bitebuzzzz.netlify.app/", screenshot: "/demos/food.png" },
  { name: "Quote Generator", desc: "Professional quote creation with templates, calculations, and client management.", useCase: "Service businesses needing quick proposals", icon: FileText, color: "from-blue-500 to-purple-500", demo: "https://sjvza.netlify.app/", screenshot: "/demos/quote.png" },
  { name: "Bill Generator", desc: "Fast, accurate billing with customisable templates and automated calculations.", useCase: "Small businesses and freelancers", icon: Receipt, color: "from-emerald-500 to-green-500", demo: "https://bhmbillgen.netlify.app/", screenshot: "/demos/bill.png" },
  { name: "Virtual Assistant Marketplace", desc: "Connect businesses with virtual assistants through matching, task management, and payments.", useCase: "Remote work and outsourcing agencies", icon: Users, color: "from-purple-500 to-pink-500", demo: "https://virtualassistanthub.netlify.app/", screenshot: "/demos/va.png" },
  { name: "Social Media Platform Demo", desc: "Full social media platform with feeds, profiles, messaging, and content sharing.", useCase: "Brands building community platforms", icon: MessageSquare, color: "from-cyan-500 to-blue-500", demo: "https://arayasocialdemo.netlify.app/", screenshot: "/demos/social.png" },
  { name: "3D Virtual Mall Prototype", desc: "Immersive 3D shopping experience with virtual storefronts and product showcases.", useCase: "Retail brands exploring virtual commerce", icon: Box, color: "from-purple-500 to-blue-500", demo: "https://arayamall.netlify.app/", screenshot: "/demos/3d-virtual-mall.png" },
  { name: "Warehouse Platform", desc: "Inventory management, order fulfillment, and warehouse operations dashboard.", useCase: "Logistics and distribution companies", icon: Warehouse, color: "from-orange-500 to-pink-500", demo: "https://wcfza.netlify.app/", screenshot: "/demos/warehouse.png" },
  { name: "Beauty E-commerce Store", desc: "Multi-vendor beauty marketplace with reviews, bookings, and product listings.", useCase: "Beauty industry retailers and aggregators", icon: Sparkles, color: "from-pink-500 to-red-500", demo: "https://lovablelash.netlify.app/", screenshot: "/demos/beauty.png" },
  { name: "NPC Website", desc: "Modern organisational website with member management and event listings.", useCase: "Non-profit and community organisations", icon: Globe, color: "from-slate-500 to-gray-500", demo: "https://myaman67demo.netlify.app/", screenshot: "/demos/npc.png" },
  { name: "Social Media Marketing Agent", desc: "AI-powered marketing agent for content creation, scheduling, and campaign management.", useCase: "Small businesses growing their brand", icon: Brain, color: "from-orange-500 to-red-500", demo: "https://tshidisocialai.netlify.app/", screenshot: "/demos/social-marketing-agent.png" },
];

export default function Tools() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-gradient-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 rounded-md">AI Powered</Badge>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Digital Tools</span>
            <br />& Products
          </h1>
          <p className="mt-4 max-w-2xl text-base text-dark-foreground/80 sm:mt-6 sm:text-xl">
            Ready-to-deploy and custom-built digital solutions for every industry
          </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-sm border-2 border-border bg-background/10 p-2 sm:gap-3 sm:p-4">
            {["Demo", "Scope", "Build"].map((item, index) => (
              <div key={item} className="rounded-sm bg-background/10 p-3 text-center sm:p-4">
                <div className="text-xl font-black text-accent sm:text-2xl">0{index + 1}</div>
                <div className="mt-2 text-sm font-bold">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TshidiAI Featured Product */}
      <section className="py-12 bg-gradient-accent border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 rounded-md">
              <Brain className="h-3 w-3 mr-1 inline" /> Featured Product
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-3">TshidiAI — Customer Decision Intelligence</h2>
            <p className="text-muted-foreground">Turn fragmented customer data into revenue-driving decisions and automated actions.</p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/tshidi-ai" className="w-full sm:w-auto">
                <Button className="bg-gradient-primary hover:shadow-glow gap-2 rounded-md">
                <Brain className="h-4 w-4" /> Explore TshidiAI
              </Button>
            </Link>
            <a href="https://aidataana.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="gap-2 rounded-md">
                <ExternalLink className="h-4 w-4" /> Try Demo
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> These are demos/prototypes and not finished products. Further development can be implemented based on your requirements.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border hover:border-primary/30 group">
                  {tool.screenshot && (
                    <div className="h-40 overflow-hidden bg-muted">
                      <img src={tool.screenshot} alt={tool.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-md bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                    <p className="text-xs text-muted-foreground mb-4"><strong>Use case:</strong> {tool.useCase}</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      <a href={tool.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full gap-1">
                          <ExternalLink className="h-3 w-3" /> View Demo
                        </Button>
                      </a>
                      <Link to="/lead-capture" className="flex-1">
                        <Button size="sm" className="w-full">Request Build</Button>
                      </Link>
                    </div>
                  </div>
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
