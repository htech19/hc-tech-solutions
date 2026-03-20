import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/551190562933?text=Olá! Gostaria de solicitar um orçamento."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full btn-hover animate-glow-pulse shadow-lg"
    aria-label="WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppButton;
