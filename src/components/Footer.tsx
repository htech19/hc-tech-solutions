import { Instagram, Facebook, Youtube, Send, Link2, Monitor, MapPin, Phone, Clock, MessageSquare } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/hctechcelulareinfo", color: "hover:text-blue-600" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/hctechinfocell/", color: "hover:text-pink-500" },
    { icon: <Send size={24} />, href: "https://t.me/Hunlockbr", color: "hover:text-sky-500" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/channel/UCeF0ILTAnUUBV1TdEteyICA", color: "hover:text-red-600" },
    { icon: <Link2 size={24} />, href: "https://linktr.ee/hctechcell", color: "hover:text-green-500" },
    { icon: <MessageSquare size={24} />, href: "https://x.com/HUnlockbr", color: "hover:text-white" }
  ];

  return (
    <footer className="bg-black/90 border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Coluna 1: Logo */}
        <div className="space-y-6">
          <h3 className="text-3xl font-black italic tracking-tighter">HC<span className="text-[#00A651]">TECH</span></h3>
          <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-tighter">
            Assistência técnica especializada com foco em alta performance e transparência total no Grande ABC.
          </p>
        </div>

        {/* Coluna 2: Links */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Links Rápidos</h4>
          <ul className="space-y-4 text-sm font-bold text-gray-500">
            <li><a href="/" className="hover:text-[#00A651] transition-colors uppercase">Início</a></li>
            <li><a href="#servicos" className="hover:text-[#00A651] transition-colors uppercase">Serviços</a></li>
            <li><a href="#contato" className="hover:text-[#00A651] transition-colors uppercase">Fale Conosco</a></li>
            <li><a href="/loja" className="hover:text-[#00A651] transition-colors uppercase">Catálogo</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contacto */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Contacto</h4>
          <div className="space-y-4 text-sm text-gray-500 font-bold uppercase">
            <p className="flex items-center gap-3"><MapPin size={16} className="text-[#00A651]" /> São Bernardo do Campo, SP</p>
            <p className="flex items-center gap-3"><Phone size={16} className="text-[#00A651]" /> (11) 94056-2933</p>
            <p className="flex items-center gap-3"><Clock size={16} className="text-[#00A651]" /> Seg - Sex: 09h às 18h</p>
          </div>
        </div>

        {/* Coluna 4: Redes Sociais Grandes */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Social Media</h4>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} target="_blank" rel="noreferrer" className={`text-gray-600 transition-all transform hover:scale-125 ${link.color}`}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-700">
          © {new Date().getFullYear()} HC TECH SOLUTIONS - HARDWARE SPECIALISTS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
