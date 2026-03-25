import { MessageCircle, Smartphone, ShieldCheck, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background simplificado para evitar quebras */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img src="/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse" />
          <span className="text-[#00A651] text-xs font-bold uppercase tracking-widest">Assistência Técnica em SBC</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-tight">
          REPAROS <span className="text-[#00A651]">RÁPIDOS</span> <br />
          CELULARES & NOTEBOOKS
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          Especialista em Apple, Samsung e reparos de placa. <br /> Atendimento ágil com garantia em todos os serviços.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="https://wa.me/5511940562933" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#00A651] text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all"
          >
            <Smartphone size={20} />
            SOLICITAR ORÇAMENTO
          </a>
          <a 
            href="/loja" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all"
          >
            VER LOJA TECH
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/5 pt-10">
          <div>
            <div className="text-[#00A651] text-2xl md:text-3xl font-black italic">5K+</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Reparos</div>
          </div>
          <div>
            <div className="text-[#00A651] text-2xl md:text-3xl font-black italic">98%</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Satisfação</div>
          </div>
          <div>
            <div className="text-[#00A651] text-2xl md:text-3xl font-black italic">1h</div>
            <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">Tempo Médio</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
