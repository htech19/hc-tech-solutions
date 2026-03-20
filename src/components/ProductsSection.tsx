import { useState } from "react";
import { X, ShoppingBag, Star, Zap, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Todos", "Capas", "Películas", "Carregadores", "Fones", "Cabos", "Armazenamento", "Informática",
];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  description: string;
  badge?: "top" | "oferta" | "novo";
  image: string;
}

// Imagens via picsum.photos — funciona em qualquer ambiente sem bloqueio CORS
// Seed fixo por produto para manter imagem consistente entre renders
const products: Product[] = [
  // CAPAS
  { id: 1,  name: "Capa Anti-Impacto Samsung Galaxy A55", category: "Capas", price: "R$ 34,90", oldPrice: "R$ 49,90", badge: "top",   description: "Proteção militar grau A com bordas elevadas e design slim. Material TPU reforçado.", image: "https://picsum.photos/seed/case1/600/600" },
  { id: 2,  name: "Capa MagSafe iPhone 15 Pro",           category: "Capas", price: "R$ 79,90",                       badge: "novo",  description: "Capa com anel MagSafe integrado. Silicone premium com microfibra interna.",        image: "https://picsum.photos/seed/case2/600/600" },
  { id: 3,  name: "Capa Transparente Redmi Note 13",      category: "Capas", price: "R$ 24,90", oldPrice: "R$ 39,90", badge: "oferta",description: "Anti-amarelamento com reforço nas quinas. Exibe o design original do aparelho.",    image: "https://picsum.photos/seed/case3/600/600" },
  { id: 4,  name: "Capa Carteira Motorola Moto G84",      category: "Capas", price: "R$ 54,90",                                      description: "Flip com compartimentos para cartões. Couro sintético premium, fechamento magnético.", image: "https://picsum.photos/seed/case4/600/600" },
  { id: 5,  name: "Capa Anti-Impacto Samsung A35",        category: "Capas", price: "R$ 32,90",                       badge: "top",   description: "Proteção reforçada nas 4 quinas, bordas elevadas para câmera. PC + TPU.",           image: "https://picsum.photos/seed/case5/600/600" },
  { id: 6,  name: "Capa Silicone iPhone 14",              category: "Capas", price: "R$ 44,90",                                      description: "Silicone líquido com interior de microfibra. Compatível com MagSafe.",              image: "https://picsum.photos/seed/case6/600/600" },

  // PELÍCULAS
  { id: 7,  name: "Película 3D Vidro Samsung S24",          category: "Películas", price: "R$ 39,90", oldPrice: "R$ 59,90", badge: "top",   description: "Cobertura total 3D com cola UV. Dureza 9H, oleofóbica. Kit com aplicador incluso.", image: "https://picsum.photos/seed/peli1/600/600" },
  { id: 8,  name: "Película Hidrogel iPhone 15 Pro Max",    category: "Películas", price: "R$ 34,90",                                      description: "Película flexível com auto-regeneração de microarranhões. Sem bolhas.",            image: "https://picsum.photos/seed/peli2/600/600" },
  { id: 9,  name: "Película Privacidade 180° Redmi Note 13",category: "Películas", price: "R$ 44,90",                       badge: "novo",  description: "Bloqueia visão lateral em 180°. Ideal para transporte público. Dureza 9H.",      image: "https://picsum.photos/seed/peli3/600/600" },
  { id: 10, name: "Película Cerâmica Fosca Moto G73",        category: "Películas", price: "R$ 27,90", oldPrice: "R$ 39,90", badge: "oferta",description: "Acabamento fosco anti-reflexo, reduz marcas de dedos. Ótima para jogos.",        image: "https://picsum.photos/seed/peli4/600/600" },
  { id: 11, name: "Película 3D Samsung A55 Cola UV",         category: "Películas", price: "R$ 42,90",                                      description: "Vidro temperado 3D com cola UV. Aderência total em telas curvas.",               image: "https://picsum.photos/seed/peli5/600/600" },

  // CARREGADORES
  { id: 12, name: "Carregador GaN 65W 3 Portas",         category: "Carregadores", price: "R$ 129,90", oldPrice: "R$ 189,90", badge: "top",   description: "GaN compacto 2x USB-C + 1x USB-A. Carrega notebook, celular e tablet juntos.",  image: "https://picsum.photos/seed/char1/600/600" },
  { id: 13, name: "Carregador Turbo 67W Xiaomi",         category: "Carregadores", price: "R$ 89,90",                                        description: "Turbo 67W para Xiaomi, Redmi e POCO. De 0 a 100% em 40 minutos.",             image: "https://picsum.photos/seed/char2/600/600" },
  { id: 14, name: "Carregador Veicular 45W USB-C",       category: "Carregadores", price: "R$ 54,90",  oldPrice: "R$ 79,90",  badge: "oferta",description: "Power Delivery 45W. USB-C + USB-A simultâneos. Proteção contra sobrecarga.",   image: "https://picsum.photos/seed/char3/600/600" },
  { id: 15, name: "Base Carregamento Sem Fio 15W Qi2",   category: "Carregadores", price: "R$ 99,90",                         badge: "novo",  description: "Qi2 15W compatível com iPhone MagSafe e Android Qi. LED indicador de status.", image: "https://picsum.photos/seed/char4/600/600" },
  { id: 16, name: "Powerbank 20000mAh 22.5W PD",         category: "Carregadores", price: "R$ 149,90",                        badge: "top",   description: "20000mAh com PD 22.5W. 2x USB-A + USB-C + Micro-USB. Carrega notebook slim.", image: "https://picsum.photos/seed/char5/600/600" },
  { id: 17, name: "Powerbank Slim 10000mAh MagSafe",     category: "Carregadores", price: "R$ 119,90",                                       description: "Bateria magnética MagSafe 10000mAh. Cola no iPhone sem cabos. LED de status.", image: "https://picsum.photos/seed/char6/600/600" },

  // FONES
  { id: 18, name: "Fone TWS ANC Bluetooth 5.3",   category: "Fones", price: "R$ 189,90", oldPrice: "R$ 259,90", badge: "top",   description: "ANC com modo transparência. Driver 12mm, 36h de bateria com estojo de carga.", image: "https://picsum.photos/seed/fone1/600/600" },
  { id: 19, name: "Fone TWS Básico IPX4",          category: "Fones", price: "R$ 69,90",                        badge: "oferta",description: "Resistente à água IPX4. Bluetooth 5.1 estável. Até 25h com estojo.",          image: "https://picsum.photos/seed/fone2/600/600" },
  { id: 20, name: "Headset Gamer USB 7.1 Surround",category: "Fones", price: "R$ 159,90",                                      description: "Surround 7.1 virtual. Microfone retrátil com cancelamento de ruído. Memory foam.", image: "https://picsum.photos/seed/fone3/600/600" },
  { id: 21, name: "Fone com Fio USB-C Hi-Fi",      category: "Fones", price: "R$ 49,90",                        badge: "novo",  description: "USB-C com DAC integrado. 20Hz–20kHz. Driver 10mm com graves encorpados.",      image: "https://picsum.photos/seed/fone4/600/600" },

  // CABOS
  { id: 22, name: "Cabo USB-C 100W 2m Nylon Trançado", category: "Cabos", price: "R$ 49,90", oldPrice: "R$ 69,90", badge: "top",   description: "USB-C 100W revestimento nylon. Carga rápida + transferência 480Mbps.",          image: "https://picsum.photos/seed/cabo1/600/600" },
  { id: 23, name: "Cabo Lightning MFi 1m Apple",       category: "Cabos", price: "R$ 59,90",                                      description: "Certificado MFi Apple. Carga rápida para todos os iPhones. PVC reforçado.",    image: "https://picsum.photos/seed/cabo2/600/600" },
  { id: 24, name: "Cabo Magnético 3 em 1 240W",        category: "Cabos", price: "R$ 79,90",                       badge: "novo",  description: "240W com pontas USB-C, Lightning e Micro-USB. LED indicador de carga.",       image: "https://picsum.photos/seed/cabo3/600/600" },
  { id: 25, name: "Cabo HDMI 2.1 8K 2m",              category: "Cabos", price: "R$ 89,90",                       badge: "oferta",description: "8K@60Hz e 4K@120Hz. Ideal para PS5, Xbox Series X e monitores 144Hz+.",     image: "https://picsum.photos/seed/cabo4/600/600" },

  // ARMAZENAMENTO
  { id: 26, name: "Cartão MicroSD 256GB A2 V30 Samsung", category: "Armazenamento", price: "R$ 99,90",  oldPrice: "R$ 149,90", badge: "top",   description: "A2 V30, leitura 160MB/s, gravação 120MB/s. Para fotos 4K e apps.",           image: "https://picsum.photos/seed/stor1/600/600" },
  { id: 27, name: "Pen Drive 128GB USB 3.2 Kingston",    category: "Armazenamento", price: "R$ 44,90",                                        description: "USB 3.2 Gen 1, leitura 200MB/s. Carcaça metálica resistente.",              image: "https://picsum.photos/seed/stor2/600/600" },
  { id: 28, name: "SSD Externo Portátil 1TB USB-C",      category: "Armazenamento", price: "R$ 299,90",                        badge: "novo",  description: "1050MB/s leitura, 1000MB/s gravação. Resistente a quedas. Compacto 8x4cm.", image: "https://picsum.photos/seed/stor3/600/600" },
  { id: 29, name: "Hub USB-C 8 em 1 HDMI 4K",           category: "Armazenamento", price: "R$ 149,90", oldPrice: "R$ 199,90", badge: "oferta",description: "HDMI 4K + 3x USB-A + PD 100W + SD + MicroSD + Ethernet Gigabit.",          image: "https://picsum.photos/seed/stor4/600/600" },

  // INFORMÁTICA
  { id: 30, name: "Mouse Sem Fio Silencioso 2.4GHz",    category: "Informática", price: "R$ 59,90",                        badge: "top",   description: "Clique silencioso, receptor nano USB. DPI 800/1200/1600. Bateria dura 12 meses.", image: "https://picsum.photos/seed/info1/600/600" },
  { id: 31, name: "Teclado Mecânico Compacto TKL RGB",  category: "Informática", price: "R$ 219,90", oldPrice: "R$ 289,90", badge: "oferta",description: "Switches Red lineares, RGB, cabo USB-C removível. Layout ABNT2.",              image: "https://picsum.photos/seed/info2/600/600" },
  { id: 32, name: "Webcam Full HD 1080p 60fps",         category: "Informática", price: "R$ 189,90",                        badge: "novo",  description: "1080p@60fps, microfone estéreo com ANC. Auto-foco e correção de luz.",         image: "https://picsum.photos/seed/info3/600/600" },
  { id: 33, name: "Mousepad Gamer XXL 900x400mm",       category: "Informática", price: "R$ 79,90",                                        description: "Cobre toda a mesa. Base antiderrapante em borracha. Superfície speed.",        image: "https://picsum.photos/seed/info4/600/600" },
  { id: 34, name: "Roteador Wi-Fi 6 AX3000 Dual Band",  category: "Informática", price: "R$ 329,90",                        badge: "top",   description: "OFDMA + MU-MIMO, alcance 200m², 4 antenas, WAN Gigabit.",                    image: "https://picsum.photos/seed/info5/600/600" },
  { id: 35, name: "Suporte Notebook Alumínio Ajustável",category: "Informática", price: "R$ 89,90",  oldPrice: "R$ 119,90", badge: "oferta",description: "6 alturas ajustáveis, ventilação integrada. Reduz temperatura em até 4°C.",   image: "https://picsum.photos/seed/info6/600/600" },
];

