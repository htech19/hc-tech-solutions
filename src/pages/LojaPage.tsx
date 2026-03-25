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
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-glow-green"
          >
            HC TECH STORE
          </motion.h1>

          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20">
            <Zap size={14} className="text-[#00A651]" />
            <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">Entrega no mesmo dia no ABC</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder={`Buscar em ${products.length} produtos...`}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all text-white"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar px-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                    activeCategory === cat 
                    ? 'bg-[#00A651] text-white shadow-lg shadow-[#00A651]/20' 
                    : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card group flex flex-col h-full overflow-hidden"
              >
                <div className="aspect-square relative overflow-hidden bg-black/20">
                  {p.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#00A651] text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                      {p.badge}
                    </div>
                  )}
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[#00A651] text-[9px] font-black uppercase tracking-widest mb-1">{p.category}</span>
                  <h3 className="text-white font-bold text-lg leading-tight mb-6 line-clamp-2">
                    {p.name}
                  </h3>

                  <div className="mt-auto">
                    <a 
                      href={`https://wa.me/5511940562933?text=Olá, tenho interesse no produto: ${p.name}`}
                      target="_blank"
                      className="flex items-center justify-between w-full bg-white/5 border border-white/10 group-hover:bg-[#00A651] group-hover:border-[#00A651] px-5 py-4 rounded-2xl transition-all duration-300"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-white">Consultar</span>
                      <MessageCircle size={16} className="text-[#00A651] group-hover:text-white" />
                    </a>
                  </div>
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
