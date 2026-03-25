import { MessageCircle, Smartphone, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    // Aumentamos o pt-32 para pt-44 para garantir que o menu não cubra o texto no mobile e desktop
    <section className="relative min-h-screen flex items-center justify-center pt-44 pb-20 overflow-hidden bg-[#050505]">
      
      {/* BACKGROUND COM GRADIENTE PARA NÃO CONFLITAR COM O TEXTO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00A651]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[#050505]/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* BADGE DE LOCALIZAÇÃO */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 group hover:border-[#00A651]/50 transition-all">
          <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse shadow-[0_0_10px_#00A651]" />
          <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.2em]">SBC & REGIÃO DO ABC</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
          Reparos <br /> 
          <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.3)]">Especializados</span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl mb-12 leading-relaxed font-medium">
          Assistência técnica de alta performance para iPhones e Androids. 
          Troca de telas, baterias e reparos avançados de placa com garantia total.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <a 
            href="https://wa.me/5511940562933" 
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#00A651] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,166,81,0.3)]"
          >
            <MessageCircle size={18} />
            ORÇAMENTO VIA WHATSAPP
          </a>
          <a 
            href="/loja" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-10 py-5 rounded-2xl font-black text-xs tracking-widest hover:bg-white/10 transition-all"
          >
            ACESSAR LOJA
            <ArrowRight size={18} />
          </a>
        </div>

        {/* INDICADORES DE CONFIANÇA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
          <div className="flex items-center justify-center gap-4 group">
            <ShieldCheck className="text-[#00A651] group-hover:scale-110 transition-transform" size={32} />
            <div className="text-left">
              <div className="text-white font-bold text-sm uppercase italic">Garantia Total</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-wider">Peças Homologadas</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 group">
            <Clock className="text-[#00A651] group-hover:scale-110 transition-transform" size={32} />
            <div className="text-left">
              <div className="text-white font-bold text-sm uppercase italic">Express Service</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-wider">Reparos em 40 min</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 group">
            <Smartphone className="text-[#00A651] group-hover:scale-110 transition-transform" size={32} />
            <div className="text-left">
              <div className="text-white font-bold text-sm uppercase italic">Técnico Master</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-wider">+10 Anos de Exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
