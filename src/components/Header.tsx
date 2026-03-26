import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-3xl font-black italic text-green-500 tracking-tighter">
          HC TECH
        </Link>
        
        {/* NAVEGAÇÃO */}
        <nav className="flex gap-8">
          <Link to="/" className="text-xs font-black hover:text-green-500 transition-colors tracking-widest">INÍCIO</Link>
          <Link to="/loja" className="text-xs font-black hover:text-green-500 transition-colors tracking-widest">LOJA</Link>
        </nav>
      </div>
    </header>
  );
}
