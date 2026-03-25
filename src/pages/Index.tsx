import { MessageCircle, ShoppingBag, Zap, ShieldCheck, Clock, Smartphone, Laptop, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const serviceList = [
  { icon: <Smartphone />, title: "Celulares Android", services: ["Troca de tela", "Troca de bateria", "Conector de carga", "Atualização de sistema"] },
  { icon: <Smartphone />, title: "iPhone", services: ["Tela original/premium", "Face ID", "Bateria (sem mensagem)", "Reparo em placa"] },
  { icon: <Laptop />, title: "Notebooks - Básico", services: ["Formatação", "Upgrade SSD/RAM", "Limpeza Interna", "Troca de tela/teclado"] },
  { icon: <Target />, title: "Notebooks - Avançado", services: ["Reparo em placa-mãe", "Reballing", "Troca de chipset", "Correção de curto"], special: true },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Etapa 2: Hero Section - Novo Visual */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow flex flex-col items-center justify-center px-4 pt-48 pb-24 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">Atendimento Rápido no ABC</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-6">
          Assistência <span className="text-[#00A651] text-glow-green">Premium</span><br/>& Acessórios
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
          Reparos especializados em celulares e notebooks com entrega rápida e suporte VIP no mesmo dia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-white">
            <ShoppingBag size={20} /> Ver Produtos
          </Link>
        </div>
      </motion.section>

      {/* Etapa 3: Destaque e Melhora da Seção Nossos Serviços */}
      <section className="py-24 px-4 bg-black/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-glow-green">Nossos Serviços</h2>
            <p className="text-gray-500 max-w-lg mx-auto mt-4">Soluções completas com qualidade garantida para seus dispositivos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceList.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 space-y-6 flex flex-col ${service.special ? 'border-[#00A651]/40 shadow-[0_0_30px_rgba(0,166,81,0.1)]' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${service.special ? 'bg-[#00A651]/10 text-[#00A651]' : 'bg-white/5 text-gray-400'}`}>
                    {service.icon}
                  </div>
                  {service.special && (
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#00A651] bg-[#00A651]/10 px-3 py-1 rounded-full">Especializado</span>
                  )}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter italic text-white">{service.title}</h3>
                <ul className="space-y-3 flex-grow text-gray-400 text-sm font-medium">
                  {service.services.map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <Zap size={12} className="text-[#00A651]" /> {s}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/5511940562933" target="_blank" className="text-sm font-bold text-[#00A651] hover:underline pt-4">
                  Solicitar Orçamento →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
