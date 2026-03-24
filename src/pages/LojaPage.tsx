import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Filter, MessageCircle, Star, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { products, categories, Product } from "@/data/store-products";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const badgeColors: Record<string, string> = {
  "+Vendido": "bg-emerald-500 text-black border-emerald-400",
  "Novo": "bg-blue-500 text-white border-blue-400",
  "Oferta": "bg-red-500 text-white border-red-400",
};

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const handleAdd = (product: Product) => {
    if (product.price === "Indisponível") return;
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 600);
  };

  const formatPrice = (price: number | "Indisponível") =>
    typeof price === "number" ? `R$ ${price.toFixed(2).replace(".", ",")}` : "Indisponível";

  const whatsappLink = (p: Product) =>
    `https://wa.me/5511940562933?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.name}`)}`;

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header />
      <CartDrawer />
      
      <main className="pt-28 pb-20 container mx-auto px-4">
        {/* Banner do Logo */}
        <div className="mb-12 text-center">
           <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
            HC TECH <span className="text-emerald-500">LOJA</span>
           </h1>
           <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">Assistência Especializada & Informática</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
            <Input 
              placeholder="O que você procura hoje?" 
              className="bg-zinc-900 border-zinc-800 pl-10 h-12 rounded-xl focus:border-emerald-500 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {["Todos", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "Todos" ? null : cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                  (selectedCategory === cat || (cat === "Todos" && !selectedCategory))
                    ? "bg-emerald-500 border-emerald-500 text-black"
                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                className="group relative bg-zinc-900/40 rounded-3xl border border-zinc-800/50 overflow-hidden flex flex-col hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${product.price === "Indisponível" ? 'grayscale opacity-30' : ''}`}
                  />
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-2xl ${badgeColors[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2 opacity-70">{product.category}</span>
                  <h3 className="text-lg font-bold text-zinc-100 leading-tight mb-4 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  
                  <div className="mt-auto">
                    <div className="mb-6">
                      {product.price === "Indisponível" ? (
                        <span className="text-sm font-bold text-zinc-600 uppercase tracking-tighter bg-zinc-800/50 px-3 py-1 rounded-md">Produto Indisponível</span>
                      ) : (
                        <span className="text-2xl font-black text-white tracking-tighter">{formatPrice(product.price)}</span>
                      )}
                    </div>

                    <Button 
                      className={`w-full h-12 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all shadow-lg ${
                        product.price === "Indisponível" 
                        ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-700" 
                        : "bg-emerald-600 hover:bg-emerald-500 text-black"
                      }`}
                      asChild={product.price === "Indisponível"}
                    >
                      {product.price === "Indisponível" ? (
                        <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer">Consultar Disponibilidade</a>
                      ) : (
                        <span onClick={() => handleAdd(product)}>{addedId === product.id ? "Adicionado!" : "Comprar"}</span>
                      )}
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
