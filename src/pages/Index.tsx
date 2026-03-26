import { MessageCircle, Zap, Flag, Search, Wrench, CheckCircle, Smartphone, Laptop, Monitor, Send, Youtube, Instagram, Facebook, Link as LinkIcon, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />

      {/* HERO SECTION - Jogo de Cores Atualizado */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
            Assistência Técnica<br/>
            <span className="text-[#00A651] text-glow-green font-black">Especializada</span><br/>
            <span className="text-white">Celulares & Notebooks</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
            <a href="#contato" className="btn-primary px-10 py-5 text-sm">
              <MessageCircle size={20} /> Fale Conosco
            </a>
            <Link to="/loja" className="bg-white/5 border border-white/20 px-10 py-5 rounded-2xl font-black text-sm hover:bg-white/10 transition-all uppercase tracking-widest text-white">
              Ver Produtos
            </Link>
          </div>
        </motion.div>
      </section>

      {/* NOSSAS SOLUÇÕES - Imagens Premium */}
      <section id="servicos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-20 uppercase italic tracking-tighter">
            Nossas <span className="text-gray-600">Soluções.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1000" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Microscopia" />
              <div className="p-8">
                <h3 className="text-2xl font-black text-white uppercase italic">Reparos de Placa</h3>
                <p className="text-gray-400 mt-4 text-sm font-medium">Micro-soldagem avançada e reballing com precisão industrial.</p>
              </div>
            </div>
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Notebook" />
              <div className="p-8">
                <h3 className="text-2xl font-black text-white uppercase italic">Notebooks Gamer</h3>
                <p className="text-gray-400 mt-4 text-sm font-medium">Upgrades de performance e manutenção preventiva especializada.</p>
              </div>
            </div>
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000" className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iPhone" />
              <div className="p-8">
                <h3 className="text-2xl font-black text-white uppercase italic">Ecossistema Apple</h3>
                <p className="text-gray-400 mt-4 text-sm font-medium">Telas, baterias e FaceID mantendo a originalidade do dispositivo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FALE CONOSCO - ESTILO TERMINAL (Imagem 3) */}
      <section id="contato" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="terminal-window">
            <div className="bg-white/10 px-4 py-2 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[10px] text-gray-400 ml-4 font-mono uppercase tracking-widest">hctech@diagnosis:~&_</span>
            </div>
            <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Enviar Diagnóstico</h2>
                <div className="space-y-4">
                  <input type="text" placeholder="NOME_USUARIO" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00CED1] transition-all font-mono text-sm text-[#00CED1]" />
                  <input type="text" placeholder="DISPOSITIVO_MODELO" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00CED1] transition-all font-mono text-sm text-[#00CED1]" />
                  <textarea placeholder="DESCREVA_O_PROBLEMA..." rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-[#00CED1] transition-all font-mono text-sm text-[#00CED1]"></textarea>
                  <button className="w-full bg-[#00CED1] hover:bg-[#008b8b] text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all uppercase text-xs tracking-[0.2em]">
                    <Send size={18} /> EXECUTAR_ENVIO
                  </button>
                </div>
              </div>
              <div className="space-y-8 font-mono">
                <div className="p-6 border border-[#00CED1]/20 rounded-2xl bg-[#00CED1]/5">
                  <h4 className="text-[#00CED1] text-xs font-black mb-4 uppercase tracking-[0.3em]">// CANAL_DIRETO</h4>
                  <a href="https://wa.me/5511940562933" target="_blank" className="text-2xl text-white font-black hover:text-[#00CED1] transition-all">(11) 94056-2933</a>
                </div>
                <div className="space-y-4 text-sm">
                  <p className="text-gray-400"><span className="text-white uppercase font-black">Localização:</span> São Bernardo do Campo - SP</p>
                  <p className="text-gray-400"><span className="text-white uppercase font-black">Status:</span> Disponível para Reparos Rápidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
