import { useState, useMemo } from "react";
import { Search, ShoppingBag, Package, ArrowRight, X, Smartphone, Laptop, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

// Mock de produtos - Você pode expandir esta lista
const products = [
  { id: 1, name: "Tela iPhone 13 Pro Max OLED", price: "1.250", category: "Telas", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?w=500", badge: "Premium" },
  { id: 2, name: "Bateria MacBook Air M1 A2337", price: "580", category: "Baterias", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", badge: "Original" },
  { id: 3, name: "Carregador 20W Apple USB-C", price: "149", category: "Acessórios", image: "https://images.unsplash.com/photo-1583860812120-4f29b77a06a3?w=500" },
  { id: 4, name: "SSD NVMe 1TB High Performance", price: "420", category: "Hardware", image: "https://images.unsplash.com/photo-1597872200370-49633939e60a?w=500", badge: "Promo" },
];

const categories = ["Todos", "Telas", "Baterias", "Acessórios", "Hardware"];

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "Todos" || p.category === activeCategory;
      return matchName && matchCategory;
    });
  }, [search, activeCategory]);

  const handleWhatsApp = (name: string) => {
    const text = `Olá! Tenho interesse no produto: *${name}*`;
    window.open(`https://wa.me/5511940562933?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12 font-sans">
      <Header />

      {/* BANNER DE CABEÇALHO */}
      <div className="relative border-b border-white/5 bg-[#080808]/50 backdrop-blur-xl mb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00A651]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#00A651]" />
            <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-[10px]">Catálogo Oficial</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none uppercase">
            HC TECH <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.3)]">STORE</span>
          </h1>
          <p className="text-gray-500 max-w-lg font-medium">Componentes de alta qualidade e acessórios premium para seus dispositivos Apple e Android.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* FILTROS E BUSCA */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#00A651] transition-colors" size={20} />
            <input
              type="text"
              placeholder="O que você procura?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#00A651]/50 focus:bg-black transition-all"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat ? "bg-[#00A651] text-white shadow-[0_0_20px_rgba(0,166,81,0.4)]" : "bg-white/5 text-gray-500 border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUTOS */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#0c0c0c] rounded-[32px] border border-white/5 overflow-hidden hover:border-[#00A651]/40 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden relative bg-black">
                  {product.badge && (
                    <span className="absolute top-4 left-4 z-20 bg-[#00A651] text-white text-[9px] font-black px-3 py-1 rounded-full uppercase">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 relative">
                  <span className="text-[#00A651] text-[9px] font-black uppercase tracking-[0.2em]">{product.category}</span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-4 leading-tight group-hover:text-[#00A651] transition-colors">{product.name}</h3>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-[10px] uppercase font-bold">A partir de</span>
                      <span className="text-2xl font-black text-white italic">R$ {product.price}</span>
                    </div>
                    <button 
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-white text-black p-4 rounded-2xl hover:bg-[#00A651] hover:text-white transition-all shadow-xl active:scale-95"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LojaPage;
