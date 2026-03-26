import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const location = useLocation();

  const navItems = [
    { label: "Início", href: "/" },
    { label: "Serviços", href: "#servicos" },
    { label: "Loja", href: "/loja" },
    { label: "Fale Conosco", href: "#contato" }, // Alterado conforme solicitado
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-7"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter italic">
          HC<span className="text-[#00A651]">TECH</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-[#00A651] transition-colors">
              {item.label}
            </a>
          ))}
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-white hover:text-[#00A651] transition-colors">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                {totalItems}
              </span>
            )}
          </button>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
