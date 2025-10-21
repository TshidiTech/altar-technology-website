import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Calculator as CalcIcon, Download } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LineItem {
  name: string;
  quantity: number;
  unit: string;
  unitPrice: number;
  total: number;
}

const campaignTypes = {
  "social-strategy": {
    name: "Social Media Strategy",
    baseItems: [
      { name: "Strategic Consultation", quantity: 1, unit: "session", unitPrice: 2500 },
      { name: "Content Calendar Development", quantity: 1, unit: "month", unitPrice: 3000 },
      { name: "Platform Analysis & Research", quantity: 3, unit: "platforms", unitPrice: 800 },
      { name: "Hashtag Strategy", quantity: 1, unit: "set", unitPrice: 500 },
    ],
    addOns: [
      { name: "Competitor Analysis", unit: "report", unitPrice: 1500 },
      { name: "Monthly Performance Review", unit: "meeting", unitPrice: 800 },
      { name: "Strategy Document", unit: "document", unitPrice: 1200 },
    ]
  },
  "influencer-marketing": {
    name: "Influencer Marketing",
    baseItems: [
      { name: "Campaign Strategy & Planning", quantity: 1, unit: "campaign", unitPrice: 4000 },
      { name: "Influencer Sourcing & Vetting", quantity: 5, unit: "influencers", unitPrice: 600 },
      { name: "Contract Management", quantity: 5, unit: "contracts", unitPrice: 400 },
      { name: "Content Approval & Coordination", quantity: 10, unit: "posts", unitPrice: 300 },
      { name: "Campaign Performance Report", quantity: 1, unit: "report", unitPrice: 1500 },
    ],
    addOns: [
      { name: "Additional Influencer", unit: "influencer", unitPrice: 600 },
      { name: "Video Content Review", unit: "video", unitPrice: 500 },
      { name: "Real-time Campaign Monitoring", unit: "month", unitPrice: 2000 },
    ]
  },
  "paid-advertising": {
    name: "Paid Advertising",
    baseItems: [
      { name: "Ad Account Setup & Pixel Installation", quantity: 1, unit: "account", unitPrice: 2000 },
      { name: "Campaign Strategy Development", quantity: 1, unit: "strategy", unitPrice: 3500 },
      { name: "Ad Creative Design", quantity: 6, unit: "creatives", unitPrice: 800 },
      { name: "Audience Research & Targeting", quantity: 3, unit: "audiences", unitPrice: 1000 },
      { name: "Monthly Campaign Management", quantity: 1, unit: "month", unitPrice: 5000 },
      { name: "Performance Reporting", quantity: 1, unit: "report", unitPrice: 1200 },
    ],
    addOns: [
      { name: "Additional Ad Creative", unit: "creative", unitPrice: 800 },
      { name: "A/B Testing Campaign", unit: "test", unitPrice: 1500 },
      { name: "Landing Page Optimization", unit: "page", unitPrice: 2500 },
    ]
  },
  "content-creation": {
    name: "Content Creation",
    baseItems: [
      { name: "Content Strategy Session", quantity: 1, unit: "session", unitPrice: 2000 },
      { name: "Professional Photo Shoot", quantity: 1, unit: "shoot", unitPrice: 4500 },
      { name: "Video Production (Short-form)", quantity: 5, unit: "videos", unitPrice: 1200 },
      { name: "Graphic Design Posts", quantity: 10, unit: "posts", unitPrice: 400 },
      { name: "Copywriting & Captions", quantity: 15, unit: "captions", unitPrice: 200 },
    ],
    addOns: [
      { name: "Additional Video Edit", unit: "video", unitPrice: 1200 },
      { name: "Motion Graphics", unit: "graphic", unitPrice: 1800 },
      { name: "Stock Photo License", unit: "license", unitPrice: 500 },
    ]
  },
  "full-package": {
    name: "Full Marketing Package",
    baseItems: [
      { name: "Comprehensive Strategy Development", quantity: 1, unit: "strategy", unitPrice: 6000 },
      { name: "Monthly Content Creation", quantity: 20, unit: "pieces", unitPrice: 500 },
      { name: "Community Management", quantity: 1, unit: "month", unitPrice: 3500 },
      { name: "Paid Ad Management", quantity: 1, unit: "month", unitPrice: 5000 },
      { name: "Analytics & Reporting", quantity: 1, unit: "month", unitPrice: 1500 },
      { name: "Monthly Strategy Call", quantity: 1, unit: "call", unitPrice: 1000 },
    ],
    addOns: [
      { name: "Influencer Campaign", unit: "campaign", unitPrice: 8000 },
      { name: "Brand Design Updates", unit: "update", unitPrice: 2500 },
      { name: "Email Marketing Setup", unit: "setup", unitPrice: 3000 },
    ]
  }
};

