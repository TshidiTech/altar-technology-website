import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Headphones, Inbox, MessagesSquare, PhoneCall, Plug, Radio, ShieldCheck, Users } from "lucide-react";

const channels = [
  { icon: PhoneCall, title: "Voice", desc: "Carrier-grade telephony on in-country cloud infrastructure, browser-based WebRTC calling, SIP BYOC and direct connectivity options." },
  { icon: MessagesSquare, title: "WhatsApp & SMS", desc: "Native two-way WhatsApp and two-way SMS — conversations land in the same queue as voice, with full history per contact." },
  { icon: Inbox, title: "Email & Live Chat", desc: "Email with rich graphic templates, live web chat and web-form capture, routed to the right team every time." },
  { icon: Radio, title: "Social & Reputation", desc: "Inbound Facebook and Instagram direct messaging, post comment management, and automated alerts for HelloPeter reviews." },
];

const capabilities = [
  {
    icon: Users,
    title: "Supervisor Command Centre",
    items: ["Real-time wallboards and queue health monitors", "Live agent monitoring with Listen, Whisper and Barge-in", "Custom pause codes and queue SLA adherence", "Repeat-caller detection", "Dual-channel call recording with retention policies", "Secure automated archiving (SFTP, S3, Azure Blob)"],
  },
  {
    icon: Headphones,
    title: "Smart IVR, AI Bots & Flow Builder",
    items: ["Real-time CRM data-dips to greet and route by account tier", "Self-service conversational AI & NLP FAQ bots", "Visual drag-and-drop journey builder", "Write once — deploy across voice, chat and WhatsApp", "Overflow and off-site transfer rules by schedule or threshold"],
  },
  {
    icon: Radio,
    title: "Outbound & Contact Strategy",
    items: ["Automated and preview diallers to cut agent idle time", "Dynamic caller-ID rotation to lift connection rates", "On-screen agent scripting", "Do-Not-Call (DNC) list compliance", "Scheduled callback dispatch"],
  },
  {
    icon: Plug,
    title: "Enterprise Integrations",
    items: ["CRM & service desks: Salesforce, ServiceNow, Zendesk", "Microsoft 365 & Teams — presence sync, calendar, email routing", "E-commerce: Shopify, WooCommerce, Magento — order status, tracking, refund triggers", "Analytics export to Looker Studio, Excel and live Google Sheets"],
  },
];

export default function CCaaS() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 pb-14 bg-dark text-dark-foreground sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="inline-flex border-2 border-border bg-primary px-3 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-card">
            Flagship — Enterprise Cloud Contact Centre
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            One unified platform for voice, messaging and intelligent automation.
          </h1>
          <p className="mt-5 max-w-3xl text-base text-dark-foreground/80 sm:text-lg">
            Built on carrier-grade, in-country cloud infrastructure. Empower your teams with browser-based calling, native WhatsApp and social messaging, intelligent routing and real-time supervisor controls — replacing legacy PBX hardware entirely.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact-centre-readiness" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-primary text-primary-foreground shadow-card hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-glow transition-all rounded-sm uppercase tracking-widest gap-2">
                Request a Live Demo <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/qaaas" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-sm border-2 border-border bg-background uppercase tracking-widest shadow-card">
                Pair With QAaaS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">True omnichannel ingestion</p>
          <h2 className="mb-10 text-3xl font-black sm:text-4xl">Every channel, one queue</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} className="border-2 border-border p-6 shadow-card">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-border bg-primary shadow-card">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-base font-extrabold uppercase">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability clusters */}
      <section className="py-14 bg-muted/30 sm:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Platform capabilities</p>
          <h2 className="mb-10 text-3xl font-black sm:text-4xl">Built for high-volume operations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Card key={cap.title} className="border-2 border-border p-6 shadow-card sm:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border-2 border-border bg-primary">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-extrabold uppercase">{cap.title}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commercial model */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Commercial model</p>
          <h2 className="mb-6 text-3xl font-black sm:text-4xl">Clean, separated billing</h2>
          <Card className="border-2 border-border p-6 shadow-card sm:p-8">
            <div className="flex items-start gap-4">
              <Building2 className="mt-1 h-8 w-8 shrink-0 text-primary" />
              <div className="space-y-3 text-sm text-muted-foreground sm:text-base">
                <p>
                  Platform licensing is quoted per seat and per usage band, and is contracted separately from Altar&apos;s advisory and managed services — so each party&apos;s responsibilities stay clear.
                </p>
                <p>
                  Our managed services are invoiced monthly in advance. Platform usage is billed in advance too, with any extra metered usage reconciled on the next invoice.
                </p>
                <p>
                  Setup is scoped through the readiness assessment — from <strong className="text-foreground">R25,000</strong> plus per-seat managed licensing, confirmed after the findings presentation.
                </p>
              </div>
            </div>
          </Card>
          <p className="mt-6 text-xs text-muted-foreground sm:text-sm">
            Illustration only — final platform pricing depends on seats, channels, volume, integrations and SLAs, and is confirmed during the assessment. All prices in ZAR and exclude VAT.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-dark text-dark-foreground sm:py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">Ready to retire the <span className="bg-gradient-primary bg-clip-text text-transparent">legacy PBX?</span></h2>
          <p className="mb-8 text-base text-dark-foreground/80 sm:text-lg">Request a live demo — we&apos;ll walk your supervisors through the console against your own scenarios.</p>
          <Link to="/contact-centre-readiness" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="w-full bg-primary text-primary-foreground rounded-sm uppercase tracking-widest gap-2 sm:w-auto">
              Request a Live Demo <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
