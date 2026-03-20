import { Instagram, MessageCircle, MapPin, Store } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">
            <span className="text-primary">HC</span> Tech
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
            <MapPin size={14} /> São Paulo – SP
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/551190562933"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:glow-green transition-all duration-300 p-2 rounded-full"
            aria-label="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://share.google/Uhrltzw839k8znCNa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:glow-green transition-all duration-300 p-2 rounded-full"
            aria-label="Loja Google"
          >
            <Store size={22} />
          </a>
          <a
            href="https://instagram.com/hctechinfocell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:glow-green transition-all duration-300 p-2 rounded-full"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} HC Tech. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
