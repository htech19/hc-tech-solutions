import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Películas", href: "#peliculas" },
  { label: "Loja", href: "/loja", isRoute: true },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.href}
          to={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {item.label}
        </Link>
      );
    }
    // If not on home page, link to home with hash
    const href = isHome ? item.href : `/${item.href}`;
    return (
      <a
        key={item.href}
        href={href}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
      >
        {item.label}
      </a>
    );
  };

  const renderMobileNavLink = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      return (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => setMenuOpen(false)}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
        >
          {item.label}
        </Link>
      );
    }
    const href = isHome ? item.href : `/${item.href}`;
    return (
      <a
        key={item.href}
        href={href}
        onClick={() => setMenuOpen(false)}
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
      >
        {item.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/70 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          <span className="text-primary">HC</span>
          <span className="text-primary"> Tech</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(renderNavLink)}

          {/* Cart icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Carrinho"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/5511940562933?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold btn-hover glow-green"
          >
            <MessageCircle size={16} />
            Orçamento via WhatsApp
          </a>
        </nav>

        {/* Mobile toggle + cart */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-foreground"
            aria-label="Carrinho"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-sm">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map(renderMobileNavLink)}
            <a
              href="https://wa.me/5511940562933?text=Olá! Gostaria de solicitar um orçamento."
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
