import { MessageCircle, ShoppingBag, Zap, ShieldCheck, Clock, Smartphone, Laptop, Target, Flag, Search, Wrench, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const serviceList = [
  { icon: <Smartphone />, title: "Celulares Android", services: ["Troca de tela", "Troca de bateria", "Conector de carga", "Atualização de sistema"] },
  { icon: <Smartphone />, title: "iPhone", services: ["Tela original/premium", "Face ID", "Bateria (sem mensagem)", "Reparo em placa"] },
  { icon: <Laptop />, title: "Notebooks - Básico", services: ["Formatação", "Upgrade SSD/RAM", "Limpeza Interna", "Troca de tela/teclado"] },
  { icon: <Target />, title: "Notebooks - Avançado", services: ["Reparo em placa-mãe", "Reballing", "Troca de chipset", "Correção de curto"], special: true },
];

const processSteps = [
  { id: "01", title: "CONTATO", description: "Entre em contato pelo WhatsApp ou formulário. Descreva o problema do seu dispositivo.", icon: <Flag className="w-6 h-6" /> },
  { id: "02", title: "DIAGNÓSTICO", description: "Realizamos uma análise técnica completa e enviamos o orçamento detalhado sem compromisso.", icon: <Search className="w-6 h-6" /> },
  { id: "03", title: "REPARO", description: "Executamos o reparo com peças de alta qualidade e acompanhamento em tempo real.", icon: <Wrench className="w-6 h-6" /> },
  { id: "04", title: "ENTREGA", description: "Dispositivo restaurado, testado rigorosamente e devolvido com garantia.", icon: <CheckCircle className="w-6 h-6" /> },
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex-grow flex flex-col items-center justify-center px-4 pt-48 pb-24 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] font-black uppercase tracking-widest text-xs">Atendimento Rápido no ABC</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight uppercase mb-6">
          Assistência Técnica<br/>
          <span className="text-[#00A651]">especializada</span><br/>
          Celulares & Notebooks
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
          Reparos especializados em celulares e notebooks com entrega rápida e suporte VIP no mesmo dia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
          <a href="#servicos" className="bg-[#00A651]/10 border border-[#00A651]/30 text-[#00A651] px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-[#00A651]/20 transition-all w-full sm:w-auto justify-center">
            <Zap size={20} /> Ver Serviços
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-white">
            <ShoppingBag size={20} /> Ver Produtos
          </Link>
        </div>
      </motion.section>

      {/* Serviços */}
      <section id="servicos" className="py-24 px-4 bg-black/30 backdrop-blur-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              <span className="text-white">SOLUÇÕES</span><br/>
              <span className="text-gray-600">COMPLETAS.</span>
            </h2>
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

      {/* /PROCESSO */}
      <section className="relative py-24 px-4 bg-black/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-mono text-[#00A651] tracking-widest uppercase">/PROCESSO</span>
            <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-8">
              COMO<br/>
              <span className="text-gray-600">FUNCIONA.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl border border-white/10 hover:border-[#00A651]/50 transition-all duration-300 bg-white/5 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-[#00A651]/30 text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white group-hover:border-[#00A651] transition-all">
                  {step.icon}
                </div>

                <span className="inline-block mb-4 text-[#00A651] font-black text-xs tracking-widest">
                  {step.id}
                </span>

                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-[#00A651] transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
