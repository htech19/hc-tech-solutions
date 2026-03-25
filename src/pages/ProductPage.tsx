import { useState, useMemo } from "react";
import { Search, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { products, categories } from "@/data/store-products";

const ProductPage = () => {
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
    <div className="min-h-screen pb-20 bg-transparent">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 pt-40">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00A651] transition-colors mb-8 font-bold uppercase text-[10px] tracking-widest">
          <ArrowLeft size={14} /> Voltar ao Início
        </Link>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="O que você procura?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all text-white"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-[#00A651] text-white' 
                  : 'bg-white/5 border border-white/10 text-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((p) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="aspect-square relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  {p.badge && (
                    <span className="absolute top-4 left-4 bg-[#00A651] text-white text-[8px] font-black px-2 py-1 rounded uppercase">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[#00A651] text-[9px] font-black uppercase tracking-widest mb-1">{p.category}</p>
                  <h3 className="text-white font-bold mb-6 line-clamp-2 h-12">{p.name}</h3>
                  <a 
                    href={`https://wa.me/5511940562933?text=Olá, tenho interesse no: ${p.name}`}
                    className="flex items-center justify-center gap-2 w-full bg-[#00A651] py-3 rounded-xl text-white font-black text-[10px] uppercase tracking-tighter hover:scale-105 transition-all"
                  >
                    <MessageCircle size={14} /> Consultar
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

export default ProductPage;
