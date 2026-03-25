import { useState, useMemo } from "react";
import { 
  Search, ShoppingBag, Headphones, Zap, Speaker, 
  Gamepad2, Smartphone, Monitor, Watch, Camera, Car, Cpu 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

// ETAPA 4 & 5: Catálogo Processado e Higienizado (Removido Preços e Duplicados)
const rawProducts = [
  // FONES
  { id: 1, name: "Fone Bluetooth KD-790", category: "Áudio" },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Áudio" },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Áudio" },
  { id: 4, name: "Headset Gamer Kaidi KD-632", category: "Gamer" },
  { id: 5, name: "Fone de Ouvido Bluetooth P9 Premium", category: "Áudio" },
  { id: 6, name: "Fone de Ouvido HD Esterio LEF 1002", category: "Áudio" },
  
  // CABOS E ENERGIA
  { id: 7, name: "Cabo USB-C/Lightning Turbo", category: "Energia" },
  { id: 8, name: "Carregador Turbo 33W iPhone", category: "Energia" },
  { id: 9, name: "Power Bank 20000mah KD-922", category: "Energia" },
  { id: 10, name: "Cabo HDMI 4K Lelong", category: "Acessórios" },
  
  // INFORMÁTICA / PERIFÉRICOS
  { id: 11, name: "Teclado Mecânico RGB Ley-2080", category: "Gamer" },
  { id: 12, name: "Mouse Gamer Óptico 3200DPI", category: "Gamer" },
  { id: 13, name: "SSD NVMe 1TB High Performance", category: "Hardware" },
  { id: 14, name: "Pendrive AL-8U-64 - 64GB", category: "Armazenamento" },
  
  // SOM E AUTOMOTIVO
  { id: 15, name: "Caixa de Som Boombox 50w", category: "Áudio" },
  { id: 16, name: "Som Automotivo Mp3 LEY-1920", category: "Automotivo" },
  { id: 17, name: "Som Automotivo Mp5 Ley-1852", category: "Automotivo" },
  
  // DRONES E CÂMERAS
  { id: 18, name: "Smartwatch Ultra 4 Pro", category: "Wearables" },
  { id: 19, name: "Drone Al-2725 Profissional", category: "Gadgets" },
  { id: 20, name: "Câmera Altomex 5 Antenas WiFi", category: "Segurança" },
  { id: 21, name: "Suporte de Celular para Carro", category: "Automotivo" }
];

// Mapeamento de ícones e cores por categoria para Imagens Fake
const categoryTheme: any = {
  "Áudio": { icon: <Headphones size={40} />, color: "bg-blue-500/10" },
  "Gamer": { icon: <Gamepad2 size={40} />, color: "bg-purple-500/10" },
  "Energia": { icon: <Zap size={40} />, color: "bg-yellow-500/10" },
  "Hardware": { icon: <Cpu size={40} />, color: "bg-emerald-500/10" },
  "Automotivo": { icon: <Car size={40} />, color: "bg-red-500/10" },
  "Wearables": { icon: <Watch size={40} />, color: "bg-cyan-500/10" },
  "Segurança": { icon: <Camera size={40} />, color: "bg-orange-500/10" },
  "Acessórios": { icon: <Smartphone size={40} />, color: "bg-slate-500/10" },
  "Armazenamento": { icon: <Monitor size={40} />, color: "bg-indigo-500/10" },
  "Gadgets": { icon: <ShoppingBag size={40} />, color: "bg-pink-500/10" },
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
      <section className="pt-40 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6"
          >
            HC TECH <span className="text-[#00A651]">CATÁLOGO</span>
          </motion.h1>
          <p className="text-gray-400 font-medium max-w-xl mx-auto mb-12">
            Produtos selecionados com garantia e entrega rápida em São Bernardo do Campo.
          </p>

          {/* BUSCA E FILTROS */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Pesquisar no estoque..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all"
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
                    ? 'bg-[#00A651] text-white' 
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
                  className="glass-card group overflow-hidden flex flex-col h-full"
                >
                  {/* ETAPA 5: Imagem Fake com Ícone Dinâmico */}
                  <div className={`aspect-square ${theme.color} relative flex items-center justify-center transition-all duration-500 group-hover:bg-[#00A651]/20`}>
                    <div className="text-white/20 group-hover:text-[#00A651] transition-colors duration-500 scale-150">
                      {theme.icon}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-[8px] font-black text-white uppercase tracking-tighter">Disponível</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[#00A651] text-[9px] font-black uppercase tracking-widest mb-1">{p.category}</span>
                    <h3 className="text-white font-bold text-lg leading-tight mb-6 group-hover:text-[#00A651] transition-colors line-clamp-2">
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
                        <Zap size={16} className="text-[#00A651] group-hover:text-white group-hover:fill-white" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* FEEDBACK DE BUSCA VAZIA */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-black uppercase italic text-gray-600">Nenhum item encontrado</h3>
            <button 
              onClick={() => {setSearch(""); setActiveCategory("Todos")}}
              className="text-[#00A651] font-bold mt-4 hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LojaPage;
