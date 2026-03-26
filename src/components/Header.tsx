import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ShoppingCart, Smartphone, Instagram, Facebook, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#00A651] p-1.5 rounded-lg">
            <Smartphone className="text-white" size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">HC TECH <span className="text-[#00A651]">INFOCELL</span></span>
        </Link>

        {/* NAV DESKTOP COMPLETO */}
        <nav className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              item.isRoute ? 
              <Link key={item.label} to={item.href} className="text-xs font-bold text-gray-300 hover:text-[#00A651] uppercase tracking-widest">{item.label}</Link> :
              <a key={item.label} href={isHome ? item.href : `/${item.href}`} className="text-xs font-bold text-gray-300 hover:text-[#00A651] uppercase tracking-widest">{item.label}</a>
            ))}
          </div>

          <div className="h-6 w-px bg-white/10" />

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/hctech_infocell" target="_blank" className="text-gray-400 hover:text-pink-500"><Instagram size={18} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600"><Facebook size={18} /></a>
          </div>

          <button onClick={() => setIsOpen(true)} className="relative p-2 text-white"><ShoppingCart size={22} />
            {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 bg-white/5 rounded-lg">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU SIMPLES */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/5 p-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className="text-lg font-bold text-white uppercase tracking-widest">{item.label}</Link>
          ))}
          <div className="flex gap-6 pt-4 border-t border-white/10">
            <Instagram className="text-gray-400" />
            <Facebook className="text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
