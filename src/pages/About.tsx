import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Paintbrush, RefreshCw, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery & Planning", desc: "We dive deep into your business, goals, audience, and challenges to define a clear project roadmap." },
  { icon: Paintbrush, title: "Design & Development", desc: "Our team designs and builds your solution with modern tools, clean architecture, and pixel-perfect UI." },
  { icon: RefreshCw, title: "Review & Refine", desc: "We iterate based on your feedback, test thoroughly, and optimize for performance and usability." },
  { icon: Rocket, title: "Launch & Training", desc: "We deploy your solution, provide hands-on training, and offer ongoing support to ensure success." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Brand Hype</span>
          </h1>
          <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto">
            A scalable digital solutions company building the future, one project at a time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Brand Hype started as a social media marketing agency and has evolved into a full-service digital solutions company. We build custom websites, mobile apps, enterprise systems, AI-powered tools, and marketing campaigns that help businesses grow and scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team combines strategic thinking with technical execution. Whether you're a startup launching your first MVP or an enterprise needing complex automation, we deliver solutions that are modern, intelligent, and built to scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in South Africa, we work with clients across industries — from BPO and logistics to beauty, education, and finance. Our approach is simple: understand the problem, design the solution, build it right, and support it long-term.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black text-center mb-16">
            How We <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Card key={i} className="p-6 text-center border-2 border-border hover:border-primary/20 transition-all">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4">Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span></h2>
          <p className="text-xl text-dark-foreground/80 mb-8">Ready to start your next project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lead-capture">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow rounded-full text-lg px-8 py-6 gap-2">
                Start Project <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6">
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
