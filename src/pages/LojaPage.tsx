import { useState, useMemo } from "react";
import { Search, MessageCircle, ArrowLeft, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { products, categories } from "@/data/store-products";
import { peliculas } from "@/data/peliculas-data";

const LojaPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const whatsappNumber = "5511940562933";

  const filteredProducts = useMemo(() => {
    const searchLower = search.toLowerCase();
    
    // 1. Filtra os produtos do catálogo geral
    const generalItems = products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(searchLower);
      const matchCat = activeCategory === "Todos" || p.category === activeCategory;
      return matchSearch && matchCat;
    });

    // 2. Integra películas se a categoria for "Películas" ou se houver uma busca ativa
    let peliculaItems: any[] = [];
    if (activeCategory === "Películas" || (activeCategory === "Todos" && search.length > 2)) {
      peliculaItems = peliculas
        .filter(p => 
          p.model.toLowerCase().includes(searchLower) || 
          p.marca.toLowerCase().includes(searchLower)
        )
        .map(p => ({
          id: `pel-${p.model}`,
          name: `Película ${p.marca} ${p.model}`,
          category: "Películas",
          image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500",
          badge: "Sob Consulta"
        }));
    }

    // Retorna a união dos dois, removendo duplicados por nome se necessário
    return [...generalItems, ...peliculaItems];
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen pb-24 relative overflow-x-hidden">
      <Header />
      
      {/* Botão Voltar */}
      <div className="fixed top-24 left-4 z-40 md:left-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white/10 hover:bg-[#00A651] backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-[10px] uppercase tracking-widest">Voltar</span>
        </button>
      </div>

      <section className="pt-40 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#00A651] text-glow-green"
          >
            HC TECH STORE
          </motion.h1>

          {/* Filtros de Categoria */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                  ? "bg-[#00A651] border-[#00A651] text-white" 
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-[#00A651]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Barra de Busca */}
          <div className="relative w-full max-w-xl mx-auto mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar modelo, marca ou acessório..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all text-white shadow-2xl"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div 
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="glass-card overflow-hidden group flex flex-col h-full"
              >
                <div className="aspect-square relative overflow-hidden bg-black/40">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" 
                  />
                  {p.badge && (
                    <div className="absolute top-3 right-3 bg-[#00A651] text-white text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">
                      {p.badge}
                    </div>
                  )}
                </div>
                
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <span className="text-[#00A651] text-[8px] font-black uppercase tracking-[0.2em] mb-2">{p.category}</span>
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight flex-grow mb-6 uppercase">
                    {p.name}
                  </h3>
                  
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=Olá! Gostaria de consultar a disponibilidade do item: *${p.name}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-[9px] py-3 flex justify-center items-center gap-2 group/btn"
                  >
                    CONSULTAR <MessageCircle size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Olá Harrison, estou no site e gostaria de tirar uma dúvida!`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
      >
        <MessageCircle size={28} fill="white" />
      </a>

      <footer className="mt-20 py-10 border-t border-white/5 text-center">
        <a 
          href="https://instagram.com/hctech" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00A651] transition-colors font-black uppercase text-[10px] tracking-widest"
        >
          Siga no Instagram <Instagram size={16} />
        </a>
      </footer>
    </div>
  );
};

export default LojaPage;
