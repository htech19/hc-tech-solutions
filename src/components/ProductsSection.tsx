import { useState } from "react";
import { X, Star, Zap, TrendingUp, Smartphone, Shield, Wifi, Headphones, Cable, HardDrive, Monitor, Battery } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Todos","Capas","Películas","Carregadores","Fones","Cabos","Armazenamento","Informática"];

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  description: string;
  badge?: "top" | "oferta" | "novo";
  image: string;
  fallbackGradient: string;
  CategoryIcon: React.ElementType;
}

// Imagens via dummyjson CDN (CORS aberto) + fallback com gradiente por categoria
const IMG = {
  phone1:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%2014%20128GB%20Blue/1.webp",
  phone2:   "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2015%20Pro/1.webp",
  phone3:   "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S21%20Plus/1.webp",
  head1:    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/1.webp",
  head2:    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.webp",
  laptop1:  "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.webp",
  laptop2:  "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20OLED%20UX8402/1.webp",
  tablet1:  "https://cdn.dummyjson.com/products/images/tablets/Apple%20iPad%20Air%205%20Purple/1.webp",
  watch1:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20SE/1.webp",
  power1:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20USB-C%20Charge%20Cable%20(1%20m)/1.webp",
  power2:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/1.webp",
  power3:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%2020W%20USB-C%20Power%20Adapter/1.webp",
  case1:    "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%2014%20Pro%20Case/1.webp",
  watch2:   "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%208/1.webp",
  mouse1:   "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.webp",
};

const GREEN = "#00A651";
const SILVER = "#C0C2C0";

const products: Product[] = [
  // CAPAS
  { id:1,  name:"Capa Anti-Impacto Samsung Galaxy A55", category:"Capas", price:"R$ 34,90", oldPrice:"R$ 49,90", badge:"top",    description:"Proteção militar grau A com bordas elevadas. Material TPU reforçado, compatível com carregamento sem fio.", image:IMG.case1,   fallbackGradient:"linear-gradient(135deg,#1f2a1f,#0d1a0d)", CategoryIcon:Shield },
  { id:2,  name:"Capa MagSafe iPhone 15 Pro",            category:"Capas", price:"R$ 79,90",                      badge:"novo",   description:"Anel MagSafe integrado. Silicone premium com interior de microfibra. Compatível com todos acessórios magnéticos.", image:IMG.phone2, fallbackGradient:"linear-gradient(135deg,#1a1f1a,#0a1a10)", CategoryIcon:Shield },
  { id:3,  name:"Capa Transparente Redmi Note 13",       category:"Capas", price:"R$ 24,90", oldPrice:"R$ 39,90", badge:"oferta", description:"Anti-amarelamento com reforço nas quinas. Exibe o design original sem perder a proteção.", image:IMG.phone3,  fallbackGradient:"linear-gradient(135deg,#1a1a2a,#0d0d1a)", CategoryIcon:Shield },
  { id:4,  name:"Capa Carteira Motorola Moto G84",       category:"Capas", price:"R$ 54,90",                                      description:"Flip com compartimentos para cartões e dinheiro. Couro sintético premium com fechamento magnético.", image:IMG.phone1,  fallbackGradient:"linear-gradient(135deg,#2a1a0a,#1a0d00)", CategoryIcon:Shield },
  { id:5,  name:"Capa Silicone iPhone 14",               category:"Capas", price:"R$ 44,90",                      badge:"top",    description:"Silicone líquido com interior de microfibra. Toque aveludado e bordas elevadas. Compatível com MagSafe.", image:IMG.phone2, fallbackGradient:"linear-gradient(135deg,#1a1f1a,#0a1a10)", CategoryIcon:Shield },

  // PELÍCULAS
  { id:6,  name:"Película 3D Vidro Samsung S24",          category:"Películas", price:"R$ 39,90", oldPrice:"R$ 59,90", badge:"top",    description:"Cobertura total 3D com cola UV. Dureza 9H, oleofóbica. Kit completo com aplicador e guia de posição.", image:IMG.phone3,  fallbackGradient:"linear-gradient(135deg,#001a0d,#002a14)", CategoryIcon:Smartphone },
  { id:7,  name:"Película Hidrogel iPhone 15 Pro Max",    category:"Películas", price:"R$ 34,90",                                       description:"Flexível com auto-regeneração de microarranhões. Instalação sem bolhas com guia posicionador.", image:IMG.phone2,  fallbackGradient:"linear-gradient(135deg,#1a1a0d,#2a2a00)", CategoryIcon:Smartphone },
  { id:8,  name:"Película Privacidade 180° Redmi Note 13",category:"Películas", price:"R$ 44,90",                      badge:"novo",   description:"Bloqueia visão lateral em 180°. Ideal para transporte público e ambientes corporativos. Dureza 9H.", image:IMG.phone1,  fallbackGradient:"linear-gradient(135deg,#1a001a,#2a002a)", CategoryIcon:Smartphone },
  { id:9,  name:"Película Cerâmica Fosca Moto G73",       category:"Películas", price:"R$ 27,90", oldPrice:"R$ 39,90", badge:"oferta", description:"Acabamento fosco anti-reflexo. Reduz marcas de dedos. Excelente para jogos e digitação intensa.", image:IMG.phone3,  fallbackGradient:"linear-gradient(135deg,#1a0d00,#2a1400)", CategoryIcon:Smartphone },

  // CARREGADORES
  { id:10, name:"Carregador GaN 65W 3 Portas",        category:"Carregadores", price:"R$ 129,90", oldPrice:"R$ 189,90", badge:"top",    description:"Tecnologia GaN compacta: 2x USB-C + 1x USB-A. Carrega notebook, celular e tablet simultaneamente.", image:IMG.power3, fallbackGradient:"linear-gradient(135deg,#001a08,#003314)", CategoryIcon:Battery },
  { id:11, name:"Carregador Turbo 67W Xiaomi",        category:"Carregadores", price:"R$ 89,90",                                        description:"Turbo 67W para Xiaomi, Redmi e POCO. Zero a 100% em apenas 40 minutos. Proteção múltipla.", image:IMG.power3, fallbackGradient:"linear-gradient(135deg,#1a0000,#330000)", CategoryIcon:Battery },
  { id:12, name:"Carregador Veicular 45W USB-C",      category:"Carregadores", price:"R$ 54,90",  oldPrice:"R$ 79,90",  badge:"oferta", description:"Power Delivery 45W. USB-C + USB-A simultâneos. Proteção inteligente contra sobrecarga e superaquecimento.", image:IMG.power1, fallbackGradient:"linear-gradient(135deg,#001a1a,#003333)", CategoryIcon:Battery },
  { id:13, name:"Base Carregamento Sem Fio 15W Qi2",  category:"Carregadores", price:"R$ 99,90",                        badge:"novo",   description:"Qi2 15W compatível com iPhone MagSafe e qualquer Android Qi. LED indicador de status de carga.", image:IMG.power2, fallbackGradient:"linear-gradient(135deg,#0d001a,#1a0033)", CategoryIcon:Battery },
  { id:14, name:"Powerbank 20000mAh 22.5W PD",        category:"Carregadores", price:"R$ 149,90",                       badge:"top",    description:"20000mAh com Power Delivery 22.5W. 2x USB-A + USB-C + Micro-USB. Carrega notebooks slim.", image:IMG.power2, fallbackGradient:"linear-gradient(135deg,#001a0d,#002a14)", CategoryIcon:Battery },

  // FONES
  { id:15, name:"Fone TWS ANC Bluetooth 5.3",   category:"Fones", price:"R$ 189,90", oldPrice:"R$ 259,90", badge:"top",    description:"Cancelamento ativo de ruído com modo transparência. Driver 12mm com graves potentes. 36h de bateria total.", image:IMG.head2,  fallbackGradient:"linear-gradient(135deg,#001a1a,#003333)", CategoryIcon:Headphones },
  { id:16, name:"Fone Over-Ear ANC Premium",    category:"Fones", price:"R$ 349,90",                       badge:"novo",   description:"Over-ear com ANC adaptativo de alta precisão. Almofadas memory foam. Até 40h de reprodução contínua.", image:IMG.head1,  fallbackGradient:"linear-gradient(135deg,#1a1a00,#2a2a00)", CategoryIcon:Headphones },
  { id:17, name:"Headset Gamer USB 7.1 Surround",category:"Fones", price:"R$ 159,90",                                     description:"Surround 7.1 virtual. Microfone retrátil com cancelamento de ruído. Almofadas memory foam ultra-macias.", image:IMG.head1,  fallbackGradient:"linear-gradient(135deg,#1a0000,#330a0a)", CategoryIcon:Headphones },
  { id:18, name:"Fone com Fio USB-C Hi-Fi",     category:"Fones", price:"R$ 49,90",                       badge:"oferta", description:"DAC integrado USB-C. Frequência 20Hz–20kHz. Driver 10mm com graves encorpados e alta fidelidade.", image:IMG.head2,  fallbackGradient:"linear-gradient(135deg,#0d1a0d,#1a2a1a)", CategoryIcon:Headphones },

  // CABOS
  { id:19, name:"Cabo USB-C 100W 2m Nylon Trançado", category:"Cabos", price:"R$ 49,90", oldPrice:"R$ 69,90", badge:"top",    description:"100W com revestimento nylon premium. Suporta carga rápida e transferência de dados em 480Mbps.", image:IMG.power1, fallbackGradient:"linear-gradient(135deg,#001a08,#003314)", CategoryIcon:Cable },
  { id:20, name:"Cabo Lightning MFi 1m Apple",       category:"Cabos", price:"R$ 59,90",                                     description:"Certificado MFi pela Apple. Carregamento rápido para todos os iPhones. Revestimento PVC reforçado.", image:IMG.power1, fallbackGradient:"linear-gradient(135deg,#1a1a1a,#2a2a2a)", CategoryIcon:Cable },
  { id:21, name:"Cabo Magnético 3 em 1 240W",        category:"Cabos", price:"R$ 79,90",                     badge:"novo",   description:"240W com pontas intercambiáveis USB-C, Lightning e Micro-USB. LED indicador de carga ativo.", image:IMG.power1, fallbackGradient:"linear-gradient(135deg,#1a000d,#2a0014)", CategoryIcon:Cable },
  { id:22, name:"Cabo HDMI 2.1 8K 2m",              category:"Cabos", price:"R$ 89,90",                     badge:"oferta", description:"8K@60Hz e 4K@120Hz. Ideal para PS5, Xbox Series X e monitores gaming de alta taxa de atualização.", image:IMG.power1, fallbackGradient:"linear-gradient(135deg,#00001a,#00002a)", CategoryIcon:Cable },

  // ARMAZENAMENTO
  { id:23, name:"Cartão MicroSD 256GB A2 V30 Samsung", category:"Armazenamento", price:"R$ 99,90",  oldPrice:"R$ 149,90", badge:"top",    description:"Classe A2 V30, leitura 160MB/s e gravação 120MB/s. Para fotos em 4K, jogos e apps exigentes.", image:IMG.tablet1, fallbackGradient:"linear-gradient(135deg,#001a0d,#003322)", CategoryIcon:HardDrive },
  { id:24, name:"Pen Drive 128GB USB 3.2 Kingston",    category:"Armazenamento", price:"R$ 44,90",                                        description:"USB 3.2 Gen 1, leitura até 200MB/s. Carcaça metálica resistente. Compacto e durável.", image:IMG.tablet1, fallbackGradient:"linear-gradient(135deg,#1a1a00,#2a2a00)", CategoryIcon:HardDrive },
  { id:25, name:"SSD Externo Portátil 1TB USB-C",      category:"Armazenamento", price:"R$ 299,90",                        badge:"novo",   description:"Leitura 1050MB/s e gravação 1000MB/s. Resistente a quedas. Compacto 8x4cm. USB-C reversível.", image:IMG.tablet1, fallbackGradient:"linear-gradient(135deg,#001a1a,#002a2a)", CategoryIcon:HardDrive },
  { id:26, name:"Hub USB-C 8 em 1 HDMI 4K",           category:"Armazenamento", price:"R$ 149,90", oldPrice:"R$ 199,90", badge:"oferta", description:"HDMI 4K + 3x USB-A 3.0 + PD 100W + SD + MicroSD + Ethernet Gigabit. Para notebooks e iPads.", image:IMG.tablet1, fallbackGradient:"linear-gradient(135deg,#1a000d,#2a0019)", CategoryIcon:HardDrive },

  // INFORMÁTICA
  { id:27, name:"Mouse Sem Fio Silencioso 2.4GHz",    category:"Informática", price:"R$ 59,90",                        badge:"top",    description:"Clique silencioso com receptor nano USB. DPI 800/1200/1600 ajustável. Bateria AA dura 12 meses.", image:IMG.laptop2, fallbackGradient:"linear-gradient(135deg,#001a08,#003314)", CategoryIcon:Monitor },
  { id:28, name:"Teclado Mecânico TKL RGB ABNT2",     category:"Informática", price:"R$ 219,90", oldPrice:"R$ 289,90", badge:"oferta", description:"Switches Red lineares, retroiluminação RGB por tecla. Cabo USB-C removível. Layout ABNT2 completo.", image:IMG.laptop1, fallbackGradient:"linear-gradient(135deg,#1a0000,#330000)", CategoryIcon:Monitor },
  { id:29, name:"Webcam Full HD 1080p 60fps",         category:"Informática", price:"R$ 189,90",                       badge:"novo",   description:"1080p a 60fps com microfone estéreo ANC. Auto-foco rápido e correção automática de iluminação.", image:IMG.laptop2, fallbackGradient:"linear-gradient(135deg,#001a1a,#003333)", CategoryIcon:Monitor },
  { id:30, name:"Roteador Wi-Fi 6 AX3000 Dual Band",  category:"Informática", price:"R$ 329,90",                       badge:"top",    description:"Wi-Fi 6 AX3000 com OFDMA e MU-MIMO. Alcance de 200m². 4 antenas externas, porta WAN Gigabit.", image:IMG.laptop1, fallbackGradient:"linear-gradient(135deg,#000d1a,#001a33)", CategoryIcon:Wifi },
  { id:31, name:"Suporte Notebook Alumínio Ajustável",category:"Informática", price:"R$ 89,90",  oldPrice:"R$ 119,90", badge:"oferta", description:"6 alturas ajustáveis em alumínio aeronáutico. Ventilação integrada reduz temperatura em até 4°C.", image:IMG.laptop2, fallbackGradient:"linear-gradient(135deg,#1a1a1a,#2a2a2a)", CategoryIcon:Monitor },
];

const badgeConfig = {
  top:    { label:"Mais Vendido", icon:TrendingUp, bg:"rgba(0,166,81,0.15)",  border:"rgba(0,166,81,0.4)",  text:"#00A651" },
  oferta: { label:"Oferta",       icon:Zap,        bg:"rgba(220,38,38,0.15)", border:"rgba(220,38,38,0.4)", text:"#ef4444" },
  novo:   { label:"Novo",         icon:Star,       bg:"rgba(192,194,192,0.15)",border:"rgba(192,194,192,0.4)",text:"#C0C2C0" },
};

export default function ProductsSection() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Product | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const filtered = filter === "Todos" ? products : products.filter((p) => p.category === filter);
  const handleImgError = (id: number) => setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <section
      id="produtos"
      style={{ background: "#1A1A1A" }}
      className="py-20 md:py-28"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color:"#fff" }}>
            <span style={{ color:"#00A651" }}>Produtos</span>{" "}
            <span style={{ color:"#C0C2C0" }}>& Acessórios</span>
          </h2>
          <p style={{ color:"#888" }}>Os mais buscados do mercado — preços imbatíveis.</p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: active ? "#00A651" : "transparent",
                  color: active ? "#fff" : "#C0C2C0",
                  border: `1.5px solid ${active ? "#00A651" : "#C0C2C0"}`,
                  boxShadow: active ? "0 0 12px rgba(0,166,81,0.5)" : "none",
                }}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 active:scale-95"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => {
              const badge = product.badge ? badgeConfig[product.badge] : null;
              const BadgeIcon = badge?.icon;
              const hasErr = imgErrors[product.id];
              const Icon = product.CategoryIcon;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity:0, scale:0.92 }}
                  animate={{ opacity:1, scale:1 }}
                  exit={{ opacity:0, scale:0.92 }}
                  transition={{ duration:0.22 }}
                  onClick={() => setSelected(product)}
                  className="cursor-pointer group relative overflow-hidden"
                  style={{
                    background:"#242424",
                    border:"1px solid #333",
                    borderRadius:"14px",
                    transition:"border-color 0.3s, box-shadow 0.3s",
                  }}
                  whileHover={{
                    borderColor:"#00A651",
                    boxShadow:"0 0 18px rgba(0,166,81,0.25)",
                  }}
                >
                  {/* Badge */}
                  {badge && BadgeIcon && (
                    <span
                      className="absolute top-2 right-2 z-10 flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background:badge.bg, border:`1px solid ${badge.border}`, color:badge.text }}
                    >
                      <BadgeIcon size={9} />
                      {badge.label}
                    </span>
                  )}

                  {/* Imagem */}
                  <div className="w-full aspect-square overflow-hidden relative" style={{ borderRadius:"14px 14px 0 0" }}>
                    {!hasErr ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={() => handleImgError(product.id)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                        style={{ display:"block" }}
                      />
                    ) : (
                      // Fallback: gradiente escuro temático + ícone grande
                      <div
                        className="w-full h-full flex flex-col items-center justify-center gap-3"
                        style={{ background: product.fallbackGradient }}
                      >
                        <Icon size={44} style={{ color:"#00A651", opacity:0.85 }} />
                        <span style={{ color:"#C0C2C0", fontSize:"11px", textAlign:"center", padding:"0 12px", lineHeight:1.3 }}>
                          {product.category}
                        </span>
                      </div>
                    )}
                    {/* Overlay sutil no hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background:"linear-gradient(to top, rgba(0,166,81,0.18) 0%, transparent 60%)" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="text-xs font-semibold mb-1 line-clamp-2 leading-snug" style={{ color:"#fff" }}>
                      {product.name}
                    </h3>
                    <p className="text-[10px] mb-2" style={{ color:"#666" }}>{product.category}</p>
                    <div className="flex items-baseline gap-2">
                      <p className="font-bold text-sm" style={{ color:"#00A651" }}>{product.price}</p>
                      {product.oldPrice && (
                        <p className="text-[10px] line-through" style={{ color:"#555" }}>{product.oldPrice}</p>
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
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity:0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background:"rgba(0,0,0,0.85)", backdropFilter:"blur(8px)" }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale:0.88, opacity:0 }}
                animate={{ scale:1, opacity:1 }}
                exit={{ scale:0.88, opacity:0 }}
                transition={{ type:"spring", damping:20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-md w-full relative overflow-hidden"
                style={{
                  background:"#242424",
                  border:"1px solid #00A651",
                  borderRadius:"20px",
                  boxShadow:"0 0 40px rgba(0,166,81,0.3)",
                }}
              >
                {/* Fechar */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full transition-colors"
                  style={{ background:"rgba(0,0,0,0.5)", border:"1px solid #444", width:32, height:32, color:"#fff" }}
                >
                  <X size={15} />
                </button>

                {/* Imagem modal */}
                <div className="w-full h-52 overflow-hidden" style={{ borderRadius:"20px 20px 0 0" }}>
                  {!imgErrors[selected.id] ? (
                    <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3"
                      style={{ background: selected.fallbackGradient }}>
                      <selected.CategoryIcon size={56} style={{ color:"#00A651" }} />
                      <span style={{ color:"#C0C2C0", fontSize:"13px" }}>{selected.category}</span>
                    </div>
                  )}
                  {/* Linha verde embaixo da imagem */}
                  <div style={{ height:"2px", background:"linear-gradient(90deg, transparent, #00A651, transparent)" }} />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background:"rgba(0,166,81,0.12)", color:"#00A651", border:"1px solid rgba(0,166,81,0.3)" }}
                    >
                      {selected.category}
                    </span>
                    {selected.badge && (
                      <span
                        className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full"
                        style={{
                          background: badgeConfig[selected.badge].bg,
                          border: `1px solid ${badgeConfig[selected.badge].border}`,
                          color: badgeConfig[selected.badge].text,
                        }}
                      >
                        {(() => { const Icon = badgeConfig[selected.badge].icon; return <Icon size={10} />; })()}
                        {badgeConfig[selected.badge].label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color:"#fff" }}>{selected.name}</h3>
                  <p className="text-sm mb-5" style={{ color:"#999", lineHeight:1.6 }}>{selected.description}</p>

                  <div className="flex items-baseline gap-3 mb-5">
                    <p className="text-2xl font-bold" style={{ color:"#00A651" }}>{selected.price}</p>
                    {selected.oldPrice && (
                      <p className="text-sm line-through" style={{ color:"#555" }}>{selected.oldPrice}</p>
                    )}
                  </div>

                  <a
                    href={`https://wa.me/5511999999999?text=Olá! Tenho interesse no produto: ${selected.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-all duration-300"
                    style={{
                      background:"#00A651",
                      color:"#fff",
                      boxShadow:"0 0 20px rgba(0,166,81,0.5)",
                      letterSpacing:"0.03em",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 32px rgba(0,166,81,0.8)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,166,81,0.5)")}
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
}
