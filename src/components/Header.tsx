import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Smartphone, Instagram, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Loja", href: "/loja" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Função para scroll suave em links com ID
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="bg-[#00A651] p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap size={20} className="text-white fill-white" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
            HC <span className="text-[#00A651]">TECH</span>
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-[11px] font-black text-white/70 hover:text-[#00A651] uppercase tracking-[0.2em] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <a 
            href="https://instagram.com/hctech_infocell" 
            target="_blank" 
            className="hidden sm:block text-white/50 hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          
          <button 
            onClick={() => setIsOpen(true)} 
            className="relative p-2 text-white hover:text-[#00A651] transition-colors"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-lg shadow-[#00A651]/20">
                {totalItems}
              </span>
            )}
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-white/5 min-h-[40vh] p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-3xl font-black text-white uppercase italic tracking-tighter hover:text-[#00A651] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto pt-8 border-t border-white/5 flex gap-6">
             <a href="https://instagram.com/hctech_infocell" className="text-[#00A651] font-black uppercase text-xs tracking-widest">Instagram</a>
             <a href="https://wa.me/5511940562933" className="text-white font-black uppercase text-xs tracking-widest">WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
