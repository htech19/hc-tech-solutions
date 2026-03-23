// 1. Definição de Tipos
export type ProductBadge = "Novo" | "Oferta" | "+Vendido";
export type ProductStatus = "Disponível" | "Indisponível";

export const categories = [
  "Capas & Proteção",
  "Películas",
  "Fones & Áudio",
  "Carregadores & Cabos",
  "Armazenamento",
  "Periféricos & Informática",
  "Impressão",
  "Smartwatches & Wearables",
  "Suportes & Organização",
] as const;

export type Category = typeof categories[number];

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number | "Indisponível"; // Preço como Indisponível se não definido
  originalPrice?: number;
  badge?: ProductBadge;
  image: string;
  description: string;
  compatibility?: string;
  status: ProductStatus;
}

// 2. Base de Dados de Produtos
export const products: Product[] = [
  // --- CAPAS & PROTEÇÃO ---
  {
    id: "capa-anti-impacto-a55",
    name: "Capa Anti-Impacto Samsung Galaxy A55",
    category: "Capas & Proteção",
    price: 34.9,
    badge: "+Vendido",
    image: "",
    description: "Capa anti-impacto com bordas reforçadas e proteção militar. Material TPU flexível com acabamento fosco anti-impressão digital.",
    compatibility: "Samsung Galaxy A55",
    status: "Disponível"
  },
  {
    id: "capa-magsafe-iphone15pro",
    name: "Capa MagSafe iPhone 15 Pro",
    category: "Capas & Proteção",
    price: 79.9,
    badge: "Novo",
    image: "",
    description: "Capa com ímãs MagSafe integrados. Compatível com carregamento wireless e acessórios magnéticos.",
    compatibility: "iPhone 15 Pro",
    status: "Disponível"
  },
  {
    id: "capa-premium-indisponivel",
    name: "Capa Couro Legítimo S24 Ultra",
    category: "Capas & Proteção",
    price: "Indisponível",
    image: "",
    description: "Acabamento premium em couro legítimo com interior em microfibra.",
    compatibility: "Samsung S24 Ultra",
    status: "Indisponível"
  },

  // --- FONES & ÁUDIO ---
  {
    id: "fone-tws-anc",
    name: "Fone TWS Bluetooth 5.3 com ANC",
    category: "Fones & Áudio",
    price: 89.9,
    badge: "+Vendido",
    image: "",
    description: "Cancelamento ativo de ruído (ANC), Bluetooth 5.3 e 30h de bateria total.",
    status: "Disponível"
  },
  {
    id: "headset-gamer-havit",
    name: "Headset Gamer Havit Fuxi-H3",
    category: "Fones & Áudio",
    price: 199.9,
    badge: "Novo",
    image: "",
    description: "Wireless dual-mode (2.4GHz + Bluetooth) com drivers de 50mm e memory foam.",
    status: "Disponível"
  },

  // --- CARREGADORES ---
  {
    id: "carregador-65w-gan",
    name: "Carregador Turbo 65W GaN USB-C",
    category: "Carregadores & Cabos",
    price: 89.9,
    badge: "+Vendido",
    image: "",
    description: "Tecnologia GaN de alta eficiência. Carrega notebooks e smartphones simultaneamente.",
    status: "Disponível"
  },

  // --- SMARTWATCHES ---
  {
    id: "pulseira-xiaomi-band8",
    name: "Pulseira Inteligente Xiaomi Band 8",
    category: "Smartwatches & Wearables",
    price: 179.9,
    badge: "+Vendido",
    image: "",
    description: "Tela AMOLED 1.62'', 150+ modos esportivos e bateria de longa duração.",
    status: "Disponível"
  },
  {
    id: "smartwatch-premium-esgotado",
    name: "Apple Watch Series 9 (Mock)",
    category: "Smartwatches & Wearables",
    price: "Indisponível",
    image: "",
    description: "Monitoramento avançado de saúde e integração total com ecossistema iOS.",
    status: "Indisponível"
  }
];
