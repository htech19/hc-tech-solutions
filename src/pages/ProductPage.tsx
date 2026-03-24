import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle } from "lucide-react";
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

  const whatsappLink = (p: Product) =>
    `https://wa.me/5511940562933?text=${encodeURIComponent(
      `Olá! Vi o produto ${p.name} no site. Está disponível em stock?`
    )}`;

  return (
    <div className="bg-[#080808] text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-20 container mx-auto px-2 md:px-4">
        
        {/* Branding HC TECH */}
        <div className="mb-10 text-center">
           <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-1 uppercase italic italic">
            HC TECH <span className="text-emerald-500">CATÁLOGO</span>
           </h1>
           <p className="text-zinc-600 font-bold uppercase tracking-[0.2em] text-[10px]">Consultoria em Tecnologia e Acessórios</p>
        </div>

        {/* Barra de Pesquisa e Categorias */}
        <div className="flex flex-col gap-4 mb-12 max-w-4xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-emerald-500 transition-colors" size={18} />
            <Input 
              placeholder="Pesquisar fones, cabos, carregadores..." 
              className="bg-zinc-900/40 border-zinc-800/50 h-11 rounded-xl pl-10 focus:border-emerald-500/50 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {["Todos", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "Todos" ? null : cat)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                  (selectedCategory === cat || (cat === "Todos" && !selectedCategory))
                    ? "bg-emerald-500 border-emerald-500 text-black shadow-lg shadow-emerald-500/10"
                    : "bg-zinc-900 border-zinc-800 text-zinc-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grelha de Produtos Otimizada (2 Mobile / 4 Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative bg-zinc-900/20 rounded-2xl border border-zinc-800/40 overflow-hidden flex flex-col hover:border-emerald-500/20 transition-all duration-500"
              >
                {/* Contentor da Imagem */}
                <div className="relative aspect-square overflow-hidden bg-zinc-950">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 transition-all duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-sm text-[8px] font-black uppercase bg-emerald-500 text-black z-10">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                     <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest border border-zinc-700 px-2 py-1 bg-black/40 backdrop-blur-sm">
                        Sob Consulta
                     </span>
                  </div>
                </div>

                {/* Detalhes do Produto */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-[7px] md:text-[8px] font-black text-emerald-500/40 uppercase mb-1 tracking-widest">{product.category}</span>
                  <h3 className="text-[11px] md:text-sm font-bold text-zinc-300 leading-tight mb-4 line-clamp-2 h-8 md:h-10">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="mb-4 flex flex-col">
                      <span className="text-[9px] text-zinc-700 line-through">
                        Ref: R$ {product.originalPrice?.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-[11px] font-black text-zinc-500 uppercase italic tracking-tighter">
                         Produto Indisponível
                      </span>
                    </div>

                    <Button 
                      className="w-full h-9 rounded-lg font-black uppercase tracking-widest text-[9px] bg-zinc-800 text-zinc-400 hover:bg-emerald-500 hover:text-black border border-zinc-800 hover:border-emerald-400 transition-colors shadow-lg shadow-black"
                      asChild
                    >
                      <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={12} className="mr-1.5" />
                        Disponibilidade
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
