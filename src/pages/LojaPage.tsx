import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Filter, MessageCircle, Star, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, categories, Product } from "@/data/store-products";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";

const badgeColors: Record<string, string> = {
  "+Vendido": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Novo": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Oferta": "bg-red-500/20 text-red-400 border-red-500/30",
};

const LojaPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const handleAdd = (product: Product) => {
    if (typeof product.price !== "number") return;
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 600);
  };

  const formatPrice = (price: number | "Indisponível") =>
    typeof price === "number" ? `R$${price.toFixed(2).replace(".", ",")}` : "Indisponível";

  const whatsappLink = (p: Product) =>
    `https://wa.me/5511940562933?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${p.name} - ${formatPrice(p.price)}`)}`

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen">
        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors text-sm">
              <ArrowLeft size={16} /> Voltar ao início
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-3">
                HC Tech <span className="text-primary">Loja</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-8">
                Acessórios e produtos tech para celular e informática · São Bernardo do Campo e região
              </p>
            </motion.div>

            {/* Search & Filters */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Buscar produto ou categoria..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-card/60 border-border/50 backdrop-blur-sm"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Filter size={16} className="text-muted-foreground" />
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    !selectedCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/60 text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  Todos
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/60 text-muted-foreground hover:text-foreground border border-border/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card/70 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden flex flex-col hover:border-primary/30 transition-colors group"
                  >
                    {/* Image */}
                    <Link to={`/loja/${product.id}`} className="relative overflow-hidden aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {product.badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeColors[product.badge]}`}>
                          {product.badge === "+Vendido" && <><Star size={10} className="inline mr-1" />+Vendido</>}
                          {product.badge === "Novo" && "Novo"}
                          {product.badge === "Oferta" && "🔥 Oferta"}
                        </span>
                      )}
                    </Link>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-1">
                        {product.category}
                      </span>
                      <Link to={`/loja/${product.id}`}>
                        <h3 className="text-sm font-semibold leading-snug mb-3 hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="mt-auto">
                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-3">
                          {product.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              R${product.originalPrice.toFixed(2).replace(".", ",")}
                            </span>
                          )}
                          <span className="text-lg font-bold text-primary">
                            R${product.price.toFixed(2).replace(".", ",")}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleAdd(product)}
                            className={`flex-1 text-xs transition-all ${
                              addedId === product.id
                                ? "bg-emerald-600 scale-95"
                                : ""
                            }`}
                          >
                            <ShoppingCart size={14} />
                            {addedId === product.id ? "Adicionado!" : "Carrinho"}
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs" asChild>
                            <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer">
                              <MessageCircle size={14} />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">Nenhum produto encontrado.</p>
                <p className="text-sm text-muted-foreground mt-1">Tente outro termo de busca ou categoria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default LojaPage;
