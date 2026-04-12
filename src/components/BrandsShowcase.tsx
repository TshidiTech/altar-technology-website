import { Card } from "@/components/ui/card";

const brandsWorkedWith = [
  "Jetour", "Vodacom", "DermaPlex", "Clinimed", "Nandos", "Sunlight",
  "Monosi", "Checkers60", "Savanna Cider", "Married at First Sight",
  "Connect TV", "Star Quality Creative Academy", "Asisa Foundation",
  "The Success Rate Podcast", "Creator Conversations Podcast", "Vanilla Pod Events",
  "EFF", "IEMSA", "Araya Beauty"
];

export const BrandsShowcase = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Leading Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We've helped amazing brands build and grow their digital presence
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-slide-left">
            {[...brandsWorkedWith, ...brandsWorkedWith].map((brand, index) => (
              <Card 
                key={`${brand}-${index}`}
                className="flex-shrink-0 w-64 h-32 flex items-center justify-center p-6 hover:shadow-card transition-all border-2 border-border hover:border-primary/20"
              >
                <span className="text-2xl font-bold text-foreground/60">{brand}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
