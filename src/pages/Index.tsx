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
  const logosMarcas = [
    { name: "Apple", url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { name: "Samsung", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Motorola", url: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Motorola_logo.svg" },
    { name: "Xiaomi", url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Xiaomi_logo_%282021-%29.svg" },
    { name: "Dell", url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg" },
    { name: "HP", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { name: "Lenovo", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg" },
    { name: "Intel", url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282020%29.svg" },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden text-white">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/hero-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Header />

        {/* HERO - MAIS COMPACTO */}
        <section id="inicio" className="min-h-[85vh] flex items-center justify-center px-6 text-center pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-6">
              <Zap size={12} className="text-[#00A651]" />
              <span className="text-[#00A651] font-black uppercase tracking-[0.2em] text-[9px]">SÃO BERNARDO DO CAMPO • SP</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-tight mb-8">
              ASSISTÊNCIA <span className="text-[#00A651]">ESPECIALIZADA</span><br/>
              <span className="text-white/80 text-2xl md:text-3xl">CELULARES & NOTEBOOKS</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <a href="https://wa.me/5511940562933" target="_blank" className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] rounded-xl hover:scale-105 transition-all">
                <MessageCircle size={20} /> <span className="text-sm font-black uppercase italic">WhatsApp</span>
              </a>
              <a href="https://t.me/hctechinfocell_bot" target="_blank" className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#24A1DE] rounded-xl hover:scale-105 transition-all">
                <Send size={20} /> <span className="text-sm font-black uppercase italic">Telegram</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* SERVIÇOS - GRADE OTIMIZADA */}
        <section id="servicos" className="py-20 px-6 bg-zinc-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-center uppercase italic mb-12 tracking-tighter">
              NOSSOS <span className="text-[#00A651]">SERVIÇOS</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Smartphone size={24} />, title: "Android", items: ["Telas Originais", "Baterias", "Conector", "Software"] },
                { icon: <Zap size={24} />, title: "iPhone", items: ["Telas OLED", "Saúde 100%", "Face ID", "Placa"] },
                { icon: <Laptop size={24} />, title: "Notebooks", items: ["SSD & RAM", "Limpeza", "Teclado", "Dobradiça"] },
                { icon: <Monitor size={24} />, title: "PCs & Gamer", items: ["Montagem", "Upgrade", "Drivers", "Reballing"] },
                { icon: <Cpu size={24} />, title: "Avançados", items: ["Microsolda", "Dados", "FRP/MDM", "Curto em Placa"] },
              ].map((service, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-black/60 border border-white/5 hover:border-[#00A651]/40 transition-all">
                  <div className="text-[#00A651] mb-4">{service.icon}</div>
                  <h3 className="text-lg font-black uppercase italic mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400">
                        <CheckCircle size={12} className="text-[#00A651]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOGOS - MAIS DISCRETOS */}
        <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
          <div className="flex overflow-x-hidden">
            <motion.div className="flex gap-16 whitespace-nowrap items-center" animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }}>
              {[...logosMarcas, ...logosMarcas].map((logo, i) => (
                <img key={i} src={logo.url} alt={logo.name} className="h-6 md:h-8 grayscale opacity-40 hover:opacity-100 transition-all" />
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTATO - COMPACTO */}
        <section id="contato" className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto bg-zinc-900/50 p-8 rounded-3xl border border-[#00A651]/20">
            <h2 className="text-2xl font-black uppercase italic mb-6">SOLICITE UM ORÇAMENTO</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/5511940562933" className="bg-[#25D366] px-8 py-3 rounded-lg text-xs font-black uppercase tracking-widest">WhatsApp</a>
              <a href="https://t.me/hctechinfocell_bot" className="bg-[#24A1DE] px-8 py-3 rounded-lg text-xs font-black uppercase tracking-widest">Telegram</a>
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