export default function Calculator() {
  const [selectedCampaign, setSelectedCampaign] = useState<keyof typeof campaignTypes>("social-strategy");
  const [duration, setDuration] = useState(1);
  const [lineItems, setLineItems] = useState<LineItem[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<{[key: string]: number}>({});

  const calculateTotal = () => {
    const campaign = campaignTypes[selectedCampaign];
    let total = 0;
    
    // Base items
    campaign.baseItems.forEach(item => {
      const quantity = lineItems.find(li => li.name === item.name)?.quantity || item.quantity;
      total += quantity * item.unitPrice * duration;
    });

    // Add-ons
    Object.entries(selectedAddOns).forEach(([name, qty]) => {
      const addOn = campaign.addOns.find(a => a.name === name);
      if (addOn && qty > 0) {
        total += qty * addOn.unitPrice * duration;
      }
    });

    return total;
  };

  const updateLineItemQuantity = (itemName: string, newQuantity: number) => {
    setLineItems(prev => {
      const existing = prev.find(item => item.name === itemName);
      if (existing) {
        return prev.map(item => 
          item.name === itemName ? { ...item, quantity: newQuantity, total: newQuantity * item.unitPrice } : item
        );
      } else {
        const campaign = campaignTypes[selectedCampaign];
        const baseItem = campaign.baseItems.find(i => i.name === itemName);
        if (baseItem) {
          return [...prev, { ...baseItem, quantity: newQuantity, total: newQuantity * baseItem.unitPrice }];
        }
      }
      return prev;
    });
  };

  const getLineItemQuantity = (itemName: string, defaultQty: number) => {
    return lineItems.find(item => item.name === itemName)?.quantity || defaultQty;
  };

  const toggleAddOn = (addOnName: string) => {
    setSelectedAddOns(prev => ({
      ...prev,
      [addOnName]: prev[addOnName] ? 0 : 1
    }));
  };

  const campaign = campaignTypes[selectedCampaign];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FAQChatbot />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <CalcIcon className="h-16 w-16 mx-auto text-primary" />
            <h1 className="text-5xl md:text-7xl font-black text-foreground">
              Project Calculator
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get an estimated breakdown of your campaign costs and deliverables
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-accent/10">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription className="text-base">
              <strong>Illustration Only:</strong> This calculator provides estimated pricing based on typical project scopes. 
              Final pricing and objectives will be determined during consultation based on your specific needs, industry, 
              and campaign complexity. All prices are in ZAR and exclude VAT.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Configuration Panel */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Campaign Configuration</h2>
                
                <div className="space-y-6">
                  {/* Campaign Type Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="campaign-type">Campaign Type *</Label>
                    <Select value={selectedCampaign} onValueChange={(value) => {
                      setSelectedCampaign(value as keyof typeof campaignTypes);
                      setLineItems([]);
                      setSelectedAddOns({});
                    }}>
                      <SelectTrigger id="campaign-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(campaignTypes).map(([key, value]) => (
                          <SelectItem key={key} value={key}>{value.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Duration Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="duration">Campaign Duration (Months) *</Label>
                    <Input
                      id="duration"
                      type="number"
                      min="1"
                      max="12"
                      value={duration}
                      onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
                      className="max-w-xs"
                    />
                    <p className="text-sm text-muted-foreground">
                      Longer campaigns often include volume discounts
                    </p>
                  </div>
                </div>
              </Card>

              {/* Base Services */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Included Services</h3>
                <div className="space-y-4">
                  {campaign.baseItems.map((item) => (
                    <div key={item.name} className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          R{item.unitPrice.toLocaleString()} per {item.unit}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={getLineItemQuantity(item.name, item.quantity)}
                          onChange={(e) => updateLineItemQuantity(item.name, parseInt(e.target.value) || 1)}
                          className="w-20"
                        />
                        <span className="text-sm text-muted-foreground">{item.unit}(s)</span>
                      </div>
                      <div className="text-right font-semibold min-w-[100px]">
                        R{(getLineItemQuantity(item.name, item.quantity) * item.unitPrice * duration).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Add-on Services */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Optional Add-ons</h3>
                <div className="space-y-3">
                  {campaign.addOns.map((addOn) => (
                    <div key={addOn.name} className="flex items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3 flex-1">
                        <Checkbox
                          id={addOn.name}
                          checked={!!selectedAddOns[addOn.name]}
                          onCheckedChange={() => toggleAddOn(addOn.name)}
                        />
                        <label htmlFor={addOn.name} className="cursor-pointer flex-1">
                          <p className="font-medium">{addOn.name}</p>
                          <p className="text-sm text-muted-foreground">
                            R{addOn.unitPrice.toLocaleString()} per {addOn.unit}
                          </p>
                        </label>
                      </div>
                      {selectedAddOns[addOn.name] > 0 && (
                        <>
                          <Input
                            type="number"
                            min="1"
                            value={selectedAddOns[addOn.name]}
                            onChange={(e) => setSelectedAddOns(prev => ({
                              ...prev,
                              [addOn.name]: parseInt(e.target.value) || 1
                            }))}
                            className="w-20"
                          />
                          <div className="text-right font-semibold min-w-[100px]">
                            R{(selectedAddOns[addOn.name] * addOn.unitPrice * duration).toLocaleString()}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Summary Panel */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Campaign Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Campaign Type:</span>
                    <span className="font-medium">{campaign.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{duration} month{duration > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Base Services:</span>
                    <span className="font-medium">{campaign.baseItems.length} items</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Add-ons:</span>
                    <span className="font-medium">
                      {Object.values(selectedAddOns).filter(v => v > 0).length} selected
                    </span>
                  </div>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Estimated Total:</span>
                    <span className="font-bold text-primary text-2xl">
                      R{calculateTotal().toLocaleString()}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Excludes VAT. 50% deposit required before work commences.
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow">
                    Request Detailed Quote
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download Estimate
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm font-medium mb-2">Expected Deliverables:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Strategy document</li>
                    <li>• Content calendar</li>
                    <li>• Monthly reports</li>
                    <li>• Performance analytics</li>
                    <li>• Team communication</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                This estimate gives you an idea of campaign costs. Let's discuss your specific needs and create a 
                customized proposal that aligns with your goals and budget.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}