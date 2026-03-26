import { Instagram, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      {/* Barra Superior com Redes Sociais */}
      <div className="bg-green-500 py-1 px-4">
        <div className="max-w-7xl mx-auto flex justify-end gap-4">
          <a 
            href="https://instagram.com/seu_perfil" 
            target="_blank" 
            className="text-black hover:scale-110 transition-transform"
          >
            <Instagram size={16} strokeWidth={3} />
          </a>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            className="text-black hover:scale-110 transition-transform"
          >
            <MessageCircle size={16} strokeWidth={3} />
          </a>
        </div>
      </div>

      {/* Menu Principal */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black italic text-green-500">
          HC TECH
        </Link>
        
        <nav className="flex gap-6">
          <Link to="/" className="text-sm font-bold hover:text-green-500 transition-colors">INÍCIO</Link>
          <Link to="/loja" className="text-sm font-bold hover:text-green-500 transition-colors">LOJA</Link>
        </nav>
      </div>
    </header>
  );
}
