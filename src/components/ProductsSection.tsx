import { useState } from "react";
import { X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos", "Capas", "Películas", "Acessórios", "Carregadores"];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
}

const products: Product[] = [
  { id: 1, name: "Capa Silicone iPhone 15", category: "Capas", price: "R$ 49,90", description: "Capa de silicone premium com toque macio e proteção contra impactos." },
  { id: 2, name: "Capa Anti-Impacto Samsung S24", category: "Capas", price: "R$ 59,90", description: "Proteção militar com design transparente e bordas reforçadas." },
  { id: 3, name: "Película Cerâmica iPhone 14", category: "Películas", price: "R$ 39,90", description: "Película de cerâmica fosca com proteção de privacidade." },
  { id: 4, name: "Película Hidrogel Samsung", category: "Películas", price: "R$ 35,90", description: "Película flexível de hidrogel com auto-regeneração." },
  { id: 5, name: "Fone Bluetooth TWS", category: "Acessórios", price: "R$ 89,90", description: "Fone sem fio com cancelamento de ruído e estojo de carga." },
  { id: 6, name: "Suporte Veicular Magnético", category: "Acessórios", price: "R$ 45,90", description: "Suporte com imã forte para painel ou ar-condicionado." },
  { id: 7, name: "Carregador Turbo 65W USB-C", category: "Carregadores", price: "R$ 79,90", description: "Carregador rápido compatível com celulares e notebooks." },
  { id: 8, name: "Cabo USB-C 2m Reforçado", category: "Carregadores", price: "R$ 29,90", description: "Cabo com revestimento em nylon trançado e carga rápida." },
];

const ProductsSection = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="produtos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            <span className="text-primary">Produtos</span> & Acessórios
          </h2>
          <p className="text-muted-foreground">Tudo o que seu aparelho precisa.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
                filter === cat
                  ? "bg-primary text-primary-foreground glow-green"
                  : "bg-card text-muted-foreground border-glow hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelected(product)}
                className="bg-card rounded-xl p-5 border-glow cursor-pointer card-interactive group"
              >
                <div className="w-full aspect-square rounded-lg bg-muted flex items-center justify-center mb-4 overflow-hidden">
                  <ShoppingBag size={36} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                <p className="text-primary font-bold">{product.price}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full border-glow relative"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="w-full aspect-video rounded-lg bg-muted flex items-center justify-center mb-5">
                  <ShoppingBag size={48} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {selected.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{selected.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>
                <p className="text-2xl font-bold text-primary mb-5">{selected.price}</p>
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no produto: ${selected.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold btn-hover glow-green"
                >
                  Comprar via WhatsApp
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
