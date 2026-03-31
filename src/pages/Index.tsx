import React from 'react';
import { motion } from "framer-motion";
import { 
  MessageCircle, ShoppingBag, Zap, Send, Smartphone, 
  Laptop, Monitor, CheckCircle, ShieldCheck, Clock, Award,
  PhoneCall, Search, Settings, Truck
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

            {/* CTA BUTTONS - WHATSAPP & TELEGRAM */}
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
                    <span className="text-[10px] opacity-80 mb-1">Atendimento via</span>
                    <span className="text-sm tracking-tighter">WhatsApp</span>
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
                    <span className="text-[10px] opacity-80 mb-1">Suporte via Bot</span>
                    <span className="text-sm tracking-tighter">Telegram</span>
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

        {/* PROCESSO - COMO FUNCIONA */}
        <section id="processo-como-funciona" className="py-
