import { useState, useMemo } from "react";
import { Search, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";

// IMPORTANTE: Importamos os dados que você organizou no arquivo store-products.ts
import { products, categories } from "../data/store-products";

export default function LojaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Filtra os produtos com base na busca e na categoria selecionada
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {/* Cabeçalho da Loja */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic text-green-500 mb-2"
          >
            HC TECH STORE
          </motion.h1>
          <div className="h-1 w-20 bg-green-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400">Os melhores acessórios e eletrônicos para você.</p>
        </div>

        {/* Busca e Filtros */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar modelo, marca ou acessório..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-green-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-green-500 text-black"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500/30 transition-all group"
              >
                {/* Imagem do Produto */}
                <div className="relative aspect-square bg-zinc-800 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-green-500 text-black text-[10px] font-black px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Detalhes */}
                <div className="p-5">
                  <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white mt-1 mb-4 h-12 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <a
                    href={`https://wa.me/5511999999999?text=Olá, tenho interesse no produto: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 rounded-xl transition-all active:scale-95"
                  >
                    CONSULTAR
                    <MessageCircle size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mensagem de erro se não encontrar nada */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/30 rounded-3xl border border-dashed border-zinc-800">
            <p className="text-gray-500">Nenhum produto encontrado nesta busca.</p>
          </div>
        )}
      </main>
    </div>
  );
}
