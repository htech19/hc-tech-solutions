import { useState, useMemo } from "react";
import { Search, ShoppingBag, Headphones, Zap, Speaker, Gamepad2, Smartphone, Cpu, Watch, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

// ETAPA 4: TODOS os Produtos do Catálogo - Sem Preços
const rawProducts = [
  // FONES (Amostra - adicione os outros seguindo o padrão)
  { id: 1, name: "Fone Bluetooth KD-790", category: "Áudio" },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Áudio" },
  { id: 3, name: "Headset Gamer Kaidi KD-632", category: "Gamer" },
  { id: 4, name: "Fone de Ouvido Bluetooth P9 Premium", category: "Áudio" },
  
  // ENERGIA
  { id: 5, name: "Cabo USB-C/Lightning Turbo", category: "Energia" },
  { id: 6, name: "Carregador Turbo 33W iPhone", category: "Energia" },
  { id: 7, name: "Power Bank 20000mah KD-922", category: "Energia" },
  
  // HARDWARE / PERIFÉRICOS
  { id: 8, name: "Teclado Mecânico RGB Ley-2080", category: "Gamer" },
  { id: 9, name: "SSD NVMe 1TB High Performance", category: "Hardware" },
  
  // GADGETS
  { id: 10, name: "Smartwatch Ultra 4 Pro", category: "Wearables" },
  { id: 11, name: "Drone Al-2725 Profissional", category: "Gadgets" },
  { id: 12, name: "Câmera Altomex 5 Antenas WiFi", category: "Segurança" },
];

// ETAPA 5: Placeholders Visuais Premium por Categoria
const categoryTheme: any = {
  "Áudio": { icon: <Headphones size={40} />, color: "bg-blue-500/10" },
  "Gamer": { icon: <Gamepad2 size={40} />, color: "bg-purple-500/10" },
  "Energia": { icon: <Zap size={40} />, color: "bg-yellow-500/10" },
  "Hardware": { icon: <Cpu size={40} />, color: "bg-emerald-500/10" },
  "Wearables": { icon: <Watch size={40} />, color: "bg-cyan-500/10" },
  "Gadgets": { icon: <ShoppingBag size={40} />, color: "bg-pink-500/10" },
  "Segurança": { icon: <Camera size={40} />, color: "bg-orange-500/10" },
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
    <div className="min-h-screen pb-20">
      <Header />
      
      {/* HEADER DA LOJA */}
      <section className="pt-48 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-glow-green"
          >
            HC TECH STORE
          </motion.h1>
          
          {/* ETAPA 7: Busca e Filtros */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar no estoque..."
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

      {/* GRID DE PRODUTOS */}
      <main className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => {
              const theme = categoryTheme[p.category] || categoryTheme["Gadgets"];
              return (
                <motion.div 
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card group flex flex-col h-full"
                >
                  {/* ETAPA 5: Imagem Fake com Ícone Dinâmico */}
                  <div className={`aspect-square ${theme.color} relative flex items-center justify-center transition-all duration-500 group-hover:bg-[#00A651]/20`}>
                    <div className="text-white/20 group-hover:text-[#00A651] transition-colors duration-500 scale-150">
                      {theme.icon}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#00A651] text-[9px] font-black uppercase tracking-widest mb-1">{p.category}</span>
                    <h3 className="text-white font-bold text-lg leading-tight mb-6 line-clamp-2">
                      {p.name}
                    </h3>

                    {/* ETAPA 6: Botão de Conversão */}
                    <div className="mt-auto">
                      <a 
                        href={`https://wa.me/5511940562933?text=Olá, tenho interesse no produto: ${p.name}`}
                        target="_blank"
                        className="flex items-center justify-between w-full bg-white/5 border border-white/10 group-hover:bg-[#00A651] group-hover:border-[#00A651] px-5 py-4 rounded-2xl transition-all duration-300"
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Consultar</span>
                        <Zap size={16} className="text-[#00A651] group-hover:text-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default LojaPage;
