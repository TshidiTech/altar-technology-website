import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { TypingEffect } from "./TypingEffect";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark text-dark-foreground">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Social Media Marketing Experts
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            END-TO-END
            <br />
            <TypingEffect 
              phrases={[
                "INFLUENCER MARKETING",
                "CONTENT CREATION",
                "SOCIAL MEDIA MARKETING",
                "PAID ADVERTISING"
              ]}
              typingSpeed={120}
              deletingSpeed={60}
              pauseTime={2000}
            />
            <br />
            FOR YOUR BRAND
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-foreground/80 max-w-3xl mx-auto">
            Run your entire social media campaign in one place. From recruiting influencers, to campaign management, paid advertising & more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 rounded-full group"
              onClick={() => window.location.href = '/#contact'}
            >
              Start Campaign
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full border-2 border-primary/20 hover:border-primary/40 bg-transparent"
              onClick={() => window.location.href = '/case-studies'}
            >
              View Case Studies
            </Button>
          </div>
          
          <p className="text-sm text-dark-foreground/60">
            Free consultation • No commitment required
          </p>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
    </section>
  );
};
