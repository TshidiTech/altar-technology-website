import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { AlertCircle, Calculator as CalcIcon, Calendar, ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { submitToFormspree } from "@/lib/formspree";

type Complexity = "Starter" | "Growth" | "Advanced";

const services = [
  { id: "website", label: "Website" },
  { id: "app", label: "App" },
  { id: "system", label: "System & Platform" },
  { id: "ai", label: "AI Solution" },
  { id: "qaaas", label: "QAaaS — Quality Assurance as a Service" },
  { id: "ccaas", label: "CCaaS — Cloud Contact Centre Platform" },
  { id: "marketing", label: "Digital Marketing" },
];

const goalSets: Record<string, string[]> = {
  website: ["Generate leads", "Boost sales & conversions", "Launch a new brand or product", "Improve credibility & trust", "Enable online bookings or payments", "Improve Google visibility (SEO)"],
  app: ["Launch an MVP quickly", "Digitise a manual process", "Reach customers on mobile", "Enable payments in-app", "Improve customer engagement", "Scale to many users"],
  system: ["Streamline operations", "Automate manual workflows", "Centralise business data", "Get real-time reporting & dashboards", "Integrate existing tools (CRM, API)", "Improve team productivity"],
  ai: ["Automate customer conversations", "Qualify & route leads automatically", "Analyse customer data with AI", "Reduce support workload", "Add smart automation to existing tools", "Predict trends & behaviour"],
  qaaas: ["Audit 100% of customer interactions", "Ensure compliance & reduce risk", "Improve agent performance & coaching", "Get executive CX insights", "Reduce customer complaints & churn", "Standardise QA scorecards across teams"],
  ccaas: ["Unify voice, WhatsApp, chat & social in one platform", "Reduce missed calls & abandoned contacts", "Add IVR & AI self-service", "Empower supervisors with live monitoring", "Integrate the platform with our CRM", "Run outbound campaigns efficiently"],
  marketing: ["Increase brand awareness", "Generate leads", "Boost sales & conversions", "Grow social media following", "Run effective paid ads", "Work with influencers"],
};

const challengeSets: Record<string, string[]> = {
  website: ["Our current site looks outdated", "We get little traffic or enquiries", "The site isn't mobile friendly", "We can't update content ourselves", "No online bookings or payments", "We don't rank on Google"],
  app: ["Our processes are manual and slow", "We lose track of customer data", "No way to reach users on their phones", "Spreadsheets can't scale with us", "We have an idea but no tech team", "Our current app is unreliable"],
  system: ["Our systems are manual and slow", "Teams work in silos with no shared data", "Reporting takes days to compile", "Too many disconnected tools", "Errors from manual data capture", "No visibility of day-to-day operations"],
  ai: ["Support team is overwhelmed", "We reply to customers too slowly", "Leads go cold before we follow up", "We don't know how to start with AI", "Repetitive tasks drain the team", "Customer data is untapped"],
  qaaas: ["We only audit about 1% of interactions", "QA is done manually on spreadsheets", "Compliance risk keeps leadership up at night", "Agents get little actionable coaching", "Customer complaints are rising", "We can't see CX performance across channels"],
  ccaas: ["Our channels are disconnected (calls, WhatsApp, chat)", "We miss calls and abandon rates are high", "Supervisors can't listen in or coach live", "Legacy PBX / on-premise phone system", "No CRM integration for agents", "Reporting gives no real operational insight"],
  marketing: ["We don't have a social media plan", "Our engagement is low", "We can't track performance", "We want better results from ads", "We need fresh content every month", "Our brand looks inconsistent online"],
};

const tierCopy: Record<string, { label: string; sub: string }[]> = {
  website: [
    { label: "Starter", sub: "5–7 page professional website" },
    { label: "Growth", sub: "Custom design, CMS & lead funnels" },
    { label: "Advanced", sub: "Full custom build & conversion systems" },
  ],
  app: [
    { label: "Starter", sub: "MVP — core features only" },
    { label: "Growth", sub: "Full product with admin dashboard" },
    { label: "Advanced", sub: "Scalable platform, multi-role systems" },
  ],
  system: [
    { label: "Starter", sub: "Basic system & workflow automation" },
    { label: "Growth", sub: "Custom workflows, integrations & dashboards" },
    { label: "Advanced", sub: "Full operational system, multi-department" },
  ],
  ai: [
    { label: "Starter", sub: "Basic chatbot & FAQ automation" },
    { label: "Growth", sub: "Smart automation flows & integrations" },
    { label: "Advanced", sub: "AI systems & predictive pipelines" },
  ],
  qaaas: [
    { label: "Starter", sub: "Readiness assessment & QA baseline" },
    { label: "Growth", sub: "CX framework, scorecards & reporting" },
    { label: "Advanced", sub: "Managed QA retainer — ongoing auditing & coaching" },
  ],
  ccaas: [
    { label: "Starter", sub: "Core platform — voice & key channels" },
    { label: "Growth", sub: "Omnichannel + IVR, AI self-service & CRM" },
    { label: "Advanced", sub: "Enterprise — outbound diallers, AI & analytics" },
  ],
  marketing: [
    { label: "Starter", sub: "Social media management — 2 platforms" },
    { label: "Growth", sub: "Multi-platform, content & paid ads" },
    { label: "Advanced", sub: "Full strategy, influencer campaigns & account manager" },
  ],
};

const techAddons = [
  { id: "ai-integration", label: "AI Integration", price: 15000 },
  { id: "payments", label: "Payment Gateway", price: 12000 },
  { id: "dashboards", label: "Analytics Dashboards", price: 18000 },
  { id: "api-integrations", label: "API Integrations", price: 10000 },
  { id: "user-auth", label: "User Authentication", price: 8000 },
  { id: "notifications", label: "Push Notifications", price: 6000 },
  { id: "cms", label: "CMS / Content Management", price: 12000 },
  { id: "multi-language", label: "Multi-language Support", price: 10000 },
];

const ccAddons = [
  { id: "scorecards", label: "Custom QA Scorecard Design", price: 8000 },
  { id: "crm-integration", label: "CRM Integration Setup", price: 12000 },
  { id: "wallboards", label: "Supervisor Wallboards & Live Dashboards", price: 9000 },
  { id: "ivr-flows", label: "IVR & Call-Flow Configuration", price: 10000 },
  { id: "ai-bot", label: "AI Self-Service Bot Build", price: 20000 },
  { id: "outbound", label: "Outbound Campaign Setup", price: 12000 },
  { id: "whatsapp", label: "2-Way WhatsApp Channel Setup", price: 7000 },
  { id: "training", label: "Agent & Supervisor Training", price: 6000 },
];

const mktAddons = [
  { id: "video", label: "Video Content Production", price: 12000 },
  { id: "influencer", label: "Influencer Campaign Management", price: 15000 },
  { id: "ads-mgmt", label: "Paid Ads Management (per month)", price: 8000 },
  { id: "branding", label: "Brand Design & Guidelines", price: 14000 },
];

const addonsByService: Record<string, typeof techAddons> = {
  website: techAddons, app: techAddons, system: techAddons, ai: techAddons,
  qaaas: ccAddons, ccaas: ccAddons, marketing: mktAddons,
};

const pricing: Record<string, Record<Complexity, { price: string; includes: string[] }>> = {
  website: {
    Starter: { price: "R15,000", includes: ["5–7 page website", "Mobile responsive", "Basic SEO setup", "Contact forms"] },
    Growth: { price: "R80,000", includes: ["Custom design UI/UX", "CMS integration", "Advanced SEO", "Lead funnels", "Analytics setup"] },
    Advanced: { price: "R180,000", includes: ["Full custom build", "Advanced integrations", "Performance optimization", "Conversion systems"] },
  },
  app: {
    Starter: { price: "R40,000", includes: ["MVP build", "Core features only", "Basic UI"] },
    Growth: { price: "R250,000", includes: ["Full product build", "Admin dashboard", "API integrations", "User management"] },
    Advanced: { price: "R650,000+", includes: ["Scalable platform", "Multi-role systems", "Advanced architecture", "AI integrations"] },
  },
  system: {
    Starter: { price: "R160,000", includes: ["Basic system", "Workflow automation", "Simple dashboard"] },
    Growth: { price: "R240,000", includes: ["Custom workflows", "Integrations (CRM/API)", "Data tracking dashboards"] },
    Advanced: { price: "R450,000+", includes: ["Full operational system", "Multi-department automation", "Advanced analytics"] },
  },
  ai: {
    Starter: { price: "R25,000", includes: ["Basic chatbot", "FAQ automation"] },
    Growth: { price: "R70,000", includes: ["Smart automation flows", "CRM/API integrations", "Lead qualification"] },
    Advanced: { price: "R200,000+", includes: ["AI systems", "Predictive logic", "Full automation pipelines"] },
  },
  qaaas: {
    Starter: { price: "R7,500", includes: ["Contact centre readiness assessment", "Current QA process review", "Gap & risk findings report"] },
    Growth: { price: "R15,000", includes: ["Everything in Starter", "Custom QA scorecards & CX framework", "Interaction sampling & baseline audit", "Management reporting setup"] },
    Advanced: { price: "R15,000–R35,000/mo", includes: ["100% interaction auditing", "Automated scorecards & compliance checks", "Coaching insights per agent", "Executive CX intelligence reporting"] },
  },
  ccaas: {
    Starter: { price: "Custom quote", includes: ["Cloud contact centre platform", "Voice & key digital channels", "Basic routing & reporting"] },
    Growth: { price: "Custom quote", includes: ["Omnichannel (voice, WhatsApp, chat, social)", "IVR & AI self-service", "Supervisor tools & wallboards", "CRM integration"] },
    Advanced: { price: "Custom quote", includes: ["Outbound diallers & campaigns", "Advanced AI & analytics", "Enterprise integrations", "Managed operations"] },
  },
  marketing: {
    Starter: { price: "R16,000/mo", includes: ["Social media management (2 platforms)", "8 posts/month", "Basic content creation", "Monthly report"] },
    Growth: { price: "R30,000/mo", includes: ["Multi-platform management", "Content creation (graphics + video)", "Paid ads management", "Monthly reporting + insights"] },
    Advanced: { price: "R65,000/mo", includes: ["Full digital marketing strategy", "Paid media + influencer campaigns", "Content production", "Performance optimization", "Dedicated account manager"] },
  },
};

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function Calculator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<Complexity>("Starter");
  const [addons, setAddons] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const svc = services.find(s => s.id === service);
  const goalOptions = service ? goalSets[service] : [];
  const challengeOptions = service ? challengeSets[service] : [];
  const tierOptions = service ? tierCopy[service] : [];
  const addonOptions = service ? addonsByService[service] : [];

  const totalSteps = 7;
  const stepLabels = ["Email", "Service", "Goals", "Challenges", "Tier", "Add-ons", "Estimate"];

  const estimateSummary = useMemo(() => {
    if (!service) return "";
    const p = pricing[service]?.[complexity];
    const lines = [
      `Service: ${svc?.label}`,
      `Tier: ${complexity} — ${p?.price}`,
      `Goals: ${goals.join("; ") || "—"}`,
      `Challenges: ${challenges.join("; ") || "—"}`,
      `Add-ons: ${addons.map(a => addonOptions.find(o => o.id === a)?.label).filter(Boolean).join("; ") || "None"}`,
      `Inclusions: ${p?.includes.join("; ")}`,
    ];
    return lines.join("\n");
  }, [service, complexity, goals, challenges, addons, svc, addonOptions]);

  const addonTotal = addons.reduce((sum, id) => sum + (addonOptions.find(o => o.id === id)?.price || 0), 0);

  const toggle = (arr: string[], item: string, setter: (v: string[]) => void) =>
    setter(arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item]);

  const handleSendEstimate = async () => {
    setSending(true);
    setSendError("");
    try {
      await submitToFormspree({
        _subject: `Calculator Estimate — ${svc?.label} (${complexity})`,
        email,
        name: name || "—",
        phone: phone || "—",
        company: company || "—",
        service: svc?.label || "",
        estimate: estimateSummary,
        source: "Pricing Calculator wizard",
      });
      setSent(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us on 067 062 2953.");
    } finally {
      setSending(false);
    }
  };

  const goToLeadForm = () => {
    navigate("/lead-capture", {
      state: {
        prefill: {
          email, name, phone, company,
          service: svc?.label || "",
          message: `My calculator estimate:\n\n${estimateSummary}${addonTotal > 0 ? `\n\nAdd-ons total: R${addonTotal.toLocaleString()}` : ""}`,
        },
      },
    });
  };

  const canAdvance = () => {
    switch (step) {
      case 0: return isValidEmail(email);
      case 1: return !!service;
      case 2: return goals.length > 0;
      case 3: return challenges.length > 0;
      case 4: return !!complexity;
      case 5: return true; // add-ons optional
      case 6: return name.trim().length > 1;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-28 pb-10 bg-gradient-dark text-dark-foreground sm:pt-32 sm:pb-12">
        <div className="container mx-auto px-4">
          <CalcIcon className="h-12 w-12 text-accent mb-4 sm:h-16 sm:w-16" />
          <h1 className="text-4xl font-black sm:text-5xl md:text-7xl">Project Calculator</h1>
          <p className="mt-4 max-w-2xl text-base text-dark-foreground/80 sm:text-xl">
            A quick, guided estimate — a few questions, one screen at a time.
          </p>
        </div>
      </section>

      <section className="py-4 bg-accent/10">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <strong>Illustration Only:</strong> This calculator provides estimated pricing based on typical project scopes. Final pricing depends on scope, project size, volume and integrations, and is confirmed during consultation. All prices in ZAR, excluding VAT.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-1.5">
            {stepLabels.map((label, i) => (
              <div key={label} className="flex-1">
                <div className={`h-1.5 rounded-full ${step >= i ? "bg-primary" : "bg-muted"}`} />
                <span className={`mt-1 hidden text-[0.6rem] font-bold uppercase tracking-wider sm:block ${step >= i ? "text-primary" : "text-muted-foreground"}`}>{label}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground sm:hidden">Step {step + 1} of {totalSteps} — {stepLabels[step]}</p>
        </div>
      </section>

      <section className="py-6 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-5 border-2 border-border shadow-card sm:p-10">
            {/* Step 0 — Email first */}
            {step === 0 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 1 of 7</p>
                <h2 className="text-2xl font-bold mb-2 sm:text-3xl">Where should we send your estimate?</h2>
                <p className="text-sm text-muted-foreground mb-6">We ask this first so your answers are never lost — we'll email your estimate straight away.</p>
                <div className="space-y-2">
                  <Label htmlFor="calc-email">Work email *</Label>
                  <Input id="calc-email" type="email" inputMode="email" autoComplete="email" required
                    value={email} onChange={e => setEmail(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter" && canAdvance()) setStep(1); }}
                    placeholder="you@company.co.za"
                    className="min-h-12 text-base" />
                </div>
                <div className="mt-8 flex justify-end">
                  <Button onClick={() => setStep(1)} disabled={!canAdvance()} className="min-h-12 gap-2">
                    Next <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 1 — Service (single choice, drives everything after) */}
            {step === 1 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 2 of 7</p>
                <h2 className="text-2xl font-bold mb-6 sm:text-3xl">What do you need?</h2>
                <div className="grid gap-3">
                  {services.map(s => (
                    <button key={s.id} onClick={() => { setService(s.id); setGoals([]); setChallenges([]); setAddons([]); }}
                      className={`min-h-12 p-4 text-left font-medium transition-all border-2 ${service === s.id ? "border-primary bg-primary/10 text-primary shadow-glow" : "border-border hover:border-primary/40"}`}>
                      {s.label}
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(0)} className="gap-2 min-h-12"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(2)} disabled={!canAdvance()} className="gap-2 min-h-12">Next <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 2 — Goals (configured by service) */}
            {step === 2 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 3 of 7</p>
                <h2 className="text-2xl font-bold mb-2 sm:text-3xl">What are you trying to achieve?</h2>
                <p className="text-sm text-muted-foreground mb-6">Based on your choice of {svc?.label}. Select all that apply.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {goalOptions.map(g => (
                    <div key={g} className="flex items-start gap-3 rounded-sm border-2 border-border p-3 hover:border-primary/40 transition-colors">
                      <Checkbox checked={goals.includes(g)} onCheckedChange={() => toggle(goals, g, setGoals)} id={`g-${g}`} className="mt-0.5" />
                      <label htmlFor={`g-${g}`} className="cursor-pointer text-sm font-medium leading-snug">{g}</label>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)} className="gap-2 min-h-12"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!canAdvance()} className="gap-2 min-h-12">Next <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 3 — Challenges (configured by service) */}
            {step === 3 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 4 of 7</p>
                <h2 className="text-2xl font-bold mb-2 sm:text-3xl">What's standing in your way?</h2>
                <p className="text-sm text-muted-foreground mb-6">Select all that apply — this shapes what we include.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {challengeOptions.map(c => (
                    <div key={c} className="flex items-start gap-3 rounded-sm border-2 border-border p-3 hover:border-primary/40 transition-colors">
                      <Checkbox checked={challenges.includes(c)} onCheckedChange={() => toggle(challenges, c, setChallenges)} id={`c-${c}`} className="mt-0.5" />
                      <label htmlFor={`c-${c}`} className="cursor-pointer text-sm font-medium leading-snug">{c}</label>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)} className="gap-2 min-h-12"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(4)} disabled={!canAdvance()} className="gap-2 min-h-12">Next <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 4 — Tier */}
            {step === 4 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 5 of 7</p>
                <h2 className="text-2xl font-bold mb-6 sm:text-3xl">Which tier fits you best?</h2>
                <div className="grid gap-3 sm:grid-cols-3">
                  {tierOptions.map(t => (
                    <button key={t.label} onClick={() => setComplexity(t.label as Complexity)}
                      className={`min-h-28 p-4 text-center border-2 transition-all sm:p-6 ${complexity === t.label ? "border-primary bg-primary/10 shadow-glow" : "border-border hover:border-primary/40"}`}>
                      <div className="font-bold text-lg">{t.label}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{t.sub}</div>
                    </button>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(3)} className="gap-2 min-h-12"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(5)} className="gap-2 min-h-12">Next <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 5 — Add-ons */}
            {step === 5 && (
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 6 of 7</p>
                <h2 className="text-2xl font-bold mb-2 sm:text-3xl">Any add-ons?</h2>
                <p className="text-sm text-muted-foreground mb-6">Optional — skip if you're not sure.</p>
                <div className="grid gap-3">
                  {addonOptions.map(f => (
                    <div key={f.id} className="flex items-center justify-between gap-3 rounded-sm border-2 border-border p-3 hover:border-primary/40 transition-colors">
                      <div className="flex min-w-0 items-center gap-3">
                        <Checkbox checked={addons.includes(f.id)} onCheckedChange={() => toggle(addons, f.id, setAddons)} id={`a-${f.id}`} />
                        <label htmlFor={`a-${f.id}`} className="cursor-pointer text-sm font-medium">{f.label}</label>
                      </div>
                      <span className="shrink-0 text-xs font-bold text-primary">+R{f.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(4)} className="gap-2 min-h-12"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(6)} className="gap-2 min-h-12">See Estimate <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 6 — Contact details + Estimate result */}
            {step === 6 && (
              <div>
                {!sent ? (
                  <>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">Question 7 of 7</p>
                    <h2 className="text-2xl font-bold mb-6 sm:text-3xl">Who are we preparing this for?</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="calc-name">Name *</Label>
                        <Input id="calc-name" value={name} onChange={e => setName(e.target.value)} className="min-h-12" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="calc-phone">Phone / WhatsApp</Label>
                        <Input id="calc-phone" type="tel" inputMode="tel" value={phone} onChange={e => setPhone(e.target.value)} className="min-h-12" placeholder="067 000 0000" />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="calc-company">Company / Organisation</Label>
                        <Input id="calc-company" value={company} onChange={e => setCompany(e.target.value)} className="min-h-12" placeholder="Company name" />
                      </div>
                    </div>

                    <div className="mt-8 rounded-sm border-2 border-border bg-muted/30 p-5">
                      <h3 className="text-lg font-bold mb-4">Your Estimate — {svc?.label} ({complexity})</h3>
                      <div className="mb-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                        <span className="font-medium">Tier price</span>
                        <span className="text-xl font-black text-primary sm:text-2xl">{pricing[service]?.[complexity]?.price}</span>
                      </div>
                      <ul className="mb-4 grid gap-2 sm:grid-cols-2">
                        {pricing[service]?.[complexity]?.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                      {addons.length > 0 && (
                        <div className="mb-2 border-t border-border pt-3">
                          {addons.map(id => {
                            const f = addonOptions.find(o => o.id === id);
                            return f ? (
                              <div key={id} className="flex justify-between py-1 text-sm">
                                <span>{f.label}</span><span className="font-bold text-primary">+R{f.price.toLocaleString()}</span>
                              </div>
                            ) : null;
                          })}
                          <div className="mt-2 flex justify-between border-t border-border pt-2 font-bold">
                            <span>Add-ons total</span><span className="text-primary">R{addonTotal.toLocaleString()}</span>
                          </div>
                        </div>
                      )}
                      {service === "ccaas" && (
                        <p className="mt-3 text-xs text-muted-foreground">Platform licensing and usage are quoted separately based on seats and channels after the readiness assessment.</p>
                      )}
                    </div>

                    {sendError && (
                      <div className="mt-4 rounded-sm border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">{sendError}</div>
                    )}

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      <Button onClick={handleSendEstimate} disabled={!canAdvance() || sending} className="min-h-14 gap-2 bg-gradient-primary hover:shadow-glow text-base">
                        {sending ? (<><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>) : "Email Me This Estimate"}
                      </Button>
                      <Button onClick={goToLeadForm} variant="outline" className="min-h-14 gap-2 text-base">
                        Continue to Full Enquiry <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <a href="https://calendar.app.google/CHwnLitv6KtdDqK96" target="_blank" rel="noopener noreferrer" className="mt-3 block">
                      <Button variant="outline" className="w-full min-h-12 gap-2"><Calendar className="h-4 w-4" /> Or schedule a call directly</Button>
                    </a>
                  </>
                ) : (
                  <div className="py-8 text-center">
                    <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-500" />
                    <h2 className="mb-2 text-2xl font-bold sm:text-3xl">Estimate sent to {email}</h2>
                    <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground">Keep an eye on your inbox. To move faster, book a free discovery call or send us a full enquiry — your answers are saved.</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <a href="https://calendar.app.google/CHwnLitv6KtdDqK96" target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full min-h-14 gap-2 bg-gradient-primary hover:shadow-glow text-base"><Calendar className="h-5 w-5" /> Schedule a Call</Button>
                      </a>
                      <Button onClick={goToLeadForm} variant="outline" className="w-full min-h-14 gap-2 text-base">Submit Full Enquiry <ArrowRight className="h-4 w-4" /></Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
