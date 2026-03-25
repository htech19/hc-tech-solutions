import { useState, useMemo } from "react";
import { Search, Zap, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { products, categories } from "@/data/store-products";

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "Todos" || p.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <section className="pt-48 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#00A651]"
            style={{ textShadow: '0 0 20px rgba(0, 166, 81, 0.5)' }}
          >
            HC TECH STORE
          </motion.h1>

          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20">
            <Zap size={14} className="text-[#00A651]" />
            <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">Entrega no ABC</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Buscar no catálogo..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all text-white"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:border-[#00A651]/40 transition-all group"
              >
                <div className="aspect-square relative overflow-hidden bg-black/20">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                </div>
                <div className="p-6">
                  <span className="text-[#00A651] text-[9px] font-black uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-bold text-lg leading-tight mt-1 mb-6 line-clamp-2">{p.name}</h3>
                  <a 
                    href={`https://wa.me/5511940562933?text=Interesse: ${p.name}`}
                    target="_blank"
                    className="flex items-center justify-between w-full bg-[#00A651] text-white px-5 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all"
                  >
                    Consultar <MessageCircle size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default LojaPage;
