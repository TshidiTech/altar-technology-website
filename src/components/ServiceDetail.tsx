import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceDetailProps {
  problem: string;
  solution: string;
  results: string;
  howWeWork: string[];
}

export const ServiceDetail = ({ problem, solution, results, howWeWork }: ServiceDetailProps) => {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 bg-accent/20 border-2 border-accent/50">
          <h3 className="text-lg font-bold text-primary mb-3">The Problem</h3>
          <p className="text-muted-foreground leading-relaxed">{problem}</p>
        </Card>
        
        <Card className="p-6 bg-secondary/5 border-2 border-secondary/30">
          <h3 className="text-lg font-bold text-secondary mb-3">Our Solution</h3>
          <p className="text-muted-foreground leading-relaxed">{solution}</p>
        </Card>
        
        <Card className="p-6 bg-primary/5 border-2 border-primary/30">
          <h3 className="text-lg font-bold text-primary mb-3">Expected Results</h3>
          <p className="text-muted-foreground leading-relaxed">{results}</p>
        </Card>
      </div>

      <Card className="p-8 bg-background border-2">
        <h3 className="text-2xl font-bold mb-6">How We Work</h3>
        <div className="space-y-4">
          {howWeWork.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>
              <p className="text-muted-foreground pt-1">{step}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
