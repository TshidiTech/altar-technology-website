import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";

const faqs: Record<string, { answer: string; relatedQuestions: string[] }> = {
  "What services do you offer?": {
    answer: "We offer web development, app & platform development, systems & automation, AI & automation solutions, and full-service digital marketing including social media, influencer marketing, and paid advertising.",
    relatedQuestions: ["How much does it cost?", "How does web development work?", "How does AI automation work?", "Start a project"]
  },
  "How does web development work?": {
    answer: "We start with discovery and planning, then design and develop your website with modern frameworks. We handle everything from responsive design and SEO to CMS integration and analytics setup. Pricing starts at R15,000 for a starter website.",
    relatedQuestions: ["How much does it cost?", "What's included in web development?", "How long does development take?", "Start a project"]
  },
  "How does app development work?": {
    answer: "We build native and cross-platform mobile apps, from MVP to full-scale platforms. This includes UI/UX design, admin dashboards, API integrations, and app store deployment. MVPs start at R40,000.",
    relatedQuestions: ["How much does it cost?", "How long does development take?", "What platforms do you build for?", "Start a project"]
  },
  "How does AI automation work?": {
    answer: "We build AI chatbots, smart automation flows, predictive systems, and full automation pipelines. Starting from R25,000 for basic chatbots up to R200,000+ for advanced AI systems.",
    relatedQuestions: ["How much does it cost?", "What AI tools do you offer?", "Start a project", "View case studies"]
  },
  "How much does it cost?": {
    answer: "Pricing depends on the service and complexity tier (Starter, Growth, Advanced). Web development starts at R15,000, app development at R40,000, systems at R160,000, AI solutions at R25,000, and marketing retainers at R16,000/month. Visit our Calculator page for detailed estimates.",
    relatedQuestions: ["Start a project", "What's the payment process?", "View pricing calculator", "What services do you offer?"]
  },
  "How can I start a project?": {
    answer: "Easy! Submit an enquiry on our Lead Capture page, email us at hello@altar.technology, WhatsApp us on 067 062 2953, or schedule a call via our booking link. We'll respond within 24 hours.",
    relatedQuestions: ["Start a project", "What services do you offer?", "How much does it cost?", "What's the payment process?"]
  },
  "What's the payment process?": {
    answer: "We require a 50% deposit upfront before work begins. The remaining 50% is due upon completion or as per the agreed payment schedule. All payments are non-refundable once work commences.",
    relatedQuestions: ["How much does it cost?", "Start a project", "View Terms & Conditions", "How long does development take?"]
  },
  "How long does development take?": {
    answer: "Timelines vary by project: Starter websites take 2-4 weeks, MVPs 4-8 weeks, full platforms 3-6 months, and AI solutions 2-8 weeks depending on complexity.",
    relatedQuestions: ["Start a project", "What services do you offer?", "How much does it cost?", "View case studies"]
  },
  "What industries do you serve?": {
    answer: "We work across BPO & customer experience, beauty & wellness, logistics & transport, education, e-commerce & retail, and finance & payments. Visit our Industries page for details.",
    relatedQuestions: ["What services do you offer?", "View case studies", "Start a project", "How much does it cost?"]
  },
  "View case studies": {
    answer: "Check out our Case Studies page for detailed examples of our work across systems, apps, websites, and AI tools. We've worked with brands like Jetour, IEMSA, Araya Beauty, EFF, and more.",
    relatedQuestions: ["What services do you offer?", "Start a project", "What industries do you serve?", "How much does it cost?"]
  },
  "View pricing calculator": {
    answer: "Visit our Calculator page to get an estimated breakdown of project costs based on your service type, complexity tier, and requirements.",
    relatedQuestions: ["How much does it cost?", "Start a project", "What services do you offer?", "What's the payment process?"]
  },
  "View Terms & Conditions": {
    answer: "You can view our full Terms & Conditions, Privacy Policy, and Cookie Policy from the footer of any page on our website.",
    relatedQuestions: ["What's the payment process?", "Start a project", "What services do you offer?"]
  },
  "Start a project": {
    answer: "Great! Tell us a bit about yourself and your project below, and we'll get back to you within 24 hours.",
    relatedQuestions: []
  },
};

const initialPrompts = [
  "What services do you offer?",
  "How much does it cost?",
  "How can I start a project?",
  "What industries do you serve?",
  "View pricing calculator"
];

