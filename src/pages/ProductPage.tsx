import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, MessageCircle, Minus, Plus, Shield, Truck, Star } from "lucide-react";
import { products } from "@/data/store-products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";

const badgeColors: Record<string, string> = {
  "+Vendido": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Novo": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Oferta": "bg-red-500/20 text-red-400 border-red-500/30",
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-24 min-h-screen container mx-auto px-4 text-center">
          <p className="text-xl text-muted-foreground">Produto não encontrado.</p>
          <Link to="/loja" className="text-primary hover:underline mt-4 inline-block">Voltar à loja</Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  const priceLabel = typeof product.price === "number" ? `R$${product.price.toFixed(2).replace(".", ",")}` : "Indisponível";
  const whatsappLink = `https://wa.me/5511940562933?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name} - ${priceLabel} (Quantidade: ${quantity})`)}`;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <Header />
      <CartDrawer />
      <main className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <Link
            to="/loja"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors text-sm"
          >
            <ArrowLeft size={16} /> Voltar à loja
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl overflow-hidden bg-card/50 border border-border/50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-semibold border ${badgeColors[product.badge]}`}>
                  {product.badge === "+Vendido" && <><Star size={12} className="inline mr-1" />+Vendido</>}
                  {product.badge === "Novo" && "Novo"}
                  {product.badge === "Oferta" && "🔥 Oferta"}
                </span>
              )}
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    R${product.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                )}
                <span className="text-3xl font-bold text-primary">
                  {priceLabel}
                </span>
                {product.originalPrice && (
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

              {product.compatibility && (
                <div className="mb-6 p-3 rounded-lg bg-accent/10 border border-border/30">
                  <span className="text-xs text-muted-foreground font-medium uppercase">Compatibilidade:</span>
                  <p className="text-sm font-medium mt-1">{product.compatibility}</p>
                </div>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-muted-foreground">Quantidade:</span>
                <div className="flex items-center border border-border/50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-accent/20 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold min-w-[40px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-accent/20 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  size="lg"
                  onClick={handleAdd}
                  className={`flex-1 transition-all ${added ? "bg-emerald-600 scale-95" : ""}`}
                >
                  <ShoppingCart size={18} />
                  {added ? "Adicionado!" : "Adicionar ao carrinho"}
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    Pedir via WhatsApp
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-card/40 border border-border/30">
                  <Shield size={18} className="text-primary" />
                  <span className="text-xs text-muted-foreground">Garantia de qualidade</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-card/40 border border-border/30">
                  <Truck size={18} className="text-primary" />
                  <span className="text-xs text-muted-foreground">Entrega na região ABC</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-bold mb-6">Produtos relacionados</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/loja/${p.id}`}
                    className="bg-card/60 rounded-xl border border-border/50 overflow-hidden hover:border-primary/30 transition-colors group"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground">{p.category}</p>
                      <p className="text-sm font-semibold line-clamp-2 mt-1">{p.name}</p>
                      <p className="text-primary font-bold mt-2">R${p.price.toFixed(2).replace(".", ",")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProductPage;
