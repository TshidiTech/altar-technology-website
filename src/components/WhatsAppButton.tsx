import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const phoneNumber = "27670622953";
  const message = encodeURIComponent("Hi! I'm interested in your digital solutions services.");
  
  return (
    <Button
      onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')}
      className="fixed bottom-24 left-6 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl transition-all z-50"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </Button>
  );
};
