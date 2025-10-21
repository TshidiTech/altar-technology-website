import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BrandsShowcase } from "@/components/BrandsShowcase";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";
import { FAQChatbot } from "@/components/FAQChatbot";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ImageCarousel } from "@/components/ImageCarousel";

import fitnessInfluencer from "@/assets/portrait-fitness-influencer.jpg";
import fitnessInfluencer2 from "@/assets/portrait-fitness-influencer_2.jpg";
import fitnessInfluencer1 from "@/assets/portrait-fitness-influencer_1.jpg";
import petsContent from "@/assets/person-creating-online-content-with-their-pets.jpg";
import foodContent from "@/assets/people-creating-food-content-upload-internet-food-lovers.jpg";
import lifestyleInfluencer5 from "@/assets/medium-shot-plus-sized-woman-influencer_5.jpg";
import lifestyleInfluencer4 from "@/assets/medium-shot-plus-sized-woman-influencer_4.jpg";
import lifestyleInfluencer3 from "@/assets/medium-shot-plus-sized-woman-influencer_3.jpg";

const Index = () => {
  const carouselImages = [
    fitnessInfluencer,
    fitnessInfluencer2,
    fitnessInfluencer1,
    petsContent,
    foodContent,
    lifestyleInfluencer5,
    lifestyleInfluencer4,
    lifestyleInfluencer3
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ImageCarousel images={carouselImages} />
      <ServicesGrid />
      <BrandsShowcase />
      <LeadForm />
      <Footer />
      <FAQChatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