interface Message {
  type: "bot" | "user";
  text: string;
  options?: string[];
}

export const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "👋 Hi! I'm the Altar Technology assistant. I can help you learn about our technology, training and staffing solutions for IT support and customer service. What would you like to know?",
      options: initialPrompts,
    },
  ]);
  const [input, setInput] = useState("");
  const [leadMode, setLeadMode] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", message: "" });
  const [leadSending, setLeadSending] = useState(false);
  const [leadError, setLeadError] = useState("");

  const handleQuestion = (question: string) => {
    const userMessage: Message = { type: "user", text: question };
    const faq = faqs[question];

    if (question === "Start a project") {
      setLeadMode(true);
      setMessages((prev) => [...prev, userMessage, { type: "bot", text: faq.answer }]);
      return;
    }

    if (faq) {
      const botMessage: Message = {
        type: "bot",
        text: faq.answer,
        options: faq.relatedQuestions,
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
    } else {
      const botMessage: Message = {
        type: "bot",
        text: "I don't have an answer for that specific question — but our team does! Leave your details below and we'll respond within 24 hours, or WhatsApp us on 067 062 2953.",
        options: ["Start a project", ...initialPrompts],
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
    }
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleQuestion(input.trim());
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSending(true);
    setLeadError("");
    try {
      await submitToFormspree({
        _subject: `Chatbot Enquiry from ${leadData.name}`,
        name: leadData.name,
        email: leadData.email,
        message: leadData.message,
        source: "FAQ chatbot",
      });
      setMessages((prev) => [
        ...prev,
        { type: "user", text: leadData.message },
        {
          type: "bot",
          text: `Thanks ${leadData.name}! ✅ We've received your enquiry and will respond within 24 hours. You can also WhatsApp us on 067 062 2953 anytime.`,
          options: initialPrompts,
        },
      ]);
      setLeadMode(false);
      setLeadData({ name: "", email: "", message: "" });
    } catch (err) {
      setLeadError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or WhatsApp 067 062 2953."
      );
    } finally {
      setLeadSending(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-gradient-primary hover:shadow-glow transition-all z-50 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed inset-x-3 bottom-3 z-50 flex h-[min(560px,calc(100svh-1.5rem))] flex-col overflow-hidden border-2 border-border shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[380px]">
          <div className="bg-gradient-primary p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-foreground">Altar Technology Assistant</h3>
              <p className="text-xs text-foreground/70">Digital Solutions Expert</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-foreground hover:bg-background/20">
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] ${msg.type === "user" ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-2" : "space-y-3"}`}>
                  {msg.type === "bot" ? (
                    <>
                      <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 text-sm">{msg.text}</div>
                      {msg.options && (
                        <div className="flex flex-wrap gap-2">
                          {msg.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleQuestion(opt)}
                              className="min-h-10 rounded-sm border border-border bg-primary/10 px-3 py-2 text-left text-xs text-primary transition-colors hover:bg-primary/20"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-sm">{msg.text}</span>
                  )}
                </div>
              </div>
            ))}

            {leadMode && (
              <form onSubmit={handleLeadSubmit} className="space-y-3 rounded-2xl rounded-bl-sm border border-border bg-muted p-4">
                <div className="space-y-1">
                  <Label htmlFor="chat-name" className="text-xs">Name *</Label>
                  <Input
                    id="chat-name"
                    required
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    className="bg-background text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="chat-email" className="text-xs">Email *</Label>
                  <Input
                    id="chat-email"
                    type="email"
                    required
                    value={leadData.email}
                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                    className="bg-background text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="chat-message" className="text-xs">How can we help? *</Label>
                  <Textarea
                    id="chat-message"
                    required
                    rows={3}
                    value={leadData.message}
                    onChange={(e) => setLeadData({ ...leadData, message: e.target.value })}
                    placeholder="Tell us about your project…"
                    className="bg-background text-sm"
                  />
                </div>
                {leadError && <p className="text-xs text-destructive">{leadError}</p>}
                <Button type="submit" size="sm" disabled={leadSending} className="w-full gap-2">
                  {leadSending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question..."
              className="flex-1 text-sm"
            />
            <Button type="submit" size="icon" className="bg-primary"><Send className="h-4 w-4" /></Button>
          </form>
        </Card>
      )}
    </>
  );
};
