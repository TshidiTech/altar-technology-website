import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
    title: "How Digital Solutions Are Transforming South African Businesses",
    excerpt: "From AI chatbots to custom platforms, discover how local businesses are leveraging technology to scale faster and serve better.",
    category: "Digital Solutions",
    date: "2025-02-10",
    readTime: "6 min",
    color: "from-blue-500 to-cyan-500",
    image: lifestyleInfluencer
  },
  {
    title: "10 Influencer Marketing Trends to Watch in 2025",
    excerpt: "Stay ahead of the curve with these emerging trends in influencer marketing, from AI-powered analytics to nano-influencer partnerships.",
    category: "Marketing",
    date: "2025-01-15",
    readTime: "5 min",
    color: "from-pink-500 to-purple-500",
    image: fashionInfluencer
  },
  {
    title: "MVP vs Full Product: When to Build What",
    excerpt: "Learn when a minimum viable product is the right move and when you should invest in a full-scale build from day one.",
    category: "Development",
    date: "2025-01-12",
    readTime: "8 min",
    color: "from-purple-500 to-blue-500",
    image: podcastInfluencer
  },
  {
    title: "AI Automation for Small Business: A Practical Guide",
    excerpt: "Discover how AI chatbots, automated workflows, and smart systems can save your small business time and money.",
    category: "AI & Automation",
    date: "2025-01-10",
    readTime: "7 min",
    color: "from-cyan-500 to-blue-500",
    image: petsContent
  },
  {
    title: "The Ultimate Guide to E-commerce in South Africa",
    excerpt: "Everything you need to know about launching and scaling an online store in the South African market.",
    category: "E-commerce",
    date: "2025-01-08",
    readTime: "10 min",
    color: "from-orange-500 to-pink-500",
    image: parentingContent
  },
  {
    title: "Building Scalable Platforms: Lessons from the Field",
    excerpt: "Real-world insights from building enterprise systems, multi-role platforms, and complex digital products.",
    category: "Development",
    date: "2025-01-05",
    readTime: "9 min",
    color: "from-purple-500 to-pink-500",
    image: familyContent
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-12 bg-dark text-dark-foreground sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">
            Insights &
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Tips</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-dark-foreground/80 sm:mt-6 sm:text-xl">
            Latest strategies, trends, and best practices in digital solutions and marketing
          </p>
        </div>
      </section>

      <section className="py-12 bg-background sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 group cursor-pointer">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="space-y-4 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground sm:gap-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">{post.category}</span>
                    <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</div>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-dark text-dark-foreground sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">Reading About It? Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Build It.</span></h2>
          <p className="mx-auto mb-6 max-w-xl text-base text-dark-foreground/80">
            Have a project in mind after one of these articles? Tell us about it — we respond within 24 hours.
          </p>
          <Link to="/lead-capture">
            <Button size="lg" className="w-full bg-gradient-primary hover:shadow-glow rounded-sm text-base gap-2 sm:w-auto sm:text-lg">
              Start Your Project <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
