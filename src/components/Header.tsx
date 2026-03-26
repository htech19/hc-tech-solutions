import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO HC TECH */}
        <Link to="/" className="text-3xl font-black italic text-green-500 tracking-tighter">
          HC TECH
        </Link>
        
        {/* LINKS DE NAVEGAÇÃO VISÍVEIS */}
        <nav className="flex gap-8">
          <Link to="/" className="text-sm font-bold text-white hover:text-green-500 transition-colors">INÍCIO</Link>
          <Link to="/loja" className="text-sm font-bold text-white hover:text-green-500 transition-colors">LOJA</Link>
        </nav>
      </div>
    </header>
  );
}
