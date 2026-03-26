import { MessageCircle, ShoppingBag, Zap, ShieldCheck, Clock, Smartphone, Laptop, Target, Flag, Search, Wrench, CheckCircle, Monitor, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Importação do Footer adicionada
import { products } from "@/data/store-products";

const serviceList = [
  { 
    icon: <Smartphone />, 
    title: "Celulares Android", 
    image: "https://images.unsplash.com/photo-1512054191704-890be9080031?q=80&w=800",
    services: ["Troca de tela", "Troca de bateria", "Conector de carga", "Atualização de sistema"] 
  },
  { 
    icon: <Smartphone />, 
    title: "iPhone Especializado", 
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800",
    services: ["Tela original/premium", "Face ID", "Bateria (sem mensagem)", "Reparo em placa"] 
  },
  { 
    icon: <Laptop />, 
    title: "Notebooks & PCs", 
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800",
    services: ["Formatação", "Upgrade SSD/RAM", "Limpeza Interna", "Troca de tela/teclado"] 
  },
  { 
    icon: <Monitor />, 
    title: "Hardware Avançado", 
    image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=800",
    services: ["Reparo em placa-mãe", "Reballing", "Troca de chipset", "Montagem PC Gamer"], 
    special: true 
  },
];

const processSteps = [
  { id: "01", title: "CONTATO", description: "Entre em contato pelo WhatsApp. Descreva o problema do seu dispositivo.", icon: <Flag className="w-6 h-6" /> },
  { id: "02", title: "DIAGNÓSTICO", description: "Realizamos uma análise técnica completa e enviamos o orçamento detalhado.", icon: <Search className="w-6 h-6" /> },
  { id: "03", title: "REPARO", description: "Executamos o reparo com peças de alta qualidade e garantia de fábrica.", icon: <Wrench className="w-6 h-6" /> },
  { id: "04", title: "ENTREGA", description: "Dispositivo restaurado e testado rigorosamente antes da devolução.", icon: <CheckCircle className="w-6 h-6" /> },
];

const topProducts = products.filter(p => p.badge === "Top Venda" || p.badge === "Mais Vendido");

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section - Escrita Corrigida */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow flex flex-col items-center justify-center px-4 pt-48 pb-24 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] font-black uppercase tracking-widest text-xs">Suporte Especializado em São Bernardo</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase mb-6 italic">
          Assistência Técnica<br/>
          <span className="text-[#00A651]">Especializada</span><br/>
          <span className="text-white">Celulares & Notebooks</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 uppercase tracking-tighter">
          Reparos avançados em hardware e software com garantia de excelência.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contato" className="btn-primary w-full sm:w-auto justify-center px-10 py-5">
            <MessageCircle size={20} /> Consultar Diagnóstico
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black flex items-center gap-2 hover:bg-[#00A651] transition-all w-full sm:w-auto justify-center text-white uppercase text-sm">
            <ShoppingBag size={20} /> Acessar Loja
          </Link>
        </div>
      </motion.section>

      {/* Carrossel Infinito */}
      <section className="py-12 bg-black/20 border-y border-white/5 overflow-hidden">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...topProducts, ...topProducts, ...topProducts].map((p, i) => (
            <div key={i} className="inline-block w-64 glass-card p-4 shrink-0 group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-500 opacity-80" />
                <span className="absolute top-2 left-2 bg-[#00A651] text-white text-[8px] font-black px-2 py-1 rounded uppercase">{p.badge}</span>
              </div>
              <h4 className="text-white font-bold text-xs truncate uppercase tracking-tighter">{p.name}</h4>
              <p className="text-[#00A651] text-[9px] font-black mt-1 uppercase">{p.category}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Seção Nossas Soluções - Fotos Premium */}
      <section id="servicos" className="py-32 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              <span className="text-white">Nossas</span><br/>
              <span className="text-gray-800">Soluções.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceList.map((service, i) => (
              <motion.div key={i} className={`glass-card group overflow-hidden flex flex-col ${service.special ? 'border-[#00A651]/40' : ''}`}>
                <div className="h-48 overflow-hidden">
                   <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-black uppercase italic text-white">{service.title}</h3>
                  <ul className="space-y-2 text-gray-400 text-[11px] font-bold uppercase tracking-tight">
                    {service.services.map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <Zap size={10} className="text-[#00A651]" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fale Conosco - Final da Home */}
      <section id="contato" className="py-32 px-4 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 border-[#00A651]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#00A651]"><MessageCircle size={120} /></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Iniciar Atendimento</h2>
              <p className="text-gray-400 mb-10 font-medium">Envie os detalhes do seu dispositivo para um pré-diagnóstico rápido.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <input type="text" placeholder="SEU NOME" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00A651] text-white font-black text-xs" />
                <input type="text" placeholder="MODELO DO APARELHO" className="bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00A651] text-white font-black text-xs" />
              </div>
              <textarea placeholder="DESCREVA O PROBLEMA" rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00A651] text-white font-black text-xs mb-8"></textarea>
              
              <button className="w-full btn-primary py-5 justify-center text-sm font-black tracking-[0.2em]">
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
