import { useState, useMemo } from "react";
import { Search, Truck, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/store-products";
import { ProductCard } from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) && 
      (!activeCat || p.category === activeCat)
    );
  }, [search, activeCat]);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Header />
      <main className="pt-24 pb-20 container mx-auto px-4">
        
        {/* Banner Regional Premium */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-6">
            HC TECH <span className="text-emerald-500">CATÁLOGO</span>
          </h1>
          <div className="flex justify-center items-center gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-2 rounded-full flex items-center gap-3">
              <Truck className="text-emerald-500" size={18} />
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                Entrega hoje na região do ABC
              </span>
            </div>
          </div>
        </div>

        {/* Busca e Filtros */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-emerald-500 transition-colors" size={20} />
            <Input 
              placeholder="O que você está procurando?" 
              className="bg-zinc-900/50 border-zinc-800 h-16 rounded-2xl pl-14 text-lg focus:ring-1 ring-emerald-500/50"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 justify-start md:justify-center">
            <button 
              onClick={() => setActiveCat(null)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase border transition-all ${!activeCat ? 'bg-white text-black' : 'border-zinc-800 text-zinc-500'}`}
            >Todos</button>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase border transition-all whitespace-nowrap ${activeCat === cat ? 'bg-white text-black' : 'border-zinc-800 text-zinc-500'}`}
              >{cat}</button>
            ))}
          </div>
        </div>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {filtered.map(product => <ProductCard key={product.id} product={product} />)}
        </div>

        {/* Fallback */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-zinc-500 uppercase font-black tracking-widest">
            Nenhum produto encontrado.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LojaPage;
