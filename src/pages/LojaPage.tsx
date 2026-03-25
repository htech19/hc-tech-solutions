import { useState, useMemo } from "react";
import { products, categories } from "@/data/store-products";
import { Search, MessageCircle, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const allCategories = useMemo(() => ["Todos", ...categories], []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "Todos" || p.category === activeCategory;
      return matchName && matchCategory;
    });
  }, [search, activeCategory]);

  const handleWhatsApp = (name: string) => {
    const text = `Olá! Vi o produto *${name}* na loja da HC Tech e gostaria de saber mais.`;
    window.open(`https://wa.me/5511940562933?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12">
      {/* HEADER DA LOJA - ESTILO CYBERPUNK */}
      <div className="relative border-b border-white/5 bg-black/40 backdrop-blur-xl mb-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-1 w-12 bg-[#00A651] rounded-full" />
            <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-xs">Acessórios & Hardware</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-4">
            HC TECH <span className="text-[#00A651]">STORE</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm font-medium">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse" />
              Entrega rápida em SBC e Região
            </span>
            <span className="flex items-center gap-2">
               <ShoppingBag size={16} className="text-[#00A651]" />
               Produtos com Garantia HC
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* BUSCA E FILTROS */}
        <div className="space-y-8 mb-12">
          <div className="relative max-w-2xl group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00A651] transition-colors" size={20} />
            <Input
              placeholder="O que você está procurando hoje?..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 bg-[#141414] border-white/5 rounded-2xl text-lg focus:border-[#00A651]/50 transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-[#00A651] text-white shadow-[0_0_20px_rgba(0,166,81,0.3)]"
                    : "bg-[#141414] text-gray-400 border border-white/5 hover:border-[#00A651]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUTOS - OTIMIZADO MOBILE */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <Package size={64} className="text-gray-800 mb-6" />
              <p className="text-gray-500 text-xl font-medium italic">Nenhum componente encontrado no radar...</p>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
            >
              {filtered.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-[#141414] rounded-3xl border border-white/5 overflow-hidden hover:border-[#00A651]/40 transition-all duration-500"
                >
                  {/* IMAGEM COM OVERLAY */}
                  <div className="relative aspect-square overflow-hidden bg-black/20">
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-20 bg-white text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* INFO DO PRODUTO */}
                  <div className="p-5 md:p-6">
                    <span className="text-[#00A651] text-[10px] font-black uppercase tracking-[0.2em]">
                      {product.category}
                    </span>
                    <h3 className="text-white font-bold text-sm md:text-lg mt-2 mb-6 line-clamp-2 h-12 leading-tight">
                      {product.name}
                    </h3>
                    
                    <button 
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full group/btn relative flex items-center justify-between bg-white text-black py-4 px-6 rounded-2xl font-black text-xs transition-all hover:bg-[#00A651] hover:text-white"
                    >
                      WHATSAPP
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LojaPage;
