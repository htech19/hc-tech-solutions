export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: "Mais Vendido" | "Lançamento" | "Oferta" | "Premium";
}

export const products: Product[] = [
  // ÁUDIO & PERFORMANCE
  { id: "kd799", name: "Fone Kaidi KD-799 TWS Crystal Audio", category: "Áudio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Mais Vendido" },
  { id: "kdg1", name: "Fone Gamer Kaidi KD-G1 Low Latency", category: "Áudio", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Premium" },
  { id: "kd7102", name: "Fone Kaidi KD-7102 Smart Touch V5.3", category: "Áudio", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400", badge: "Lançamento" },
  
  // ENERGIA & CARREGAMENTO
  { id: "kd922", name: "Power Bank Kaidi 20.000mAh Ultra Fast", category: "Energia", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },
  { id: "kd671a", name: "Carregador 20W PD Turbo Edition", category: "Energia", image: "https://images.unsplash.com/photo-1625517406127-7c1f23c9ceb1?q=80&w=400" },
  
  // GAMER & PERIFÉRICOS
  { id: "lef1211", name: "Headset Lehmox LEF-1211 Pro Surround", category: "Gamer", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400", badge: "Premium" },
  { id: "lef1210", name: "Fone Gamer LEF-1210 RGB X-Series", category: "Gamer", image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?q=80&w=400" },

  // SOM & AMBIENTE
  { id: "kd850", name: "Caixa de Som Kaidi KD-850 Bluetooth Pro", category: "Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "boombox", name: "Boombox Eletromex 50W Extreme Bass", category: "Som", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400", badge: "Oferta" }
];

export const categories = ["Áudio", "Gamer", "Energia", "Som"];
