import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { TypingEffect } from "./TypingEffect";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 text-foreground">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l-2 border-border bg-accent lg:block" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.12fr_0.88fr] gap-10 items-center animate-fade-in">
          <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 border-2 border-border bg-warning px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-card mb-4">
            <Sparkles className="h-4 w-4" />
            Built in South Africa, for South Africa
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.9] uppercase tracking-tight">
            Build the
            <br />
            <span className="text-primary">digital engine</span>
            <br />
            your business runs on.
          </h1>
          <div className="text-3xl md:text-5xl font-display font-extrabold uppercase text-secondary">
            <TypingEffect phrases={["Web apps", "AI systems", "MVPs", "Automation"]} typingSpeed={110} deletingSpeed={55} pauseTime={1600} />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Build, launch, and scale your digital products — from websites and apps to AI-powered systems and marketing campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link to="/lead-capture">
              <Button 
                size="lg" 
                className="border-2 border-border bg-primary text-primary-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-xl transition-all text-base px-8 py-6 rounded-sm uppercase tracking-widest group"
              >
                Start Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base px-8 py-6 rounded-sm border-2 border-border bg-background text-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow uppercase tracking-widest"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
          
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Free consultation / No commitment required / ZAR-first
          </p>
          </div>

          <div className="hidden lg:block">
            <div className="border-2 border-border bg-background p-4 shadow-brutal-xl">
              <div className="mb-3 flex items-center justify-between border-2 border-border bg-foreground px-4 py-3 text-background">
                <span className="text-xs font-bold uppercase tracking-widest">Brand Hype OS</span>
                <span className="h-3 w-3 border-2 border-background bg-primary" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Strategy", "Build", "Automate", "Scale"].map((item, index) => (
                  <div key={item} className="border-2 border-border bg-accent p-5 shadow-card">
                    <div className="mb-8 text-sm font-bold text-primary">0{index + 1}</div>
                    <div className="text-xl font-extrabold uppercase">{item}</div>
                    <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle2 className="h-4 w-4" /> Live</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 border-2 border-border bg-primary p-5 text-primary-foreground shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Conversion Engine</div>
                <div className="mt-2 text-3xl font-extrabold uppercase leading-none">From idea to revenue-ready platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-b-2 border-border" />
    </section>
  );
};
