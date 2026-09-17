import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import platformDevices from "@/assets/brandhype-platform-devices.png";
import { TypingEffect } from "./TypingEffect";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background pt-24 text-foreground sm:pt-28">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 border-l-2 border-border bg-accent lg:block" />
      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 animate-fade-in lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 text-center lg:text-left sm:space-y-8">
          <div className="inline-flex max-w-full items-center gap-2 border-2 border-border bg-warning px-3 py-2 text-[0.68rem] font-bold uppercase tracking-widest shadow-card sm:px-4 sm:text-xs">
            <Sparkles className="h-4 w-4" />
            AI • Data • Cloud • Software
          </div>
          
          <h1 className="text-4xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
            Build.
            <br />
            <span className="text-primary">Transform.</span>
            <br />
            Grow.
          </h1>
          <div className="min-h-10 text-2xl font-display font-extrabold uppercase text-secondary sm:text-3xl md:text-5xl">
            <TypingEffect phrases={["Artificial intelligence", "Data platforms", "Cloud systems", "Custom software"]} typingSpeed={110} deletingSpeed={55} pauseTime={1600} />
          </div>
          
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-2xl lg:mx-0">
            We build technology that helps organisations work smarter, serve customers better and grow faster — starting with the problem, not the technology.
          </p>
          
          <div className="flex flex-col items-stretch justify-center gap-3 pt-2 sm:flex-row sm:items-center lg:justify-start">
            <Link to="/lead-capture" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full border-2 border-border bg-primary text-primary-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow transition-all text-sm sm:text-base rounded-sm uppercase tracking-widest group"
              >
                Start Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/case-studies" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full rounded-sm border-2 border-border bg-background text-sm text-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow uppercase tracking-widest sm:text-base"
              >
                View Case Studies
              </Button>
            </Link>
          </div>
          
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Free discovery session / No commitment / South African built
          </p>
          </div>

          <div className="mt-2 lg:mt-0">
            <div className="relative border-2 border-border bg-background p-3 shadow-brutal-xl">
              <div className="absolute -right-4 -top-4 h-20 w-20 border-2 border-border bg-secondary shadow-card" />
              <img
                src={platformDevices}
                alt="Altar Technology platform shown on desktop and smartphone"
                className="relative z-10 aspect-[4/3] w-full object-cover"
                width={1280}
                height={960}
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute -bottom-4 left-8 z-20 border-2 border-border bg-warning px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
                Enterprise-ready platforms
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-b-2 border-border" />
    </section>
  );
};
