import { MessageCircle, ShoppingBag, Zap, Send, Smartphone, Laptop, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Importando seus novos dados do storage-products
import { products } from "@/data/store-products"; 

const HomePage = () => {
  // Filtramos os produtos que têm "badge" ou selecionamos os principais para o carrossel
  const topVendas = products.filter(p => p.badge).length > 0 
    ? products.filter(p => p.badge) 
    : products.slice(0, 10);

  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">
            Assistência Técnica<br/>
            <span className="text-[#00A651] text-glow-green">Especializada</span><br/>
            <span className="text-white">Celulares & Notebooks</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary">
              <MessageCircle size={20} /> Fale Conosco
            </a>
            <Link to="/loja" className="bg-white/10 px-8 py-4 rounded-2xl font-black uppercase text-sm border border-white/10 hover:bg-[#00A651] transition-all">
              Acessar Loja
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CARROSSEL INFINITO - Agora ocupando toda a tela */}
      <section className="py-20 bg-black/40 border-y border-white/5 overflow-hidden">
        <div className="mb-12 px-6">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">
            Destaques <span className="text-[#00A651]">HC TECH</span>
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Duplicamos a lista ([...topVendas, ...topVendas]) para o loop não ter fim visual */}
            {[...topVendas, ...topVendas, ...topVendas].map((p, i) => (
              <div key={i} className="inline-block w-64 md:w-80 glass-card p-6 shrink-0 group">
                <div className="relative h-48 md:h-64 mb-6 overflow-hidden rounded-2xl">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {p.badge && (
                    <span className="absolute top-3 left-3 bg-[#00A651] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                      {p.badge}
                    </span>
                  )}
                </div>
                <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">{p.category}</span>
                <h4 className="text-white font-bold text-sm md:text-base mt-1 truncate uppercase">{p.name}</h4>
                <a 
                  href={`https://wa.me/5511940562933?text=Olá! Tenho interesse no item: ${p.name}`}
                  target="_blank"
                  className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-center block hover:bg-[#00A651] transition-all"
                >
                  CONSULTAR PREÇO
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nossas Soluções (Serviços) */}
      <section id="servicos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-16 uppercase italic">Nossas <span className="text-[#00A651]">Soluções</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800" className="h-64 w-full object-cover group-hover:scale-110 transition-all duration-700" />
              <div className="p-8">
                <h3 className="text-xl font-black text-white uppercase italic">Reparos Especializados</h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">Troca de telas, baterias e reparos avançados em placas Apple e Android.</p>
              </div>
            </div>
            {/* Adicione os outros 2 cards de serviço conforme necessário */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
