import { Instagram, Facebook, Youtube, Send, Link2, MessageSquare, Globe, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/hctechcelulareinfo" },
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/hctechinfocell/" },
    { icon: <Send size={20} />, url: "https://t.me/Hunlockbr" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/channel/UCeF0ILTAnUUBV1TdEteyICA" },
    { icon: <Globe size={20} />, url: "https://hctechinfocell.blogspot.com/" },
    { icon: <Link2 size={20} />, url: "https://linktr.ee/hctechcell" },
    { icon: <MessageSquare size={20} />, url: "https://x.com/HUnlockbr" },
  ];

  return (
    <footer id="contato" className="bg-black/90 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-black italic uppercase">HC<span className="text-[#00A651]">TECH</span></h3>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Excelência em reparos técnicos.</p>
        </div>
        
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Redes Sociais</h4>
          <div className="flex flex-wrap gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#00A651] transition-all">{s.icon}</a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Atendimento Direto</h4>
          <p className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase"><MapPin size={16} className="text-[#00A651]" /> São Bernardo do Campo - SP</p>
          <a href="https://wa.me/5511940562933" target="_blank" className="flex items-center gap-2 text-[#00A651] font-black text-lg">
            <MessageCircle size={24} /> (11) 94056-2933
          </a>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-gray-700 font-black uppercase tracking-[0.4em]">© 2026 HC TECH SOLUTIONS</p>
      </div>
    </footer>
  );
};

export default Footer;
