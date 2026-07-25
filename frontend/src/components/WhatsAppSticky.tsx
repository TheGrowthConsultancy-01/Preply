import { MessageCircle } from "lucide-react";

const WhatsAppSticky = () => {
  return (
    <a
      href="https://wa.me/919558597555?text=Hello%20PREPLY%20India%2C%20I%20am%20interested%20in%20your%20products.%20Please%20share%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-3 rounded-full shadow-premium hover:scale-105 transition-transform font-display font-semibold text-sm"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppSticky;
