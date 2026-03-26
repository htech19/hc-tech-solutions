import { Facebook, Instagram, Youtube, Send, Link2, MessageSquare, Globe } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: <Facebook />, url: "https://www.facebook.com/hctechcelulareinfo" },
    { icon: <Instagram />, url: "https://www.instagram.com/hctechinfocell/" },
    { icon: <Send />, url: "https://t.me/Hunlockbr" },
    { icon: <Youtube />, url: "https://www.youtube.com/channel/UCeF0ILTAnUUBV1TdEteyICA" },
    { icon: <Globe />, url: "https://hctechinfocell.blogspot.com/" },
    { icon: <Link2 />, url: "https://linktr.ee/hctechcell" },
    { icon: <MessageSquare />, url: "https://x.com/HUnlockbr" },
  ];

  return (
    <footer id="contato" className="bg-black/90 border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-black italic mb-4">HC<span className="text-[#00A651]">TECH</span></h3>
          <p className="text-gray-500 text-sm uppercase font-bold tracking-tighter">Assistência técnica especializada no ABC. Qualidade Oakley-style para seu dispositivo.</p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-4 text-xs tracking-widest underline decoration-[#00A651] underline-offset-8">Redes Sociais</h4>
          <div className="flex flex-wrap gap-4">
            {socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-[#00A651] hover:text-white transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-black uppercase mb-4 text-xs tracking-widest underline decoration-[#00A651] underline-offset-8">Contato</h4>
          <p className="text-gray-400 text-sm font-bold tracking-tighter uppercase">São Bernardo do Campo - SP</p>
          <p className="text-[#00A651] font-black mt-2">(11) 94056-2933</p>
        </div>
      </div>
      <div className="text-center border-t border-white/5 pt-8">
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.5em]">© 2026 HC TECH SOLUTIONS</p>
      </div>
    </footer>
  );
};

export default Footer;
