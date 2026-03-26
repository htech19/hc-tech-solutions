import { useState, useMemo } from "react";
import { ShoppingBag, MessageCircle, Search, Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

// 1. Importamos os dados reais que configuramos no outro arquivo
import { products, categories } from "../data/store-products";

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // 2. Lógica de filtragem por nome e categoria
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        {/* Banner de Título */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black italic text-green-500 mb-4"
          >
            HC TECH STORE
          </motion.h1>
          <p className="text-gray-400">Qualidade e tecnologia ao seu alcance</p>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="relative max-w-2xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar modelo, marca ou acessório..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-green-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
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

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-green-500/50 transition-all group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4 bg-green-500 text-black text-[10px] font-black px-2 py-1 rounded-md uppercase">
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <p className="text-green-500 text-[10px] font-bold uppercase mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <a
                    href={`https://wa.me/5511999999999?text=Olá, tenho interesse no produto: ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 rounded-xl transition-colors"
                  >
                    CONSULTAR
                    <MessageCircle size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Caso não encontre nada */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </main>
    </div>
  );
}
