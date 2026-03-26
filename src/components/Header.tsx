import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Smartphone, Instagram, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "#servicos" },
  { label: "Loja", href: "/loja", isRoute: true },
  { label: "Fale Conosco", href: "#contato" }, // Alterado de Produtos para Fale Conosco
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO - Estilo Oakley/Tech */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#00A651] p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Smartphone className="text-white" size={18} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white italic uppercase">
            HC TECH <span className="text-[#00A651]">INFOCELL</span>
          </span>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              item.isRoute ? 
              <Link key={item.label} to={item.href} className="text-[11px] font-black text-gray-300 hover:text-[#00A651] uppercase tracking-[0.2em] transition-colors">{item.label}</Link> :
              <a key={item.label} href={isHome ? item.href : `/${item.href}`} className="text-[11px] font-black text-gray-300 hover:text-[#00A651] uppercase tracking-[0.2em] transition-colors">{item.label}</a>
            ))}
          </div>

          <div className="h-4 w-px bg-white/20 mx-2" />

          {/* REDES SOCIAIS RÁPIDAS */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/hctechinfocell/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A651] transition-transform hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/hctechcelulareinfo" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#00A651] transition-transform hover:scale-110">
              <Facebook size={18} />
            </a>
          </div>

          {/* CARRINHO */}
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-white hover:text-[#00A651] transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[9px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 bg-white/5 rounded-xl border border-white/10">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 p-8 flex flex-col gap-8 h-screen animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              onClick={() => setMenuOpen(false)} 
              className="text-2xl font-black text-white uppercase italic tracking-tighter hover:text-[#00A651]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-8 border-t border-white/10 flex gap-6">
            <a href="https://www.instagram.com/hctechinfocell/" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-[#00A651]"><Instagram /></a>
            <a href="https://www.facebook.com/hctechcelulareinfo" target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-[#00A651]"><Facebook /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
