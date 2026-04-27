import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Brain, Database, TrendingUp, Target, Zap, BarChart3,
  Building2, Phone, Wifi, ShoppingCart, Shield, GraduationCap,
  Car, Hotel, Package, Truck, ArrowRight, CheckCircle2,
  AlertTriangle, Clock, Eye, Layers
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Banking", useCases: ["Detect customers likely to close accounts", "Identify high-value clients with low engagement", "Trigger credit card upsell campaigns", "Flag fraud-risk behaviour patterns", "Improve loan conversion rates", "Reduce churn in premium banking tiers"] },
  { icon: Phone, name: "Telecom", useCases: ["Predict prepaid churn", "Identify high-data users to upsell bundles", "Reduce complaints via proactive support", "Segment customers by usage patterns", "Improve recharge frequency", "Retain high ARPU customers"] },
  { icon: ShoppingCart, name: "Retail & E-commerce", useCases: ["Identify customers likely to stop buying", "Recommend next best product", "Trigger abandoned cart campaigns", "Segment high spenders vs low spenders", "Improve repeat purchase rate", "Reduce discount dependency"] },
  { icon: Shield, name: "Insurance", useCases: ["Predict policy cancellations", "Identify upsell opportunities (add-ons)", "Detect high-risk claims behaviour", "Improve renewal rates", "Segment customers by risk profile", "Reduce support load"] },
  { icon: GraduationCap, name: "Education", useCases: ["Predict student dropout", "Identify disengaged learners", "Improve course completion rates", "Personalise communication", "Track engagement patterns", "Upsell advanced programs"] },
  { icon: Car, name: "Automotive", useCases: ["Predict service drop-off", "Identify customers due for upgrades", "Improve service retention", "Track vehicle lifecycle engagement", "Upsell warranties", "Reduce churn in service plans"] },
  { icon: Hotel, name: "Hospitality", useCases: ["Identify customers unlikely to return", "Personalise offers", "Improve loyalty program engagement", "Segment travellers", "Increase repeat bookings", "Reduce cancellations"] },
  { icon: Package, name: "FMCG / Consumer Goods", useCases: ["Track brand loyalty decline", "Identify high-value shoppers", "Optimise promotions", "Predict demand patterns", "Improve distribution targeting", "Reduce churn in subscription models"] },
  { icon: Truck, name: "Logistics", useCases: ["Predict customer churn (B2B clients)", "Identify delayed delivery patterns", "Improve service reliability", "Optimise routing decisions", "Reduce operational inefficiencies", "Increase contract renewals"] },
];

const howItWorks = [
  { step: "1", title: "Connect Data", desc: "Upload or connect customer data from different systems — CRM, marketing tools, support, billing, and analytics.", icon: Database },
  { step: "2", title: "Understand Customers", desc: "The system cleans data, builds full customer profiles, and calculates churn risk, customer value, and engagement scores.", icon: Eye },
  { step: "3", title: "Get Insights", desc: "See how many customers are at risk, how much revenue is threatened, and what's causing the problem.", icon: BarChart3 },
  { step: "4", title: "Make Decisions", desc: "Know who to focus on, what action to take, and what will have the biggest impact on revenue.", icon: Target },
  { step: "5", title: "Take Action", desc: "Trigger campaigns, create support tickets, or assign sales follow-ups — all from one place.", icon: Zap },
  { step: "6", title: "See Results", desc: "Track what changed, how much revenue was saved, and how customer behaviour improved.", icon: TrendingUp },
];

const pricing = [
  {
    tier: "Starter",
    price: "R25,000",
    desc: "Basic customer analytics setup",
    features: ["Single data source integration", "Basic churn scoring", "Customer segmentation", "Monthly reports", "Email support"],
  },
  {
    tier: "Growth",
    price: "R70,000",
    desc: "Multi-source intelligence",
    features: ["Up to 5 data source integrations", "Predictive churn models", "Revenue-at-risk analysis", "Automated alerts", "Action recommendations", "CRM/API integrations", "Dedicated onboarding"],
    popular: true,
  },
  {
    tier: "Advanced",
    price: "R200,000+",
    desc: "Full enterprise platform",
    features: ["Unlimited data sources", "Custom AI models", "Full automation pipelines", "Multi-department dashboards", "Predictive logic engine", "White-label option", "Dedicated account team", "SLA guarantee"],
  },
];

