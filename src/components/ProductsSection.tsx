import { useState } from "react";
import { X, ShoppingBag, Star, Zap, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Todos",
  "Capas",
  "Películas",
  "Carregadores",
  "Fones",
  "Cabos",
  "Armazenamento",
  "Informática",
];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  description: string;
  badge?: "top" | "oferta" | "novo";
}

const products: Product[] = [
  // CAPAS — mais buscadas do mercado
  {
    id: 1,
    name: "Capa Anti-Impacto Samsung Galaxy A55",
    category: "Capas",
    price: "R$ 34,90",
    oldPrice: "R$ 49,90",
    description:
      "Proteção militar grau A com bordas elevadas e design slim. Compatível com carregamento sem fio. Material TPU reforçado.",
    badge: "top",
  },
  {
    id: 2,
    name: "Capa MagSafe iPhone 15 Pro",
    category: "Capas",
    price: "R$ 79,90",
    description:
      "Capa com anel MagSafe integrado, compatível com todos os acessórios magnéticos Apple. Silicone premium com microfibra interna.",
    badge: "novo",
  },
  {
    id: 3,
    name: "Capa Transparente Redmi Note 13",
    category: "Capas",
    price: "R$ 24,90",
    oldPrice: "R$ 39,90",
    description:
      "Capa transparente anti-amarelamento com reforço nas quinas. Exibe o design original do aparelho sem perder proteção.",
    badge: "oferta",
  },
  {
    id: 4,
    name: "Capa Carteira Motorola Moto G84",
    category: "Capas",
    price: "R$ 54,90",
    description:
      "Capa flip com compartimentos para cartões, dinheiro e suporte horizontal. Couro sintético premium com fechamento magnético.",
  },
  {
    id: 5,
    name: "Capa Anti-Impacto Samsung A35",
    category: "Capas",
    price: "R$ 32,90",
    description:
      "Proteção reforçada nas 4 quinas com bordas elevadas para câmera e tela. Material híbrido PC + TPU.",
    badge: "top",
  },
  {
    id: 6,
    name: "Capa Silicone iPhone 14",
    category: "Capas",
    price: "R$ 44,90",
    description:
      "Silicone líquido com interior de microfibra. Toque aveludado e proteção contra arranhões. Compatível com MagSafe.",
  },

  // PELÍCULAS
  {
    id: 7,
    name: "Película 3D Vidro Samsung S24",
    category: "Películas",
    price: "R$ 39,90",
    oldPrice: "R$ 59,90",
    description:
      "Cobertura total 3D com cola UV. Dureza 9H, oleofóbica, anti-impressão digital. Kit com aplicador incluso.",
    badge: "top",
  },
  {
    id: 8,
    name: "Película Hidrogel iPhone 15 Pro Max",
    category: "Películas",
    price: "R$ 34,90",
    description:
      "Película flexível com auto-regeneração de microarranhões. Instalação sem bolhas com guia de posicionamento.",
  },
  {
    id: 9,
    name: "Película Privacidade 180° Redmi Note 13",
    category: "Películas",
    price: "R$ 44,90",
    description:
      "Bloqueia visão lateral em 180°. Ideal para uso em transporte público e ambientes corporativos. Dureza 9H.",
    badge: "novo",
  },
  {
    id: 10,
    name: "Película Cerâmica Fosca Moto G73",
    category: "Películas",
    price: "R$ 27,90",
    oldPrice: "R$ 39,90",
    description:
      "Acabamento fosco anti-reflexo que reduz marcas de dedos. Suaviza toque na tela para jogos e digitação.",
    badge: "oferta",
  },
  {
    id: 11,
    name: "Película 3D Samsung A55 Cola UV",
    category: "Películas",
    price: "R$ 42,90",
    description:
      "Vidro temperado com cobertura 3D e cola UV. Garante aderência total mesmo em telas curvas.",
  },

  // CARREGADORES
  {
    id: 12,
    name: "Carregador GaN 65W 3 Portas",
    category: "Carregadores",
    price: "R$ 129,90",
    oldPrice: "R$ 189,90",
    description:
      "Tecnologia GaN compacta com 2x USB-C + 1x USB-A. Carrega notebook, celular e tablet ao mesmo tempo. 65W total.",
    badge: "top",
  },
  {
    id: 13,
    name: "Carregador Turbo 67W Xiaomi",
    category: "Carregadores",
    price: "R$ 89,90",
    description:
      "Carregamento turbo 67W compatível com Xiaomi, Redmi e POCO. Carrega de 0 a 100% em 40 minutos.",
  },
  {
    id: 14,
    name: "Carregador Veicular 45W USB-C",
    category: "Carregadores",
    price: "R$ 54,90",
    oldPrice: "R$ 79,90",
    description:
      "Carregador veicular com Power Delivery 45W. Porta USB-C + USB-A simultâneas. Chip de proteção contra sobrecarga.",
    badge: "oferta",
  },
  {
    id: 15,
    name: "Base Carregamento Sem Fio 15W Qi2",
    category: "Carregadores",
    price: "R$ 99,90",
    description:
      "Suporte de carregamento sem fio Qi2 com 15W de potência. Compatível com iPhone MagSafe e Android Qi. LED indicador.",
    badge: "novo",
  },
  {
    id: 16,
    name: "Powerbank 20000mAh 22.5W PD",
    category: "Carregadores",
    price: "R$ 149,90",
    description:
      "Bateria portátil de 20000mAh com Power Delivery 22.5W. 2x USB-A + USB-C + Micro-USB. Carrega notebook slim.",
    badge: "top",
  },
  {
    id: 17,
    name: "Powerbank Slim 10000mAh MagSafe",
    category: "Carregadores",
    price: "R$ 119,90",
    description:
      "Bateria magnética MagSafe com 10000mAh. Cola no iPhone sem cabos. LED de status e passthrough charging.",
  },

  // FONES
  {
    id: 18,
    name: "Fone TWS ANC Bluetooth 5.3",
    category: "Fones",
    price: "R$ 189,90",
    oldPrice: "R$ 259,90",
    description:
      "Cancelamento ativo de ruído com modo transparência. Driver de 12mm, graves potentes. Até 36h de bateria com estojo.",
    badge: "top",
  },
  {
    id: 19,
    name: "Fone TWS Básico IPX4",
    category: "Fones",
    price: "R$ 69,90",
    description:
      "Fone sem fio resistente à água IPX4. Conexão Bluetooth 5.1 estável. Até 25h de uso com estojo de carga.",
    badge: "oferta",
  },
  {
    id: 20,
    name: "Headset Gamer USB 7.1 Surround",
    category: "Fones",
    price: "R$ 159,90",
    description:
      "Headset com som surround 7.1 virtual. Microfone retrátil com cancelamento de ruído. Almofadas memory foam.",
  },
  {
    id: 21,
    name: "Fone com Fio USB-C Hi-Fi",
    category: "Fones",
    price: "R$ 49,90",
    description:
      "Fone in-ear USB-C com DAC integrado. Resposta de frequência de 20Hz-20kHz. Driver 10mm com graves encorpados.",
    badge: "novo",
  },

  // CABOS
  {
    id: 22,
    name: "Cabo USB-C 100W 2m Nylon Trançado",
    category: "Cabos",
    price: "R$ 49,90",
    oldPrice: "R$ 69,90",
    description:
      "Cabo USB-C para USB-C 100W com revestimento nylon. Suporta carregamento rápido e transferência de dados 480Mbps.",
    badge: "top",
  },
  {
    id: 23,
    name: "Cabo Lightning MFi 1m Apple",
    category: "Cabos",
    price: "R$ 59,90",
    description:
      "Certificado MFi pela Apple. Carregamento rápido compatível com todos os iPhones. Revestimento PVC reforçado.",
  },
  {
    id: 24,
    name: "Cabo Magnético 3 em 1 240W",
    category: "Cabos",
    price: "R$ 79,90",
    description:
      "Cabo magnético 240W com pontas intercambiáveis USB-C, Lightning e Micro-USB. LED indicador de carga. Nylon premium.",
    badge: "novo",
  },
  {
    id: 25,
    name: "Cabo HDMI 2.1 8K 2m",
    category: "Cabos",
    price: "R$ 89,90",
    description:
      "HDMI 2.1 com suporte a 8K@60Hz e 4K@120Hz. Ideal para PS5, Xbox Series X e monitores de alta taxa de atualização.",
    badge: "oferta",
  },

  // ARMAZENAMENTO
  {
    id: 26,
    name: "Cartão MicroSD 256GB A2 V30 Samsung",
    category: "Armazenamento",
    price: "R$ 99,90",
    oldPrice: "R$ 149,90",
    description:
      "Cartão MicroSD 256GB classe A2 V30. Leitura 160MB/s, gravação 120MB/s. Ideal para fotos 4K e apps.",
    badge: "top",
  },
  {
    id: 27,
    name: "Pen Drive 128GB USB 3.2 Kingston",
    category: "Armazenamento",
    price: "R$ 44,90",
    description:
      "Pen drive compacto USB 3.2 Gen 1 com leitura de até 200MB/s. Carcaça metálica resistente. Tampa removível.",
  },
  {
    id: 28,
    name: "SSD Externo Portátil 1TB USB-C",
    category: "Armazenamento",
    price: "R$ 299,90",
    description:
      "SSD externo com leitura de 1050MB/s e gravação de 1000MB/s. Resistente a queda e poeira. Compacto 8x4cm.",
    badge: "novo",
  },
  {
    id: 29,
    name: "Hub USB-C 8 em 1 HDMI 4K",
    category: "Armazenamento",
    price: "R$ 149,90",
    oldPrice: "R$ 199,90",
    description:
      "Hub com HDMI 4K, 3x USB-A 3.0, USB-C PD 100W, SD, MicroSD e Ethernet Gigabit. Para notebooks e iPads.",
    badge: "oferta",
  },

  // INFORMÁTICA
  {
    id: 30,
    name: "Mouse Sem Fio Silencioso 2.4GHz",
    category: "Informática",
    price: "R$ 59,90",
    description:
      "Mouse sem fio com clique silencioso, receptor nano USB. DPI ajustável 800/1200/1600. Bateria AA dura 12 meses.",
    badge: "top",
  },
  {
    id: 31,
    name: "Teclado Mecânico Compacto TKL RGB",
    category: "Informática",
    price: "R$ 219,90",
    oldPrice: "R$ 289,90",
    description:
      "Teclado mecânico TKL com switches Red lineares, retroiluminação RGB e cabo USB-C removível. Layout ABNT2.",
    badge: "oferta",
  },
  {
    id: 32,
    name: "Webcam Full HD 1080p 60fps",
    category: "Informática",
    price: "R$ 189,90",
    description:
      "Webcam 1080p@60fps com microfone estéreo com cancelamento de ruído. Auto-foco e correção de luz automática.",
    badge: "novo",
  },
  {
    id: 33,
    name: "Mousepad Gamer XXL 900x400mm",
    category: "Informática",
    price: "R$ 79,90",
    description:
      "Mousepad gamer XXL que cobre toda a mesa. Base antiderrapante em borracha. Superfície texturizada speed.",
  },
  {
    id: 34,
    name: "Roteador Wi-Fi 6 AX3000 Dual Band",
    category: "Informática",
    price: "R$ 329,90",
    description:
      "Wi-Fi 6 AX3000 com tecnologia OFDMA e MU-MIMO. Alcance de 200m², 4 antenas externas, porta WAN Gigabit.",
    badge: "top",
  },
  {
    id: 35,
    name: "Suporte Notebook Alumínio Ajustável",
    category: "Informática",
    price: "R$ 89,90",
    oldPrice: "R$ 119,90",
    description:
      "Suporte em alumínio com 6 alturas ajustáveis. Ventilação integrada que reduz temperatura em até 4°C. Universal.",
    badge: "oferta",
  },
];

