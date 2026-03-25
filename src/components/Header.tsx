import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ShoppingCart, Smartphone, Instagram, Facebook, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio", icon: <Home size={16} /> },
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
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderNavLink = (item: typeof navItems[0]) => {
    const isActive = location.pathname === item.href || (isHome && location.hash === item.href);
    
    // Melhoria visual no link: fonte Rajdhani ou Oswald se tiver, tracking agressivo
    const commonClass = `text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 group ${
      isActive ? "text-[#00A651]" : "text-gray-400 hover:text-white"
    }`;

    const content = (
      <>
        {item.icon}
        {item.label}
        {isActive && (
          <span className="w-1 h-1 bg-[#00A651] rounded-full shadow-[0_0_8px_#00A651] -ml-1"></span>
        )}
      </>
    );

    if (item.isRoute) {
      return (
        <Link key={item.href} to={item.href} className={commonClass}>
          {content}
        </Link>
      );
    }
    
    const href = isHome ? item.href : `/${item.href}`;
    return (
      <a key={item.href} href={href} className={commonClass}>
        {content}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || menuOpen
          ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl shadow-[#00A651]/5"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO - Brilho Neon na borda */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-[#00A651]/10 border border-[#00A651]/40 p-2 rounded-xl shadow-[0_0_20px_rgba(0,166,81,0.25)] group-hover:shadow-[0_0_30px_rgba(0,166,81,0.5)] group-hover:rotate-6 transition-all duration-500">
            <Smartphone className="text-[#00A651]" size={18} />
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-white" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            HC TECH <span className="text-[#00A651] font-bold">INFOCELL</span>
          </span>
        </Link>

        {/* DESKTOP NAV + SOCIAL */}
        <nav className="hidden lg:flex items-center gap-8 bg-black/30 border border-white/5 px-6 py-2.5 rounded-full shadow-inner shadow-white/5">
          <div className="flex items-center gap-7">
            {navItems.map(renderNavLink)}
          </div>
          
          <div className="h-4 w-px bg-white/10" />

          {/* REDES SOCIAIS - Mais sutis, cores de hover nativas */}
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/hctech" target="_blank" className="text-gray-600 hover:text-pink-500 hover:-translate-y-0.5 transition-all"><Instagram size={17} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all"><Facebook size={17} /></a>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2.5 text-white bg-white/5 rounded-xl border border-white/10 hover:border-[#00A651]/50 hover:bg-[#00A651]/5 transition-all"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#00A651] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#050505] shadow-[0_0_10px_#00A651]">
                  {totalItems}
                </span>
              )}
            </button>
            <a
              href="https://wa.me/5511940562933"
              target="_blank"
              className="bg-[#00A651] text-white px-6 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,166,81,0.35)] hover:shadow-[0_0_30px_rgba(0,166,81,0.6)]"
            >
              ORÇAMENTO
            </a>
          </div>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="relative text-white p-3 bg-white/5 rounded-lg border border-white/10">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#00A651] text-white text-[9px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#0a0a0a] shadow-[0_0_10px_#00A651]">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-3 bg-white/5 rounded-lg border border-white/10 hover:border-[#00A651]/50">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Mais escuro e limpo */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#030303]/98 backdrop-blur-xl border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="p-7 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.href} onClick={() => setMenuOpen(false)}>
                  {item.isRoute ? (
                    <Link to={item.href} className="text-xl font-bold text-white uppercase tracking-[0.2em]">{item.label}</Link>
                  ) : (
                    <a href={isHome ? item.href : `/${item.href}`} className="text-xl font-bold text-white uppercase tracking-[0.2em]">{item.label}</a>
                  )}
                </div>
              ))}
              <div className="flex gap-7 py-5 border-t border-white/5">
                <Instagram className="text-gray-600" />
                <Facebook className="text-gray-400" />
                <span className="text-gray-700 text-xs font-bold uppercase tracking-[0.2em] self-center">HCTECH_INFOCELL</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