const badgeConfig = {
  top:    { label: "Mais Vendido", icon: TrendingUp, color: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
  oferta: { label: "Oferta",       icon: Zap,        color: "text-red-400 bg-red-400/10 border-red-400/30" },
  novo:   { label: "Novo",         icon: Star,       color: "text-primary bg-primary/10 border-primary/30" },
};

const ProductsSection = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);
  const handleImgError = (id: number) => setImgErrors((prev) => ({ ...prev, [id]: true }));

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
          <p className="text-muted-foreground">Os mais buscados do mercado — preços imbatíveis.</p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 ${
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
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => {
              const badge = product.badge ? badgeConfig[product.badge] : null;
              const BadgeIcon = badge?.icon;
              const hasImgError = imgErrors[product.id];

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelected(product)}
                  className="bg-card rounded-xl border-glow shadow-sm cursor-pointer card-interactive group relative overflow-hidden"
                >
                  {badge && BadgeIcon && (
                    <span className={`absolute top-2 right-2 z-10 flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border backdrop-blur-sm ${badge.color}`}>
                      <BadgeIcon size={10} />
                      {badge.label}
                    </span>
                  )}

                  {/* Imagem */}
                  <div className="w-full aspect-square overflow-hidden bg-muted">
                    {!hasImgError ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={() => handleImgError(product.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag size={32} className="text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="text-xs font-semibold text-foreground mb-1 line-clamp-2 leading-snug">{product.name}</h3>
                    <p className="text-[10px] text-muted-foreground mb-2">{product.category}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-primary font-bold text-sm">{product.price}</p>
                      {product.oldPrice && (
                        <p className="text-muted-foreground text-[10px] line-through">{product.oldPrice}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
                className="bg-card rounded-2xl max-w-md w-full shadow-xl border border-border relative overflow-hidden"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1.5 transition-colors"
                >
                  <X size={16} />
                </button>

                <div className="w-full h-52 overflow-hidden bg-muted">
                  {!imgErrors[selected.id] ? (
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag size={48} className="text-primary" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {selected.category}
                    </span>
                    {selected.badge && (
                      <span className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full border ${badgeConfig[selected.badge].color}`}>
                        {(() => { const Icon = badgeConfig[selected.badge].icon; return <Icon size={10} />; })()}
                        {badgeConfig[selected.badge].label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{selected.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>

                  <div className="flex items-baseline gap-3 mb-5">
                    <p className="text-2xl font-bold text-primary">{selected.price}</p>
                    {selected.oldPrice && (
                      <p className="text-muted-foreground text-sm line-through">{selected.oldPrice}</p>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no produto: ${selected.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-lg font-semibold btn-hover glow-green"
                  >
                    Comprar via WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
