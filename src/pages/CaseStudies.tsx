import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Eye } from "lucide-react";
import jetourCar from "@/assets/jetour-car.avif";
import podcastInfluencer from "@/assets/portrait-plus-size-man-influencer.jpg";
import fashionInfluencer from "@/assets/portrait-plus-size-male-influencer-2.jpg";
import parentingContent from "@/assets/parenting-content-creator-1.jpg";
import petsContent from "@/assets/person-creating-content-with-pets-1.jpg";

const caseStudies = [
  {
    brand: "Jetour",
    campaign: "Valentine's Day Campaign",
    description: "Partnered with top influencer Quanzah to create authentic Valentine's Day content that resonated with his 2M+ following, driving unprecedented engagement for the Jetour brand.",
    results: {
      reach: "2.4M",
      engagement: "350K",
      conversions: "12.5%"
    },
    metrics: [
      { label: "Total Reach", value: "2.4M", icon: Eye },
      { label: "Engagement", value: "350K", icon: Users },
      { label: "Conversion Rate", value: "12.5%", icon: TrendingUp }
    ],
    color: "from-pink-500 to-purple-500",
    image: jetourCar,
    available: true
  },
  {
    brand: "Fashion Brand",
    campaign: "Style Influence Campaign",
    description: "Collaborated with fashion-forward influencers to showcase seasonal collections, driving massive engagement and brand awareness through authentic storytelling.",
    results: {
      reach: "1.8M",
      engagement: "280K",
      conversions: "8.9%"
    },
    metrics: [
      { label: "Total Reach", value: "1.8M", icon: Eye },
      { label: "Engagement", value: "280K", icon: Users },
      { label: "Conversion Rate", value: "8.9%", icon: TrendingUp }
    ],
    color: "from-blue-500 to-cyan-500",
    image: fashionInfluencer,
    available: false
  },
  {
    brand: "Pet Care Brand",
    campaign: "Pet Lovers Campaign",
    description: "Created heartwarming pet content with influencer families, generating authentic connections and strong brand affinity among pet owners.",
    results: {
      reach: "3.1M",
      engagement: "420K",
      conversions: "15.2%"
    },
    metrics: [
      { label: "Total Reach", value: "3.1M", icon: Eye },
      { label: "Engagement", value: "420K", icon: Users },
      { label: "Conversion Rate", value: "15.2%", icon: TrendingUp }
    ],
    color: "from-orange-500 to-pink-500",
    image: petsContent,
    available: false
  },
  {
    brand: "Parenting & Lifestyle Brand",
    campaign: "Family Connect Campaign",
    description: "Partnered with parenting influencers to create relatable content that resonated with modern families, building trust and community engagement.",
    results: {
      reach: "2.8M",
      engagement: "380K",
      conversions: "11.7%"
    },
    metrics: [
      { label: "Total Reach", value: "2.8M", icon: Eye },
      { label: "Engagement", value: "380K", icon: Users },
      { label: "Conversion Rate", value: "11.7%", icon: TrendingUp }
    ],
    color: "from-purple-500 to-pink-500",
    image: parentingContent,
    available: false
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Success Stories
              </span>
              <br />
              That Speak Volumes
            </h1>
            <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto">
              Real results from real campaigns. See how we've helped brands achieve exceptional growth through strategic marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20"
              >
                {study.image && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.brand}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-8">
                  <div className={`h-2 w-24 bg-gradient-to-r ${study.color} rounded-full mb-6`} />
                
                <h3 className="text-3xl font-bold mb-2">{study.brand}</h3>
                <h4 className="text-lg text-primary font-semibold mb-4">{study.campaign}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div key={idx} className="text-center p-4 bg-muted/50 rounded-xl">
                        <Icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all group"
                    disabled={!study.available}
                  >
                    {study.available ? (
                      <>
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-black">
              Ready to Be Our Next
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Success Story?
              </span>
            </h2>
            <p className="text-xl text-dark-foreground/80">
              Let's create a custom strategy that delivers real results for your brand
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-6 rounded-full"
              onClick={() => window.location.href = '/#contact'}
            >
              Start Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
