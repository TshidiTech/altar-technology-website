import { Card } from "@/components/ui/card";

const brandsWorkedWith = [
  "Jetour", "Vodacom", "DermaPlex", "Clinimed", "Nandos", "Sunlight",
  "Monosi", "Checkers60", "Savanna Cider", "Married at First Sight",
  "Connect TV", "Star Quality Creative Academy", "Asisa Foundation",
  "The Success Rate Podcast", "Creator Conversations Podcast", "Vanilla Pod Events"
];

const wishlistBrands = [
  "Woolworths", "Absa", "Nando's", "Castle Lite", "DSTV", "Telkom",
  "Standard Bank", "Mr Price", "Superbalist", "Bathu", "Drip", "Pick n Pay",
  "Nike", "Adidas", "Puma", "Coca-Cola", "Pepsi", "McDonald's",
  "Apple", "Samsung", "Sony", "Netflix", "Spotify", "Amazon",
  "Tesla", "SpaceX", "Google", "Meta", "Microsoft", "Disney",
  "Supreme", "Gucci", "Louis Vuitton", "Rolex", "Ferrari", "Lamborghini",
  "Zara", "H&M", "Uniqlo", "Levi's", "Tommy Hilfiger", "Calvin Klein",
  "Red Bull", "Monster Energy", "Starbucks", "KFC", "Uber Eats", "Takealot",
  "Game", "Makro", "Clicks", "Dis-Chem", "Capitec", "FNB",
  "Discovery", "Old Mutual", "Sanlam", "BMW", "Mercedes-Benz", "Audi"
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
            We've helped amazing brands grow their digital presence
          </p>
        </div>

        {/* Brands We've Worked With */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center mb-8">Brands We've Worked With</h3>
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

        {/* Wishlist Brands */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-accent bg-clip-text text-transparent">
            Brands We'd Love to Work With
          </h3>
          <div className="relative">
            <div className="flex gap-6 animate-slide-right">
              {[...wishlistBrands, ...wishlistBrands].map((brand, index) => (
                <Card 
                  key={`${brand}-${index}`}
                  className="flex-shrink-0 w-64 h-32 flex items-center justify-center p-6 hover:shadow-glow transition-all border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5"
                >
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {brand}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
