import { useState, useMemo } from "react";
import { Search, ShoppingBag, Smartphone, Laptop, Headphones, MousePointer2, Watch, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Etapa 4 & 5: Processamento do Catálogo 
const rawProducts = [
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones" },
  { id: 2, name: "Headset Gamer Kaidi KD-632", category: "Fones" },
  { id: 3, name: "Cabo USB-C/Lightning Turbo", category: "Cabos" },
  { id: 4, name: "Carregador Turbo 33W iPhone", category: "Carregadores" },
  { id: 5, name: "Power Bank 20000mah KD-922", category: "Energia" },
  { id: 6, name: "Caixa de Som Boombox 50w", category: "Som" },
  { id: 7, name: "Teclado Mecânico RGB Ley-2080", category: "Periféricos" },
  { id: 8, name: "Suporte de Celular para Carro", category: "Suportes" },
  { id: 9, name: "Smartwatch Ultra 4 Pro", category: "Smartwatches" },
  { id: 10, name: "Câmera Altomex 5 Antenas", category: "Câmeras" },
  // Adicionar outros itens do catálogo seguindo este padrão...
];

const categoryIcons: any = {
  "Todos": <ShoppingBag size={14} />,
  "Fones": <Headphones size={14} />,
  "Cabos": <Zap size={14} />,
  "Carregadores": <Zap size={14} />,
  "Som": <ShoppingBag size={14} />,
  "Periféricos": <MousePointer2 size={14} />,
  "Smartwatches": <Watch size={14} />,
  "Câmeras": <Camera size={14} />
};

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(rawProducts.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return rawProducts.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "Todos" || p.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-7xl mx-auto">
      <header className="mb-12 space-y-6">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Nossa <span className="text-[#00A651]">Loja</span>
        </h1>
        
        {/* Etapa 7: Busca e Filtros */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Buscar produto..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-[#00A651] text-white shadow-lg shadow-[#00A651]/20' : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'}`}
              >
                {categoryIcons[cat] || <ShoppingBag size={14} />} {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Etapa 9: Grid de Performance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredProducts.map((p) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card group overflow-hidden"
            >
              <div className="aspect-square bg-black/40 relative flex items-center justify-center group-hover:bg-black/20 transition-all">
                {/* Etapa 5: Placeholders visuais */}
                <Smartphone size={48} className="text-white/10 group-hover:text-[#00A651]/40 transition-all duration-500" />
                <div className="absolute top-4 left-4 bg-[#00A651] text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter shadow-xl">Original</div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[#00A651] text-[9px] font-black uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-white font-bold leading-tight line-clamp-2 mt-1">{p.name}</h3>
                </div>
                {/* Etapa 6: Link Dinâmico WhatsApp */}
                <a 
                  href={`https://wa.me/5511940562933?text=Olá, tenho interesse no produto: ${p.name}`}
                  target="_blank"
                  className="flex items-center justify-between w-full bg-white/5 group-hover:bg-[#00A651] px-4 py-3 rounded-xl transition-all duration-300"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white text-gray-400">Consultar</span>
                  <MessageCircle size={16} className="text-[#00A651] group-hover:text-white" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Etapa 8: Elemento de Conversão Final */}
      <div className="mt-20 glass-card p-12 text-center border-[#00A651]/30">
        <h2 className="text-3xl font-black uppercase italic italic mb-4 tracking-tighter">Não encontrou o que procurava?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Temos centenas de outros itens em estoque. Fale agora com um especialista.</p>
        <a href="https://wa.me/5511940562933" className="btn-primary inline-flex mx-auto">
          Clique e fale agora
        </a>
      </div>
    </div>
  );
};

export default LojaPage;
