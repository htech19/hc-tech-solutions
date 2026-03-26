import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black italic">
          HC<span className="text-[#00A651]">TECH</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-[11px] font-black uppercase tracking-widest hover:text-[#00A651]">Início</Link>
          <a href="#servicos" className="text-[11px] font-black uppercase tracking-widest hover:text-[#00A651]">Serviços</a>
          <Link to="/loja" className="text-[11px] font-black uppercase tracking-widest hover:text-[#00A651]">Loja</Link>
          <a href="#contato" className="text-[11px] font-black uppercase tracking-widest hover:text-[#00A651]">Fale Conosco</a>
          
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-6">
            <button onClick={() => setIsOpen(true)} className="relative p-2 text-white hover:text-[#00A651]">
              <ShoppingCart size={22} />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-[#00A651] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