const badgeConfig = {
  top: { label: "Mais Vendido", icon: TrendingUp, color: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
  oferta: { label: "Oferta", icon: Zap, color: "text-red-400 bg-red-400/10 border-red-400/30" },
  novo: { label: "Novo", icon: Star, color: "text-primary bg-primary/10 border-primary/30" },
};

const ProductsSection = () => {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered =
    filter === "Todos" ? products : products.filter((p) => p.category === filter);

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
          <p className="text-muted-foreground">
            Os mais buscados do mercado — preços imbatíveis.
          </p>
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

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelected(product)}
                  className="bg-card rounded-xl p-4 border-glow shadow-sm cursor-pointer card-interactive group relative"
                >
                  {/* Badge */}
                  {badge && BadgeIcon && (
                    <span
                      className={`absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${badge.color}`}
                    >
                      <BadgeIcon size={10} />
                      {badge.label}
                    </span>
                  )}

                  <div className="w-full aspect-square rounded-lg bg-muted flex items-center justify-center mb-3 overflow-hidden">
                    <ShoppingBag
                      size={32}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>

                  <h3 className="text-xs font-semibold text-foreground mb-1 line-clamp-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mb-2">{product.category}</p>

                  <div className="flex items-baseline gap-2">
                    <p className="text-primary font-bold text-sm">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-muted-foreground text-[10px] line-through">
                        {product.oldPrice}
                      </p>
                    )}
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
                className="bg-card rounded-2xl p-6 md:p-8 max-w-md w-full shadow-xl border border-border relative"
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

                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selected.category}
                  </span>
                  {selected.badge && (
                    <span
                      className={`flex items-center gap-1 text-[10px] font-semibold px-2 py-1 rounded-full border ${badgeConfig[selected.badge].color}`}
                    >
                      {(() => {
                        const Icon = badgeConfig[selected.badge].icon;
                        return <Icon size={10} />;
                      })()}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductsSection;
