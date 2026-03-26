import { useState, useMemo } from "react";
import { Search, ShoppingBag, MessageCircle, ArrowLeft, Star, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

// Enhanced product data with fake images and comprehensive categories
const categories = ["Todos", "Eletrônicos", "Moda", "Casa", "Beleza", "Esportes"];

const products = [
  // Eletrônicos
  {
    id: 1,
    name: "Fone de Ouvido Bluetooth Premium",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    badge: "Top Venda",
  },
  {
    id: 2,
    name: "Smartwatch Fitness Edition",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    badge: "Novo",
  },
  {
    id: 3,
    name: "Câmera Instantânea Retro",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Power Bank Ultra Rápido",
    category: "Eletrônicos",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
    badge: "Desconto",
  },
  // Moda
  {
    id: 5,
    name: "Jaqueta Denim Premium",
    category: "Moda",
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop",
    badge: "Top Venda",
  },
  {
    id: 6,
    name: "Tênis Esportivo Elegante",
    category: "Moda",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Bolsa de Couro Autêntica",
    category: "Moda",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    badge: "Novo",
  },
  {
    id: 8,
    name: "Óculos de Sol Polarizado",
    category: "Moda",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
  },
  // Casa
  {
    id: 9,
    name: "Luminária LED Inteligente",
    category: "Casa",
    image: "https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=500&fit=crop",
    badge: "Destaque",
  },
  {
    id: 10,
    name: "Almofada Decorativa Luxo",
    category: "Casa",
    image: "https://images.unsplash.com/photo-1584622614875-2953067881c7?w=500&h=500&fit=crop",
  },
  {
    id: 11,
    name: "Tapete Persa Autêntico",
    category: "Casa",
    image: "https://images.unsplash.com/photo-1579810635393-6c3d70fd4e4b?w=500&h=500&fit=crop",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Espelho Decorativo Moderno",
    category: "Casa",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
  },
  // Beleza
  {
    id: 13,
    name: "Sérum Facial Rejuvenescedor",
    category: "Beleza",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    badge: "Top Venda",
  },
  {
    id: 14,
    name: "Máscara Facial Premium",
    category: "Beleza",
    image: "https://images.unsplash.com/photo-1596462502278-af242a95b598?w=500&h=500&fit=crop",
  },
  {
    id: 15,
    name: "Perfume Importado Exclusivo",
    category: "Beleza",
    image: "https://images.unsplash.com/photo-1588405748121-ac21bebf5dbc?w=500&h=500&fit=crop",
    badge: "Novo",
  },
  {
    id: 16,
    name: "Creme Hidratante Noturno",
    category: "Beleza",
    image: "https://images.unsplash.com/photo-1556228481-8ecf4600c833?w=500&h=500&fit=crop",
  },
  // Esportes
  {
    id: 17,
    name: "Mochila para Trilha Impermeável",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
    badge: "Destaque",
  },
  {
    id: 18,
    name: "Garrafa Térmica Esportiva",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1602143407151-7e406142f30d?w=500&h=500&fit=crop",
  },
  {
    id: 19,
    name: "Capacete Ciclismo Aerodinâmico",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    badge: "Segurança",
  },
  {
    id: 20,
    name: "Tapete de Yoga Premium",
    category: "Esportes",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop",
  },
];

// Enhanced WhatsApp greeting message generator
const generateWhatsAppMessage = (productName: string) => {
  const messages = [
    `Olá! 👋 Gostaria de mais informações sobre o *${productName}*. Qual seria o melhor valor para compra hoje?`,
    `Oi! ✨ Tenho interesse no *${productName}*. Poderia me enviar maiores detalhes e condições de pagamento?`,
    `Olá! 🛍️ Vi que vocês têm *${productName}* disponível. Gostaria de saber o preço e prazo de entrega.`,
    `Oi! 💬 Qual seria o preço do *${productName}* e vocês fazem entrega para minha região?`,
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = activeCategory === "Todos" || p.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [search, activeCategory]);

  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "5511940562933";
    const message = encodeURIComponent(generateWhatsAppMessage(productName));
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 pt-40">
        {/* Navigation Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00A651] transition-colors mb-8 font-bold uppercase text-[10px] tracking-widest">
          <ArrowLeft size={14} /> Voltar ao Início
        </Link>

        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-black text-white mb-2">Catálogo de Produtos</h1>
          <p className="text-gray-400">Descubra nossa seleção exclusiva de produtos premium</p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="O que você procura?"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-[#00A651] outline-none transition-all text-white placeholder-gray-500"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-[#00A651] text-white shadow-lg shadow-green-500/50' 
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            Mostrando <span className="text-[#00A651] font-bold">{filteredProducts.length}</span> produtos
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <motion.div 
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-[#00A651]/50 transition-all hover:shadow-xl hover:shadow-green-500/10 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" 
                      />
                      {p.badge && (
                        <motion.span 
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="absolute top-4 left-4 bg-gradient-to-r from-[#00A651] to-green-500 text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase shadow-lg shadow-green-500/50 flex items-center gap-1"
                        >
                          <Zap size={10} /> {p.badge}
                        </motion.span>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-[#00A651] text-[9px] font-black uppercase tracking-widest mb-2">{p.category}</p>
                      <h3 className="text-white font-bold mb-4 line-clamp-2 h-12 leading-tight text-sm">{p.name}</h3>
                      
                      {/* Rating (Optional) */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-gray-500 text-[9px] ml-1">(124)</span>
                      </div>

                      {/* CTA Button */}
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsAppClick(p.name)}
                        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#00A651] to-green-500 py-3 rounded-xl text-white font-black text-[10px] uppercase tracking-tighter hover:shadow-lg shadow-green-500/50 transition-all mt-auto"
                      >
                        <MessageCircle size={14} /> Consultar via WhatsApp
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <ShoppingBag size={48} className="mx-auto text-gray-500 mb-4 opacity-50" />
                <p className="text-gray-400">Nenhum produto encontrado para "{search}"</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
