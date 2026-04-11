import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Menu, X, Zap, ClipboardList, Grid3X3, ShoppingBag
} from "lucide-react";

const numero = "5511940562933";
function abrirWhatsApp(mensagem = "") {
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`, '_blank');
}

const navLeft = [
  { label: "INÍCIO", href: "/#inicio" },
  { label: "SERVIÇOS", href: "/#servicos" },
  { label: "MARCAS", href: "/#marcas" },
  { label: "SOBRE NÓS", href: "/#sobre-nos" },
  { label: "CONTATO", href: "/#contato" },
];

const navRight = [
  { label: "ORÇAMENTO", href: "/#orcamento", icon: <ClipboardList size={14} /> },
  { label: "PELÍCULAS", href: "/#peliculas", icon: <Grid3X3 size={14} /> },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderLink = (link: { label: string; href: string; icon?: React.ReactNode }, className: string, onClick?: () => void) => {
    const isPage = link.href.startsWith("/") && !link.href.includes("#");
    const content = (
      <>
        {link.icon && link.icon}
        {link.label}
      </>
    );

    if (isPage) {
      return (
        <Link key={link.label} to={link.href} onClick={onClick} className={className}>
          {content}
        </Link>
      );
    }
    return (
      <a key={link.label} href={link.href} onClick={onClick} className={className}>
        {content}
      </a>
    );
  };

  const linkClass = "text-[11px] font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-[0.15em]";
  const btnClass = "flex items-center gap-2 text-[11px] font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-[0.15em] border border-white/20 rounded-lg px-4 py-2 hover:border-white/40";

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/95 backdrop-blur-md">
      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* NAV LEFT */}
        <nav className="hidden lg:flex gap-7 items-center">
          {navLeft.map((link) => renderLink(link, linkClass))}
        </nav>

        {/* NAV RIGHT */}
        <div className="hidden lg:flex gap-3 items-center">
          {navRight.map((link) => renderLink(link, btnClass))}
          <Link
            to="/loja"
            className="flex items-center gap-2 text-[11px] font-black text-white uppercase tracking-[0.15em] bg-[#00A651] rounded-lg px-5 py-2 hover:bg-[#00bf5a] transition-colors"
          >
            <ShoppingBag size={14} />
            LOJA
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <span className="lg:hidden text-xl font-black italic tracking-tighter">
          HC<span className="text-[#00A651]">TECH</span>
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Location bar */}
      <div className="flex justify-center py-1.5">
        <button
          onClick={() => abrirWhatsApp("Olá! Gostaria de solicitar um orçamento.")}
          className="flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#00A651]/15 border border-[#00A651]/30 text-[#00A651] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#00A651]/25 transition-colors cursor-pointer"
        >
          <Zap size={12} />
          SÃO BERNARDO DO CAMPO • SP
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4">
          {navLeft.map((link) =>
            renderLink(link, "block text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest", () => setMobileOpen(false))
          )}
          <div className="border-t border-white/10 pt-4 space-y-3">
            {navRight.map((link) =>
              renderLink(link, "flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-white transition-colors uppercase tracking-widest", () => setMobileOpen(false))
            )}
            <Link
              to="/loja"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm font-black text-white uppercase tracking-widest bg-[#00A651] rounded-lg px-4 py-2 w-fit"
            >
              <ShoppingBag size={16} />
              LOJA
            </Link>
          </div>
          <div className="border-t border-white/10 pt-3">
            <button
              onClick={() => { abrirWhatsApp("Olá! Gostaria de solicitar um orçamento."); setMobileOpen(false); }}
              className="text-[#00A651] text-xs font-bold uppercase tracking-widest"
            >
              📍 São Bernardo do Campo • SP
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
