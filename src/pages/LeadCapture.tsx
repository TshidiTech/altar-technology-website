import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, Calendar, Phone, Mail } from "lucide-react";

const serviceOptions = [
  "Web Development",
  "App & Platform Development",
  "Systems & Automation",
  "AI & Automation Solutions",
  "Digital Marketing",
  "Prototypes & MVPs",
  "E-commerce Development",
  "Other"
];

const budgetRanges = [
  "Under R25,000",
  "R25,000 – R50,000",
  "R50,000 – R100,000",
  "R100,000 – R250,000",
  "R250,000 – R500,000",
  "R500,000 – R1,000,000",
  "R1,000,000 – R5,000,000",
];

export default function LeadCapture() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", service: "", budget: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:hello@altartechnology.co.za?subject=${subject}&body=${body}`);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
              Enquiry Submitted!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <p className="text-muted-foreground">We'll respond within 24 hours to discuss your project.</p>
            <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="https://wa.me/27670622953" className="text-primary hover:underline font-semibold">067 062 2953</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@altartechnology.co.za" className="text-primary hover:underline">hello@altartechnology.co.za</a>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Schedule a Call</a>
              </div>
            </div>
            <Button onClick={() => setShowSuccess(false)} className="w-full" size="lg">Close</Button>
          </div>
        </DialogContent>
      </Dialog>

      <section className="pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="mb-8 text-center sm:mb-12">
            <h1 className="mb-4 text-3xl font-black sm:text-4xl md:text-5xl">
              Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Something Great</span>
            </h1>
            <p className="text-base text-muted-foreground sm:text-lg">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>

          <Card className="border-2 border-border p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Needed *</Label>
                <select id="service" required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="min-h-11 w-full rounded-sm border-2 border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select a service</option>
                  {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range *</Label>
                <select id="budget" required value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="min-h-11 w-full rounded-sm border-2 border-input bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select budget range</option>
                  {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow transition-all text-base rounded-sm sm:text-lg">
                Submit Enquiry
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-3">Prefer to talk?</p>
            <a href="https://calendar.app.google/pkkvMSJBS3DQLPSW8" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full gap-2 rounded-sm sm:w-auto">
                <Calendar className="h-5 w-5" />
                Schedule a Call
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
