import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Truck, Zap, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories, Product } from "@/data/store-products";
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
    <div className="bg-[#050505] text-white min-h-screen selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-28 pb-20 container mx-auto px-4 max-w-7xl">
        
        {/* Seção Hero / Headline */}
        <div className="mb-16 text-center space-y-4">
           <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase italic text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
              HC TECH <span className="text-emerald-500">CATÁLOGO</span>
             </h1>
             <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
                  <Truck size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Entrega hoje no ABC</span>
                </div>
                <div className="hidden md:flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full">
                  <Zap size={14} className="text-zinc-400" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Suporte Especializado</span>
                </div>
             </div>
           </motion.div>
        </div>

        {/* Busca e Filtros Premium */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-1000"></div>
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <Input 
              placeholder="O que você está buscando hoje?" 
              className="relative bg-zinc-900/80 border-zinc-800 h-16 rounded-2xl pl-14 text-lg focus:border-emerald-500/50 transition-all placeholder:text-zinc-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto no-scrollbar justify-start md:justify-center py-2">
            {["Todos", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "Todos" ? null : cat)}
                className={`px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                  (selectedCategory === cat || (cat === "Todos" && !selectedCategory))
                    ? "bg-white border-white text-black shadow-2xl"
                    : "bg-zinc-900/50 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
 Wildcards and variety
        </div>

        {/* Grid de Produtos (2 Colunas Mobile / 4 Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="group relative flex flex-col bg-zinc-900/10 rounded-[2.5rem] border border-zinc-800/30 hover:border-emerald-500/30 transition-all duration-700 overflow-hidden"
              >
                {/* Visual Image Area */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    alt={product.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  
                  {product.badge && (
                    <div className="absolute top-6 left-6">
                      <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Quick Unboxing Search Overlay */}
                  <a 
                    href={`https://www.youtube.com/results?search_query=unboxing+${encodeURIComponent(product.name)}`}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-4 bg-white/10 rounded-full border border-white/20">
                        <Youtube className="text-white" size={24} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">Ver Unboxing</span>
                    </div>
                  </a>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 relative -mt-10 bg-gradient-to-b from-transparent to-[#050505]">
                  <span className="text-emerald-500 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                    {product.category}
                  </span>
                  <h3 className="text-sm md:text-lg font-bold text-zinc-100 leading-tight mb-6 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex flex-col gap-1 border-l-2 border-emerald-500/30 pl-4">
                      <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Disponibilidade</span>
                      <span className="text-xs font-black text-white uppercase italic tracking-tighter">Sob Consulta via WhatsApp</span>
                    </div>

                    <Button 
                      className="w-full h-12 rounded-2xl font-black uppercase tracking-[0.1em] text-[10px] bg-white text-black hover:bg-emerald-500 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                      asChild
                    >
                      <a href={`https://wa.me/5511940562933?text=Olá Harrison! Tenho interesse no ${product.name}. Pode me passar o valor?`} target="_blank">
                        <MessageCircle size={16} className="mr-2" />
                        Consultar Agora
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Rodapé de Confiança */}
        <div className="mt-20 border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-zinc-600 font-black text-[10px] uppercase tracking-widest">
            <span className="flex items-center gap-2"><Truck size={14} /> Entrega no ABC</span>
            <span className="flex items-center gap-2 text-emerald-500/60"><Zap size={14} /> Envio em 24h</span>
          </div>
          <p className="text-zinc-700 text-[10px] font-medium tracking-widest">© 2026 HC TECH SOLUTIONS. ALL RIGHTS RESERVED.</p>
        </div>

      </main>
      <WhatsAppButton />
    </div>
  );
};

export default LojaPage;
