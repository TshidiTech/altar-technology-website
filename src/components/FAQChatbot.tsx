import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const faqs: Record<string, { answer: string; relatedQuestions: string[] }> = {
  "What services do you offer?": {
    answer: "We offer social media strategy, influencer marketing, paid advertising (Meta, Google, TikTok), content creation (photos, videos, graphics), community management, brand design, marketing automation, and analytics & reporting.",
    relatedQuestions: ["How much does it cost?", "View Case Studies", "What platforms do you specialize in?", "How does Social Media Strategy work?"]
  },
  "How does Social Media Strategy work?": {
    answer: "We start with a consultation to understand your goals and audience, then conduct competitive analysis and research. We develop a comprehensive 1-3 month content calendar with platform-specific strategies, themed content pillars, hashtag strategy, and optimal posting schedules. Includes monthly check-ins to review performance and adjust based on analytics.",
    relatedQuestions: ["What's included in the strategy?", "How long does strategy development take?", "How much does it cost?", "What services do you offer?"]
  },
  "What's included in the strategy?": {
    answer: "Our strategy includes: comprehensive content calendar, platform-specific posting schedules, audience positioning and targeting, themed content pillars, hashtag strategy, competitor insights, KPI tracking, and monthly performance reviews with adjustments.",
    relatedQuestions: ["How does Social Media Strategy work?", "How long does strategy development take?", "How can I start a campaign?", "Do you offer paid advertising management?"]
  },
  "How long does strategy development take?": {
    answer: "Initial strategy development takes 1-2 weeks after consultation. You'll receive a comprehensive strategy document with calendar and implementation guidelines. Monthly check-ins ensure continuous optimization based on performance data.",
    relatedQuestions: ["How does Social Media Strategy work?", "How long does it take to see results?", "What services do you offer?", "How much does it cost?"]
  },
  "How does Influencer Marketing work?": {
    answer: "We define campaign objectives and budget, identify and vet relevant influencers based on engagement and audience fit, manage outreach and contracts, oversee content creation and approvals, track performance metrics, and deliver detailed campaign reports with insights and recommendations.",
    relatedQuestions: ["What does influencer marketing include?", "How do you select influencers?", "How much does influencer marketing cost?", "Can you help with influencer partnerships?"]
  },
  "How do you select influencers?": {
    answer: "We vet influencers based on engagement rates, audience demographics, brand alignment, content quality, authenticity, and past campaign performance. We only work with verified creators who match your target audience and brand values.",
    relatedQuestions: ["How does Influencer Marketing work?", "What does influencer marketing include?", "How much does it cost?", "View Case Studies"]
  },
  "How does Paid Advertising work?": {
    answer: "We audit existing accounts, set up tracking infrastructure, develop campaign strategy with audience segmentation, create ad copy and multiple creative variations for A/B testing, launch campaigns with proper targeting and bidding, and perform weekly optimization with monthly reporting.",
    relatedQuestions: ["What platforms do you advertise on?", "Do you offer paid advertising management?", "How much does advertising cost?", "How do you measure success?"]
  },
  "What platforms do you advertise on?": {
    answer: "We manage paid campaigns on Meta (Facebook/Instagram), Google Ads, TikTok Ads, LinkedIn, and YouTube. Each platform strategy is customized based on your target audience and campaign objectives.",
    relatedQuestions: ["How does Paid Advertising work?", "Do you offer paid advertising management?", "What platforms do you specialize in?", "How much does it cost?"]
  },
  "How much does influencer marketing cost?": {
    answer: "Influencer marketing costs vary based on influencer tier, number of creators, content requirements, and campaign duration. Pricing is customized per project. Contact us at hello@brandhype.co.za or 081 661 7013 for a detailed quote.",
    relatedQuestions: ["How much does it cost?", "How does Influencer Marketing work?", "What are your payment terms?", "How can I start a campaign?"]
  },
  "How much does advertising cost?": {
    answer: "Advertising costs include our management fee plus your ad spend budget. Minimum recommended monthly ad spend is R5,000-R10,000 for meaningful results. Our management fee is customized based on campaign complexity. Contact us for a personalized quote.",
    relatedQuestions: ["How much does it cost?", "How does Paid Advertising work?", "What are your payment terms?", "Do you offer paid advertising management?"]
  },
  "How does Content Creation work?": {
    answer: "We start with a content discovery session to understand your brand voice and visual preferences, develop and approve content concepts, produce 5-15 pieces monthly (graphics, videos, captions), deliver edited branded content optimized for each platform, and provide a content library and templates for future use.",
    relatedQuestions: ["What type of content do you create?", "Do you create content in-house?", "How much does content creation cost?", "What services do you offer?"]
  },
  "What type of content do you create?": {
    answer: "We create UGC-style videos, branded graphics, social media posts, short-form video content (Reels, TikToks, Shorts), product photography, infographics, carousel posts, stories, and platform-optimized content for Instagram, TikTok, Facebook, LinkedIn, and YouTube.",
    relatedQuestions: ["How does Content Creation work?", "Do you create content in-house?", "What platforms do you specialize in?", "How can I start a campaign?"]
  },
  "How much does content creation cost?": {
    answer: "Content creation pricing depends on volume, complexity, and production requirements. Packages typically include 5-15 pieces monthly. Contact us at hello@brandhype.co.za or 081 661 7013 for custom pricing based on your needs.",
    relatedQuestions: ["How much does it cost?", "What type of content do you create?", "How does Content Creation work?", "What are your payment terms?"]
  },
  "How does Community Management work?": {
    answer: "We establish brand voice guidelines and response templates, monitor all social channels daily for comments and messages, respond to inquiries within 2-4 hours during business hours, flag urgent issues, and provide weekly engagement reports with sentiment analysis and trending topics.",
    relatedQuestions: ["What's included in community management?", "How quickly do you respond?", "How much does community management cost?", "What services do you offer?"]
  },
  "What's included in community management?": {
    answer: "Daily monitoring of all social channels, responding to comments and DMs, managing brand reputation, fostering discussions, handling customer inquiries, flagging urgent issues, sentiment analysis, and weekly engagement reports.",
    relatedQuestions: ["How does Community Management work?", "How quickly do you respond?", "How is communication handled?", "How can I start a campaign?"]
  },
  "How quickly do you respond?": {
    answer: "We respond to comments and messages within 2-4 hours during business hours (Monday-Friday, 9am-5pm SAST). Urgent issues are flagged immediately for client review. Weekend monitoring available for premium packages.",
    relatedQuestions: ["What's included in community management?", "How does Community Management work?", "How is communication handled?", "What are your payment terms?"]
  },
  "How much does community management cost?": {
    answer: "Community management pricing depends on platform volume and response requirements. Pricing is customized per project. Contact us at hello@brandhype.co.za or 081 661 7013 for a detailed quote.",
    relatedQuestions: ["How much does it cost?", "What's included in community management?", "How does Community Management work?", "What are your payment terms?"]
  },
  "How does Brand Design work?": {
    answer: "We conduct a brand discovery workshop, research competitors and trends, present 2-3 logo concepts with mood boards, refine the chosen direction, develop complete brand guidelines, and deliver final logo files, brand book, and customizable social media templates.",
    relatedQuestions: ["What's included in brand design?", "How long does branding take?", "How much does brand design cost?", "What services do you offer?"]
  },
  "What's included in brand design?": {
    answer: "Logo design, color palette, typography guidelines, brand book, social media templates, business card designs, email signature, brand photography direction, and usage guidelines for consistent brand application.",
    relatedQuestions: ["How does Brand Design work?", "How long does branding take?", "Do you create content in-house?", "How can I start a campaign?"]
  },
  "How long does branding take?": {
    answer: "Complete brand design typically takes 3-4 weeks from discovery to final delivery. Timeline includes: discovery workshop (1 week), concept development (1 week), revisions (1 week), final deliverables (1 week).",
    relatedQuestions: ["How does Brand Design work?", "What's included in brand design?", "How much does it cost?", "How can I start a campaign?"]
  },
  "How much does brand design cost?": {
    answer: "Brand design packages start from R15,000 for basic identity to R50,000+ for comprehensive brand systems. Pricing depends on deliverables and complexity. Contact us for a custom quote.",
    relatedQuestions: ["How much does it cost?", "What's included in brand design?", "How does Brand Design work?", "What are your payment terms?"]
  },
  "How does Analytics & Reporting work?": {
    answer: "We set up tracking infrastructure, define KPIs aligned with business objectives, collect and analyze data from all platforms and ad accounts, create visual dashboard reports, and present findings in monthly review meetings with actionable recommendations.",
    relatedQuestions: ["What metrics do you track?", "How do you measure success?", "How often do you report?", "What services do you offer?"]
  },
  "What metrics do you track?": {
    answer: "We track engagement rates, follower growth, reach, impressions, click-through rates, conversion rates, ROI, cost per acquisition, website traffic, video views, story completion rates, and platform-specific metrics tailored to your goals.",
    relatedQuestions: ["How does Analytics & Reporting work?", "How do you measure success?", "How often do you report?", "Do you offer paid advertising management?"]
  },
  "How often do you report?": {
    answer: "Comprehensive monthly reports with visual dashboards and insights. Weekly performance summaries available for active campaigns. Quarterly business reviews for strategic planning and long-term optimization.",
    relatedQuestions: ["What metrics do you track?", "How does Analytics & Reporting work?", "How is communication handled?", "How much does it cost?"]
  },
  "How does Marketing Automation work?": {
    answer: "We audit current tools and processes, recommend and set up appropriate automation tools (scheduling, CRM, email marketing), configure automated workflows for posting and lead capture, integrate systems to centralize data, and provide training and ongoing support.",
    relatedQuestions: ["What tools do you use?", "What's included in automation?", "How much does automation cost?", "What services do you offer?"]
  },
  "What tools do you use?": {
    answer: "We work with industry-leading tools including Meta Business Suite, Later, Hootsuite, HubSpot, Mailchimp, Zapier, Google Analytics, and platform-native analytics. Tool selection is customized based on your needs and budget.",
    relatedQuestions: ["How does Marketing Automation work?", "What's included in automation?", "Do you offer paid advertising management?", "How can I start a campaign?"]
  },
  "What's included in automation?": {
    answer: "Automated social media scheduling, CRM integration, email marketing sequences, lead capture workflows, cross-platform posting, automated reporting, centralized campaign management, and team training on all systems.",
    relatedQuestions: ["How does Marketing Automation work?", "What tools do you use?", "How much does it cost?", "What services do you offer?"]
  },
  "How much does automation cost?": {
    answer: "Marketing automation setup fees range from R5,000-R20,000 depending on complexity. Monthly tool costs vary by platform. We'll recommend cost-effective solutions that fit your budget during consultation.",
    relatedQuestions: ["How much does it cost?", "What's included in automation?", "How does Marketing Automation work?", "What are your payment terms?"]
  },
  "What does influencer marketing include?": {
    answer: "Our influencer marketing service includes influencer discovery and vetting, campaign strategy, content approval, performance tracking, contract negotiation, and comprehensive reporting on engagement and ROI.",
    relatedQuestions: ["Who have you worked with?", "How can I start a campaign?", "Do you offer paid advertising management?", "What's your refund policy?"]
  },
  "How much does it cost?": {
    answer: "Pricing is customized based on your needs. We require a 50% non-refundable deposit upfront. Contact us at hello@brandhype.co.za or 081 661 7013 for a personalized quote.",
    relatedQuestions: ["What are your payment terms?", "Do you work with small businesses?", "How can I start a campaign?", "What industries do you work with?"]
  },
  "How can I start a campaign?": {
    answer: "Starting is easy! Contact us via email (hello@brandhype.co.za), phone (081 661 7013), or WhatsApp. We'll schedule a free consultation to understand your goals and create a custom campaign strategy.",
    relatedQuestions: ["What services do you offer?", "How much does it cost?", "View Case Studies", "How long does it take to see results?"]
  },
  "What are your payment terms?": {
    answer: "We require 50% deposit upfront (non-refundable), with the remaining 50% due upon completion or as outlined in your payment schedule. All payments are non-refundable once work commences. View our Terms & Conditions for details.",
    relatedQuestions: ["What's your refund policy?", "View Terms & Conditions", "How can I start a campaign?", "Do you work with small businesses?"]
  },
  "How long does it take to see results?": {
    answer: "Most clients see initial results within 4-6 weeks, with significant growth typically within 3-6 months of consistent execution.",
    relatedQuestions: ["How do you measure success?", "What services do you offer?", "Who have you worked with?", "Explore Our Tools"]
  },
  "Do you work with small businesses?": {
    answer: "Yes! We work with businesses of all sizes, from startups to established brands. Our solutions are scalable to match your budget and goals.",
    relatedQuestions: ["How much does it cost?", "What industries do you work with?", "View Case Studies", "How can I start a campaign?"]
  },
  "What platforms do you specialize in?": {
    answer: "We specialize in Instagram, TikTok, Facebook, YouTube, and LinkedIn, with expertise across all major social platforms.",
    relatedQuestions: ["Do you offer paid advertising management?", "What does influencer marketing include?", "Explore Our Tools", "How do you measure success?"]
  },
  "How do you measure success?": {
    answer: "We track KPIs including engagement rates, follower growth, reach, conversions, ROI, and brand awareness through comprehensive monthly reports.",
    relatedQuestions: ["How long does it take to see results?", "Do you offer paid advertising management?", "What services do you offer?", "How is communication handled?"]
  },
  "Who have you worked with?": {
    answer: "We've worked with brands like Jetour, Vodacom, DermaPlex, CliniMed, Nando's, Sunlight, Checkers Sixty60, Monosi, and more. Check our case studies page for detailed campaign examples.",
    relatedQuestions: ["View Case Studies", "How can I start a campaign?", "What industries do you work with?", "Tell me about Brand Hype"]
  },
  "Can you help with influencer partnerships?": {
    answer: "Yes! We handle everything from influencer discovery and vetting to campaign management, content approval, and performance reporting.",
    relatedQuestions: ["What does influencer marketing include?", "How much does it cost?", "View Case Studies", "How can I start a campaign?"]
  },
  "Do you create content in-house?": {
    answer: "Yes, we have content creators, designers, and videographers producing high-quality branded content, UGC (user-generated content), and creative assets.",
    relatedQuestions: ["What services do you offer?", "How much does it cost?", "Explore Our Tools", "What platforms do you specialize in?"]
  },
  "What's your refund policy?": {
    answer: "All payments are non-refundable once work has commenced. The 50% deposit is non-refundable under all circumstances. View our Terms & Conditions for full details.",
    relatedQuestions: ["What are your payment terms?", "View Terms & Conditions", "How can I start a campaign?", "How much does it cost?"]
  },
  "What industries do you work with?": {
    answer: "We work across all industries including e-commerce, fashion, beauty, food & beverage, health & fitness, technology, real estate, finance, hospitality, automotive, and more.",
    relatedQuestions: ["Do you work with small businesses?", "Who have you worked with?", "View Case Studies", "How can I start a campaign?"]
  },
  "Do you offer paid advertising management?": {
    answer: "Yes! We manage paid campaigns on Meta (Facebook/Instagram), Google Ads, TikTok Ads, LinkedIn, and YouTube. Services include strategy, creative development, targeting, optimization, and reporting.",
    relatedQuestions: ["What platforms do you specialize in?", "How do you measure success?", "How much does it cost?", "Explore Our Tools"]
  },
  "How is communication handled?": {
    answer: "We maintain regular communication via email, WhatsApp, and scheduled calls. You'll have a dedicated account manager and receive monthly performance reports with insights and recommendations.",
    relatedQuestions: ["How can I start a campaign?", "How long does it take to see results?", "What are your payment terms?", "Do you work with small businesses?"]
  },
  "View Case Studies": {
    answer: "View our success stories and campaign results on the Case Studies page.",
    relatedQuestions: ["Who have you worked with?", "How can I start a campaign?", "What services do you offer?", "Tell me about Brand Hype"]
  },
  "View Terms & Conditions": {
    answer: "Please read our complete Terms & Conditions, Privacy Policy, and Cookie Policy for full details on policies, refunds, and data protection.",
    relatedQuestions: ["What are your payment terms?", "What's your refund policy?", "How can I start a campaign?", "How is communication handled?"]
  },
  "Tell me about Brand Hype": {
    answer: "Brand Hype Marketing is a full-service social media marketing agency specializing in influencer marketing, content creation, paid advertising, and brand strategy. We help brands grow their digital presence through strategic campaigns.",
    relatedQuestions: ["What services do you offer?", "Who have you worked with?", "View Case Studies", "How can I start a campaign?"]
  },
  "Explore Our Tools": {
    answer: "We're launching powerful AI tools including a Content Calendar Generator, Smart Caption Writer, Website Builder, and more. Check our Tools page to learn more!",
    relatedQuestions: ["What services do you offer?", "How can I start a campaign?", "Do you create content in-house?", "What platforms do you specialize in?"]
  }
};

