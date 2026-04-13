import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Database, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const TshidiAIPreview = () => {
  return (
    <section className="py-20 bg-dark text-dark-foreground relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Brain className="h-3 w-3 mr-1 inline" /> Hero Product
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Introducing{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">TshidiAI</span>
              </h2>
              <p className="text-lg text-dark-foreground/80">
                A Customer Decision Intelligence Platform that turns fragmented customer data into revenue-driving actions. Predict churn, prioritise customers, and execute — automatically.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tshidi-ai">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow rounded-full group">
                    Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="https://aidataana.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:border-primary/40 bg-transparent">
                    Try Demo
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm">
              {[
                { icon: Database, label: "Connect Data", desc: "Unify all sources" },
                { icon: Brain, label: "AI Analysis", desc: "Predict churn & value" },
                { icon: TrendingUp, label: "Revenue Insights", desc: "See what's at risk" },
                { icon: Zap, label: "Auto Actions", desc: "Execute instantly" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="p-4 rounded-xl bg-background/5 border border-primary/10 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary mb-2" />
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-xs text-dark-foreground/60">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
