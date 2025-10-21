import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const faqs: Record<string, { answer: string; relatedQuestions: string[] }> = {
  "What services do you offer?": {
    answer: "We offer social media strategy, influencer marketing, paid advertising (Meta, Google, TikTok), content creation (photos, videos, graphics), community management, brand design, marketing automation, and analytics & reporting.",
    relatedQuestions: ["How much does it cost?", "View Case Studies", "What platforms do you specialize in?", "Explore Our Tools"]
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
