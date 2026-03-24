import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Truck, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/store-products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Header />
      <main className="pt-28 pb-20 container mx-auto px-4">
        
        {/* Banner de Identidade */}
        <div className="mb-12 text-center">
           <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 italic uppercase">
            HC TECH <span className="text-emerald-500">CATÁLOGO</span>
           </h1>
           <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                <Truck size={14} /> Entrega Hoje no ABC
              </span>
           </div>
        </div>

        {/* Busca e Filtros */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <Input 
              placeholder="Buscar produtos..." 
              className="bg-zinc-900/80 border-zinc-800 h-14 rounded-2xl pl-14 text-lg focus:border-emerald-500/50 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            {["Todos", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "Todos" ? null : cat)}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                  (selectedCategory === cat || (cat === "Todos" && !selectedCategory))
                    ? "bg-white border-white text-black shadow-lg"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid 2 colunas Mobile / 4 Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative flex flex-col bg-zinc-900/20 rounded-[2rem] border border-zinc-800/40 overflow-hidden hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 px-2 py-1 bg-black/40 backdrop-blur-sm">
                      Sob Consulta
                    </span>
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-emerald-500 text-black px-2 py-0.5 rounded text-[8px] font-black uppercase">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[8px] font-black text-emerald-500/50 uppercase mb-1 tracking-widest">{product.category}</span>
                  <h3 className="text-[11px] md:text-sm font-bold text-zinc-200 leading-tight mb-6 line-clamp-2 h-8 md:h-10">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <Button 
                      className="w-full h-10 rounded-xl font-black uppercase tracking-widest text-[9px] bg-white text-black hover:bg-emerald-500 transition-all"
                      asChild
                    >
                      <a href={`https://wa.me/5511940562933?text=Olá Harrison! Tenho interesse no ${product.name}. Pode me passar o valor?`} target="_blank">
                        <MessageCircle size={14} className="mr-2" />
                        Consultar
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default LojaPage;
