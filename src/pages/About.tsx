import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Paintbrush, RefreshCw, Rocket } from "lucide-react";
import tshidiMoepi from "@/assets/tshidi-moepi-ceo.webp";

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

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-black sm:text-5xl md:text-7xl">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Altar Technology</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
            A scalable digital solutions company building the future, one project at a time.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-2 border-border bg-background p-2 shadow-brutal-xl">
              <img
                src={tshidiMoepi}
                alt="Tshidi Moepi, CEO and AI Workflow Engineer at Altar Technology"
                className="aspect-[4/5] w-full object-cover object-[62%_42%]"
                loading="lazy"
                width={1280}
                height={1600}
              />
              <div className="absolute -bottom-4 left-4 border-2 border-border bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card sm:left-6">
                Tshidi Moepi
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="mb-4 inline-flex border-2 border-border bg-accent px-3 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
                CEO / AI Workflow Engineer
              </div>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Altar Technology started as a social media marketing agency and has evolved into a full-service digital solutions company. We build custom websites, mobile apps, enterprise systems, AI-powered tools, and marketing campaigns that help businesses grow and scale.
            </p>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our team combines strategic thinking with technical execution. Whether you're a startup launching your first MVP or an enterprise needing complex automation, we deliver solutions that are modern, intelligent, and built to scale.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              We work with ambitious clients across industries — from BPO and logistics to beauty, education, and finance. Our approach is simple: understand the problem, design the solution, build it right, and support it long-term.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30 sm:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-black sm:mb-16 sm:text-4xl">
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

      <section className="py-12 bg-dark text-dark-foreground sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span></h2>
          <p className="mb-8 text-base text-dark-foreground/80 sm:text-xl">Ready to start your next project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lead-capture" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:text-lg">
                Start Project <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-sm text-base sm:text-lg">
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
