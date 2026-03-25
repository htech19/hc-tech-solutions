import { MessageCircle, Smartphone, ShieldCheck, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-48 pb-20 bg-[#050505]">
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse" />
          <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">SBC & ABC</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight uppercase">
          REPAROS <span className="text-[#00A651]">RÁPIDOS</span> <br />
          CELULARES & NOTEBOOKS
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed font-medium">
          Assistência técnica de alta performance em São Bernardo do Campo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="https://wa.me/5511940562933" 
            target="_blank"
            className="flex items-center justify-center gap-3 bg-[#00A651] text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-[#00A651]/20"
          >
            <MessageCircle size={20} />
            WHATSAPP
          </a>
          <a 
            href="/loja" 
            className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all"
          >
            VER LOJA
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/5 pt-10 text-[#00A651] font-black italic">
          <div>5K+ <span className="block text-gray-600 text-[9px] not-italic uppercase tracking-widest">Reparos</span></div>
          <div>98% <span className="block text-gray-600 text-[9px] not-italic uppercase tracking-widest">Sucesso</span></div>
          <div>1H <span className="block text-gray-600 text-[9px] not-italic uppercase tracking-widest">Média</span></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
