import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import lifestyleInfluencer from "@/assets/portrait-young-person-holding-camera.jpg";
import podcastInfluencer from "@/assets/portrait-plus-size-man-influencer.jpg";
import fashionInfluencer from "@/assets/portrait-plus-size-male-influencer-1.jpg";
import petsContent from "@/assets/influencer-pet-content-creators.jpg";
import parentingContent from "@/assets/parenting-content-creator.jpg";
import familyContent from "@/assets/parenting-content-creator-1.jpg";

const blogPosts = [
  {
    title: "10 Influencer Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging trends in influencer marketing, from AI-powered analytics to nano-influencer partnerships.",
    category: "Influencer Marketing",
    date: "2025-01-15",
    readTime: "5 min",
    color: "from-pink-500 to-purple-500",
    image: lifestyleInfluencer
  },
  {
    title: "How to Create a High-Converting Social Media Strategy",
    excerpt: "Learn the essential steps to build a social media strategy that drives engagement, builds community, and converts followers into customers.",
    category: "Strategy",
    date: "2025-01-12",
    readTime: "8 min",
    color: "from-blue-500 to-cyan-500",
    image: fashionInfluencer
  },
  {
    title: "Podcasting for Brands: The Ultimate Guide",
    excerpt: "Discover how podcasting can transform your brand's storytelling and create deeper connections with your audience through authentic audio content.",
    category: "Content Marketing",
    date: "2025-01-10",
    readTime: "12 min",
    color: "from-purple-500 to-pink-500",
    image: podcastInfluencer
  },
  {
    title: "Pet Content That Converts: Marketing to Animal Lovers",
    excerpt: "Learn how pet brands are leveraging heartwarming content and influencer partnerships to build loyal communities and drive sales.",
    category: "Content Marketing",
    date: "2025-01-08",
    readTime: "6 min",
    color: "from-orange-500 to-pink-500",
    image: petsContent
  },
  {
    title: "Parenting Influencers: The Most Trusted Voice in Marketing",
    excerpt: "Why parent influencers command the highest trust levels and how brands can authentically partner with them for maximum impact.",
    category: "Influencer Marketing",
    date: "2025-01-05",
    readTime: "7 min",
    color: "from-pink-500 to-red-500",
    image: parentingContent
  },
  {
    title: "Building a Profitable Creator Partnership Program",
    excerpt: "Step-by-step guide to launching and scaling a successful creator affiliate program that drives sales and builds brand advocacy.",
    category: "Influencer Marketing",
    date: "2025-01-03",
    readTime: "10 min",
    color: "from-cyan-500 to-blue-500",
    image: familyContent
  },
  {
    title: "Analytics That Matter: KPIs Every Brand Should Track",
    excerpt: "Cut through the noise and focus on the metrics that actually indicate business growth and marketing success.",
    category: "Analytics",
    date: "2024-12-28",
    readTime: "9 min",
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "How to Vet Influencers for Authentic Brand Partnerships",
    excerpt: "Learn our proven framework for identifying high-quality influencers who align with your brand values and deliver real results.",
    category: "Influencer Marketing",
    date: "2024-12-25",
    readTime: "6 min",
    color: "from-pink-500 to-purple-500"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black">
              Marketing Insights &
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Expert Tips
              </span>
            </h1>
            <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto">
              Stay updated with the latest strategies, trends, and best practices in social media and influencer marketing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 group cursor-pointer"
              >
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary/40">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">
              Never Miss an
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Insight
              </span>
            </h2>
            <p className="text-xl text-dark-foreground/80">
              Get our latest marketing tips, trends, and case studies delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-background/10 border border-border focus:border-primary focus:outline-none text-dark-foreground"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
