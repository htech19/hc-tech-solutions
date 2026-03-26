import { MessageCircle, ShoppingBag, Zap, ShieldCheck, Clock, Smartphone, Laptop, Target, Flag, Search, Wrench, CheckCircle, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { products } from "@/data/store-products";

const serviceList = [
  { icon: <Smartphone />, title: "Celulares Android", services: ["Troca de tela", "Troca de bateria", "Conector de carga", "Atualização de sistema"] },
  { icon: <Smartphone />, title: "iPhone", services: ["Tela original/premium", "Face ID", "Bateria (sem mensagem)", "Reparo em placa"] },
  { icon: <Laptop />, title: "Notebooks & PCs", services: ["Formatação", "Upgrade SSD/RAM", "Limpeza Interna", "Troca de tela/teclado"] },
  { icon: <Monitor />, title: "Hardware Avançado", services: ["Reparo em placa-mãe", "Reballing", "Troca de chipset", "Montagem PC Gamer"], special: true },
];

const processSteps = [
  { id: "01", title: "CONTATO", description: "Entre em contato pelo WhatsApp. Descreva o problema do seu dispositivo.", icon: <Flag className="w-6 h-6" /> },
  { id: "02", title: "DIAGNÓSTICO", description: "Realizamos uma análise técnica completa e enviamos o orçamento detalhado.", icon: <Search className="w-6 h-6" /> },
  { id: "03", title: "REPARO", description: "Executamos o reparo com peças de alta qualidade e garantia de fábrica.", icon: <Wrench className="w-6 h-6" /> },
  { id: "04", title: "ENTREGA", description: "Dispositivo restaurado e testado rigorosamente antes da devolução.", icon: <CheckCircle className="w-6 h-6" /> },
];

// Filtra apenas os itens marcados como Top Venda no seu store-products.ts
const topProducts = products.filter(p => p.badge === "Top Venda" || p.badge === "Mais Vendido");

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow flex flex-col items-center justify-center px-4 pt-48 pb-24 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] font-black uppercase tracking-widest text-xs">Suporte Especializado em São Bernardo</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase mb-6">
          Assistência Técnica<br/>
          <span className="text-[#00A651]">Premium</span><br/>
          Hardware & Software
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
          Reparos especializados em Apple, Samsung, Xiaomi e Notebooks de todas as marcas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={20} /> Orçamento via WhatsApp
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-white">
            <ShoppingBag size={20} /> Ver Catálogo
          </Link>
        </div>
      </motion.section>

      {/* CARROSSEL DE MAIS VENDIDOS - Efeito Infinito */}
      <section className="py-12 bg-black/20 border-y border-white/5 overflow-hidden">
        <div className="mb-8 px-4 text-center">
          <span className="text-[10px] font-black text-[#00A651] uppercase tracking-[0.3em]">Destaques da Semana</span>
        </div>
        
        <div className="flex overflow-hidden relative group">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Renderiza a lista duas vezes para o efeito infinito */}
            {[...topProducts, ...topProducts].map((p, i) => (
              <div key={i} className="inline-block w-64 glass-card p-4 shrink-0">
                <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4 opacity-80" />
                <h4 className="text-white font-bold text-xs truncate uppercase">{p.name}</h4>
                <p className="text-[#00A651] text-[9px] font-black mt-1">{p.category}</p>
                <a 
                  href={`https://wa.me/5511940562933?text=Olá! Tenho interesse no item: ${p.name}`}
                  className="mt-4 block text-center bg-white/5 hover:bg-[#00A651] text-[8px] font-black py-2 rounded-lg transition-all"
                >
                  CONSULTAR DISPONIBILIDADE
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              <span className="text-white">nossos</span><br/>
              <span className="text-gray-600">Serviços</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                className={`glass-card p-8 space-y-6 flex flex-col ${service.special ? 'border-[#00A651]/40 shadow-[0_0_30px_rgba(0,166,81,0.1)]' : ''}`}
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

      {/* /PROCESSO */}
      <section className="relative py-24 px-4 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-[#00A651]/50 transition-all">
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-[#00A651]/30 text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white transition-all">
                  {step.icon}
                </div>
                <span className="inline-block mb-4 text-[#00A651] font-black text-xs tracking-widest">{step.id}</span>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
