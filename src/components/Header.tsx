import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ShoppingCart, Smartphone } from "lucide-react";
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

  const renderNavLink = (item: typeof navItems[0]) => {
    const commonClass = "text-sm font-semibold text-gray-300 hover:text-[#00A651] transition-all duration-300";
    
    if (item.isRoute) {
      return (
        <Link key={item.href} to={item.href} className={commonClass}>
          {item.label}
        </Link>
      );
    }
    const href = isHome ? item.href : `/${item.href}`;
    return (
      <a key={item.href} href={href} className={commonClass}>
        {item.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO ADAPTÁVEL */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#00A651] p-1.5 rounded-lg shadow-[0_0_15px_rgba(0,166,81,0.3)] group-hover:scale-110 transition-transform">
            <Smartphone className="text-white" size={18} />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
            HC TECH <span className="hidden xs:inline text-[#00A651]">INFOCELL</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(renderNavLink)}
          
          <div className="h-6 w-px bg-white/10 mx-2" />

          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-white hover:text-[#00A651] transition-colors"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#0a0a0a]">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href="https://wa.me/5511940562933"
            target="_blank"
            className="bg-[#00A651] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,166,81,0.2)] hover:scale-105 transition-all"
          >
            ORÇAMENTO
          </a>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-white"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-0 -right-0 bg-[#00A651] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#0a0a0a]">
                {totalItems}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-2 bg-white/5 rounded-lg"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#0a0a0a] border-t border-white/5 px-6 py-8 flex flex-col gap-6 shadow-2xl"
        >
          {navItems.map((item) => (
             <div key={item.href} onClick={() => setMenuOpen(false)}>
                {item.isRoute ? (
                  <Link to={item.href} className="text-xl font-bold text-white block">{item.label}</Link>
                ) : (
                  <a href={isHome ? item.href : `/${item.href}`} className="text-xl font-bold text-white block">{item.label}</a>
                )}
             </div>
          ))}
          
          <a
            href="https://wa.me/5511940562933"
            className="flex items-center justify-center gap-3 bg-[#00A651] text-white py-4 rounded-xl font-black mt-4"
          >
            <MessageCircle size={20} />
            WHATSAPP
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
