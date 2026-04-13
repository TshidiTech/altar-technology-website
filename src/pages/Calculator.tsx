import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { AlertCircle, Calculator as CalcIcon, Download, Mail, Calendar, ArrowRight, ArrowLeft } from "lucide-react";

const serviceTypes = [
  { id: "website", label: "Website" },
  { id: "app", label: "App" },
  { id: "system", label: "System" },
  { id: "ai", label: "AI Solution" },
  { id: "marketing", label: "Marketing" },
];

const goals = [
  "Increase Brand Awareness", "Drive Website Traffic", "Generate Leads",
  "Boost Sales & Conversions", "Grow Social Media Following", "Improve Engagement Rates",
  "Launch New Product/Service", "Reputation Management",
  "Automate Business Processes", "Build Digital Product", "Improve Customer Experience",
  "Streamline Operations", "Enable Online Payments", "Build Internal Tools"
];

const challenges = [
  "I don't have a social media plan", "I don't know how to position my brand online",
  "I don't know which platforms to focus on", "I'm not sure what content works for my audience",
  "My social pages look inconsistent", "I don't have enough engaging content",
  "My business lacks personality online", "I don't have time to post",
  "My engagement is low", "I can't track performance",
  "I want to start running ads", "I want better results from ads",
  "I want to work with influencers", "I need fresh content every month",
  "I need a website but don't know where to start", "My current systems are manual and slow",
  "I need an app for my business", "I want to use AI but don't know how"
];

const complexityTiers = ["Starter", "Growth", "Advanced"] as const;
type Complexity = typeof complexityTiers[number];

const optionalFeatures = [
  { id: "ai-integration", label: "AI Integration", price: 15000 },
  { id: "payments", label: "Payment Gateway", price: 12000 },
  { id: "dashboards", label: "Analytics Dashboards", price: 18000 },
  { id: "api-integrations", label: "API Integrations", price: 10000 },
  { id: "user-auth", label: "User Authentication", price: 8000 },
  { id: "notifications", label: "Push Notifications", price: 6000 },
  { id: "cms", label: "CMS / Content Management", price: 12000 },
  { id: "multi-language", label: "Multi-language Support", price: 10000 },
];

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
  marketing: {
    Starter: { price: "R16,000/mo", includes: ["Social media management (2 platforms)", "8 posts/month", "Basic content creation", "Monthly report"] },
    Growth: { price: "R30,000/mo", includes: ["Multi-platform management", "Content creation (graphics + video)", "Paid ads management", "Monthly reporting + insights"] },
    Advanced: { price: "R65,000/mo", includes: ["Full digital marketing strategy", "Paid media + influencer campaigns", "Content production", "Performance optimization", "Dedicated account manager"] },
  },
};

