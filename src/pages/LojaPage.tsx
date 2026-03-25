import { useState, useMemo } from "react";
import { products, categories } from "@/data/store-products";
import { Search, MessageCircle, Package, ShoppingBag, ArrowRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
// Importe seu FooterStore aqui se tiver criado

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
    const text = `Olá! Vi o produto *${name}* no site da HC Tech e gostaria de saber mais.`;
    window.open(`https://wa.me/5511940562933?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12">
      <Header />

      {/* HEADER DA LOJA - Estilo Cyberpunk limpo */}
      <div className="relative border-b border-white/5 bg-[#080808]/70 backdrop-blur-xl mb-16 overflow-hidden">
        {/* Detalhe de luz neon de fundo */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00A651]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-px w-10 bg-[#00A651]" />
            <span className="text-[#00A651] font-bold uppercase tracking-[0.3em] text-[10px]">Catálogo Tech SBC</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-5 leading-none" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            HC TECH <span className="text-[#00A651] font-bold relative inline-block">
              STORE
              <span className="absolute bottom-1 left-0 w-full h-1 bg-[#00A651]/20 rounded-full shadow-[0_0_15px_rgba(0,166,81,0.5)]"></span>
            </span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm font-medium border-t border-white/5 pt-5 max-w-xl">
            <span className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 bg-[#00A651] rounded-full animate-pulse shadow-[0_0_10px_#00A651]" />
              Entrega em SBC & ABC no mesmo dia
            </span>
            <span className="flex items-center gap-2.5">
               <ShoppingBag size={15} className="text-[#00A651]" />
               Produtos com Garantia HC Tech
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* BUSCA E FILTROS */}
        <div className="space-y-10 mb-16">
          <div className="relative max-w-2xl group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#00A651] transition-colors" size={22} />
            <Input
              placeholder="Buscar fones, cabos, SSDs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-14 h-16 bg-[#080808] border-white/5 rounded-2xl text-lg focus:border-[#00A651]/40 focus:bg-black transition-all placeholder:text-gray-700 shadow-inner shadow-white/5"
            />
            {search && (
              <X onClick={() => setSearch("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white cursor-pointer" size={20} />
            )}
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-7 py-3.5 rounded-xl text-[10px] font-black whitespace-nowrap uppercase tracking-[0.3em] transition-all ${
                  activeCategory === cat
                    ? "bg-[#00A651] text-white shadow-[0_0_25px_rgba(0,166,81,0.5)] scale-105"
                    : "bg-[#0c0c0c] text-gray-500 border border-white/5 hover:border-[#00A651]/40 hover:text-gray-200 shadow-inner shadow-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE PRODUTOS */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <Package size={72} className="text-gray-800/60 mb-8 border border-gray-800 p-5 rounded-3xl bg-black" />
              <p className="text-gray-500 text-xl font-semibold italic">Nenhum componente detectado...</p>
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 }}}
                  className="group relative bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden hover:border-[#00A651]/50 transition-all duration-300 shadow-lg shadow-black"
                >
                  {/* IMAGEM COM OVERLAY NEON */}
                  <div className="relative aspect-square overflow-hidden bg-black border-b border-white/5">
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-20 bg-white text-black text-[9px] font-black px-3.5 py-1 rounded-full uppercase tracking-tighter shadow-xl">
                        {product.badge}
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    {/* Gradiente sutil verde na base da imagem */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00A651]/10 to-transparent group-hover:from-[#00A651]/20" />
                  </div>

                  {/* INFO DO PRODUTO */}
                  <div className="p-5 md:p-6 space-y-5">
                    <div>
                        <span className="text-[#00A651] text-[10px] font-black uppercase tracking-[0.3em]">
                        {product.category}
                        </span>
                        <h3 className="text-white font-bold text-sm md:text-base mt-2 mb-2 line-clamp-2 h-11 leading-snug">
                        {product.name}
                        </h3>
                    </div>
                    
                    <button 
                      onClick={() => handleWhatsApp(product.name)}
                      className="w-full group/btn relative flex items-center justify-between bg-white/5 text-gray-300 py-4 px-6 rounded-xl font-bold text-xs tracking-wider transition-all border border-white/10 group-hover:border-[#00A651]/60 group-hover:bg-[#00A651]/10 hover:!bg-[#00A651] hover:!text-white group-hover:shadow-[0_0_20px_rgba(0,166,81,0.3)]"
                    >
                      VER NO WHATSAPP
                      <ArrowRight size={17} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </
