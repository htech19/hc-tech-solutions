export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: "Entrega Rápida" | "Mais Vendido" | "Novo" | "Oferta";
}

export const products: Product[] = [
  // --- ITENS DO SEU TXT/CSV ---
  { id: "kd799", name: "Fone Kaidi KD-799 TWS Crystal Audio", category: "Áudio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Entrega Rápida" },
  { id: "kdg1", name: "Fone Gamer Kaidi KD-G1 Low Latency", category: "Áudio", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Entrega Rápida" },
  { id: "kd922", name: "Power Bank Kaidi 20.000mAh Ultra Fast", category: "Energia", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },
  { id: "1", name: "SSD NVMe 1TB Kingston NV2", category: "Armazenamento", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400", badge: "Mais Vendido" },
  { id: "2", name: "Limpeza + Pasta Térmica Silver (Manutenção)", category: "Assistência", image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=400", badge: "Novo" },
  { id: "10", name: "Reparo de Placa Mãe (Micro-soldagem)", category: "Assistência", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400", badge: "Novo" },
  { id: "lef1211", name: "Headset Lehmox LEF-1211 Pro Surround", category: "Gamer", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400" },
  { id: "11", name: "Película de Cerâmica 9D Privativa", category: "Proteção", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=400" },
  { id: "kd850", name: "Caixa de Som Kaidi KD-850 Bluetooth", category: "Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" }
];

export const categories = Array.from(new Set(products.map(p => p.category)));
