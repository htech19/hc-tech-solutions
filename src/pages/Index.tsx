import { MessageCircle, ShoppingBag, Zap, Flag, Search, Wrench, CheckCircle, Smartphone, Laptop, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
// Importe seus dados limpos e sem duplicados aqui
// import { products } from "@/data/store-products"; 

// --- DADOS TEMPORÁRIOS DE DESTAQUE (Unsplash Alta Qualidade) ---
// Utilize estes ou os dados filtrados do seu store-products.ts
const featuredProducts = [
  { id: 1, name: "Fone Bluetooth KD-790", category: "Áudio Premium", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800" },
  { id: 167, name: "Smartwatch Kw62max Original", category: "Vestíveis", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=800" },
  { id: 101, name: "Carregador 20w Tipo C", category: "Energia", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800" },
  { id: 300, name: "Drone Al-2725 Profissional", category: "Fotografia Aérea", image: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?w=800" },
];

const serviceList = [
  { icon: <Smartphone />, title: "Celulares Android", services: ["Troca de tela", "Bateria", "Conector", "Software"] },
  { icon: <Smartphone />, title: "iPhone", services: ["Tela Premium", "Face ID", "Bateria", "Placa"] },
  { icon: <Laptop />, title: "Notebooks & PCs", services: ["Formatação", "Upgrade SSD", "Limpeza", "Reparo Placa"] },
  { icon: <Monitor />, title: "Hardware Gamer", services: ["Montagem PC", "Watercooling", "Overclock", "Diagnóstico"], special: true },
];

const processSteps = [
  { id: "01", title: "CONTATO", description: "Entre em contato pelo WhatsApp. Descreva o problema do seu dispositivo.", icon: <Flag className="w-7 h-7" /> },
  { id: "02", title: "DIAGNÓSTICO", description: "Realizamos uma análise técnica completa e enviamos o orçamento detalhado.", icon: <Search className="w-7 h-7" /> },
  { id: "03", title: "REPARO", description: "Executamos o reparo com peças de alta qualidade e garantia de fábrica.", icon: <Wrench className="w-7 h-7" /> },
  { id: "04", title: "ENTREGA", description: "Dispositivo restaurado e testado rigorosamente antes da devolução.", icon: <CheckCircle className="w-7 h-7" /> },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow flex flex-col items-center justify-center px-4 pt-48 pb-24 text-center bg-[url('/grid-bg.png')] bg-repeat"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-12">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] font-black uppercase tracking-widest text-xs">Suporte Técnico no Grande ABC</span>
        </div>

        {/* Título Corrigido Conforme Imagem 1 */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight uppercase mb-8">
          <span className="text-white text-glow">PICLES</span><br/>
          <span className="text-[#00A651] text-glow-green">Soluções</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-16">
          A HC Tech oferece reparos de alta qualidade para Apple, Samsung e Notebooks com atendimento rápido e VIP.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940562933" target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={20} /> Orçamento via WhatsApp
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-white">
            <ShoppingBag size={20} /> Ver Catálogo
          </Link>
        </div>
      </motion.section>

      {/* CARROSSEL INFINITO (Preenche a tela) */}
      <section className="py-16 bg-black/40 border-y border-white/5">
        <div className="mb-10 px-4 text-center">
          <span className="text-[11px] font-black text-[#00A651] uppercase tracking-[0.4em]">Mais Procurados</span>
        </div>
        
        <div className="w-full overflow-hidden relative group">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {/* Renderiza a lista duas vezes para o efeito infinito */}
            {[...featuredProducts, ...featuredProducts].map((p, i) => (
              <div key={i} className="inline-block w-72 h-[420px] glass-card p-6 shrink-0 relative overflow-hidden group/card">
                <img src={p.image} alt={p.name} className="w-full h-56 object-cover rounded-2xl mb-6 opacity-90 group-hover/card:scale-105 transition-transform duration-700" />
                <h4 className="text-white font-bold text-sm md:text-base truncate uppercase tracking-tight">{p.name}</h4>
                <p className="text-[#00A651] text-[10px] font-black mt-2 uppercase tracking-widest">{p.category}</p>
                
                <a 
                  href={`https://wa.me/5511940562933?text=Olá HC Tech! Tenho interesse no item: ${p.name}`}
                  className="absolute bottom-6 left-6 right-6 text-center bg-[#00A651] hover:scale-105 text-[9px] font-black py-3 rounded-xl transition-all"
                >
                  CONSULTAR DISPONIBILIDADE
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serviços (Imagem 1) */}
      <section id="servicos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              <span className="text-white text-glow">HARDWARE</span><br/>
              <span className="text-gray-700">& REPAROS.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                className={`glass-card p-8 space-y-6 flex flex-col ${service.special ? 'border-[#00A651]/60 shadow-[0_0_40px_rgba(0,166,81,0.2)]' : ''}`}
              >
                <div className={`p-4 w-fit rounded-2xl ${service.special ? 'bg-[#00A651]/10 text-[#00A651]' : 'bg-white/5 text-gray-400'}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white">{service.title}</h3>
                <ul className="space-y-3 flex-grow text-gray-400 text-sm font-medium">
                  {service.services.map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <Zap size={12} className="text-[#00A651]" /> {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* /PROCESSO - COMO FUNCIONA (Imagem 2 EXATA) */}
      <section id="processo" className="relative py-28 px-4 bg-[#0A0A0A] border-t border-white/5 bg-[url('/grid-dark.png')] bg-repeat">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-xs font-mono text-[#00CED1] tracking-widest uppercase">/PROCESSO</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mt-5 mb-10 tracking-tight leading-tight uppercase">
              COMO<br/>
              <span className="text-gray-700">FUNCIONA.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="group relative p-9 rounded-3xl border border-white/10 bg-black/40 hover:border-[#00CED1]/50 transition-all duration-300">
                <div className="mb-8 inline-flex items-center justify-center w-14 h-14 rounded-xl border border-[#00CED1]/30 text-[#00CED1] group-hover:bg-[#00CED1] group-hover:text-black transition-all">
                  {step.icon}
                </div>
                <span className="inline-block mb-4 text-[#00CED1] font-black text-sm tracking-widest">{step.id}</span>
                <h3 className="text-2xl font-black text-white mb-5 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-[#00CED1] transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
