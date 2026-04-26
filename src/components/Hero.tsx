import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import platformDevices from "@/assets/brandhype-platform-devices.png";
import { TypingEffect } from "./TypingEffect";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 text-foreground">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l-2 border-border bg-accent lg:block" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center animate-fade-in">
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
                className="border-2 border-border bg-primary text-primary-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow transition-all text-base px-8 py-6 rounded-sm uppercase tracking-widest group"
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
            <div className="relative border-2 border-border bg-background p-3 shadow-brutal-xl">
              <div className="absolute -right-4 -top-4 h-20 w-20 border-2 border-border bg-secondary shadow-card" />
              <img
                src={platformDevices}
                alt="Brand Hype platform displayed on desktop and smartphone"
                className="relative z-10 aspect-[4/3] w-full object-cover"
                width={1280}
                height={960}
              />
              <div className="absolute -bottom-4 left-8 z-20 border-2 border-border bg-warning px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
                Platform-ready builds
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-b-2 border-border" />
    </section>
  );
};
