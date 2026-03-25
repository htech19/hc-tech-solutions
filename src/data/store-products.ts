export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: "Mais Vendido" | "Lançamento" | "Premium" | "Novo" | "Oferta" | "Entrega Rápida";
}

export const products: Product[] = [
  // FONES
  { id: "fone-kd-790", name: "Fone Bluetooth KD-790", category: "Fones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Mais Vendido" },
  { id: "fone-kd-788", name: "Fone Bluetooth KD-788", category: "Fones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: "fone-knc-4219", name: "Fone Bluetooth Knc-4219", category: "Fones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: "headphone-kd-750", name: "Headphone Bluetooth KD-750", category: "Fones", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400" },
  { id: "headset-kd-632", name: "Headset Gamer Kaidi KD-632", category: "Fones", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400", badge: "Entrega Rápida" },
  { id: "fone-le-366b", name: "Fone Bluetooth LE-366B", category: "Fones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400" },
  { id: "fone-p9", name: "Fone Bluetooth P9", category: "Fones", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400" },
  { id: "fone-kd-799", name: "Fone Kaidi KD-799 TWS Crystal Audio", category: "Fones", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Novo" },
  { id: "fone-gamer-kdg1", name: "Fone Gamer Kaidi KD-G1 Low Latency", category: "Fones", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Entrega Rápida" },
  { id: "headset-lef-1211", name: "Headset Lehmox LEF-1211 Pro Surround", category: "Fones", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400" },

  // CABOS
  { id: "cabo-v8-2m", name: "Cabo USB V8 2 Metros", category: "Cabos", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400" },
  { id: "cabo-tipo-c", name: "Cabo USB Tipo-C", category: "Cabos", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400" },
  { id: "cabo-lightning", name: "Cabo Lightning", category: "Cabos", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400" },
  { id: "cabo-hdmi-5m", name: "Cabo HDMI 5 Metros", category: "Cabos", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=400" },

  // CARREGADORES
  { id: "carregador-rapido-c", name: "Carregador Rápido Tipo-C", category: "Carregadores", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400" },
  { id: "carregador-turbo-c", name: "Carregador Turbo Tipo-C", category: "Carregadores", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },
  { id: "carregador-iphone", name: "Carregador iPhone Lightning", category: "Carregadores", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400" },

  // POWER BANK
  { id: "pb-5000", name: "Power Bank 5000mAh", category: "Power Bank", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400" },
  { id: "pb-10000", name: "Power Bank 10000mAh", category: "Power Bank", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400" },
  { id: "pb-20000", name: "Power Bank 20000mAh Kaidi Ultra Fast", category: "Power Bank", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },

  // CAIXAS DE SOM
  { id: "som-kd-850", name: "Caixa de Som Kaidi KD-850 Bluetooth", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "som-kd-833", name: "Caixa de Som KD-833", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "boombox-50w", name: "Boombox 50W", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400", badge: "Premium" },

  // PERIFÉRICOS
  { id: "teclado-gamer-rgb", name: "Teclado Gamer RGB", category: "Periféricos", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400" },
  { id: "mouse-com-fio", name: "Mouse com Fio", category: "Periféricos", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400" },
  { id: "kit-teclado-mouse", name: "Kit Teclado + Mouse", category: "Periféricos", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=400", badge: "Oferta" },

  // SMARTWATCH
  { id: "smartwatch-kw51", name: "Smartwatch KW51", category: "Smartwatch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" },
  { id: "smartwatch-s10-pro", name: "Smartwatch S10 Pro", category: "Smartwatch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400", badge: "Lançamento" },

  // ARMAZENAMENTO
  { id: "ssd-nvme-1tb", name: "SSD NVMe 1TB Kingston NV2", category: "Armazenamento", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400", badge: "Mais Vendido" },

  // ASSISTÊNCIA
  { id: "manutencao-limpeza", name: "Limpeza + Pasta Térmica Silver", category: "Assistência", image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=400", badge: "Novo" },
  { id: "reparo-placa-mae", name: "Reparo de Placa Mãe (Micro-soldagem)", category: "Assistência", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400" },

  // PROTEÇÃO
  { id: "pelicula-ceramica-9d", name: "Película de Cerâmica 9D Privativa", category: "Proteção", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=400" },
];

export const categories = Array.from(new Set(products.map(p => p.category)));