export const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; prompts?: string[] }>>([
    { text: "Hi! I'm Tshidi, your Brand Hype assistant. I can answer questions about our services, pricing, case studies, and more. How can I help you today?", isBot: true, prompts: ["What services do you offer?", "How can I start a campaign?", "Explore Our Tools", "View Case Studies"] }
  ]);
  const [input, setInput] = useState("");
  const [currentPrompts, setCurrentPrompts] = useState<string[]>(["What services do you offer?", "How can I start a campaign?", "Explore Our Tools", "View Case Studies"]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    
    // Find matching FAQ by keyword search
    let matchingFaq: [string, { answer: string; relatedQuestions: string[] }] | undefined;
    const lowerInput = input.toLowerCase();
    
    // Try exact match first
    matchingFaq = Object.entries(faqs).find(([question]) =>
      question.toLowerCase() === lowerInput
    );
    
    // Then try keyword matching
    if (!matchingFaq) {
      matchingFaq = Object.entries(faqs).find(([question, data]) => {
        const questionWords = question.toLowerCase().split(' ');
        const inputWords = lowerInput.split(' ');
        return questionWords.some(word => inputWords.includes(word) && word.length > 3) ||
               inputWords.some(word => questionWords.includes(word) && word.length > 3);
      });
    }

    setTimeout(() => {
      if (matchingFaq) {
        const [question, data] = matchingFaq;
        
        // Handle special navigation prompts
        if (question === "View Case Studies") {
          window.location.href = "/case-studies";
        } else if (question === "View Terms & Conditions") {
          window.location.href = "/terms";
        } else if (question === "Explore Our Tools") {
          window.location.href = "/tools";
        }
        
        setMessages(prev => [...prev, { text: data.answer, isBot: true, prompts: data.relatedQuestions }]);
        setCurrentPrompts(data.relatedQuestions);
      } else {
        setMessages(prev => [...prev, { 
          text: "I can help you with questions about our services, pricing, case studies, tools, and policies. Here are some topics I can assist with:",
          isBot: true,
          prompts: ["What services do you offer?", "How can I start a campaign?", "Explore Our Tools", "View Case Studies"]
        }]);
        setCurrentPrompts(["What services do you offer?", "How can I start a campaign?", "Explore Our Tools", "View Case Studies"]);
      }
    }, 500);

    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    const faqData = faqs[question as keyof typeof faqs];
    
    // Handle special navigation prompts
    if (question === "View Case Studies") {
      window.location.href = "/case-studies";
      return;
    } else if (question === "View Terms & Conditions") {
      window.location.href = "/terms";
      return;
    } else if (question === "Explore Our Tools") {
      window.location.href = "/tools";
      return;
    }
    
    if (faqData) {
      setMessages(prev => [
        ...prev,
        { text: question, isBot: false },
        { text: faqData.answer, isBot: true, prompts: faqData.relatedQuestions }
      ]);
      setCurrentPrompts(faqData.relatedQuestions);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-secondary hover:shadow-glow transition-all z-50 shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] z-50 flex flex-col shadow-2xl border-2">
          <div className="bg-gradient-secondary text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Tshidi - Brand Hype Assistant</h3>
            <p className="text-sm opacity-90">Ask me anything about our services</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, idx) => (
              <div key={idx} className="space-y-3">
                <div className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                      msg.isBot
                        ? 'bg-muted text-foreground'
                        : 'bg-gradient-secondary text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
                
                {msg.isBot && msg.prompts && (
                  <div className="space-y-2 ml-2">
                    {msg.prompts.map((prompt, promptIdx) => (
                      <Button
                        key={promptIdx}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start text-xs h-auto py-2 hover:bg-primary/10"
                        onClick={() => handleQuickQuestion(prompt)}
                      >
                        {prompt}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-gradient-secondary">
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
