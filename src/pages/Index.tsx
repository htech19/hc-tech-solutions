import { MessageCircle, Smartphone, Laptop, Monitor, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero - Escrita 1 Corrigida */}
      <section className="min-h-screen flex items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-tight">
            Assistência Técnica<br/>
            <span className="text-[#00A651] text-glow-green">Especializada</span><br/>
            <span className="text-white">Celulares & Notebooks</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary">
              <MessageCircle size={20} /> Fale Conosco
            </a>
            <Link to="/loja" className="bg-white/10 px-8 py-4 rounded-2xl font-black uppercase text-sm border border-white/10 hover:bg-white/20 transition-all">
              Acessar Loja
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Nossas Soluções - Escrita 2 Corrigida + Fotos Premium */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 uppercase italic">Nossas <span className="text-[#00A651]">Soluções</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="p-8">
                <h3 className="text-xl font-black text-white uppercase italic">Reparos Apple & Android</h3>
                <p className="text-gray-400 text-sm mt-3">Troca de telas, baterias e reparos avançados em placas.</p>
              </div>
            </div>
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="p-8">
                <h3 className="text-xl font-black text-white uppercase italic">Notebooks & PCs</h3>
                <p className="text-gray-400 text-sm mt-3">Manutenção preventiva, SSD e recuperação de sistemas.</p>
              </div>
            </div>
            <div className="glass-card group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="p-8">
                <h3 className="text-xl font-black text-white uppercase italic">Micro-soldagem</h3>
                <p className="text-gray-700 text-sm mt-3 font-bold uppercase tracking-tighter">Diagnóstico técnico com equipamentos de precisão.</p>
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
