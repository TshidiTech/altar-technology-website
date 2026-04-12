import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BrandsShowcase } from "@/components/BrandsShowcase";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesGrid />
      <BrandsShowcase />
      <Footer />
      <FAQChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
