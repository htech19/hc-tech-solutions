import React from 'react';
import { motion } from "framer-motion";
import { 
  MessageCircle, ShoppingBag, Zap, Send, Smartphone, 
  Laptop, Monitor, CheckCircle, ShieldCheck, Clock, Award,
  PhoneCall, Search, Settings, Truck, Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/store-products";

const Index = () => {
  const topVendas = products.filter(p => p.badge).length > 0 
    ? products.filter(p => p.badge) 
    : products.slice(0, 10);

  // Logos das marcas (usando URLs de icones simples e limpos)
  const logosMarcas = [
    { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Motorola", url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Motorola_logo.svg" },
    { name: "Xiaomi", url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" },
    { name: "Dell", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    { name: "HP", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Lenovo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
    { name: "Intel", url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg" },
    { name: "Nvidia", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden text-white">
      
      {/* BACKGROUND FIXO */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-45" 
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* HERO SECTION */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8 backdrop-blur-sm">
              <Zap size={14} className="text-[#00A651]" />
              <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-[10px]">SÃO BERNARDO DO CAMPO • SP</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.95] text-white">
              ASSISTÊNCIA TÉCNICA<br/>
              <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.5)]">ESPECIALIZADA</span><br/>
              <span className="text-white/90">CELULARES & NOTEBOOKS</span>
            </h1>

            <div className="flex flex-col gap-6 mt-14 items-center">
              <p className="text-[#00A651] font-black text-[10px] uppercase tracking-[0.4em] mb-[-10px]">
                SOLICITE SEU ORÇAMENTO PELA SUA REDE PREFERIDA
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-3xl px-4">
                <a 
                  href="https://wa.me/5511940562933" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                >
                  <MessageCircle size={24} /> 
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] opacity-80 mb-1 font-bold">Atendimento via</span>
                    <span className="text-sm tracking-tighter font-black">WhatsApp</span>
                  </div>
                </a>

                <a 
                  href="https://t.me/hctechinfocell_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#24A1DE] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(36,161,222,0.3)]"
                >
                  <Send size={24} /> 
                  <div className="flex flex-col items-start leading-none text-left">
                    <span className="text-[10px] opacity-80 mb-1 font-bold">Atendimento via</span>
                    <span className="text-sm tracking-tighter font-black">Telegram</span>
                  </div>
                </a>
              </div>

              <Link 
                to="/loja" 
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-12 py-4 rounded-2xl font-black uppercase text-[10px] text-gray-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm mt-4 tracking-[0.2em]"
              >
                <ShoppingBag size={18} /> ACESSAR NOSSA LOJA
              </Link>
            </div>
          </motion.div>
        </section>

        {/* NOSSOS SERVIÇOS - LEITURA MELHORADA */}
        <section id="servicos" className="py-32 px-8 bg-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-20">
              NOSSOS <span className="text-[#00A651]">SERVIÇOS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Smartphone size={32} />, 
                  title: "Assistência Android", 
                  items: ["Troca de Tela (Original/Premium)", "Troca de Bateria", "Conector de Carga", "Reinstalação de Sistema", "Remoção de Vírus", "Aparelhos que não ligam", "Desbloqueio de Conta"] 
                },
                { 
                  icon: <Zap size={32} />, 
                  title: "Assistência iPhone", 
                  items: ["Telas Premium OLED", "Saúde de Bateria 100%", "Reparo de Face ID", "Loop e Travamentos", "Microsolda em Placa", "Recuperação Total", "Limpeza Interna"] 
                },
                { 
                  icon: <Laptop size={32} />, 
                  title: "Notebooks", 
                  items: ["Upgrade SSD & RAM", "Otimização de Sistema", "Troca de Pasta Térmica", "Teclado e Tela", "Reparo de Dobradiças", "Sistema Corrompido", "Limpeza Química"] 
                },
                { 
                  icon: <Monitor size={32} />, 
                  title: "PCs & Computadores Gamer", 
                  items: ["Montagem Customizada", "Upgrades de Performance", "Cable Management", "Drivers e Bios", "Diagnóstico de Hardware", "Reparo Placa-Mãe", "Reballing Profissional"] 
                },
                { 
                  icon: <Cpu size={32} />, 
                  title: "Serviços Avançados", 
                  items: ["Reparo em Placa Lógica", "Recuperação de Dados", "Remoção FRP e MDM", "Backup e Migração", "Atualização de Firmware", "Correção de Curto"] 
                },
              ].map((service, idx) => (
                <div key={idx} className="p-10 rounded-[32px] bg-[#050505]/80 border border-white/5 text-left hover:border-[#00A651]/40 transition-all group">
                  <div className="w-16 h-16 bg-[#00A651]/10 rounded-2xl flex items-center justify-center mb-8 text-[#00A651] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase italic mb-8 leading-tight tracking-tighter">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold uppercase text-gray-300 tracking-tight">
                        <CheckCircle size={16} className="text-[#00A651] shrink-0 mt-0.5" /> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO DE LOGOS DAS MARCAS */}
        <section className="py-24 bg-white/5 border-y border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 mb-14 text-center">
            <span className="text-[#00A651] font-black text-[10px] uppercase tracking-[0.5em]">Hardware & Software Support</span>
            <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mt-2">MARCAS QUE <span className="text-[#00A651]">ATENDEMOS</span></h3>
          </div>
          
          <div className="relative flex overflow-x-hidden">
            <motion.div 
              className="flex gap-24 whitespace-nowrap items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            >
              {[...logosMarcas, ...logosMarcas].map((logo, i) => (
                <div key={i} className="flex items-center justify-center w-32 md:w-48 grayscale brightness-200 opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                   <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className="h-8 md:h-12 w-auto object-contain pointer-events-none"
                   />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre-nos" className="py-32 px-8 bg-zinc-900/20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-10">
              SOBRE <span className="text-[#00A651]">NÓS</span>
            </h2>
            <p className="text-gray-300 font-medium leading-relaxed uppercase tracking-wide mb-8">
              A HC Tech Infocell é referência em São Bernardo do Campo. Unimos anos de experiência em TI para oferecer suporte especializado em smartphones, notebooks e computadores gamer. Nosso foco é a agilidade, qualidade e transparência total com o cliente.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="text-[#00A651]" size={32} />
                <span className="text-xs font-black uppercase tracking-widest">Garantia</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Clock className="text-[#00A651]" size={32} />
                <span className="text-xs font-black uppercase tracking-widest">Agilidade</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Award className="text-[#00A651]" size={32} />
                <span className="text-xs font-black uppercase tracking-widest">Qualidade</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-32 px-8 border-t border-white/5 text-center">
          <div className="max-w-4xl mx-auto bg-zinc-900/40 p-12 rounded-3xl border border-[#00A651]/20">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-8">PRONTO PARA REPARAR?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5511940562933" target="_blank" className="bg-[#25D366] px-10 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">WhatsApp</a>
              <a href="https://t.me/hctechinfocell_bot" target="_blank" className="bg-[#24A1DE] px-10 py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">Telegram</a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