export default function Calculator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<Complexity>("Starter");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggle = (arr: string[], item: string, setter: (v: string[]) => void) => {
    setter(arr.includes(item) ? arr.filter(i => i !== item) : [...arr, item]);
  };

  const generateEmailBody = () => {
    const lines = [
      `Services: ${selectedServices.join(", ")}`,
      `Goals: ${selectedGoals.join(", ")}`,
      `Challenges: ${selectedChallenges.join(", ")}`,
      `Complexity: ${complexity}`,
      `Optional Features: ${selectedFeatures.join(", ") || "None"}`,
      `\nEstimated Pricing:`,
      ...selectedServices.map(s => `${s}: ${pricing[s]?.[complexity]?.price || "Custom"}`),
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const generatePdfContent = () => {
    let content = "BRAND HYPE - PROJECT ESTIMATE\n";
    content += "================================\n\n";
    content += `Date: ${new Date().toLocaleDateString()}\n\n`;
    content += `SELECTED SERVICES\n${selectedServices.map(s => `• ${serviceTypes.find(t => t.id === s)?.label}`).join("\n")}\n\n`;
    content += `COMPLEXITY TIER: ${complexity}\n\n`;
    content += `GOALS\n${selectedGoals.map(g => `• ${g}`).join("\n")}\n\n`;
    content += `CHALLENGES\n${selectedChallenges.map(c => `• ${c}`).join("\n")}\n\n`;
    if (selectedFeatures.length) {
      content += `OPTIONAL FEATURES\n${selectedFeatures.map(f => `• ${optionalFeatures.find(o => o.id === f)?.label}`).join("\n")}\n\n`;
    }
    content += `ESTIMATED PRICING\n`;
    content += `─────────────────\n`;
    selectedServices.forEach(s => {
      const p = pricing[s]?.[complexity];
      const label = serviceTypes.find(t => t.id === s)?.label;
      if (p) {
        content += `\n${label}: ${p.price}\n`;
        content += `Includes:\n${p.includes.map(i => `  • ${i}`).join("\n")}\n`;
      }
    });
    content += `\n================================\n`;
    content += `DISCLAIMER: This calculator provides estimated pricing based on typical project scopes. `;
    content += `Final pricing and objectives will be determined during consultation based on your specific needs, `;
    content += `industry, and campaign complexity. All prices are in ZAR and exclude VAT.\n\n`;
    content += `Contact: admin@brandhype.co.za | 067 062 2953\n`;
    content += `Book a call: https://calendar.app.google/pkkvMSJBS3DQLPSW8`;
    return content;
  };

  const downloadQuote = () => {
    const content = generatePdfContent();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "BrandHype-Estimate.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <section className="pt-32 pb-12 bg-dark text-dark-foreground">
        <div className="container mx-auto px-4 text-center">
          <CalcIcon className="h-16 w-16 mx-auto text-primary mb-4" />
          <h1 className="text-5xl md:text-7xl font-black">Project Calculator</h1>
          <p className="text-xl text-dark-foreground/80 max-w-2xl mx-auto mt-4">
            Get an estimated breakdown of your project costs
          </p>
        </div>
      </section>

      <section className="py-4 bg-accent/10">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              <strong>Illustration Only:</strong> This calculator provides estimated pricing based on typical project scopes. Final pricing and objectives will be determined during consultation. All prices in ZAR, excluding VAT.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Progress */}
      <section className="py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-between mb-2">
            {["Services", "Goals", "Challenges", "Complexity", "Results"].map((label, i) => (
              <div key={label} className={`flex items-center gap-2 text-sm font-medium ${step >= i + 1 ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= i + 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                  {i + 1}
                </div>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Step 1: Services */}
          {step === 1 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Select Service Types *</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {serviceTypes.map(s => (
                  <button
                    key={s.id}
                    onClick={() => toggle(selectedServices, s.id, setSelectedServices)}
                    className={`p-4 rounded-lg border-2 text-left font-medium transition-all ${selectedServices.includes(s.id) ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/30"}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <Button onClick={() => setStep(2)} disabled={selectedServices.length === 0} className="gap-2">
                  Next <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 2: Goals */}
          {step === 2 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Goals & Objectives * (Select all that apply)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {goals.map(g => (
                  <div key={g} className="flex items-center gap-3">
                    <Checkbox checked={selectedGoals.includes(g)} onCheckedChange={() => toggle(selectedGoals, g, setSelectedGoals)} id={g} />
                    <label htmlFor={g} className="text-sm cursor-pointer">{g}</label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(1)} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                <Button onClick={() => setStep(3)} disabled={selectedGoals.length === 0} className="gap-2">Next <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </Card>
          )}

          {/* Step 3: Challenges */}
          {step === 3 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">What are your biggest challenges? (Select all that apply)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challenges.map(c => (
                  <div key={c} className="flex items-center gap-3">
                    <Checkbox checked={selectedChallenges.includes(c)} onCheckedChange={() => toggle(selectedChallenges, c, setSelectedChallenges)} id={c} />
                    <label htmlFor={c} className="text-sm cursor-pointer">{c}</label>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(2)} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                <Button onClick={() => setStep(4)} className="gap-2">Next <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </Card>
          )}

          {/* Step 4: Complexity + Features */}
          {step === 4 && (
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Select Complexity Tier</h2>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {complexityTiers.map(tier => (
                  <button
                    key={tier}
                    onClick={() => setComplexity(tier)}
                    className={`p-6 rounded-lg border-2 text-center transition-all ${complexity === tier ? "border-primary bg-primary/10" : "border-border hover:border-primary/30"}`}
                  >
                    <div className="font-bold text-lg">{tier}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {tier === "Starter" && "MVP / Small Business"}
                      {tier === "Growth" && "Scaling Businesses"}
                      {tier === "Advanced" && "Full Systems"}
                    </div>
                  </button>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Optional Features</h3>
              <div className="grid grid-cols-2 gap-4">
                {optionalFeatures.map(f => (
                  <div key={f.id} className="flex items-center gap-3">
                    <Checkbox checked={selectedFeatures.includes(f.id)} onCheckedChange={() => toggle(selectedFeatures, f.id, setSelectedFeatures)} id={f.id} />
                    <label htmlFor={f.id} className="text-sm cursor-pointer font-medium">{f.label}</label>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setStep(3)} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                <Button onClick={() => setStep(5)} className="gap-2">View Estimate <ArrowRight className="h-4 w-4" /></Button>
              </div>
            </Card>
          )}

          {/* Step 5: Results */}
          {step === 5 && (
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-3xl font-black mb-8 text-center">Your Project Estimate</h2>

                <div className="space-y-6">
                  {selectedServices.map(serviceId => {
                    const p = pricing[serviceId]?.[complexity];
                    const label = serviceTypes.find(t => t.id === serviceId)?.label;
                    if (!p) return null;
                    return (
                      <div key={serviceId} className="p-6 bg-muted/30 rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold">{label}</h3>
                          <span className="text-2xl font-black text-primary">{p.price}</span>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground mb-2">{complexity} Tier — What's Included:</div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {p.includes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {selectedFeatures.length > 0 && (
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                    <h4 className="font-bold mb-2">Optional Features Selected:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFeatures.map(f => (
                        <span key={f} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {optionalFeatures.find(o => o.id === f)?.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-bold mb-6">Next Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button onClick={downloadQuote} variant="outline" className="gap-2 h-auto py-4 flex-col">
                    <Download className="h-5 w-5" />
                    <span>Download Quote</span>
                  </Button>
                  <a href={`mailto:admin@brandhype.co.za?subject=${encodeURIComponent("Project Estimate from Calculator")}&body=${generateEmailBody()}`}>
                    <Button variant="outline" className="gap-2 h-auto py-4 flex-col w-full">
                      <Mail className="h-5 w-5" />
                      <span>Email Quote</span>
                    </Button>
                  </a>
                  <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 h-auto py-4 flex-col w-full bg-gradient-primary hover:shadow-glow">
                      <Calendar className="h-5 w-5" />
                      <span>Schedule Call</span>
                    </Button>
                  </a>
                </div>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(4)} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                <Link to="/lead-capture">
                  <Button className="gap-2 bg-gradient-primary hover:shadow-glow">Submit Full Enquiry <ArrowRight className="h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
