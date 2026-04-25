import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { TypingEffect } from "./TypingEffect";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark text-dark-foreground">
      <div 
        className="absolute inset-0 opacity-16 mix-blend-screen"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.12fr_0.88fr] gap-10 items-center animate-fade-in">
          <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 border border-primary/25 rounded-md text-primary text-sm font-bold uppercase tracking-wide mb-4">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Digital Solutions Company
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-normal">
            END-TO-END
            <br />
            <TypingEffect 
              phrases={[
                "WEB DEVELOPMENT",
                "APP DEVELOPMENT",
                "AI & AUTOMATION",
                "DIGITAL MARKETING",
                "SYSTEM DEVELOPMENT"
              ]}
              typingSpeed={120}
              deletingSpeed={60}
              pauseTime={2000}
            />
            <br />
            FOR YOUR BUSINESS
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-foreground/80 max-w-3xl mx-auto lg:mx-0">
            Build, launch, and scale your digital products — from websites and apps to AI-powered systems and marketing campaigns.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link to="/lead-capture">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 rounded-md group"
              >
                Start Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-md border-2 border-primary/25 hover:border-primary/50 bg-background/5 backdrop-blur"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-dark-foreground/60">
            Free consultation • No commitment required
          </p>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-lg border border-primary/20 bg-background/10 p-4 shadow-glow backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-3">
                {["Strategy", "Build", "Automate", "Scale"].map((item, index) => (
                  <div key={item} className="rounded-md border border-border/20 bg-background/10 p-5">
                    <div className="mb-8 text-sm font-bold text-accent">0{index + 1}</div>
                    <div className="text-xl font-black">{item}</div>
                    <div className="mt-2 h-1 w-12 rounded-full bg-gradient-primary" />
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-md bg-gradient-primary p-5 text-primary-foreground">
                <div className="text-sm font-bold uppercase opacity-80">Conversion Engine</div>
                <div className="mt-2 text-3xl font-black">From idea to revenue-ready platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
