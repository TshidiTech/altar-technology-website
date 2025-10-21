import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceDetail } from "@/components/ServiceDetail";
import { LeadForm } from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, Users, Target, BarChart, Video, Megaphone, Palette, Settings 
} from "lucide-react";

const services = [
  {
    id: "social-strategy",
    icon: TrendingUp,
    title: "Social Media Strategy",
    problem: "You don't have a clear plan for your social media presence. Posts are inconsistent, and you're not sure what content resonates with your audience or which platforms to prioritize.",
    solution: "We develop a comprehensive 1-3 month content calendar with platform-specific strategies, audience positioning, optimal posting schedules, and themed content pillars aligned with your brand goals.",
    results: "A clear roadmap with consistent posting, improved brand positioning, better audience targeting, and measurable KPIs to track growth and engagement over time.",
    howWeWork: [
      "Initial consultation to understand your business, goals, target audience, and current challenges",
      "Competitive analysis and audience research to identify opportunities and best practices",
      "Development of content themes, posting schedule, hashtag strategy, and platform recommendations",
      "Delivery of comprehensive strategy document with calendar, content ideas, and implementation guidelines",
      "Monthly check-ins to review performance and adjust strategy based on analytics"
    ]
  },
  {
    id: "influencer-marketing",
    icon: Users,
    title: "Influencer Marketing",
    problem: "You want to leverage influencer partnerships but don't know where to start, how to find the right creators, negotiate deals, or measure campaign success.",
    solution: "End-to-end influencer campaign management from discovery and vetting to content approvals, performance tracking, and comprehensive reporting with verified creators.",
    results: "Authentic brand awareness, increased reach to targeted audiences, quality user-generated content, and measurable ROI from influencer collaborations.",
    howWeWork: [
      "Define campaign objectives, target audience, budget, and success metrics",
      "Identify and vet relevant influencers based on engagement rates, audience demographics, and brand fit",
      "Manage outreach, negotiations, contracts, and brief creation",
      "Oversee content creation, approval process, and posting schedules",
      "Track performance metrics and deliver detailed campaign reports with insights and recommendations"
    ]
  },
  {
    id: "paid-advertising",
    icon: Target,
    title: "Paid Advertising",
    problem: "Your ad campaigns aren't delivering the ROI you expected, or you're unsure how to set up effective ads on Facebook, Instagram, TikTok, or YouTube.",
    solution: "ROI-focused ad campaign setup and optimization including pixel installation, audience targeting, creative testing, and ongoing budget management across all major platforms.",
    results: "Lower cost per acquisition, higher conversion rates, improved ROAS, and scalable ad campaigns that consistently deliver qualified leads and sales.",
    howWeWork: [
      "Audit existing ad accounts (if applicable) and set up tracking infrastructure",
      "Develop campaign strategy with audience segmentation and budget allocation",
      "Create ad copy and design multiple creative variations for A/B testing",
      "Launch campaigns with proper targeting, bidding strategies, and conversion tracking",
      "Weekly optimization based on performance data, with monthly reports showing key metrics and recommendations"
    ]
  },
  {
    id: "analytics-reporting",
    icon: BarChart,
    title: "Analytics & Reporting",
    problem: "You have social media presence but can't track what's working. You lack insights into engagement, reach, conversions, and don't know how to improve performance.",
    solution: "Comprehensive monthly performance reports with visual dashboards, actionable insights, growth metrics, and strategic recommendations tailored to your business goals.",
    results: "Clear understanding of what content drives results, informed decision-making based on data, and continuous improvement through performance tracking.",
    howWeWork: [
      "Set up tracking and analytics infrastructure across all platforms",
      "Define KPIs and success metrics aligned with business objectives",
      "Collect and analyze data from social platforms, website analytics, and ad accounts",
      "Create visual dashboard reports highlighting key trends, wins, and opportunities",
      "Present findings in monthly review meetings with actionable next steps"
    ]
  },
  {
    id: "content-creation",
    icon: Video,
    title: "Content Creation",
    problem: "You lack engaging, professional content that converts. Your posts look inconsistent or generic, and you don't have the resources to create high-quality visuals and videos.",
    solution: "Professional content creation including UGC-style videos, branded graphics, engaging social posts, and short-form video content optimized for each platform.",
    results: "Scroll-stopping content that increases engagement, builds brand personality, and drives conversions with consistent visual identity across all touchpoints.",
    howWeWork: [
      "Content discovery session to understand brand voice, visual preferences, and content goals",
      "Develop content concepts and get approval on creative direction",
      "Produce 5-15 pieces of content monthly (mix of graphics, videos, and captions)",
      "Deliver edited, branded content ready to post with platform-specific optimization",
      "Provide content library and templates for future use"
    ]
  },
  {
    id: "community-management",
    icon: Megaphone,
    title: "Community Management",
    problem: "Comments and DMs go unanswered, engagement is declining, and you're losing opportunities to connect with your audience and build brand loyalty.",
    solution: "Active daily community engagement including responding to comments and DMs, fostering discussions, managing brand reputation, and building authentic relationships.",
    results: "Higher engagement rates, improved customer satisfaction, stronger brand loyalty, and valuable customer insights gathered through direct interactions.",
    howWeWork: [
      "Establish brand voice guidelines and response templates for consistency",
      "Monitor all social channels daily for comments, mentions, and messages",
      "Respond to inquiries within 2-4 hours during business hours",
      "Flag urgent issues or opportunities for client review",
      "Provide weekly engagement reports with sentiment analysis and trending topics"
    ]
  },
  {
    id: "brand-design",
    icon: Palette,
    title: "Brand Design",
    problem: "Your visual identity is outdated, inconsistent, or doesn't stand out. You lack professional brand guidelines, and your marketing materials look disconnected.",
    solution: "Complete visual rebrand including logo design, color palette, typography, brand guidelines, and social media templates that reflect your brand personality.",
    results: "Professional, memorable brand identity that differentiates you from competitors, builds trust, and creates visual consistency across all marketing channels.",
    howWeWork: [
      "Brand discovery workshop to understand vision, values, and target audience",
      "Research competitors and industry trends to inform design direction",
      "Present 2-3 logo concepts with mood boards and brand applications",
      "Refine chosen direction and develop complete brand guidelines",
      "Deliver final logo files, brand book, and customizable social media templates"
    ]
  },
  {
    id: "marketing-automation",
    icon: Settings,
    title: "Marketing Automation",
    problem: "Manual posting is time-consuming, you're missing optimal posting times, and you lack integrated systems for managing campaigns, leads, and customer relationships.",
    solution: "Streamlined workflow automation including CRM integration, automated scheduling, email sequences, and centralized campaign management systems.",
    results: "Time savings, consistent posting even during off-hours, better lead nurturing, and seamless integration between marketing tools and business operations.",
    howWeWork: [
      "Audit current tools and processes to identify automation opportunities",
      "Recommend and set up appropriate tools (scheduling, CRM, email marketing)",
      "Configure automated workflows for posting, lead capture, and follow-up",
      "Integrate systems to centralize data and reporting",
      "Provide training and ongoing support for team members"
    ]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black text-foreground">
              Complete Marketing
              <br />
              Solutions
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              From strategy to execution, we handle every aspect of your digital marketing presence
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 border-b sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Button
                  key={service.id}
                  variant={selectedService.id === service.id ? "default" : "outline"}
                  onClick={() => setSelectedService(service)}
                  className="flex-shrink-0 gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {service.title}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">{selectedService.title}</h2>
          </div>
          
          <ServiceDetail
            problem={selectedService.problem}
            solution={selectedService.solution}
            results={selectedService.results}
            howWeWork={selectedService.howWeWork}
          />
        </div>
      </section>

      <LeadForm />
      <Footer />
    </div>
  );
}
