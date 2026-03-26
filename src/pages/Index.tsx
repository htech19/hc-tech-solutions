import { MessageCircle, Zap, Smartphone, Laptop, Monitor, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
            Assistência Técnica<br/>
            <span className="text-[#00A651] text-glow-green">Especializada</span><br/>
            <span className="text-white">Celulares & Notebooks</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary">
              <MessageCircle size={20} /> Fale Conosco
            </a>
            <Link to="/loja" className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-[#00A651] transition-all uppercase text-sm">
              Acessar Loja
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Nossas Soluções - Fotos Premium */}
      <section id="servicos" className="py-24 px-6 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 uppercase italic">Nossas <span className="text-[#00A651]">Soluções</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-duration-500" />
              <div className="p-8">
                <h3 className="text-xl font-black uppercase text-white">Smartphones</h3>
                <p className="text-gray-400 text-sm mt-2">Reparos avançados em telas e placas Apple e Android.</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-duration-500" />
              <div className="p-8">
                <h3 className="text-xl font-black uppercase text-white">Notebooks</h3>
                <p className="text-gray-400 text-sm mt-2">Manutenção preventiva, SSD e reparos de carcaça.</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&q=80&w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-duration-500" />
              <div className="p-8">
                <h3 className="text-xl font-black uppercase text-white">Hardware Gamer</h3>
                <p className="text-gray-400 text-sm mt-2">Montagem técnica e diagnóstico de alto nível.</p>
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
