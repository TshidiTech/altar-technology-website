import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const services = [
  "Social Media Strategy",
  "Influencer Marketing",
  "Paid Advertising (Meta, Google, TikTok)",
  "Content Creation (Photos, Videos, Graphics)",
  "Community Management",
  "Brand Design & Identity",
  "Marketing Automation",
  "Analytics & Reporting"
];

const goals = [
  "Increase Brand Awareness",
  "Drive Website Traffic",
  "Generate Leads",
  "Boost Sales & Conversions",
  "Grow Social Media Following",
  "Improve Engagement Rates",
  "Launch New Product/Service",
  "Reputation Management"
];

const challenges = [
  "I don't have a social media plan",
  "I don't know how to position my brand online",
  "I don't know which platforms to focus on",
  "I'm not sure what content works for my audience",
  "My social pages look inconsistent",
  "I don't have enough engaging content",
  "My business lacks personality online",
  "I don't have time to post",
  "My engagement is low",
  "I can't track performance",
  "I want to start running ads",
  "I want better results from ads",
  "I want to work with influencers",
  "I need fresh content every month"
];

const industries = [
  "E-commerce & Retail",
  "Fashion & Beauty",
  "Food & Beverage",
  "Health & Fitness",
  "Technology & SaaS",
  "Real Estate",
  "Finance & Banking",
  "Hospitality & Tourism",
  "Automotive",
  "Healthcare & Medical",
  "Education",
  "Entertainment & Media",
  "Other"
];

export const LeadForm = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    socialHandles: "",
    website: "",
    message: ""
  });

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleGoalToggle = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal)
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const handleChallengeToggle = (challenge: string) => {
    setSelectedChallenges(prev =>
      prev.includes(challenge)
        ? prev.filter(c => c !== challenge)
        : [...prev, challenge]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      toast.error("Please accept the Terms & Conditions to continue");
      return;
    }
    toast.success("Thank you! We'll be in touch soon.");
    console.log({ ...formData, services: selectedServices, goals: selectedGoals, challenges: selectedChallenges });
  };

  return (
    <section id="lead-form" className="py-24 bg-dark text-dark-foreground scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Grow Your Brand?</span>
            </h2>
            <p className="text-xl text-dark-foreground/80">
              Tell us about your challenges and we'll create a custom solution for you
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">Industry *</Label>
                <select
                  id="industry"
                  required
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="socialHandles">Social Handles</Label>
                  <Input
                    id="socialHandles"
                    placeholder="@yourbrand"
                    value={formData.socialHandles}
                    onChange={(e) => setFormData({ ...formData, socialHandles: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    type="url"
                    placeholder="https://yoursite.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Services Required * (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-background/50 rounded-lg">
                  {services.map((service) => (
                    <div key={service} className="flex items-start space-x-3">
                      <Checkbox
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                      />
                      <label
                        htmlFor={service}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {service}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Goals and Objectives * (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-background/50 rounded-lg">
                  {goals.map((goal) => (
                    <div key={goal} className="flex items-start space-x-3">
                      <Checkbox
                        id={goal}
                        checked={selectedGoals.includes(goal)}
                        onCheckedChange={() => handleGoalToggle(goal)}
                      />
                      <label
                        htmlFor={goal}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {goal}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>What are your biggest challenges? (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-background/50 rounded-lg">
                  {challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start space-x-3">
                      <Checkbox
                        id={challenge}
                        checked={selectedChallenges.includes(challenge)}
                        onCheckedChange={() => handleChallengeToggle(challenge)}
                      />
                      <label
                        htmlFor={challenge}
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {challenge}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Details</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your goals..."
                  className="bg-background/50"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-accent/20 rounded-lg border border-border">
                <Checkbox
                  id="terms"
                  checked={acceptedTerms}
                  onCheckedChange={(checked) => setAcceptedTerms(checked === true)}
                  required
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-relaxed cursor-pointer"
                >
                  I accept the{" "}
                  <a href="/terms" target="_blank" className="text-primary hover:underline font-semibold">
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a href="/privacy" target="_blank" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </a>
                  , and{" "}
                  <a href="/cookies" target="_blank" className="text-primary hover:underline font-semibold">
                    Cookie Policy
                  </a>
                  . I understand that all payments are non-refundable once work commences and a 50% deposit is required before work begins.
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={!acceptedTerms}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all text-lg py-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Start Campaign
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
