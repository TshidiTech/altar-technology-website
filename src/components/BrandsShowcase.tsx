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
    <section className="py-24 bg-accent overflow-hidden border-b-2 border-border">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-16 space-y-4">
          <div className="mx-auto inline-flex border-2 border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-card">
            Proof wall
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-none">
            Trusted by <span className="text-primary">Leading Brands</span>
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
                 className="flex-shrink-0 w-64 h-32 flex items-center justify-center p-6 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all border-2 border-border bg-background shadow-card rounded-sm"
              >
                <span className="text-2xl font-extrabold text-foreground/70 uppercase text-center leading-tight">{brand}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
