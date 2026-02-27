import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName?: string;
  className?: string;
}

const WhatsAppButton = ({ productName, className = "" }: WhatsAppButtonProps) => {
  const message = productName
    ? `Hello PREPLY India, I am interested in ${productName}. Please share details.`
    : "Hello PREPLY India, I am interested in your products. Please share details.";

  const url = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <MessageCircle size={16} />
      <span>Enquire on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
