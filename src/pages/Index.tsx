import { MessageCircle, ShoppingBag, Zap, Send, Smartphone, Laptop, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/store-products"; 

const HomePage = () => {
  // Filtra produtos para o carrossel (prioriza os que têm badge)
  const topVendas = products.filter(p => p.badge).length > 0 
    ? products.filter(p => p.badge) 
    : products.slice(0, 10);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
            <Zap size={14} className="text-[#00A651]" />
            <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-[10px]">SÃO BERNARDO DO CAMPO • SP</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
            ASSISTÊNCIA TÉCNICA<br/>
            <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.5)]">ESPECIALIZADA</span><br/>
            <span className="text-white/90">CELULARES & NOTEBOOKS</span>
          </h1>
          
          <p className="mt-10 text-gray-500 font-bold uppercase tracking-widest text-sm md:text-base max-w-2xl mx-auto">
            Reparos avançados em hardware, micro-soldagem e software com garantia de excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-14 justify-center">
            <a href="https://wa.me/5511940562933" target="_blank" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#00A651] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all">
              <MessageCircle size={22} /> ORÇAMENTO RÁPIDO
            </a>
            <Link to="/loja" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black uppercase text-sm text-white hover:bg-white/10 transition-all">
              <ShoppingBag size={22} /> ACESSAR LOJA
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CARROSSEL INFINITO */}
      <section className="py-24 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12 px-8 flex justify-between items-end">
          <div>
            <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Vitrine Tech</span>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white mt-2">
              DESTAQUES <span className="text-[#00A651]">HC TECH</span>
            </h2>
          </div>
          <Link to="/loja" className="text-[10px] font-black text-gray-500 hover:text-[#00A651] uppercase tracking-widest transition-colors border-b border-gray-800 pb-1">Ver todos</Link>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...topVendas, ...topVendas, ...topVendas].map((p, i) => (
              <div key={i} className="inline-block w-72 md:w-96 glass-card p-6 shrink-0 group border border-white/5 rounded-3xl bg-white/[0.02]">
                <div className="relative h-56 md:h-72 mb-6 overflow-hidden rounded-2xl bg-black">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-[#00A651] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-xl">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="space-y-1 px-2">
                  <span className="text-[#00A651] text-[10px] font-black uppercase tracking-[0.2em]">{p.category}</span>
                  <h4 className="text-white font-black text-lg truncate uppercase italic tracking-tighter">{p.name}</h4>
                  <a 
                    href={`https://wa.me/5511940562933?text=Olá! Tenho interesse no item: ${p.name}`}
                    target="_blank"
                    className="mt-6 w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-center block hover:bg-[#00A651] hover:text-white transition-all uppercase tracking-widest"
                  >
                    CONSULTAR PREÇO
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden group border border-white/5 rounded-3xl bg-white/[0.01]">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50" />
              </div>
              <div className="p-10">
                <div className="bg-[#00A651] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Smartphones</h3>
                <p className="text-gray-500 text-sm mt-4 font-bold uppercase leading-relaxed tracking-tight">Troca de telas, baterias e reparos em placa com micro-soldagem.</p>
              </div>
            </div>

            <div className="glass-card overflow-hidden group border border-white/5 rounded-3xl bg-white/[0.01]">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50" />
              </div>
              <div className="p-10">
                <div className="bg-[#00A651] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Laptop className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Computadores</h3>
                <p className="text-gray-500 text-sm mt-4 font-bold uppercase leading-relaxed tracking-tight">Manutenção preventiva, upgrades (SSD/RAM) e recuperação de dados.</p>
              </div>
            </div>

            <div className="glass-card overflow-hidden group border border-[#00A651]/30 rounded-3xl bg-[#00A651]/5">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517336712672-477551799003?w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50" />
              </div>
              <div className="p-10">
                <div className="bg-[#00A651] w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Qualidade HC</h3>
                <p className="text-gray-500 text-sm mt-4 font-bold uppercase leading-relaxed tracking-tight">Garantia total em todos os serviços e peças de primeira linha.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO FALE CONOSCO */}
      <section id="contato" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 border-[#00A651]/20 relative overflow-hidden bg-white/[0.02] rounded-3xl">
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Iniciar Atendimento</h2>
              <p className="text-gray-500 mb-10 font-bold uppercase text-xs tracking-widest">Envie os detalhes do seu dispositivo para um pré-diagnóstico rápido.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <input type="text" placeholder="SEU NOME" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs transition-colors" />
                <input type="text" placeholder="MODELO DO APARELHO" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs transition-colors" />
              </div>
              <textarea placeholder="DESCREVA O PROBLEMA" rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs mb-8 transition-colors"></textarea>
              
              <button className="w-full py-6 bg-[#00A651] hover:scale-[1.02] transition-all text-white rounded-2xl flex items-center justify-center gap-3 text-sm font-black tracking-[0.2em]">
                <Send size={18} /> ENVIAR VIA WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
