import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Películas", href: "#peliculas" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="text-2xl font-bold tracking-tight">
          <span className="text-primary">HC</span>
          <span className="text-foreground"> Tech</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold btn-hover glow-green"
          >
            <MessageCircle size={16} />
            Orçamento via WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold btn-hover"
            >
              <MessageCircle size={16} />
              Orçamento via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