export default function TshidiAI() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark pt-28 pb-12 text-dark-foreground sm:pt-32 sm:pb-20">
        <div className="container relative z-10 mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1 rounded-md">
            <Brain className="h-4 w-4 mr-2 inline" />
            Customer Decision Intelligence Platform
          </Badge>
          <h1 className="mb-6 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            TURN CUSTOMER DATA INTO{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">REVENUE DECISIONS</span>
          </h1>
          <p className="mb-8 max-w-3xl text-base text-dark-foreground/80 sm:text-xl md:text-2xl">
            Predict churn, prioritise customers, and execute actions across your business — automatically. A virtual data analyst for your revenue team.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="https://aidataana.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow text-base rounded-sm group sm:text-lg">
                Try Demo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/lead-capture" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-base rounded-sm border-2 border-primary/25 hover:border-primary/50 bg-background/5 sm:text-lg">
                Book a Demo
              </Button>
            </Link>
          </div>
          </div>
           <div className="rounded-sm border-2 border-border bg-background/10 p-3 shadow-glow sm:p-4">
            <div className="rounded-md bg-gradient-primary p-5 text-primary-foreground">
              <div className="text-sm font-bold uppercase opacity-80">Decision Engine</div>
              <div className="mt-2 text-4xl font-black">72%</div>
              <div className="text-sm opacity-80">risk signals prioritised for action</div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3">
              {["Churn", "Revenue", "Segments", "Actions"].map((item) => (
                <div key={item} className="rounded-md border border-border/20 bg-background/10 p-4">
                  <div className="h-1.5 w-16 rounded-full bg-gradient-secondary mb-6" />
                  <div className="font-bold">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <Badge variant="destructive" className="mb-4"><AlertTriangle className="h-4 w-4 mr-1 inline" /> The Problem</Badge>
            <h2 className="mb-4 text-3xl font-black md:text-5xl">Customer Data Is Everywhere, But Decisions Are Disconnected</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
              Big companies have customer data spread across CRM, marketing tools, support systems, analytics, and billing — but no one sees the complete picture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Layers, title: "Teams don't see the full picture", desc: "Data is fragmented across systems, uses different formats, and isn't connected in real-time. Marketing sees campaigns, sales sees deals, support sees complaints — but no one sees the complete customer journey." },
              { icon: Clock, title: "Decisions are slow", desc: "Data must be pulled manually, analysts build reports after the fact, insights are shared via slides. By the time action is taken, the opportunity is already lost." },
              { icon: AlertTriangle, title: "Customers leave without warning", desc: "Early signals like reduced usage, unresolved complaints, declining engagement, and reduced spend exist across systems — but they are not connected or acted on in time." },
              { icon: Eye, title: "Insight doesn't turn into action", desc: "Even when insights exist, they are not prioritised, not assigned to teams, and not executed in the tools teams already use. Insight stays as information, not action." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="p-6 border border-border bg-background">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-black">From Data to Revenue in 6 Steps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.step} className="p-6 border border-border hover:border-primary/30 transition-all bg-gradient-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                      {item.step}
                    </div>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Who It's For</Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Built for Revenue-Driven Teams</h2>
            <p className="text-lg text-muted-foreground">Banks, telecom companies, retail brands, insurance companies — and any team responsible for customer growth, retention, and revenue.</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
            {["Marketing Teams", "Sales Teams", "Customer Support", "Executives", "Data Analysts", "Product Teams", "Operations", "Finance"].map((team) => (
              <div key={team} className="p-4 bg-background rounded-lg border border-border text-center font-medium text-sm">
                {team}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Use Cases</Badge>
            <h2 className="text-3xl md:text-5xl font-black">Industry Applications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Card key={ind.name} className="p-6 border-2 border-border hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-lg">{ind.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {ind.useCases.map((uc, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">Choose Your Plan</h2>
            <p className="text-muted-foreground">Pricing based on the AI & Automation Solutions tier structure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <Card key={plan.tier} className={`p-6 border-2 transition-all sm:p-8 ${plan.popular ? "border-primary shadow-glow md:scale-[1.02]" : "border-border"}`}>
                {plan.popular && <Badge className="mb-4 bg-primary text-primary-foreground">Most Popular</Badge>}
                <h3 className="text-xl font-bold">{plan.tier}</h3>
                <div className="text-4xl font-black text-primary my-4">{plan.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/lead-capture">
                  <Button className={`w-full ${plan.popular ? "bg-gradient-primary hover:shadow-glow" : ""}`} variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            All prices in ZAR, excluding VAT. Final pricing determined during consultation.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            We Don't Just Analyse Data — We Turn It Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Revenue Actions</span>
          </h2>
          <p className="text-lg text-dark-foreground/80 mb-8">
            TshidiAI sits at the intersection of Data, AI, Operations, and Revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://aidataana.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow text-base rounded-sm sm:text-lg">
                Try the Demo
              </Button>
            </a>
            <Link to="/lead-capture" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full text-base rounded-sm border-2 border-primary/20 bg-transparent sm:text-lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
