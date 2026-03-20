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
  image: string;
}

const products: Product[] = [
  // CAPAS
  { id: 1, name: "Capa Anti-Impacto Samsung Galaxy A55", category: "Capas", price: "R$ 34,90", oldPrice: "R$ 49,90", description: "Proteção militar grau A com bordas elevadas e design slim. Compatível com carregamento sem fio. Material TPU reforçado.", badge: "top", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80&fit=crop" },
  { id: 2, name: "Capa MagSafe iPhone 15 Pro", category: "Capas", price: "R$ 79,90", description: "Capa com anel MagSafe integrado, compatível com todos os acessórios magnéticos Apple. Silicone premium com microfibra interna.", badge: "novo", image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&q=80&fit=crop" },
  { id: 3, name: "Capa Transparente Redmi Note 13", category: "Capas", price: "R$ 24,90", oldPrice: "R$ 39,90", description: "Capa transparente anti-amarelamento com reforço nas quinas. Exibe o design original do aparelho sem perder proteção.", badge: "oferta", image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&q=80&fit=crop" },
  { id: 4, name: "Capa Carteira Motorola Moto G84", category: "Capas", price: "R$ 54,90", description: "Capa flip com compartimentos para cartões, dinheiro e suporte horizontal. Couro sintético premium com fechamento magnético.", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&q=80&fit=crop" },
  { id: 5, name: "Capa Anti-Impacto Samsung A35", category: "Capas", price: "R$ 32,90", description: "Proteção reforçada nas 4 quinas com bordas elevadas para câmera e tela. Material híbrido PC + TPU.", badge: "top", image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80&fit=crop" },
  { id: 6, name: "Capa Silicone iPhone 14", category: "Capas", price: "R$ 44,90", description: "Silicone líquido com interior de microfibra. Toque aveludado e proteção contra arranhões. Compatível com MagSafe.", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&q=80&fit=crop" },

  // PELÍCULAS
  { id: 7, name: "Película 3D Vidro Samsung S24", category: "Películas", price: "R$ 39,90", oldPrice: "R$ 59,90", description: "Cobertura total 3D com cola UV. Dureza 9H, oleofóbica, anti-impressão digital. Kit com aplicador incluso.", badge: "top", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&fit=crop" },
  { id: 8, name: "Película Hidrogel iPhone 15 Pro Max", category: "Películas", price: "R$ 34,90", description: "Película flexível com auto-regeneração de microarranhões. Instalação sem bolhas com guia de posicionamento.", image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80&fit=crop" },
  { id: 9, name: "Película Privacidade 180° Redmi Note 13", category: "Películas", price: "R$ 44,90", description: "Bloqueia visão lateral em 180°. Ideal para uso em transporte público e ambientes corporativos. Dureza 9H.", badge: "novo", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&fit=crop" },
  { id: 10, name: "Película Cerâmica Fosca Moto G73", category: "Películas", price: "R$ 27,90", oldPrice: "R$ 39,90", description: "Acabamento fosco anti-reflexo que reduz marcas de dedos. Suaviza toque na tela para jogos e digitação.", badge: "oferta", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80&fit=crop" },
  { id: 11, name: "Película 3D Samsung A55 Cola UV", category: "Películas", price: "R$ 42,90", description: "Vidro temperado com cobertura 3D e cola UV. Garante aderência total mesmo em telas curvas.", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&fit=crop" },

  // CARREGADORES
  { id: 12, name: "Carregador GaN 65W 3 Portas", category: "Carregadores", price: "R$ 129,90", oldPrice: "R$ 189,90", description: "Tecnologia GaN compacta com 2x USB-C + 1x USB-A. Carrega notebook, celular e tablet ao mesmo tempo. 65W total.", badge: "top", image: "https://images.unsplash.com/photo-1609592806596-b5ef0ef43e49?w=600&q=80&fit=crop" },
  { id: 13, name: "Carregador Turbo 67W Xiaomi", category: "Carregadores", price: "R$ 89,90", description: "Carregamento turbo 67W compatível com Xiaomi, Redmi e POCO. Carrega de 0 a 100% em 40 minutos.", image: "https://images.unsplash.com/photo-1583863788434-e62bd5278a6e?w=600&q=80&fit=crop" },
  { id: 14, name: "Carregador Veicular 45W USB-C", category: "Carregadores", price: "R$ 54,90", oldPrice: "R$ 79,90", description: "Carregador veicular com Power Delivery 45W. Porta USB-C + USB-A simultâneas. Chip de proteção contra sobrecarga.", badge: "oferta", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop" },
  { id: 15, name: "Base Carregamento Sem Fio 15W Qi2", category: "Carregadores", price: "R$ 99,90", description: "Suporte de carregamento sem fio Qi2 com 15W de potência. Compatível com iPhone MagSafe e Android Qi. LED indicador.", badge: "novo", image: "https://images.unsplash.com/photo-1586495777744-4e6232bf2176?w=600&q=80&fit=crop" },
  { id: 16, name: "Powerbank 20000mAh 22.5W PD", category: "Carregadores", price: "R$ 149,90", description: "Bateria portátil de 20000mAh com Power Delivery 22.5W. 2x USB-A + USB-C + Micro-USB. Carrega notebook slim.", badge: "top", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop" },
  { id: 17, name: "Powerbank Slim 10000mAh MagSafe", category: "Carregadores", price: "R$ 119,90", description: "Bateria magnética MagSafe com 10000mAh. Cola no iPhone sem cabos. LED de status e passthrough charging.", image: "https://images.unsplash.com/photo-1610792516286-9a9a3e5b7a20?w=600&q=80&fit=crop" },

  // FONES
  { id: 18, name: "Fone TWS ANC Bluetooth 5.3", category: "Fones", price: "R$ 189,90", oldPrice: "R$ 259,90", description: "Cancelamento ativo de ruído com modo transparência. Driver de 12mm, graves potentes. Até 36h de bateria com estojo.", badge: "top", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80&fit=crop" },
  { id: 19, name: "Fone TWS Básico IPX4", category: "Fones", price: "R$ 69,90", description: "Fone sem fio resistente à água IPX4. Conexão Bluetooth 5.1 estável. Até 25h de uso com estojo de carga.", badge: "oferta", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80&fit=crop" },
  { id: 20, name: "Headset Gamer USB 7.1 Surround", category: "Fones", price: "R$ 159,90", description: "Headset com som surround 7.1 virtual. Microfone retrátil com cancelamento de ruído. Almofadas memory foam.", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&q=80&fit=crop" },
  { id: 21, name: "Fone com Fio USB-C Hi-Fi", category: "Fones", price: "R$ 49,90", description: "Fone in-ear USB-C com DAC integrado. Resposta de frequência de 20Hz-20kHz. Driver 10mm com graves encorpados.", badge: "novo", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&fit=crop" },

  // CABOS
  { id: 22, name: "Cabo USB-C 100W 2m Nylon Trançado", category: "Cabos", price: "R$ 49,90", oldPrice: "R$ 69,90", description: "Cabo USB-C para USB-C 100W com revestimento nylon. Suporta carregamento rápido e transferência de dados 480Mbps.", badge: "top", image: "https://images.unsplash.com/photo-1625772452859-1c03d884dcd7?w=600&q=80&fit=crop" },
  { id: 23, name: "Cabo Lightning MFi 1m Apple", category: "Cabos", price: "R$ 59,90", description: "Certificado MFi pela Apple. Carregamento rápido compatível com todos os iPhones. Revestimento PVC reforçado.", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80&fit=crop" },
  { id: 24, name: "Cabo Magnético 3 em 1 240W", category: "Cabos", price: "R$ 79,90", description: "Cabo magnético 240W com pontas intercambiáveis USB-C, Lightning e Micro-USB. LED indicador de carga.", badge: "novo", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop" },
  { id: 25, name: "Cabo HDMI 2.1 8K 2m", category: "Cabos", price: "R$ 89,90", description: "HDMI 2.1 com suporte a 8K@60Hz e 4K@120Hz. Ideal para PS5, Xbox Series X e monitores de alta taxa de atualização.", badge: "oferta", image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=600&q=80&fit=crop" },

  // ARMAZENAMENTO
  { id: 26, name: "Cartão MicroSD 256GB A2 V30 Samsung", category: "Armazenamento", price: "R$ 99,90", oldPrice: "R$ 149,90", description: "Cartão MicroSD 256GB classe A2 V30. Leitura 160MB/s, gravação 120MB/s. Ideal para fotos 4K e apps.", badge: "top", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&q=80&fit=crop" },
  { id: 27, name: "Pen Drive 128GB USB 3.2 Kingston", category: "Armazenamento", price: "R$ 44,90", description: "Pen drive compacto USB 3.2 Gen 1 com leitura de até 200MB/s. Carcaça metálica resistente. Tampa removível.", image: "https://images.unsplash.com/photo-1465225314224-587cd83d322b?w=600&q=80&fit=crop" },
  { id: 28, name: "SSD Externo Portátil 1TB USB-C", category: "Armazenamento", price: "R$ 299,90", description: "SSD externo com leitura de 1050MB/s e gravação de 1000MB/s. Resistente a queda e poeira. Compacto 8x4cm.", badge: "novo", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80&fit=crop" },
  { id: 29, name: "Hub USB-C 8 em 1 HDMI 4K", category: "Armazenamento", price: "R$ 149,90", oldPrice: "R$ 199,90", description: "Hub com HDMI 4K, 3x USB-A 3.0, USB-C PD 100W, SD, MicroSD e Ethernet Gigabit. Para notebooks e iPads.", badge: "oferta", image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80&fit=crop" },

  // INFORMÁTICA
  { id: 30, name: "Mouse Sem Fio Silencioso 2.4GHz", category: "Informática", price: "R$ 59,90", description: "Mouse sem fio com clique silencioso, receptor nano USB. DPI ajustável 800/1200/1600. Bateria AA dura 12 meses.", badge: "top", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80&fit=crop" },
  { id: 31, name: "Teclado Mecânico Compacto TKL RGB", category: "Informática", price: "R$ 219,90", oldPrice: "R$ 289,90", description: "Teclado mecânico TKL com switches Red lineares, retroiluminação RGB e cabo USB-C removível. Layout ABNT2.", badge: "oferta", image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80&fit=crop" },
  { id: 32, name: "Webcam Full HD 1080p 60fps", category: "Informática", price: "R$ 189,90", description: "Webcam 1080p@60fps com microfone estéreo com cancelamento de ruído. Auto-foco e correção de luz automática.", badge: "novo", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80&fit=crop" },
  { id: 33, name: "Mousepad Gamer XXL 900x400mm", category: "Informática", price: "R$ 79,90", description: "Mousepad gamer XXL que cobre toda a mesa. Base antiderrapante em borracha. Superfície texturizada speed.", image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80&fit=crop" },
  { id: 34, name: "Roteador Wi-Fi 6 AX3000 Dual Band", category: "Informática", price: "R$ 329,90", description: "Wi-Fi 6 AX3000 com tecnologia OFDMA e MU-MIMO. Alcance de 200m², 4 antenas externas, porta WAN Gigabit.", badge: "top", image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600&q=80&fit=crop" },
  { id: 35, name: "Suporte Notebook Alumínio Ajustável", category: "Informática", price: "R$ 89,90", oldPrice: "R$ 119,90", description: "Suporte em alumínio com 6 alturas ajustáveis. Ventilação integrada que reduz temperatura em até 4°C. Universal.", badge: "oferta", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80&fit=crop" },
];

const badgeConfig = {
  top:   { label: "Mais Vendido", icon: TrendingUp, color: "text-amber-400 bg-amber-400/10 border-amber-400/30" },
  oferta:{ label: "Oferta",       icon: Zap,         color: "text-red-400 bg-red-400/10 border-red-400/30" },
  novo:  { label: "Novo",         icon: Star,        color: "text-primary bg-primary/10 border-primary/30" },
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

                  <div className="w-full aspect-square overflow-hidden bg-muted">
                    {!hasImgError ? (
                      <img
                        src={product.image}
                        alt={product.name}
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
                  className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 transition-colors"
                >
                  <X size={18} />
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
