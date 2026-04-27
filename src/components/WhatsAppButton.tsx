import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const phoneNumber = "27670622953";
  const message = encodeURIComponent("Hi! I'm interested in your digital solutions services.");
  
  return (
    <Button
      onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')}
      className="fixed bottom-4 left-4 z-50 h-12 w-12 rounded-full bg-[#25D366] shadow-lg transition-all hover:bg-[#20BA5A] hover:shadow-xl sm:bottom-24 sm:left-6 sm:h-14 sm:w-14"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};
